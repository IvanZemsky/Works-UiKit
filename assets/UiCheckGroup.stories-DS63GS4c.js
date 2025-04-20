import{_ as z}from"./UiSpacing-SAVbUipj.js";import{d as _,x as S,y as x,u as U,z as V,s as G,v as $,k as q,j as u,o as l,c as D,g as M,f as N,t as A,p as w,l as B}from"./vue.esm-bundler-CQL4Gtwv.js";import{c as j}from"./clsx-B-dksMZM.js";import{_ as E}from"./UiCheck-XAYrdHPd.js";const F={key:0,class:"ui-check-group__title"},n=_({__name:"UiCheckGroup",props:S({size:{default:"md"},title:{default:""}},{modelValue:{required:!0,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const o=c,i=x(c,"modelValue"),{name:a}=U();return V("ui-check-group",{size:o.size,name:a,model:i}),(e,p)=>(l(),G(z,{class:q(u(j)("ui-check-group",`size-${e.size}`)),gap:e.size,vertical:""},{default:$(()=>[e.title?(l(),D("p",F,A(e.title),1)):M("",!0),N(e.$slots,"default")]),_:3},8,["class","gap"]))}});n.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const t=_({__name:"UiCheckGroupItem",props:{size:{},label:{}},setup(c){const{size:o,model:i,name:a}=w("ui-check-group",{size:"md",name:"",model:B([])}),{value:e,id:p}=U(),I=p||y(),v=()=>{i.value.includes(e)?i.value=i.value.filter(h=>h!==e):i.value.push(e)};function y(){return`${a}-${e}`}return(m,h)=>(l(),G(E,{size:u(o),checked:u(i).includes(u(e)),label:m.label,id:u(I),name:u(a),onChange:v},null,8,["size","checked","label","id","name"]))}});t.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const H={title:"Inputs/Check Group",component:t,tags:["autodocs"]},r={render:c=>({components:{UiCheckGroupItem:t,UiCheckGroup:n},setup(){return{args:c}},template:`
         <ui-check-group title="Check group">
            <ui-check-group-item id="example-check-sizes-sm" label="Check 1"/>
            <ui-check-group-item id="example-check-sizes-md" label="Check 2"/>
            <ui-check-group-item id="example-check-sizes-lg" label="Check 3"/>
         </ui-check-group>
      `})},s={render:c=>({components:{UiCheckGroupItem:t,UiCheckGroup:n,UiSpacing:z},setup(){return{args:c}},template:`
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
      `})};var k,d,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,f,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const J=["Default","Sizes"];export{r as Default,s as Sizes,J as __namedExportsOrder,H as default};
