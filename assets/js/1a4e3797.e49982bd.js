"use strict";(self.webpackChunksuvtools=self.webpackChunksuvtools||[]).push([[920],{2027:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(4165),a=n(5861),l=n(7294),u=n(2263),s=n(7649),c=n(5742),o=n(9960),i=n(5999),m=["zero","one","two","few","many","other"];function h(e){return m.filter((function(t){return e.includes(t)}))}var p={locale:"en",pluralForms:h(["one","other"]),select:function(e){return 1===e?"one":"other"}};function f(){var e=(0,u.Z)().i18n.currentLocale;return(0,l.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:h(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),p}var t,n}),[e])}function d(){var e=f();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}var g=n(6775),v=n(412);var y=function(){var e=(0,g.k6)(),t=(0,g.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:v.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},E=n(22),S=n(8202),w=n(2539),I=n(726),b=n(1073),P=n(311),R="searchQueryInput_CFBF",k="searchResultItem_U687",F="searchResultItemPath_uIbk",Z="searchResultItemSummary_oZHr",C=n(3926);function x(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,u=t.tokens,s=t.metadata,c=0===r,i=2===r,m=(c?n.b:a.b).slice(),h=i?n.s:n.t;return c||m.push(a.t),l.createElement("article",{className:k},l.createElement("h2",null,l.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:i?(0,w.C)(h,u):(0,I.o)(h,(0,b.m)(s,"t"),u,100)}})),m.length>0&&l.createElement("p",{className:F},(0,C.e)(m)),i&&l.createElement("p",{className:Z,dangerouslySetInnerHTML:{__html:(0,I.o)(n.t,(0,b.m)(s,"t"),u,100)}}))}var _=function(){var e=(0,u.Z)().siteConfig.baseUrl,t=d().selectMessage,n=y(),o=n.searchValue,m=n.updateSearchPath,h=(0,l.useState)(o),p=h[0],f=h[1],g=(0,l.useState)(),v=g[0],w=g[1],I=(0,l.useState)(),b=I[0],k=I[1],F=(0,l.useMemo)((function(){return p?(0,i.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,i.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[p]);(0,l.useEffect)((function(){m(p),v&&(p?v(p,(function(e){k(e)})):k(void 0))}),[p,v]);var Z=(0,l.useCallback)((function(e){f(e.target.value)}),[]);return(0,l.useEffect)((function(){o&&o!==p&&f(o)}),[o]),(0,l.useEffect)((function(){function t(){return(t=(0,a.Z)((0,r.Z)().mark((function t(){var n,a,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,l=n.zhDictionary,w((function(){return(0,S.v)(a,l,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),l.createElement(s.Z,null,l.createElement(c.Z,null,l.createElement("meta",{property:"robots",content:"noindex, follow"}),l.createElement("title",null,F)),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("h1",null,F),l.createElement("input",{type:"search",name:"q",className:R,"aria-label":"Search",onChange:Z,value:p,autoComplete:"off",autoFocus:!0}),!v&&p&&l.createElement("div",null,l.createElement(P.Z,null)),b&&(b.length>0?l.createElement("p",null,t(b.length,(0,i.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:b.length}))):l.createElement("p",null,(0,i.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),l.createElement("section",null,b&&b.map((function(e){return l.createElement(x,{key:e.document.i,searchResult:e})})))))}}}]);