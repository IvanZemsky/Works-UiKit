import{_ as b}from"./UiSpacing-ByV2o_D1.js";import{d as z,q as U,x as G,s as _,v as y,k as V,j as r,o as p,c as S,g as v,f as I,t as x,p as q,l as A,u as D}from"./vue.esm-bundler-DL4AlWau.js";import{c as N}from"./clsx-B-dksMZM.js";import{_ as $}from"./UiCheck-BX67alpH.js";const w={key:0,class:"ui-check-group__title"},m=z({__name:"UiCheckGroup",props:{size:{default:"md"},title:{default:""},modelValue:{}},emits:["update:modelValue"],setup(c,{emit:l}){const i=c,u=l,o=U({get:()=>i.modelValue||[],set:e=>{u("update:modelValue",e)}});return G("ui-check-group",{size:i.size,modelValue:o}),(e,n)=>(p(),_(b,{class:V(r(N)("ui-check-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:y(()=>[e.title?(p(),S("p",w,x(e.title),1)):v("",!0),I(e.$slots,"default")]),_:3},8,["class","gap"]))}});m.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const s=z({__name:"UiCheckGroupItem",props:{size:{},label:{},modelValue:{}},setup(c){const{size:l,modelValue:i}=q("ui-check-group",{size:"md",modelValue:A([])}),{value:u}=D(),o=()=>{i.value.includes(String(u))?i.value=i.value.filter(n=>n!==u):i.value.push(String(u))};return(e,n)=>(p(),_($,{size:r(l),checked:r(i).includes(String(r(u))),label:e.label,onChange:o},null,8,["size","checked","label"]))}});s.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const F={title:"Inputs/Check Group",component:s,tags:["autodocs"]},a={render:c=>({components:{UiCheckGroupItem:s,UiCheckGroup:m},setup(){return{args:c}},template:`
         <ui-check-group title="Check group">
            <ui-check-group-item id="example-check-sizes-sm" label="Check 1"/>
            <ui-check-group-item id="example-check-sizes-md" label="Check 2"/>
            <ui-check-group-item id="example-check-sizes-lg" label="Check 3"/>
         </ui-check-group>
      `})},t={render:c=>({components:{UiCheckGroupItem:s,UiCheckGroup:m,UiSpacing:b},setup(){return{args:c}},template:`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      `})};var d,h,k;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCheckGroupItem,
      UiCheckGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-check-group title="Check group">
            <ui-check-group-item id="example-check-sizes-sm" label="Check 1"/>
            <ui-check-group-item id="example-check-sizes-md" label="Check 2"/>
            <ui-check-group-item id="example-check-sizes-lg" label="Check 3"/>
         </ui-check-group>
      \`
  })
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,C,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCheckGroupItem,
      UiCheckGroup,
      UiSpacing
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      \`
  })
}`,...(f=(C=t.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const M=["Default","Sizes"];export{a as Default,t as Sizes,M as __namedExportsOrder,F as default};
