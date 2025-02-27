import{d as l,c as g,f as b,g as f,u as v,o as U}from"./vue.esm-bundler-CxvyApLV.js";import{c as B}from"./clsx-B-dksMZM.js";import{_ as d}from"./UiSpacing-Bn_Dq7aD.js";import{_ as m}from"./UiButton-oF3DabcZ.js";const t=l({__name:"UiCard",props:{hoverable:{type:Boolean,default:!1},size:{default:"md"}},setup(e){return(a,_)=>(U(),g("div",{class:f(v(B)("ui-card",`size-${a.size}`,{hoverable:a.hoverable}))},[b(a.$slots,"default")],2))}});t.__docgenInfo={exportName:"default",displayName:"UiCard",description:"",tags:{},props:[{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the card",tags:{default:[{description:'"md"',title:"default"}],type:[{title:"type",description:'"sm" | "md" | "lg"'}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCard/UiCard.vue"]};const h={component:t,title:"Card",tags:["autodocs"]},i={render:e=>({components:{UiCard:t,UiSpacing:d,UiButton:m},setup(){return{args:e}},template:`
      <ui-spacing wrap>
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
      </ui-spacing>
      `})},n={render:e=>({components:{UiCard:t,UiSpacing:d,UiButton:m},setup(){return{args:e}},template:`
         <ui-card hoverable>
            <ui-spacing vertical>
               <p><b>Small card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      `})};var r,s,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      <ui-spacing wrap>
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
      </ui-spacing>
      \`
  })
}`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var o,c,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
               <p><b>Small card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      \`
  })
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Sizes","Hoverable"];export{n as Hoverable,i as Sizes,y as __namedExportsOrder,h as default};
