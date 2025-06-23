import{d as N,j as h,c as w,v as x,a as S,q as U,m as d,u as n,F as I,o as O,s as o}from"./vue.esm-bundler-Bfxd_V-S.js";import{_ as $}from"./UiButton-DTHWxSPi.js";import"./vue-router-Bm2IpmDu.js";const b=["id"],g=N({inheritAttrs:!1,__name:"UiFilePicker",setup(e){const{size:a="sm",variant:t="filled",as:c,color:r="primary",rounded:v=!1,weight:k=400,class:F=void 0,style:P,...l}=h(),y={size:a,variant:t,color:r,rounded:v,weight:k,style:P},p=l.id;return(i,z)=>(O(),w(I,null,[x($,d({as:"label",class:n(F)},y,{for:n(p)}),{default:U(()=>[o(i.$slots,"start-icon",{},void 0,!0),o(i.$slots,"default",{},void 0,!0),o(i.$slots,"end-icon",{},void 0,!0)]),_:3},16,["class","for"]),S("input",d({class:"input"},l,{id:n(p),type:"file"}),null,16,b)],64))}}),j=(e,a)=>{const t=e.__vccOpts||e;for(const[c,r]of a)t[c]=r;return t},_=j(g,[["__scopeId","data-v-a8c8b67d"]]);g.__docgenInfo={exportName:"default",displayName:"UiFilePicker",description:"",tags:{},slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiFilePicker/UiFilePicker.vue"]};const V={component:_,title:"Inputs/File Picker",tags:["autodocs"]},s={render:e=>({components:{UiFilePicker:_},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-file-picker id="region-selector" variant="ghost" size="sm" accept=".json">
               <template #start-icon><NavigationIcon /></template>
               Select JSON file
            </ui-file-picker>
         </div>`})};var m,u,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiFilePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-file-picker id="region-selector" variant="ghost" size="sm" accept=".json">
               <template #start-icon><NavigationIcon /></template>
               Select JSON file
            </ui-file-picker>
         </div>\`
  })
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,V as default};
