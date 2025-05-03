import{d as L,r as h,x as I,c as s,l as v,u as a,t as g,n as S,p as $,o as l}from"./vue.esm-bundler-DaCFxRb6.js";import{c as k}from"./clsx-B-dksMZM.js";const A={key:0},U=["src","alt"],D={key:2},m=L({__name:"UiAvatar",props:{size:{default:"md"},src:{default:""},alt:{default:""}},setup(n){const z=n,{alt:d,src:t}=z,r=h(!1),u=_(d);I(()=>{if(t){const e=new Image;e.onload=p,e.onerror=c,e.src=t}});const p=()=>{r.value=!0},c=()=>{r.value=!1};function _(e){return e.length===2?e:e.split(" ").map((f,M)=>M<2?f[0].toUpperCase():null).join("")}return(e,f)=>(l(),s("div",{class:$(a(k)("ui-avatar",`size-${e.size}`)),style:S(`background-image: ${a(t)&&!r.value?"none":`url(${a(t)})`}`)},[!a(t)&&!r.value?(l(),s("span",A,g(a(u)),1)):v("",!0),a(t)&&r.value?(l(),s("img",{key:1,src:a(t),alt:a(d),onLoad:p,onError:c},null,40,U)):a(t)&&!r.value?(l(),s("span",D,g(a(u)),1)):v("",!0)],6))}});m.__docgenInfo={exportName:"default",displayName:"UiAvatar",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"src",description:"Link to an image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alt",description:"One or two letters. If two or more words are passed, alt will be the first letters of the first two words.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiAvatar/UiAvatar.vue"]};const o=""+new URL("male-1-BaQLhsf9.jpg",import.meta.url).href,E={component:m,title:"Data display/Avatar",tags:["autodocs"]},i={render:n=>({components:{UiAvatar:m},setup(){return{args:n}},template:`
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
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const q=["Default"];export{i as Default,q as __namedExportsOrder,E as default};
