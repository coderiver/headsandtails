/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.options.arrows===!0&&(c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove())),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);
/*
 *	jQuery dotdotdot 1.7.4
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
﻿/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},resync:function(){var d=this;$('.'+this._getMarker()).each(function(){var a=$.data(this,d.name);if(a.options.serverSync){var b=null;for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][0]==a.options.serverSync){b=d._serverSyncs[i];break}}if(b[2]==null){var c=($.isFunction(a.options.serverSync)?a.options.serverSync.apply(this,[]):null);b[2]=(c?new Date().getTime()-c.getTime():0)-b[1]}if(a._since){a._since.setMilliseconds(a._since.getMilliseconds()+b[2])}a._until.setMilliseconds(a._until.getMilliseconds()+b[2])}});for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][2]!=null){d._serverSyncs[i][1]+=d._serverSyncs[i][2];delete d._serverSyncs[i][2]}}},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){d=this._serverSyncs[i][1];break}}if(d!=null){var e=(b.options.serverSync?d:0);var f=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);var f=new Date();var e=(g?f.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-f.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,f));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);
// threejs.org/license
'use strict';var THREE={REVISION:"72"};"function"===typeof define&&define.amd?define("three",THREE):"undefined"!==typeof exports&&"undefined"!==typeof module&&(module.exports=THREE);
void 0!==self.requestAnimationFrame&&void 0!==self.cancelAnimationFrame||function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),g=Math.max(0,16-(c-a)),f=self.setTimeout(function(){b(c+
g)},g);a=c+g;return f});void 0===self.cancelAnimationFrame&&void 0!==self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})}();void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&void 0!==Object.defineProperty&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}});THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;
THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;
THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.NeverDepth=0;THREE.AlwaysDepth=1;THREE.LessDepth=2;THREE.LessEqualDepth=3;
THREE.EqualDepth=4;THREE.GreaterEqualDepth=5;THREE.GreaterDepth=6;THREE.NotEqualDepth=7;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;
THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;
THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&(d-=1);return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=THREE.Math.euclideanModulo(b,1);c=THREE.Math.clamp(c,0,1);d=THREE.Math.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){var b=function(b){b=parseFloat(b);1>b&&console.warn("THREE.Color: Alpha component of color "+a+" will be ignored.");return b},c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,this;break;case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/
255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[4]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[4]),this;break;case "hsl":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d)){var d=parseFloat(c[1]),e=parseInt(c[2],10)/100,g=parseInt(c[3],10)/100;return this.setHSL(d,e,g)}break;case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return d=
parseFloat(c[1]),e=parseInt(c[2],10)/100,g=parseInt(c[3],10)/100,b(c[4]),this.setHSL(d,e,g)}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){b=c[1];c=b.length;if(3===c)return this.r=parseInt(b.charAt(0)+b.charAt(0),16)/255,this.g=parseInt(b.charAt(1)+b.charAt(1),16)/255,this.b=parseInt(b.charAt(2)+b.charAt(2),16)/255,this;if(6===c)return this.r=parseInt(b.charAt(0)+b.charAt(1),16)/255,this.g=parseInt(b.charAt(2)+b.charAt(3),16)/255,this.b=parseInt(b.charAt(4)+b.charAt(5),16)/255,this}a&&0<a.length&&(b=THREE.ColorKeywords[a],
void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),g=Math.min(b,c,d),f,h=(g+e)/2;if(g===e)g=f=0;else{var k=e-g,g=.5>=h?k/(e+g):
k/(2-e-g);switch(e){case b:f=(c-d)/k+(c<d?6:0);break;case c:f=(d-b)/k+2;break;case d:f=(b-c)/k+4}f/=6}a.h=f;a.s=g;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+
2]=this.b;return a}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},
copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),g=Math.sin(a._x/2),f=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=g*d*e+c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e-g*f*h):"YXZ"===
k?(this._x=g*d*e+c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e+g*f*h):"ZXY"===k?(this._x=g*d*e-c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e-g*f*h):"ZYX"===k?(this._x=g*d*e-c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e+g*f*h):"YZX"===k?(this._x=g*d*e+c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e-g*f*h):"XZY"===k&&(this._x=g*d*e-c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e+g*f*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],g=b[5],f=b[9],h=b[2],k=b[6],b=b[10],l=c+g+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-f)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>g&&c>b?(c=2*Math.sqrt(1+c-g-b),this._w=(k-f)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):g>b?(c=2*Math.sqrt(1+g-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(f+k)/c):(c=2*Math.sqrt(1+b-c-g),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(f+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,g=a._w,f=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+g*f+d*k-e*h;this._y=d*l+g*h+e*f-c*k;this._z=e*l+g*k+c*h-d*f;this._w=g*l-c*f-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,g=this._w,f=g*a._w+c*a._x+d*a._y+e*a._z;0>f?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,f=-f):this.copy(a);if(1<=f)return this._w=g,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(f),k=Math.sqrt(1-f*f);if(.001>Math.abs(k))return this._w=.5*(g+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;f=Math.sin((1-b)*h)/k;h=
Math.sin(b*h)/k;this._w=g*f+this._w*h;this._x=c*f+this._x*h;this._y=d*f+this._y*h;this._z=e*f+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},
copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=
a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===
this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,
b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),
applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},
applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,g=a.y,f=a.z;a=a.w;var h=a*b+g*d-f*c,k=a*c+f*b-e*d,l=a*d+e*c-g*b,b=-e*b-g*c-f*d;this.x=h*a+b*-e+k*-f-l*-g;this.y=k*a+b*-g+l*-e-h*-f;this.z=l*a+b*-f+h*-g-k*-e;return this},project:function(){var a;return function(b){void 0===
a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=
a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&
(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,g=b.x,f=b.y,h=b.z;this.x=d*h-e*f;this.y=e*g-c*h;this.z=c*f-d*g;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);
return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=
a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=
a.array[b+2];return this}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=
a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var g=a[8],f=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-f)&&.01>Math.abs(g-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+f)&&.1>Math.abs(g+c)&&.1>
Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+f)/4;g=(g+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=g/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=g/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(g-c)*(g-c)+(f-d)*(f-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(g-c)/a;this.z=(f-d)/a;this.w=Math.acos((e+h+l-1)/
2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,
b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);
return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},
length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,
c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=
a.array[b+3];return this}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,
this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var g=e[4],f=e[8],h=e[1],k=e[5],l=e[9],n=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-g,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?
(this._y=Math.atan2(f,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-n,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-n,e),this._z=Math.atan2(-g,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(n,-1,1)),.99999>Math.abs(n)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-g,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,a)):(this._x=
0,this._y=Math.atan2(f,e))):"XZY"===b?(this._z=Math.asin(-d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(p,k),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-l,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,
b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+
3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},
at:function(a,b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);
return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var g=e.vertices,e=0,f=g.length;e<f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(g=e.attributes.position.array,e=0,f=g.length;e<f;e+=3)a.set(g[e],g[e+1],g[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,g,f,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=g;l[2]=f;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===
a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],k=a[7],a=a[8];return b*g*a-b*f*k-c*e*a+c*f*h+d*e*k-d*g*h},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]}};THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,g,f,h,k,l,n,p,m,q,t,r){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=g;u[9]=f;u[13]=h;u[2]=k;u[6]=l;u[10]=n;u[14]=p;u[3]=m;u[7]=q;u[11]=t;u[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);var c=this.elements;b=b.elements;var d=1/a.set(b[0],
b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),g=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*g;c[9]=b[9]*g;c[10]=b[10]*g;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,g=Math.cos(c),c=Math.sin(c),f=Math.cos(d),d=Math.sin(d),h=Math.cos(e),
e=Math.sin(e);if("XYZ"===a.order){a=g*h;var k=g*e,l=c*h,n=c*e;b[0]=f*h;b[4]=-f*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*f;b[2]=n-a*d;b[6]=l+k*d;b[10]=g*f}else"YXZ"===a.order?(a=f*h,k=f*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=g*d,b[1]=g*e,b[5]=g*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,b[10]=g*f):"ZXY"===a.order?(a=f*h,k=f*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-g*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=g*h,b[9]=n-a*c,b[2]=-g*d,b[6]=c,b[10]=g*f):"ZYX"===a.order?(a=g*h,k=g*e,l=c*h,n=c*e,b[0]=f*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=f*e,b[5]=
n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*f,b[10]=g*f):"YZX"===a.order?(a=g*f,k=g*d,l=c*f,n=c*d,b[0]=f*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=g*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=g*f,k=g*d,l=c*f,n=c*d,b[0]=f*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=g*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,g=a.w,f=c+c,h=d+d,k=e+e;a=c*f;var l=c*h,c=c*k,n=d*h,d=d*k,e=e*k,f=g*f,h=g*h,g=g*k;b[0]=1-(n+e);b[4]=l-g;b[8]=c+h;b[1]=l+g;b[5]=1-(a+e);b[9]=d-f;b[2]=c-h;b[6]=d+f;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,g){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Vector3);void 0===c&&(c=new THREE.Vector3);
var f=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(g,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(g,c).normalize());b.crossVectors(c,a);f[0]=a.x;f[4]=b.x;f[8]=c.x;f[1]=a.y;f[5]=b.y;f[9]=c.y;f[2]=a.z;f[6]=b.z;f[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,
b){var c=a.elements,d=b.elements,e=this.elements,g=c[0],f=c[4],h=c[8],k=c[12],l=c[1],n=c[5],p=c[9],m=c[13],q=c[2],t=c[6],r=c[10],u=c[14],w=c[3],v=c[7],B=c[11],c=c[15],x=d[0],H=d[4],I=d[8],z=d[12],D=d[1],G=d[5],O=d[9],C=d[13],F=d[2],K=d[6],L=d[10],E=d[14],J=d[3],y=d[7],P=d[11],d=d[15];e[0]=g*x+f*D+h*F+k*J;e[4]=g*H+f*G+h*K+k*y;e[8]=g*I+f*O+h*L+k*P;e[12]=g*z+f*C+h*E+k*d;e[1]=l*x+n*D+p*F+m*J;e[5]=l*H+n*G+p*K+m*y;e[9]=l*I+n*O+p*L+m*P;e[13]=l*z+n*C+p*E+m*d;e[2]=q*x+t*D+r*F+u*J;e[6]=q*H+t*G+r*K+u*y;e[10]=
q*I+t*O+r*L+u*P;e[14]=q*z+t*C+r*E+u*d;e[3]=w*x+v*D+B*F+c*J;e[7]=w*H+v*G+B*K+c*y;e[11]=w*I+v*O+B*L+c*P;e[15]=w*z+v*C+B*E+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=
a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(a.x,
a.y,a.z);return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],g=a[1],f=a[5],h=a[9],k=a[13],l=a[2],n=a[6],p=a[10],m=a[14];return a[3]*(+e*h*n-d*k*
n-e*f*p+c*k*p+d*f*m-c*h*m)+a[7]*(+b*h*m-b*k*p+e*g*p-d*g*m+d*k*l-e*h*l)+a[11]*(+b*k*n-b*f*m-e*g*n+c*g*m+e*f*l-c*k*l)+a[15]*(-d*f*l-b*h*n+b*f*p+d*g*n-c*g*p+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=
c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a;return function(){void 0===a&&(a=new THREE.Vector3);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=
this.elements,d=a.elements,e=d[0],g=d[4],f=d[8],h=d[12],k=d[1],l=d[5],n=d[9],p=d[13],m=d[2],q=d[6],t=d[10],r=d[14],u=d[3],w=d[7],v=d[11],d=d[15];c[0]=n*r*w-p*t*w+p*q*v-l*r*v-n*q*d+l*t*d;c[4]=h*t*w-f*r*w-h*q*v+g*r*v+f*q*d-g*t*d;c[8]=f*p*w-h*n*w+h*l*v-g*p*v-f*l*d+g*n*d;c[12]=h*n*q-f*p*q-h*l*t+g*p*t+f*l*r-g*n*r;c[1]=p*t*u-n*r*u-p*m*v+k*r*v+n*m*d-k*t*d;c[5]=f*r*u-h*t*u+h*m*v-e*r*v-f*m*d+e*t*d;c[9]=h*n*u-f*p*u-h*k*v+e*p*v+f*k*d-e*n*d;c[13]=f*p*m-h*n*m+h*k*t-e*p*t-f*k*r+e*n*r;c[2]=l*r*u-p*q*u+p*m*w-k*r*
w-l*m*d+k*q*d;c[6]=h*q*u-g*r*u-h*m*w+e*r*w+g*m*d-e*q*d;c[10]=g*p*u-h*l*u+h*k*w-e*p*w-g*k*d+e*l*d;c[14]=h*l*m-g*p*m-h*k*q+e*p*q+g*k*r-e*l*r;c[3]=n*q*u-l*t*u-n*m*w+k*t*w+l*m*v-k*q*v;c[7]=g*t*u-f*q*u+f*m*w-e*t*w-g*m*v+e*q*v;c[11]=f*l*u-g*n*u-f*k*w+e*n*w+g*k*v-e*l*v;c[15]=g*n*m-f*l*m+f*k*q-e*n*q-g*k*t+e*l*t;c=e*c[0]+k*c[4]+m*c[8]+u*c[12];if(0===c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=
this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,
0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,g=a.x,f=a.y,h=a.z,k=e*g,l=e*f;this.set(k*g+c,k*f-d*h,k*h+d*f,0,k*f+d*h,l*f+c,l*h-d*g,0,k*h-d*f,l*h+d*g,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,
0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Matrix4);var g=this.elements,f=a.set(g[0],g[1],g[2]).length(),h=a.set(g[4],g[5],g[6]).length(),k=a.set(g[8],g[9],g[10]).length();0>this.determinant()&&(f=-f);c.x=g[12];c.y=g[13];c.z=g[14];b.elements.set(this.elements);c=1/f;var g=1/h,l=1/k;b.elements[0]*=
c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=g;b.elements[5]*=g;b.elements[6]*=g;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=f;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,g){var f=this.elements;f[0]=2*e/(b-a);f[4]=0;f[8]=(b+a)/(b-a);f[12]=0;f[1]=0;f[5]=2*e/(d-c);f[9]=(d+c)/(d-c);f[13]=0;f[2]=0;f[6]=0;f[10]=-(g+e)/(g-e);f[14]=-2*g*e/(g-e);f[3]=0;f[7]=0;f[11]=-1;f[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*
a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,g){var f=this.elements,h=b-a,k=c-d,l=g-e;f[0]=2/h;f[4]=0;f[8]=0;f[12]=-((b+a)/h);f[1]=0;f[5]=2/k;f[9]=0;f[13]=-((c+d)/k);f[2]=0;f[6]=0;f[10]=-2/l;f[14]=-((g+e)/l);f[3]=0;f[7]=0;f[11]=0;f[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,
b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),
distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,g,f){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),n=-c.dot(b),p=c.lengthSq(),m=Math.abs(1-k*k),q;0<m?(d=k*n-l,e=k*l-n,q=h*m,0<=d?e>=-q?e<=q?(h=1/m,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*n)+p):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*n)+p):(e=-h,d=Math.max(0,-(k*e+l)),
k=-d*d+e*(e+2*n)+p):e<=-q?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-n),h),k=-d*d+e*(e+2*n)+p):e<=q?(d=0,e=Math.min(Math.max(-h,-n),h),k=e*(e+2*n)+p):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-n),h),k=-d*d+e*(e+2*n)+p)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*n)+p);g&&g.copy(this.direction).multiplyScalar(d).add(this.origin);f&&f.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=
new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,g=b.radius*b.radius;if(e>g)return null;g=Math.sqrt(g-e);e=d-g;d+=g;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+
a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,g,f;d=1/this.direction.x;g=1/this.direction.y;f=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=g?(e=(a.min.y-h.y)*g,g*=a.max.y-h.y):(e=(a.max.y-h.y)*g,g*=a.min.y-
h.y);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;0<=f?(e=(a.min.z-h.z)*f,f*=a.max.z-h.z):(e=(a.max.z-h.z)*f,f*=a.min.z-h.z);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,g,f,h,k){b.subVectors(g,e);c.subVectors(f,e);d.crossVectors(b,c);g=this.direction.dot(d);if(0<g){if(h)return null;h=1}else if(0>g)h=-1,
g=-g;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;f=h*this.direction.dot(b.cross(a));if(0>f||e+f>g)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/g,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};
THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,g=0,f=b.length;g<f;g++)e=Math.max(e,d.distanceToSquared(b[g]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},
empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));
return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}};
THREE.Frustum=function(a,b,c,d,e,g){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==g?g:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,g){var f=this.planes;f[0].copy(a);f[1].copy(b);f[2].copy(c);f[3].copy(d);f[4].copy(e);f[5].copy(g);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],g=c[3],f=c[4],h=c[5],k=c[6],l=c[7],n=c[8],p=c[9],m=c[10],q=c[11],t=c[12],r=c[13],u=c[14],
c=c[15];b[0].setComponents(g-a,l-f,q-n,c-t).normalize();b[1].setComponents(g+a,l+f,q+n,c+t).normalize();b[2].setComponents(g+d,l+h,q+p,c+r).normalize();b[3].setComponents(g-d,l-h,q-p,c-r).normalize();b[4].setComponents(g-e,l-k,q-m,c-u).normalize();b[5].setComponents(g+e,l+k,q+m,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);
return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var g=d[e];a.x=0<g.normal.x?c.min.x:c.max.x;b.x=0<g.normal.x?c.max.x:c.min.x;a.y=0<g.normal.y?c.min.y:c.max.y;b.y=0<g.normal.y?c.max.y:c.min.y;a.z=0<g.normal.z?c.min.z:c.max.z;b.z=0<g.normal.z?c.max.z:c.min.z;
var f=g.distanceToPoint(a),g=g.distanceToPoint(b);if(0>f&&0>g)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,
b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),g=this.normal.dot(e);if(0===g){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return g=
-(b.start.dot(this.normal)+this.constant)/g,0>g||1<g?void 0:d.copy(e).multiplyScalar(g).add(b.start)}}(),coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var g=e||c.getNormalMatrix(d),g=a.copy(this.normal).applyMatrix3(g),f=this.coplanarPoint(b);f.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(g,f);return this}}(),translate:function(a){this.constant-=
a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+
(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,g,f){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*f+(-3*(b-c)-2*a-d)*g+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,g,f,h,k,l,n,p,m;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;g=Math.floor(e);f=e-g;c[0]=0===g?g:g-1;c[1]=g;c[2]=g>this.points.length-2?this.points.length-1:g+1;c[3]=g>this.points.length-3?this.points.length-1:g+
2;l=this.points[c[0]];n=this.points[c[1]];p=this.points[c[2]];m=this.points[c[3]];h=f*f;k=f*h;d.x=b(l.x,n.x,p.x,m.x,f,h,k);d.y=b(l.y,n.y,p.y,m.y,f,h,k);d.z=b(l.z,n.z,p.z,m.z,f,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,g=new THREE.Vector3,f=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;g.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),f.copy(d),k+=f.distanceTo(g),g.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,g,f,h=[],k=new THREE.Vector3,m=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=m.chunks[b]-m.chunks[b-1];f=Math.ceil(a*c/m.total);e=(b-1)/(this.points.length-1);g=b/(this.points.length-1);for(c=1;c<f-1;c++)d=e+1/f*c*(g-e),d=this.getPoint(d),
h.push(k.copy(d).clone());h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,g,f,h){a.subVectors(f,e);b.subVectors(g,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);g=a.dot(c);var k=b.dot(b);f=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0===l)return h.set(-2,-1,-1);l=1/l;k=(k*g-e*f)*l;d=(d*f-e*g)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,
this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},
equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){function b(a,b){return a.distance-b.distance}a.Raycaster=function(b,c,g,f){this.ray=new a.Ray(b,c);this.near=g||0;this.far=f||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})};var c=function(a,b,g,f){if(!1!==a.visible&&(a.raycast(b,g),!0===f)){a=a.children;f=0;for(var h=a.length;f<h;f++)c(a[f],
b,g,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?(this.ray.origin.setFromMatrixPosition(c.matrixWorld),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(this.ray.origin).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},
intersectObject:function(a,e){var g=[];c(a,this,g,e);g.sort(b);return g},intersectObjects:function(a,e){var g=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),g;for(var f=0,h=a.length;f<h;f++)c(a[f],this,g,e);g.sort(b);return g}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new THREE.Matrix4},normalMatrix:{value:new THREE.Matrix3}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=THREE.Object3D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};
THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);THREE.Object3D.DefaultMatrixAutoUpdate=!0;
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
set renderDepth(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},
rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,
c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=
new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);
return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a instanceof THREE.Object3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),
this.children.splice(b,1))},getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=
a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=
new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=
this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);"{}"!==JSON.stringify(this.userData)&&(d.userData=
this.userData);!0!==this.visible&&(d.visible=this.visible);d.matrix=this.matrix.toArray();if(0<this.children.length){d.children=[];for(var e=0;e<this.children.length;e++)d.children.push(this.children[e].toJSON(a).object)}e={};if(c){var c=b(a.geometries),g=b(a.materials),f=b(a.textures);a=b(a.images);0<c.length&&(e.geometries=c);0<g.length&&(e.materials=g);0<f.length&&(e.textures=f);0<a.length&&(e.images=a)}e.object=d;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,
b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.rotationAutoUpdate=a.rotationAutoUpdate;this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;
this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(a,b,c,d,e,g){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=Array.isArray(d)?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==g?g:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};
THREE.Face4=function(a,b,c,d,e,g,f){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,g,f)};THREE.BufferAttribute=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.itemSize=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length},get count(){return this.array.length/this.itemSize},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;
c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),g=new THREE.Color);b[c++]=g.r;b[c++]=g.g;b[c++]=g.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];b[c++]=g.a;b[c++]=g.b;b[c++]=
g.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),g=new THREE.Vector2);b[c++]=g.x;b[c++]=g.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),g=new THREE.Vector3);b[c++]=g.x;b[c++]=g.y;b[c++]=g.z}return this},
copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),g=new THREE.Vector4);b[c++]=g.x;b[c++]=g.y;b[c++]=g.z;b[c++]=g.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},
setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,
b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return(new this.constructor).copy(this)}};THREE.Int8Attribute=function(a,b){return new THREE.BufferAttribute(new Int8Array(a),b)};THREE.Uint8Attribute=function(a,b){return new THREE.BufferAttribute(new Uint8Array(a),b)};THREE.Uint8ClampedAttribute=function(a,b){return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)};
THREE.Int16Attribute=function(a,b){return new THREE.BufferAttribute(new Int16Array(a),b)};THREE.Uint16Attribute=function(a,b){return new THREE.BufferAttribute(new Uint16Array(a),b)};THREE.Int32Attribute=function(a,b){return new THREE.BufferAttribute(new Int32Array(a),b)};THREE.Uint32Attribute=function(a,b){return new THREE.BufferAttribute(new Uint32Array(a),b)};THREE.Float32Attribute=function(a,b){return new THREE.BufferAttribute(new Float32Array(a),b)};
THREE.Float64Attribute=function(a,b){return new THREE.BufferAttribute(new Float64Array(a),b)};THREE.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new THREE.BufferAttribute(a,b)).setDynamic(!0)};THREE.InstancedBufferAttribute=function(a,b,c){THREE.BufferAttribute.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor=THREE.InstancedBufferAttribute;THREE.InstancedBufferAttribute.prototype.copy=function(a){THREE.BufferAttribute.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBuffer=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.stride=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.InterleavedBuffer.prototype={constructor:THREE.InterleavedBuffer,get length(){return this.array.length},get count(){return this.array.length/this.stride},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.stride=a.stride;this.dynamic=a.dynamic},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,
b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)}};THREE.InstancedInterleavedBuffer=function(a,b,c){THREE.InterleavedBuffer.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedInterleavedBuffer.prototype=Object.create(THREE.InterleavedBuffer.prototype);THREE.InstancedInterleavedBuffer.prototype.constructor=THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy=function(a){THREE.InterleavedBuffer.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.data=a;this.itemSize=b;this.offset=c};
THREE.InterleavedBufferAttribute.prototype={constructor:THREE.InterleavedBufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length},get count(){return this.data.array.length/this.data.stride},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+
2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;
return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,g=a.vertexNormals.length;e<g;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
this.verticesNeedUpdate=!0},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);
a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){var b=this,c=null!==a.index?a.index.array:void 0,d=a.attributes,e=d.position.array,g=void 0!==d.normal?d.normal.array:void 0,f=void 0!==
d.color?d.color.array:void 0,h=void 0!==d.uv?d.uv.array:void 0,k=void 0!==d.uv2?d.uv2.array:void 0;void 0!==k&&(this.faceVertexUvs[1]=[]);for(var l=[],n=[],p=[],m=d=0;d<e.length;d+=3,m+=2)b.vertices.push(new THREE.Vector3(e[d],e[d+1],e[d+2])),void 0!==g&&l.push(new THREE.Vector3(g[d],g[d+1],g[d+2])),void 0!==f&&b.colors.push(new THREE.Color(f[d],f[d+1],f[d+2])),void 0!==h&&n.push(new THREE.Vector2(h[m],h[m+1])),void 0!==k&&p.push(new THREE.Vector2(k[m],k[m+1]));var q=function(a,c,d){var e=void 0!==
g?[l[a].clone(),l[c].clone(),l[d].clone()]:[],m=void 0!==f?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[],e=new THREE.Face3(a,c,d,e,m);b.faces.push(e);void 0!==h&&b.faceVertexUvs[0].push([n[a].clone(),n[c].clone(),n[d].clone()]);void 0!==k&&b.faceVertexUvs[1].push([p[a].clone(),p[c].clone(),p[d].clone()])};if(void 0!==c)if(e=a.groups,0<e.length)for(d=0;d<e.length;d++)for(var m=e[d],t=m.start,r=m.count,m=t,t=t+r;m<t;m+=3)q(c[m],c[m+1],c[m+2]);else for(d=0;d<c.length;d+=3)q(c[d],c[d+
1],c[d+2]);else for(d=0;d<e.length/3;d+=3)q(d,d+1,d+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new THREE.Matrix4;c.set(b,
0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],g=this.vertices[e.a],f=this.vertices[e.b];a.subVectors(this.vertices[e.c],f);b.subVectors(g,f);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,g,f,h=
new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],g=this.vertices[c.b],f=this.vertices[c.c],h.subVectors(f,g),k.subVectors(e,g),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?
(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone())},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=
e.vertexNormals[a].clone();var g=new THREE.Geometry;g.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var f=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),f.push(k)}f=this.morphNormals[a];g.vertices=this.morphTargets[a].vertices;
g.computeFaceNormals();g.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=f.faceNormals[c],k=f.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){for(var a=
0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
a);else{var d,e=this.vertices.length,g=this.vertices,f=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var n=0,p=f.length;n<p;n++){var m=f[n].clone();void 0!==b&&m.applyMatrix4(b);g.push(m)}n=0;for(p=k.length;n<p;n++){var f=k[n],q,t=f.vertexNormals,r=f.vertexColors,m=new THREE.Face3(f.a+e,f.b+e,f.c+e);m.normal.copy(f.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(g=t.length;b<
g;b++)q=t[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),m.vertexNormals.push(q);m.color.copy(f.color);b=0;for(g=r.length;b<g;b++)q=r[b],m.vertexColors.push(q.clone());m.materialIndex=f.materialIndex+c;h.push(m)}n=0;for(p=a.length;n<p;n++)if(c=a[n],d=[],void 0!==c){b=0;for(g=c.length;b<g;b++)d.push(c[b].clone());l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),
this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),g,f;g=0;for(f=this.vertices.length;g<f;g++)d=this.vertices[g],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=g,b.push(this.vertices[g]),c[g]=b.length-1):c[g]=c[a[d]];a=[];g=0;for(f=this.faces.length;g<f;g++)for(e=this.faces[g],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(g);break}for(g=a.length-1;0<=g;g--)for(e=a[g],this.faces.splice(e,
1),c=0,f=this.faceVertexUvs.length;c<f;c++)this.faceVertexUvs[c].splice(e,1);g=this.vertices.length-b.length;this.vertices=b;return g},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=n.length;n.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+
a.y.toString();if(void 0!==q[b])return q[b];q[b]=m.length/2;m.push(a.x,a.y);return q[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var g=this.parameters,f;for(f in g)void 0!==g[f]&&(e[f]=g[f]);return e}g=[];for(f=0;f<this.vertices.length;f++){var h=this.vertices[f];g.push(h.x,h.y,h.z)}var h=[],k=[],l={},n=[],p={},m=[],q={};for(f=0;f<this.faces.length;f++){var t=this.faces[f],
r=void 0!==this.faceVertexUvs[0][f],u=0<t.normal.length(),w=0<t.vertexNormals.length,v=1!==t.color.r||1!==t.color.g||1!==t.color.b,B=0<t.vertexColors.length,x=0,x=a(x,0,0),x=a(x,1,!1),x=a(x,2,!1),x=a(x,3,r),x=a(x,4,u),x=a(x,5,w),x=a(x,6,v),x=a(x,7,B);h.push(x);h.push(t.a,t.b,t.c);r&&(r=this.faceVertexUvs[0][f],h.push(d(r[0]),d(r[1]),d(r[2])));u&&h.push(b(t.normal));w&&(u=t.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));v&&h.push(c(t.color));B&&(t=t.vertexColors,h.push(c(t[0]),c(t[1]),c(t[2])))}e.data=
{};e.data.vertices=g;e.data.normals=k;0<n.length&&(e.data.colors=n);0<m.length&&(e.data.uvs=[m]);e.data.faces=h;return e},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=
[]);for(var e=0,g=b.length;e<g;e++){for(var f=b[e],h=[],k=0,l=f.length;k<l;k++)h.push(f[k].clone());this.faceVertexUvs[c].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.DirectGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="DirectGeometry";this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.DirectGeometry.prototype={constructor:THREE.DirectGeometry,computeBoundingBox:THREE.Geometry.prototype.computeBoundingBox,computeBoundingSphere:THREE.Geometry.prototype.computeBoundingSphere,computeFaceNormals:function(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")},computeVertexNormals:function(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")},computeGroups:function(a){var b,c=[],
d;a=a.faces;for(var e=0;e<a.length;e++){var g=a[e];g.materialIndex!==d&&(d=g.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,g=d[1]&&0<d[1].length,f=a.morphTargets,h=f.length;if(0<h){for(var k=[],l=0;l<h;l++)k[l]=[];this.morphTargets.position=k}var n=a.morphNormals,p=n.length;if(0<p){for(var m=[],l=0;l<p;l++)m[l]=
[];this.morphTargets.normal=m}for(var q=a.skinIndices,t=a.skinWeights,r=q.length===c.length,u=t.length===c.length,l=0;l<b.length;l++){var w=b[l];this.vertices.push(c[w.a],c[w.b],c[w.c]);var v=w.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=w.normal,this.normals.push(v,v,v));v=w.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=w.color,this.colors.push(v,v,v));!0===e&&(v=d[0][l],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
l),this.uvs.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));!0===g&&(v=d[1][l],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));for(v=0;v<h;v++){var B=f[v].vertices;k[v].push(B[w.a],B[w.b],B[w.c])}for(v=0;v<p;v++)B=n[v].vertexNormals[l],m[v].push(B.a,B.b,B.c);r&&this.skinIndices.push(q[w.a],q[w.b],q[w.c]);u&&this.skinWeights.push(t[w.a],t[w.b],
t[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype);
THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute&&!1===b instanceof THREE.InterleavedBufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new THREE.BufferAttribute(b,
c))):("index"===a&&(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b)),this.attributes[a]=b)},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a]},get drawcalls(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups},get offsets(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups},addDrawCall:function(a,
b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=
b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;
return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);
return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a instanceof THREE.Points||a instanceof THREE.Line){a=new THREE.Float32Attribute(3*b.vertices.length,3);var c=new THREE.Float32Attribute(3*b.colors.length,3);this.addAttribute("position",
a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new THREE.Float32Attribute(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a instanceof THREE.Mesh&&b instanceof THREE.Geometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=
a.geometry;if(a instanceof THREE.Mesh){var c=b.__directGeometry;if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),
c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),
this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new THREE.DirectGeometry).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.normals)));
0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new THREE.BufferAttribute(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),
this.setIndex((new THREE.BufferAttribute(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,g=d.length;e<g;e++){var f=d[e],h=new THREE.Float32Attribute(3*f.length,3);b.push(h.copyVector3sArray(f))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new THREE.Float32Attribute(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new THREE.Float32Attribute(4*a.skinWeights.length,
4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.fromArray(b,d),c.expandByPoint(a)}if(void 0===
b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}(),computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;
if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,g=c.length;e<g;e+=3)b.fromArray(c,e),a.expandByPoint(b);a.center(d);for(var f=0,e=0,g=c.length;e<g;e+=3)b.fromArray(c,e),f=Math.max(f,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(f);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=
this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(d.length),3));else for(var e=b.normal.array,g=0,f=e.length;g<f;g++)e[g]=0;var e=b.normal.array,h,k,l,n=new THREE.Vector3,p=new THREE.Vector3,m=new THREE.Vector3,q=new THREE.Vector3,t=new THREE.Vector3;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var r=0,u=c.length;r<u;++r)for(g=c[r],f=g.start,h=g.count,g=f,f+=h;g<
f;g+=3)h=3*a[g+0],k=3*a[g+1],l=3*a[g+2],n.fromArray(d,h),p.fromArray(d,k),m.fromArray(d,l),q.subVectors(m,p),t.subVectors(n,p),q.cross(t),e[h]+=q.x,e[h+1]+=q.y,e[h+2]+=q.z,e[k]+=q.x,e[k+1]+=q.y,e[k+2]+=q.z,e[l]+=q.x,e[l+1]+=q.y,e[l+2]+=q.z}else for(g=0,f=d.length;g<f;g+=9)n.fromArray(d,g),p.fromArray(d,g+3),m.fromArray(d,g+6),q.subVectors(m,p),t.subVectors(n,p),q.cross(t),e[g]=q.x,e[g+1]=q.y,e[g+2]=q.z,e[g+3]=q.x,e[g+4]=q.y,e[g+5]=q.z,e[g+6]=q.x,e[g+7]=q.y,e[g+8]=q.z;this.normalizeNormals();b.normal.needsUpdate=
!0}},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(a){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,g=a.attributes[d],f=g.array,
h=0,g=g.itemSize*b;h<f.length;h++,g++)e[g]=f[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,g=a.length;e<g;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);
return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.BufferGeometry.MaxIndex=65535;
THREE.InstancedBufferGeometry=function(){THREE.BufferGeometry.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0};THREE.InstancedBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.InstancedBufferGeometry.prototype.constructor=THREE.InstancedBufferGeometry;THREE.InstancedBufferGeometry.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,instances:c})};
THREE.InstancedBufferGeometry.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.instances)}return this};THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};
THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(){return(new this.constructor).copy(this)};
THREE.Camera.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,1);g.lookAt(new THREE.Vector3(0,1,0));this.add(g);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,-1);f.lookAt(new THREE.Vector3(0,-1,0));
this.add(f);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,m=c.generateMipmaps;c.generateMipmaps=
!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,g,c);c.activeCubeFace=3;a.render(b,f,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=m;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,g){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==g?g:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};THREE.OrthographicCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;return this};
THREE.OrthographicCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,g){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=g;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.fov=a.fov;this.aspect=a.aspect;this.near=a.near;this.far=a.far;this.zoom=a.zoom;return this};THREE.PerspectiveCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.fov=this.fov;a.object.aspect=this.aspect;a.object.near=this.near;a.object.far=this.far;return a};
THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;THREE.Light.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.color.copy(a.color);return this};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();return a};
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=
this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.target=a.target.clone();this.castShadow=a.castShadow;this.onlyShadow=a.onlyShadow;this.shadowCameraNear=a.shadowCameraNear;this.shadowCameraFar=a.shadowCameraFar;this.shadowCameraLeft=a.shadowCameraLeft;this.shadowCameraRight=a.shadowCameraRight;this.shadowCameraTop=a.shadowCameraTop;this.shadowCameraBottom=a.shadowCameraBottom;this.shadowCameraVisible=a.shadowCameraVisible;this.shadowBias=
a.shadowBias;this.shadowDarkness=a.shadowDarkness;this.shadowMapWidth=a.shadowMapWidth;this.shadowMapHeight=a.shadowMapHeight;return this};THREE.DirectionalLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;return a};
THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,1,0);this.updateMatrix();this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;THREE.HemisphereLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);this.intensity=a.intensity;return this};
THREE.HemisphereLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.groundColor=this.groundColor.getHex();a.object.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.distance=a.distance;this.decay=a.decay;return this};THREE.PointLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;a.object.distance=this.distance;a.object.decay=this.decay;return a};
THREE.SpotLight=function(a,b,c,d,e,g){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==g?g:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=
this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.distance=a.distance;this.angle=a.angle;this.exponent=a.exponent;this.decay=a.decay;this.target=a.target.clone();this.castShadow=a.castShadow;this.onlyShadow=a.onlyShadow;this.shadowCameraNear=a.shadowCameraNear;this.shadowCameraFar=a.shadowCameraFar;this.shadowCameraFov=a.shadowCameraFov;this.shadowCameraVisible=a.shadowCameraVisible;this.shadowBias=a.shadowBias;this.shadowDarkness=a.shadowDarkness;
this.shadowMapWidth=a.shadowMapWidth;this.shadowMapHeight=a.shadowMapHeight;return this};THREE.SpotLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;a.object.distance=this.distance;a.object.angle=this.angle;a.object.exponent=this.exponent;a.object.decay=this.decay;return a};
THREE.Cache={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};THREE.Loader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a;return function(b,c,d){function e(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function g(b,g,f,h,k,l,u){var w=c+f,v,B=THREE.Loader.Handlers.get(w);null!==B?v=B.load(w):(v=new THREE.Texture,
B=a,B.setCrossOrigin(d),B.load(w,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=e(a.width),c=e(a.height),d=document.createElement("canvas");d.width=b;d.height=c;d.getContext("2d").drawImage(a,0,0,b,c);v.image=d}else v.image=a;v.needsUpdate=!0}));v.sourceFile=f;h&&(v.repeat.set(h[0],h[1]),1!==h[0]&&(v.wrapS=THREE.RepeatWrapping),1!==h[1]&&(v.wrapT=THREE.RepeatWrapping));k&&v.offset.set(k[0],k[1]);l&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},
void 0!==f[l[0]]&&(v.wrapS=f[l[0]]),void 0!==f[l[1]]&&(v.wrapT=f[l[1]]));u&&(v.anisotropy=u);b[g]=v}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}void 0===d&&void 0!==this.crossOrigin&&(d=this.crossOrigin);void 0===a&&(a=new THREE.ImageLoader);var h="MeshLambertMaterial",k={};if(b.shading){var l=b.shading.toLowerCase();"phong"===l?h="MeshPhongMaterial":"basic"===l&&(h="MeshBasicMaterial")}void 0!==b.blending&&void 0!==THREE[b.blending]&&(k.blending=THREE[b.blending]);void 0!==b.transparent&&
(k.transparent=b.transparent);void 0!==b.opacity&&1>b.opacity&&(k.transparent=!0);void 0!==b.depthTest&&(k.depthTest=b.depthTest);void 0!==b.depthWrite&&(k.depthWrite=b.depthWrite);void 0!==b.visible&&(k.visible=b.visible);void 0!==b.flipSided&&(k.side=THREE.BackSide);void 0!==b.doubleSided&&(k.side=THREE.DoubleSide);void 0!==b.wireframe&&(k.wireframe=b.wireframe);void 0!==b.vertexColors&&("face"===b.vertexColors?k.vertexColors=THREE.FaceColors:b.vertexColors&&(k.vertexColors=THREE.VertexColors));
b.colorDiffuse?k.color=f(b.colorDiffuse):b.DbgColor&&(k.color=b.DbgColor);b.colorEmissive&&(k.emissive=f(b.colorEmissive));"MeshPhongMaterial"===h&&(b.colorSpecular&&(k.specular=f(b.colorSpecular)),b.specularCoef&&(k.shininess=b.specularCoef));void 0!==b.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),b.opacity=b.transparency);void 0!==b.opacity&&(k.opacity=b.opacity);c&&(b.mapDiffuse&&g(k,"map",b.mapDiffuse,b.mapDiffuseRepeat,b.mapDiffuseOffset,b.mapDiffuseWrap,
b.mapDiffuseAnisotropy),b.mapLight&&g(k,"lightMap",b.mapLight,b.mapLightRepeat,b.mapLightOffset,b.mapLightWrap,b.mapLightAnisotropy),b.mapAO&&g(k,"aoMap",b.mapAO,b.mapAORepeat,b.mapAOOffset,b.mapAOWrap,b.mapAOAnisotropy),b.mapBump&&g(k,"bumpMap",b.mapBump,b.mapBumpRepeat,b.mapBumpOffset,b.mapBumpWrap,b.mapBumpAnisotropy),b.mapNormal&&g(k,"normalMap",b.mapNormal,b.mapNormalRepeat,b.mapNormalOffset,b.mapNormalWrap,b.mapNormalAnisotropy),b.mapSpecular&&g(k,"specularMap",b.mapSpecular,b.mapSpecularRepeat,
b.mapSpecularOffset,b.mapSpecularWrap,b.mapSpecularAnisotropy),b.mapAlpha&&g(k,"alphaMap",b.mapAlpha,b.mapAlphaRepeat,b.mapAlphaOffset,b.mapAlphaWrap,b.mapAlphaAnisotropy));b.mapBumpScale&&(k.bumpScale=b.mapBumpScale);b.mapNormalFactor&&(k.normalScale=new THREE.Vector2(b.mapNormalFactor,b.mapNormalFactor));h=new THREE[h](k);void 0!==b.DbgName&&(h.name=b.DbgName);return h}}()};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,g=THREE.Cache.get(a);if(void 0!==g)return b&&setTimeout(function(){b(g)},0),g;var f=new XMLHttpRequest;f.open("GET",a,!0);f.addEventListener("load",function(c){THREE.Cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);f.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=
this.crossOrigin);void 0!==this.responseType&&(f.responseType=this.responseType);void 0!==this.withCredentials&&(f.withCredentials=this.withCredentials);f.send(null);e.manager.itemStart(a);return f},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a},setWithCredentials:function(a){this.withCredentials=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,g=THREE.Cache.get(a);if(void 0!==g)return b&&setTimeout(function(){b(g)},0),g;var f=document.createElement("img");f.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);f.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);
e.manager.itemStart(a);f.src=a;return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.withCredentials=!1};
THREE.JSONLoader.prototype={constructor:THREE.JSONLoader,get statusDomElement(){void 0===this._statusDomElement&&(this._statusDomElement=document.createElement("div"));console.warn("THREE.JSONLoader: .statusDomElement has been removed.");return this._statusDomElement},load:function(a,b,c,d){var e=this,g=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:THREE.Loader.prototype.extractUrlBase(a);c=new THREE.XHRLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.setWithCredentials(this.withCredentials);
c.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d){if("object"===d.type){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.type){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,g);b(c.geometry,c.materials)})},setCrossOrigin:function(a){this.crossOrigin=a},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new THREE.Geometry,d=void 0!==
a.scale?1/a.scale:1;(function(b){var d,f,h,k,l,n,p,m,q,t,r,u,w,v=a.faces;n=a.vertices;var B=a.normals,x=a.colors,H=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&H++;for(d=0;d<H;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=v.length;k<l;)if(b=v[k++],q=b&1,h=b&2,d=b&8,p=b&16,t=b&32,n=b&64,b&=128,q){q=new THREE.Face3;q.a=v[k];q.b=v[k+1];q.c=v[k+3];r=new THREE.Face3;r.a=v[k+1];r.b=v[k+2];r.c=
v[k+3];k+=4;h&&(h=v[k++],q.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<H;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],f=0;4>f;f++)m=v[k++],w=u[2*m],m=u[2*m+1],w=new THREE.Vector2(w,m),2!==f&&c.faceVertexUvs[d][h].push(w),0!==f&&c.faceVertexUvs[d][h+1].push(w);p&&(p=3*v[k++],q.normal.set(B[p++],B[p++],B[p]),r.normal.copy(q.normal));if(t)for(d=0;4>d;d++)p=3*v[k++],t=new THREE.Vector3(B[p++],B[p++],B[p]),2!==d&&q.vertexNormals.push(t),0!==d&&r.vertexNormals.push(t);
n&&(n=v[k++],n=x[n],q.color.setHex(n),r.color.setHex(n));if(b)for(d=0;4>d;d++)n=v[k++],n=x[n],2!==d&&q.vertexColors.push(new THREE.Color(n)),0!==d&&r.vertexColors.push(new THREE.Color(n));c.faces.push(q);c.faces.push(r)}else{q=new THREE.Face3;q.a=v[k++];q.b=v[k++];q.c=v[k++];h&&(h=v[k++],q.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<H;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],f=0;3>f;f++)m=v[k++],w=u[2*m],m=u[2*m+1],w=new THREE.Vector2(w,m),c.faceVertexUvs[d][h].push(w);p&&(p=3*v[k++],q.normal.set(B[p++],
B[p++],B[p]));if(t)for(d=0;3>d;d++)p=3*v[k++],t=new THREE.Vector3(B[p++],B[p++],B[p]),q.vertexNormals.push(t);n&&(n=v[k++],q.color.setHex(x[n]));if(b)for(d=0;3>d;d++)n=v[k++],q.vertexColors.push(new THREE.Color(x[n]));c.faces.push(q)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,f=a.skinWeights.length;d<f;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:
0));if(a.skinIndices)for(d=0,f=a.skinIndices.length;d<f;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=
a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,f,h,k,l,n;d=0;for(f=a.morphTargets.length;d<f;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var p=new THREE.Vector3;p.x=n[h]*b;p.y=n[h+1]*b;p.z=n[h+2]*b;l.push(p)}}if(void 0!==a.morphColors)for(d=0,f=a.morphColors.length;d<f;d++)for(c.morphColors[d]={},c.morphColors[d].name=
a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=THREE.Loader.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}};
THREE.LoadingManager=function(a,b,c){var d=this,e=!1,g=0,f=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++;if(!1===e&&void 0!==d.onStart)d.onStart(a,g,f);e=!0};this.itemEnd=function(a){g++;if(void 0!==d.onProgress)d.onProgress(a,g,f);if(g===f&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}};THREE.DefaultLoadingManager=new THREE.LoadingManager;
THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.index;void 0!==c&&(c=new self[c.type](c.array),b.setIndex(new THREE.BufferAttribute(c,1)));var d=a.data.attributes,e;for(e in d){var g=d[e],c=new self[g.type](g.array);
b.addAttribute(e,new THREE.BufferAttribute(c,g.itemSize))}e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,d=e.length;c!==d;++c)g=e[c],b.addGroup(g.start,g.count);a=a.data.boundingSphere;void 0!==a&&(e=new THREE.Vector3,void 0!==a.center&&e.fromArray(a.center),b.boundingSphere=new THREE.Sphere(e,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.textures={}};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},setTextures:function(a){this.textures=a},getTexture:function(a){var b=this.textures;void 0===b[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return b[a]},parse:function(a){var b=new THREE[a.type];b.uuid=a.uuid;void 0!==
a.name&&(b.name=a.name);void 0!==a.color&&b.color.setHex(a.color);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&
(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.alphaTest&&(b.alphaTest=a.alphaTest);void 0!==a.depthTest&&(b.depthTest=a.depthTest);void 0!==a.depthWrite&&(b.depthWrite=a.depthWrite);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(b.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.size&&(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=
a.sizeAttenuation);void 0!==a.map&&(b.map=this.getTexture(a.map));void 0!==a.alphaMap&&(b.alphaMap=this.getTexture(a.alphaMap),b.transparent=!0);void 0!==a.bumpMap&&(b.bumpMap=this.getTexture(a.bumpMap));void 0!==a.bumpScale&&(b.bumpScale=a.bumpScale);void 0!==a.normalMap&&(b.normalMap=this.getTexture(a.normalMap));a.normalScale&&(b.normalScale=new THREE.Vector2(a.normalScale,a.normalScale));void 0!==a.displacementMap&&(b.displacementMap=this.getTexture(a.displacementMap));void 0!==a.displacementScale&&
(b.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(b.displacementBias=a.displacementBias);void 0!==a.specularMap&&(b.specularMap=this.getTexture(a.specularMap));void 0!==a.envMap&&(b.envMap=this.getTexture(a.envMap),b.combine=THREE.MultiplyOperation);a.reflectivity&&(b.reflectivity=a.reflectivity);void 0!==a.lightMap&&(b.lightMap=this.getTexture(a.lightMap));void 0!==a.lightMapIntensity&&(b.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(b.aoMap=this.getTexture(a.aoMap));
void 0!==a.aoMapIntensity&&(b.aoMapIntensity=a.aoMapIntensity);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),
d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,g=a.length;e<g;e++){var f,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":f=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":f=
new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleBufferGeometry":f=new THREE.CircleBufferGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CircleGeometry":f=new THREE.CircleGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":f=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":f=
new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "SphereBufferGeometry":f=new THREE.SphereBufferGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":f=new THREE.DodecahedronGeometry(h.radius,h.detail);break;case "IcosahedronGeometry":f=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "OctahedronGeometry":f=new THREE.OctahedronGeometry(h.radius,
h.detail);break;case "TetrahedronGeometry":f=new THREE.TetrahedronGeometry(h.radius,h.detail);break;case "RingGeometry":f=new THREE.RingGeometry(h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":f=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":f=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "TextGeometry":f=
new THREE.TextGeometry(h.text,h.data);break;case "BufferGeometry":f=d.parse(h);break;case "Geometry":f=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}f.uuid=h.uuid;void 0!==h.name&&(f.name=h.name);b[h.uuid]=f}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new THREE.MaterialLoader;d.setTextures(b);for(var e=0,g=a.length;e<g;e++){var f=d.parse(a[e]);c[f.uuid]=f}}return c},parseImages:function(a,
b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var g=new THREE.LoadingManager(b),f=new THREE.ImageLoader(g);f.setCrossOrigin(this.crossOrigin);for(var g=0,h=a.length;g<h;g++){var k=a[g],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(l)}}return e},parseTextures:function(a,b){function c(a){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
a);return THREE[a]}var d={};if(void 0!==a)for(var e=0,g=a.length;e<g;e++){var f=a[e];void 0===f.image&&console.warn('THREE.ObjectLoader: No "image" specified for',f.uuid);void 0===b[f.image]&&console.warn("THREE.ObjectLoader: Undefined image",f.image);var h=new THREE.Texture(b[f.image]);h.needsUpdate=!0;h.uuid=f.uuid;void 0!==f.name&&(h.name=f.name);void 0!==f.mapping&&(h.mapping=c(f.mapping));void 0!==f.offset&&(h.offset=new THREE.Vector2(f.offset[0],f.offset[1]));void 0!==f.repeat&&(h.repeat=new THREE.Vector2(f.repeat[0],
f.repeat[1]));void 0!==f.minFilter&&(h.minFilter=c(f.minFilter));void 0!==f.magFilter&&(h.magFilter=c(f.magFilter));void 0!==f.anisotropy&&(h.anisotropy=f.anisotropy);Array.isArray(f.wrap)&&(h.wrapS=c(f.wrap[0]),h.wrapT=c(f.wrap[1]));d[f.uuid]=h}return d},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;e=function(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]};var g=function(a){void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",
a);return d[a]};switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":e=
new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=new THREE.Mesh(e(b.geometry),g(b.material));break;case "LOD":e=new THREE.LOD;break;case "Line":e=new THREE.Line(e(b.geometry),g(b.material),b.mode);break;case "PointCloud":case "Points":e=new THREE.Points(e(b.geometry),g(b.material));break;case "Sprite":e=new THREE.Sprite(g(b.material));break;case "Group":e=new THREE.Group;
break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.castShadow&&(e.castShadow=b.castShadow);void 0!==b.receiveShadow&&(e.receiveShadow=b.receiveShadow);void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=
b.userData);if(void 0!==b.children)for(var f in b.children)e.add(this.parseObject(b.children[f],c,d));if("LOD"===b.type)for(b=b.levels,g=0;g<b.length;g++){var h=b[g];f=e.getObjectByProperty("uuid",h.object);void 0!==f&&e.addLevel(f,h.distance)}return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,g=new THREE.DataTexture,f=new THREE.XHRLoader(this.manager);f.setCrossOrigin(this.crossOrigin);f.setResponseType("arraybuffer");f.load(a,function(a){if(a=e._parser(a))void 0!==a.image?g.image=a.image:void 0!==a.data&&(g.image.width=a.width,g.image.height=a.height,g.image.data=a.data),g.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,g.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,
g.magFilter=void 0!==a.magFilter?a.magFilter:THREE.LinearFilter,g.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,g.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(g.format=a.format),void 0!==a.type&&(g.type=a.type),void 0!==a.mipmaps&&(g.mipmaps=a.mipmaps),1===a.mipmapCount&&(g.minFilter=THREE.LinearFilter),g.needsUpdate=!0,b&&b(g,a)},c,d);return g},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.CompressedTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c,d){var e=this,g=[],f=new THREE.CompressedTexture;f.image=g;var h=new THREE.XHRLoader(this.manager);h.setCrossOrigin(this.crossOrigin);h.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,l=function(m){h.load(a[m],function(a){a=e._parser(a,!0);g[m]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=
a.format,f.needsUpdate=!0,b&&b(f))},c,d)},n=0,p=a.length;n<p;++n)l(n);else h.load(a,function(a){a=e._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+h]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&
b(f)},c,d);return f},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=THREE.LessEqualDepth;this.colorWrite=this.depthWrite=
this.depthTest=!0;this.precision=null;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):
this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){var b={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};b.uuid=this.uuid;b.type=this.type;""!==this.name&&(b.name=this.name);this.color instanceof THREE.Color&&(b.color=this.color.getHex());this.emissive instanceof THREE.Color&&(b.emissive=this.emissive.getHex());this.specular instanceof THREE.Color&&(b.specular=this.specular.getHex());void 0!==this.shininess&&(b.shininess=this.shininess);this.map instanceof THREE.Texture&&
(b.map=this.map.toJSON(a).uuid);this.alphaMap instanceof THREE.Texture&&(b.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap instanceof THREE.Texture&&(b.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap instanceof THREE.Texture&&(b.bumpMap=this.bumpMap.toJSON(a).uuid,b.bumpScale=this.bumpScale);this.normalMap instanceof THREE.Texture&&(b.normalMap=this.normalMap.toJSON(a).uuid,b.normalScale=this.normalScale);this.displacementMap instanceof THREE.Texture&&(b.displacementMap=this.displacementMap.toJSON(a).uuid,
b.displacementScale=this.displacementScale,b.displacementBias=this.displacementBias);this.specularMap instanceof THREE.Texture&&(b.specularMap=this.specularMap.toJSON(a).uuid);this.envMap instanceof THREE.Texture&&(b.envMap=this.envMap.toJSON(a).uuid,b.reflectivity=this.reflectivity);void 0!==this.size&&(b.size=this.size);void 0!==this.sizeAttenuation&&(b.sizeAttenuation=this.sizeAttenuation);void 0!==this.vertexColors&&this.vertexColors!==THREE.NoColors&&(b.vertexColors=this.vertexColors);void 0!==
this.shading&&this.shading!==THREE.SmoothShading&&(b.shading=this.shading);void 0!==this.blending&&this.blending!==THREE.NormalBlending&&(b.blending=this.blending);void 0!==this.side&&this.side!==THREE.FrontSide&&(b.side=this.side);1>this.opacity&&(b.opacity=this.opacity);!0===this.transparent&&(b.transparent=this.transparent);0<this.alphaTest&&(b.alphaTest=this.alphaTest);!0===this.wireframe&&(b.wireframe=this.wireframe);1<this.wireframeLinewidth&&(b.wireframeLinewidth=this.wireframeLinewidth);return b},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.side=a.side;this.opacity=a.opacity;this.transparent=a.transparent;this.blending=a.blending;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.precision=a.precision;this.polygonOffset=
a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.overdraw=a.overdraw;this.visible=a.visible;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})},get wrapAround(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set wrapAround(a){console.warn("THREE."+this.type+": .wrapAround has been removed.")},get wrapRGB(){console.warn("THREE."+
this.type+": .wrapRGB has been removed.");return new THREE.Color}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;THREE.LineBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.aoMap=this.map=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=
!1;this.setValues(a)};THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;
this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.envMap=this.alphaMap=this.specularMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.emissive.copy(a.emissive);this.map=a.map;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.emissive.copy(a.emissive);this.specular.copy(a.specular);this.shininess=a.shininess;this.metal=a.metal;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissiveMap=a.emissiveMap;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=
a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MultiMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MultiMaterial";this.materials=a instanceof Array?a:[];this.visible=!0};
THREE.MultiMaterial.prototype={constructor:THREE.MultiMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());a.visible=this.visible;return a},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};THREE.MeshFaceMaterial=THREE.MultiMaterial;
THREE.PointsMaterial=function(a){THREE.Material.call(this);this.type="PointsMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointsMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointsMaterial.prototype.constructor=THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};THREE.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};
THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.derivatives=this.morphNormals=
this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=THREE.UniformsUtils.clone(a.uniforms);this.attributes=a.attributes;this.defines=a.defines;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.fog=a.fog;this.lights=a.lights;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=
a.morphNormals;this.derivatives=a.derivatives;return this};THREE.ShaderMaterial.prototype.toJSON=function(a){a=THREE.Material.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.attributes=this.attributes;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.fog=a.fog;return this};
THREE.Texture=function(a,b,c,d,e,g,f,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==g?g:THREE.LinearMipMapLinearFilter;
this.anisotropy=void 0!==k?k:1;this.format=void 0!==f?f:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.version=0;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=
a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy};if(void 0!==this.image){var c=
this.image;void 0===c.uuid&&(c.uuid=THREE.Math.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,g=c.uuid,f;void 0!==c.toDataURL?f=c:(f=document.createElement("canvas"),f.width=c.width,f.height=c.height,f.getContext("2d").drawImage(c,0,0,c.width,c.height));f=2048<f.width||2048<f.height?f.toDataURL("image/jpeg",.6):f.toDataURL("image/png");d[e]={uuid:g,url:f}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping===
THREE.UVMapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case THREE.RepeatWrapping:a.x-=Math.floor(a.x);break;case THREE.ClampToEdgeWrapping:a.x=0>a.x?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x-=Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case THREE.RepeatWrapping:a.y-=Math.floor(a.y);break;case THREE.ClampToEdgeWrapping:a.y=0>a.y?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.y)%
2)?a.y=Math.ceil(a.y)-a.y:a.y-=Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CanvasTexture=function(a,b,c,d,e,g,f,h,k){THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.needsUpdate=!0};THREE.CanvasTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CanvasTexture.prototype.constructor=THREE.CanvasTexture;
THREE.CubeTexture=function(a,b,c,d,e,g,f,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.images=a;this.flipY=!1};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.prototype.copy=function(a){THREE.Texture.prototype.copy.call(this,a);this.images=a.images;return this};
THREE.CompressedTexture=function(a,b,c,d,e,g,f,h,k,l,n){THREE.Texture.call(this,null,g,f,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;
THREE.DataTexture=function(a,b,c,d,e,g,f,h,k,l,n){THREE.Texture.call(this,null,g,f,h,k,l,d,e,n);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:THREE.NearestFilter;this.minFilter=void 0!==l?l:THREE.NearestFilter;this.generateMipmaps=this.flipY=!1};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.VideoTexture=function(a,b,c,d,e,g,f,h,k){THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.generateMipmaps=!1;var l=this,n=function(){requestAnimationFrame(n);a.readyState===a.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};n()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor=THREE.Group;THREE.Points=function(a,b){THREE.Object3D.call(this);this.type="Points";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointsMaterial({color:16777215*Math.random()})};THREE.Points.prototype=Object.create(THREE.Object3D.prototype);THREE.Points.prototype.constructor=THREE.Points;
THREE.Points.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){function e(a,e){var f=b.distanceSqToPoint(a);if(f<k){var h=b.closestPointToPoint(a);h.applyMatrix4(g.matrixWorld);var l=c.ray.origin.distanceTo(h);l<c.near||l>c.far||d.push({distance:l,distanceToRay:Math.sqrt(f),point:h.clone(),index:e,face:null,object:g})}}var g=this,f=g.geometry,h=c.params.Points.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==
b.isIntersectionBox(f.boundingBox)){var h=h/((this.scale.x+this.scale.y+this.scale.z)/3),k=h*h,h=new THREE.Vector3;if(f instanceof THREE.BufferGeometry){var l=f.index,f=f.attributes.position.array;if(null!==l)for(var n=l.array,l=0,p=n.length;l<p;l++){var m=n[l];h.fromArray(f,3*m);e(h,m)}else for(l=0,n=f.length/3;l<n;l++)h.fromArray(f,3*l),e(h,l)}else for(h=f.vertices,l=0,n=h.length;l<n;l++)e(h[l],l)}}}();THREE.Points.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Points.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON());void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};
THREE.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new THREE.Points(a,b)};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new THREE.Points(a,b)};
THREE.Line=function(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new THREE.LineSegments(a,b);THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()})};THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var g=d.linePrecision,g=g*g,f=this.geometry;null===f.boundingSphere&&f.computeBoundingSphere();c.copy(f.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,n=new THREE.Vector3,p=this instanceof THREE.LineSegments?2:1;if(f instanceof
THREE.BufferGeometry){var m=f.index,q=f.attributes;if(null!==m)for(var f=m.array,q=q.position.array,m=0,t=f.length-1;m<t;m+=p){var r=f[m+1];h.fromArray(q,3*f[m]);k.fromArray(q,3*r);r=b.distanceSqToSegment(h,k,n,l);r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this}))}else for(q=q.position.array,m=0,t=q.length/3-1;m<t;m+=p)h.fromArray(q,3*m),k.fromArray(q,
3*m+3),r=b.distanceSqToSegment(h,k,n,l),r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this}))}else if(f instanceof THREE.Geometry)for(h=f.vertices,k=h.length,m=0;m<k-1;m+=p)r=b.distanceSqToSegment(h[m],h[m+1],n,l),r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),
index:m,face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Line.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON());void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};THREE.LineStrip=0;THREE.LinePieces=1;THREE.LineSegments=function(a,b){THREE.Line.call(this,a,b);this.type="LineSegments"};
THREE.LineSegments.prototype=Object.create(THREE.Line.prototype);THREE.LineSegments.prototype.constructor=THREE.LineSegments;THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.constructor=THREE.Mesh;
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){function a(a,b,c,d,e,f,g){THREE.Triangle.barycoordFromPoint(a,b,c,d,q);e.multiplyScalar(q.x);f.multiplyScalar(q.y);g.multiplyScalar(q.z);e.add(f).add(g);return e.clone()}var b=new THREE.Matrix4,c=new THREE.Ray,d=new THREE.Sphere,e=new THREE.Vector3,g=new THREE.Vector3,f=new THREE.Vector3,h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,n=new THREE.Vector2,p=new THREE.Vector2,m=new THREE.Vector2,q=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;
return function(q,w){var v=this.geometry,B=this.material;if(void 0!==B&&(null===v.boundingSphere&&v.computeBoundingSphere(),d.copy(v.boundingSphere),d.applyMatrix4(this.matrixWorld),!1!==q.ray.isIntersectionSphere(d)&&(b.getInverse(this.matrixWorld),c.copy(q.ray).applyMatrix4(b),null===v.boundingBox||!1!==c.isIntersectionBox(v.boundingBox)))){var x,H,I;if(v instanceof THREE.BufferGeometry)if(x=v.index,v=v.attributes,null!==x)for(var z=x.array,D=v.position.array,G=0,O=z.length;G<O;G+=3){x=z[G];H=z[G+
1];I=z[G+2];e.fromArray(D,3*x);g.fromArray(D,3*H);f.fromArray(D,3*I);if(B.side===THREE.BackSide){if(null===c.intersectTriangle(f,g,e,!0,t))continue}else if(null===c.intersectTriangle(e,g,f,B.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);var C=q.ray.origin.distanceTo(r);if(!(C<q.near||C>q.far)){var F;void 0!==v.uv&&(F=v.uv.array,n.fromArray(F,2*x),p.fromArray(F,2*H),m.fromArray(F,2*I),F=a(t,e,g,f,n,p,m));w.push({distance:C,point:r.clone(),uv:F,face:new THREE.Face3(x,
H,I,THREE.Triangle.normal(e,g,f)),faceIndex:Math.floor(G/3),object:this})}}else for(D=v.position.array,G=0,O=D.length;G<O;G+=9){e.fromArray(D,G);g.fromArray(D,G+3);f.fromArray(D,G+6);if(B.side===THREE.BackSide){if(null===c.intersectTriangle(f,g,e,!0,t))continue}else if(null===c.intersectTriangle(e,g,f,B.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);C=q.ray.origin.distanceTo(r);C<q.near||C>q.far||(void 0!==v.uv&&(F=v.uv.array,n.fromArray(F,G),p.fromArray(F,G+2),m.fromArray(F,
G+4),F=a(t,e,g,f,n,p,m)),x=G/3,H=x+1,I=x+2,w.push({distance:C,point:r.clone(),uv:F,face:new THREE.Face3(x,H,I,THREE.Triangle.normal(e,g,f)),index:x,object:this}))}else if(v instanceof THREE.Geometry)for(var z=B instanceof THREE.MeshFaceMaterial,D=!0===z?B.materials:null,G=v.vertices,O=v.faces,K=0,L=O.length;K<L;K++){var E=O[K],C=!0===z?D[E.materialIndex]:B;if(void 0!==C){x=G[E.a];H=G[E.b];I=G[E.c];if(!0===C.morphTargets){var J=v.morphTargets,y=this.morphTargetInfluences;e.set(0,0,0);g.set(0,0,0);
f.set(0,0,0);for(var P=0,U=J.length;P<U;P++){var Q=y[P];if(0!==Q){var R=J[P].vertices;e.addScaledVector(h.subVectors(R[E.a],x),Q);g.addScaledVector(k.subVectors(R[E.b],H),Q);f.addScaledVector(l.subVectors(R[E.c],I),Q)}}e.add(x);g.add(H);f.add(I);x=e;H=g;I=f}if(C.side===THREE.BackSide){if(null===c.intersectTriangle(I,H,x,!0,t))continue}else if(null===c.intersectTriangle(x,H,I,C.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);C=q.ray.origin.distanceTo(r);C<q.near||C>q.far||
(0<v.faceVertexUvs[0].length&&(F=v.faceVertexUvs[0][K],n.copy(F[0]),p.copy(F[1]),m.copy(F[2]),F=a(t,x,H,I,n,p,m)),w.push({distance:C,point:r.clone(),uv:F,face:E,faceIndex:K,object:this}))}}}}}();THREE.Mesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Mesh.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a));void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a));b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.skin=a.skin;return this};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=THREE.Math.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)):
this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.Skeleton.prototype.clone=function(){return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,g=this.geometry.bones.length;e<g;++e)d=this.geometry.bones[e],b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(g=this.geometry.bones.length;e<g;++e)d=
this.geometry.bones[e],-1!==d.parent?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c),this.matrixWorld)};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)};THREE.SkinnedMesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material,this.useVertexTexture)).copy(this)};
THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,a.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;
THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,g=a.morphTargets.length;e<g;e++){var f=a.morphTargets[e].name.match(d);if(f&&1<f.length){f=f[1];c[f]||(c[f]={start:Infinity,end:-Infinity});var h=c[f];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=f)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("THREE.MorphAnimMesh: animation["+a+"] undefined in .playAnimation()")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);var c=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a=this.morphTargetInfluences;
c!==this.currentKeyframe&&(a[this.lastKeyframe]=0,a[this.currentKeyframe]=1,a[c]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=c);b=this.time%b/b;this.directionBackwards&&(b=1-b);a[this.currentKeyframe]=b;a[this.lastKeyframe]=1-b};THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,g=d.length;e<g;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.copy=function(a){THREE.Mesh.prototype.copy.call(this,a);this.duration=a.duration;this.mirroredLoop=a.mirroredLoop;this.time=a.time;this.lastKeyframe=a.lastKeyframe;this.currentKeyframe=a.currentKeyframe;this.direction=a.direction;this.directionBackwards=a.directionBackwards;return this};
THREE.LOD=function(){THREE.Object3D.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]},objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}})};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.constructor=THREE.LOD;
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,g=d.length;e<g;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<g;e++)d[e].object.visible=!1}}}();
THREE.LOD.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this};THREE.LOD.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(){return(new this.constructor(this.material)).copy(this)};
THREE.Sprite.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.material=this.material.uuid;return b};THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor=THREE.LensFlare;THREE.LensFlare.prototype.add=function(a,b,c,d,e,g){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===g&&(g=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:g,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};
THREE.LensFlare.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);THREE.Scene.prototype.constructor=THREE.Scene;
THREE.Scene.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};
THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.aomap_fragment="#ifdef USE_AOMAP\n\n\ttotalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n";THREE.ShaderChunk.aomap_pars_fragment="#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif";THREE.ShaderChunk.begin_vertex="\nvec3 transformed = vec3( position );\n";THREE.ShaderChunk.beginnormal_vertex="\nvec3 objectNormal = vec3( normal );\n";THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif";THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n\tif ( decayExponent > 0.0 ) {\n\n\t  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\tfloat fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\t// geometry term is (n\u22c5l)(n\u22c5v) / 4(n\u22c5l)(n\u22c5v)\n\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\t// factor of 1/PI in distribution term omitted\n\n\treturn ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t//float dotNL = saturate( dot( normal, lightDir ) );\n\t//float dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( lightDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n\t#ifdef GAMMA_INPUT\n\n\t\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.displacementmap_vertex="#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n";THREE.ShaderChunk.displacementmap_pars_vertex="#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment="#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n\ttotalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n";THREE.ShaderChunk.emissivemap_pars_fragment="#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\ttotalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tfloat hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lightPosition = pointLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t\t// specular\n\n\t\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += lightColor;\n\n\t\t// specular (sky term only)\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif\n";THREE.ShaderChunk.map_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.project_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t#endif\n\n\t}\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.uv2_pars_fragment="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.uv2_pars_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.uv2_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif";THREE.ShaderChunk.uv_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\n#endif";
THREE.ShaderChunk.uv_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.uv_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix3||e instanceof THREE.Matrix4||e instanceof THREE.Texture?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98}},aomap:{aoMap:{type:"t",value:null},aoMapIntensity:{type:"f",value:1}},lightmap:{lightMap:{type:"t",value:null},lightMapIntensity:{type:"f",
value:1}},emissivemap:{emissiveMap:{type:"t",value:null}},bumpmap:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},displacementmap:{displacementMap:{type:"t",value:null},displacementScale:{type:"f",value:1},displacementBias:{type:"f",value:0}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},
lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},
spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},points:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},
fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = vec3( 1.0 );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.aomap_fragment,"\toutgoingLight = diffuseColor.rgb * totalAmbientLight;",
THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,
THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif",THREE.ShaderChunk.envmap_fragment,
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",
value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.displacementmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.begin_vertex,
THREE.ShaderChunk.displacementmap_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = - mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.emissivemap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,
THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = ambientLightColor;\n\tvec3 totalEmissiveLight = emissive;",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.aomap_fragment,THREE.ShaderChunk.emissivemap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},points:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.points,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.common,
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",
value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,
"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b,c,d){!0===Q&&(a*=d,b*=d,c*=d);s.clearColor(a,b,c,d)}function c(){M.init();s.viewport(Ja,Ka,ta,ua);b(A.r,A.g,A.b,ia)}function d(){Sa=ib=null;pa="";Ta=-1;db=!0;M.reset()}function e(a){a.preventDefault();d();c();Y.clear()}function g(a){a=a.target;a.removeEventListener("dispose",g);a:{var b=Y.get(a);if(a.image&&b.__image__webglTextureCube)s.deleteTexture(b.__image__webglTextureCube);else{if(void 0===b.__webglInit)break a;s.deleteTexture(b.__webglTexture)}Y.delete(a)}La.textures--}
function f(a){a=a.target;a.removeEventListener("dispose",f);var b=Y.get(a);if(a&&void 0!==b.__webglTexture){s.deleteTexture(b.__webglTexture);if(a instanceof THREE.WebGLRenderTargetCube)for(var c=0;6>c;c++)s.deleteFramebuffer(b.__webglFramebuffer[c]),s.deleteRenderbuffer(b.__webglRenderbuffer[c]);else s.deleteFramebuffer(b.__webglFramebuffer),s.deleteRenderbuffer(b.__webglRenderbuffer);Y.delete(a)}La.textures--}function h(a){a=a.target;a.removeEventListener("dispose",h);k(a);Y.delete(a)}function k(a){var b=
Y.get(a).program;a.program=void 0;void 0!==b&&Ua.releaseProgram(b)}function l(a,b){return b[0]-a[0]}function n(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function p(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function m(a,b,c,d,e){var f;c.transparent?(d=va,f=++ma):(d=fa,f=++V);
f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=$.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:$.z,group:e},d.push(f))}function q(a){if(!1!==a.visible){if(a instanceof THREE.Light)Z.push(a);else if(a instanceof THREE.Sprite)Ba.push(a);else if(a instanceof THREE.LensFlare)Va.push(a);else if(a instanceof THREE.ImmediateRenderObject){var b,c;a.material.transparent?(b=wa,c=++qa):(b=ja,c=++Ca);c<b.length?b[c]=a:b.push(a)}else if(a instanceof THREE.Mesh||a instanceof THREE.Line||
a instanceof THREE.Points)if(a instanceof THREE.SkinnedMesh&&a.skeleton.update(),!1===a.frustumCulled||!0===Wa.intersectsObject(a)){var d=a.material;if(!0===d.visible)if(!0===la.sortObjects&&($.setFromMatrixPosition(a.matrixWorld),$.applyProjection(Da)),b=Ea.update(a),d instanceof THREE.MeshFaceMaterial){c=b.groups;for(var e=d.materials,d=0,f=c.length;d<f;d++){var g=c[d],h=e[g.materialIndex];!0===h.visible&&m(a,b,h,$.z,g)}}else m(a,b,d,$.z)}a=a.children;d=0;for(f=a.length;d<f;d++)q(a[d])}}function t(a,
b,c,d,e){for(var f=0,g=a.length;f<g;f++){var h=a[f],k=h.object,l=h.geometry,m=void 0===e?h.material:e,h=h.group;k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,k.matrixWorld);k.normalMatrix.getNormalMatrix(k.modelViewMatrix);la.renderBufferDirect(b,c,d,l,m,k,h)}}function r(a,b,c,d,e){for(var f=e,g=0,h=a.length;g<h;g++){var k=a[g];k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,k.matrixWorld);k.normalMatrix.getNormalMatrix(k.modelViewMatrix);void 0===e&&(f=k.material);u(f);var l=w(b,
c,d,f,k);pa="";k.render(function(a){la.renderBufferImmediate(a,l,f)})}}function u(a){a.side!==THREE.DoubleSide?M.enable(s.CULL_FACE):M.disable(s.CULL_FACE);M.setFlipSided(a.side===THREE.BackSide);!0===a.transparent?M.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):M.setBlending(THREE.NoBlending);M.setDepthFunc(a.depthFunc);M.setDepthTest(a.depthTest);M.setDepthWrite(a.depthWrite);M.setColorWrite(a.colorWrite);M.setPolygonOffset(a.polygonOffset,
a.polygonOffsetFactor,a.polygonOffsetUnits)}function w(a,b,c,d,e){eb=0;var f=Y.get(d);if(d.needsUpdate||!f.program){a:{var l=Y.get(d),m=Ua.getParameters(d,b,c,e),n=Ua.getProgramCode(d,m),q=l.program,p=!0;if(void 0===q)d.addEventListener("dispose",h);else if(q.code!==n)k(d);else if(void 0!==m.shaderID)break a;else p=!1;if(p){if(m.shaderID){var t=THREE.ShaderLib[m.shaderID];l.__webglShader={name:d.type,uniforms:THREE.UniformsUtils.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}}else l.__webglShader=
{name:d.type,uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};d.__webglShader=l.__webglShader;q=Ua.acquireProgram(d,m,n);l.program=q;d.program=q}var r=q.getAttributes();if(d.morphTargets)for(var w=d.numSupportedMorphTargets=0;w<la.maxMorphTargets;w++)0<=r["morphTarget"+w]&&d.numSupportedMorphTargets++;if(d.morphNormals)for(w=d.numSupportedMorphNormals=0;w<la.maxMorphNormals;w++)0<=r["morphNormal"+w]&&d.numSupportedMorphNormals++;l.uniformsList=[];var u=l.program.getUniforms(),
G;for(G in l.__webglShader.uniforms){var z=u[G];z&&l.uniformsList.push([l.__webglShader.uniforms[G],z])}}d.needsUpdate=!1}var D=!1,E=!1,K=!1,J=f.program,A=J.getUniforms(),y=f.__webglShader.uniforms;J.id!==ib&&(s.useProgram(J.program),ib=J.id,K=E=D=!0);d.id!==Ta&&(-1===Ta&&(K=!0),Ta=d.id,E=!0);if(D||a!==Sa)s.uniformMatrix4fv(A.projectionMatrix,!1,a.projectionMatrix.elements),na.logarithmicDepthBuffer&&s.uniform1f(A.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==Sa&&(Sa=a),(d instanceof THREE.ShaderMaterial||
d instanceof THREE.MeshPhongMaterial||d.envMap)&&void 0!==A.cameraPosition&&($.setFromMatrixPosition(a.matrixWorld),s.uniform3f(A.cameraPosition,$.x,$.y,$.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&void 0!==A.viewMatrix&&s.uniformMatrix4fv(A.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&void 0!==A.bindMatrix&&s.uniformMatrix4fv(A.bindMatrix,!1,
e.bindMatrix.elements),e.bindMatrixInverse&&void 0!==A.bindMatrixInverse&&s.uniformMatrix4fv(A.bindMatrixInverse,!1,e.bindMatrixInverse.elements),na.floatVertexTextures&&e.skeleton&&e.skeleton.useVertexTexture){if(void 0!==A.boneTexture){var P=B();s.uniform1i(A.boneTexture,P);la.setTexture(e.skeleton.boneTexture,P)}void 0!==A.boneTextureWidth&&s.uniform1i(A.boneTextureWidth,e.skeleton.boneTextureWidth);void 0!==A.boneTextureHeight&&s.uniform1i(A.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&
e.skeleton.boneMatrices&&void 0!==A.boneGlobalMatrices&&s.uniformMatrix4fv(A.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(E){c&&d.fog&&(y.fogColor.value=c.color,c instanceof THREE.Fog?(y.fogNear.value=c.near,y.fogFar.value=c.far):c instanceof THREE.FogExp2&&(y.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(db){var K=!0,F,L,V,Q=0,U=0,R=0,ja,X,va,ma,Z,aa=tb,qa=a.matrixWorldInverse,Ca=aa.directional.colors,Ba=aa.directional.positions,
wa=aa.point.colors,Ra=aa.point.positions,Va=aa.point.distances,ia=aa.point.decays,fa=aa.spot.colors,ga=aa.spot.positions,sa=aa.spot.distances,pa=aa.spot.directions,Ea=aa.spot.anglesCos,Ja=aa.spot.exponents,Ka=aa.spot.decays,ta=aa.hemi.skyColors,ua=aa.hemi.groundColors,Aa=aa.hemi.positions,Xa=0,Fa=0,ra=0,Ma=0,Da=0,jb=0,kb=0,fb=0,Ya=0,Za=0,xa=0,Na=0;F=0;for(L=b.length;F<L;F++)V=b[F],V.onlyShadow||(ja=V.color,ma=V.intensity,Z=V.distance,V instanceof THREE.AmbientLight?V.visible&&(Q+=ja.r,U+=ja.g,R+=
ja.b):V instanceof THREE.DirectionalLight?(Da+=1,V.visible&&(ca.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),ca.sub($),ca.transformDirection(qa),Ya=3*Xa,Ba[Ya+0]=ca.x,Ba[Ya+1]=ca.y,Ba[Ya+2]=ca.z,x(Ca,Ya,ja,ma),Xa+=1)):V instanceof THREE.PointLight?(jb+=1,V.visible&&(Za=3*Fa,x(wa,Za,ja,ma),$.setFromMatrixPosition(V.matrixWorld),$.applyMatrix4(qa),Ra[Za+0]=$.x,Ra[Za+1]=$.y,Ra[Za+2]=$.z,Va[Fa]=Z,ia[Fa]=0===V.distance?0:V.decay,Fa+=1)):V instanceof THREE.SpotLight?
(kb+=1,V.visible&&(xa=3*ra,x(fa,xa,ja,ma),ca.setFromMatrixPosition(V.matrixWorld),$.copy(ca).applyMatrix4(qa),ga[xa+0]=$.x,ga[xa+1]=$.y,ga[xa+2]=$.z,sa[ra]=Z,$.setFromMatrixPosition(V.target.matrixWorld),ca.sub($),ca.transformDirection(qa),pa[xa+0]=ca.x,pa[xa+1]=ca.y,pa[xa+2]=ca.z,Ea[ra]=Math.cos(V.angle),Ja[ra]=V.exponent,Ka[ra]=0===V.distance?0:V.decay,ra+=1)):V instanceof THREE.HemisphereLight&&(fb+=1,V.visible&&(ca.setFromMatrixPosition(V.matrixWorld),ca.transformDirection(qa),Na=3*Ma,Aa[Na+0]=
ca.x,Aa[Na+1]=ca.y,Aa[Na+2]=ca.z,X=V.color,va=V.groundColor,x(ta,Na,X,ma),x(ua,Na,va,ma),Ma+=1)));F=3*Xa;for(L=Math.max(Ca.length,3*Da);F<L;F++)Ca[F]=0;F=3*Fa;for(L=Math.max(wa.length,3*jb);F<L;F++)wa[F]=0;F=3*ra;for(L=Math.max(fa.length,3*kb);F<L;F++)fa[F]=0;F=3*Ma;for(L=Math.max(ta.length,3*fb);F<L;F++)ta[F]=0;F=3*Ma;for(L=Math.max(ua.length,3*fb);F<L;F++)ua[F]=0;aa.directional.length=Xa;aa.point.length=Fa;aa.spot.length=ra;aa.hemi.length=Ma;aa.ambient[0]=Q;aa.ambient[1]=U;aa.ambient[2]=R;db=!1}if(K){var ea=
tb;y.ambientLightColor.value=ea.ambient;y.directionalLightColor.value=ea.directional.colors;y.directionalLightDirection.value=ea.directional.positions;y.pointLightColor.value=ea.point.colors;y.pointLightPosition.value=ea.point.positions;y.pointLightDistance.value=ea.point.distances;y.pointLightDecay.value=ea.point.decays;y.spotLightColor.value=ea.spot.colors;y.spotLightPosition.value=ea.spot.positions;y.spotLightDistance.value=ea.spot.distances;y.spotLightDirection.value=ea.spot.directions;y.spotLightAngleCos.value=
ea.spot.anglesCos;y.spotLightExponent.value=ea.spot.exponents;y.spotLightDecay.value=ea.spot.decays;y.hemisphereLightSkyColor.value=ea.hemi.skyColors;y.hemisphereLightGroundColor.value=ea.hemi.groundColors;y.hemisphereLightDirection.value=ea.hemi.positions;v(y,!0)}else v(y,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){y.opacity.value=d.opacity;y.diffuse.value=d.color;d.emissive&&(y.emissive.value=d.emissive);y.map.value=
d.map;y.specularMap.value=d.specularMap;y.alphaMap.value=d.alphaMap;d.aoMap&&(y.aoMap.value=d.aoMap,y.aoMapIntensity.value=d.aoMapIntensity);var oa;d.map?oa=d.map:d.specularMap?oa=d.specularMap:d.displacementMap?oa=d.displacementMap:d.normalMap?oa=d.normalMap:d.bumpMap?oa=d.bumpMap:d.alphaMap?oa=d.alphaMap:d.emissiveMap&&(oa=d.emissiveMap);if(void 0!==oa){var Wa=oa.offset,bb=oa.repeat;y.offsetRepeat.value.set(Wa.x,Wa.y,bb.x,bb.y)}y.envMap.value=d.envMap;y.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?
1:-1;y.reflectivity.value=d.reflectivity;y.refractionRatio.value=d.refractionRatio}if(d instanceof THREE.LineBasicMaterial)y.diffuse.value=d.color,y.opacity.value=d.opacity;else if(d instanceof THREE.LineDashedMaterial)y.diffuse.value=d.color,y.opacity.value=d.opacity,y.dashSize.value=d.dashSize,y.totalSize.value=d.dashSize+d.gapSize,y.scale.value=d.scale;else if(d instanceof THREE.PointsMaterial){if(y.psColor.value=d.color,y.opacity.value=d.opacity,y.size.value=d.size,y.scale.value=C.height/2,y.map.value=
d.map,null!==d.map){var cb=d.map.offset,ub=d.map.repeat;y.offsetRepeat.value.set(cb.x,cb.y,ub.x,ub.y)}}else d instanceof THREE.MeshPhongMaterial?(y.specular.value=d.specular,y.shininess.value=d.shininess,d.lightMap&&(y.lightMap.value=d.lightMap,y.lightMapIntensity.value=d.lightMapIntensity),d.emissiveMap&&(y.emissiveMap.value=d.emissiveMap),d.bumpMap&&(y.bumpMap.value=d.bumpMap,y.bumpScale.value=d.bumpScale),d.normalMap&&(y.normalMap.value=d.normalMap,y.normalScale.value.copy(d.normalScale)),d.displacementMap&&
(y.displacementMap.value=d.displacementMap,y.displacementScale.value=d.displacementScale,y.displacementBias.value=d.displacementBias)):d instanceof THREE.MeshDepthMaterial?(y.mNear.value=a.near,y.mFar.value=a.far,y.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(y.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&y.shadowMatrix)for(var Oa=0,lb=0,pb=b.length;lb<pb;lb++){var ya=b[lb];ya.castShadow&&(ya instanceof THREE.SpotLight||ya instanceof THREE.DirectionalLight)&&(y.shadowMap.value[Oa]=
ya.shadowMap,y.shadowMapSize.value[Oa]=ya.shadowMapSize,y.shadowMatrix.value[Oa]=ya.shadowMatrix,y.shadowDarkness.value[Oa]=ya.shadowDarkness,y.shadowBias.value[Oa]=ya.shadowBias,Oa++)}for(var mb=f.uniformsList,ka,Ga,gb=0,qb=mb.length;gb<qb;gb++){var S=mb[gb][0];if(!1!==S.needsUpdate){var vb=S.type,N=S.value,W=mb[gb][1];switch(vb){case "1i":s.uniform1i(W,N);break;case "1f":s.uniform1f(W,N);break;case "2f":s.uniform2f(W,N[0],N[1]);break;case "3f":s.uniform3f(W,N[0],N[1],N[2]);break;case "4f":s.uniform4f(W,
N[0],N[1],N[2],N[3]);break;case "1iv":s.uniform1iv(W,N);break;case "3iv":s.uniform3iv(W,N);break;case "1fv":s.uniform1fv(W,N);break;case "2fv":s.uniform2fv(W,N);break;case "3fv":s.uniform3fv(W,N);break;case "4fv":s.uniform4fv(W,N);break;case "Matrix3fv":s.uniformMatrix3fv(W,!1,N);break;case "Matrix4fv":s.uniformMatrix4fv(W,!1,N);break;case "i":s.uniform1i(W,N);break;case "f":s.uniform1f(W,N);break;case "v2":s.uniform2f(W,N.x,N.y);break;case "v3":s.uniform3f(W,N.x,N.y,N.z);break;case "v4":s.uniform4f(W,
N.x,N.y,N.z,N.w);break;case "c":s.uniform3f(W,N.r,N.g,N.b);break;case "iv1":s.uniform1iv(W,N);break;case "iv":s.uniform3iv(W,N);break;case "fv1":s.uniform1fv(W,N);break;case "fv":s.uniform3fv(W,N);break;case "v2v":void 0===S._array&&(S._array=new Float32Array(2*N.length));for(var T=0,hb=0,ha=N.length;T<ha;T++,hb+=2)S._array[hb+0]=N[T].x,S._array[hb+1]=N[T].y;s.uniform2fv(W,S._array);break;case "v3v":void 0===S._array&&(S._array=new Float32Array(3*N.length));for(var $a=T=0,ha=N.length;T<ha;T++,$a+=
3)S._array[$a+0]=N[T].x,S._array[$a+1]=N[T].y,S._array[$a+2]=N[T].z;s.uniform3fv(W,S._array);break;case "v4v":void 0===S._array&&(S._array=new Float32Array(4*N.length));for(var Pa=T=0,ha=N.length;T<ha;T++,Pa+=4)S._array[Pa+0]=N[T].x,S._array[Pa+1]=N[T].y,S._array[Pa+2]=N[T].z,S._array[Pa+3]=N[T].w;s.uniform4fv(W,S._array);break;case "m3":s.uniformMatrix3fv(W,!1,N.elements);break;case "m3v":void 0===S._array&&(S._array=new Float32Array(9*N.length));T=0;for(ha=N.length;T<ha;T++)N[T].flattenToArrayOffset(S._array,
9*T);s.uniformMatrix3fv(W,!1,S._array);break;case "m4":s.uniformMatrix4fv(W,!1,N.elements);break;case "m4v":void 0===S._array&&(S._array=new Float32Array(16*N.length));T=0;for(ha=N.length;T<ha;T++)N[T].flattenToArrayOffset(S._array,16*T);s.uniformMatrix4fv(W,!1,S._array);break;case "t":ka=N;Ga=B();s.uniform1i(W,Ga);if(!ka)continue;if(ka instanceof THREE.CubeTexture||Array.isArray(ka.image)&&6===ka.image.length){var ba=ka,wb=Ga,Qa=Y.get(ba);if(6===ba.image.length)if(0<ba.version&&Qa.__version!==ba.version){Qa.__image__webglTextureCube||
(ba.addEventListener("dispose",g),Qa.__image__webglTextureCube=s.createTexture(),La.textures++);M.activeTexture(s.TEXTURE0+wb);M.bindTexture(s.TEXTURE_CUBE_MAP,Qa.__image__webglTextureCube);s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,ba.flipY);for(var xb=ba instanceof THREE.CompressedTexture,nb=ba.image[0]instanceof THREE.DataTexture,Ha=[],da=0;6>da;da++)Ha[da]=!la.autoScaleCubemaps||xb||nb?nb?ba.image[da].image:ba.image[da]:I(ba.image[da],na.maxCubemapSize);var yb=Ha[0],zb=THREE.Math.isPowerOfTwo(yb.width)&&
THREE.Math.isPowerOfTwo(yb.height),za=O(ba.format),ob=O(ba.type);H(s.TEXTURE_CUBE_MAP,ba,zb);for(da=0;6>da;da++)if(xb)for(var Ia,Ab=Ha[da].mipmaps,ab=0,rb=Ab.length;ab<rb;ab++)Ia=Ab[ab],ba.format!==THREE.RGBAFormat&&ba.format!==THREE.RGBFormat?-1<M.getCompressedTextureFormats().indexOf(za)?M.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,ab,za,Ia.width,Ia.height,0,Ia.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+
da,ab,za,Ia.width,Ia.height,0,za,ob,Ia.data);else nb?M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,0,za,Ha[da].width,Ha[da].height,0,za,ob,Ha[da].data):M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,0,za,za,ob,Ha[da]);ba.generateMipmaps&&zb&&s.generateMipmap(s.TEXTURE_CUBE_MAP);Qa.__version=ba.version;if(ba.onUpdate)ba.onUpdate(ba)}else M.activeTexture(s.TEXTURE0+wb),M.bindTexture(s.TEXTURE_CUBE_MAP,Qa.__image__webglTextureCube)}else if(ka instanceof THREE.WebGLRenderTargetCube){var sb=ka;M.activeTexture(s.TEXTURE0+
Ga);M.bindTexture(s.TEXTURE_CUBE_MAP,Y.get(sb).__webglTexture)}else la.setTexture(ka,Ga);break;case "tv":void 0===S._array&&(S._array=[]);T=0;for(ha=S.value.length;T<ha;T++)S._array[T]=B();s.uniform1iv(W,S._array);T=0;for(ha=S.value.length;T<ha;T++)ka=S.value[T],Ga=S._array[T],ka&&la.setTexture(ka,Ga);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+vb)}}}}s.uniformMatrix4fv(A.modelViewMatrix,!1,e.modelViewMatrix.elements);A.normalMatrix&&s.uniformMatrix3fv(A.normalMatrix,
!1,e.normalMatrix.elements);void 0!==A.modelMatrix&&s.uniformMatrix4fv(A.modelMatrix,!1,e.matrixWorld.elements);return J}function v(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.pointLightDecay.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=
b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.spotLightDecay.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function B(){var a=eb;a>=na.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+na.maxTextures);eb+=1;return a}function x(a,b,c,d){a[b+0]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function H(a,b,c){c?(s.texParameteri(a,s.TEXTURE_WRAP_S,
O(b.wrapS)),s.texParameteri(a,s.TEXTURE_WRAP_T,O(b.wrapT)),s.texParameteri(a,s.TEXTURE_MAG_FILTER,O(b.magFilter)),s.texParameteri(a,s.TEXTURE_MIN_FILTER,O(b.minFilter))):(s.texParameteri(a,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(a,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+b.sourceFile+
" )"),s.texParameteri(a,s.TEXTURE_MAG_FILTER,G(b.magFilter)),s.texParameteri(a,s.TEXTURE_MIN_FILTER,G(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+b.sourceFile+" )"));!(c=X.get("EXT_texture_filter_anisotropic"))||b.type===THREE.FloatType&&null===X.get("OES_texture_float_linear")||b.type===THREE.HalfFloatType&&null===
X.get("OES_texture_half_float_linear")||!(1<b.anisotropy||Y.get(b).__currentAnisotropy)||(s.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,la.getMaxAnisotropy())),Y.get(b).__currentAnisotropy=b.anisotropy)}function I(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+
a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}function z(a,b,c){s.bindFramebuffer(s.FRAMEBUFFER,a);s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,c,Y.get(b).__webglTexture,0)}function D(a,b){s.bindRenderbuffer(s.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_COMPONENT16,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(s.renderbufferStorage(s.RENDERBUFFER,
s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)):s.renderbufferStorage(s.RENDERBUFFER,s.RGBA4,b.width,b.height)}function G(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?s.NEAREST:s.LINEAR}function O(a){var b;if(a===THREE.RepeatWrapping)return s.REPEAT;if(a===THREE.ClampToEdgeWrapping)return s.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return s.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return s.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return s.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return s.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return s.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return s.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return s.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return s.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return s.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return s.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return s.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return s.BYTE;if(a===THREE.ShortType)return s.SHORT;if(a===THREE.UnsignedShortType)return s.UNSIGNED_SHORT;if(a===THREE.IntType)return s.INT;if(a===THREE.UnsignedIntType)return s.UNSIGNED_INT;if(a===THREE.FloatType)return s.FLOAT;b=X.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return s.ALPHA;if(a===THREE.RGBFormat)return s.RGB;if(a===THREE.RGBAFormat)return s.RGBA;
if(a===THREE.LuminanceFormat)return s.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return s.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return s.FUNC_ADD;if(a===THREE.SubtractEquation)return s.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return s.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return s.ZERO;if(a===THREE.OneFactor)return s.ONE;if(a===THREE.SrcColorFactor)return s.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return s.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return s.SRC_ALPHA;
if(a===THREE.OneMinusSrcAlphaFactor)return s.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return s.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return s.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return s.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return s.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return s.SRC_ALPHA_SATURATE;b=X.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=X.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=
X.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var C=void 0!==a.canvas?a.canvas:document.createElement("canvas"),F=void 0!==a.context?a.context:null,K=C.width,L=C.height,E=1,J=void 0!==a.alpha?a.alpha:!1,y=void 0!==a.depth?a.depth:!0,P=void 0!==a.stencil?a.stencil:!0,U=void 0!==a.antialias?a.antialias:!1,Q=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:
!0,R=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,A=new THREE.Color(0),ia=0,Z=[],fa=[],V=-1,va=[],ma=-1,ja=[],Ca=-1,wa=[],qa=-1,Ra=new Float32Array(8),Ba=[],Va=[];this.domElement=C;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.gammaOutput=this.gammaInput=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;var la=this,ib=null,Aa=null,Ta=-1,pa="",Sa=null,eb=0,Ja=0,Ka=0,
ta=C.width,ua=C.height,bb=0,cb=0,Wa=new THREE.Frustum,Da=new THREE.Matrix4,$=new THREE.Vector3,ca=new THREE.Vector3,db=!0,tb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},La={geometries:0,textures:0},sa={calls:0,vertices:0,faces:0,points:0};this.info={render:sa,
memory:La,programs:null};var s;try{J={alpha:J,depth:y,stencil:P,antialias:U,premultipliedAlpha:Q,preserveDrawingBuffer:R};s=F||C.getContext("webgl",J)||C.getContext("experimental-webgl",J);if(null===s){if(null!==C.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}C.addEventListener("webglcontextlost",e,!1)}catch(pb){console.error("THREE.WebGLRenderer: "+pb)}var X=new THREE.WebGLExtensions(s);X.get("OES_texture_float");X.get("OES_texture_float_linear");
X.get("OES_texture_half_float");X.get("OES_texture_half_float_linear");X.get("OES_standard_derivatives");X.get("ANGLE_instanced_arrays");X.get("OES_element_index_uint")&&(THREE.BufferGeometry.MaxIndex=4294967296);var na=new THREE.WebGLCapabilities(s,X,a),M=new THREE.WebGLState(s,X,O),Y=new THREE.WebGLProperties,Ea=new THREE.WebGLObjects(s,Y,this.info),Ua=new THREE.WebGLPrograms(this,na);this.info.programs=Ua.programs;var qb=new THREE.WebGLBufferRenderer(s,X,sa),rb=new THREE.WebGLIndexedBufferRenderer(s,
X,sa);c();this.context=s;this.capabilities=na;this.extensions=X;this.state=M;var ga=new THREE.WebGLShadowMap(this,Z,Ea);this.shadowMap=ga;var sb=new THREE.SpritePlugin(this,Ba),Bb=new THREE.LensFlarePlugin(this,Va);this.getContext=function(){return s};this.getContextAttributes=function(){return s.getContextAttributes()};this.forceContextLoss=function(){X.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=X.get("EXT_texture_filter_anisotropic");
return a=null!==b?s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}();this.getPrecision=function(){return na.precision};this.getPixelRatio=function(){return E};this.setPixelRatio=function(a){void 0!==a&&(E=a)};this.getSize=function(){return{width:K,height:L}};this.setSize=function(a,b,c){K=a;L=b;C.width=a*E;C.height=b*E;!1!==c&&(C.style.width=a+"px",C.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Ja=a*E;Ka=b*E;ta=c*E;ua=d*E;s.viewport(Ja,Ka,ta,ua)};this.setScissor=
function(a,b,c,d){s.scissor(a*E,b*E,c*E,d*E)};this.enableScissorTest=function(a){M.setScissorTest(a)};this.getClearColor=function(){return A};this.setClearColor=function(a,c){A.set(a);ia=void 0!==c?c:1;b(A.r,A.g,A.b,ia)};this.getClearAlpha=function(){return ia};this.setClearAlpha=function(a){ia=a;b(A.r,A.g,A.b,ia)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=s.COLOR_BUFFER_BIT;if(void 0===b||b)d|=s.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=s.STENCIL_BUFFER_BIT;s.clear(d)};this.clearColor=function(){s.clear(s.COLOR_BUFFER_BIT)};
this.clearDepth=function(){s.clear(s.DEPTH_BUFFER_BIT)};this.clearStencil=function(){s.clear(s.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=d;this.dispose=function(){C.removeEventListener("webglcontextlost",e,!1)};this.renderBufferImmediate=function(a,b,c){M.initAttributes();var d=Y.get(a);a.hasPositions&&!d.position&&(d.position=s.createBuffer());a.hasNormals&&!d.normal&&(d.normal=s.createBuffer());a.hasUvs&&!d.uv&&(d.uv=s.createBuffer());
a.hasColors&&!d.color&&(d.color=s.createBuffer());b=b.getAttributes();a.hasPositions&&(s.bindBuffer(s.ARRAY_BUFFER,d.position),s.bufferData(s.ARRAY_BUFFER,a.positionArray,s.DYNAMIC_DRAW),M.enableAttribute(b.position),s.vertexAttribPointer(b.position,3,s.FLOAT,!1,0,0));if(a.hasNormals){s.bindBuffer(s.ARRAY_BUFFER,d.normal);if("MeshPhongMaterial"!==c.type&&c.shading===THREE.FlatShading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,l=(g[e+
2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=l;g[e+3]=h;g[e+4]=k;g[e+5]=l;g[e+6]=h;g[e+7]=k;g[e+8]=l}s.bufferData(s.ARRAY_BUFFER,a.normalArray,s.DYNAMIC_DRAW);M.enableAttribute(b.normal);s.vertexAttribPointer(b.normal,3,s.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(s.bindBuffer(s.ARRAY_BUFFER,d.uv),s.bufferData(s.ARRAY_BUFFER,a.uvArray,s.DYNAMIC_DRAW),M.enableAttribute(b.uv),s.vertexAttribPointer(b.uv,2,s.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(s.bindBuffer(s.ARRAY_BUFFER,d.color),s.bufferData(s.ARRAY_BUFFER,
a.colorArray,s.DYNAMIC_DRAW),M.enableAttribute(b.color),s.vertexAttribPointer(b.color,3,s.FLOAT,!1,0,0));M.disableUnusedAttributes();s.drawArrays(s.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f,g){u(e);var h=w(a,b,c,e,f),k=!1;a=d.id+"_"+h.id+"_"+e.wireframe;a!==pa&&(pa=a,k=!0);a=f.morphTargetInfluences;if(void 0!==a){b=[];c=0;for(k=a.length;c<k;c++){var m=a[c];b.push([m,c])}b.sort(l);8<b.length&&(b.length=8);var n=d.morphAttributes;c=0;for(k=b.length;c<k;c++)m=b[c],
Ra[c]=m[0],0!==m[0]?(a=m[1],!0===e.morphTargets&&n.position&&d.addAttribute("morphTarget"+c,n.position[a]),!0===e.morphNormals&&n.normal&&d.addAttribute("morphNormal"+c,n.normal[a])):(!0===e.morphTargets&&d.removeAttribute("morphTarget"+c),!0===e.morphNormals&&d.removeAttribute("morphNormal"+c));a=h.getUniforms();null!==a.morphTargetInfluences&&s.uniform1fv(a.morphTargetInfluences,Ra);k=!0}a=d.index;c=d.attributes.position;!0===e.wireframe&&(a=Ea.getWireframeAttribute(d));null!==a?(b=rb,b.setIndex(a)):
b=qb;if(k){a:{var k=void 0,q;if(d instanceof THREE.InstancedBufferGeometry&&(q=X.get("ANGLE_instanced_arrays"),null===q)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");break a}void 0===k&&(k=0);M.initAttributes();var m=d.attributes,h=h.getAttributes(),n=e.defaultAttributeValues,p;for(p in h){var t=h[p];if(0<=t){var r=m[p];if(void 0!==r){M.enableAttribute(t);var v=r.itemSize,x=Ea.getAttributeBuffer(r);
if(r instanceof THREE.InterleavedBufferAttribute){var G=r.data,B=G.stride,r=r.offset;s.bindBuffer(s.ARRAY_BUFFER,x);s.vertexAttribPointer(t,v,s.FLOAT,!1,B*G.array.BYTES_PER_ELEMENT,(k*B+r)*G.array.BYTES_PER_ELEMENT);if(G instanceof THREE.InstancedInterleavedBuffer){if(null===q){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");break a}q.vertexAttribDivisorANGLE(t,G.meshPerAttribute);void 0===
d.maxInstancedCount&&(d.maxInstancedCount=G.meshPerAttribute*G.count)}}else if(s.bindBuffer(s.ARRAY_BUFFER,x),s.vertexAttribPointer(t,v,s.FLOAT,!1,0,k*v*4),r instanceof THREE.InstancedBufferAttribute){if(null===q){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");break a}q.vertexAttribDivisorANGLE(t,r.meshPerAttribute);void 0===d.maxInstancedCount&&(d.maxInstancedCount=r.meshPerAttribute*
r.count)}}else if(void 0!==n&&(v=n[p],void 0!==v))switch(v.length){case 2:s.vertexAttrib2fv(t,v);break;case 3:s.vertexAttrib3fv(t,v);break;case 4:s.vertexAttrib4fv(t,v);break;default:s.vertexAttrib1fv(t,v)}}}M.disableUnusedAttributes()}null!==a&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,Ea.getAttributeBuffer(a))}void 0===g&&(g=d.drawRange,g={start:g.start,count:Math.min(g.count,null!==a?a.count:c instanceof THREE.InterleavedBufferAttribute?c.data.array.length/3:c.count)});f instanceof THREE.Mesh?(!0===
e.wireframe?(M.setLineWidth(e.wireframeLinewidth*E),b.setMode(s.LINES)):b.setMode(s.TRIANGLES),d instanceof THREE.InstancedBufferGeometry&&0<d.maxInstancedCount?b.renderInstances(d):b.render(g.start,g.count)):f instanceof THREE.Line?(d=e.linewidth,void 0===d&&(d=1),M.setLineWidth(d*E),f instanceof THREE.LineSegments?b.setMode(s.LINES):b.setMode(s.LINE_STRIP),b.render(g.start,g.count)):f instanceof THREE.Points&&(b.setMode(s.POINTS),b.render(g.start,g.count))};this.render=function(a,b,c,d){if(!1===
b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e=a.fog;pa="";Ta=-1;Sa=null;db=!0;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);Da.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);Wa.setFromMatrix(Da);Z.length=0;qa=Ca=ma=V=-1;Ba.length=0;Va.length=0;q(a);fa.length=V+1;va.length=ma+1;ja.length=Ca+1;wa.length=qa+1;!0===la.sortObjects&&(fa.sort(n),
va.sort(p));ga.render(a,b);sa.calls=0;sa.vertices=0;sa.faces=0;sa.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);a.overrideMaterial?(d=a.overrideMaterial,t(fa,b,Z,e,d),t(va,b,Z,e,d),r(ja,b,Z,e,d),r(wa,b,Z,e,d)):(M.setBlending(THREE.NoBlending),t(fa,b,Z,e),r(ja,b,Z,e),t(va,b,Z,e),r(wa,b,Z,e));sb.render(a,b);Bb.render(a,b,bb,cb);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&
(c instanceof THREE.WebGLRenderTargetCube?(M.bindTexture(s.TEXTURE_CUBE_MAP,Y.get(c).__webglTexture),s.generateMipmap(s.TEXTURE_CUBE_MAP),M.bindTexture(s.TEXTURE_CUBE_MAP,null)):(M.bindTexture(s.TEXTURE_2D,Y.get(c).__webglTexture),s.generateMipmap(s.TEXTURE_2D),M.bindTexture(s.TEXTURE_2D,null)));M.setDepthTest(!0);M.setDepthWrite(!0);M.setColorWrite(!0)}};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?M.disable(s.CULL_FACE):(b===THREE.FrontFaceDirectionCW?s.frontFace(s.CW):s.frontFace(s.CCW),
a===THREE.CullFaceBack?s.cullFace(s.BACK):a===THREE.CullFaceFront?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK),M.enable(s.CULL_FACE))};this.setTexture=function(a,b){var c=Y.get(a);if(0<a.version&&c.__version!==a.version){var d=a.image;if(void 0===d)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",a);else if(!1===d.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",a);else{void 0===c.__webglInit&&(c.__webglInit=!0,
a.__webglInit=!0,a.addEventListener("dispose",g),c.__webglTexture=s.createTexture(),La.textures++);M.activeTexture(s.TEXTURE0+b);M.bindTexture(s.TEXTURE_2D,c.__webglTexture);s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,a.flipY);s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);s.pixelStorei(s.UNPACK_ALIGNMENT,a.unpackAlignment);a.image=I(a.image,na.maxTextureSize);var e=a.image,d=THREE.Math.isPowerOfTwo(e.width)&&THREE.Math.isPowerOfTwo(e.height),f=O(a.format),h=O(a.type);H(s.TEXTURE_2D,a,
d);var k=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<k.length&&d){for(var l=0,m=k.length;l<m;l++)e=k[l],M.texImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,f,h,e.data);a.generateMipmaps=!1}else M.texImage2D(s.TEXTURE_2D,0,f,e.width,e.height,0,f,h,e.data);else if(a instanceof THREE.CompressedTexture)for(l=0,m=k.length;l<m;l++)e=k[l],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<M.getCompressedTextureFormats().indexOf(f)?M.compressedTexImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,e.data):
console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M.texImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,f,h,e.data);else if(0<k.length&&d){l=0;for(m=k.length;l<m;l++)e=k[l],M.texImage2D(s.TEXTURE_2D,l,f,f,h,e);a.generateMipmaps=!1}else M.texImage2D(s.TEXTURE_2D,0,f,f,h,a.image);a.generateMipmaps&&d&&s.generateMipmap(s.TEXTURE_2D);c.__version=a.version;if(a.onUpdate)a.onUpdate(a)}}else M.activeTexture(s.TEXTURE0+b),M.bindTexture(s.TEXTURE_2D,
c.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===Y.get(a).__webglFramebuffer){var c=Y.get(a);void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",f);c.__webglTexture=s.createTexture();La.textures++;var d=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),e=O(a.format),g=O(a.type);if(b){c.__webglFramebuffer=[];c.__webglRenderbuffer=[];M.bindTexture(s.TEXTURE_CUBE_MAP,
c.__webglTexture);H(s.TEXTURE_CUBE_MAP,a,d);for(var h=0;6>h;h++)c.__webglFramebuffer[h]=s.createFramebuffer(),c.__webglRenderbuffer[h]=s.createRenderbuffer(),M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,e,a.width,a.height,0,e,g,null),z(c.__webglFramebuffer[h],a,s.TEXTURE_CUBE_MAP_POSITIVE_X+h),D(c.__webglRenderbuffer[h],a);a.generateMipmaps&&d&&s.generateMipmap(s.TEXTURE_CUBE_MAP)}else c.__webglFramebuffer=s.createFramebuffer(),c.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:
s.createRenderbuffer(),M.bindTexture(s.TEXTURE_2D,c.__webglTexture),H(s.TEXTURE_2D,a,d),M.texImage2D(s.TEXTURE_2D,0,e,a.width,a.height,0,e,g,null),z(c.__webglFramebuffer,a,s.TEXTURE_2D),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,c.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,c.__webglRenderbuffer):D(c.__webglRenderbuffer,a),a.generateMipmaps&&
d&&s.generateMipmap(s.TEXTURE_2D);b?M.bindTexture(s.TEXTURE_CUBE_MAP,null):M.bindTexture(s.TEXTURE_2D,null);s.bindRenderbuffer(s.RENDERBUFFER,null);s.bindFramebuffer(s.FRAMEBUFFER,null)}a?(c=Y.get(a),b=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=ta,a=ua,d=Ja,e=Ka);b!==Aa&&(s.bindFramebuffer(s.FRAMEBUFFER,b),s.viewport(d,e,c,a),Aa=b);bb=c;cb=a};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!(a instanceof THREE.WebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
else if(Y.get(a).__webglFramebuffer)if(a.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");else{var g=!1;Y.get(a).__webglFramebuffer!==Aa&&(s.bindFramebuffer(s.FRAMEBUFFER,Y.get(a).__webglFramebuffer),g=!0);s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE?s.readPixels(b,c,d,e,s.RGBA,s.UNSIGNED_BYTE,f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
g&&s.bindFramebuffer(s.FRAMEBUFFER,Aa)}};this.supportsFloatTextures=function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return X.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return X.get("OES_texture_half_float")};this.supportsStandardDerivatives=function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return X.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return X.get("WEBGL_compressed_texture_s3tc")};this.supportsCompressedTexturePVRTC=function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return X.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=
function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return X.get("EXT_blend_minmax")};this.supportsVertexTextures=function(){return na.vertexTextures};this.supportsInstancedArrays=function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return X.get("ANGLE_instanced_arrays")};this.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};
this.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};this.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};this.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Object.defineProperties(this,{shadowMapEnabled:{get:function(){return ga.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");ga.enabled=
a}},shadowMapType:{get:function(){return ga.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");ga.type=a}},shadowMapCullFace:{get:function(){return ga.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");ga.cullFace=a}},shadowMapDebug:{get:function(){return ga.debug},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug.");ga.debug=a}}})};
THREE.WebGLRenderTarget=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,
1);this.format=void 0!==c.format?c.format:THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=void 0!==c.shareDepthFrom?c.shareDepthFrom:null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose()},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.format=a.format;this.type=a.type;this.depthBuffer=
a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.generateMipmaps=a.generateMipmaps;this.shareDepthFrom=a.shareDepthFrom;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer=function(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,g){a.drawArrays(d,b,g);c.calls++;c.vertices+=g;d===a.TRIANGLES&&(c.faces+=g/3)};this.renderInstances=function(a){var c=b.get("ANGLE_instanced_arrays");if(null===c)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var f=a.attributes.position;f instanceof THREE.InterleavedBufferAttribute?c.drawArraysInstancedANGLE(d,
0,f.data.count,a.maxInstancedCount):c.drawArraysInstancedANGLE(d,0,f.count,a.maxInstancedCount)}}};
THREE.WebGLIndexedBufferRenderer=function(a,b,c){var d,e,g;this.setMode=function(a){d=a};this.setIndex=function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,g=4):(e=a.UNSIGNED_SHORT,g=2)};this.render=function(b,h){a.drawElements(d,h,e,b*g);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)};this.renderInstances=function(a){var c=b.get("ANGLE_instanced_arrays");null===c?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):
c.drawElementsInstancedANGLE(d,a.index.array.length,e,0,a.maxInstancedCount)}};
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLCapabilities=function(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}this.getMaxPrecision=d;this.precision=void 0!==c.precision?c.precision:"highp";
this.logarithmicDepthBuffer=void 0!==c.logarithmicDepthBuffer?c.logarithmicDepthBuffer:!1;this.maxTextures=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);this.maxVertexTextures=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);this.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);this.maxCubemapSize=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);this.maxAttributes=a.getParameter(a.MAX_VERTEX_ATTRIBS);this.maxVertexUniforms=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);this.maxVaryings=a.getParameter(a.MAX_VARYING_VECTORS);
this.maxFragmentUniforms=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);this.vertexTextures=0<this.maxVertexTextures;this.floatFragmentTextures=!!b.get("OES_texture_float");this.floatVertexTextures=this.vertexTextures&&this.floatFragmentTextures;c=d(this.precision);c!==this.precision&&(console.warn("THREE.WebGLRenderer:",this.precision,"not supported, using",c,"instead."),this.precision=c);this.logarithmicDepthBuffer&&(this.logarithmicDepthBuffer=!!b.get("EXT_frag_depth"))};
THREE.WebGLGeometries=function(a,b,c){function d(a){a=a.target;var h=g[a.id].attributes,k;for(k in h)e(h[k]);a.removeEventListener("dispose",d);delete g[a.id];k=b.get(a);k.wireframe&&e(k.wireframe);c.memory.geometries--}function e(c){var d;d=c instanceof THREE.InterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c instanceof THREE.InterleavedBufferAttribute?b.delete(c.data):b.delete(c))}var g={};this.get=function(a){var b=a.geometry;if(void 0!==
g[b.id])return g[b.id];b.addEventListener("dispose",d);var e;b instanceof THREE.BufferGeometry?e=b:b instanceof THREE.Geometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new THREE.BufferGeometry).setFromObject(a)),e=b._bufferGeometry);g[b.id]=e;c.memory.geometries++;return e}};
THREE.WebGLObjects=function(a,b,c){function d(c,d){var e=c instanceof THREE.InterleavedBufferAttribute?c.data:c,g=b.get(e);void 0===g.__webglBuffer?(g.__webglBuffer=a.createBuffer(),a.bindBuffer(d,g.__webglBuffer),a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW),g.version=e.version):g.version!==e.version&&(a.bindBuffer(d,g.__webglBuffer),!1===e.dynamic||-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),g.version=e.version)}function e(a,b,c){if(b>c){var d=b;b=c;c=d}d=a[b];return void 0===d?(a[b]=[c],!0):-1===d.indexOf(c)?(d.push(c),!0):!1}var g=new THREE.WebGLGeometries(a,b,c);this.getAttributeBuffer=function(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer};this.getWireframeAttribute=
function(c){var g=b.get(c);if(void 0!==g.wireframe)return g.wireframe;var k=[],l=c.index,n=c.attributes;c=n.position;if(null!==l)for(var n={},l=l.array,p=0,m=l.length;p<m;p+=3){var q=l[p+0],t=l[p+1],r=l[p+2];e(n,q,t)&&k.push(q,t);e(n,t,r)&&k.push(t,r);e(n,r,q)&&k.push(r,q)}else for(l=n.position.array,p=0,m=l.length/3-1;p<m;p+=3)q=p+0,t=p+1,r=p+2,k.push(q,t,t,r,r,q);k=new THREE.BufferAttribute(new (65535<c.count?Uint32Array:Uint16Array)(k),1);d(k,a.ELEMENT_ARRAY_BUFFER);return g.wireframe=k};this.update=
function(b){var c=g.get(b);b.geometry instanceof THREE.Geometry&&c.updateFromObject(b);b=c.index;var e=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var l in e)d(e[l],a.ARRAY_BUFFER);b=c.morphAttributes;for(l in b)for(var e=b[l],n=0,p=e.length;n<p;n++)d(e[n],a.ARRAY_BUFFER);return c}};
THREE.WebGLProgram=function(){function a(a){var b=[],c;for(c in a){var f=a[c];!1!==f&&b.push("#define "+c+" "+f)}return b.join("\n")}function b(a){return""!==a}var c=0;return function(d,e,g,f){var h=d.context,k=g.defines,l=g.__webglShader.vertexShader,n=g.__webglShader.fragmentShader,p="SHADOWMAP_TYPE_BASIC";f.shadowMapType===THREE.PCFShadowMap?p="SHADOWMAP_TYPE_PCF":f.shadowMapType===THREE.PCFSoftShadowMap&&(p="SHADOWMAP_TYPE_PCF_SOFT");var m="ENVMAP_TYPE_CUBE",q="ENVMAP_MODE_REFLECTION",t="ENVMAP_BLENDING_MULTIPLY";
if(f.envMap){switch(g.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:m="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:m="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:m="ENVMAP_TYPE_SPHERE"}switch(g.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:q="ENVMAP_MODE_REFRACTION"}switch(g.combine){case THREE.MultiplyOperation:t="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:t="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:t="ENVMAP_BLENDING_ADD"}}var r=0<d.gammaFactor?d.gammaFactor:1,u=a(k),w=h.createProgram();g instanceof THREE.RawShaderMaterial?d=k="":(k=["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+g.__webglShader.name,u,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"",d.gammaInput?"#define GAMMA_INPUT":"",d.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+r,"#define MAX_DIR_LIGHTS "+
f.maxDirLights,"#define MAX_POINT_LIGHTS "+f.maxPointLights,"#define MAX_SPOT_LIGHTS "+f.maxSpotLights,"#define MAX_HEMI_LIGHTS "+f.maxHemiLights,"#define MAX_SHADOWS "+f.maxShadows,"#define MAX_BONES "+f.maxBones,f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+q:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.displacementMap&&
f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?
"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+p:"",f.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;",
"attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;",
"\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(b).join("\n"),d=[f.bumpMap||f.normalMap||f.flatShading||g.derivatives?"#extension GL_OES_standard_derivatives : enable":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"","precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+
g.__webglShader.name,u,"#define MAX_DIR_LIGHTS "+f.maxDirLights,"#define MAX_POINT_LIGHTS "+f.maxPointLights,"#define MAX_SPOT_LIGHTS "+f.maxSpotLights,"#define MAX_HEMI_LIGHTS "+f.maxHemiLights,"#define MAX_SHADOWS "+f.maxShadows,f.alphaTest?"#define ALPHATEST "+f.alphaTest:"",d.gammaInput?"#define GAMMA_INPUT":"",d.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+r,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":
"",f.envMap?"#define "+m:"",f.envMap?"#define "+q:"",f.envMap?"#define "+t:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.metal?"#define METAL":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":
"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+p:"",f.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","\n"].filter(b).join("\n"));n=d+n;l=THREE.WebGLShader(h,h.VERTEX_SHADER,k+l);n=THREE.WebGLShader(h,h.FRAGMENT_SHADER,n);h.attachShader(w,l);h.attachShader(w,n);void 0!==
g.index0AttributeName?h.bindAttribLocation(w,0,g.index0AttributeName):!0===f.morphTargets&&h.bindAttribLocation(w,0,"position");h.linkProgram(w);f=h.getProgramInfoLog(w);p=h.getShaderInfoLog(l);m=h.getShaderInfoLog(n);t=q=!0;if(!1===h.getProgramParameter(w,h.LINK_STATUS))q=!1,console.error("THREE.WebGLProgram: shader error: ",h.getError(),"gl.VALIDATE_STATUS",h.getProgramParameter(w,h.VALIDATE_STATUS),"gl.getProgramInfoLog",f,p,m);else if(""!==f)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",
f);else if(""===p||""===m)t=!1;t&&(this.diagnostics={runnable:q,material:g,programLog:f,vertexShader:{log:p,prefix:k},fragmentShader:{log:m,prefix:d}});h.deleteShader(l);h.deleteShader(n);var v;this.getUniforms=function(){if(void 0===v){for(var a={},b=h.getProgramParameter(w,h.ACTIVE_UNIFORMS),c=0;c<b;c++){var d=h.getActiveUniform(w,c).name,e=h.getUniformLocation(w,d),f=d.lastIndexOf("[0]");-1!==f&&f===d.length-3&&(a[d.substr(0,f)]=e);a[d]=e}v=a}return v};var B;this.getAttributes=function(){if(void 0===
B){for(var a={},b=h.getProgramParameter(w,h.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=h.getActiveAttrib(w,c).name;a[d]=h.getAttribLocation(w,d)}B=a}return B};this.destroy=function(){h.deleteProgram(w);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});
this.id=c++;this.code=e;this.usedTimes=1;this.program=w;this.vertexShader=l;this.fragmentShader=n;return this}}();
THREE.WebGLPrograms=function(a,b){var c=[],d={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},e="precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap specularMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals maxDirLights maxPointLights maxSpotLights maxHemiLights maxShadows shadowMapEnabled shadowMapType shadowMapDebug alphaTest metal doubleSided flipSided".split(" ");this.getParameters=
function(c,e,h,k){for(var l,n,p,m,q=d[c.type],t=m=p=n=l=0,r=e.length;t<r;t++){var u=e[t];u.onlyShadow||!1===u.visible||(u instanceof THREE.DirectionalLight&&l++,u instanceof THREE.PointLight&&n++,u instanceof THREE.SpotLight&&p++,u instanceof THREE.HemisphereLight&&m++)}r=t=0;for(u=e.length;r<u;r++){var w=e[r];w.castShadow&&(w instanceof THREE.SpotLight&&t++,w instanceof THREE.DirectionalLight&&t++)}e=t;b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture?t=1024:(t=Math.floor((b.maxVertexUniforms-
20)/4),void 0!==k&&k instanceof THREE.SkinnedMesh&&(t=Math.min(k.skeleton.bones.length,t),t<k.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+k.skeleton.bones.length+", this GPU supports just "+t+" (try OpenGL instead of ANGLE)")));r=a.getPrecision();null!==c.precision&&(r=b.getMaxPrecision(c.precision),r!==c.precision&&console.warn("THREE.WebGLRenderer.initMaterial:",c.precision,"not supported, using",r,"instead."));return{shaderID:q,precision:r,supportsVertexTextures:b.vertexTextures,
map:!!c.map,envMap:!!c.envMap,envMapMode:c.envMap&&c.envMap.mapping,lightMap:!!c.lightMap,aoMap:!!c.aoMap,emissiveMap:!!c.emissiveMap,bumpMap:!!c.bumpMap,normalMap:!!c.normalMap,displacementMap:!!c.displacementMap,specularMap:!!c.specularMap,alphaMap:!!c.alphaMap,combine:c.combine,vertexColors:c.vertexColors,fog:h,useFog:c.fog,fogExp:h instanceof THREE.FogExp2,flatShading:c.shading===THREE.FlatShading,sizeAttenuation:c.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:c.skinning,
maxBones:t,useVertexTexture:b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture,morphTargets:c.morphTargets,morphNormals:c.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,maxDirLights:l,maxPointLights:n,maxSpotLights:p,maxHemiLights:m,maxShadows:e,shadowMapEnabled:a.shadowMap.enabled&&k.receiveShadow&&0<e,shadowMapType:a.shadowMap.type,shadowMapDebug:a.shadowMap.debug,alphaTest:c.alphaTest,metal:c.metal,doubleSided:c.side===THREE.DoubleSide,flipSided:c.side===
THREE.BackSide}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<e.length;d++){var l=e[d];c.push(l);c.push(b[l])}return c.join()};this.acquireProgram=function(b,d,e){for(var k,l=0,n=c.length;l<n;l++){var p=c[l];if(p.code===e){k=p;++k.usedTimes;break}}void 0===k&&(k=new THREE.WebGLProgram(a,e,b,d),c.push(k));return k};this.releaseProgram=function(a){if(0===
--a.usedTimes){var b=c.indexOf(a);c[b]=c[c.length-1];c.pop();a.destroy()}};this.programs=c};THREE.WebGLProperties=function(){var a={};this.get=function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c};this.delete=function(b){delete a[b.uuid]};this.clear=function(){a={}}};
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){var e=b.createShader(c);b.shaderSource(e,d);b.compileShader(e);!1===b.getShaderParameter(e,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(e)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",c===b.VERTEX_SHADER?"vertex":"fragment",b.getShaderInfoLog(e),a(d));return e}}();
THREE.WebGLShadowMap=function(a,b,c){function d(a,b){var c=a.geometry,c=void 0!==c.morphTargets&&0<c.morphTargets.length&&b.morphTargets,d=a instanceof THREE.SkinnedMesh&&b.skinning,c=a.customDepthMaterial?a.customDepthMaterial:d?c?u:r:c?t:q;c.visible=b.visible;c.wireframe=b.wireframe;c.wireframeLinewidth=b.wireframeLinewidth;return c}function e(a,b){if(!1!==a.visible){(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&a.castShadow&&(!1===a.frustumCulled||!0===h.intersectsObject(a))&&
!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld),n.push(a));for(var c=a.children,d=0,f=c.length;d<f;d++)e(c[d],b)}}var g=a.context,f=a.state,h=new THREE.Frustum,k=new THREE.Matrix4;new THREE.Vector3;new THREE.Vector3;var l=new THREE.Vector3,n=[],p=THREE.ShaderLib.depthRGBA,m=THREE.UniformsUtils.clone(p.uniforms),q=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),t=new THREE.ShaderMaterial({uniforms:m,
vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,morphTargets:!0}),r=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,skinning:!0}),u=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,morphTargets:!0,skinning:!0});q._shadowPass=!0;t._shadowPass=!0;r._shadowPass=!0;u._shadowPass=!0;var w=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=THREE.PCFShadowMap;this.cullFace=THREE.CullFaceFront;
this.render=function(m,q){if(!1!==w.enabled&&(!1!==w.autoUpdate||!1!==w.needsUpdate)){g.clearColor(1,1,1,1);f.disable(g.BLEND);f.enable(g.CULL_FACE);g.frontFace(g.CCW);w.cullFace===THREE.CullFaceFront?g.cullFace(g.FRONT):g.cullFace(g.BACK);f.setDepthTest(!0);for(var p=0,t=b.length;p<t;p++){var r=b[p];if(r.castShadow){if(!r.shadowMap){var u=THREE.LinearFilter;w.type===THREE.PCFSoftShadowMap&&(u=THREE.NearestFilter);r.shadowMap=new THREE.WebGLRenderTarget(r.shadowMapWidth,r.shadowMapHeight,{minFilter:u,
magFilter:u,format:THREE.RGBAFormat});r.shadowMapSize=new THREE.Vector2(r.shadowMapWidth,r.shadowMapHeight);r.shadowMatrix=new THREE.Matrix4}if(!r.shadowCamera){if(r instanceof THREE.SpotLight)r.shadowCamera=new THREE.PerspectiveCamera(r.shadowCameraFov,r.shadowMapWidth/r.shadowMapHeight,r.shadowCameraNear,r.shadowCameraFar);else if(r instanceof THREE.DirectionalLight)r.shadowCamera=new THREE.OrthographicCamera(r.shadowCameraLeft,r.shadowCameraRight,r.shadowCameraTop,r.shadowCameraBottom,r.shadowCameraNear,
r.shadowCameraFar);else{console.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",r);continue}m.add(r.shadowCamera);!0===m.autoUpdate&&m.updateMatrixWorld()}r.shadowCameraVisible&&!r.cameraHelper&&(r.cameraHelper=new THREE.CameraHelper(r.shadowCamera),m.add(r.cameraHelper));var D=r.shadowMap,G=r.shadowMatrix,u=r.shadowCamera;u.position.setFromMatrixPosition(r.matrixWorld);l.setFromMatrixPosition(r.target.matrixWorld);u.lookAt(l);u.updateMatrixWorld();u.matrixWorldInverse.getInverse(u.matrixWorld);
r.cameraHelper&&(r.cameraHelper.visible=r.shadowCameraVisible);r.shadowCameraVisible&&r.cameraHelper.update();G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);G.multiply(u.projectionMatrix);G.multiply(u.matrixWorldInverse);k.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);h.setFromMatrix(k);a.setRenderTarget(D);a.clear();n.length=0;e(m,u);r=0;for(D=n.length;r<D;r++){var G=n[r],O=c.update(G),C=G.material;if(C instanceof THREE.MeshFaceMaterial)for(var F=O.groups,C=C.materials,K=0,L=F.length;K<
L;K++){var E=F[K],J=C[E.materialIndex];!0===J.visible&&a.renderBufferDirect(u,b,null,O,d(G,J),G,E)}else a.renderBufferDirect(u,b,null,O,d(G,C),G)}}}p=a.getClearColor();t=a.getClearAlpha();a.setClearColor(p,t);f.enable(g.BLEND);w.cullFace===THREE.CullFaceFront&&g.cullFace(g.BACK);a.resetGLState();w.needsUpdate=!1}}};
THREE.WebGLState=function(a,b,c){var d=this,e=new Uint8Array(16),g=new Uint8Array(16),f={},h=null,k=null,l=null,n=null,p=null,m=null,q=null,t=null,r=null,u=null,w=null,v=null,B=null,x=null,H=null,I=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),z=void 0,D={};this.init=function(){a.clearColor(0,0,0,1);a.clearDepth(1);a.clearStencil(0);this.enable(a.DEPTH_TEST);a.depthFunc(a.LEQUAL);a.frontFace(a.CCW);a.cullFace(a.BACK);this.enable(a.CULL_FACE);this.enable(a.BLEND);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.SRC_ALPHA,
a.ONE_MINUS_SRC_ALPHA)};this.initAttributes=function(){for(var a=0,b=e.length;a<b;a++)e[a]=0};this.enableAttribute=function(b){e[b]=1;0===g[b]&&(a.enableVertexAttribArray(b),g[b]=1)};this.disableUnusedAttributes=function(){for(var b=0,c=g.length;b<c;b++)g[b]!==e[b]&&(a.disableVertexAttribArray(b),g[b]=0)};this.enable=function(b){!0!==f[b]&&(a.enable(b),f[b]=!0)};this.disable=function(b){!1!==f[b]&&(a.disable(b),f[b]=!1)};this.getCompressedTextureFormats=function(){if(null===h&&(h=[],b.get("WEBGL_compressed_texture_pvrtc")||
b.get("WEBGL_compressed_texture_s3tc")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)h.push(c[d]);return h};this.setBlending=function(b,d,e,f,g,h,r){b!==k&&(b===THREE.NoBlending?this.disable(a.BLEND):b===THREE.AdditiveBlending?(this.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):b===THREE.SubtractiveBlending?(this.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):b===THREE.MultiplyBlending?(this.enable(a.BLEND),
a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):b===THREE.CustomBlending?this.enable(a.BLEND):(this.enable(a.BLEND),a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),k=b);if(b===THREE.CustomBlending){g=g||d;h=h||e;r=r||f;if(d!==l||g!==m)a.blendEquationSeparate(c(d),c(g)),l=d,m=g;if(e!==n||f!==p||h!==q||r!==t)a.blendFuncSeparate(c(e),c(f),c(h),c(r)),n=e,p=f,q=h,t=r}else t=q=m=p=n=l=null};this.setDepthFunc=
function(b){if(r!==b){if(b)switch(b){case THREE.NeverDepth:a.depthFunc(a.NEVER);break;case THREE.AlwaysDepth:a.depthFunc(a.ALWAYS);break;case THREE.LessDepth:a.depthFunc(a.LESS);break;case THREE.LessEqualDepth:a.depthFunc(a.LEQUAL);break;case THREE.EqualDepth:a.depthFunc(a.EQUAL);break;case THREE.GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case THREE.GreaterDepth:a.depthFunc(a.GREATER);break;case THREE.NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);
r=b}};this.setDepthTest=function(b){b?this.enable(a.DEPTH_TEST):this.disable(a.DEPTH_TEST)};this.setDepthWrite=function(b){u!==b&&(a.depthMask(b),u=b)};this.setColorWrite=function(b){w!==b&&(a.colorMask(b,b,b,b),w=b)};this.setFlipSided=function(b){v!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),v=b)};this.setLineWidth=function(b){b!==B&&(a.lineWidth(b),B=b)};this.setPolygonOffset=function(b,c,d){b?this.enable(a.POLYGON_OFFSET_FILL):this.disable(a.POLYGON_OFFSET_FILL);!b||x===c&&H===d||(a.polygonOffset(c,
d),x=c,H=d)};this.setScissorTest=function(b){b?this.enable(a.SCISSOR_TEST):this.disable(a.SCISSOR_TEST)};this.activeTexture=function(b){void 0===b&&(b=a.TEXTURE0+I-1);z!==b&&(a.activeTexture(b),z=b)};this.bindTexture=function(b,c){void 0===z&&d.activeTexture();var e=D[z];void 0===e&&(e={type:void 0,texture:void 0},D[z]=e);if(e.type!==b||e.texture!==c)a.bindTexture(b,c),e.type=b,e.texture=c};this.compressedTexImage2D=function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}};
this.texImage2D=function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}};this.reset=function(){for(var b=0;b<g.length;b++)1===g[b]&&(a.disableVertexAttribArray(b),g[b]=0);f={};v=w=u=k=h=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,g,f,h,k,l,n,p,m=a.context,q=a.state,t,r,u,w,v,B;this.render=function(x,H,I,z){if(0!==b.length){x=new THREE.Vector3;var D=z/I,G=.5*I,O=.5*z,C=16/z,F=new THREE.Vector2(C*D,C),K=new THREE.Vector3(1,1,0),L=new THREE.Vector2(1,1);if(void 0===u){var C=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),E=new Uint16Array([0,1,2,0,2,3]);t=m.createBuffer();r=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,t);m.bufferData(m.ARRAY_BUFFER,C,m.STATIC_DRAW);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
r);m.bufferData(m.ELEMENT_ARRAY_BUFFER,E,m.STATIC_DRAW);v=m.createTexture();B=m.createTexture();q.bindTexture(m.TEXTURE_2D,v);m.texImage2D(m.TEXTURE_2D,0,m.RGB,16,16,0,m.RGB,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);q.bindTexture(m.TEXTURE_2D,B);m.texImage2D(m.TEXTURE_2D,0,
m.RGBA,16,16,0,m.RGBA,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);var C=(w=0<m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
E=m.createProgram(),J=m.createShader(m.FRAGMENT_SHADER),y=m.createShader(m.VERTEX_SHADER),P="precision "+a.getPrecision()+" float;\n";m.shaderSource(J,P+C.fragmentShader);m.shaderSource(y,P+C.vertexShader);m.compileShader(J);m.compileShader(y);m.attachShader(E,J);m.attachShader(E,y);m.linkProgram(E);u=E;n=m.getAttribLocation(u,"position");p=m.getAttribLocation(u,"uv");c=m.getUniformLocation(u,"renderType");d=m.getUniformLocation(u,"map");e=m.getUniformLocation(u,"occlusionMap");g=m.getUniformLocation(u,
"opacity");f=m.getUniformLocation(u,"color");h=m.getUniformLocation(u,"scale");k=m.getUniformLocation(u,"rotation");l=m.getUniformLocation(u,"screenPosition")}m.useProgram(u);q.initAttributes();q.enableAttribute(n);q.enableAttribute(p);q.disableUnusedAttributes();m.uniform1i(e,0);m.uniform1i(d,1);m.bindBuffer(m.ARRAY_BUFFER,t);m.vertexAttribPointer(n,2,m.FLOAT,!1,16,0);m.vertexAttribPointer(p,2,m.FLOAT,!1,16,8);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,r);q.disable(m.CULL_FACE);m.depthMask(!1);E=0;for(J=
b.length;E<J;E++)if(C=16/z,F.set(C*D,C),y=b[E],x.set(y.matrixWorld.elements[12],y.matrixWorld.elements[13],y.matrixWorld.elements[14]),x.applyMatrix4(H.matrixWorldInverse),x.applyProjection(H.projectionMatrix),K.copy(x),L.x=K.x*G+G,L.y=K.y*O+O,w||0<L.x&&L.x<I&&0<L.y&&L.y<z){q.activeTexture(m.TEXTURE0);q.bindTexture(m.TEXTURE_2D,null);q.activeTexture(m.TEXTURE1);q.bindTexture(m.TEXTURE_2D,v);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGB,L.x-8,L.y-8,16,16,0);m.uniform1i(c,0);m.uniform2f(h,F.x,F.y);m.uniform3f(l,
K.x,K.y,K.z);q.disable(m.BLEND);q.enable(m.DEPTH_TEST);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);q.activeTexture(m.TEXTURE0);q.bindTexture(m.TEXTURE_2D,B);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGBA,L.x-8,L.y-8,16,16,0);m.uniform1i(c,1);q.disable(m.DEPTH_TEST);q.activeTexture(m.TEXTURE1);q.bindTexture(m.TEXTURE_2D,v);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);y.positionScreen.copy(K);y.customUpdateCallback?y.customUpdateCallback(y):y.updateLensFlares();m.uniform1i(c,2);q.enable(m.BLEND);for(var P=
0,U=y.lensFlares.length;P<U;P++){var Q=y.lensFlares[P];.001<Q.opacity&&.001<Q.scale&&(K.x=Q.x,K.y=Q.y,K.z=Q.z,C=Q.size*Q.scale/z,F.x=C*D,F.y=C,m.uniform3f(l,K.x,K.y,K.z),m.uniform2f(h,F.x,F.y),m.uniform1f(k,Q.rotation),m.uniform1f(g,Q.opacity),m.uniform3f(f,Q.color.r,Q.color.g,Q.color.b),q.setBlending(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst),a.setTexture(Q.texture,1),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0))}}q.enable(m.CULL_FACE);q.enable(m.DEPTH_TEST);m.depthMask(!0);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,g,f,h,k,l,n,p,m,q,t,r,u,w,v;function B(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var x=a.context,H=a.state,I,z,D,G,O=new THREE.Vector3,C=new THREE.Quaternion,F=new THREE.Vector3;this.render=function(K,L){if(0!==b.length){if(void 0===D){var E=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),J=new Uint16Array([0,1,2,0,2,3]);I=x.createBuffer();z=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,I);x.bufferData(x.ARRAY_BUFFER,E,x.STATIC_DRAW);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,
z);x.bufferData(x.ELEMENT_ARRAY_BUFFER,J,x.STATIC_DRAW);var E=x.createProgram(),J=x.createShader(x.VERTEX_SHADER),y=x.createShader(x.FRAGMENT_SHADER);x.shaderSource(J,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
x.shaderSource(y,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
x.compileShader(J);x.compileShader(y);x.attachShader(E,J);x.attachShader(E,y);x.linkProgram(E);D=E;w=x.getAttribLocation(D,"position");v=x.getAttribLocation(D,"uv");c=x.getUniformLocation(D,"uvOffset");d=x.getUniformLocation(D,"uvScale");e=x.getUniformLocation(D,"rotation");g=x.getUniformLocation(D,"scale");f=x.getUniformLocation(D,"color");h=x.getUniformLocation(D,"map");k=x.getUniformLocation(D,"opacity");l=x.getUniformLocation(D,"modelViewMatrix");n=x.getUniformLocation(D,"projectionMatrix");p=
x.getUniformLocation(D,"fogType");m=x.getUniformLocation(D,"fogDensity");q=x.getUniformLocation(D,"fogNear");t=x.getUniformLocation(D,"fogFar");r=x.getUniformLocation(D,"fogColor");u=x.getUniformLocation(D,"alphaTest");E=document.createElement("canvas");E.width=8;E.height=8;J=E.getContext("2d");J.fillStyle="white";J.fillRect(0,0,8,8);G=new THREE.Texture(E);G.needsUpdate=!0}x.useProgram(D);H.initAttributes();H.enableAttribute(w);H.enableAttribute(v);H.disableUnusedAttributes();H.disable(x.CULL_FACE);
H.enable(x.BLEND);x.bindBuffer(x.ARRAY_BUFFER,I);x.vertexAttribPointer(w,2,x.FLOAT,!1,16,0);x.vertexAttribPointer(v,2,x.FLOAT,!1,16,8);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,z);x.uniformMatrix4fv(n,!1,L.projectionMatrix.elements);H.activeTexture(x.TEXTURE0);x.uniform1i(h,0);J=E=0;(y=K.fog)?(x.uniform3f(r,y.color.r,y.color.g,y.color.b),y instanceof THREE.Fog?(x.uniform1f(q,y.near),x.uniform1f(t,y.far),x.uniform1i(p,1),J=E=1):y instanceof THREE.FogExp2&&(x.uniform1f(m,y.density),x.uniform1i(p,2),J=E=2)):
(x.uniform1i(p,0),J=E=0);for(var y=0,P=b.length;y<P;y++){var U=b[y];U.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,U.matrixWorld);U.z=-U.modelViewMatrix.elements[14]}b.sort(B);for(var Q=[],y=0,P=b.length;y<P;y++){var U=b[y],R=U.material;x.uniform1f(u,R.alphaTest);x.uniformMatrix4fv(l,!1,U.modelViewMatrix.elements);U.matrixWorld.decompose(O,C,F);Q[0]=F.x;Q[1]=F.y;U=0;K.fog&&R.fog&&(U=J);E!==U&&(x.uniform1i(p,U),E=U);null!==R.map?(x.uniform2f(c,R.map.offset.x,R.map.offset.y),x.uniform2f(d,
R.map.repeat.x,R.map.repeat.y)):(x.uniform2f(c,0,0),x.uniform2f(d,1,1));x.uniform1f(k,R.opacity);x.uniform3f(f,R.color.r,R.color.g,R.color.b);x.uniform1f(e,R.rotation);x.uniform2fv(g,Q);H.setBlending(R.blending,R.blendEquation,R.blendSrc,R.blendDst);H.setDepthTest(R.depthTest);H.setDepthWrite(R.depthWrite);R.map&&R.map.image&&R.map.image.width?a.setTexture(R.map,0):a.setTexture(G,0);x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)}H.enable(x.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var g=new THREE.Texture(void 0,b);e.load(a,function(a){g.image=a;g.needsUpdate=!0;c&&c(g)},void 0,function(a){d&&d(a)});g.sourceFile=a;return g},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var g=new THREE.CubeTexture([],b),f=0;b=function(b){e.load(a[b],function(a){g.images[b]=a;f+=1;6===f&&(g.needsUpdate=!0,c&&c(g))},void 0,
d)};for(var h=0,k=a.length;h<k;++h)b(h);return g},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,g=document.createElement("canvas");
g.width=d;g.height=e;var f=g.getContext("2d");f.drawImage(a,0,0);for(var h=f.getImageData(0,0,d,e).data,k=f.createImageData(d,e),l=k.data,n=0;n<d;n++)for(var p=0;p<e;p++){var m=0>p-1?0:p-1,q=p+1>e-1?e-1:p+1,t=0>n-1?0:n-1,r=n+1>d-1?d-1:n+1,u=[],w=[0,0,h[4*(p*d+n)]/255*b];u.push([-1,0,h[4*(p*d+t)]/255*b]);u.push([-1,-1,h[4*(m*d+t)]/255*b]);u.push([0,-1,h[4*(m*d+n)]/255*b]);u.push([1,-1,h[4*(m*d+r)]/255*b]);u.push([1,0,h[4*(p*d+r)]/255*b]);u.push([1,1,h[4*(q*d+r)]/255*b]);u.push([0,1,h[4*(q*d+n)]/255*
b]);u.push([-1,1,h[4*(q*d+t)]/255*b]);m=[];t=u.length;for(q=0;q<t;q++){var r=u[q],v=u[(q+1)%t],r=[r[0]-w[0],r[1]-w[1],r[2]-w[2]],v=[v[0]-w[0],v[1]-w[1],v[2]-w[2]];m.push(c([r[1]*v[2]-r[2]*v[1],r[2]*v[0]-r[0]*v[2],r[0]*v[1]-r[1]*v[0]]))}u=[0,0,0];for(q=0;q<m.length;q++)u[0]+=m[q][0],u[1]+=m[q][1],u[2]+=m[q][2];u[0]/=m.length;u[1]/=m.length;u[2]/=m.length;w=4*(p*d+n);l[w]=(u[0]+1)/2*255|0;l[w+1]=(u[1]+1)/2*255|0;l[w+2]=255*u[2]|0;l[w+3]=255}f.putImageData(k,0,0);return g},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),g=Math.floor(255*c.r),f=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=g,e[3*h+1]=f,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Group,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face.toLowerCase()][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),g=e.length,f=[];for(a=0;a<g;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;f.push(h.path)}return{paths:f,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var g=[],f,h,k,l,n,p,m,q,t,r,u,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);
break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*c+d;n=b[a++]*c;q=b[a++]*c+d;t=b[a++]*c;e.quadraticCurveTo(q,t,k,n);if(f=g[g.length-1])for(p=f.x,m=f.y,f=1,h=this.divisions;f<=h;f++){var v=f/h;THREE.Shape.Utils.b2(v,p,q,k);THREE.Shape.Utils.b2(v,m,t,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,q=b[a++]*c+d,t=b[a++]*c,r=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(q,t,r,u,k,n),f=g[g.length-1])for(p=f.x,m=f.y,f=1,h=this.divisions;f<=h;f++)v=f/h,THREE.Shape.Utils.b3(v,p,q,r,k),THREE.Shape.Utils.b3(v,
m,t,u,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",g=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=g;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(g=c.length;e<g;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,g=b-1,f=0;f<b;g=f++)e+=a[g].x*a[f].y-a[f].x*a[g].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var g=[],f=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)f[l]=l;else for(l=0;l<e;l++)f[l]=e-1-l;var p=2*e;for(l=e-1;2<e;){if(0>=p--){console.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var m;a:{var q=m=void 0,t=void 0,r=void 0,
u=void 0,w=void 0,v=void 0,B=void 0,x=void 0,q=a[f[k]].x,t=a[f[k]].y,r=a[f[l]].x,u=a[f[l]].y,w=a[f[n]].x,v=a[f[n]].y;if(1E-10>(r-q)*(v-t)-(u-t)*(w-q))m=!1;else{var H=void 0,I=void 0,z=void 0,D=void 0,G=void 0,O=void 0,C=void 0,F=void 0,K=void 0,L=void 0,K=F=C=x=B=void 0,H=w-r,I=v-u,z=q-w,D=t-v,G=r-q,O=u-t;for(m=0;m<e;m++)if(B=a[f[m]].x,x=a[f[m]].y,!(B===q&&x===t||B===r&&x===u||B===w&&x===v)&&(C=B-q,F=x-t,K=B-r,L=x-u,B-=w,x-=v,K=H*L-I*K,C=G*F-O*C,F=z*x-D*B,-1E-10<=K&&-1E-10<=F&&-1E-10<=C)){m=!1;break a}m=
!0}}if(m){g.push([a[f[k]],a[f[l]],a[f[n]]]);h.push([f[k],f[l],f[n]]);k=l;for(n=l+1;n<e;k++,n++)f[k]=f[n];e--;p=2*e}}return d?h:g};a.Triangulate.area=b;return a})(THREE.FontUtils);THREE.typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};"undefined"!==typeof self&&(self._typeface_js=THREE.typeface_js);
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain);this.autoplay=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.constructor=THREE.Audio;THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.autoplay&&b.play()})};c.send();return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.start(0,this.startTime);a.playbackRate.value=this.playbackRate;this.isPlaying=!0;this.source=a;this.connect()}};THREE.Audio.prototype.pause=function(){this.source.stop();this.startTime=this.context.currentTime};
THREE.Audio.prototype.stop=function(){this.source.stop();this.startTime=0};THREE.Audio.prototype.connect=function(){void 0!==this.filter?(this.source.connect(this.filter),this.filter.connect(this.panner)):this.source.connect(this.panner)};THREE.Audio.prototype.disconnect=function(){void 0!==this.filter?(this.source.disconnect(this.filter),this.filter.disconnect(this.panner)):this.source.disconnect(this.panner)};
THREE.Audio.prototype.setFilter=function(a){!0===this.isPlaying?(this.disconnect(),this.filter=a,this.connect()):this.filter=a};THREE.Audio.prototype.getFilter=function(){return this.filter};THREE.Audio.prototype.setPlaybackRate=function(a){this.playbackRate=a;!0===this.isPlaying&&(this.source.playbackRate.value=this.playbackRate)};THREE.Audio.prototype.getPlaybackRate=function(){return this.playbackRate};THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};
THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.getLoop=function(){return this.source.loop};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.getRefDistance=function(){return this.panner.refDistance};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.Audio.prototype.getRolloffFactor=function(){return this.panner.rolloffFactor};
THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};THREE.Audio.prototype.getVolume=function(){return this.gain.gain.value};THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};
THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3;return function(e){THREE.Object3D.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var g=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.setPosition(a.x,a.y,a.z);e.setOrientation(d.x,d.y,d.z,g.x,g.y,g.z)}}();THREE.Curve=function(){};
THREE.Curve.prototype.getPoint=function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,g=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),g+=c.distanceTo(d),b.push(g),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,g;g=b?b:a*c[e-1];for(var f=0,h=e-1,k;f<=h;)if(d=Math.floor(f+(h-f)/2),k=c[d]-g,0>k)f=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===g)return d/(e-1);f=c[d];return c=(d+(g-f)/(c[d+1]-f))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var g=e*e;return(2*b-2*c+a+d)*e*g+(-3*b+3*c-2*a-d)*g+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,g,f;b=c=Number.NEGATIVE_INFINITY;e=g=Number.POSITIVE_INFINITY;var h,k,l,n,p=a[0]instanceof THREE.Vector3;n=p?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<g&&(g=h.y),p&&(h.z>d?d=h.z:h.z<f&&(f=h.z)),n.add(h);a={minX:e,minY:g,maxX:b,maxY:c};p&&(a.maxZ=d,a.minZ=f);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,g,f,h,k;d=0;for(e=a.length;d<e;d++)g=a[d],f=g.x,h=g.y,k=f/c.maxX,k=b.getUtoTmapping(k,f),f=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),g.x=f.x+k.x,g.y=f.y+k.y;return a};THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;
THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),g=this.actions[this.actions.length-1].args,g=new THREE.QuadraticBezierCurve(new THREE.Vector2(g[g.length-2],g[g.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(g);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,g){var f=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,g));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:f})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,g){var f=this.actions[this.actions.length-1].args;this.absarc(a+f[f.length-2],b+f[f.length-1],c,d,e,g)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,g){this.absellipse(a,b,c,c,d,e,g)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,g,f,h){var k=this.actions[this.actions.length-1].args;this.absellipse(a+k[k.length-2],b+k[k.length-1],c,d,e,g,f,h)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,g,f,h){var k=[a,b,c,d,e,g,f,h||0];a=new THREE.EllipseCurve(a,b,c,d,e,g,f,h);this.curves.push(a);a=a.getPoint(1);k.push(a.x);k.push(a.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:k})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,g,f,h,k,l,n,p,m,q,t,r;d=0;for(e=this.actions.length;d<e;d++)switch(g=this.actions[d],f=g.action,g=g.args,f){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(g[0],g[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(g[0],g[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=g[2];k=g[3];p=g[0];m=g[1];0<c.length?(f=c[c.length-1],q=f.x,t=f.y):(f=this.actions[d-
1].args,q=f[f.length-2],t=f[f.length-1]);for(g=1;g<=a;g++)r=g/a,f=THREE.Shape.Utils.b2(r,q,p,h),r=THREE.Shape.Utils.b2(r,t,m,k),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.BEZIER_CURVE_TO:h=g[4];k=g[5];p=g[0];m=g[1];l=g[2];n=g[3];0<c.length?(f=c[c.length-1],q=f.x,t=f.y):(f=this.actions[d-1].args,q=f[f.length-2],t=f[f.length-1]);for(g=1;g<=a;g++)r=g/a,f=THREE.Shape.Utils.b3(r,q,p,l,h),r=THREE.Shape.Utils.b3(r,t,m,n,k),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.CSPLINE_THRU:f=
this.actions[d-1].args;r=[new THREE.Vector2(f[f.length-2],f[f.length-1])];f=a*g[0].length;r=r.concat(g[0]);r=new THREE.SplineCurve(r);for(g=1;g<=f;g++)c.push(r.getPointAt(g/f));break;case THREE.PathActions.ARC:h=g[0];k=g[1];m=g[2];l=g[3];f=g[4];p=!!g[5];q=f-l;t=2*a;for(g=1;g<=t;g++)r=g/t,p||(r=1-r),r=l+r*q,f=h+m*Math.cos(r),r=k+m*Math.sin(r),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.ELLIPSE:h=g[0];k=g[1];m=g[2];n=g[3];l=g[4];f=g[5];p=!!g[6];var u=g[7];q=f-l;t=2*a;var w,v;0!==u&&
(w=Math.cos(u),v=Math.sin(u));for(g=1;g<=t;g++){r=g/t;p||(r=1-r);r=l+r*q;f=h+m*Math.cos(r);r=k+n*Math.sin(r);if(0!==u){var B=f;f=(B-h)*w-(r-k)*v+h;r=(B-h)*v+(r-k)*w+k}c.push(new THREE.Vector2(f,r))}}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&
a.x<=h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d===THREE.PathActions.MOVE_TO&&0!==g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!==g.actions.length&&f.push(g);return f}(this.actions);if(0===e.length)return[];if(!0===b)return c(e);var g,f,h,k=[];if(1===e.length)return f=e[0],h=new THREE.Shape,h.actions=f.actions,h.curves=f.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),
l=a?!l:l;h=[];var n=[],p=[],m=0,q;n[m]=void 0;p[m]=[];var t,r;t=0;for(r=e.length;t<r;t++)f=e[t],q=f.getPoints(),g=THREE.Shape.Utils.isClockWise(q),(g=a?!g:g)?(!l&&n[m]&&m++,n[m]={s:new THREE.Shape,p:q},n[m].s.actions=f.actions,n[m].s.curves=f.curves,l&&m++,p[m]=[]):p[m].push({h:f,p:q[0]});if(!n[0])return c(e);if(1<n.length){t=!1;r=[];f=0;for(e=n.length;f<e;f++)h[f]=[];f=0;for(e=n.length;f<e;f++)for(g=p[f],l=0;l<g.length;l++){m=g[l];q=!0;for(var u=0;u<n.length;u++)d(m.p,n[u].p)&&(f!==u&&r.push({froms:f,
tos:u,hole:l}),q?(q=!1,h[u].push(m)):t=!0);q&&h[f].push(m)}0<r.length&&(t||(p=h))}t=0;for(r=n.length;t<r;t++)for(h=n[t].s,k.push(h),f=p[t],e=0,g=f.length;e<g;e++)h.holes.push(f[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,p=a.y-d.y,z=h*k-g*l,D=h*n-g*p;if(1E-10<Math.abs(z)){if(0<z){if(0>D||D>z)return[];k=l*n-k*p;if(0>k||k>z)return[]}else{if(0<D||D<z)return[];k=l*n-k*p;if(0<k||k<z)return[]}if(0===k)return!f||0!==D&&D!==z?[a]:[];if(k===z)return!f||0!==D&&D!==z?[b]:[];if(0===
D)return[d];if(D===z)return[e];f=k/z;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==D||l*n!==k*p)return[];h=0===g&&0===h;k=0===k&&0===l;if(h&&k)return a.x!==d.x||a.y!==d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,z=d.x,l=e,d=e.x):(b=e,z=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,z=d.y,l=e,d=e.y):(b=e,z=e.y,l=d,d=d.y));return k<=z?a<z?[]:a===z?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:
k===d?f?[]:[g]:a<=d?[g,h]:[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var g,f,h,k,l,n={};h=a.concat();g=0;for(f=b.length;g<f;g++)Array.prototype.push.apply(h,b[g]);g=0;for(f=h.length;g<f;g++)l=h[g].x+":"+h[g].y,void 0!==n[l]&&console.warn("THREE.Shape: Duplicate point",l),n[l]=g;g=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=
0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,p,I,z,D,G=[],O,C,F,K=0;for(n=b.length;K<n;K++)l.push(K);O=0;for(var L=2*
l.length;0<l.length;){L--;if(0>L){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(p=O;p<h.length;p++){I=h[p];n=-1;for(K=0;K<l.length;K++)if(z=l[K],D=I.x+":"+I.y+":"+z,void 0===G[D]){k=b[z];for(C=0;C<k.length;C++)if(z=k[C],c(p,C)&&!f(I,z)&&!g(I,z)){n=C;l.splice(K,1);O=h.slice(0,p+1);z=h.slice(p);C=k.slice(n);F=k.slice(0,n+1);h=O.concat(C).concat(F).concat(z);O=p;break}if(0<=n)break;G[D]=!0}if(0<=n)break}}return h}(a,b);var p=THREE.FontUtils.Triangulate(g,
!1);g=0;for(f=p.length;g<f;g++)for(k=p[g],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=n[l],void 0!==l&&(k[h]=l);return p.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-
a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};
THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:c-1],e=b[c],g=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);return c};
THREE.EllipseCurve=function(a,b,c,d,e,g,f,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=g;this.aClockwise=f;this.aRotation=h||0};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);var c=this.aY+this.yRadius*Math.sin(b);if(0!==this.aRotation){var b=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a;a=(e-this.aX)*b-(c-this.aY)*d+this.aX;c=(e-this.aX)*d+(c-this.aY)*b+this.aY}return new THREE.Vector2(a,c)};
THREE.ArcCurve=function(a,b,c,d,e,g){THREE.EllipseCurve.call(this,a,b,c,c,d,e,g)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],g=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,g.z,
b.z,a);return c});
THREE.CatmullRomCurve3=function(){function a(){}var b=new THREE.Vector3,c=new a,d=new a,e=new a;a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,n,p){a=((b-a)/e-(c-a)/(e+n)+(c-b)/n)*n;d=((c-b)/n-(d-b)/(n+p)+(d-c)/p)*n;this.init(b,c,a,d)};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*
b*a};return THREE.Curve.create(function(a){this.points=a||[]},function(a){var f=this.points,h,k;k=f.length;2>k&&console.log("duh, you need at least 2 points");a*=k-1;h=Math.floor(a);a-=h;0===a&&h===k-1&&(h=k-2,a=1);var l,n,p;0===h?(b.subVectors(f[0],f[1]).add(f[0]),l=b):l=f[h-1];n=f[h];p=f[h+1];h+2<k?f=f[h+2]:(b.subVectors(f[k-1],f[k-2]).add(f[k-2]),f=b);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var m="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(n),m);
h=Math.pow(n.distanceToSquared(p),m);m=Math.pow(p.distanceToSquared(f),m);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>m&&(m=h);c.initNonuniformCatmullRom(l.x,n.x,p.x,f.x,k,h,m);d.initNonuniformCatmullRom(l.y,n.y,p.y,f.y,k,h,m);e.initNonuniformCatmullRom(l.z,n.z,p.z,f.z,k,h,m)}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,n.x,p.x,f.x,k),d.initCatmullRom(l.y,n.y,p.y,f.y,k),e.initCatmullRom(l.z,n.z,p.z,f.z,k));return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a))})}();
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],g=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,g.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var g=a.hierarchy[b].keys[c].morphTargets[e];d[g]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var f=
{};for(g in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===g){f[g]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(f[g]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=f}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};
THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)},reset:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});
var d=this.data.name,e=c.animationCache.animations,g=e[d];void 0===g&&(g={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:c.matrix},e[d]=g);for(c=0;3>c;c++){for(var d=this.keyTypes[c],e=this.data.hierarchy[a].keys[0],f=this.getNextKeyWith(d,a,1);f.time<this.currentTime&&f.index>e.index;)e=f,f=this.getNextKeyWith(d,a,f.index+1);g.prevKey[d]=e;g.nextKey[d]=f}}},resetBlendWeights:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a].animationCache;void 0!==
c&&(c=c.blending,c.positionWeight=0,c.quaternionWeight=0,c.scaleWeight=0)}},update:function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,p,m,q,t,r;e=(a.length-1)*b;p=Math.floor(e);e-=p;c[0]=0===p?p:p-1;c[1]=p;c[2]=p>a.length-2?p:p+1;c[3]=p>a.length-3?p:p+2;p=a[c[0]];q=a[c[1]];t=a[c[2]];r=a[c[3]];c=e*e;m=e*c;d[0]=g(p[0],q[0],t[0],r[0],e,c,m);d[1]=g(p[1],q[1],t[1],r[1],e,c,m);d[2]=g(p[2],q[2],t[2],r[2],e,c,m);return d},g=function(a,b,c,d,
e,g,m){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*m+(-3*(b-c)-2*a-d)*g+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var g=this.hierarchy.length;f<g;f++)for(var k=this.hierarchy[f],l=k.animationCache.animations[this.data.name],n=k.animationCache.blending,p=0;3>p;p++){var m=this.keyTypes[p],
q=l.prevKey[m],t=l.nextKey[m];if(0<this.timeScale&&t.time<=this.currentTime||0>this.timeScale&&q.time>=this.currentTime){q=this.data.hierarchy[f].keys[0];for(t=this.getNextKeyWith(m,f,1);t.time<this.currentTime&&t.index>q.index;)q=t,t=this.getNextKeyWith(m,f,t.index+1);l.prevKey[m]=q;l.nextKey[m]=t}var r=(this.currentTime-q.time)/(t.time-q.time),u=q[m],w=t[m];0>r&&(r=0);1<r&&(r=1);if("pos"===m)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(w[0]-u[0])*r,c.y=u[1]+(w[1]-u[1])*r,
c.z=u[2]+(w[2]-u[2])*r,q=this.weight/(this.weight+n.positionWeight),k.position.lerp(c,q),n.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,q.index-1).pos,a[1]=u,a[2]=w,a[3]=this.getNextKeyWith("pos",f,t.index+1).pos,r=.33*r+.33,t=e(a,r),q=this.weight/(this.weight+n.positionWeight),n.positionWeight+=this.weight,m=k.position,m.x+=(t[0]-m.x)*q,m.y+=(t[1]-
m.y)*q,m.z+=(t[2]-m.z)*q,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(r=e(a,1.01*r),b.set(r[0],r[1],r[2]),b.sub(m),b.y=0,b.normalize(),r=Math.atan2(b.x,b.z),k.rotation.set(0,r,0))}else"rot"===m?(THREE.Quaternion.slerp(u,w,d,r),0===n.quaternionWeight?(k.quaternion.copy(d),n.quaternionWeight=this.weight):(q=this.weight/(this.weight+n.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,q),n.quaternionWeight+=this.weight)):"scl"===m&&(c.x=u[0]+(w[0]-u[0])*r,c.y=
u[1]+(w[1]-u[1])*r,c.z=u[2]+(w[2]-u[2])*r,q=this.weight/(this.weight+n.scaleWeight),k.scale.lerp(c,q),n.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]},getPrevKeyWith:function(a,b,c){var d=
this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]}};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var g=c[e],f=this.getNextKeyWith(g,a,0);f&&f.apply(g)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}},update:function(a){if(!1!==
this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var g=d.prevKey,f=d.nextKey;if(f.time<=this.currentTime){for(;f.time<this.currentTime&&f.index>g.index;)g=f,f=e[g.index+1];d.prevKey=g;d.nextKey=f}f.time>=this.currentTime?g.interpolate(f,this.currentTime):
g.interpolate(f,f.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]},getPrevKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]}};
THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);var b=this.duration/this.frames;a=Math.floor(this.currentTime/b);var c=this.mesh.morphTargetInfluences;a!==this.currentFrame&&(c[this.lastFrame]=0,c[this.currentFrame]=
1,c[a]=0,this.lastFrame=this.currentFrame,this.currentFrame=a);b=this.currentTime%b/b;c[a]=b;c[this.lastFrame]=1-b}}};
THREE.BoxGeometry=function(a,b,c,d,e,g){function f(a,b,c,d,e,f,g,r){var u,w=h.widthSegments,v=h.heightSegments,B=e/2,x=f/2,H=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",v=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",w=h.depthSegments;var I=w+1,z=v+1,D=e/w,G=f/v,O=new THREE.Vector3;O[u]=0<g?1:-1;for(e=0;e<z;e++)for(f=0;f<I;f++){var C=new THREE.Vector3;C[a]=(f*D-B)*c;C[b]=(e*G-x)*d;C[u]=g;h.vertices.push(C)}for(e=
0;e<v;e++)for(f=0;f<w;f++)x=f+I*e,a=f+I*(e+1),b=f+1+I*(e+1),c=f+1+I*e,d=new THREE.Vector2(f/w,1-e/v),g=new THREE.Vector2(f/w,1-(e+1)/v),u=new THREE.Vector2((f+1)/w,1-(e+1)/v),B=new THREE.Vector2((f+1)/w,1-e/v),x=new THREE.Face3(x+H,a+H,c+H),x.normal.copy(O),x.vertexNormals.push(O.clone(),O.clone(),O.clone()),x.materialIndex=r,h.faces.push(x),h.faceVertexUvs[0].push([d,g,B]),x=new THREE.Face3(a+H,b+H,c+H),x.normal.copy(O),x.vertexNormals.push(O.clone(),O.clone(),O.clone()),x.materialIndex=r,h.faces.push(x),
h.faceVertexUvs[0].push([g.clone(),u,B.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:g};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=g||1;var h=this;d=a/2;e=b/2;g=c/2;f("z","y",-1,-1,c,b,d,0);f("z","y",1,-1,c,b,-d,1);f("x","z",1,1,a,c,e,2);f("x","z",1,-1,a,c,-e,3);f("x","y",1,-1,a,b,g,4);f("x","y",-1,-1,a,b,-g,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;THREE.BoxGeometry.prototype.clone=function(){return new THREE.BoxGeometry(this.parameters.width,this.parameters.height,this.parameters.depth,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.depthSegments)};THREE.CubeGeometry=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,g=[];e=new THREE.Vector3;var f=new THREE.Vector2(.5,.5);this.vertices.push(e);g.push(f);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);g.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([g[e].clone(),g[e+1].clone(),f.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CircleGeometry.prototype.clone=function(){return new THREE.CircleGeometry(this.parameters.radius,this.parameters.segments,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.CircleBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,g=new Float32Array(3*e),f=new Float32Array(3*e),e=new Float32Array(2*e);f[3]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,l=2;h<=b;h++,k+=3,l+=2){var n=c+h/b*d;g[k]=a*Math.cos(n);g[k+1]=a*Math.sin(n);f[k+2]=1;e[l]=(g[k]/a+1)/2;e[l+1]=(g[k+1]/a+1)/2}c=
[];for(k=1;k<=b;k++)c.push(k),c.push(k+1),c.push(0);this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1));this.addAttribute("position",new THREE.BufferAttribute(g,3));this.addAttribute("normal",new THREE.BufferAttribute(f,3));this.addAttribute("uv",new THREE.BufferAttribute(e,2));this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.CircleBufferGeometry.prototype.constructor=THREE.CircleBufferGeometry;
THREE.CircleBufferGeometry.prototype.clone=function(){var a=new THREE.CircleBufferGeometry(this.parameters.radius,this.parameters.segments,this.parameters.thetaStart,this.parameters.thetaLength);a.copy(this);return a};
THREE.CylinderGeometry=function(a,b,c,d,e,g,f,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:g,thetaStart:f,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;g=void 0!==g?g:!1;f=void 0!==f?f:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,n,p=[],m=[];for(n=0;n<=e;n++){var q=[],t=[],r=n/e,u=r*(b-a)+a;for(l=0;l<=d;l++){var w=l/d,v=new THREE.Vector3;v.x=u*Math.sin(w*h+
f);v.y=-r*c+k;v.z=u*Math.cos(w*h+f);this.vertices.push(v);q.push(this.vertices.length-1);t.push(new THREE.Vector2(w,1-r))}p.push(q);m.push(t)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(f=this.vertices[p[0][l]].clone(),h=this.vertices[p[0][l+1]].clone()):(f=this.vertices[p[1][l]].clone(),h=this.vertices[p[1][l+1]].clone()),f.setY(Math.sqrt(f.x*f.x+f.z*f.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),n=0;n<e;n++){var q=p[n][l],t=p[n+1][l],r=p[n+1][l+1],u=p[n][l+1],w=f.clone(),v=f.clone(),
B=h.clone(),x=h.clone(),H=m[n][l].clone(),I=m[n+1][l].clone(),z=m[n+1][l+1].clone(),D=m[n][l+1].clone();this.faces.push(new THREE.Face3(q,t,u,[w,v,x]));this.faceVertexUvs[0].push([H,I,D]);this.faces.push(new THREE.Face3(t,r,u,[v.clone(),B,x.clone()]));this.faceVertexUvs[0].push([I.clone(),z,D.clone()])}if(!1===g&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)q=p[0][l],t=p[0][l+1],r=this.vertices.length-1,w=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),B=new THREE.Vector3(0,
1,0),H=m[0][l].clone(),I=m[0][l+1].clone(),z=new THREE.Vector2(I.x,0),this.faces.push(new THREE.Face3(q,t,r,[w,v,B],void 0,1)),this.faceVertexUvs[0].push([H,I,z]);if(!1===g&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)q=p[e][l+1],t=p[e][l],r=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),B=new THREE.Vector3(0,-1,0),H=m[e][l+1].clone(),I=m[e][l].clone(),z=new THREE.Vector2(I.x,1),this.faces.push(new THREE.Face3(q,t,r,[w,v,B],void 0,2)),this.faceVertexUvs[0].push([H,
I,z]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.CylinderGeometry.prototype.clone=function(){return new THREE.CylinderGeometry(this.parameters.radiusTop,this.parameters.radiusBottom,this.parameters.height,this.parameters.radialSegments,this.parameters.heightSegments,this.parameters.openEnded,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.EdgesGeometry=function(a,b){THREE.BufferGeometry.call(this);var c=Math.cos(THREE.Math.degToRad(void 0!==b?b:1)),d=[0,0],e={},g=function(a,b){return a-b},f=["a","b","c"],h;a instanceof THREE.BufferGeometry?(h=new THREE.Geometry,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var k=h.vertices;h=h.faces;for(var l=0,n=h.length;l<n;l++)for(var p=h[l],m=0;3>m;m++){d[0]=p[f[m]];d[1]=p[f[(m+1)%3]];d.sort(g);var q=d.toString();void 0===e[q]?e[q]={vert1:d[0],vert2:d[1],face1:l,
face2:void 0}:e[q].face2=l}d=[];for(q in e)if(g=e[q],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=c)f=k[g.vert1],d.push(f.x),d.push(f.y),d.push(f.z),f=k[g.vert2],d.push(f.x),d.push(f.y),d.push(f.z);this.addAttribute("position",new THREE.BufferAttribute(new Float32Array(d),3))};THREE.EdgesGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.EdgesGeometry.prototype.constructor=THREE.EdgesGeometry;
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=
!0):-1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(A=a.length;0<=--A;){c=A;d=A-1;0>d&&(d=a.length-1);for(var e=0,f=q+2*n,e=0;e<f;e++){var g=U*e,h=U*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+O,g=g+O,l=l+O,h=h+O;G.faces.push(new THREE.Face3(k,g,h));G.faces.push(new THREE.Face3(g,l,h));k=w.generateSideWallUV(G,k,g,l,h);G.faceVertexUvs[0].push([k[0],k[1],k[3]]);G.faceVertexUvs[0].push([k[1],
k[2],k[3]])}}}function g(a,b,c){G.vertices.push(new THREE.Vector3(a,b,c))}function f(a,b,c){a+=O;b+=O;c+=O;G.faces.push(new THREE.Face3(a,b,c));a=w.generateTopUV(G,a,b,c);G.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,m=void 0!==b.curveSegments?b.curveSegments:12,q=void 0!==b.steps?b.steps:1,t=b.extrudePath,
r,u=!1,w=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,v,B,x,H;t&&(r=t.getSpacedPoints(q),u=!0,p=!1,v=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(t,q,!1),B=new THREE.Vector3,x=new THREE.Vector3,H=new THREE.Vector3);p||(l=k=n=0);var I,z,D,G=this,O=this.vertices.length,t=a.extractPoints(m),m=t.shape,C=t.holes;if(t=!THREE.Shape.Utils.isClockWise(m)){m=m.reverse();z=0;for(D=C.length;z<D;z++)I=C[z],THREE.Shape.Utils.isClockWise(I)&&(C[z]=I.reverse());t=
!1}var F=THREE.Shape.Utils.triangulateShape(m,C),K=m;z=0;for(D=C.length;z<D;z++)I=C[z],m=m.concat(I);var L,E,J,y,P,U=m.length,Q,R=F.length,t=[],A=0;J=K.length;L=J-1;for(E=A+1;A<J;A++,L++,E++)L===J&&(L=0),E===J&&(E=0),t[A]=d(K[A],K[L],K[E]);var ia=[],Z,fa=t.concat();z=0;for(D=C.length;z<D;z++){I=C[z];Z=[];A=0;J=I.length;L=J-1;for(E=A+1;A<J;A++,L++,E++)L===J&&(L=0),E===J&&(E=0),Z[A]=d(I[A],I[L],I[E]);ia.push(Z);fa=fa.concat(Z)}for(L=0;L<n;L++){J=L/n;y=k*(1-J);E=l*Math.sin(J*Math.PI/2);A=0;for(J=K.length;A<
J;A++)P=c(K[A],t[A],E),g(P.x,P.y,-y);z=0;for(D=C.length;z<D;z++)for(I=C[z],Z=ia[z],A=0,J=I.length;A<J;A++)P=c(I[A],Z[A],E),g(P.x,P.y,-y)}E=l;for(A=0;A<U;A++)P=p?c(m[A],fa[A],E):m[A],u?(x.copy(v.normals[0]).multiplyScalar(P.x),B.copy(v.binormals[0]).multiplyScalar(P.y),H.copy(r[0]).add(x).add(B),g(H.x,H.y,H.z)):g(P.x,P.y,0);for(J=1;J<=q;J++)for(A=0;A<U;A++)P=p?c(m[A],fa[A],E):m[A],u?(x.copy(v.normals[J]).multiplyScalar(P.x),B.copy(v.binormals[J]).multiplyScalar(P.y),H.copy(r[J]).add(x).add(B),g(H.x,
H.y,H.z)):g(P.x,P.y,h/q*J);for(L=n-1;0<=L;L--){J=L/n;y=k*(1-J);E=l*Math.sin(J*Math.PI/2);A=0;for(J=K.length;A<J;A++)P=c(K[A],t[A],E),g(P.x,P.y,h+y);z=0;for(D=C.length;z<D;z++)for(I=C[z],Z=ia[z],A=0,J=I.length;A<J;A++)P=c(I[A],Z[A],E),u?g(P.x,P.y+r[q-1].y,r[q-1].x+y):g(P.x,P.y,h+y)}(function(){if(p){var a;a=0*U;for(A=0;A<R;A++)Q=F[A],f(Q[2]+a,Q[1]+a,Q[0]+a);a=q+2*n;a*=U;for(A=0;A<R;A++)Q=F[A],f(Q[0]+a,Q[1]+a,Q[2]+a)}else{for(A=0;A<R;A++)Q=F[A],f(Q[2],Q[1],Q[0]);for(A=0;A<R;A++)Q=F[A],f(Q[0]+U*q,Q[1]+
U*q,Q[2]+U*q)}})();(function(){var a=0;e(K,a);a+=K.length;z=0;for(D=C.length;z<D;z++)I=C[z],e(I,a),a+=I.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===Array.isArray(a)&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,g,f,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,g=l.length;e<g;e++)f=l[e],THREE.Shape.Utils.isClockWise(f)&&(l[e]=f.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(g=l.length;e<g;e++)f=l[e],
k=k.concat(f);l=k.length;g=n.length;for(e=0;e<l;e++)f=k[e],this.vertices.push(new THREE.Vector3(f.x,f.y,0));for(e=0;e<g;e++)l=n[e],k=l[0]+h,f=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,f,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,f,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),g=1/b,f=0,h=b;f<=h;f++)for(var k=c+f*g*d,l=Math.cos(k),n=Math.sin(k),k=0,p=a.length;k<p;k++){var m=a[k],q=new THREE.Vector3;q.x=l*m.x-n*m.y;q.y=n*m.x+l*m.y;q.z=m.z;this.vertices.push(q)}c=a.length;f=0;for(h=b;f<h;f++)for(k=0,p=a.length-1;k<p;k++){b=n=k+c*f;d=n+c;var l=n+1+c,n=n+1,m=f*g,q=k*e,t=
m+g,r=q+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(m,q),new THREE.Vector2(t,q),new THREE.Vector2(m,r)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(t,q),new THREE.Vector2(t,r),new THREE.Vector2(m,r)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneGeometry.prototype.clone=function(){return new THREE.PlaneGeometry(this.parameters.width,this.parameters.height,this.parameters.widthSegments,this.parameters.heightSegments)};
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,g=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var f=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(f*h*3);a=new Float32Array(f*h*3);for(var n=new Float32Array(f*h*2),p=0,m=0,q=0;q<h;q++)for(var t=q*l-g,r=0;r<f;r++)b[p]=r*k-e,b[p+1]=-t,a[p+2]=1,n[m]=r/c,n[m+1]=1-q/d,p+=3,m+=2;p=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*
d*6);for(q=0;q<d;q++)for(r=0;r<c;r++)g=r+f*(q+1),h=r+1+f*(q+1),k=r+1+f*q,e[p]=r+f*q,e[p+1]=g,e[p+2]=k,e[p+3]=g,e[p+4]=h,e[p+5]=k,p+=6;this.setIndex(new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(n,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.PlaneBufferGeometry.prototype.clone=function(){var a=new THREE.PlaneBufferGeometry(this.parameters.width,this.parameters.height,this.parameters.widthSegments,this.parameters.heightSegments);a.copy(this);return a};
THREE.RingGeometry=function(a,b,c,d,e,g){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:g};a=a||0;b=b||50;e=void 0!==e?e:0;g=void 0!==g?g:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var f,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(f=0;f<c+1;f++){var n=new THREE.Vector3,p=e+f/c*g;n.x=k*Math.cos(p);n.y=k*Math.sin(p);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,
(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),f=0;f<c;f++)g=p=f+e,l=p+c+1,n=p+c+2,this.faces.push(new THREE.Face3(g,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[g].clone(),h[l].clone(),h[n].clone()]),g=p,l=p+c+2,n=p+1,this.faces.push(new THREE.Face3(g,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[g].clone(),h[l].clone(),h[n].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;THREE.RingGeometry.prototype.clone=function(){return new THREE.RingGeometry(this.parameters.innerRadius,this.parameters.outerRadius,this.parameters.thetaSegments,this.parameters.phiSegments,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.SphereGeometry=function(a,b,c,d,e,g,f){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:g,thetaLength:f};this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,g,f))};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;
THREE.SphereGeometry.prototype.clone=function(){return new THREE.SphereGeometry(this.parameters.radius,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.phiStart,this.parameters.phiLength,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.SphereBufferGeometry=function(a,b,c,d,e,g,f){THREE.BufferGeometry.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:g,thetaLength:f};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;g=void 0!==g?g:0;f=void 0!==f?f:Math.PI;for(var h=g+f,k=(b+1)*(c+1),l=new THREE.BufferAttribute(new Float32Array(3*k),3),n=new THREE.BufferAttribute(new Float32Array(3*
k),3),k=new THREE.BufferAttribute(new Float32Array(2*k),2),p=0,m=[],q=new THREE.Vector3,t=0;t<=c;t++){for(var r=[],u=t/c,w=0;w<=b;w++){var v=w/b,B=-a*Math.cos(d+v*e)*Math.sin(g+u*f),x=a*Math.cos(g+u*f),H=a*Math.sin(d+v*e)*Math.sin(g+u*f);q.set(B,x,H).normalize();l.setXYZ(p,B,x,H);n.setXYZ(p,q.x,q.y,q.z);k.setXY(p,v,1-u);r.push(p);p++}m.push(r)}d=[];for(t=0;t<c;t++)for(w=0;w<b;w++)e=m[t][w+1],f=m[t][w],p=m[t+1][w],q=m[t+1][w+1],(0!==t||0<g)&&d.push(e,f,q),(t!==c-1||h<Math.PI)&&d.push(f,p,q);this.setIndex(new THREE.BufferAttribute(new Uint16Array(d),
1));this.addAttribute("position",l);this.addAttribute("normal",n);this.addAttribute("uv",k);this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.SphereBufferGeometry.prototype.constructor=THREE.SphereBufferGeometry;
THREE.SphereBufferGeometry.prototype.clone=function(){var a=new THREE.SphereBufferGeometry(this.parameters.radius,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.phiStart,this.parameters.phiLength,this.parameters.thetaStart,this.parameters.thetaLength);a.copy(this);return a};
THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var g=new THREE.Vector3,f=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var n=l/d*e,p=k/c*Math.PI*2;g.x=a*Math.cos(n);g.y=a*Math.sin(n);var m=new THREE.Vector3;m.x=(a+b*Math.cos(p))*Math.cos(n);m.y=(a+b*Math.cos(p))*Math.sin(n);m.z=b*Math.sin(p);this.vertices.push(m);f.push(new THREE.Vector2(l/
d,k/c));h.push(m.clone().sub(g).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,g=(d+1)*k+l,n=new THREE.Face3(a,b,g,[h[a].clone(),h[b].clone(),h[g].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([f[a].clone(),f[b].clone(),f[g].clone()]),n=new THREE.Face3(b,e,g,[h[b].clone(),h[e].clone(),h[g].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([f[b].clone(),f[e].clone(),f[g].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;THREE.TorusGeometry.prototype.clone=function(){return new THREE.TorusGeometry(this.parameters.radius,this.parameters.tube,this.parameters.radialSegments,this.parameters.tubularSegments,this.parameters.arc)};
THREE.TorusKnotGeometry=function(a,b,c,d,e,g,f){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:g,heightScale:f};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;g=g||3;f=f||1;for(var k=Array(c),l=new THREE.Vector3,n=new THREE.Vector3,p=new THREE.Vector3,m=0;m<c;++m){k[m]=
Array(d);var q=m/c*2*e*Math.PI,t=h(q,g,e,a,f),q=h(q+.01,g,e,a,f);l.subVectors(q,t);n.addVectors(q,t);p.crossVectors(l,n);n.crossVectors(p,l);p.normalize();n.normalize();for(q=0;q<d;++q){var r=q/d*2*Math.PI,u=-b*Math.cos(r),r=b*Math.sin(r),w=new THREE.Vector3;w.x=t.x+u*n.x+r*p.x;w.y=t.y+u*n.y+r*p.y;w.z=t.z+u*n.z+r*p.z;k[m][q]=this.vertices.push(w)-1}}for(m=0;m<c;++m)for(q=0;q<d;++q)e=(m+1)%c,g=(q+1)%d,a=k[m][q],b=k[e][q],e=k[e][g],g=k[m][g],f=new THREE.Vector2(m/c,q/d),l=new THREE.Vector2((m+1)/c,
q/d),n=new THREE.Vector2((m+1)/c,(q+1)/d),p=new THREE.Vector2(m/c,(q+1)/d),this.faces.push(new THREE.Face3(a,b,g)),this.faceVertexUvs[0].push([f,l,p]),this.faces.push(new THREE.Face3(b,e,g)),this.faceVertexUvs[0].push([l.clone(),n,p.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TorusKnotGeometry.prototype.clone=function(){return new THREE.TorusKnotGeometry(this.parameters.radius,this.parameters.tube,this.parameters.radialSegments,this.parameters.tubularSegments,this.parameters.p,this.parameters.q,this.parameters.heightScale)};
THREE.TubeGeometry=function(a,b,c,d,e,g){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;g=g||THREE.TubeGeometry.NoTaper;var f=[],h,k,l=b+1,n,p,m,q,t,r=new THREE.Vector3,u,w,v;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);w=u.normals;v=u.binormals;this.tangents=u.tangents;this.normals=w;this.binormals=v;for(u=0;u<l;u++)for(f[u]=[],n=u/(l-1),t=a.getPointAt(n),h=w[u],k=v[u],m=c*g(n),n=0;n<d;n++)p=
n/d*2*Math.PI,q=-m*Math.cos(p),p=m*Math.sin(p),r.copy(t),r.x+=q*h.x+p*k.x,r.y+=q*h.y+p*k.y,r.z+=q*h.z+p*k.z,f[u][n]=this.vertices.push(new THREE.Vector3(r.x,r.y,r.z))-1;for(u=0;u<b;u++)for(n=0;n<d;n++)g=e?(u+1)%b:u+1,l=(n+1)%d,a=f[u][n],c=f[g][n],g=f[g][l],l=f[u][l],r=new THREE.Vector2(u/b,n/d),w=new THREE.Vector2((u+1)/b,n/d),v=new THREE.Vector2((u+1)/b,(n+1)/d),h=new THREE.Vector2(u/b,(n+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([r,w,h]),this.faces.push(new THREE.Face3(c,
g,l)),this.faceVertexUvs[0].push([w.clone(),v,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],g=[],f=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,p;this.tangents=e;this.normals=g;this.binormals=f;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();g[0]=new THREE.Vector3;f[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);p=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));p<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();g[0].crossVectors(e[0],
h);f[0].crossVectors(e[0],g[0]);for(l=1;l<b;l++)g[l]=g[l-1].clone(),f[l]=f[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),g[l].applyMatrix4(k.makeRotationAxis(h,d))),f[l].crossVectors(e[l],g[l]);if(c)for(d=Math.acos(THREE.Math.clamp(g[0].dot(g[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(g[0],g[b-1]))&&(d=-d),l=1;l<b;l++)g[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),f[l].crossVectors(e[l],g[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function g(a,b,c,d){d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()],void 0,d);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function f(a,
b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),f=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],m=a.materialIndex,n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(f.clone().lerp(h,n/c)),r=c-n,t=0;t<=r;t++)l[n][t]=0===t&&n===c?p:e(p.clone().lerp(q,t/r))}for(n=0;n<c;n++)for(t=0;t<2*(c-n)-1;t++)d=Math.floor(t/2),0===t%2?g(l[n][d+1],l[n+1][d],l[n][d],m):g(l[n][d+1],l[n+1][d+1],l[n+1][d],m)}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/
2/Math.PI+.5,a.y));return a.clone()}THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var p=[],m=l=0,n=b.length;l<n;l+=3,m++){var q=a[b[l]],t=a[b[l+1]],r=a[b[l+2]];p[m]=new THREE.Face3(q.index,t.index,r.index,[q.clone(),t.clone(),r.clone()],void 0,m)}for(var u=new THREE.Vector3,l=0,n=p.length;l<n;l++)f(p[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<
n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,p=b[2].x,m=Math.max(d,Math.max(a,p)),q=Math.min(d,Math.min(a,p)),.9<m&&.1>q&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>p&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.PolyhedronGeometry.prototype.clone=function(){return(new THREE.PolyhedronGeometry(this.parameters.vertices,this.parameters.indices,this.parameters.radius,this.parameters.detail)).copy(this)};THREE.PolyhedronGeometry.prototype.copy=function(a){THREE.Geometry.prototype.copy.call(this,a);return this};
THREE.DodecahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,
12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b}};THREE.DodecahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;THREE.DodecahedronGeometry.prototype.clone=function(){var a=new THREE.DodecahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.IcosahedronGeometry.prototype.clone=function(){var a=new THREE.IcosahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};
THREE.OctahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;THREE.OctahedronGeometry.prototype.clone=function(){var a=new THREE.OctahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.TetrahedronGeometry.prototype.clone=function(){var a=new THREE.TetrahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,g=this.faceVertexUvs[0],f,h,k,l,n=b+1;for(f=0;f<=c;f++)for(l=f/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var p,m,q,t;for(f=0;f<c;f++)for(h=0;h<b;h++)a=f*n+h,d=f*n+h+1,l=(f+1)*n+h+1,k=(f+1)*n+h,p=new THREE.Vector2(h/b,f/c),m=new THREE.Vector2((h+1)/b,f/c),q=new THREE.Vector2((h+1)/b,(f+1)/c),t=new THREE.Vector2(h/b,(f+1)/c),e.push(new THREE.Face3(a,
d,k)),g.push([p,m,t]),e.push(new THREE.Face3(d,l,k)),g.push([m.clone(),q,t.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.WireframeGeometry=function(a){THREE.BufferGeometry.call(this);var b=[0,0],c={},d=function(a,b){return a-b},e=["a","b","c"];if(a instanceof THREE.Geometry){var g=a.vertices,f=a.faces,h=0,k=new Uint32Array(6*f.length);a=0;for(var l=f.length;a<l;a++)for(var n=f[a],p=0;3>p;p++){b[0]=n[e[p]];b[1]=n[e[(p+1)%3]];b.sort(d);var m=b.toString();void 0===c[m]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[m]=!0,h++)}b=new Float32Array(6*h);a=0;for(l=h;a<l;a++)for(p=0;2>p;p++)c=g[k[2*a+p]],h=6*a+3*p,b[h+0]=c.x,b[h+1]=c.y,
b[h+2]=c.z;this.addAttribute("position",new THREE.BufferAttribute(b,3))}else if(a instanceof THREE.BufferGeometry){if(null!==a.index){l=a.index.array;g=a.attributes.position;e=a.drawcalls;h=0;0===e.length&&a.addDrawCall(0,l.length);k=new Uint32Array(2*l.length);f=0;for(n=e.length;f<n;++f){a=e[f];p=a.start;m=a.count;a=p;for(var q=p+m;a<q;a+=3)for(p=0;3>p;p++)b[0]=l[a+p],b[1]=l[a+(p+1)%3],b.sort(d),m=b.toString(),void 0===c[m]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[m]=!0,h++)}b=new Float32Array(6*h);a=0;for(l=
h;a<l;a++)for(p=0;2>p;p++)h=6*a+3*p,c=k[2*a+p],b[h+0]=g.getX(c),b[h+1]=g.getY(c),b[h+2]=g.getZ(c)}else for(g=a.attributes.position.array,h=g.length/3,k=h/3,b=new Float32Array(6*h),a=0,l=k;a<l;a++)for(p=0;3>p;p++)h=18*a+6*p,k=9*a+3*p,b[h+0]=g[k],b[h+1]=g[k+1],b[h+2]=g[k+2],c=9*a+(p+1)%3*3,b[h+3]=g[c],b[h+4]=g[c+1],b[h+5]=g[c+2];this.addAttribute("position",new THREE.BufferAttribute(b,3))}};THREE.WireframeGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor=THREE.WireframeGeometry;THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,a,b)};THREE.AxisHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.translate(0,-.5,0);return function(c,d,e,g,f,h){THREE.Object3D.call(this);void 0===g&&(g=16776960);void 0===e&&(e=1);void 0===f&&(f=.2*e);void 0===h&&(h=.2*f);this.position.copy(d);f<e&&(this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:g})),this.line.matrixAutoUpdate=!1,this.add(this.line));this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:g}));
this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,f,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);b<a&&(this.line.scale.set(1,a-b,1),this.line.updateMatrix());this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){void 0!==this.line&&this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),c=new Float32Array(24),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(b,1));d.addAttribute("position",new THREE.BufferAttribute(c,3));THREE.LineSegments.call(this,d,new THREE.LineBasicMaterial({color:16776960}));void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(){var a=new THREE.Box3;return function(b){a.setFromObject(b);if(!a.empty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();
THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===g[a]&&(g[a]=[]);g[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),g={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.LineSegments.call(this,d,e);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=g;this.update()};THREE.CameraHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,f,h,k){c.set(f,h,k).unproject(d);e=b[e];if(void 0!==e)for(f=0,h=e.length;f<h;f++)a.vertices[e[f]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
-1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.EdgesGeometry(a.geometry,c),new THREE.LineBasicMaterial({color:b}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.EdgesHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=
!1;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,g=this.object.geometry,f=g.vertices,g=g.faces,h=0,k=0,l=g.length;k<l;k++){var n=g[k],p=n.normal;a.copy(f[n.a]).add(f[n.b]).add(f[n.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var g=0===e?this.color1:this.color2;c.colors.push(g,g,g,g)}THREE.LineSegments.call(this,c,d)};THREE.GridHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.rotateX(-Math.PI/2);for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);this.update()};
THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));b.dynamic=!0;c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.LineSegments.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var g=this.bones[e];g.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,g.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,g.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.translate(0,-.5,0);a.rotateX(-Math.PI/2);var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=3*c.faces.length:c instanceof THREE.BufferGeometry&&(b=c.attributes.normal.count);c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,g=this.geometry.attributes.position,f=this.object.geometry;if(f instanceof THREE.Geometry)for(var h=f.vertices,k=f.faces,l=f=0,n=k.length;l<n;l++)for(var p=k[l],m=0,q=p.vertexNormals.length;m<q;m++){var t=p.vertexNormals[m];a.copy(h[p[d[m]]]).applyMatrix4(e);
b.copy(t).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);g.setXYZ(f,a.x,a.y,a.z);f+=1;g.setXYZ(f,b.x,b.y,b.z);f+=1}else if(f instanceof THREE.BufferGeometry)for(d=f.attributes.position,h=f.attributes.normal,m=f=0,q=d.count;m<q;m++)a.set(d.getX(m),d.getY(m),d.getZ(m)).applyMatrix4(e),b.set(h.getX(m),h.getY(m),h.getZ(m)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),g.setXYZ(f,a.x,a.y,a.z),f+=1,g.setXYZ(f,b.x,b.y,b.z),f+=1;g.needsUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.WireframeGeometry(a.geometry),new THREE.LineBasicMaterial({color:c}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,g=0,f=e.morphTargets.length;g<f;g++){var h=e.morphTargets[g].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];g<h.start&&(h.start=g);g>h.end&&(h.end=g);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var g=d.start+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),f=d.weight;g!==d.currentFrame&&
(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*f,this.morphTargetInfluences[g]=0,d.lastFrame=d.currentFrame,d.currentFrame=g);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*f,this.morphTargetInfluences[d.lastFrame]=(1-e)*f):this.morphTargetInfluences[d.currentFrame]=f}}};
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){function f(a,e,b){a=document.createElement(a);a.id=e;a.style.cssText=b;return a}function l(a,e,b){var c=f("div",a,"padding:0 0 3px 3px;text-align:left;background:"+b),d=f("div",a+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+e);d.innerHTML=a.toUpperCase();c.appendChild(d);a=f("div",a+"Graph","width:74px;height:30px;background:"+e);c.appendChild(a);for(e=0;74>e;e++)a.appendChild(f("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+
b));return c}function m(a){for(var b=c.children,d=0;d<b.length;d++)b[d].style.display=d===a?"block":"none";n=a}function p(a,b){a.appendChild(a.firstChild).style.height=Math.min(30,30-30*b)+"px"}var q=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,k=q(),r=k,t=0,n=0,c=f("div","stats","width:80px;opacity:0.9;cursor:pointer");c.addEventListener("mousedown",function(a){a.preventDefault();m(++n%c.children.length)},!1);var d=0,u=Infinity,v=0,b=l("fps","#0ff","#002"),
A=b.children[0],B=b.children[1];c.appendChild(b);var g=0,w=Infinity,x=0,b=l("ms","#0f0","#020"),C=b.children[0],D=b.children[1];c.appendChild(b);if(self.performance&&self.performance.memory){var h=0,y=Infinity,z=0,b=l("mb","#f08","#201"),E=b.children[0],F=b.children[1];c.appendChild(b)}m(n);return{REVISION:14,domElement:c,setMode:m,begin:function(){k=q()},end:function(){var a=q();g=a-k;w=Math.min(w,g);x=Math.max(x,g);C.textContent=(g|0)+" MS ("+(w|0)+"-"+(x|0)+")";p(D,g/200);t++;if(a>r+1E3&&(d=Math.round(1E3*
t/(a-r)),u=Math.min(u,d),v=Math.max(v,d),A.textContent=d+" FPS ("+u+"-"+v+")",p(B,d/100),r=a,t=0,void 0!==h)){var b=performance.memory.usedJSHeapSize,c=performance.memory.jsHeapSizeLimit;h=Math.round(9.54E-7*b);y=Math.min(y,h);z=Math.max(z,h);E.textContent=h+" MB ("+y+"-"+z+")";p(F,b/c)}return a},update:function(){k=this.end()}}};"object"===typeof module&&(module.exports=Stats);


function setupGlobe(){


  var visitedMap= THREE.ImageUtils.loadTexture( "images/ic_visited.png" );
  var  notVisitedMap= THREE.ImageUtils.loadTexture( "images/ic_not_visited.png" );

  var geo_points=[];



  var geometry   = new THREE.SphereGeometry(0.5*_scale, 64, 64);
  var material  = new THREE.MeshPhongMaterial();


  var displacementMap = THREE.ImageUtils.loadTexture( "images/Bump_MAP.jpg" );
  var earthMesh =  new THREE.Mesh(
    geometry,

    new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('images/DIFFUSE_map_1.jpg'),
      displacementMap: displacementMap,
      displacementScale: 0.01,
      displacementBias: - 0.004,
      bumpMap: displacementMap,
      bumpScale:  0.005*_scale,
      specularMap: THREE.ImageUtils.loadTexture('images/Earth-Spec-Map-2k.jpg'),
      specular:0x131313  })
    );

  group.add(earthMesh);
  $.getJSON(pathToData, function(json) {
  //  console.log(json); // this will show the info it in firebug console
    var geo_obj=json;
    // var geo_obj=JSON.parse(json);
   // console.log("geo_obj",geo_obj.length);

    for (var i=0;i<geo_obj.length;i++){

     var center=add_geo_point(geo_obj[i],geo_obj[i].visited);
     geo_obj[i].center=center;
     if(i>0)  addSpline(geo_obj[i].lat, geo_obj[i].lon,geo_obj[i-1].lat, geo_obj[i-1].lon,geo_obj[i].visited);
   }
 });



  function add_geo_point(obj,visited) {
   var radius = 0.5*_scale;
   var phi = (obj.lat)*Math.PI/180;
   var theta = (obj.lon-180)*Math.PI/180;

   var size=0.02*_scale;
   var x = -(radius+size/2) * Math.cos(phi) * Math.cos(theta);
   var y = (radius+size/2) * Math.sin(phi);
   var z = (radius+size/2) * Math.cos(phi) * Math.sin(theta);


   var segments = 32;

   var map ;


   
   if(visited=="true"){
    console.log("this way",obj);


    visitedMap.anisotropy = 4;

    var geometry   =new THREE.BoxGeometry( marker_size, marker_size, 0.2)
    var material   = new THREE.MeshBasicMaterial( { map: visitedMap , transparent: true} );

    var mesh = new THREE.Mesh(geometry, material)

  }
  else {
    console.log("other way");
    
    
    notVisitedMap.anisotropy = 4;

    var geometry   =new THREE.BoxGeometry( marker_size, marker_size, 0.2)
    var material   = new THREE.MeshBasicMaterial( { map: notVisitedMap , transparent: true} );

    var mesh = new THREE.Mesh(geometry, material)

  }


  mesh.position.x = x;
  mesh.position.y = y;
  mesh.position.z = z;
  mesh.position.normalize();
  mesh.position.multiplyScalar(0.505 *_scale);

  mesh.lookAt(earthMesh.position);
  mesh.my_obj=obj;
  mesh.isGeoPoint=true;

  group.add( mesh );
  geo_points.push(mesh);


  return new THREE.Vector3(x,y,z);
}


function addSpline(lat1, lng1, lat2, lng2,visited){

  var point1=lat2vec(lat1, lng1);
  var point2=lat2vec(lat2, lng2);


  var multip=0.997;
  point1.x*=multip;
  point1.y*=multip;
  point1.z*=multip;


  point2.x*=multip;
  point2.y*=multip;
  point2.z*=multip;

  var pointMid= midpoint(lat1, lng1, lat2, lng2);

  pointMid.x*=1.07;
  pointMid.y*=1.07;
  pointMid.z*=1.07;

  var point_dist=dist(point1.x,point1.y,point1.z,point2.x,point2.y,point2.z);

  var curve = new THREE.CatmullRomCurve3( [  point1,pointMid,point2  ] );
  curve.type = 'chordal';
  var geometry = new THREE.Geometry();
  geometry.vertices = curve.getPoints( 100 );


  var object = new THREE.LineSegments( geometry, new THREE.LineDashedMaterial( { color: 0xffffff, dashSize: 3, gapSize: 1, linewidth: 5 } ) );
  object.isSpline=true;

  console.log("point_dist",point_dist);
  if(point_dist<0.04*_scale)point_dist=0.04*_scale;
  var amount_of_points=Math.floor(1100*point_dist)
  var curve_points= curve.getPoints( amount_of_points );

  var step_counter=0;
  var pause_counter=0;
  var dashSize=5;
  if(visited=="true") var dashSize=40;
  var gapSize=5;
  if(visited=="true") var gapSize=0;



  var splineContainer= new THREE.Object3D();


  var material  = new THREE.MeshPhongMaterial({ color: 0xffffff});


  tube = new THREE.TubeGeometry(curve, 40, 0.5, 32, false);

  addGeometry(tube, 0xffffff);


  function setScale() {

    scale = parseInt( document.getElementById('scale').value );
    tubeMesh.scale.set( scale, scale, scale );

  }


  function addGeometry( geometry, color ) {

      // 3d shape
      var alpha=1;
      if(visited=="true")alpha=0.3;
      tubeMesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [
        new THREE.MeshLambertMaterial({
          color: color,
          opacity: alpha,
          transparent: true
        }),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          opacity: alpha,
          transparent: true
        })]);

      splineContainer.add( tubeMesh );

    }

    group.add(splineContainer);


  }



}
/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin 	/ http://mark-lundin.com
 * @author Simone Manini / http://daron1337.github.io
 * @author Luca Antiga 	/ http://lantiga.github.io
 */

