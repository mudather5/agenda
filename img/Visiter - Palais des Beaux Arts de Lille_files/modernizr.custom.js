/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csscolumns-csstransitions-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return!!~(""+e).indexOf(n)}function u(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?u(o,t||n):o);return!1}function c(){var e=n.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,s,a,f,u="modernizr",d=l("div"),p=c();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),d.appendChild(a);return i=l("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):d.parentNode.removeChild(d),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function a(){d&&(delete T.style,delete T.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,c,p,v,h,y=["modernizr","tspan"];!T.style;)d=!0,T.modElem=l(y.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(v=e[c],h=T.style[v],f(v,"-")&&(v=s(v)),T.style[v]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?v:!0;try{T.style[v]=o}catch(g){}if(T.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+k.join(s+" ")+s).split(" "),d(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],S={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];S._prefixes=w;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",k=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=k;var E=function(e,n){var t=!1,r=l("div"),o=r.style;if(e in o){var i=k.length;for(o[e]=n,t=o[e];i--&&!t;)o[e]="-"+k[i]+"-"+n,t=o[e]}return""===t&&(t=!1),t};S.prefixedCSSValue=E;var P=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=P;var z=function(n){var r,o=w.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=w[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=z;var R={elem:l("modernizr")};Modernizr._q.push(function(){delete R.elem});var T={style:R.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=h;var N=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};S.prefixedCSS=function(e){var n=N(e);return n&&a(n)};S.testAllProps=y,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=y("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=y("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||y(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(g),delete S.addTest,delete S.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);