import{d as $,j as k,c as p,k as C,a as N,p as G,m as P,n as q,u,l as A,o as m}from"./vue.esm-bundler-BOGk32Bt.js";import{S as l}from"./SearchOutlined-YWi81I5t.js";const B={key:0,class:"ui-input__icon-wrap"},t=$({inheritAttrs:!1,__name:"UiInput",props:{variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},setup(e){const{class:O,style:U,...V}=k();return(n,o)=>(m(),p("div",{class:A(["ui-input",`variant-${n.variant}`,`size-${n.size}`,`color-${n.color}`,u(O)]),style:q(u(U))},[n.$slots.icon?(m(),p("div",B,[G(n.$slots,"icon")])):C("",!0),N("input",P(V,{type:"text",onInput:o[0]||(o[0]=_=>n.$emit("update:modelValue",_.target.value))}),null,16)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],events:[{name:"update:modelValue"}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const L={title:"Inputs/Text Input",component:t,tags:["autodocs"]},a={render:e=>({components:{UiInput:t},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},r={render:e=>({components:{UiInput:t,SearchOutlined:l},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},s={render:e=>({components:{UiInput:t,SearchOutlined:l},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},i={render:e=>({components:{UiInput:t,SearchOutlined:l},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})};var d,c,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,h,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const M=["Variant","Color","Icon","Size"];export{r as Color,s as Icon,i as Size,a as Variant,M as __namedExportsOrder,L as default};