THREE.TrackballControls = function ( object, domElement ) {

	var _this = this;
	var STATE = { NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.minDistance = 0;
	this.maxDistance = Infinity;

	this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

	// internals

	this.target = new THREE.Vector3();

	var EPS = 0.000001;

	var lastPosition = new THREE.Vector3();

	var _state = STATE.NONE,
	_prevState = STATE.NONE,

	_eye = new THREE.Vector3(),

	_movePrev = new THREE.Vector2(),
	_moveCurr = new THREE.Vector2(),

	_lastAxis = new THREE.Vector3(),
	_lastAngle = 0,

	_zoomStart = new THREE.Vector2(),
	_zoomEnd = new THREE.Vector2(),

	_touchZoomDistanceStart = 0,
	_touchZoomDistanceEnd = 0,

	_panStart = new THREE.Vector2(),
	_panEnd = new THREE.Vector2();

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };


	// methods

	this.handleResize = function () {

		if ( this.domElement === document ) {

			this.screen.left = 0;
			this.screen.top = 0;
			this.screen.width = window.innerWidth;
			this.screen.height = window.innerHeight;

		} else {

			var box = this.domElement.getBoundingClientRect();
			// adjustments come from similar code in the jquery offset() function
			var d = this.domElement.ownerDocument.documentElement;
			this.screen.left = box.left + window.pageXOffset - d.clientLeft;
			this.screen.top = box.top + window.pageYOffset - d.clientTop;
			this.screen.width = box.width;
			this.screen.height = box.height;

		}

	};

	this.handleEvent = function ( event ) {

		if ( typeof this[ event.type ] == 'function' ) {

			this[ event.type ]( event );

		}

	};

	var getMouseOnScreen = ( function () {

		var vector = new THREE.Vector2();

		return function getMouseOnScreen( pageX, pageY ) {

			vector.set(
				( pageX - _this.screen.left ) / _this.screen.width,
				( pageY - _this.screen.top ) / _this.screen.height
			);

			return vector;

		};

	}() );

	var getMouseOnCircle = ( function () {

		var vector = new THREE.Vector2();

		return function getMouseOnCircle( pageX, pageY ) {

			vector.set(
				( ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / ( _this.screen.width * 0.5 ) ),
				( ( _this.screen.height + 2 * ( _this.screen.top - pageY ) ) / _this.screen.width ) // screen.width intentional
			);

			return vector;

		};

	}() );

	this.rotateCamera = ( function() {

		var axis = new THREE.Vector3(),
			quaternion = new THREE.Quaternion(),
			eyeDirection = new THREE.Vector3(),
			objectUpDirection = new THREE.Vector3(),
			objectSidewaysDirection = new THREE.Vector3(),
			moveDirection = new THREE.Vector3(),
			angle;

		return function rotateCamera() {

			moveDirection.set( _moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0 );
			angle = moveDirection.length();

			if ( angle ) {

				_eye.copy( _this.object.position ).sub( _this.target );

				eyeDirection.copy( _eye ).normalize();
				objectUpDirection.copy( _this.object.up ).normalize();
				objectSidewaysDirection.crossVectors( objectUpDirection, eyeDirection ).normalize();

				objectUpDirection.setLength( _moveCurr.y - _movePrev.y );
				objectSidewaysDirection.setLength( _moveCurr.x - _movePrev.x );

				moveDirection.copy( objectUpDirection.add( objectSidewaysDirection ) );

				axis.crossVectors( moveDirection, _eye ).normalize();

				angle *= _this.rotateSpeed;
				quaternion.setFromAxisAngle( axis, angle );

				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

				_lastAxis.copy( axis );
				_lastAngle = angle;

			} else if ( ! _this.staticMoving && _lastAngle ) {

				_lastAngle *= Math.sqrt( 1.0 - _this.dynamicDampingFactor );
				_eye.copy( _this.object.position ).sub( _this.target );
				quaternion.setFromAxisAngle( _lastAxis, _lastAngle );
				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

			}

			_movePrev.copy( _moveCurr );

		};

	}() );


	this.zoomCamera = function () {

		var factor;

		if ( _state === STATE.TOUCH_ZOOM_PAN ) {

			factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;
			_eye.multiplyScalar( factor );

		} else {

			factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

			if ( factor !== 1.0 && factor > 0.0 ) {

				_eye.multiplyScalar( factor );

				if ( _this.staticMoving ) {

					_zoomStart.copy( _zoomEnd );

				} else {

					_zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

				}

			}

		}

	};

	this.panCamera = ( function() {

		var mouseChange = new THREE.Vector2(),
			objectUp = new THREE.Vector3(),
			pan = new THREE.Vector3();

		return function panCamera() {

			mouseChange.copy( _panEnd ).sub( _panStart );

			if ( mouseChange.lengthSq() ) {

				mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

				pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
				pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

				_this.object.position.add( pan );
				_this.target.add( pan );

				if ( _this.staticMoving ) {

					_panStart.copy( _panEnd );

				} else {

					_panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

				}

			}

		};

	}() );

	this.checkDistances = function () {

		if ( ! _this.noZoom || ! _this.noPan ) {

			if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

			if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );
				_zoomStart.copy( _zoomEnd );

			}

		}

	};

	this.update = function () {

		_eye.subVectors( _this.object.position, _this.target );

		if ( ! _this.noRotate ) {

			_this.rotateCamera();

		}

		if ( ! _this.noZoom ) {

			_this.zoomCamera();

		}

		if ( ! _this.noPan ) {

			_this.panCamera();

		}

		_this.object.position.addVectors( _this.target, _eye );

		_this.checkDistances();

		_this.object.lookAt( _this.target );

		if ( lastPosition.distanceToSquared( _this.object.position ) > EPS ) {

			_this.dispatchEvent( changeEvent );

			lastPosition.copy( _this.object.position );

		}

	};

	this.reset = function () {

		_state = STATE.NONE;
		_prevState = STATE.NONE;

		_this.target.copy( _this.target0 );
		_this.object.position.copy( _this.position0 );
		_this.object.up.copy( _this.up0 );

		_eye.subVectors( _this.object.position, _this.target );

		_this.object.lookAt( _this.target );

		_this.dispatchEvent( changeEvent );

		lastPosition.copy( _this.object.position );

	};

	// listeners

	function keydown( event ) {

		if ( _this.enabled === false ) return;

		window.removeEventListener( 'keydown', keydown );

		_prevState = _state;

		if ( _state !== STATE.NONE ) {

			return;

		} else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && ! _this.noRotate ) {

			_state = STATE.ROTATE;

		} else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && ! _this.noZoom ) {

			_state = STATE.ZOOM;

		} else if ( event.keyCode === _this.keys[ STATE.PAN ] && ! _this.noPan ) {

			_state = STATE.PAN;

		}

	}

	function keyup( event ) {

		if ( _this.enabled === false ) return;

		_state = _prevState;

		window.addEventListener( 'keydown', keydown, false );

	}

	function mousedown( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.NONE ) {

			_state = event.button;

		}

		if ( _state === STATE.ROTATE && ! _this.noRotate ) {

			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
			_movePrev.copy( _moveCurr );

		} else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_zoomEnd.copy( _zoomStart );

		} else if ( _state === STATE.PAN && ! _this.noPan ) {

			_panStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
			_panEnd.copy( _panStart );

		}

		document.addEventListener( 'mousemove', mousemove, false );
		document.addEventListener( 'mouseup', mouseup, false );

		_this.dispatchEvent( startEvent );

	}

	function mousemove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.ROTATE && ! _this.noRotate ) {

			_movePrev.copy( _moveCurr );
			_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );

		} else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

			_zoomEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		} else if ( _state === STATE.PAN && ! _this.noPan ) {

			_panEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

		}

	}

	function mouseup( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener( 'mousemove', mousemove );
		document.removeEventListener( 'mouseup', mouseup );
		_this.dispatchEvent( endEvent );

	}

	function mousewheel( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		var delta = 0;

		if ( event.wheelDelta ) {

			// WebKit / Opera / Explorer 9

			delta = event.wheelDelta / 40;

		} else if ( event.detail ) {

			// Firefox

			delta = - event.detail / 3;

		}

		_zoomStart.y += delta * 0.01;
		_this.dispatchEvent( startEvent );
		_this.dispatchEvent( endEvent );

	}

	function touchstart( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				_movePrev.copy( _moveCurr );
				break;

			case 2:
				_state = STATE.TOUCH_ZOOM_PAN;
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panStart.copy( getMouseOnScreen( x, y ) );
				_panEnd.copy( _panStart );
				break;

			default:
				_state = STATE.NONE;

		}
		_this.dispatchEvent( startEvent );


	}

	function touchmove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1:
				_movePrev.copy( _moveCurr );
				_moveCurr.copy( getMouseOnCircle(  event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				break;

			case 2:
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy );

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panEnd.copy( getMouseOnScreen( x, y ) );
				break;

			default:
				_state = STATE.NONE;

		}

	}

	function touchend( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:
				_movePrev.copy( _moveCurr );
				_moveCurr.copy( getMouseOnCircle(  event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
				break;

			case 2:
				_touchZoomDistanceStart = _touchZoomDistanceEnd = 0;

				var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
				var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
				_panEnd.copy( getMouseOnScreen( x, y ) );
				_panStart.copy( _panEnd );
				break;

		}

		_state = STATE.NONE;
		_this.dispatchEvent( endEvent );

	}

	function contextmenu( event ) {

		event.preventDefault();

	}

	this.dispose = function() {

		this.domElement.removeEventListener( 'contextmenu', contextmenu, false );
		this.domElement.removeEventListener( 'mousedown', mousedown, false );
		this.domElement.removeEventListener( 'mousewheel', mousewheel, false );
		this.domElement.removeEventListener( 'DOMMouseScroll', mousewheel, false ); // firefox

		this.domElement.removeEventListener( 'touchstart', touchstart, false );
		this.domElement.removeEventListener( 'touchend', touchend, false );
		this.domElement.removeEventListener( 'touchmove', touchmove, false );

		document.removeEventListener( 'mousemove', mousemove, false );
		document.removeEventListener( 'mouseup', mouseup, false );

		window.removeEventListener( 'keydown', keydown, false );
		window.removeEventListener( 'keyup', keyup, false );

	}

	this.domElement.addEventListener( 'contextmenu', contextmenu, false );
	this.domElement.addEventListener( 'mousedown', mousedown, false );
	this.domElement.addEventListener( 'mousewheel', mousewheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', mousewheel, false ); // firefox

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

	window.addEventListener( 'keydown', keydown, false );
	window.addEventListener( 'keyup', keyup, false );

	this.handleResize();

	// force an update at start
	this.update();

};

THREE.TrackballControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

( function () {

	function OrbitConstraint ( object ) {

		this.object = object;

		// "target" sets the location of focus, where the object orbits around
		// and where it pans with respect to.
		this.target = new THREE.Vector3();

		// Limits to how far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// Limits to how far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		////////////
		// internals

		var scope = this;

		var EPS = 0.000001;

		// Current position in spherical coordinate system.
		var theta;
		var phi;

		// Pending changes
		var phiDelta = 0;
		var thetaDelta = 0;
		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		// API

		this.getPolarAngle = function () {

			return phi;

		};

		this.getAzimuthalAngle = function () {

			return theta;

		};

		this.rotateLeft = function ( angle ) {

			thetaDelta -= angle;

		};

		this.rotateUp = function ( angle ) {

			phiDelta -= angle;

		};

		// pass in distance in world space to move left
		this.panLeft = function() {

			var v = new THREE.Vector3();

			return function panLeft ( distance ) {

				var te = this.object.matrix.elements;

				// get X column of matrix
				v.set( te[ 0 ], te[ 1 ], te[ 2 ] );
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		// pass in distance in world space to move up
		this.panUp = function() {

			var v = new THREE.Vector3();

			return function panUp ( distance ) {

				var te = this.object.matrix.elements;

				// get Y column of matrix
				v.set( te[ 4 ], te[ 5 ], te[ 6 ] );
				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// pass in x,y of change desired in pixel space,
		// right and down are positive
		this.pan = function ( deltaX, deltaY, screenWidth, screenHeight ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				var offset = position.clone().sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				scope.panLeft( 2 * deltaX * targetDistance / screenHeight );
				scope.panUp( 2 * deltaY * targetDistance / screenHeight );

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				// orthographic
				scope.panLeft( deltaX * ( scope.object.right - scope.object.left ) / screenWidth );
				scope.panUp( deltaY * ( scope.object.top - scope.object.bottom ) / screenHeight );

			} else {

				// camera neither orthographic or perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

			}

		};

		this.dollyIn = function ( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale /= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

			}

		};

		this.dollyOut = function ( dollyScale ) {

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				scale *= dollyScale;

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

			}

		};

		this.update = function() {

			var offset = new THREE.Vector3();

			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
			var quatInverse = quat.clone().inverse();

			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();

			return function () {

				var position = this.object.position;

				offset.copy( position ).sub( this.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis

				theta = Math.atan2( offset.x, offset.z );

				// angle from y-axis

				phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

				theta += thetaDelta;
				phi += phiDelta;

				// restrict theta to be between desired limits
				theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, theta ) );

				// restrict phi to be between desired limits
				phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

				// restrict phi to be betwee EPS and PI-EPS
				phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

				var radius = offset.length() * scale;

				// restrict radius to be between desired limits
				radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

				// move target to panned location
				this.target.add( panOffset );

				offset.x = radius * Math.sin( phi ) * Math.sin( theta );
				offset.y = radius * Math.cos( phi );
				offset.z = radius * Math.sin( phi ) * Math.cos( theta );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( this.target ).add( offset );

				this.object.lookAt( this.target );

				if ( this.enableDamping === true ) {

					thetaDelta *= ( 1 - this.dampingFactor );
					phiDelta *= ( 1 - this.dampingFactor );

				} else {

					thetaDelta = 0;
					phiDelta = 0;

				}

				scale = 1;
				panOffset.set( 0, 0, 0 );

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					 lastPosition.distanceToSquared( this.object.position ) > EPS ||
				    8 * ( 1 - lastQuaternion.dot( this.object.quaternion ) ) > EPS ) {

					lastPosition.copy( this.object.position );
					lastQuaternion.copy( this.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

	};


	// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
	// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
	// supported.
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe

	THREE.OrbitControls = function ( object, domElement ) {

		var constraint = new OrbitConstraint( object );

		this.domElement = ( domElement !== undefined ) ? domElement : document;

		// API

		Object.defineProperty( this, 'constraint', {

			get: function() {

				return constraint;

			}

		} );

		this.getPolarAngle = function () {

			return constraint.getPolarAngle();

		};

		this.getAzimuthalAngle = function () {

			return constraint.getAzimuthalAngle();

		};

		// Set to false to disable this control
		this.enabled = true;

		// center is old, deprecated; use "target" instead
		this.center = this.target;

		// This option actually enables dollying in and out; left as "zoom" for
		// backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		////////////
		// internals

		var scope = this;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		var STATE = { NONE : - 1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

		var state = STATE.NONE;

		// for reset

		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		// events

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		// pass in x,y of change desired in pixel space,
		// right and down are positive
		function pan( deltaX, deltaY ) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			constraint.pan( deltaX, deltaY, element.clientWidth, element.clientHeight );

		}

		this.update = function () {

			if ( this.autoRotate && state === STATE.NONE ) {

				constraint.rotateLeft( getAutoRotationAngle() );

			}

			if ( constraint.update() === true ) {

				this.dispatchEvent( changeEvent );

			}

		};

		this.reset = function () {

			state = STATE.NONE;

			this.target.copy( this.target0 );
			this.object.position.copy( this.position0 );
			this.object.zoom = this.zoom0;

			this.object.updateProjectionMatrix();
			this.dispatchEvent( changeEvent );

			this.update();

		};

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function onMouseDown( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			if ( event.button === scope.mouseButtons.ORBIT ) {

				if ( scope.enableRotate === false ) return;

				state = STATE.ROTATE;

				rotateStart.set( event.clientX, event.clientY );

			} else if ( event.button === scope.mouseButtons.ZOOM ) {

				if ( scope.enableZoom === false ) return;

				state = STATE.DOLLY;

				dollyStart.set( event.clientX, event.clientY );

			} else if ( event.button === scope.mouseButtons.PAN ) {

				if ( scope.enablePan === false ) return;

				state = STATE.PAN;

				panStart.set( event.clientX, event.clientY );

			}

			if ( state !== STATE.NONE ) {

				document.addEventListener( 'mousemove', onMouseMove, false );
				document.addEventListener( 'mouseup', onMouseUp, false );
				scope.dispatchEvent( startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if ( state === STATE.ROTATE ) {

				if ( scope.enableRotate === false ) return;

				rotateEnd.set( event.clientX, event.clientY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				constraint.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				constraint.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );

			} else if ( state === STATE.DOLLY ) {

				if ( scope.enableZoom === false ) return;

				dollyEnd.set( event.clientX, event.clientY );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					constraint.dollyIn( getZoomScale() );

				} else if ( dollyDelta.y < 0 ) {

					constraint.dollyOut( getZoomScale() );

				}

				dollyStart.copy( dollyEnd );

			} else if ( state === STATE.PAN ) {

				if ( scope.enablePan === false ) return;

				panEnd.set( event.clientX, event.clientY );
				panDelta.subVectors( panEnd, panStart );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

			}

			if ( state !== STATE.NONE ) scope.update();

		}

		function onMouseUp( /* event */ ) {

			if ( scope.enabled === false ) return;

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );
			scope.dispatchEvent( endEvent );
			state = STATE.NONE;

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

			event.preventDefault();
			event.stopPropagation();

			var delta = 0;

			if ( event.wheelDelta !== undefined ) {

				// WebKit / Opera / Explorer 9

				delta = event.wheelDelta;

			} else if ( event.detail !== undefined ) {

				// Firefox

				delta = - event.detail;

			}

			if ( delta > 0 ) {

				constraint.dollyOut( getZoomScale() );

			} else if ( delta < 0 ) {

				constraint.dollyIn( getZoomScale() );

			}

			scope.update();
			scope.dispatchEvent( startEvent );
			scope.dispatchEvent( endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

			switch ( event.keyCode ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					scope.update();
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					scope.update();
					break;

			}

		}

		function touchstart( event ) {

			if ( scope.enabled === false ) return;

			switch ( event.touches.length ) {

				case 1:	// one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;

					state = STATE.TOUCH_ROTATE;

					rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
					break;

				case 2:	// two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;

					state = STATE.TOUCH_DOLLY;

					var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
					var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
					var distance = Math.sqrt( dx * dx + dy * dy );
					dollyStart.set( 0, distance );
					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;

					state = STATE.TOUCH_PAN;

					panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) scope.dispatchEvent( startEvent );

		}

		function touchmove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();
			event.stopPropagation();

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			switch ( event.touches.length ) {

				case 1: // one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;
					if ( state !== STATE.TOUCH_ROTATE ) return;

					rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
					rotateDelta.subVectors( rotateEnd, rotateStart );

					// rotating across whole screen goes 360 degrees around
					constraint.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
					// rotating up and down along whole screen attempts to go 360, but limited to 180
					constraint.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

					rotateStart.copy( rotateEnd );

					scope.update();
					break;

				case 2: // two-fingered touch: dolly

					if ( scope.enableZoom === false ) return;
					if ( state !== STATE.TOUCH_DOLLY ) return;

					var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
					var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
					var distance = Math.sqrt( dx * dx + dy * dy );

					dollyEnd.set( 0, distance );
					dollyDelta.subVectors( dollyEnd, dollyStart );

					if ( dollyDelta.y > 0 ) {

						constraint.dollyOut( getZoomScale() );

					} else if ( dollyDelta.y < 0 ) {

						constraint.dollyIn( getZoomScale() );

					}

					dollyStart.copy( dollyEnd );

					scope.update();
					break;

				case 3: // three-fingered touch: pan

					if ( scope.enablePan === false ) return;
					if ( state !== STATE.TOUCH_PAN ) return;

					panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
					panDelta.subVectors( panEnd, panStart );

					pan( panDelta.x, panDelta.y );

					panStart.copy( panEnd );

					scope.update();
					break;

				default:

					state = STATE.NONE;

			}

		}

		function touchend( /* event */ ) {

			if ( scope.enabled === false ) return;

			scope.dispatchEvent( endEvent );
			state = STATE.NONE;

		}

		function contextmenu( event ) {

			event.preventDefault();

		}

		this.dispose = function() {

			this.domElement.removeEventListener( 'contextmenu', contextmenu, false );
			this.domElement.removeEventListener( 'mousedown', onMouseDown, false );
			this.domElement.removeEventListener( 'mousewheel', onMouseWheel, false );
			this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

			this.domElement.removeEventListener( 'touchstart', touchstart, false );
			this.domElement.removeEventListener( 'touchend', touchend, false );
			this.domElement.removeEventListener( 'touchmove', touchmove, false );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			window.removeEventListener( 'keydown', onKeyDown, false );

		}

		this.domElement.addEventListener( 'contextmenu', contextmenu, false );

		this.domElement.addEventListener( 'mousedown', onMouseDown, false );
		this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
		this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

		this.domElement.addEventListener( 'touchstart', touchstart, false );
		this.domElement.addEventListener( 'touchend', touchend, false );
		this.domElement.addEventListener( 'touchmove', touchmove, false );

		window.addEventListener( 'keydown', onKeyDown, false );

		// force an update at start
		this.update();

	};

	THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

	Object.defineProperties( THREE.OrbitControls.prototype, {

		object: {

			get: function () {

				return this.constraint.object;

			}

		},

		target: {

			get: function () {

				return this.constraint.target;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: target is now immutable. Use target.set() instead.' );
				this.constraint.target.copy( value );

			}

		},

		minDistance : {

			get: function () {

				return this.constraint.minDistance;

			},

			set: function ( value ) {

				this.constraint.minDistance = value;

			}

		},

		maxDistance : {

			get: function () {

				return this.constraint.maxDistance;

			},

			set: function ( value ) {

				this.constraint.maxDistance = value;

			}

		},

		minZoom : {

			get: function () {

				return this.constraint.minZoom;

			},

			set: function ( value ) {

				this.constraint.minZoom = value;

			}

		},

		maxZoom : {

			get: function () {

				return this.constraint.maxZoom;

			},

			set: function ( value ) {

				this.constraint.maxZoom = value;

			}

		},

		minPolarAngle : {

			get: function () {

				return this.constraint.minPolarAngle;

			},

			set: function ( value ) {

				this.constraint.minPolarAngle = value;

			}

		},

		maxPolarAngle : {

			get: function () {

				return this.constraint.maxPolarAngle;

			},

			set: function ( value ) {

				this.constraint.maxPolarAngle = value;

			}

		},

		minAzimuthAngle : {

			get: function () {

				return this.constraint.minAzimuthAngle;

			},

			set: function ( value ) {

				this.constraint.minAzimuthAngle = value;

			}

		},

		maxAzimuthAngle : {

			get: function () {

				return this.constraint.maxAzimuthAngle;

			},

			set: function ( value ) {

				this.constraint.maxAzimuthAngle = value;

			}

		},

		enableDamping : {

			get: function () {

				return this.constraint.enableDamping;

			},

			set: function ( value ) {

				this.constraint.enableDamping = value;

			}

		},

		dampingFactor : {

			get: function () {

				return this.constraint.dampingFactor;

			},

			set: function ( value ) {

				this.constraint.dampingFactor = value;

			}

		},

		// backward compatibility

		noZoom: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				return ! this.enableZoom;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				this.enableZoom = ! value;

			}

		},

		noRotate: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				return ! this.enableRotate;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				this.enableRotate = ! value;

			}

		},

		noPan: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				return ! this.enablePan;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				this.enablePan = ! value;

			}

		},

		noKeys: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				return ! this.enableKeys;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				this.enableKeys = ! value;

			}

		},

		staticMoving : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				return ! this.constraint.enableDamping;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				this.constraint.enableDamping = ! value;

			}

		},

		dynamicDampingFactor : {

			get: function () {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				return this.constraint.dampingFactor;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				this.constraint.dampingFactor = value;

			}

		}

	} );

}() );



