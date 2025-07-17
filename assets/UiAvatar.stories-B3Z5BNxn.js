import{d as h,I as k,C as I,x as S,y as $,q as A,u as a,s as U,o as s,c as o,n as g,t as x}from"./vue.esm-bundler-BYAC-X9_.js";import{R as D}from"./vue-router-CXlkMNkf.js";const C={key:0},V=["src","alt"],q={key:2},u=h({__name:"UiAvatar",props:{as:{default:"div"},size:{default:"md"},src:{default:""},alt:{default:""}},setup(n){const i=n,{alt:d,src:t}=i,r=k(!1),p=L(d),_=i.as==="router-link"?D:i.as;I(()=>{if(t){const e=new Image;e.onload=f,e.onerror=c,e.src=t}});const f=()=>{r.value=!0},c=()=>{r.value=!1};function L(e){return e.length===2?e:e.split(" ").map((v,M)=>M<2?v[0].toUpperCase():null).join("")}return(e,v)=>(s(),S(a(_),{class:U(["ui-avatar",`size-${e.size}`]),style:A(`background-image: ${a(t)&&!r.value?"none":`url(${a(t)})`}`)},{default:$(()=>[!a(t)&&!r.value?(s(),o("span",C,x(a(p)),1)):g("",!0),a(t)&&r.value?(s(),o("img",{key:1,src:a(t),alt:a(d),onLoad:f,onError:c},null,40,V)):a(t)&&!r.value?(s(),o("span",q,x(a(p)),1)):g("",!0)]),_:1},8,["class","style"]))}});u.__docgenInfo={exportName:"default",displayName:"UiAvatar",description:"",tags:{},props:[{name:"as",required:!1,type:{name:"union",elements:[{name:'"router-link"'},{name:"TSTypeOperator"}]},defaultValue:{func:!1,value:'"div"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"src",description:"Link to an image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alt",description:"One or two letters. If two or more words are passed, alt will be the first letters of the first two words.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiAvatar/UiAvatar.vue"]};const m=""+new URL("male-1-BaQLhsf9.jpg",import.meta.url).href,E={component:u,title:"Data display/Avatar",tags:["autodocs"]},l={render:n=>({components:{UiAvatar:u},setup(){return{args:n}},template:`
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
               <ui-avatar size="sm" alt="S" src="${m}"/>
               <ui-avatar size="md" alt="M" src="${m}"/>
               <ui-avatar size="lg" alt="L" src="${m}"/>
            </div>
         </div>`})};var y,w,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,E as default};
