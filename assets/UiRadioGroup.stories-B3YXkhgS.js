import{d as c,m as y,j as G,J as I,x as z,y as U,s as V,o as m,c as k,n as w,z as $,t as S,I as d,k as q,u as o,K as N}from"./vue.esm-bundler-BYAC-X9_.js";import{_ as h}from"./UiSpacing-N5mcTZWi.js";import{_ as C}from"./UiRadio-hknjdZ-4.js";import{u as B}from"./useInject-sW9uSy1v.js";import"./vue-router-CXlkMNkf.js";const D={key:0,class:"ui-radio-group__title"},n=c({__name:"UiRadioGroup",props:y({size:{default:"md"},title:{default:""},name:{default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const i=r,a=G(r,"modelValue");return I("ui-radio-group",{size:i.size,name:i.name,model:a}),(e,l)=>(m(),z(h,{class:V(["ui-radio-group",`size-${e.size}`]),gap:e.size,vertical:""},{default:U(()=>[e.title?(m(),k("p",D,S(e.title),1)):w("",!0),$(e.$slots,"default")]),_:3},8,["class","gap"]))}});n.__docgenInfo={exportName:"default",displayName:"UiRadioGroup",description:"",tags:{},props:[{name:"size",description:"sm, md, lg",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroup.vue"]};const f=c({__name:"UiRadioGroupItem",props:{size:{},label:{}},setup(r){const{size:i,model:a,name:e}=B("ui-radio-group",{size:"md",name:"",model:d()}),{value:l,id:x}=q(),R=x||b();function b(){return`${e}-${l}`}return(_,u)=>(m(),z(C,{modelValue:o(a),"onUpdate:modelValue":u[0]||(u[0]=v=>N(a)?a.value=v:null),size:o(i),name:o(e),id:o(R),label:_.label,checked:o(a)===o(l)},null,8,["modelValue","size","name","id","label","checked"]))}});f.__docgenInfo={exportName:"default",displayName:"UiRadioGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroupItem.vue"]};const P={title:"Inputs/Radio Group",component:n,tags:["autodocs"]},s={render:r=>({components:{UiRadioGroup:n,UiRadioGroupItem:f},setup(){const i=d(),a=d(),e=d();return{args:r,model1:i,model2:a,model3:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-radio-group title="Radio group" size="sm" v-model="model1">
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-1"
                  name="example-radio-group-sizes-sm"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-2"
                  name="example-radio-group-sizes-sm"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-3"
                  name="example-radio-group-sizes-sm"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group" size="md" v-model="model2">
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-1"
                  name="example-radio-group-sizes-md"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-2"
                  name="example-radio-group-sizes-md"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-3"
                  name="example-radio-group-sizes-md"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group" size="lg" v-model="model3">
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-1"
                  name="example-radio-group-sizes-lg"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-2"
                  name="example-radio-group-sizes-lg"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-3"
                  name="example-radio-group-sizes-lg"
                  label="Radio 3"
               />
            </ui-radio-group>
         </div>
      `})};var p,t,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiRadioGroup,
      UiRadioGroupItem
    },
    setup() {
      const model1 = ref();
      const model2 = ref();
      const model3 = ref();
      return {
        args,
        model1,
        model2,
        model3
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-radio-group title="Radio group" size="sm" v-model="model1">
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-1"
                  name="example-radio-group-sizes-sm"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-2"
                  name="example-radio-group-sizes-sm"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-3"
                  name="example-radio-group-sizes-sm"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group" size="md" v-model="model2">
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-1"
                  name="example-radio-group-sizes-md"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-2"
                  name="example-radio-group-sizes-md"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-3"
                  name="example-radio-group-sizes-md"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group" size="lg" v-model="model3">
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-1"
                  name="example-radio-group-sizes-lg"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-2"
                  name="example-radio-group-sizes-lg"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-3"
                  name="example-radio-group-sizes-lg"
                  label="Radio 3"
               />
            </ui-radio-group>
         </div>
      \`
  })
}`,...(g=(t=s.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};const T=["Sizes"];export{s as Sizes,T as __namedExportsOrder,P as default};