function addLight(){

 var light_m  = new THREE.DirectionalLight( 0xdfdfdf, 0.4)


 light_m.position.set(  -0.8708482827604527,  0.4, 5.972050161833489);
 light_m.target.position.set( 0, 0, 0 );
 scene.add( light_m );


 var light_k  = new THREE.DirectionalLight( 0xdfdfdf, 0.4);
 light_k.position.set( 0.15905494115968608,  6.162400168407747, 6.082723542139604);
 light_k.target.position.set( 0, 0, 0 );
 scene.add( light_k );

 var light = new THREE.PointLight( new THREE.Color("rgb(255,255,255)"), 0.1);
 var light2 = new THREE.PointLight( new THREE.Color("rgb(255,255,255)"), 0.1);
 light.position.set( 0, -100, 1000 );
 light2.position.set( 50, 50, 1000 );

 var spotLight = new THREE.SpotLight( 0xf6ce48, 0.5 );
 spotLight.position.set(  17090.830840971503, 65302.61200581861, 241362.74021974122 );
 spotLight.color.setHSL( 0.6, 1, 1 );
 spotLight.position.multiplyScalar( 500 );
 spotLight.castShadow = true;
 spotLight.shadowCameraVisible = true;
 spotLight.shadowMapWidth = 2048;
 spotLight.shadowMapHeight = 2048;
 spotLight.shadowCameraNear = 200;
 spotLight.shadowCameraFar = 1500;
 spotLight.shadowCameraFov = 40;
 spotLight.shadowBias = -0.005;
 spotLight.shadowDarkness = 0.15;
 scene.add( spotLight );
 renderer.shadowMap.enabled = true;
 renderer.shadowMap.cullFace = THREE.CullFaceBack;
 renderer.gammaInput = true;
 renderer.gammaOutput = true;


 



renderer.shadowMap.enabled = true;
renderer.shadowMap.cullFace = THREE.CullFaceBack;

renderer.gammaInput = true;
renderer.gammaOutput = true;




}

