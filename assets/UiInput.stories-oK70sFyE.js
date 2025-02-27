import{d as C,j as $,c as u,k,a as N,f as q,m as G,n as P,u as s,g as A,o as d}from"./vue.esm-bundler-CxvyApLV.js";import{c as B}from"./clsx-B-dksMZM.js";import{S as o}from"./SearchOutlined-AjyBBaBX.js";const b={key:0,class:"ui-input__icon-wrap"},E=["value"],t=C({inheritAttrs:!1,__name:"UiInput",props:{variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"},modelValue:{}},setup(e){const{class:O,style:x,...U}=$();return(n,p)=>(d(),u("div",{class:A(s(B)("ui-input",`variant-${n.variant}`,`size-${n.size}`,`color-${n.color}`,s(O))),style:P(s(x))},[n.$slots.icon?(d(),u("div",b,[q(n.$slots,"icon")])):k("",!0),N("input",G(U,{type:"text",value:n.modelValue,onInput:p[0]||(p[0]=_=>n.$emit("update:modelValue",_.target.value))}),null,16,E)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",description:"Vaiant of input",tags:{default:[{description:"'outlined'",title:"default"}],type:[{title:"type",description:`'outlined' | "ghost"`}]},required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",description:"Color of input",tags:{default:[{description:"'primary'",title:"default"}],type:[{title:"type",description:"'primary' | 'secondary'"}]},required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}},{name:"modelValue",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue"}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const D={title:"Text Input",component:t,tags:["autodocs"]},a={render:e=>({components:{UiInput:t},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},r={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},i={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},l={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})};var m,c,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      \`
  })
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,S,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      \`
  })
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,w,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      \`
  })
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const F=["Variant","Color","Icon","Size"];export{r as Color,i as Icon,l as Size,a as Variant,F as __namedExportsOrder,D as default};
