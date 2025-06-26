import{d as N,j as y,c as h,p as w,a as x,q as S,m as o,u as s,F as U,o as I,s as a}from"./vue.esm-bundler-BRF8bUT-.js";import{_ as $}from"./UiButton-B8cKg0xa.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-router-CFPU2mzG.js";const j=["id"],m=N({inheritAttrs:!1,__name:"UiFilePicker",setup(i){const{size:u="sm",variant:f="filled",as:z,color:g="primary",rounded:_=!1,weight:v=400,class:k=void 0,style:F,...r}=y(),P={size:u,variant:f,color:g,rounded:_,weight:v,style:F},n=r.id;return(t,A)=>(I(),h(U,null,[w($,o({as:"label",class:s(k)},P,{for:s(n)}),{default:S(()=>[a(t.$slots,"start-icon",{},void 0,!0),a(t.$slots,"default",{},void 0,!0),a(t.$slots,"end-icon",{},void 0,!0)]),_:3},16,["class","for"]),x("input",o({class:"input"},r,{id:s(n),type:"file"}),null,16,j)],64))}}),d=b(m,[["__scopeId","data-v-a8c8b67d"]]);m.__docgenInfo={exportName:"default",displayName:"UiFilePicker",description:"",tags:{},slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiFilePicker/UiFilePicker.vue"]};const C={component:d,title:"Inputs/File Picker",tags:["autodocs"]},e={render:i=>({components:{UiFilePicker:d},setup(){return{args:i}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-file-picker id="region-selector" variant="ghost" size="sm" accept=".json">
               <template #start-icon><NavigationIcon /></template>
               Select JSON file
            </ui-file-picker>
         </div>`})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,C as default};
