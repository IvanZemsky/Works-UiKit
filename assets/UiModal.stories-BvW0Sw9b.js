import{d as c,x as f,y as v,j as M,B as h,C as g,p as _,v as y,q as U,T as k,D as w,o as C,z as O,a as l,m as x,u as B,E,s as V,G as S,H as b}from"./vue.esm-bundler-DXOuKJDY.js";import{_ as D}from"./UiButton-B1j0Zml3.js";import{_ as N}from"./UiCard-DuD2SESD.js";import"./vue-router-_3Pxos1u.js";const n=c({inheritAttrs:!1,__name:"UiModal",props:f({teleport:{}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=v(t,"modelValue"),d=()=>{e.value=!1},p=o=>{o.stopPropagation()},u=M();function s(o){o.key==="Escape"&&(e.value=!1)}return h(()=>{document.addEventListener("keydown",s)}),g(()=>{document.removeEventListener("keydown",s)}),(o,q)=>(C(),_(w,{to:o.teleport},[y(k,{name:"ui-modal-fade"},{default:U(()=>[O(l("div",x(B(u),{class:"ui-modal",onClick:d}),[l("div",{onClick:E(p,["stop"])},[V(o.$slots,"default")])],16),[[S,e.value]])]),_:3})],8,["to"]))}});n.__docgenInfo={exportName:"default",displayName:"UiModal",description:"",tags:{},props:[{name:"teleport",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiModal/UiModal.vue"]};const A={component:n,title:"Data display/Modal",tags:["autodocs"]},a={render:t=>({components:{UiModal:n,UiButton:D,UiCard:N},setup(){const e=b(!1);return{args:t,modalOpened:e,openModal:()=>{e.value=!0}}},template:`
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
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const L=["Sizes"];export{a as Sizes,L as __namedExportsOrder,A as default};
