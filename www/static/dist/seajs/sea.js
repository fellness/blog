/*blog-static - v0.0.2 - 2015-12-04 16:12:29*/
!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return B++}function e(a){return a.match(E)[0]}function f(a){for(a=a.replace(F,"/");a.match(G);)a=a.replace(G,"/");return a=a.replace(H,"$1/")}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function h(a){var b=v.alias;return b&&x(b[a])?b[a]:a}function i(a){var b,c=v.paths;return c&&(b=a.match(I))&&x(c[b[1]])&&(a=c[b[1]]+b[2]),a}function j(a){var b=v.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(J,function(a,c){return x(b[c])?b[c]:a})),a}function k(a){var b=v.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=z(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(K.test(a))c=a;else if("."===d)c=f((b?e(b):v.cwd)+a);else if("/"===d){var g=v.cwd.match(L);c=g?g[0]+a.substring(1):a}else c=v.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c,d){var e=V.test(a),f=M.createElement(e?"link":"script");c&&(f.charset=c),A(d)||f.setAttribute("crossorigin",d),p(f,b,e,a),e?(f.rel="stylesheet",f.href=a):(f.async=!0,f.src=a),R=f,U?T.insertBefore(f,U):T.appendChild(f),R=null}function p(a,b,c,d){function e(){a.onload=a.onerror=a.onreadystatechange=null,c||v.debug||T.removeChild(a),a=null,b()}var f="onload"in a;return!c||!W&&f?void(f?(a.onload=e,a.onerror=function(){D("error",{uri:d,node:a}),e()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&e()}):void setTimeout(function(){q(a,b)},1)}function q(a,b){var c,d=a.sheet;if(W)d&&(c=!0);else if(d)try{d.cssRules&&(c=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(c=!0)}setTimeout(function(){c?b():q(a,b)},20)}function r(){if(R)return R;if(S&&"interactive"===S.readyState)return S;for(var a=T.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return S=c}}function s(a){var b=[];return a.replace(Z,"").replace(Y,function(a,c,d){d&&b.push(d)}),b}function t(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var u=a.seajs={version:"2.2.3"},v=u.data={},w=c("Object"),x=c("String"),y=Array.isArray||c("Array"),z=c("Function"),A=c("Undefined"),B=0,C=v.events={};u.on=function(a,b){var c=C[a]||(C[a]=[]);return c.push(b),u},u.off=function(a,b){if(!a&&!b)return C=v.events={},u;var c=C[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete C[a];return u};var D=u.emit=function(a,b){var c,d=C[a];if(d)for(d=d.slice();c=d.shift();)c(b);return u},E=/[^?#]*\//,F=/\/\.\//g,G=/\/[^\/]+\/\.\.\//,H=/([^:\/])\/\//g,I=/^([^\/:]+)(\/.+)$/,J=/{([^{]+)}/g,K=/^\/\/.|:\//,L=/^.*?\/\/.*?\//,M=document,N=e(M.URL),O=M.scripts,P=M.getElementById("seajsnode")||O[O.length-1],Q=e(n(P)||N);u.resolve=m;var R,S,T=M.head||M.getElementsByTagName("head")[0]||M.documentElement,U=T.getElementsByTagName("base")[0],V=/\.css(?:\?|$)/i,W=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/,"$1")<536;u.request=o;var X,Y=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,Z=/\\\\/g,$=u.cache={},_={},aa={},ba={},ca=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.load=function(){var a=this;if(!(a.status>=ca.LOADING)){a.status=ca.LOADING;var b=a.resolve();D("load",b);for(var c,d=a._remain=b.length,e=0;d>e;e++)c=t.get(b[e]),c.status<ca.LOADED?c._waitings[a.uri]=(c._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return void a.onload();var f={};for(e=0;d>e;e++)c=$[b[e]],c.status<ca.FETCHING?c.fetch(f):c.status===ca.SAVED&&c.load();for(var g in f)f.hasOwnProperty(g)&&f[g]()}},t.prototype.onload=function(){var a=this;a.status=ca.LOADED,a.callback&&a.callback();var b,c,d=a._waitings;for(b in d)d.hasOwnProperty(b)&&(c=$[b],c._remain-=d[b],0===c._remain&&c.onload());delete a._waitings,delete a._remain},t.prototype.fetch=function(a){function b(){u.request(f.requestUri,f.onRequest,f.charset,f.crossorigin)}function c(){delete _[g],aa[g]=!0,X&&(t.save(e,X),X=null);var a,b=ba[g];for(delete ba[g];a=b.shift();)a.load()}var d=this,e=d.uri;d.status=ca.FETCHING;var f={uri:e};D("fetch",f);var g=f.requestUri||e;return!g||aa[g]?void d.load():_[g]?void ba[g].push(d):(_[g]=!0,ba[g]=[d],D("request",f={uri:e,requestUri:g,onRequest:c,charset:z(v.charset)?v.charset(g):v.charset,crossorigin:z(v.crossorigin)?v.crossorigin(g):v.crossorigin}),void(f.requested||(a?a[f.requestUri]=b:b())))},t.prototype.exec=function(){function a(b){return t.get(a.resolve(b)).exec()}var c=this;if(c.status>=ca.EXECUTING)return c.exports;c.status=ca.EXECUTING;var e=c.uri;a.resolve=function(a){return t.resolve(a,e)},a.async=function(b,c){return t.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=z(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=ca.EXECUTED,D("exec",c),g},t.resolve=function(a,b){var c={id:a,refUri:b};return D("resolve",c),c.uri||u.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,y(a)?(c=a,a=b):c=b),!y(c)&&z(d)&&(c=s(d.toString()));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!f.uri&&M.attachEvent){var g=r();g&&(f.uri=g.src)}D("define",f),f.uri?t.save(f.uri,f):X=f},t.save=function(a,b){var c=t.get(a);c.status<ca.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=ca.SAVED)},t.get=function(a,b){return $[a]||($[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,y(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=$[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.preload=function(a){var b=v.preload,c=b.length;c?t.use(b,function(){b.splice(0,c),t.preload(a)},v.cwd+"_preload_"+d()):a()},u.use=function(a,b){return t.preload(function(){t.use(a,b,v.cwd+"_use_"+d())}),u},t.define.cmd={},a.define=t.define,u.Module=t,v.fetchedList=aa,v.cid=d,u.require=function(a){var b=t.get(t.resolve(a));return b.status<ca.EXECUTING&&(b.onload(),b.exec()),b.exports};var da=/^(.+?\/)(\?\?)?(seajs\/)+/;v.base=(Q.match(da)||["",Q])[1],v.dir=Q,v.cwd=N,v.charset="utf-8",v.preload=function(){var a=[],b=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return b+=" "+M.cookie,b.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),u.config=function(a){for(var b in a){var c=a[b],d=v[b];if(d&&w(d))for(var e in c)d[e]=c[e];else y(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),v[b]=c}return D("config",a),u}}}(this),function(){var a,b=document.getElementById("seajsnode");b&&(a=b.href,a=a.substr(a.indexOf("?")),seajs.config({map:[function(b){return b+a}]}))}();