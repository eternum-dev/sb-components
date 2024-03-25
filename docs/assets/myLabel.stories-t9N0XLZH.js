import{j as S}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const f=({label:g,size:x="normal",allCaps:C=!1,color:v="text-primary",fontColor:h="text-primary"})=>S.jsx("span",{className:`${x} 
        ${C&&"allCaps"}
        ${v} `,style:{color:h},children:g});f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text-primary'",computed:!1}}}};const A={title:"MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0,color:"text-tertiary"}},r={args:{label:"Secundary label",color:"text-secondary"}},l={args:{label:"Custom Color label",fontColor:"orange"}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Basic label"
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "All Caps label",
    allCaps: true,
    color: "text-tertiary"
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secundary label",
    color: 'text-secondary'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,y,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Custom Color label",
    fontColor: 'orange'
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const B=["Basic","AllCaps","Secundary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secundary,B as __namedExportsOrder,A as default};
