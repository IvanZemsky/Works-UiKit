import{d as f,p as _,c as g,q as S,s as V,j as v,v as n,o as r,x as h,t as k,k as U,g as y,y as x}from"./vue.esm-bundler-DxjQ3HK0.js";import{_ as N}from"./UiButton-BRic7zc7.js";import{_ as C}from"./UiSpacing-CGHnKaTZ.js";import{u as D}from"./useModelValue-hrB-ORaP.js";import"./clsx-B-dksMZM.js";const q={class:"ui-select"},s=f({__name:"UiSelect",props:{placeholder:{},modelValue:{default:""}},emits:["update:modelValue"],setup(t,{emit:m}){const p=t,a=_(!1),d=()=>{a.value=!a.value},o=D(m,p.modelValue);return x("ui-select",{modelValue:o}),(l,O)=>(r(),g("div",q,[S(N,{class:"ui-select-button",variant:"ghost",onclick:d},{default:n(()=>[h(k(U(o)||l.placeholder),1)]),_:1}),a.value?(r(),V(C,{key:0,class:"ui-select-options",vertical:"",gap:"sm"},{default:n(()=>[y(l.$slots,"default")]),_:3})):v("",!0)]))}});s.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelect.vue"]};const j={title:"Inputs/Select",component:s,tags:["autodocs"]},e={render:t=>({components:{UiSelect:s},setup(){return{args:t}},template:"<UiSelect />"})};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UiSelect />\`
  })
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,j as default};
