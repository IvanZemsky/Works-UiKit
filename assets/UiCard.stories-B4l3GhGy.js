import{d as m,c as g,p as b,l as f,o as v}from"./vue.esm-bundler-BOGk32Bt.js";import{_ as d}from"./UiSpacing-OCl5DJzN.js";import{_ as l}from"./UiButton-DSwb4RAA.js";import"./vue-router-xJp9MKPe.js";const n=m({__name:"UiCard",props:{hoverable:{type:Boolean,default:!1},size:{default:"md"}},setup(e){return(t,U)=>(v(),g("div",{class:f(["ui-card",`size-${t.size}`,{hoverable:t.hoverable}])},[b(t.$slots,"default")],2))}});n.__docgenInfo={exportName:"default",displayName:"UiCard",description:"",tags:{},props:[{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCard/UiCard.vue"]};const S={component:n,title:"Data display/Card",tags:["autodocs"]},i={render:e=>({components:{UiCard:n,UiSpacing:d,UiButton:l},setup(){return{args:e}},template:`
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
      `})},a={render:e=>({components:{UiCard:n,UiSpacing:d,UiButton:l},setup(){return{args:e}},template:`
         <ui-card hoverable>
            <ui-spacing vertical>
               <p><b>Hoverable card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      `})};var r,s,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const L=["Sizes","Hoverable"];export{a as Hoverable,i as Sizes,L as __namedExportsOrder,S as default};
