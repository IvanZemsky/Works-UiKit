import{d as L,x as P,y as q,j as A,c as v,k as B,a as E,s as j,m as D,n as T,u as f,l as H,o as h}from"./vue.esm-bundler-Bfxd_V-S.js";import{S as c}from"./SearchOutlined-B0h1d5Ck.js";const J={key:0,class:"ui-input__icon-wrap"},K=["value"],r=L({inheritAttrs:!1,__name:"UiInput",props:P({variant:{default:"outlined"},size:{default:"md"},color:{default:"primary"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const i=q(n,"modelValue"),{class:C,style:$,...t}=A();function G(a){const e=a.target;if(e.type==="number"){const l=parseFloat(e.value),s=t.min!==void 0?parseFloat(String(t.min)):void 0,g=t.max!==void 0?parseFloat(String(t.max)):void 0;e.value===""||!isNaN(l)&&(s===void 0||l>=s)&&(g===void 0||l<=g)?i.value=e.value:e.value=String(i.value);return}if(e.type==="text"||e.type==="password"||e.type==="email"){const l=t.minlength!==void 0?parseFloat(String(t.min)):void 0,s=t.maxlength!==void 0?parseFloat(String(t.max)):void 0;if(s!==void 0&&e.value.length>s){e.value=String(i.value);return}else if(l!==void 0&&e.value.length<l){e.value=String(i.value);return}}i.value=e.value}return(a,e)=>(h(),v("div",{class:H(["ui-input",`variant-${a.variant}`,`size-${a.size}`,`color-${a.color}`,f(C)]),style:T(f($))},[a.$slots.icon?(h(),v("div",J,[j(a.$slots,"icon")])):B("",!0),E("input",D(t,{onInput:G,value:i.value}),null,16,K)],6))}});r.__docgenInfo={exportName:"default",displayName:"UiInput",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"outlined"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiInput/UiInput.vue"]};const W={title:"Inputs/Text Input",component:r,tags:["autodocs"]},o={render:n=>({components:{UiInput:r},setup(){return{args:n}},template:`
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `})},p={render:n=>({components:{UiInput:r,SearchOutlined:c},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `})},u={render:n=>({components:{UiInput:r,SearchOutlined:c},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `})},m={render:n=>({components:{UiInput:r,SearchOutlined:c},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `})},d={render:n=>({components:{UiInput:r,SearchOutlined:c},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input type="number" size="md" min="1" max="100" placeholder="Number"/>
            <ui-input type="text" size="md" minlength="0" maxlength="15" placeholder="Max: 15"/>
         </div>
      `})};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,w,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var O,U,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(U=u.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var V,_,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var b,F,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
            <ui-input type="number" size="md" min="1" max="100" placeholder="Number"/>
            <ui-input type="text" size="md" minlength="0" maxlength="15" placeholder="Max: 15"/>
         </div>
      \`
  })
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const X=["Variant","Color","Icon","Size","MinMax"];export{p as Color,u as Icon,d as MinMax,m as Size,o as Variant,X as __namedExportsOrder,W as default};
