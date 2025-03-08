import{d as b,u as _,p as V,y as U,q as y,s as v,k as I,j as l,o as m,c as S,g as h,f as k,t as q,z as w,l as C}from"./vue.esm-bundler-CeuXVXgz.js";import{c as D}from"./clsx-B-dksMZM.js";import{_ as N}from"./UiSpacing-CztT0h5W.js";import{_ as $}from"./UiRadio-BA8zSisq.js";const B={key:0,class:"ui-radio-group__title"},s=b({__name:"UiRadioGroup",props:{size:{default:"md"},title:{default:""},modelValue:{default:""}},emits:["update:modelValue"],setup(a,{emit:d}){const i=a,p=_(),u=d,n=V({get:()=>i.modelValue,set:e=>{u("update:modelValue",e)}});return U("ui-radio-group",{size:i.size,name:p.name||"",modelValue:n}),(e,G)=>(m(),y(N,{class:I(l(D)("ui-radio-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:v(()=>[e.title?(m(),S("p",B,q(e.title),1)):h("",!0),k(e.$slots,"default")]),_:3},8,["class","gap"]))}});s.__docgenInfo={exportName:"default",displayName:"UiRadioGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroup.vue"]};const t=b({__name:"UiRadioGroupItem",props:{size:{},label:{},modelValue:{}},setup(a){const{size:d,name:i,modelValue:p}=w("ui-radio-group",{size:"md",name:"",modelValue:C("")}),{value:u}=_(),n=()=>{p.value=u};return(e,G)=>(m(),y($,{size:l(d),name:l(i),label:e.label,onChange:n},null,8,["size","name","label"]))}});t.__docgenInfo={exportName:"default",displayName:"UiRadioGroupItem",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroupItem.vue"]};const P={title:"Inputs/Radio Group",component:s,tags:["autodocs"]},o={render:a=>({components:{UiRadioGroup:s,UiRadioGroupItem:t},setup(){return{args:a}},template:`
         <ui-radio-group title="Radio group">
             <ui-radio-group-item
               id="example-radio-group-sizes-sm"
               name="example-radio-group-sizes"
               label="Radio 1"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-md"
               name="example-radio-group-sizes"
               label="Radio 2"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-lg"
               name="example-radio-group-sizes"
               label="Radio 3"
            />
         </ui-radio-group>
      `})},r={render:a=>({components:{UiRadioGroup:s,UiRadioGroupItem:t},setup(){return{args:a}},template:`
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
      `})};var g,c,z;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
         <ui-radio-group title="Radio group">
             <ui-radio-group-item
               id="example-radio-group-sizes-sm"
               name="example-radio-group-sizes"
               label="Radio 1"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-md"
               name="example-radio-group-sizes"
               label="Radio 2"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-lg"
               name="example-radio-group-sizes"
               label="Radio 3"
            />
         </ui-radio-group>
      \`
  })
}`,...(z=(c=o.parameters)==null?void 0:c.docs)==null?void 0:z.source}}};var x,f,R;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const T=["Default","Sizes"];export{o as Default,r as Sizes,T as __namedExportsOrder,P as default};
