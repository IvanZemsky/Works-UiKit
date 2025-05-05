import{_ as n}from"./UiButton-BI9-g166.js";import{S}from"./SearchOutlined-YWi81I5t.js";import"./vue.esm-bundler-BOGk32Bt.js";import"./vue-router-xJp9MKPe.js";const z={component:n,title:"Inputs/Button",tags:["autodocs"]},e={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
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
         </div>`})},u={render:t=>({components:{UiButton:n,SearchOutlined:S},setup(){return{args:t}},template:`
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
      `})};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,b,g;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
         </div>\`
  })
}`,...(g=(b=u.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,B,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var h,y,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const _=["Variant","Sizes","Icons","As","Colors"];export{i as As,a as Colors,u as Icons,o as Sizes,e as Variant,_ as __namedExportsOrder,z as default};
