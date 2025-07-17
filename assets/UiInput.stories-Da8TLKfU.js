import{d as q,m as G,j as P,k as A,c as d,n as B,b as E,z as L,p as T,q as j,u as c,s as D,o as g}from"./vue.esm-bundler-BYAC-X9_.js";import{h as F,a as H}from"./inputs-Di8psrkE.js";import{S as o}from"./SearchOutlined-CjzsJKaA.js";const J={key:0,class:"ui-input__icon-wrap"},K=["value"],t=q({inheritAttrs:!1,__name:"UiInput",props:G({variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const u=P(e,"modelValue"),{class:N,style:k,...m}=A(),C=["text","password","email"];function $(n){const a=n.target;a.type==="number"&&F(a,m,u),C.includes(a.type)&&H(a,m,u)}return(n,a)=>(g(),d("div",{class:D(["ui-input",`variant-${n.variant}`,`size-${n.size}`,`color-${n.color}`,c(N)]),style:j(c(k))},[n.$slots.icon?(g(),d("div",J,[L(n.$slots,"icon")])):B("",!0),E("input",T(m,{onInput:$,value:u.value}),null,16,K)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const X={title:"Inputs/Text Input",component:t,tags:["autodocs"]},r={render:e=>({components:{UiInput:t},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},s={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},i={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},l={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})},p={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input type="number" size="md" min="1" max="100" placeholder="Number"/>
            <ui-input type="text" size="md" minlength="0" maxlength="15" placeholder="Max: 15"/>
         </div>
      `})};var f,h,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      \`
  })
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,v,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      \`
  })
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,w,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      \`
  })
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var O,U,M;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      \`
  })
}`,...(M=(U=l.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var V,_,b;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input type="number" size="md" min="1" max="100" placeholder="Number"/>
            <ui-input type="text" size="md" minlength="0" maxlength="15" placeholder="Max: 15"/>
         </div>
      \`
  })
}`,...(b=(_=p.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const Y=["Variant","Color","Icon","Size","MinMax"];export{s as Color,i as Icon,p as MinMax,l as Size,r as Variant,Y as __namedExportsOrder,X as default};
