import{_ as e}from"./UiCard-BH7fSigQ.js";import{_ as c}from"./UiSpacing-CuEl3dfH.js";import{_ as d}from"./UiButton-DTHWxSPi.js";import"./vue.esm-bundler-Bfxd_V-S.js";import"./vue-router-Bm2IpmDu.js";const f={component:e,title:"Data display/Card",tags:["autodocs"]},i={render:n=>({components:{UiCard:e,UiSpacing:c,UiButton:d},setup(){return{args:n}},template:`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
         <ui-card size="sm">
            <ui-spacing vertical>
               <p><b>Small card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="md">
            <ui-spacing vertical>
               <p><b>Medium card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="lg">
            <ui-spacing vertical>
               <p><b>Large card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      </div>
      `})},t={render:n=>({components:{UiCard:e,UiSpacing:c,UiButton:d},setup(){return{args:n}},template:`
         <ui-card hoverable>
            <ui-spacing vertical>
               <p><b>Hoverable card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      `})};var a,r,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard,
      UiSpacing,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
         <ui-card size="sm">
            <ui-spacing vertical>
               <p><b>Small card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="md">
            <ui-spacing vertical>
               <p><b>Medium card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="lg">
            <ui-spacing vertical>
               <p><b>Large card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      </div>
      \`
  })
}`,...(s=(r=i.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var u,o,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard,
      UiSpacing,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-card hoverable>
            <ui-spacing vertical>
               <p><b>Hoverable card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      \`
  })
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const B=["Sizes","Hoverable"];export{t as Hoverable,i as Sizes,B as __namedExportsOrder,f as default};