function lat2vec(lat,lon) {
  var radius=0.5*_scale;
  var phi = (lat)*Math.PI/180;
  var theta = (lon-180)*Math.PI/180;

  var size=0.01*_scale;
  var x = -(radius+size/2) * Math.cos(phi) * Math.cos(theta);
  var y = (radius+size/2) * Math.sin(phi);
  var z = (radius+size/2) * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x,y,z);
}

function dist(x0,y0,z0,x1,y1,z1){

  deltaX = x1 - x0;
  deltaY = y1 - y0;
  deltaZ = z1 - z0;

  distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

  return distance;
}

function midpoint (lat1, lng1, lat2, lng2) {

  lat1= toRad(lat1);
  lng1= toRad(lng1);
  lat2= toRad(lat2);
  lng2= toRad(lng2);

  var dlng = lng2 - lng1;
  var Bx = Math.cos(lat2) * Math.cos(dlng);
  var By = Math.cos(lat2) * Math.sin(dlng);
  var lat3 = Math.atan2( Math.sin(lat1)+Math.sin(lat2),
    Math.sqrt((Math.cos(lat1)+Bx)*(Math.cos(lat1)+Bx) + By*By ));
  var lng3 = lng1 + Math.atan2(By, (Math.cos(lat1) + Bx));
  return lat2vec((lat3*180)/Math.PI , (lng3*180)/Math.PI);
}
function toRad(Value) {
  /** Converts numeric degrees to radians */
  return Value * Math.PI / 180;
}


