import{_ as n}from"./UiButton-B1j0Zml3.js";import{S as k}from"./SearchOutlined-BVCgPBQ0.js";import"./vue.esm-bundler-DXOuKJDY.js";import"./vue-router-_3Pxos1u.js";const j={component:n,title:"Inputs/Button",tags:["autodocs"]},e={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
            <ui-button variant="light">Button</ui-button>
         </div>`})},o={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-button size="sm">Button</ui-button>
            <ui-button size="md">Button</ui-button>
            <ui-button size="lg">Button</ui-button>
         </div>`})},u={render:t=>({components:{UiButton:n,SearchOutlined:k},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-button>
            <ui-button variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-button>
            <ui-button>
               <SearchOutlined />
            </ui-button>
            <ui-button variant="outlined">
               <SearchOutlined />
            </ui-button>
            <ui-button variant="ghost">
               <SearchOutlined />
            </ui-button>
            <ui-button variant="light">
               <SearchOutlined />
            </ui-button>
         </div>`})},i={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
         <ui-button v-bind="args" as="a" href="https://storybook.js.org/" target="_blank">
            Link to the official Storybook web site
         </ui-button>`})},a={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
            <ui-button variant="light">Button</ui-button>
         </div>
          <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button color="secondary">Button</ui-button>
            <ui-button color="secondary" variant="outlined">Button</ui-button>
            <ui-button color="secondary" variant="ghost">Button</ui-button>
            <ui-button variant="light" color="secondary">Button</ui-button>
         </div>
      `})},r={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button weight="400">Regular</ui-button>
            <ui-button weight="500">Medium</ui-button>
            <ui-button weight="600">Semibold</ui-button>
         </div>
      `})};var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
            <ui-button variant="light">Button</ui-button>
         </div>\`
  })
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,b,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-button size="sm">Button</ui-button>
            <ui-button size="md">Button</ui-button>
            <ui-button size="lg">Button</ui-button>
         </div>\`
  })
}`,...(d=(b=o.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var c,g,v;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-button>
            <ui-button variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-button>
            <ui-button>
               <SearchOutlined />
            </ui-button>
            <ui-button variant="outlined">
               <SearchOutlined />
            </ui-button>
            <ui-button variant="ghost">
               <SearchOutlined />
            </ui-button>
            <ui-button variant="light">
               <SearchOutlined />
            </ui-button>
         </div>\`
  })
}`,...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,B,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-button v-bind="args" as="a" href="https://storybook.js.org/" target="_blank">
            Link to the official Storybook web site
         </ui-button>\`
  })
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var S,y,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
            <ui-button variant="light">Button</ui-button>
         </div>
          <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button color="secondary">Button</ui-button>
            <ui-button color="secondary" variant="outlined">Button</ui-button>
            <ui-button color="secondary" variant="ghost">Button</ui-button>
            <ui-button variant="light" color="secondary">Button</ui-button>
         </div>
      \`
  })
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,O,U;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button weight="400">Regular</ui-button>
            <ui-button weight="500">Medium</ui-button>
            <ui-button weight="600">Semibold</ui-button>
         </div>
      \`
  })
}`,...(U=(O=r.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const A=["Variant","Sizes","Icons","As","Colors","Weight"];export{i as As,a as Colors,u as Icons,o as Sizes,e as Variant,r as Weight,A as __namedExportsOrder,j as default};
