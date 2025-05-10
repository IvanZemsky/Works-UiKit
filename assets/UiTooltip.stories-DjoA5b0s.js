import{d as x,F as g,c as v,p as b,A as T,s as h,T as z,l as y,o as _,C as w,a as U,t as S,E as B}from"./vue.esm-bundler-DRdyH_Db.js";import{_ as d}from"./UiButton-pWLYmXjy.js";import"./vue-router-BbbCpkhz.js";const n=x({__name:"UiTooltip",props:{text:{},position:{default:"bottom"},size:{default:"md"}},setup(t){const a=g(!1),c=()=>{a.value=!0},f=()=>{a.value=!1};return(e,D)=>(_(),v("div",{class:y(["ui-tooltip",`size-${e.size}`,`position-${e.position}`]),onMouseenter:c,onMouseleave:f},[b(e.$slots,"default"),T(z,{name:"ui-tooltip-fade"},{default:h(()=>[w(U("span",{class:"ui-tooltip__text"},S(e.text),513),[[B,a.value]])]),_:1})],34))}});n.__docgenInfo={exportName:"default",displayName:"UiTooltip",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"top"'},{name:'"right"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"bottom"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiTooltip/UiTooltip.vue"]};const E={component:n,title:"Data Display/Tooltip",tags:["autodocs"]},o={render:t=>({components:{UiTooltip:n,UiButton:d},setup(){return{args:t}},template:`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
      </div>
      `})},i={render:t=>({components:{UiTooltip:n,UiButton:d},setup(){return{args:t}},template:`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Small</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="md">
            <ui-button>Medium</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="lg">
            <ui-button>Large</ui-button>
         </ui-tooltip>
      </div>
      `})};var s,l,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTooltip,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
      </div>
      \`
  })
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,r,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTooltip,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Small</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="md">
            <ui-button>Medium</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="lg">
            <ui-button>Large</ui-button>
         </ui-tooltip>
      </div>
      \`
  })
}`,...(m=(r=i.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const N=["Default","Sizes"];export{o as Default,i as Sizes,N as __namedExportsOrder,E as default};
