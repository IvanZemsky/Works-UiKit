import{_ as h}from"./UiSpacing-N5mcTZWi.js";import{d as g,m as G,j as I,k as f,J as V,x as C,y,s as S,o as t,c as $,n as q,z as M,t as N,I as s,u as o,K as w}from"./vue.esm-bundler-BYAC-X9_.js";import{_ as x}from"./UiCheck-D9HUGrkU.js";import{u as B}from"./useInject-sW9uSy1v.js";import"./vue-router-CXlkMNkf.js";const D={key:0,class:"ui-check-group__title"},b=g({__name:"UiCheckGroup",props:G({size:{default:"md"},title:{default:""}},{modelValue:{required:!0,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const u=l,e=I(l,"modelValue"),{name:c}=f();return V("ui-check-group",{size:u.size,name:c,model:e}),(i,n)=>(t(),C(h,{class:S(["ui-check-group",`size-${i.size}`]),gap:i.size,vertical:""},{default:y(()=>[i.title?(t(),$("p",D,N(i.title),1)):q("",!0),M(i.$slots,"default")]),_:3},8,["class","gap"]))}});b.__docgenInfo={exportName:"default",displayName:"UiCheckGroup",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"md"'}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroup.vue"]};const r=g({__name:"UiCheckGroupItem",props:{size:{},label:{}},setup(l){const{size:u,model:e,name:c}=B("ui-check-group",{size:"md",name:"",model:s([])}),{value:i,id:n}=f(),z=n||_();function _(){return`${c}-${i}`}return(U,m)=>(t(),C(x,{modelValue:o(e),"onUpdate:modelValue":m[0]||(m[0]=v=>w(e)?e.value=v:null),size:o(u),checked:o(e).includes(o(i)),label:U.label,id:o(z),name:o(c)},null,8,["modelValue","size","checked","label","id","name"]))}});r.__docgenInfo={exportName:"default",displayName:"UiCheckGroupItem",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}},{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["D:/Programming/Vue/p-work-ui/src/components/UiCheckGroup/UiCheckGroupItem.vue"]};const P={title:"Inputs/Check Group",component:r,tags:["autodocs"]},a={render:l=>({components:{UiCheckGroupItem:r,UiCheckGroup:b,UiSpacing:h},setup(){const u=s(),e=s(),c=s();return{args:l,model1:u,model2:e,model3:c}},template:`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm" v-model="model1">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md" v-model="model2">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg" v-model="model3">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      `})};var p,d,k;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCheckGroupItem,
      UiCheckGroup,
      UiSpacing
    },
    setup() {
      const model1 = ref();
      const model2 = ref();
      const model3 = ref();
      return {
        args,
        model1,
        model2,
        model3
      };
    },
    template: \`
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm" v-model="model1">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md" v-model="model2">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg" v-model="model3">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      \`
  })
}`,...(k=(d=a.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const T=["Sizes"];export{a as Sizes,T as __namedExportsOrder,P as default};
