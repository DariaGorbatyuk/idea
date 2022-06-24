(function(){"use strict";var e={4757:function(e,t,i){var a=i(9242),r=i(3396),n=i(4870),s=i(7139),o=i(3053),l=i(9117);const c={"Value is required":"Это поле не может быть пустым","Value must be numeric":"Можно вводить только числа"};var u=i(691),d=i(3766),p=[{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4},{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:10},{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:100},{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4},{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4},{id:(0,u.x0)(),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4}];function m(e,t){return new Promise((i=>{setTimeout((()=>{e(),i()}),t)}))}const f=(0,d.Q_)("productStore",{state:()=>({isLoading:!1,productList:[],defaultList:[]}),actions:{async initProductList(){this.isLoading=!0,await m(this.fillData,2e3),this.isLoading=!1},fillData(){this.productList=[...p],this.default=[...p]},async addProduct(e){const t=await fetch(e.link);t.ok||(e.link=null),this.productList.push(e),this.default.push(e)},removeProduct(e){const t=this.productList.findIndex((t=>t.id===e));this.productList.splice(t,1),this.default.splice(t,1)},sortByMin(){this.productList.sort(((e,t)=>e.price-t.price))},sortByMax(){this.productList.sort(((e,t)=>t.price-e.price))},sortByName(){this.productList.sort(((e,t)=>e.name.localeCompare(t.name)))},sortByDefault(){this.productList=[...this.default]}}}),g=e=>((0,r.dD)("data-v-144ed2fe"),e=e(),(0,r.Cn)(),e),_=["onSubmit"],h={class:"form__field"},v=g((()=>(0,r._)("label",{for:"name",class:"required"},"Наименование товара",-1))),y={class:"form__field"},b=g((()=>(0,r._)("label",{for:"description"},"Описание товара",-1))),w={class:"form__field"},C=g((()=>(0,r._)("label",{for:"link",class:"required"},"Ссылка на изображение товара",-1))),x={class:"form__field"},k=g((()=>(0,r._)("label",{for:"price",class:"required"},"Цена товара",-1))),S=["disabled"];var U={__name:"AppAddItemForm",setup(e){const t=f(),i=(0,n.qj)({name:"",link:"",price:"",description:""}),d={name:{required:l.C1},link:{required:l.C1},price:{required:l.C1,numeric:l.uR}},p=(0,o.ZP)(d,i);function m(){i.name="",i.link="",i.price="",i.description=""}async function g(){const e=await p.value.$validate();if(!e)return;const a={id:(0,u.x0)(),name:i.name,link:i.link,description:i.description,price:i.price,idea:!0};t.addProduct(a),m(),p.value.$reset()}return(e,t)=>((0,r.wg)(),(0,r.iD)("form",{action:"",class:"form",onSubmit:(0,a.iM)(g,["prevent"])},[(0,r._)("div",h,[v,(0,r.wy)((0,r._)("input",{type:"text",onBlur:t[0]||(t[0]=(...e)=>(0,n.SU)(p).name.$touch&&(0,n.SU)(p).name.$touch(...e)),name:"name",id:"name",placeholder:"Введите наименование товара","onUpdate:modelValue":t[1]||(t[1]=e=>i.name=e),class:(0,s.C_)({error:(0,n.SU)(p).name.$errors.length})},null,34),[[a.nr,i.name]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(p).name.$errors,(e=>((0,r.wg)(),(0,r.iD)("small",{class:"form__error-massage",key:e.$uid},(0,s.zw)((0,n.SU)(c)[e.$message]),1)))),128))]),(0,r._)("div",y,[b,(0,r.wy)((0,r._)("textarea",{name:"description",id:"description",cols:"30",rows:"10",placeholder:"Введите описание товара","onUpdate:modelValue":t[2]||(t[2]=e=>i.description=e)},"\n      ",512),[[a.nr,i.description]])]),(0,r._)("div",w,[C,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.link=e),type:"text",name:"link",onBlur:t[4]||(t[4]=(...e)=>(0,n.SU)(p).link.$touch&&(0,n.SU)(p).link.$touch(...e)),id:"link",placeholder:"Введите ссылку",class:(0,s.C_)({error:(0,n.SU)(p).link.$errors.length})},null,34),[[a.nr,i.link]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(p).link.$errors,(e=>((0,r.wg)(),(0,r.iD)("small",{class:"form__error-massage",key:e.$uid},(0,s.zw)((0,n.SU)(c)[e.$message]),1)))),128))]),(0,r._)("div",x,[k,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.price=e),type:"text",name:"price",onBlur:t[6]||(t[6]=(...e)=>(0,n.SU)(p).price.$touch&&(0,n.SU)(p).price.$touch(...e)),id:"price",placeholder:"Введите цену",class:(0,s.C_)({error:(0,n.SU)(p).price.$errors.length})},null,34),[[a.nr,i.price]]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(p).price.$errors,(e=>((0,r.wg)(),(0,r.iD)("small",{class:"form__error-massage",key:e.$uid},(0,s.zw)((0,n.SU)(c)[e.$message]),1)))),128))]),(0,r._)("button",{type:"submit",class:"form__submit",disabled:(0,n.SU)(p).$invalid}," Добавить товар ",8,S)],40,_))}},D=i(89);const L=(0,D.Z)(U,[["__scopeId","data-v-144ed2fe"]]);var $=L;const V={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T=(0,r.uE)('<g clip-path="url(#clip0_4_349)"><path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="white"></path><path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="white"></path><path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="white"></path><path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="white"></path></g><defs><clipPath id="clip0_4_349"><rect width="16" height="16" fill="white"></rect></clipPath></defs>',2),H=[T];function P(e,t,i,a,n,s){return(0,r.wg)(),(0,r.iD)("svg",V,H)}var M={name:"AppIconDelete"};const N=(0,D.Z)(M,[["render",P]]);var B=N;const Z={class:"card"},q={class:"card__img"},O=["src"],j={class:"card__content"},A={class:"card__title"},z={key:0,class:"card__text"},I={class:"card__price"};var W={__name:"AppCard",props:{item:{type:Object,required:!0}},setup(e){const t=e,a=f(),o=(0,r.Fl)((()=>t.item.link??i(8265))),l=(0,r.Fl)((()=>Number(t.item.price).toLocaleString("ru")));function c(e){a.removeProduct(e)}return(t,i)=>((0,r.wg)(),(0,r.iD)("div",Z,[(0,r._)("div",q,[(0,r._)("img",{src:(0,n.SU)(o),alt:"Фото товара"},null,8,O)]),(0,r._)("div",j,[(0,r._)("h2",A,(0,s.zw)(e.item.name),1),e.item.description?((0,r.wg)(),(0,r.iD)("p",z,(0,s.zw)(e.item.description),1)):(0,r.kq)("",!0),(0,r._)("span",I,(0,s.zw)((0,n.SU)(l))+" руб.",1),(0,r._)("button",{class:"card__btn",type:"button","aria-label":"Удалить товар",onClick:i[0]||(i[0]=t=>c(e.item.id))},[(0,r.Wm)(B)])])]))}};const F=(0,D.Z)(W,[["__scopeId","data-v-b1ac43da"]]);var Y=F;const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},E=(0,r.uE)('<g transform="rotate(0 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(30 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f47e60"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(60 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f8b26a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(90 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#abbd81"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(120 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#849b87"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(150 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6492ac"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(180 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#637cb5"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(210 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#6a63b6"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(240 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#fe718d"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(270 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f47e60"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(300 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#f8b26a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(330 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#abbd81"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></g>',12),Q=[E];function R(e,t,i,a,n,s){return(0,r.wg)(),(0,r.iD)("svg",K,Q)}var G={name:"AppLoader"};const J=(0,D.Z)(G,[["render",R]]);var X=J,ee=i.p+"img/arrow.8fe6b11c.svg";const te=e=>((0,r.dD)("data-v-51580c06"),e=e(),(0,r.Cn)(),e),ie={class:"select"},ae=te((()=>(0,r._)("img",{src:ee,alt:""},null,-1))),re={key:0,class:"select__list"};var ne={__name:"AppSelect",setup(e){const t=f(),i=(0,n.iH)(!1),a=(0,n.iH)("default");let o=(0,n.iH)("По умолчанию");function l(e){t.sortByMin(),o.value=e.currentTarget.textContent,i.value=!i.value,a.value="minPrice"}function c(e){t.sortByMax(),o.value=e.currentTarget.textContent,i.value=!i.value,a.value="maxPrice"}function u(e){t.sortByName(),o.value=e.currentTarget.textContent,i.value=!i.value,a.value="name"}function d(){i.value&&(i.value=!i.value)}function p(e){t.sortByDefault(),o.value=e.currentTarget.textContent,i.value=!i.value,a.value="default"}return(e,t)=>{const m=(0,r.Q2)("click-outside");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",ie,[(0,r._)("button",{type:"button",class:"select__input",onClick:t[0]||(t[0]=e=>i.value=!i.value)},[(0,r._)("span",null,(0,s.zw)((0,n.SU)(o)),1),ae]),i.value?((0,r.wg)(),(0,r.iD)("ul",re,[(0,r._)("li",null,[(0,r._)("button",{class:(0,s.C_)(["select__btn",{active:"minPrice"===a.value}]),type:"button",onClick:t[1]||(t[1]=e=>l(e))},"По цене min ",2)]),(0,r._)("li",null,[(0,r._)("button",{class:(0,s.C_)(["select__btn",{active:"maxPrice"===a.value}]),type:"button",onClick:t[2]||(t[2]=e=>c(e))},"По цене max ",2)]),(0,r._)("li",null,[(0,r._)("button",{class:(0,s.C_)(["select__btn",{active:"name"===a.value}]),type:"button",onClick:t[3]||(t[3]=e=>u(e))},"По наименованию ",2)]),(0,r._)("li",null,[(0,r._)("button",{class:(0,s.C_)(["select__btn",{active:"default"===a.value}]),type:"button",onClick:t[4]||(t[4]=e=>p(e))},"По умолчанию ",2)])])):(0,r.kq)("",!0)])),[[m,d]])}}};const se=(0,D.Z)(ne,[["__scopeId","data-v-51580c06"]]);var oe=se;const le=e=>((0,r.dD)("data-v-436a15af"),e=e(),(0,r.Cn)(),e),ce={class:"app container"},ue={class:"app__top"},de=le((()=>(0,r._)("h1",{class:"app__title"},"Добавление товара",-1))),pe={class:"app__content"},me={key:0,class:"app__empty-text"};var fe={__name:"App",setup(e){const t=f();return(0,r.bv)((()=>{t.initProductList()})),(e,i)=>((0,r.wg)(),(0,r.iD)("div",ce,[(0,r._)("div",ue,[de,(0,r.Wm)(oe)]),(0,r._)("div",pe,[(0,r.Wm)($,{class:"app__form"}),(0,r.wy)((0,r.Wm)(a.W3,{name:"products",tag:"ul",class:"app__items-list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(t).productList,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r.Wm)(Y,{item:e},null,8,["item"])])))),128))])),_:1},512),[[a.F8,(0,n.SU)(t).productList.length>0]]),0!==(0,n.SU)(t).productList.length||(0,n.SU)(t).isLoading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",me," Список совсем пуст:( Добавьте что-нибудь ")),(0,n.SU)(t).isLoading?((0,r.wg)(),(0,r.j4)((0,n.SU)(X),{key:1})):(0,r.kq)("",!0)])]))}};const ge=(0,D.Z)(fe,[["__scopeId","data-v-436a15af"]]);var _e=ge,he=i(3051),ve=i.n(he);const ye=(0,a.ri)(_e);ye.use((0,d.WB)()),ye.use(ve()),ye.mount("#app")},8265:function(e,t,i){e.exports=i.p+"img/default.12713847.png"}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,a,r,n){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],n=e[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(o=!1,n<s&&(s=n));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/ida/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,s=a[0],o=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var u=l(i)}for(t&&t(a);c<s.length;c++)n=s[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(4757)}));a=i.O(a)})();
//# sourceMappingURL=app.ae2a37d9.js.map