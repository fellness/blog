/*xuexb_blog - v0.0.1 - 2015-05-20  22:05:06*/
"use strict";global.Url={},Url.article={all:function(a){return"/all/"+(a?a+"/":"")},view:function(a,b,c){return b&&(a=b),"/html/"+a+".html"+(c?"?page="+c:"")},list:function(a,b,c){return b&&(a=b),"/list/"+a+"/"+(c?c+"/":"")},search:function(a,b){return"/search/"+a+"/"+(b?b+"/":"")},create:function(){return"/admin/article/create"},edit:function(a){return"/admin/article/edit?id="+a},del:function(a){return"/admin/article/del?id="+a}},Url.admin={login:function(){return"/admin/login"}},Url.tags={list:function(a,b,c){return b&&(a=b),"/tags/"+a+"/"+(c?c+"/":"")},index:function(){return"/tags/"}},Date.elapsedDate=function(a,b){var c,d=(new Date-a)/1e3;return c=10>d?"刚刚":60>d?Math.round(d)+"秒前":3600>d?Math.round(d/60)+"分钟前":86400>d?Math.round(d/3600)+"小时前":Date.formatDate(a,b)},Date.formatDate=function(a,b){var c,d;b=b||"yyyy-M-d h:m:s",a?a instanceof Date||(a=new Date(a)):a=new Date,c={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours()%12===0?12:a.getHours()%12,"H+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),S:a.getMilliseconds()},/(y+)/i.test(b)&&(b=b.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(d in c)new RegExp("("+d+")").test(b)&&(b=b.replace(RegExp.$1,1===RegExp.$1.length?c[d]:("00"+c[d]).substr((""+c[d]).length)));return b},global.get_page=function(a,b){a=a||{},b=String(b);var c=function(a){return b.replace(/{\$page}/g,a)},d="",e=parseInt(a.page,10)||1,f=1,g=parseInt(a.total,10)||0;if(g>1){if(d+=e>1?'<a href="'+c(e-1)+'">上一页</a>':'<span class="disabled">上一页</span>',7>g)for(f;g>=f;f++)d+=e===f?'<span class="current">'+f+"</span>":'<a href="'+c(f)+'">'+f+"</a>";else{var h,i;d+=1===e?'<span class="current">1</span>':'<a href="'+c(1)+'">1</a>',e>4&&(d+='<span class="dot">...</span>'),h=5>e?1:e-2,i=e>g-4?g:e+3;for(var j=h;i>j;j++)1!==j&&j!==g&&(d+=j===e?'<span class="current">'+j+"</span>":'<a href="'+c(j)+'">'+j+"</a>");g-4>e&&(d+='<span class="dot">...</span>'),d+=e===g?'<span class="current">'+g+"</span>":'<a href="'+c(g)+'">'+g+"</a>",h=i=null}d+=g>e?'<a href="'+c(e+1)+'">下一页</a>':'<span class="disabled">下一页</span>',d='<div class="ui-page mt20">'+d+"</div>"}return d},global.xss_html=function(a){var b,c,d=[];for(a=String(a),a=a.replace(/(```|`)([\s\S]+?)(\1)/g,function(a){return"```"+(d.push(a)-1)+"```"}),a=a.replace(/<[^>]*?>/g,""),b=0,c=d.length;c>b;b++)a=a.replace("```"+b+"```",d[b]);return b=c=d=null,a},global.each=function(a,b,c){var d,e=0,f=a.length,g=Array.isArray(a);if(c){if(g)for(;f>e&&(d=b.apply(a[e],c),d!==!1);e++);else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g)for(;f>e&&(d=b.call(a[e],e,a[e]),d!==!1);e++);else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a};