import{d as y,v as D,x as M,F as e,G as N,q as w,s,o as z,A as m,H as U,t as V,T as C,C as $,p as F,E as I,b as P,y as T,u as f}from"./vue.esm-bundler-DRdyH_Db.js";import{_ as k}from"./UiButton-DxcEY9_T.js";import{_ as O}from"./UiSpacing-CzwTO2Ox.js";import"./vue-router-BbbCpkhz.js";const c=y({__name:"UiSelect",props:D({placeholder:{},size:{default:"md"}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const o=l,a=M(l,"modelValue"),t=e(""),n=e(!1);N("ui-select",{size:o.size,model:a,selected:t,isOpen:n});const r=()=>{n.value=!n.value};return(i,d)=>(z(),w(O,{class:"ui-select",vertical:"",gap:"sm"},{default:s(()=>[m(k,{class:"ui-select__button",variant:"ghost",size:i.size,onclick:r},{default:s(()=>[U(V(t.value||i.placeholder),1)]),_:1},8,["size"]),m(C,{name:"ui-select-fade"},{default:s(()=>[$(m(O,{class:"ui-select__options",vertical:"",gap:"sm"},{default:s(()=>[F(i.$slots,"default")]),_:3},512),[[I,n.value]])]),_:3})]),_:3}))}});c.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"placeholder",description:"Placeholder - appears when no value is selected",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelect.vue"]};const v=y({__name:"UiSelectOption",props:{value:{},label:{default:""}},setup(l){const o=l,{value:a,label:t}=o,{model:n,size:r,isOpen:i,selected:d}=P("ui-select",{size:"md",isOpen:e(!1),model:e(),selected:e("")});T(()=>{a===n.value&&(d.value=t)});const q=()=>{n.value=a,d.value=t,i.value=!1};return(B,E)=>(z(),w(k,{onclick:q,class:"ui-select__option",variant:"ghost",size:f(r)},{default:s(()=>[U(V(f(t)),1)]),_:1},8,["size"]))}});v.__docgenInfo={exportName:"default",displayName:"UiSelectOption",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"unknown"}},{name:"label",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelectOption.vue"]};const H={title:"Inputs/Select",component:c,tags:["autodocs"]},p={render:l=>({components:{UiSelect:c,UiSelectOption:v},setup(){const o=e("");return{args:l,value1:o}},template:`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" name="select-example-1" style="width: 300px" v-model="value1">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      `})},u={render:l=>({components:{UiSelect:c,UiSelectOption:v},setup(){const o=e(""),a=e(""),t=e("");return{args:l,value1:o,value2:a,value3:t}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-select placeholder="Small" style="width: 300px" size="sm" v-model="value1">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Medium" style="width: 300px" size="md" v-model="value2">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Large" style="width: 300px" size="lg" v-model="value3">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      `})};var g,h,_;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect,
      UiSelectOption
    },
    setup() {
      const value1 = ref("");
      return {
        args,
        value1
      };
    },
    template: \`
         <div style="height: 200px">
            <ui-select placeholder="Select an option" name="select-example-1" style="width: 300px" v-model="value1">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      \`
  })
}`,...(_=(h=p.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,S,x;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect,
      UiSelectOption
    },
    setup() {
      const value1 = ref("");
      const value2 = ref("");
      const value3 = ref("");
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
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Medium" style="width: 300px" size="md" v-model="value2">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Large" style="width: 300px" size="lg" v-model="value3">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      \`
  })
}`,...(x=(S=u.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const J=["Default","Sizes"];export{p as Default,u as Sizes,J as __namedExportsOrder,H as default};
