import{d as R,x as y,y as I,z as h,s as f,v as k,k as V,j as i,o as n,c as w,g as S,f as $,t as C,p as q,l as D,u as N}from"./vue.esm-bundler-CQL4Gtwv.js";import{c as B}from"./clsx-B-dksMZM.js";import{_ as M}from"./UiSpacing-SAVbUipj.js";import{_ as j}from"./UiRadio-BKtOzRRV.js";const A={key:0,class:"ui-radio-group__title"},u=R({__name:"UiRadioGroup",props:y({size:{default:"md"},title:{default:""},name:{default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=a,s=I(a,"modelValue");return h("ui-radio-group",{size:r.size,name:r.name,model:s}),(e,o)=>(n(),f(M,{class:V(i(B)("ui-radio-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:k(()=>[e.title?(n(),w("p",A,C(e.title),1)):S("",!0),$(e.$slots,"default")]),_:3},8,["class","gap"]))}});u.__docgenInfo={exportName:"default",displayName:"UiRadioGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroup.vue"]};const l=R({__name:"UiRadioGroupItem",props:{size:{},label:{}},setup(a){const{size:r,name:s,model:e}=q("ui-radio-group",{size:"md",name:"",model:D()}),{value:o,id:b}=N(),_=b||v(),G=()=>{e.value=o};function v(){return`${s}-${o}`}return(U,E)=>(n(),f(j,{size:i(r),name:i(s),id:i(_),value:i(o),label:U.label,checked:i(e)===i(o),onChange:G},null,8,["size","name","id","value","label","checked"]))}});l.__docgenInfo={exportName:"default",displayName:"UiRadioGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroupItem.vue"]};const H={title:"Inputs/Radio Group",component:u,tags:["autodocs"]},d={render:a=>({components:{UiRadioGroup:u,UiRadioGroupItem:l},setup(){return{args:a}},template:`
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
      `})},p={render:a=>({components:{UiRadioGroup:u,UiRadioGroupItem:l},setup(){return{args:a}},template:`
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
      `})};var m,t,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(t=d.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var c,z,x;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(z=p.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};const J=["Default","Sizes"];export{d as Default,p as Sizes,J as __namedExportsOrder,H as default};
