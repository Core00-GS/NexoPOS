import{h as c,b as d,a as m}from"./bootstrap-Bpe5LRJd.js";import{c as g,e as x}from"./components-C1TnecdQ.js";import{_ as l,n as f}from"./currency-lOMYG1Wf.js";import{s as p}from"./select-api-entities-COgjiGM-.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as v,o as u,c as _,a as t,f as b,t as r,F as w,b as D,n as F}from"./runtime-core.esm-bundler-RT2b-_3S.js";import"./ns-alert-popup-SVrn5Xft.js";import"./ns-avatar-image-CAD6xUGA.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-C2dK5WQb.js";import"./join-array-DPKtuOQJ.js";const C={name:"ns-profit-report",props:["storeLogo","storeName"],data(){return{categoryNames:"",unitNames:"",startDateField:{type:"datetimepicker",value:c(ns.date.current).startOf("month").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:c(ns.date.current).endOf("month").format("YYYY-MM-DD HH:mm:ss")},categoryField:{value:[],label:l("Filter by Category")},unitField:{value:[],label:l("Filter by Units")},products:[],ns:window.ns}},components:{nsDatepicker:g,nsDateTimePicker:x},computed:{totalQuantities(){return this.products.length>0?this.products.map(e=>e.quantity).reduce((e,a)=>e+a):0},totalPurchasePrice(){return this.products.length>0?this.products.map(e=>e.total_purchase_price).reduce((e,a)=>e+a):0},totalSalePrice(){return this.products.length>0?this.products.map(e=>e.total_price).reduce((e,a)=>e+a):0},totalProfit(){return this.products.length>0?this.products.map(e=>e.total_price-e.total_purchase_price).reduce((e,a)=>e+a):0},totalTax(){return this.products.length>0?this.products.map(e=>e.tax_value).reduce((e,a)=>e+a):0}},methods:{__:l,nsCurrency:f,printSaleReport(){this.$htmlToPaper("profit-report")},setStartDate(e){this.startDate=e.format()},async selectCategories(){try{const e=await p("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=e.values,this.categoryNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the categories")).subscribe()}},async selectUnit(){try{const e=await p("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=e.values,this.unitNames=e.labels,this.loadReport()}catch(e){if(e!==!1)return d.error(l("An error has occured while loading the units")).subscribe()}},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return d.error(l("Unable to proceed. Select a correct time range.")).subscribe();const e=c(this.startDateField.value);if(c(this.endDateField.value).isBefore(e))return d.error(l("Unable to proceed. The current time range is not valid.")).subscribe();m.post("/api/reports/profit-report",{startDate:this.startDateField.value,endDate:this.endDateField.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:n=>{this.products=n},error:n=>{d.error(n.message).subscribe()}})},setEndDate(e){this.endDate=e.format()}}},k={id:"report-section",class:"px-4"},P={class:"flex -mx-2"},N={class:"px-2"},R={class:"px-2"},S={class:"px-2"},U=t("i",{class:"las la-sync-alt text-xl"},null,-1),Y={class:"pl-2"},M={class:"px-2"},B=t("i",{class:"las la-print text-xl"},null,-1),T={class:"pl-2"},j={class:"px-2"},A=t("i",{class:"las la-filter text-xl"},null,-1),H={class:"pl-2"},L={class:"px-2"},E=t("i",{class:"las la-filter text-xl"},null,-1),Q={class:"pl-2"},q={id:"profit-report",class:"anim-duration-500 fade-in-entrance"},O={class:"flex w-full"},V={class:"my-4 flex justify-between w-full"},z={class:"text-secondary"},G={class:"pb-1 border-b border-dashed"},I={class:"pb-1 border-b border-dashed"},J={class:"pb-1 border-b border-dashed"},K=["src","alt"],W={class:"shadow rounded my-4"},X={class:"ns-box"},Z={class:"border-b ns-box-body"},$={class:"table ns-table w-full"},tt={class:"border p-2 text-left"},et={width:"150",class:"text-right border p-2"},st={width:"150",class:"text-right border p-2"},rt={width:"150",class:"text-right border p-2"},at={width:"150",class:"text-right border p-2"},ot={width:"150",class:"text-right border p-2"},it={width:"150",class:"text-right border p-2"},lt={class:"p-2 border border-box-edge"},nt={class:"p-2 border text-right border-box-edge"},dt={class:"p-2 border text-right border-box-edge"},ct={class:"p-2 border text-right border-box-edge"},ut={class:"p-2 border text-right border-box-edge"},_t={class:"p-2 border text-right border-box-edge"},ht={class:"p-2 border text-right border-box-edge"},pt={class:"font-semibold"},bt=t("td",{colspan:"2",class:"p-2 border"},null,-1),mt={class:"p-2 border text-right"},gt={class:"p-2 border text-right"},xt={class:"p-2 border text-right"},ft={class:"p-2 border text-right"},yt={class:"p-2 border text-right"};function vt(e,a,n,wt,i,s){const h=v("ns-field");return u(),_("div",k,[t("div",P,[t("div",N,[b(h,{field:i.startDateField},null,8,["field"])]),t("div",R,[b(h,{field:i.endDateField},null,8,["field"])]),t("div",S,[t("button",{onClick:a[0]||(a[0]=o=>s.loadReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[U,t("span",Y,r(s.__("Load")),1)])]),t("div",M,[t("button",{onClick:a[1]||(a[1]=o=>s.printSaleReport()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[B,t("span",T,r(s.__("Print")),1)])]),t("div",j,[t("button",{onClick:a[2]||(a[2]=o=>s.selectCategories()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[A,t("span",H,r(s.__("Category"))+": "+r(i.categoryNames||s.__("All Categories")),1)])]),t("div",L,[t("button",{onClick:a[3]||(a[3]=o=>s.selectUnit()),class:"rounded flex justify-between bg-input-background hover:bg-input-button-hover shadow py-1 items-center text-primary px-2"},[E,t("span",Q,r(s.__("Unit"))+": "+r(i.unitNames||s.__("All Units")),1)])])]),t("div",q,[t("div",O,[t("div",V,[t("div",z,[t("ul",null,[t("li",G,r(s.__("Range : {date1} — {date2}").replace("{date1}",i.startDateField.value).replace("{date2}",i.endDateField.value)),1),t("li",I,r(s.__("Document : Profit Report")),1),t("li",J,r(s.__("By : {user}").replace("{user}",i.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,K)])])]),t("div",W,[t("div",X,[t("div",Z,[t("table",$,[t("thead",null,[t("tr",null,[t("th",tt,r(s.__("Product")),1),t("th",et,r(s.__("Unit")),1),t("th",st,r(s.__("Quantity")),1),t("th",rt,r(s.__("Purchase Price")),1),t("th",at,r(s.__("Sale Price")),1),t("th",ot,r(s.__("Taxes")),1),t("th",it,r(s.__("Profit")),1)])]),t("tbody",null,[(u(!0),_(w,null,D(i.products,o=>(u(),_("tr",{key:o.id,class:F(o.total_price-o.total_purchase_price<0?"bg-error-primary":"bg-box-background")},[t("td",lt,r(o.name),1),t("td",nt,r(o.unit_name),1),t("td",dt,r(o.quantity),1),t("td",ct,r(s.nsCurrency(o.total_purchase_price)),1),t("td",ut,r(s.nsCurrency(o.total_price)),1),t("td",_t,r(s.nsCurrency(o.tax_value)),1),t("td",ht,r(s.nsCurrency(o.total_price-o.total_purchase_price)),1)],2))),128))]),t("tfoot",pt,[t("tr",null,[bt,t("td",mt,r(s.totalQuantities),1),t("td",gt,r(s.nsCurrency(s.totalPurchasePrice)),1),t("td",xt,r(s.nsCurrency(s.totalSalePrice)),1),t("td",ft,r(s.nsCurrency(s.totalTax)),1),t("td",yt,r(s.nsCurrency(s.totalProfit)),1)])])])])])])])])}const Bt=y(C,[["render",vt]]);export{Bt as default};