import{defineComponent as l,resolveComponent as c,openBlock as u,createElementBlock as d,createElementVNode as o,toDisplayString as n,createVNode as m,withCtx as p,createTextVNode as g}from"vue";import{defineStore as f}from"pinia";import h from"axios";import{ElMessage as _}from"element-plus";import{_ as C}from"./index.cecb20c9.js";import"./vendor.1c40414c.js";import"vue-router";const r=h.create();r.interceptors.request.use(e=>(console.log(e),e));r.interceptors.response.use(e=>(console.log("res --->",e),e.status===200?Promise.resolve(e.data):Promise.reject(e)));const A={login:e=>r({method:"post",url:"/users/login",data:e})},$={user:A},S=f({id:"user",state:()=>({name:"",isAdmin:!1,signature:""}),actions:{logout(){this.$patch({name:"",isAdmin:!1})},async login(e,t){const a=await $.user.login({user:e,password:t}),s={name:e,...a.data};console.log("login-success",s),this.$patch(s)}}}),k=l({components:{},setup(){const e=S();return{user:e,handleAddCart:async()=>{console.log(e),await e.login("admin","root"),console.log("handleAddCart --->"),_.success("Login Success~")}}}}),y={class:"Pinia"},N=g("\u767B\u5F55"),P=o("hr",null,null,-1);function v(e,t,a,s,w,B){const i=c("el-button");return u(),d("div",y,[o("p",null," name: "+n(e.user.name),1),o("p",null," signature: "+n(e.user.signature||""),1),o("p",null,n(JSON.stringify(e.user)),1),m(i,{onClick:e.handleAddCart},{default:p(()=>[N]),_:1},8,["onClick"]),P])}const F=C(k,[["render",v]]);export{F as default};
