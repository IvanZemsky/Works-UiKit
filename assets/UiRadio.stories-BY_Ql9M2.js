import{_ as f}from"./UiSpacing-Bn_Dq7aD.js";import{d as z,j as R,c as l,a as b,k as y,m as _,t as x,n as V,u as r,g as v,o as t}from"./vue.esm-bundler-CxvyApLV.js";const S=["id","name","value"],U=["for"],s=z({inheritAttrs:!1,__name:"UiRadio",props:{size:{default:"md"},label:{},modelValue:{}},setup(n){const{class:u,style:c,...a}=R();return(e,o)=>(t(),l("div",{class:v(`ui-radio size-${e.size} ${r(u)}`),style:V(r(c))},[b("input",_(a,{type:"radio",id:a.id,name:a.name,value:e.modelValue,onInput:o[0]||(o[0]=g=>e.$emit("update:modelValue",g.target.value))}),null,16,S),e.label?(t(),l("label",{key:0,for:a.id},x(e.label),9,U)):y("",!0)],6))}});s.__docgenInfo={exportName:"default",displayName:"UiRadio",description:"",tags:{},props:[{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"label",description:"Label for input",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"variant",defaultValue:{func:!1,value:'"outlined"'}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiRadio/UiRadio.vue"]};const $={title:"Radio",component:s,tags:["autodocs"]},i={render:n=>({components:{UiRadio:s,UiSpacing:f},setup(){return{args:n}},template:`
         <ui-spacing align="center">
            <ui-radio id="example-radio-sizes-sm" name="example-radio-sizes" size="sm" label="Radio 1"/>
            <ui-radio id="example-radio-sizes-md" name="example-radio-sizes" label="Radio 2"/>
            <ui-radio id="example-radio-sizes-lg" name="example-radio-sizes" size="lg" label="Radio 3"/>
         </ui-spacing>
      `})};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiRadio,
      UiSpacing
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing align="center">
            <ui-radio id="example-radio-sizes-sm" name="example-radio-sizes" size="sm" label="Radio 1"/>
            <ui-radio id="example-radio-sizes-md" name="example-radio-sizes" label="Radio 2"/>
            <ui-radio id="example-radio-sizes-lg" name="example-radio-sizes" size="lg" label="Radio 3"/>
         </ui-spacing>
      \`
  })
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["Sizes"];export{i as Sizes,q as __namedExportsOrder,$ as default};
