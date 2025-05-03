import{d as o,c as p,o as u,q as m,p as l,u as d}from"./vue.esm-bundler-DaCFxRb6.js";import{c}from"./clsx-B-dksMZM.js";const e=o({__name:"UiWrapper",props:{paddings:{default:"x"}},setup(a){return(r,g)=>(u(),p("div",{class:l(d(c)("ui-wrapper",`paddings-${r.paddings}`))},[m(r.$slots,"default")],2))}});e.__docgenInfo={exportName:"default",displayName:"UiWrapper",description:"",tags:{},props:[{name:"paddings",required:!1,type:{name:"union",elements:[{name:'"x"'},{name:'"y"'},{name:'"both"'}]},defaultValue:{func:!1,value:'"x"'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiWrapper/UiWrapper.vue"]};const q={component:e,title:"Layout/Wrapper",tags:["autodocs"]},i={render:a=>({components:{UiWrapper:e},setup(){return{args:a}},template:`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
         <ui-wrapper style="background-color: var(--primary-extra-light)">
            paddings="x"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="y" style="background-color: var(--primary-extra-light)">
            paddings="y"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="both" style="background-color: var(--primary-extra-light)">
            paddings="both"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
      </div>
      `})};var s,t,n;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
         <ui-wrapper style="background-color: var(--primary-extra-light)">
            paddings="x"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="y" style="background-color: var(--primary-extra-light)">
            paddings="y"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="both" style="background-color: var(--primary-extra-light)">
            paddings="both"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
      </div>
      \`
  })
}`,...(n=(t=i.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const h=["Paddings"];export{i as Paddings,h as __namedExportsOrder,q as default};
