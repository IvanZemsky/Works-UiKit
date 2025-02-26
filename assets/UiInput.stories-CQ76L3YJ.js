import{d as q,u as G,b as u,o as d,f as M,e as b,g as B,m as A,n as E,j as L,k as n}from"./vue.esm-bundler-BA3s6a-Z.js";import{c as P,S as o}from"./clsx-C0VLrnar.js";const j={key:0,class:"ui-input__icon-wrap"},D=["value"],t=q({__name:"UiInput",props:{variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"},modelValue:{}},setup(e){const V=e,{variant:O,size:U,color:_}=V,{class:C,style:$,...k}=G();return(a,p)=>(d(),u("div",{class:L(n(P)("ui-input",`variant-${n(O)}`,`size-${n(U)}`,`color-${n(_)}`,n(C))),style:E(n($))},[a.$slots.icon?(d(),u("div",j,[B(a.$slots,"icon")])):M("",!0),b("input",A(k,{type:"text",value:a.modelValue,onInput:p[0]||(p[0]=N=>a.$emit("update:modelValue",N.target.value))}),null,16,D)],6))}});t.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",description:"Vaiant of input",tags:{default:[{description:"'outlined'",title:"default"}],type:[{title:"type",description:`'outlined' | "ghost"`}]},required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",description:"Size of input",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",description:"Color of input",tags:{default:[{description:"'primary'",title:"default"}],type:[{title:"type",description:"'primary' | 'secondary'"}]},required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}},{name:"modelValue",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue"}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const H={title:"Text Input",component:t,tags:["autodocs"]},r={render:e=>({components:{UiInput:t},setup(){return{args:e}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},i={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input color="secondary" placeholder="Small"/>
            <ui-input color="secondary" placeholder="Medium"/>
         </div>
      `})},l={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},s={render:e=>({components:{UiInput:t,SearchOutlined:o},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})};var m,c,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,y,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            <ui-input color="secondary" placeholder="Small"/>
            <ui-input color="secondary" placeholder="Medium"/>
         </div>
      \`
  })
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,S,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var x,z,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const J=["Variant","Color","Icon","Size"];export{i as Color,l as Icon,s as Size,r as Variant,J as __namedExportsOrder,H as default};
