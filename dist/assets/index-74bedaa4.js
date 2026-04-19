(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="149",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,Oo=1,Ku=2,pc=1,Ju=2,mr=3,Gn=0,ze=1,On=2,Un=0,Wi=1,Pa=2,Fo=3,No=4,Qu=5,Bi=100,th=101,eh=102,zo=103,Uo=104,nh=200,ih=201,rh=202,sh=203,mc=204,gc=205,ah=206,oh=207,lh=208,ch=209,uh=210,hh=0,fh=1,dh=2,La=3,ph=4,mh=5,gh=6,_h=7,_c=0,xh=1,vh=2,An=0,yh=1,Mh=2,Sh=3,bh=4,wh=5,xc=300,ji=301,Zi=302,Da=303,Ra=304,Es=306,Ia=1e3,sn=1001,Oa=1002,Me=1003,Bo=1004,ks=1005,je=1006,Th=1007,br=1008,fi=1009,Eh=1010,Ah=1011,vc=1012,Ch=1013,ri=1014,si=1015,wr=1016,Ph=1017,Lh=1018,Hi=1020,Dh=1021,an=1023,Rh=1024,Ih=1025,oi=1026,$i=1027,Oh=1028,Fh=1029,Nh=1030,zh=1031,Uh=1033,Gs=33776,Vs=33777,Ws=33778,Hs=33779,ko=35840,Go=35841,Vo=35842,Wo=35843,Bh=36196,Ho=37492,Xo=37496,qo=37808,Yo=37809,jo=37810,Zo=37811,$o=37812,Ko=37813,Jo=37814,Qo=37815,tl=37816,el=37817,nl=37818,il=37819,rl=37820,sl=37821,Xs=36492,kh=36283,al=36284,ol=36285,ll=36286,di=3e3,Gt=3001,Gh=3200,Vh=3201,Wh=0,Hh=1,hn="srgb",Tr="srgb-linear",qs=7680,Xh=519,cl=35044,ul="300 es",Fa=1035;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,hl=180/Math.PI;function Rr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[o&255]+de[o>>8&255]+de[o>>16&255]+de[o>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function we(o,t,e){return Math.max(t,Math.min(e,o))}function qh(o,t){return(o%t+t)%t}function js(o,t,e){return(1-e)*o+e*t}function fl(o){return(o&o-1)===0&&o!==0}function Na(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Br(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function De(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],h=i[0],p=i[3],v=i[6],M=i[1],_=i[4],S=i[7],y=i[2],E=i[5],C=i[8];return r[0]=a*h+s*M+l*y,r[3]=a*p+s*_+l*E,r[6]=a*v+s*S+l*C,r[1]=c*h+u*M+d*y,r[4]=c*p+u*_+d*E,r[7]=c*v+u*S+d*C,r[2]=f*h+m*M+g*y,r[5]=f*p+m*_+g*E,r[8]=f*v+m*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=u*a-s*c,f=s*l-u*r,m=c*r-a*l,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return t[0]=d*h,t[1]=(i*c-u*n)*h,t[2]=(s*n-i*a)*h,t[3]=f*h,t[4]=(u*e-i*l)*h,t[5]=(i*r-s*e)*h,t[6]=m*h,t[7]=(n*l-c*e)*h,t[8]=(a*e-n*r)*h,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Ne;function yc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function gs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function li(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const $s={[hn]:{[Tr]:li},[Tr]:{[hn]:ls}},ve={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if($s[t]&&$s[t][e]!==void 0){const n=$s[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},en={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Ks(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Gr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=qh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ks(a,r,t+1/3),this.g=Ks(a,r,t),this.b=Ks(a,r,t-1/3)}return ve.toWorkingColorSpace(this,i),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ve.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ve.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ve.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ve.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=hn){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ve.fromWorkingColorSpace(Gr(this,Qt),t),we(Qt.r*255,0,255)<<16^we(Qt.g*255,0,255)<<8^we(Qt.b*255,0,255)<<0}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(Gr(this,Qt),e);const n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(Gr(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=hn){return ve.fromWorkingColorSpace(Gr(this,Qt),t),t!==hn?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(kr);const n=js(en.h,kr.h,e),i=js(en.s,kr.s,e),r=js(en.l,kr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}zt.NAMES=Mc;let wi;class Sc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=gs("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class bc{constructor(t=null){this.isSource=!0,this.uuid=Rr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Sc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Ue extends vi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=sn,i=sn,r=je,a=br,s=an,l=fi,c=Ue.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Rr(),this.name="",this.source=new bc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=xc;Ue.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],h=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,S=(m+1)/2,y=(v+1)/2,E=(u+f)/4,C=(d+h)/4,x=(g+p)/4;return _>S&&_>y?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=C/n):S>y?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=x/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-h)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends vi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wc extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],h=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=h;return}if(d!==h||l!==f||c!==m||u!==g){let p=1-s;const v=l*f+c*m+u*g+d*h,M=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),E=Math.atan2(y,v*M);p=Math.sin(p*E)/y,s=Math.sin(s*E)/y}const S=s*M;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,d=d*p+h*S,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-s*m,t[e+2]=c*g+u*m+s*f-l*d,t[e+3]=u*g-s*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),d=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,d=l*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=c*l+f*-r+u*-s-d*-a,this.y=u*l+f*-a+d*-r-c*-s,this.z=d*l+f*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new F,dl=new mi;class Ir{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],d=t[l+1],f=t[l+2];u<e&&(e=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>a&&(a=d),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),d=t.getY(l),f=t.getZ(l);u<e&&(e=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>a&&(a=d),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Zn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Zn)}else n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox),ta.applyMatrix4(t.matrixWorld),this.union(ta);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Vr.subVectors(this.max,or),Ti.subVectors(t.a,or),Ei.subVectors(t.b,or),Ai.subVectors(t.c,or),Ln.subVectors(Ei,Ti),Dn.subVectors(Ai,Ei),$n.subVectors(Ti,Ai);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-$n.z,$n.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,$n.z,0,-$n.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-$n.y,$n.x,0];return!ea(e,Ti,Ei,Ai,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ti,Ei,Ai,Vr))?!1:(Wr.crossVectors(Ln,Dn),e=[Wr.x,Wr.y,Wr.z],ea(e,Ti,Ei,Ai,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Zn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new F,new F,new F,new F,new F,new F,new F,new F],Zn=new F,ta=new Ir,Ti=new F,Ei=new F,Ai=new F,Ln=new F,Dn=new F,$n=new F,or=new F,Vr=new F,Wr=new F,Kn=new F;function ea(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Kn.fromArray(o,r);const s=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Zh=new Ir,lr=new F,na=new F;class As{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(na)),this.expandByPoint(lr.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new F,ia=new F,Hr=new F,Rn=new F,ra=new F,Xr=new F,sa=new F;class Tc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.direction).multiplyScalar(e).add(this.origin),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),s=Rn.dot(this.direction),l=-Rn.dot(Hr),c=Rn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-s,f=a*s-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const h=1/u;d*=h,f*=h,m=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+s)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+s)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Hr).multiplyScalar(f).add(ia),m}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(s=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){ra.subVectors(e,t),Xr.subVectors(n,t),sa.crossVectors(ra,Xr);let a=this.direction.dot(sa),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=s*this.direction.dot(Xr.crossVectors(Rn,Xr));if(l<0)return null;const c=s*this.direction.dot(ra.cross(Rn));if(c<0||l+c>a)return null;const u=-s*Rn.dot(sa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,d,f,m,g,h,p){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=s,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=f,v[3]=m,v[7]=g,v[11]=h,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*d,g=s*u,h=s*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-h*c,e[9]=-s*l,e[2]=h-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,g=c*u,h=c*d;e[0]=f+h*s,e[4]=g*s-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=h+f*s,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,g=c*u,h=c*d;e[0]=f-h*s,e[4]=-a*d,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=h-f*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*d,g=s*u,h=s*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+h,e[1]=l*d,e[5]=h*c+f,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=s*l,h=s*c;e[0]=l*u,e[4]=h-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-h*d}else if(t.order==="XZY"){const f=a*l,m=a*c,g=s*l,h=s*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+h,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=s*u,e[10]=h*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Kh)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),In.crossVectors(n,Re),In.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),In.crossVectors(n,Re)),In.normalize(),qr.crossVectors(Re,In),i[0]=In.x,i[4]=qr.x,i[8]=Re.x,i[1]=In.y,i[5]=qr.y,i[9]=Re.y,i[2]=In.z,i[6]=qr.z,i[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],h=n[6],p=n[10],v=n[14],M=n[3],_=n[7],S=n[11],y=n[15],E=i[0],C=i[4],x=i[8],b=i[12],L=i[1],B=i[5],q=i[9],I=i[13],R=i[2],k=i[6],j=i[10],Z=i[14],V=i[3],J=i[7],K=i[11],ut=i[15];return r[0]=a*E+s*L+l*R+c*V,r[4]=a*C+s*B+l*k+c*J,r[8]=a*x+s*q+l*j+c*K,r[12]=a*b+s*I+l*Z+c*ut,r[1]=u*E+d*L+f*R+m*V,r[5]=u*C+d*B+f*k+m*J,r[9]=u*x+d*q+f*j+m*K,r[13]=u*b+d*I+f*Z+m*ut,r[2]=g*E+h*L+p*R+v*V,r[6]=g*C+h*B+p*k+v*J,r[10]=g*x+h*q+p*j+v*K,r[14]=g*b+h*I+p*Z+v*ut,r[3]=M*E+_*L+S*R+y*V,r[7]=M*C+_*B+S*k+y*J,r[11]=M*x+_*q+S*j+y*K,r[15]=M*b+_*I+S*Z+y*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],h=t[7],p=t[11],v=t[15];return g*(+r*l*d-i*c*d-r*s*f+n*c*f+i*s*m-n*l*m)+h*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+e*c*d-e*s*m-r*a*d+n*a*m+r*s*u-n*c*u)+v*(-i*s*u-e*l*d+e*s*f+i*a*d-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],h=t[13],p=t[14],v=t[15],M=d*p*c-h*f*c+h*l*m-s*p*m-d*l*v+s*f*v,_=g*f*c-u*p*c-g*l*m+a*p*m+u*l*v-a*f*v,S=u*h*c-g*d*c+g*s*m-a*h*m-u*s*v+a*d*v,y=g*d*l-u*h*l-g*s*f+a*h*f+u*s*p-a*d*p,E=e*M+n*_+i*S+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=M*C,t[1]=(h*f*r-d*p*r-h*i*m+n*p*m+d*i*v-n*f*v)*C,t[2]=(s*p*r-h*l*r+h*i*c-n*p*c-s*i*v+n*l*v)*C,t[3]=(d*l*r-s*f*r-d*i*c+n*f*c+s*i*m-n*l*m)*C,t[4]=_*C,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*v+e*f*v)*C,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*v-e*l*v)*C,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*m+e*l*m)*C,t[8]=S*C,t[9]=(g*d*r-u*h*r-g*n*m+e*h*m+u*n*v-e*d*v)*C,t[10]=(a*h*r-g*s*r+g*n*c-e*h*c-a*n*v+e*s*v)*C,t[11]=(u*s*r-a*d*r-u*n*c+e*d*c+a*n*m-e*s*m)*C,t[12]=y*C,t[13]=(u*h*i-g*d*i+g*n*f-e*h*f-u*n*p+e*d*p)*C,t[14]=(g*s*i-a*h*i-g*n*l+e*h*l+a*n*p-e*s*p)*C,t[15]=(a*d*i-u*s*i+u*n*l-e*d*l-a*n*f+e*s*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,d=s+s,f=r*c,m=r*u,g=r*d,h=a*u,p=a*d,v=s*d,M=l*c,_=l*u,S=l*d,y=n.x,E=n.y,C=n.z;return i[0]=(1-(h+v))*y,i[1]=(m+S)*y,i[2]=(g-_)*y,i[3]=0,i[4]=(m-S)*E,i[5]=(1-(f+v))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+_)*C,i[9]=(p-M)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ci.set(i[0],i[1],i[2]).length();const a=Ci.set(i[4],i[5],i[6]).length(),s=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/r,u=1/a,d=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new F,nn=new oe,$h=new F(0,0,0),Kh=new F(1,1,1),In=new F,qr=new F,Re=new F,pl=new oe,ml=new mi;class Cs{constructor(t=0,e=0,n=0,i=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(we(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jh=0;const gl=new F,Pi=new mi,yn=new oe,Yr=new F,cr=new F,Qh=new F,tf=new mi,_l=new F(1,0,0),xl=new F(0,1,0),vl=new F(0,0,1),ef={type:"added"},yl={type:"removed"};class Se extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new F,e=new Cs,n=new mi,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ne}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(cr,Yr,this.up):yn.lookAt(Yr,cr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(yn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(yl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new F(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new F,Mn=new F,aa=new F,Sn=new F,Li=new F,Di=new F,Ml=new F,oa=new F,la=new F,ca=new F;class Tn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),Mn.subVectors(n,e),aa.subVectors(t,e);const a=rn.dot(rn),s=rn.dot(Mn),l=rn.dot(aa),c=Mn.dot(Mn),u=Mn.dot(aa),d=a*c-s*s;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(s,Sn.z),l}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),Mn.subVectors(t,e),rn.cross(Mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),rn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Tn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Li.subVectors(i,n),Di.subVectors(r,n),oa.subVectors(t,n);const l=Li.dot(oa),c=Di.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,i);const u=Li.dot(la),d=Di.dot(la);if(u>=0&&d<=u)return e.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Li,a);ca.subVectors(t,r);const m=Li.dot(ca),g=Di.dot(ca);if(g>=0&&m<=g)return e.copy(r);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(Di,s);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ml.subVectors(r,i),s=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(Ml,s);const v=1/(p+h+f);return a=h*v,s=f*v,e.copy(n).addScaledVector(Li,a).addScaledVector(Di,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let nf=0;class Or extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Wi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fr extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new F,jr=new wt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Br(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Br(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Br(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ac extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rf=0;const Xe=new oe,ua=new Se,Ri=new F,Ie=new Ir,ur=new Ir,ae=new F;class un extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Cc:Ac)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];ur.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(Ie.min,ur.min),Ie.expandByPoint(ae),ae.addVectors(Ie.max,ur.max),Ie.expandByPoint(ae)):(Ie.expandByPoint(ur.min),Ie.expandByPoint(ur.max))}Ie.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ae));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ae.fromBufferAttribute(s,c),l&&(Ri.fromBufferAttribute(t,c),ae.add(Ri)),i=Math.max(i,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new F,u[L]=new F;const d=new F,f=new F,m=new F,g=new wt,h=new wt,p=new wt,v=new F,M=new F;function _(L,B,q){d.fromArray(i,L*3),f.fromArray(i,B*3),m.fromArray(i,q*3),g.fromArray(a,L*2),h.fromArray(a,B*2),p.fromArray(a,q*2),f.sub(d),m.sub(d),h.sub(g),p.sub(g);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(I),M.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(I),c[L].add(v),c[B].add(v),c[q].add(v),u[L].add(M),u[B].add(M),u[q].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,B=S.length;L<B;++L){const q=S[L],I=q.start,R=q.count;for(let k=I,j=I+R;k<j;k+=3)_(n[k+0],n[k+1],n[k+2])}const y=new F,E=new F,C=new F,x=new F;function b(L){C.fromArray(r,L*3),x.copy(C);const B=c[L];y.copy(B),y.sub(C.multiplyScalar(C.dot(B))).normalize(),E.crossVectors(x,B);const I=E.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=I}for(let L=0,B=S.length;L<B;++L){const q=S[L],I=q.start,R=q.count;for(let k=I,j=I+R;k<j;k+=3)b(n[k+0]),b(n[k+1]),b(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,s=new F,l=new F,c=new F,u=new F,d=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),h=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,h),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,d=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){s.isInterleavedBufferAttribute?m=l[h]*s.data.stride+s.offset:m=l[h]*u;for(let v=0;v<u;v++)f[g++]=c[m++]}return new Qe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new oe,Ii=new Tc,ha=new As,hr=new F,fr=new F,dr=new F,fa=new F,Zr=new F,$r=new wt,Kr=new wt,Jr=new wt,da=new F,Qr=new F;class on extends Se{constructor(t=new un,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],d=r[l];u!==0&&(fa.fromBufferAttribute(d,t),a?Zr.addScaledVector(fa,u):Zr.addScaledVector(fa.sub(e),u))}e.add(Zr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),t.ray.intersectsSphere(ha)===!1)||(Sl.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Sl),n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const h=d[m],p=i[h.materialIndex],v=Math.max(h.start,f.start),M=Math.min(s.count,Math.min(h.start+h.count,f.start+f.count));for(let _=v,S=M;_<S;_+=3){const y=s.getX(_),E=s.getX(_+1),C=s.getX(_+2);a=ts(this,p,t,Ii,c,u,y,E,C),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=h.materialIndex,e.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const v=s.getX(h),M=s.getX(h+1),_=s.getX(h+2);a=ts(this,i,t,Ii,c,u,v,M,_),a&&(a.faceIndex=Math.floor(h/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const h=d[m],p=i[h.materialIndex],v=Math.max(h.start,f.start),M=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=v,S=M;_<S;_+=3){const y=_,E=_+1,C=_+2;a=ts(this,p,t,Ii,c,u,y,E,C),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=h.materialIndex,e.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let h=m,p=g;h<p;h+=3){const v=h,M=h+1,_=h+2;a=ts(this,i,t,Ii,c,u,v,M,_),a&&(a.faceIndex=Math.floor(h/3),e.push(a))}}}}function sf(o,t,e,n,i,r,a,s){let l;if(t.side===ze?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===Gn,s),l===null)return null;Qr.copy(s),Qr.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:o}}function ts(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,hr),o.getVertexPosition(s,fr),o.getVertexPosition(l,dr);const c=sf(o,t,e,n,hr,fr,dr,da);if(c){i&&($r.fromBufferAttribute(i,a),Kr.fromBufferAttribute(i,s),Jr.fromBufferAttribute(i,l),c.uv=Tn.getUV(da,hr,fr,dr,$r,Kr,Jr,new wt)),r&&($r.fromBufferAttribute(r,a),Kr.fromBufferAttribute(r,s),Jr.fromBufferAttribute(r,l),c.uv2=Tn.getUV(da,hr,fr,dr,$r,Kr,Jr,new wt));const u={a,b:s,c:l,normal:new F,materialIndex:0};Tn.getNormal(hr,fr,dr,u.normal),c.face=u}return c}class Nr extends un{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function g(h,p,v,M,_,S,y,E,C,x,b){const L=S/C,B=y/x,q=S/2,I=y/2,R=E/2,k=C+1,j=x+1;let Z=0,V=0;const J=new F;for(let K=0;K<j;K++){const ut=K*B-I;for(let U=0;U<k;U++){const $=U*L-q;J[h]=$*M,J[p]=ut*_,J[v]=R,c.push(J.x,J.y,J.z),J[h]=0,J[p]=0,J[v]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(U/C),d.push(1-K/x),Z+=1}}for(let K=0;K<x;K++)for(let ut=0;ut<C;ut++){const U=f+ut+k*K,$=f+ut+k*(K+1),et=f+(ut+1)+k*(K+1),nt=f+(ut+1)+k*K;l.push(U,$,nt),l.push($,et,nt),V+=6}s.addGroup(m,V,b),m+=V,f+=Z}}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(o){const t={};for(let e=0;e<o.length;e++){const n=Ki(o[e]);for(const i in n)t[i]=n[i]}return t}function af(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Pc(o){return o.getRenderTarget()===null&&o.outputEncoding===Gt?hn:Tr}const of={clone:Ki,merge:ye};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lc extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Lc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Fi=1;class uf extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ze(Oi,Fi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ze(Oi,Fi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ze(Oi,Fi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ze(Oi,Fi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Ze(Oi,Fi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ze(Oi,Fi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=An,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Dc extends Ue{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hf extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Dc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nr(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Un});r.uniforms.tEquirect.value=e;const a=new on(i,r),s=e.minFilter;return e.minFilter===br&&(e.minFilter=je),new uf(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const pa=new F,ff=new F,df=new Ne;class ti{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pa.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||df.getNormalMatrix(t),i=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new As,es=new F;class Rc{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],g=n[10],h=n[11],p=n[12],v=n[13],M=n[14],_=n[15];return e[0].setComponents(s-i,d-l,h-f,_-p).normalize(),e[1].setComponents(s+i,d+l,h+f,_+p).normalize(),e[2].setComponents(s+r,d+c,h+m,_+v).normalize(),e[3].setComponents(s-r,d-c,h-m,_-v).normalize(),e[4].setComponents(s-a,d-u,h-g,_-M).normalize(),e[5].setComponents(s+a,d+u,h+g,_+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(es.x=i.normal.x>0?t.max.x:t.min.x,es.y=i.normal.y>0?t.max.y:t.min.y,es.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function pf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,f):(e?o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:s,update:l}}class Ps extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,d=t/s,f=e/l,m=[],g=[],h=[],p=[];for(let v=0;v<u;v++){const M=v*f-a;for(let _=0;_<c;_++){const S=_*d-r;g.push(S,-M,0),h.push(0,0,1),p.push(_/s),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<s;M++){const _=M+c*v,S=M+c*(v+1),y=M+1+c*(v+1),E=M+1+c*v;m.push(_,S,E),m.push(S,y,E)}this.setIndex(m),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(p,2))}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf="vec3 transformed = vec3( position );",Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ap=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,op=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bt={alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:_f,alphatest_pars_fragment:xf,aomap_fragment:vf,aomap_pars_fragment:yf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:bf,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:Rf,color_vertex:If,common:Of,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Nf,displacementmap_pars_vertex:zf,displacementmap_vertex:Uf,emissivemap_fragment:Bf,emissivemap_pars_fragment:kf,encodings_fragment:Gf,encodings_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rd,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:Zf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Jf,lightmap_fragment:Qf,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:ud,lights_fragment_begin:hd,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:yd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:bd,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:Ed,morphtarget_vertex:Ad,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Ld,normal_pars_vertex:Dd,normal_vertex:Rd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:zd,output_fragment:Ud,packing:Bd,premultiplied_alpha_fragment:kd,project_vertex:Gd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Hd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:Zd,skinbase_vertex:$d,skinning_pars_vertex:Kd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:rp,transmission_pars_fragment:sp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,uv2_pars_fragment:cp,uv2_pars_vertex:up,uv2_vertex:hp,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:xp,depth_vert:vp,depth_frag:yp,distanceRGBA_vert:Mp,distanceRGBA_frag:Sp,equirect_vert:bp,equirect_frag:wp,linedashed_vert:Tp,linedashed_frag:Ep,meshbasic_vert:Ap,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Rp,meshnormal_vert:Ip,meshnormal_frag:Op,meshphong_vert:Fp,meshphong_frag:Np,meshphysical_vert:zp,meshphysical_frag:Up,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:Gp,points_frag:Vp,shadow_vert:Wp,shadow_frag:Hp,sprite_vert:Xp,sprite_frag:qp},rt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ne},uv2Transform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}}},fn={basic:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:ye([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:ye([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:ye([rt.points,rt.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:ye([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:ye([rt.common,rt.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:ye([rt.sprite,rt.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:ye([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:ye([rt.lights,rt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};fn.physical={uniforms:ye([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new wt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const ns={r:0,b:0,g:0};function Yp(o,t,e,n,i,r,a){const s=new zt(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(p,v){let M=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_));const S=o.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?h(s,l):_&&_.isColor&&(h(_,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Es)?(u===void 0&&(u=new on(new Nr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ki(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==Gt,(d!==_||f!==_.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new on(new Ps(2,2),new gi({name:"BackgroundMaterial",uniforms:Ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==Gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,v){p.getRGB(ns,Pc(o)),n.buffers.color.setClear(ns.r,ns.g,ns.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(p,v=1){s.set(p),l=v,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(s,l)},render:g}}function jp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function d(R,k,j,Z,V){let J=!1;if(a){const K=h(Z,j,k);c!==K&&(c=K,m(c.object)),J=v(R,Z,j,V),J&&M(R,Z,j,V)}else{const K=k.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=K,J=!0)}V!==null&&e.update(V,34963),(J||u)&&(u=!1,x(R,k,j,Z),V!==null&&o.bindBuffer(34963,e.get(V).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function h(R,k,j){const Z=j.wireframe===!0;let V=s[R.id];V===void 0&&(V={},s[R.id]=V);let J=V[k.id];J===void 0&&(J={},V[k.id]=J);let K=J[Z];return K===void 0&&(K=p(f()),J[Z]=K),K}function p(R){const k=[],j=[],Z=[];for(let V=0;V<i;V++)k[V]=0,j[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:Z,object:R,attributes:{},index:null}}function v(R,k,j,Z){const V=c.attributes,J=k.attributes;let K=0;const ut=j.getAttributes();for(const U in ut)if(ut[U].location>=0){const et=V[U];let nt=J[U];if(nt===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),et===void 0||et.attribute!==nt||nt&&et.data!==nt.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function M(R,k,j,Z){const V={},J=k.attributes;let K=0;const ut=j.getAttributes();for(const U in ut)if(ut[U].location>=0){let et=J[U];et===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));const nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),V[U]=nt,K++}c.attributes=V,c.attributesNum=K,c.index=Z}function _(){const R=c.newAttributes;for(let k=0,j=R.length;k<j;k++)R[k]=0}function S(R){y(R,0)}function y(R,k){const j=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;j[R]=1,Z[R]===0&&(o.enableVertexAttribArray(R),Z[R]=1),V[R]!==k&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),V[R]=k)}function E(){const R=c.newAttributes,k=c.enabledAttributes;for(let j=0,Z=k.length;j<Z;j++)k[j]!==R[j]&&(o.disableVertexAttribArray(j),k[j]=0)}function C(R,k,j,Z,V,J){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(R,k,j,V,J):o.vertexAttribPointer(R,k,j,Z,V,J)}function x(R,k,j,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const V=Z.attributes,J=j.getAttributes(),K=k.defaultAttributeValues;for(const ut in J){const U=J[ut];if(U.location>=0){let $=V[ut];if($===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){const et=$.normalized,nt=$.itemSize,G=e.get($);if(G===void 0)continue;const yt=G.buffer,mt=G.type,dt=G.bytesPerElement;if($.isInterleavedBufferAttribute){const lt=$.data,Nt=lt.stride,St=$.offset;if(lt.isInstancedInterleavedBuffer){for(let xt=0;xt<U.locationSize;xt++)y(U.location+xt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let xt=0;xt<U.locationSize;xt++)S(U.location+xt);o.bindBuffer(34962,yt);for(let xt=0;xt<U.locationSize;xt++)C(U.location+xt,nt/U.locationSize,mt,et,Nt*dt,(St+nt/U.locationSize*xt)*dt)}else{if($.isInstancedBufferAttribute){for(let lt=0;lt<U.locationSize;lt++)y(U.location+lt,$.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let lt=0;lt<U.locationSize;lt++)S(U.location+lt);o.bindBuffer(34962,yt);for(let lt=0;lt<U.locationSize;lt++)C(U.location+lt,nt/U.locationSize,mt,et,nt*dt,nt/U.locationSize*lt*dt)}}else if(K!==void 0){const et=K[ut];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(U.location,et);break;case 3:o.vertexAttrib3fv(U.location,et);break;case 4:o.vertexAttrib4fv(U.location,et);break;default:o.vertexAttrib1fv(U.location,et)}}}}E()}function b(){q();for(const R in s){const k=s[R];for(const j in k){const Z=k[j];for(const V in Z)g(Z[V].object),delete Z[V];delete k[j]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const j in k){const Z=k[j];for(const V in Z)g(Z[V].object),delete Z[V];delete k[j]}delete s[R.id]}function B(R){for(const k in s){const j=s[k];if(j[R.id]===void 0)continue;const Z=j[R.id];for(const V in Z)g(Z[V].object),delete Z[V];delete j[R.id]}}function q(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:S,disableUnusedAttributes:E}}function Zp(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),e.update(u,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function $p(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),h=o.getParameter(34921),p=o.getParameter(36347),v=o.getParameter(36348),M=o.getParameter(36349),_=f>0,S=a||t.has("OES_texture_float"),y=_&&S,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:E}}function Kp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ti,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,v=o.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,_=M*4;let S=v.clippingState||null;l.value=S,S=u(g,f,_,m);for(let y=0;y!==_;++y)S[y]=e[y];v.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,g){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const v=m+h*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,S=m;_!==h;++_,S+=4)a.copy(d[_]).applyMatrix4(M,s),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=h,t.numIntersection=0,p}}function Jp(o){let t=new WeakMap;function e(a,s){return s===Da?a.mapping=ji:s===Ra&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Da||s===Ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hf(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qp extends Lc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,bl=[.125,.215,.35,.446,.526,.582],ii=20,ma=new Qp,wl=new zt;let ga=null;const ei=(1+Math.sqrt(5))/2,zi=1/ei,Tl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ei,zi),new F(0,ei,-zi),new F(zi,0,ei),new F(-zi,0,ei),new F(ei,zi,0),new F(-ei,zi,0)];class El{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ga=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga),t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:wr,format:an,encoding:di,depthBuffer:!1},i=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return i}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,i){const s=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wl),u.toneMapping=An,u.autoClear=!1;const m=new Fr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new on(new Nr,m);let h=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,h=!0):(m.color.copy(wl),h=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(s.up.set(0,l[v],0),s.lookAt(c[v],0,0)):M===1?(s.up.set(0,0,l[v]),s.lookAt(0,c[v],0)):(s.up.set(0,l[v],0),s.lookAt(0,0,c[v]));const _=this._cubeSize;is(i,M*_,v>2?_:0,_,_),u.setRenderTarget(i),h&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Tl[(i-1)%Tl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new on(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ii-1),h=r/g,p=isFinite(r)?1+Math.floor(u*h):ii;p>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const v=[];let M=0;for(let C=0;C<ii;++C){const x=C/h,b=Math.exp(-x*x/2);v.push(b),C===0?M+=b:C<p&&(M+=2*b)}for(let C=0;C<v.length;C++)v[C]=v[C]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const S=this._sizeLods[i],y=3*S*(i>_-ki?i-_+ki:0),E=4*(this._cubeSize-S);is(e,y,E,3*S,2*S),l.setRenderTarget(e),l.render(d,ma)}}function tm(o){const t=[],e=[],n=[];let i=o;const r=o-ki+1+bl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-ki?l=bl[a-o+ki-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,h=3,p=2,v=1,M=new Float32Array(h*g*m),_=new Float32Array(p*g*m),S=new Float32Array(v*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,x=E>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(b,h*g*E),_.set(f,p*g*E);const L=[E,E,E,E,E,E];S.set(L,v*g*E)}const y=new un;y.setAttribute("position",new Qe(M,h)),y.setAttribute("uv",new Qe(_,p)),y.setAttribute("faceIndex",new Qe(S,v)),t.push(y),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(o,t,e){const n=new pi(o,t,e);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function em(o,t,e){const n=new Float32Array(ii),i=new F(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Cl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Pl(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nm(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Da||l===Ra,u=l===ji||l===Zi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=t.get(s);return e===null&&(e=new El(o)),d=c?e.fromEquirectangular(s,d):e.fromCubemap(s,d),t.set(s,d),d.texture}else{if(t.has(s))return t.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new El(o));const f=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rm(o,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const h=m[g];for(let p=0,v=h.length;p<v;p++)t.update(h[p],34962)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let h=0;if(m!==null){const M=m.array;h=m.version;for(let _=0,S=M.length;_<S;_+=3){const y=M[_+0],E=M[_+1],C=M[_+2];f.push(y,E,E,C,C,y)}}else{const M=g.array;h=g.version;for(let _=0,S=M.length/3-1;_<S;_+=3){const y=_+0,E=_+1,C=_+2;f.push(y,E,E,C,C,y)}}const p=new(yc(f)?Cc:Ac)(f,1);p.version=h;const v=r.get(d);v&&t.remove(v),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function sm(o,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),e.update(m,r,1)}function d(f,m,g){if(g===0)return;let h,p;if(i)h=o,p="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,m,s,f*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function am(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function om(o,t){return o[0]-t[0]}function lm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function cm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ue,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let v=r.get(u);if(v===void 0||v.count!==p){let j=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),y===!0&&(L=2),E===!0&&(L=3);let B=u.attributes.position.count*L,q=1;B>t.maxTextureSize&&(q=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*q*4*p),R=new wc(I,B,q,p);R.type=si,R.needsUpdate=!0;const k=L*4;for(let Z=0;Z<p;Z++){const V=C[Z],J=x[Z],K=b[Z],ut=B*q*4*Z;for(let U=0;U<V.count;U++){const $=U*k;S===!0&&(a.fromBufferAttribute(V,U),I[ut+$+0]=a.x,I[ut+$+1]=a.y,I[ut+$+2]=a.z,I[ut+$+3]=0),y===!0&&(a.fromBufferAttribute(J,U),I[ut+$+4]=a.x,I[ut+$+5]=a.y,I[ut+$+6]=a.z,I[ut+$+7]=0),E===!0&&(a.fromBufferAttribute(K,U),I[ut+$+8]=a.x,I[ut+$+9]=a.y,I[ut+$+10]=a.z,I[ut+$+11]=K.itemSize===4?a.w:1)}}v={count:p,texture:R,size:new wt(B,q)},r.set(u,v),u.addEventListener("dispose",j)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const _=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",_),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const h=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==h){p=[];for(let y=0;y<h;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<h;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(lm);for(let y=0;y<8;y++)y<h&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(om);const v=u.morphAttributes.position,M=u.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const E=s[y],C=E[0],x=E[1];C!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+y)!==v[C]&&u.setAttribute("morphTarget"+y,v[C]),M&&u.getAttribute("morphNormal"+y)!==M[C]&&u.setAttribute("morphNormal"+y,M[C]),i[y]=x,_+=x):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),M&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function um(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Oc=new Ue,Fc=new wc,Nc=new jh,zc=new Dc,Ll=[],Dl=[],Rl=new Float32Array(16),Il=new Float32Array(9),Ol=new Float32Array(4);function sr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Ll[i];if(r===void 0&&(r=new Float32Array(i),Ll[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function ee(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ne(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ls(o,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function hm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function fm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2fv(this.addr,t),ne(e,t)}}function dm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ee(e,t))return;o.uniform3fv(this.addr,t),ne(e,t)}}function pm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4fv(this.addr,t),ne(e,t)}}function mm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Ol.set(n),o.uniformMatrix2fv(this.addr,!1,Ol),ne(e,n)}}function gm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Il.set(n),o.uniformMatrix3fv(this.addr,!1,Il),ne(e,n)}}function _m(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Rl.set(n),o.uniformMatrix4fv(this.addr,!1,Rl),ne(e,n)}}function xm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function vm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2iv(this.addr,t),ne(e,t)}}function ym(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;o.uniform3iv(this.addr,t),ne(e,t)}}function Mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4iv(this.addr,t),ne(e,t)}}function Sm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function bm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2uiv(this.addr,t),ne(e,t)}}function wm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;o.uniform3uiv(this.addr,t),ne(e,t)}}function Tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4uiv(this.addr,t),ne(e,t)}}function Em(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Oc,i)}function Am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nc,i)}function Cm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zc,i)}function Pm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fc,i)}function Lm(o){switch(o){case 5126:return hm;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return vm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return bm;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(o,t){o.uniform1fv(this.addr,t)}function Rm(o,t){const e=sr(t,this.size,2);o.uniform2fv(this.addr,e)}function Im(o,t){const e=sr(t,this.size,3);o.uniform3fv(this.addr,e)}function Om(o,t){const e=sr(t,this.size,4);o.uniform4fv(this.addr,e)}function Fm(o,t){const e=sr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Nm(o,t){const e=sr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function zm(o,t){const e=sr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Um(o,t){o.uniform1iv(this.addr,t)}function Bm(o,t){o.uniform2iv(this.addr,t)}function km(o,t){o.uniform3iv(this.addr,t)}function Gm(o,t){o.uniform4iv(this.addr,t)}function Vm(o,t){o.uniform1uiv(this.addr,t)}function Wm(o,t){o.uniform2uiv(this.addr,t)}function Hm(o,t){o.uniform3uiv(this.addr,t)}function Xm(o,t){o.uniform4uiv(this.addr,t)}function qm(o,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Oc,r[a])}function Ym(o,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nc,r[a])}function jm(o,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||zc,r[a])}function Zm(o,t,e){const n=this.cache,i=t.length,r=Ls(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Fc,r[a])}function $m(o){switch(o){case 5126:return Dm;case 35664:return Rm;case 35665:return Im;case 35666:return Om;case 35674:return Fm;case 35675:return Nm;case 35676:return zm;case 5124:case 35670:return Um;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Hm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Zm}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Lm(e.type)}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=$m(e.type)}}class Qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Fl(o,t){o.seq.push(t),o.map[t.id]=t}function tg(o,t,e){const n=o.name,i=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),a=_a.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Fl(e,c===void 0?new Km(s,o,t):new Jm(s,o,t));break}else{let d=e.map[s];d===void 0&&(d=new Qm(s),Fl(e,d)),e=d}}}class cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);tg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Nl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let eg=0;function ng(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function ig(o){switch(o){case di:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function zl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ng(o.getShaderSource(t),a)}else return i}function rg(o,t){const e=ig(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function sg(o,t){let e;switch(t){case yh:e="Linear";break;case Mh:e="Reinhard";break;case Sh:e="OptimizedCineon";break;case bh:e="ACESFilmic";break;case wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ag(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function og(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function gr(o){return o!==""}function Ul(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(o){return o.replace(cg,ug)}function ug(o,t){const e=bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return za(e)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(o){return o.replace(hg,fg)}function fg(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===mr&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ji:case Zi:t="ENVMAP_TYPE_CUBE";break;case Es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _c:t="ENVMAP_BLENDING_MULTIPLY";break;case xh:t="ENVMAP_BLENDING_MIX";break;case vh:t="ENVMAP_BLENDING_ADD";break}return t}function _g(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=dg(e),c=pg(e),u=mg(e),d=gg(e),f=_g(e),m=e.isWebGL2?"":ag(e),g=og(r),h=i.createProgram();let p,v,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(gr).join(`
`),p.length>0&&(p+=`
`),v=[m,g].filter(gr).join(`
`),v.length>0&&(v+=`
`)):(p=[Gl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),v=[m,Gl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?bt.tonemapping_pars_fragment:"",e.toneMapping!==An?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.encodings_pars_fragment,rg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=za(a),a=Ul(a,e),a=Bl(a,e),s=za(s),s=Ul(s,e),s=Bl(s,e),a=kl(a),s=kl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=M+p+a,S=M+v+s,y=Nl(i,35633,_),E=Nl(i,35632,S);if(i.attachShader(h,y),i.attachShader(h,E),e.index0AttributeName!==void 0?i.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),o.debug.checkShaderErrors){const b=i.getProgramInfoLog(h).trim(),L=i.getShaderInfoLog(y).trim(),B=i.getShaderInfoLog(E).trim();let q=!0,I=!0;if(i.getProgramParameter(h,35714)===!1){q=!1;const R=zl(i,y,"vertex"),k=zl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+b+`
`+R+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||B==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:B,prefix:v}})}i.deleteShader(y),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new cs(i,h)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=lg(i,h)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=y,this.fragmentShader=E,this}let vg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mg(t),e.set(t,n)),n}}class Mg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function Sg(o,t,e,n,i,r,a){const s=new Ec,l=new yg,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,b,L,B,q){const I=B.fog,R=q.geometry,k=x.isMeshStandardMaterial?B.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),Z=j&&j.mapping===Es?j.image.height:null,V=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=J!==void 0?J.length:0;let ut=0;R.morphAttributes.position!==void 0&&(ut=1),R.morphAttributes.normal!==void 0&&(ut=2),R.morphAttributes.color!==void 0&&(ut=3);let U,$,et,nt;if(V){const Nt=fn[V];U=Nt.vertexShader,$=Nt.fragmentShader}else U=x.vertexShader,$=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),nt=l.getFragmentShaderID(x);const G=o.getRenderTarget(),yt=x.alphaTest>0,mt=x.clearcoat>0,dt=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:U,fragmentShader:$,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?o.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:di,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Hh,tangentSpaceNormalMap:x.normalMapType===Wh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Gt,clearcoat:mt,clearcoatMap:mt&&!!x.clearcoatMap,clearcoatRoughnessMap:mt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!x.clearcoatNormalMap,iridescence:dt,iridescenceMap:dt&&!!x.iridescenceMap,iridescenceThicknessMap:dt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Wi,alphaMap:!!x.alphaMap,alphaTest:yt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:An,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===ze,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(v(b,x),M(b,x),b.push(o.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.map&&s.enable(4),b.matcap&&s.enable(5),b.envMap&&s.enable(6),b.lightMap&&s.enable(7),b.aoMap&&s.enable(8),b.emissiveMap&&s.enable(9),b.bumpMap&&s.enable(10),b.normalMap&&s.enable(11),b.objectSpaceNormalMap&&s.enable(12),b.tangentSpaceNormalMap&&s.enable(13),b.clearcoat&&s.enable(14),b.clearcoatMap&&s.enable(15),b.clearcoatRoughnessMap&&s.enable(16),b.clearcoatNormalMap&&s.enable(17),b.iridescence&&s.enable(18),b.iridescenceMap&&s.enable(19),b.iridescenceThicknessMap&&s.enable(20),b.displacementMap&&s.enable(21),b.specularMap&&s.enable(22),b.roughnessMap&&s.enable(23),b.metalnessMap&&s.enable(24),b.gradientMap&&s.enable(25),b.alphaMap&&s.enable(26),b.alphaTest&&s.enable(27),b.vertexColors&&s.enable(28),b.vertexAlphas&&s.enable(29),b.vertexUvs&&s.enable(30),b.vertexTangents&&s.enable(31),b.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.physicallyCorrectLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.specularIntensityMap&&s.enable(15),b.specularColorMap&&s.enable(16),b.transmission&&s.enable(17),b.transmissionMap&&s.enable(18),b.thicknessMap&&s.enable(19),b.sheen&&s.enable(20),b.sheenColorMap&&s.enable(21),b.sheenRoughnessMap&&s.enable(22),b.decodeVideoTexture&&s.enable(23),b.opaque&&s.enable(24),x.push(s.mask)}function _(x){const b=g[x.type];let L;if(b){const B=fn[b];L=of.clone(B.uniforms)}else L=x.uniforms;return L}function S(x,b){let L;for(let B=0,q=c.length;B<q;B++){const I=c[B];if(I.cacheKey===b){L=I,++L.usedTimes;break}}return L===void 0&&(L=new xg(o,b,x,r),c.push(L)),L}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:C}}function bg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function wg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Vl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,m,g,h,p){let v=o[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:h,group:p},o[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=h,v.group=p),t++,v}function s(d,f,m,g,h,p){const v=a(d,f,m,g,h,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):e.push(v)}function l(d,f,m,g,h,p){const v=a(d,f,m,g,h,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function c(d,f){e.length>1&&e.sort(d||wg),n.length>1&&n.sort(f||Vl),i.length>1&&i.sort(f||Vl)}function u(){for(let d=t,f=o.length;d<f;d++){const m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Tg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Wl,o.set(n,[a])):i>=r.length?(a=new Wl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Eg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new zt};break;case"SpotLight":e={position:new F,direction:new F,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=e,e}}}function Ag(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Cg=0;function Pg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Lg(o,t){const e=new Eg,n=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,a=new oe,s=new oe;function l(u,d){let f=0,m=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,p=0,v=0,M=0,_=0,S=0,y=0,E=0,C=0,x=0;u.sort(Pg);const b=d!==!0?Math.PI:1;for(let B=0,q=u.length;B<q;B++){const I=u[B],R=I.color,k=I.intensity,j=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*k*b,m+=R.g*k*b,g+=R.b*k*b;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=I.shadow.matrix,S++}i.directional[h]=V,h++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(R).multiplyScalar(k*b),V.distance=j,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[v]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[v]=J.matrix,I.castShadow){const K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=Z,E++}v++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(R).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=V,M++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*b),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k*b),V.groundColor.copy(I.groundColor).multiplyScalar(k*b),i.hemi[_]=V,_++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==M||L.hemiLength!==_||L.numDirectionalShadows!==S||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==C)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=M,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,L.directionalLength=h,L.pointLength=p,L.spotLength=v,L.rectAreaLength=M,L.hemiLength=_,L.numDirectionalShadows=S,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=C,i.version=Cg++)}function c(u,d){let f=0,m=0,g=0,h=0,p=0;const v=d.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const S=u[M];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),f++}else if(S.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const y=i.rectArea[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),s.identity(),a.copy(S.matrixWorld),a.premultiply(v),s.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),h++}else if(S.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),m++}else if(S.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Hl(o,t){const e=new Lg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Dg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new Hl(o,t),e.set(r,[l])):a>=s.length?(l=new Hl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Rg extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ig extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ng(o,t,e){let n=new Rc;const i=new wt,r=new wt,a=new ue,s=new Rg({depthPacking:Vh}),l=new Ig,c={},u=e.maxTextureSize,d={[Gn]:ze,[ze]:Gn,[On]:On},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Og,fragmentShader:Fg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new on(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc,this.render=function(S,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Un),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let B=0,q=S.length;B<q;B++){const I=S[B],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==mr?{minFilter:Me,magFilter:Me}:{};R.map=new pi(i.x,i.y,Z),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Z=0;Z<j;Z++){const V=R.getViewport(Z);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(a),R.updateMatrices(I,Z),n=R.getFrustum(),_(y,E,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===mr&&v(R,E),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,b)};function v(S,y){const E=t.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(y,null,E,f,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(y,null,E,m,h,null)}function M(S,y,E,C,x,b){let L=null;const B=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)L=B;else if(L=E.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const q=L.uuid,I=y.uuid;let R=c[q];R===void 0&&(R={},c[q]=R);let k=R[I];k===void 0&&(k=L.clone(),R[I]=k),L=k}return L.visible=y.visible,L.wireframe=y.wireframe,b===mr?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:d[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function _(S,y,E,C,x){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===mr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const B=t.update(S),q=S.material;if(Array.isArray(q)){const I=B.groups;for(let R=0,k=I.length;R<k;R++){const j=I[R],Z=q[j.materialIndex];if(Z&&Z.visible){const V=M(S,Z,C,E.near,E.far,x);o.renderBufferDirect(E,null,B,V,S,j)}}}else if(q.visible){const I=M(S,q,C,E.near,E.far,x);o.renderBufferDirect(E,null,B,I,S,null)}}const L=S.children;for(let B=0,q=L.length;B<q;B++)_(L[B],y,E,C,x)}}function zg(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const H=new ue;let Q=null;const ct=new ue(0,0,0,0);return{setMask:function(gt){Q!==gt&&!D&&(o.colorMask(gt,gt,gt,gt),Q=gt)},setLocked:function(gt){D=gt},setClear:function(gt,Ft,re,fe,Xn){Xn===!0&&(gt*=fe,Ft*=fe,re*=fe),H.set(gt,Ft,re,fe),ct.equals(H)===!1&&(o.clearColor(gt,Ft,re,fe),ct.copy(H))},reset:function(){D=!1,Q=null,ct.set(-1,0,0,0)}}}function r(){let D=!1,H=null,Q=null,ct=null;return{setTest:function(gt){gt?yt(2929):mt(2929)},setMask:function(gt){H!==gt&&!D&&(o.depthMask(gt),H=gt)},setFunc:function(gt){if(Q!==gt){switch(gt){case hh:o.depthFunc(512);break;case fh:o.depthFunc(519);break;case dh:o.depthFunc(513);break;case La:o.depthFunc(515);break;case ph:o.depthFunc(514);break;case mh:o.depthFunc(518);break;case gh:o.depthFunc(516);break;case _h:o.depthFunc(517);break;default:o.depthFunc(515)}Q=gt}},setLocked:function(gt){D=gt},setClear:function(gt){ct!==gt&&(o.clearDepth(gt),ct=gt)},reset:function(){D=!1,H=null,Q=null,ct=null}}}function a(){let D=!1,H=null,Q=null,ct=null,gt=null,Ft=null,re=null,fe=null,Xn=null;return{setTest:function(Vt){D||(Vt?yt(2960):mt(2960))},setMask:function(Vt){H!==Vt&&!D&&(o.stencilMask(Vt),H=Vt)},setFunc:function(Vt,gn,He){(Q!==Vt||ct!==gn||gt!==He)&&(o.stencilFunc(Vt,gn,He),Q=Vt,ct=gn,gt=He)},setOp:function(Vt,gn,He){(Ft!==Vt||re!==gn||fe!==He)&&(o.stencilOp(Vt,gn,He),Ft=Vt,re=gn,fe=He)},setLocked:function(Vt){D=Vt},setClear:function(Vt){Xn!==Vt&&(o.clearStencil(Vt),Xn=Vt)},reset:function(){D=!1,H=null,Q=null,ct=null,gt=null,Ft=null,re=null,fe=null,Xn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,h=[],p=null,v=!1,M=null,_=null,S=null,y=null,E=null,C=null,x=null,b=!1,L=null,B=null,q=null,I=null,R=null;const k=o.getParameter(35661);let j=!1,Z=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Z>=2);let J=null,K={};const ut=o.getParameter(3088),U=o.getParameter(2978),$=new ue().fromArray(ut),et=new ue().fromArray(U);function nt(D,H,Q){const ct=new Uint8Array(4),gt=o.createTexture();o.bindTexture(D,gt),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Ft=0;Ft<Q;Ft++)o.texImage2D(H+Ft,0,6408,1,1,0,6408,5121,ct);return gt}const G={};G[3553]=nt(3553,3553,1),G[34067]=nt(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),yt(2929),l.setFunc(La),jt(!1),_e(Oo),yt(2884),ie(Un);function yt(D){f[D]!==!0&&(o.enable(D),f[D]=!0)}function mt(D){f[D]!==!1&&(o.disable(D),f[D]=!1)}function dt(D,H){return m[D]!==H?(o.bindFramebuffer(D,H),m[D]=H,n&&(D===36009&&(m[36160]=H),D===36160&&(m[36009]=H)),!0):!1}function lt(D,H){let Q=h,ct=!1;if(D)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),D.isWebGLMultipleRenderTargets){const gt=D.texture;if(Q.length!==gt.length||Q[0]!==36064){for(let Ft=0,re=gt.length;Ft<re;Ft++)Q[Ft]=36064+Ft;Q.length=gt.length,ct=!0}}else Q[0]!==36064&&(Q[0]=36064,ct=!0);else Q[0]!==1029&&(Q[0]=1029,ct=!0);ct&&(e.isWebGL2?o.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Nt(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const St={[Bi]:32774,[th]:32778,[eh]:32779};if(n)St[zo]=32775,St[Uo]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(St[zo]=D.MIN_EXT,St[Uo]=D.MAX_EXT)}const xt={[nh]:0,[ih]:1,[rh]:768,[mc]:770,[uh]:776,[lh]:774,[ah]:772,[sh]:769,[gc]:771,[ch]:775,[oh]:773};function ie(D,H,Q,ct,gt,Ft,re,fe){if(D===Un){v===!0&&(mt(3042),v=!1);return}if(v===!1&&(yt(3042),v=!0),D!==Qu){if(D!==M||fe!==b){if((_!==Bi||E!==Bi)&&(o.blendEquation(32774),_=Bi,E=Bi),fe)switch(D){case Wi:o.blendFuncSeparate(1,771,1,771);break;case Pa:o.blendFunc(1,1);break;case Fo:o.blendFuncSeparate(0,769,0,1);break;case No:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:o.blendFuncSeparate(770,771,1,771);break;case Pa:o.blendFunc(770,1);break;case Fo:o.blendFuncSeparate(0,769,0,1);break;case No:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,C=null,x=null,M=D,b=fe}return}gt=gt||H,Ft=Ft||Q,re=re||ct,(H!==_||gt!==E)&&(o.blendEquationSeparate(St[H],St[gt]),_=H,E=gt),(Q!==S||ct!==y||Ft!==C||re!==x)&&(o.blendFuncSeparate(xt[Q],xt[ct],xt[Ft],xt[re]),S=Q,y=ct,C=Ft,x=re),M=D,b=!1}function he(D,H){D.side===On?mt(2884):yt(2884);let Q=D.side===ze;H&&(Q=!Q),jt(Q),D.blending===Wi&&D.transparent===!1?ie(Un):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;c.setTest(ct),ct&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(32926):mt(32926)}function jt(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function _e(D){D!==$u?(yt(2884),D!==B&&(D===Oo?o.cullFace(1029):D===Ku?o.cullFace(1028):o.cullFace(1032))):mt(2884),B=D}function qt(D){D!==q&&(j&&o.lineWidth(D),q=D)}function Ot(D,H,Q){D?(yt(32823),(I!==H||R!==Q)&&(o.polygonOffset(H,Q),I=H,R=Q)):mt(32823)}function We(D){D?yt(3089):mt(3089)}function be(D){D===void 0&&(D=33984+k-1),J!==D&&(o.activeTexture(D),J=D)}function A(D,H,Q){Q===void 0&&(J===null?Q=33984+k-1:Q=J);let ct=K[Q];ct===void 0&&(ct={type:void 0,texture:void 0},K[Q]=ct),(ct.type!==D||ct.texture!==H)&&(J!==Q&&(o.activeTexture(Q),J=Q),o.bindTexture(D,H||G[D]),ct.type=D,ct.texture=H)}function w(){const D=K[J];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){$.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function ft(D){et.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function At(D,H){let Q=d.get(H);Q===void 0&&(Q=new WeakMap,d.set(H,Q));let ct=Q.get(D);ct===void 0&&(ct=o.getUniformBlockIndex(H,D.name),Q.set(D,ct))}function Pt(D,H){const ct=d.get(H).get(D);u.get(H)!==ct&&(o.uniformBlockBinding(H,ct,D.__bindingPointIndex),u.set(H,ct))}function Ut(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},J=null,K={},m={},g=new WeakMap,h=[],p=null,v=!1,M=null,_=null,S=null,y=null,E=null,C=null,x=null,b=!1,L=null,B=null,q=null,I=null,R=null,$.set(0,0,o.canvas.width,o.canvas.height),et.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:yt,disable:mt,bindFramebuffer:dt,drawBuffers:lt,useProgram:Nt,setBlending:ie,setMaterial:he,setFlipSided:jt,setCullFace:_e,setLineWidth:qt,setPolygonOffset:Ot,setScissorTest:We,activeTexture:be,bindTexture:A,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:tt,texImage2D:ht,texImage3D:at,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:O,texStorage3D:ot,texSubImage2D:it,texSubImage3D:st,compressedTexSubImage2D:vt,compressedTexSubImage3D:P,scissor:pt,viewport:ft,reset:Ut}}function Ug(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return v?new OffscreenCanvas(A,w):gs("canvas")}function _(A,w,W,tt){let it=1;if((A.width>tt||A.height>tt)&&(it=tt/Math.max(A.width,A.height)),it<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=w?Na:Math.floor,vt=st(it*A.width),P=st(it*A.height);h===void 0&&(h=M(vt,P));const O=W?M(vt,P):h;return O.width=vt,O.height=P,O.getContext("2d").drawImage(A,0,0,vt,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+P+")."),O}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return fl(A.width)&&fl(A.height)}function y(A){return s?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Me&&A.minFilter!==je}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Me&&A.minFilter!==je}function C(A){o.generateMipmap(A)}function x(A,w,W,tt,it=!1){if(s===!1)return w;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=w;return w===6403&&(W===5126&&(st=33326),W===5131&&(st=33325),W===5121&&(st=33321)),w===33319&&(W===5126&&(st=33328),W===5131&&(st=33327),W===5121&&(st=33323)),w===6408&&(W===5126&&(st=34836),W===5131&&(st=34842),W===5121&&(st=tt===Gt&&it===!1?35907:32856),W===32819&&(st=32854),W===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function b(A,w,W){return E(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Me&&A.minFilter!==je?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function L(A){return A===Me||A===Bo||A===ks?9728:9729}function B(A){const w=A.target;w.removeEventListener("dispose",B),I(w),w.isVideoTexture&&g.delete(w)}function q(A){const w=A.target;w.removeEventListener("dispose",q),k(w)}function I(A){const w=n.get(A);if(w.__webglInit===void 0)return;const W=A.source,tt=p.get(W);if(tt){const it=tt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(A),Object.keys(tt).length===0&&p.delete(W)}n.remove(A)}function R(A){const w=n.get(A);o.deleteTexture(w.__webglTexture);const W=A.source,tt=p.get(W);delete tt[w.__cacheKey],a.memory.textures--}function k(A){const w=A.texture,W=n.get(A),tt=n.get(w);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(W.__webglFramebuffer[it]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let it=0;it<W.__webglColorRenderbuffer.length;it++)W.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,st=w.length;it<st;it++){const vt=n.get(w[it]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(w[it])}n.remove(w),n.remove(A)}let j=0;function Z(){j=0}function V(){const A=j;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),j+=1,A}function J(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function K(A,w){const W=n.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(W,A,w);return}}e.bindTexture(3553,W.__webglTexture,33984+w)}function ut(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){mt(W,A,w);return}e.bindTexture(35866,W.__webglTexture,33984+w)}function U(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){mt(W,A,w);return}e.bindTexture(32879,W.__webglTexture,33984+w)}function $(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){dt(W,A,w);return}e.bindTexture(34067,W.__webglTexture,33984+w)}const et={[Ia]:10497,[sn]:33071,[Oa]:33648},nt={[Me]:9728,[Bo]:9984,[ks]:9986,[je]:9729,[Th]:9985,[br]:9987};function G(A,w,W){if(W?(o.texParameteri(A,10242,et[w.wrapS]),o.texParameteri(A,10243,et[w.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,et[w.wrapR]),o.texParameteri(A,10240,nt[w.magFilter]),o.texParameteri(A,10241,nt[w.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(w.wrapS!==sn||w.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,L(w.magFilter)),o.texParameteri(A,10241,L(w.minFilter)),w.minFilter!==Me&&w.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Me||w.minFilter!==ks&&w.minFilter!==br||w.type===si&&t.has("OES_texture_float_linear")===!1||s===!1&&w.type===wr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function yt(A,w){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",B));const tt=w.source;let it=p.get(tt);it===void 0&&(it={},p.set(tt,it));const st=J(w);if(st!==A.__cacheKey){it[st]===void 0&&(it[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[st].usedTimes++;const vt=it[A.__cacheKey];vt!==void 0&&(it[A.__cacheKey].usedTimes--,vt.usedTimes===0&&R(w)),A.__cacheKey=st,A.__webglTexture=it[st].texture}return W}function mt(A,w,W){let tt=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=35866),w.isData3DTexture&&(tt=32879);const it=yt(A,w),st=w.source;e.bindTexture(tt,A.__webglTexture,33984+W);const vt=n.get(st);if(st.version!==vt.__version||it===!0){e.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const P=y(w)&&S(w.image)===!1;let O=_(w.image,P,!1,u);O=be(w,O);const ot=S(O)||s,ht=r.convert(w.format,w.encoding);let at=r.convert(w.type),pt=x(w.internalFormat,ht,at,w.encoding,w.isVideoTexture);G(tt,w,ot);let ft;const At=w.mipmaps,Pt=s&&w.isVideoTexture!==!0,Ut=vt.__version===void 0||it===!0,D=b(w,O,ot);if(w.isDepthTexture)pt=6402,s?w.type===si?pt=36012:w.type===ri?pt=33190:w.type===Hi?pt=35056:pt=33189:w.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===oi&&pt===6402&&w.type!==vc&&w.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ri,at=r.convert(w.type)),w.format===$i&&pt===6402&&(pt=34041,w.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Hi,at=r.convert(w.type))),Ut&&(Pt?e.texStorage2D(3553,1,pt,O.width,O.height):e.texImage2D(3553,0,pt,O.width,O.height,0,ht,at,null));else if(w.isDataTexture)if(At.length>0&&ot){Pt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,Q=At.length;H<Q;H++)ft=At[H],Pt?e.texSubImage2D(3553,H,0,0,ft.width,ft.height,ht,at,ft.data):e.texImage2D(3553,H,pt,ft.width,ft.height,0,ht,at,ft.data);w.generateMipmaps=!1}else Pt?(Ut&&e.texStorage2D(3553,D,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,O.width,O.height,ht,at,O.data)):e.texImage2D(3553,0,pt,O.width,O.height,0,ht,at,O.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Pt&&Ut&&e.texStorage3D(35866,D,pt,At[0].width,At[0].height,O.depth);for(let H=0,Q=At.length;H<Q;H++)ft=At[H],w.format!==an?ht!==null?Pt?e.compressedTexSubImage3D(35866,H,0,0,0,ft.width,ft.height,O.depth,ht,ft.data,0,0):e.compressedTexImage3D(35866,H,pt,ft.width,ft.height,O.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage3D(35866,H,0,0,0,ft.width,ft.height,O.depth,ht,at,ft.data):e.texImage3D(35866,H,pt,ft.width,ft.height,O.depth,0,ht,at,ft.data)}else{Pt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,Q=At.length;H<Q;H++)ft=At[H],w.format!==an?ht!==null?Pt?e.compressedTexSubImage2D(3553,H,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(3553,H,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage2D(3553,H,0,0,ft.width,ft.height,ht,at,ft.data):e.texImage2D(3553,H,pt,ft.width,ft.height,0,ht,at,ft.data)}else if(w.isDataArrayTexture)Pt?(Ut&&e.texStorage3D(35866,D,pt,O.width,O.height,O.depth),e.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ht,at,O.data)):e.texImage3D(35866,0,pt,O.width,O.height,O.depth,0,ht,at,O.data);else if(w.isData3DTexture)Pt?(Ut&&e.texStorage3D(32879,D,pt,O.width,O.height,O.depth),e.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ht,at,O.data)):e.texImage3D(32879,0,pt,O.width,O.height,O.depth,0,ht,at,O.data);else if(w.isFramebufferTexture){if(Ut)if(Pt)e.texStorage2D(3553,D,pt,O.width,O.height);else{let H=O.width,Q=O.height;for(let ct=0;ct<D;ct++)e.texImage2D(3553,ct,pt,H,Q,0,ht,at,null),H>>=1,Q>>=1}}else if(At.length>0&&ot){Pt&&Ut&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,Q=At.length;H<Q;H++)ft=At[H],Pt?e.texSubImage2D(3553,H,0,0,ht,at,ft):e.texImage2D(3553,H,pt,ht,at,ft);w.generateMipmaps=!1}else Pt?(Ut&&e.texStorage2D(3553,D,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,ht,at,O)):e.texImage2D(3553,0,pt,ht,at,O);E(w,ot)&&C(tt),vt.__version=st.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function dt(A,w,W){if(w.image.length!==6)return;const tt=yt(A,w),it=w.source;e.bindTexture(34067,A.__webglTexture,33984+W);const st=n.get(it);if(it.version!==st.__version||tt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const vt=w.isCompressedTexture||w.image[0].isCompressedTexture,P=w.image[0]&&w.image[0].isDataTexture,O=[];for(let H=0;H<6;H++)!vt&&!P?O[H]=_(w.image[H],!1,!0,c):O[H]=P?w.image[H].image:w.image[H],O[H]=be(w,O[H]);const ot=O[0],ht=S(ot)||s,at=r.convert(w.format,w.encoding),pt=r.convert(w.type),ft=x(w.internalFormat,at,pt,w.encoding),At=s&&w.isVideoTexture!==!0,Pt=st.__version===void 0||tt===!0;let Ut=b(w,ot,ht);G(34067,w,ht);let D;if(vt){At&&Pt&&e.texStorage2D(34067,Ut,ft,ot.width,ot.height);for(let H=0;H<6;H++){D=O[H].mipmaps;for(let Q=0;Q<D.length;Q++){const ct=D[Q];w.format!==an?at!==null?At?e.compressedTexSubImage2D(34069+H,Q,0,0,ct.width,ct.height,at,ct.data):e.compressedTexImage2D(34069+H,Q,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+H,Q,0,0,ct.width,ct.height,at,pt,ct.data):e.texImage2D(34069+H,Q,ft,ct.width,ct.height,0,at,pt,ct.data)}}}else{D=w.mipmaps,At&&Pt&&(D.length>0&&Ut++,e.texStorage2D(34067,Ut,ft,O[0].width,O[0].height));for(let H=0;H<6;H++)if(P){At?e.texSubImage2D(34069+H,0,0,0,O[H].width,O[H].height,at,pt,O[H].data):e.texImage2D(34069+H,0,ft,O[H].width,O[H].height,0,at,pt,O[H].data);for(let Q=0;Q<D.length;Q++){const gt=D[Q].image[H].image;At?e.texSubImage2D(34069+H,Q+1,0,0,gt.width,gt.height,at,pt,gt.data):e.texImage2D(34069+H,Q+1,ft,gt.width,gt.height,0,at,pt,gt.data)}}else{At?e.texSubImage2D(34069+H,0,0,0,at,pt,O[H]):e.texImage2D(34069+H,0,ft,at,pt,O[H]);for(let Q=0;Q<D.length;Q++){const ct=D[Q];At?e.texSubImage2D(34069+H,Q+1,0,0,at,pt,ct.image[H]):e.texImage2D(34069+H,Q+1,ft,at,pt,ct.image[H])}}}E(w,ht)&&C(34067),st.__version=it.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function lt(A,w,W,tt,it){const st=r.convert(W.format,W.encoding),vt=r.convert(W.type),P=x(W.internalFormat,st,vt,W.encoding);n.get(w).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,P,w.width,w.height,w.depth,0,st,vt,null):e.texImage2D(it,0,P,w.width,w.height,0,st,vt,null)),e.bindFramebuffer(36160,A),Ot(w)?f.framebufferTexture2DMultisampleEXT(36160,tt,it,n.get(W).__webglTexture,0,qt(w)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,tt,it,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Nt(A,w,W){if(o.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(W||Ot(w)){const it=w.depthTexture;it&&it.isDepthTexture&&(it.type===si?tt=36012:it.type===ri&&(tt=33190));const st=qt(w);Ot(w)?f.renderbufferStorageMultisampleEXT(36161,st,tt,w.width,w.height):o.renderbufferStorageMultisample(36161,st,tt,w.width,w.height)}else o.renderbufferStorage(36161,tt,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const tt=qt(w);W&&Ot(w)===!1?o.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):Ot(w)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let it=0;it<tt.length;it++){const st=tt[it],vt=r.convert(st.format,st.encoding),P=r.convert(st.type),O=x(st.internalFormat,vt,P,st.encoding),ot=qt(w);W&&Ot(w)===!1?o.renderbufferStorageMultisample(36161,ot,O,w.width,w.height):Ot(w)?f.renderbufferStorageMultisampleEXT(36161,ot,O,w.width,w.height):o.renderbufferStorage(36161,O,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function St(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const tt=n.get(w.depthTexture).__webglTexture,it=qt(w);if(w.depthTexture.format===oi)Ot(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,it):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===$i)Ot(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,it):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function xt(A){const w=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(w.__webglFramebuffer,A)}else if(W){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=o.createRenderbuffer(),Nt(w.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Nt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ie(A,w,W){const tt=n.get(A);w!==void 0&&lt(tt.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&xt(A)}function he(A){const w=A.texture,W=n.get(A),tt=n.get(w);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=w.version,a.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,vt=S(A)||s;if(it){W.__webglFramebuffer=[];for(let P=0;P<6;P++)W.__webglFramebuffer[P]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),st)if(i.drawBuffers){const P=A.texture;for(let O=0,ot=P.length;O<ot;O++){const ht=n.get(P[O]);ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ot(A)===!1){const P=st?w:[w];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let O=0;O<P.length;O++){const ot=P[O];W.__webglColorRenderbuffer[O]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[O]);const ht=r.convert(ot.format,ot.encoding),at=r.convert(ot.type),pt=x(ot.internalFormat,ht,at,ot.encoding,A.isXRRenderTarget===!0),ft=qt(A);o.renderbufferStorageMultisample(36161,ft,pt,A.width,A.height),o.framebufferRenderbuffer(36160,36064+O,36161,W.__webglColorRenderbuffer[O])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,tt.__webglTexture),G(34067,w,vt);for(let P=0;P<6;P++)lt(W.__webglFramebuffer[P],A,w,36064,34069+P);E(w,vt)&&C(34067),e.unbindTexture()}else if(st){const P=A.texture;for(let O=0,ot=P.length;O<ot;O++){const ht=P[O],at=n.get(ht);e.bindTexture(3553,at.__webglTexture),G(3553,ht,vt),lt(W.__webglFramebuffer,A,ht,36064+O,3553),E(ht,vt)&&C(3553)}e.unbindTexture()}else{let P=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?P=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(P,tt.__webglTexture),G(P,w,vt),lt(W.__webglFramebuffer,A,w,36064,P),E(w,vt)&&C(P),e.unbindTexture()}A.depthBuffer&&xt(A)}function jt(A){const w=S(A)||s,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,it=W.length;tt<it;tt++){const st=W[tt];if(E(st,w)){const vt=A.isWebGLCubeRenderTarget?34067:3553,P=n.get(st).__webglTexture;e.bindTexture(vt,P),C(vt),e.unbindTexture()}}}function _e(A){if(s&&A.samples>0&&Ot(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,tt=A.height;let it=16384;const st=[],vt=A.stencilBuffer?33306:36096,P=n.get(A),O=A.isWebGLMultipleRenderTargets===!0;if(O)for(let ot=0;ot<w.length;ot++)e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ot,36161,null),e.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ot,3553,null,0);e.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,P.__webglFramebuffer);for(let ot=0;ot<w.length;ot++){st.push(36064+ot),A.depthBuffer&&st.push(vt);const ht=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(ht===!1&&(A.depthBuffer&&(it|=256),A.stencilBuffer&&(it|=1024)),O&&o.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ot]),ht===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),O){const at=n.get(w[ot]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,at,0)}o.blitFramebuffer(0,0,W,tt,0,0,W,tt,it,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),O)for(let ot=0;ot<w.length;ot++){e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ot,36161,P.__webglColorRenderbuffer[ot]);const ht=n.get(w[ot]).__webglTexture;e.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ot,3553,ht,0)}e.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function qt(A){return Math.min(d,A.samples)}function Ot(A){const w=n.get(A);return s&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function We(A){const w=a.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function be(A,w){const W=A.encoding,tt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fa||W!==di&&(W===Gt?s===!1?t.has("EXT_sRGB")===!0&&tt===an?(A.format=Fa,A.minFilter=je,A.generateMipmaps=!1):w=Sc.sRGBToLinear(w):(tt!==an||it!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=ut,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=ie,this.setupRenderTarget=he,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function Bg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===fi)return 5121;if(r===Ph)return 32819;if(r===Lh)return 32820;if(r===Eh)return 5120;if(r===Ah)return 5122;if(r===vc)return 5123;if(r===Ch)return 5124;if(r===ri)return 5125;if(r===si)return 5126;if(r===wr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Dh)return 6406;if(r===an)return 6408;if(r===Rh)return 6409;if(r===Ih)return 6410;if(r===oi)return 6402;if(r===$i)return 34041;if(r===Fa)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Oh)return 6403;if(r===Fh)return 36244;if(r===Nh)return 33319;if(r===zh)return 33320;if(r===Uh)return 36249;if(r===Gs||r===Vs||r===Ws||r===Hs)if(a===Gt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ko||r===Go||r===Vo||r===Wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ho||r===Xo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ho)return a===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Xo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qo||r===Yo||r===jo||r===Zo||r===$o||r===Ko||r===Jo||r===Qo||r===tl||r===el||r===nl||r===il||r===rl||r===sl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===qo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$o)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ko)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===el)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===il)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sl)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Xs)return a===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===kh||r===al||r===ol||r===ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Xs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class kg extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _r extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const h of t.hand.values()){const p=e.getJointPose(h,n),v=this._getHandJoint(c,h);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _r;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vg extends Ue{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=ri),n===void 0&&u===$i&&(n=Hi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1}}class Wg extends vi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const h=e.getContextAttributes();let p=null,v=null;const M=[],_=[],S=new Set,y=new Map,E=new Ze;E.layers.enable(1),E.viewport=new ue;const C=new Ze;C.layers.enable(2),C.viewport=new ue;const x=[E,C],b=new kg;b.layers.enable(1),b.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=M[U];return $===void 0&&($=new xa,M[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=M[U];return $===void 0&&($=new xa,M[U]=$),$.getGripSpace()},this.getHand=function(U){let $=M[U];return $===void 0&&($=new xa,M[U]=$),$.getHandSpace()};function q(U){const $=_.indexOf(U.inputSource);if($===-1)return;const et=M[$];et!==void 0&&et.dispatchEvent({type:U.type,data:U.inputSource})}function I(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",R);for(let U=0;U<M.length;U++){const $=_[U];$!==null&&(_[U]=null,M[U].disconnect($))}L=null,B=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,v=null,ut.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",I),i.addEventListener("inputsourceschange",R),h.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),v=new pi(m.framebufferWidth,m.framebufferHeight,{format:an,type:fi,encoding:t.outputEncoding,stencilBuffer:h.stencil})}else{let $=null,et=null,nt=null;h.depth&&(nt=h.stencil?35056:33190,$=h.stencil?$i:oi,et=h.stencil?Hi:ri);const G={colorFormat:32856,depthFormat:nt,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(G),i.updateRenderState({layers:[f]}),v=new pi(f.textureWidth,f.textureHeight,{format:an,type:fi,depthTexture:new Vg(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:h.stencil,encoding:t.outputEncoding,samples:h.antialias?4:0});const yt=t.properties.get(v);yt.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(U){for(let $=0;$<U.removed.length;$++){const et=U.removed[$],nt=_.indexOf(et);nt>=0&&(_[nt]=null,M[nt].disconnect(et))}for(let $=0;$<U.added.length;$++){const et=U.added[$];let nt=_.indexOf(et);if(nt===-1){for(let yt=0;yt<M.length;yt++)if(yt>=_.length){_.push(et),nt=yt;break}else if(_[yt]===null){_[yt]=et,nt=yt;break}if(nt===-1)break}const G=M[nt];G&&G.connect(et)}}const k=new F,j=new F;function Z(U,$,et){k.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(et.matrixWorld);const nt=k.distanceTo(j),G=$.projectionMatrix.elements,yt=et.projectionMatrix.elements,mt=G[14]/(G[10]-1),dt=G[14]/(G[10]+1),lt=(G[9]+1)/G[5],Nt=(G[9]-1)/G[5],St=(G[8]-1)/G[0],xt=(yt[8]+1)/yt[0],ie=mt*St,he=mt*xt,jt=nt/(-St+xt),_e=jt*-St;$.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(_e),U.translateZ(jt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const qt=mt+jt,Ot=dt+jt,We=ie-_e,be=he+(nt-_e),A=lt*dt/Ot*qt,w=Nt*dt/Ot*qt;U.projectionMatrix.makePerspective(We,be,A,w,qt,Ot)}function V(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;b.near=C.near=E.near=U.near,b.far=C.far=E.far=U.far,(L!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,B=b.far);const $=U.parent,et=b.cameras;V(b,$);for(let G=0;G<et.length;G++)V(et[G],$);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),U.matrix.copy(b.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const nt=U.children;for(let G=0,yt=nt.length;G<yt;G++)nt[G].updateMatrixWorld(!0);et.length===2?Z(b,E,C):b.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return S};let J=null;function K(U,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const et=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let nt=!1;et.length!==b.cameras.length&&(b.cameras.length=0,nt=!0);for(let G=0;G<et.length;G++){const yt=et[G];let mt=null;if(m!==null)mt=m.getViewport(yt);else{const lt=d.getViewSubImage(f,yt);mt=lt.viewport,G===0&&(t.setRenderTargetTextures(v,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(v))}let dt=x[G];dt===void 0&&(dt=new Ze,dt.layers.enable(G),dt.viewport=new ue,x[G]=dt),dt.matrix.fromArray(yt.transform.matrix),dt.projectionMatrix.fromArray(yt.projectionMatrix),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),G===0&&b.matrix.copy(dt.matrix),nt===!0&&b.cameras.push(dt)}}for(let et=0;et<M.length;et++){const nt=_[et],G=M[et];nt!==null&&G!==void 0&&G.update(nt,$,c||a)}if(J&&J(U,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let et=null;for(const nt of S)$.detectedPlanes.has(nt)||(et===null&&(et=[]),et.push(nt));if(et!==null)for(const nt of et)S.delete(nt),y.delete(nt),n.dispatchEvent({type:"planeremoved",data:nt});for(const nt of $.detectedPlanes)if(!S.has(nt))S.add(nt),y.set(nt,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:nt});else{const G=y.get(nt);nt.lastChangedTime>G&&(y.set(nt,nt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:nt}))}}g=null}const ut=new Ic;ut.setAnimationLoop(K),this.setAnimationLoop=function(U){J=U},this.dispose=function(){}}}function Hg(o,t){function e(h,p){p.color.getRGB(h.fogColor.value,Pc(o)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(r(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?s(h,p,v,M):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===ze&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===ze&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),h.uvTransform.value.copy(M.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function r(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function s(h,p,v,M){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*v,h.scale.value=M*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,v){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ze&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Xg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(M,_){const S=_.program;n.uniformBlockBinding(M,S)}function c(M,_){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const y=_.program;n.updateUBOMapping(M,y);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){const _=d();M.__bindingPointIndex=_;const S=o.createBuffer(),y=M.__size,E=M.usage;return o.bindBuffer(35345,S),o.bufferData(35345,y,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,_,S),S}function d(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=i[M.id],S=M.uniforms,y=M.__cache;o.bindBuffer(35345,_);for(let E=0,C=S.length;E<C;E++){const x=S[E];if(m(x,E,y)===!0){const b=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let B=0;for(let q=0;q<L.length;q++){const I=L[q],R=h(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,b+B,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,b,x.__data)}}o.bindBuffer(35345,null)}function m(M,_,S){const y=M.value;if(S[_]===void 0){if(typeof y=="number")S[_]=y;else{const E=Array.isArray(y)?y:[y],C=[];for(let x=0;x<E.length;x++)C.push(E[x].clone());S[_]=C}return!0}else if(typeof y=="number"){if(S[_]!==y)return S[_]=y,!0}else{const E=Array.isArray(S[_])?S[_]:[S[_]],C=Array.isArray(y)?y:[y];for(let x=0;x<E.length;x++){const b=E[x];if(b.equals(C[x])===!1)return b.copy(C[x]),!0}}return!1}function g(M){const _=M.uniforms;let S=0;const y=16;let E=0;for(let C=0,x=_.length;C<x;C++){const b=_[C],L={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let q=0,I=B.length;q<I;q++){const R=B[q],k=h(R);L.boundary+=k.boundary,L.storage+=k.storage}if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,C>0){E=S%y;const q=y-E;E!==0&&q-L.boundary<0&&(S+=y-E,b.__offset=S)}S+=L.storage}return E=S%y,E>0&&(S+=y-E),M.__size=S,M.__cache={},this}function h(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function v(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:v}}function qg(){const o=gs("canvas");return o.style.display="block",o}function Uc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:qg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const h=this;let p=!1,v=0,M=0,_=null,S=-1,y=null;const E=new ue,C=new ue;let x=null,b=t.width,L=t.height,B=1,q=null,I=null;const R=new ue(0,0,b,L),k=new ue(0,0,b,L);let j=!1;const Z=new Rc;let V=!1,J=!1,K=null;const ut=new oe,U=new wt,$=new F,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return _===null?B:1}let G=e;function yt(T,z){for(let X=0;X<T.length;X++){const N=T[X],Y=t.getContext(N,z);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",At,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),G=yt(z,T),G===null)throw yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,dt,lt,Nt,St,xt,ie,he,jt,_e,qt,Ot,We,be,A,w,W,tt,it,st,vt,P,O,ot;function ht(){mt=new im(G),dt=new $p(G,mt,o),mt.init(dt),P=new Bg(G,mt,dt),lt=new zg(G,mt,dt),Nt=new am,St=new bg,xt=new Ug(G,mt,lt,St,dt,P,Nt),ie=new Jp(h),he=new nm(h),jt=new pf(G,dt),O=new jp(G,mt,jt,dt),_e=new rm(G,jt,Nt,O),qt=new um(G,_e,jt,Nt),it=new cm(G,dt,xt),w=new Kp(St),Ot=new Sg(h,ie,he,mt,dt,O,w),We=new Hg(h,St),be=new Tg,A=new Dg(mt,dt),tt=new Yp(h,ie,he,lt,qt,u,a),W=new Ng(h,qt,dt),ot=new Xg(G,Nt,dt,lt),st=new Zp(G,mt,Nt,dt),vt=new sm(G,mt,Nt,dt),Nt.programs=Ot.programs,h.capabilities=dt,h.extensions=mt,h.properties=St,h.renderLists=be,h.shadowMap=W,h.state=lt,h.info=Nt}ht();const at=new Wg(h,G);this.xr=at,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(b,L,!1))},this.getSize=function(T){return T.set(b,L)},this.setSize=function(T,z,X){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,L=z,t.width=Math.floor(T*B),t.height=Math.floor(z*B),X!==!1&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(b*B,L*B).floor()},this.setDrawingBufferSize=function(T,z,X){b=T,L=z,B=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,X,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,X,N),lt.viewport(E.copy(R).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,z,X,N){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,z,X,N),lt.scissor(C.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){lt.setScissorTest(j=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let N=0;T&&(N|=16384),z&&(N|=256),X&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",At,!1),be.dispose(),A.dispose(),St.dispose(),ie.dispose(),he.dispose(),qt.dispose(),O.dispose(),ot.dispose(),Ot.dispose(),at.dispose(),at.removeEventListener("sessionstart",ct),at.removeEventListener("sessionend",gt),K&&(K.dispose(),K=null),Ft.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Nt.autoReset,z=W.enabled,X=W.autoUpdate,N=W.needsUpdate,Y=W.type;ht(),Nt.autoReset=T,W.enabled=z,W.autoUpdate=X,W.needsUpdate=N,W.type=Y}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const z=T.target;z.removeEventListener("dispose",Pt),Ut(z)}function Ut(T){D(T),St.remove(T)}function D(T){const z=St.get(T).programs;z!==void 0&&(z.forEach(function(X){Ot.releaseProgram(X)}),T.isShaderMaterial&&Ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,N,Y,_t){z===null&&(z=et);const Mt=Y.isMesh&&Y.matrixWorld.determinant()<0,Tt=qu(T,z,X,N,Y);lt.setMaterial(N,Mt);let Et=X.index,It=1;N.wireframe===!0&&(Et=_e.getWireframeAttribute(X),It=2);const Lt=X.drawRange,Dt=X.attributes.position;let Zt=Lt.start*It,Pe=(Lt.start+Lt.count)*It;_t!==null&&(Zt=Math.max(Zt,_t.start*It),Pe=Math.min(Pe,(_t.start+_t.count)*It)),Et!==null?(Zt=Math.max(Zt,0),Pe=Math.min(Pe,Et.count)):Dt!=null&&(Zt=Math.max(Zt,0),Pe=Math.min(Pe,Dt.count));const _n=Pe-Zt;if(_n<0||_n===1/0)return;O.setup(Y,N,Tt,X,Et);let qn,$t=st;if(Et!==null&&(qn=jt.get(Et),$t=vt,$t.setIndex(qn)),Y.isMesh)N.wireframe===!0?(lt.setLineWidth(N.wireframeLinewidth*nt()),$t.setMode(1)):$t.setMode(4);else if(Y.isLine){let Rt=N.linewidth;Rt===void 0&&(Rt=1),lt.setLineWidth(Rt*nt()),Y.isLineSegments?$t.setMode(1):Y.isLineLoop?$t.setMode(2):$t.setMode(3)}else Y.isPoints?$t.setMode(0):Y.isSprite&&$t.setMode(4);if(Y.isInstancedMesh)$t.renderInstances(Zt,_n,Y.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ns=Math.min(X.instanceCount,Rt);$t.renderInstances(Zt,_n,Ns)}else $t.render(Zt,_n)},this.compile=function(T,z){function X(N,Y,_t){N.transparent===!0&&N.side===On&&N.forceSinglePass===!1?(N.side=ze,N.needsUpdate=!0,He(N,Y,_t),N.side=Gn,N.needsUpdate=!0,He(N,Y,_t),N.side=On):He(N,Y,_t)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),T.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let _t=0;_t<Y.length;_t++){const Mt=Y[_t];X(Mt,T,N)}else X(Y,T,N)}),g.pop(),f=null};let H=null;function Q(T){H&&H(T)}function ct(){Ft.stop()}function gt(){Ft.start()}const Ft=new Ic;Ft.setAnimationLoop(Q),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){H=T,at.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},at.addEventListener("sessionstart",ct),at.addEventListener("sessionend",gt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,z,_),f=A.get(T,g.length),f.init(),g.push(f),ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(ut),J=this.localClippingEnabled,V=w.init(this.clippingPlanes,J),d=be.get(T,m.length),d.init(),m.push(d),re(T,z,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(q,I),V===!0&&w.beginShadows();const X=f.state.shadowsArray;if(W.render(X,T,z),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(d,T),f.setupLights(h.physicallyCorrectLights),z.isArrayCamera){const N=z.cameras;for(let Y=0,_t=N.length;Y<_t;Y++){const Mt=N[Y];fe(d,T,Mt,Mt.viewport)}}else fe(d,T,z);_!==null&&(xt.updateMultisampleRenderTarget(_),xt.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(h,T,z),O.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function re(T,z,X,N){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){N&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Mt=qt.update(T),Tt=T.material;Tt.visible&&d.push(T,Mt,Tt,X,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Nt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Nt.render.frame),!T.frustumCulled||Z.intersectsObject(T))){N&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const Mt=qt.update(T),Tt=T.material;if(Array.isArray(Tt)){const Et=Mt.groups;for(let It=0,Lt=Et.length;It<Lt;It++){const Dt=Et[It],Zt=Tt[Dt.materialIndex];Zt&&Zt.visible&&d.push(T,Mt,Zt,X,$.z,Dt)}}else Tt.visible&&d.push(T,Mt,Tt,X,$.z,null)}}const _t=T.children;for(let Mt=0,Tt=_t.length;Mt<Tt;Mt++)re(_t[Mt],z,X,N)}function fe(T,z,X,N){const Y=T.opaque,_t=T.transmissive,Mt=T.transparent;f.setupLightsView(X),V===!0&&w.setGlobalState(h.clippingPlanes,X),_t.length>0&&Xn(Y,z,X),N&&lt.viewport(E.copy(N)),Y.length>0&&Vt(Y,z,X),_t.length>0&&Vt(_t,z,X),Mt.length>0&&Vt(Mt,z,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Xn(T,z,X){const N=dt.isWebGL2;K===null&&(K=new pi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?wr:fi,minFilter:br,samples:N&&r===!0?4:0})),h.getDrawingBufferSize(U),N?K.setSize(U.x,U.y):K.setSize(Na(U.x),Na(U.y));const Y=h.getRenderTarget();h.setRenderTarget(K),h.clear();const _t=h.toneMapping;h.toneMapping=An,Vt(T,z,X),h.toneMapping=_t,xt.updateMultisampleRenderTarget(K),xt.updateRenderTargetMipmap(K),h.setRenderTarget(Y)}function Vt(T,z,X){const N=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,_t=T.length;Y<_t;Y++){const Mt=T[Y],Tt=Mt.object,Et=Mt.geometry,It=N===null?Mt.material:N,Lt=Mt.group;Tt.layers.test(X.layers)&&gn(Tt,z,X,Et,It,Lt)}}function gn(T,z,X,N,Y,_t){T.onBeforeRender(h,z,X,N,Y,_t),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(h,z,X,N,T,_t),Y.transparent===!0&&Y.side===On&&Y.forceSinglePass===!1?(Y.side=ze,Y.needsUpdate=!0,h.renderBufferDirect(X,z,N,Y,T,_t),Y.side=Gn,Y.needsUpdate=!0,h.renderBufferDirect(X,z,N,Y,T,_t),Y.side=On):h.renderBufferDirect(X,z,N,Y,T,_t),T.onAfterRender(h,z,X,N,Y,_t)}function He(T,z,X){z.isScene!==!0&&(z=et);const N=St.get(T),Y=f.state.lights,_t=f.state.shadowsArray,Mt=Y.state.version,Tt=Ot.getParameters(T,Y.state,_t,z,X),Et=Ot.getProgramCacheKey(Tt);let It=N.programs;N.environment=T.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(T.isMeshStandardMaterial?he:ie).get(T.envMap||N.environment),It===void 0&&(T.addEventListener("dispose",Pt),It=new Map,N.programs=It);let Lt=It.get(Et);if(Lt!==void 0){if(N.currentProgram===Lt&&N.lightsStateVersion===Mt)return Do(T,Tt),Lt}else Tt.uniforms=Ot.getUniforms(T),T.onBuild(X,Tt,h),T.onBeforeCompile(Tt,h),Lt=Ot.acquireProgram(Tt,Et),It.set(Et,Lt),N.uniforms=Tt.uniforms;const Dt=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=w.uniform),Do(T,Tt),N.needsLights=ju(T),N.lightsStateVersion=Mt,N.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.directionalShadowMap.value=Y.state.directionalShadowMap,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotShadowMap.value=Y.state.spotShadowMap,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMap.value=Y.state.pointShadowMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Zt=Lt.getUniforms(),Pe=cs.seqWithValue(Zt.seq,Dt);return N.currentProgram=Lt,N.uniformsList=Pe,Lt}function Do(T,z){const X=St.get(T);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function qu(T,z,X,N,Y){z.isScene!==!0&&(z=et),xt.resetTextureUnits();const _t=z.fog,Mt=N.isMeshStandardMaterial?z.environment:null,Tt=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:di,Et=(N.isMeshStandardMaterial?he:ie).get(N.envMap||Mt),It=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Lt=!!N.normalMap&&!!X.attributes.tangent,Dt=!!X.morphAttributes.position,Zt=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color,_n=N.toneMapped?h.toneMapping:An,qn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=qn!==void 0?qn.length:0,Rt=St.get(N),Ns=f.state.lights;if(V===!0&&(J===!0||T!==y)){const Le=T===y&&N.id===S;w.setState(N,T,Le)}let se=!1;N.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ns.state.version||Rt.outputEncoding!==Tt||Y.isInstancedMesh&&Rt.instancing===!1||!Y.isInstancedMesh&&Rt.instancing===!0||Y.isSkinnedMesh&&Rt.skinning===!1||!Y.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==Et||N.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==w.numPlanes||Rt.numIntersection!==w.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Lt||Rt.morphTargets!==Dt||Rt.morphNormals!==Zt||Rt.morphColors!==Pe||Rt.toneMapping!==_n||dt.isWebGL2===!0&&Rt.morphTargetsCount!==$t)&&(se=!0):(se=!0,Rt.__version=N.version);let Yn=Rt.currentProgram;se===!0&&(Yn=He(N,z,Y));let Ro=!1,ar=!1,zs=!1;const xe=Yn.getUniforms(),jn=Rt.uniforms;if(lt.useProgram(Yn.program)&&(Ro=!0,ar=!0,zs=!0),N.id!==S&&(S=N.id,ar=!0),Ro||y!==T){if(xe.setValue(G,"projectionMatrix",T.projectionMatrix),dt.logarithmicDepthBuffer&&xe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,ar=!0,zs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Le=xe.map.cameraPosition;Le!==void 0&&Le.setValue(G,$.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&xe.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){xe.setOptional(G,Y,"bindMatrix"),xe.setOptional(G,Y,"bindMatrixInverse");const Le=Y.skeleton;Le&&(dt.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),xe.setValue(G,"boneTexture",Le.boneTexture,xt),xe.setValue(G,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=X.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&dt.isWebGL2===!0)&&it.update(Y,X,N,Yn),(ar||Rt.receiveShadow!==Y.receiveShadow)&&(Rt.receiveShadow=Y.receiveShadow,xe.setValue(G,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(jn.envMap.value=Et,jn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),ar&&(xe.setValue(G,"toneMappingExposure",h.toneMappingExposure),Rt.needsLights&&Yu(jn,zs),_t&&N.fog===!0&&We.refreshFogUniforms(jn,_t),We.refreshMaterialUniforms(jn,N,B,L,K),cs.upload(G,Rt.uniformsList,jn,xt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(cs.upload(G,Rt.uniformsList,jn,xt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xe.setValue(G,"center",Y.center),xe.setValue(G,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(G,"normalMatrix",Y.normalMatrix),xe.setValue(G,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Le=N.uniformsGroups;for(let Bs=0,Zu=Le.length;Bs<Zu;Bs++)if(dt.isWebGL2){const Io=Le[Bs];ot.update(Io,Yn),ot.bind(Io,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Yu(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function ju(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,z,X){St.get(T.texture).__webglTexture=z,St.get(T.depthTexture).__webglTexture=X;const N=St.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const X=St.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){_=T,v=z,M=X;let N=!0,Y=null,_t=!1,Mt=!1;if(T){const Et=St.get(T);Et.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),N=!1):Et.__webglFramebuffer===void 0?xt.setupRenderTarget(T):Et.__hasExternalTextures&&xt.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Mt=!0);const Lt=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Lt[z],_t=!0):dt.isWebGL2&&T.samples>0&&xt.useMultisampledRTT(T)===!1?Y=St.get(T).__webglMultisampledFramebuffer:Y=Lt,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(R).multiplyScalar(B).floor(),C.copy(k).multiplyScalar(B).floor(),x=j;if(lt.bindFramebuffer(36160,Y)&&dt.drawBuffers&&N&&lt.drawBuffers(T,Y),lt.viewport(E),lt.scissor(C),lt.setScissorTest(x),_t){const Et=St.get(T.texture);G.framebufferTexture2D(36160,36064,34069+z,Et.__webglTexture,X)}else if(Mt){const Et=St.get(T.texture),It=z||0;G.framebufferTextureLayer(36160,36064,Et.__webglTexture,X||0,It)}S=-1},this.readRenderTargetPixels=function(T,z,X,N,Y,_t,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){lt.bindFramebuffer(36160,Tt);try{const Et=T.texture,It=Et.format,Lt=Et.type;if(It!==an&&P.convert(It)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Lt===wr&&(mt.has("EXT_color_buffer_half_float")||dt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Lt!==fi&&P.convert(Lt)!==G.getParameter(35738)&&!(Lt===si&&(dt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-N&&X>=0&&X<=T.height-Y&&G.readPixels(z,X,N,Y,P.convert(It),P.convert(Lt),_t)}finally{const Et=_!==null?St.get(_).__webglFramebuffer:null;lt.bindFramebuffer(36160,Et)}}},this.copyFramebufferToTexture=function(T,z,X=0){const N=Math.pow(2,-X),Y=Math.floor(z.image.width*N),_t=Math.floor(z.image.height*N);xt.setTexture2D(z,0),G.copyTexSubImage2D(3553,X,0,0,T.x,T.y,Y,_t),lt.unbindTexture()},this.copyTextureToTexture=function(T,z,X,N=0){const Y=z.image.width,_t=z.image.height,Mt=P.convert(X.format),Tt=P.convert(X.type);xt.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,N,T.x,T.y,Y,_t,Mt,Tt,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,N,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Mt,z.mipmaps[0].data):G.texSubImage2D(3553,N,T.x,T.y,Mt,Tt,z.image),N===0&&X.generateMipmaps&&G.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,N,Y=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=T.max.x-T.min.x+1,Mt=T.max.y-T.min.y+1,Tt=T.max.z-T.min.z+1,Et=P.convert(N.format),It=P.convert(N.type);let Lt;if(N.isData3DTexture)xt.setTexture3D(N,0),Lt=32879;else if(N.isDataArrayTexture)xt.setTexture2DArray(N,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const Dt=G.getParameter(3314),Zt=G.getParameter(32878),Pe=G.getParameter(3316),_n=G.getParameter(3315),qn=G.getParameter(32877),$t=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,$t.width),G.pixelStorei(32878,$t.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Lt,Y,z.x,z.y,z.z,_t,Mt,Tt,Et,It,$t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Lt,Y,z.x,z.y,z.z,_t,Mt,Tt,Et,$t.data)):G.texSubImage3D(Lt,Y,z.x,z.y,z.z,_t,Mt,Tt,Et,It,$t),G.pixelStorei(3314,Dt),G.pixelStorei(32878,Zt),G.pixelStorei(3316,Pe),G.pixelStorei(3315,_n),G.pixelStorei(32877,qn),Y===0&&N.generateMipmaps&&G.generateMipmap(Lt),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){v=0,M=0,_=null,lt.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yg extends Uc{}Yg.prototype.isWebGL1Renderer=!0;class so{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class jg extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Bc extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xl=new oe,Ua=new Tc,rs=new As,ss=new F;class Zg extends Se{constructor(t=new un,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(i),rs.radius+=r,t.ray.intersectsSphere(rs)===!1)return;Xl.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(Xl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,h=m;g<h;g++){const p=c.getX(g);ss.fromBufferAttribute(d,p),ql(ss,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,h=m;g<h;g++)ss.fromBufferAttribute(d,g),ql(ss,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function ql(o,t,e,n,i,r,a){const s=Ua.distanceSqToPoint(o);if(s<e){const l=new F;Ua.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:a})}}class ao extends un{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];s(i),c(n),u(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(M){const _=new F,S=new F,y=new F;for(let E=0;E<e.length;E+=3)m(e[E+0],_),m(e[E+1],S),m(e[E+2],y),l(_,S,y,M)}function l(M,_,S,y){const E=y+1,C=[];for(let x=0;x<=E;x++){C[x]=[];const b=M.clone().lerp(S,x/E),L=_.clone().lerp(S,x/E),B=E-x;for(let q=0;q<=B;q++)q===0&&x===E?C[x][q]=b:C[x][q]=b.clone().lerp(L,q/B)}for(let x=0;x<E;x++)for(let b=0;b<2*(E-x)-1;b++){const L=Math.floor(b/2);b%2===0?(f(C[x][L+1]),f(C[x+1][L]),f(C[x][L])):(f(C[x][L+1]),f(C[x+1][L+1]),f(C[x+1][L]))}}function c(M){const _=new F;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(M),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function u(){const M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const S=p(M)/2/Math.PI+.5,y=v(M)/Math.PI+.5;a.push(S,1-y)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const _=a[M+0],S=a[M+2],y=a[M+4],E=Math.max(_,S,y),C=Math.min(_,S,y);E>.9&&C<.1&&(_<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,_){const S=M*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const M=new F,_=new F,S=new F,y=new F,E=new wt,C=new wt,x=new wt;for(let b=0,L=0;b<r.length;b+=9,L+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),E.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),y.copy(M).add(_).add(S).divideScalar(3);const B=p(y);h(E,L+0,M,B),h(C,L+2,_,B),h(x,L+4,S,B)}}function h(M,_,S,y){y<0&&M.x===1&&(a[_]=M.x-1),S.x===0&&S.z===0&&(a[_]=y/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function v(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}static fromJSON(t){return new ao(t.vertices,t.indices,t.radius,t.details)}}class oo extends ao{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class lo extends un{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const s=[],l=[],c=[],u=[],d=new F,f=new F,m=new F,g=new F,h=new F,p=new F,v=new F;for(let _=0;_<=n;++_){const S=_/n*r*Math.PI*2;M(S,r,a,t,m),M(S+.01,r,a,t,g),p.subVectors(g,m),v.addVectors(g,m),h.crossVectors(p,v),v.crossVectors(h,p),h.normalize(),v.normalize();for(let y=0;y<=i;++y){const E=y/i*Math.PI*2,C=-e*Math.cos(E),x=e*Math.sin(E);d.x=m.x+(C*v.x+x*h.x),d.y=m.y+(C*v.y+x*h.y),d.z=m.z+(C*v.z+x*h.z),l.push(d.x,d.y,d.z),f.subVectors(d,m).normalize(),c.push(f.x,f.y,f.z),u.push(_/n),u.push(y/i)}}for(let _=1;_<=n;_++)for(let S=1;S<=i;S++){const y=(i+1)*(_-1)+(S-1),E=(i+1)*_+(S-1),C=(i+1)*_+S,x=(i+1)*(_-1)+S;s.push(y,E,x),s.push(E,C,x)}this.setIndex(s),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2));function M(_,S,y,E,C){const x=Math.cos(_),b=Math.sin(_),L=y/S*_,B=Math.cos(L);C.x=E*(2+B)*.5*x,C.y=E*(2+B)*b*.5,C.z=E*Math.sin(L)*.5}}static fromJSON(t){return new lo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class $g extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Kg extends $g{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yl(){return(typeof performance>"u"?Date:performance).now()}class jl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function bn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function kc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ji={duration:.5,overwrite:!1,delay:0},co,me,Jt,$e=1e8,kt=1/$e,Ba=Math.PI*2,Qg=Ba/4,t_=0,Gc=Math.sqrt,e_=Math.cos,n_=Math.sin,le=function(t){return typeof t=="string"},Xt=function(t){return typeof t=="function"},Cn=function(t){return typeof t=="number"},uo=function(t){return typeof t>"u"},mn=function(t){return typeof t=="object"},Ee=function(t){return t!==!1},Vc=function(){return typeof window<"u"},as=function(t){return Xt(t)||le(t)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ge=Array.isArray,ka=/(?:-?\.?\d|\.)+/gi,Hc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xc=/[+-]=-?[.\d]+/,qc=/[^,'"\[\]\s]+/gi,i_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Ye,Ga,ho,Ge={},_s={},Yc,jc=function(t){return(_s=_i(t,Ge))&&Ve},fo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xs=function(t,e){return!e&&console.warn(t)},Zc=function(t,e){return t&&(Ge[t]=e)&&_s&&(_s[t]=e)||Ge},Er=function(){return 0},r_={suppressEvents:!0,isStart:!0,kill:!1},us={suppressEvents:!0,kill:!1},s_={suppressEvents:!0},po={},Bn=[],Va={},$c,Oe={},ya={},Zl=30,hs=[],mo="",go=function(t){var e=t[0],n,i;if(mn(e)||Xt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=hs.length;i--&&!hs[i].targetTest(e););n=hs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xu(t[i],n)))||t.splice(i,1);return t},ci=function(t){return t._gsap||go(Ke(t))[0]._gsap},Kc=function(t,e,n){return(n=t[e])&&Xt(n)?t[e]():uo(n)&&t.getAttribute&&t.getAttribute(e)||n},Ae=function(t,e){return(t=t.split(",")).forEach(e)||t},Yt=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},Xi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},a_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},vs=function(){var t=Bn.length,e=Bn.slice(0),n,i;for(Va={},Bn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jc=function(t,e,n,i){Bn.length&&!me&&vs(),t.render(e,n,i||me&&e<0&&(t._initted||t._startAt)),Bn.length&&!me&&vs()},Qc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qc).length<2?e:le(t)?t.trim():t},tu=function(t){return t},tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},o_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_i=function(t,e){for(var n in e)t[n]=e[n];return t},$l=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},ys=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},yr=function(t){var e=t.parent||Wt,n=t.keyframes?o_(ge(t.keyframes)):tn;if(Ee(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},l_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},eu=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ds=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ui=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},c_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Wa=function(t,e,n,i){return t._startAt&&(me?t._startAt.revert(us):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},u_=function o(t){return!t||t._ts&&o(t.parent)},Kl=function(t){return t._repeat?Qi(t._tTime,t=t.duration()+t._rDelay)*t:0},Qi=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ms=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rs=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||kt)||0))},Is=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rs(t),n._dirty||ui(n,t)),t},nu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ms(t.rawTime(),e),(!e._dur||zr(0,e.totalDuration(),n)-e._tTime>kt)&&e.render(n,!0)),ui(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-kt}},dn=function(t,e,n,i){return e.parent&&Vn(e),e._start=ce((Cn(n)?n:n||t!==Wt?qe(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),eu(t,e,"_first","_last",t._sort?"_start":0),Ha(e)||(t._recent=e),i||nu(t,e),t._ts<0&&Is(t,t._tTime),t},iu=function(t,e){return(Ge.ScrollTrigger||fo("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},ru=function(t,e,n,i,r){if(xo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!me&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$c!==Fe.frame)return Bn.push(t),t._lazy=[r,i],1},h_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ha=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},f_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&h_(t)&&!(!t._initted&&Ha(t))||(t._ts<0||t._dp._ts<0)&&!Ha(t))?0:1,s=t._rDelay,l=0,c,u,d;if(s&&t._repeat&&(l=zr(0,t._tDur,e),u=Qi(l,s),t._yoyo&&u&1&&(a=1-a),u!==Qi(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||me||i||t._zTime===kt||!e&&t._zTime){if(!t._initted&&ru(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?kt:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Wa(t,e,n,!0),t._onUpdate&&!n&&Je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vn(t,1),!n&&!me&&(Je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},d_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},tr=function(t,e,n,i){var r=t._repeat,a=ce(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ce(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Is(t,t._tTime=t._tDur*s),t.parent&&Rs(t),n||ui(t.parent,t),t},Jl=function(t){return t instanceof Te?ui(t):tr(t,t._dur)},p_={_start:0,endTime:Er,totalDuration:Er},qe=function o(t,e,n){var i=t.labels,r=t._recent||p_,a=t.duration()>=$e?r.endTime(!1):t._dur,s,l,c;return le(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(ge(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},Mr=function(t,e,n){var i=Cn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ee(l.vars.inherit)&&l.parent;a.immediateRender=Ee(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new te(e[0],a,e[r+1])},Hn=function(t,e){return t||t===0?e(t):e},zr=function(t,e,n){return n<t?t:n>e?e:n},pe=function(t,e){return!le(t)||!(e=i_.exec(t))?"":e[1]},m_=function(t,e,n){return Hn(n,function(i){return zr(t,e,i)})},Xa=[].slice,su=function(t,e){return t&&mn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mn(t[0]))&&!t.nodeType&&t!==Ye},g_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return le(i)&&!e||su(i,1)?(r=n).push.apply(r,Ke(i)):n.push(i)})||n},Ke=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):le(t)&&!n&&(Ga||!er())?Xa.call((e||ho).querySelectorAll(t),0):ge(t)?g_(t,n):su(t)?Xa.call(t,0):t?[t]:[]},qa=function(t){return t=Ke(t)[0]||xs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ke(e,n.querySelectorAll?n:n===t?xs("Invalid scope")||ho.createElement("div"):t)}},au=function(t){return t.sort(function(){return .5-Math.random()})},ou=function(t){if(Xt(t))return t;var e=mn(t)?t:{each:t},n=hi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,d=i;return le(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],d=i[1]),function(f,m,g){var h=(g||e).length,p=a[h],v,M,_,S,y,E,C,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,$e])[1],!b){for(C=-$e;C<(C=g[b++].getBoundingClientRect().left)&&b<h;);b--}for(p=a[h]=[],v=l?Math.min(b,h)*u-.5:i%b,M=b===$e?0:l?h*d/b-.5:i/b|0,C=0,x=$e,E=0;E<h;E++)_=E%b-v,S=M-(E/b|0),p[E]=y=c?Math.abs(c==="y"?S:_):Gc(_*_+S*S),y>C&&(C=y),y<x&&(x=y);i==="random"&&au(p),p.max=C-x,p.min=x,p.v=h=(parseFloat(e.amount)||parseFloat(e.each)*(b>h?h-1:c?c==="y"?h/b:b:Math.max(b,h/b))||0)*(i==="edges"?-1:1),p.b=h<0?r-h:r,p.u=pe(e.amount||e.each)||0,n=n&&h<0?mu(n):n}return h=(p[f]-p.min)/p.max||0,ce(p.b+(n?n(h):h)*p.v)+p.u}},Ya=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Cn(n)?0:pe(n))}},lu=function(t,e){var n=ge(t),i,r;return!n&&mn(t)&&(i=n=t.radius||$e,t.values?(t=Ke(t.values),(r=!Cn(t[0]))&&(i*=i)):t=Ya(t.increment)),Hn(e,n?Xt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=$e,u=0,d=t.length,f,m;d--;)r?(f=t[d].x-s,m=t[d].y-l,f=f*f+m*m):f=Math.abs(t[d]-s),f<c&&(c=f,u=d);return u=!i||c<=i?t[u]:a,r||u===a||Cn(a)?u:u+pe(a)}:Ya(t))},cu=function(t,e,n,i){return Hn(ge(t)?!e:n===!0?!!(n=0):!i,function(){return ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},__=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},x_=function(t,e){return function(n){return t(parseFloat(n))+(e||pe(n))}},v_=function(t,e,n){return hu(t,e,0,1,n)},uu=function(t,e,n){return Hn(n,function(i){return t[~~e(i)]})},y_=function o(t,e,n){var i=e-t;return ge(t)?uu(t,o(0,t.length),e):Hn(n,function(r){return(i+(r-t)%i)%i+t})},M_=function o(t,e,n){var i=e-t,r=i*2;return ge(t)?uu(t,o(0,t.length-1),e):Hn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ar=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?qc:ka),n+=t.substr(e,i-e)+cu(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},hu=function(t,e,n,i,r){var a=e-t,s=i-n;return Hn(r,function(l){return n+((l-t)/a*s||0)})},S_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=le(t),s={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ge(t)&&!ge(e)){for(u=[],d=t.length,f=d-2,c=1;c<d;c++)u.push(o(t[c-1],t[c]));d--,r=function(g){g*=d;var h=Math.min(f,~~g);return u[h](g-h)},n=e}else i||(t=_i(ge(t)?[]:{},t));if(!u){for(l in e)_o.call(s,t,l,"get",e[l]);r=function(g){return Mo(g,s)||(a?t.p:t)}}}return Hn(n,r)},Ql=function(t,e,n){var i=t.labels,r=$e,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Je=function(t,e,n){var i=t.vars,r=i[e],a=Jt,s=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Bn.length&&vs(),s&&(Jt=s),u=l?r.apply(c,l):r.call(c),Jt=a,u},xr=function(t){return Vn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!me),t.progress()<1&&Je(t,"onInterrupt"),t},Vi,b_=function(t){t=!t.name&&t.default||t;var e=t.name,n=Xt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Er,render:Mo,add:_o,kill:B_,modifier:U_,rawVars:0},a={targetTest:0,get:0,getSetter:yo,aliases:{},register:0};if(er(),t!==i){if(Oe[e])return;tn(i,tn(ys(t,r),a)),_i(i.prototype,_i(r,ys(t,a))),Oe[i.prop=e]=i,t.targetTest&&(hs.push(i),po[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zc(e,i),t.register&&t.register(Ve,i,Ce)},Bt=255,vr={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Ma=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Bt+.5|0},fu=function(t,e,n){var i=t?Cn(t)?[t>>16,t>>8&Bt,t&Bt]:0:vr.black,r,a,s,l,c,u,d,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vr[t])i=vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Bt,i&Bt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Bt,t&Bt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ka),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ma(l+1/3,r,a),i[1]=Ma(l,r,a),i[2]=Ma(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Hc),n&&i.length<4&&(i[3]=1),i}else i=t.match(ka)||vr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Bt,a=i[1]/Bt,s=i[2]/Bt,d=Math.max(r,a,s),f=Math.min(r,a,s),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===r?(a-s)/m+(a<s?6:0):d===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},du=function(t){var e=[],n=[],i=-1;return t.split(kn).forEach(function(r){var a=r.match(Gi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},tc=function(t,e,n){var i="",r=(t+i).match(kn),a=e?"hsla(":"rgba(",s=0,l,c,u,d;if(!r)return t;if(r=r.map(function(f){return(f=fu(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=du(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(kn,"1").split(Gi),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(kn),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},kn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),w_=/hsl[a]?\(/,pu=function(t){var e=t.join(" "),n;if(kn.lastIndex=0,kn.test(e))return n=w_.test(e),t[1]=tc(t[1],n),t[0]=tc(t[0],n,du(t[1])),!0},Cr,Fe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,d,f,m,g=function h(p){var v=o()-i,M=p===!0,_,S,y,E;if(v>t&&(n+=v-e),i+=v,y=i-n,_=y-a,(_>0||M)&&(E=++d.frame,f=y-d.time*1e3,d.time=y=y/1e3,a+=_+(_>=r?4:r-_),S=1),M||(l=c(h)),S)for(m=0;m<s.length;m++)s[m](y,f,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Yc&&(!Ga&&Vc()&&(Ye=Ga=window,ho=Ye.document||{},Ge.gsap=Ve,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Ve.version),jc(_s||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame),l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Cr=1,g(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),Cr=0,c=Er},lagSmoothing:function(p,v){t=p||1/0,e=Math.min(v||33,t)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,v,M){var _=v?function(S,y,E,C){p(S,y,E,C),d.remove(_)}:p;return d.remove(p),s[M?"unshift":"push"](_),er(),_},remove:function(p,v){~(v=s.indexOf(p))&&s.splice(v,1)&&m>=v&&m--},_listeners:s},d}(),er=function(){return!Cr&&Fe.wake()},Ct={},T_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,A_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(E_,"").trim():+c,i=l.substr(s+1).trim();return e},C_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},P_=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[A_(e[1])]:C_(t).split(",").map(Qc)):Ct._CE&&T_.test(t)?Ct._CE("",t):n},mu=function(t){return function(e){return 1-t(1-e)}},gu=function o(t,e){for(var n=t._first,i;n;)n instanceof Te?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},hi=function(t,e){return t&&(Xt(t)?t:Ct[t]||P_(t))||e},yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ae(t,function(s){Ct[s]=Ge[s]=r,Ct[a=s.toLowerCase()]=n;for(var l in r)Ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ct[s+"."+l]=r[l]}),r},_u=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sa=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ba*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*n_((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:_u(s);return r=Ba/r,l.config=function(c,u){return o(t,c,u)},l},ba=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:_u(n);return i.config=function(r){return o(t,r)},i};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;yi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;yi("Elastic",Sa("in"),Sa("out"),Sa());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};yi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);yi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});yi("Circ",function(o){return-(Gc(1-o*o)-1)});yi("Sine",function(o){return o===1?1:-e_(o*Qg)+1});yi("Back",ba("in"),ba("out"),ba());Ct.SteppedEase=Ct.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-kt;return function(s){return((i*zr(0,a,s)|0)+r)*n}}};Ji.ease=Ct["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return mo+=o+","+o+"Params,"});var xu=function(t,e){this.id=t_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Kc,this.set=e?e.getSetter:yo},nr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,tr(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Cr||Fe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,tr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Is(this,n),!r._dp||r.parent||nu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qi(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ms(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-kt?0:this._rts,this.totalTime(zr(-this._delay,this._tDur,i),!0),Rs(this),c_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ee(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ms(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=s_);var i=me;return me=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),me=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),Ee(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ee(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-kt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-kt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Xt(n)?n:tu,s=function(){var c=i.then;i.then=null,Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){xr(this)},o}();tn(nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var Te=function(o){kc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ee(n.sortChildren),Wt&&dn(n.parent||Wt,bn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&iu(bn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Mr(0,arguments,this),this},e.from=function(i,r,a){return Mr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return Mr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,yr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new te(i,r,qe(this,a),1),this},e.call=function(i,r,a){return dn(this,te.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new te(i,a,qe(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,yr(a).immediateRender=Ee(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,d){return s.startAt=a,yr(s).immediateRender=Ee(s.immediateRender),this.staggerTo(i,r,s,l,c,u,d)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ce(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,h,p,v,M,_,S,y,E,C;if(this!==Wt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,S=this._start,_=this._ts,v=!_,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ce(u%p),u===l?(h=this._repeat,f=c):(h=~~(u/p),h&&h===u/p&&(f=c,h--),f>c&&(f=c)),y=Qi(this._tTime,p),!s&&this._tTime&&y!==h&&(y=h),E&&h&1&&(f=c-f,C=1),h!==y&&!this._lock){var x=E&&y&1,b=x===(E&&h&1);if(h<y&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(C?0:ce(h*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Je(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;gu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=d_(this,ce(s),ce(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(Je(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!v){M=0,g&&(u+=this._zTime=-kt);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||me&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!v){M=0,g&&(u+=this._zTime=L?-kt:kt);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-kt)._zTime=f>=s?1:-1,this._ts))return this._start=S,Rs(this),this.render(i,r,a);this._onUpdate&&!r&&Je(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Je(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Cn(r)||(r=qe(this,r,i)),!(i instanceof nr)){if(ge(i))return i.forEach(function(s){return a.add(s,r)}),this;if(le(i))return this.addLabel(i,r);if(Xt(i))i=te.delayedCall(0,i);else return this}return this!==i?dn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-$e);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof te?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return le(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(Ds(this,i),i===this._recent&&(this._recent=this._last),ui(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(Fe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=qe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=te.delayedCall(0,r||Er,a);return s.data="isPause",this._hasPause=1,dn(this,s,qe(this,i))},e.removePause=function(i){var r=this._first;for(i=qe(this,i);r;)r._start===i&&r.data==="isPause"&&Vn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Fn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Ke(i),l=this._first,c=Cn(r),u;l;)l instanceof te?a_(l._targets,s)&&(c?(!Fn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=qe(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,g=te.to(a,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||kt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&tr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,tn({startAt:{time:qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ql(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ql(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ui(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ui(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=$e,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,dn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;tr(a,a===Wt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Wt._ts&&(Jc(Wt,Ms(i,Wt)),$c=Fe.frame),Fe.frame>=Zl){Zl+=ke.autoSleep||120;var r=Wt._first;if((!r||!r._ts)&&ke.autoSleep&&Fe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Fe.sleep()}}},t}(nr);tn(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var L_=function(t,e,n,i,r,a,s){var l=new Ce(this._pt,t,e,0,1,wu,null,r),c=0,u=0,d,f,m,g,h,p,v,M;for(l.b=n,l.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=Ar(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(va)||[];d=va.exec(i);)g=d[0],h=i.substring(c,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:p,c:g.charAt(1)==="="?Xi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=va.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Xc.test(i)||v)&&(l.e=0),this._pt=l,l},_o=function(t,e,n,i,r,a,s,l,c,u){Xt(i)&&(i=i(r||0,t,a));var d=t[e],f=n!=="get"?n:Xt(d)?c?t[e.indexOf("set")||!Xt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=Xt(d)?c?F_:Su:vo,g;if(le(i)&&(~i.indexOf("random(")&&(i=Ar(i)),i.charAt(1)==="="&&(g=Xi(f,i)+(pe(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ja)return!isNaN(f*i)&&i!==""?(g=new Ce(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?z_:bu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,t),this._pt=g):(!d&&!(e in t)&&fo(e,i),L_.call(this,t,e,f,i,m,l||ke.stringFilter,c))},D_=function(t,e,n,i,r){if(Xt(t)&&(t=Sr(t,r,e,n,i)),!mn(t)||t.style&&t.nodeType||ge(t)||Wc(t))return le(t)?Sr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Sr(t[s],r,e,n,i);return a},vu=function(t,e,n,i,r,a){var s,l,c,u;if(Oe[t]&&(s=new Oe[t]).init(r,s.rawVars?e[t]:D_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ce(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Vi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Fn,ja,xo=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,h=i.autoRevert,p=t._dur,v=t._startAt,M=t._targets,_=t.parent,S=_&&_.data==="nested"?_.vars.targets:M,y=t._overwrite==="auto"&&!co,E=t.timeline,C,x,b,L,B,q,I,R,k,j,Z,V,J;if(E&&(!g||!r)&&(r="none"),t._ease=hi(r,Ji.ease),t._yEase=m?mu(hi(m===!0?r:m,Ji.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=M[0]?ci(M[0]).harness:0,V=R&&i[R.prop],C=ys(i,po),v&&(v._zTime<0&&v.progress(1),e<0&&f&&s&&!h?v.render(-1,!0):v.revert(f&&p?us:r_),v._lazy=0),a){if(Vn(t._startAt=te.set(M,tn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!v&&Ee(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(me||!s&&!h)&&t._startAt.revert(us),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!v){if(e&&(s=!1),b=tn({overwrite:!1,data:"isFromStart",lazy:s&&!v&&Ee(l),immediateRender:s,stagger:0,parent:_},C),V&&(b[R.prop]=V),Vn(t._startAt=te.set(M,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(me?t._startAt.revert(us):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,kt,kt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ee(l)||l&&!p,x=0;x<M.length;x++){if(B=M[x],I=B._gsap||go(M)[x]._gsap,t._ptLookup[x]=j={},Va[I.id]&&Bn.length&&vs(),Z=S===M?x:S.indexOf(B),R&&(k=new R).init(B,V||C,t,Z,S)!==!1&&(t._pt=L=new Ce(t._pt,B,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(K){j[K]=L}),k.priority&&(q=1)),!R||V)for(b in C)Oe[b]&&(k=vu(b,C,t,Z,B,S))?k.priority&&(q=1):j[b]=L=_o.call(t,B,b,"get",C[b],Z,S,0,i.stringFilter);t._op&&t._op[x]&&t.kill(B,t._op[x]),y&&t._pt&&(Fn=t,Wt.killTweensOf(B,j,t.globalTime(e)),J=!t.parent,Fn=0),t._pt&&l&&(Va[I.id]=1)}q&&Tu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,g&&e<=0&&E.render($e,!0,!0)},R_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(c=d[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ja=1,t.vars[e]="+=0",xo(t,s),ja=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Yt(n)+pe(u.e)),u.b&&(u.b=c.s+pe(u.b))},I_=function(t,e){var n=t[0]?ci(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=_i({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},O_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(ge(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Sr=function(t,e,n,i,r){return Xt(t)?t.call(e,n,i,r):le(t)&&~t.indexOf("random(")?Ar(t):t},yu=mo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mu={};Ae(yu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Mu[o]=1});var te=function(o){kc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:yr(i))||this;var l=s.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,h=l.defaults,p=l.scrollTrigger,v=l.yoyoEase,M=i.parent||Wt,_=(ge(n)||Wc(n)?Cn(n[0]):"length"in i)?[n]:Ke(n),S,y,E,C,x,b,L,B;if(s._targets=_.length?go(_):xs("GSAP target "+n+" not found. https://greensock.com",!ke.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||as(c)||as(u)){if(i=s.vars,S=s.timeline=new Te({data:"nested",defaults:h||{},targets:M&&M.data==="nested"?M.vars.targets:_}),S.kill(),S.parent=S._dp=bn(s),S._start=0,f||as(c)||as(u)){if(C=_.length,L=f&&ou(f),mn(f))for(x in f)~yu.indexOf(x)&&(B||(B={}),B[x]=f[x]);for(y=0;y<C;y++)E=ys(i,Mu),E.stagger=0,v&&(E.yoyoEase=v),B&&_i(E,B),b=_[y],E.duration=+Sr(c,bn(s),y,b,_),E.delay=(+Sr(u,bn(s),y,b,_)||0)-s._delay,!f&&C===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),S.to(b,E,L?L(y,b,_):0),S._ease=Ct.none;S.duration()?c=u=0:s.timeline=0}else if(g){yr(tn(S.vars.defaults,{ease:"none"})),S._ease=hi(g.ease||i.ease||"none");var q=0,I,R,k;if(ge(g))g.forEach(function(j){return S.to(_,j,">")}),S.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||O_(x,g[x],E,g.easeEach);for(x in E)for(I=E[x].sort(function(j,Z){return j.t-Z.t}),q=0,y=0;y<I.length;y++)R=I[y],k={ease:R.e,duration:(R.t-(y?I[y-1].t:0))/100*c},k[x]=R.v,S.to(_,k,q),q+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!co&&(Fn=bn(s),Wt.killTweensOf(_),Fn=0),dn(M,bn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!g&&s._start===ce(M._time)&&Ee(d)&&u_(bn(s))&&M.data!=="nested")&&(s._tTime=-kt,s.render(Math.max(0,-u)||0)),p&&iu(bn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-kt&&!u?l:i<kt?0:i,f,m,g,h,p,v,M,_,S;if(!c)f_(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,_=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,r,a);if(f=ce(d%h),d===l?(g=this._repeat,f=c):(g=~~(d/h),g&&g===d/h&&(f=c,g--),f>c&&(f=c)),v=this._yoyo&&g&1,v&&(S=this._yEase,f=c-f),p=Qi(this._tTime,h),f===s&&!a&&this._initted)return this._tTime=d,this;g!==p&&(_&&this._yEase&&gu(_,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(ce(h*g),!0).invalidate()._lock=0))}if(!this._initted){if(ru(this,u?i:f,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!s&&!r&&(Je(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;_&&_.render(i<0?i:!f&&v?-kt:_._dur*_._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Wa(this,i,r,a),Je(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Je(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Wa(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Vn(this,1),!r&&!(u&&!s)&&(d||s||v)&&(Je(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Cr||Fe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||xo(this,l),c=this._ease(l/this._dur),R_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Is(this,0),this.parent||eu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fn&&Fn.vars.overwrite!==!0)._first||xr(this),this.parent&&a!==this.timeline.totalDuration()&&tr(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Ke(i):s,c=this._ptLookup,u=this._pt,d,f,m,g,h,p,v;if((!r||r==="all")&&l_(s,l))return r==="all"&&(this._pt=0),xr(this);for(d=this._op=this._op||[],r!=="all"&&(le(r)&&(h={},Ae(r,function(M){return h[M]=1}),r=h),r=I_(s,r)),v=s.length;v--;)if(~l.indexOf(s[v])){f=c[v],r==="all"?(d[v]=r,g=f,m={}):(m=d[v]=d[v]||{},g=r);for(h in g)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&Ds(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&xr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Mr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return Mr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Wt.killTweensOf(i,r,a)},t}(nr);tn(te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(o){te[o]=function(){var t=new Te,e=Xa.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var vo=function(t,e,n){return t[e]=n},Su=function(t,e,n){return t[e](n)},F_=function(t,e,n,i){return t[e](i.fp,n)},N_=function(t,e,n){return t.setAttribute(e,n)},yo=function(t,e){return Xt(t[e])?Su:uo(t[e])&&t.setAttribute?N_:vo},bu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},z_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Mo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},U_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},B_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ds(this,e,"_pt"):e.dep||(n=1),e=i;return!n},k_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Tu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ce=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||bu,this.d=l||this,this.set=c||vo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=k_,this.m=n,this.mt=r,this.tween=i},o}();Ae(mo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return po[o]=1});Ge.TweenMax=Ge.TweenLite=te;Ge.TimelineLite=Ge.TimelineMax=Te;Wt=new Te({sortChildren:!1,defaults:Ji,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ke.stringFilter=pu;var ir=[],fs={},G_=[],ec=0,wa=function(t){return(fs[t]||G_).map(function(e){return e()})},Za=function(){var t=Date.now(),e=[];t-ec>2&&(wa("matchMediaInit"),ir.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Ye.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),wa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),ec=t,wa("matchMedia"))},Eu=function(){function o(e,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Xt(n)&&(r=i,i=n,n=Xt);var a=this,s=function(){var c=Jt,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=qa(r)),Jt=a,d=i.apply(a,arguments),Xt(d)&&a._r.push(d),Jt=c,a.selector=u,a.isReverted=!1,d};return a.last=s,n===Xt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof te&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof nr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=ir.indexOf(this);~s&&ir.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),V_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){mn(n)||(n={matches:n});var a=new Eu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(ir.indexOf(a)<0&&ir.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Za):l.addEventListener("change",Za)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ss={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return b_(i)})},timeline:function(t){return new Te(t)},getTweensOf:function(t,e){return Wt.getTweensOf(t,e)},getProperty:function(t,e,n,i){le(t)&&(t=Ke(t)[0]);var r=ci(t||{}).get,a=n?tu:Qc;return n==="native"&&(n=""),t&&(e?a((Oe[e]&&Oe[e].get||r)(t,e,n,i)):function(s,l,c){return a((Oe[s]&&Oe[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=Ke(t),t.length>1){var i=t.map(function(u){return Ve.quickSetter(u,e,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}t=t[0]||{};var a=Oe[e],s=ci(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;Vi._pt=0,d.init(t,n?u+n:u,Vi,0,[t]),d.render(1,d),Vi._pt&&Mo(1,Vi)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Ve.to(t,_i((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Wt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hi(t.ease,Ji.ease)),$l(Ji,t||{})},config:function(t){return $l(ke,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Oe[s]&&!Ge[s]&&xs(e+" effect requires "+s+" plugin.")}),ya[e]=function(s,l,c){return n(Ke(s),tn(l||{},r),c)},a&&(Te.prototype[e]=function(s,l,c){return this.add(ya[e](s,mn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ct[t]=hi(e)},parseEase:function(t,e){return arguments.length?hi(t,e):Ct},getById:function(t){return Wt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Te(t),i,r;for(n.smoothChildTiming=Ee(t.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof te&&i.vars.onComplete===i._targets[0]))&&dn(n,i,i._start-i._delay),i=r;return dn(Wt,n,0),n},context:function(t,e){return t?new Eu(t,e):Jt},matchMedia:function(t){return new V_(t)},matchMediaRefresh:function(){return ir.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Za()},addEventListener:function(t,e){var n=fs[t]||(fs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:y_,wrapYoyo:M_,distribute:ou,random:cu,snap:lu,normalize:v_,getUnit:pe,clamp:m_,splitColor:fu,toArray:Ke,selector:qa,mapRange:hu,pipe:__,unitize:x_,interpolate:S_,shuffle:au},install:jc,effects:ya,ticker:Fe,updateRoot:Te.updateRoot,plugins:Oe,globalTimeline:Wt,core:{PropTween:Ce,globals:Zc,Tween:te,Timeline:Te,Animation:nr,getCache:ci,_removeLinkedListItem:Ds,reverting:function(){return me},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return co=t}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ss[o]=te[o]});Fe.add(Te.updateRoot);Vi=Ss.to({},{duration:0});var W_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},H_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=W_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Ta=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(le(r)&&(l={},Ae(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}H_(s,r)}}}},Ve=Ss.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)me?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ta("roundProps",Ya),Ta("modifiers"),Ta("snap",lu))||Ss;te.version=Te.version=Ve.version="3.11.4";Yc=1;Vc()&&er();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nc,Nn,qi,So,ai,ic,bo,X_=function(){return typeof window<"u"},Pn={},ni=180/Math.PI,Yi=Math.PI/180,Ui=Math.atan2,rc=1e8,wo=/([A-Z])/g,q_=/(left|right|width|margin|padding|x)/i,Y_=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$a=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Z_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Au=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},K_=function(t,e,n){return t.style[e]=n},J_=function(t,e,n){return t.style.setProperty(e,n)},Q_=function(t,e,n){return t._gsap[e]=n},t0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},e0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},n0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Ht="transform",cn=Ht+"Origin",i0=function(t,e){var n=this,i=this.target,r=i.style;if(t in Pn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=En[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=wn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:wn(i,t)),this.props.indexOf(Ht)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=Ht}(r||e)&&this.props.push(t,e,r[t])},Pu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},r0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(wo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=bo(),r&&!r.isStart&&!n[Ht]&&(Pu(n),i.uncache=1)}},Lu=function(t,e){var n={target:t,props:[],revert:r0,save:i0};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Du,Ka=function(t,e){var n=Nn.createElementNS?Nn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Nn.createElement(t);return n.style?n:Nn.createElement(t)},pn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(wo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,rr(e)||e,1)||""},sc="O,Moz,ms,Ms,Webkit".split(","),rr=function(t,e,n){var i=e||ai,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(sc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?sc[a]:"")+t},Ja=function(){X_()&&window.document&&(nc=window,Nn=nc.document,qi=Nn.documentElement,ai=Ka("div")||{style:{}},Ka("div"),Ht=rr(Ht),cn=Ht+"Origin",ai.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Du=!!rr("perspective"),bo=Ve.core.reverting,So=1)},Ea=function o(t){var e=Ka("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(qi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qi.removeChild(e),this.style.cssText=r,a},ac=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ru=function(t){var e;try{e=t.getBBox()}catch{e=Ea.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ea||(e=Ea.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ac(t,["x","cx","x1"])||0,y:+ac(t,["y","cy","y1"])||0,width:0,height:0}:e},Iu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ru(t))},Pr=function(t,e){if(e){var n=t.style;e in Pn&&e!==cn&&(e=Ht),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(wo,"-$1").toLowerCase())):n.removeAttribute(e)}},zn=function(t,e,n,i,r,a){var s=new Ce(t._pt,e,n,0,1,a?Cu:Au);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},oc={deg:1,rad:1,turn:1},s0={grid:1,flex:1},Wn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ai.style,l=q_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",m=i==="%",g,h,p,v;return i===a||!r||oc[i]||oc[a]?r:(a!=="px"&&!f&&(r=o(t,e,n,"px")),v=t.getCTM&&Iu(t),(m||a==="%")&&(Pn[e]||~e.indexOf("adius"))?(g=v?t.getBBox()[l?"width":"height"]:t[u],Yt(m?r/g*d:r/100*g)):(s[l?"width":"height"]=d+(f?a:i),h=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,v&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Nn||!h.appendChild)&&(h=Nn.body),p=h._gsap,p&&m&&p.width&&l&&p.time===Fe.time&&!p.uncache?Yt(r/p.width*d):((m||a==="%")&&!s0[pn(h,"display")]&&(s.position=pn(t,"position")),h===t&&(s.position="static"),h.appendChild(ai),g=ai[u],h.removeChild(ai),s.position="absolute",l&&m&&(p=ci(h),p.time=Fe.time,p.width=h[u]),Yt(f?g*r/d:g&&r?d/g*r:0))))},wn=function(t,e,n,i){var r;return So||Ja(),e in En&&e!=="transform"&&(e=En[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pn[e]&&e!=="transform"?(r=Dr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ws(pn(t,cn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bs[e]&&bs[e](t,e,n)||pn(t,e)||Kc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wn(t,e,r,n)+n:r},a0=function(t,e,n,i){if(!n||n==="none"){var r=rr(e,t,1),a=r&&pn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=pn(t,"borderTopColor"))}var s=new Ce(this._pt,t.style,e,0,1,wu),l=0,c=0,u,d,f,m,g,h,p,v,M,_,S,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=pn(t,e)||i,t.style[e]=n),u=[n,i],pu(u),n=u[0],i=u[1],f=n.match(Gi)||[],y=i.match(Gi)||[],y.length){for(;d=Gi.exec(i);)p=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(h=f[c++]||"")&&(m=parseFloat(h)||0,S=h.substr((m+"").length),p.charAt(1)==="="&&(p=Xi(m,p)+S),v=parseFloat(p),_=p.substr((v+"").length),l=Gi.lastIndex-_.length,_||(_=_||ke.units[e]||S,l===i.length&&(i+=_,s.e+=_)),S!==_&&(m=Wn(t,e,h,_)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:v-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?Cu:Au;return Xc.test(i)&&(s.e=0),this._pt=s,s},lc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lc[n]||n,e[1]=lc[i]||i,e.join(" ")},l0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Pn[s]&&(l=1,s=s==="transformOrigin"?cn:Ht),Pr(n,s);l&&(Pr(n,Ht),a&&(a.svg&&n.removeAttribute("transform"),Dr(n,1),a.uncache=1,Pu(i)))}},bs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ce(t._pt,e,n,0,0,l0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Lr=[1,0,0,1,0,0],Ou={},Fu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},cc=function(t){var e=pn(t,Ht);return Fu(e)?Lr:e.substr(7).match(Hc).map(Yt)},To=function(t,e){var n=t._gsap||ci(t),i=t.style,r=cc(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Lr:r):(r===Lr&&!t.offsetParent&&t!==qi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,qi.appendChild(t)),r=cc(t),l?i.display=l:Pr(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):qi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Qa=function(t,e,n,i,r,a){var s=t._gsap,l=r||To(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,d=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],h=l[2],p=l[3],v=l[4],M=l[5],_=e.split(" "),S=parseFloat(_[0])||0,y=parseFloat(_[1])||0,E,C,x,b;n?l!==Lr&&(C=m*p-g*h)&&(x=S*(p/C)+y*(-h/C)+(h*M-p*v)/C,b=S*(-g/C)+y*(m/C)-(m*M-g*v)/C,S=x,y=b):(E=Ru(t),S=E.x+(~_[0].indexOf("%")?S/100*E.width:S),y=E.y+(~(_[1]||_[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&s.smooth?(v=S-c,M=y-u,s.xOffset=d+(v*m+M*h)-v,s.yOffset=f+(v*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=y,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[cn]="0px 0px",a&&(zn(a,s,"xOrigin",c,S),zn(a,s,"yOrigin",u,y),zn(a,s,"xOffset",d,s.xOffset),zn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",S+" "+y)},Dr=function(t,e){var n=t._gsap||new xu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=pn(t,cn)||"0",u,d,f,m,g,h,p,v,M,_,S,y,E,C,x,b,L,B,q,I,R,k,j,Z,V,J,K,ut,U,$,et,nt;return u=d=f=h=p=v=M=_=S=0,m=g=1,n.svg=!!(t.getCTM&&Iu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),C=To(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Qa(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,E=n.yOrigin||0,C!==Lr&&(B=C[0],q=C[1],I=C[2],R=C[3],u=k=C[4],d=j=C[5],C.length===6?(m=Math.sqrt(B*B+q*q),g=Math.sqrt(R*R+I*I),h=B||q?Ui(q,B)*ni:0,M=I||R?Ui(I,R)*ni+h:0,M&&(g*=Math.abs(Math.cos(M*Yi))),n.svg&&(u-=y-(y*B+E*I),d-=E-(y*q+E*R))):(nt=C[6],$=C[7],K=C[8],ut=C[9],U=C[10],et=C[11],u=C[12],d=C[13],f=C[14],x=Ui(nt,U),p=x*ni,x&&(b=Math.cos(-x),L=Math.sin(-x),Z=k*b+K*L,V=j*b+ut*L,J=nt*b+U*L,K=k*-L+K*b,ut=j*-L+ut*b,U=nt*-L+U*b,et=$*-L+et*b,k=Z,j=V,nt=J),x=Ui(-I,U),v=x*ni,x&&(b=Math.cos(-x),L=Math.sin(-x),Z=B*b-K*L,V=q*b-ut*L,J=I*b-U*L,et=R*L+et*b,B=Z,q=V,I=J),x=Ui(q,B),h=x*ni,x&&(b=Math.cos(x),L=Math.sin(x),Z=B*b+q*L,V=k*b+j*L,q=q*b-B*L,j=j*b-k*L,B=Z,k=V),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,v=180-v),m=Yt(Math.sqrt(B*B+q*q+I*I)),g=Yt(Math.sqrt(j*j+nt*nt)),x=Ui(k,j),M=Math.abs(x)>2e-4?x*ni:0,S=et?1/(et<0?-et:et):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fu(pn(t,Ht)),Z&&t.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Yt(m),n.scaleY=Yt(g),n.rotation=Yt(h)+s,n.rotationX=Yt(p)+s,n.rotationY=Yt(v)+s,n.skewX=M+s,n.skewY=_+s,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[cn]=ws(c)),n.xOffset=n.yOffset=0,n.force3D=ke.force3D,n.renderTransform=n.svg?u0:Du?Nu:c0,n.uncache=0,n},ws=function(t){return(t=t.split(" "))[0]+" "+t[1]},Aa=function(t,e,n){var i=pe(e);return Yt(parseFloat(e)+parseFloat(Wn(t,"x",n+"px",i)))+i},c0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nu(t,e)},Jn="0deg",pr="0px",Qn=") ",Nu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,h=n.scaleY,p=n.transformPerspective,v=n.force3D,M=n.target,_=n.zOrigin,S="",y=v==="auto"&&t&&t!==1||v===!0;if(_&&(d!==Jn||u!==Jn)){var E=parseFloat(u)*Yi,C=Math.sin(E),x=Math.cos(E),b;E=parseFloat(d)*Yi,b=Math.cos(E),a=Aa(M,a,C*b*-_),s=Aa(M,s,-Math.sin(E)*-_),l=Aa(M,l,x*b*-_+_)}p!==pr&&(S+="perspective("+p+Qn),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(y||a!==pr||s!==pr||l!==pr)&&(S+=l!==pr||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Qn),c!==Jn&&(S+="rotate("+c+Qn),u!==Jn&&(S+="rotateY("+u+Qn),d!==Jn&&(S+="rotateX("+d+Qn),(f!==Jn||m!==Jn)&&(S+="skew("+f+", "+m+Qn),(g!==1||h!==1)&&(S+="scale("+g+", "+h+Qn),M.style[Ht]=S||"translate(0, 0)"},u0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,h=n.yOrigin,p=n.xOffset,v=n.yOffset,M=n.forceCSS,_=parseFloat(a),S=parseFloat(s),y,E,C,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Yi,c*=Yi,y=Math.cos(l)*d,E=Math.sin(l)*d,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Yi,b=Math.tan(c-u),b=Math.sqrt(1+b*b),C*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),y*=b,E*=b)),y=Yt(y),E=Yt(E),C=Yt(C),x=Yt(x)):(y=d,x=f,E=C=0),(_&&!~(a+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(_=Wn(m,"x",a,"px"),S=Wn(m,"y",s,"px")),(g||h||p||v)&&(_=Yt(_+g-(g*y+h*C)+p),S=Yt(S+h-(g*E+h*x)+v)),(i||r)&&(b=m.getBBox(),_=Yt(_+i/100*b.width),S=Yt(S+r/100*b.height)),b="matrix("+y+","+E+","+C+","+x+","+_+","+S+")",m.setAttribute("transform",b),M&&(m.style[Ht]=b)},h0=function(t,e,n,i,r){var a=360,s=le(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ni:1),c=l-i,u=i+c+"deg",d,f;return s&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*rc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*rc)%a-~~(c/a)*a)),t._pt=f=new Ce(t._pt,e,n,i,c,j_),f.e=u,f.u="deg",t._props.push(n),f},uc=function(t,e){for(var n in e)t[n]=e[n];return t},f0=function(t,e,n){var i=uc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,d,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ht]=e,s=Dr(n,1),Pr(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],a[Ht]=e,s=Dr(n,1),a[Ht]=c);for(l in Pn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=pe(c),g=pe(u),d=m!==g?Wn(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Ce(t._pt,s,l,d,f-d,$a),t._pt.u=g||0,t._props.push(l));uc(s,i)};Ae("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});bs[t>1?"border"+o:o]=function(s,l,c,u,d){var f,m;if(arguments.length<4)return f=a.map(function(g){return wn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,h){return m[g]=f[h]=f[h]||f[(h-1)/2|0]}),s.init(l,m,d)}});var zu={name:"css",register:Ja,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,d,f,m,g,h,p,v,M,_,S,y,E,C,x;So||Ja(),this.styles=this.styles||Lu(t),x=this.styles.props,this.tween=n;for(h in e)if(h!=="autoRound"&&(u=e[h],!(Oe[h]&&vu(h,e,n,i,t,r)))){if(m=typeof u,g=bs[h],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ar(u)),g)g(this,t,h,u,n)&&(C=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(h)+"").trim(),u+="",kn.lastIndex=0,kn.test(c)||(p=pe(c),v=pe(u)),v?p!==v&&(c=Wn(t,h,c,v)+v):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,h),a.push(h),x.push(h,0,s[h]);else if(m!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,t,r):l[h],le(c)&&~c.indexOf("random(")&&(c=Ar(c)),pe(c+"")||(c+=ke.units[h]||pe(wn(t,h))||""),(c+"").charAt(1)==="="&&(c=wn(t,h))):c=wn(t,h),f=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),h in En&&(h==="autoAlpha"&&(f===1&&wn(t,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,s.visibility),zn(this,s,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=En[h],~h.indexOf(",")&&(h=h.split(",")[0]))),_=h in Pn,_){if(this.styles.save(h),S||(y=t._gsap,y.renderTransform&&!e.parseTransform||Dr(t,e.parseTransform),E=e.smoothOrigin!==!1&&y.smooth,S=this._pt=new Ce(this._pt,s,Ht,0,1,y.renderTransform,y,0,-1),S.dep=1),h==="scale")this._pt=new Ce(this._pt,y,"scaleY",y.scaleY,(M?Xi(y.scaleY,M+d):d)-y.scaleY||0,$a),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){x.push(cn,0,s[cn]),u=o0(u),y.svg?Qa(t,u,0,E,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==y.zOrigin&&zn(this,y,"zOrigin",y.zOrigin,v),zn(this,s,h,ws(c),ws(u)));continue}else if(h==="svgOrigin"){Qa(t,u,1,E,0,this);continue}else if(h in Ou){h0(this,y,h,f,M?Xi(f,M+u):u);continue}else if(h==="smoothOrigin"){zn(this,y,"smooth",y.smooth,u);continue}else if(h==="force3D"){y[h]=u;continue}else if(h==="transform"){f0(this,u,t);continue}}else h in s||(h=rr(h)||h);if(_||(d||d===0)&&(f||f===0)&&!Y_.test(u)&&h in s)p=(c+"").substr((f+"").length),d||(d=0),v=pe(u)||(h in ke.units?ke.units[h]:p),p!==v&&(f=Wn(t,h,c,v)),this._pt=new Ce(this._pt,_?y:s,h,f,(M?Xi(f,M+d):d)-f,!_&&(v==="px"||h==="zIndex")&&e.autoRound!==!1?$_:$a),this._pt.u=v||0,p!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=Z_);else if(h in s)a0.call(this,t,h,c,M?M+u:u);else if(h in t)this.add(t,h,c||t[h],M?M+u:u,i,r);else if(h!=="parseTransform"){fo(h,u);continue}_||(h in s?x.push(h,0,s[h]):x.push(h,1,c||t[h])),a.push(h)}}C&&Tu(this)},render:function(t,e){if(e.tween._time||!bo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:wn,aliases:En,getSetter:function(t,e,n){var i=En[e];return i&&i.indexOf(",")<0&&(e=i),e in Pn&&e!==cn&&(t._gsap.x||wn(t,"x"))?n&&ic===n?e==="scale"?t0:Q_:(ic=n||{})&&(e==="scale"?e0:n0):t.style&&!uo(t.style[e])?K_:~e.indexOf("-")?J_:yo(t,e)},core:{_removeProperty:Pr,_getMatrix:To}};Ve.utils.checkPrefix=rr;Ve.core.getStyleSaver=Lu;(function(o,t,e,n){var i=Ae(o+","+t+","+e,function(r){Pn[r]=1});Ae(t,function(r){ke.units[r]="deg",Ou[r]=1}),En[i[13]]=o+","+t,Ae(n,function(r){var a=r.split(":");En[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ke.units[o]="px"});Ve.registerPlugin(zu);var to=Ve.registerPlugin(zu)||Ve;to.core.Tween;const hc={type:"change"},Ca={type:"start"},fc={type:"end"};class d0 extends vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",be),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),r=i.NONE},this.update=function(){const P=new F,O=new mi().setFromUnitVectors(t.up,new F(0,1,0)),ot=O.clone().invert(),ht=new F,at=new mi,pt=2*Math.PI;return function(){const At=n.object.position;P.copy(At).sub(n.target),P.applyQuaternion(O),s.setFromVector3(P),n.autoRotate&&r===i.NONE&&b(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;return isFinite(Pt)&&isFinite(Ut)&&(Pt<-Math.PI?Pt+=pt:Pt>Math.PI&&(Pt-=pt),Ut<-Math.PI?Ut+=pt:Ut>Math.PI&&(Ut-=pt),Pt<=Ut?s.theta=Math.max(Pt,Math.min(Ut,s.theta)):s.theta=s.theta>(Pt+Ut)/2?Math.max(Pt,s.theta):Math.min(Ut,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(s),P.applyQuaternion(ot),At.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ht.distanceToSquared(n.object.position)>a||8*(1-at.dot(n.object.quaternion))>a?(n.dispatchEvent(hc),ht.copy(n.object.position),at.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",ie),n.domElement.removeEventListener("pointercancel",_e),n.domElement.removeEventListener("wheel",We),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",jt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",be)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new jl,l=new jl;let c=1;const u=new F;let d=!1;const f=new wt,m=new wt,g=new wt,h=new wt,p=new wt,v=new wt,M=new wt,_=new wt,S=new wt,y=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function b(P){l.theta-=P}function L(P){l.phi-=P}const B=function(){const P=new F;return function(ot,ht){P.setFromMatrixColumn(ht,0),P.multiplyScalar(-ot),u.add(P)}}(),q=function(){const P=new F;return function(ot,ht){n.screenSpacePanning===!0?P.setFromMatrixColumn(ht,1):(P.setFromMatrixColumn(ht,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ot),u.add(P)}}(),I=function(){const P=new F;return function(ot,ht){const at=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;P.copy(pt).sub(n.target);let ft=P.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ot*ft/at.clientHeight,n.object.matrix),q(2*ht*ft/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ot*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),q(ht*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P){f.set(P.clientX,P.clientY)}function Z(P){M.set(P.clientX,P.clientY)}function V(P){h.set(P.clientX,P.clientY)}function J(P){m.set(P.clientX,P.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;b(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),f.copy(m),n.update()}function K(P){_.set(P.clientX,P.clientY),S.subVectors(_,M),S.y>0?R(x()):S.y<0&&k(x()),M.copy(_),n.update()}function ut(P){p.set(P.clientX,P.clientY),v.subVectors(p,h).multiplyScalar(n.panSpeed),I(v.x,v.y),h.copy(p),n.update()}function U(P){P.deltaY<0?k(x()):P.deltaY>0&&R(x()),n.update()}function $(P){let O=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),O=!0;break}O&&(P.preventDefault(),n.update())}function et(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);f.set(P,O)}}function nt(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);h.set(P,O)}}function G(){const P=y[0].pageX-y[1].pageX,O=y[0].pageY-y[1].pageY,ot=Math.sqrt(P*P+O*O);M.set(0,ot)}function yt(){n.enableZoom&&G(),n.enablePan&&nt()}function mt(){n.enableZoom&&G(),n.enableRotate&&et()}function dt(P){if(y.length==1)m.set(P.pageX,P.pageY);else{const ot=vt(P),ht=.5*(P.pageX+ot.x),at=.5*(P.pageY+ot.y);m.set(ht,at)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const O=n.domElement;b(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),f.copy(m)}function lt(P){if(y.length===1)p.set(P.pageX,P.pageY);else{const O=vt(P),ot=.5*(P.pageX+O.x),ht=.5*(P.pageY+O.y);p.set(ot,ht)}v.subVectors(p,h).multiplyScalar(n.panSpeed),I(v.x,v.y),h.copy(p)}function Nt(P){const O=vt(P),ot=P.pageX-O.x,ht=P.pageY-O.y,at=Math.sqrt(ot*ot+ht*ht);_.set(0,at),S.set(0,Math.pow(_.y/M.y,n.zoomSpeed)),R(S.y),M.copy(_)}function St(P){n.enableZoom&&Nt(P),n.enablePan&&lt(P)}function xt(P){n.enableZoom&&Nt(P),n.enableRotate&&dt(P)}function ie(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",jt)),tt(P),P.pointerType==="touch"?A(P):qt(P))}function he(P){n.enabled!==!1&&(P.pointerType==="touch"?w(P):Ot(P))}function jt(P){it(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",jt)),n.dispatchEvent(fc),r=i.NONE}function _e(P){it(P)}function qt(P){let O;switch(P.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Si.DOLLY:if(n.enableZoom===!1)return;Z(P),r=i.DOLLY;break;case Si.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;V(P),r=i.PAN}else{if(n.enableRotate===!1)return;j(P),r=i.ROTATE}break;case Si.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),r=i.ROTATE}else{if(n.enablePan===!1)return;V(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function Ot(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(P);break;case i.DOLLY:if(n.enableZoom===!1)return;K(P);break;case i.PAN:if(n.enablePan===!1)return;ut(P);break}}function We(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(Ca),U(P),n.dispatchEvent(fc))}function be(P){n.enabled===!1||n.enablePan===!1||$(P)}function A(P){switch(st(P),y.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;et(),r=i.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;nt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(),r=i.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ca)}function w(P){switch(st(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;lt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(P),n.update();break;default:r=i.NONE}}function W(P){n.enabled!==!1&&P.preventDefault()}function tt(P){y.push(P)}function it(P){delete E[P.pointerId];for(let O=0;O<y.length;O++)if(y[O].pointerId==P.pointerId){y.splice(O,1);return}}function st(P){let O=E[P.pointerId];O===void 0&&(O=new wt,E[P.pointerId]=O),O.set(P.pageX,P.pageY)}function vt(P){const O=P.pointerId===y[0].pointerId?y[1]:y[0];return E[O.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",ie),n.domElement.addEventListener("pointercancel",_e),n.domElement.addEventListener("wheel",We,{passive:!1}),this.update()}}const p0=document.querySelector(".experience-canvas"),dc=document.getElementById("loader-wrapper"),m0=document.getElementById("about-menu"),g0=document.getElementById("projects-menu"),Eo=document.getElementById("close-btn"),_0=document.getElementById("logo"),Uu=document.getElementById("panel-about"),Bu=document.getElementById("panel-projects");let Ts="home";const Mi=new jg;Mi.background=new zt(131586);Mi.fog=new so(131586,.05);const xi=new Ze(75,window.innerWidth/window.innerHeight,.1,1e3),ds={x:0,y:2,z:8};xi.position.set(ds.x,ds.y,ds.z);const Ur=new Uc({canvas:p0,antialias:!0,alpha:!1});Ur.setSize(window.innerWidth,window.innerHeight);Ur.setPixelRatio(Math.min(window.devicePixelRatio,2));const ln=new d0(xi,Ur.domElement);ln.enableDamping=!0;ln.dampingFactor=.05;ln.enableZoom=!1;ln.enablePan=!1;ln.minPolarAngle=Math.PI/3;ln.maxPolarAngle=Math.PI/2+.1;const ku=new zt(61695),Gu=new zt(16711740),Ao=new Ps(100,100,40,40),os=Ao.attributes.position;for(let o=0;o<os.count;o++){const t=os.getX(o),e=os.getY(o),n=Math.sin(t*.5)*Math.cos(e*.5)*.5;os.setZ(o,n)}Ao.computeVertexNormals();const x0=new Fr({color:ku,wireframe:!0,transparent:!0,opacity:.15}),Os=new on(Ao,x0);Os.rotation.x=-Math.PI/2;Os.position.y=-2;Mi.add(Os);const Fs=new _r,v0=new lo(1.5,.4,128,32),y0=new Fr({color:Gu,wireframe:!0,transparent:!0,opacity:.8}),eo=new on(v0,y0);Fs.add(eo);const M0=new oo(1,1),S0=new Fr({color:1118481,wireframe:!1}),no=new on(M0,S0);Fs.add(no);Mi.add(Fs);const Co=1e3,Po=new un,ps=new Float32Array(Co*3),ms=new Float32Array(Co*3);for(let o=0;o<Co;o++){const t=2+Math.random()*20,e=Math.random()*Math.PI*2,n=Math.cos(e)*t,i=Math.sin(e)*t,r=(Math.random()-.5)*20;ps[o*3]=n,ps[o*3+1]=r,ps[o*3+2]=i;const a=Math.random()>.5?ku:Gu;ms[o*3]=a.r,ms[o*3+1]=a.g,ms[o*3+2]=a.b}Po.setAttribute("position",new Qe(ps,3));Po.setAttribute("color",new Qe(ms,3));const b0=new Bc({size:.1,vertexColors:!0,transparent:!0,opacity:.8,blending:Pa}),Vu=new Zg(Po,b0);Mi.add(Vu);const w0=new Kg(16777215,.2);Mi.add(w0);const T0=new Jg;function Wu(){requestAnimationFrame(Wu);const o=T0.getElapsedTime();eo.rotation.x=o*.2,eo.rotation.y=o*.3,no.rotation.y=-o*.1,no.rotation.x=-o*.2,Fs.position.y=Math.sin(o*.5)*.5,Os.position.z=o*2%2,Vu.rotation.y=o*.05,ln.update(),Ur.render(Mi,xi)}Wu();setTimeout(()=>{dc.style.opacity=0,setTimeout(()=>{dc.style.display="none"},500)},1e3);function Hu(){Uu.classList.add("hidden"),Bu.classList.add("hidden"),Eo.style.display="none"}function Lo(o,t,e){Hu(),ln.enabled=!1,to.to(xi.position,{x:o.x,y:o.y,z:o.z,duration:1.5,ease:"power3.inOut"}),to.to(ln.target,{x:t.x,y:t.y,z:t.z,duration:1.5,ease:"power3.inOut",onUpdate:()=>{xi.lookAt(ln.target)},onComplete:()=>{ln.enabled=!0,e&&(e.classList.remove("hidden"),Eo.style.display="flex")}})}m0.addEventListener("click",o=>{o.preventDefault(),Ts="about",Lo({x:-5,y:1,z:4},{x:-2,y:0,z:0},Uu)});g0.addEventListener("click",o=>{o.preventDefault(),Ts="projects",Lo({x:5,y:3,z:5},{x:2,y:0,z:0},Bu)});const Xu=o=>{o==null||o.preventDefault(),Ts!=="home"&&(Ts="home",Hu(),Lo(ds,{x:0,y:0,z:0},null))};Eo.addEventListener("click",Xu);_0.addEventListener("click",Xu);window.addEventListener("resize",()=>{xi.aspect=window.innerWidth/window.innerHeight,xi.updateProjectionMatrix(),Ur.setSize(window.innerWidth,window.innerHeight)});
