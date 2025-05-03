import{d as $,k,c as u,l as C,a as N,q,m as G,n as P,u as l,p as A,o as m}from"./vue.esm-bundler-DaCFxRb6.js";import{c as B}from"./clsx-B-dksMZM.js";import{S as o}from"./SearchOutlined-DH84yTP4.js";const b={key:0,class:"ui-input__icon-wrap"},t=$({inheritAttrs:!1,__name:"UiInput",props:{variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},setup(e){const{class:O,style:U,...V}=k();return(n,p)=>(m(),u("div",{class:A(l(B)("ui-input",`variant-${n.variant}`,`size-${n.size}`,`color-${n.color}`,l(O))),style:P(l(U))},[n.$slots.icon?(m(),u("div",b,[q(n.$slots,"icon")])):C("",!0),N("input",G(V,{type:"text",onInput:p[0]||(p[0]=_=>n.$emit("update:modelValue",_.target.value))}),null,16)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],events:[{name:"update:modelValue"}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const D={title:"Inputs/Text Input",component:t,tags:["autodocs"]},a={render:e=>({components:{UiInput:t},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},r={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},s={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},i={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})};var d,c,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,S,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,w,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const F=["Variant","Color","Icon","Size"];export{r as Color,s as Icon,i as Size,a as Variant,F as __namedExportsOrder,D as default};
