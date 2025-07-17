import{d as N,k as h,c as w,B as x,b as S,y as U,p as d,u as n,F as I,o as b,z as o}from"./vue.esm-bundler-BYAC-X9_.js";import{_ as z}from"./UiButton-cugExzWx.js";import"./vue-router-CXlkMNkf.js";const B=["id"],g=N({inheritAttrs:!1,__name:"UiFilePicker",setup(e){const{size:a="sm",variant:t="filled",as:c,color:r="primary",rounded:v=!1,weight:k=400,class:y=void 0,style:F,...l}=h(),P={size:a,variant:t,color:r,rounded:v,weight:k,style:F},p=l.id;return(i,$)=>(b(),w(I,null,[x(z,d({as:"label",class:n(y)},P,{for:n(p)}),{default:U(()=>[o(i.$slots,"start-icon",{},void 0,!0),o(i.$slots,"default",{},void 0,!0),o(i.$slots,"end-icon",{},void 0,!0)]),_:3},16,["class","for"]),S("input",d({class:"input"},l,{id:n(p),type:"file"}),null,16,B)],64))}}),O=(e,a)=>{const t=e.__vccOpts||e;for(const[c,r]of a)t[c]=r;return t},_=O(g,[["__scopeId","data-v-a8c8b67d"]]);g.__docgenInfo={exportName:"default",displayName:"UiFilePicker",description:"",tags:{},slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiFilePicker/UiFilePicker.vue"]};const j={component:_,title:"Inputs/File Picker",tags:["autodocs"]},s={render:e=>({components:{UiFilePicker:_},setup(){return{args:e}},template:`
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
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,j as default};
