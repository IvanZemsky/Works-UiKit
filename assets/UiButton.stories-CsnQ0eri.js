import{_ as n}from"./UiButton-DxcEY9_T.js";import{S as x}from"./SearchOutlined-CtsSTKLU.js";import"./vue.esm-bundler-DRdyH_Db.js";import"./vue-router-BbbCpkhz.js";const z={component:n,title:"Inputs/Button",tags:["autodocs"]},e={render:t=>({components:{UiButton:n},setup(){return{args:t}},template:`
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
         </div>`})},u={render:t=>({components:{UiButton:n,SearchOutlined:x},setup(){return{args:t}},template:`
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,c,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,m,g;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(m=u.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,S,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const _=["Variant","Sizes","Icons","As","Colors"];export{i as As,a as Colors,u as Icons,o as Sizes,e as Variant,_ as __namedExportsOrder,z as default};
