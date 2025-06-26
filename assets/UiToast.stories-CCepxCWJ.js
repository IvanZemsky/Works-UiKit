import{d as f,x as v,y as p,z as g,w as T,A as _,v as h,q as O,T as k,o as i,c as y,k as U,m as b,B as M,s as V}from"./vue.esm-bundler-BRF8bUT-.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./UiButton-B8cKg0xa.js";import"./vue-router-CFPU2mzG.js";const m=f({inheritAttrs:!1,__name:"UiToast",props:v({timeout:{},positionX:{default:"right"},positionY:{default:"bottom"}},{modelValue:{default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=a,o=p(0),s=g(a,"modelValue"),c=e=>{e.stopPropagation()};return T(s,()=>{s.value&&t.timeout&&(o.value=setTimeout(()=>{s.value=!1},t.timeout))}),_(()=>{o.value&&(clearTimeout(o.value),o.value=null)}),(e,x)=>(i(),h(k,{name:"ui-fade-vertical"},{default:O(()=>[s.value?(i(),y("div",b({key:0,class:["ui-toast",`position-${e.positionX}`,`position-${e.positionY}`]},e.$attrs,{onClick:M(c,["stop"])}),[V(e.$slots,"default",{},void 0,!0)],16)):U("",!0)]),_:3}))}}),d=B(m,[["__scopeId","data-v-7212ae3f"]]);m.__docgenInfo={exportName:"default",displayName:"UiToast",description:"",tags:{},props:[{name:"timeout",required:!1,type:{name:"number"}},{name:"positionX",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"positionY",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"bottom"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiToast/UiToast.vue"]};const S={component:d,title:"Data display/Toast",tags:["autodocs"]},n={render:a=>({components:{UiToast:d,UiButton:w},setup(){const t=p(!1);return{args:a,toastOpened:t,openModal:()=>{t.value=!0}}},template:`
         <div style="height: 200px">
            <ui-toast v-model="toastOpened" :timeout="3000">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. A soluta
            </p>
         </ui-toast>
         <ui-button @click="toastOpened = true">Open Toast</ui-button>
         </div>
      `})};var u,r,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiToast,
      UiButton
    },
    setup() {
      const toastOpened = ref(false);
      const openModal = () => {
        toastOpened.value = true;
      };
      return {
        args,
        toastOpened,
        openModal
      };
    },
    template: \`
         <div style="height: 200px">
            <ui-toast v-model="toastOpened" :timeout="3000">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. A soluta
            </p>
         </ui-toast>
         <ui-button @click="toastOpened = true">Open Toast</ui-button>
         </div>
      \`
  })
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const z=["Sizes"];export{n as Sizes,z as __namedExportsOrder,S as default};
