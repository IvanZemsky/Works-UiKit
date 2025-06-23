import{d as M,x as N,y as $,j as G,c,k as L,a as P,s as q,m as A,n as B,u as x,l as F,o as g}from"./vue.esm-bundler-Bfxd_V-S.js";import{S as u}from"./SearchOutlined-B0h1d5Ck.js";const b={key:0,class:"ui-textarea__icon-wrap"},E=["value"],r=M({inheritAttrs:!1,__name:"UiTextarea",props:N({variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=$(e,"modelValue"),{class:I,style:k,...n}=G();function C(a){const t=a.target,p=n.minlength!==void 0?parseFloat(String(n.min)):void 0,d=n.maxlength!==void 0?parseFloat(String(n.max)):void 0;if(d!==void 0&&t.value.length>d){t.value=String(l.value);return}else if(p!==void 0&&t.value.length<p){t.value=String(l.value);return}l.value=t.value}return(a,t)=>(g(),c("div",{class:F(["ui-textarea",`variant-${a.variant}`,`size-${a.size}`,`color-${a.color}`,x(I)]),style:B(x(k))},[a.$slots.icon?(g(),c("div",b,[q(a.$slots,"icon")])):L("",!0),P("textarea",A(n,{type:"text",onInput:C,value:l.value}),null,16,E)],6))}});r.__docgenInfo={exportName:"default",displayName:"UiTextarea",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiTextarea/UiTextarea.vue"]};const H={title:"Inputs/Textarea",component:r,tags:["autodocs"]},s={render:e=>({components:{UiTextarea:r},setup(){return{args:e}},template:`
         <ui-textarea placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-textarea placeholder="Ghost" variant="ghost"/>
      `})},o={render:e=>({components:{UiTextarea:r,SearchOutlined:u},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea color="primary" placeholder="Primary"/>
            <ui-textarea color="secondary" placeholder="Secondary"/>
         </div>
      `})},i={render:e=>({components:{UiTextarea:r,SearchOutlined:u},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
            <ui-textarea variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
         </div>
      `})},m={render:e=>({components:{UiTextarea:r,SearchOutlined:u},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea size="sm" placeholder="Small"/>
            <ui-textarea size="md" placeholder="Medium"/>
            <ui-textarea size="lg" placeholder="Large"/>
         </div>
      `})};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-textarea placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-textarea placeholder="Ghost" variant="ghost"/>
      \`
  })
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,S,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea color="primary" placeholder="Primary"/>
            <ui-textarea color="secondary" placeholder="Secondary"/>
         </div>
      \`
  })
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,O,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
            <ui-textarea variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
         </div>
      \`
  })
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,V,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTextarea,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea size="sm" placeholder="Small"/>
            <ui-textarea size="md" placeholder="Medium"/>
            <ui-textarea size="lg" placeholder="Large"/>
         </div>
      \`
  })
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const J=["Variant","Color","Icon","Size"];export{o as Color,i as Icon,m as Size,s as Variant,J as __namedExportsOrder,H as default};
