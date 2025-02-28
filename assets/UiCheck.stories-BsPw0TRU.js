import{_ as h}from"./UiSpacing-D-WYPKfY.js";import{d as g,u as z,c as l,a as f,g as C,m as x,t as b,n as _,j as n,k as y,o as m}from"./vue.esm-bundler-CviTMTQO.js";import{c as S}from"./clsx-B-dksMZM.js";const U=["id","name"],V=["for"],i=g({inheritAttrs:!1,__name:"UiCheck",props:{size:{default:"md"},label:{},modelValue:{}},setup(c){const{class:u,style:d,...e}=z();return(s,t)=>(m(),l("div",{class:y(n(S)("ui-check",`size-${s.size}`,{className:n(u)})),style:_(n(d))},[f("input",x(e,{type:"checkbox",id:e.id,name:e.name,onInput:t[0]||(t[0]=k=>s.$emit("update:modelValue",k.target.value))}),null,16,U),s.label?(m(),l("label",{key:0,for:e.id},b(s.label),9,V)):C("",!0)],6))}});i.__docgenInfo={exportName:"default",displayName:"UiCheck",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheck/UiCheck.vue"]};const A={title:"Check",component:i,tags:["autodocs"]},a={render:c=>({components:{UiCheck:i,UiSpacing:h},setup(){return{args:c}},template:`
         <ui-spacing align="center">
            <ui-check id="example-check-sizes-sm" name="example-check-sizes" size="sm" label="Check 1"/>
            <ui-check id="example-check-sizes-md" name="example-check-sizes" label="Check 2"/>
            <ui-check id="example-check-sizes-lg" name="example-check-sizes" size="lg" label="Check 3"/>
         </ui-spacing>
      `})};var r,o,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCheck,
      UiSpacing
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing align="center">
            <ui-check id="example-check-sizes-sm" name="example-check-sizes" size="sm" label="Check 1"/>
            <ui-check id="example-check-sizes-md" name="example-check-sizes" label="Check 2"/>
            <ui-check id="example-check-sizes-lg" name="example-check-sizes" size="lg" label="Check 3"/>
         </ui-spacing>
      \`
  })
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const B=["Sizes"];export{a as Sizes,B as __namedExportsOrder,A as default};
