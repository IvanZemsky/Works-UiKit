import{_ as k}from"./UiSpacing-CXZ48G8P.js";import{d as g,x as G,z as v,j as C,H as y,v as f,q as I,l as S,o as t,c as V,k as $,s as q,t as M,b as N,y as A,u}from"./vue.esm-bundler-BRF8bUT-.js";import{_ as w}from"./UiCheck-ChSmWmei.js";import"./vue-router-CFPU2mzG.js";const x={key:0,class:"ui-check-group__title"},b=g({__name:"UiCheckGroup",props:G({size:{default:"md"},title:{default:""}},{modelValue:{required:!0,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const r=c,i=v(c,"modelValue"),{name:a}=C();return y("ui-check-group",{size:r.size,name:a,model:i}),(e,o)=>(t(),f(k,{class:S(["ui-check-group",`size-${e.size}`]),gap:e.size,vertical:""},{default:I(()=>[e.title?(t(),V("p",x,M(e.title),1)):$("",!0),q(e.$slots,"default")]),_:3},8,["class","gap"]))}});b.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const l=g({__name:"UiCheckGroupItem",props:{size:{},label:{}},setup(c){const{size:r,model:i,name:a}=N("ui-check-group",{size:"md",name:"",model:A([])}),{value:e,id:o}=C(),z=o||U(),_=()=>{i.value.includes(e)?i.value=i.value.filter(p=>p!==e):i.value.push(e)};function U(){return`${a}-${e}`}return(n,p)=>(t(),f(w,{size:u(r),checked:u(i).includes(u(e)),label:n.label,id:u(z),name:u(a),onChange:_},null,8,["size","checked","label","id","name"]))}});l.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const F={title:"Inputs/Check Group",component:l,tags:["autodocs"]},s={render:c=>({components:{UiCheckGroupItem:l,UiCheckGroup:b,UiSpacing:k},setup(){return{args:c}},template:`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      `})};var m,d,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCheckGroupItem,
      UiCheckGroup,
      UiSpacing
    },
    setup() {
      return {
        args
      };
    },
    template: \`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      \`
  })
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const L=["Sizes"];export{s as Sizes,L as __namedExportsOrder,F as default};
