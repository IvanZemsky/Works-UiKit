import{d as k,c as z,s as c,a as V,l as B,o as _}from"./vue.esm-bundler-Bfxd_V-S.js";import{S as $}from"./SearchOutlined-B0h1d5Ck.js";const i=k({__name:"UiChip",props:{variant:{default:"filled"},size:{default:"md"},color:{default:"neutral"},clickable:{type:Boolean,default:!1},weight:{default:"400"},rounded:{type:Boolean,default:!1}},setup(e){const a=e,U=["ui-chip",`variant-${a.variant}`,`color-${a.color}`,`size-${a.size}`,`ui-s-weight-${a.weight}`,{clickable:a.clickable,rounded:a.rounded}];return(s,q)=>(_(),z("div",{class:B(U)},[c(s.$slots,"start-icon"),V("span",null,[c(s.$slots,"default")]),c(s.$slots,"end-icon")]))}});i.__docgenInfo={exportName:"default",displayName:"UiChip",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outlined"'}]},defaultValue:{func:!1,value:'"filled"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:'"neutral"'}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"weight",required:!1,type:{name:"union",elements:[{name:'"400"'},{name:'"500"'},{name:'"600"'}]},defaultValue:{func:!1,value:'"400"'}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiChip/UiChip.vue"]};const I={component:i,title:"Data display/Chip",tags:["autodocs"]},n={render:e=>({components:{UiChip:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>`})},t={render:e=>({components:{UiChip:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip size="sm">Chip</ui-chip>
            <ui-chip size="md">Chip</ui-chip>
            <ui-chip size="lg">Chip</ui-chip>
         </div>`})},r={render:e=>({components:{UiChip:i,SearchOutlined:$},setup(){return{args:e}},template:`
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
         </div>`})},p={render:e=>({components:{UiChip:i},setup(){return{args:e}},template:`
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
      `})},l={render:e=>({components:{UiChip:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip clickable>Click on me</ui-chip>
         </div>`})};var o,u,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,h,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,x,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(x=p.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,b,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(b=l.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const D=["Variant","Sizes","Icons","Colors","Clickable"];export{l as Clickable,p as Colors,r as Icons,t as Sizes,n as Variant,D as __namedExportsOrder,I as default};
