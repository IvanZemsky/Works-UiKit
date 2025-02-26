import{l as Y,d as Q,r as Z,p as x,q as c,h as N,k as i,s as F,j as tt,o as et,t as nt,g as k}from"./vue.esm-bundler-BA3s6a-Z.js";import{c as at,S as ot}from"./clsx-C0VLrnar.js";function rt(t){const e=Y(!1);return{isWaveActive:e,handleClick:()=>{e.value=!0,setTimeout(()=>{e.value=!1},t)}}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const it=()=>{},y=Array.isArray;function O(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ut(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!st(t[n],e[n]))return!1;return!0}function st(t,e){return y(t)?C(t,e):y(e)?C(e,t):t===e}function C(t,e){return y(e)?t.length===e.length&&t.every((n,a)=>n===e[a]):t.length===1&&t[0]===e}var A;(function(t){t.pop="pop",t.push="push"})(A||(A={}));var V;(function(t){t.back="back",t.forward="forward",t.unknown=""})(V||(V={}));var z;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(z||(z={}));const X=Symbol(""),lt=Symbol("");function U(t){const e=x(X),n=x(lt),a=c(()=>{const u=i(t.to);return e.resolve(u)}),o=c(()=>{const{matched:u}=a.value,{length:r}=u,p=u[r-1],m=n.matched;if(!p||!m.length)return-1;const S=m.findIndex(O.bind(null,p));if(S>-1)return S;const w=E(u[r-2]);return r>1&&E(p)===w&&m[m.length-1].path!==w?m.findIndex(O.bind(null,u[r-2])):S}),s=c(()=>o.value>-1&&ft(n.params,a.value.params)),d=c(()=>o.value>-1&&o.value===n.matched.length-1&&ut(n.params,a.value.params));function B(u={}){if(pt(u)){const r=e[i(t.replace)?"replace":"push"](i(t.to)).catch(it);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>r),r}return Promise.resolve()}return{route:a,href:c(()=>a.value.href),isActive:s,isExactActive:d,navigate:B}}function ct(t){return t.length===1?t[0]:t}const dt=Q({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:U,setup(t,{slots:e}){const n=Z(U(t)),{options:a}=x(X),o=c(()=>({[_(t.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[_(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&ct(e.default(n));return t.custom?s:N("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),mt=dt;function pt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ft(t,e){for(const n in e){const a=e[n],o=t[n];if(typeof a=="string"){if(a!==o)return!1}else if(!y(o)||o.length!==a.length||a.some((s,d)=>s!==o[d]))return!1}return!0}function E(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _=(t,e,n)=>t??e??n,l=Q({__name:"UiButton",props:{as:{default:"button"},variant:{default:"filled"},size:{default:"md"},color:{default:"primary"}},setup(t){const e=t,{as:n,variant:a,size:o,color:s}=e,d=n==="router-link"?mt:n,{isWaveActive:B,handleClick:u}=rt(300);return(r,p)=>(et(),F(i(d),{class:tt(i(at)("ui-button",`variant-${i(a)}`,`size-${i(o)}`,`color-${i(s)}`,{wave:i(B)&&i(a)!=="ghost"})),onClick:i(u)},{default:nt(()=>[k(r.$slots,"start-icon"),k(r.$slots,"default"),k(r.$slots,"end-icon")]),_:3},8,["class","onClick"]))}});l.__docgenInfo={exportName:"default",displayName:"UiButton",description:"",tags:{},props:[{name:"as",description:"Tag of button",tags:{default:[{description:"'button'",title:"default"}],type:[{title:"type",description:"'button' | 'a' | 'router-link'"}]},required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"a"'},{name:'"router-link"'}]},defaultValue:{func:!1,value:'"button"'}},{name:"variant",description:"Vaiant of button",tags:{default:[{description:"'filled'",title:"default"}],type:[{title:"type",description:`'filled' | 'outlined' | "ghost"`}]},required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outlined"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:'"filled"'}},{name:"size",description:"Size of button",tags:{default:[{description:"'md'",title:"default"}],type:[{title:"type",description:"'sm' | 'md' | 'lg'"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"color",description:"Color of button",tags:{default:[{description:"'primary'",title:"default"}],type:[{title:"type",description:"'primary' | 'secondary'"}]},required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:'"primary"'}}],slots:[{name:"start-icon"},{name:"default"},{name:"end-icon"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiButton/UiButton.vue"]};const vt={component:l,title:"Button",tags:["autodocs"]},f={render:t=>({components:{UiButton:l},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>`})},b={render:t=>({components:{UiButton:l},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button size="sm">Button</ui-button>
            <ui-button size="md">Button</ui-button>
            <ui-button size="lg">Button</ui-button>
         </div>`})},g={render:t=>({components:{UiButton:l,SearchOutlined:ot},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-button>
            <ui-button variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-button>
            <ui-button>
               <SearchOutlined />
            </ui-button>
         </div>`})},v={render:t=>({components:{UiButton:l},setup(){return{args:t}},template:`
         <ui-button v-bind="args" as="a" href="https://storybook.js.org/" target="_blank">
            Link to the official Storybook web site
         </ui-button>`})},h={render:t=>({components:{UiButton:l},setup(){return{args:t}},template:`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button color="secondary">Button</ui-button>
            <ui-button color="secondary" variant="outlined">Button</ui-button>
            <ui-button color="secondary" variant="ghost">Button</ui-button>
         </div>
      `})};var L,R,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>\`
  })
}`,...(P=(R=f.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var j,q,I;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button size="sm">Button</ui-button>
            <ui-button size="md">Button</ui-button>
            <ui-button size="lg">Button</ui-button>
         </div>\`
  })
}`,...(I=(q=b.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var K,$,T;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton,
      SearchOutlined
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-button>
            <ui-button variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-button>
            <ui-button>
               <SearchOutlined />
            </ui-button>
         </div>\`
  })
}`,...(T=($=g.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var D,M,W;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-button v-bind="args" as="a" href="https://storybook.js.org/" target="_blank">
            Link to the official Storybook web site
         </ui-button>\`
  })
}`,...(W=(M=v.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button color="secondary">Button</ui-button>
            <ui-button color="secondary" variant="outlined">Button</ui-button>
            <ui-button color="secondary" variant="ghost">Button</ui-button>
         </div>
      \`
  })
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ht=["Variant","Sizes","Icons","As","Colors"];export{v as As,h as Colors,g as Icons,b as Sizes,f as Variant,ht as __namedExportsOrder,vt as default};