function toScreenPosition(obj, camera)
{
  var vector = new THREE.Vector3();

  var widthHalf = 0.5*renderer.context.canvas.width;
  var heightHalf = 0.5*renderer.context.canvas.height;

  obj.updateMatrixWorld();
  vector.setFromMatrixPosition(obj.matrixWorld);
  vector.project(camera);

  vector.x = ( vector.x * widthHalf ) + widthHalf;
  vector.y = - ( vector.y * heightHalf ) + heightHalf;

  return { 
    x: vector.x,
    y: vector.y
  };

};

var onCity;


var targetRotationX = 0;
var targetRotationOnMouseDownX = 0;

var targetRotationY = 0;
var targetRotationOnMouseDownY = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var mouseY = 0;
var mouseYOnMouseDown = 0;

var dragging_earth;

var finalRotationYdragg;


var  offset_y  ;
var  offset_x  ;


function addInteraction(){
  mouse=new Object();




  mouse.x = 0;
  mouse.y = 0;  



  document.getElementById("globeHolder").addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.getElementById("globeHolder").addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.getElementById("globeHolder").addEventListener( 'touchmove', onDocumentTouchMove, false );

  document.getElementById("globeHolder").addEventListener( 'mousemove', onMouseMove, false );

  document.addEventListener("click", function(){

    if( onCity){
       click_on_planet(last_object.my_obj);

      check_the_ray();
    }
  });

  function onMouseMove( event ) {

    // console.log(event.clientX,event.clientY);

    var realPos=new Object();

    var bodyRect = document.body.getBoundingClientRect();
    var  elemRect = document.getElementById("globeHolder").getBoundingClientRect();

    offset_y   = elemRect.top - bodyRect.top;
    offset_x   = elemRect.left - bodyRect.left;

    realPos.x=event.clientX-offset_x;
    realPos.y=event.clientY-offset_y;
    mouse.x = ( realPos.x / window.globe_w ) * 2 - 1;
    mouse.y = - (realPos.y/ window.globe_h ) * 2 + 1;  
    // console.log(offset_x,offset_y);
    // console.log(mouse);
    check_the_ray();

  }




  function onDocumentMouseDown( event ) {

    event.preventDefault();
    if(active_objects.length>0) dragging_earth=true;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
    document.addEventListener( 'mouseout', onDocumentMouseOut, false );

    mouseXOnMouseDown = event.clientX - windowHalfX;
    targetRotationOnMouseDownX = targetRotationX;

    mouseYOnMouseDown = event.clientY - windowHalfY;
    targetRotationOnMouseDownY = targetRotationY;

  }

  function onDocumentMouseMove( event ) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

    targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.02;

  }

  function onDocumentMouseUp( event ) {

    dragging_earth=false;
    hide_info();

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

  }

  function onDocumentMouseOut( event ) {

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

  }

  function onDocumentTouchStart( event ) {

    if ( event.touches.length == 1 ) {



      event.preventDefault();

      mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
      targetRotationOnMouseDownX = targetRotationX;

      mouseYOnMouseDown = event.touches[ 0 ].pageY - windowHalfY;
      targetRotationOnMouseDownY = targetRotationY;

    }

  }

  function onDocumentTouchMove( event ) {

    if ( event.touches.length == 1 ) {

      event.preventDefault();

      mouseX = event.touches[ 0 ].pageX - windowHalfX;
      targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.05;

      mouseY = event.touches[ 0 ].pageY - windowHalfY;
      targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.05;

    }

  }





  var active_objects=[];
  function check_the_ray(){

    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( group.children );

    var last_touch_objects=[];
    for ( var i = 0; i < intersects.length; i++ ) {
      // console.log('intersect',i,intersects[i].object.isGeoPoint);

      if(intersects[i].object.isGeoPoint&&i==0){
       onCity=true;
       intersects[ i ].object.material.color.set( 0xff0000 ,0.2);
       intersects[ i ].object.material .opacity = 0;
       active_objects.push(intersects[ i ].object);
       last_touch_objects.push(intersects[ i ].object);

     }

   }

   for ( var i = 0; i < active_objects.length; i++ ) {


    var  iamhere=false;
    for ( var j = 0; j < last_touch_objects.length; j++ ) {
      if(last_touch_objects[j]==active_objects[i])iamhere=true;

    }
    if(!iamhere){
      active_objects[i].material.color.set( 0xffffff );
      active_objects[i].material.opacity = 1;

    }else{
      update_info(active_objects[i]);
    }
  }
  active_objects=last_touch_objects;

  if(active_objects.length==0){
    hide_info();
    onCity=false;
  }


}





}

  var _scale=200;

