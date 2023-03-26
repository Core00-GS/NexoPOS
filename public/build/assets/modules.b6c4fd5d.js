import{P as w,b as _,n as i,m as M}from"./bootstrap.1adf5f09.js";import{_ as f}from"./lang.2d0006f0.js";import k from"./ns-alert-popup.e868772c.js";import"./index.es.f7e98ba1.js";import{v as C}from"./runtime-dom.esm-bundler.febf7d20.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-upload-component.18541017.js";import{b1 as c,aB as u,aC as e,ap as d,bt as P,aA as m,M as B,b6 as E,b8 as N,aG as p,az as v,br as b,z as g}from"./runtime-core.esm-bundler.db039fbe.js";import"./vue.runtime.esm-bundler.0868408f.js";const D={name:"ns-modules",props:["url","upload"],data(){return{rawModules:[],searchPlaceholder:f('Press "/" to search modules'),total_enabled:0,total_disabled:0,searchText:"",searchTimeOut:null}},mounted(){this.loadModules().subscribe(),document.addEventListener("keypress",s=>{s.key==="/"&&this.$refs.searchField!==null&&setTimeout(()=>{this.$refs.searchField.select()},1)})},watch:{},computed:{noModules(){return Object.values(this.modules).length===0},modules(){if(this.searchText.length>0){const s=Object.values(this.rawModules).filter(l=>{const r=new RegExp(this.searchText,"gi"),n=l.name.match(r);return n!==null?n.length>0:!1});console.log(s);const o=new Object;for(let l=0;l<s.length;l++)o[s[l].namespace]=s[l];return o}return this.rawModules},noModuleMessage(){return f("No module has been uploaded yet.")}},methods:{__:f,openPopupDetails(s){w.show(k,{title:f("{module}").replace("{module}",s.name),message:s.description})},download(s){document.location="/dashboard/modules/download/"+s.namespace},performMigration:async(s,o)=>{const l=async(r,n)=>new Promise((t,h)=>{_.post(`/api/modules/${s.namespace}/migrate`,{file:r,version:n}).subscribe({next:a=>{t(!0)},error:a=>i.error(a.message,null,{duration:4e3}).subscribe()})});if(o=o||s.migrations,o){s.migrating=!0;for(let r in o)for(let n=0;n<o[r].length;n++){const t=o[r][n];await l(t,r)}s.migrating=!1,s.migrated=!0}},truncateText(s,o,l="..."){let r=s.split(" ");return r.length>o&&(r=r.slice(0,o),r.push(l)),r.join(" ")},countWords(s){return s.split(" ").length},refreshModules(){this.loadModules().subscribe()},enableModule(s){const o=`${this.url}/${s.namespace}/enable`;_.put(o).subscribe({next:async l=>{i.success(l.message).subscribe(),this.loadModules().subscribe({next:r=>{document.location.reload()},error:r=>{i.error(r.message).subscribe()}})},error:l=>{i.error(l.message).subscribe()}})},disableModule(s){const o=`${this.url}/${s.namespace}/disable`;_.put(o).subscribe({next:l=>{i.success(l.message).subscribe(),this.loadModules().subscribe({next:r=>{document.location.reload()},error:r=>{i.error(r.message).subscribe()}})},error:l=>{i.error(l.message).subscribe()}})},loadModules(){return _.get(this.url).pipe(M(s=>(this.rawModules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,s)))},removeModule(s){if(confirm(f('Would you like to delete "{module}"? All data created by the module might also be deleted.').replace("{module}",s.name))){const o=`${this.url}/${s.namespace}/delete`;_.delete(o).subscribe({next:l=>{this.loadModules().subscribe({next:r=>{document.location.reload()}})},error:l=>{i.error(l.message,null,{duration:5e3}).subscribe()}})}}}},V={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},F={class:"flex flex-col md:flex-row md:justify-between md:items-center"},R={class:"flex flex-col md:flex-row md:justify-between md:items-center -mx-2"},j={class:"px-2"},A={class:"ns-button mb-2"},W=e("i",{class:"las la-sync"},null,-1),z={class:"mx-2"},S={class:"px-2"},U={class:"ns-button mb-2"},G=["href"],H=e("i",{class:"las la-angle-right"},null,-1),L={class:"px-2 w-auto"},q={class:"input-group mb-2 shadow border-2 info rounded overflow-hidden"},I=["placeholder"],J={class:"header-tabs flex -mx-4 flex-wrap"},K={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Q={href:"#"},X={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Y={href:"#"},Z={class:"module-section flex-auto flex flex-wrap -mx-4"},$={key:0,class:"p-4 flex-auto flex"},O={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},ee={class:"font-bold text-xl text-primary text-center"},se={key:1,class:"p-4 flex-auto flex"},te={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},oe={class:"font-bold text-xl text-primary text-center"},le={class:"ns-modules rounded shadow overflow-hidden ns-box"},re={class:"module-head h-32 p-2"},ae={class:"font-semibold text-lg"},ne={class:"text-xs flex justify-between"},de={class:"py-2 text-sm"},ie=["onClick"],ce={class:"ns-box-footer border-t p-2 flex justify-between"},ue={class:"flex -mx-1"},he={class:"px-1 flex -mx-1"},_e={class:"px-1 flex"},fe=e("i",{class:"las la-archive"},null,-1),me={class:"px-1 flex"},xe=e("i",{class:"las la-trash"},null,-1);function be(s,o,l,r,n,t){const h=N("ns-button");return c(),u("div",V,[e("div",F,[e("div",R,[e("span",j,[e("div",A,[e("a",{onClick:o[0]||(o[0]=a=>t.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[W,e("span",z,d(t.__("Refresh")),1)])])]),e("span",S,[e("div",U,[e("a",{href:l.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,d(t.__("Upload")),1),H],8,G)])]),e("div",L,[e("div",q,[P(e("input",{ref:"searchField",placeholder:n.searchPlaceholder,"onUpdate:modelValue":o[1]||(o[1]=a=>n.searchText=a),type:"text",class:"w-full md:w-60 outline-none py-1 px-2"},null,8,I),[[C,n.searchText]])])])]),e("div",J,[e("div",K,[e("a",Q,d(s.$slots.enabled?s.$slots.enabled[0].text:t.__("Enabled"))+"("+d(n.total_enabled)+")",1)]),e("div",X,[e("a",Y,d(s.$slots.disabled?s.$slots.disabled[0].text:t.__("Disabled"))+" ("+d(n.total_disabled)+")",1)])])]),e("div",Z,[t.noModules&&n.searchText.length===0?(c(),u("div",$,[e("div",O,[e("h2",ee,d(t.noModuleMessage),1)])])):m("",!0),t.noModules&&n.searchText.length>0?(c(),u("div",se,[e("div",te,[e("h2",oe,d(t.__("No modules matches your search term.")),1)])])):m("",!0),(c(!0),u(B,null,E(t.modules,(a,y)=>(c(),u("div",{class:"px-4 w-full md:w-1/2 lg:w-1/4 py-4",key:y},[e("div",le,[e("div",re,[e("h3",ae,d(a.name),1),e("p",ne,[e("span",null,d(a.author),1),e("strong",null,"v"+d(a.version),1)]),e("p",de,[p(d(t.truncateText(a.description,20,"..."))+" ",1),t.countWords(a.description)>20?(c(),u("a",{key:0,class:"text-xs text-info-tertiary hover:underline",onClick:x=>t.openPopupDetails(a),href:"javascript:void(0)"},"["+d(t.__("Read More"))+"]",9,ie)):m("",!0)])]),e("div",ce,[a.enabled?m("",!0):(c(),v(h,{key:0,onClick:x=>t.enableModule(a),type:"info"},{default:b(()=>[p(d(t.__("Enable")),1)]),_:2},1032,["onClick"])),a.enabled?(c(),v(h,{key:1,onClick:x=>t.disableModule(a),type:"success"},{default:b(()=>[p(d(t.__("Disable")),1)]),_:2},1032,["onClick"])):m("",!0),e("div",ue,[e("div",he,[e("div",_e,[g(h,{onClick:x=>t.download(a),type:"info"},{default:b(()=>[fe]),_:2},1032,["onClick"])]),e("div",me,[g(h,{onClick:x=>t.removeModule(a),type:"error"},{default:b(()=>[xe]),_:2},1032,["onClick"])])])])])])]))),128))])])}var Pe=T(D,[["render",be]]);export{Pe as default};