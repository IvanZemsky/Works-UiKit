import{_ as f}from"./UiSpacing-CGHnKaTZ.js";import{d as b,y as U,s as z,v as G,l as V,k as r,o as n,c as y,j as v,g as S,t as I,z as x,p as q,u as D}from"./vue.esm-bundler-DxjQ3HK0.js";import{c as N}from"./clsx-B-dksMZM.js";import{u as $}from"./useModelValue-hrB-ORaP.js";import{_ as w}from"./UiCheck-CXLCKaIo.js";const A={key:0,class:"ui-check-group__title"},p=b({__name:"UiCheckGroup",props:{size:{default:"md"},title:{default:""},modelValue:{}},emits:["update:modelValue"],setup(c,{emit:l}){const i=c,o=$(l,i.modelValue||[]);return U("ui-check-group",{size:i.size,modelValue:o}),(e,_)=>(n(),z(f,{class:V(r(N)("ui-check-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:G(()=>[e.title?(n(),y("p",A,I(e.title),1)):v("",!0),S(e.$slots,"default")]),_:3},8,["class","gap"]))}});p.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const s=b({__name:"UiCheckGroupItem",props:{size:{},label:{},modelValue:{}},setup(c){const{size:l,modelValue:i}=x("ui-check-group",{size:"md",modelValue:q([])}),{name:u}=D(),o=()=>{i.value.includes(u)?i.value=i.value.filter(e=>e!==u):i.value.push(u)};return(e,_)=>(n(),z(w,{size:r(l),checked:r(i).includes(r(u)),label:e.label,onChange:o},null,8,["size","checked","label"]))}});s.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const F={title:"Inputs/Check Group",component:s,tags:["autodocs"]},a={render:c=>({components:{UiCheckGroupItem:s,UiCheckGroup:p},setup(){return{args:c}},template:`
         <ui-check-group title="Check group">
            <ui-check-group-item id="example-check-sizes-sm" label="Check 1"/>
            <ui-check-group-item id="example-check-sizes-md" label="Check 2"/>
            <ui-check-group-item id="example-check-sizes-lg" label="Check 3"/>
         </ui-check-group>
      `})},t={render:c=>({components:{UiCheckGroupItem:s,UiCheckGroup:p,UiSpacing:f},setup(){return{args:c}},template:`
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
      `})};var m,d,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var k,g,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const P=["Default","Sizes"];export{a as Default,t as Sizes,P as __namedExportsOrder,F as default};