window.globe_w=1000;
window.globe_h=1000;


var  windowHalfX = window.globe_w / 2;
var  windowHalfY = window.globe_h / 2;

var pathToData="js/lib/data/geoData.json";

window.rotating;
var marker_size=0.02*_scale;
var scene,camera,renderer,group,raycaster,_w,_h,mouse,stats;



window.addEventListener("load", function () {

  hide_info();
  // window.addEventListener( 'resize', onWindowResize, false );


  stats = new Stats();
  stats.setMode( 0 ); 
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  // document.body.appendChild( stats.domElement );


  setupScene();
  setupGlobe();
  addLight();
  addInteraction();

  loop();

}, false);

function setupScene(){


  _w=window.globe_w;
  _h= window.globe_h;
  var aspect = _w/ _h;
  scene = new THREE.Scene(); 
  camera  = new THREE.PerspectiveCamera(45,_w /_h, 0.01, 1000 );
  camera.position.z = 1.5*_scale;
  renderer = new THREE.WebGLRenderer({ antialias: true } ); 
  renderer.setClearColor(new THREE.Color(0x76c6e0, 1.0));
  renderer.setSize( _w, _h ); 
  if ($('#globeHolder').length) {
    document.getElementById("globeHolder").appendChild( renderer.domElement );  
  };
  

  group = new THREE.Object3D(); 
  scene.add(group);
  // group.position.x=0.6;
  // group.position.y=0.12;
  window.rotating=group;
  raycaster = new THREE.Raycaster();

}



