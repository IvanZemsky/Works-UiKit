import{d as c,m as f,I as p,j as v,w as g,D as y,x as T,y as h,T as O,o as r,c as U,n as b,p as k,G as M,z as V}from"./vue.esm-bundler-BYAC-X9_.js";import{_}from"./UiButton-cugExzWx.js";import"./vue-router-CXlkMNkf.js";const i=c({inheritAttrs:!1,__name:"UiToast",props:f({timeout:{},positionX:{default:"right"},positionY:{default:"bottom"},color:{default:"primary"}},{modelValue:{default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=a,o=p(0),n=v(a,"modelValue"),d=e=>{e.stopPropagation()};return g(n,()=>{n.value&&t.timeout&&(o.value=setTimeout(()=>{n.value=!1},t.timeout))}),y(()=>{o.value&&(clearTimeout(o.value),o.value=null)}),(e,$)=>(r(),T(O,{name:"ui-fade-vertical"},{default:h(()=>[n.value?(r(),U("div",k({key:0,class:["ui-toast",`position-${e.positionX}`,`position-${e.positionY}`,`color-${e.color}`]},e.$attrs,{onClick:M(d,["stop"])}),[V(e.$slots,"default")],16)):b("",!0)]),_:3}))}});i.__docgenInfo={exportName:"default",displayName:"UiToast",description:"",tags:{},props:[{name:"timeout",required:!1,type:{name:"number"}},{name:"positionX",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"right"'}},{name:"positionY",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"bottom"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"critical"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiToast/UiToast.vue"]};const q={component:i,title:"Data display/Toast",tags:["autodocs"]},s={render:a=>({components:{UiToast:i,UiButton:_},setup(){const t=p(!1);return{args:a,toastOpened:t,openModal:()=>{t.value=!0}}},template:`
         <div style="height: 200px">
            <ui-toast v-model="toastOpened" :timeout="3000">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. A soluta
            </p>
         </ui-toast>
         <ui-button @click="toastOpened = true">Open Toast</ui-button>
         </div>
      `})};var u,l,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Sizes"];export{s as Sizes,S as __namedExportsOrder,q as default};
