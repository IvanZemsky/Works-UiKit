import{d as c,v as f,x as v,j as M,y as h,z as g,q as _,A as y,s as U,T as k,B as w,o as C,C as O,a as l,m as x,u as B,D as E,p as V,E as S,F as b}from"./vue.esm-bundler-DRdyH_Db.js";import{_ as D}from"./UiButton-C5G69dxR.js";import{_ as N}from"./UiCard-CdoDVen8.js";import"./vue-router-BbbCpkhz.js";const n=c({inheritAttrs:!1,__name:"UiModal",props:f({teleport:{}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=v(t,"modelValue"),d=()=>{e.value=!1},p=o=>{o.stopPropagation()},u=M();function s(o){o.key==="Escape"&&(e.value=!1)}return h(()=>{document.addEventListener("keydown",s)}),g(()=>{document.removeEventListener("keydown",s)}),(o,q)=>(C(),_(w,{to:o.teleport},[y(k,{name:"ui-modal-fade"},{default:U(()=>[O(l("div",x(B(u),{class:"ui-modal",onClick:d}),[l("div",{onClick:E(p,["stop"])},[V(o.$slots,"default")])],16),[[S,e.value]])]),_:3})],8,["to"]))}});n.__docgenInfo={exportName:"default",displayName:"UiModal",description:"",tags:{},props:[{name:"teleport",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiModal/UiModal.vue"]};const $={component:n,title:"Data display/Modal",tags:["autodocs"]},a={render:t=>({components:{UiModal:n,UiButton:D,UiCard:N},setup(){const e=b(!1);return{args:t,modalOpened:e,openModal:()=>{e.value=!0}}},template:`
      <div id="modal"></div>
         <div style="height: 300px">
            <ui-button @click="openModal">Open modal</ui-button>
            <ui-modal v-model="modalOpened" teleport="#modal" style="width: 100%; height: 300px">
               <ui-card>
                  Modal inserted to #modal
               </ui-card>
            </ui-modal>
         </div>
      `})};var r,i,m;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiModal,
      UiButton,
      UiCard
    },
    setup() {
      const modalOpened = ref(false);
      const openModal = () => {
        modalOpened.value = true;
      };
      return {
        args,
        modalOpened,
        openModal
      };
    },
    template: \`
      <div id="modal"></div>
         <div style="height: 300px">
            <ui-button @click="openModal">Open modal</ui-button>
            <ui-modal v-model="modalOpened" teleport="#modal" style="width: 100%; height: 300px">
               <ui-card>
                  Modal inserted to #modal
               </ui-card>
            </ui-modal>
         </div>
      \`
  })
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const F=["Sizes"];export{a as Sizes,F as __namedExportsOrder,$ as default};
