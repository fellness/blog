/*xuexb_blog - v0.1.0 - 2015-06-14  01:06:35*/
"use strict";var App={};App.error_msg=function(a){return this.assign("errmsg",a),this.assign("back_url",this.referer()),this.display("Home:index:error")},App.success_msg=function(a){return this.assign("errmsg",a),this.assign("back_url",this.referer()),this.display("Home:index:success")},App.init=function(a){var b=this,c=[];return b["super"]("init",a),b.__set_nav(),b.assign("title","前端小武--前端开发小武专注计算机基础和WEB前端开发知识"),b.assign("keywords","前端小武  谢耀武  小武  计算机基础   前端开发"),b.assign("description","谢耀武，网名前端小武，喜欢各种折腾, 喜欢研究源, 对美好的代码有极强的透视症, 崇尚有强烈技术氛围的UED..."),a.setHeader("Author","fe_xiaowu@gmail.com"),c.push(b.__get_list_data()),c.push(b.__get_new_article()),c.push(b.__hot_search()),c.push(b.session("user_name")),Promise.all(c).then(function(a){var c=parseInt(b.get("auto")||b.cookie("auto"),10)||0;return b.assign("auto",c),b.cookie("auto",c),b.user_name=a[3],b.assign("user_name",a[3]),b.assign("LIST",a[0]),b.LIST=a[0],b.assign("new_article",a[1]),b.assign("hot_search",a[2]),b.assign("view_search",""),b.assign("links",!1),b.assign("key",""),b.assign("Url",Url),b.assign("ui-auto",b.cookie("ui-auto")),a})},App.__set_nav=function(a,b){var c=this;return c.assign("nav_list_id",b),c.assign("nav_type",a||"home"),c},App.__get_new_article=function(a){return D("article").order("id DESC").limit(a||10).cache(!0).field("title, url, id").select()},App.__hot_search=function(a){return D("search").order("hit DESC").limit(a||10).cache(!0).field("name, hit").select()},App.__get_list_data=function(){return D("List").get({cache:!0})},App.__call=function(a){return this.__404Action.call(this,a)},App.__404Action=function(){return this.status(404),this.http.getHeader("user-agent").toLowerCase().match(/applewebkit.*mobile.*/)?this.action("Touch:index:__404"):this.display(VIEW_PATH+"/Home/index_404.html")},App.__get_list=function(a){return a=a||{},a.field=a.field||"id, title, list_id, url, update_date, hit, markdown_content_list",D("Article").get(a).then(function(b){var c=a.isPage?b.data:b,d=[],e=D("List");return 0===c.length?b:(c.forEach(function(a){d.push(e.get({cache:!0,one:!0,where:{id:a.list_id}})),a.update_date=Date.elapsedDate(a.update_date,"yyyy-M-d")}),Promise.all(d).then(function(a){return c.forEach(function(b,c){b.list_data=a[c]}),b}).then(function(){return b}))})},module.exports=Controller(function(){return App});