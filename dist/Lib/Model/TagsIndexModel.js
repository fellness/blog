/*xuexb_blog - v0.0.1 - 2015-05-31  22:05:52*/
module.exports=Model(function(){"use strict";return{get:function(a){var b,c=this;return a=extend({page:1,limit:10,order:"article_id DESC",isPage:!1,cache:!1,where:null,field:"article_id, tags_id",one:!1},a||{}),b=c.field(a.field),a.one||("all"!==a.limit&&b.page(a.page,a.limit),b.order(a.order)),a.where&&b.where(a.where),a.cache&&b.cache(!0),a.isPage?b.countSelect({},!1):a.one?b.find():b.select()}}});