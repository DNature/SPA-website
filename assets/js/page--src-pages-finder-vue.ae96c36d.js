(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{503:function(e,t,a){},504:function(e,t,a){},665:function(e,t,a){"use strict";var r=a(503);a.n(r).a},667:function(e,t,a){"use strict";var r=a(504);a.n(r).a},672:function(e,t,a){"use strict";a.r(t);var r=a(666),n=a.n(r),s={name:"JoseLayout",metaInfo:{title:"Jose Layout"}},i=a(17),o=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{"d-flex":"","flex-wrap":""}},[t("v-row",[this._t("default")],2)],1)}),[],!1,null,"249f1b1f",null).exports,c=(a(69),{name:"JoseCard",props:{repo:{type:Object,default:{title:"A Repo",name:"a-repo",nameWithOwner:"a-repo-repo-owner",description:"this is a repo",cardImage:"cardimage.jpg",thumbImage:"thumbimage.jpg"}}},methods:{getImgUrl:function(e,t){return null!==t?"https://raw.githubusercontent.com/".concat(e,"/master").concat(t):"/resources/image/image-placeholder.png"},showContent:function(e){if(e)return this.$router.push({path:"/viewer/".concat(e),design:"".concat(e)})}}}),l=(a(665),{metaInfo:{title:"Finder"},data:function(){return{numberRepos:3,indexName:"dev_NARRATIONSD",searchClient:n()("ISO35TPV9I","028bacf007600d31402b783ea3f19004")}},components:{JoseCard:Object(i.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"d-flex":"",hover:""},on:{click:function(t){return e.showContent(e.repo.name)}}},[a("v-col",{staticClass:"col"},[a("div",{staticClass:"card-image-holder"},[e.repo.cardImage?a("img",{staticClass:"white--text align-end card-image",attrs:{"p-5":"",src:e.getImgUrl(e.repo.nameWithOwner,e.repo.cardImage)}}):a("img",{staticClass:"white--text align-end card-image",attrs:{"p-5":"",src:"/resources/image/image-placeholder.png"}})]),a("div",{staticClass:"bottom-block"},[a("h2",{staticClass:"card-title wrapping-text horiz-center",domProps:{textContent:e._s(e.repo.title)}}),a("p",{staticClass:"card-subtitle wrapping-text horiz-center"},[e._v(e._s(e.repo.description))])])])],1)}),[],!1,null,"501390fb",null).exports,JoseLayout:o},methods:{showContent:function(e){return this.$router.push({path:"/viewer/".concat(e),design:"${repoName}"})}}}),u=(a(667),Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("h1",{staticClass:"horiz-center"},[e._v("Finder")]),a("client-only",[a("ais-instant-search",{staticClass:"horiz-center searchbox",attrs:{"index-name":e.indexName,"search-client":e.searchClient}},[a("ais-configure",{attrs:{hitsPerPage:8}}),a("ais-powered-by"),a("ais-search-box"),a("ais-hits",{staticClass:"clear-above",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.items;return a("div",{},[a("v-layout",{attrs:{"d-flex":"","flex-wrap":""}},[a("v-row",{attrs:{"d-flex":"",cols:"1"}},e._l(r,(function(e,t){return a("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{cols:"12",md:"3"}},[a("JoseCard",{attrs:{repo:{title:e.title,name:e.name,nameWithOwner:e.nameWithOwner,description:e.description,cardImage:e.cardImage}}})],1)})),1)],1)],1)}}])})],1)],1)],1)}),[],!1,null,"c19a7138",null));t.default=u.exports}}]);