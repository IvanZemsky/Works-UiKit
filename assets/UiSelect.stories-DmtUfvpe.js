import{d as g,l as h,q as x,s as n,v as a,o as c,y as m,z as k,t as O,T as I,g as N,f as S,x as w,p as C}from"./vue.esm-bundler-DL4AlWau.js";import{_ as V}from"./UiButton-DxwDU5KG.js";import{_ as d}from"./UiSpacing-ByV2o_D1.js";import"./clsx-B-dksMZM.js";const u=g({__name:"UiSelect",props:{placeholder:{},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:o}){const i=e,t=h(!1),r=()=>{t.value=!t.value},U=o,p=x({get:()=>i.modelValue,set:l=>{U("update:modelValue",l)}});return w("ui-select",{modelValue:p}),(l,D)=>(c(),n(d,{class:"ui-select",vertical:"",gap:"sm"},{default:a(()=>[m(V,{class:"ui-select-button",variant:"ghost",onclick:r},{default:a(()=>[k(O(p.value||l.placeholder),1)]),_:1}),m(I,{name:"ui-select-fade"},{default:a(()=>[t.value?(c(),n(d,{key:0,class:"ui-select-options",vertical:"",gap:"sm"},{default:a(()=>[S(l.$slots,"default")]),_:3})):N("",!0)]),_:3})]),_:3}))}});u.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelect.vue"]};const y=g({__name:"UiSelectItem",props:{value:{default:""}},setup(e){const{modelValue:o}=C("ui-select",{modelValue:h("")}),i=()=>{o.value=e.value};return(t,r)=>(c(),n(V,{onclick:i,class:"ui-select-option",variant:"ghost"},{default:a(()=>[S(t.$slots,"default")]),_:3}))}});y.__docgenInfo={exportName:"default",displayName:"UiSelectItem",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelectItem.vue"]};const F={title:"Inputs/Select",component:u,tags:["autodocs"]},s={render:e=>({components:{UiSelect:u,UiSelectItem:y},setup(){return{args:e}},template:`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px">
               <ui-select-item value="option-1">Option 1</ui-select-item>
               <ui-select-item value="option-2">Option 2</ui-select-item>
               <ui-select-item value="option-3">Option 3</ui-select-item>
            </ui-select>
         </div>
      `})};var f,v,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect,
      UiSelectItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px">
               <ui-select-item value="option-1">Option 1</ui-select-item>
               <ui-select-item value="option-2">Option 2</ui-select-item>
               <ui-select-item value="option-3">Option 3</ui-select-item>
            </ui-select>
         </div>
      \`
  })
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,F as default};
