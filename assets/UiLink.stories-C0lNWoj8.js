import{d as g,p as y,q as h,l as v,u as e,o as w,s as r}from"./vue.esm-bundler-bnx33hia.js";import{R as _}from"./vue-router-B42mHPE5.js";const t=g({__name:"UiLink",props:{as:{default:"router-link"},size:{default:"md"},color:{default:"primary"},hover:{default:"underline"},weight:{default:"400"}},setup(n){const m=n,{size:d,color:p,as:l,hover:f,weight:c}=m,k=l==="router-link"?_:l;return(s,x)=>(w(),y(e(k),{class:v(["ui-link",`size-${e(d)}`,`color-${e(p)}`,`hover-${e(f)}`,`ui-s-weight-${e(c)}`])},{default:h(()=>[r(s.$slots,"start-icon"),r(s.$slots,"default"),r(s.$slots,"end-icon")]),_:3},8,["class"]))}});t.__docgenInfo={exportName:"default",displayName:"UiLink",description:"",tags:{},props:[{name:"as",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"a"'},{name:'"router-link"'}]},defaultValue:{func:!1,value:'"router-link"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}},{name:"hover",required:!1,type:{name:"union",elements:[{name:'"underline"'},{name:'"fade-dark"'},{name:'"fade-light"'}]},defaultValue:{func:!1,value:'"underline"'}},{name:"weight",required:!1,type:{name:"union",elements:[{name:'"400"'},{name:'"500"'},{name:'"600"'}]},defaultValue:{func:!1,value:'"400"'}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiLink/UiLink.vue"]};const $={component:t,title:"Data display/Link",tags:["autodocs"]},a={render:n=>({components:{UiLink:t},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-link as="a" href="https://storybook.js.org/" target="_blank">Click me</ui-link>
         </div>`})};var i,o,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-link as="a" href="https://storybook.js.org/" target="_blank">Click me</ui-link>
         </div>\`
  })
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const q=["Sizes"];export{a as Sizes,q as __namedExportsOrder,$ as default};
