import{d as f,v as g,c as v,p as T,x as b,s as z,T as _,l as h,o as y,y as w,a as U,t as S,z as B}from"./vue.esm-bundler-BOGk32Bt.js";import{_ as d}from"./UiButton-DSwb4RAA.js";import"./vue-router-xJp9MKPe.js";const i=f({__name:"UiTooltip",props:{text:{},size:{default:"md"}},setup(t){const n=g(!1),c=()=>{n.value=!0},x=()=>{n.value=!1};return(s,D)=>(y(),v("div",{class:h(["ui-tooltip",`size-${s.size}`]),onMouseenter:c,onMouseleave:x},[T(s.$slots,"default"),b(_,{name:"ui-tooltip-fade"},{default:z(()=>[w(U("span",{class:"ui-tooltip__text"},S(s.text),513),[[B,n.value]])]),_:1})],34))}});i.__docgenInfo={exportName:"default",displayName:"UiTooltip",description:"",tags:{},props:[{name:"text",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiTooltip/UiTooltip.vue"]};const k={component:i,title:"Data Display/Tooltip",tags:["autodocs"]},e={render:t=>({components:{UiTooltip:i,UiButton:d},setup(){return{args:t}},template:`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
      </div>
      `})},o={render:t=>({components:{UiTooltip:i,UiButton:d},setup(){return{args:t}},template:`
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
      `})};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const C=["Default","Sizes"];export{e as Default,o as Sizes,C as __namedExportsOrder,k as default};
