import{d as S,l as V,p as U,q as r,o as c,s as t,v as u,x as h,t as k,T as y,g as x,f as N,y as C}from"./vue.esm-bundler-CeuXVXgz.js";import{_ as D}from"./UiButton-BJ33TdDz.js";import{_ as i}from"./UiSpacing-CztT0h5W.js";import"./clsx-B-dksMZM.js";const o=S({__name:"UiSelect",props:{placeholder:{},modelValue:{default:""}},emits:["update:modelValue"],setup(s,{emit:f}){const _=s,l=V(!1),g=()=>{l.value=!l.value},v=f,n=U({get:()=>_.modelValue,set:e=>{v("update:modelValue",e)}});return C("ui-select",{modelValue:n}),(e,q)=>(c(),r(i,{class:"ui-select",vertical:"",gap:"sm"},{default:t(()=>[u(D,{class:"ui-select-button",variant:"ghost",onclick:g},{default:t(()=>[h(k(n.value||e.placeholder),1)]),_:1}),u(y,{name:"ui-select-fade"},{default:t(()=>[l.value?(c(),r(i,{key:0,class:"ui-select-options",vertical:"",gap:"sm"},{default:t(()=>[N(e.$slots,"default")]),_:3})):x("",!0)]),_:3})]),_:3}))}});o.__docgenInfo={exportName:"default",displayName:"UiSelect",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSelect/UiSelect.vue"]};const B={title:"Inputs/Select",component:o,tags:["autodocs"]},a={render:s=>({components:{UiSelect:o},setup(){return{args:s}},template:"<UiSelect />"})};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,B as default};
