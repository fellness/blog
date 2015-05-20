/*xuexb_blog - v0.0.1 - 2015-05-20  22:05:06*/
"use strict";var App={};App.no_login=["login"],App.createToken=function(a){return a?md5("xuexb"+a):""},App.logoutAction=function(){var a=this;return a.session("user_name",null).then(function(){return a.cookie("token",null),a.success_msg("退出成功")})},App.user_set_sessionAction=function(a,b){var c,d=this;return"cookie"!==b&&(c=d.createToken(a),d.cookie("token",c,{timeout:b?31536e3:0}),d.cookie("user_name",a,{timeout:31536e3})),d.session("user_name",a).then(function(){return a})},App.user_loginAction=function(a,b){var c=this;return a!==(F("user_info")||{}).user_name?null:c.user_set_sessionAction(a,b).then(function(){return a})},App.user_checkAction=function(){var a=this;return a.user_name?getPromise(a.user_name):a.session("user_name").then(function(b){var c,d;return void 0===b&&(c=a.cookie("user_name"),d=a.cookie("token"),d&&c&&d===a.createToken(c))?a.user_loginAction(c,"cookie"):b})},App.get_list_content=function(a){var b,c=a.indexOf(C("list_mark"));return c>-1?b=a.substr(0,c):a.length<300?b=a:(b=a.substr(0,300),(b.match(/```/g)||[]).length%2===1&&(b+="```")),require("marked")(xss_html(b))},App.editArticleAction=function(){var a=this,b=parseInt(a.get("id"),10)||0;return b?D("Article").get({where:{id:b},field:"id, title, content, update_date, hit, list_id, url",one:!0}).then(function(b){return isEmpty(b)?a.error_msg("没有该文章"):(b.update_date=Date.elapsedDate(b.update_date,"yyyy-M-d"),a.assign("data",b),a.assign("type","edit"),a.assign("title","修改文章_学习吧"),a.display())}):a.error_msg("ID为空")},App.updateArticleAction=function(){var a,b,c,d,e,f,g=this,h="create";return g.isPost()?(d=g.post(),b=parseInt(g.get("id"),10)||0,b&&(h="edit"),d.hit=parseInt(d.hit.trim(),10)||0,d.url=d.url.trim(),d.title=d.title.trim(),d.list_id=parseInt(d.list_id,10)||0,""===d.title?g.error_msg("标题为空"):d.list_id?""===d.content?g.error_msg("内容为空"):(a=require("marked"),c=d.content.replace(new RegExp(C("list_mark"),"g"),""),e=new a.Renderer,e.heading=function(a,b){var c=encodeURIComponent(a);return"<h"+b+'><a name="anchor-'+c+'" class="anchor" href="#anchor-'+c+'"><span class="header-link"></span></a>'+a+"</h"+b+">"},d.markdown_content=a(xss_html(c),{renderer:e}),f=[],c=d.markdown_content.split(C("view_page")),c.forEach(function(a,b){var c=a.match(/<h([23])><a name\=\"anchor\-(.+?)\"/g)||[];c.forEach(function(a){var c=a.match(/<h([23])><a name\=\"anchor\-(.+?)\"/);c&&("2"===c[1]?f.push('<li><a href="?page='+(b+1)+"#anchor-"+c[2]+'">'+decodeURIComponent(c[2])+"</a></li>"):f.push('<li class="child"><a href="?page='+(b+1)+"#anchor-"+c[2]+'">'+decodeURIComponent(c[2])+"</a></li>")),c=null}),c=null}),f.length&&(d.catalog='<div class="article-detail-sidebar"><ul>'+f.join("")+"</ul></div>",f=null),d.markdown_content_list=App.get_list_content(d.content.replace(new RegExp(C("view_page"),"g"),"")),d.update_date=new Date-0,"create"===h?(d.create_date=d.update_date,c={title:d.title,_logic:"OR"},d.url&&(c.url=d.url),D("Article").thenAdd(d,c,!0).then(function(a){return"add"!==a.type?g.error_msg("文章标题或者链接已存在"):g.success_msg("创建成功")})["catch"](function(){return g.error_msg("创建失败")})):D("Article").where({id:b}).update(d).then(function(){return g.success_msg("保存成功")})["catch"](function(){return g.error_msg("保存失败")})):g.error_msg("分类为空")):g.__404Action()},App.delArticleAction=function(){var a,b=this,c=parseInt(b.get("id"),10)||0;return c?(a=[],a.push(D("Article").where({id:c})["delete"]()),a.push(D("TagsIndex").where({article_id:c})["delete"]()),Promise.all(a).then(function(){return b.success_msg("删除成功")})["catch"](function(a){return console.log(a),b.error_msg("删除失败")})):b.__404Action()},App.createArticleAction=function(){var a=this;return a.assign("data",{}),a.assign("type","create"),a.display("Home:admin:editarticle")},App.loginAction=function(){var a=this;return a.isPost()?a.loginPost():(a.assign("title","登录_学习吧"),a.display())},App.loginPost=function(){var a,b=this,c=b.post("user_name"),d=b.post("user_pass"),e=!!b.post("auto");return c?c.length<5?b.error_msg("用户名不能少于5位"):d?d.length<6?b.error_msg("密码不能少于6位"):(a=F("user_info"),c!==a.user_name||d!==a.user_pass?b.error_msg("用户名或者密码错误"):b.user_loginAction(c,e).then(function(a){return isEmpty(a)?b.error_msg("登录失败"):b.success_msg("登录成功！")})):b.error_msg("密码不能为空"):b.error_msg("用户名不能为空")},App.indexAction=function(){var a=this;return a.display()},App.__before=function(){var a=this;return App.no_login.indexOf(a.http.action)>-1?a:a.user_checkAction().then(function(b){return isEmpty(b)?a.redirect(Url.admin.login()):(a.user_name=b,a.assign("user_name",b),a)})},App.createSitemapAction=function(){var a=this,b=[];return b.push(D("List").get({cache:!0,field:"url, name"})),b.push(D("Article").get({limit:150,cache:!0,field:"id, url, update_date, title, markdown_content_list"})),b.push(D("Search").get({cache:!0,field:"name",limit:10})),Promise.all(b).then(function(b){var c={};return c.home={title:"学习吧",url:"http://www.xuexb.com"},c.list=b[0],c.article=b[1],c.search=b[2],App.createXml(c),App.createTxt(c),App.createHtml(c),App.createRss(c),a.success_msg("生成成功！")})},App.createXml=function(a){var b=[],c=require("fs"),d=require("path"),e=Date.formatDate(new Date,"yyyy-MM-dd");b.push('<?xml version="1.0" encoding="UTF-8"?>'),b.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'),b.push("<url>"),b.push("<loc>"+a.home.url+"</loc>"),b.push("<lastmod>"+e+"</lastmod>"),b.push("<changefreq>always</changefreq>"),b.push("<priority>1.0</priority>"),b.push("</url>"),a.list.forEach(function(c){b.push("<url>"),b.push("<loc>"+a.home.url+Url.article.list(c.id,c.url)+"</loc>"),b.push("<lastmod>"+e+"</lastmod>"),b.push("<changefreq>always</changefreq>"),b.push("<priority>0.9</priority>"),b.push("</url>")}),a.article.forEach(function(c){b.push("<url>"),b.push("<loc>"+a.home.url+Url.article.view(c.id,c.url)+"</loc>"),b.push("<lastmod>"+Date.formatDate(c.update_date,"yyyy-MM-dd")+"</lastmod>"),b.push("<changefreq>always</changefreq>"),b.push("<priority>0.8</priority>"),b.push("</url>")}),a.search.forEach(function(c){b.push("<url>"),b.push("<loc>"+a.home.url+Url.article.search(c.name)+"</loc>"),b.push("<lastmod>"+e+"</lastmod>"),b.push("<changefreq>always</changefreq>"),b.push("<priority>0.7</priority>"),b.push("</url>")}),b.push("</urlset>"),c.writeFileSync(d.resolve(APP_PATH,"../www/sitemap.xml"),b.join("\n"))},App.createRss=function(a){var b=[],c=require("fs"),d=require("path"),e=Date.formatDate(new Date,"yyyy-MM-dd");b.push('<?xml version="1.0" encoding="UTF-8"?>'),b.push('<rss version="2.0">'),b.push("<channel>"),b.push("<title>"+a.home.title+"</title>"),b.push("<link>"+a.home.url+"</link>"),b.push("<description>专注计算机基础知识，web前端发展</description>"),b.push("<language>zh-cn</language>"),b.push("<generator>谢亮</generator>"),b.push("<pubDate>2011-09-11</pubDate>"),b.push("<lastBuildDate>"+e+"</lastBuildDate>"),a.article.length=50,a.article.forEach(function(c){b.push("<item>"),b.push("<link>"+a.home.url+Url.article.view(c.id,c.url)+"</link>"),b.push("<pubDate>"+Date.formatDate(c.update_date,"yyyy-MM-dd")+"</pubDate>"),b.push("<title>"+c.title+"</title>"),b.push("<author>谢亮</author>"),b.push("<description><![CDATA["+c.markdown_content_list+"]]></description>"),b.push("</item>")}),b.push("</channel></rss>"),c.writeFileSync(d.resolve(APP_PATH,"../www/rss.xml"),b.join("\n"))},App.createTxt=function(a){var b=[],c=require("fs"),d=require("path");b.push(a.home.url),a.list.forEach(function(c){b.push(a.home.url+Url.article.list(c.id,c.url))}),a.article.forEach(function(c){b.push(a.home.url+Url.article.view(c.id,c.url))}),a.search.forEach(function(c){b.push(a.home.url+Url.article.search(c.name))}),c.writeFileSync(d.resolve(APP_PATH,"../www/sitemap.txt"),b.join("\n"))},App.createHtml=function(a){var b=[],c=require("fs"),d=require("path"),e=function(a,b){return'<li><a href="'+a+'">'+b+"</a></li>"};b.push('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>网站地图_学习吧</title></head><body>'),b.push("<h1>网站地图</h1>","<p>生成于 "+Date.formatDate(new Date,"yyyy-MM-dd HH:m:ss")+"</p>"),b.push(e(a.home.url,a.home.title)),b.push(e("/rss.xml","rss订阅")),b.push(e("/sitemap.xml","XML地图")),a.list.forEach(function(c){b.push(e(a.home.url+Url.article.list(c.id,c.url),c.name))}),a.article.forEach(function(c){b.push(e(a.home.url+Url.article.view(c.id,c.url),c.title))}),a.search.forEach(function(c){b.push(e(a.home.url+Url.article.search(c.name),"搜索 "+c.name))}),b.push("</body></html>"),c.writeFileSync(d.resolve(APP_PATH,"../www/sitemap.html"),b.join("\n"))},App.updateAction=function(){var a=this,b=require("child_process");return b.exec("git pull",function(b,c){return console.log(b,c),a.success_msg("更新成功")})},module.exports=Controller("Home/BaseController",function(){return App});