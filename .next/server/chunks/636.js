"use strict";exports.id=636,exports.ids=[636],exports.modules={4636:(e,t,a)=>{a.r(t),a.d(t,{SecondaryContainer:()=>c});var i=a(326),s=a(5103),r=a(274);a(2057);var o=a(6226);a(7577);let d=({data:e})=>(0,i.jsxs)(s.Z,{sx:{width:185,borderRadius:3,backgroundColor:"black",height:310,cursor:"pointer","&:hover":{transform:"scale(1.05)",transition:"all 0.3s ease"}},direction:"column",children:[i.jsx(o.default,{src:`https://image.tmdb.org/t/p/w500/${e.poster_path}`,alt:"Kingdom of the Planet of the Apes",width:185,height:240,style:{borderRadius:"12px 12px 0 0",objectFit:"cover",objectPosition:"center"}}),i.jsx(s.Z,{sx:{width:"100%"},children:i.jsx(r.Z,{variant:"h6",sx:{fontSize:"1rem",fontWeight:"bold",color:"white",p:1},children:e.title})})]}),n=({title:e,movieData:t})=>(0,i.jsxs)(s.Z,{sx:{width:"100%",overflow:"hidden",height:"40rem"},direction:"column",gap:1,children:[i.jsx(r.Z,{variant:"h5",sx:{color:"white",fontWeight:600,ml:6,my:.2},children:e}),i.jsx(s.Z,{sx:{height:"50rem"},children:t?.length>0&&i.jsx(s.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",gap:1,children:t.map(e=>i.jsx(s.Z,{children:i.jsx(d,{data:e})},e.id))})})]});var l=a(2036);let c=()=>{let e=(0,l.j)();return console.log({movieData:e}),i.jsx(s.Z,{sx:{height:"100%",width:"99vw",backgroundColor:"gray",mt:8,px:4,py:3},direction:"column",gap:2,children:h.map(t=>i.jsx(n,{title:t.title,movieData:e},t.id))})},h=[{title:"Movie List",id:"movie"},{title:"Series List",id:"series"},{title:"asdd List",id:"asdd"},{title:"Movsdfgie List",id:"Movsdfgie"},{title:"asd List",id:"asd"}]},2036:(e,t,a)=>{a.d(t,{j:()=>d});var i=a(7577),s=a(4099),r=a(551),o=a(8702);let d=()=>{let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{(async()=>{try{let e=await s.Z.get(r.Ee,{headers:{accept:"application/json",Authorization:`Bearer ${r.mU}`}});t(e.data.results)}catch(e){o.Am.error("Failed to fetch data")}})()},[]),e}},551:(e,t,a)=>{a.d(t,{Ee:()=>p,I8:()=>c,Ol:()=>n,mU:()=>h,oH:()=>o,uo:()=>d});var i=a(2585),s=a(32),r=a(6149);let o=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(e).toLowerCase()),d=e=>{let t=e.length<10?"Password must be at least 10 characters long.":"",a=/[A-Z]/.test(e)?"":"Password must contain at least one uppercase letter.",i=/[a-z]/.test(e)?"":"Password must contain at least one lowercase letter.",s=/[@$!%*?&]/.test(e)?"":"Password must contain at least one special character (@, $, !, %, *, ?, &).";return t||a||i||s},n=e=>/^[A-Za-z -]+$/.test(e),l=(0,i.ZF)({apiKey:"AIzaSyBazoP7ahYdxm2T-0Gxhss_syDE5ovnA1E",authDomain:"watchwave-4f7ab.firebaseapp.com",projectId:"watchwave-4f7ab",storageBucket:"watchwave-4f7ab.appspot.com",messagingSenderId:"164840175759",appId:"1:164840175759:web:4c2e4895c4d333922858fa",measurementId:"G-0MPGFNVFX3"});(0,s.IH)(l);let c=(0,r.v0)(),h="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo",p="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"}};