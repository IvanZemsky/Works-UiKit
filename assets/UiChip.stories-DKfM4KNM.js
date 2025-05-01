import{d as $,c as q,k as c,u as n,q as B,o as E}from"./vue.esm-bundler-2rTkCq1z.js";import{c as I}from"./clsx-B-dksMZM.js";import{u as N}from"./useWaveEffect-C87qeCCn.js";import{S as W}from"./SearchOutlined-DtLU7eq6.js";const a=$({__name:"UiChip",props:{variant:{default:"filled"},size:{default:"md"},color:{default:"neutral"},clickable:{type:Boolean,default:!1}},setup(e){const{isWaveActive:z,handleClick:o}=N(300);return(i,u)=>(E(),q("div",{class:B(n(I)("ui-chip",`variant-${i.variant}`,`color-${i.color}`,`size-${i.size}`,{clickable:i.clickable,wave:n(z)&&i.clickable})),onClick:u[0]||(u[0]=(...V)=>n(o)&&n(o)(...V))},[c(i.$slots,"start-icon"),c(i.$slots,"default"),c(i.$slots,"end-icon")],2))}});a.__docgenInfo={exportName:"default",displayName:"UiChip",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outlined"'}]},defaultValue:{func:!1,value:'"filled"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:'"neutral"'}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiChip/UiChip.vue"]};const P={component:a,title:"Inputs/Chip",tags:["autodocs"]},t={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>`})},r={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip size="sm">Chip</ui-chip>
            <ui-chip size="md">Chip</ui-chip>
            <ui-chip size="lg">Chip</ui-chip>
         </div>`})},p={render:e=>({components:{UiChip:a,SearchOutlined:W},setup(){return{args:e}},template:`
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
         </div>`})},l={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
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
      `})},s={render:e=>({components:{UiChip:a},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip clickable>Click on me</ui-chip>
         </div>`})};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var C,y,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,S,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var b,O,U;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(O=s.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const j=["Variant","Sizes","Icons","Colors","Clickable"];export{s as Clickable,l as Colors,p as Icons,r as Sizes,t as Variant,j as __namedExportsOrder,P as default};
