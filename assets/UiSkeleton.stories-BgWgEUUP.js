import{d as h,c as z,l as U,o as S}from"./vue.esm-bundler-DRdyH_Db.js";import{_ as l}from"./UiButton-C5G69dxR.js";import"./vue-router-BbbCpkhz.js";const n=h({__name:"UiSkeleton",props:{variant:{default:"rectangle"},animation:{default:"wave"},size:{default:"md"}},setup(e){const y=e.animation!=="none";return(r,_)=>(S(),z("div",{class:U(["ui-skeleton",`variant-${r.variant}`,`size-${r.size}`,{[`animation-${r.animation}`]:y}])},null,2))}});n.__docgenInfo={exportName:"default",displayName:"UiSkeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"rectangle"'},{name:'"disc"'}]},defaultValue:{func:!1,value:'"rectangle"'}},{name:"animation",required:!1,type:{name:"union",elements:[{name:'"wave"'},{name:'"pulse"'},{name:'"none"'}]},defaultValue:{func:!1,value:'"wave"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiSkeleton/UiSkeleton.vue"]};const q={component:n,title:"Data Display/Skeleton",tags:["autodocs"]},i={render:e=>({components:{UiSkeleton:n,UiButton:l},setup(){return{args:e}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; max-width: 400px; width: 100%;">
            <div style="display: flex; align-items: center; width: 100%; gap: 0.5rem;">
               <ui-skeleton variant="disc" size="md"/>
               <div style="display: flex; flex-direction: column; width: 100%; gap: 0.5rem;">
                  <ui-skeleton size="sm"/>
                  <ui-skeleton size="sm" style="width: 100px;"/>
               </div>
            </div>
            <ui-skeleton style="height: 150px;"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="md"/>
         </div>
      `})},t={render:e=>({components:{UiSkeleton:n,UiButton:l},setup(){return{args:e}},template:`
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            disc
            <ui-skeleton variant="disc"/>
            rectangle
            <ui-skeleton />
         </div>
      `})},a={render:e=>({components:{UiSkeleton:n,UiButton:l},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="lg"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="sm"/>
         </div>
         <div style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="sm" variant="disc"/>
            <ui-skeleton size="md" variant="disc"/>
            <ui-skeleton size="lg" variant="disc"/>
         </div>
      </div>
      `})},s={render:e=>({components:{UiSkeleton:n,UiButton:l},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         wave
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">

            <ui-skeleton variant="disc"/>
            <ui-skeleton />
         </div>
         pulse
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc"animation="pulse"/>
            <ui-skeleton animation="pulse"/>
         </div>
         none
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc" animation="none"/>
            <ui-skeleton  animation="none"/>
         </div>
      </div>
      `})};var o,d,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; max-width: 400px; width: 100%;">
            <div style="display: flex; align-items: center; width: 100%; gap: 0.5rem;">
               <ui-skeleton variant="disc" size="md"/>
               <div style="display: flex; flex-direction: column; width: 100%; gap: 0.5rem;">
                  <ui-skeleton size="sm"/>
                  <ui-skeleton size="sm" style="width: 100px;"/>
               </div>
            </div>
            <ui-skeleton style="height: 150px;"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="md"/>
         </div>
      \`
  })
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            disc
            <ui-skeleton variant="disc"/>
            rectangle
            <ui-skeleton />
         </div>
      \`
  })
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var f,v,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="lg"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="sm"/>
         </div>
         <div style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="sm" variant="disc"/>
            <ui-skeleton size="md" variant="disc"/>
            <ui-skeleton size="lg" variant="disc"/>
         </div>
      </div>
      \`
  })
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,k,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         wave
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">

            <ui-skeleton variant="disc"/>
            <ui-skeleton />
         </div>
         pulse
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc"animation="pulse"/>
            <ui-skeleton animation="pulse"/>
         </div>
         none
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc" animation="none"/>
            <ui-skeleton  animation="none"/>
         </div>
      </div>
      \`
  })
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const A=["Default","Variants","Sizes","Animations"];export{s as Animations,i as Default,a as Sizes,t as Variants,A as __namedExportsOrder,q as default};
