"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{4344:function(e,r,o){o.r(r),o.d(r,{LoginForm:function(){return x}});var t=o(7437),a=o(7684),n=o(511),i=o(2833),s=o(1941),l=o(6463),d=o(2265),c=o(5956);o(4193);var u=o(296);let m=(0,o(9099).Ue)(e=>({user:{email:"",password:"",displayName:""},setUser:r=>e({user:r})}));var h=o(5735);let p={width:"20rem",border:"0.0625rem solid black",borderRadius:"1rem",padding:"4rem 4rem 6rem 4rem",backgroundColor:"rgba(0, 0, 0, 0.82)",margin:"auto",mt:"96px",justifyContent:"center"},g={zIndex:1,"& input":{color:"white"},"& label":{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},"& .MuiFormLabel-root":{color:"white"}},f={textTransform:"none",fontSize:"1rem",zIndex:1,height:"2.75rem",color:"white"},b=[{name:"email",label:"Email",type:"text",sx:g,required:!0},{name:"name",label:"Name",type:"text",sx:g,condition:!0},{name:"password",label:"Password",type:"password",sx:g,required:!0}],w={email:"dhruv@gmail.com",password:"Dhruv@12345",name:""},x=()=>{let[e,r]=(0,d.useState)(w),[o,g]=(0,d.useState)(!1),x=(0,l.useRouter)(),{setUser:I}=m(),v=e=>{let{name:o,value:t}=e.target;r(e=>({...e,[o]:t}))},y=()=>{for(let r of b)if(r.required&&!e[r.name])return!1;return!0};return(0,t.jsxs)(a.Z,{sx:p,gap:2,children:[(0,t.jsx)(n.Z,{variant:"h4",component:"h4",color:"white",fontWeight:600,children:o?"Sign Up":"Sign In"}),(0,t.jsx)(a.Z,{children:b.map(r=>(o||!r.condition)&&(0,t.jsx)(i.Z,{autoComplete:"off",label:r.label,type:r.type,sx:r.sx,value:e[r.name],onChange:v,name:r.name,fullWidth:!0,variant:"outlined",margin:"normal",required:r.required},r.name))}),(0,t.jsxs)(a.Z,{direction:"column",gap:2,sx:{alignItems:"center"},children:[(0,t.jsx)(s.Z,{variant:"contained",fullWidth:!0,onClick:()=>{if(!y()){c.Am.error("Please fill all the required fields.");return}if(o){if(!(0,u.oH)(e.email)){c.Am.error("Please enter a valid email address.");return}if(!(0,u.Ol)(e.name)){c.Am.error("Please enter a valid name.");return}let r=(0,u.uo)(e.password);if(r){c.Am.error(r);return}(0,h.Xb)(u.I8,e.email,e.password).then(e=>{e.user}).catch(e=>{let r=e.code,o=e.message;console.log("Error:",r,o),c.Am.error(o)}),I(e),g(!1)}o||(0,h.e5)(u.I8,e.email,e.password).then(e=>{e.user,x.push("/browse")}).catch(e=>{let r=e.code,o=e.message;console.log("Error:",r,o),c.Am.error(o)}),console.log("Form Data:",e)},sx:{...f,"&:hover":{backgroundColor:"crimson"},backgroundColor:"red",fontWeight:"bold"},children:o?"Sign Up":"Login"}),(0,t.jsx)(n.Z,{variant:"body2",color:"white",fontWeight:600,children:"OR"}),(0,t.jsx)(s.Z,{variant:"contained",fullWidth:!0,sx:{...f,"&:hover":{backgroundColor:"rgba(211, 211, 211, 0.21)"},backgroundColor:"rgba(211, 211, 211, 0.18)"},onClick:()=>{g(!o),r(w)},children:(0,t.jsx)(n.Z,{variant:"body2",color:"white",fontWeight:600,children:o?"Already have an account? ":"Create an account? "})}),!o&&(0,t.jsx)(n.Z,{variant:"body2",component:"p",color:"white",sx:{textDecoration:"underline"},children:"Forgot password?"}),(0,t.jsxs)(n.Z,{variant:"body2",component:"p",color:"gray",children:["This page is protected by Google reCAPTCHA to ensure you are not a bot. ",(0,t.jsx)("strong",{children:"Learn more."})]})]}),(0,t.jsx)(c.Ix,{})]})}},296:function(e,r,o){o.d(r,{Ee:function(){return m},I8:function(){return c},Ol:function(){return l},mU:function(){return u},oH:function(){return i},uo:function(){return s}});var t=o(5236),a=o(7175),n=o(5735);let i=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(e).toLowerCase()),s=e=>{let r=e.length<10?"Password must be at least 10 characters long.":"",o=/[A-Z]/.test(e)?"":"Password must contain at least one uppercase letter.",t=/[a-z]/.test(e)?"":"Password must contain at least one lowercase letter.",a=/[@$!%*?&]/.test(e)?"":"Password must contain at least one special character (@, $, !, %, *, ?, &).";return r||o||t||a},l=e=>/^[A-Za-z -]+$/.test(e),d=(0,t.ZF)({apiKey:"AIzaSyBazoP7ahYdxm2T-0Gxhss_syDE5ovnA1E",authDomain:"watchwave-4f7ab.firebaseapp.com",projectId:"watchwave-4f7ab",storageBucket:"watchwave-4f7ab.appspot.com",messagingSenderId:"164840175759",appId:"1:164840175759:web:4c2e4895c4d333922858fa",measurementId:"G-0MPGFNVFX3"});(0,a.IH)(d);let c=(0,n.v0)(),u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo",m="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"}}]);