/*xuexb_blog - v0.1.0 - 2015-06-14  00:06:30*/
"use strict";var App={};App.init=function(a){var b=this,c=[];return b["super"]("init",a),b.assign("nav_list_id",""),b.assign("nav_list_name","全部文章"),b.assign("key",""),c.push(b.__get_list_data()),Promise.all(c).then(function(a){return b.assign("LIST",a[0]),a})},App.__get_list_data=function(){return D("List").get({cache:!0})},App.__call=function(a){return this.__404Action(a)},App.__404Action=function(){return this.status(404),this.display(VIEW_PATH+"/Touch/404.html")},App.__get_list=function(a){return a=a||{},a.field=a.field||"id, title, list_id, url, update_date, hit, markdown_content_list",D("Article").get(a).then(function(b){var c=a.isPage?b.data:b,d=[],e=D("List");return 0===c.length?b:(c.forEach(function(a){d.push(e.get({cache:!0,one:!0,where:{id:a.list_id}})),a.update_date=Date.elapsedDate(a.update_date,"yyyy-M-d")}),Promise.all(d).then(function(a){return c.forEach(function(b,c){b.list_data=a[c]}),b}).then(function(){return b}))})},module.exports=Controller(function(){return App});