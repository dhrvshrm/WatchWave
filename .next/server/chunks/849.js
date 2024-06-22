"use strict";exports.id=849,exports.ids=[849],exports.modules={9971:(e,t,r)=>{r.d(t,{Z:()=>ed});var n=r(1367),i=r(5353),a=r(7577),s=r.n(a),o=r(1135),l=r(8752),c=r(8782),u=r(1190),d=r(1703),h=r(7080),p=r(4117),f=r(7382);let m=r(6654).Z;var g=r(5417);let v=!0,y=!1,I=new g.V,b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function w(e){e.metaKey||e.altKey||e.ctrlKey||(v=!0)}function _(){v=!1}function E(){"hidden"===this.visibilityState&&y&&(v=!0)}let S=function(){let e=a.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",w,!0),t.addEventListener("mousedown",_,!0),t.addEventListener("pointerdown",_,!0),t.addEventListener("touchstart",_,!0),t.addEventListener("visibilitychange",E,!0)}},[]),t=a.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return v||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!b[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(y=!0,I.start(100,()=>{y=!1}),t.current=!1,!0)},ref:e}};var T=r(2687),C=r(6220);function k(e,t){var r=Object.create(null);return e&&a.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=t&&(0,a.isValidElement)(e)?t(e):e}),r}function R(e,t,r){return null!=r[t]?r[t]:e.props[t]}var O=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},A=function(e){function t(t,r){var n,i=(n=e.call(this,t,r)||this).handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}(0,T.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var r,n,i=t.children,s=t.handleExited;return{children:t.firstRender?k(e.children,function(t){return(0,a.cloneElement)(t,{onExited:s.bind(null,t),in:!0,appear:R(t,"appear",e),enter:R(t,"enter",e),exit:R(t,"exit",e)})}):(Object.keys(n=function(e,t){function r(r){return r in t?t[r]:e[r]}e=e||{},t=t||{};var n,i=Object.create(null),a=[];for(var s in e)s in t?a.length&&(i[s]=a,a=[]):a.push(s);var o={};for(var l in t){if(i[l])for(n=0;n<i[l].length;n++){var c=i[l][n];o[i[l][n]]=r(c)}o[l]=r(l)}for(n=0;n<a.length;n++)o[a[n]]=r(a[n]);return o}(i,r=k(e.children))).forEach(function(t){var o=n[t];if((0,a.isValidElement)(o)){var l=t in i,c=t in r,u=i[t],d=(0,a.isValidElement)(u)&&!u.props.in;c&&(!l||d)?n[t]=(0,a.cloneElement)(o,{onExited:s.bind(null,o),in:!0,exit:R(o,"exit",e),enter:R(o,"enter",e)}):c||!l||d?c&&l&&(0,a.isValidElement)(u)&&(n[t]=(0,a.cloneElement)(o,{onExited:s.bind(null,o),in:u.props.in,exit:R(o,"exit",e),enter:R(o,"enter",e)})):n[t]=(0,a.cloneElement)(o,{in:!1})}}),n),firstRender:!1}},r.handleExited=function(e,t){var r=k(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var r=(0,i.Z)({},t.children);return delete r[e.key],{children:r}}))},r.render=function(){var e=this.props,t=e.component,r=e.childFactory,i=(0,n.Z)(e,["component","childFactory"]),a=this.state.contextValue,o=O(this.state.children).map(r);return(delete i.appear,delete i.enter,delete i.exit,null===t)?s().createElement(C.Z.Provider,{value:a},o):s().createElement(C.Z.Provider,{value:a},s().createElement(t,i,o))},t}(s().Component);A.propTypes={},A.defaultProps={component:"div",childFactory:function(e){return e}};var N=r(8106),P=r(326),D=r(4647);let L=(0,D.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),x=["center","classes","className"],M=e=>e,U,F,$,j,z=(0,N.F4)(U||(U=M`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),V=(0,N.F4)(F||(F=M`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),B=(0,N.F4)($||($=M`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Z=(0,d.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),H=(0,d.ZP)(function(e){let{className:t,classes:r,pulsate:n=!1,rippleX:i,rippleY:s,rippleSize:l,in:c,onExited:u,timeout:d}=e,[h,p]=a.useState(!1),f=(0,o.Z)(t,r.ripple,r.rippleVisible,n&&r.ripplePulsate),m=(0,o.Z)(r.child,h&&r.childLeaving,n&&r.childPulsate);return c||h||p(!0),a.useEffect(()=>{if(!c&&null!=u){let e=setTimeout(u,d);return()=>{clearTimeout(e)}}},[u,c,d]),(0,P.jsx)("span",{className:f,style:{width:l,height:l,top:-(l/2)+s,left:-(l/2)+i},children:(0,P.jsx)("span",{className:m})})},{name:"MuiTouchRipple",slot:"Ripple"})(j||(j=M`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),L.rippleVisible,z,550,({theme:e})=>e.transitions.easing.easeInOut,L.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,L.child,L.childLeaving,V,550,({theme:e})=>e.transitions.easing.easeInOut,L.childPulsate,B,({theme:e})=>e.transitions.easing.easeInOut),W=a.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:c}=r,u=(0,n.Z)(r,x),[d,h]=a.useState([]),f=a.useRef(0),m=a.useRef(null);a.useEffect(()=>{m.current&&(m.current(),m.current=null)},[d]);let v=a.useRef(!1),y=(0,g.Z)(),I=a.useRef(null),b=a.useRef(null),w=a.useCallback(e=>{let{pulsate:t,rippleX:r,rippleY:n,rippleSize:i,cb:a}=e;h(e=>[...e,(0,P.jsx)(H,{classes:{ripple:(0,o.Z)(l.ripple,L.ripple),rippleVisible:(0,o.Z)(l.rippleVisible,L.rippleVisible),ripplePulsate:(0,o.Z)(l.ripplePulsate,L.ripplePulsate),child:(0,o.Z)(l.child,L.child),childLeaving:(0,o.Z)(l.childLeaving,L.childLeaving),childPulsate:(0,o.Z)(l.childPulsate,L.childPulsate)},timeout:550,pulsate:t,rippleX:r,rippleY:n,rippleSize:i},f.current)]),f.current+=1,m.current=a},[l]),_=a.useCallback((e={},t={},r=()=>{})=>{let n,i,a;let{pulsate:o=!1,center:l=s||t.pulsate,fakeElement:c=!1}=t;if((null==e?void 0:e.type)==="mousedown"&&v.current){v.current=!1;return}(null==e?void 0:e.type)==="touchstart"&&(v.current=!0);let u=c?null:b.current,d=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!l&&void 0!==e&&(0!==e.clientX||0!==e.clientY)&&(e.clientX||e.touches)){let{clientX:t,clientY:r}=e.touches&&e.touches.length>0?e.touches[0]:e;n=Math.round(t-d.left),i=Math.round(r-d.top)}else n=Math.round(d.width/2),i=Math.round(d.height/2);l?(a=Math.sqrt((2*d.width**2+d.height**2)/3))%2==0&&(a+=1):a=Math.sqrt((2*Math.max(Math.abs((u?u.clientWidth:0)-n),n)+2)**2+(2*Math.max(Math.abs((u?u.clientHeight:0)-i),i)+2)**2),null!=e&&e.touches?null===I.current&&(I.current=()=>{w({pulsate:o,rippleX:n,rippleY:i,rippleSize:a,cb:r})},y.start(80,()=>{I.current&&(I.current(),I.current=null)})):w({pulsate:o,rippleX:n,rippleY:i,rippleSize:a,cb:r})},[s,w,y]),E=a.useCallback(()=>{_({},{pulsate:!0})},[_]),S=a.useCallback((e,t)=>{if(y.clear(),(null==e?void 0:e.type)==="touchend"&&I.current){I.current(),I.current=null,y.start(0,()=>{S(e,t)});return}I.current=null,h(e=>e.length>0?e.slice(1):e),m.current=t},[y]);return a.useImperativeHandle(t,()=>({pulsate:E,start:_,stop:S}),[E,_,S]),(0,P.jsx)(Z,(0,i.Z)({className:(0,o.Z)(L.root,l.root,c),ref:b},u,{children:(0,P.jsx)(A,{component:null,exit:!0,children:d})}))});var K=r(6004);function q(e){return(0,K.ZP)("MuiButtonBase",e)}let G=(0,D.Z)("MuiButtonBase",["root","disabled","focusVisible"]),J=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],X=e=>{let{disabled:t,focusVisible:r,focusVisibleClassName:n,classes:i}=e,a=(0,c.Z)({root:["root",t&&"disabled",r&&"focusVisible"]},q,i);return r&&n&&(a.root+=` ${n}`),a},Y=(0,d.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${G.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Q=a.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:l=!1,children:c,className:u,component:d="button",disabled:h=!1,disableRipple:g=!1,disableTouchRipple:v=!1,focusRipple:y=!1,LinkComponent:I="a",onBlur:b,onClick:w,onContextMenu:_,onDragLeave:E,onFocus:T,onFocusVisible:C,onKeyDown:k,onKeyUp:R,onMouseDown:O,onMouseLeave:A,onMouseUp:N,onTouchEnd:D,onTouchMove:L,onTouchStart:x,tabIndex:M=0,TouchRippleProps:U,touchRippleRef:F,type:$}=r,j=(0,n.Z)(r,J),z=a.useRef(null),V=a.useRef(null),B=(0,f.Z)(V,F),{isFocusVisibleRef:Z,onFocus:H,onBlur:K,ref:q}=S(),[G,Q]=a.useState(!1);h&&G&&Q(!1),a.useImperativeHandle(s,()=>({focusVisible:()=>{Q(!0),z.current.focus()}}),[]);let[ee,et]=a.useState(!1);a.useEffect(()=>{et(!0)},[]);let er=ee&&!g&&!h;function en(e,t,r=v){return m(n=>(t&&t(n),!r&&V.current&&V.current[e](n),!0))}a.useEffect(()=>{G&&y&&!g&&ee&&V.current.pulsate()},[g,y,G,ee]);let ei=en("start",O),ea=en("stop",_),es=en("stop",E),eo=en("stop",N),el=en("stop",e=>{G&&e.preventDefault(),A&&A(e)}),ec=en("start",x),eu=en("stop",D),ed=en("stop",L),eh=en("stop",e=>{K(e),!1===Z.current&&Q(!1),b&&b(e)},!1),ep=m(e=>{z.current||(z.current=e.currentTarget),H(e),!0===Z.current&&(Q(!0),C&&C(e)),T&&T(e)}),ef=()=>{let e=z.current;return d&&"button"!==d&&!("A"===e.tagName&&e.href)},em=a.useRef(!1),eg=m(e=>{y&&!em.current&&G&&V.current&&" "===e.key&&(em.current=!0,V.current.stop(e,()=>{V.current.start(e)})),e.target===e.currentTarget&&ef()&&" "===e.key&&e.preventDefault(),k&&k(e),e.target===e.currentTarget&&ef()&&"Enter"===e.key&&!h&&(e.preventDefault(),w&&w(e))}),ev=m(e=>{y&&" "===e.key&&V.current&&G&&!e.defaultPrevented&&(em.current=!1,V.current.stop(e,()=>{V.current.pulsate(e)})),R&&R(e),w&&e.target===e.currentTarget&&ef()&&" "===e.key&&!e.defaultPrevented&&w(e)}),ey=d;"button"===ey&&(j.href||j.to)&&(ey=I);let eI={};"button"===ey?(eI.type=void 0===$?"button":$,eI.disabled=h):(j.href||j.to||(eI.role="button"),h&&(eI["aria-disabled"]=h));let eb=(0,f.Z)(t,q,z),ew=(0,i.Z)({},r,{centerRipple:l,component:d,disabled:h,disableRipple:g,disableTouchRipple:v,focusRipple:y,tabIndex:M,focusVisible:G}),e_=X(ew);return(0,P.jsxs)(Y,(0,i.Z)({as:ey,className:(0,o.Z)(e_.root,u),ownerState:ew,onBlur:eh,onClick:w,onContextMenu:ea,onFocus:ep,onKeyDown:eg,onKeyUp:ev,onMouseDown:ei,onMouseLeave:el,onMouseUp:eo,onDragLeave:es,onTouchEnd:eu,onTouchMove:ed,onTouchStart:ec,ref:eb,tabIndex:h?-1:M,type:$},eI,j,{children:[c,er?(0,P.jsx)(W,(0,i.Z)({ref:B,center:l},U)):null]}))});var ee=r(4641);function et(e){return(0,K.ZP)("MuiButton",e)}let er=(0,D.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),en=a.createContext({}),ei=a.createContext(void 0),ea=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],es=e=>{let{color:t,disableElevation:r,fullWidth:n,size:a,variant:s,classes:o}=e,l={root:["root",s,`${s}${(0,ee.Z)(t)}`,`size${(0,ee.Z)(a)}`,`${s}Size${(0,ee.Z)(a)}`,`color${(0,ee.Z)(t)}`,r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,ee.Z)(a)}`],endIcon:["icon","endIcon",`iconSize${(0,ee.Z)(a)}`]},u=(0,c.Z)(l,et,o);return(0,i.Z)({},o,u)},eo=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),el=(0,d.ZP)(Q,{shouldForwardProp:e=>(0,h.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,ee.Z)(r.color)}`],t[`size${(0,ee.Z)(r.size)}`],t[`${r.variant}Size${(0,ee.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var r,n;let a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],s="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${er.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${er.disabled}`]:(0,i.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,u.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(n=e.palette).getContrastText)?void 0:r.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${er.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${er.disabled}`]:{boxShadow:"none"}}),ec=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,ee.Z)(r.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},eo(e))),eu=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,ee.Z)(r.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},eo(e))),ed=a.forwardRef(function(e,t){let r=a.useContext(en),s=a.useContext(ei),c=(0,l.Z)(r,e),u=(0,p.Z)({props:c,name:"MuiButton"}),{children:d,color:h="primary",component:f="button",className:m,disabled:g=!1,disableElevation:v=!1,disableFocusRipple:y=!1,endIcon:I,focusVisibleClassName:b,fullWidth:w=!1,size:_="medium",startIcon:E,type:S,variant:T="text"}=u,C=(0,n.Z)(u,ea),k=(0,i.Z)({},u,{color:h,component:f,disabled:g,disableElevation:v,disableFocusRipple:y,fullWidth:w,size:_,type:S,variant:T}),R=es(k),O=E&&(0,P.jsx)(ec,{className:R.startIcon,ownerState:k,children:E}),A=I&&(0,P.jsx)(eu,{className:R.endIcon,ownerState:k,children:I});return(0,P.jsxs)(el,(0,i.Z)({ownerState:k,className:(0,o.Z)(r.className,R.root,m,s||""),component:f,disabled:g,focusRipple:!y,focusVisibleClassName:(0,o.Z)(R.focusVisible,b),ref:t,type:S},C,{classes:R,children:[O,d,A]}))})},5103:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(1367),i=r(5353),a=r(7577),s=r(1135),o=r(3428),l=r(6004),c=r(8782),u=r(7920),d=r(7240),h=r(1948);let p=["ownerState"],f=["variants"],m=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function g(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let v=(0,d.Z)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function I({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function b(e,t){let{ownerState:r}=t,a=(0,n.Z)(t,p),s="function"==typeof e?e((0,i.Z)({ownerState:r},a)):e;if(Array.isArray(s))return s.flatMap(e=>b(e,(0,i.Z)({ownerState:r},a)));if(s&&"object"==typeof s&&Array.isArray(s.variants)){let{variants:e=[]}=s,t=(0,n.Z)(s,f);return e.forEach(e=>{let n=!0;"function"==typeof e.props?n=e.props((0,i.Z)({ownerState:r},a,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&a[t]!==e.props[t]&&(n=!1)}),n&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,i.Z)({ownerState:r},a,r)):e.style))}),t}return s}let w=function(e={}){let{themeId:t,defaultTheme:r=v,rootShouldForwardProp:a=g,slotShouldForwardProp:s=g}=e,l=e=>(0,h.Z)((0,i.Z)({},e,{theme:I((0,i.Z)({},e,{defaultTheme:r,themeId:t}))}));return l.__mui_systemSx=!0,(e,c={})=>{var d;let h;(0,u.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:p,slot:f,skipVariantsResolver:v,skipSx:w,overridesResolver:_=(d=y(f))?(e,t)=>t[d]:null}=c,E=(0,n.Z)(c,m),S=void 0!==v?v:f&&"Root"!==f&&"root"!==f||!1,T=w||!1,C=g;"Root"===f||"root"===f?C=a:f?C=s:"string"==typeof e&&e.charCodeAt(0)>96&&(C=void 0);let k=(0,u.default)(e,(0,i.Z)({shouldForwardProp:C,label:h},E)),R=e=>"function"==typeof e&&e.__emotion_real!==e||(0,o.P)(e)?n=>b(e,(0,i.Z)({},n,{theme:I({theme:n.theme,defaultTheme:r,themeId:t})})):e,O=(n,...a)=>{let s=R(n),o=a?a.map(R):[];p&&_&&o.push(e=>{let n=I((0,i.Z)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[p]||!n.components[p].styleOverrides)return null;let a=n.components[p].styleOverrides,s={};return Object.entries(a).forEach(([t,r])=>{s[t]=b(r,(0,i.Z)({},e,{theme:n}))}),_(e,s)}),p&&!S&&o.push(e=>{var n;let a=I((0,i.Z)({},e,{defaultTheme:r,themeId:t}));return b({variants:null==a||null==(n=a.components)||null==(n=n[p])?void 0:n.variants},(0,i.Z)({},e,{theme:a}))}),T||o.push(l);let c=o.length-a.length;if(Array.isArray(n)&&c>0){let e=Array(c).fill("");(s=[...n,...e]).raw=[...n.raw,...e]}let u=k(s,...o);return e.muiName&&(u.muiName=e.muiName),u};return k.withConfig&&(O.withConfig=k.withConfig),O}}();var _=r(9335),E=r(140),S=r(1767),T=r(1561),C=r(326);let k=["component","direction","spacing","divider","children","className","useFlexGap"],R=(0,d.Z)(),O=w("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function A(e){return(0,_.Z)({props:e,name:"MuiStack",defaultTheme:R})}let N=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],P=({ownerState:e,theme:t})=>{let r=(0,i.Z)({display:"flex",flexDirection:"column"},(0,S.k9)({theme:t},(0,S.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,T.hB)(t),i=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),a=(0,S.P$)({values:e.direction,base:i}),s=(0,S.P$)({values:e.spacing,base:i});"object"==typeof a&&Object.keys(a).forEach((e,t,r)=>{if(!a[e]){let n=t>0?a[r[t-1]]:"column";a[e]=n}}),r=(0,o.Z)(r,(0,S.k9)({theme:t},s,(t,r)=>e.useFlexGap?{gap:(0,T.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${N(r?a[r]:e.direction)}`]:(0,T.NA)(n,t)}}))}return(0,S.dt)(t.breakpoints,r)};var D=r(1703),L=r(4117);let x=function(e={}){let{createStyledComponent:t=O,useThemeProps:r=A,componentName:o="MuiStack"}=e,u=()=>(0,c.Z)({root:["root"]},e=>(0,l.ZP)(o,e),{}),d=t(P);return a.forwardRef(function(e,t){let o=r(e),l=(0,E.Z)(o),{component:c="div",direction:h="column",spacing:p=0,divider:f,children:m,className:g,useFlexGap:v=!1}=l,y=(0,n.Z)(l,k),I=u();return(0,C.jsx)(d,(0,i.Z)({as:c,ownerState:{direction:h,spacing:p,useFlexGap:v},ref:t,className:(0,s.Z)(I.root,g)},y,{children:f?function(e,t){let r=a.Children.toArray(e).filter(Boolean);return r.reduce((e,n,i)=>(e.push(n),i<r.length-1&&e.push(a.cloneElement(t,{key:`separator-${i}`})),e),[])}(m,f):m}))})}({createStyledComponent:(0,D.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,L.Z)({props:e,name:"MuiStack"})})},7382:(e,t,r)=>{r.d(t,{Z:()=>n});let n=r(1525).Z},8592:(e,t,r)=>{r.d(t,{Z:()=>n});function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}},7275:(e,t,r)=>{r.d(t,{Z:()=>n});let n=r(7577).useEffect},6654:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7577),i=r(7275);let a=function(e){let t=n.useRef(e);return(0,i.Z)(()=>{t.current=e}),n.useRef((...e)=>(0,t.current)(...e)).current}},1525:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7577),i=r(8592);function a(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,i.Z)(e,t)})},e)}},5417:(e,t,r)=>{r.d(t,{V:()=>s,Z:()=>o});var n=r(7577);let i={},a=[];class s{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new s}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}function o(){var e;let t=function(e,t){let r=n.useRef(i);return r.current===i&&(r.current=e(void 0)),r}(s.create).current;return e=t.disposeEffect,n.useEffect(e,a),t}},5047:(e,t,r)=>{var n=r(7389);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},6220:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7577);let i=r.n(n)().createContext(null)},2687:(e,t,r)=>{function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}r.d(t,{Z:()=>i})},6677:(e,t,r)=>{r.d(t,{Jn:()=>_,KN:()=>T,Mq:()=>S,Xd:()=>v,ZF:()=>E,qX:()=>y,rh:()=>I});var n=r(7752),i=r(5036),a=r(2377),s=r(8088);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",c="0.10.5",u=new i.Yd("@firebase/app"),d="[DEFAULT]",h={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,f=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(r){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function v(e){let t=e.name;if(m.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(m.set(t,e),p.values()))g(r,e);for(let t of f.values())g(t,e);return!0}function y(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function I(e){return void 0!==e.settings}let b=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _="10.12.2";function E(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});if(r||(r=(0,a.aH)()),!r)throw b.create("no-options");let o=p.get(s);if(o){if((0,a.vZ)(r,o.options)&&(0,a.vZ)(i,o.config))return o;throw b.create("duplicate-app",{appName:s})}let l=new n.H0(s);for(let e of m.values())l.addComponent(e);let c=new w(r,i,l);return p.set(s,c),c}function S(e=d){let t=p.get(e);if(!t&&e===d&&(0,a.aH)())return E();if(!t)throw b.create("no-app",{appName:e});return t}function T(e,t,r){var i;let a=null!==(i=h[e])&&void 0!==i?i:e;r&&(a+=`-${r}`);let s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${a}" with version "${t}":`];s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),u.warn(e.join(" "));return}v(new n.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let C="firebase-heartbeat-store",k=null;function R(){return k||(k=(0,s.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(C)}catch(e){console.warn(e)}}}).catch(e=>{throw b.create("idb-open",{originalErrorMessage:e.message})})),k}async function O(e){try{let t=(await R()).transaction(C),r=await t.objectStore(C).get(N(e));return await t.done,r}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function A(e,t){try{let r=(await R()).transaction(C,"readwrite"),n=r.objectStore(C);await n.put(t,N(e)),await r.done}catch(e){if(e instanceof a.ZR)u.warn(e.message);else{let t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function N(e){return`${e.name}!${e.options.appId}`}class P{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=D();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=D(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),x(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),x(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,a.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function D(){return new Date().toISOString().substring(0,10)}class L{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await O(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return A(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function x(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}v(new n.wA("platform-logger",e=>new o(e),"PRIVATE")),v(new n.wA("heartbeat",e=>new P(e),"PRIVATE")),T(l,c,""),T(l,c,"esm2017"),T("fire-js","")},7752:(e,t,r)=>{r.d(t,{H0:()=>o,wA:()=>i});var n=r(2377);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5036:(e,t,r)=>{var n;r.d(t,{Yd:()=>c,in:()=>n});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(n||(n={}));let a={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},s=n.INFO,o={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=o[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},2377:(e,t,r)=>{r.d(t,{$s:()=>L,BH:()=>g,L:()=>l,LL:()=>T,ZR:()=>S,aH:()=>m,b$:()=>b,eu:()=>_,hl:()=>w,m9:()=>x,ne:()=>N,pd:()=>A,q4:()=>f,ru:()=>I,tV:()=>c,uI:()=>y,vZ:()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let a of n){if(!i.includes(a))return!1;let n=t[a],s=r[a];if(k(n)&&k(s)){if(!e(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0},xO:()=>R,z$:()=>v,zI:()=>E,zd:()=>O});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},i=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=i>>2,u=(3&i)<<4|s>>4,d=(15&s)<<2|l>>6,h=63&l;o||(h=64,a||(d=64)),n.push(r[c],r[u],r[d],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,l=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==l)throw new s;let c=i<<2|a>>4;if(n.push(c),64!==o){let e=a<<4&240|o>>2;if(n.push(e),64!==l){let e=o<<6&192|l;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let o=function(e){let t=n(e);return a.encodeByteArray(t,!0)},l=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},u=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"==typeof process||void 0===process.env)return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return u()||d()||h()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},f=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function w(){try{return"object"==typeof indexedDB}catch(e){return!1}}function _(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function E(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class S extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(C,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${a} (${n}).`;return new S(n,s,r)}}let C=/\{\$([^}]+)}/g;function k(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function O(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function A(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function N(e,t){let r=new P(e,t);return r.subscribe.bind(r)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=D),void 0===n.error&&(n.error=D),void 0===n.complete&&(n.complete=D);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}function L(e,t=1e3,r=2){let n=t*Math.pow(r,e);return Math.min(144e5,n+Math.round(.5*n*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e&&e._delegate?e._delegate:e}},32:(e,t,r)=>{let n,i,a,s;r.d(t,{IH:()=>e_});var o=r(6677),l=r(5036),c=r(2377),u=r(7752),d=r(8088);let h="@firebase/installations",p="0.6.7",f=`w:${p}`,m="FIS_v2",g=new c.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function v(e){return e instanceof c.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function I(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function b(e,t){let r=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function _(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=y(e),i=w(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let s={method:"POST",headers:i,body:JSON.stringify({fid:r,authVersion:m,appId:e.appId,sdkVersion:f})},o=await _(()=>fetch(n,s));if(o.ok){let e=await o.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:I(e.authToken)}}throw await b("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k=new Map;function R(e,t){let r=C(e);O(r,t),function(e,t){let r=(!A&&"BroadcastChannel"in self&&((A=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{O(e.data.key,e.data.fid)}),A);r&&r.postMessage({key:e,fid:t}),0===k.size&&A&&(A.close(),A=null)}(r,t)}function O(e,t){let r=k.get(e);if(r)for(let e of r)e(t)}let A=null,N="firebase-installations-store",P=null;function D(){return P||(P=(0,d.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(N)}})),P}async function L(e,t){let r=C(e),n=(await D()).transaction(N,"readwrite"),i=n.objectStore(N),a=await i.get(r);return await i.put(t,r),await n.done,a&&a.fid===t.fid||R(e,t.fid),t}async function x(e){let t=C(e),r=(await D()).transaction(N,"readwrite");await r.objectStore(N).delete(t),await r.done}async function M(e,t){let r=C(e),n=(await D()).transaction(N,"readwrite"),i=n.objectStore(N),a=await i.get(r),s=t(a);return void 0===s?await i.delete(r):await i.put(s,r),await n.done,s&&(!a||a.fid!==s.fid)&&R(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e){let t;let r=await M(e.appConfig,r=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=F(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:$(e)}:{installationEntry:t}}(e,z(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return T.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function F(e,t){try{let r=await E(e,t);return L(e.appConfig,r)}catch(r){throw v(r)&&409===r.customData.serverCode?await x(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function $(e){let t=await j(e.appConfig);for(;1===t.registrationStatus;)await S(100),t=await j(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await U(e);return r||t}return t}function j(e){return M(e,e=>{if(!e)throw g.create("installation-not-found");return z(e)})}function z(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${y(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=w(e);return r.append("Authorization",`${m} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let s={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:f,appId:e.appId}})},o=await _(()=>fetch(n,s));if(o.ok)return I(await o.json());throw await b("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){let r;let n=await M(e.appConfig,n=>{var i;if(!K(n))throw g.create("not-registered");let a=n.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1===a.requestStatus)return r=Z(e,t),n;{if(!navigator.onLine)throw g.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=W(e,t),t}});return r?await r:n.authToken}async function Z(e,t){let r=await H(e.appConfig);for(;1===r.authToken.requestStatus;)await S(100),r=await H(e.appConfig);let n=r.authToken;return 0===n.requestStatus?B(e,t):n}function H(e){return M(e,e=>{var t;if(!K(e))throw g.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W(e,t){try{let r=await V(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await L(e.appConfig,n),r}catch(r){if(v(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await x(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,r)}throw r}}function K(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){let{installationEntry:t,registrationPromise:r}=await U(e);return r?r.catch(console.error):B(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){return await J(e),(await B(e,t)).token}async function J(e){let{registrationPromise:t}=await U(e);t&&await t}function X(e){return g.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="installations";(0,o.Xd)(new u.wA(Y,e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw X("App Configuration");if(!e.name)throw X("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw X(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=(0,o.qX)(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,o.Xd)(new u.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=(0,o.qX)(t,Y).getImmediate();return{getId:()=>q(r),getToken:e=>G(r,e)}},"PRIVATE")),(0,o.KN)(h,p),(0,o.KN)(h,p,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q="analytics",ee="https://www.googletagmanager.com/gtag/js",et=new l.Yd("@firebase/analytics"),er=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){if(!e.startsWith(ee)){let t=er.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function ei(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ea(e,t,r,n,i,a){let s=n[i];try{if(s)await t[s];else{let e=(await ei(r)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){et.error(e)}e("config",i,a)}async function es(e,t,r,n,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let n=await ei(r);for(let r of e){let e=n.find(e=>e.measurementId===r),i=e&&t[e.appId];if(i)a.push(i);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",n,i||{})}catch(e){et.error(e)}}class eo{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}let el=new eo;async function ec(e){var t;let{appId:r,apiKey:n}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),s=await fetch(a,i);if(200!==s.status&&304!==s.status){let e="";try{let r=await s.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw er.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function eu(e,t=el,r){let{appId:n,apiKey:i,measurementId:a}=e.options;if(!n)throw er.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw er.create("no-api-key")}let s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new eh;return setTimeout(async()=>{o.abort()},void 0!==r?r:6e4),ed({appId:n,apiKey:i,measurementId:a},s,o,t)}async function ed(e,{throttleEndTimeMillis:t,backoffCount:r},n,i=el){var a;let{appId:s,measurementId:o}=e;try{await new Promise((e,r)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));n.addEventListener(()=>{clearTimeout(i),r(er.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await ec(e);return i.deleteThrottleMetadata(s),t}catch(u){if(!function(e){if(!(e instanceof c.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(i.deleteThrottleMetadata(s),o)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:s,measurementId:o};throw u}let t=503===Number(null===(a=null==u?void 0:u.customData)||void 0===a?void 0:a.httpStatus)?(0,c.$s)(r,i.intervalMillis,30):(0,c.$s)(r,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return i.setThrottleMetadata(s,l),et.debug(`Calling attemptFetch again in ${t} millis`),ed(e,l,n,i)}}class eh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ep(e,t,r,n,i){if(i&&i.global){e("event",r,n);return}{let i=await t;e("event",r,Object.assign(Object.assign({},n),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(){if(!(0,c.hl)())return et.warn(er.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(e){return et.warn(er.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function em(e,t,r,a,s,o,l){var c;let u=eu(e);u.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>et.error(e)),t.push(u);let d=ef().then(e=>e?a.getId():void 0),[h,p]=await Promise.all([u,d]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(ee)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var r,n;let i;let a=(r="firebase-js-sdk-policy",n={createScriptURL:en},window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,n)),i),s=document.createElement("script"),o=`${ee}?l=${e}&id=${t}`;s.src=a?null==a?void 0:a.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}(o,h.measurementId),i&&(s("consent","default",i),i=void 0),s("js",new Date);let f=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return f.origin="firebase",f.update=!0,null!=p&&(f.firebase_id=p),s("config",h.measurementId,f),n&&(s("set",n),n=void 0),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.app=e}_delete(){return delete ev[this.app.options.appId],Promise.resolve()}}let ev={},ey=[],eI={},eb="dataLayer",ew=!1;function e_(e=(0,o.Mq)()){e=(0,c.m9)(e);let t=(0,o.qX)(e,Q);return t.isInitialized()?t.getImmediate():function(e,t={}){let r=(0,o.qX)(e,Q);if(r.isInitialized()){let e=r.getImmediate();if((0,c.vZ)(t,r.getOptions()))return e;throw er.create("already-initialized")}return r.initialize({options:t})}(e)}let eE="@firebase/analytics",eS="0.10.4";(0,o.Xd)(new u.wA(Q,(e,{options:t})=>(function(e,t,r){!function(){let e=[];if((0,c.ru)()&&e.push("This is a browser extension environment."),(0,c.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=er.create("invalid-analytics-context",{errorInfo:t});et.warn(r.message)}}();let n=e.options.appId;if(!n)throw er.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw er.create("no-api-key")}if(null!=ev[n])throw er.create("already-exists",{id:n});if(!ew){var i,o;let e,t;e=[],Array.isArray(window[eb])?e=window[eb]:window[eb]=e;let{wrappedGtag:r,gtagCore:n}=(i="gtag",t=function(...e){window[eb].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(o=t,async function(e,...t){try{if("event"===e){let[e,r]=t;await es(o,ev,ey,e,r)}else if("config"===e){let[e,r]=t;await ea(o,ev,ey,eI,e,r)}else if("consent"===e){let[e,r]=t;o("consent",e,r)}else if("get"===e){let[e,r,n]=t;o("get",e,r,n)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){et.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});s=r,a=n,ew=!0}return ev[n]=em(e,ey,eI,t,a,eb,r),new eg(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),(0,o.Xd)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(Q).getImmediate();return{logEvent:(e,r,n)=>{var i;return i=t,void(i=(0,c.m9)(i),ep(s,ev[i.app.options.appId],e,r,n).catch(e=>et.error(e)))}}}catch(e){throw er.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,o.KN)(eE,eS),(0,o.KN)(eE,eS,"esm2017")},2585:(e,t,r)=>{r.d(t,{ZF:()=>n.ZF});var n=r(6677);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.12.2","app")},6149:(e,t,r)=>{r.d(t,{Xb:()=>eZ,v0:()=>e0,e5:()=>eH,w7:()=>eK});var n=r(6677),i=r(2377);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var s=r(7752),o=r(3122),l=r(5036);function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let u=new i.LL("auth","Firebase",c()),d=new l.Yd("@firebase/auth");function h(e,...t){d.logLevel<=l.in.ERROR&&d.error(`Auth (${n.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw v(e,...t)}function f(e,...t){return v(e,...t)}function m(e,t,r){let n=Object.assign(Object.assign({},c()),{[t]:r});return new i.LL("auth","Firebase",n).create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return u.create(e,...t)}function y(e,t,...r){if(!e)throw v(t,...r)}function I(e){let t="INTERNAL ASSERTION FAILED: "+e;throw h(t),Error(t)}function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||I(r),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===b()||"https:"===b()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void I("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void I("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void I("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=new w(3e4,6e4);function T(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,r,n,a={}){return k(e,a,async()=>{let a={},s={};n&&("GET"===t?s=n:a={body:JSON.stringify(n)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),_.fetch()(O(e,e.config.apiHost,r,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function k(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},E),t);try{let t=new A(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw N(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{let[t,r]=(i.ok?a.errorMessage:a.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw N(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===t)throw N(e,"email-already-in-use",a);if("USER_DISABLED"===t)throw N(e,"user-disabled",a);let s=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw m(e,s,r);p(e,s)}}catch(t){if(t instanceof i.ZR)throw t;p(e,"network-request-failed",{message:String(t)})}}async function R(e,t,r,n,i={}){let a=await C(e,t,r,n,i);return"mfaPendingCredential"in a&&p(e,"multi-factor-auth-required",{_serverResponse:a}),a}function O(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||I(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}(e.config,i):`${e.config.apiScheme}://${i}`}class A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(f(this.auth,"network-request-failed")),S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function N(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=f(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return void 0!==e&&void 0!==e.enterprise}class D{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return C(e,"GET","/v2/recaptchaConfig",T(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),a=j(n);y(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");let s="object"==typeof a.firebase?a.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:a,token:n,authTime:U($(a.auth_time)),issuedAtTime:U($(a.iat)),expirationTime:U($(a.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function $(e){return 1e3*Number(e)}function j(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return h("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return h("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return h("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function z(e){let t=j(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;let r=e.auth,n=await e.getIdToken(),i=await V(e,M(r,{idToken:n}));y(null==i?void 0:i.users.length,r,"internal-error");let a=i.users[0];e._notifyReloadListener(a);let s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?K(a.providerUserInfo):[],o=[...e.providerData.filter(e=>!s.some(t=>t.providerId===e.providerId)),...s],l=e.isAnonymous,c=!(e.email&&a.passwordHash)&&!(null==o?void 0:o.length);Object.assign(e,{uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Z(a.createdAt,a.lastLoginAt),isAnonymous:!!l&&c})}async function W(e){let t=(0,i.m9)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function K(e){return e.map(e=>{var{providerId:t}=e,r=a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){let r=await k(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:a}=e.config,s=O(e,n,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function G(e,t){return C(e,"POST","/v2/accounts:revokeToken",T(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(0!==e.length,"internal-error");let t=z(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(y(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await q(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,a=new J;return r&&(y("string"==typeof r,"internal-error",{appName:e}),a.refreshToken=r),n&&(y("string"==typeof n,"internal-error",{appName:e}),a.accessToken=n),i&&(y("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new J,this.toJSON())}_performRefresh(){return I("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Y{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await V(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return W(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,n.rh)(this.auth.app))return Promise.reject(g(this.auth));let e=await this.getIdToken();return await V(this,x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,a,s,o,l,c;let u=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(a=t.photoURL)&&void 0!==a?a:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:I,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=t;y(I&&E,e,"internal-error");let S=J.fromJSON(this.name,E);y("string"==typeof I,e,"internal-error"),X(u,e.name),X(d,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof w,e,"internal-error"),X(h,e.name),X(p,e.name),X(f,e.name),X(m,e.name),X(g,e.name),X(v,e.name);let T=new Y({uid:I,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new J;n.updateFromServerResponse(t);let i=new Y({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await H(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];y(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?K(n.providerUserInfo):[],a=!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length),s=new J;s.updateFromIdToken(r);let o=new Y({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:a});return Object.assign(o,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new Z(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length)}),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q=new Map;function ee(e){var t,r;t="Expected a class definition",e instanceof Function||I(t);let n=Q.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||I(r)):(n=new e,Q.set(e,n)),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t,r){return`firebase:${e}:${t}:${r}`}et.type="NONE";class en{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=er(this.userKey,n.apiKey,i),this.fullPersistenceKey=er("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new en(ee(et),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||ee(et),a=er(r,e.config.apiKey,e.name),s=null;for(let r of t)try{let t=await r._get(a);if(t){let n=Y._fromJSON(e,t);r!==i&&(s=n),i=r;break}}catch(e){}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],s&&await i._set(a,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new en(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=(0,i.z$)()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(function(e=(0,i.z$)()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=(0,i.z$)()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=(0,i.z$)()){return/webos/i.test(e)}(t))return"Webos";if(function(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=(0,i.z$)()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=(0,i.z$)()){return/android/i.test(e)}(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e,t=[]){let r;switch(e){case"Browser":r=ei((0,i.z$)());break;case"Worker":r=`${ei((0,i.z$)())}-${e}`;break;default:r=e}let a=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${n.Jn}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t={}){return C(e,"GET","/v2/passwordPolicy",T(e,t))}class el{constructor(e){var t,r,n,i;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=a.minPasswordLength)&&void 0!==t?t:6,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),void 0!==a.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),void 0!==a.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),void 0!==a.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),void 0!==a.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,a,s;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(r=o.meetsMaxPasswordLength)||void 0===r||r),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(a=o.containsNumericCharacter)||void 0===a||a),o.isValid&&(o.isValid=null===(s=o.containsNonAlphanumericCharacter)||void 0===s||s),o}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new es(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ee(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await M(this,{idToken:e}),r=await Y._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,n.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);(!r||r===n)&&(null==s?void 0:s.user)&&(i=s.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,n.rh)(this.app))return Promise.reject(g(this));let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,n.rh)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,n.rh)(this.app)?Promise.reject(g(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new el(await eo(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await G(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ee(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),a=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(s,this,"internal-error"),s.then(()=>{a||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{a=!0,i()}}{let r=e.addObserver(t);return()=>{a=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ea(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){d.logLevel<=l.in.WARN&&d.warn(`Auth (${n.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eu(e){return(0,i.m9)(e)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};class ep{constructor(e){this.type="recaptcha-enterprise",this.auth=eu(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{L(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new D(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;P(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&P(window.grecaptcha))n(r,e,i);else{var a;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eh.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(a=t,eh.loadJS(a)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ef(e,t,r,n=!1){let i;let a=new ep(e);try{i=await a.verify(r)}catch(e){i=await a.verify(r,!0)}let s=Object.assign({},t);return n?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function em(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await ef(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await ef(e,t,r,"getOobCode"===r);return n(e,i)}}function eg(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ev(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return I("not implemented")}_getIdTokenResponse(e){return I("not implemented")}_linkToIdToken(e,t){return I("not implemented")}_getReauthenticationResolver(e){return I("not implemented")}}async function eI(e,t){return C(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",T(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",T(e,t))}async function e_(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",T(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends ey{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eE(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eE(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return em(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eb);case"emailLink":return ew(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return em(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eI);case"emailLink":return e_(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",T(e,t))}class eT extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eT(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eT(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return eS(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eS(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eS(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}class eC{constructor(e){var t,r,n,a,s,o;let l=(0,i.zd)((0,i.pd)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(r=l.oobCode)&&void 0!==r?r:null,d=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);y(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=null!==(a=l.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id;return(n?(0,i.zd)((0,i.pd)(n)).link:null)||n||r||t||e}(e);try{return new eC(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.providerId=ek.PROVIDER_ID}static credential(e,t){return eE._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eC.parseLink(t);return y(r,"argument-error"),eE._fromEmailAndCode(e,r.code,r.tenantId)}}ek.PROVIDER_ID="password",ek.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ek.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends eR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA extends eO{constructor(){super("facebook.com")}static credential(e){return eT._fromParams({providerId:eA.PROVIDER_ID,signInMethod:eA.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eA.credentialFromTaggedObject(e)}static credentialFromError(e){return eA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eA.credential(e.oauthAccessToken)}catch(e){return null}}}eA.FACEBOOK_SIGN_IN_METHOD="facebook.com",eA.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN extends eO{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eT._fromParams({providerId:eN.PROVIDER_ID,signInMethod:eN.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eN.credentialFromTaggedObject(e)}static credentialFromError(e){return eN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eN.credential(t,r)}catch(e){return null}}}eN.GOOGLE_SIGN_IN_METHOD="google.com",eN.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends eO{constructor(){super("github.com")}static credential(e){return eT._fromParams({providerId:eP.PROVIDER_ID,signInMethod:eP.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eP.credentialFromTaggedObject(e)}static credentialFromError(e){return eP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eP.credential(e.oauthAccessToken)}catch(e){return null}}}eP.GITHUB_SIGN_IN_METHOD="github.com",eP.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends eO{constructor(){super("twitter.com")}static credential(e,t){return eT._fromParams({providerId:eD.PROVIDER_ID,signInMethod:eD.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eD.credentialFromTaggedObject(e)}static credentialFromError(e){return eD.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eD.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(e,t){return R(e,"POST","/v1/accounts:signUp",T(e,t))}eD.TWITTER_SIGN_IN_METHOD="twitter.com",eD.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new ex({user:await Y._fromIdTokenResponse(e,r,n),providerId:eM(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new ex({user:e,providerId:eM(r),_tokenResponse:r,operationType:t})}}function eM(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eU.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eU(e,t,r,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF(e,t,r=!1){var i,a,s,o;if((0,n.rh)(e.app))return Promise.reject(g(e));let l="signIn",c=await (i=e,a=l,s=t,("reauthenticate"===a?s._getReauthenticationResolver(i):s._getIdTokenResponse(i)).catch(e=>{if("auth/multi-factor-auth-required"===e.code)throw eU._fromErrorAndOperation(i,e,a,void 0);throw e})),u=await ex._fromIdTokenResponse(e,l,c);return r||await e._updateCurrentUser(u.user),u}async function e$(e,t){return eF(eu(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ez._fromServerResponse(e,t):"totpInfo"in t?eV._fromServerResponse(e,t):p(e,"internal-error")}}class ez extends ej{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ez(t)}}class eV extends ej{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new eV(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eB(e){let t=eu(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eZ(e,t,r){if((0,n.rh)(e.app))return Promise.reject(g(e));let i=eu(e),a=em(i,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eL),s=await a.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&eB(e),t}),o=await ex._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(o.user),o}function eH(e,t,r){return(0,n.rh)(e.app)?Promise.reject(g(e)):e$((0,i.m9)(e),ek.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&eB(e),t})}class eW{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}function eK(e){return(0,i.m9)(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new eq("enroll",e,t)}static _fromMfaPendingCredential(e){return new eq("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return eq._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return eq._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){let r=eu(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map(e=>ej._fromServerResponse(r,e));y(n.mfaPendingCredential,r,"internal-error");let a=eq._fromMfaPendingCredential(n.mfaPendingCredential);return new eG(a,i,async e=>{let i=await e._process(r,a);delete n.mfaInfo,delete n.mfaPendingCredential;let s=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":let o=await ex._fromIdTokenResponse(r,t.operationType,s);return await r._updateCurrentUser(o.user),o;case"reauthenticate":return y(t.user,r,"internal-error"),ex._forOperation(t.user,t.operationType,s);default:p(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}class eJ{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>ej._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new eJ(e)}async getSession(){return eq._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){let r=await this.getSession(),n=await V(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,r=await this.user.getIdToken();try{var n,i;let e=await V(this.user,(n=this.user.auth,i={idToken:r,mfaEnrollmentId:t},C(n,"POST","/v2/accounts/mfaEnrollment:withdraw",T(n,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}new WeakMap;var eX="@firebase/auth",eY="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function e0(e=(0,n.Mq)()){let t=(0,n.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,n.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),t=r.getOptions();if((0,i.vZ)(t,{}))return e;p(e,"already-initialized")}return r.initialize({options:void 0})}(e),a=(0,i.q4)("auth");return a&&function(e,t,r){let n=eu(e);y(n._canInitEmulator,n,"emulator-config-failed"),y(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=eg(t),{host:a,port:s}=function(e){let t=eg(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:ev(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:ev(t)}}}(t),o=null===s?"":`:${s}`;n.config.emulator={url:`${i}//${a}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${a}`),r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_.initialize(o.fetch,o.Headers,o.Response),function(e){(0,n.Xd)(new s.wA("auth",(t,{options:r})=>{let n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});let l=new ec(n,i,a,{apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ea(e)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ee);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,n.Xd)(new s.wA("auth-internal",e=>new eQ(eu(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,n.KN)(eX,eY,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(e)),(0,n.KN)(eX,eY,"esm2017")}("Node"),f("operation-not-supported-in-this-environment"),ec.prototype.setPersistence=async()=>{};class e1{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return I("unexpected MultiFactorSessionType")}}}class e2{static assertionForEnrollment(e,t){return e5._fromSecret(e,t)}static assertionForSignIn(e,t){return e5._fromEnrollmentId(e,t)}static async generateSecret(e){var t,r;y(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let n=await C(r=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",T(r,{idToken:e.credential,totpEnrollmentInfo:{}}));return e7._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}e2.FACTOR_ID="totp";class e5 extends e1{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new e5(t,void 0,e)}static _fromEnrollmentId(e,t){return new e5(t,e)}async _finalizeEnroll(e,t,r){return y(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",T(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",T(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class e7{constructor(e,t,r,n,i,a,s){this.sessionInfo=a,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new e7(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(e6(e)||e6(t))&&(n=!0),n&&(e6(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),e6(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function e6(e){return void 0===e||(null==e?void 0:e.length)===0}},8088:(e,t,r)=>{let n,i,a;r.d(t,{X3:()=>m});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,h={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return p(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(p(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(u.has(e))return u.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(f(this),e),p(o.get(this))}:function(...e){return p(t.apply(f(this),e))}:function(e,...r){let n=t.call(f(this),e,...r);return c.set(n,e.sort?e.sort():[e]),p(n)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,h):t;return r!==e&&(u.set(e,r),d.set(r,e)),r}let f=e=>d.get(e);function m(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let s=indexedDB.open(e,t),o=p(s);return n&&s.addEventListener("upgradeneeded",e=>{n(p(s.result),e.oldVersion,e.newVersion,p(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}let g=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],y=new Map;function I(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=v.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||g.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),s=a.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&a.done]))[0]};return y.set(t,a),a}h={...a=h,get:(e,t,r)=>I(e,t)||a.get(e,t,r),has:(e,t)=>!!I(e,t)||a.has(e,t)}}};