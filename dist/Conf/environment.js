"use strict";var hostname=require("os").hostname(),data=require("./environment.json");module.exports=function(a){var b,c;if(data.forEach(function(a){Array.isArray(a.name)||(a.name=[a.name]),a.name.indexOf(hostname)>-1&&(b=a.config)}),b)try{c=require("./"+b),Object.keys(c).forEach(function(b){a[b]=c[b]})}catch(d){}return a};