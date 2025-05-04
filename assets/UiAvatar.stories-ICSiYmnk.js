import{d as L,v as h,A as k,c as s,k as v,u as e,t as g,n as A,l as I,o as l}from"./vue.esm-bundler-BOGk32Bt.js";const S={key:0},$=["src","alt"],U={key:2},m=L({__name:"UiAvatar",props:{size:{default:"md"},src:{default:""},alt:{default:""}},setup(n){const z=n,{alt:d,src:t}=z,r=h(!1),u=_(d);k(()=>{if(t){const a=new Image;a.onload=p,a.onerror=c,a.src=t}});const p=()=>{r.value=!0},c=()=>{r.value=!1};function _(a){return a.length===2?a:a.split(" ").map((f,M)=>M<2?f[0].toUpperCase():null).join("")}return(a,f)=>(l(),s("div",{class:I(["ui-avatar",`size-${a.size}`]),style:A(`background-image: ${e(t)&&!r.value?"none":`url(${e(t)})`}`)},[!e(t)&&!r.value?(l(),s("span",S,g(e(u)),1)):v("",!0),e(t)&&r.value?(l(),s("img",{key:1,src:e(t),alt:e(d),onLoad:p,onError:c},null,40,$)):e(t)&&!r.value?(l(),s("span",U,g(e(u)),1)):v("",!0)],6))}});m.__docgenInfo={exportName:"default",displayName:"UiAvatar",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"src",description:"Link to an image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alt",description:"One or two letters. If two or more words are passed, alt will be the first letters of the first two words.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiAvatar/UiAvatar.vue"]};const o=""+new URL("male-1-BaQLhsf9.jpg",import.meta.url).href,V={component:m,title:"Data display/Avatar",tags:["autodocs"]},i={render:n=>({components:{UiAvatar:m},setup(){return{args:n}},template:`
         <div style="display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S"/>
               <ui-avatar size="md" alt="M"/>
               <ui-avatar size="lg" alt="L"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="SM"/>
               <ui-avatar size="md" alt="MD"/>
               <ui-avatar size="lg" alt="LG"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S" src="${o}"/>
               <ui-avatar size="md" alt="M" src="${o}"/>
               <ui-avatar size="lg" alt="L" src="${o}"/>
            </div>
         </div>`})};var x,y,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S"/>
               <ui-avatar size="md" alt="M"/>
               <ui-avatar size="lg" alt="L"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="SM"/>
               <ui-avatar size="md" alt="MD"/>
               <ui-avatar size="lg" alt="LG"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S" src="\${avatarMaleImg}"/>
               <ui-avatar size="md" alt="M" src="\${avatarMaleImg}"/>
               <ui-avatar size="lg" alt="L" src="\${avatarMaleImg}"/>
            </div>
         </div>\`
  })
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,V as default};
