import{d as m,c as l,p as r,o as p}from"./vue.esm-bundler-DaCFxRb6.js";import{_ as c}from"./UiButton-Be4SnEQM.js";import"./clsx-B-dksMZM.js";import"./useWaveEffect-CfYcZ3Nk.js";import"./vue-router-2jzTnSoH.js";const u=m({__name:"UiSkeleton",props:{variant:{default:"rectangle"},animation:{default:"wave"},size:{default:"md"}},setup(e){const s=e.animation!=="none";return(t,g)=>(p(),l("div",{class:r(["ui-skeleton",`variant-${t.variant}`,`size-${t.size}`,{[`animation-${t.animation}`]:s}])},null,2))}});u.__docgenInfo={exportName:"default",displayName:"UiSkeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"rectangle"'},{name:'"disc"'}]},defaultValue:{func:!1,value:'"rectangle"'}},{name:"animation",required:!1,type:{name:"union",elements:[{name:'"wave"'},{name:'"pulse"'},{name:'"none"'}]},defaultValue:{func:!1,value:'"wave"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSkeleton/UiSkeleton.vue"]};const w={component:u,title:"Data Display/Skeletop",tags:["autodocs"]},n={render:e=>({components:{UiSkeleton:u,UiButton:c},setup(){return{args:e}},template:`
         <ui-spacing vertical>
            <ui-spacing gap="sm" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="md" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="lg" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      `})};var a,i,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSkeleton,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing vertical>
            <ui-spacing gap="sm" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="md" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="lg" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      \`
  })
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,w as default};
