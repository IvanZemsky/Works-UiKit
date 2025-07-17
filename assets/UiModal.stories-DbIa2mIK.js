import{d as c,m as f,j as v,k as M,C as h,D as g,x as _,B as y,y as k,T as U,E as w,o as C,l as O,b as l,p as x,u as B,G as E,z as V,H as b,I as S}from"./vue.esm-bundler-BYAC-X9_.js";import{_ as D}from"./UiButton-cugExzWx.js";import{_ as N}from"./UiCard-B9OxeMI7.js";import"./vue-router-CXlkMNkf.js";const n=c({inheritAttrs:!1,__name:"UiModal",props:f({teleport:{}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=v(t,"modelValue"),d=()=>{e.value=!1},m=o=>{o.stopPropagation()},u=M();function s(o){o.key==="Escape"&&(e.value=!1)}return h(()=>{document.addEventListener("keydown",s)}),g(()=>{document.removeEventListener("keydown",s)}),(o,z)=>(C(),_(w,{to:o.teleport},[y(U,{name:"ui-fade"},{default:k(()=>[O(l("div",x(B(u),{class:"ui-modal",onClick:d}),[l("div",{onClick:E(m,["stop"])},[V(o.$slots,"default")])],16),[[b,e.value]])]),_:3})],8,["to"]))}});n.__docgenInfo={exportName:"default",displayName:"UiModal",description:"",tags:{},props:[{name:"teleport",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiModal/UiModal.vue"]};const A={component:n,title:"Data display/Modal",tags:["autodocs"]},a={render:t=>({components:{UiModal:n,UiButton:D,UiCard:N},setup(){const e=S(!1);return{args:t,modalOpened:e,openModal:()=>{e.value=!0}}},template:`
      <div id="modal"></div>
         <div style="height: 300px">
            <ui-button @click="openModal">Open modal</ui-button>
            <ui-modal v-model="modalOpened" teleport="#modal" style="width: 100%; height: 300px">
               <ui-card>
                  Modal inserted to #modal
               </ui-card>
            </ui-modal>
         </div>
      `})};var r,i,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const I=["Sizes"];export{a as Sizes,I as __namedExportsOrder,A as default};
