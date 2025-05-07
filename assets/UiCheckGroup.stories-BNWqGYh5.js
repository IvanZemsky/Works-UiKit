import{_ as k}from"./UiSpacing-BkaiM1Kx.js";import{d as g,v as U,x as v,j as C,G as y,q as f,s as I,l as S,o as t,c as V,k as $,p as q,t as M,b as N,F as A,u}from"./vue.esm-bundler-DRdyH_Db.js";import{_ as w}from"./UiCheck-6IlIQ7VW.js";const x={key:0,class:"ui-check-group__title"},b=g({__name:"UiCheckGroup",props:U({size:{default:"md"},title:{default:""}},{modelValue:{required:!0,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const r=c,i=v(c,"modelValue"),{name:a}=C();return y("ui-check-group",{size:r.size,name:a,model:i}),(e,o)=>(t(),f(k,{class:S(["ui-check-group",`size-${e.size}`]),gap:e.size,vertical:""},{default:I(()=>[e.title?(t(),V("p",x,M(e.title),1)):$("",!0),q(e.$slots,"default")]),_:3},8,["class","gap"]))}});b.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const l=g({__name:"UiCheckGroupItem",props:{size:{},label:{}},setup(c){const{size:r,model:i,name:a}=N("ui-check-group",{size:"md",name:"",model:A([])}),{value:e,id:o}=C(),_=o||G(),z=()=>{i.value.includes(e)?i.value=i.value.filter(p=>p!==e):i.value.push(e)};function G(){return`${a}-${e}`}return(n,p)=>(t(),f(w,{size:u(r),checked:u(i).includes(u(e)),label:n.label,id:u(_),name:u(a),onChange:z},null,8,["size","checked","label","id","name"]))}});l.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const j={title:"Inputs/Check Group",component:l,tags:["autodocs"]},s={render:c=>({components:{UiCheckGroupItem:l,UiCheckGroup:b,UiSpacing:k},setup(){return{args:c}},template:`
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
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const E=["Sizes"];export{s as Sizes,E as __namedExportsOrder,j as default};