var loop = function loop() {
  stats.begin();

  requestAnimationFrame(loop);

  update_drag_rotation();

  renderer.render(scene, camera);


  stats.end();

};

window.setGlobeSize=function(w,h){
  window.globe_w=w;
  window.globe_h=h;

  windowHalfX = window.globe_w / 2;
  windowHalfY =window.globe_h / 2;

   // group.position.x=0.6/(1920/1080/(windowHalfX/windowHalfY));

   camera.aspect = window.globe_w / window.globe_h;
   camera.updateProjectionMatrix();

   renderer.setSize( window.globe_w, window.globe_h );

 }

 function onWindowResize() {

  windowHalfX = window.globe_w / 2;
  windowHalfY =window.globe_h / 2;

   // group.position.x=0.6/(1920/1080/(windowHalfX/windowHalfY));

   camera.aspect = window.globe_w / window.globe_h;
   camera.updateProjectionMatrix();

   renderer.setSize( window.globe_w, window.globe_h );

 }




 function update_drag_rotation(){

  group.rotation.y += ( targetRotationX*0.5 - group.rotation.y ) * 0.1;

  finalRotationY = (targetRotationY*0.5 - group.rotation.x); 

  if (group.rotation.x  <= 1 && group.rotation.x >= -1 ) {

    group.rotation.x += finalRotationY * 0.1;
  }
  if (group.rotation.x  > 0.5 ) {

    group.rotation.x = 0.5
  }

  if (group.rotation.x  < -0.5 ) {

    group.rotation.x = -0.5
  }


  if(dragging_earth)update_last_info();


}


function hide_info(){
  if ($('#info').length) {
    document.getElementById("info").style.visibility="hidden"; 
  };
}

var last_object;
function update_last_info(){
  if(last_object)update_info(last_object);
}
function update_info(mesh){
  last_object=mesh;
 last_object=mesh;
  if ($('#info').length) {
    document.getElementById("info").style.visibility="visible";
  }
 //console.log();
 var pos=toScreenPosition(mesh,camera);
 document.getElementById("info_name").innerHTML =mesh.my_obj.name;
 document.getElementById("info").style.top=pos.y+offset_y-40+"px";
 document.getElementById("info").style.left=pos.x+offset_x-21+"px";
}