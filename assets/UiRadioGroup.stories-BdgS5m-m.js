import{d as t,x as _,y as v,z as y,s as g,v as G,q as U,u as a,o as l,c as I,m as h,k,t as V,e as w,r as $,l as q}from"./vue.esm-bundler-2rTkCq1z.js";import{c as C}from"./clsx-B-dksMZM.js";import{_ as S}from"./UiSpacing-BOT-jzrt.js";import{_ as N}from"./UiRadio-OwV_kD81.js";const B={key:0,class:"ui-radio-group__title"},u=t({__name:"UiRadioGroup",props:_({size:{default:"md"},title:{default:""},name:{default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const r=i,s=v(i,"modelValue");return y("ui-radio-group",{size:r.size,name:r.name,model:s}),(e,o)=>(l(),g(S,{class:U(a(C)("ui-radio-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:G(()=>[e.title?(l(),I("p",B,V(e.title),1)):h("",!0),k(e.$slots,"default")]),_:3},8,["class","gap"]))}});u.__docgenInfo={exportName:"default",displayName:"UiRadioGroup",description:"",tags:{},props:[{name:"size",description:"sm, md, lg",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroup.vue"]};const c=t({__name:"UiRadioGroupItem",props:{size:{},label:{}},setup(i){const{size:r,name:s,model:e}=w("ui-radio-group",{size:"md",name:"",model:$()}),{value:o,id:z}=q(),x=z||R(),f=()=>{e.value=o};function R(){return`${s}-${o}`}return(b,D)=>(l(),g(N,{size:a(r),name:a(s),id:a(x),value:a(o),label:b.label,checked:a(e)===a(o),onChange:f},null,8,["size","name","id","value","label","checked"]))}});c.__docgenInfo={exportName:"default",displayName:"UiRadioGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroupItem.vue"]};const P={title:"Inputs/Radio Group",component:u,tags:["autodocs"]},d={render:i=>({components:{UiRadioGroup:u,UiRadioGroupItem:c},setup(){return{args:i}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-radio-group title="Radio group" size="sm">
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
            <ui-radio-group title="Radio group">
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
            <ui-radio-group title="Radio group" size="lg">
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
      `})};var p,m,n;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiRadioGroup,
      UiRadioGroupItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-radio-group title="Radio group" size="sm">
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
            <ui-radio-group title="Radio group">
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
            <ui-radio-group title="Radio group" size="lg">
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
}`,...(n=(m=d.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const T=["Sizes"];export{d as Sizes,T as __namedExportsOrder,P as default};
