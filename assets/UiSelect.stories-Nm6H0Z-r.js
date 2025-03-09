import{d as w,l as n,q as N,x as q,s as v,v as s,o as f,y as h,z as C,t as D,T as $,g as P,f as I,p as T,j}from"./vue.esm-bundler-DL4AlWau.js";import{_ as k}from"./UiButton-DWnnD_Jm.js";import{_ as S}from"./UiSpacing-ByV2o_D1.js";import"./clsx-B-dksMZM.js";const m=w({__name:"UiSelect",props:{placeholder:{},size:{default:"md"},modelValue:{}},emits:["update:modelValue"],setup(t,{emit:i}){const a=t,e=n(!1),p=()=>{e.value=!e.value},r=i,o=N({get:()=>a.modelValue,set:l=>{r("update:modelValue",l)}});return q("ui-select",{size:a.size,modelValue:o,isOpen:e}),(l,g)=>(f(),v(S,{class:"ui-select",vertical:"",gap:"sm"},{default:s(()=>[h(k,{class:"ui-select__button",variant:"ghost",size:l.size,onclick:p},{default:s(()=>{var d;return[C(D(((d=o.value)==null?void 0:d.name)||l.placeholder),1)]}),_:1},8,["size"]),h($,{name:"ui-select-fade"},{default:s(()=>[e.value?(f(),v(S,{key:0,class:"ui-select__options",vertical:"",gap:"sm"},{default:s(()=>[I(l.$slots,"default")]),_:3})):P("",!0)]),_:3})]),_:3}))}});m.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"placeholder",description:"Placeholder - appears when no value is selected",required:!1,type:{name:"string"}},{name:"size",description:"Size of the select",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"modelValue",required:!1,type:{name:"UiSelectValue"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelect.vue"]};const O=w({__name:"UiSelectItem",props:{value:{default:""},name:{}},setup(t){const i=t,{value:a,name:e}=i,{modelValue:p,size:r,isOpen:o}=T("ui-select",{size:"md",modelValue:n({selectedValue:"",name:""}),isOpen:n(!1)}),l=()=>{p.value={selectedValue:a,name:e},o.value=!1};return(g,d)=>(f(),v(k,{onclick:l,class:"ui-select__option",variant:"ghost",size:j(r)},{default:s(()=>[I(g.$slots,"default")]),_:3},8,["size"]))}});O.__docgenInfo={exportName:"default",displayName:"UiSelectItem",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"name",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelectItem.vue"]};const b={title:"Inputs/Select",component:m,tags:["autodocs"]},u={render:t=>({components:{UiSelect:m,UiSelectItem:O},setup(){const i=n();return{args:t,value1:i}},template:`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px" v-model="value1">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 1">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 1">Option 3</ui-select-item>
            </ui-select>
         </div>
      `})},c={render:t=>({components:{UiSelect:m,UiSelectItem:O},setup(){const i=n(),a=n(),e=n();return{args:t,value1:i,value2:a,value3:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-select placeholder="Small" style="width: 300px" size="sm" v-model="value1">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
            <ui-select placeholder="Medium" style="width: 300px" size="md" v-model="value2">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
            <ui-select placeholder="Large" style="width: 300px" size="lg" v-model="value3">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
         </div>
      `})};var _,y,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect,
      UiSelectItem
    },
    setup() {
      const value1 = ref<UiSelectValue>();
      return {
        args,
        value1
      };
    },
    template: \`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px" v-model="value1">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 1">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 1">Option 3</ui-select-item>
            </ui-select>
         </div>
      \`
  })
}`,...(V=(y=u.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var x,z,U;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect,
      UiSelectItem
    },
    setup() {
      const value1 = ref<UiSelectValue>();
      const value2 = ref<UiSelectValue>();
      const value3 = ref<UiSelectValue>();
      return {
        args,
        value1,
        value2,
        value3
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-select placeholder="Small" style="width: 300px" size="sm" v-model="value1">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
            <ui-select placeholder="Medium" style="width: 300px" size="md" v-model="value2">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
            <ui-select placeholder="Large" style="width: 300px" size="lg" v-model="value3">
               <ui-select-item value="option-1" name="Option 1">Option 1</ui-select-item>
               <ui-select-item value="option-2" name="Option 2">Option 2</ui-select-item>
               <ui-select-item value="option-3" name="Option 3">Option 3</ui-select-item>
            </ui-select>
         </div>
      \`
  })
}`,...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const E=["Default","Sizes"];export{u as Default,c as Sizes,E as __namedExportsOrder,b as default};
