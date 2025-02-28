import{d as U,u as t,q as y,x as v,s as G,k as S,j as s,o as g,v as I,c as h,g as k,f as q,t as N,p as C,l as D}from"./vue.esm-bundler-CviTMTQO.js";import{c as $}from"./clsx-B-dksMZM.js";import{_ as V}from"./UiSpacing-D-WYPKfY.js";import{_ as w}from"./UiRadio-BmGhXXRj.js";const B={key:0,class:"ui-radio-group__title"},d=U({__name:"UiRadioGroup",props:{size:{default:"md"},title:{default:""},modelValue:{default:""}},emits:["update:modelValue"],setup(a,{emit:p}){const i=a,n=p,u=t(),l=y({get:()=>i.modelValue,set:e=>{n("update:modelValue",e)}});v("ui-radio-group",{size:i.size,name:u.name||"",modelValue:l});const{className:m}=t();return(e,j)=>(g(),G(V,{class:S(s($)("ui-radio-group",`size-${e.size}`,{className:s(m)})),gap:e.size,vertical:""},{default:I(()=>[e.title?(g(),h("p",B,N(e.title),1)):k("",!0),q(e.$slots,"default")]),_:3},8,["class","gap"]))}});d.__docgenInfo={exportName:"default",displayName:"UiRadioGroup",description:"",tags:{},props:[{name:"size",description:"Size of radio group",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"title",description:"Title for radio group",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroup.vue"]};const c=U({__name:"UiRadioGroupItem",props:{size:{},label:{},modelValue:{}},setup(a){const{size:p,name:i,modelValue:n}=C("ui-radio-group",{size:"md",name:"",modelValue:D("")}),{value:u}=t(),l=()=>{n.value=u};return(m,e)=>(g(),G(w,{size:s(p),name:s(i),label:m.label,onChange:l},null,8,["size","name","label"]))}});c.__docgenInfo={exportName:"default",displayName:"UiRadioGroupItem",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadioGroup/UiRadioGroupItem.vue"]};const L={title:"Radio Group",component:d,tags:["autodocs"]},o={render:a=>({components:{UiRadioGroup:d,UiRadioGroupItem:c},setup(){return{args:a}},template:`
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
      `})},r={render:a=>({components:{UiRadioGroup:d,UiRadioGroupItem:c,UiSpacing:V},setup(){return{args:a}},template:`
         <ui-spacing align="center" gap="lg">
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
         </ui-spacing>
      `})};var z,x,R;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(x=o.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var f,b,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiRadioGroup,
      UiRadioGroupItem,
      UiSpacing
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing align="center" gap="lg">
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
         </ui-spacing>
      \`
  })
}`,...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const O=["Default","Sizes"];export{o as Default,r as Sizes,O as __namedExportsOrder,L as default};
