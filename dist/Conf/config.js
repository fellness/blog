/*xuexb_blog - v0.1.0 - 2015-06-14  00:06:30*/
"use strict";var config={list_mark:"{__list__}",view_page:"{{view_page}}",user_info:{user_name:"thinkjs",user_pass:"thinkjs"},static_type:"dist",static_url:"/static/",static_version:new Date-0,dist:function(a,b){return C("static_url")+C("static_type")+"/"+a+(b?"":"?"+C("static_version"))},res:function(a,b){return C("static_url")+"res/"+a+(b?"":"?"+C("static_version"))},port:8899,url_resource_reg:/^(static\/|favicon\.ico|robots\.txt)/,app_group_list:["Home","Touch"],call_controller:"Home:index:__404",url_params_bind:!1,error_no_key:"errcode",db_type:"mysql",db_host:"www.xuexb.com",db_port:"3306",db_name:"xxx",db_user:"xxx",db_pwd:"xxx",db_prefix:"",db_charset:"utf8",db_fields_cache:!0,db_cache_on:!0,db_cache_type:"File"};module.exports=require("./environment")(config);