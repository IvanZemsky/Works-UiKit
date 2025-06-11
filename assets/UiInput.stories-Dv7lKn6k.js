import{d as k,x as C,y as N,j as $,c as u,k as A,z as G,s as P,A as q,a as B,m as b,n as D,u as m,l as E,o as d}from"./vue.esm-bundler-DXOuKJDY.js";import{S as i}from"./SearchOutlined-BVCgPBQ0.js";const L={key:0,class:"ui-input__icon-wrap"},n=k({inheritAttrs:!1,__name:"UiInput",props:C({variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=N(e,"modelValue"),{class:U,style:V,..._}=$();return(t,p)=>(d(),u("div",{class:E(["ui-input",`variant-${t.variant}`,`size-${t.size}`,`color-${t.color}`,m(U)]),style:D(m(V))},[t.$slots.icon?(d(),u("div",L,[P(t.$slots,"icon")])):A("",!0),G(B("input",b(_,{type:"text","onUpdate:modelValue":p[0]||(p[0]=M=>o.value=M)}),null,16),[[q,o.value]])],6))}});n.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const F={title:"Inputs/Text Input",component:n,tags:["autodocs"]},a={render:e=>({components:{UiInput:n},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},r={render:e=>({components:{UiInput:n,SearchOutlined:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},s={render:e=>({components:{UiInput:n,SearchOutlined:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},l={render:e=>({components:{UiInput:n,SearchOutlined:i},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})};var c,f,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      \`
  })
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      \`
  })
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,S,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      \`
  })
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var w,z,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      \`
  })
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const H=["Variant","Color","Icon","Size"];export{r as Color,s as Icon,l as Size,a as Variant,H as __namedExportsOrder,F as default};
