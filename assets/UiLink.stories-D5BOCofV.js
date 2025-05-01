import{d as g,s as y,v as h,q as v,u as e,o as w,k as s}from"./vue.esm-bundler-2rTkCq1z.js";import{R as _}from"./vue-router-DgItWFCF.js";import{c as x}from"./clsx-B-dksMZM.js";const t=g({__name:"UiLink",props:{as:{default:"router-link"},size:{default:"md"},color:{default:"primary"},hover:{default:"underline"},weight:{default:"400"}},setup(n){const u=n,{size:d,color:p,as:l,hover:f,weight:c}=u,k=l==="router-link"?_:l;return(r,L)=>(w(),y(e(k),{class:v(e(x)("ui-link",`size-${e(d)}`,`color-${e(p)}`,`hover-${e(f)}`,`weight-${e(c)}`))},{default:h(()=>[s(r.$slots,"start-icon"),s(r.$slots,"default"),s(r.$slots,"end-icon")]),_:3},8,["class"]))}});t.__docgenInfo={exportName:"default",displayName:"UiLink",description:"",tags:{},props:[{name:"as",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"a"'},{name:'"router-link"'}]},defaultValue:{func:!1,value:'"router-link"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}},{name:"hover",required:!1,type:{name:"union",elements:[{name:'"underline"'},{name:'"fade-dark"'},{name:'"fade-light"'}]},defaultValue:{func:!1,value:'"underline"'}},{name:"weight",required:!1,type:{name:"union",elements:[{name:'"400"'},{name:'"500"'},{name:'"600"'}]},defaultValue:{func:!1,value:'"400"'}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiLink/UiLink.vue"]};const U={component:t,title:"Link",tags:["autodocs"]},a={render:n=>({components:{UiLink:t},setup(){return{args:n}},template:`
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-link as="a" href="https://storybook.js.org/" target="_blank">Click me</ui-link>
         </div>`})};var o,i,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const V=["Sizes"];export{a as Sizes,V as __namedExportsOrder,U as default};
