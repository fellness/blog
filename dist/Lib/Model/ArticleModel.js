/*xuexb_blog - v0.0.1 - 2015-05-31  22:05:52*/
module.exports=Model(function(){"use strict";return{get:function(a){var b,c=this;return a=extend({page:1,limit:10,order:"id DESC",isPage:!1,cache:!1,where:null,field:"id, title, list_id, url, update_date, hit, content, markdown_content, markdown_content_list, catalog",one:!1},a||{}),b=c.field(a.field),a.one||("all"!==a.limit&&b.page(a.page,a.limit),b.order(a.order)),a.where&&b.where(a.where),a.cache&&b.cache(!0),a.isPage?b.countSelect({}):a.one?b.find():b.select()}}});