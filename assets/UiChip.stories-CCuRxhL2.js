import{d as O,c as U,p as s,l as k,o as z}from"./vue.esm-bundler-BOGk32Bt.js";import{S as V}from"./SearchOutlined-YWi81I5t.js";const a=O({__name:"UiChip",props:{variant:{default:"filled"},size:{default:"md"},color:{default:"neutral"},clickable:{type:Boolean,default:!1}},setup(e){return(i,$)=>(z(),U("div",{class:k(["ui-chip",`variant-${i.variant}`,`color-${i.color}`,`size-${i.size}`,{clickable:i.clickable}])},[s(i.$slots,"start-icon"),s(i.$slots,"default"),s(i.$slots,"end-icon")],2))}});a.__docgenInfo={exportName:"default",displayName:"UiChip",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outlined"'}]},defaultValue:{func:!1,value:'"filled"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:'"neutral"'}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiChip/UiChip.vue"]};const q={component:a,title:"Data display/Chip",tags:["autodocs"]},n={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>`})},t={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip size="sm">Chip</ui-chip>
            <ui-chip size="md">Chip</ui-chip>
            <ui-chip size="lg">Chip</ui-chip>
         </div>`})},r={render:e=>({components:{UiChip:a,SearchOutlined:V},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-chip>
            <ui-chip variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-chip>
            <ui-chip>
               <SearchOutlined />
            </ui-chip>
         </div>`})},p={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="primary">Chip</ui-chip>
            <ui-chip color="primary" variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="secondary">Chip</ui-chip>
            <ui-chip color="secondary" variant="outlined">Chip</ui-chip>
         </div>
      `})},l={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip clickable>Click on me</ui-chip>
         </div>`})};var c,o,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>\`
  })
}`,...(u=(o=n.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip size="sm">Chip</ui-chip>
            <ui-chip size="md">Chip</ui-chip>
            <ui-chip size="lg">Chip</ui-chip>
         </div>\`
  })
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-chip>
            <ui-chip variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-chip>
            <ui-chip>
               <SearchOutlined />
            </ui-chip>
         </div>\`
  })
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,C,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="primary">Chip</ui-chip>
            <ui-chip color="primary" variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="secondary">Chip</ui-chip>
            <ui-chip color="secondary" variant="outlined">Chip</ui-chip>
         </div>
      \`
  })
}`,...(x=(C=p.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,S,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiChip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip clickable>Click on me</ui-chip>
         </div>\`
  })
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const E=["Variant","Sizes","Icons","Colors","Clickable"];export{l as Clickable,p as Colors,r as Icons,t as Sizes,n as Variant,E as __namedExportsOrder,q as default};
