import{d as k,x as C,y as M,j as N,c as d,k as $,a as G,s as P,m as q,n as A,u,l as B,o as c}from"./vue.esm-bundler-Bfxd_V-S.js";import{a as b}from"./inputs-Di8psrkE.js";import{S as o}from"./SearchOutlined-B0h1d5Ck.js";const E={key:0,class:"ui-textarea__icon-wrap"},L=["value"],t=k({inheritAttrs:!1,__name:"UiTextarea",props:C({variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const i=M(e,"modelValue"),{class:V,style:_,...m}=N();function I(a){const p=a.target;b(p,m,i)}return(a,p)=>(c(),d("div",{class:B(["ui-textarea",`variant-${a.variant}`,`size-${a.size}`,`color-${a.color}`,u(V)]),style:A(u(_))},[a.$slots.icon?(c(),d("div",E,[P(a.$slots,"icon")])):$("",!0),G("textarea",q(m,{type:"text",onInput:I,value:i.value}),null,16,L)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiTextarea",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiTextarea/UiTextarea.vue"]};const H={title:"Inputs/Textarea",component:t,tags:["autodocs"]},r={render:e=>({components:{UiTextarea:t},setup(){return{args:e}},template:`
         <ui-textarea placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-textarea placeholder="Ghost" variant="ghost"/>
      `})},n={render:e=>({components:{UiTextarea:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea color="primary" placeholder="Primary"/>
            <ui-textarea color="secondary" placeholder="Secondary"/>
         </div>
      `})},s={render:e=>({components:{UiTextarea:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
            <ui-textarea variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
         </div>
      `})},l={render:e=>({components:{UiTextarea:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea size="sm" placeholder="Small"/>
            <ui-textarea size="md" placeholder="Medium"/>
            <ui-textarea size="lg" placeholder="Large"/>
         </div>
      `})};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-textarea placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-textarea placeholder="Ghost" variant="ghost"/>
      \`
  })
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea color="primary" placeholder="Primary"/>
            <ui-textarea color="secondary" placeholder="Secondary"/>
         </div>
      \`
  })
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,w,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
            <ui-textarea variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
         </div>
      \`
  })
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var T,O,U;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea size="sm" placeholder="Small"/>
            <ui-textarea size="md" placeholder="Medium"/>
            <ui-textarea size="lg" placeholder="Large"/>
         </div>
      \`
  })
}`,...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const J=["Variant","Color","Icon","Size"];export{n as Color,s as Icon,l as Size,r as Variant,J as __namedExportsOrder,H as default};
