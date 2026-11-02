
window.addEventListener('error',e=>{const d=document.getElementById('err');if(d){d.hidden=false;d.textContent='Prototype error: '+e.message;}});
(function(){
'use strict';
const NAMES={"s21": "Tray", "s01": "Home", "s02": "Search", "s03": "Market", "s04": "Asset page \u00b7 TSLA", "s05": "Orderpad \u00b7 Buy TSLA", "s06": "Order placed", "s07": "Portfolio \u00b7 US stocks", "s08": "Orders & History", "s09": "Wallet", "s10": "Profile", "s12": "ETF asset page", "s13": "Orderpad \u00b7 Sell TSLA", "s14": "Orderpad \u00b7 Limit", "s15": "Orderpad \u00b7 SIP", "s16": "Order failed", "s17": "Portfolio \u00b7 empty", "s18": "Withdraw", "s19": "Withdraw complete", "s20": "Wallet \u00b7 Dividend"};
const dev=document.getElementById('device');
const screens=[...dev.querySelectorAll('.screen')];
let stack=['s01'];
/* L3 System statusbar (vendor/lemonnade/src/components/SystemStatusbar, Figma 4543:84649): time · wifi · signal · battery */
const SBI='<svg class="l3sb-time" viewBox="16 7 54 18" fill="currentColor"><path d="M23.3092 21C22.9741 21 22.6343 20.9499 22.2899 20.8497C21.9455 20.7495 21.6197 20.5993 21.3125 20.3989C21.0146 20.1894 20.7493 19.9253 20.5166 19.6066C20.2839 19.2878 20.1117 18.9098 20 18.4727L21.3963 17.9262C21.5173 18.4089 21.736 18.8051 22.0525 19.1148C22.3783 19.4153 22.7926 19.5656 23.2952 19.5656C23.5465 19.5656 23.7839 19.5246 24.0073 19.4426C24.2307 19.3515 24.4215 19.2332 24.5798 19.0874C24.738 18.9326 24.8637 18.7505 24.9568 18.541C25.0499 18.3315 25.0964 18.0993 25.0964 17.8443C25.0964 17.5893 25.0499 17.357 24.9568 17.1475C24.873 16.929 24.752 16.7423 24.5938 16.5874C24.4355 16.4326 24.2447 16.3142 24.0213 16.2322C23.7979 16.1412 23.5559 16.0956 23.2952 16.0956C22.988 16.0956 22.7088 16.1639 22.4574 16.3005C22.2061 16.4281 21.9967 16.5965 21.8291 16.806L20.2932 16.1366L20.8657 11.4372H26.0738V12.8169H22.1642L21.8152 15.2486L21.8989 15.276C22.1037 15.1211 22.3411 14.9891 22.611 14.8798C22.881 14.7705 23.2114 14.7158 23.6024 14.7158C24.0027 14.7158 24.3843 14.7933 24.7473 14.9481C25.1197 15.0938 25.4455 15.3033 25.7247 15.5765C26.004 15.8497 26.2274 16.1776 26.3949 16.5601C26.5625 16.9426 26.6463 17.3661 26.6463 17.8306C26.6463 18.286 26.5625 18.7095 26.3949 19.1011C26.2274 19.4836 25.9947 19.816 25.6968 20.0984C25.3989 20.3807 25.0452 20.6038 24.6356 20.7678C24.2354 20.9226 23.7932 21 23.3092 21Z" /><path d="M29.0682 20.8634C28.7703 20.8634 28.5143 20.7632 28.3002 20.5628C28.0954 20.3534 27.993 20.1029 27.993 19.8115C27.993 19.52 28.0954 19.2696 28.3002 19.0601C28.5143 18.8506 28.7703 18.7459 29.0682 18.7459C29.366 18.7459 29.622 18.8506 29.8361 19.0601C30.0502 19.2696 30.1573 19.52 30.1573 19.8115C30.1573 20.1029 30.0502 20.3534 29.8361 20.5628C29.622 20.7632 29.366 20.8634 29.0682 20.8634ZM29.0682 16.0683C28.7703 16.0683 28.5143 15.9681 28.3002 15.7678C28.0954 15.5583 27.993 15.3078 27.993 15.0164C27.993 14.725 28.0954 14.4791 28.3002 14.2787C28.5143 14.0692 28.7703 13.9645 29.0682 13.9645C29.366 13.9645 29.622 14.0692 29.8361 14.2787C30.0502 14.4791 30.1573 14.725 30.1573 15.0164C30.1573 15.3078 30.0502 15.5583 29.8361 15.7678C29.622 15.9681 29.366 16.0683 29.0682 16.0683Z" /><path d="M33.7454 20.7814V13.2678L31.9721 14.0191L31.3857 12.7213L34.1922 11.4372H35.2952V20.7814H33.7454Z" /><path d="M40.2422 21C39.9071 21 39.572 20.9545 39.2369 20.8634C38.9018 20.7723 38.5853 20.6311 38.2874 20.4399C37.9988 20.2395 37.7382 19.9891 37.5055 19.6885C37.2728 19.388 37.0959 19.0282 36.9749 18.6093L38.427 18.0219C38.5574 18.5137 38.7808 18.8916 39.0972 19.1557C39.4137 19.4199 39.7954 19.5519 40.2422 19.5519C40.4656 19.5519 40.6797 19.5155 40.8845 19.4426C41.0986 19.3698 41.2847 19.2696 41.443 19.1421C41.6012 19.0055 41.7269 18.8506 41.82 18.6776C41.9131 18.4954 41.9596 18.2951 41.9596 18.0765C41.9596 17.8579 41.9084 17.6576 41.806 17.4754C41.7129 17.2933 41.5826 17.1384 41.4151 17.0109C41.2475 16.8834 41.0474 16.7832 40.8147 16.7104C40.5913 16.6375 40.3492 16.6011 40.0886 16.6011H39.2648V15.194H40.0048C40.2282 15.194 40.433 15.1667 40.6192 15.112C40.8147 15.0483 40.9869 14.9617 41.1358 14.8525C41.2847 14.7432 41.4011 14.6066 41.4849 14.4426C41.5687 14.2696 41.6105 14.0738 41.6105 13.8552C41.6105 13.4818 41.4709 13.1903 41.1917 12.9809C40.9217 12.7623 40.5773 12.653 40.1584 12.653C39.9257 12.653 39.7209 12.6849 39.5441 12.7486C39.3765 12.8124 39.2322 12.8989 39.1112 13.0082C38.9902 13.1175 38.8878 13.2404 38.804 13.377C38.7296 13.5046 38.6691 13.6366 38.6225 13.7732L37.1983 13.1858C37.2728 12.9672 37.3891 12.7441 37.5474 12.5164C37.7056 12.2796 37.9058 12.0656 38.1478 11.8743C38.3898 11.6831 38.6737 11.5282 38.9995 11.4098C39.3346 11.2823 39.7209 11.2186 40.1584 11.2186C40.6052 11.2186 41.0148 11.2823 41.3871 11.4098C41.7595 11.5373 42.0806 11.7149 42.3506 11.9426C42.6205 12.1703 42.83 12.439 42.9789 12.7486C43.1278 13.0583 43.2023 13.3953 43.2023 13.7596C43.2023 14.0237 43.1651 14.265 43.0906 14.4836C43.0254 14.7022 42.9324 14.898 42.8113 15.071C42.6903 15.235 42.5554 15.3761 42.4064 15.4945C42.2575 15.6129 42.1039 15.7131 41.9457 15.7951V15.877C42.1597 15.9681 42.3645 16.0865 42.56 16.2322C42.7555 16.3689 42.923 16.5328 43.0627 16.724C43.2116 16.9153 43.328 17.1339 43.4117 17.3798C43.4955 17.6166 43.5374 17.8761 43.5374 18.1585C43.5374 18.5683 43.4536 18.9508 43.2861 19.306C43.1185 19.6521 42.8858 19.9526 42.5879 20.2077C42.2994 20.4536 41.955 20.6448 41.5547 20.7814C41.1544 20.9271 40.7169 21 40.2422 21Z" /><path d="M48.1678 20.7814V11H51.6306C52.0774 11 52.4963 11.0729 52.8872 11.2186C53.2875 11.3643 53.6366 11.5692 53.9344 11.8333C54.2323 12.0974 54.465 12.4162 54.6326 12.7896C54.8094 13.1539 54.8979 13.5592 54.8979 14.0055C54.8979 14.4426 54.8094 14.8479 54.6326 15.2213C54.465 15.5856 54.2323 15.8998 53.9344 16.1639C53.6366 16.4281 53.2875 16.633 52.8872 16.7787C52.4963 16.9244 52.0774 16.9973 51.6306 16.9973H49.7456V20.7814H48.1678ZM51.6725 15.5219C51.9331 15.5219 52.1658 15.4809 52.3706 15.3989C52.5754 15.3078 52.7476 15.1894 52.8872 15.0437C53.0268 14.898 53.1339 14.7341 53.2084 14.5519C53.2828 14.3698 53.3201 14.1876 53.3201 14.0055C53.3201 13.8142 53.2828 13.6275 53.2084 13.4454C53.1339 13.2632 53.0268 13.1038 52.8872 12.9672C52.7476 12.8215 52.5754 12.7031 52.3706 12.612C52.1658 12.5209 51.9331 12.4754 51.6725 12.4754H49.7456V15.5219H51.6725Z" /><path d="M56.24 11H57.8178L61.0851 16.5601H61.1689L64.4362 11H66V20.7814H64.4362V15.4672L64.52 13.8279H64.4362L61.5878 18.7049H60.6523L57.8178 13.8279H57.734L57.8178 15.4672V20.7814H56.24V11Z" /></svg><span class="l3sb-icons"><svg class="l3sb-glyph" viewBox="282 7 18 18" fill="currentColor"><path d="M291 19.2C291.552 19.2 292 19.6477 292 20.2C292 20.7522 291.552 21.2 291 21.2C290.448 21.1998 290 20.7522 290 20.2C290 19.6478 290.448 19.2001 291 19.2Z" /><path d="M290.909 15.95C292.273 15.9501 293.498 16.5522 294.33 17.5007C294.621 17.8329 294.589 18.3383 294.257 18.6296C293.925 18.9209 293.419 18.8875 293.128 18.5554C292.586 17.9381 291.793 17.5496 290.909 17.5496C290.489 17.5491 290.074 17.6391 289.691 17.8123C289.309 17.9855 288.968 18.2385 288.691 18.5545C288.4 18.887 287.895 18.9205 287.562 18.6296C287.23 18.3388 287.197 17.8342 287.487 17.5017C287.914 17.0139 288.44 16.6228 289.03 16.3552C289.62 16.0878 290.261 15.9494 290.909 15.95Z" /><path d="M290.909 12.95C291.928 12.9488 292.937 13.1544 293.874 13.5545C294.812 13.9547 295.658 14.5419 296.362 15.2791C296.667 15.5985 296.656 16.1047 296.337 16.4099C296.017 16.715 295.511 16.703 295.206 16.3836C294.651 15.803 293.984 15.3414 293.246 15.0261C292.508 14.7109 291.713 14.5486 290.91 14.5496H290.908C290.105 14.5486 289.311 14.7109 288.572 15.0261C287.834 15.3414 287.167 15.803 286.612 16.3836C286.307 16.703 285.801 16.7151 285.481 16.4099C285.162 16.1047 285.151 15.5985 285.456 15.2791C286.16 14.5419 287.007 13.9547 287.944 13.5545C288.881 13.1545 289.89 12.949 290.909 12.95Z" /><path d="M291.454 9.96363C294.158 10.1013 296.595 11.258 298.385 13.0554C298.696 13.3685 298.696 13.8755 298.383 14.1873C298.07 14.499 297.563 14.4974 297.251 14.1843C295.629 12.5562 293.388 11.5496 290.909 11.5496C289.731 11.548 288.563 11.7802 287.475 12.2322C286.386 12.6843 285.398 13.3482 284.567 14.1843C284.256 14.4973 283.75 14.4992 283.436 14.1882C283.123 13.8769 283.121 13.3699 283.433 13.0564C284.412 12.0704 285.577 11.2878 286.86 10.7546C288.143 10.2216 289.52 9.94829 290.909 9.94996L291.454 9.96363Z" /></svg><svg class="l3sb-glyph" viewBox="304 7 18 18" fill="currentColor"><path d="M308 18.1003C308.497 18.1005 308.9 18.5029 308.9 18.9997V20.9997C308.9 21.4966 308.497 21.8999 308 21.9001C307.503 21.9001 307.1 21.4967 307.1 20.9997V18.9997C307.1 18.5027 307.503 18.1003 308 18.1003Z" /><path d="M314.7 12.8005C315.197 12.8005 315.6 13.2029 315.6 13.6999V20.9997C315.6 21.4967 315.197 21.9001 314.7 21.9001C314.203 21.8999 313.8 21.4966 313.8 20.9997V13.6999C313.8 13.203 314.203 12.8007 314.7 12.8005Z" /><path d="M318 10.1003C318.497 10.1005 318.9 10.503 318.9 10.9997V20.9997C318.9 21.4966 318.497 21.8999 318 21.9001C317.503 21.9001 317.1 21.4967 317.1 20.9997V10.9997C317.1 10.5029 317.504 10.1003 318 10.1003Z" /><path d="M311.3 15.4001C311.797 15.4003 312.2 15.8027 312.2 16.2995V20.9997C312.2 21.4965 311.797 21.8989 311.3 21.8991C310.803 21.8991 310.4 21.4967 310.4 20.9997V16.2995C310.4 15.8026 310.803 15.4001 311.3 15.4001Z" /></svg><svg class="l3sb-glyph" viewBox="326 7 18 18" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M328.159 11.4091C328.581 10.9872 329.153 10.7501 329.75 10.7501H338.75C339.347 10.7501 339.919 10.9872 340.341 11.4091C340.763 11.831 341 12.4033 341 13V13.1287C341.313 13.2395 341.601 13.4195 341.841 13.659C342.263 14.081 342.5 14.6532 342.5 15.2499V16.7499C342.5 17.3466 342.263 17.9189 341.841 18.3408C341.601 18.5803 341.313 18.7603 341 18.8711V18.9998C341 19.5965 340.763 20.1688 340.341 20.5907C339.919 21.0126 339.347 21.2497 338.75 21.2497H329.75C329.153 21.2497 328.581 21.0126 328.159 20.5907C327.737 20.1688 327.5 19.5965 327.5 18.9998V13C327.5 12.4033 327.737 11.831 328.159 11.4091ZM329.75 12.2501C329.551 12.2501 329.36 12.3291 329.22 12.4697C329.079 12.6104 329 12.8011 329 13V18.9998C329 19.1987 329.079 19.3894 329.22 19.5301C329.36 19.6707 329.551 19.7498 329.75 19.7498H338.75C338.949 19.7498 339.14 19.6707 339.28 19.5301C339.421 19.3894 339.5 19.1987 339.5 18.9998V18.2498C339.5 17.8356 339.836 17.4998 340.25 17.4998C340.449 17.4998 340.64 17.4208 340.78 17.2802C340.921 17.1395 341 16.9488 341 16.7499V15.2499C341 15.051 340.921 14.8603 340.78 14.7196C340.64 14.579 340.449 14.5 340.25 14.5C339.836 14.5 339.5 14.1642 339.5 13.75V13C339.5 12.8011 339.421 12.6104 339.28 12.4697C339.14 12.3291 338.949 12.2501 338.75 12.2501H329.75ZM331.25 13.75C331.664 13.75 332 14.0858 332 14.5V17.4998C332 17.914 331.664 18.2498 331.25 18.2498C330.836 18.2498 330.5 17.914 330.5 17.4998V14.5C330.5 14.0858 330.836 13.75 331.25 13.75ZM334.25 13.75C334.664 13.75 335 14.0858 335 14.5V17.4998C335 17.914 334.664 18.2498 334.25 18.2498C333.836 18.2498 333.5 17.914 333.5 17.4998V14.5C333.5 14.0858 333.836 13.75 334.25 13.75ZM337.25 13.75C337.664 13.75 338 14.0858 338 14.5V17.4998C338 17.914 337.664 18.2498 337.25 18.2498C336.836 18.2498 336.5 17.914 336.5 17.4998V14.5C336.5 14.0858 336.836 13.75 337.25 13.75Z" /></svg></span>';
const SB='<div class="sbar" aria-hidden="true">'+SBI+'</div>';

/* ===== App layer: data + interactions on top of the Figma screens ===== */
const STOCKS=[
 {tk:'TSLA',name:'Tesla, Inc.',short:'Tesla',p:38450.20,c:1.48,img:'mbf8f87',about:'Tesla, Inc. designs and manufactures electric vehicles, battery storage and solar products. It trades on NASDAQ under the ticker TSLA.'},
 {tk:'AAPL',name:'Apple Inc.',short:'Apple',p:21890.40,c:2.30,img:'m25698d',about:'Apple designs the iPhone, Mac, iPad and Apple Watch, and runs services like the App Store, iCloud and Apple Music. It trades on NASDAQ under the ticker AAPL.'},
 {tk:'NVDA',name:'NVIDIA Corporation',short:'NVIDIA',p:11532.60,c:1.63,img:'m17aa4b',about:'NVIDIA designs GPUs and AI computing platforms used in gaming, data centres and autonomous vehicles. It trades on NASDAQ under the ticker NVDA.'},
 {tk:'MSFT',name:'Microsoft Corporation',short:'Microsoft',p:43210.80,c:-0.42,img:'m526b16',about:'Microsoft builds Windows, Office and the Azure cloud platform, and makes Xbox gaming hardware. It trades on NASDAQ under the ticker MSFT.'},
 {tk:'GOOGL',name:'Alphabet Inc.',short:'Google',p:15890.10,c:0.89,img:'me51084',about:'Alphabet is the parent company of Google, YouTube, Android and Waymo. It trades on NASDAQ under the ticker GOOGL.'},
 {tk:'AMZN',name:'Amazon.com, Inc.',short:'Amazon',p:18960.30,c:-1.12,col:'#ff9900',about:'Amazon runs one of the largest online stores in the world and the AWS cloud platform. It trades on NASDAQ under the ticker AMZN.'},
 {tk:'META',name:'Meta Platforms, Inc.',short:'Meta',p:59840.75,c:1.94,col:'#0866ff',about:'Meta owns Facebook, Instagram, WhatsApp and Threads, and builds Quest VR headsets. It trades on NASDAQ under the ticker META.'},
 {tk:'NFLX',name:'Netflix, Inc.',short:'Netflix',p:101250.00,c:-2.18,img:'m755ff9',about:'Netflix is a subscription streaming service with films, series and games in over 190 countries. It trades on NASDAQ under the ticker NFLX.'},
 {tk:'PLTR',name:'Palantir Technologies Inc.',short:'Palantir',p:15320.40,c:12.40,col:'#3a3f44',about:'Palantir builds data-analytics software used by governments and large companies. It trades on NASDAQ under the ticker PLTR.'},
 {tk:'AMD',name:'Advanced Micro Devices, Inc.',short:'AMD',p:13740.25,c:3.05,col:'#111',about:'AMD designs CPUs and GPUs for PCs, consoles and data centres. It trades on NASDAQ under the ticker AMD.'},
 {tk:'INTC',name:'Intel Corporation',short:'Intel',p:1910.60,c:-0.84,col:'#0071c5',about:'Intel designs and manufactures processors and chips for PCs and data centres. It trades on NASDAQ under the ticker INTC.'},
 {tk:'JPM',name:'JPMorgan Chase & Co.',short:'JPMorgan',p:20450.90,c:0.35,col:'#5b4a3f',about:'JPMorgan Chase is the largest bank in the US by assets. It trades on the NYSE under the ticker JPM.'},
 {tk:'V',name:'Visa Inc.',short:'Visa',p:29310.15,c:0.52,col:'#1a1f71',about:'Visa runs one of the world’s largest card payment networks. It trades on the NYSE under the ticker V.'},
 {tk:'KO',name:'The Coca-Cola Company',short:'Coca-Cola',p:5980.40,c:-0.21,col:'#e41e2b',about:'Coca-Cola makes and sells soft drinks in over 200 countries. It trades on the NYSE under the ticker KO.'},
 {tk:'DIS',name:'The Walt Disney Company',short:'Disney',p:9620.70,c:1.12,col:'#113ccf',about:'Disney runs theme parks, film studios and the Disney+ streaming service. It trades on the NYSE under the ticker DIS.'},
 {tk:'NKE',name:'NIKE, Inc.',short:'Nike',p:6315.55,c:-1.40,col:'#111',about:'Nike designs and sells athletic footwear, apparel and equipment. It trades on the NYSE under the ticker NKE.'},
 {tk:'UBER',name:'Uber Technologies, Inc.',short:'Uber',p:6840.30,c:2.75,col:'#000',about:'Uber runs ride-hailing, food delivery and freight platforms. It trades on the NYSE under the ticker UBER.'}
];
const fmt=v=>'₹'+v.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});
const pct=v=>(v>=0?'+':'')+v.toFixed(2)+'%';
let cur=STOCKS[0];
const $=(sel,root)=> (root||document).querySelector(sel);
const $$=(sel,root)=>[...(root||document).querySelectorAll(sel)];
const toastEl=document.getElementById('toast');let tt;
function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('show'),2000);}
function logoHTML(st,size){return st.img?`<i class="lg ${st.img}" style="width:${size}px;height:${size}px"></i>`:`<i class="lg" style="width:${size}px;height:${size}px;background:${st.col}">${st.tk[0]}</i>`;}
function setLogo(el,st){el.className='im';el.style.backgroundImage='';el.textContent='';if(st.img)el.classList.add(st.img);else{el.style.background=st.col;el.style.display='grid';el.style.placeItems='center';el.style.font='800 '+Math.round(parseFloat(el.style.width)*.45)+'px/1 var(--font)';el.style.color='#fff';el.textContent=st.tk[0];}}
function trunc12(n){n=String(n);return n.length>12?n.slice(0,12).trimEnd()+'…':n;}
function trunc3w(n){const w=String(n).trim().split(/\s+/);return w.length>3?w.slice(0,3).join(' ').replace(/[,;:·\-]+$/,'')+'…':w.join(' ');}   /* ETF names: first 3 words, then … */
function nameHTML(st,m){return `<span class="nm-t" title="${(st.isEtf&&st.full?st.full:st.name).replace(/["<>&]/g,'')}">${st.isEtf?trunc3w((st.full||st.name).replace(/[<>&]/g,'')):trunc12(st.name.replace(/[<>&]/g,''))}</span>`+`<button class="nsw" data-to="s03" aria-label="Switch asset — open Market"><svg width="8" height="10" viewBox="0 0 8 10" aria-hidden="true"><use href="#i11wj2" xlink:href="#i11wj2"/></svg></button>`+(m==='futures'?`<span class="levb">PERP · ${st.lev}x</span>`:'');}
function applyStock(st){cur=st;
 $$('[data-b="name"]').forEach(e=>{e.innerHTML=nameHTML(st,typeof amode!=='undefined'?amode:'spot');});
 $$('[data-b="price"]').forEach(e=>e.textContent=fmt(st.p));
 $$('[data-b="chgp"]').forEach(e=>{e.textContent='('+pct(st.c)+')';e.classList.toggle('up',st.c>=0);e.classList.toggle('dn',st.c<0);});
 $$('[data-b="about"]').forEach(e=>e.textContent='About '+st.short);
 $$('[data-b="desc"]').forEach(e=>e.textContent=st.about);
 $$('[data-b="tk"]').forEach(e=>e.textContent=st.tk);
 $$('[data-b="buy"],[data-b="sell"]').forEach(e=>{const sc=e.closest('.screen').id;if(['s05','s13','s14','s15'].includes(sc)){e.style.left='16px';e.style.width='328px';}else{e.style.left='24px';e.style.width='312px';}e.classList.remove('e');});
 $$('[data-b="buy"]').forEach(e=>e.textContent='Buy '+st.tk);
 $$('[data-b="sell"]').forEach(e=>e.textContent='Sell '+st.tk);
 $$('[data-b="limit"]').forEach(e=>e.textContent=(st.p*1.004).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}));
 $$('[data-b="logo"]').forEach(e=>setLogo(e,st));
 ['s05','s13'].forEach(i=>{const x=document.getElementById(i);if(x&&x._lev)x._lev();});
 {const x=document.getElementById('s04');if(x&&x._chead)x._chead();if(x&&x._news)x._news();}}
function openStock(tk){const st=STOCKS.find(s=>s.tk===tk);if(!st)return;document.getElementById('s04').classList.remove('ar-go');applyStock(st);if(typeof setMode==='function')setMode('spot');go('s04');}

/* --- search --- */
const s02=document.getElementById('s02');
const sIn=document.createElement('input');sIn.className='srch-in';sIn.type='search';sIn.placeholder='Search';sIn.setAttribute('aria-label','Search stocks');sIn.autocomplete='off';
s02.appendChild(sIn);
$$('p',s02).forEach(p=>{if(p.textContent.trim()==='Search stocks')p.classList.add('hide');});
const res=document.createElement('div');res.className='res hide';s02.appendChild(res);
function runSearch(){const q=sIn.value.trim().toLowerCase();if(!q){res.classList.add('hide');return;}res.classList.remove('hide');
 const hits=STOCKS.filter(s=>s.tk.toLowerCase().includes(q)||s.name.toLowerCase().includes(q)||s.short.toLowerCase().includes(q)).sort((a,b)=>(b.tk.toLowerCase().startsWith(q)||b.short.toLowerCase().startsWith(q))-(a.tk.toLowerCase().startsWith(q)||a.short.toLowerCase().startsWith(q)));
 res.innerHTML=hits.length?`<h4>Results (${hits.length})</h4>`+hits.map(s=>`<button class="rrow" data-stock="${s.tk}">${logoHTML(s,20)}<span><b>${s.short}</b><small>${s.tk}</small></span><span class="r"><b>${fmt(s.p)}</b><small class="${s.c>=0?'up':'dn'}">${pct(s.c)}</small></span></button>`).join(''):`<div class="nores"><b>No stocks found for “${sIn.value.replace(/[<>&]/g,'')}”</b>Try a company name or ticker, like Apple or AAPL.</div>`;}
sIn.addEventListener('input',runSearch);

/* --- tap any stock name/ticker on list screens to open it --- */
const NAMEMAP={'Tesla':'TSLA','TSLA':'TSLA','Google':'GOOGL','GOOGL':'GOOGL','Apple':'AAPL','AAPL':'AAPL','Microsoft':'MSFT','MSFT':'MSFT','NVidia':'NVDA','NVDA':'NVDA','NVIDIA Corp':'NVDA','Netflix':'NFLX'};
const rect=e=>({x:parseFloat(e.style.left),y:parseFloat(e.style.top),w:parseFloat(e.style.width),h:parseFloat(e.style.height)});
['s01','s02','s03','s07'].forEach(id=>{const sc=document.getElementById(id);$$('.layer, .fixed',sc).forEach(layer=>{
 const boxes=[...layer.children].filter(e=>e.tagName==='DIV'&&!e.classList.contains('tray'));
 [...layer.children].filter(e=>e.tagName==='P'&&NAMEMAP[e.textContent.trim()]).forEach(p=>{const r=rect(p);
  let best=null,ba=1e9;boxes.forEach(b=>{const q=rect(b);if(q.x<=r.x&&q.y<=r.y&&q.x+q.w>=r.x+r.w&&q.y+q.h>=r.y+r.h&&q.w<=346&&q.h<=140){const a=q.w*q.h;if(a<ba){ba=a;best=q;}}});
  const q=best||{x:12,y:r.y-8,w:336,h:Math.max(44,r.h+28)};
  const bt=document.createElement('button');bt.className='hs';bt.dataset.stock=NAMEMAP[p.textContent.trim()];bt.setAttribute('aria-label','Open '+p.textContent.trim());
  Object.assign(bt.style,{left:q.x+'px',top:q.y+'px',width:q.w+'px',height:q.h+'px',zIndex:7});layer.appendChild(bt);});});});

/* --- order pads: amount entry (centred amount + in-app number pad) --- */
const OPS=['s05','s13','s14','s15'];const BAL=1200;
const fmtAmt=v=>{const p=v.split('.');return (+p[0]||0).toLocaleString('en-IN')+(v.includes('.')?'.'+(p[1]||''):'');};
const PADKEYS=['1','2','3','4','5','6','7','8','9','.','0','del'];
function keyIn(sc,k){let v=sc._amt.value;
 if(k==='del'||k==='Backspace')v=v.slice(0,-1);
 else if(k==='.'){if(!v.includes('.'))v=(v||'0')+'.';}
 else if(/^[0-9]$/.test(k)){if(v.includes('.')&&v.split('.')[1].length>=2)return;if(v==='0')v='';if(v.replace('.','').length>=9)return;v+=k;}
 sc._amt.value=v;sc._render();validate(sc);}
OPS.forEach(id=>{const sc=document.getElementById(id);const fx=$('.fixed.top',sc);const z=$('[data-b="amt"]',sc);if(!z)return;
 z.classList.add('hide');$$('svg.ic',fx).forEach(s=>{if(s.style.width==='2px')s.classList.add('hide');});
 $$('p',fx).forEach(p=>{if(p.textContent.trim()==='₹')p.classList.add('hide');});
 const inp=document.createElement('input');inp.type='hidden';sc._amt=inp;fx.appendChild(inp);
 const disp=document.createElement('button');disp.className='amt-disp';disp.setAttribute('aria-label','Enter amount');fx.appendChild(disp);
 const pad=document.createElement('div');pad.className='npad';pad.setAttribute('role','group');pad.setAttribute('aria-label','Number pad');
 pad.innerHTML=PADKEYS.map((c,i)=>`<button class="pk" data-k="${c}" aria-label="${c==='del'?'Delete':c}" style="left:${4+(i%3)*119}px;top:${8+Math.floor(i/3)*50}px;width:115px;height:46px">${c==='del'?'<svg viewBox="0 0 24 22" width="24" height="22" aria-hidden="true"><use href="#ipwygy" xlink:href="#ipwygy"/></svg>':c}</button>`).join('');
 sc.appendChild(pad);
 sc._render=()=>{const v=inp.value;disp.innerHTML='<span class="cur">₹</span>'+`<span class="${v?'val':'ph'}">${v?fmtAmt(v):'0'}</span><span class="caret${sc.classList.contains('padopen')?' on':''}"></span>`;};
 sc._open=o=>{sc.classList.toggle('padopen',o);sc._render();};
 disp.addEventListener('click',ev=>{ev.stopPropagation();sc._open(true);});
 pad.addEventListener('click',ev=>{ev.stopPropagation();const b=ev.target.closest('[data-k]');if(b)keyIn(sc,b.dataset.k);});
 sc.addEventListener('click',ev=>{if(sc.classList.contains('padopen')&&!ev.target.closest('.npad,.amt-disp,.pctb,[data-to]'))sc._open(false);});
 const minP=[...fx.querySelectorAll('p')].find(p=>/^Min /.test(p.textContent));sc._min=minP;sc._minTxt=minP?minP.textContent:'';if(minP){minP.style.left='0px';minP.style.width='360px';minP.style.textAlign='center';minP.style.alignItems='center';minP.classList.add('C');}
 $$('p',fx).forEach(p=>{const m=p.textContent.trim().match(/^(25|50|100)%$/);if(m){const b=document.createElement('button');b.className='hs pctb';b.setAttribute('aria-label',m[0]+' of balance');const r=rect(p);Object.assign(b.style,{left:(r.x-16)+'px',top:(r.y-4)+'px',width:(r.w+32)+'px',height:(r.h+8)+'px'});b.addEventListener('click',ev=>{ev.stopPropagation();inp.value=String(Math.floor(BAL*+m[1]/100));sc._render();validate(sc);});fx.appendChild(b);}});
 sc._render();});
function validate(sc){const v=parseFloat(sc._amt.value)||0;const sell=sc.id==='s13';let err='';
 if(v>0&&!sell){if(v<400)err='Minimum order is ₹400';else if(v>BAL)err='Not enough balance. Add ₹'+(v-BAL).toLocaleString('en-IN')+' to continue';}
 if(sc._min){sc._min.textContent=err||sc._minTxt;sc._min.classList.toggle('err-txt',!!err);}
 const ok=v>0&&!err&&(sell||v>=400);sc._ok=ok;
 const cta=$('[data-b="cta"]',sc);if(cta)cta.classList.toggle('cta-on',ok);
 $$('[data-b="buy"],[data-b="sell"]',sc).forEach(t=>t.classList.toggle('cta-txt-on',ok));return ok;}

/* --- "Multiply your profits" toggle: off = compact card, on = Figma expanded state (13 Orderpad · Sell) --- */
['s05','s13'].forEach(id=>{const sc=document.getElementById(id);const fx=$('.fixed.top',sc);const tp=e=>parseFloat(e.style.top);
 const card=[...fx.children].find(e=>e.classList.contains('u-10zbk6fj')&&tp(e)===300);if(!card)return;
 const tog=[...fx.querySelectorAll('svg.ic')].find(s=>tp(s)===318&&s.style.left==='298px');
 // hide Figma's static parts; we render title + expanded state ourselves
 [...fx.children].forEach(e=>{const y=tp(e);if(e!==card&&e!==tog&&y>=318&&y<=446&&!(e.tagName==='svg'&&y===312))e.classList.add('hide');});
 const g=document.createElement('div');g.className='lev';fx.appendChild(g);
 let on=id==='s13',mult=2;
 function render(){card.style.height=on?'146px':'56px';const u=tog.querySelector('use');const h=on?'#jcj4lm6fx':'#jqzab50kp';u.setAttribute('href',h);u.setAttribute('xlink:href',h);
  let x=`<p class="tx v-6fx3e2wt n m" style="left:68px;top:320px;width:134px;height:16px">Multiply your profits by</p><p class="tx vwtrt3gh9 n m" style="left:206px;top:320px;width:20px;height:16px">${mult}x</p>`;
  if(on){x+=`<svg class="ic" style="left:28px;top:356px;width:304px;height:1px" aria-hidden="true"><use href="#jnppt8lcl" xlink:href="#jnppt8lcl"/></svg>`;
   [2,3,4].forEach((m,i)=>{const l=28+104*i,a=m===mult;x+=`<div class="${a?'u-f1mom6r8':'u-wfv35xoz'}" style="left:${l}px;top:${a?368:369}px;width:96px;height:${a?34:32}px"></div><p class="tx ${a?'v-6fx3e2wt':'vee09jy1p'} n C" style="left:${l}px;top:377px;width:96px;height:16px">${m}x</p><button class="hs" data-mult="${m}" aria-label="${m}x" style="left:${l}px;top:368px;width:96px;height:34px"></button>`;});
   x+=`<div class="uch2kbsbk" style="left:16px;top:414px;width:328px;height:32px;border-radius:0 0 12px 12px"></div><p class="tx n C" style="left:16px;top:422px;width:328px;height:16px;line-height:16px;white-space:nowrap"><span class="lev-ic"><svg width="16" height="16" aria-hidden="true"><use href="#j-1hkvlu7k" xlink:href="#j-1hkvlu7k"/></svg></span><span class="v2lfylj7w">${cur.tk} moves </span><span class="v-6fx3e2wt">+1%</span><span class="lev-ic"><svg width="12" height="12" aria-hidden="true"><use href="#jdjc4p58o" xlink:href="#jdjc4p58o"/></svg></span><span class="v-nyjz7nsc">You make </span><span class="vwtrt3gh9">+${mult}%</span></p>`;}
  x+=`<button class="hs" data-lev="1" aria-label="Multiply your profits ${on?'on':'off'}" aria-pressed="${on}" style="left:290px;top:310px;width:50px;height:36px"></button>`;
  g.innerHTML=x;}
 g.addEventListener('click',ev=>{const b=ev.target.closest('[data-lev],[data-mult]');if(!b)return;ev.stopPropagation();if(b.dataset.lev)on=!on;else mult=+b.dataset.mult;render();});
 sc._lev=render;sc._setLev=v=>{on=v;render();};render();});

/* --- withdraw keypad --- */
const s18=document.getElementById('s18');let wamt='100';
function wUpd(){const t=$('[data-b="wamt"]',s18);if(t)t.textContent=wamt||'0';const c=[...s18.querySelectorAll('p')].find(p=>/^Withdraw ₹/.test(p.textContent.trim()));if(c)c.textContent='Withdraw ₹'+(wamt||'0');
 const s19=document.getElementById('s19');[...s19.querySelectorAll('p')].forEach(p=>{if(/₹3,890/.test(p.textContent))p.textContent=' ₹'+(+wamt||0).toLocaleString('en-IN');});}
$$('[data-key]',s18).forEach(p=>{const r=rect(p);const b=document.createElement('button');b.className='kbtn';Object.assign(b.style,{left:(r.x-34)+'px',top:(r.y-10)+'px',width:'84px',height:'46px'});b.addEventListener('click',ev=>{ev.stopPropagation();const k=p.dataset.key===','?'':p.dataset.key;if(k==='.'&&wamt.includes('.'))return;if(wamt==='0')wamt='';if(wamt.length<8)wamt+=k;wUpd();});p.parentElement.appendChild(b);});
(()=>{const fb=$('.fixed.bottom',s18);if(!fb)return;const b=document.createElement('button');b.className='kbtn';b.setAttribute('aria-label','Delete');Object.assign(b.style,{left:'268px',top:'697.5px',width:'88px',height:'46.5px'});b.addEventListener('click',ev=>{ev.stopPropagation();wamt=wamt.slice(0,-1);wUpd();});fb.appendChild(b);})();


/* --- drag-to-scroll for horizontal card rows (mouse) --- */
$$('.hrow').forEach(r=>{r._drag=1;let sx=0,sl=0,down=false,moved=false;
 r.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=r.scrollLeft;});
 addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;r.classList.add('drag');}r.scrollLeft=sl-dx;});
 addEventListener('pointerup',()=>{if(!down)return;down=false;r.classList.remove('drag');});
 r.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);});


/* --- Home: Top Movers + By Market Cap tabs (same row/card design as Watchlist) --- */
STOCKS.push(
 {tk:'RIVN',name:'Rivian Automotive, Inc.',short:'Rivian',p:1290.20,c:-4.10,col:'#c99a00',cat:'Automobiles',cap:'Mid',about:'Rivian makes electric pickup trucks, SUVs and delivery vans. It trades on NASDAQ under the ticker RIVN.'},
 {tk:'SOFI',name:'SoFi Technologies, Inc.',short:'SoFi',p:2310.50,c:3.40,col:'#14a3b8',cat:'Financials',cap:'Small',about:'SoFi is a US digital bank offering loans, savings and investing. It trades on NASDAQ under the ticker SOFI.'},
 {tk:'IONQ',name:'IonQ, Inc.',short:'IonQ',p:3650.80,c:6.20,col:'#7c4dff',cat:'Technology',cap:'Small',about:'IonQ builds trapped-ion quantum computers available through major cloud platforms. It trades on the NYSE under the ticker IONQ.'},
 {tk:'LUNR',name:'Intuitive Machines, Inc.',short:'Intuitive Machines',p:1012.30,c:-3.30,col:'#2b6cb0',cat:'Industrials',cap:'Micro',about:'Intuitive Machines builds lunar landers and space data services. It trades on NASDAQ under the ticker LUNR.'},
 {tk:'ASTS',name:'AST SpaceMobile, Inc.',short:'AST SpaceMobile',p:2150.75,c:7.85,col:'#1c3d6e',cat:'Communication',cap:'Micro',about:'AST SpaceMobile is building a satellite network that connects directly to standard phones. It trades on NASDAQ under the ticker ASTS.'});
const CAT={TSLA:'Automobiles',AAPL:'Technology',NVDA:'Semiconductors',MSFT:'Technology',GOOGL:'Communication',AMZN:'Consumer',META:'Communication',NFLX:'Communication',PLTR:'Software',AMD:'Semiconductors',INTC:'Semiconductors',JPM:'Financials',V:'Financials',KO:'Consumer',DIS:'Communication',NKE:'Consumer',UBER:'Technology'};
const CAP={TSLA:'Large',AAPL:'Large',NVDA:'Large',MSFT:'Large',GOOGL:'Large',AMZN:'Large',META:'Large',NFLX:'Large',JPM:'Large',V:'Large',PLTR:'Mid',UBER:'Mid',INTC:'Mid',AMD:'Large',DIS:'Large',KO:'Large',NKE:'Mid'};
STOCKS.forEach(s=>{s.cat=s.cat||CAT[s.tk]||'Others';s.cap=s.cap||CAP[s.tk]||'Mid';});
const S$=tk=>STOCKS.find(s=>s.tk===tk);
const usd=v=>'$'+(v/84.5).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const lg=(st,x,y,sz)=>st.img?`<i class="im ${st.img}" style="left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;border-radius:${sz/2}px"></i>`:`<i class="im" style="left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;border-radius:${sz/2}px;background:${st.col};display:grid;place-items:center;font:800 ${Math.round(sz*.45)}px/1 var(--font);color:#fff">${st.tk[0]}</i>`;
const TM={watch:['TSLA','GOOGL','AAPL','MSFT','NVDA'],traded:['NVDA','TSLA','AAPL','AMZN','PLTR'],gainers:null};
const CAPS={Large:null,Mid:null,Small:null,Micro:null};
(()=>{const s1=document.getElementById('s01');const lay=$('.layer',s1);
 const kids=()=>[...lay.children];const top=e=>parseFloat(e.style.top);
 // Top Movers list
 kids().filter(e=>top(e)>=640&&top(e)<955).forEach(e=>e.classList.add('hide'));
 const tml=document.createElement('div');tml.className='tml';Object.assign(tml.style,{left:'0px',top:'646.5px',width:'360px',height:'310px'});lay.appendChild(tml);
 function rows(key){window._tmKey=key;const list=key==='gainers'?[...STOCKS].filter(s=>s.c>0).sort((a,b)=>b.c-a.c).slice(0,5).map(s=>s.tk):TM[key];
  tml.innerHTML=list.map((tk,i)=>{const st=S$(tk);const y=i*62;const up=st.c>=0;return lg(st,16,y+17,24)+
   `<p class="tx v2lfylj7w n" style="left:52px;top:${y+12}px;width:170px;height:16px">${st.short}</p>`+
   `<p class="tx vgzcnhena n" style="left:52px;top:${y+30}px;width:170px;height:16px">${st.cat} • ${st.tk}</p>`+
   `<p class="tx v2lfylj7w n R" style="left:220px;top:${y+12}px;width:124px;height:16px">${usd(st.p)}</p>`+
   `<p class="tx ${up?'vvph5f06h':'v-6i4010ps'} n R" style="left:220px;top:${y+30}px;width:124px;height:16px">${pct(st.c)}</p>`+
   (i<list.length-1?`<i style="left:16px;top:${y+60}px;width:328px;height:1px;background:var(--surface-2)"></i>`:'')+
   `<button class="hs" data-stock="${tk}" aria-label="Open ${st.short}" style="left:12px;top:${y+4}px;width:336px;height:54px;z-index:7"></button>`;}).join('');}
 // By Market Cap cards (scrollable row)
 kids().filter(e=>top(e)>=1105&&top(e)<1240).forEach(e=>e.classList.add('hide'));
 const cr=document.createElement('div');cr.className='hrow';Object.assign(cr.style,{left:'0px',top:'1110.5px',width:'360px',height:'126px'});lay.appendChild(cr);
 function cards(cap){const list=STOCKS.filter(s=>s.cap===cap);
  cr.innerHTML=list.map((st,i)=>{const x=16+147*(i>>1),y=(i&1)*132;const up=st.c>=0;return `<div class="mc-cell" style="position:absolute;left:0;top:${y}px;width:0;height:0">`+`<div class="u-1jbi682e" style="left:${x}px;top:0px;width:135px;height:120px"></div>`+lg(st,x+12,12,24)+
   `<p class="tx v2lfylj7w n e" style="left:${x+12}px;top:44px;width:111px;height:16px">${st.short}</p>`+
   `<p class="tx v2lfylj7w n" style="left:${x+12}px;top:72px;width:111px;height:16px">${usd(st.p)}</p>`+
   `<p class="tx ${up?'vvph5f06h':'v-6i4010ps'} n" style="left:${x+12}px;top:92px;width:111px;height:16px">${pct(st.c)}</p>`+
   `<button class="hs" data-stock="${st.tk}" aria-label="Open ${st.short}" style="left:${x}px;top:0px;width:135px;height:120px;z-index:7"></button></div>`;}).join('')+
   `<i style="left:${16+147*Math.ceil(list.length/2)}px;top:0px;width:1px;height:1px"></i>`;cr.scrollLeft=0;}   /* two rows, column-major, scrolls sideways */
 // chip groups
 function chips(y,keys,onPick){const boxes=kids().filter(e=>e.tagName==='DIV'&&top(e)===y);const texts=kids().filter(e=>e.tagName==='P'&&top(e)===y+6);
  boxes.sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left));texts.sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left));
  const set=i=>{boxes.forEach((b,j)=>{b.className=j===i?'u-f1mq248m':'u-no2kw0qn';});texts.forEach((t,j)=>{t.classList.remove('v-6fx3e2wt','vv6p7ed6t','C');t.classList.add(j===i?'v-6fx3e2wt':'vv6p7ed6t');});onPick(keys[i]);};
  boxes.forEach((b,i)=>{const bt=document.createElement('button');bt.className='hs';bt.setAttribute('aria-label',texts[i]?texts[i].textContent:keys[i]);Object.assign(bt.style,{left:b.style.left,top:b.style.top,width:b.style.width,height:b.style.height,zIndex:7});bt.addEventListener('click',ev=>{ev.stopPropagation();set(i);});lay.appendChild(bt);});
  set(0);}
 chips(606.5,['watch','traded','gainers'],rows);
 chips(1066.5,['Large','Mid','Small','Micro'],cards);
 // keep tray shift working for the new containers
 lay.dataset.h=parseFloat(lay.dataset.h||lay.style.height);
})();
$$('.hrow').forEach(r=>{if(r._drag)return;r._drag=1;let sx=0,sl=0,down=false,moved=false;
 r.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=r.scrollLeft;});
 addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;r.classList.add('drag');}r.scrollLeft=sl-dx;});
 addEventListener('pointerup',()=>{if(!down)return;down=false;r.classList.remove('drag');});
 r.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);});


/* --- Stock page: stat cards under the price scroll horizontally (+2 more stats) --- */
(()=>{const sc=document.getElementById('s04');if(!sc)return;const lay=$('.layer',sc);const tp=e=>parseFloat(e.style.top);
 const items=[...lay.children].filter(e=>{const y=tp(e);return y>=148&&y<198&&!e.classList.contains('hide');});if(!items.length)return;
 const row=document.createElement('div');row.className='hrow statrow';row.style.cssText='left:0px;top:148px;width:360px;height:50px';
 lay.insertBefore(row,items[0]);items.forEach(e=>{e.style.top=(tp(e)-148)+'px';row.appendChild(e);});
 row.insertAdjacentHTML('beforeend',`<div class="s1tsql" style="left:403px;top:0px;width:135px;height:50px"></div><p class="tx t1qvs3 n" style="left:412px;top:9px;width:110px;height:12px">52W High / Low</p><p class="tx t7u1n4 n" style="left:412px;top:25px;width:120px;height:16px">71,240.0 / 41,880.5</p>`+
  `<div class="s1tsql" style="left:550px;top:0px;width:105px;height:50px"></div><p class="tx t1qvs3 n" style="left:559px;top:9px;width:90px;height:12px">Avg. Volume</p><p class="tx t7u1n4 n" style="left:559px;top:25px;width:90px;height:16px">98.4M</p>`+
  `<i style="left:671px;top:0;width:1px;height:1px"></i>`);
 // value cells keep left alignment when they sit inside the scroller
 row.querySelectorAll('p.R').forEach(p=>p.classList.remove('R'));
})();

/* --- Stock page: Analyst Ratings — ring sweeps in, bars fill, 78% pops when the card scrolls into view --- */
(()=>{const sc=document.getElementById('s04');if(!sc)return;const lay=$('.layer',sc);const tp=e=>parseFloat(e.style.top);
 const inCard=e=>{const y=tp(e);return y>=698&&y<840;};
 const kids=[...lay.children];
 const card=kids.find(e=>e.classList.contains('s57wrx')&&tp(e)===698);if(!card)return;
 kids.forEach(e=>{if(!inCard(e))return;
  if(e.classList.contains('sring78'))e.classList.add('ar-ring');
  else if(e.tagName==='P'&&e.textContent.trim()==='78%')e.classList.add('ar-pct');
  else if(e.tagName==='DIV'&&['s15qvd','splwpg','sh3jdv'].some(c=>e.classList.contains(c)))e.classList.add('ar-bar');
  else if(e.classList.contains('im')&&tp(e)===722)e.classList.add('hide');                       // stray logo left in the Figma frame
 });
 const rows=kids.filter(e=>inCard(e)&&e.tagName==='P'&&e.classList.contains('tmp05p'));if(rows[2]&&rows[2].textContent.trim()==='Hold')rows[2].textContent='Sell';
 const ttl=kids.find(e=>e.tagName==='P'&&e.textContent.trim()==='Analyst Rartings');if(ttl)ttl.textContent='Analyst Ratings';
 const root=$('.scroll',sc);
 if('IntersectionObserver' in window){new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&en.intersectionRatio>=0.9)sc.classList.add('ar-go');}),{root,rootMargin:'0px 0px -110px 0px',threshold:[0,0.9]}).observe(card);}
 else sc.classList.add('ar-go');})();

/* --- Stock page: scrolled state (Figma 9100:53310) — compact sticky header with logo · name · price under the Spot/Futures switch --- */
(()=>{const sc=document.getElementById('s04');if(!sc)return;const fx=$('.fixed.top',sc),scr=$('.scroll',sc);
 const h=document.createElement('div');h.className='chead';h.setAttribute('aria-hidden','true');
 h.innerHTML='<div class="ch-row"><i class="ch-logo"></i><b class="ch-name"></b><button class="ch-swb" data-to="s03" aria-label="Switch asset — open Market"><svg class="ch-sw" width="8" height="10" aria-hidden="true"><use href="#i11wj2" xlink:href="#i11wj2"/></svg></button><i class="ch-br"></i><b class="ch-price"></b><span class="ch-chg"></span></div>';
 fx.insertBefore(h,fx.firstChild);
 sc._chead=()=>{const st=cur,up=st.c>=0;const lgEl=$('.ch-logo',h);lgEl.className='ch-logo'+(st.img?' '+st.img:'');lgEl.style.background=st.img?'':st.col;lgEl.textContent=st.img?'':st.tk[0];
  $('.ch-name',h).textContent=trunc12(st.name);$('.ch-price',h).textContent=fmt(st.p);const c=$('.ch-chg',h);c.textContent='('+pct(st.c)+')';
  $('.ch-price',h).classList.toggle('dn',!up);c.classList.toggle('dn',!up);};
 const on=()=>{const v=scr.scrollTop>112;if(v!==sc.classList.contains('compact')){sc.classList.toggle('compact',v);h.setAttribute('aria-hidden',String(!v));}};
 scr.addEventListener('scroll',on,{passive:true});sc._chead();})();

/* --- Portfolio headers: solid background only while scrolled --- */
['s07','s17'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;const r=$('.scroll',sc);r.addEventListener('scroll',()=>sc.classList.toggle('hdr-on',r.scrollTop>8),{passive:true});});

/* --- same bottom fade behind every floating bottom CTA (Order placed, Withdraw complete) --- */
['s06','s19'].forEach(id=>{const fb=document.querySelector('#'+id+' .fixed.bottom');if(!fb||fb.querySelector('.blob'))return;
 const t=Math.min(...[...fb.children].map(e=>parseFloat(e.style.top)).filter(v=>!isNaN(v)))-39;
 fb.insertAdjacentHTML('afterbegin',`<div class="blob" aria-hidden="true" style="left:0px;top:${t}px;width:360px;height:${840-t}px;background:var(--navfade)"></div>`);});

/* --- Market: scrollable list, fixed header + tabs, every tab lists stocks --- */
const MTABS=[['traded','Most Traded'],['watch','Watchlist'],['new','New'],['gainers','Top Gainers'],['losers','Top Losers']];
const MLIST={watch:['TSLA','GOOGL','AAPL','NVDA','MSFT','META','NFLX','AMZN'],new:['PLTR','IONQ','ASTS','SOFI','RIVN'],
 traded:['NVDA','TSLA','AAPL','AMZN','PLTR','MSFT','META','GOOGL','AMD','NFLX','UBER','INTC'],
 gainers:()=>[...STOCKS].filter(s=>s.c>0).sort((a,b)=>b.c-a.c).map(s=>s.tk),losers:()=>[...STOCKS].filter(s=>s.c<0).sort((a,b)=>a.c-b.c).map(s=>s.tk)};
let mtab='traded';
const s03=document.getElementById('s03');
(()=>{const fx=$('.fixed.top',s03);const lay=$('.layer',s03);const tp=e=>parseFloat(e.style.top);
 [...fx.children].forEach(e=>{if(tp(e)>=84)e.classList.add('hide');});
 const hb=document.createElement('div');hb.style.cssText='position:absolute;left:0;top:0;width:360px;height:115px;background:var(--bg);z-index:0';fx.insertBefore(hb,fx.firstChild);
 const cr=document.createElement('div');cr.className='hrow mchips';Object.assign(cr.style,{left:'0px',top:'79px',width:'360px',height:'28px'});fx.appendChild(cr);
 const ICO={watch:'iysy9v',traded:'i5gzzd',gainers:'i19d8h'};
 function chips(){let x=16;cr.innerHTML=MTABS.map(([k,l])=>{const on=k===mtab;const w=Math.round(l.length*6.6+(ICO[k]?44:26)+(k==='new'?26:0));const ic=ICO[k]?`<svg class="ic" style="left:${x+13}px;top:6px;width:16px;height:16px" aria-hidden="true"><use href="#${ICO[k]}" xlink:href="#${ICO[k]}"/></svg>`:'';
  const tx=x+(ICO[k]?33:13);const h=`<div class="${on?'u-f1mq248m':'u-no2kw0qn'}" style="left:${x}px;top:0px;width:${w}px;height:28px"></div>${ic}<p class="tx ${on?'v-6fx3e2wt':'vv6p7ed6t'} n" style="left:${tx}px;top:6px;width:${w-30}px;height:16px">${l}</p>`+
   (k==='new'?`<div class="skz03m" style="left:${x+w-30}px;top:6px;width:18px;height:16px"></div><p class="tx tigimd n C m" style="left:${x+w-30}px;top:8px;width:18px;height:12px">${MLIST.new.length}</p>`:'')+
   `<button class="hs" data-mtab="${k}" aria-label="${l}" style="left:${x}px;top:0px;width:${w}px;height:28px;z-index:7"></button>`;x+=w+12;return h;}).join('')+`<i style="left:${x+4}px;top:0;width:1px;height:1px"></i>`;}
 function list(){const ids=(typeof MLIST[mtab]==='function'?MLIST[mtab]():MLIST[mtab]);const label=(MTABS.find(t=>t[0]===mtab)||[0,''])[1];
  let h=`<div class="s1oyi7" style="left:0px;top:119px;width:360px;height:77px"></div><p class="tx t1v8py n" style="left:16px;top:135px;width:200px;height:16px">${mtab==='traded'?'All Assets (124)':label+' ('+ids.length+')'}</p>`+
   `<svg class="ic" style="left:320px;top:131px;width:24px;height:24px" aria-hidden="true"><use href="#i1d10z" xlink:href="#i1d10z"/></svg>`+
   `<div class="sgfkoy" style="left:0px;top:167px;width:360px;height:29px"></div><p class="tx t19ph2 n" style="left:44px;top:175px;width:90px;height:12px">Name &amp; Category</p><p class="tx t19ph2 n" style="left:172px;top:175px;width:60px;height:12px">24H Change</p><p class="tx t19ph2 n R" style="left:290px;top:175px;width:40px;height:12px">Price</p>`;
  ids.forEach((tk,i)=>{const st=S$(tk);if(!st)return;const y=196+54*i;const up=st.c>=0;
   h+=`<div class="s1fd05" style="left:16px;top:${y}px;width:328px;height:54px"></div>`+lg(st,16,y+17,20)+
    `<p class="tx t1v8py n" style="left:44px;top:${y+12}px;width:150px;height:16px">${st.short}</p>`+
    `<p class="tx t1qvs3 n" style="left:44px;top:${y+30}px;width:150px;height:12px">${tk}</p>`+
    `<p class="tx ${up?'txtciz':'t1v5ki'} n R" style="left:150px;top:${y+19}px;width:76px;height:16px">${pct(st.c)}</p>`+
    `<p class="tx t1v8py n R" style="left:236px;top:${y+19}px;width:108px;height:16px">${fmt(st.p)}</p>`+
    `<button class="hs" data-stock="${tk}" aria-label="Open ${st.short}" style="left:16px;top:${y}px;width:328px;height:54px;z-index:7"></button>`;});
  lay.innerHTML=h;lay.style.height=(196+54*ids.length+110)+'px';$('.scroll',s03).scrollTop=0;}
 window.marketTab=k=>{const d=tabDir(MTABS,mtab,k);mtab=k;chips();list();tabSwipe([lay],d);};
 cr.addEventListener('click',e=>{const b=e.target.closest('[data-mtab]');if(!b)return;e.stopPropagation();marketTab(b.dataset.mtab);});
 marketTab('traded');
 setTimeout(()=>{const on=$('[data-mtab="traded"]',cr);if(on)cr.scrollLeft=Math.max(0,parseFloat(on.style.left)-16);},0);
})();
$$('.hrow').forEach(r=>{if(r._drag)return;r._drag=1;let sx=0,sl=0,down=false,moved=false;
 r.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=r.scrollLeft;});
 addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;r.classList.add('drag');}r.scrollLeft=sl-dx;});
 addEventListener('pointerup',()=>{if(!down)return;down=false;r.classList.remove('drag');});
 r.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);});

/* ===== Futures: 5-tab bottom nav (Figma 8923:219071), Futures tab screen, Spot/Futures switcher on the asset page ===== */
(()=>{const sp=document.querySelector('svg[width="0"]');
 const P={home:'<path d="M18.58 19.38H14.57V15.08C14.57 14.91 14.46 14.8 14.29 14.8H9.71C9.54 14.8 9.43 14.91 9.43 15.08V19.38H5.42V11.77L12 4.62L18.58 11.74Z" fill="currentColor"/>',
 market:'<path fill-rule="evenodd" d="M17.31 18.15C17.31 18.66 16.89 19.08 16.38 19.08L10.5 19.08C9.58 19.08 9.12 17.97 9.77 17.33L17.33 9.77C17.69 9.4 18.28 9.4 18.65 9.77C19.01 10.13 19.01 10.72 18.65 11.09L12.52 17.21L16.38 17.21C16.89 17.21 17.31 17.63 17.31 18.15Z" fill="currentColor"/><path fill-rule="evenodd" d="M7.92 7.1C7.92 6.58 8.34 6.17 8.85 6.17L14.73 6.17C15.64 6.17 16.1 7.27 15.46 7.92L7.9 15.48C7.53 15.84 6.94 15.84 6.58 15.48C6.21 15.11 6.21 14.52 6.58 14.16L12.71 8.03L8.85 8.03C8.34 8.03 7.92 7.61 7.92 7.1Z" fill="currentColor"/>',
 portfolio:'<path d="M8.44 19.45H4.12V13.61H8.44ZM13.8 19.45H9.49V5.75H13.8ZM19.16 19.44H14.85V11.34H19.16Z" fill="currentColor"/>',
 orders:'<path d="M17.13 5.17H8.12C7.19 5.17 6.43 5.93 6.43 6.86V7.42H5.87C4.94 7.42 4.18 8.18 4.18 9.11V18.12C4.18 19.05 4.94 19.81 5.87 19.81H14.88C15.81 19.81 16.57 19.05 16.57 18.12V17.56H17.13C18.06 17.56 18.82 16.8 18.82 15.87V6.86C18.82 5.93 18.06 5.17 17.13 5.17ZM14.32 17.28C14.32 17.43 14.19 17.56 14.03 17.56H6.71C6.56 17.56 6.43 17.43 6.43 17.28V16.72C6.43 16.56 6.56 16.43 6.71 16.43H14.03C14.19 16.43 14.32 16.56 14.32 16.72ZM14.32 15.03C14.32 15.18 14.19 15.31 14.03 15.31H6.71C6.56 15.31 6.43 15.18 6.43 15.03V14.46C6.43 14.31 6.56 14.18 6.71 14.18H14.03C14.19 14.18 14.32 14.31 14.32 14.46ZM14.32 12.77C14.32 12.93 14.19 13.06 14.03 13.06H6.71C6.56 13.06 6.43 12.93 6.43 12.77V12.21C6.43 12.06 6.56 11.93 6.71 11.93H14.03C14.19 11.93 14.32 12.06 14.32 12.21ZM14.32 10.52C14.32 10.68 14.19 10.8 14.03 10.8H6.71C6.56 10.8 6.43 10.68 6.43 10.52V9.96C6.43 9.8 6.56 9.68 6.71 9.68H14.03C14.19 9.68 14.32 9.8 14.32 9.96ZM17.69 15.87C17.69 16.18 17.44 16.43 17.13 16.43H16.57V9.11C16.57 8.18 15.81 7.42 14.88 7.42H7.56V6.86C7.56 6.55 7.81 6.3 8.12 6.3H17.13C17.44 6.3 17.69 6.55 17.69 6.86Z" fill="currentColor"/>',
 futures:'<path fill-rule="evenodd" d="M18.43 18.82L15.49 9.89L6.56 6.94L19.62 5.75Z" fill="currentColor"/><path fill-rule="evenodd" d="M13.12 19.48L11.26 13.83L5.62 11.96L13.88 11.21Z" fill="currentColor"/>'};
 P.options='<path d="M20 8.1L15.12 8.1L9.55 18.19H4V16.1H8.43L14 6.02H20ZM19.93 17.99L14 17.99V15.9L19.93 15.9Z" fill="currentColor"/><path d="M4 8.1L10 8.1V6.02L4 6.02Z" fill="currentColor"/>';
 sp.insertAdjacentHTML('beforeend',Object.entries(P).map(([k,v])=>`<symbol id="nv-${k}" viewBox="0 0 24 24">${v}</symbol>`).join(''));})();
const NAV=[['home','Home','s01'],['market','Market','s03'],['portfolio','Portfolio','s07'],['futures','Futures','s22'],['options','Options','s23']]; /* Figma 8923:219071 (Orders moved to the Portfolio header icon) */
const NAVX=[20,78,136,194,252];
function navHTML(active){return `<div class="u8kr4ekgi" style="left:16px;top:730px;width:320px;height:56px"></div>`+
 `<div class="nclip" style="left:16px;top:730px;width:320px;height:56px"><div class="nglow" style="left:${NAVX[NAV.findIndex(n=>n[0]===active)]-2}px;top:-35px;width:50px;height:40px"></div></div>`+
 NAV.map(([k,l,to],i)=>{const x=16+NAVX[i],on=k===active;return `<svg class="ic nvi${on?' on':''}" style="left:${x+12}px;top:738px;width:24px;height:24px" aria-hidden="true"><use href="#nv-${k}" xlink:href="#nv-${k}"/></svg>`+
  `<p class="tx ${on?'v-xybnfg2z':'v-iw7myok'} n C" style="left:${x-6}px;top:762px;width:60px;height:12px">${l}</p>`+
  (on?'':`<button class="hs" data-to="${to}" aria-label="${l}" style="left:${x}px;top:734px;width:48px;height:44px"></button>`);}).join('');}
function setNav(id,active){const sc=document.getElementById(id);if(!sc)return;const fb=$('.fixed.bottom',sc);if(!fb)return;
 [...fb.children].forEach(e=>{if(!e.classList.contains('blob'))e.remove();});fb.insertAdjacentHTML('beforeend',navHTML(active));}
[['s01','home'],['s03','market'],['s07','portfolio'],['s17','portfolio']].forEach(([i,a])=>setNav(i,a));

/* --- Futures data --- */
const FUND={};STOCKS.forEach((s,i)=>{s.lev=['Large'].includes(s.cap)?10:5;FUND[s.tk]=((i%5)*0.0025+0.005).toFixed(4);});
const FTABS=[['all','All'],['traded','Most Traded'],['gainers','Top Gainers'],['losers','Top Losers']];
const FLIST={all:()=>STOCKS.map(s=>s.tk),traded:['TSLA','NVDA','AAPL','PLTR','AMD','META','AMZN','MSFT','NFLX','GOOGL'],
 gainers:()=>[...STOCKS].filter(s=>s.c>0).sort((a,b)=>b.c-a.c).map(s=>s.tk),losers:()=>[...STOCKS].filter(s=>s.c<0).sort((a,b)=>a.c-b.c).map(s=>s.tk)};
let ftab='all';
/* --- Futures tab screen (s22): same layout as Market --- */
(()=>{const sec=document.createElement('section');sec.className='screen';sec.id='s22';sec.dataset.name='Futures';sec.style.background='var(--bg)';
 sec.innerHTML=`<div class="scroll"><div class="layer" style="height:800px"></div></div>
 <div class="fixed top"><div style="position:absolute;left:0;top:0;width:360px;height:115px;background:var(--bg)"></div>
  <p class="tx v8m6ygxj9 n" style="left:16px;top:41px;width:200px;height:22px">Futures</p>
  <svg class="ic" style="left:312px;top:36px;width:32px;height:32px" aria-hidden="true"><use href="#i1cw9d" xlink:href="#i1cw9d"/></svg>
  <button class="hs" data-to="s02" aria-label="Search" style="left:312px;top:36px;width:32px;height:32px"></button>
  <div class="hrow fchips" style="left:0px;top:79px;width:360px;height:28px"></div></div>
 <div class="fixed bottom"><div class="blob" aria-hidden="true" style="left:0px;top:691px;width:360px;height:209px;background:var(--navfade)"></div></div>`;
 dev.insertBefore(sec,document.getElementById('toast'));screens.push(sec);sec.insertAdjacentHTML('beforeend',SB);setNav('s22','futures');
 const cr=$('.fchips',sec),lay=$('.layer',sec);
 function chips(){let x=16;cr.innerHTML=FTABS.map(([k,l])=>{const on=k===ftab,w=Math.round(l.length*6.6+26);const h=`<div class="${on?'u-f1mq248m':'u-no2kw0qn'}" style="left:${x}px;top:0;width:${w}px;height:28px"></div><p class="tx ${on?'v-6fx3e2wt':'vv6p7ed6t'} n" style="left:${x+13}px;top:6px;width:${w-20}px;height:16px">${l}</p><button class="hs" data-ftab="${k}" aria-label="${l}" style="left:${x}px;top:0;width:${w}px;height:28px;z-index:7"></button>`;x+=w+12;return h;}).join('')+`<i style="left:${x+4}px;top:0;width:1px;height:1px"></i>`;}
 function list(){const ids=typeof FLIST[ftab]==='function'?FLIST[ftab]():FLIST[ftab];
  let h=`<div class="s1oyi7" style="left:0px;top:119px;width:360px;height:77px"></div><p class="tx t1v8py n" style="left:16px;top:135px;width:220px;height:16px">Futures (${ids.length})</p>`+
   `<div class="sgfkoy" style="left:0px;top:167px;width:360px;height:29px"></div><p class="tx t19ph2 n" style="left:44px;top:175px;width:110px;height:12px">Contract &amp; Leverage</p><p class="tx t19ph2 n" style="left:172px;top:175px;width:60px;height:12px">24H Change</p><p class="tx t19ph2 n R" style="left:270px;top:175px;width:60px;height:12px">Mark Price</p>`;
  ids.forEach((tk,i)=>{const st=S$(tk);if(!st)return;const y=196+54*i,up=st.c>=0;
   h+=`<div class="s1fd05" style="left:16px;top:${y}px;width:328px;height:54px"></div>`+lg(st,16,y+17,20)+
    `<p class="tx t1v8py n" style="left:44px;top:${y+12}px;width:120px;height:16px">${tk}<span class="levb">${st.lev}x</span></p>`+
    `<p class="tx t1qvs3 n" style="left:44px;top:${y+30}px;width:150px;height:12px">Perpetual • ${st.short}</p>`+
    `<p class="tx ${up?'txtciz':'t1v5ki'} n R" style="left:150px;top:${y+19}px;width:76px;height:16px">${pct(st.c)}</p>`+
    `<p class="tx t1v8py n R" style="left:236px;top:${y+19}px;width:108px;height:16px">${fmt(st.p)}</p>`+
    `<button class="hs" data-fstock="${tk}" aria-label="Open ${tk} futures" style="left:16px;top:${y}px;width:328px;height:54px;z-index:7"></button>`;});
  lay.innerHTML=h;lay.style.height=(196+54*ids.length+110)+'px';$('.scroll',sec).scrollTop=0;}
 sec.addEventListener('click',e=>{const t=e.target.closest('[data-ftab]');if(t){e.stopPropagation();const d=tabDir(FTABS,ftab,t.dataset.ftab);ftab=t.dataset.ftab;chips();list();tabSwipe([lay],d);return;}
  const f=e.target.closest('[data-fstock]');if(f){e.stopPropagation();openStock(f.dataset.fstock);setMode('futures');}});
 chips();list();})();

/* --- Options tab screen (s23): same layout as Futures; US stock options contracts --- */
const OPTS=(()=>{const L=[];const exp=['25 Oct','01 Nov','15 Nov'];['TSLA','NVDA','AAPL','MSFT','AMZN','META','GOOGL','PLTR','AMD','NFLX'].forEach((tk,i)=>{const st=S$(tk);if(!st)return;const usdP=st.p/84.5;const k=Math.round(usdP/5)*5;
 L.push({tk,type:'Call',strike:k+5,exp:exp[i%3],prem:+(usdP*0.031+i*0.4).toFixed(2),c:+(st.c*2.6).toFixed(2),oi:(12+i*3.1).toFixed(1)+'K'});
 L.push({tk,type:'Put',strike:k-5,exp:exp[(i+1)%3],prem:+(usdP*0.024+i*0.3).toFixed(2),c:+(-st.c*2.2).toFixed(2),oi:(8+i*2.4).toFixed(1)+'K'});});return L;})();
const OTABS=[['all','All'],['active','Most Active'],['calls','Calls'],['puts','Puts']];
let otab='all';
(()=>{const sec=document.createElement('section');sec.className='screen';sec.id='s23';sec.dataset.name='Options';sec.style.background='var(--bg)';
 sec.innerHTML=`<div class="scroll"><div class="layer" style="height:800px"></div></div>
 <div class="fixed top"><div style="position:absolute;left:0;top:0;width:360px;height:115px;background:var(--bg)"></div>
  <p class="tx v8m6ygxj9 n" style="left:16px;top:41px;width:200px;height:22px">Options</p>
  <svg class="ic" style="left:312px;top:36px;width:32px;height:32px" aria-hidden="true"><use href="#i1cw9d" xlink:href="#i1cw9d"/></svg>
  <button class="hs" data-to="s02" aria-label="Search" style="left:312px;top:36px;width:32px;height:32px"></button>
  <div class="hrow ochips" style="left:0px;top:79px;width:360px;height:28px"></div></div>
 <div class="fixed bottom"><div class="blob" aria-hidden="true" style="left:0px;top:691px;width:360px;height:209px;background:var(--navfade)"></div></div>`;
 dev.insertBefore(sec,document.getElementById('toast'));screens.push(sec);sec.insertAdjacentHTML('beforeend',SB);
 const cr=$('.ochips',sec),lay=$('.layer',sec);
 function chips(){let x=16;cr.innerHTML=OTABS.map(([k,l])=>{const on=k===otab,w=Math.round(l.length*6.6+26);const h=`<div class="${on?'u-f1mq248m':'u-no2kw0qn'}" style="left:${x}px;top:0;width:${w}px;height:28px"></div><p class="tx ${on?'v-6fx3e2wt':'vv6p7ed6t'} n" style="left:${x+13}px;top:6px;width:${w-20}px;height:16px">${l}</p><button class="hs" data-otab="${k}" aria-label="${l}" style="left:${x}px;top:0;width:${w}px;height:28px;z-index:7"></button>`;x+=w+12;return h;}).join('')+`<i style="left:${x+4}px;top:0;width:1px;height:1px"></i>`;}
 function list(){let ids=OPTS.slice();if(otab==='calls')ids=ids.filter(o=>o.type==='Call');if(otab==='puts')ids=ids.filter(o=>o.type==='Put');if(otab==='active')ids=ids.sort((a,b)=>parseFloat(b.oi)-parseFloat(a.oi)).slice(0,10);
  let h=`<div class="s1oyi7" style="left:0px;top:119px;width:360px;height:77px"></div><p class="tx t1v8py n" style="left:16px;top:135px;width:220px;height:16px">Options (${ids.length})</p>`+
   `<div class="sgfkoy" style="left:0px;top:167px;width:360px;height:29px"></div><p class="tx t19ph2 n" style="left:44px;top:175px;width:110px;height:12px">Contract &amp; Expiry</p><p class="tx t19ph2 n" style="left:172px;top:175px;width:60px;height:12px">24H Change</p><p class="tx t19ph2 n R" style="left:270px;top:175px;width:60px;height:12px">Premium</p>`;
  ids.forEach((o,i)=>{const st=S$(o.tk);const y=196+54*i,up=o.c>=0;
   h+=`<div class="s1fd05" style="left:16px;top:${y}px;width:328px;height:54px"></div>`+lg(st,16,y+17,20)+
    `<p class="tx t1v8py n" style="left:44px;top:${y+12}px;width:150px;height:16px">${o.tk} $${o.strike}<span class="levb ${o.type==='Call'?'oc':'op'}">${o.type.toUpperCase()}</span></p>`+
    `<p class="tx t1qvs3 n" style="left:44px;top:${y+30}px;width:150px;height:12px">Exp ${o.exp} • OI ${o.oi}</p>`+
    `<p class="tx ${up?'txtciz':'t1v5ki'} n R" style="left:150px;top:${y+19}px;width:76px;height:16px">${pct(o.c)}</p>`+
    `<p class="tx t1v8py n R" style="left:236px;top:${y+19}px;width:108px;height:16px">$${o.prem.toFixed(2)}</p>`+
    `<button class="hs" data-opt="${o.tk} $${o.strike} ${o.type}" aria-label="${o.tk} ${o.strike} ${o.type}" style="left:16px;top:${y}px;width:328px;height:54px;z-index:7"></button>`;});
  lay.innerHTML=h;lay.style.height=(196+54*ids.length+110)+'px';$('.scroll',sec).scrollTop=0;}
 sec.addEventListener('click',e=>{const t=e.target.closest('[data-otab]');if(t){e.stopPropagation();const d=tabDir(OTABS,otab,t.dataset.otab);otab=t.dataset.otab;chips();list();tabSwipe([lay],d);return;}
  const o=e.target.closest('[data-opt]');if(o){e.stopPropagation();toast('Option chain for '+o.dataset.opt+' coming soon');}});
 chips();list();})();
setNav('s23','options');

/* --- Futures & Options tabs: placeholder until launch --- */
['s22','s23'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;
 $('.scroll',sc).classList.add('hide');[...$('.fixed.top',sc).children].forEach(e=>e.classList.add('hide'));
 sc.insertAdjacentHTML('beforeend','<p class="soon" role="status">COMING SOON</p>');});

/* --- Asset page: Spot / Futures switcher (from crypto Asset Page header) --- */
let amode='spot';
const s04=document.getElementById('s04');
(()=>{const fx=$('.fixed.top',s04);
 fx.insertAdjacentHTML('beforeend',`<div class="swc" style="left:104px;top:36px;width:148px;height:32px"><span class="swp"></span><button data-mode="spot">Spot</button><button data-mode="futures">Futures</button></div>`);
 fx.addEventListener('click',e=>{const b=e.target.closest('.swc [data-mode]');if(!b)return;e.stopPropagation();setMode(b.dataset.mode);});})();
const SPOTTXT={};
function setMode(m){amode=m;const sw=$('.swc',s04);sw.classList.toggle('fut',m==='futures');$$('[data-mode]',sw).forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===m));
 const lay=$('.layer',s04),ps=[...lay.querySelectorAll('p')];const st=cur;
 const map=m==='futures'?[['Market Cap','Mark Price',fmt(st.p*1.0004).replace('₹','')],['P/E Ratio (TTM)','Funding (8h)',FUND[st.tk]+'%'],['24 High / Low','Max Leverage',st.lev+'x']]:null;
 ps.forEach(p=>{const t=p.textContent.trim();if(parseFloat(p.style.top)>=200)return;if(!(p.dataset.lbl||SPOTTXT[t]===undefined&&['Market Cap','P/E Ratio (TTM)','24 High / Low'].includes(t)))return;
  if(!p.dataset.lbl){p.dataset.lbl=t;const v=ps[ps.indexOf(p)+1];p._v=v;if(v)v.dataset.spot=v.textContent;}
  const row=map&&map.find(r=>r[0]===p.dataset.lbl);p.textContent=row?row[1]:p.dataset.lbl;if(p._v){p._v.textContent=row?row[2]:p._v.dataset.spot;p._v.style.textAlign=row?'left':'';}});
 $$('[data-b="name"]',s04).forEach(e=>{e.innerHTML=nameHTML(st,m);});
 const fb=$('.fixed.bottom',s04);const tx=[...fb.querySelectorAll('p')];
 if(tx[0])tx[0].textContent=m==='futures'?'Buy / Long':'Buy';if(tx[1])tx[1].textContent=m==='futures'?'Sell / Short':'Sell';}
document.addEventListener('click',e=>{const b=e.target.closest('#s04 .fixed.bottom [data-to="s05"],#s04 .fixed.bottom [data-to="s13"]');if(!b)return;
 const sc=document.getElementById(b.dataset.to);if(sc&&sc._setLev)setTimeout(()=>sc._setLev(amode==='futures'),0);},true);

/* --- appearance: dark / light (works with every brand theme) --- */
function setHash(){const r=document.documentElement;try{history.replaceState(null,'','#theme='+(r.dataset.brand||'blue')+'&mode='+(r.dataset.mode||'dark')+(r.dataset.pal==='a11y'?'&profile=a11y':''));}catch(e){}if(window.THEMES_READY)paintSwatches();}
const mEl=document.getElementById('modes');
function applyMode(m,save){m=m==='light'?'light':'dark';document.documentElement.dataset.mode=m;if(window.THEMES_READY)paintSwatches();
 $$('[data-appearance]',mEl).forEach(b=>b.setAttribute('aria-pressed',b.dataset.appearance===m));
 if(save){try{localStorage.setItem('kuber-mode',m);}catch(e){}setHash();}}
mEl.addEventListener('click',e=>{const b=e.target.closest('[data-appearance]');if(b)applyMode(b.dataset.appearance,true);});
addEventListener('hashchange',()=>{const m=location.hash.match(/mode=(\w+)/);if(m)applyMode(m[1],false);});
/* Dark is the default (user, 2026-10-31): every page load starts dark — a saved or linked Light isn't restored. Only the
   All flows tiles (iframes) take the mode from their address, so they match the toggle. */
(()=>{const m=self!==top&&location.hash.match(/mode=(\w+)/);applyMode(m?m[1]:'dark',false);if(self===top&&/mode=light/.test(location.hash)){try{history.replaceState(null,'',location.hash.replace('mode=light','mode=dark'));}catch(e){}}})();

/* --- colour profile: Standard (original theme hexes) / Vivid · Accessible (L3 ♿ Accessible Kuber + vivid brand) --- */
const VIVID={minted:['#77C48C','#326C44'],blue:['#3D8BFF','#1F63E0'],mint:['#2FD4B4','#0E8C76'],gold:['#FFB524','#B57A00'],rose:['#FF5FA2','#C2387A'],lavender:['#9B7BFF','#6B4BE0']};
const pEl=document.getElementById('pals');
function paintSwatches(){const r=document.documentElement,a=r.dataset.pal==='a11y',lt=r.dataset.mode==='light';
 $$('#themes [data-theme]').forEach(b=>{const t=THEMES.find(x=>x[0]===b.dataset.theme);const h=a?VIVID[t[0]][lt?1:0]:t[2];b.querySelector('i').style.background=h;b.querySelector('small').textContent=h;});}
function applyPal(p,save){p=p==='a11y'?'a11y':'std';document.documentElement.dataset.pal=p;document.documentElement.dataset.contrast=p==='a11y'?'accessible':'standard';/* L3 Kuber tokens follow the profile */
 $$('[data-pal-set]',pEl).forEach(b=>b.setAttribute('aria-pressed',b.dataset.palSet===p));if(typeof paintSwatches==='function'&&window.THEMES_READY)paintSwatches();
 if(save){try{localStorage.setItem('kuber-pal',p);}catch(e){}setHash();}}
pEl.addEventListener('click',e=>{const b=e.target.closest('[data-pal-set]');if(b)applyPal(b.dataset.palSet,true);});

/* --- brand themes (US Stocks app versions) --- */
const THEMES=[['minted','Minted Mint','#77C48C'],['blue','Liberty Blue','#256FEF'],['mint','Harbor Mint','#97D3C7'],['gold','Gilded Sand','#FFE0A2'],['rose','Blossom Rose','#E4B5CB'],['lavender','Dusk Lavender','#A69CCC']];
const tEl=document.getElementById('themes');
tEl.innerHTML=THEMES.map(([k,n,h])=>`<button data-theme="${k}" aria-pressed="false"><i style="background:${h}"></i><span><b>${n}</b><small>${h}</small></span></button>`).join('');
function applyTheme(k,save){if(!THEMES.some(t=>t[0]===k))k='blue';document.documentElement.dataset.brand=k;
 $$('[data-theme]',tEl).forEach(b=>b.setAttribute('aria-pressed',b.dataset.theme===k));
 if(save){try{localStorage.setItem('kuber-brand',k);}catch(e){}setHash();}}
tEl.addEventListener('click',e=>{const b=e.target.closest('[data-theme]');if(b)applyTheme(b.dataset.theme,true);});
addEventListener('hashchange',()=>{const m=location.hash.match(/theme=(\w+)/);if(m)applyTheme(m[1],false);});
(()=>{const m=location.hash.match(/theme=(\w+)/);let k=m&&m[1];if(!k){try{k=localStorage.getItem('kuber-brand');}catch(e){}}applyTheme(k||'blue',false);})();
window.THEMES_READY=1;(()=>{const m=location.hash.match(/profile=(\w+)/);let k=m&&m[1];if(!k){try{k=localStorage.getItem('kuber-pal');}catch(e){}}applyPal(k||'std',false);paintSwatches();})();
addEventListener('hashchange',()=>{const m=location.hash.match(/profile=(\w+)/);applyPal(m?m[1]:'std',false);});

/* --- Portfolio: Holdings / Futures tabs + Orders & History icon (crypto Positions design 4540:174101) --- */
const FPOS=[{tk:'TSLA',side:'Long',lev:5,margin:65000,qty:8.4513,entry:38110.40},{tk:'NVDA',side:'Short',lev:10,margin:40000,qty:34.6853,entry:11610.20},{tk:'AAPL',side:'Long',lev:3,margin:25000,qty:3.4261,entry:22140.15}];
const inr0=v=>'₹'+Math.round(v).toLocaleString('en-IN');
const inr2=v=>v.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});
(()=>{const sc=document.getElementById('s07');if(!sc)return;const lay=$('.layer',sc);const tp=e=>parseFloat(e.style.top);
 // replace "Your holdings (5)" + filter with the tab row
 [...lay.children].forEach(e=>{const y=tp(e);if(y>=258&&y<=270&&(e.tagName==='P'||e.tagName==='svg'))e.classList.add('hide');});
 const hold=[...lay.children].filter(e=>tp(e)>=300);
 const bar=document.createElement('div');bar.className='ptabs';bar.style.cssText='left:0px;top:254px;width:360px;height:40px';
 bar.innerHTML=`<button data-ptab="hold" style="left:16px;width:144px">Holdings (5)</button><button data-ptab="fut" style="left:160px;width:144px">Futures (${FPOS.length})</button><i class="pul"></i><i class="pline"></i>
  <button class="oh" data-to="s08" aria-label="Orders &amp; History, 4 open orders"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><use href="#nv-orders" xlink:href="#nv-orders"/></svg><b>4</b></button>`;
 lay.appendChild(bar);
 const fp=document.createElement('div');fp.className='fpos hide';fp.style.cssText='left:0px;top:0px;width:360px;height:10px';lay.appendChild(fp);
 const open={};
 function card(p,y){const st=S$(p.tk);const mark=st.p,dir=p.side==='Long'?1:-1;const pnl=dir*(mark-p.entry)*p.qty,pp=pnl/p.margin*100,up=pnl>=0;
  const liq=p.entry*(1-dir/p.lev*0.9);const ex=open[p.tk];const h=ex?238:117;
  const pen=`<svg class="fp-ic" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><path d="M1.5 8.5l.4-2L6.8 1.6l1.6 1.6L3.5 8.1zM6 2.4l1.6 1.6" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/></svg>`;
  const swap=`<svg class="fp-ic" viewBox="0 0 12 12" width="11" height="12" aria-hidden="true"><path d="M2 4h7.5L7.5 2M10 8H2.5l2 2" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const L=(l,lx,ly,extra='')=>`<p class="tx n fp-l" style="left:${lx}px;top:${y+ly}px;width:100px;height:12px">${l}${extra}</p>`;
  const V=(v,lx,ly,extra='')=>`<p class="tx n fp-v" style="left:${lx}px;top:${y+ly}px;width:100px;height:16px">${v}${extra}</p>`;
  let x=`<div class="fp-card" style="left:16.5px;top:${y}px;width:327px;height:${h}px"></div>`+
   lg(st,28.5,y+16,28)+
   `<p class="tx n" style="left:64.5px;top:${y+12}px;width:150px;height:20px"><span class="fp-nm">${p.tk}</span></p>`+
   `<p class="tx n" style="left:64.5px;top:${y+32}px;width:120px;height:16px"><span class="fp-side ${p.side==='Long'?'up':'dn'}">${p.side}</span><span class="fp-sub12"> ${p.lev}x</span></p>`+
   `<p class="tx n R fp-pnl ${up?'up':'dn'}" style="left:150px;top:${y+12}px;width:181.5px;height:20px">${up?'+':'-'}${inr0(Math.abs(pnl))} (${up?'+':''}${pp.toFixed(1)}%)</p>`+
   `<p class="tx n R fp-sub12m" style="left:150px;top:${y+32}px;width:181.5px;height:16px">LTP ${fmt(mark)}</p>`+
   `<div class="fp-sec" style="left:28.5px;top:${y+60}px;width:303px;height:${h-72}px"></div>`+
   L('Margin',28.5,73)+V(inr0(p.margin).replace('₹','₹ '),28.5,89,pen)+
   L('Qty',138.5,73,swap)+V(p.qty.toFixed(4),138.5,89)+
   L('Liq. Price',228.5,73)+V(inr2(liq),228.5,89)+
   `<svg class="ic fp-chev${ex?' on':''}" style="left:319.5px;top:${y+83}px;width:12px;height:12px" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`+
   `<button class="hs" data-fopen="${p.tk}" aria-label="Open ${p.tk} futures" style="left:16.5px;top:${y}px;width:200px;height:56px;z-index:7"></button>`+
   `<button class="hs" data-fexp="${p.tk}" aria-expanded="${!!ex}" aria-label="${ex?'Hide':'Show'} ${p.tk} position details" style="left:216.5px;top:${y+60}px;width:127px;height:48px;z-index:7"></button>`;
  if(ex){x+=L('TP/SL',28.5,121)+`<button class="fp-add" data-fact="Add TP/SL" data-tk="${p.tk}" style="left:28.5px;top:${y+137}px">+ Add</button>`+
    L('Leverage',138.5,121)+V(p.lev+'x',138.5,137,pen)+
    L('Avg. Entry',228.5,121)+V(inr2(p.entry),228.5,137)+
    `<i class="fp-div" style="left:28.5px;top:${y+181}px"></i>`+
    [['Increase',28.5,96,''],['Exit Options',132.5,96,''],['Exit',237.5,94,' fp-exit']].map(([l,bx,bw,c])=>`<button class="fp-btn${c} l3-btn" data-variant="tertiary" data-size="sm" data-fact="${l}" data-tk="${p.tk}" style="left:${bx}px;top:${y+194}px;width:${bw}px;height:32px">${l}</button>`).join('');}
  return [x,h];}
 
function renderF(){let y=306,html='';FPOS.forEach(p=>{const [x,h]=card(p,y);html+=x;y+=h+16;});fp.innerHTML=html;fp._h=y;}
 let tab='hold';
 function setTab(t){const d=t===tab?0:t==='fut'?1:-1;tab=t;$$('[data-ptab]',bar).forEach(b=>b.classList.toggle('on',b.dataset.ptab===t));bar.querySelector('.pul').style.left=(t==='hold'?38:182)+'px';
  hold.forEach(e=>e.classList.toggle('hide',t==='fut'));fp.classList.toggle('hide',t!=='fut');if(t==='fut')renderF();
  lay.style.height=(t==='fut'?Math.max(fp._h+110,800):1072)+'px';tabSwipe(t==='fut'?[fp]:hold,d);}
 bar.addEventListener('click',e=>{const b=e.target.closest('[data-ptab]');if(b){e.stopPropagation();setTab(b.dataset.ptab);}});
 fp.addEventListener('click',e=>{const x=e.target.closest('[data-fexp]');if(x){e.stopPropagation();open[x.dataset.fexp]=!open[x.dataset.fexp];renderF();lay.style.height=Math.max(fp._h+110,800)+'px';return;}
  const o=e.target.closest('[data-fopen]');if(o){e.stopPropagation();openStock(o.dataset.fopen);setMode('futures');return;}
  const a=e.target.closest('[data-fact]');if(a){e.stopPropagation();const k=a.dataset.fact,tk=a.dataset.tk;
   if(k==='Increase'){openStock(tk);setMode('futures');const p=FPOS.find(q=>q.tk===tk);go(p.side==='Long'?'s05':'s13');const s=document.getElementById(p.side==='Long'?'s05':'s13');if(s._setLev)s._setLev(true);}
   else toast(k==='Exit'?tk+' position exit placed':'Exit options for '+tk+' coming soon');}});
 setTab('hold');})();

/* --- Stock page: News (Figma 9100:80918) — 4 rows, 56px rounded thumbnails, 2-line titles, source • time --- */
(()=>{const sc=document.getElementById('s04');if(!sc)return;const lay=$('.layer',sc);const tp=e=>parseFloat(e.style.top);const Y=1670;
 [...lay.children].forEach(e=>{const y=tp(e);if(y>=Y+20&&y<2006)e.classList.add('hide');});
 const box=document.createElement('div');box.className='news';box.style.cssText=`left:0px;top:${Y+32}px;width:360px;height:272px`;lay.appendChild(box);
 sc._news=()=>{const st=cur,s=st.short,up=st.c>=0;
  const rows=[[`${s} shares ${up?'climb':'slip'} ${Math.abs(st.c).toFixed(1)}% as investors eye earnings`,'The Economic Times','10m ago','n-coin'],
   [`${s} beats Q3 estimates on strong demand`,'Investing.com','4 days ago','n-logo'],
   [`${s} unveils new products at its annual event`,'Reuters','1h ago','n-logo n-dark'],
   [`Analysts raise ${s} price target`,'Bloomberg','2h ago','n-art']];
  const logo=st.img?`<i class="im ${st.img}"></i>`:`<i class="im" style="background:${st.col};display:grid;place-items:center;font:800 13px/1 var(--font);color:#fff">${st.tk[0]}</i>`;
  box.innerHTML=rows.map(([t,src,ago,k],i)=>`<a class="nrow" href="#" onclick="return false" style="top:${i*72}px"><span class="nthumb ${k}">${k.startsWith('n-logo')?logo:k==='n-coin'?'<b>$</b>':''}</span><span class="ntext"><span class="nt">${t}</span><span class="nm">${src}<i>•</i>${ago}</span></span></a>`).join('');};
 sc._news();})();

/* --- Stock page: Company financials (Figma 9086:52236) — 3 tabs, bars grow from the 0 axis when the section scrolls into view --- */
const CFIN={
 cash:{tab:'Cashflow',h:420,base:263,grid:[135,167,199,231,263,295],zero:263,yl:['80B','60B','40B','20B','0','-20B'],years:303,line1:340,hdr:352,line2:376,rows0:392,
  legend:[['OPERATING','#0f9958',28],['INVESTING','#6daafb',137],['FINANCING','#ff8827',243]],
  bars:[[35,122,0],[47,15,1],[59,-8,2],[88,60,0],[100,-11,1],[112,-20,2],[146,38,0],[158,-11,1],[170,-6,2],[208,-30,0],[255,-30,0],[267,-2,1],[279,-2,2]],
  rows:[['Operating cash flow','56.7B','+12.45%'],['Investing cash flow','-3.7B','-48.5%'],['Financing cash flow','-1.3B','-30.75%']]},
 income:{tab:'Income',h:384,base:262,grid:[135,167,199,231,263],yl:['120B','90B','60B','30B','0'],years:272,line1:306,hdr:318,line2:342,rows0:358,
  legend:[['REVENUE','#37ad75',28],['NET INCOME','#439bf4',125]],
  bars:[[35,70,0],[49,15,1],[88,87,0],[102,15,1],[146,95,0],[160,15,1],[208,117,0],[222,15,1],[255,102,0],[269,15,1]],
  rows:[['Revenue','56.7B','+12.45%'],['Net Income','-3.7B','-48.5%'],['Net profit margin','-1.3B','-30.75%']]},
 bal:{tab:'Balance sheet',h:355,base:262,grid:[135,167,199,231,263],yl:['120B','90B','60B','30B','0'],years:272,line1:306,hdr:318,line2:342,rows0:358,
  legend:[['TOTAL ASSETS','#37ad75',28],['TOTAL LIABILITIES','#439bf4',162]],
  bars:[[35,70,0],[49,60,1],[88,87,0],[102,79,1],[146,95,0],[160,87,1],[208,117,0],[222,109,1],[255,102,0],[269,92,1]],
  rows:[['Total assets','56.7B','+12.45%'],['Total liabilities','-3.7B','-48.5%']]}};
(()=>{const sc=document.getElementById('s04');if(!sc)return;const lay=$('.layer',sc);const tp=e=>parseFloat(e.style.top);const Y0=1146,NEWS=1670;
 const below=[...lay.children].filter(e=>tp(e)>=NEWS);
 [...lay.children].forEach(e=>{const y=tp(e);if(y>=Y0+28&&y<NEWS)e.classList.add('hide');});
 const box=document.createElement('div');box.className='cfin';box.style.cssText=`left:0px;top:${Y0}px;width:360px;height:492px`;lay.appendChild(box);
 let cur='cash';const baseH=parseFloat(lay.style.height);
 function render(){const v=CFIN[cur];let h='';
  [['income','Income',16,66],['bal','Balance sheet',90,104],['cash','Cashflow',202,80]].forEach(([k,l,x,w])=>{h+=`<button class="cf-chip${k===cur?' on':''}" data-cf="${k}" style="left:${x}px;top:32px;width:${w}px">${l}</button>`;});
  h+=`<div class="cf-card" style="left:16px;top:72px;width:328px;height:${v.h}px"></div>`;
  v.legend.forEach(([l,c,x])=>{h+=`<i class="cf-dot" style="left:${x}px;top:95px;background:${c}"></i><p class="tx n cf-cap" style="left:${x+13}px;top:92px;width:140px;height:12px">${l}</p>`;});
  v.grid.forEach((y,i)=>{h+=`<i class="cf-grid${y===v.zero?' zero':''}" style="left:28px;top:${y}px"></i><p class="tx n R cf-ax" style="left:292px;top:${y-7}px;width:40px;height:12px">${v.yl[i]}</p>`;});
  ['2021','2022','2023','2024','2025'].forEach((yr,i)=>{h+=`<p class="tx n C cf-ax" style="left:${[29,87,146,204,262][i]}px;top:${v.years}px;width:28px;height:12px">${yr}</p>`;});
  v.bars.forEach(([x,val,s],i)=>{const up=val>=0,ht=Math.abs(val),top=up?v.base-ht:v.base;
   h+=`<i class="cf-bar ${up?'up':'dn'}" style="left:${x}px;top:${top}px;height:${ht}px;background:${v.legend[s][1]};transition-delay:${(i*0.04).toFixed(2)}s"></i>`;});
  h+=`<i class="cf-line" style="top:${v.line1}px"></i><i class="cf-line" style="top:${v.line2}px"></i>`+
   `<p class="tx n cf-cap" style="left:27px;top:${v.hdr}px;width:80px;height:12px">ANNUALLY<span class="cf-sort">⇅</span></p>`+
   `<p class="tx n C cf-cap" style="left:164px;top:${v.hdr}px;width:72px;height:12px"><span class="cf-chev">‹</span> FY 25 <span class="cf-chev">›</span></p>`+
   `<p class="tx n R cf-cap" style="left:232px;top:${v.hdr}px;width:100px;height:12px">Y/Y CHANGE</p>`;
  v.rows.forEach(([l,val,ch],i)=>{const y=v.rows0+33*i;h+=`<p class="tx n cf-row" style="left:27px;top:${y}px;width:140px;height:16px">${l}</p><p class="tx n C cf-row" style="left:170px;top:${y}px;width:60px;height:16px">${val}</p><p class="tx n R cf-row ${ch[0]==='+'?'up':'dn'}" style="left:240px;top:${y}px;width:92px;height:16px">${ch}</p>`;});
  box.innerHTML=h;box.style.height=(72+v.h)+'px';
  const d=(72+v.h)-492;below.forEach(e=>e.style.transform=d?`translateY(${d}px)`:'');lay.style.height=(baseH+d)+'px';}
 function play(){box.classList.remove('go');void box.offsetWidth;requestAnimationFrame(()=>requestAnimationFrame(()=>box.classList.add('go')));}
 box.addEventListener('click',e=>{const b=e.target.closest('[data-cf]');if(!b)return;e.stopPropagation();cur=b.dataset.cf;render();play();});
 render();
 const root=$('.scroll',sc);
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&en.intersectionRatio>=0.35)box.classList.add('go');else if(!en.isIntersecting)box.classList.remove('go');}),{root,threshold:[0,0.35]});io.observe(box);}
 else box.classList.add('go');})();

/* --- Orders & History opens from Portfolio: back arrow, centred title, no bottom nav (Figma 8636:129330) --- */
(()=>{const sc=document.getElementById('s08');if(!sc)return;const fx=$('.fixed.top',sc);
 const t=[...fx.querySelectorAll('p')].find(p=>p.textContent.trim()==='Orders & History');if(t){t.style.left='0px';t.style.width='360px';t.classList.add('C');t.style.textAlign='center';}
 fx.insertAdjacentHTML('beforeend','<svg class="ic" style="left:16px;top:42px;width:20px;height:20px" aria-hidden="true"><use href="#i11b34" xlink:href="#i11b34"/></svg><button class="hs" data-to="back" aria-label="Back" style="left:10px;top:36px;width:32px;height:32px"></button>');
 const fb=$('.fixed.bottom',sc);if(fb)fb.innerHTML='';})();

/* --- Withdraw: quick-amount pills styled like the order-pad % pills, and they add to the amount --- */
(()=>{const sc=document.getElementById('s18');if(!sc)return;const lay=$('.layer',sc);
 $$('.sk6wwz',lay).forEach(b=>{b.classList.remove('sk6wwz');b.classList.add('u-wfv35xoz');});
 $$('p.turnw4',lay).forEach(p=>{p.classList.remove('turnw4');p.classList.add('vgzcnhena');const v=+p.textContent.replace(/[^0-9]/g,'');
  const r=rect(p);const b=document.createElement('button');b.className='hs';b.setAttribute('aria-label','Add '+p.textContent.trim());
  Object.assign(b.style,{left:(r.x-12)+'px',top:(r.y-4)+'px',width:(r.w+24)+'px',height:'24px',zIndex:7});
  b.addEventListener('click',e=>{e.stopPropagation();wamt=String((parseFloat(wamt)||0)+v);wUpd();});lay.appendChild(b);});})();

/* --- Search: Popular Searches starts 16px below the 80px header --- */
(()=>{const sc=document.getElementById('s02');if(!sc)return;const lay=$('.layer',sc);
 [...lay.children].forEach(e=>{const y=parseFloat(e.style.top);if(!isNaN(y)&&y>=140)e.style.top=(y-48)+'px';});
 lay.style.height=(parseFloat(lay.style.height)-48)+'px';
 $$('.fixed.top svg.ic',sc).forEach(s=>{if(s.style.width==='0px')s.classList.add('hide');});})();

/* --- floating settings (share build) --- */
(()=>{const fab=document.getElementById('fab'),pn=document.getElementById('settings'),cl=document.getElementById('pclose');
 const mob=()=>innerWidth<=700;const set=o=>{pn.classList.toggle('open',o);fab.setAttribute('aria-expanded',String(o));if(mob())pn.setAttribute('aria-hidden',String(!o));else pn.removeAttribute('aria-hidden');if(o&&mob())setTimeout(()=>cl.focus(),60);};
 if(mob())pn.setAttribute('aria-hidden','true');addEventListener('resize',()=>{if(!mob()){pn.classList.remove('open');pn.removeAttribute('aria-hidden');}else if(!pn.classList.contains('open'))pn.setAttribute('aria-hidden','true');});
 fab.addEventListener('click',e=>{e.stopPropagation();set(!pn.classList.contains('open'));});
 cl.addEventListener('click',()=>{set(false);fab.focus();});
 document.addEventListener('click',e=>{if(mob()&&pn.classList.contains('open')&&!pn.contains(e.target)&&!fab.contains(e.target))set(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pn.classList.contains('open')){e.stopImmediatePropagation();set(false);fab.focus();}},true);
 document.getElementById('list').addEventListener('click',e=>{if(e.target.closest('[data-to]')&&innerWidth<=700)set(false);});})();

/* ===== Proposal branch: Asset page without "Spot" (both vendors are token perps) =====
   Vendor 1 → "1x"      (fixed 1x)       → Buy / Sell, no leverage card on the order pad
   Vendor 2 → "2–100x"  (leveraged)      → Long / Short, leverage card on            */
const AP={get on(){return document.documentElement.dataset.ap!=='current';}};
function apLabels(){['s05','s13'].forEach(i=>{const x=document.getElementById(i);if(x&&x._optab&&OPTAB[i])x._optab(OPTAB[i]);});const sw=document.querySelector('#s04 .swc');if(!sw)return;const [a,b]=sw.querySelectorAll('button');
 a.textContent=AP.on?(window.FLOWK==='usm'?'Markets':window.FLOWK==='v2'?'1x Market':'Market 1x'):'Spot';b.textContent=AP.on?(window.FLOWK==='usm'?'Futures':'Leveraged'):'Futures';
 a.setAttribute('aria-label',AP.on?'Market 1x, no leverage':'Spot');b.setAttribute('aria-label',AP.on?'Leveraged, 2x to 100x':'Futures');
 if(typeof setMode==='function')setMode(amode);}
const _setMode=setMode;setMode=function(m){_setMode(m);
 if(AP.on){$$('#s04 [data-b="name"] .levb').forEach(x=>x.remove());if(m==='futures')$$('#s04 .layer p').forEach(p=>{if(p.dataset.lbl==='24 High / Low'&&p._v)p._v.textContent='100x';});}};
document.addEventListener('click',e=>{const b=e.target.closest('#s04 .fixed.bottom [data-to="s05"],#s04 .fixed.bottom [data-to="s13"]');if(!b)return;
 const one=AP.on&&amode==='spot';['s05','s13'].forEach(id=>document.getElementById(id).classList.toggle('nolev',one));},true);
document.addEventListener('click',e=>{const b=e.target.closest('[data-to="s05"],[data-to="s13"]');if(b&&!b.closest('#s04'))['s05','s13'].forEach(id=>document.getElementById(id).classList.remove('nolev'));},true);
/* --- proposal: Market page title becomes "US Market" + small "Token Perps" tag --- */
function apMarketTitle(){const t=[...document.querySelectorAll('#s03 .fixed.top p')].find(p=>p.style.top==='41px'&&/^(Market|US Market)/.test(p.textContent.trim()));if(!t)return;
 if(AP.on){t.innerHTML='Market';t.style.width='260px';t.style.whiteSpace='nowrap';}else{t.textContent='Market';t.style.width='92px';}}

const apEl=document.getElementById('aps');
function applyAP(v,save){v=v==='current'?'current':'proposed';document.documentElement.dataset.ap=v;$$('[data-ap-set]',apEl).forEach(b=>b.setAttribute('aria-pressed',b.dataset.apSet===v));apLabels();apMarketTitle();
 if(save){try{localStorage.setItem('kuber-ap',v);}catch(e){}}}
apEl.addEventListener('click',e=>{const b=e.target.closest('[data-ap-set]');if(b)applyAP(b.dataset.apSet,true);});
(()=>{const m=location.hash.match(/asset=(\w+)/);let k=m&&m[1];if(!k){try{k=localStorage.getItem('kuber-ap');}catch(e){}}applyAP(k||'proposed',false);})();

/* ===== Order pad: Spot / Futures tabs (Figma Orderpad 2322:6913) — labels follow the asset-page switch ===== */
const OPTAB={};   // per order pad: 'spot' | 'fut'
function tabLabels(){return (typeof AP!=='undefined'&&AP.on)?(window.FLOWK==='usm'?['Markets','Futures']:[window.FLOWK==='v2'?'1x Market':'Market 1x','Leveraged']):['Spot','Futures'];}
['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;const fx=$('.fixed.top',sc);const tp=e=>parseFloat(e.style.top);
 const sell=id==='s13';
 // things that move down 40px to make room for the tab bar
 const shift=[...fx.children].filter(e=>{const y=tp(e);return !isNaN(y)&&y>=100&&y<300;});
 const oldSeg=shift.filter(e=>{const y=tp(e);return y>=110&&y<=118;});   // Instant/Limit(/SIP) pill + labels + their hotspots
 // hide the old "Multiply your profits" card for good — Futures gets the Figma leverage card instead
 [...fx.children].forEach(e=>{const y=tp(e);if(y>=300&&y<=446&&!e.classList.contains('lev'))e.classList.add('op-old');});
 const lev=$('.lev',fx);if(lev)lev.classList.add('op-old');
 fx.insertAdjacentHTML('beforeend',`<div class="op-tabs" role="tablist" aria-label="Order type"><button role="tab" data-optab="spot"></button><button role="tab" data-optab="fut"></button><i class="op-ul"></i></div>
  <div class="op-seg op-futonly"><span class="swp"></span><button data-ofs="mkt" aria-pressed="true">Market</button><button data-ofs="lmt" aria-pressed="false">Limit</button></div>
  <div class="op-lev op-futonly"><p class="t">Leverage</p><p class="v"></p><div class="trk"><i class="fill"></i>${[25,50,75].map(x=>`<i class="dot" style="left:${(x-2)/98*302}px"></i>`).join('')}<i class="th"></i><input type="range" min="2" max="100" step="1" value="3" aria-label="Leverage"></div>
   <div class="lbl">${['2x','25x','50x','75x','100x'].map(x=>`<span>${x}</span>`).join('')}</div><p class="ban"></p></div>
  <div class="op-liq op-futonly"><span>Est. Liq. Price</span><b></b><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M8 7.2v3.6M8 5.2v.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div>`);
 const bar=$('.op-tabs',fx),seg=$('.op-seg',fx),card=$('.op-lev',fx),rng=$('input',card),liq=$('.op-liq',fx);
 const cta=()=>[...sc.querySelectorAll('[data-b="buy"],[data-b="sell"]')];
 function levUI(){const v=+rng.value,pct=(v-2)/98;$('.fill',card).style.width=(pct*302)+'px';$('.th',card).style.left=(pct*302-10)+'px';$('.v',card).textContent=v+'x';
  $('.ban',card).innerHTML=`<svg width="16" height="16" aria-hidden="true"><use href="#j-1hkvlu7k" xlink:href="#j-1hkvlu7k"/></svg> Leverage can multiply your profits and losses.`;
  const dir=sell?-1:1;$('b',liq).textContent=fmt(cur.p*(1-dir*0.9/v)).replace('₹','₹ ');}
 rng.addEventListener('input',levUI);
 seg.addEventListener('click',e=>{const b=e.target.closest('[data-ofs]');if(!b)return;e.stopPropagation();seg.classList.toggle('lmt',b.dataset.ofs==='lmt');$$('[data-ofs]',seg).forEach(x=>x.setAttribute('aria-pressed',x===b));});
 sc._optab=t=>{const d=OPTAB[id]&&OPTAB[id]!==t?(t==='fut'?1:-1):0;OPTAB[id]=t;const fut=t==='fut';sc.classList.toggle('op-fut',fut);
  const [a,b]=tabLabels();const bs=$$('[data-optab]',bar);bs[0].textContent=a;bs[1].textContent=b;bs.forEach(x=>{const on=x.dataset.optab===t;x.classList.toggle('on',on);x.setAttribute('aria-selected',on);});
  oldSeg.forEach(e=>e.classList.toggle('op-hide',fut));
  cta().forEach(e=>{e.textContent=(sell?'Sell ':'Buy ')+cur.tk+(fut?(sell?' Short':' Long'):'');});
  if(fut)levUI();tabSwipe(fut?$$('.op-futonly',fx):oldSeg,d);};
 bar.addEventListener('click',e=>{const b=e.target.closest('[data-optab]');if(!b)return;e.stopPropagation();sc._optab(b.dataset.optab);});
 shift.forEach(e=>e.classList.add('op-sh'));sc.classList.add('op-has');
 sc._optab('spot');});
// open the order pad on the tab that matches the asset page
document.addEventListener('click',e=>{const b=e.target.closest('[data-to="s05"],[data-to="s13"]');if(!b)return;const to=b.dataset.to;
 const t=b.closest('#s04')&&typeof amode!=='undefined'&&amode==='futures'?'fut':'spot';setTimeout(()=>{const sc=document.getElementById(to);if(sc&&sc._optab)sc._optab(t);},0);},true);

/* ===== Branch: single asset page + leverage slider (inside the 1x · 2–100x proposal) =====
   Default 1x = Vendor 1 (Buy/Sell, company fundamentals). Slide above 1x = Vendor 2 (Long/Short, contract details).
   8 layout variants (V1–V8) share one slider component; only placement and treatment change. */
const SP={on:false,v:'1',lev:1};
const SVAR={
 '1':{name:'Inline under price',where:'content',y:148,h:76,ticks:true},
 '2':{name:'Docked above CTA',where:'bottom',h:64},
 '3':{name:'Snap chips',where:'content',y:148,h:76,chips:[1,2,5,10,25,50,100]},
 '4':{name:'Collapsed pill',where:'pill',y:148,h:76,ticks:true},
 '5':{name:'First stat card',where:'stats'},
 '6':{name:'Risk-tinted dock',where:'bottom',h:84,tint:true,liq:true,ctaLev:true},
 '7':{name:'Explained section',where:'content',y:148,h:104,ticks:true,help:true},
 '8':{name:'Outcome preview',where:'content',y:148,h:110,ticks:true,banner:true}};
const s04el=document.getElementById('s04');
const SPFUND=[['Mkt Cap','Mark Price',st=>fmt(st.p*1.0004)],['ROE','Funding (8h)',st=>(FUND[st.tk]||'0.0100')+'%'],['P/E Ratio (TTM)','Open Interest',st=>'$'+(st.p/84.5*0.42).toFixed(1)+'M'],['EPS (TTM)','Max Leverage',()=> '100x'],
 ['Industry P/E','Index Price',st=>fmt(st.p*0.9998)],['Book Value','Next Funding',()=> '02:41:18'],['Debt to Equity','Maint. Margin',()=> '0.5%'],['Face Value','Tick Size',()=> '₹0.01']];
function riskCol(v){return v<=1?'var(--text-3)':v<=10?'var(--green)':v<=25?'#d79e00':'var(--red)';}
function lvsHTML(c,w){const ticks=['1x','25x','50x','75x','100x'];
 let h=`<div class="lvs-hd"><span>Leverage</span><b class="lvs-val">1x</b></div>`;
 if(c.chips)h+=`<div class="lvs-chips">${c.chips.map(x=>`<button data-lv="${x}">${x}x</button>`).join('')}</div>`;
 else h+=`<div class="lvs-trk"><i class="lvs-fill"></i><i class="lvs-th"></i><input type="range" min="1" max="100" step="1" value="1" aria-label="Leverage"></div>`+(c.ticks?`<div class="lvs-lbl">${ticks.map(t=>`<span>${t}</span>`).join('')}</div>`:'');
 if(c.help)h+=`<p class="lvs-help"></p>`;
 if(c.liq)h+=`<p class="lvs-liq"></p>`;
 if(c.banner)h+=`<p class="lvs-ban"></p>`;
 return `<div class="lvs v${SP.v}${c.tint?' tint':''}" style="width:${w}px">${h}</div>`;}
let spShift=0;
function spShiftBelow(y,dy){const lay=$('.layer',s04el);[...lay.children].forEach(e=>{if(e.classList.contains('lvs-host'))return;if(e.dataset.otop===undefined){const t=parseFloat(e.style.top);if(isNaN(t))return;e.dataset.otop=t;}
  const o=+e.dataset.otop;e.style.top=(o>=y?o+dy:o)+'px';});
 if(lay.dataset.oh===undefined)lay.dataset.oh=parseFloat(lay.style.height);lay.style.height=(+lay.dataset.oh+dy)+'px';spShift=dy;}
function spClear(){$$('.lvs-host,.lvs-pill',s04el).forEach(e=>e.remove());spShiftBelow(9e9,0);s04el.classList.remove('sp-dock','sp-dock6');
 const sr=$('.statrow',s04el);if(sr){$$('.sp-statshift',sr).forEach(e=>{e.style.left=e.dataset.oleft+'px';e.classList.remove('sp-statshift');});}}
function spBuild(){spClear();if(!SP.on){document.documentElement.dataset.single='';setLev(1,true);return;}
 document.documentElement.dataset.single='on';const c=SVAR[SP.v];const lay=$('.layer',s04el);
 const host=document.createElement('div');host.className='lvs-host';
 if(c.where==='content'||c.where==='pill'){host.style.cssText=`left:16px;top:${c.y}px;width:328px;height:${c.h}px`;host.innerHTML=lvsHTML(c,328);
  if(c.where==='pill'){host.classList.add('sp-collapsed');const pill=document.createElement('button');pill.className='lvs-pill';pill.innerHTML='<b>1x</b><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>';pill.setAttribute('aria-expanded','false');pill.setAttribute('aria-label','Leverage');
   pill.style.cssText='left:268px;top:104px';lay.appendChild(pill);
   pill.addEventListener('click',e=>{e.stopPropagation();const open=host.classList.toggle('sp-collapsed')===false;pill.setAttribute('aria-expanded',open);spShiftBelow(c.y,open?c.h+12:0);});
   lay.appendChild(host);}
  else{lay.appendChild(host);spShiftBelow(c.y,c.h+12);}}
 else if(c.where==='bottom'){const fb=$('.fixed.bottom',s04el);host.style.cssText=`left:16px;top:${744-c.h-10}px;width:328px;height:${c.h}px`;host.innerHTML=lvsHTML(c,328);fb.appendChild(host);s04el.classList.add('sp-dock');
  const sc=$('.scroll',s04el);sc.style.paddingBottom=(104+c.h+10)+'px';}
 else if(c.where==='stats'){const sr=$('.statrow',s04el);[...sr.children].forEach(e=>{const l=parseFloat(e.style.left);if(isNaN(l))return;if(e.dataset.oleft===undefined)e.dataset.oleft=l;e.style.left=(+e.dataset.oleft+178)+'px';e.classList.add('sp-statshift');});
  host.style.cssText='left:16px;top:0px;width:166px;height:50px';host.classList.add('in-stats');host.innerHTML=lvsHTML({},166);sr.insertBefore(host,sr.firstChild);requestAnimationFrame(()=>{sr.scrollLeft=0;});}
 wireLvs(host);setLev(SP.lev,true);}
function wireLvs(host){const r=$('input',host);if(r)r.addEventListener('input',()=>setLev(+r.value));
 $$('[data-lv]',host).forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();setLev(+b.dataset.lv);}));
 host.addEventListener('click',e=>e.stopPropagation());}
function setLev(v,silent){v=Math.max(1,Math.min(100,v|0));const was=SP.lev;SP.lev=v;const lev=v>1;
 $$('#s04 .lvs,#lvsheet .lvs').forEach(L=>{$('.lvs-val',L).textContent=v+'x';$('.lvs-val',L).style.color=lev?(L.classList.contains('tint')?riskCol(v):'var(--green)'):'var(--text)';
  const r=$('input',L);if(r){r.value=v;const pct=(v-1)/99,W=$('.lvs-trk',L).clientWidth||parseFloat(L.style.width)-24;$('.lvs-fill',L).style.width=(pct*W)+'px';$('.lvs-th',L).style.left=(pct*W-9)+'px';$('.lvs-fill',L).style.background=L.classList.contains('tint')?riskCol(v):'var(--green)';}
  $$('[data-lv]',L).forEach(b=>b.classList.toggle('on',+b.dataset.lv===v));
  const hp=$('.lvs-help',L);if(hp)hp.textContent=lev?`Margin · ${v}× exposure · gains and losses are amplified`:'No leverage · you trade with exactly what you put in';
  const lq=$('.lvs-liq',L);if(lq)lq.innerHTML=lev?`Est. liq. price <b>${fmt(cur.p*(1-0.9/v))}</b>`:'No liquidation at 1x';
  const bn=$('.lvs-ban',L);if(bn)bn.innerHTML=`${cur.tk} moves +1% → <em>you make +${v}%</em>`;});
 const pill=$('.lvs-pill b',s04el);if(pill)pill.textContent=v+'x';
 if(SP.on&&(lev!==(was>1)||silent))setMode(lev?'futures':'spot');
 // CTA copy
 const fb=$('.fixed.bottom',s04el);const tx=[...fb.querySelectorAll('p')].filter(p=>!p.closest('.lvs-host'));
 if(SP.on&&tx[0]){const c=SVAR[SP.v]||{};tx[0].textContent=lev?(c.ctaLev?`Long ${v}x`:'Long'):'Buy';tx[1].textContent=lev?(c.ctaLev?`Short ${v}x`:'Short'):'Sell';}
 spFund(lev&&SP.on);}
function spFund(on){const lay=$('.layer',s04el);const ps=[...lay.querySelectorAll(':scope > p')];
 const ttl=ps.find(p=>p.dataset.fttl||p.textContent.trim()==='Fundamentals');if(ttl){ttl.dataset.fttl=1;ttl.textContent=on?'Contract details':'Fundamentals';ttl.style.width='160px';}
 SPFUND.forEach(([a,b,fn])=>{const p=ps.find(x=>x.dataset.flbl===a||(!x.dataset.flbl&&x.textContent.trim()===a));if(!p)return;p.dataset.flbl=a;const v=ps[ps.indexOf(p)+1];if(!v)return;if(v.dataset.fv===undefined)v.dataset.fv=v.textContent;
  p.textContent=on?b:a;v.textContent=on?fn(cur):v.dataset.fv;v.classList.toggle('R',!on);v.style.width=on?'140px':'';});}
window.setLev=setLev;
// open the order pad on the matching tab with the chosen leverage
document.addEventListener('click',e=>{if(!SP.on)return;const b=e.target.closest('#s04 .fixed.bottom [data-to="s05"],#s04 .fixed.bottom [data-to="s13"]');if(!b)return;const to=b.dataset.to;
 setTimeout(()=>{const sc=document.getElementById(to);if(!sc||!sc._optab)return;sc._optab(SP.lev>1?'fut':'spot');const r=sc.querySelector('.op-lev input');if(r&&SP.lev>1){r.value=Math.max(2,SP.lev);r.dispatchEvent(new Event('input'));}},10);},true);
// reset to 1x whenever a stock page opens fresh
const _openStock=openStock;openStock=function(tk){_openStock(tk);if(SP.on){SP.lev=1;spBuild();}};
// panel
const spEl=document.getElementById('sps'),svEl=document.getElementById('svs');
svEl.innerHTML=Object.entries(SVAR).map(([k,c])=>`<button data-sv="${k}" aria-pressed="false"><b>V${k}</b><small>${c.name}</small></button>`).join('');
function applySP(on,v,save){SP.on=!!on;if(v)SP.v=v;$$('[data-sp]',spEl).forEach(b=>b.setAttribute('aria-pressed',(b.dataset.sp==='on')===SP.on));
 $$('[data-sv]',svEl).forEach(b=>b.setAttribute('aria-pressed',b.dataset.sv===SP.v));svEl.classList.toggle('dim',!SP.on);SP.lev=1;spBuild();
 if(save){try{localStorage.setItem('kuber-sp',(SP.on?'on':'off')+':'+SP.v);}catch(e){}}}
spEl.addEventListener('click',e=>{const b=e.target.closest('[data-sp]');if(b)applySP(b.dataset.sp==='on',null,true);});
svEl.addEventListener('click',e=>{const b=e.target.closest('[data-sv]');if(b){applySP(true,b.dataset.sv,true);if(document.querySelector('.screen.on').id!=='s04')openStock(cur.tk);}});
applySP(false,'1',false);

/* --- single-page branch, round 2: multi-shift layout, inline 1x pill → bottom sheet, sign-coloured price, mark price above 1x, Order Book after the chart --- */
const SHIFTS={};   // name → [y, dy]
spShiftBelow=function(y,dy){SHIFTS.slider=[y,dy];spRelayout();};
function spRelayout(){const lay=$('.layer',s04el);if(lay.dataset.oh===undefined)lay.dataset.oh=parseFloat(lay.style.height);
 [...lay.children].forEach(e=>{if(e.dataset.otop===undefined){const t=parseFloat(e.style.top);if(isNaN(t))return;e.dataset.otop=t;}
  const o=+e.dataset.otop;let add=0;Object.values(SHIFTS).forEach(([y,dy])=>{if(o>=y)add+=dy;});e.style.top=(o+add)+'px';});
 let tot=0;Object.values(SHIFTS).forEach(([y,dy])=>{if(y<9e8)tot+=dy;});lay.style.height=(+lay.dataset.oh+tot)+'px';}
// price colour follows the day's change; above 1x show the leveraged venue's mark price
function spPrice(){const up=cur.c>=0,lev=(SP.on&&SP.lev>1)||window.CA_LEV,p=lev?cur.p*1.0004:cur.p;
 $$('#s04 [data-b="price"]').forEach(e=>{e.textContent=fmt(p);e.classList.toggle('up',up);e.classList.toggle('dn',!up);});
 const ch=$('#s04 .ch-price');if(ch){ch.textContent=fmt(p);}
 const sh=$('#lvsheet .lsh-price');if(sh){sh.textContent=fmt(p);sh.classList.toggle('dn',!up);}
 const sc=$('#lvsheet .lsh-chg');if(sc){sc.textContent='('+pct(cur.c)+')';sc.classList.toggle('dn',!up);}
 spPillPos();}
function priceRow(){const pr=$('#s04 [data-b="price"]'),ch=$('#s04 [data-b="chgp"]');if(!pr||!ch)return;
 const r=document.createRange();r.selectNodeContents(pr);const k=document.getElementById('device').getBoundingClientRect().width/360;const w=r.getBoundingClientRect().width/k;
 if(!w)return;ch.style.left=(parseFloat(pr.style.left)+w+4)+'px';}
function spPillPos(){priceRow();const pill=$('.lvs-pill',s04el),chg=$('#s04 [data-b="chgp"]');if(!pill||!chg)return;
 const r=document.createRange();r.selectNodeContents(chg);const k=document.getElementById('device').getBoundingClientRect().width/360;
 const w=(r.getBoundingClientRect().width||48)/k;pill.style.left=(parseFloat(chg.style.left)+w+8)+'px';pill.style.top=(parseFloat(chg.style.top)-3)+'px';}
// bottom sheet with logo · name · live price + slider
(()=>{const dv=document.getElementById('device');dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="lvsheet-bg" hidden></div><div class="lsh" id="lvsheet" role="dialog" aria-modal="true" aria-label="Leverage" hidden>
 <div class="lsh-grab"></div><div class="lsh-hd"><i class="im lsh-logo"></i><div><p class="lsh-name"></p><p><b class="lsh-price"></b> <span class="lsh-chg"></span></p></div><button class="lsh-x" aria-label="Close">✕</button></div>
 <div class="lsh-body"></div><button class="lsh-done l3-btn" data-variant="primary" data-size="lg">Done</button></div>`);
 const bg=$('#lvsheet-bg'),sh=$('#lvsheet');
 window.lvSheet=o=>{if(o){const st=cur,lg=$('.lsh-logo',sh);lg.className='im lsh-logo'+(st.img?' '+st.img:'');lg.style.background=st.img?'':st.col;lg.textContent=st.img?'':st.tk[0];
   $('.lsh-name',sh).textContent=trunc12(st.name);const body=$('.lsh-body',sh);body.innerHTML=`<div class="lvs-host in-sheet" style="position:relative;width:328px;height:108px">${lvsHTML({ticks:true,help:true},328)}</div>`;wireLvs($('.lvs-host',body));setLev(SP.lev,true);}
  bg.hidden=!o;sh.hidden=!o;dv.classList.toggle('sheet-open',o);};
 bg.addEventListener('click',()=>lvSheet(false));$('.lsh-x',sh).addEventListener('click',()=>lvSheet(false));$('.lsh-done',sh).addEventListener('click',()=>lvSheet(false));
 sh.addEventListener('click',e=>e.stopPropagation());})();
// Order Book (Figma Asset Page 5313:77509) after the chart when leverage > 1x
const OBY=652,OBH=528;
function spOrderBook(on){let ob=$('#s04 .obook');const lay=$('.layer',s04el);
 if(!on){if(ob)ob.remove();delete SHIFTS.ob;spRelayout();return;}
 if(!ob){ob=document.createElement('div');ob.className='obook';ob.dataset.otop=661.9;ob.style.cssText=`left:0px;top:${OBY}px;width:360px;height:${OBH}px`;lay.appendChild(ob);}
 const p=cur.p*1.0004;let rows='';for(let i=0;i<10;i++){const bq=(((i*7+3)%11)+1.2)*0.83,aq=(((i*5+2)%9)+0.8)*0.91,bw=30+((i*37)%55),aw=25+((i*53)%60);
  rows+=`<div class="ob-r"><span class="ob-b" style="width:${bw}%"></span><span class="ob-a" style="width:${aw}%"></span><i>${bq.toFixed(4)}</i><b class="up">${fmt(p-(i+1)*p*0.00012).replace(/\.\d+$/,'')}</b><b class="dn">${fmt(p+(i+1)*p*0.00012).replace(/\.\d+$/,'')}</b><i>${aq.toFixed(3)}</i></div>`;}
 ob.innerHTML=`<p class="ob-t">Order Book</p><div class="ob-c"><div class="ob-h"><b class="up">${fmt(p)}</b><span>Depth <i class="tg"></i></span><span>Qty/Amt ⇄</span></div><i class="ob-dv"></i>
  <div class="ob-ratio"><span class="up">Bids <b>40%</b></span><i class="rb"></i><span class="dn"><b>60%</b> Asks</span></div><div class="ob-cols"><span>Quantity</span><span>Price (INR)</span><span>Price (INR)</span><span>Quantity</span></div>${rows}</div>`;
 SHIFTS.ob=[662,OBH];spRelayout();}
// wrap setLev: keep page price, pill position, order book in sync
const _setLev=setLev;setLev=function(v,silent){_setLev(v,silent);spPrice();spOrderBook(SP.on&&SP.lev>1);};window.setLev=setLev;
const _applyStock=applyStock;applyStock=function(st){_applyStock(st);spPrice();if(SP.on&&SP.lev>1)spOrderBook(true);};
// V4: the pill opens the bottom sheet instead of expanding inline
document.addEventListener('click',e=>{const pill=e.target.closest('#s04 .lvs-pill');if(!pill)return;e.stopPropagation();e.preventDefault();lvSheet(true);},true);
spBuild();

/* --- home icon tray --- */
let trayOpen=false;function toggleTray(){trayOpen=!trayOpen;const s1=document.getElementById('s01');const lay=$('.layer',s1);const tr=document.getElementById('tray');tr.hidden=!trayOpen;
 [...lay.children].forEach(e=>{if(e===tr||e.dataset.act==='tray'&&!tr.contains(e))return;const y=parseFloat(e.style.top);if(isNaN(y))return;
  if(y>=286&&y<352&&!tr.contains(e))e.classList.toggle('hide',trayOpen);else if(y>=352)e.classList.toggle('shift',trayOpen);});
 const opener=[...lay.children].find(e=>e.dataset&&e.dataset.act==='tray'&&e.parentElement===lay);if(opener)opener.classList.toggle('hide',trayOpen);
 lay.style.height=(parseFloat(lay.dataset.h||lay.style.height)+(trayOpen?78:0))+'px';}
(()=>{const lay=$('#s01 .layer');lay.dataset.h=parseFloat(lay.style.height);})();

/* --- orders: Open / History tabs --- */
(()=>{const s8=document.getElementById('s08');const top=$('.fixed.top',s8);const lay=$('.layer',s8);const ul=[...top.children].find(e=>e.style.top==='120px'&&e.style.height==='2px');
 const hist=document.createElement('div');hist.className='hist hide';hist.innerHTML='<b>No past orders yet</b>Executed, cancelled and failed orders will show here.';lay.appendChild(hist);
 const mk=(label,on)=>{const p=[...top.querySelectorAll('p')].find(x=>x.textContent.trim().startsWith(label));if(!p)return;const b=document.createElement('button');b.className='hs';const r=rect(p);Object.assign(b.style,{left:(on?0:180)+'px',top:'88px',width:'180px',height:'34px'});
  b.addEventListener('click',ev=>{ev.stopPropagation();const showHist=!on;const d=hist.classList.contains('hide')===showHist?(showHist?1:-1):0;[...lay.children].forEach(e=>{if(e!==hist)e.classList.toggle('hide',showHist);});hist.classList.toggle('hide',!showHist);
   if(ul){ul.style.left=showHist?'196px':'28px';ul.style.width=showHist?'136px':'146px';}
   const po=[...top.querySelectorAll('p')];po.forEach(x=>{if(x.textContent.startsWith('Open Orders'))x.style.color=showHist?'var(--text-2)':'var(--text)';if(x.textContent.trim()==='History')x.style.color=showHist?'var(--text)':'var(--text-2)';});tabSwipe(showHist?[hist]:[...lay.children].filter(e=>e!==hist&&!e.classList.contains('hide')),d);});top.appendChild(b);};
 mk('Open Orders',true);mk('History',false);})();

/* --- order placed: show the entered amount --- */
function placed(){const sc=document.getElementById(stack[stack.length-1]);const v=sc&&sc._amt?parseFloat(sc._amt.value)||0:0;
 [...document.getElementById('s06').querySelectorAll('p')].forEach(p=>{if(/^Investment Amount/.test(p.textContent))p.textContent='Investment Amount: ₹'+v.toLocaleString('en-IN');});}

const row=a=>'<div>'+a.map(k=>k[0]==='~'?`<span class="${k.slice(1,3)}">${k.slice(3)}</span>`:`<span>${k}</span>`).join('')+'</div>';
screens.forEach(s=>{
  if(s.dataset.sb) s.insertAdjacentHTML('beforeend',SB);
  if(s.dataset.kb){const t=+s.dataset.kb;s.insertAdjacentHTML('beforeend',`<div class="kb" style="top:${t}px;height:${776-t}px" aria-hidden="true">${row('qwertyuiop'.split(''))}${row('asdfghjkl'.split(''))}${row(['~w ⇧'].concat('zxcvbnm'.split(''),['~w ⌫']))}${row(['~w ?123','~w ☺','~sp ','.','~go ✓'])}</div>`);}
});
function show(){const id=stack[stack.length-1];const el=document.getElementById(id);if(el&&el._amt&&!el._kept){el._amt.value='';validate(el);if(el._open)el._open(true);}if(id==='s02'){setTimeout(()=>sIn.focus({preventScroll:true}),380);}   /* after the page has slid in; focusing mid-slide scrolled the phone sideways (user, 2026-11-01) */if(id==='s18'){wamt='100';wUpd();}screens.forEach(s=>{const on=s.id===id;s.classList.toggle('on',on);if(on){const sc=s.querySelector('.scroll');if(sc)sc.scrollTop=0;}});
  document.querySelectorAll('#list button').forEach(b=>b.classList.toggle('on',b.dataset.to===id));}
function go(to){const from=stack[stack.length-1],n=stack.length;if(to==='back'){if(stack.length>1)stack.pop();}else if(document.getElementById(to)&&stack[stack.length-1]!==to)stack.push(to);show();
 const now=stack[stack.length-1];if(now!==from&&stack.length!==n&&!(NAVTABS.includes(from)&&NAVTABS.includes(now)))pageSlide(from,now,stack.length>n?'push':'back');}

/* ===== Motion: a new page slides in from the right, back slides it out; main-nav tabs switch instantly; top tabs swipe the body ===== */
var NAVTABS=['s01','s03','s07','s22','s23'];
function calm(){return matchMedia('(prefers-reduced-motion: reduce)').matches;}
var slideT=0;
function pageSlide(from,to,dir){const a=document.getElementById(from),b=document.getElementById(to);if(!a||!b||calm())return;
 clearTimeout(slideT);screens.forEach(s=>s.classList.remove('nav-push','nav-back','leaving'));
 void b.offsetWidth;a.classList.add('leaving','nav-'+dir);b.classList.add('nav-'+dir);
 slideT=setTimeout(()=>{a.classList.remove('leaving','nav-'+dir);b.classList.remove('nav-'+dir);},360);}
// dir: 1 = the new tab is to the right (content comes in from the right), -1 = to the left
function tabSwipe(els,dir){if(!dir||calm())return;const E='cubic-bezier(.2,0,0,1)';
 els.forEach(e=>{if(!e||!e.animate)return;e.animate([{transform:`translateX(${dir*56}px)`},{transform:'translateX(0)'}],{duration:300,easing:E,composite:'add'});e.animate([{opacity:0},{opacity:1}],{duration:200,easing:'ease-out'});});}
function tabDir(tabs,a,b){const i=tabs.findIndex(t=>t[0]===a),j=tabs.findIndex(t=>t[0]===b);return i<0||j<0||i===j?0:j>i?1:-1;}
dev.addEventListener('click',e=>{
  const st=e.target.closest('[data-stock]');if(st){openStock(st.dataset.stock);return;}
  const ac=e.target.closest('[data-act]');if(ac&&ac.dataset.act==='tray'){toggleTray();return;}
  const b=e.target.closest('[data-to]');
  if(b){const here=stack[stack.length-1];const sc=document.getElementById(here);
    if(OPS.includes(here)&&(b.dataset.to==='s06'||b.dataset.to==='s16')){if(!sc._ok){toast(sc._amt&&sc._amt.value?'Fix the amount to continue':'Enter an amount to continue');sc._amt&&sc._amt.focus();return;}placed();}
    if(b.dataset.to==='s11'){marketTab('watch');go('s03');return;}
    if(b.dataset.tm){marketTab({watch:'traded',traded:'traded',gainers:'gainers'}[window._tmKey]||'traded');go('s03');return;}
    go(b.dataset.to);return;}
  if(e.target.closest('input'))return;
  dev.classList.add('flash');clearTimeout(dev._t);dev._t=setTimeout(()=>dev.classList.remove('flash'),450);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){go('back');return;}const id=stack[stack.length-1];const el=document.getElementById(id);if(document.activeElement&&document.activeElement.tagName==='INPUT')return;if(el&&el._render&&/^([0-9.]|Backspace)$/.test(e.key)){e.preventDefault();if(!el.classList.contains('padopen'))el._open(true);keyIn(el,e.key);}if(id==='s02'&&e.key.length===1){sIn.focus();}});
const list=document.getElementById('list');
list.innerHTML=screens.map((s,i)=>`<li><button data-to="${s.id}"><span>${String(i+1).padStart(2,'0')}</span>${NAMES[s.id]||s.dataset.name}</button></li>`).join('');
list.addEventListener('click',e=>{const b=e.target.closest('[data-to]');if(!b)return;stack=['s01'];if(b.dataset.to!=='s01')stack.push(b.dataset.to);show();});
const bhs=document.getElementById('b-hs');bhs.addEventListener('click',()=>{const on=bhs.getAttribute('aria-pressed')!=='true';bhs.setAttribute('aria-pressed',on);dev.classList.toggle('showhs',on);});
document.getElementById('b-restart').addEventListener('click',()=>{stack=['s01'];show();});
function fit(){const w=document.getElementById('wrap'),ph=document.getElementById('phone');const W=innerWidth||document.documentElement.clientWidth||360,H=innerHeight||document.documentElement.clientHeight||800;let k,pw=384,phh=824;if(W<=700){const HH=H>200?H:800;k=Math.min((W-20)/pw,(HH-20)/phh);if(!(k>0.2))k=(W-20)/pw;w.style.left=Math.max(0,(W-pw*k)/2)+'px';w.style.top=Math.max(0,(HH-phh*k)/2)+'px';}else{k=H>300?Math.min(1,(H-48)/phh):1;if(!(k>0.3))k=0.6;w.style.left='';w.style.top='';}ph.style.transform=`scale(${k})`;w.style.width=pw*k+'px';w.style.height=phh*k+'px';}

/* --- every scrolling page can reach its last item: clear the floating bottom nav / buttons --- */
screens.forEach(sc=>{const fb=$('.fixed.bottom',sc),scr=$('.scroll',sc);if(!scr)return;
 const hasBar=fb&&[...fb.children].some(e=>!e.classList.contains('blob'));scr.style.paddingBottom=(hasBar?104:16)+'px';});

/* --- Home: Announcements as a horizontal, snapping carousel with live dots --- */
(()=>{const lay=document.querySelector('#s01 .layer');if(!lay)return;const tp=e=>parseFloat(e.style.top);
 [...lay.children].forEach(e=>{const y=tp(e);if(y>=1541&&y<1617)e.classList.add('hide');});
 const dots=[...lay.children].filter(e=>tp(e)===1515.5).sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left));
 const A=[['New listing','PLTR','Palantir (PLTR) is now listed.<br>Start trading now!'],['New listing','AMD','AMD (AMD) is now live.<br>Trade it 24×7 from ₹400.'],['Market hours','NVDA','US markets open at 7:00 PM IST.<br>Prices update live after that.']];
 const row=document.createElement('div');row.className='hrow annrow';row.style.cssText='left:0px;top:1541px;width:360px;height:76px';
 row.innerHTML=A.map(([tag,tk,txt],i)=>{const x=16+i*308,st=S$(tk);return `<div class="u-10zbk6fj" style="left:${x}px;top:0px;width:296px;height:76px"></div><div class="ug4mas7q" style="left:${x+12}px;top:13px;width:${tag.length*6.2+12}px;height:16px"></div><p class="tx v4qtk4inf n C" style="left:${x+12}px;top:15px;width:${tag.length*6.2+12}px;height:12px">${tag}</p>`+lg(st,x+268,12,16)+`<p class="tx v-iw7myok" style="left:${x+12}px;top:39px;width:250px;height:24px">${txt}</p>`;}).join('')+`<i style="left:${16+A.length*308+4}px;top:0;width:1px;height:1px"></i>`;
 lay.appendChild(row);
 // three dots: active one is the long pill
 const setDot=i=>{dots.forEach((d,j)=>{d.style.width=j===i?'15px':'6px';d.className=j===i?'u2qfel69c':'u-2fz5raya';});let x=309;dots.forEach(d=>{d.style.left=x+'px';x+=parseFloat(d.style.width)+4;});};
 if(dots.length===3){row.addEventListener('scroll',()=>setDot(Math.min(2,Math.round(row.scrollLeft/308))),{passive:true});setDot(0);}
 if(row._drag===undefined){row._drag=1;let sx=0,sl=0,down=false,moved=false;row.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=row.scrollLeft;});
  addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;row.classList.add('drag');}row.scrollLeft=sl-dx;});addEventListener('pointerup',()=>{if(!down)return;down=false;row.classList.remove('drag');});}})();

/* --- Home footer: Minted · what are tokenised perpetuals · made in India --- */
(()=>{const lay=document.querySelector('#s01 .layer');if(!lay||lay.querySelector('.rbfoot'))return;const h=parseFloat(lay.dataset.h||lay.style.height),Y=h+32,H=268+104;
 const f=document.createElement('div');f.className='rbfoot';f.style.cssText=`left:0px;top:${Y}px;width:360px;height:${H}px`;
 f.innerHTML=`<div class="rb-logo"><svg viewBox="-6 -6 194 194" width="40" height="40" aria-hidden="true" style="color:var(--brand)"><g fill="none" stroke="currentColor" stroke-width="17.1"><path d="M91 8.55H173.55V173.55H8.55V8.55Z"/><path d="M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55H182.1"/></g></svg></div><p class="rb-name">Minted</p><p class="rb-desc">Tokenised perpetuals are contracts that track the price of US-listed companies like Tesla, Apple or NVIDIA. You get the price movement without owning the underlying shares, so there are no voting rights or dividends. Trade in small amounts, at 1x or with leverage. Prices move fast, so only trade what you can afford to lose.</p><p class="rb-made">MADE WITH <span aria-label="love">❤️</span> IN INDIA</p>`;
 lay.appendChild(f);const nh=Y+H;lay.style.height=nh+'px';lay.dataset.h=nh;const sc=lay.parentElement;if(sc)sc.style.paddingBottom='0px';})();

/* --- Home switcher label variants (panel) --- */
const HSW={v0:['PORTFOLIO','SPOT','FUTURES'],v1:['US MARKETS','1X','LEVERAGED'],v2:['POSITIONS','MARKET 1X','LEVERAGED'],v3:['','MARKETS','FUTURES']};

/* --- Home: Portfolio · Spot / Futures value switcher (Figma Home 8636:127186) --- */
(()=>{const s1=document.getElementById('s01');const lay=$('.layer',s1);
 const lbl=[...lay.querySelectorAll('p')].find(p=>p.textContent.trim()==='Portfolio'&&p.style.top==='92px');if(!lbl)return;
 const val=[...lay.querySelectorAll('p')].find(p=>p.style.top==='120px'&&p.style.left==='124px');
 const chg=[...lay.querySelectorAll('p')].find(p=>p.style.top==='160px'&&p.style.left==='164px');
 const pill=[...lay.children].find(e=>e.tagName==='DIV'&&e.style.top==='158px'&&e.style.left==='144px');
 const arrow=[...lay.querySelectorAll('svg.ic')].find(e=>e.style.top==='165.5px');
 val.style.left='0px';val.style.width='360px';val.classList.add('C');
 [chg,pill,arrow].forEach(e=>e&&e.classList.add('hide'));
 const pp=document.createElement('div');pp.className='pnlpill';pp.style.cssText='left:0px;top:162px;width:360px;height:24px';lay.appendChild(pp);
 let mode='spot';
 const btn=document.createElement('button');btn.className='pfsw';btn.style.cssText='left:30px;top:86px;width:300px;height:28px';btn.setAttribute('aria-label','Switch portfolio between Spot and Futures');lay.appendChild(btn);
 lbl.classList.add('pf-lbl');
 function render(){const fut=mode==='fut';
  const L=HSW[window.HSWK||'v0'];lbl.innerHTML=`${L[0]?L[0]+' <span class="pf-dot">•</span> ':''}${fut?L[2]:L[1]}<svg width="8" height="10" viewBox="0 0 8 10" aria-hidden="true"><use href="#i11wj2" xlink:href="#i11wj2"/></svg>`;
  let v=1450.23,c=10.00;
  if(fut){let m=0,p=0;FPOS.forEach(q=>{const st=S$(q.tk),dir=q.side==='Long'?1:-1;m+=q.margin;p+=dir*(st.p-q.entry)*q.qty;});v=m+p;c=p/m*100;}
  val.textContent=fmt(v);const up=c>=0;const pnl=fut?(()=>{let p=0;FPOS.forEach(q=>{const st=S$(q.tk),dir=q.side==='Long'?1:-1;p+=dir*(st.p-q.entry)*q.qty;});return p;})():v-v/(1+c/100);
  pp.innerHTML=`<span class="pnl ${up?'':'dn'}"><svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M5 0.6L9.4 5.4H0.6Z" fill="currentColor"/></svg><b>${up?'+':'-'}${fmt(Math.abs(pnl)).replace(/\.\d+$/,'')}</b><b>(${Math.abs(c).toFixed(2)}%)</b></span>`;
  btn.setAttribute('aria-pressed',fut);}
 btn.addEventListener('click',e=>{e.stopPropagation();mode=mode==='spot'?'fut':'spot';render();});
 window.hswRender=render;
 render();})();

/* --- panel: pick the Home switcher label --- */
(()=>{const el=document.getElementById('hsw');if(!el)return;const names={v0:'Current',v1:'V1',v2:'V2',v3:'V3'};
 el.innerHTML=Object.entries(HSW).map(([k,[a,b,c]])=>`<button data-hsw="${k}" aria-pressed="false"><b>${names[k]}</b><small>${a} • ${b} ⇄ ${c}</small></button>`).join('');
 const set=k=>{window.HSWK=k;$$('[data-hsw]',el).forEach(b=>b.setAttribute('aria-pressed',b.dataset.hsw===k));if(window.hswRender)hswRender();try{localStorage.setItem('kuber-hsw',k);}catch(e){}};
 el.addEventListener('click',e=>{const b=e.target.closest('[data-hsw]');if(!b)return;set(b.dataset.hsw);const on=document.querySelector('.screen.on');if(on&&on.id!=='s01'){stack=['s01'];show();}});
 let k='v1';try{k=localStorage.getItem('kuber-hsw')||k;}catch(e){}if(!HSW[k])k='v1';set(k);})();

/* --- asset-page switch: pills sized to their label with 12px side padding, centred --- */
function swcLayout(){const sw=document.querySelector('#s04 .swc');if(!sw)return;const bs=[...sw.querySelectorAll('button')],th=sw.querySelector('.swp');
 const W=bs.reduce((a,b)=>a+b.offsetWidth,0)+6;sw.style.width=W+'px';sw.style.left=Math.round(180-W/2)+'px';
 const on=bs.find(b=>b.dataset.mode===(typeof amode!=='undefined'?amode:'spot'))||bs[0];th.style.width=on.offsetWidth+'px';th.style.transform=`translateX(${on.offsetLeft}px)`;}
const _apL=apLabels;apLabels=function(){_apL();swcLayout();};
const _setM2=setMode;setMode=function(m){_setM2(m);swcLayout();};
const _show=show;show=function(){_show();requestAnimationFrame(()=>{swcLayout();spPillPos();if(window.discRelayout)discRelayout();});};
requestAnimationFrame(swcLayout);

/* --- Portfolio tabs follow the asset-page naming --- */
function ptabLabels(){const on=typeof AP==='undefined'||AP.on;const h=document.querySelector('#s07 [data-ptab="hold"]'),f=document.querySelector('#s07 [data-ptab="fut"]');
 if(h)h.textContent=(on?(window.FLOWK==='v2'?'1x Market':'Markets'):'Holdings')+' (5)';if(f)f.textContent=(on&&window.FLOWK==='v2'?'Leveraged':'Futures')+' ('+FPOS.length+')';}
const _apL2=apLabels;apLabels=function(){_apL2();ptabLabels();};ptabLabels();
let sc_lvName=()=>{};

/* ===== Stock page: market-session card + leverage card in the stat carousel (Figma 9470:138761) and US Market Hours sheet (9470:182688) ===== */
const MSES=[{k:'pre',t:'Pre Market',c:'#f6c12f',bg:'rgba(246,193,47,.10)',bd:'#6b4e00',w:103,from:13*60+30,to:19*60,liq:'Medium-High Liquidity',hrs:'1:30 PM - 7:00 PM IST'},
 {k:'open',t:'Market Open',c:'#37ad75',bg:'rgba(55,173,117,.10)',bd:'#063d23',w:102,from:19*60,to:25*60+30,liq:'High Liquidity',hrs:'7:00 PM - 1:30 AM IST'},
 {k:'after',t:'After Market',c:'#6daafb',bg:'rgba(109,170,251,.10)',bd:'#14346b',w:111,from:25*60+30,to:37*60+30,liq:'Medium-Low Liquidity',hrs:'1:30 AM - 1:30 PM IST'},
 {k:'closed',t:'Market',c:'#a6a6a6',bg:'rgba(154,154,154,.10)',bd:'#292c2b',w:93,liq:'',hrs:'Sat 1:30 PM - Mon 1:30 PM IST',hol:'Market Holiday'}];
function istNow(){const d=new Date();return new Date(d.getTime()+(d.getTimezoneOffset()+330)*60000);}
function session(){const n=istNow();let m=n.getHours()*60+n.getMinutes()+n.getSeconds()/60,day=n.getDay();
 // sessions after midnight belong to the previous trading day
 const mm=m<13*60+30?m+24*60:m;const tday=m<13*60+30?(day+6)%7:day;
 if(tday===0||tday===6)return {s:MSES[3]};   /* holidays: weekends only — Sat 1:30 PM to Mon 1:30 PM IST */
 for(const s of MSES.slice(0,3))if(mm>=s.from&&mm<s.to)return {s,left:(s.to-mm)*60};
 return {s:MSES[3]};}
const fmtCD=sec=>{sec=Math.max(0,Math.floor(sec));const h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;return `${h}h : ${String(m).padStart(2,'0')}m : ${String(s).padStart(2,'0')}s`;};
(()=>{const sr=document.querySelector('#s04 .statrow');if(!sr)return;
 const ADD=103+12+123+12;[...sr.children].forEach(e=>{const l=parseFloat(e.style.left);if(!isNaN(l))e.style.left=(l+ADD)+'px';});
 const tail=[...sr.children].find(e=>e.tagName==='I'&&!e.className);if(tail)tail.style.left=(parseFloat(tail.style.left)||0)+'px';
 sr.insertAdjacentHTML('afterbegin',`<div class="msc" style="left:16px;top:0px;height:50px"><p class="msc-t"><i class="msc-dot"></i><span></span><button class="msc-i" aria-label="US market hours"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.8" fill="none" stroke="currentColor" stroke-width="1"/><path d="M6 5.4v2.8M6 3.8v.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></button></p><p class="msc-v"></p></div>
  <div class="lvc" style="left:131px;top:0px;width:123px;height:50px"><p class="msc-t"><span class="lvc-n"></span></p><p class="msc-v"><b>100x</b> Leverage</p></div>`);
 const msc=$('.msc',sr),lvc=$('.lvc',sr);
 function tick(){const {s,left}=session();msc.style.background=s.bg;msc.style.borderColor=s.bd;$('.msc-dot',msc).style.background=s.c;$('.msc-dot',msc).classList.toggle('live',s.k==='open');
  $('span',msc).textContent=s.t;const v=$('.msc-v',msc);
  if(s.k==='open')v.innerHTML='Live now <svg width="12" height="13" viewBox="0 0 12 13" aria-hidden="true"><path d="M1 9l3-3 2 2 5-5M8 3h3v3" fill="none" stroke="#37ad75" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  else if(s.k==='closed'){v.textContent='Closed now';v.classList.add('dim');}else{v.textContent=fmtCD(left);v.classList.remove('dim');}
  if(s.k!=='closed')v.classList.remove('dim');
}
 sc_lvName=()=>{const lv=typeof amode!=='undefined'&&amode==='futures';$('.lvc-n',lvc).textContent=lv?'Leverage upto':trunc12(cur.short)+' • US Market';const v=$('.msc-v',lvc);v.innerHTML=lv?'<b>100x</b>':'<b>1x</b> Leverage';sr.classList.toggle('lv-last',!(typeof amode!=='undefined'&&amode==='futures'));};sc_lvName();
 const _smLv=setMode;setMode=function(m){_smLv(m);sc_lvName();};
 tick();setInterval(tick,1000);
 // sheet
 const dv=document.getElementById('device');dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="mh-bg" hidden></div><div class="lsh mh" id="mh" role="dialog" aria-modal="true" aria-label="US Market Hours" hidden><div class="lsh-grab"></div>
  <p class="mh-h">US Market Hours</p><p class="mh-s">Shown in IST. Hours move one hour later when US daylight saving time ends.</p>
  ${MSES.map(s=>`<div class="mh-r"><i style="background:${s.c}"></i><div><b>${s.hol||s.t}</b>${s.liq?`<small>${s.liq}</small>`:''}</div><span>${s.hrs}</span></div>`).join('')}
  <div class="mh-n"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M8 7.2v3.6M8 5.2v.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><p>Trading hours and liquidity levels vary by trading session. All times are shown in Indian Standard Time (IST).</p></div>
  <button class="lsh-done mh-ok l3-btn" data-variant="primary" data-size="lg">Okay</button></div>`);
 const bg=$('#mh-bg'),sh=$('#mh');const open=o=>{bg.hidden=!o;sh.hidden=!o;};
 $('.msc-i',msc).addEventListener('click',e=>{e.stopPropagation();open(true);});msc.addEventListener('click',e=>{e.stopPropagation();open(true);});
 bg.addEventListener('click',()=>open(false));$('.mh-ok',sh).addEventListener('click',()=>open(false));sh.addEventListener('click',e=>e.stopPropagation());})();
const _apS=applyStock;applyStock=function(st){_apS(st);if(typeof sc_lvName==='function')sc_lvName();};

/* --- stat carousel: every card hugs its text (flex row, 9px side padding, 12px gaps) --- */
(()=>{const sr=document.querySelector('#s04 .statrow');if(!sr)return;
 const kids=[...sr.children];const cards=kids.filter(e=>e.tagName==='DIV'&&e.classList.contains('s1tsql')).sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left));
 const built=cards.map(c=>{const L=parseFloat(c.style.left),W=parseFloat(c.style.width);const inner=kids.filter(e=>e!==c&&e.tagName!=='DIV'&&!e.closest('.msc,.lvc')&&(()=>{const l=parseFloat(e.style.left);return l>=L&&l<L+W;})());
  const card=document.createElement('div');card.className='scard';card.dataset.l=L;const top=document.createElement('div');top.className='sc-t';const val=document.createElement('div');val.className='sc-v';
  inner.sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left)).forEach(e=>{const t=parseFloat(e.style.top);e.classList.remove('R');e.style.position='static';e.style.left='auto';e.style.width='auto';e.style.height='auto';(t<20?top:val).appendChild(e);});
  card.append(top,val);c.remove();return card;});
 const msc=sr.querySelector('.msc'),lvc=sr.querySelector('.lvc');
 [...sr.children].forEach(e=>{if(e.tagName==='I'&&!e.className)e.remove();});
 [msc,lvc,...built].filter(Boolean).forEach(e=>sr.appendChild(e));
 sr.classList.add('flex');})();

/* ===== Stock page: token-perp disclosure (dismissible card after the chart → info icon before bookmark → bottom sheet) ===== */
const DISC_TXT='Tokenised perpetuals are not associated with, sponsored by, endorsed by, or affiliated with the issuer of the underlying shares, or with the exchange on which the underlying asset is listed. You get price exposure only — you do not own the underlying shares.';
(()=>{const sc=document.getElementById('s04');const lay=$('.layer',sc);const Y=658;   /* 16px below the chart's time axis (ends at 642) */
 let dismissed=false;try{dismissed=localStorage.getItem('kuber-disc')==='1';}catch(e){}
 const card=document.createElement('div');card.className='disc';card.dataset.otop=Y;card.style.cssText=`left:16px;top:${Y}px;width:328px`;card.setAttribute('role','note');
 card.innerHTML=`<p class="disc-t">${DISC_TXT}<button class="disc-tg" aria-expanded="true" aria-label="Collapse"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 7.5l3-3 3 3" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button></p><button class="disc-x" aria-label="Dismiss notice"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></button>`;
 lay.appendChild(card);
 // info icon, placed just before the bookmark
 const bm=[...lay.querySelectorAll('svg.ic')].find(s=>s.querySelector('use')&&s.querySelector('use').getAttribute('href')==='#i8ic6t');
 const info=document.createElement('button');info.className='disc-i';info.setAttribute('aria-label','About tokenised perpetuals');
 info.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 9v4.6M10 6.4v.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
 if(bm){info.style.left=(parseFloat(bm.style.left)-32)+'px';info.style.top=(parseFloat(bm.style.top)+2)+'px';info.dataset.otop=parseFloat(bm.style.top)+2;}
 lay.appendChild(info);
 function relayout(){const fut=typeof amode!=='undefined'&&amode==='futures';   /* the token-perp note belongs to Positions only */
  if(dismissed||fut){card.classList.add('hide');info.classList.remove('hide');delete SHIFTS.disc;}
  else{card.classList.remove('hide');info.classList.remove('hide');if(card.classList.contains('col')&&card.offsetParent)fillText(true);const h=card.offsetHeight||96;SHIFTS.disc=[Y+1,Y+h+24-662];   /* next section starts 24px below the card */}
  spRelayout();}
 window.discRelayout=()=>relayout();
 const tp=card.querySelector('.disc-t'),tg=card.querySelector('.disc-tg');
 function fillText(col){tp.textContent='';if(!col){tp.append(DISC_TXT+' ',tg);return;}
  // largest prefix that still fits on ONE line with "… ⌄" inline (legal: one-line note)
  tp.textContent='';tp.append('Tokenised perpetuals are not associated… ',tg);return;   /* legal: fixed one-line copy (no measuring, so it can't collapse to a single word) */
  const words=DISC_TXT.split(' ');let lo=1,hi=words.length,best=1;const lh=18;
  while(lo<=hi){const mid=(lo+hi)>>1;tp.textContent='';tp.append(words.slice(0,mid).join(' ')+'… ',tg);if(tp.scrollHeight<=lh+1){best=mid;lo=mid+1;}else hi=mid-1;}
  tp.textContent='';tp.append(words.slice(0,best).join(' ')+'… ',tg);}
 card.classList.add('col');tg.setAttribute('aria-expanded','false');tg.setAttribute('aria-label','Expand');
 tg.addEventListener('click',e=>{e.stopPropagation();const col=card.classList.toggle('col');tg.setAttribute('aria-expanded',!col);tg.setAttribute('aria-label',col?'Expand':'Collapse');fillText(col);relayout();});
 card.querySelector('.disc-x').addEventListener('click',e=>{e.stopPropagation();dismissed=true;try{localStorage.setItem('kuber-disc','1');}catch(e){}relayout();});
 // bottom sheet with the same notice
 const dv=document.getElementById('device');dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="disc-bg" hidden></div><div class="lsh" id="disc-sh" role="dialog" aria-modal="true" aria-label="Risk disclosure" hidden><div class="lsh-grab"></div>
  <p class="mh-h dsh-h">Risk disclosure</p><p class="dsh-t">${DISC_TXT}</p></div>`);
 const bg=$('#disc-bg'),sh=$('#disc-sh');const open=o=>{bg.hidden=!o;sh.hidden=!o;};
 info.addEventListener('click',e=>{e.stopPropagation();open(true);});bg.addEventListener('click',()=>open(false));{const ok=$('.disc-ok',sh);if(ok)ok.addEventListener('click',()=>open(false));}sh.addEventListener('click',e=>e.stopPropagation());
 window.discRelayout=relayout;requestAnimationFrame(relayout);
 // re-measure once the web font (Manrope) has loaded: line breaks change with the font
 if(document.fonts){document.fonts.ready.then(()=>relayout());document.fonts.addEventListener&&document.fonts.addEventListener('loadingdone',()=>relayout());}
 addEventListener('resize',()=>relayout());
 // panel: reset the notice for demos
 const pn=document.getElementById('settings');if(pn){const b=document.createElement('button');b.className='disc-reset';b.id='disc-reset-notice';b.textContent='Reset token-perp notice';b.addEventListener('click',()=>{dismissed=false;try{localStorage.removeItem('kuber-disc');}catch(e){}card.classList.add('col');relayout();});const sec=pn.querySelector('#hsw');if(sec)sec.insertAdjacentElement('afterend',b);}})();

/* ===== Home · Legal disclaimer versions (panel: Homepage › Legal version) ===== */
const LEGAL={l0:'Footer only',l1:'Notice in hero card',l2:'Hero caption line',l3:'Header chip',l4:'Launch sheet · I understand',l5:'Slim top banner'};
(()=>{const s1=document.getElementById('s01'),lay=$('.layer',s1),fx=$('.fixed.top',s1);const dv=document.getElementById('device');
 const HS={};const base=parseFloat(lay.dataset.h||lay.style.height);
 function hRel(){[...lay.children].forEach(e=>{if(e.dataset.hl)return;if(e.dataset.otop===undefined){const t=parseFloat(e.style.top);if(isNaN(t))return;e.dataset.otop=t;}let a=0;Object.values(HS).forEach(([y,dy])=>{if(+e.dataset.otop>=y)a+=dy;});e.style.top=(+e.dataset.otop+a)+'px';});
  let tot=0;Object.values(HS).forEach(([,dy])=>tot+=dy);lay.style.height=(base+tot)+'px';lay.dataset.h=base+tot;
  const hero=[...lay.children].filter(e=>e.dataset.otop==='80'&&parseFloat(e.style.height)>=180);hero.forEach(e=>{if(e.dataset.oh===undefined)e.dataset.oh=parseFloat(e.style.height);e.style.height=(+e.dataset.oh+(HS.hero?HS.hero[1]:0))+'px';});}
 // shared risk sheet
 dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="risk-bg" hidden></div><div class="lsh risk" id="risk" role="dialog" aria-modal="true" aria-labelledby="risk-h" hidden><div class="lsh-grab"></div>
  <p class="mh-h dsh-h" id="risk-h">Risk disclosure</p><p class="dsh-t">${DISC_TXT}</p>
  <p class="dsh-tc"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="4" fill="currentColor"/><path d="M4.6 8.2l2.2 2.2 4.6-4.8" fill="none" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>I agree to the <a href="#" onclick="return false">Terms &amp; Conditions</a></span></p><button class="lsh-done risk-ok l3-btn" data-variant="primary" data-size="lg">I understand</button></div>`);
 const rbg=$('#risk-bg'),rsh=$('#risk');let modal=false;
 window.riskSheet=(o,m)=>{modal=!!m;rbg.hidden=!o;rsh.hidden=!o;};
 rbg.addEventListener('click',()=>{if(!modal)riskSheet(false);});$('.risk-ok',rsh).addEventListener('click',()=>{try{localStorage.setItem('kuber-risk-ok','1');}catch(e){}riskSheet(false);});rsh.addEventListener('click',e=>e.stopPropagation());
 const infoSvg='<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="5.6" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M7 6.3v3.3M7 4.6v.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
 const SHORT='Token perps · You don’t own the underlying shares';
 let built=[];const clear=()=>{built.forEach(e=>e.remove());built=[];Object.keys(HS).forEach(k=>delete HS[k]);hRel();};
 const add=(html,parent,cls)=>{const d=document.createElement('div');d.className=cls;d.dataset.hl=1;d.innerHTML=html;(parent||lay).appendChild(d);built.push(d);return d;};
 function build(v){clear();
  if(v==='l1'){const c=add(`<p class="disc-t"></p><button class="disc-x" aria-label="Dismiss notice"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></button>`,lay,'disc hl-notice col');
    c.style.cssText='left:24px;top:254px;width:312px';const tp=$('.disc-t',c);const tg=document.createElement('button');tg.className='disc-tg';tg.setAttribute('aria-label','Read the full notice');tg.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 7.5l3-3 3 3" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const words=DISC_TXT.split(' ');const fit=()=>{let lo=1,hi=words.length,best=1;while(lo<=hi){const m=(lo+hi)>>1;tp.textContent='';tp.append(words.slice(0,m).join(' ')+'… ',tg);if(tp.scrollHeight<=37){best=m;lo=m+1;}else hi=m-1;}tp.textContent='';tp.append(words.slice(0,best).join(' ')+'… ',tg);};
    tg.addEventListener('click',e=>{e.stopPropagation();riskSheet(true);});
    $('.disc-x',c).addEventListener('click',e=>{e.stopPropagation();try{localStorage.setItem('kuber-hl1','1');}catch(x){}build('l1x');});
    requestAnimationFrame(()=>{fit();const h=c.offsetHeight;HS.hero=[266,h+12];hRel();});if(document.fonts)document.fonts.ready.then(()=>{fit();HS.hero=[266,c.offsetHeight+12];hRel();});}
  if(v==='l1x'||v==='l3'||v==='l5'){const chip=add(`<button class="hl-chip" aria-label="About tokenised perpetuals">Token perps ${infoSvg}</button>`,fx,'hl-chipw');chip.style.cssText='position:absolute;left:120px;top:40px';$('button',chip).addEventListener('click',e=>{e.stopPropagation();riskSheet(true);});}
  if(v==='l2'){const c=add(`<button class="hl-cap">${SHORT} ${infoSvg}</button>`,lay,'hl-capw');c.style.cssText='left:0px;top:252px;width:360px;height:24px';$('button',c).addEventListener('click',e=>{e.stopPropagation();riskSheet(true);});HS.hero=[266,22];hRel();}
  if(v==='l4'){/* legal (26 Oct): risk disclosure is accepted on the login T&C sheet only — no Home launch sheet */}
  if(v==='l5'){const b=add(`<span>${SHORT}</span>${infoSvg}`,fx,'hl-ban');b.style.cssText='position:absolute;left:0;top:80px;width:360px;height:28px';b.addEventListener('click',e=>{e.stopPropagation();riskSheet(true);});
    HS.top=[80,28];hRel();const sc=$('.scroll',s1);const on=()=>b.classList.toggle('gone',sc.scrollTop>24);sc.addEventListener('scroll',on,{passive:true});on();}
 }
 // panel
 const pn=document.getElementById('settings');const anchor=pn&&pn.querySelector('.disc-reset');if(!anchor)return;
 anchor.insertAdjacentHTML('beforebegin',`<h2>Homepage › Legal version</h2><div class="hsw" id="legal" role="group" aria-label="Homepage legal version">${Object.entries(LEGAL).map(([k,n],i)=>`<button data-legal="${k}" aria-pressed="false"><b>${i?'L'+i:'Current'}</b><small>${n}</small></button>`).join('')}</div><button class="disc-reset" id="risk-replay">Replay launch sheet</button>`);
 const el=$('#legal',pn);const set=(k,save)=>{$$('[data-legal]',el).forEach(b=>b.setAttribute('aria-pressed',b.dataset.legal===k));let d=false;try{d=localStorage.getItem('kuber-hl1')==='1';}catch(e){}build(k==='l1'&&d?'l1x':k);if(save)try{localStorage.setItem('kuber-legal',k);}catch(e){}};
 el.addEventListener('click',e=>{const b=e.target.closest('[data-legal]');if(!b)return;try{localStorage.removeItem('kuber-hl1');if(b.dataset.legal==='l4')localStorage.removeItem('kuber-risk-ok');}catch(x){}set(b.dataset.legal,true);const on=document.querySelector('.screen.on');if(on&&on.id!=='s01'){stack=['s01'];show();}});
 $('#risk-replay',pn).addEventListener('click',()=>{try{localStorage.removeItem('kuber-risk-ok');}catch(e){}set('l4',true);stack=['s01'];show();});
 set('l4',false);   /* fixed: launch sheet (first time) + footer only */
 el.style.display='none';el.previousElementSibling.style.display='none';})();

/* --- Order pad · Market 1x: closed "Multiply your profits" card (Figma 8636:128765) → Apply › switches to the Leveraged tab --- */
(()=>['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc||!sc._optab)return;const fx=$('.fixed.top',sc);
 fx.insertAdjacentHTML('beforeend',`<div class="mpc op-spotonly"><span class="mpc-ic" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M9.2 1.5L3.5 9h3.8l-.9 5.5L12.5 7H8.6z" fill="currentColor"/></svg></span>
  <p class="mpc-t">Enable leverage by <span class="mpc-x" aria-live="off"><b>2x</b><b>4x</b><b>10x</b><b>100x</b><b>2x</b></span></p>
  <button class="mpc-a" aria-label="Apply leverage — switch to Leveraged">Apply <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M3.5 2l3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`);
 const card=$('.mpc',fx);
 card.addEventListener('click',e=>{e.stopPropagation();sc._optab('fut');});}))();

/* ===== Order pad branch: Combined (no Market 1x / Leveraged tabs; leverage lives in the Multiply card) ===== */
(()=>{const OPM={get c(){return document.documentElement.dataset.op==='combined';}};window.OPM=OPM;
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc||!sc._optab)return;const card=$('.mpc',sc),lev=$('.op-lev',sc),rng=lev&&$('input',lev);
  card.insertAdjacentHTML('beforeend','<span class="mpc-v"></span><button class="mpc-sw" role="switch" aria-checked="false" aria-label="Multiply your profits"><i></i></button>');
  const sw=$('.mpc-sw',card),val=$('.mpc-v',card);const t=$('.mpc-t',card);t.appendChild(val);
  const upd=()=>{val.textContent=(rng?rng.value:2)+'x';};if(rng)rng.addEventListener('input',upd);
  sc._lev=on=>{sw.setAttribute('aria-checked',on);sc.classList.toggle('op-levon',on);if(on&&rng&&+rng.value<2){rng.value=2;}sc._optab(on?'fut':'spot');upd();};
  card.addEventListener('click',e=>{if(!OPM.c)return;if(e.target.closest('.mpc-b'))return;e.stopPropagation();e.stopImmediatePropagation();sc._lev(!sc.classList.contains('op-levon'));},true);});
 // opening the pad: Leveraged on the asset page = card switched on
 document.addEventListener('click',e=>{if(!OPM.c)return;const b=e.target.closest('[data-to="s05"],[data-to="s13"]');if(!b)return;const to=b.dataset.to;
  const on=!!(b.closest('#s04')&&typeof amode!=='undefined'&&amode==='futures');setTimeout(()=>{const sc=document.getElementById(to);if(sc&&sc._lev)sc._lev(on);},20);},true);
 // panel
 const el=document.getElementById('ops');const set=(v,save)=>{document.documentElement.dataset.op=v;$$('[data-op-set]',el).forEach(b=>b.setAttribute('aria-pressed',b.dataset.opSet===v));
  ['s05','s13'].forEach(i=>{const x=document.getElementById(i);if(x&&x._lev){if(v==='combined')x._lev(false);else{x.classList.remove('op-levon');x._optab('spot');}}});
  if(save)try{localStorage.setItem('kuber-op',v);}catch(e){}};
 el.addEventListener('click',e=>{const b=e.target.closest('[data-op-set]');if(!b)return;set(b.dataset.opSet,true);openStock&&0;});
 let k='combined';try{k=localStorage.getItem('kuber-op')||k;}catch(e){}set(k,false);})();

/* --- combined pad, v2: ONE card that grows — leverage slider + outcome strip live inside the Multiply card --- */
(()=>{['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc||!sc._lev)return;const card=$('.mpc',sc),lev=$('.op-lev',sc),src=lev&&$('input',lev);if(!src)return;
 const hd=document.createElement('div');hd.className='mpc-hd';[...card.childNodes].forEach(n=>hd.appendChild(n));card.appendChild(hd);
 card.insertAdjacentHTML('beforeend',`<div class="mpc-b"><div class="trk"><i class="fill"></i>${[25,50,75].map(x=>`<i class="dot" style="left:${(x-2)/98*100}%"></i>`).join('')}<i class="th"></i><input type="range" min="2" max="100" step="1" value="2" aria-label="Leverage"></div>
  <div class="lbl">${['2x','25x','50x','75x','100x'].map(x=>`<span>${x}</span>`).join('')}</div><p class="ban"></p></div>`);
 const b=$('.mpc-b',card),r=$('input',b);
 const paint=()=>{const v=+src.value,pct=(v-2)/98;$('.fill',b).style.width=(pct*100)+'%';$('.th',b).style.left=`calc(${pct*100}% - 10px)`;r.value=v;$('.ban',b).innerHTML=$('.ban',lev).innerHTML;};
 r.addEventListener('input',()=>{src.value=r.value;src.dispatchEvent(new Event('input'));paint();});
 src.addEventListener('input',paint);
 b.addEventListener('click',e=>e.stopPropagation(),true);b.addEventListener('pointerdown',e=>e.stopPropagation());
 // the header row toggles; the body is for sliding
 card.addEventListener('click',e=>{if(!OPM.c)return;if(e.target.closest('.mpc-b'))e.stopImmediatePropagation();},true);
 const _l=sc._lev;sc._lev=on=>{_l(on);paint();};paint();});})();

/* --- combined pad: leverage on → SIP leaves the Instant / Limit / SIP segment (it comes back when switched off) --- */
(()=>{const sc=document.getElementById('s05');if(!sc||!sc._lev)return;const fx=$('.fixed.top',sc);const tp=e=>parseFloat(e.style.top);
 const seg=[...fx.children].filter(e=>{const t=tp(e);return t>=110&&t<=118;});
 const bg=seg.find(e=>e.classList.contains('uec0gjo3a')),sip=seg.filter(e=>e.textContent.trim()==='SIP'||e.dataset.to==='s15');
 const rest=seg.filter(e=>e!==bg&&!sip.includes(e));
 const set=off=>{sip.forEach(e=>e.classList.toggle('nosip-h',off));if(bg){bg.style.left=off?'106px':'70px';bg.style.width=off?'148px':'220px';}
  rest.forEach(e=>{if(e.dataset.sl===undefined)e.dataset.sl=parseFloat(e.style.left);e.style.left=(+e.dataset.sl+(off?36:0))+'px';});};
 const _l=sc._lev;sc._lev=on=>{_l(on);set(true);};set(true);   /* SIP isn't offered in this app */
 const _ot=sc._optab;sc._optab=t=>{_ot(t);set(true);};   /* tabs pad always keeps Instant · Limit · SIP */
 // leaving Combined restores the 3-option segment
 const mo=new MutationObserver(()=>{set(true);});mo.observe(document.documentElement,{attributes:true,attributeFilter:['data-op']});})();

/* ===== Asset page branch: Combined (no Market 1x / Leveraged tabs; an "Activate leverage" toggle switches the page) ===== */
const CAV={c3:'First stat card',c6:'C6 · Label + switch',c6b:'C6b · Activate pill',c6e:'C6e · Multiplier chip'};
const CAN={c3:3,c6:6,c6b:7,c6e:10};   /* keep the original C-numbers the team refers to */
window.CA_LEV=false;
(()=>{const sc=document.getElementById('s04'),lay=$('.layer',sc),fx=$('.fixed.top',sc),fb=$('.fixed.bottom',sc),sr=$('.statrow',sc);let V='tabs',built=[];
 const sw=(cls='')=>`<button class="ca-sw ${cls}" role="switch" aria-checked="false" aria-label="Activate leverage"><i></i></button>`;
 const bolt='<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 1.5L3.5 9h3.8l-.9 5.5L12.5 7H8.6z" fill="currentColor"/></svg>';
 function caSet(on){CA_LEV=!!on;setMode(on?'futures':'spot');spFund(on);spOrderBook(on);spPrice();
  $$('.ca-sw',document).forEach(b=>b.setAttribute('aria-checked',on));$$('.ca-st',sc).forEach(e=>e.textContent=on?'Up to 100x':'Off');
  $$('.ca-x',sc).forEach(e=>e.classList.toggle('on',on));sc.classList.toggle('ca-on',on);
  $$('#s04 .c6b,#s04 .c6d,#s04 .c6e').forEach(b=>b.setAttribute('aria-checked',on));$$('#s04 .c6c [data-x]').forEach(b=>b.setAttribute('aria-checked',(b.dataset.x==='100')===on));}
 window.caSet=caSet;
 const moved=[];function restore(){moved.splice(0).forEach(([e,par,st])=>{par.appendChild(e);e.style.cssText=st;});}
 function clear(){restore();built.forEach(e=>e.remove());built=[];delete SHIFTS.ca;spRelayout();sc.classList.remove('ca-dock');const s=$('.scroll',sc);s.style.paddingBottom='104px';}
 const mk=(html,parent,cls,css)=>{const d=document.createElement('div');d.className=cls;if(css)d.style.cssText=css;d.innerHTML=html;parent.appendChild(d);built.push(d);d.addEventListener('click',e=>{e.stopPropagation();caToggle();});return d;};
 function build(v){clear();V=v;document.documentElement.dataset.ca=v==='tabs'?'':v;if(v==='tabs'){caSet(false);return;}
  if(v==='c1')mk(`<span>Leverage</span>${sw()}`,fx,'ca-hdr','left:0;top:36px;width:360px;height:32px');
  if(v==='c2'){const d=mk(`<span class="ca-ic">${bolt}</span><p><b>Activate leverage</b><small class="ca-st">Off</small></p>${sw()}`,lay,'ca-row','left:16px;top:148px;width:328px;height:52px');d.dataset.otop=147.5;SHIFTS.ca=[148,64];spRelayout();}
  if(v==='c3'){const d=document.createElement('div');d.className='scard ca-stat';d.innerHTML=`<div class="ca-sc-txt"><div class="sc-t"><span class="t1qvs3">Leverage</span></div><div class="sc-v"><span class="t7u1n4">Upto 100x</span></div></div>${sw()}`;{const ms=sr.querySelector('.msc');sr.insertBefore(d,ms?ms.nextSibling:sr.firstChild);}built.push(d);d.addEventListener('click',e=>{e.stopPropagation();caToggle();});sr.scrollLeft=0;}
  if(v==='c4'){mk(`<span class="ca-ic">${bolt}</span><p><b>Activate leverage</b><small class="ca-st">Off</small></p>${sw()}`,fb,'ca-row ca-dockrow','left:16px;top:682px;width:328px;height:52px');sc.classList.add('ca-dock');$('.scroll',sc).style.paddingBottom='170px';}
  if(v.startsWith('c6')){const bm=[...lay.querySelectorAll('svg.ic')].find(x=>x.querySelector('use')&&x.querySelector('use').getAttribute('href')==='#i8ic6t'),inf=$('.disc-i',lay);
    if(bm){moved.push([bm,lay,bm.style.cssText]);fx.appendChild(bm);bm.classList.add('hdr-bm');bm.style.cssText='left:288px;top:40px;width:24px;height:24px';   /* 12px before search (box 320) */}
    if(inf){moved.push([inf,lay,inf.style.cssText]);fx.appendChild(inf);inf.style.cssText='left:252px;top:40px;width:24px;height:24px;margin:0';   /* 12px before bookmark */}
    const bolt12='<svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 1.5L3.5 9h3.8l-.9 5.5L12.5 7H8.6z" fill="currentColor"/></svg>';
    const M={c6:`<span class="ca-l">Upto 100x Leverage</span>${sw()}`,
     c6b:`<button class="c6b" role="switch" aria-checked="false" aria-label="Activate leverage">${bolt12}<span class="off">Leverage</span><span class="on">Leverage on</span></button>`,
     c6c:`<span class="ca-l">Upto 100x Leverage</span><div class="c6c" role="radiogroup" aria-label="Leverage"><button role="radio" aria-checked="true" data-x="1">1x</button><button role="radio" aria-checked="false" data-x="100">100x</button><i></i></div>`,
     c6d:`<button class="c6d" role="switch" aria-checked="false" aria-label="Activate leverage"><svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 1.5L3.5 9h3.8l-.9 5.5L12.5 7H8.6z" fill="currentColor"/></svg></button><span class="ca-l">Upto 100x Leverage</span>`,
     c6e:`<button class="c6e" role="switch" aria-checked="false" aria-label="Activate leverage"><span class="x"><b>1x</b><b>100x</b></span><svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5h6L6.5 2M8 6.5H2l1.5 1.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button><span class="ca-l">Upto 100x Leverage</span>`};
    const d=mk(M[v],lay,'ca-side '+v+'w','right:16px;top:'+(v==='c6b'?96:86)+'px;height:'+(v==='c6b'?28:40)+'px');d.dataset.otop=v==='c6b'?96:86;}
  if(v==='c5'){const d=mk(`<span class="mpc-ic">${bolt}</span><p class="mpc-t">Multiply your profits by <span class="mpc-x ca-x"><b>2x</b><b>10x</b><b>100x</b><b>2x</b></span></p>${sw()}`,lay,'ca-mpc','left:16px;top:148px;width:328px;height:56px');d.dataset.otop=147.5;SHIFTS.ca=[148,68];spRelayout();}
  caSet(false);}
 // new stock → back to 1x
 const _os=openStock;openStock=function(tk){_os(tk);if(V!=='tabs')caSet(false);};
 const _as=applyStock;applyStock=function(st){_as(st);if(CA_LEV){spFund(true);spOrderBook(true);}};
 // panel
 const pn=document.getElementById('settings'),after=pn&&pn.querySelector('#ops');if(!after)return;
 after.insertAdjacentHTML('afterend',`<h2>Asset page layout</h2><div class="hsw" id="cas" role="group" aria-label="Asset page layout"><button data-ca="tabs" aria-pressed="false"><b>Tabs (original)</b><small>Market 1x | Leveraged</small></button>${Object.entries(CAV).map(([k,n],i)=>`<button data-ca="${k}" aria-pressed="false"><b>Combined · C${CAN[k]}</b><small>${n}</small></button>`).join('')}</div>`);
 const el=$('#cas',pn);const set=(k,save)=>{$$('[data-ca]',el).forEach(b=>b.setAttribute('aria-pressed',b.dataset.ca===k));build(k);if(save)try{localStorage.setItem('kuber-ca',k);}catch(e){}};
 el.addEventListener('click',e=>{const b=e.target.closest('[data-ca]');if(!b)return;set(b.dataset.ca,true);const on=document.querySelector('.screen.on');if(on&&on.id!=='s04')openStock(cur.tk);});
 let k='c6';try{k=localStorage.getItem('kuber-ca')||k;}catch(e){}if(k!=='tabs'&&!CAV[k])k='c6';set(k,false);})();

/* --- Leveraged: chart toolbar swaps to the futures tools (Figma 9590:70282) — works with tabs and the combined toggle --- */
(()=>{const sc=document.getElementById('s04'),lay=$('.layer',sc);
 const tb=document.createElement('div');tb.className='ftb';tb.dataset.otop=230;tb.style.cssText='left:20px;top:230px;width:324px;height:24px';
 tb.innerHTML=`<button class="ftb-tf" aria-label="Interval 15 minutes">15m <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2.5 3.8L5 6.3l2.5-2.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button><i class="ftb-d"></i>
  <button class="ftb-i" aria-label="Chart type"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M5 2.5v13M13 2.5v13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><rect x="3" y="5.5" width="4" height="6" rx=".8" fill="none" stroke="currentColor" stroke-width="1.3"/><rect x="11" y="4.5" width="4" height="8" rx=".8" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></button><i class="ftb-d"></i>
  <button class="ftb-fx" aria-label="Indicators"><i>fx</i> Indicators</button><i class="ftb-d"></i>
  <span class="ftb-r"><button class="ftb-i" aria-label="Chart settings"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 1.8l6.2 3.6v7.2L9 16.2l-6.2-3.6V5.4z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><circle cx="9" cy="9" r="2.3" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></button>
  <button class="ftb-i" aria-label="Snapshot"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2.5 6.2c0-.9.7-1.6 1.6-1.6h1.8l1.2-1.8h3.8l1.2 1.8h1.8c.9 0 1.6.7 1.6 1.6v7c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><circle cx="9" cy="9.6" r="2.6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></button>
  <button class="ftb-i" aria-label="Full screen"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 7V3h4M11 3h4v4M15 11v4h-4M7 15H3v-4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></button></span>`;
 lay.appendChild(tb);tb.addEventListener('click',e=>e.stopPropagation());
 // exact Figma x-positions (relative to the row at x=20)
 const R=tb.querySelector('.ftb-r');R.replaceWith(...R.children);
 [...tb.children].forEach((e,i)=>{const X=[0,51,65,101,115,214,227,264,300][i];if(X!==undefined){e.style.position='absolute';e.style.left=X+'px';e.style.top=e.classList.contains('ftb-d')?'4px':'0';}});
 const tfRow=()=>[...lay.children].filter(e=>e!==tb&&!e.classList.contains('s170k5')&&(()=>{const t=+(e.dataset.otop??parseFloat(e.style.top));return t>=228&&t<=236;})());
 function sync(){const fut=typeof amode!=='undefined'&&amode==='futures';tb.classList.toggle('on',fut);tfRow().forEach(e=>e.classList.toggle('tf-off',fut));}
 const _sm=setMode;setMode=function(m){_sm(m);sync();spOrderBook(m==='futures');};sync();
 const _as2=applyStock;applyStock=function(st){_as2(st);if(typeof amode!=='undefined'&&amode==='futures')spOrderBook(true);};})();

/* --- Combined asset page: "Activate leverage" confirmation sheet (translucent) — explains leverage + liquidation risk --- */
(()=>{const dv=document.getElementById('device');
 const chk='<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="4" fill="currentColor"/><path d="M4.6 8.2l2.2 2.2 4.6-4.8" fill="none" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg lvx-bg" id="lvx-bg" hidden></div><div class="lsh lvx" id="lvx" role="dialog" aria-modal="true" aria-labelledby="lvx-h" hidden><div class="lsh-grab"></div>
  <p class="mh-h dsh-h" id="lvx-h">Activate leverage</p>
  <p class="dsh-t">Leverage multiplies your gains and your losses.</p>
  <div class="lvx-ex" aria-label="Example with ₹1,000"><div class="lvx-r h"><span>Investment</span><span>Leverage</span><span>Price +1%</span><span>Price −1%</span></div>
   <div class="lvx-r"><span>₹1,000</span><span><b>1x</b></span><span class="up">+₹10</span><span class="dn">−₹10</span></div>
   <div class="lvx-r"><span>₹1,000</span><span><b>4x</b></span><span class="up">+₹40</span><span class="dn">−₹40</span></div></div>
  <p class="lvx-n"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M8 4.8v4M8 11v.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><span><b>Liquidation risk.</b> At 4x, a 25% price drop closes your position and you lose your ₹1,000.</span></p>
  <div class="lvx-ft"><button class="lvx-dont" role="checkbox" aria-checked="false"><i>${chk}</i><span>Don’t show this again</span></button>
  <button class="lsh-done lvx-ok l3-btn" data-variant="primary" data-size="lg">Confirm</button></div></div>`);
 const bg=$('#lvx-bg'),sh=$('#lvx'),dont=$('.lvx-dont',sh);
 const open=o=>{bg.hidden=!o;sh.hidden=!o;};
 dont.addEventListener('click',e=>{e.stopPropagation();dont.setAttribute('aria-checked',dont.getAttribute('aria-checked')!=='true');});
 $('.lvx-ok',sh).addEventListener('click',e=>{e.stopPropagation();if(dont.getAttribute('aria-checked')==='true'){window.LVX_SKIP=true;try{localStorage.setItem('kuber-lvx-skip','1');}catch(x){}}try{localStorage.setItem('kuber-lev-ok','1');}catch(x){}open(false);const cb=window.LVX_CB||(()=>caSet(true));window.LVX_CB=null;cb();});
 bg.addEventListener('click',()=>open(false));sh.addEventListener('click',e=>e.stopPropagation());
 window.levAcked=()=>{try{return localStorage.getItem('kuber-lev-ok')==='1';}catch(e){return false;}};
 window.lvxOpen=cb=>{if(levAcked()){cb();return;}window.LVX_CB=cb;dont.setAttribute('aria-checked','true');open(true);};
 window.caToggle=()=>{if(CA_LEV){caSet(false);return;}if(levAcked())caSet(true);else{window.LVX_CB=null;dont.setAttribute('aria-checked','true');open(true);}};
 const pn=document.getElementById('settings'),cas=pn&&pn.querySelector('#cas');if(cas){const b=document.createElement('button');b.className='disc-reset';b.textContent='Reset leverage sheet';b.addEventListener('click',()=>{window.LVX_SKIP=false;});cas.insertAdjacentElement('afterend',b);}})();

/* --- Portfolio P&L card: L3 Border/intense outline drawn above the glow (gradient like Figma 8662:35391) --- */
['s07','s17'].forEach(id=>{const lay=document.querySelector('#'+id+' .layer');if(!lay)return;const c=lay.querySelector('.u-j5kqettd');if(!c)return;
 const r=document.createElement('div');r.className='pnl-ring';r.setAttribute('aria-hidden','true');r.style.cssText=`left:${c.style.left};top:${c.style.top};width:${c.style.width};height:${c.style.height}`;if(c.dataset.otop!==undefined)r.dataset.otop=c.dataset.otop;lay.appendChild(r);});

/* --- Portfolio P&L card: "US MARKETS P&L" + tag that follows the tab (1x / Leverage) --- */
(()=>{const lay=document.querySelector('#s07 .layer');if(!lay)return;const ps=[...lay.querySelectorAll(':scope > p')];
 const lbl=ps.find(p=>/P&L$/.test(p.textContent.trim())&&p.style.top==='108px');if(lbl)lbl.textContent='US MARKETS P&L';
 const tag=ps.find(p=>p.textContent.trim()==='Holdings'&&p.style.top==='110px');const bg=[...lay.children].find(e=>e.tagName==='DIV'&&e.style.top==='104px'&&e.style.left==='273px');
 const set=t=>{if(!tag)return;tag.textContent=t;const w=Math.round(t.length*6.2+18);if(bg){bg.style.width=w+'px';bg.style.left=(332-w)+'px';}tag.style.left=(332-w)+'px';tag.style.width=w+'px';};
 set('1x');
 const ic=lay.querySelector('.m343f73');if(ic){ic.style.width='16px';ic.style.height='16px';ic.style.top='108px';ic.style.left='26px';}})();

/* --- Portfolio: two P&L cards (1x · Leveraged) in a 1.2-up carousel with dots; tab switch scrolls to the matching card --- */
(()=>{const sc=document.getElementById('s07'),lay=$('.layer',sc);if(!lay)return;const top=92,W=302,GAP=12,D=328-W;   /* 1.1-up: 16 + W + 12 + 0.1W ≈ 360 */
 const inCard=e=>{const t=parseFloat(e.style.top),l=parseFloat(e.style.left);return !isNaN(t)&&t>=92&&t<222&&l>=16&&l<345&&!e.classList.contains('ptabs');};
 const els=[...lay.children].filter(e=>inCard(e)||e.classList.contains('uefnmn27m'));
 const car=document.createElement('div');car.className='hrow pcar';car.style.cssText=`left:0px;top:${top}px;width:360px;height:130px`;
 const w1=document.createElement('div');w1.className='pcw';w1.style.cssText=`left:16px;top:0;width:${W}px;height:130px`;
 els.forEach(e=>{let l=parseFloat(e.style.left)-16,t=parseFloat(e.style.top)-top,w=parseFloat(e.style.width);
  if(e.classList.contains('u-j5kqettd')||e.classList.contains('pnl-ring')){l=0;w=W;}
  else if(e.classList.contains('uefnmn27m')){l=Math.round(l*W/328);w=Math.round(w*W/328);e.style.clipPath='none';}
  else if(l+w>=300-16){l-=D;}
  e.style.left=l+'px';e.style.top=t+'px';if(!isNaN(w))e.style.width=w+'px';delete e.dataset.otop;w1.appendChild(e);});
 car.appendChild(w1);
 const w2=w1.cloneNode(true);w2.style.left=(16+W+GAP)+'px';car.appendChild(w2);
 const sp=document.createElement('i');sp.style.cssText=`position:absolute;left:${16+2*W+GAP}px;top:0;width:16px;height:1px`;car.appendChild(sp);
 lay.appendChild(car);
 // card 2 = leveraged totals
 const ps=[...w2.querySelectorAll('p')];const by=t=>ps.find(p=>p.textContent.trim().startsWith(t));
 function fill(){let m=0,pn=0;FPOS.forEach(q=>{const st=S$(q.tk),dir=q.side==='Long'?1:-1;m+=q.margin;pn+=dir*(st.p-q.entry)*q.qty;});
  const pc=pn/m*100,up=pn>=0;const tag=[...w2.querySelectorAll('p')].find(p=>p.style.top==='18px');if(tag)tag.textContent='Futures';
  const tb=[...w2.children].find(e=>e.tagName==='DIV'&&e.style.top==='12px');const tw=Math.round('Futures'.length*6.2+18);if(tb){tb.style.width=tw+'px';tb.style.left=(W-12-tw)+'px';}if(tag){tag.style.width=tw+'px';tag.style.left=(W-12-tw)+'px';}
  const v=ps.find(p=>p.style.top==='40px'&&p.style.left==='12px');if(v){v.textContent=(up?'':'-')+fmt(Math.abs(pn)).replace('.',',');}
  const pp=ps.find(p=>/%$/.test(p.textContent.trim()));if(pp)pp.textContent=(up?'+':'-')+Math.abs(pc).toFixed(2)+'%';
  const inv=ps.find(p=>p.style.top==='98px'&&p.style.left==='12px'),cur=ps.find(p=>p.style.top==='98px'&&p.style.left!=='12px');
  if(inv)inv.textContent=fmt(m);if(cur)cur.textContent=fmt(m+pn);
  const t1=[...w1.querySelectorAll('p')].find(p=>p.style.top==='18px');if(t1){t1.textContent='Markets';const tb1=[...w1.children].find(e=>e.tagName==='DIV'&&e.style.top==='12px');const w=Math.round('Markets'.length*6.2+18);if(tb1){tb1.style.width=w+'px';tb1.style.left=(W-12-w)+'px';}t1.style.width=w+'px';t1.style.left=(W-12-w)+'px';}}
 fill();
 // dots
 const dots=document.createElement('div');dots.className='pdots';dots.style.cssText=`left:0px;top:${top+138}px;width:360px;height:6px`;dots.innerHTML='<i class="on"></i><i></i>';lay.appendChild(dots);
 const di=[...dots.children];const setDot=i=>di.forEach((d,j)=>d.classList.toggle('on',j===i));
 car.addEventListener('scroll',()=>setDot(car.scrollLeft>(W+GAP)/2?1:0),{passive:true});
 const go=i=>{car.scrollTo({left:i?(W+GAP):0,behavior:'smooth'});setDot(i);};
 document.addEventListener('click',e=>{const b=e.target.closest('#s07 [data-ptab]');if(b)go(b.dataset.ptab==='fut'?1:0);},true);
 car.addEventListener('click',e=>e.stopPropagation());})();

/* --- Portfolio: 8px above the carousel dots, 16px below (push everything under them down 10px) --- */
(()=>{const lay=document.querySelector('#s07 .layer');if(!lay)return;const DY=10;
 [...lay.children].forEach(e=>{if(e.classList.contains('pcar')||e.classList.contains('pdots'))return;const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=240)e.style.top=(t+DY)+'px';});
 const fp=lay.querySelector('.fpos');if(fp)fp.style.top=(parseFloat(fp.style.top)||0)+DY+'px';   /* leveraged cards are positioned inside .fpos */
 lay.style.height=(parseFloat(lay.style.height)+DY)+'px';})();

/* ===== Legal pass (26 Oct): order-pad leverage gate + first-time leverage quiz ===== */
(()=>{const dv=document.getElementById('device');
 const QZ=[{q:'You invest ₹1,000 at 4x. The price rises 1%. What is your profit?',o:['₹10','₹40','₹400'],a:1,why:'At 4x, a 1% move is 4% of your ₹1,000, so ₹40. A 1% fall costs the same.'},
  {q:'At 4x leverage, roughly how big a price drop closes your position?',o:['About 4%','About 25%','About 75%'],a:1,why:'Liquidation happens near 1 ÷ leverage, so about 25% at 4x. Higher leverage means a smaller move.'},
  {q:'When you trade a tokenised perpetual, do you own the underlying shares?',o:['Yes','No, I get price exposure only'],a:1,why:'You only get price exposure. You do not own the shares.'}];
 dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="qz-bg" hidden></div><div class="lsh qz" id="qz" role="dialog" aria-modal="true" aria-labelledby="qz-h" hidden><div class="lsh-grab"></div><p class="mh-h dsh-h" id="qz-h">Quick leverage check</p><div class="qz-b"></div></div>`);
 const bg=$('#qz-bg'),sh=$('#qz'),body=$('.qz-b',sh);let i=0,pick=null,done=null;
 const open=o=>{bg.hidden=sh.hidden=!o;};
 function draw(){const Q=QZ[i];sh.style.setProperty('--qp',((i+1)/QZ.length*100)+'%');body.innerHTML=`<p class="qz-n">Question ${i+1} of ${QZ.length}</p><p class="qz-q">${Q.q}</p>${Q.o.map((t,k)=>`<button class="qz-o ${pick===null?'':k===Q.a?'ok':k===pick?'no':''}" data-o="${k}" ${pick!==null?'disabled':''}>${t}</button>`).join('')}
  ${pick!==null?`<p class="qz-w ${pick===Q.a?'ok':'no'}">${pick===Q.a?'Correct. ':'Not quite. '}${Q.why}</p>`:''}
  <button class="lsh-done qz-go l3-btn" data-variant="primary" data-size="lg" ${pick===null?'disabled':''}>${pick===null?'Choose an answer':pick!==Q.a?'Try again':i<QZ.length-1?'Next':'Start trading'}</button>`;}
 body.addEventListener('click',e=>{e.stopPropagation();const o=e.target.closest('[data-o]');if(o&&pick===null){pick=+o.dataset.o;draw();return;}
  if(e.target.closest('.qz-go')&&pick!==null){if(pick!==QZ[i].a){pick=null;draw();return;}if(i<QZ.length-1){i++;pick=null;draw();return;}
   try{localStorage.setItem('kuber-quiz-ok','1');}catch(x){}open(false);const d=done;done=null;if(d)d();}});
 bg.addEventListener('click',()=>{open(false);done=null;});sh.addEventListener('click',e=>e.stopPropagation());
 window.quizNeeded=()=>{try{return localStorage.getItem('kuber-quiz-ok')!=='1';}catch(e){return true;}};
 window.openQuiz=cb=>{i=0;pick=null;done=cb;draw();open(true);};
 // order pad: leverage switched on here without having been activated before → Activate leverage sheet first
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;const card=sc.querySelector('.mpc');
  if(card)sc.addEventListener('click',e=>{if(!e.target.closest('.mpc'))return;if(!OPM.c||sc.classList.contains('op-levon')||e.target.closest('.mpc-b'))return;if(window.levAcked&&levAcked())return;
   e.stopPropagation();e.stopImmediatePropagation();lvxOpen(()=>sc._lev(true));},true);
  // first leveraged order → quiz before it is placed
  sc.querySelectorAll('.fixed.bottom [data-to="s06"]').forEach(btn=>btn.addEventListener('click',e=>{const lev=sc.classList.contains('op-levon')||sc.classList.contains('op-fut');
   if(!lev||!quizNeeded()||btn.dataset.qzok)return;e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();const go=()=>{btn.dataset.qzok='1';btn.click();delete btn.dataset.qzok;};
   if(window.QUIZV==='q2')openQuizIntro(()=>openQuizDone(go),()=>{if(sc.classList.contains('op-levon')&&sc._lev)sc._lev(false);else if(sc._optab)sc._optab('spot');});else openQuiz(go);},true));});
 setTimeout(()=>{const pn=document.getElementById('cyo');if(pn){const b=document.createElement('button');b.className='disc-reset';b.textContent='Reset leverage sheet + quiz';b.addEventListener('click',()=>{try{localStorage.removeItem('kuber-quiz-ok');localStorage.removeItem('kuber-lev-ok');localStorage.removeItem('kuber-lvx-skip');}catch(e){}window.LVX_SKIP=false;});pn.appendChild(b);}},0);})();



/* ===== Q2 · "Quiz Completed" sheet (Figma 5688:135844) ===== */
(()=>{const dv=document.getElementById('device');
 dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="qd-bg" hidden></div><div class="lsh qd" id="qd" role="dialog" aria-modal="true" aria-labelledby="qd-h" hidden>
  <button class="qd-x" aria-label="Close"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
  <p class="qd-h" id="qd-h">Quiz Completed <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="7.5" fill="none" stroke="#0f9958" stroke-width="1.5"/><path d="M5.6 9.2l2.3 2.3 4.6-4.8" fill="none" stroke="#0f9958" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
  <p class="qd-s">Start trading with leverage on Minted!</p>
  <p class="qd-i"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2.2L16.6 15.5H1.4z" fill="currentColor"/><path d="M9 7v4M9 13v.1" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round"/></svg>Important</p>
  <p class="qd-b">There is a high element of risk while trading with leverage. You have the potential to earn high profits but also face the risk of significant losses. In an extreme price movement, there is a chance that all your locked margin will be liquidated. Please analyse your investment objectives and risk appetite carefully before trading. Minted will not be liable for any losses suffered. <a href="#" onclick="return false">T&amp;C</a></p>
  <button class="lsh-done qd-ok l3-btn" data-variant="primary" data-size="lg">I Understand</button></div>`);
 const bg=$('#qd-bg'),sh=$('#qd');let cb=null;const close=go=>{bg.hidden=sh.hidden=true;const f=cb;cb=null;if(go&&f)f();};
 $('.qd-ok',sh).addEventListener('click',e=>{e.stopPropagation();close(true);});$('.qd-x',sh).addEventListener('click',e=>{e.stopPropagation();close(false);});
 bg.addEventListener('click',()=>close(false));sh.addEventListener('click',e=>e.stopPropagation());
 window.openQuizDone=f=>{cb=f;bg.hidden=sh.hidden=false;};})();

/* ===== Leverage quiz · Q2 full page — matches Figma "Futures Quiz" (5618:126836 → 5688:135418) ===== */
(()=>{const dv=document.getElementById('device');
 const FQ=[
  {q:'What is a tokenised perpetual on Minted?',o:['A contract that tracks the price of a US stock, with no expiry date','A share of the company that you own','A fixed deposit linked to the US market','A mutual fund of US stocks'],a:0,w:'A tokenised perpetual gives you price exposure only. It has no expiry and you do not own the underlying shares.'},
  {q:'What is the initial deposit required to open a leveraged position called?',o:['Premium','Margin','Commission','Spread'],a:1,w:'Margin is the amount you put in to open the position. Leverage multiplies your exposure on top of it.'},
  {q:'What is the role of leverage in trading?',o:['It increases the initial investment required to open a position.','It reduces the potential returns on an investment.','It lets you take a bigger position with less capital, multiplying both profits and losses.','It removes the risk of liquidation.'],a:2,w:'Leverage multiplies your exposure, so gains and losses both grow by the same factor.'},
  {q:'If the mark price is 50 and the liquidation price is 40, what is the percentage drop that would trigger liquidation of a long position?',o:['20%','10%','25%','5%'],a:0,w:'The price would have to fall from 50 to 40, which is a 10 ÷ 50 = 20% drop.'},
  {q:'A trader shorts 3 contracts at 1,500 each and later closes the position at 1,480 each. What is the total profit or loss?',o:['300 loss','60 profit','60 loss','900 profit'],a:1,w:'A short gains when the price falls: (1,500 − 1,480) × 3 = 60 profit.'},
  {q:'What is the Funding Rate?',o:['A periodic payment between longs and shorts that keeps the perpetual’s price close to the underlying stock’s price.','A one-time fee charged when you open a position.','The interest your bank pays on your balance.','A fee charged only when you are liquidated.'],a:0,w:'Longs pay shorts (or vice versa) every 8 hours to keep perpetual prices anchored to the underlying. It’s a cost of holding a leveraged position.'},
  {q:'What happens when your position hits its liquidation price?',o:['Nothing, the position stays open.','The position is closed automatically and you lose the margin you put in.','Your margin is refunded in full.','The leverage is reduced to 1x for free.'],a:1,w:'At the liquidation price the position is closed automatically and the margin backing it is lost.'}];
 dv.insertAdjacentHTML('beforeend',`<div class="fq" id="fq" role="dialog" aria-modal="true" aria-labelledby="fq-h" hidden><div class="fq-sb"><b>08:11</b><span>▾ ◢ ▮</span></div>
  <div class="fq-hd"><p id="fq-h">Leverage Quiz</p><button class="fq-x" aria-label="Exit quiz"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>
  <div class="fq-pg">${FQ.map(()=>'<i></i>').join('')}</div><div class="fq-body"></div><div class="fq-fb" hidden><p class="fq-fbt"></p><p class="fq-fbb"></p></div>
  <div class="fq-ft"><button class="fq-prev l3-btn" data-variant="secondary" data-size="lg">Previous</button><button class="fq-next l3-btn" data-variant="primary" data-size="lg">Next</button></div></div>`);
 const el=$('#fq'),body=$('.fq-body',el),fb=$('.fq-fb',el),prev=$('.fq-prev',el),next=$('.fq-next',el),segs=[...el.querySelectorAll('.fq-pg i')];
 let i=0,ans=[],done=null,exit=null;
 function draw(){const Q=FQ[i],p=ans[i];segs.forEach((s,k)=>s.classList.toggle('on',k<=i));
  body.innerHTML=`<p class="fq-n">Question ${i+1} of ${FQ.length}</p><p class="fq-q">${Q.q}</p>${Q.o.map((t,k)=>`<button class="fq-o ${p===undefined?'':k===Q.a?'ok':k===p?'no':''}" data-o="${k}">${t}</button>`).join('')}`;
  fb.hidden=p===undefined;if(p!==undefined){const ok=p===Q.a;$('.fq-fbt',el).textContent=ok?'Correct!':'Not Quite..';$('.fq-fbt',el).classList.toggle('ok',ok);$('.fq-fbb',el).textContent=Q.w;}
  prev.disabled=i===0;next.disabled=!(p!==undefined&&p===Q.a);next.textContent=i===FQ.length-1?'Finish':'Next';}
 body.addEventListener('click',e=>{const o=e.target.closest('[data-o]');if(!o)return;ans[i]=+o.dataset.o;draw();});
 prev.addEventListener('click',()=>{if(i>0){i--;draw();}});
 next.addEventListener('click',()=>{if(next.disabled)return;if(i<FQ.length-1){i++;draw();return;}try{localStorage.setItem('kuber-quiz-ok','1');}catch(x){}el.hidden=true;const d=done;done=null;if(d)d();});
 $('.fq-x',el).addEventListener('click',()=>{el.hidden=true;const x=exit;exit=null;if(x)x();});
 el.addEventListener('click',e=>e.stopPropagation());
 window.openFullQuiz=(pass,ex)=>{i=0;ans=[];done=pass;exit=ex;draw();el.hidden=false;};})();

/* ===== Leverage quiz · Q2 (CoinSwitch-style "Before you begin…" intro, 5618:125804) ===== */
window.QUIZV='q2';   /* Q2 (CoinSwitch-style intro + 7-question quiz) is the default */
(()=>{const dv=document.getElementById('device');
 dv.insertAdjacentHTML('beforeend',`<div class="lsh-bg" id="q2-bg" hidden></div><div class="lsh q2i" id="q2" role="dialog" aria-modal="true" aria-labelledby="q2-h" hidden>
  <p class="q2-k"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 1.5L3.5 9h3.8l-.9 5.5L12.5 7H8.6z" fill="currentColor"/></svg>Leverage</p>
  <p class="q2-pre">Before you begin…</p><p class="q2-h" id="q2-h">Take this short quiz to start trading with leverage</p>
  <span class="q2-tag">Mandatory Quiz • One-time</span>
  <button class="lsh-done q2-start l3-btn" data-variant="primary" data-size="lg">Start Quiz</button><button class="q2-exit">Exit Leverage</button></div>`);
 const bg=$('#q2-bg'),sh=$('#q2');let onPass=null,onExit=null;const open=o=>{bg.hidden=sh.hidden=!o;};
 window.openQuizIntro=(pass,exit)=>{onPass=pass;onExit=exit;open(true);};
 $('.q2-start',sh).addEventListener('click',e=>{e.stopPropagation();open(false);openFullQuiz(()=>{if(onPass)onPass();},()=>{if(onExit)onExit();});});
 const exit=()=>{open(false);if(onExit)onExit();};
 $('.q2-exit',sh).addEventListener('click',e=>{e.stopPropagation();exit();});bg.addEventListener('click',exit);sh.addEventListener('click',e=>e.stopPropagation());
 // Q2 trigger: the first time leverage is switched on in the order pad (combined) or the Leveraged tab is opened
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc||!sc._lev)return;const _l=sc._lev;
  sc._lev=on=>{_l(on);if(false)setTimeout(()=>openQuizIntro(()=>{},()=>_l(false)),120);};
  if(sc._optab){const _o=sc._optab;sc._optab=t=>{_o(t);if(false)setTimeout(()=>openQuizIntro(()=>{},()=>_o('spot')),120);};}});
 // panel: quiz version
 setTimeout(()=>{const box=document.getElementById('cyo');if(box){box.insertAdjacentHTML('beforeend',`<h2>Leverage quiz</h2><div class="modes" id="qzv"><button data-qzv="q2" aria-pressed="true">Q2 · CoinSwitch intro</button><button data-qzv="q1" aria-pressed="false">Q1 · At first leveraged order</button></div>`);
  box.querySelector('#qzv').addEventListener('click',e=>{const b=e.target.closest('[data-qzv]');if(!b)return;QUIZV=b.dataset.qzv;box.querySelectorAll('[data-qzv]').forEach(x=>x.setAttribute('aria-pressed',x===b));try{localStorage.removeItem('kuber-quiz-ok');}catch(x){}});}},0);})();
applyStock(cur);addEventListener('resize',fit);fit();show();
/* ===== ETF asset header: show the parent theme (e.g. "S&P 500 ETF") — four layouts, picked in the filters ===== */
(()=>{const s04=document.getElementById('s04');if(!s04)return;window.ETHV=window.ETHV||'h4';
 const build=()=>{const nm=s04.querySelector('.nm-t');if(!nm)return false;
  if(!s04.querySelector('.th-eb'))nm.closest('p').parentElement.insertAdjacentHTML('beforeend','<p class="th-eb"></p><span class="th-chip"></span><p class="th-fund"></p>');
  s04.querySelectorAll('.msc').forEach(m=>{if(!m.parentElement.querySelector(':scope > .th-card'))m.insertAdjacentHTML('afterend','<div class="th-card"><span>ETF theme</span><b></b></div>');});
  return true;};
 const paint=()=>{if(!build())return;const st=window.__eth||null;const on=!!(st&&st.theme)&&s04.classList.contains('etfp');
  s04.classList.toggle('has-theme',on);document.documentElement.dataset.eth=ETHV;
  const nm=s04.querySelector('.nm-t');
  if(!on){if(nm&&nm.dataset.orig){nm.textContent=nm.dataset.orig;delete nm.dataset.orig;}return;}
  s04.querySelector('.th-eb').textContent=st.theme;s04.querySelector('.th-chip').textContent=st.theme;s04.querySelectorAll('.th-card b').forEach(x=>x.textContent=st.theme.replace(/\s*ETF$/i,''));
  s04.querySelector('.th-fund').textContent=(st.full||st.name)+' · '+st.tk;
  // H3 swaps the title for the theme
  if(ETHV==='h3'){if(!nm.dataset.orig)nm.dataset.orig=nm.textContent;nm.textContent=st.theme;}else if(nm.dataset.orig){nm.textContent=nm.dataset.orig;delete nm.dataset.orig;}
  // H2 chip sits right after the name (and its switch arrow)
  // H4 card leads the stats row
  s04.querySelectorAll('.msc').forEach(m=>{m.parentElement.scrollLeft=0;});};
 const _as=applyStock;applyStock=function(st){window.__eth=(st&&st.theme)?st:null;s04.classList.toggle('etfp',!!(st&&st.theme));_as(st);setTimeout(paint,0);};
 window.paintETH=paint;
 setTimeout(()=>{const box=document.getElementById('cyo');if(!box)return;box.insertAdjacentHTML('beforeend','<h2>ETF header (theme name)</h2><div class="modes" id="ethv"><button data-ethv="h1" aria-pressed="false">H1 · Eyebrow</button><button data-ethv="h2" aria-pressed="false">H2 · Chip</button><button data-ethv="h3" aria-pressed="false">H3 · Theme as title</button><button data-ethv="h4" aria-pressed="true">H4 · Theme card</button></div>');
  box.querySelector('#ethv').addEventListener('click',e=>{const b=e.target.closest('[data-ethv]');if(!b)return;ETHV=b.dataset.ethv;box.querySelectorAll('[data-ethv]').forEach(x=>x.setAttribute('aria-pressed',x===b));paint();});},200);
})();

/* ===== Home: sections below the fold reveal as they scroll into view (fade + rise, cards staggered left→right) ===== */
(()=>{const sc=document.getElementById('s01');if(!sc)return;const scr=sc.querySelector('.scroll'),lay=sc.querySelector('.layer');if(!scr||!lay||!('IntersectionObserver' in window))return;
 let io=null;
 function arm(){if(io)io.disconnect();const fold=scr.scrollTop+scr.clientHeight-30;
  const kids=[...lay.children].filter(e=>{const t=parseFloat(e.style.top);return !isNaN(t)&&t>fold&&getComputedStyle(e).display!=='none'&&!e.classList.contains('hide');});
  kids.forEach(e=>{if(e.dataset.srv)return;e.dataset.srv='1';e.dataset.srvT=e.style.transform||'';e.style.transition='none';e.style.opacity='0';e.style.transform=(e.dataset.srvT?e.dataset.srvT+' ':'')+'translateY(18px)';});
  io=new IntersectionObserver(ents=>{ents.forEach(en=>{if(!en.isIntersecting)return;const e=en.target;io.unobserve(e);
    const left=parseFloat(e.style.left)||0,d=Math.min(.18,left/360*.18);   // things further right come in a beat later
    e.style.transition=`opacity .55s ease-out ${d.toFixed(2)}s, transform .65s cubic-bezier(.2,.8,.2,1) ${d.toFixed(2)}s`;e.style.opacity='';e.style.transform=e.dataset.srvT;
    setTimeout(()=>{e.style.transition='';delete e.dataset.srv;delete e.dataset.srvT;},900);
    // horizontal card rows: stagger their cards too
    if(e.classList.contains('hrow'))[...e.children].forEach(c=>{const l=parseFloat(c.style.left)||0;if(l>360)return;c.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:500,delay:80+l*0.6,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'});});
    e.querySelectorAll&&e.querySelectorAll('svg path[stroke]').forEach((p,i)=>{try{const L=p.getTotalLength();if(L>20&&i<8)p.animate([{strokeDasharray:L,strokeDashoffset:L},{strokeDasharray:L,strokeDashoffset:0}],{duration:800,delay:150+i*40,easing:'cubic-bezier(.4,0,.2,1)',fill:'backwards'});}catch(_){}});});},{root:scr,rootMargin:'0px 0px -40px 0px',threshold:.01});
  kids.forEach(e=>io.observe(e));}
 const go=()=>setTimeout(arm,120);
 setTimeout(()=>{const au=document.getElementById('auth');if(au)new MutationObserver(()=>{if(au.hidden)go();}).observe(au,{attributes:true,attributeFilter:['hidden']});},0);
 new MutationObserver(()=>{if(sc.classList.contains('on')&&scr.scrollTop<5)go();}).observe(sc,{attributes:true,attributeFilter:['class']});
 setTimeout(arm,1000);})();

/* ===== Home entrance micro-interactions: sections rise in, top to bottom; balance counts up; tray icons pop; sparklines draw ===== */
(()=>{const sc=document.getElementById('s01');if(!sc)return;const lay=sc.querySelector('.layer');let played=false;
 function play(){const kids=[...lay.children].filter(e=>{const t=parseFloat(e.style.top);return !isNaN(t)&&t<1150&&getComputedStyle(e).display!=='none';});
  const set=(e,css)=>Object.assign(e.style,css);
  kids.forEach(e=>{const t=parseFloat(e.style.top);if(t<80)return;const d=t<270?Math.max(0,(t-80)*.0012):(.22+Math.min(.75,(t-270)*.0011));
   const t0=e.style.transform||'';e.dataset.hin='1';set(e,{transition:'none',opacity:'0',transform:(t0?t0+' ':'')+'translateY(14px)'});void e.offsetWidth;
   set(e,{transition:`opacity .5s ease-out ${d.toFixed(2)}s, transform .6s cubic-bezier(.2,.8,.2,1) ${d.toFixed(2)}s`,opacity:'',transform:t0});});   /* back to the element's own transform — nothing left shifted */
  // balance counts up
  const bal=[...lay.children].find(e=>e.tagName==='P'&&/₹\s?1,450\.23|1,450\.23/.test(e.textContent));
  if(bal){const tn=[...bal.childNodes].find(n=>n.nodeType===3&&/1,450\.23/.test(n.nodeValue))||(bal.lastChild&&bal.lastChild.nodeType===3?bal.lastChild:null);
   if(tn){const final=tn.nodeValue,target=1450.23,t0=performance.now()+150,fmt=v=>v.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});
    (function step(now){const k=Math.min(1,Math.max(0,(now-t0)/900)),e=1-Math.pow(1-k,3);tn.nodeValue=final.replace(/[\d,]+\.\d\d/,fmt(target*e));if(k<1)requestAnimationFrame(step);else tn.nodeValue=final;})(performance.now());}}
  // tray icons pop one after another
  const tr=document.getElementById('tray');if(tr)[...tr.children].filter(e=>e.tagName.toLowerCase()==='svg'&&e.style.display!=='none').forEach((ic,i)=>{ic.animate([{transform:'scale(.6)',opacity:0},{transform:'scale(1.08)',opacity:1,offset:.7},{transform:'scale(1)',opacity:1}],{duration:420,delay:260+i*70,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'});});
  // sparklines on the cards draw themselves
  lay.querySelectorAll('.hrow svg path[stroke], .getf .grow svg path[stroke]').forEach((p,i)=>{try{const L=p.getTotalLength();if(!L||L<20)return;p.animate([{strokeDasharray:L,strokeDashoffset:L},{strokeDasharray:L,strokeDashoffset:0}],{duration:900,delay:420+Math.min(8,i)*50,easing:'cubic-bezier(.4,0,.2,1)',fill:'backwards'});}catch(_){}});
  setTimeout(()=>kids.forEach(e=>{if(e.dataset.hin){e.style.transition='';delete e.dataset.hin;}}),2200);}
 const ready=()=>sc.classList.contains('on')&&document.getElementById('auth')&&document.getElementById('auth').hidden;
 const tryPlay=()=>{if(played||!ready())return;played=true;setTimeout(play,60);};
 setTimeout(()=>{const au=document.getElementById('auth');if(au)new MutationObserver(()=>{if(au.hidden)tryPlay();else played=false;}).observe(au,{attributes:true,attributeFilter:['hidden']});},0);   /* the sign-in layer is created later in the script */
 window.playHomeIntro=()=>{played=false;tryPlay();};setTimeout(tryPlay,900);})();

/* --- Leverage card in the tab layout (US Minted): the toggle expands the card in place (2x · 3x · 4x) instead of jumping to Futures --- */
setTimeout(()=>{document.addEventListener('click',e=>{const card=e.target.closest('.mpc');if(!card||(window.OPM&&OPM.c))return;if(e.target.closest('.mpc-b'))return;
 e.stopPropagation();e.stopImmediatePropagation();const sc=card.closest('.screen');const on=!card.classList.contains('open');
 const apply=()=>{card.classList.toggle('open',on);sc.classList.toggle('lev1x',on);const sw=card.querySelector('.mpc-sw');if(sw)sw.setAttribute('aria-checked',on);if(on&&sc._pickLev)sc._pickLev(2);};
 if(on&&window.lvxOpen&&window.levAcked&&!levAcked()){lvxOpen(apply);return;}   /* first time only — shared with the Futures tab, so seeing it once anywhere is enough */
 apply();},true);
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;let was=false;new MutationObserver(()=>{const on=sc.classList.contains('on');if(on&&!was){const c=sc.querySelector('.mpc');if(c)c.classList.remove('open');sc.classList.remove('lev1x');}was=on;}).observe(sc,{attributes:true,attributeFilter:['class']});});},350);

/* ===== Leverage card — Figma 8870:209735: "Enable leverage upto 2x/3x/4x", toggle; on → divider, 2x · 3x · 4x chips, info strip ===== */
setTimeout(()=>{['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;const card=sc.querySelector('.mpc');if(!card)return;
 const t=card.querySelector('.mpc-t');if(t&&t.firstChild&&t.firstChild.nodeType===3)t.firstChild.nodeValue='Enable leverage upto ';
 const x=card.querySelector('.mpc-x');if(x)x.innerHTML='<b>2x</b><b>3x</b><b>4x</b><b>2x</b>';
 const ic=card.querySelector('.mpc-ic');if(ic)ic.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><defs><linearGradient id="mbolt'+id+'" x1="10" y1="2" x2="10" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#E8E8E8"/><stop offset="1" stop-color="#0F9958"/></linearGradient></defs><path d="M11.4 2 4.6 11h4.6L8.3 18l7.1-9.3h-4.7z" fill="url(#mbolt'+id+')"/></svg>';
 const b=card.querySelector('.mpc-b'),src=sc.querySelector('.op-lev input');if(!b)return;
 b.insertAdjacentHTML('beforeend',`<div class="mpc-ch" role="radiogroup" aria-label="Leverage">${[2,3,4].map(v=>`<button role="radio" data-lv="${v}" aria-checked="${v===2}">${v}x</button>`).join('')}</div><div class="mpc-ft"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 7.2v4M8 4.9v.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Leverage can multiply your profits and losses.</div>`);
 const pick=v=>{b.querySelectorAll('[data-lv]').forEach(c=>c.setAttribute('aria-checked',+c.dataset.lv===v));if(src){src.value=v;src.dispatchEvent(new Event('input'));}};
 sc._pickLev=pick;
 const _l=sc._lev;if(_l)sc._lev=on=>{_l(on);if(on)pick(2);};});
 document.addEventListener('click',e=>{const c=e.target.closest('.mpc-ch [data-lv]');if(!c)return;e.stopPropagation();e.stopImmediatePropagation();const sc=c.closest('.screen');if(sc&&sc._pickLev)sc._pickLev(+c.dataset.lv);},true);},300);   /* 2x selected when switched on, as in Figma */

/* --- Home: By Market Cap comes before Top Movers (swap the two blocks, keep their spacing) --- */
setTimeout(()=>{const lay=document.querySelector('#s01 .layer');if(!lay)return;const kids=[...lay.children];
 const P=t=>kids.find(e=>e.tagName==='P'&&e.textContent.trim()===t);const tm=P('Top Movers'),mc=P('By Market Cap'),cat=P('Categories');if(!tm||!mc||!cat)return;
 const a=parseFloat(tm.style.top),b=parseFloat(mc.style.top),c=parseFloat(cat.style.top);if(!(a<b&&b<c))return;
 const H1=b-a,H2=c-b;
 kids.forEach(e=>{const t=parseFloat(e.style.top);if(isNaN(t))return;let d=0;if(t>=a-1&&t<b-1)d=H2;else if(t>=b-1&&t<c-1)d=-H1;if(!d)return;e.style.top=(t+d)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop+d);});},700);

/* --- OTP version filter: V1 full-screen OTP page · V2 bottom sheet --- */
window.OTPV='v2';   /* OTP bottom sheet is the default */setTimeout(()=>{const box=document.getElementById('cyo');if(!box)return;
 box.insertAdjacentHTML('beforeend','<h2>OTP version</h2><div class="modes" id="otpv"><button data-otpv="v2" aria-pressed="true">V2 · Bottom sheet</button><button data-otpv="v1" aria-pressed="false">V1 · Full-screen OTP</button></div>');
 box.querySelector('#otpv').addEventListener('click',e=>{const b=e.target.closest('[data-otpv]');if(!b)return;OTPV=b.dataset.otpv;box.querySelectorAll('[data-otpv]').forEach(x=>x.setAttribute('aria-pressed',x===b));});},150);

/* ===== ETF asset page = the current asset page (s04) in ETF mode: one disabled "Positions" tab, no Futures/leverage ===== */
setTimeout(()=>{const ETFS={'Invesco QQQ':['QQQ',512.40,0.92],'Invesco QQQ Trust':['QQQ',512.40,0.92],'SPDR S&P 500 ETF':['SPY',585.30,0.48],'SPDR Dow Jones Ind.':['DIA',428.60,-0.21],
  'iShares MSCI Japan':['EWJ',71.20,0.64],'Franklin FTSE Japan':['FLJP',31.85,0.58],'WisdomTree Japan Hedged':['DXJ',114.10,1.12],'iShares MSCI Taiwan':['EWT',56.40,1.35],'Franklin FTSE Taiwan':['FLTW',49.70,1.21],
  'iShares MSCI EM Asia':['EEMA',78.15,0.86],'iShares China Large-Cap':['FXI',32.90,-0.74],'KraneShares China Internet':['KWEB',30.45,-1.18],'iShares MSCI China':['MCHI',51.20,-0.52],
  'Invesco QQQ Trust · QQQ':['QQQ',512.40,0.92],'Schwab International':['SCHF',21.48,0.41],'Direxion Daily Semi':['SOXS',23.62,-2.85],'ProShares UltraPro':['TQQQ',82.14,2.71],'iShares Core MSCI':['IXUS',71.35,0.38]};
 const s04=document.getElementById('s04');if(!s04)return;
 const jump=document.createElement('button');jump.dataset.to='s04';jump.hidden=true;jump.className='hs';document.getElementById('s01').appendChild(jump);
 const _as=applyStock;applyStock=function(st){_as(st);const etf=!!(st&&st.etf);s04.classList.toggle('etf',etf);document.documentElement.classList.toggle('etf-on',etf);const nmt=s04.querySelector('.nm-t');if(nmt&&!nmt.parentElement.querySelector('.etf-tag')){const sw=nmt.parentElement.querySelector('.nsw');(sw||nmt).insertAdjacentHTML('afterend','<span class="etf-tag">ETF</span>');}s04.classList.toggle('anyetf',!!(st&&st.isEtf));};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-to="s12"]');if(!b||b.closest('#list'))return;
  const label=(b.getAttribute('aria-label')||'').replace(/^Open\s+/,'').replace(/^Go to ETF asset page\s*·?\s*/,'');const k=Object.keys(ETFS).find(n=>label.startsWith(n))||'Invesco QQQ Trust';const [tk,p,c]=ETFS[k];
  e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();
  try{setMode('spot');}catch(_){}
  const us=['QQQ','QQQM','ONEQ','TQQQ','SPY','VOO','IVV','SPLG','DIA','DJD','DDM','UDOW'].includes(tk);   /* US-market ETFs trade like US stocks: US Assets + Futures */
  applyStock({tk,name:k,short:k,p,c,col:'#1d2f55',etf:!us,isEtf:1,theme:b.dataset.theme||'',full:b.dataset.full||'',about:us?`${k} is a US-listed exchange-traded fund (${tk}). Trade it at 1x under US Assets, or with leverage under Futures.`:`${k} is an exchange-traded fund listed in the US under the ticker ${tk}. Buy it in rupees at 1x — leverage isn't available on this ETF.`});
  jump.click();},true);},250);

/* --- Order Placed: Similar Assets sits 24px under the auto-sell card (also re-bases the market-closed shift so the gap holds) --- */
setTimeout(()=>{const lay=document.querySelector('#s06 .layer');if(!lay)return;const kids=[...lay.children];
 kids.forEach(e=>{if(e.dataset.oy===undefined)return;const t=parseFloat(e.style.top),o=+e.dataset.oy;if(Math.abs((o-t)-76)<.5)e.dataset.oy=String(t);});   // card removed earlier: base positions follow it
 const card=kids.find(e=>e.classList.contains('sysmqt'));const sa=kids.find(e=>e.tagName==='P'&&/Similar Assets/.test(e.textContent));if(!card||!sa)return;
 const base=e=>e.dataset.oy!==undefined?+e.dataset.oy:parseFloat(e.style.top);
 const want=base(card)+parseFloat(card.style.height)+24,dy=want-base(sa);if(Math.abs(dy)<.5)return;
 const from=base(sa)-1;kids.forEach(e=>{if(isNaN(parseFloat(e.style.top)))return;if(base(e)>=from&&e.style.display!=='none'){if(e.dataset.oy!==undefined)e.dataset.oy=String(+e.dataset.oy+dy);e.style.top=(parseFloat(e.style.top)+dy)+'px';}});},450);

/* ===== Order processing · Minted glass-ring loader (ported from artifact P7Ucf1aXJ3Gp5uYL8utZLv) → hands over to the real Order Placed / Failed screen ===== */
window.GRO=(()=>{
const OK_ICON=`<svg class="res" viewBox="0 0 84 84" aria-hidden="true"><rect x="9.6" y="9.6" width="64" height="64" rx="32" fill="#042918"/><path d="M41.5999 22.4C37.8025 22.4 34.0904 23.5261 30.933 25.6358C27.7755 27.7455 25.3146 30.7441 23.8614 34.2525C22.4082 37.7608 22.028 41.6213 22.7688 45.3457C23.5097 49.0702 25.3383 52.4913 28.0235 55.1764C30.7086 57.8616 34.1297 59.6902 37.8542 60.4311C41.5786 61.1719 45.4391 60.7917 48.9474 59.3385C52.4558 57.8853 55.4544 55.4244 57.5641 52.2669C59.6739 49.1095 60.7999 45.3974 60.7999 41.6C60.7999 36.5078 58.7771 31.6242 55.1764 28.0235C51.5757 24.4228 46.6921 22.4 41.5999 22.4ZM52.6879 35.52L41.7279 50.384C41.6004 50.5578 41.439 50.704 41.2536 50.8139C41.0681 50.9238 40.8624 50.9951 40.6487 51.0235C40.435 51.0519 40.2178 51.0368 40.01 50.9791C39.8023 50.9215 39.6084 50.8225 39.4399 50.688L31.6159 44.432C31.4515 44.3 31.3149 44.1367 31.2138 43.9517C31.1127 43.7667 31.0492 43.5635 31.0269 43.3539C31.0046 43.1442 31.024 42.9323 31.0839 42.7301C31.1438 42.528 31.243 42.3397 31.3759 42.176C31.6418 41.8534 32.0234 41.6476 32.439 41.6028C32.8546 41.5579 33.2713 41.6775 33.5999 41.936L40.1279 47.152L50.1119 33.6C50.3638 33.2626 50.7386 33.0382 51.1549 32.9753C51.5712 32.9124 51.9956 33.0161 52.3359 33.264C52.5087 33.3878 52.6552 33.5447 52.7666 33.7257C52.8781 33.9067 52.9524 34.1081 52.9852 34.3181C53.018 34.5282 53.0085 34.7426 52.9575 34.949C52.9065 35.1553 52.8148 35.3495 52.6879 35.52Z" fill="url(#gok)"/><defs><linearGradient id="gok" x1="4.58" y1="-7.48" x2="60.8" y2="60.8" gradientUnits="userSpaceOnUse"><stop stop-color="#E8E8E8"/><stop offset="1" stop-color="#0F9958"/></linearGradient></defs></svg>`;
const BAD_ICON=`<svg class="res" viewBox="0 0 84 84" aria-hidden="true"><rect x="9.6" y="9.6" width="64" height="64" rx="32" fill="#3F2225"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41.5998 60.8C30.996 60.8 22.3999 52.2039 22.3999 41.6C22.3999 30.9962 30.996 22.4 41.5998 22.4C52.2038 22.4 60.7999 30.9962 60.7999 41.6C60.7999 52.2039 52.2038 60.8 41.5998 60.8ZM39.9205 48.1028C40.0068 48.9538 40.726 49.6177 41.5996 49.6178C42.5315 49.6178 43.2877 48.8621 43.2877 47.9301C43.2875 46.9982 42.5315 46.2424 41.5996 46.2424C40.7261 46.2426 40.0071 46.9067 39.9205 47.7574L39.9119 47.9301L39.9205 48.1028ZM40.3339 42.4461V34.851C40.3339 34.152 40.901 33.585 41.6 33.585C42.299 33.585 42.866 34.152 42.866 34.851V42.4461C42.866 43.1451 42.299 43.7122 41.6 43.7122C40.901 43.7122 40.3339 43.1451 40.3339 42.4461Z" fill="url(#gbad)"/><defs><linearGradient id="gbad" x1="4.58" y1="-7.48" x2="60.8" y2="60.8" gradientUnits="userSpaceOnUse"><stop stop-color="#E8E8E8"/><stop offset="1" stop-color="#E5505F"/></linearGradient></defs></svg>`;
const LOADER=`<svg class="ld" viewBox="0 0 64 64" aria-hidden="true"><circle class="bg" cx="32" cy="32" r="32"/><circle class="trk" cx="32" cy="32" r="29"/><circle class="arc" cx="32" cy="32" r="29"/></svg>`;
const HG=`<svg class="hg" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="9.59961" y="9.59961" width="64" height="64" rx="32" class="bgc" fill="#392A00"/>
            <circle cx="41.6" cy="41.6" r="19.2" fill="url(#badgeGrad)"/>
            <g class="sync" transform="translate(32 32) scale(.8)"><g class="syr" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5A7.7 7.7 0 0 1 18.2 7.4"/><path d="M18.8 3.6v4.2h-4.2"/><path d="M19.5 13.5A7.7 7.7 0 0 1 5.8 16.6"/><path d="M5.2 20.4v-4.2h4.2"/></g></g><g class="hourglass">
              <animateTransform attributeName="transform" type="rotate" values="0 41.6 41.6;0 41.6 41.6;180 41.6 41.6" keyTimes="0;0.78;1" calcMode="spline" keySplines="0 0 1 1;0.65 0 0.35 1" dur="3.2s" repeatCount="indefinite"/>
              <path d="M48.5911 48.3286C48.5911 48.6929 48.2957 48.9883 47.9314 48.9883H35.2668C34.9026 48.9883 34.6072 48.6929 34.6072 48.3286C34.6072 47.9644 34.9026 47.669 35.2668 47.669L36.718 47.669V45.8221C36.718 44.0201 37.6946 42.4462 39.1472 41.6006C37.6946 40.755 36.718 39.1811 36.718 37.379V35.5321H35.2668C34.9026 35.5321 34.6072 35.2368 34.6072 34.8725C34.6072 34.5082 34.9026 34.2129 35.2668 34.2129H47.9314C48.2957 34.2129 48.5911 34.5082 48.5911 34.8725C48.5911 35.2368 48.2957 35.5321 47.9314 35.5321H46.4802V37.379C46.4802 39.1811 45.5039 40.755 44.051 41.6006C45.5039 42.4462 46.4802 44.0201 46.4802 45.8221V47.669H47.9314C48.2957 47.669 48.5911 47.9644 48.5911 48.3286ZM38.0374 37.379V35.5321H45.1611V37.379C45.1611 39.3462 43.5664 40.941 41.5991 40.941C39.6321 40.941 38.0374 39.3462 38.0374 37.379ZM38.0374 45.8221V47.669H45.1611V45.8221C45.1611 43.8549 43.5664 42.2602 41.5991 42.2602C39.6321 42.2602 38.0374 43.8549 38.0374 45.8221Z" class="hgi" fill="#392A00" fill-rule="evenodd"/>
              <path d="M38.0374 37.379V35.5321H45.1611V37.379C45.1611 39.3462 43.5664 40.941 41.5991 40.941C39.6321 40.941 38.0374 39.3462 38.0374 37.379Z" class="hgi" fill="#392A00" clip-path="url(#sandTop)"/>
              <path d="M38.0374 45.8221V47.669H45.1611V45.8221C45.1611 43.8549 43.5664 42.2602 41.5991 42.2602C39.6321 42.2602 38.0374 43.8549 38.0374 45.8221Z" class="hgi" fill="#392A00" clip-path="url(#sandBottom)"/>
              <rect x="41.33" y="40.9" width="0.55" height="6.8" rx="0.27" class="hgi" fill="#392A00" opacity="0">
                <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.72;0.76;1" dur="3.2s" repeatCount="indefinite"/>
              </rect>
            </g>
          </g>
          <defs>
            <clipPath id="sandTop"><rect x="37" width="10" y="35.53" height="5.42">
              <animate attributeName="y" values="35.53;40.95;40.95" keyTimes="0;0.76;1" dur="3.2s" repeatCount="indefinite"/>
              <animate attributeName="height" values="5.42;0;0" keyTimes="0;0.76;1" dur="3.2s" repeatCount="indefinite"/>
            </rect></clipPath>
            <clipPath id="sandBottom"><rect x="37" width="10" y="47.67" height="0">
              <animate attributeName="y" values="47.67;42.26;42.26" keyTimes="0;0.76;1" dur="3.2s" repeatCount="indefinite"/>
              <animate attributeName="height" values="0;5.41;5.41" keyTimes="0;0.76;1" dur="3.2s" repeatCount="indefinite"/>
            </rect></clipPath>
            <filter id="badgeShadow" x="0" y="0" width="83.2" height="83.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/><feGaussianBlur stdDeviation="4.8"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="badgeGrad" x1="4.58221" y1="-7.48441" x2="60.7994" y2="60.8004" gradientUnits="userSpaceOnUse">
              <stop class="s0" stop-color="#E8E8E8"/><stop class="s1" offset="1" stop-color="#F6C12F"/>
            </linearGradient>
          </defs>
        </svg>`,KG=`<svg viewBox="0 0 360 665" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#glowBlur)"><circle cx="180" cy="753.061" r="273.061" fill="url(#glowFill)"/></g>
      <defs>
        <filter id="glowBlur" x="-573.061" y="0" width="1506.12" height="1506.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="240"/>
        </filter>
        <radialGradient id="glowFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180 753.061) rotate(90) scale(380.749)">
          <stop stop-color="#F6C12F"/><stop offset="1" stop-color="#D79E00" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>`,KGN=`<svg viewBox="0 0 360 665" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#glowBlurN)"><circle cx="180" cy="753.061" r="273.061" fill="url(#glowFillN)"/></g>
      <defs>
        <filter id="glowBlurN" x="-573.061" y="0" width="1506.12" height="1506.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="240"/>
        </filter>
        <radialGradient id="glowFillN" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180 753.061) rotate(90) scale(380.749)">
          <stop stop-color="#E8E8E8"/><stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>`,BACK=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 9.99935C3.33301 9.53911 3.7061 9.16602 4.16634 9.16602H15.833C16.2932 9.16602 16.6663 9.53911 16.6663 9.99935C16.6663 10.4596 16.2932 10.8327 15.833 10.8327H4.16634C3.7061 10.8327 3.33301 10.4596 3.33301 9.99935Z" fill="#E8E8E8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5889 3.57806C10.9144 3.9035 10.9144 4.43114 10.5889 4.75657L5.34485 10.0007L10.5889 15.2447C10.9144 15.5702 10.9144 16.0978 10.5889 16.4232C10.2635 16.7487 9.73586 16.7487 9.41042 16.4232L3.57709 10.5899C3.25165 10.2645 3.25165 9.73683 3.57709 9.4114L9.41042 3.57806C9.73586 3.25263 10.2635 3.25263 10.5889 3.57806Z" fill="#E8E8E8"/>
      </svg>`;
const TITLES=['Order in progress','Routing your transaction','Fetching order status'];
let STEP=3000;
function build(el,kind){const ok=kind==='ok',stk=kind==='stk';el.className='c proc '+kind;
 // each phone gets its own copy of the hourglass with unique ids
 const hg=HG.replace(/(sandTop|sandBottom|badgeShadow|badgeGrad)/g,'$1_'+kind);
 const kgl=KG.replace(/(glowBlur|glowFill)/g,'$1_'+kind),kgn=KGN.replace(/(glowBlurN|glowFillN)/g,'$1_'+kind);
 el.innerHTML=`<div class="sb"><span>08:11</span><span>●●●</span></div><div class="kglow kg-n" aria-hidden="true">${kgn}</div><div class="kglow kg-y" aria-hidden="true">${kgl}</div><div class="glow"></div><div class="bgl"></div><div class="back" aria-hidden="true">${BACK}</div>
 <div class="grp"><div class="ico"><div class="gl"><svg viewBox="0 0 200 200"><defs><radialGradient id="gls_${kind}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000"/><stop offset=".6" stop-color="#000"/><stop offset=".82" stop-color="#0f0f10"/><stop offset=".96" stop-color="#242427"/><stop offset="1" stop-color="#0b0b0c"/></radialGradient><linearGradient id="spc_${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><circle cx="100" cy="100" r="82" fill="url(#gls_${kind})"/><circle cx="100" cy="100" r="81.5" fill="none" stroke="rgba(255,255,255,.07)"/><path d="M38 70 A68 68 0 0 1 92 30" fill="none" stroke="url(#spc_${kind})" stroke-width="6" stroke-linecap="round" opacity=".7"/></svg><svg viewBox="0 0 200 200" class="rs"><defs><linearGradient id="rgg_${kind}" gradientUnits="userSpaceOnUse" x1="0" y1="6" x2="0" y2="194"><stop offset="0" stop-color="#7E7E84"/><stop offset=".5" stop-color="#C8C8CC"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs><path class="rp" d="" fill="none" stroke="url(#rgg_${kind})" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg><svg viewBox="0 0 200 200" class="dp"><defs><filter id="goo_${kind}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2"/><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"/></filter><clipPath id="pool_${kind}"><circle cx="100" cy="100" r="82"/></clipPath></defs><circle class="rip" cx="100" cy="100" r="0" fill="none" stroke="rgba(235,235,240,.6)" stroke-width="1"/><g class="gg" filter="url(#goo_${kind})" fill="#F2F2F2" clip-path="url(#pool_${kind})"><path class="nk" d=""/><ellipse class="hd" cx="100" cy="100" rx="11" ry="11"/></g></svg></div><svg class="orb" viewBox="0 0 84 84" aria-hidden="true"><defs><linearGradient id="orbg_${kind}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E8E8E8" stop-opacity="0"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs><circle cx="41.6" cy="41.6" r="37" fill="none" stroke="rgba(232,232,232,.10)" stroke-width="1.5"/><circle class="arc2" cx="41.6" cy="41.6" r="37" fill="none" stroke="url(#orbg_${kind})" stroke-width="2" stroke-linecap="round" stroke-dasharray="70 163"/></svg><span class="ring"></span><span class="ring r2"></span>${hg}${stk?'<span class="burst"></span>':`<span class="burst"></span>${ok?OK_ICON:BAD_ICON}`}</div>
 <p class="t t1">Buy TSLA</p><p class="t t2">${TITLES[0]}</p><div class="div"></div><div class="pb" aria-hidden="true"><i></i></div><p class="t t3">It will take less than a minute</p>
 ${stk?`<p class="note">This may take up to 2 minutes</p><ol class="stp" aria-label="Order status"><li class="sp done"><span class="dot"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.2L4.1 7.2L8 3" stroke="#392A00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="lbl">Placed</span></li><li class="sp cur"><span class="dot"></span><span class="lbl">Processing</span></li><li class="sp"><span class="dot"></span><span class="lbl">Completed</span></li></ol>`:''}</div>
 ${stk?'':'<div class="sheet"><div class="h"></div><div class="card"></div><div class="row"></div></div>'}<div class="cta l3-btn" data-variant="primary" data-size="lg">View Position</div>`;}

// ---------- glass-ring loader engine (same motion as the standalone glass-ring artifact) ----------
const GLC=4400,GR=92,GCORE=82,GPD=700,GAX=[Math.SQRT1_2,-Math.SQRT1_2,0],GCI=2*Math.PI*GR,GX=100,GY=100,GF=182,GD=11;
const gcl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),gsg=(t,a,b)=>gcl((t-a)/(b-a));
const gio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,geo=x=>1-Math.pow(1-x,3),gsio=x=>-(Math.cos(Math.PI*x)-1)/2;
function gRing(el,L,deg){L=gcl(L,0,GCI);const span=L/GR,th=deg*Math.PI/180,c=Math.cos(th),s=Math.sin(th),[ux,uy,uz]=GAX;
 const N=Math.max(2,Math.ceil(span/(Math.PI*2)*160));let d='',pen=false;
 for(let i=0;i<=N;i++){const f=Math.PI/2-span/2+span*i/N,px=GR*Math.cos(f),py=GR*Math.sin(f),dot=ux*px+uy*py;
  const x=px*c+(-uz*py)*s+ux*dot*(1-c),y=py*c+(uz*px)*s+uy*dot*(1-c),z=(ux*py-uy*px)*s+uz*dot*(1-c);
  const k=GPD/(GPD-z),X=x*k,Y=y*k;if(z<-.5&&Math.hypot(X,Y)<GCORE+2){pen=false;continue;}
  d+=(pen?'L':'M')+(GX+X).toFixed(1)+','+(GY+Y).toFixed(1);pen=true;}
 el.setAttribute('d',d);}
function glFrame(E,t){
 let rot=0,L=GCI,op=1;
 if(t<.4){}else if(t<2.25){rot=360*gsio(gsg(t,.4,2.1));op=1-gsio(gsg(t,1.25,2.1));}
 else if(t<2.45){L=0;op=0;}else{L=GCI*gio(gsg(t,2.45,3.05));}
 gRing(E.rp,L,rot%360);E.rs.style.opacity=op;
 let hy=GY,rx=GD,ry=GD,nk='',tl='';
 const rp=gsg(t,.75,1.35);E.rip.setAttribute('r',rp>0&&rp<1?8+30*geo(rp):0);E.rip.setAttribute('opacity',(1-rp)*.9);
 if(t<1.4){}
 else if(t<2.3){const k=gsg(t,1.35,2.2);hy=GY+(GF+GD+2-GY)*k*k*k;ry=GD*(1+.18*Math.sin(Math.PI*k));rx=GD*(1-.1*Math.sin(Math.PI*k));}
 else if(t<3.05){rx=ry=0;}
 else if(t<4.25){const u=gsg(t,3.05,4.25);hy=(GF+GD)-((GF+GD)-GY)*gsio(gsg(u,0,.82));
  if(u<.56){const k=gsg(u,.08,.56),bw=30-12*k,ww=GD*.78*(1-Math.pow(gsio(gsg(k,.35,1)),1.2)),wy=GF-6-(GF-6-hy)*.42,lift=Math.min(16,(GF-hy)*.45);
   nk=`M${GX-bw},${GF+8} C${GX-bw*.45},${GF+6} ${GX-ww-2},${GF-lift} ${GX-ww},${wy} C${GX-ww},${wy-8} ${GX-GD*.85},${hy+GD*.9} ${GX-GD*.6},${hy} L${GX+GD*.6},${hy} C${GX+GD*.85},${hy+GD*.9} ${GX+ww},${wy-8} ${GX+ww},${wy} C${GX+ww+2},${GF-lift} ${GX+bw*.45},${GF+6} ${GX+bw},${GF+8} Z`;}
  else{const k=gsg(u,.56,.84),len=(1-geo(k))*(GF-hy)*.38;
   if(k<1){const wt=GD*.55*(1-k*.6);tl=`M${GX-wt},${hy} Q${GX-wt*.5},${hy+GD+len*.5} ${GX},${hy+GD+len} Q${GX+wt*.5},${hy+GD+len*.5} ${GX+wt},${hy} Z`;}
   const r=gsg(u,.56,1),bob=10*Math.exp(-6*r)*Math.cos(14*r);if(bob>.5)nk=`M${GX-14},${GF+8} Q${GX},${GF+8-bob*2} ${GX+14},${GF+8} Z`;
   const sq=Math.exp(-5*r)*Math.sin(16*r);ry=GD*(1+.22*sq);rx=GD*(1-.16*sq);}
  if(u>.82){const k=gsg(u,.82,1);hy=GY-2*Math.sin(Math.PI*k)*(1-k);}}
 E.hd.setAttribute('cy',hy);E.hd.setAttribute('rx',Math.max(0,rx));E.hd.setAttribute('ry',Math.max(0,ry));E.nk.setAttribute('d',nk+tl);}
const GLS={};   // id → {E,t0}
function glStart(id,el){const q=s=>el.querySelector('.gl '+s);GLS[id]={E:{rp:q('.rp'),rs:q('.rs'),rip:q('.rip'),hd:q('.hd'),nk:q('.nk')},t0:performance.now()};}
(function glLoop(now){for(const id in GLS){const g=GLS[id];if(g.frozen)continue;glFrame(g.E,((now-g.t0)%GLC)/1000);}requestAnimationFrame(glLoop);})(performance.now());

 const T=[];const clr=()=>{T.forEach(clearTimeout);T.length=0;};
 function run(last,kind,onHand){clr();const dv=document.getElementById('device');let w=document.getElementById('groW');if(w)w.remove();
  w=document.createElement('div');w.id='groW';w.setAttribute('role','status');w.setAttribute('aria-live','polite');w.innerHTML='<div class="c"></div>';dv.appendChild(w);
  const el=w.firstChild;build(el,kind);void el.offsetWidth;const q=s=>el.querySelector(s);const at=(ms,f)=>T.push(setTimeout(f,ms));
  q('.t1').textContent=`${last.side} ${last.tk}`;
  const hg=q('.hg');try{hg.setCurrentTime(0);hg.unpauseAnimations();}catch(e){}glStart('app',el);
  {const b=q('.pb i'),dur=kind==='stk'?STEP*TITLES.length:4300;requestAnimationFrame(()=>requestAnimationFrame(()=>{b.style.transition=`width ${dur}ms cubic-bezier(.22,.61,.36,1),background .5s ease,box-shadow .5s ease`;b.style.width=kind==='stk'?'78%':'86%';}));}
  const title=(ms,t)=>at(ms,()=>{const h=q('.t2');h.classList.add('out');at(350,()=>{h.textContent=t;h.classList.remove('out');});});
  const finish=()=>{w.classList.add('out');at(420,()=>{w.remove();delete GLS.app;});};
  if(kind==='stk'){TITLES.slice(1).forEach((t,i)=>title(STEP*(i+1),t));const fin=STEP*TITLES.length;
   at(fin-1200,()=>{const b=q('.pb i');b.style.transition='width .5s cubic-bezier(.32,.72,0,1)';b.style.width='100%';});
   at(fin-650,()=>el.classList.add('tintY'));at(fin,()=>{el.classList.add('swp');at(450,()=>{q('.t2').textContent='Order is being processed';el.classList.add('fin');at(700,()=>{try{hg.pauseAnimations();hg.setCurrentTime(0);}catch(e){}});el.classList.remove('swp');});});
   q('.cta').addEventListener('click',()=>{onHand('ok');finish();});return;}
  const ok=kind==='ok',R=4300;
  at(R,()=>{const b=q('.pb i');b.style.transition='width .5s cubic-bezier(.32,.72,0,1)';b.style.width='100%';});
  at(R+550,()=>{el.classList.add('s2');try{hg.pauseAnimations();}catch(e){}});
  at(R+800,()=>{el.classList.remove('proc');el.classList.add('s3');['.t1','.t2','.t3'].forEach(s=>q(s).style.opacity=0);
   at(180,()=>{q('.t1').textContent=`${last.side} ${last.tk}`;q('.t2').textContent=ok?'Order Placed':'Order Failed';q('.t3').textContent=ok?(last.amt?'Investment Amount: ₹'+last.amt:'Order placed successfully'):'Something went wrong. Please try again later';['.t1','.t2','.t3'].forEach(s=>q(s).style.opacity=1);});});
  at(R+1600,()=>el.classList.add('end'));                       // summary rises to its place (same spot as the real screen)
  at(R+2250,()=>{onHand(kind);finish();});}                     // real screen takes over: its sheet + cards rise in
 return {run};})();

/* ===== Home · ETF versions — E1 Index ETFs (chips + cards) · E2 Global ETF (Figma 10255:36587, waving country flags) ===== */
setTimeout(()=>{const lay=document.querySelector('#s01 .layer');const E1=window.ETF1;if(!lay||!E1)return;
 const USF='prototype/assets/182bb0ed49.webp';   /* the waving US flag (from the supplied GIF), 300px animated WebP */
 const LOGO='prototype/assets/31bfce7007.png';
 const DATA={'US Market':[['Invesco QQQ','NASDAQ',512.40,0.92],['SPDR S&P 500 ETF','NYSE Arca',585.30,0.48],['SPDR Dow Jones Ind.','NYSE Arca',428.60,-0.21]],
  'Japan':[['iShares MSCI Japan','NYSE Arca',71.20,0.64],['Franklin FTSE Japan','NYSE Arca',31.85,0.58],['WisdomTree Japan Hedged','NYSE Arca',114.10,1.12]],
  'Taiwan':[['iShares MSCI Taiwan','NYSE Arca',56.40,1.35],['Franklin FTSE Taiwan','NYSE Arca',49.70,1.21],['iShares MSCI EM Asia','NASDAQ',78.15,0.86]],
  'China':[['iShares China Large-Cap','NYSE Arca',32.90,-0.74],['KraneShares China Internet','NYSE Arca',30.45,-1.18],['iShares MSCI China','NASDAQ',51.20,-0.52]]};
 const BLOOM={'US Market':['#3b6bff','#e3263e'],'Japan':['#9a9a9a','#bc002d'],'Taiwan':['#2340c8','#fe0000'],'China':['#ffde00','#ee1c25']};
 const W=['US Market','Japan','Taiwan','China'],PW=[85,69,69,69];
 const spark=(seed,up)=>{let y=10,d='M0 '+y;const pts=[];for(let i=1;i<=26;i++){const r=Math.sin(seed*13.7+i*2.3)*0.5+Math.sin(seed*3.1+i*.7)*0.5;y=Math.max(2,Math.min(18,y+(up?-0.32:0.32)+r*1.8));pts.push([i*3,y]);}d+=pts.map(p=>' L'+p[0]+' '+p[1].toFixed(1)).join('');
  const c=up?'#0F9958':'#E5484D';return `<svg viewBox="0 0 79 20" width="79" height="20" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="sg${seed}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${c}" stop-opacity=".35"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient></defs><path d="${d} L78 20 L0 20Z" fill="url(#sg${seed})"/><path d="${d}" fill="none" stroke="${c}" stroke-width="1.3" stroke-linejoin="round"/></svg>`;};
 const box=document.createElement('div');box.className='getf';box.style.cssText=`left:0;top:${E1.Y-10}px;width:360px;height:292px`;   /* more air above the section; the flag rises into it */   /* a little more air above for the flag */
 box.innerHTML=`<div class="gfg"><span class="gb gb1"></span><span class="gb gb2"></span><div class="fm fm1"><img class="fu" src="${USF}" alt=""></div><div class="fm fm2"><img class="fu" src="${USF}" alt=""><canvas class="gflag" width="282" height="286"></canvas></div><span class="gk"></span><span class="gh"></span><span class="gbt"></span></div>
  <p class="gt">Global ETF</p>
  <div class="gp">${W.map((n,i)=>`<button data-gw="${n}" style="width:${PW[i]}px" aria-pressed="${i===0}">${n}</button>`).join('')}</div><div class="grows"></div>`;
 lay.appendChild(box);
 const rows=box.querySelector('.grows');
 function fill(n){rows.innerHTML=DATA[n].map(([nm,ex,p,c],i)=>`<button class="grow" data-to="s12" aria-label="Open ${nm}"><img src="${LOGO}" alt="" width="24" height="24"><span class="gn"><b>${nm}</b><small>${ex}</small></span>${spark(i+W.indexOf(n)*3+1,c>=0)}<span class="gv"><b>$${p.toFixed(2)}</b><small class="${c>=0?'up':'dn'}">${c>=0?'+':''}${c.toFixed(2)}%</small></span></button>`).join('');
  const [a,b]=BLOOM[n];box.style.setProperty('--b1',a);box.style.setProperty('--b2',b);FLAG=n;box.classList.toggle('us',n==='US Market');}
 box.querySelector('.gp').addEventListener('click',e=>{const b=e.target.closest('[data-gw]');if(!b)return;e.stopPropagation();box.querySelectorAll('[data-gw]').forEach(x=>x.setAttribute('aria-pressed',x===b));fill(b.dataset.gw);});
 /* ---- waving flags: each flag is drawn flat, then rendered as cloth (pinned at the hoist, travelling sine wave + light/shade) ---- */
 let FLAG='US Market';const FW=150,FH=100;const src={};
 const star=(g,cx,cy,r,rot=0)=>{g.beginPath();for(let k=0;k<10;k++){const a=rot-Math.PI/2+k*Math.PI/5,rr=k%2?r*.4:r;g.lineTo(cx+rr*Math.cos(a),cy+rr*Math.sin(a));}g.closePath();g.fill();};
 const draw={ 'US Market':g=>{for(let i=0;i<13;i++){g.fillStyle=i%2?'#fff':'#B22234';g.fillRect(0,i*FH/13,FW,FH/13+.5);}g.fillStyle='#3C3B6E';g.fillRect(0,0,FW*.4,FH*7/13);g.fillStyle='#fff';for(let r=0;r<9;r++)for(let c=0;c<(r%2?5:6);c++)star(g,(c+(r%2?1:.5))*FW*.4/6,(r+.6)*FH*7/13/9.4,2.2);},
  'Japan':g=>{g.fillStyle='#fff';g.fillRect(0,0,FW,FH);g.fillStyle='#BC002D';g.beginPath();g.arc(FW/2,FH/2,FH*.3,0,7);g.fill();},
  'Taiwan':g=>{g.fillStyle='#FE0000';g.fillRect(0,0,FW,FH);g.fillStyle='#000095';g.fillRect(0,0,FW/2,FH/2);g.fillStyle='#fff';const cx=FW/4,cy=FH/4;for(let k=0;k<12;k++){const a=k*Math.PI/6;g.beginPath();g.moveTo(cx+Math.cos(a)*17,cy+Math.sin(a)*17);g.lineTo(cx+Math.cos(a+.26)*9,cy+Math.sin(a+.26)*9);g.lineTo(cx+Math.cos(a-.26)*9,cy+Math.sin(a-.26)*9);g.fill();}g.beginPath();g.arc(cx,cy,9,0,7);g.fill();g.fillStyle='#000095';g.beginPath();g.arc(cx,cy,7.6,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(cx,cy,6.6,0,7);g.fill();},
  'China':g=>{g.fillStyle='#EE1C25';g.fillRect(0,0,FW,FH);g.fillStyle='#FFDE00';star(g,FW*.17,FH*.27,FH*.15);[[.33,.1],[.4,.2],[.4,.35],[.33,.45]].forEach(([x,y],i)=>star(g,FW*x,FH*y,FH*.05,i*.5));}};
 W.forEach(n=>{const c=document.createElement('canvas');c.width=FW;c.height=FH;draw[n](c.getContext('2d'));src[n]=c;});
 const cv=box.querySelector('.gflag'),g=cv.getContext('2d');let t0=performance.now();
 function frame(now){if(!box.isConnected)return;requestAnimationFrame(frame);if(box.offsetParent===null||FLAG==='US Market')return;
  const t=(now-t0)/1000,S=src[FLAG];g.clearRect(0,0,cv.width,cv.height);g.save();g.translate(44,44);g.rotate(.07);g.scale(1.38,1.38);
  for(let x=0;x<FW;x+=1.5){const k=x/FW,ph=x*.058-t*3.1,sl=Math.cos(ph);
   const sh=1-.2*k,h=FH*sh,dy=Math.sin(ph)*11*k+Math.sin(ph*.55+1.3)*4*k+k*k*24+(FH-h)/2;
   g.drawImage(S,x,0,1.5,FH,x,dy,2,h);
   if(sl>0){g.fillStyle=`rgba(255,255,255,${(Math.pow(sl,3)*.42*k+.04).toFixed(3)})`;}else{g.fillStyle=`rgba(0,0,0,${(-sl*.5*k).toFixed(3)})`;}
   g.fillRect(x,dy,2,h);}
  const lg=g.createLinearGradient(0,0,0,FH);lg.addColorStop(0,'rgba(255,255,255,.10)');lg.addColorStop(.5,'rgba(255,255,255,0)');lg.addColorStop(1,'rgba(0,0,0,.18)');g.globalCompositeOperation='source-atop';g.fillStyle=lg;g.fillRect(0,-10,FW,FH+40);g.globalCompositeOperation='source-over';
  g.restore();}
 requestAnimationFrame(frame);
 /* version switch: E2 replaces the E1 block and pushes the sections below by the extra height */
 /* E3 · Global ETF V2 (Figma 10270:36694): scrolling country cards */
 const E3D=[['UNITED STATES','#122340',`<svg viewBox="0 0 24 24" width="24" height="24"><defs><clipPath id="cfus"><circle cx="12" cy="12" r="12"/></clipPath></defs><g clip-path="url(#cfus)"><path d="M0 12L12 0H24V2.61L23.03 4.23L24 5.74V8.87L23.01 10.4L24 12V15.13L22.88 16.62L24 18.26V21.39L11.85 22.72L0 21.39V18.26L1.27 16.7L0 15.13V12Z" fill="#EEEEEE"/><path d="M12 12H24V8.87H11.1L12 12ZM11.1 5.74H24V2.61H11.1V5.74ZM24 24V21.39H0V24H24ZM0 18.26H24V15.13H0V18.26Z" fill="#D80027"/><path d="M0 0H12V12H0V0Z" fill="#0052B4"/><g fill="#EEE">${[[0.7,2.2],[5,2.2],[9.3,2.2],[0.7,5.7],[5,5.7],[9.3,5.7],[0.7,9.2],[5,9.2],[9.3,9.2]].map(([x,y])=>`<circle cx="${x+.6}" cy="${y}" r=".9"/>`).join('')}</g></g></svg>`,'Invesco QQQ Trust','NASDAQ',0.92,512.40],['JAPAN','#3f2225',`<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="12" fill="#EEEEEE"/><circle cx="12" cy="12" r="5.22" fill="#D80027"/></svg>`,'iShares MSCI Japan','NYSE Arca',0.64,71.20],['TAIWAN','#1a2147',`<svg viewBox="0 0 24 24" width="24" height="24"><defs><clipPath id="cftw"><circle cx="12" cy="12" r="12"/></clipPath></defs><g clip-path="url(#cftw)"><rect width="24" height="24" fill="#D80027"/><rect width="13" height="13" fill="#0052B4"/><circle cx="6.5" cy="6.5" r="3.4" fill="#EEE"/><circle cx="6.5" cy="6.5" r="2.4" fill="#0052B4"/><circle cx="6.5" cy="6.5" r="1.9" fill="#EEE"/></g></svg>`,'iShares MSCI Taiwan','NYSE Arca',1.35,56.40],['CHINA','#3f2a17',`<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="12" fill="#D80027"/><g fill="#FFDA44"><path d="M7.4 5.2l.95 2.9h3.05l-2.47 1.8.95 2.9L7.4 11l-2.48 1.8.95-2.9L3.4 8.1h3.05z"/><circle cx="13.6" cy="5" r=".9"/><circle cx="15.6" cy="7.6" r=".9"/><circle cx="15.6" cy="10.8" r=".9"/><circle cx="13.6" cy="13.2" r=".9"/></g></svg>`,'iShares China Large-Cap','NYSE Arca',-0.74,32.90]];
 const box3=document.createElement('div');box3.className='getf3';box3.style.cssText=`left:0;top:${E1.Y-16}px;width:360px;height:179px;display:none`;
 box3.innerHTML=`<p class="g3t">Global ETF</p><div class="g3row">${E3D.map(([c,tint,flag,nm,ex,r,px])=>`<button class="g3c" data-to="s12" aria-label="Open ${nm}" style="--tint:${tint}"><span class="g3fl"><i class="bl">${flag}</i><i>${flag}</i></span><span class="g3cn">${c}</span><span class="g3nm">${nm}</span><span class="g3px">$${px.toFixed(2)}</span><span class="g3ex">${ex}</span><span class="g3r ${r>=0?'up':'dn'}">${r>=0?'+':''}${r.toFixed(2)}%</span></button>`).join('')}<i class="g3end"></i></div>`;
 lay.appendChild(box3);

 /* ===== E4 · Global ETF theme cards (Figma 10476:91685) — art is animated: waving flags, a pulsing chip, a glinting tower, a turning globe ===== */
 const JPF='prototype/assets/66f3d2141f.webp';const L4=['prototype/assets/31bfce7007.png','prototype/assets/557ada4cd5.png','prototype/assets/857611cbc9.png','prototype/assets/30d7e1befb.png','prototype/assets/43859fb135.png'];
 const P3='prototype/assets/b053ea8344.jpg';const P4='prototype/assets/4515354f39.jpg';const P5='prototype/assets/28adfa94aa.jpg';   /* Figma export frames 3–5 (10482:158935–7) */
 const ART={
  us:`<img class="a4img us" src="prototype/assets/c2a7244e2c.jpg" alt="">`,   /* static Figma asset 1 (10482:158933); waving GIF version: USF */
  jp:`<img class="a4img jp" src="prototype/assets/a2d2a3ecb3.jpg" alt="">`,   /* static Figma asset 2 (10482:158934) */
  chip:`<img class="a4img chip" src="${P3}" alt="">`,
  ndx:`<img class="a4img ndx" src="${P4}" alt="">`,
  world:`<img class="a4img world" src="${P5}" alt="">`};
 /* E4 card backgrounds rebuilt as SVG from Figma 10476:91685 geometry: #101110 fill, gradient stroke, blurred colour blobs, flag GIFs under their gradient masks (waving), black blooms */
 const BG4=[[`<svg class="g4bg" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><defs><linearGradient id="c0s" gradientUnits="userSpaceOnUse" x1="158.68" y1="-8.83" x2="137.79" y2="140.80"><stop offset="0" stop-color="#b94040" stop-opacity="1"/><stop offset="0.47" stop-color="#14346b" stop-opacity="0.4"/><stop offset="1" stop-color="#1c1f1e" stop-opacity="1"/></linearGradient><filter id="c0b66" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="33.25"/></filter><filter id="c0b18" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9.32"/></filter><filter id="c0b4" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2"/></filter><linearGradient id="c0g1" gradientUnits="userSpaceOnUse" x1="257.69" y1="-0.81" x2="236.95" y2="66.20"><stop offset="0.089" stop-color="#fff" stop-opacity="1"/><stop offset="0.295" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="c0m1" maskUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200"><rect x="211.11" y="-17.51" width="83.52" height="87.45" fill="url(#c0g1)"/></mask><clipPath id="c0k2"><rect width="74.62" height="78.14"/></clipPath><linearGradient id="c0g3" gradientUnits="userSpaceOnUse" x1="251.92" y1="-5.70" x2="236.96" y2="66.18"><stop offset="0.206" stop-color="#fff" stop-opacity="1"/><stop offset="0.652" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="c0m3" maskUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200"><rect x="211.11" y="-17.51" width="83.52" height="87.45" fill="url(#c0g3)"/></mask><clipPath id="c0k4"><rect width="74.62" height="78.14"/></clipPath></defs><rect width="282" height="148" fill="#101110"/><ellipse transform="matrix(0.956,0.294,-0.294,0.956,252.014,7)" cx="27.97" cy="18.74" rx="27.97" ry="18.74" fill="#e3263e" fill-opacity="0.85" filter="url(#c0b18)"/><ellipse transform="matrix(0.921,0.39,-0.39,0.921,219.334,-6.379)" cx="21.08" cy="18.39" rx="21.08" ry="18.39" fill="#3b6bff" fill-opacity="0.9" filter="url(#c0b18)"/><g opacity="0.2" filter="url(#c0b4)"><g mask="url(#c0m1)"><g transform="matrix(0.931,-0.365,0.365,0.931,201.299,1.509)" clip-path="url(#c0k2)"><image href="${USF}" x="-14.37" y="-2.25" width="111.38" height="86.53" preserveAspectRatio="none"/></g></g></g><g mask="url(#c0m3)"><g transform="matrix(0.931,-0.365,0.365,0.931,201.299,1.509)" clip-path="url(#c0k4)"><image href="${USF}" x="-14.37" y="-2.25" width="111.38" height="86.53" preserveAspectRatio="none"/></g></g><ellipse transform="matrix(0.921,0.39,-0.39,0.921,206.253,-35)" cx="21.08" cy="36.18" rx="21.08" ry="36.18" fill="#000000" filter="url(#c0b18)"/><path transform="matrix(0.912,0.41,-0.41,0.912,142.532,42.037)" d="M 0.69 94 C -5.24 88.74 28.51 53.29 46.7 46.85 C 64.89 40.41 72.72 28.07 74.36 22.71 C 82.06 13.8 101.87 -3.11 119.45 0.5 C 137.03 4.1 123.49 53.29 114.52 77.43 L 0.69 94 Z" fill="#000817" filter="url(#c0b66)"/><path transform="matrix(0.912,0.41,-0.41,0.912,265.968,39.517)" d="M 5.98 142.23 C 0.61 131.65 -6.02 107.25 10.43 94.29 C 26.89 81.33 33.98 56.5 35.46 45.7 C 42.43 27.78 60.35 -6.26 76.26 1 C 92.17 8.26 79.92 107.25 71.8 155.83 L 5.98 142.23 Z" fill="#06255a" filter="url(#c0b66)"/></svg>`,`<svg class="g4bg g4top" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><path transform="matrix(0.404,0.915,-0.915,0.404,43.248,-110.96)" d="M 5.91 99.48 C 0.6 92.08 -5.95 75.01 10.31 65.95 C 26.57 56.89 33.57 39.52 35.04 31.97 C 41.93 19.43 59.63 -4.38 75.35 0.7 C 91.07 5.77 78.96 75.01 70.95 109 L 5.91 99.48 Z" fill="#d83a3a" filter="url(#c0b66)"/><rect x=".5" y=".5" width="281" height="147" rx="11.5" fill="none" stroke="url(#c0s)"/></svg>`],[`<svg class="g4bg" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><defs><linearGradient id="c1s" gradientUnits="userSpaceOnUse" x1="168.96" y1="-86.23" x2="91.42" y2="170.20"><stop offset="0" stop-color="#292c2b" stop-opacity="1"/><stop offset="0.14" stop-color="#e8e8e8" stop-opacity="0.2"/><stop offset="0.61" stop-color="#1c1f1e" stop-opacity="1"/></linearGradient><filter id="c1b66" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="33.25"/></filter><filter id="c1b18" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9.32"/></filter><filter id="c1b4" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2"/></filter><linearGradient id="c1g1" gradientUnits="userSpaceOnUse" x1="258.02" y1="1.19" x2="236.10" y2="72.04"><stop offset="0.089" stop-color="#fff" stop-opacity="1"/><stop offset="0.295" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="c1m1" maskUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200"><rect x="208.77" y="-16.46" width="88.3" height="92.46" fill="url(#c1g1)"/></mask><clipPath id="c1k2"><rect width="78.89" height="82.61"/></clipPath><linearGradient id="c1g3" gradientUnits="userSpaceOnUse" x1="251.92" y1="-3.98" x2="236.10" y2="72.02"><stop offset="0.206" stop-color="#fff" stop-opacity="1"/><stop offset="0.652" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="c1m3" maskUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200"><rect x="208.77" y="-16.46" width="88.3" height="92.46" fill="url(#c1g3)"/></mask><clipPath id="c1k4"><rect width="94.36" height="68.63"/></clipPath></defs><rect width="282" height="148" fill="#101110"/><ellipse transform="matrix(0.956,0.294,-0.294,0.956,252.019,9.451)" cx="29.57" cy="19.81" rx="29.57" ry="19.81" fill="#000000" filter="url(#c1b18)"/><ellipse transform="matrix(0.921,0.39,-0.39,0.921,216.443,4.888)" cx="22.29" cy="19.44" rx="22.29" ry="19.44" fill="#000000" filter="url(#c1b18)"/><g opacity="0.2" filter="url(#c1b4)"><g mask="url(#c1m1)"><g transform="matrix(0.931,-0.365,0.365,0.931,198.403,3.646)" clip-path="url(#c1k2)"><image href="${USF}" x="-15.19" y="-2.38" width="117.75" height="91.48" preserveAspectRatio="none"/></g></g></g><g mask="url(#c1m3)" transform="matrix(1.25,0,0,1.25,-62.07,-8.64)"><g transform="matrix(0.97,-0.242,0.242,0.97,194.182,12.682)" clip-path="url(#c1k4)"><image href="${JPF}" x="0.00" y="0.00" width="94.36" height="68.63" preserveAspectRatio="none"/></g></g><ellipse transform="matrix(0.921,0.39,-0.39,0.921,207.869,-30)" cx="22.29" cy="38.25" rx="22.29" ry="38.25" fill="#000000" filter="url(#c1b18)"/><path transform="matrix(0.912,0.41,-0.41,0.912,142.532,47.037)" d="M 0.69 94 C -5.24 88.74 28.51 53.29 46.7 46.85 C 64.89 40.41 72.72 28.07 74.36 22.71 C 82.06 13.8 101.87 -3.11 119.45 0.5 C 137.03 4.1 123.49 53.29 114.52 77.43 L 0.69 94 Z" fill="#000000" filter="url(#c1b66)"/><path transform="matrix(0.912,0.41,-0.41,0.912,285.968,44.517)" d="M 5.98 142.23 C 0.61 131.65 -6.02 107.25 10.43 94.29 C 26.89 81.33 33.98 56.5 35.46 45.7 C 42.43 27.78 60.35 -6.26 76.26 1 C 92.17 8.26 79.92 107.25 71.8 155.83 L 5.98 142.23 Z" fill="#454947" filter="url(#c1b66)"/></svg>`,`<svg class="g4bg g4top" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><path transform="matrix(0.404,0.915,-0.915,0.404,43.248,-105.96)" d="M 5.91 99.48 C 0.6 92.08 -5.95 75.01 10.31 65.95 C 26.57 56.89 33.57 39.52 35.04 31.97 C 41.93 19.43 59.63 -4.38 75.35 0.7 C 91.07 5.77 78.96 75.01 70.95 109 L 5.91 99.48 Z" fill="#454947" filter="url(#c1b66)"/><rect x=".5" y=".5" width="281" height="147" rx="11.5" fill="none" stroke="url(#c1s)"/></svg>`],[`<svg class="g4bg" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><defs><linearGradient id="c2s" gradientUnits="userSpaceOnUse" x1="168.96" y1="-86.23" x2="91.42" y2="170.20"><stop offset="0" stop-color="#256fef" stop-opacity="1"/><stop offset="0.47" stop-color="#122340" stop-opacity="1"/><stop offset="1" stop-color="#1c1f1e" stop-opacity="1"/></linearGradient><filter id="c2b66" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="33.25"/></filter><filter id="c2b18" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9.32"/></filter><filter id="c2b4" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2"/></filter><linearGradient id="c2fx" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".1" stop-color="#fff"/></linearGradient><linearGradient id="c2fy" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff"/></linearGradient><mask id="c2pm" maskUnits="userSpaceOnUse" x="163" y="-18" width="125" height="100"><rect x="163" y="-18" width="125" height="100" fill="url(#c2fx)"/></mask><mask id="c2pn" maskUnits="userSpaceOnUse" x="163" y="-18" width="125" height="100"><rect x="163" y="-18" width="124" height="99" fill="url(#c2fy)"/></mask></defs><rect width="282" height="148" fill="#101110"/><g mask="url(#c2pm)" style="mix-blend-mode:lighten"><g mask="url(#c2pn)"><image href="${P3}" x="163" y="-18" width="125" height="100" preserveAspectRatio="none"/></g></g><path transform="matrix(0.912,0.41,-0.41,0.912,142.532,43.037)" d="M 0.69 94 C -5.24 88.74 28.51 53.29 46.7 46.85 C 64.89 40.41 72.72 28.07 74.36 22.71 C 82.06 13.8 101.87 -3.11 119.45 0.5 C 137.03 4.1 123.49 53.29 114.52 77.43 L 0.69 94 Z" fill="#000000" filter="url(#c2b66)"/><path transform="matrix(0.912,0.41,-0.41,0.912,285.968,40.517)" d="M 5.98 142.23 C 0.61 131.65 -6.02 107.25 10.43 94.29 C 26.89 81.33 33.98 56.5 35.46 45.7 C 42.43 27.78 60.35 -6.26 76.26 1 C 92.17 8.26 79.92 107.25 71.8 155.83 L 5.98 142.23 Z" fill="#042d5b" filter="url(#c2b66)"/></svg>`,`<svg class="g4bg g4top" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><path transform="matrix(0.404,0.915,-0.915,0.404,43.248,-109.96)" d="M 5.91 99.48 C 0.6 92.08 -5.95 75.01 10.31 65.95 C 26.57 56.89 33.57 39.52 35.04 31.97 C 41.93 19.43 59.63 -4.38 75.35 0.7 C 91.07 5.77 78.96 75.01 70.95 109 L 5.91 99.48 Z" fill="#e8e8e8" fill-opacity="0.6"/><rect x=".5" y=".5" width="281" height="147" rx="11.5" fill="none" stroke="url(#c2s)"/></svg>`],[`<svg class="g4bg" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><defs><linearGradient id="c3s" gradientUnits="userSpaceOnUse" x1="168.96" y1="-86.23" x2="91.42" y2="170.20"><stop offset="0" stop-color="#292c2b" stop-opacity="1"/><stop offset="0.47" stop-color="#e8e8e8" stop-opacity="0.2"/><stop offset="1" stop-color="#1c1f1e" stop-opacity="1"/></linearGradient><filter id="c3b66" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="33.25"/></filter><filter id="c3b18" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9.32"/></filter><filter id="c3b4" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2"/></filter><linearGradient id="c3fx" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".1" stop-color="#fff"/></linearGradient><linearGradient id="c3fy" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff"/></linearGradient><mask id="c3pm" maskUnits="userSpaceOnUse" x="163" y="-14" width="125" height="100"><rect x="163" y="-14" width="125" height="100" fill="url(#c3fx)"/></mask><mask id="c3pn" maskUnits="userSpaceOnUse" x="163" y="-14" width="125" height="100"><rect x="163" y="-14" width="124" height="99" fill="url(#c3fy)"/></mask></defs><rect width="282" height="148" fill="#101110"/><g mask="url(#c3pm)" style="mix-blend-mode:lighten"><g mask="url(#c3pn)"><image href="${P4}" x="163" y="-14" width="125" height="100" preserveAspectRatio="none"/></g></g><path transform="matrix(0.912,0.41,-0.41,0.912,142.532,47.037)" d="M 0.69 94 C -5.24 88.74 28.51 53.29 46.7 46.85 C 64.89 40.41 72.72 28.07 74.36 22.71 C 82.06 13.8 101.87 -3.11 119.45 0.5 C 137.03 4.1 123.49 53.29 114.52 77.43 L 0.69 94 Z" fill="#000000" filter="url(#c3b66)"/><path transform="matrix(0.912,0.41,-0.41,0.912,285.968,44.517)" d="M 5.98 142.23 C 0.61 131.65 -6.02 107.25 10.43 94.29 C 26.89 81.33 33.98 56.5 35.46 45.7 C 42.43 27.78 60.35 -6.26 76.26 1 C 92.17 8.26 79.92 107.25 71.8 155.83 L 5.98 142.23 Z" fill="#042d5b" filter="url(#c3b66)"/></svg>`,`<svg class="g4bg g4top" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><path transform="matrix(0.404,0.915,-0.915,0.404,43.248,-105.96)" d="M 5.91 99.48 C 0.6 92.08 -5.95 75.01 10.31 65.95 C 26.57 56.89 33.57 39.52 35.04 31.97 C 41.93 19.43 59.63 -4.38 75.35 0.7 C 91.07 5.77 78.96 75.01 70.95 109 L 5.91 99.48 Z" fill="#e8e8e8" fill-opacity="0.6"/><rect x=".5" y=".5" width="281" height="147" rx="11.5" fill="none" stroke="url(#c3s)"/></svg>`],[`<svg class="g4bg" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><defs><linearGradient id="c4s" gradientUnits="userSpaceOnUse" x1="158.68" y1="-8.83" x2="137.79" y2="140.80"><stop offset="0" stop-color="#b94040" stop-opacity="1"/><stop offset="0.47" stop-color="#14346b" stop-opacity="0.4"/><stop offset="1" stop-color="#1c1f1e" stop-opacity="1"/></linearGradient><filter id="c4b66" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="33.25"/></filter><filter id="c4b18" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9.32"/></filter><filter id="c4b4" filterUnits="userSpaceOnUse" x="-400" y="-400" width="1200" height="1200" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2"/></filter><linearGradient id="c4fx" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".1" stop-color="#fff"/></linearGradient><linearGradient id="c4fy" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff"/></linearGradient><mask id="c4pm" maskUnits="userSpaceOnUse" x="139" y="-36" width="152" height="137"><rect x="139" y="-36" width="152" height="137" fill="url(#c4fx)"/></mask><mask id="c4pn" maskUnits="userSpaceOnUse" x="139" y="-36" width="152" height="137"><rect x="139" y="-36" width="151" height="136" fill="url(#c4fy)"/></mask></defs><rect width="282" height="148" fill="#101110"/><g mask="url(#c4pm)" style="mix-blend-mode:lighten"><g mask="url(#c4pn)"><image href="${P5}" x="139" y="-36" width="152" height="137" preserveAspectRatio="none"/></g></g><path transform="matrix(0.912,0.41,-0.41,0.912,142.532,47.037)" d="M 0.69 94 C -5.24 88.74 28.51 53.29 46.7 46.85 C 64.89 40.41 72.72 28.07 74.36 22.71 C 82.06 13.8 101.87 -3.11 119.45 0.5 C 137.03 4.1 123.49 53.29 114.52 77.43 L 0.69 94 Z" fill="#000817" filter="url(#c4b66)"/><path transform="matrix(0.912,0.41,-0.41,0.912,265.968,44.517)" d="M 5.98 142.23 C 0.61 131.65 -6.02 107.25 10.43 94.29 C 26.89 81.33 33.98 56.5 35.46 45.7 C 42.43 27.78 60.35 -6.26 76.26 1 C 92.17 8.26 79.92 107.25 71.8 155.83 L 5.98 142.23 Z" fill="#a23f2e" fill-opacity="0.6" filter="url(#c4b66)"/></svg>`,`<svg class="g4bg g4top" width="282" height="148" viewBox="0 0 282 148" aria-hidden="true"><path transform="matrix(0.404,0.915,-0.915,0.404,43.248,-105.96)" d="M 5.91 99.48 C 0.6 92.08 -5.95 75.01 10.31 65.95 C 26.57 56.89 33.57 39.52 35.04 31.97 C 41.93 19.43 59.63 -4.38 75.35 0.7 C 91.07 5.77 78.96 75.01 70.95 109 L 5.91 99.48 Z" fill="#a23f2e" filter="url(#c4b66)"/><rect x=".5" y=".5" width="281" height="147" rx="11.5" fill="none" stroke="url(#c4s)"/></svg>`]];
 const E4D=[{t:'S&P 500 ETF',d:'Get exposure to 500 of America’s largest companies across every sector',a:'us',nm:'Invesco QQQ Trust...',full:'Invesco QQQ Trust, Series 1',tk:'QQQ',lg:0,tl:'#d83a3a',br:'#06255a'},
  {t:'International Equity ETF',d:'Companies across Japan, Europe, the UK and Canada at a very low cost.',a:'jp',nm:'Schwab International...',full:'Schwab International Equity ETF',tk:'SCHF',lg:1,tl:'#454947',br:'#454947'},
  {t:'3x Inverse Semiconductor ETF',d:'Profit when chip stocks fall: 3x inverse the move of the semiconductor index.',a:'chip',nm:'Direxion Daily Semi...',full:'Direxion Daily Semiconductor Bear 3X',tk:'SOXS',lg:2,tl:'#8a8f8c',br:'#042d5b'},
  {t:'3x Nasdaq 100 ETF',d:'3x the move of the Nasdaq-100, home to Apple, Nvidia and Microsoft.',a:'ndx',nm:'ProShares UltraPro...',full:'ProShares UltraPro QQQ',tk:'TQQQ',lg:3,tl:'#8a8f8c',br:'#042d5b'},
  {t:'World MSCI Index ETF',d:'Ex-USA index across Japan, Europe, Canada and emerging Asia.',a:'world',nm:'iShares Core MSCI...',full:'iShares Core MSCI Total Intl Stock ETF',tk:'IXUS',lg:4,tl:'#a23f2e',br:'#a23f2e'}];
 const box4=document.createElement('div');box4.className='getf4';box4.style.cssText=`left:0;top:${E1.Y+6}px;width:360px;height:182px;display:none`;
 box4.innerHTML=`<p class="g4t">Global ETF</p><div class="g4row">${E4D.map((c,i)=>`<button class="g4c" data-to="s12" data-theme="${c.t}" data-full="${c.full||''}" aria-label="Open ${c.nm.replace('...','')}" style="--tl:${c.tl};--br:${c.br};--d:${i*.12}s">${BG4[i][0]}<span class="g4de">${c.d}</span>${BG4[i][1]}<span class="g4ti">${c.t}</span><span class="g4rw"><img src="${L4[c.lg]}" alt=""><b>${c.nm}</b><small>${c.tk}</small><em>$26,019.03</em><i class="up">+8.15%</i></span></button>`).join('')}<i class="g3end"></i></div>`;
 lay.appendChild(box4);
 /* versions: each one occupies the ETF slot and moves the sections below by its own offset */
 const OFF={e1:0,e2:68,e3:-48,e4:216-E1.H};let ver='e1';
 /* the ETF slot is the first section: lift it above Start Trading and push everything from Start Trading down by the slot height */
 const ETFEL=[box,box3,box4,...E1.els];const tmH=[...lay.children].find(e=>e.tagName==='P'&&/^Top Movers$/.test(e.textContent.trim()));   /* ETF slot sits right after Start Trading */
 if(tmH){const Y0=parseFloat(tmH.style.top),up=E1.Y-Y0;
  if(up>0){[...lay.children].forEach(e=>{if(ETFEL.includes(e))return;const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=Y0-1&&t<E1.Y-1){e.style.top=(t+E1.H)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop+E1.H);}});
   ETFEL.forEach(e=>{const t=parseFloat(e.style.top);if(!isNaN(t))e.style.top=(t-up)+'px';});E1.Y=Y0;}}
 const below=[...lay.children].filter(e=>!ETFEL.includes(e)&&!isNaN(parseFloat(e.style.top))&&parseFloat(e.style.top)>=E1.Y+E1.H-1);
 function setVer(v){if(v===ver)return;const dy=OFF[v]-OFF[ver];ver=v;box.style.display=v==='e2'?'block':'none';box3.style.display=v==='e3'?'block':'none';box4.style.display=v==='e4'?'block':'none';E1.els.forEach(e=>e.style.display=v==='e1'?'':'none');
  below.forEach(e=>{e.style.top=(parseFloat(e.style.top)+dy)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop+dy);});if(lay.style.height)lay.style.height=(parseFloat(lay.style.height)+dy)+'px';}
 fill('US Market');setVer('e4');   /* E4 theme cards are the default */
 const ORDER=['e4','e2','e3','e1'];const cycle=e=>{e.stopPropagation();const nx=ORDER[(ORDER.indexOf(ver)+1)%ORDER.length];setVer(nx);document.querySelectorAll('[data-etfv]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.etfv===nx));};
 [box.querySelector('.gt'),box3.querySelector('.g3t'),box4.querySelector('.g4t'),E1.els[0]].forEach(h=>{if(!h)return;h.classList.add('etf-cyc');h.setAttribute('role','button');h.setAttribute('title','Tap to switch ETF version');h.addEventListener('click',cycle);});
 const cyo=document.getElementById('cyo');if(cyo){cyo.insertAdjacentHTML('beforeend',`<h2>ETF versions</h2><div class="hsw" id="etfv"><button data-etfv="e4" aria-pressed="true"><b>E4 · Global ETF (theme cards)</b></button><button data-etfv="e2" aria-pressed="false"><b>E2 · Global ETF (flags)</b></button><button data-etfv="e3" aria-pressed="false"><b>E3 · Global ETF V2 (country cards)</b></button><button data-etfv="e1" aria-pressed="false"><b>E1 · Index ETFs (chips + cards)</b></button></div>`);
  cyo.querySelector('#etfv').addEventListener('click',e=>{const b=e.target.closest('[data-etfv]');if(!b)return;cyo.querySelectorAll('[data-etfv]').forEach(x=>x.setAttribute('aria-pressed',x===b));setVer(b.dataset.etfv);});}},200);

/* ===== Order processing interstitial: shown for ~3.6s before Order Placed (6 animation versions) ===== */
window.PROCV='glass';window.ORDER_OUTCOME='ok';
(()=>{const dv=document.getElementById('device');let last={tk:'TSLA',img:'',col:'#E31937',amt:'',side:'Buy'};
 const MARK='<svg viewBox="-6 -6 194 194" aria-hidden="true"><path d="M91 8.55H173.55V173.55H8.55V8.55Z"/><path d="M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55H182.1"/></svg>';
 const logo=(st,sz)=>st.img?`<i class="lg ${st.img}" style="width:${sz}px;height:${sz}px"></i>`:`<i class="lg" style="width:${sz}px;height:${sz}px;background:${st.col};display:grid;place-items:center;font:800 ${Math.round(sz*.42)}px/1 var(--font);color:#fff;font-style:normal">${st.tk[0]}</i>`;
 const pool=()=>{const L=(window.ETF_LOGOS||[]).slice(0,8);return L.length?L:['m17aa4b','mbf8f87','m25698d','m526b16','me51084'];};
 const STEPS=['Placing your order','Confirming with the exchange','Almost done'];
 const V={
  p1:()=>`<div class="stage p1">${MARK}</div>`,
  p2:()=>{const L=pool().slice(0,6);return `<div class="stage p2"><div class="ring"></div>${L.map((c,i)=>`<div class="orb" style="animation-delay:-${(3.2/L.length*i).toFixed(2)}s"><i class="lg ${c}" style="animation-delay:-${(3.2/L.length*i).toFixed(2)}s"></i></div>`).join('')}<div class="core lg ${last.img}" style="${last.img?'':'background:'+last.col}"></div></div>`;},
  p3:()=>`<div class="stage p3"><div class="cd"><span></span><span></span><span></span><span></span><span></span></div></div>`,
  p4:()=>{const L=pool();const row=r=>`<div class="row">${[...L,...L].map((c,i)=>`<span class="t"><i class="lg ${c}"></i>${['AAPL','TSLA','NVDA','MSFT','GOOGL','AMZN','META','AMD'][(i+r)%8]} ▲${(0.4+((i*37+r)%23)/10).toFixed(1)}%</span>`).join('')}</div>`;
   return `<div class="stage p4"><div class="tape a" style="top:30px">${row(0)}</div><div class="tape b" style="bottom:30px">${row(3)}</div><div class="card">${logo(last,40)}<div><b>${last.side} ${last.tk}</b><small>${last.amt?'₹'+last.amt:'Market order'}</small></div></div></div>`;},
  p5:()=>`<svg class="ld5" viewBox="0 0 64 64" aria-hidden="true"><circle class="bg" cx="32" cy="32" r="32"/><circle class="trk" cx="32" cy="32" r="29"/><circle class="arc" cx="32" cy="32" r="29"/></svg>`,
  p6:()=>`<div class="stage p6"><div class="coin"><div class="front">${logo(last,96)}</div><div class="back">${MARK}</div></div><span class="shadow"></span></div>`};
 // remember what is being ordered
 ['s05','s13','s14'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;sc.querySelectorAll('.fixed.bottom [data-to="s06"]').forEach(b=>b.addEventListener('click',()=>{try{last={tk:cur.tk,img:cur.img,col:cur.col,amt:(sc._amt&&sc._amt.value)||'',side:id==='s13'?'Sell':'Buy'};}catch(e){}},true));});
 let el=null,tm=[];
 function run(){tm.forEach(clearTimeout);tm=[];if(el)el.remove();
  if(PROCV==='glass'&&window.GRO){GRO.run(last,ORDER_OUTCOME,kind=>{if(kind==='bad'){const b=document.querySelector('#list button[data-to="s16"]');if(b)b.click();}else{window.PO_SHEET_ONLY=true;if(window.playOrderPlaced)playOrderPlaced();}});return;}el=document.createElement('div');el.className='proc';el.setAttribute('role','status');el.setAttribute('aria-live','polite');
  if(PROCV==='p5'){el.classList.add('p5abs');el.innerHTML=`${V.p5()}<p class="sub">${last.side} ${last.tk}${last.amt?' · ₹'+last.amt:''}</p><h3>Processing your order</h3><div class="bar bar-in"><i></i></div><p class="step">${STEPS[0]}</p>`;}
  else el.innerHTML=`${V[PROCV]()}<h3>Processing your order</h3><p class="sub">${last.side} ${last.tk}${last.amt?' · ₹'+last.amt:''}</p><p class="step">${STEPS[0]}</p><div class="bar"><i></i></div>`;dv.appendChild(el);
  if(PROCV==='p5')tm.push(setTimeout(()=>{el.classList.add('done');},3050));   /* loader closes into a full ring right before the tick takes its place */
  const st=el.querySelector('.step');STEPS.forEach((t,i)=>i&&tm.push(setTimeout(()=>{st.style.opacity=0;tm.push(setTimeout(()=>{st.textContent=t;st.style.opacity=1;},220));},i*900)));
  tm.push(setTimeout(()=>{el.classList.add('out');window.PO_FROM_LOADER=PROCV==='p5';if(window.playOrderPlaced)playOrderPlaced();tm.push(setTimeout(()=>{el&&el.remove();el=null;},380));},3600));}
 const s6=document.getElementById('s06');let was=false;
 if(s6)new MutationObserver(()=>{const on=s6.classList.contains('on');if(on&&!was)run();was=on;}).observe(s6,{attributes:true,attributeFilter:['class']});
 window.previewProcessing=run;
 setTimeout(()=>{const box=document.getElementById('cyo');if(!box)return;
  const N=[['glass','G · Minted glass-ring → real screen'],['p1','P1 · Minted mark draws'],['p2','P2 · Stocks orbit the asset'],['p3','P3 · Candles rise'],['p4','P4 · Ticker tape + order card'],['p5','P5 · Radar pulse'],['p6','P6 · Coin flip (asset ↔ Minted)']];
  box.insertAdjacentHTML('beforeend',`<h2>Order processing animation</h2><div class="hsw" id="procv">${N.map(([k,n])=>`<button data-procv="${k}" aria-pressed="${k===PROCV}"><b>${n}</b></button>`).join('')}</div><button class="disc-reset" id="proc-prev">Preview processing screen</button>`);
  box.querySelector('#procv').addEventListener('click',e=>{const b=e.target.closest('[data-procv]');if(!b)return;PROCV=b.dataset.procv;box.querySelectorAll('[data-procv]').forEach(x=>x.setAttribute('aria-pressed',x===b));run();});
  box.querySelector('#proc-prev').addEventListener('click',run);
  box.querySelector('#procv').insertAdjacentHTML('afterend','<h2>Order outcome (glass-ring)</h2><div class="modes" id="pout"><button data-pout="ok" aria-pressed="true">Success</button><button data-pout="bad" aria-pressed="false">Failed</button><button data-pout="stk" aria-pressed="false">Stuck</button></div>');
  box.querySelector('#pout').addEventListener('click',e=>{const b=e.target.closest('[data-pout]');if(!b)return;ORDER_OUTCOME=b.dataset.pout;box.querySelectorAll('[data-pout]').forEach(x=>x.setAttribute('aria-pressed',x===b));});},150);})();

/* --- First switch to Futures inside the order pad: explain leverage first with the Activate leverage sheet --- */
setTimeout(()=>{const gate=(btn)=>btn.addEventListener('click',e=>{if(btn.dataset.lvok||!window.lvxOpen||!window.levAcked||levAcked())return;
  e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();lvxOpen(()=>{btn.dataset.lvok='1';btn.click();delete btn.dataset.lvok;});},true);
 document.querySelectorAll('#s05 [data-optab="fut"],#s13 [data-optab="fut"]').forEach(gate);   /* order pad only — not the asset page */
 // arriving on the order pad already on Futures (from the asset page's Futures tab) also gets the sheet the first time
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;let was=false;new MutationObserver(()=>{const on=sc.classList.contains('on');
  if(on&&!was&&sc.classList.contains('op-fut')&&window.levAcked&&!levAcked()&&window.lvxOpen)setTimeout(()=>lvxOpen(()=>{}),150);was=on;}).observe(sc,{attributes:true,attributeFilter:['class']});});},120);

/* --- Order pads open with the number pad closed; it opens on tap of the amount (or typing) --- */
['s05','s13','s14'].forEach(id=>{const sc=document.getElementById(id);if(!sc||!sc._open)return;let was=false;
 new MutationObserver(()=>{const on=sc.classList.contains('on');if(on&&!was)setTimeout(()=>sc._open(false),0);was=on;}).observe(sc,{attributes:true,attributeFilter:['class']});});

/* --- Asset page logo: rendered exactly like the Market list (image logos or letter badges), no leftovers from the previous stock --- */
(()=>{const lay=document.querySelector('#s04 .layer');if(!lay)return;
 const paint=st=>{const el=[...lay.children].find(e=>e.tagName==='I'&&e.classList.contains('im')&&!e.classList.contains('hide')&&parseFloat(e.style.top)===90&&parseFloat(e.style.left)===16);if(!el||!st)return;
  const sz=32;el.textContent='';el.removeAttribute('class');el.className='im'+(st.img?' '+st.img:'');
  el.style.cssText=`left:16px;top:90px;width:${sz}px;height:${sz}px;border-radius:${sz/2}px`+(st.img?'':`;background:${st.col};display:grid;place-items:center;font:800 ${Math.round(sz*.45)}px/1 var(--font);color:#fff`);
  if(!st.img)el.textContent=st.tk[0];};
 const _as=applyStock;applyStock=function(st){_as(st);paint(st);};paint(typeof cur!=='undefined'?cur:null);})();

/* ===== Home · Index ETFs (new section, after By Market Cap): chips + Start-Trading-style cards ===== */
setTimeout(()=>{const lay=document.querySelector('#s01 .layer');if(!lay)return;
 const st=[...lay.children].find(e=>e.classList.contains('hrow')&&/Microsoft/.test(e.textContent));const head=[...lay.children].find(e=>e.tagName==='P'&&/Start Trading/.test(e.textContent));
 const cat=[...lay.children].find(e=>e.tagName==='P'&&/^Categories$/.test(e.textContent.trim()));if(!st||!head||!cat)return;
 const kids=[...st.children];const cardEls=x0=>kids.filter(e=>{const l=parseFloat(e.style.left);return l>=x0-1&&l<x0+170;});
 const tplUp=cardEls(16.5),tplDn=cardEls(202.5);
 const ETF={'Nasdaq 100':[['Invesco QQQ Trust','QQQ',512.40,0.92],['Invesco Nasdaq 100','QQQM',210.85,0.95],['Fidelity Nasdaq Comp.','ONEQ',74.12,0.71],['ProShares UltraPro QQQ','TQQQ',78.30,2.74]],
  'S&P 500':[['SPDR S&P 500 ETF','SPY',585.30,0.48],['Vanguard S&P 500','VOO',538.10,0.51],['iShares Core S&P 500','IVV',588.20,0.47],['SPDR Portfolio S&P 500','SPLG',68.85,0.49]],
  'Dow Jones':[['SPDR Dow Jones Ind.','DIA',428.60,-0.21],['SPDR Dow Jones Div.','DJD',52.35,-0.18],['ProShares Ultra Dow30','DDM',96.40,-0.43],['ProShares UltraPro Dow30','UDOW',98.40,-0.66]]};
 const Y=parseFloat(cat.style.top),H=235;
 // push everything from Categories down
 [...lay.children].forEach(e=>{const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=Y-1){e.style.top=(t+H)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop+H);}});
 if(lay.style.height)lay.style.height=(parseFloat(lay.style.height)+H)+'px';
 // heading
 const h=head.cloneNode(true);h.textContent='Index ETFs';h.style.top=Y+'px';h.style.width='120px';lay.appendChild(h);
 // chips (same classes as the By Market Cap chips)
 const names=Object.keys(ETF);const chipW={'Nasdaq 100':96,'S&P 500':80,'Dow Jones':90};let cx=16;const chips=[];
 names.forEach((n,i)=>{const b=document.createElement('div');b.className=i?'u-no2kw0qn':'u-f1mq248m';b.style.cssText=`left:${cx}px;top:${Y+34}px;width:${chipW[n]}px;height:28px`;
  const t=document.createElement('p');t.className='tx n '+(i?'vv6p7ed6t':'v-6fx3e2wt');t.style.cssText=`left:${cx}px;top:${Y+40}px;width:${chipW[n]}px;height:16px;text-align:center`;t.textContent=n;
  const hs=document.createElement('button');hs.className='hs';hs.setAttribute('aria-label',n);hs.style.cssText=`left:${cx}px;top:${Y+34}px;width:${chipW[n]}px;height:28px;z-index:7`;
  lay.append(b,t,hs);chips.push({b,t,hs,n});cx+=chipW[n]+12;});
 // cards row
 const row=document.createElement('div');row.className='hrow';row.style.cssText=`left:0px;top:${Y+74}px;width:360px;height:129px`;lay.appendChild(row);
 // stand-in logos: reuse the stock logos already in the app (distinct ones from Market Cap / Start Trading)
 window.ETF_LOGOS=[...new Set([...document.querySelectorAll('#s01 .layer i.im, #s03 .layer i.im')].map(i=>[...i.classList].find(c=>c!=='im')).filter(Boolean))];
 window.ETF_IDX=0;
 function fill(n){row.innerHTML='';window.ETF_IDX=names.indexOf(n)*4+3;ETF[n].forEach(([name,tk,p,c],i)=>{const tpl=c>=0?tplUp:tplDn,dx=16.5+186*i-(c>=0?16.5:202.5);
  tpl.forEach(src=>{const e=src.cloneNode(true);e.style.left=(parseFloat(src.style.left)+dx)+'px';row.appendChild(e);
   if(e.tagName==='I'){const L=window.ETF_LOGOS||[];if(L.length){e.className=L[(ETF_IDX++)%L.length];e.textContent='';}else{e.className='etf-logo';e.textContent=tk.slice(0,1);}}
   else if(e.tagName==='P'){if(e.classList.contains('e'))e.textContent=name;else if(e.classList.contains('v-8uql45kz'))e.textContent=tk;else if(/%/.test(e.textContent))e.textContent=(c>=0?'+':'')+c.toFixed(2)+'%';else e.textContent='$'+p.toFixed(2);
    if(e.classList.contains('e'))e.style.width='96px';}
   else if(e.tagName==='BUTTON'){e.dataset.to='s12';e.removeAttribute('data-stock');e.setAttribute('aria-label','Open '+tk);}});});
  const end=document.createElement('i');end.style.cssText=`left:${16.5+186*ETF[n].length}px;top:0;width:1px;height:1px`;row.appendChild(end);row.scrollLeft=0;}
 const pick=i=>{chips.forEach((c,j)=>{c.b.className=j===i?'u-f1mq248m':'u-no2kw0qn';c.t.className='tx n '+(j===i?'v-6fx3e2wt':'vv6p7ed6t');});fill(names[i]);};
 chips.forEach((c,i)=>c.hs.addEventListener('click',e=>{e.stopPropagation();pick(i);}));pick(0);
 window.ETF1={els:[h,row,...chips.flatMap(c=>[c.b,c.t,c.hs])],Y,H};},80);

/* --- Home · By Market Cap: two-row grid (cards() lays it out); grow the row and push the sections below down --- */
(()=>{const lay=document.querySelector('#s01 .layer');if(!lay)return;const row=[...lay.children].find(e=>e.classList.contains('hrow')&&Math.abs(parseFloat(e.style.top)-1106.5)<6&&e.querySelector('.u-1jbi682e'));if(!row)return;
 const add=132,oldH=parseFloat(row.style.height),y=parseFloat(row.style.top)+oldH;row.style.height=(oldH+add)+'px';
 [...lay.children].forEach(e=>{if(e===row)return;const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=y-1){e.style.top=(t+add)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop+add);}});
 if(lay.style.height)lay.style.height=(parseFloat(lay.style.height)+add)+'px';})();

/* ===== Leveraged asset page: after the chart only the Order Book (no Analyst ratings, Contract details, Financials, News, About) ===== */
(()=>{const sc=document.getElementById('s04'),lay=sc&&sc.querySelector('.layer');if(!lay)return;
 function trim(){const on=(typeof amode!=='undefined'&&amode==='futures')||window.CA_LEV;const ob=lay.querySelector('.obook');
  lay.querySelectorAll(':scope > .lv-cut').forEach(e=>e.classList.remove('lv-cut'));
  if(lay.dataset.h0){lay.style.height=lay.dataset.h0;delete lay.dataset.h0;}
  if(!on||!ob)return;const end=parseFloat(ob.style.top)+parseFloat(ob.style.height);
  [...lay.children].forEach(e=>{const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=end-1)e.classList.add('lv-cut');});
  lay.dataset.h0=lay.style.height;lay.style.height=(end+24)+'px';}
 const _sm=setMode;setMode=function(m){_sm(m);if(window.discRelayout)discRelayout();setTimeout(trim,0);};
 if(window.caSet){const _cs=caSet;window.caSet=caSet=function(o){_cs(o);setTimeout(trim,0);};}
 const _as=applyStock;applyStock=function(st){_as(st);setTimeout(trim,0);};})();

/* ===== Market closed (1x): Buy from the asset page lands on the Limit pad, with a limit-order note ===== */
setTimeout(()=>{const s4=document.getElementById('s04'),s14=document.getElementById('s14');if(!s4||!s14)return;
 const closed=()=>session().s.k==='closed';
 const nextOpen=()=>{const t=istNow();const d=t.getDay(),m=t.getHours()*60+t.getMinutes();if(window.FORCE_CLOSED||d===0||d===6)return 'on Monday';if(m<13*60+30)return 'today';return d===5?'on Monday':'tomorrow';};
 // redirect Buy → Limit while the market is closed (only at 1x; leveraged orders keep their own flow)
 const jump=document.createElement('button');jump.dataset.to='s14';jump.hidden=true;jump.className='hs';s4.appendChild(jump);
 s4.querySelectorAll('.fixed.bottom [data-to="s05"]').forEach(b=>b.addEventListener('click',e=>{const lev=(typeof amode!=='undefined'&&amode==='futures')||window.CA_LEV;
  if(!closed()||lev)return;e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();jump.click();},true));
 // note on the Limit pad
 const n=document.createElement('div');n.className='mclosed';n.setAttribute('role','note');s14.appendChild(n);
 const vp=[...s14.querySelectorAll('.fixed.bottom p')].find(e=>/validity of 90 days/.test(e.textContent)),vb=vp&&[...vp.parentElement.children].find(e=>e.tagName==='DIV'&&Math.abs(parseFloat(e.style.top)-parseFloat(vp.style.top)+6)<2);
 const o0=vp&&{t:vp.textContent,ps:vp.getAttribute('style'),bs:vb&&vb.getAttribute('style'),cls:vp.className};
 /* one note only: when the market is closed, the 90-day validity card also says when the order will execute */
 /* plain text note, same type and style as the Instant pad's note (no card) */
 const upd=()=>{n.hidden=true;if(!vp)return;
  if(closed()){   // closed: plain text note, same as the Instant pad
   if(vb)vb.style.display='none';vp.innerHTML=`<b>NOTE : </b>Limit orders will have a validity of 90 days. Your order will execute once the market opens ${nextOpen()} at 1:30 PM IST.`;vp.className='mclosed lim-note';vp.removeAttribute('style');}
  else{   // pre-market / open / after-market: the original card
   vp.className=o0.cls;vp.textContent=o0.t;vp.setAttribute('style',o0.ps);if(vb){vb.style.display='';if(o0.bs)vb.setAttribute('style',o0.bs);}}};
 upd();new MutationObserver(()=>{if(s14.classList.contains('on'))upd();}).observe(s14,{attributes:true,attributeFilter:['class']});
 document.addEventListener('click',e=>{if(e.target.closest('[data-mks]'))setTimeout(upd,0);});
 // Order Placed after a limit order: matching copy
 s14.querySelectorAll('.fixed.bottom [data-to="s06"]').forEach(b=>b.addEventListener('click',()=>{window.LAST_LIMIT=true;},true));
 ['s05','s13'].forEach(id=>{const p=document.getElementById(id);if(p)p.querySelectorAll('.fixed.bottom [data-to="s06"]').forEach(b=>b.addEventListener('click',()=>{window.LAST_LIMIT=false;},true));});
 const s6=document.getElementById('s06');if(s6)new MutationObserver(()=>{if(!s6.classList.contains('on'))return;const po=s6.querySelector('.mclosed-po');if(po&&!po.hidden&&window.LAST_LIMIT)po.innerHTML=`<b>NOTE : </b>Your limit order has been placed. It will only execute when the market opens ${nextOpen()} at 1:30 PM IST.`;}).observe(s6,{attributes:true,attributeFilter:['class']});},0);
/* --- Home tray: equal 84px columns (previous spacing); "Help & Support" is labelled "Help" --- */
setTimeout(()=>{const tr=document.getElementById('tray');if(!tr)return;const p=[...tr.children].find(e=>e.tagName==='P'&&e.textContent.trim()==='Help & Support');if(p)p.textContent='Help';},60);

/* --- Home quick actions (Minted): one non-expandable row in the expanded-tray style — Zing · Scalper · Rewards · Help & Support --- */
(()=>{const lay=document.querySelector('#s01 .layer'),tr=document.getElementById('tray');if(!lay||!tr)return;
 const k=[...tr.children],P=txt=>k.find(e=>e.tagName==='P'&&e.textContent.trim()===txt),icon=p=>k.find(e=>e.tagName.toLowerCase()==='svg'&&parseFloat(e.style.width)===32&&parseFloat(e.style.top)===parseFloat(p.style.top)-32&&Math.abs(parseFloat(e.style.left)+16-(parseFloat(p.style.left)+parseFloat(p.style.width)/2))<6);
 const keep=['Zing','Scalper','Rewards','Help & Support'];const cols={};
 keep.forEach((t,i)=>{const p=P(t);if(!p)return;const ic=icon(p);const x=12+42+84*i-16;   /* 4 equal 84px columns across the 336px card */if(ic){ic.style.left=x+'px';ic.style.top='8px';}p.style.left=(x+16-40)+'px';p.style.width='80px';p.style.textAlign='center';p.style.top='40px';cols[t]=1;});
 ['Crypto Deposit','Smart Invest','Lemonn','View Less'].forEach(t=>{const p=P(t);if(!p)return;const ic=icon(p);p.style.display='none';if(ic)ic.style.display='none';});
 k.forEach(e=>{const t=parseFloat(e.style.top);if(e.tagName==='BUTTON'||(!isNaN(t)&&t>=60&&e.style.display!=='none'&&!(e.tagName==='P'&&keep.includes(e.textContent.trim()))&&!(e.tagName.toLowerCase()==='svg'&&parseFloat(e.style.width)===32&&t===8)))e.style.display='none';});
 k.filter(e=>e.tagName.toLowerCase()==='svg'&&parseFloat(e.style.width)===0&&parseFloat(e.style.top)<60&&e.style.display!=='none').sort((a,b)=>parseFloat(a.style.left)-parseFloat(b.style.left)).forEach((e,i)=>{e.style.display='none';const d=document.createElement('div');d.className='qa-sep';d.style.cssText=`left:${12+84*(i+1)}px;top:13px;width:1px;height:40px`;tr.appendChild(d);});   /* separators exactly between columns */
 const card=k.find(e=>e.classList.contains('u-no2jt699'));if(card)card.style.height='66px';
 tr.style.height='66px';tr.style.setProperty('display','block','important');tr.style.opacity='1';tr.style.pointerEvents='auto';tr.style.transform='none';tr.classList.add('qa-fixed');
 // the old collapsed row and its "+3 more" opener are no longer used
 [...lay.children].forEach(e=>{if(e===tr)return;const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=280&&t<350&&!e.classList.contains('tray'))e.style.display='none';});})();



/* --- Order Placed / Failed: the divider above the amount line (its zero-height gradient SVG rendered invisible) --- */
['s06','s16'].forEach(id=>{const lay=document.querySelector('#'+id+' .layer');if(!lay)return;
 const sv=[...lay.children].find(e=>e.tagName.toLowerCase()==='svg'&&parseFloat(e.style.height)===0&&parseFloat(e.style.width)>150&&parseFloat(e.style.top)>200&&parseFloat(e.style.top)<260);if(!sv)return;
 const d=document.createElement('div');d.className='po-div';d.style.cssText=`left:${sv.style.left};top:${sv.style.top};width:${sv.style.width};height:1px`;sv.replaceWith(d);});
/* ===== Order Placed entrance: tick + summary animate in at the centre, then rise to place as the sheet fades up ===== */
(()=>{const sc=document.getElementById('s06');if(!sc)return;const lay=sc.querySelector('.layer'),fb=sc.querySelector('.fixed.bottom');let timers=[];
 const tp=e=>parseFloat(e.style.top);
 function groups(){const kids=[...lay.children].filter(e=>getComputedStyle(e).display!=='none');
  const head=kids.filter(e=>{const t=tp(e),w=parseFloat(e.style.width)||0,h=parseFloat(e.style.height)||0;return t>=40&&t<275&&(w<360||h<=2)&&!e.classList.contains('mclosed-po');});
  const tick=head.filter(e=>tp(e)<130),text=head.filter(e=>tp(e)>=130).sort((a,b)=>tp(a)-tp(b));
  const modal=kids.filter(e=>tp(e)>=275&&!e.classList.contains('mclosed-po')&&!e.classList.contains('po-glow'));return {head,tick,text,modal:[...modal,fb].filter(Boolean)};}
 function play(){timers.forEach(clearTimeout);timers=[];const G=groups();const DY=230;
  if(window.PO_SHEET_ONLY){window.PO_SHEET_ONLY=false;const set=(els,css)=>els.forEach(e=>Object.assign(e.style,css));
   const gl=sc.querySelector('.po-glow');if(gl)gl.style.opacity='0';
   set(G.head,{transition:'none',transform:'',opacity:''});
   const mods=G.modal.filter(e=>!e.closest('.fixed'));const cardA=mods.filter(e=>parseFloat(e.style.top)<560),cardB=mods.filter(e=>parseFloat(e.style.top)>=560);
   const note=lay.querySelector('.mclosed-po');
   set([...mods,...G.modal.filter(e=>e.closest('.fixed')||e===sc.querySelector('.fixed.bottom'))],{transition:'none',opacity:'0',transform:'translateY(70px)'});if(note)Object.assign(note.style,{transition:'none',opacity:'0'});
   void sc.offsetWidth;
   timers.push(setTimeout(()=>set(cardA,{transition:'transform .6s cubic-bezier(.2,.8,.2,1),opacity .45s',opacity:'1',transform:'translateY(0)'}),20));          // sheet + Sell automatically card
   timers.push(setTimeout(()=>set(cardB,{transition:'transform .6s cubic-bezier(.2,.8,.2,1),opacity .45s',opacity:'1',transform:'translateY(0)'}),200));         // Similar assets
   timers.push(setTimeout(()=>set(G.modal.filter(e=>e.closest('.fixed')||e===sc.querySelector('.fixed.bottom')),{transition:'transform .5s cubic-bezier(.2,.8,.2,1),opacity .4s',opacity:'1',transform:'translateY(0)'}),320));
   timers.push(setTimeout(()=>{if(note)Object.assign(note.style,{transition:'opacity .45s',opacity:'1'});},700));
   timers.push(setTimeout(()=>set([...G.modal,...mods],{transition:'',transform:'',opacity:''}),1300));return;}
  const set=(els,css)=>els.forEach(e=>Object.assign(e.style,css));
  let gl=sc.querySelector('.po-glow');if(!gl){gl=document.createElement('div');gl.className='po-glow';}
  if(gl.parentElement!==lay)lay.insertBefore(gl,lay.firstChild);gl.style.zIndex='2';[...G.head,...G.modal].forEach(e=>{if(!e.dataset.z0)e.dataset.z0=e.style.zIndex||'';e.style.zIndex=e.closest('.fixed')?'':'3';});   /* page bg < mint gradient < summary + sheet */
  set([gl],{transition:'none',opacity:'0',transform:'translateY(40px)'});
  const topGlow=[...lay.children].filter(e=>tp(e)<=0&&(parseFloat(e.style.width)||0)>=360);set(topGlow,{transition:'none',opacity:'0'});
  const note=lay.querySelector('.mclosed-po');if(note)Object.assign(note.style,{transition:'none',opacity:'0',transform:'translateY(6px)'});   /* the note waits until the sheet has settled */
  set(G.head,{transition:'none',transform:`translateY(${DY}px)`});
  set(G.tick,{opacity:'0',transform:`translateY(${DY}px) scale(.4)`});
  set(G.text,{opacity:'0',transform:`translateY(${DY+10}px)`});
  set(G.modal,{transition:'none',opacity:'0',transform:'translateY(60px)'});
  void sc.offsetWidth;
  if(window.PO_FROM_LOADER){set(G.tick,{opacity:'0',transform:`translateY(${DY}px) scale(.92)`});window.PO_FROM_LOADER=false;timers.push(setTimeout(()=>set(G.tick,{transition:'transform .35s cubic-bezier(.2,.9,.25,1.2),opacity .25s',opacity:'1',transform:`translateY(${DY}px) scale(1)`}),20));}
  else timers.push(setTimeout(()=>set(G.tick,{transition:'transform .5s cubic-bezier(.2,.9,.25,1.35),opacity .3s',opacity:'1',transform:`translateY(${DY}px) scale(1)`}),60));
  timers.push(setTimeout(()=>set([gl],{transition:'opacity .6s ease-out,transform .8s cubic-bezier(.2,.8,.2,1)',opacity:'1',transform:'translateY(0)'}),80));
  G.text.forEach((e,i)=>timers.push(setTimeout(()=>Object.assign(e.style,{transition:'transform .45s cubic-bezier(.2,.8,.2,1),opacity .4s',opacity:'1',transform:`translateY(${DY}px)`}),420+i*120)));
  timers.push(setTimeout(()=>{set(G.head,{transition:'transform .65s cubic-bezier(.6,0,.2,1),opacity .3s',transform:'translateY(0)'});
   set(G.modal,{transition:'transform .6s .15s cubic-bezier(.2,.8,.2,1),opacity .5s .15s',opacity:'1',transform:'translateY(0)'});
   set([gl],{transition:'transform .75s .15s cubic-bezier(.2,.8,.2,1),opacity .6s .35s',transform:'translateY(-430px)',opacity:'0'});
   set(topGlow,{transition:'opacity .7s .35s ease-out',opacity:''});},1450));
  timers.push(setTimeout(()=>{if(note)Object.assign(note.style,{transition:'opacity .45s ease-out,transform .45s cubic-bezier(.2,.8,.2,1)',opacity:'1',transform:'translateY(0)'});},2250));
  timers.push(setTimeout(()=>{set([...G.head,...G.modal,...topGlow],{transition:'',transform:'',opacity:''});gl.style.opacity='0';if(note)Object.assign(note.style,{transition:'',transform:'',opacity:''});},2800));}
 let was=false;new MutationObserver(()=>{const on=sc.classList.contains('on');if(on&&!was)play();was=on;}).observe(sc,{attributes:true,attributeFilter:['class']});
 window.playOrderPlaced=play;})();

/* --- Order Placed: same market-closed note (1x orders, market closed) above the CTA bar --- */
(()=>{const sc=document.getElementById('s06');if(!sc)return;window.LAST_LEV=false;
 ['s05','s13','s14'].forEach(id=>{const p=document.getElementById(id);if(!p)return;p.querySelectorAll('.fixed.bottom [data-to="s06"]').forEach(b=>b.addEventListener('click',()=>{window.LAST_LEV=p.classList.contains('op-levon')||p.classList.contains('op-fut');},true));});
 const lay=sc.querySelector('.layer');const n=document.createElement('div');n.className='mclosed mclosed-po';n.setAttribute('role','note');lay.appendChild(n);
 const NOTE_TOP=290,NOTE_H=24;   /* 16px under 'Investment Amount' (ends y274) */
 const below=()=>[...lay.children].filter(e=>e!==n&&!e.classList.contains('po-glow')&&!isNaN(parseFloat(e.dataset.oy??e.style.top))&&parseFloat(e.dataset.oy??e.style.top)>=275);
 const sheetTop=()=>Math.min(...below().map(e=>parseFloat(e.dataset.oy??e.style.top)));
 function shift(on){const st=sheetTop();const dy=on?Math.max(0,NOTE_TOP+NOTE_H+20-st):0;below().forEach(e=>{if(e.dataset.oy===undefined)e.dataset.oy=parseFloat(e.style.top);e.style.top=(+e.dataset.oy+dy)+'px';});}
 const nextOpen=()=>{const t=istNow();const d=t.getDay(),m=t.getHours()*60+t.getMinutes();if(window.FORCE_CLOSED||d===0||d===6)return 'on Monday';if(m<13*60+30)return 'today';return d===5?'on Monday':'tomorrow';};
 const upd=()=>{const show=session().s.k==='closed'&&!window.LAST_LEV;n.innerHTML=`<b>NOTE : </b>The market is currently closed. Your order will be placed when the next trading session opens ${nextOpen()} at 1:30 PM IST.`;n.hidden=!show;shift(show);};
 upd();new MutationObserver(()=>{if(sc.classList.contains('on'))upd();}).observe(sc,{attributes:true,attributeFilter:['class']});setInterval(upd,30000);
 document.addEventListener('click',e=>{if(e.target.closest('[data-mks]'))setTimeout(upd,0);});})();

/* --- Home hero: 20px between the P&L pill and the CTAs, 16px under the CTAs (−4px card height) --- */
(()=>{const lay=document.querySelector('#s01 .layer');if(!lay)return;
 [...lay.children].forEach(e=>{const t=parseFloat(e.style.top);if(isNaN(t))return;
  if((t===202||t===212)&&!e.classList.contains('tray'))e.style.top=(t+4)+'px';                 // Buy TSLA · Add INR
  else if(t===80&&(e.classList.contains('uad0o4996')||e.classList.contains('glow')))e.style.height='182px';   // hero card
  else if(t>=266){e.style.top=(t-4)+'px';if(e.dataset.otop)e.dataset.otop=String(+e.dataset.otop-4);}});
 if(lay.style.height)lay.style.height=(parseFloat(lay.style.height)-4)+'px';})();

/* --- Minted: no Lemonn cross-sell card on post-order screens --- */
['s06','s16','s19'].forEach(id=>{const lay=document.querySelector('#'+id+' .layer');if(!lay)return;
 const p=[...lay.children].find(e=>/Fees for 30 days in Lemonn/.test(e.textContent||''));if(!p)return;
 const top=parseFloat(p.style.top)-13,bot=top+60;
 [...lay.children].forEach(e=>{const t=parseFloat(e.style.top),h=parseFloat(e.style.height)||0;if(!isNaN(t)&&t>=top-2&&t+h<=bot+2)e.style.display='none';});
 const DY=76;   /* close the gap: card height + its 16px spacing */
 [...lay.children].forEach(e=>{const t=parseFloat(e.style.top);if(!isNaN(t)&&t>=bot+2&&e.style.display!=='none'){e.style.top=(t-DY)+'px';}});
 if(lay.style.height)lay.style.height=(parseFloat(lay.style.height)-DY)+'px';});

/* --- Minted: no SIP anywhere — Limit pad gets the 2-option segment, the SIP screen is retired --- */
(()=>{const sc=document.getElementById('s14');if(sc){const fx=sc.querySelector('.fixed.top');const seg=[...fx.children].filter(e=>{const t=parseFloat(e.style.top);return t>=110&&t<=118;});
  seg.forEach(e=>{if(e.textContent.trim()==='SIP'||e.dataset.to==='s15'){e.remove();return;}
   if(e.classList.contains('uec0gjo3a')){e.style.left='106px';e.style.width='148px';return;}
   e.style.left=(parseFloat(e.style.left)+36)+'px';});}
 // pages list + any SIP entry points
 document.querySelectorAll('#list [data-to="s15"]').forEach(b=>b.remove());
 const s15=document.getElementById('s15');if(s15)s15.dataset.retired='1';})();

/* ===== 1x order pad · market-closed note (weekends / outside US sessions) ===== */
window.FORCE_CLOSED=false;
{const _ses=session;session=function(){return window.FORCE_CLOSED?{s:MSES[3]}:_ses();};}
(()=>{const info='<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 7.2v4M8 4.9v.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
 function nextOpen(){const n=istNow();const d=n.getDay(),m=n.getHours()*60+n.getMinutes();
  // weekend (incl. Saturday's early-morning close) → Monday; weekday before 1:30 PM → today; otherwise → tomorrow (Friday → Monday)
  if(window.FORCE_CLOSED||d===0||d===6)return 'on Monday';if(m<13*60+30)return 'today';return d===5?'on Monday':'tomorrow';}
 ['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(!sc)return;
  const n=document.createElement('div');n.className='mclosed';n.setAttribute('role','note');sc.appendChild(n);
  const upd=()=>{const closed=session().s.k==='closed';const lev=sc.classList.contains('op-levon')||sc.classList.contains('op-fut');
   const instant=!sc.classList.contains('op-limit');const show=closed&&!lev&&instant;
   n.innerHTML=`<b>NOTE : </b>The market is currently closed. Your order will be placed when the next trading session opens ${nextOpen()} at 1:30 PM IST.`;
   n.hidden=!show;sc.classList.toggle('has-mclosed',show);};
  sc._mcUpd=upd;upd();setInterval(upd,30000);
  new MutationObserver(upd).observe(sc,{attributes:true,attributeFilter:['class']});});
 setTimeout(()=>{const box=document.getElementById('cyo');if(!box)return;
  box.insertAdjacentHTML('beforeend',`<h2>Market status</h2><div class="modes" id="mks"><button data-mks="live" aria-pressed="true">Live (IST clock)</button><button data-mks="closed" aria-pressed="false">Closed (weekend)</button></div>`);
  box.querySelector('#mks').addEventListener('click',e=>{const b=e.target.closest('[data-mks]');if(!b)return;window.FORCE_CLOSED=b.dataset.mks==='closed';
   box.querySelectorAll('[data-mks]').forEach(x=>x.setAttribute('aria-pressed',x===b));['s05','s13'].forEach(id=>{const sc=document.getElementById(id);if(sc&&sc._mcUpd)sc._mcUpd();});});},0);})();

/* ===== Physical keyboard in prototype mode: digits, '.', Backspace, Enter, Esc ===== */
document.addEventListener('keydown',e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const tg=e.target;if(tg&&(tg.tagName==='INPUT'||tg.tagName==='TEXTAREA'||tg.isContentEditable))return;
 const k=e.key,dig=/^[0-9]$/.test(k);
 const auth=document.getElementById('auth');
 if(auth&&!auth.hidden){const s=auth.dataset.s;
  e.stopImmediatePropagation();   /* sign-in owns the keyboard while it's on screen */
  if(dig||k==='Backspace'){const b=auth.querySelector(`[data-k="${dig?k:'⌫'}"]`);if(b){b.click();e.preventDefault();}return;}
  if(k==='Enter'){const c=[...auth.querySelectorAll('.au-cta')].filter(x=>!x.disabled&&x.offsetParent).pop();if(c){c.click();e.preventDefault();}return;}
  return;}
 const sc=document.querySelector('.screen.on');if(!sc)return;
 if(['s05','s13','s14','s15'].includes(sc.id)&&sc._amt){
  /* digits, '.', Backspace and Esc are handled by the order pad's own listener */
  if(k==='Enter'){const h=sc.querySelector('.fixed.bottom [data-to="s06"]');if(h){h.click();e.preventDefault();}return;}
}
 if(sc.id==='s18'&&(dig||k==='.'||k===','||k==='Backspace')){const p=k==='Backspace'?null:sc.querySelector(`[data-key="${k}"]`);
  const btn=k==='Backspace'?sc.querySelector('.kbtn[aria-label="Delete"]'):p&&[...p.parentElement.querySelectorAll('.kbtn')].find(b=>Math.abs(parseFloat(b.style.left)-parseFloat(p.style.left))<40&&Math.abs(parseFloat(b.style.top)-parseFloat(p.style.top))<30);
  if(btn){btn.click();e.preventDefault();}}},true);

/* ===== $T currency symbol (Figma 4309:22192) replaces ₹ everywhere in the app ===== */
(()=>{const D1="M9.29256 21.49V19.12H11.7026V21.49H9.29256ZM9.29256 5.49V3.12H11.7026V5.49H9.29256ZM10.5526 19.8C9.53923 19.8 8.63256 19.6133 7.83256 19.24C7.03256 18.8667 6.37589 18.34 5.86256 17.66C5.35589 16.98 5.03256 16.1733 4.89256 15.24L7.27256 14.86C7.45923 15.68 7.85923 16.3333 8.47256 16.82C9.09256 17.3 9.83256 17.54 10.6926 17.54C11.5192 17.54 12.1992 17.3467 12.7326 16.96C13.2659 16.5667 13.5326 16.07 13.5326 15.47C13.5326 15.05 13.4059 14.71 13.1526 14.45C12.8992 14.1833 12.4926 13.9633 11.9326 13.79L8.46256 12.71C6.44256 12.0833 5.43256 10.8567 5.43256 9.03C5.43256 8.17667 5.63589 7.43333 6.04256 6.8C6.45589 6.16 7.03589 5.67 7.78256 5.33C8.52923 4.98333 9.40923 4.81333 10.4226 4.82C11.3626 4.82667 12.1992 4.99667 12.9326 5.33C13.6726 5.66333 14.2859 6.14333 14.7726 6.77C15.2659 7.39667 15.6159 8.15 15.8226 9.03L13.3526 9.48C13.2592 9.00667 13.0759 8.59 12.8026 8.23C12.5292 7.87 12.1859 7.59 11.7726 7.39C11.3592 7.19 10.8992 7.08333 10.3926 7.07C9.90589 7.06333 9.46923 7.14 9.08256 7.3C8.69589 7.45333 8.38923 7.67333 8.16256 7.96C7.93589 8.24 7.82256 8.55667 7.82256 8.91C7.82256 9.30333 7.97923 9.64 8.29256 9.92C8.61256 10.2 9.11589 10.44 9.80256 10.64L12.3926 11.39C13.6392 11.75 14.5359 12.24 15.0826 12.86C15.6359 13.4733 15.9126 14.29 15.9126 15.31C15.9126 16.2033 15.6892 16.9867 15.2426 17.66C14.7959 18.3333 14.1692 18.86 13.3626 19.24C12.5559 19.6133 11.6192 19.8 10.5526 19.8Z";
 const D2="M19.3672 21.408C18.9935 21.4781 18.6264 21.5081 18.266 21.4981C17.9089 21.4914 17.5885 21.4297 17.3048 21.3129C17.0245 21.1928 16.8109 21.0009 16.6641 20.7372C16.5306 20.4903 16.4605 20.24 16.4539 19.9864C16.4472 19.7294 16.4438 19.4391 16.4438 19.1154V14.5H17.8054V19.0353C17.8054 19.2455 17.8071 19.4357 17.8104 19.6059C17.8171 19.7728 17.8521 19.9063 17.9156 20.0064C18.0357 20.1966 18.2276 20.3001 18.4912 20.3168C18.7549 20.3334 19.0469 20.3201 19.3672 20.2767V21.408ZM17.5228 17.053V16.0017L19.3672 16.0017V17.053L17.5228 17.053Z";
 const SVG=`<svg viewBox="4.6 2.9 15 18.8" aria-hidden="true"><path d="${D1}"/><path d="${D2}"/></svg>`;
 const dv=document.getElementById('device');
 const PRICE_LBL=/(LTP|Avg\.?\s*Entry|Liq\.?|Mark\s*Price|Entry Price|Exit Price|Limit Price|Trigger|Target)/i;
 const OVER='#auth,#lvx,#qz,#q2,#fq,#qd,#risk,#disc-sh,.proc .sub,.proc .card small,#groW,.amt-disp,.op-chips,.op-mm,.op-bal';   /* money the user enters is always ₹ */
 const RUPEE='#s05,#s06,#s07,#s08,#s09,#s10,#s13,#s14,#s15,#s16,#s17,#s18,#s19,#s20';
 const yOf=el=>{const tp=el.closest('[style*="top:"]');return tp?parseFloat(tp.style.top):999;};
 /* rule: $T only for asset prices; anything the user invests, holds or earns (amounts, values, P&L, balances) stays ₹ */
 const isPriceCtx=el=>{const row=el.closest('p,b,span,div')||el;const own=row.textContent||'';if(PRICE_LBL.test(own.replace(/[₹$][\d,.\s]+/g,'')))return true;
  const sib=row.previousElementSibling;if(sib&&PRICE_LBL.test(sib.textContent||''))return true;
  const par=row.parentElement;if(par&&par.children.length<=3&&PRICE_LBL.test((par.firstElementChild&&par.firstElementChild!==row?par.firstElementChild.textContent:'')||''))return true;return false;};
 const INR=el=>{if(!el||!el.closest)return false;
  if(el.closest(OVER))return true;
  if(el.closest('#s01')&&yOf(el)<210&&!el.closest('.hrow'))return true;   // Home: portfolio value + P&L pill
  if(!el.closest(RUPEE))return false;
  if(el.closest('#s05,#s13,#s14,#s15')&&el.closest('.fixed.top')&&yOf(el)<75)return false;   // order-pad header: the asset's price
  if(el.closest('.op-liq,.lv-liq'))return false;
  return !isPriceCtx(el);};   /* investing & withdrawing happen in ₹ */
 const CUR=/₹|\$(?=\s?[\d.])/;   /* ₹ and $-prices (Home cards, Top Movers…) both become $T */
 function swap(tn){const t=tn.nodeValue;if(!t||!CUR.test(t))return;const p=tn.parentNode;if(!p||p.closest&&p.closest('.dt'))return;if(INR(p))return;
  const frag=document.createDocumentFragment();t.split(/₹|\$(?=\s?[\d.])/).forEach((part,i)=>{if(i){const s=document.createElement('span');s.className='dt';s.setAttribute('aria-label','$T');s.innerHTML=SVG;frag.appendChild(s);}if(part)frag.appendChild(document.createTextNode(part));});
  p.replaceChild(frag,tn);const fs=parseFloat(getComputedStyle(p).fontSize)||12;if(fs>=20)p.querySelectorAll(':scope > .dt').forEach(d=>d.classList.add('dt-l'));}
 function scan(root){if(root.nodeType===3){swap(root);return;}const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>/₹|\$(?=\s?[\d.])/.test(n.nodeValue)?1:3});const list=[];while(w.nextNode())list.push(w.currentNode);list.forEach(swap);}
 scan(dv);
 dv.querySelectorAll('.dt').forEach(d=>{if(INR(d.parentElement)){d.replaceWith(document.createTextNode('₹'));}});
 new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')swap(m.target);else m.addedNodes.forEach(n=>{if(n.nodeType===1||n.nodeType===3)scan(n);});}}).observe(dv,{subtree:true,childList:true,characterData:true});})();



/* ===== Splash S5 · "3D Drawn in depth" — ported from the Minted film artifact (Jg4PqVTZLgPuskuCKARvQA, latest: flat ground, no glow) ===== */
(function () {
var W = ["M 227.9 34L243.5 34L243.8 58.9C249.2 50.3 256.1 43.6 264.5 38.9C272.9 34.2 282.3 31.9 292.7 31.9C305.5 31.9 316.4 34.8 325.5 40.7C334.6 46.6 341.2 55 345.2 65.8C350.6 55 358.1 46.6 367.7 40.7C377.3 34.8 388 31.9 399.8 31.9C418.4 31.9 433 37.5 443.6 48.8C454.2 60.1 459.5 75.8 459.5 95.8L459.5 182.2L442.4 182.2L442.4 97C442.4 81.2 438.7 69 431.3 60.5C423.9 52 413.3 47.8 399.5 47.8C390.5 47.8 382.4 50 375.2 54.4C368 58.8 362.3 64.9 358.2 72.7C354.1 80.5 352.1 89.3 352.1 99.1L352.1 182.2L335 182.2L335 97C335 81.2 331.3 69 323.9 60.5C316.5 52 305.9 47.8 292.1 47.8C283.1 47.8 275 50 267.8 54.4C260.6 58.8 255 64.9 251 72.7C247 80.5 245 89.3 245 99.1L245 182.2L227.9 182.2ZM227.9 34", "M 505.1 34L522.2 34L522.2 182.2L505.1 182.2ZM503.9 -21.1C506.5 -23.6 509.7 -24.8 513.5 -24.8C517.5 -24.8 520.8 -23.6 523.4 -21.1C526 -18.6 527.3 -15.4 527.3 -11.6C527.3 -7.6 526 -4.4 523.4 -1.9C520.8 0.6 517.5 1.9 513.5 1.9C509.7 1.9 506.5 0.6 503.9 -2C501.3 -4.6 500 -7.8 500 -11.6C500 -15.4 501.3 -18.6 503.9 -21.1", "M 569.9 34L585.5 34L585.8 60.7C591.6 51.7 599.5 44.6 609.5 39.5C619.5 34.4 630.5 31.9 642.5 31.9C662.1 31.9 677.4 37.7 688.5 49.3C699.6 60.9 705.2 77 705.2 97.6L705.2 182.2L688.1 182.2L688.1 98.5C688.1 82.1 684 69.5 675.8 60.8C667.6 52.1 655.9 47.8 640.7 47.8C630.3 47.8 621 50.1 612.8 54.7C604.6 59.3 598.2 65.6 593.7 73.7C589.2 81.8 587 90.9 587 100.9L587 182.2L569.9 182.2ZM569.9 34", "M 777.5 172.7C770.9 164.6 767.6 152.5 767.6 136.3L767.6 49.3L736.4 49.3L736.4 34L767.6 34L767.6 -8.6L784.4 -10.4L784.4 34L833.9 34L833.9 49.3L784.4 49.3L784.4 136.3C784.4 147.1 786.3 155.3 790.1 160.9C793.9 166.5 800.8 169.3 810.8 169.3C814.2 169.3 818.1 168.6 822.5 167.3C826.9 166 831 164.5 834.8 162.7L840.5 177.1C829.7 182.3 819.5 184.9 809.9 184.9C794.9 184.9 784.1 180.8 777.5 172.7", "M 990.8 99.7C990.6 83.9 985.2 71.1 974.6 61.4C964 51.7 950.1 46.9 932.9 46.9C916.7 46.9 903.4 51.6 893.1 61.1C882.8 70.6 876.9 83.5 875.3 99.7ZM894.3 175.6C882.8 169 873.9 159.8 867.5 148.1C861.1 136.4 857.9 123.1 857.9 108.1C857.9 93.3 861 80 867.3 68.3C873.6 56.6 882.4 47.5 893.7 41C905 34.5 918 31.3 932.6 31.3C947.8 31.3 961 34.3 972.3 40.4C983.6 46.5 992.3 55.2 998.4 66.4C1004.5 77.6 1007.6 90.6 1007.6 105.4C1007.6 109.6 1007.5 112.7 1007.3 114.7L875.3 114.7C876.7 131.5 882.6 144.8 893.1 154.6C903.6 164.4 917.3 169.3 934.1 169.3C944.5 169.3 954.5 167.3 964.1 163.3C973.7 159.3 981 154 986 147.4L997.7 157.6C990.7 166.4 981.5 173.2 970.2 178.1C958.9 183 946.8 185.5 933.8 185.5C919 185.5 905.8 182.2 894.3 175.6", "M 1058 139.9C1063 149.1 1069.9 156.2 1078.8 161.3C1087.7 166.4 1097.9 169 1109.3 169C1120.7 169 1130.8 166.4 1139.6 161.3C1148.4 156.2 1155.3 149.1 1160.3 139.9C1165.3 130.7 1167.8 120.1 1167.8 108.1C1167.8 96.1 1165.3 85.5 1160.3 76.3C1155.3 67.1 1148.4 59.9 1139.6 54.8C1130.8 49.7 1120.7 47.2 1109.3 47.2C1097.9 47.2 1087.7 49.7 1078.8 54.8C1069.9 59.9 1063 67.1 1058 76.3C1053 85.5 1050.5 96.1 1050.5 108.1C1050.5 120.1 1053 130.7 1058 139.9M1069.2 175.1C1057.9 168.6 1049.1 159.6 1042.8 148C1036.5 136.4 1033.4 123.1 1033.4 108.1C1033.4 93.1 1036.5 79.8 1042.8 68.2C1049.1 56.6 1057.9 47.5 1069.2 41C1080.5 34.5 1093.3 31.3 1107.5 31.3C1120.7 31.3 1132.6 34 1143.2 39.4C1153.8 44.8 1162 52.2 1167.8 61.6L1167.8 -27.8L1184.9 -27.8L1184.9 182.2L1169.3 182.2L1169 152.8C1163.4 162.6 1155.1 170.4 1144.2 176.2C1133.3 182 1121.1 184.9 1107.5 184.9C1093.3 184.9 1080.5 181.6 1069.2 175.1"];
var M = {
  W: W, R: 182.1, C: 91.05, WX: 592.4,
  frame: 'M91 8.55H173.55V173.55H8.55V8.55Z',
  stroke: 'M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55H182.1',
  stem: 'M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55',
  bar: 'M73.1 75.55H182.1',
  sq: 'M0 0',
  one: 'M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55H173.55V173.55H8.55V8.55H173.55V75.55',
  STEM: 109 / 375.6,
  // mark centre (k=0) or lockup centre (k=1) placed at (x, y), scale s: an SVG transform
  at: function (x, y, s, k) { var ox = 91.05 + 501.35 * (k || 0); return 'translate(' + (x - ox * s) + ' ' + (y - 91.05 * s) + ') scale(' + s + ')'; },
  mark: function (p) {
    return '<g class="' + p + '-mark"><path class="mk-line ' + p + '-frame" pathLength="1" d="' + M.frame + '"/>' +
      '<path class="mk-line ' + p + '-stroke" pathLength="1" d="' + M.stroke + '"/>' +
      '<path class="mk-fill ' + p + '-sq" d="' + M.sq + '"/></g>';
  },
  word: function (p) {
    return '<g class="' + p + '-word">' + W.map(function (d) { return '<path class="mk-fill ' + p + '-l" d="' + d + '"/>'; }).join('') + '</g>';
  },
  // draw a pathLength=1 line to progress p
  draw: function (el, p) {
    p = Math.max(0, Math.min(1, p));
    el.style.strokeDasharray = p >= 0.999 ? 'none' : '1 1';
    el.style.strokeDashoffset = String(1 - p);
    el.style.opacity = p <= 0.001 ? 0 : 1;
  },
  // sample a path (in mark units) into n points, done once in init
  sample: function (kit, d, n) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('style', 'position:absolute;width:0;height:0');
    var pth = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pth.setAttribute('d', d); svg.appendChild(pth); kit.stage.appendChild(svg);
    var L = pth.getTotalLength(), out = [];
    for (var i = 0; i < n; i++) { var q = pth.getPointAtLength(L * i / (n - 1)); out.push([q.x, q.y]); }
    svg.remove();
    return out;
  },
};
// 3D: the mark as N stacked layers (one continuous stroke each), front layer lit by a moving band
M.solid = function (p, opt) {
  opt = opt || {};
  var N = opt.n || 22;
  var shape = function (paint) { return '<path pathLength="1" fill="none" stroke-width="17.1" stroke-linejoin="miter" stroke="' + paint + '" d="' + M.one + '"/>'; };
  var sv = function (j, inner) { return '<svg class="' + p + '-ly" data-j="' + j + '" viewBox="0 0 182.1 182.1" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">' + inner + '</svg>'; };
  var h = '<div class="' + p + '-obj" style="position:absolute;left:823.425px;top:403.425px;width:273.15px;height:273.15px;transform-style:preserve-3d">';
  for (var j = N - 1; j >= 1; j--) h += sv(j, shape('color-mix(in srgb, var(--main) ' + Math.round(100 - j * 55 / N) + '%, var(--ground))'));
  h += sv(0, '<defs><linearGradient id="' + p + '-lg" gradientUnits="userSpaceOnUse" x1="-200" y1="0" x2="0" y2="60">' +
    '<stop offset="0" stop-color="currentColor"/><stop offset="0.44" stop-color="currentColor"/><stop offset="0.5" stop-color="var(--accent)"/>' +
    '<stop offset="0.56" stop-color="currentColor"/><stop offset="1" stop-color="currentColor"/></linearGradient></defs>' + shape('url(#' + p + '-lg)'));
  return h + '</div>';
};
M.solidRefs = function (kit, p) {
  var ly = [].slice.call(kit.stage.querySelectorAll('.' + p + '-ly')).map(function (el) {
    return { s: el.style, j: +el.getAttribute('data-j'), path: el.querySelector('path') };
  });
  return { obj: kit.stage.querySelector('.' + p + '-obj').style, ly: ly, front: ly[ly.length - 1], lg: kit.stage.querySelector('#' + p + '-lg') };
};
// o: depth (px between layers), fade (back layers 0..1), light (band x in mark units), front (css colour), draw (0..1)
M.solidSet = function (r, o) {
  r.ly.forEach(function (l) {
    var z = typeof o.depth === 'function' ? o.depth(l.j) : -l.j * o.depth;
    l.s.transform = 'translateZ(' + z.toFixed(2) + 'px)';
    if (l.j > 0) l.s.opacity = 1 - (o.fade || 0);
    if (o.draw != null) M.draw(l.path, o.draw);
  });
  r.lg.setAttribute('gradientTransform', 'translate(' + (o.light == null ? -400 : o.light).toFixed(1) + ' 0)');
  r.front.s.color = o.front || 'var(--second)';
};
window.MINT = M;
})();

window.start3D=function(stage){
 const seg=(t,a,b)=>Math.min(1,Math.max(0,(t-a)/(b-a))),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,lerp=(a,b,t)=>a+(b-a)*t;
 const kit={stage,seg,eo,eio,lerp,h:html=>{const d=document.createElement('div');d.innerHTML=html;return d.firstElementChild;},_s:null,scene(id,def){this._s=def;}};
 const SRC=(function(kit){const { seg, eo, eio, lerp } = kit;
kit.scene('d3-draw', {
  init(kit) {
    const M = window.MINT;
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="d3 d3d-cam"><svg class="art" viewBox="0 0 1920 1080"><g class="d3d-grid">' +
      '<rect class="hair" x="823.4" y="403.4" width="273.2" height="273.2"/>' +
      '<path class="hair-dim" d="M300 403.4H1620M300 676.6H1620M823.4 0V1080M1096.6 0V1080M300 540H1620M960 0V1080"/></g></svg>' +
      M.solid('d3d') + '</div>' +
      '<svg class="art" viewBox="0 0 1920 1080"><defs><clipPath id="d3d-clip"><rect class="d3d-cr" x="200" y="-80" width="0" height="320"/></clipPath></defs>' +
      '<g class="d3d-lock green">' + M.mark('d3d') + '<g clip-path="url(#d3d-clip)"><g class="d3d-wm">' + M.word('d3d') + '</g></g></g></svg>' + '</div>'));
    const q = (s) => kit.stage.querySelector(s);
    this.cam = q('.d3d-cam').style; this.grid = q('.d3d-grid').style;
    this.lock = q('.d3d-lock'); this.cr = q('.d3d-cr'); this.wm = q('.d3d-wm');
    this.r = M.solidRefs(kit, 'd3d');
    this.top = this.r.ly.length - 1;
    M.draw(q('.d3d-frame'), 1); M.draw(q('.d3d-stroke'), 1);
  },
  render(t) {
    const M = window.MINT, top = this.top;
    const up = eio(seg(t, 1.9, 2.9));
    this.cam.transform = 'perspective(1700px) rotateX(' + lerp(58, 0, up) + 'deg) rotateZ(' + lerp(-22 + 4 * eio(seg(t, 0, 1.9)), 0, up) + 'deg) scale(' + lerp(0.95, 1, up) + ')';
    const flat = eio(seg(t, 2.6, 3.1));
    M.solidSet(this.r, { depth: (j) => (top - j) * 3.2 * (1 - flat), fade: flat, draw: eio(seg(t, -0.1, 1.8)),
      light: lerp(-300, 420, eio(seg(t, 1.6, 3.0))),
      front: 'color-mix(in srgb, var(--main) ' + Math.round(100 * flat) + '%, var(--second))' });
    this.grid.opacity = 1 - eio(seg(t, 1.8, 2.6));
    const swap = t >= 3.1;
    this.r.obj.opacity = swap ? 0 : 1;
    this.lock.style.opacity = swap ? 1 : 0;
    const k = eio(seg(t, 3.1, 3.8));
    const s = lerp(1.5, 0.72, k) * (1 + 0.012 * eio(seg(t, 3.8, 4.8)));
    this.lock.setAttribute('transform', M.at(960, 540, s, k));
    this.cr.setAttribute('width', 1000 * eio(seg(t, 3.25, 4.0)));
    this.wm.setAttribute('transform', 'translate(' + lerp(-60, 0, eo(seg(t, 3.25, 4.1))) + ' 0)');
  },
});
 return kit._s;})(kit);
 SRC.init(kit);const t0=performance.now();let raf;
 const tick=now=>{if(!stage.isConnected)return;const t=Math.min(4.8,(now-t0)/1000);SRC.render.call(SRC,t);if(t<4.8)raf=requestAnimationFrame(tick);};
 raf=requestAnimationFrame(tick);};

/* ===== Minted · splash (4 animations) + login / OTP / biometrics / PIN — L3 tokens ===== */
const MINT_SVG=(cls='')=>`<svg class="mt-logo ${cls}" viewBox="-6 -36 1200 226" aria-label="Minted"><g class="mt-mark" fill="none" stroke="currentColor" stroke-width="17.1" stroke-miterlimit="10"><path class="mk1" d="M91 8.55H173.55V173.55H8.55V8.55Z"/><path class="mk2" d="M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55"/><path class="mk3" d="M73.1 75.55H182.1"/></g><g class="mt-word" fill="currentColor"><path d="M 227.9 34L243.5 34L243.8 58.9C249.2 50.3 256.1 43.6 264.5 38.9C272.9 34.2 282.3 31.9 292.7 31.9C305.5 31.9 316.4 34.8 325.5 40.7C334.6 46.6 341.2 55 345.2 65.8C350.6 55 358.1 46.6 367.7 40.7C377.3 34.8 388 31.9 399.8 31.9C418.4 31.9 433 37.5 443.6 48.8C454.2 60.1 459.5 75.8 459.5 95.8L459.5 182.2L442.4 182.2L442.4 97C442.4 81.2 438.7 69 431.3 60.5C423.9 52 413.3 47.8 399.5 47.8C390.5 47.8 382.4 50 375.2 54.4C368 58.8 362.3 64.9 358.2 72.7C354.1 80.5 352.1 89.3 352.1 99.1L352.1 182.2L335 182.2L335 97C335 81.2 331.3 69 323.9 60.5C316.5 52 305.9 47.8 292.1 47.8C283.1 47.8 275 50 267.8 54.4C260.6 58.8 255 64.9 251 72.7C247 80.5 245 89.3 245 99.1L245 182.2L227.9 182.2ZM227.9 34"/><path d="M 505.1 34L522.2 34L522.2 182.2L505.1 182.2ZM503.9 -21.1C506.5 -23.6 509.7 -24.8 513.5 -24.8C517.5 -24.8 520.8 -23.6 523.4 -21.1C526 -18.6 527.3 -15.4 527.3 -11.6C527.3 -7.6 526 -4.4 523.4 -1.9C520.8 0.6 517.5 1.9 513.5 1.9C509.7 1.9 506.5 0.6 503.9 -2C501.3 -4.6 500 -7.8 500 -11.6C500 -15.4 501.3 -18.6 503.9 -21.1"/><path d="M 569.9 34L585.5 34L585.8 60.7C591.6 51.7 599.5 44.6 609.5 39.5C619.5 34.4 630.5 31.9 642.5 31.9C662.1 31.9 677.4 37.7 688.5 49.3C699.6 60.9 705.2 77 705.2 97.6L705.2 182.2L688.1 182.2L688.1 98.5C688.1 82.1 684 69.5 675.8 60.8C667.6 52.1 655.9 47.8 640.7 47.8C630.3 47.8 621 50.1 612.8 54.7C604.6 59.3 598.2 65.6 593.7 73.7C589.2 81.8 587 90.9 587 100.9L587 182.2L569.9 182.2ZM569.9 34"/><path d="M 777.5 172.7C770.9 164.6 767.6 152.5 767.6 136.3L767.6 49.3L736.4 49.3L736.4 34L767.6 34L767.6 -8.6L784.4 -10.4L784.4 34L833.9 34L833.9 49.3L784.4 49.3L784.4 136.3C784.4 147.1 786.3 155.3 790.1 160.9C793.9 166.5 800.8 169.3 810.8 169.3C814.2 169.3 818.1 168.6 822.5 167.3C826.9 166 831 164.5 834.8 162.7L840.5 177.1C829.7 182.3 819.5 184.9 809.9 184.9C794.9 184.9 784.1 180.8 777.5 172.7"/><path d="M 990.8 99.7C990.6 83.9 985.2 71.1 974.6 61.4C964 51.7 950.1 46.9 932.9 46.9C916.7 46.9 903.4 51.6 893.1 61.1C882.8 70.6 876.9 83.5 875.3 99.7ZM894.3 175.6C882.8 169 873.9 159.8 867.5 148.1C861.1 136.4 857.9 123.1 857.9 108.1C857.9 93.3 861 80 867.3 68.3C873.6 56.6 882.4 47.5 893.7 41C905 34.5 918 31.3 932.6 31.3C947.8 31.3 961 34.3 972.3 40.4C983.6 46.5 992.3 55.2 998.4 66.4C1004.5 77.6 1007.6 90.6 1007.6 105.4C1007.6 109.6 1007.5 112.7 1007.3 114.7L875.3 114.7C876.7 131.5 882.6 144.8 893.1 154.6C903.6 164.4 917.3 169.3 934.1 169.3C944.5 169.3 954.5 167.3 964.1 163.3C973.7 159.3 981 154 986 147.4L997.7 157.6C990.7 166.4 981.5 173.2 970.2 178.1C958.9 183 946.8 185.5 933.8 185.5C919 185.5 905.8 182.2 894.3 175.6"/><path d="M 1058 139.9C1063 149.1 1069.9 156.2 1078.8 161.3C1087.7 166.4 1097.9 169 1109.3 169C1120.7 169 1130.8 166.4 1139.6 161.3C1148.4 156.2 1155.3 149.1 1160.3 139.9C1165.3 130.7 1167.8 120.1 1167.8 108.1C1167.8 96.1 1165.3 85.5 1160.3 76.3C1155.3 67.1 1148.4 59.9 1139.6 54.8C1130.8 49.7 1120.7 47.2 1109.3 47.2C1097.9 47.2 1087.7 49.7 1078.8 54.8C1069.9 59.9 1063 67.1 1058 76.3C1053 85.5 1050.5 96.1 1050.5 108.1C1050.5 120.1 1053 130.7 1058 139.9M1069.2 175.1C1057.9 168.6 1049.1 159.6 1042.8 148C1036.5 136.4 1033.4 123.1 1033.4 108.1C1033.4 93.1 1036.5 79.8 1042.8 68.2C1049.1 56.6 1057.9 47.5 1069.2 41C1080.5 34.5 1093.3 31.3 1107.5 31.3C1120.7 31.3 1132.6 34 1143.2 39.4C1153.8 44.8 1162 52.2 1167.8 61.6L1167.8 -27.8L1184.9 -27.8L1184.9 182.2L1169.3 182.2L1169 152.8C1163.4 162.6 1155.1 170.4 1144.2 176.2C1133.3 182 1121.1 184.9 1107.5 184.9C1093.3 184.9 1080.5 181.6 1069.2 175.1"/></g></svg>`;   /* new Minted mark + outlined wordmark (from the 3D film artifact) */
const MINT_MARK=()=>`<svg class="mt-markonly" viewBox="-6 -6 194 194" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="17.1"><path d="M91 8.55H173.55V173.55H8.55V8.55Z"/><path d="M106.55 0V109A33.45 33.45 0 1 1 73.1 75.55H182.1"/></g></svg>`;
const AUTH={splash:'s5',mode:'otp',num:'',otp:'',pin:'',done:null};
// OTP resend + limits (user, 2026-11-01): Resend unlocks after 30 s, 3 resends at most; 3 wrong codes lock the OTP.
const OTP_WAIT=30,OTP_TRIES=3,OTP_RESENDS=3;
const otpReset=()=>{AUTH.otp='';AUTH.err=false;AUTH.tries=0;AUTH.rsN=0;AUTH.lock=false;AUTH.rsAt=Date.now()+OTP_WAIT*1000;};
const otpLeft=()=>Math.max(0,Math.ceil(((AUTH.rsAt||0)-Date.now())/1000));
const otpRs=v1=>{const q=v1?'Didn’t receive OTP?':'Didn’t receive the code?';
 if(AUTH.lock)return '<span class="o2e">Too many incorrect attempts. Try again after 30 minutes.</span>';
 if(AUTH.rsN>=OTP_RESENDS)return 'Resend limit reached. Try again after 30 minutes.';
 const t=otpLeft();if(t)return `${q} Resend in <span class="rs-t">0:${String(t).padStart(2,'0')}</span>`;
 return `${q} <b data-rs role="button">Resend${v1?' OTP':''}</b>${v1?' • <b>OTP on Call</b>':''}`;};
const otpWrong=()=>{AUTH.tries=(AUTH.tries||0)+1;if(AUTH.tries>=OTP_TRIES)AUTH.lock=true;};
const otpWrongMsg=()=>{const n=OTP_TRIES-(AUTH.tries||0);return AUTH.lock?'Too many incorrect attempts':`Incorrect OTP. ${n} attempt${n===1?'':'s'} left`;};
(()=>{const dv=document.getElementById('device');const el=document.createElement('div');el.id='auth';el.className='auth';el.hidden=true;dv.appendChild(el);
 const keypad=()=>`<div class="au-kp">${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k=>k===''?'<i></i>':`<button data-k="${k}" aria-label="${k==='⌫'?'Delete':k}">${k==='⌫'?'<svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><path d="M7 1h13a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7L1 8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 5l6 6M16 5l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>':k}</button>`).join('')}</div>`;
 const sb='<div class="au-sb" aria-hidden="true">'+SBI+'</div>';
 const fmtNum=n=>n.length>5?n.slice(0,5)+' '+n.slice(5):n;
 const V={
  splash:()=>AUTH.splash==='s5'?`<div class="au-splash sp-s5"><div class="f3d-wrap"><div class="f3d"></div></div><div class="tm5" aria-label="Rated 4.4+, FIU registered, ISO certified"><div><svg viewBox="0 0 32 32" width="32" height="32"><path d="M15.0177 5.62703C15.4058 4.79115 16.5942 4.79115 16.9823 5.62703L19.4285 10.8943C19.5863 11.2341 19.9086 11.4683 20.2805 11.5133L26.0459 12.2121C26.9608 12.323 27.328 13.4531 26.653 14.0806L22.3995 18.0347C22.125 18.2898 22.0019 18.6687 22.074 19.0363L23.1911 24.7355C23.3683 25.6399 22.4069 26.3383 21.6016 25.8903L16.5266 23.0668C16.1992 22.8846 15.8008 22.8846 15.4734 23.0668L10.3984 25.8903C9.59305 26.3383 8.63168 25.6399 8.80894 24.7355L9.92599 19.0363C9.99806 18.6687 9.87497 18.2898 9.60054 18.0347L5.34697 14.0806C4.67197 13.4531 5.03918 12.323 5.9541 12.2121L11.7195 11.5133C12.0914 11.4683 12.4137 11.2341 12.5715 10.8943L15.0177 5.62703Z" fill="url(#tmg1)"/><defs><linearGradient id="tmg1" x1="16" y1="5" x2="16" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#37AD75"/><stop offset="1" stop-color="#063D23"/></linearGradient></defs></svg><b>4.4+</b><small>Rated</small></div><div><svg viewBox="0 0 32 32" width="32" height="32"><path d="M25.1963 25.0289H25.9707V26.5807H6V25.0289H6.83398V23.9586H25.1963V25.0289ZM12.04 13.942H11.2656V21.7516H12.04V23.5406H7.62891V21.7516H8.40332V13.942H7.62891V12.9274H12.04V13.942ZM18.1904 13.942H17.416V21.7516H18.1904V23.5406H13.7803V21.7516H14.5537V13.942H13.7803V12.9274H18.1904V13.942ZM24.3926 12.9274V13.942H23.6152V21.7516H24.3926V23.5406H19.9785V21.7516H20.7529V13.942H19.9785V12.9274H24.3926ZM26 9.65002V11.1989H25.1963V12.2721H6.83398V11.1989H6.0293V9.65002L15.9834 4.99963L26 9.65002Z" fill="url(#tmg2)"/><defs><linearGradient id="tmg2" x1="16" y1="5" x2="16" y2="26.6" gradientUnits="userSpaceOnUse"><stop stop-color="#37AD75"/><stop offset="1" stop-color="#063D23"/></linearGradient></defs></svg><b>FIU</b><small>Registered</small></div><div><svg viewBox="0 0 32 32" width="32" height="32"><path d="M16.1641 4.23132C16.2229 4.26647 20.7757 6.93829 24.9062 7.60925L25.5449 7.71375V14.662C25.5449 16.6208 25.0923 18.5888 24.2314 20.3436C23.3674 22.1046 22.092 23.668 20.541 24.868C19.281 25.837 17.8082 26.8153 16.1582 27.7753L15.7744 27.9999L15.3896 27.7753C13.7397 26.8153 12.2668 25.837 11.0068 24.868C9.45885 23.668 8.18431 22.1046 7.32031 20.3436C6.45635 18.5887 6.00002 16.6209 6 14.662V7.71375L6.6416 7.60925C10.7697 6.93869 15.3196 4.26958 15.3838 4.23132L15.7744 3.99988L16.1641 4.23132ZM15.75 11.5419C14.457 11.5419 13.4073 12.6278 13.4072 13.9628V15.1864H12.8672C12.5163 15.1864 12.2345 15.4987 12.2344 15.8885V19.7499C12.2344 20.1399 12.5162 20.455 12.8672 20.455H18.6719C19.0199 20.455 19.3047 20.1399 19.3047 19.7499V15.8885C19.3045 15.4987 19.0198 15.1864 18.6719 15.1864H18.1348V13.9628C18.1347 12.6278 17.085 11.5419 15.7891 11.5419H15.75ZM15.7617 16.8153C16.0466 16.8154 16.2754 17.047 16.2754 17.3319C16.2752 17.5356 16.1581 17.7129 15.9873 17.7938L16.2393 18.8612H15.2637L15.5195 17.7841C15.3577 17.7001 15.2463 17.5297 15.2461 17.3319C15.2461 17.0471 15.4769 16.8155 15.7617 16.8153ZM15.792 12.4628C16.5779 12.4629 17.2168 13.1349 17.2168 13.9628V15.1864H14.3281V13.9628C14.3281 13.1348 14.967 12.4629 15.7529 12.4628H15.792Z" fill="url(#tmg3)"/><defs><linearGradient id="tmg3" x1="15.77" y1="4" x2="15.77" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#37AD75"/><stop offset="1" stop-color="#063D23"/></linearGradient></defs></svg><b>ISO</b><small>Certified</small></div></div></div>`:`<div class="au-splash sp-${AUTH.splash}"><i class="sp-flood"></i>${MINT_SVG('sp-logo')}
   <div class="sp-stat"><b>US Markets</b><span>Trade from ₹400 · 24×7</span></div>
   <div class="sp-badges"><span><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.5 5.8 21l1.4-7L2 9.3l7-.8z" fill="currentColor"/></svg><b>4.4+</b>Rated</span><span><svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><b>FIU</b>Registered</span><span><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" fill="currentColor"/></svg><b>ISO</b>Certified</span></div></div>`,
  login:()=>`${sb}<div class="au-top"><span></span><button class="au-help">Help</button></div><div class="au-body"><h1>Enter Your Mobile Number</h1><p class="au-sub">We will send you an SMS with a verification code on this number</p>
   <p class="au-big ${AUTH.num?'':'ph'}">${AUTH.num?fmtNum(AUTH.num):'10 - digit number'}<i class="au-caret"></i></p></div>
   <div class="au-foot"><button class="au-cta l3-btn" data-variant="brand" data-size="lg" data-go="tnc" ${AUTH.num.length===10?'':'disabled'}>Send OTP</button><p class="au-note">Only applicable for Indian Residents</p></div>${keypad()}`,
  tnc:()=>V.login()+`<div class="au-scrim"></div><div class="au-sheet"><i class="au-grab"></i><h2>Please agree to our Terms<br>&amp; conditions</h2>
   <button class="au-chk" data-chk="a" aria-pressed="false"><i></i><span>I hereby understand and agree to the <u>Terms of Use</u>, <u>Privacy Policy</u> and <u>KYC-AML Policy</u> of Minted.</span></button>
   <button class="au-chk" data-chk="b" aria-pressed="false"><i></i><span>I accept the updated Trading Policy and agree that my basic KYC data may be shared with Minted’s trading partner.</span></button>
   <p class="au-tnc-note"><b>NOTE : </b>Tokenised perpetuals are not associated with, sponsored by, endorsed by, or affiliated with the issuer of the underlying shares, or with the exchange on which the underlying asset is listed. You get price exposure only — you do not own the underlying shares.</p>
   <button class="au-cta l3-btn" data-variant="brand" data-size="lg" data-go="otp" disabled>I agree and generate OTP</button></div>`,
  otp:()=>`${sb}<div class="au-top"><button class="au-back" data-go="login" aria-label="Back">←</button><button class="au-help">Help</button></div><div class="au-body"><h1>OTP Verification</h1><p class="au-sub">Please enter the 6-digit OTP sent to your registered email or</p>
   <p class="au-ph">+91 ${fmtNum(AUTH.num||'9846098460')} <button class="au-edit" data-go="login" aria-label="Edit number">✎</button></p>
   <p class="au-big ${AUTH.otp?'':'ph'}">${AUTH.otp||'000000'}<i class="au-caret"></i></p>
   <p class="au-rs">${otpRs(1)}</p><p class="au-hint">Prototype: any 6 digits work · 000000 is wrong (3 wrong locks it)</p></div>
   ${AUTH.err?'<div class="au-err"><i>!</i>'+otpWrongMsg()+'<button data-x="err" aria-label="Dismiss">✕</button></div>':''}
   ${keypad()}`,   /* no Verify button: the 6th digit verifies (user, 2026-11-01) */
  otp2:()=>{const o=AUTH.otp,n=o.length;const bx=[0,1,2,3,4,5].map(i=>`<span class="ob ${i<n?'f':''} ${i===n?'cur':''}" style="--i:${i};--dx:${(140-(i*48+20))}px">${o[i]||''}</span>`).join('');
   return V.login()+`<div class="au-scrim o2s"></div><div class="o2 ${AUTH.err?'bad':''} ${AUTH.lock?'lock':''}"><i class="au-grab"></i><h2 class="o2t">Let’s verify your number</h2><h2 class="o2t2">Verified successfully</h2>
   <p class="o2s1">We’ve sent a 6-digit code to +91 ${fmtNum(AUTH.num||'9846098460')}.</p>
   <div class="o2row">${bx}<span class="o2ok"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4 8-9"/></svg></span></div>
   <p class="o2rs">${AUTH.err?`<span class="o2e">${otpWrongMsg()}</span>`:otpRs(0)}</p></div>`;},   /* no Verify button: the 6th digit verifies (user, 2026-11-01) */
  bio:()=>`${sb}<div class="au-bio"><h1>Enable Biometrics?</h1><p class="au-sub">Secure your account with biometric access</p><svg class="au-bio-ic" width="96" height="96" viewBox="0 0 96 96" aria-hidden="true"><path d="M48.1832 22.4991C54.4053 22.4991 60.1415 23.8325 65.3915 26.4991C70.6415 29.1658 75.0998 32.9991 78.7665 37.9991L77.5998 39.1658C74.0998 34.277 69.836 30.5546 64.8082 27.9991C59.7803 25.4436 54.2387 24.1658 48.1832 24.1658C42.2943 24.1658 36.8637 25.4296 31.8915 27.9575C26.9193 30.4853 22.5998 34.1936 18.9332 39.0825L17.6832 38.3325C21.2387 33.2213 25.6553 29.3046 30.9332 26.5825C36.211 23.8602 41.961 22.4991 48.1832 22.4991ZM48.1832 30.4991C55.8498 30.4991 62.3637 33.027 67.7248 38.0825C73.086 43.138 75.7665 49.277 75.7665 56.4991C75.7665 59.0546 74.822 61.2213 72.9332 62.9991C71.0443 64.777 68.7665 65.6658 66.0998 65.6658C63.322 65.6658 60.9748 64.777 59.0582 62.9991C57.1415 61.2213 56.1832 59.0546 56.1832 56.4991C56.1832 54.388 55.4053 52.5963 53.8498 51.1241C52.2943 49.652 50.4053 48.9158 48.1832 48.9158C45.9053 48.9158 43.9887 49.652 42.4332 51.1241C40.8777 52.5963 40.0998 54.388 40.0998 56.4991C40.0998 61.9436 41.7803 66.652 45.1415 70.6241C48.5027 74.5963 53.211 77.4713 59.2665 79.2491L58.9332 80.9158C52.4887 79.1936 47.461 76.1796 43.8498 71.8741C40.2387 67.5686 38.4332 62.4436 38.4332 56.4991C38.4332 53.9436 39.3777 51.763 41.2665 49.9575C43.1553 48.152 45.461 47.2491 48.1832 47.2491C50.9053 47.2491 53.211 48.152 55.0998 49.9575C56.9887 51.763 57.9332 53.9436 57.9332 56.4991C57.9332 58.6103 58.7248 60.388 60.3082 61.8325C61.8915 63.277 63.822 63.9991 66.0998 63.9991C68.322 63.9991 70.197 63.277 71.7248 61.8325C73.2527 60.388 74.0165 58.6103 74.0165 56.4991C74.0165 49.777 71.5027 44.0825 66.4748 39.4158C61.447 34.7491 55.3498 32.4158 48.1832 32.4158C41.0165 32.4158 34.9193 34.7491 29.8915 39.4158C24.8637 44.0825 22.3498 49.777 22.3498 56.4991C22.3498 58.4991 22.572 60.5825 23.0165 62.7491C23.4609 64.9158 24.1276 67.2213 25.0165 69.6658L23.3498 70.4158C22.4609 67.8046 21.8082 65.3603 21.3915 63.0825C20.9748 60.8046 20.7665 58.6103 20.7665 56.4991C20.7665 49.388 23.4748 43.277 28.8915 38.1658C34.3082 33.0546 40.7387 30.4991 48.1832 30.4991ZM48.1832 14.0825C51.7943 14.0825 55.336 14.5269 58.8082 15.4158C62.2803 16.3047 65.822 17.6658 69.4332 19.4991L68.6832 20.9991C65.0165 19.2213 61.5165 17.9158 58.1832 17.0825C54.8498 16.2491 51.5165 15.8325 48.1832 15.8325C44.572 15.8325 41.1415 16.2352 37.8915 17.0408C34.6415 17.8463 31.3777 19.138 28.0998 20.9158L27.1832 19.5825C30.6277 17.7491 34.086 16.3741 37.5582 15.4575C41.0303 14.5408 44.572 14.0825 48.1832 14.0825ZM48.1832 38.9158C53.572 38.9158 58.0443 40.6796 61.5998 44.2075C65.1553 47.7353 66.9332 52.1103 66.9332 57.3325H65.1832C65.1832 52.4991 63.572 48.4991 60.3498 45.3325C57.1277 42.1658 53.072 40.5825 48.1832 40.5825C43.461 40.5825 39.4748 42.1241 36.2248 45.2075C32.9748 48.2908 31.3498 52.0546 31.3498 56.4991C31.3498 60.9436 32.1137 64.8463 33.6415 68.2075C35.1693 71.5686 37.8498 75.2213 41.6832 79.1658L40.4332 80.4158C36.5443 76.2491 33.7665 72.3463 32.0998 68.7075C30.4332 65.0686 29.5998 60.9991 29.5998 56.4991C29.5998 51.6103 31.4053 47.4575 35.0165 44.0408C38.6277 40.6241 43.0165 38.9158 48.1832 38.9158ZM52.6832 68.7491C50.9053 67.0825 49.5582 65.152 48.6415 62.9575C47.7248 60.763 47.2665 58.3046 47.2665 55.5825H48.9332C48.9332 58.0825 49.3498 60.3325 50.1832 62.3325C51.0165 64.3325 52.2665 66.0825 53.9332 67.5825C55.4887 69.027 57.2527 70.1241 59.2248 70.8741C61.197 71.6241 63.2387 71.9991 65.3498 71.9991C66.1277 71.9991 66.8777 71.9436 67.5998 71.8325C68.322 71.7213 69.0443 71.5825 69.7665 71.4158L70.0998 73.0825C69.322 73.2491 68.5303 73.388 67.7248 73.4991C66.9193 73.6103 66.1277 73.6658 65.3498 73.6658C62.961 73.6658 60.6832 73.2491 58.5165 72.4158C56.3498 71.5825 54.4053 70.3603 52.6832 68.7491Z" fill="#0F9958"/><path d="M0 24.75V4.75C2.57706e-07 2.12665 2.12665 0 4.75 0H24.75C25.1642 0 25.5 0.335786 25.5 0.75C25.5 1.16421 25.1642 1.5 24.75 1.5H4.75C2.95508 1.5 1.5 2.95507 1.5 4.75V24.75C1.5 25.1642 1.16421 25.5 0.75 25.5C0.335786 25.5 0 25.1642 0 24.75Z" fill="var(--text-4,#454947)"/><path d="M0 70.75V90.75C2.57706e-07 93.3734 2.12665 95.5 4.75 95.5H24.75C25.1642 95.5 25.5 95.1642 25.5 94.75C25.5 94.3358 25.1642 94 24.75 94H4.75C2.95508 94 1.5 92.5449 1.5 90.75V70.75C1.5 70.3358 1.16421 70 0.75 70C0.335786 70 0 70.3358 0 70.75Z" fill="var(--text-4,#454947)"/><path d="M95.5 24.75V4.75C95.5 2.12665 93.3734 0 90.75 0H70.75C70.3358 0 70 0.335786 70 0.75C70 1.16421 70.3358 1.5 70.75 1.5H90.75C92.5449 1.5 94 2.95507 94 4.75V24.75C94 25.1642 94.3358 25.5 94.75 25.5C95.1642 25.5 95.5 25.1642 95.5 24.75Z" fill="var(--text-4,#454947)"/><path d="M95.5 70.75V90.75C95.5 93.3734 93.3734 95.5 90.75 95.5H70.75C70.3358 95.5 70 95.1642 70 94.75C70 94.3358 70.3358 94 70.75 94H90.75C92.5449 94 94 92.5449 94 90.75V70.75C94 70.3358 94.3358 70 94.75 70C95.1642 70 95.5 70.3358 95.5 70.75Z" fill="var(--text-4,#454947)"/></svg></div>
   <div class="au-bio-ft"><button class="au-cta sec l3-btn" data-variant="secondary" data-size="lg" data-go="enter">Skip</button><button class="au-cta l3-btn" data-variant="brand" data-size="lg" data-go="enter">Allow</button></div>`,
  pin:()=>`${sb}<div class="au-top"><span></span><button class="au-help">Help</button></div><div class="au-body au-center">${MINT_MARK()}<h1>Enter Your PIN</h1><p class="au-sub">Access your account with your 4-digit PIN</p>
   <div class="au-dots ${AUTH.err?'err':''}">${[0,1,2,3].map(i=>`<i class="${i<AUTH.pin.length?'on':''}"></i>`).join('')}</div>${AUTH.err?'<p class="au-errt">Incorrect PIN. 2 attempts remaining</p>':''}<button class="au-link">Forgot PIN</button></div>${keypad()}`};
 let scr='splash';
 function render(){el.innerHTML=V[scr]();el.dataset.s=scr;if(scr==='splash'&&AUTH.splash==='s5'&&window.start3D)start3D(el.querySelector('.f3d'));}
 // Step motion (user, 2026-11-01): a sheet step (Terms, the OTP sheet) slides up over Sign in and back down; a new page
 // pushes in from the right and Back slides it out to the right. Jumps from the preview panel (authShow) stay instant.
 const SHEET={tnc:'.au-sheet',otp2:'.o2'},PAGE={splash:0,login:1,tnc:1,otp2:1,otp:2,bio:3,pin:4},EZ='cubic-bezier(.2,0,0,1)',EOUT='cubic-bezier(.3,0,1,1)';
 let still=false;
 const frozen=n=>{n.classList.add('au-old');n.style.pointerEvents='none';return n;};
 function go(s){const from=scr;scr=s;AUTH.err=false;
  if(still||el.hidden||from===s||from==='splash'||s==='splash'||matchMedia('(prefers-reduced-motion: reduce)').matches){render();return;}
  if(PAGE[from]===PAGE[s]){   // the same page underneath: a sheet opens, closes or swaps for another
   const old=SHEET[from]?[el.querySelector(SHEET[from]),SHEET[s]?null:el.querySelector('.au-scrim')].filter(Boolean).map(n=>frozen(n.cloneNode(true))):[];
   render();
   if(SHEET[s]){const sh=el.querySelector(SHEET[s]),sc=el.querySelector('.au-scrim');if(sh)sh.animate([{transform:'translateY(100%)'},{transform:'none'}],{duration:340,easing:EZ});if(sc&&!SHEET[from])sc.animate([{opacity:0},{opacity:1}],{duration:240});}
   old.forEach(n=>{el.appendChild(n);n.animate(n.classList.contains('au-scrim')?[{opacity:1},{opacity:0}]:[{transform:'none'},{transform:'translateY(100%)'}],{duration:260,easing:EOUT,fill:'forwards'});setTimeout(()=>n.remove(),280);});
   return;}
  const push=PAGE[s]>PAGE[from],D=340,snap=frozen(document.createElement('div'));snap.classList.add('au-pg');snap.append(...[...el.childNodes].map(n=>n.cloneNode(true)));
  render();const pg=document.createElement('div');pg.className='au-pg';pg.append(...el.childNodes);el.append(pg);
  if(push)el.insertBefore(snap,pg);else el.append(snap);
  const top=[{transform:'translateX(100%)'},{transform:'none'}],under=[{transform:'translateX(-30%)',filter:'brightness(.7)'},{transform:'none',filter:'none'}];
  (push?pg:snap).animate(push?top:[...top].reverse(),{duration:D,easing:EZ,fill:'forwards'});
  (push?snap:pg).animate(push?[...under].reverse():under,{duration:D,easing:EZ,fill:'forwards'});
  setTimeout(()=>{snap.remove();if(pg.parentNode!==el)return;while(pg.firstChild)el.insertBefore(pg.firstChild,pg);pg.remove();},D+20);}
 // OTP V2 (bottom sheet): wrong code → red shake + clear; right code → boxes glow in sequence, gather into one, become a mint check, then biometrics
 function paint2(){const sh=el.querySelector('.o2');if(!sh){render();return;}const o=AUTH.otp,n=o.length;
  sh.classList.toggle('bad',!!AUTH.err);sh.classList.toggle('lock',!!AUTH.lock);sh.querySelectorAll('.ob').forEach((b,i)=>{b.textContent=o[i]||'';b.classList.toggle('f',i<n);b.classList.toggle('cur',i===n);});
  sh.querySelector('.o2rs').innerHTML=AUTH.err?`<span class="o2e">${otpWrongMsg()}</span>`:otpRs(0);}
 // the resend countdown ticks every second while an OTP step is open
 setInterval(()=>{if((scr!=='otp'&&scr!=='otp2')||el.hidden||(scr==='otp2'&&(AUTH.err||el.querySelector('.o2.ok'))))return;const p=el.querySelector(scr==='otp2'?'.o2rs':'.au-rs');if(p){const h=otpRs(scr==='otp');if(p.innerHTML!==h)p.innerHTML=h;}},1000);
 function verify2(){const sh=el.querySelector('.o2');if(!sh||sh.classList.contains('ok'))return;
  if(AUTH.otp==='000000'){otpWrong();AUTH.err=true;paint2();setTimeout(()=>{if(scr!=='otp2')return;AUTH.err=false;AUTH.otp='';paint2();},1500);return;}
  sh.classList.add('ok');setTimeout(()=>{if(scr==='otp2')go('bio');},2600);}
 // splash → sign-in: the splash is kept on top as a snapshot and dissolves away while the next screen rises in underneath
 function smoothTo(s){const snap=el.querySelector('.au-splash');const keep=snap&&snap.cloneNode(true);go(s);if(!keep)return;
  keep.classList.add('au-snap');keep.querySelectorAll('.f3d').forEach(n=>{const src=snap.querySelector('.f3d');if(src)n.replaceWith(src);});el.appendChild(keep);
  el.classList.add('au-enter');requestAnimationFrame(()=>requestAnimationFrame(()=>{keep.classList.add('out');el.classList.add('au-enter-go');}));
  setTimeout(()=>{keep.remove();el.classList.remove('au-enter','au-enter-go');},1200);}
 function finish(){el.classList.add('out');setTimeout(()=>{el.hidden=true;el.classList.remove('out');stack=['s01'];show();if(AUTH.done)AUTH.done();},280);}
 window.authStart=(onDone)=>{let sk=false;try{sk=localStorage.getItem('kuber-skip-auth')==='1';}catch(e){}if(sk){clearTimeout(AUTH.t);el.hidden=true;if(onDone)onDone();return;}AUTH.done=onDone;AUTH.num='';AUTH.otp='';AUTH.pin='';el.hidden=false;go('splash');clearTimeout(AUTH.t);AUTH.t=setTimeout(()=>smoothTo(AUTH.mode==='pin'?'pin':'login'),AUTH.splash==='s5'?5400:AUTH.splash==='s1'?4200:3000);};
 window.authSkipNow=()=>{clearTimeout(AUTH.t);if(!el.hidden){el.hidden=true;stack=['s01'];show();}};
 window.authShow=s=>{clearTimeout(AUTH.t);AUTH.done=null;AUTH.otp='';AUTH.pin='';AUTH.num=s==='splash'||s==='login'?'':'9876543210';otpReset();el.hidden=false;still=true;go(s);still=false;};   // the preview's panel: open one sign-in step
 el.addEventListener('click',e=>{e.stopPropagation();const k=e.target.closest('[data-k]');
  if(k){const v=k.dataset.k;const key=scr==='login'||scr==='tnc'?'num':scr==='otp'||scr==='otp2'?'otp':scr==='pin'?'pin':null;if(scr==='otp2'&&el.querySelector('.o2.ok'))return;if(!key||scr==='tnc')return;if(key==='otp'&&AUTH.lock)return;const max={num:10,otp:6,pin:4}[key];
   const was=AUTH[key].length;if(v==='⌫')AUTH[key]=AUTH[key].slice(0,-1);else if(key==='num'&&AUTH.num.length<max)AUTH.num+=v+'9846098460'.slice(AUTH.num.length+1);   /* prototype: one digit fills the rest of the 10-digit number (user, 2026-11-01) */
   else if(AUTH[key].length<max)AUTH[key]+=v;AUTH.err=false;const full=key==='otp'&&was===5&&AUTH.otp.length===6;   // OTP: verifies itself once all 6 digits are in
   if(scr==='otp2'){paint2();if(full)setTimeout(()=>{if(scr==='otp2'&&AUTH.otp.length===6)verify2();},250);return;}render();
   if(full)setTimeout(()=>{if(scr!=='otp'||AUTH.otp.length!==6)return;if(AUTH.otp==='000000'){otpWrong();AUTH.err=true;AUTH.otp='';render();}else go('bio');},250);
   if(key==='pin'&&AUTH.pin.length===4){setTimeout(()=>{if(AUTH.pin==='0000'){AUTH.err=true;AUTH.pin='';render();}else finish();},250);}return;}
  const c=e.target.closest('[data-chk]');if(c){c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')!=='true');const all=[...el.querySelectorAll('[data-chk]')].every(b=>b.getAttribute('aria-pressed')==='true');el.querySelector('.au-sheet .au-cta').disabled=!all;return;}
  if(e.target.closest('[data-x="err"]')){AUTH.err=false;render();return;}
  if(e.target.closest('.au-scrim')){if(scr==='otp2'&&el.querySelector('.o2.ok'))return;go('login');return;}
  if(e.target.closest('[data-rs]')){if(AUTH.lock||otpLeft()||AUTH.rsN>=OTP_RESENDS)return;AUTH.rsN++;AUTH.rsAt=Date.now()+OTP_WAIT*1000;AUTH.otp='';AUTH.err=false;if(scr==='otp2')paint2();else render();return;}
  const g=e.target.closest('[data-go]');if(!g||g.disabled)return;const to=g.dataset.go;
  if(to==='verify'){if(AUTH.otp==='000000'){AUTH.err=true;render();}else go('bio');return;}
  if(to==='enter'){finish();return;}
  if(to==='verify2'){verify2();return;}
  if(to==='otp'){otpReset();if(window.OTPV==='v2'){go('otp2');return;}}go(to);});
 window.authOtpV2Verify=()=>verify2();})();

/* ===== Flow presets (V1, V2) — applied on load and on Restart; the active flow is remembered ===== */
const FLOWS={
 usm:{name:'US Minted',desc:'V1 flow + header tabs on the asset page and order pad: Positions | Futures',hsw:'v3',ca:'tabs',op:'tabs'},
 v1:{name:'V1 flow',desc:'Home V3 · Risk sheet · Market 1x · Leveraged · Asset C6 · Combined order pad · Dark · Minted Mint',hsw:'v3',ca:'c6',op:'combined'},
 v2:{name:'V2 flow',desc:'Home V1 · Risk sheet · Market 1x · Leveraged · Asset Tabs (original) · Order pad Tabs (original) · Dark · Minted Mint',hsw:'v1',ca:'tabs',op:'tabs'}};
let FLOW='usm';try{FLOW=localStorage.getItem('kuber-flow-usm')||'usm';}catch(e){}if(!FLOWS[FLOW])FLOW='usm';   /* US Minted is the final flow and the default */
function applyPresentationDefaults(k){try{['kuber-lev-ok','kuber-lvx-skip','kuber-quiz-ok'].forEach(x=>localStorage.removeItem(x));}catch(e){}window.LVX_SKIP=false;if(k&&FLOWS[k]){FLOW=k;try{localStorage.setItem('kuber-flow-usm',k);}catch(e){}}const F=FLOWS[FLOW];window.FLOWK=FLOW;
 const q=s=>document.querySelector(s);const click=s=>{const b=q(s);if(b)b.click();};
 click('#settings [data-appearance="dark"]');               // Appearance: Dark
 click('#settings [data-pal-set="a11y"]');                  // Colour profile: Vivid · Accessible
 click('#settings button[data-theme="minted"]');            // Brand theme: Minted Mint (#77C48C)
 click(`#hsw [data-hsw="${F.hsw}"]`);                       // Home switcher label
 click('#aps [data-ap-set="proposed"]');                    // Market 1x · Leveraged naming (Market page: US Market · Token Perps)
 click(`#ops [data-op-set="${F.op}"]`);                     // Order pad
 click(`#cas [data-ca="${F.ca}"]`);                         // Asset page layout
 $$('[data-flow]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.flow===FLOW));
 const h=q('#settings .ph h1');if(h)h.textContent='Asset page · proposal · '+F.name;document.title=F.name+' · US Market (Token Perps) prototype';
 if(typeof apLabels==='function')apLabels();if(typeof swcLayout==='function')requestAnimationFrame(swcLayout);
 stack=['s01'];show();
 setTimeout(()=>authStart(()=>{}),50);   // Splash → sign-in → Home (risk disclosure is accepted on the T&C sheet at login)
}
// token-perp notice: show it again every time a stock page opens
/* legal: a dismissed notice stays dismissed */
const rs=document.getElementById('b-restart');if(rs)rs.addEventListener('click',()=>applyPresentationDefaults());
// panel: flow presets
(()=>{const pn=document.getElementById('settings'),row=pn&&pn.querySelector('.row');if(!row)return;
 row.insertAdjacentHTML('afterend',`<h2>Flow</h2><div class="hsw" id="flows" role="group" aria-label="Flow presets">${Object.entries(FLOWS).map(([k,f])=>`<button data-flow="${k}" aria-pressed="${k===FLOW}" title="${f.desc}"><b>${f.name}</b></button>`).join('')}</div>`);
 pn.querySelector('#flows').addEventListener('click',e=>{const b=e.target.closest('[data-flow]');if(b)applyPresentationDefaults(b.dataset.flow);});})();
setTimeout(()=>applyPresentationDefaults(),0);
/* --- panel: everything except Flow + Pages folds into "Create your own filters" --- */
(()=>{const pn=document.getElementById('settings'),fl=pn&&pn.querySelector('#flows');if(!fl)return;
 const pagesH=[...pn.querySelectorAll('h2')].find(h=>h.textContent.trim()==='Pages');
 const box=document.createElement('div');box.className='cyo';box.id='cyo';box.hidden=true;
 let n=fl.nextElementSibling;const move=[];while(n){move.push(n);n=n.nextElementSibling;}   /* everything after Flow, Pages included */
 move.forEach(e=>box.appendChild(e));
 const btn=document.createElement('button');btn.className='cyo-btn';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','cyo');
 btn.innerHTML='<span>Create your own filters</span><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 btn.addEventListener('click',()=>{const o=box.hidden;box.hidden=!o;btn.setAttribute('aria-expanded',o);});
 fl.insertAdjacentElement('afterend',btn);btn.insertAdjacentElement('afterend',box);})();

/* --- V1 is final: only V1 stays under Flow; V2 moves into "Create your own filters" --- */
(()=>{const b=document.querySelector('#flows [data-flow="v2"]'),box=document.getElementById('cyo');if(!b||!box)return;
 box.insertAdjacentHTML('afterbegin','<h2>Other flows</h2><div class="hsw" id="flows-more" role="group" aria-label="Other flows"></div>');
 const wrap=box.querySelector('#flows-more');const v1=document.querySelector('#flows [data-flow="v1"]');if(v1)wrap.appendChild(v1);wrap.appendChild(b);   /* only US Minted stays under Flow; V1 + V2 live in the filters */wrap.addEventListener('click',e=>{const x=e.target.closest('[data-flow]');if(x)applyPresentationDefaults(x.dataset.flow);});})();
/* --- prototype helper: skip splash + sign-in and land on Home --- */
(()=>{const fl=document.getElementById('flows');if(!fl)return;let on=false;try{on=localStorage.getItem('kuber-skip-auth')==='1';}catch(e){}
 fl.insertAdjacentHTML('afterend',`<button class="skip-auth" role="switch" aria-checked="${on}"><span><b>Skip to Home</b><small>Bypass splash, login, OTP and biometrics</small></span><i></i></button>`);
 const b=document.querySelector('.skip-auth');b.addEventListener('click',()=>{on=!on;b.setAttribute('aria-checked',on);try{on?localStorage.setItem('kuber-skip-auth','1'):localStorage.removeItem('kuber-skip-auth');}catch(e){}if(on&&window.authSkipNow)authSkipNow();});})();
/* --- panel: Minted palette, splash version, sign-in path --- */
(()=>{const box=document.getElementById('cyo');if(!box)return;const P=[50,100,200,300,400,500,600,700,800,900];
 box.insertAdjacentHTML('afterbegin',`<h2>Brand Mint · Minted palette</h2><div class="mpal">${P.map(k=>`<i style="background:var(--mint-${k});color:${k>=500?'#fff':'#0b2615'}" title="Minted ${k}">${k}</i>`).join('')}</div>
 <h2>Splash animation</h2><div class="hsw" id="spl">${[['s5','S5 · 3D drawn in depth (Minted film)'],['s1','S1 · Assemble (CoinSwitch-style)'],['s2','S2 · Line draw'],['s3','S3 · Mint flood'],['s4','S4 · Dark glow']].map(([k,n])=>`<button data-spl="${k}" aria-pressed="${k===AUTH.splash}"><b>${n}</b></button>`).join('')}</div>
 <h2>Sign-in path</h2><div class="modes" id="aum"><button data-aum="otp" aria-pressed="true">New user · OTP</button><button data-aum="pin" aria-pressed="false">Returning · PIN</button></div>
 <button class="disc-reset" id="play-splash">Play splash + sign-in</button>`);
 box.addEventListener('click',e=>{const s=e.target.closest('[data-spl]');if(s){AUTH.splash=s.dataset.spl;$$('#spl [data-spl]').forEach(b=>b.setAttribute('aria-pressed',b===s));authStart(()=>{});}
  const m=e.target.closest('[data-aum]');if(m){AUTH.mode=m.dataset.aum;$$('#aum [data-aum]').forEach(b=>b.setAttribute('aria-pressed',b===m));}
  if(e.target.closest('#play-splash'))authStart(()=>{});});})();




/* L3 buttons drawn from the Figma export (shape .l3b + label .l3b-lb, index.html): the .hs hotspot on top of them takes
   the taps, so its hover / press is mirrored onto the pair (styles in src/prototype-l3.css). */
(()=>{const box=e=>[e.style.left,e.style.top,e.style.width,e.style.height].join();
 $$('#device .l3b').forEach(sh=>{const k=box(sh),lb=(()=>{let n=sh.nextElementSibling;while(n&&!n.classList.contains('l3b-lb'))n=n.nextElementSibling;return n;})(),
  hs=[...sh.closest('.screen').querySelectorAll('.hs')].find(h=>box(h)===k);if(!hs)return;
  // everything drawn inside the button (icons, logos) shrinks with it, about the button's centre (user, 2026-11-01)
  const px=v=>parseFloat(v)||0,B=[sh.style.left,sh.style.top,sh.style.width,sh.style.height].map(px),cx=B[0]+B[2]/2,cy=B[1]+B[3]/2;
  const ride=[...sh.parentElement.children].filter(e=>e!==sh&&e!==lb&&!e.classList.contains('hs')&&e.style.left&&(()=>{const q=[e.style.left,e.style.top,e.style.width,e.style.height].map(px);return q[0]>=B[0]-1&&q[1]>=B[1]-1&&q[0]+q[2]<=B[0]+B[2]+1&&q[1]+q[3]<=B[1]+B[3]+1;})());
  [...ride,lb].forEach(e=>{if(!e)return;e.style.transformOrigin=(cx-px(e.style.left))+'px '+(cy-px(e.style.top))+'px';});ride.forEach(e=>e.classList.add('l3b-ride'));
  hs._l3=[sh,lb,...ride].filter(Boolean);});
 const set=(e,c,on)=>{const h=e.target.closest&&e.target.closest('.hs');if(h&&h._l3)h._l3.forEach(x=>x.classList.toggle(c,on));};
 const dv=document.getElementById('device');
 dv.addEventListener('pointerdown',e=>set(e,'l3b-press',true));
 ['pointerup','pointercancel','pointerout'].forEach(t=>dv.addEventListener(t,e=>set(e,'l3b-press',false)));
 dv.addEventListener('pointerover',e=>set(e,'l3b-hover',true));dv.addEventListener('pointerout',e=>set(e,'l3b-hover',false));})();


/* L3 interaction states for every tappable card, row, chip and key (user, 2026-10-31): hover = state layer, press =
   pressed layer + scale 0.97 (styles in src/prototype-l3.css). L3 buttons (.l3-btn, hotspots over .l3b) have their own. */
(()=>{const dv=document.getElementById('device'),SEL='.hs,button,a[href],[role="button"],[role="tab"],[data-to]',px=v=>parseFloat(v)||0;
 const bx=e=>[px(e.style.left),px(e.style.top),px(e.style.width),px(e.style.height)];
 const target=n=>{const t=n&&n.closest&&n.closest(SEL);if(!t||!dv.contains(t)||t===dv)return null;
  if(t._l3||t.matches('.l3-btn,:disabled,[aria-disabled="true"],input,select,textarea'))return null;
  if(t.classList.contains('hs')){const b=bx(t);if(b[2]*b[3]>360*400)return null;}return t;};
 // What lights up and what shrinks: a hotspot tints itself and shrinks with the drawn card under it (siblings inside its box,
 // scaled about the hotspot's centre); a real element gets a tint layer and shrinks itself.
 function parts(t){if(t._ix)return t._ix;let g;
  if(t.classList.contains('hs')){const b=bx(t),cx=b[0]+b[2]/2,cy=b[1]+b[3]/2;
   const inner=[...t.parentElement.children].filter(e=>{if(e===t||e.classList.contains('hs')||!e.style.left)return false;const q=bx(e);return q[0]>=b[0]-1&&q[1]>=b[1]-1&&q[0]+q[2]<=b[0]+b[2]+1&&q[1]+q[3]<=b[1]+b[3]+1;});
   const card=inner.find(e=>{const q=bx(e);return Math.abs(q[2]-b[2])<2&&Math.abs(q[3]-b[3])<2;});
   if(card)t.style.borderRadius=getComputedStyle(card).borderRadius;
   inner.forEach(e=>{if(getComputedStyle(e).transform==='none'){const q=bx(e);e.style.transformOrigin=(cx-q[0])+'px '+(cy-q[1])+'px';}});
   g={tint:()=>t,shrink:inner};}
  else g={tint:()=>layer(t),shrink:[t]};
  return t._ix=g;}
 // The tint layer over a real element, placed in #device (the preview scales the phone, so undo that).
 let lay=null;function layer(t){const d=dv.getBoundingClientRect(),k=d.width/dv.offsetWidth||1,r=t.getBoundingClientRect();
  if(!lay){lay=document.createElement('i');lay.className='ix-l';lay.setAttribute('aria-hidden','true');}
  if(lay._for!==t){lay.className='ix-l';lay._for=t;Object.assign(lay.style,{left:(r.left-d.left)/k+'px',top:(r.top-d.top)/k+'px',width:r.width/k+'px',height:r.height/k+'px',borderRadius:getComputedStyle(t).borderRadius});}
  if(lay.parentElement!==dv)dv.appendChild(lay);return lay;}
 let hov=null,prs=null;
 const paint=(t,c,on)=>{if(!t)return;const g=parts(t),l=g.tint();if(l)l.classList.toggle(c,on);if(c==='ix-press')g.shrink.forEach(e=>{e.classList.add('ix-s');e.classList.toggle(c,on);});};
 const clear=()=>{paint(prs,'ix-press',false);paint(hov,'ix-hover',false);prs=hov=null;if(lay){lay.remove();lay._for=null;}};
 dv.addEventListener('pointerover',e=>{if(e.pointerType!=='mouse')return;const t=target(e.target);if(t===hov)return;if(hov&&hov!==prs)paint(hov,'ix-hover',false);hov=t;paint(t,'ix-hover',true);});
 dv.addEventListener('pointerout',e=>{const t=target(e.target);if(!t||t.contains(e.relatedTarget))return;paint(t,'ix-press',false);paint(t,'ix-hover',false);if(t===hov)hov=null;if(t===prs)prs=null;if(!hov&&!prs&&lay){lay.remove();lay._for=null;}});
 dv.addEventListener('pointerdown',e=>{const t=target(e.target);if(!t)return;prs=t;const g=parts(t);g.shrink.forEach(x=>{x.classList.add('ix-s');void x.offsetWidth;});paint(t,'ix-press',true);});
 ['pointerup','pointercancel'].forEach(n=>dv.addEventListener(n,()=>{const t=prs;prs=null;paint(t,'ix-press',false);if(t&&t!==hov&&lay&&lay._for===t){lay.remove();lay._for=null;}}));
 // A tap usually moves to another screen or sheet; drop the states so nothing stays lit behind it.
 dv.addEventListener('click',()=>setTimeout(clear,180));dv.addEventListener('scroll',clear,true);})();

/* Sheets slide up from the bottom and back down, their scrims fade, and the full-screen quiz pushes in from the right and
   slides back out (user, 2026-11-01). The prototype opens / closes them with el.hidden, so that property is wrapped here:
   showing plays the way in, hiding plays the way out first and only then really hides. */
(()=>{const P=Object.getOwnPropertyDescriptor(HTMLElement.prototype,'hidden'),EZ='cubic-bezier(.2,0,0,1)',EOUT='cubic-bezier(.3,0,1,1)';
 const KIND={sheet:[[{transform:'translateY(100%)'},{transform:'none'}],340,260],scrim:[[{opacity:0},{opacity:1}],240,240],page:[[{transform:'translateX(100%)'},{transform:'none'}],340,300]};
 function slide(el,kind){if(!el)return;const [kf,dIn,dOut]=KIND[kind];let out=null;
  Object.defineProperty(el,'hidden',{configurable:true,get(){return !!out||P.get.call(el);},set(v){
   if(!v){if(out){out.cancel();out=null;}const was=P.get.call(el);P.set.call(el,false);if(was&&!calm())el.animate(kf,{duration:dIn,easing:EZ});return;}
   if(out||P.get.call(el))return;if(calm()){P.set.call(el,true);return;}
   const a=out=el.animate([...kf].reverse(),{duration:dOut,easing:EOUT,fill:'forwards'});
   setTimeout(()=>{if(out!==a)return;out=null;P.set.call(el,true);a.cancel();},dOut);}});}
 $$('#device .lsh').forEach(e=>slide(e,'sheet'));$$('#device .lsh-bg').forEach(e=>slide(e,'scrim'));slide(document.getElementById('fq'),'page');})();

/* --- L3 Actionbar (Figma "L3: Actionbar" 4543:65480; centred = isCenterd=True 5579:1794): one <header class="ab"> per
   screen on top of its .fixed.top. The Figma bar pieces it replaces get .ab-x (hidden, still updated by the code above). --- */
(()=>{const I=n=>`<i class="ab-i" data-i="${n}" aria-hidden="true"></i>`;
 const BACK=`<button type="button" class="ab-back" data-to="back" aria-label="Back">${I('back')}</button>`;
 const ACT=(n,to,l)=>`<button type="button" class="l3-btn" data-variant="tertiary" data-size="sm" data-to="${to}" aria-label="${l}">${I(n)}</button>`;
 const SEARCH=ACT('search','s02','Search'),WALLET=ACT('wallet','s09','Wallet');
 const HELP='<button type="button" class="l3-btn" data-variant="tertiary" data-size="sm">Help</button>';
 const top=e=>parseFloat(e.style.top),bot=e=>top(e)+parseFloat(e.style.height||0);
 function bar(id,{lead='',title='',desc='',actions='',centered=false,cut=80,keep=()=>false}){
  const sc=document.getElementById(id);const fx=sc&&$('.fixed.top',sc);if(!fx)return null;
  [...fx.children].forEach(e=>{if(!isNaN(top(e))&&top(e)<cut&&bot(e)<=cut+2&&!keep(e))e.classList.add('ab-x');});
  const h=document.createElement('header');h.className='ab';h.dataset.level=lead.includes('ab-back')?2:1;if(centered)h.dataset.centered='';
  h.innerHTML=`<div class="ab-row"><div class="ab-l">${lead}</div><div class="ab-c">${title?`<h1 class="ab-t">${title}</h1>`:''}${desc?`<p class="ab-d">${desc}</p>`:''}</div><div class="ab-actions">${actions}</div></div><div class="ab-bottom"></div>`;
  fx.appendChild(h);return h;}
 const txt=(id,s)=>{const p=[...$('.fixed.top',document.getElementById(id)).querySelectorAll('p')].find(x=>x.textContent.trim().startsWith(s));return p?p.textContent.trim():s;};
 bar('s01',{lead:'<button type="button" class="ab-av" data-to="s10" aria-label="Profile">AJ</button>',actions:SEARCH+WALLET});
 bar('s02',{lead:BACK});
 bar('s03',{title:'Market',actions:SEARCH+WALLET});
 ['s07','s17'].forEach(id=>bar(id,{title:'Portfolio',actions:SEARCH+WALLET,cut:84}));
 bar('s22',{title:'Futures',actions:SEARCH});bar('s23',{title:'Options',actions:SEARCH});
 bar('s19',{lead:BACK,title:'Payment Details',actions:HELP});
 // Asset page: the Spot / Futures switch is the centred content.
 const h4=bar('s04',{lead:BACK,actions:SEARCH,centered:true,keep:e=>e.classList.contains('swc')});
 if(h4){const sw=$('.swc',document.getElementById('s04'));if(sw)$('.ab-c',h4).appendChild(sw);}
 // Orderpads: logo + ticker over price + change (mirrors the live Figma texts), Markets / Futures tabs in ↓ Content bottom.
 ['s05','s13','s14','s15'].forEach(id=>{const sc=document.getElementById(id);const fx=sc&&$('.fixed.top',sc);if(!fx||!$('[data-b="tk"]',fx))return;
  const h=bar(id,{lead:BACK,title:' ',desc:' ',centered:true,cut:86});const t=$('.ab-t',h),d=$('.ab-d',h);
  const src=['logo','tk','price','chgp'].map(k=>$(`[data-b="${k}"]`,fx));const ic=[...fx.children].find(e=>e.tagName==='svg'&&top(e)===60);
  const paint=()=>{const [lg,tk,pr,ch]=src;t.innerHTML=(lg?`<i class="${lg.className}" style="position:static;width:16px;height:16px;border-radius:50%;flex:none"></i>`:'')+`<span>${tk?tk.textContent:''}</span>`;
   d.innerHTML=`<span class="ab-pr">${pr?pr.innerHTML:''}</span>`+(ch?`<span class="${ch.className.replace(/\b(tx|ab-x)\b/g,'')}" style="position:static">${ch.textContent}</span>`:'')+(ic?ic.outerHTML.replace(/style="[^"]*"/,'style="position:static;width:12px;height:12px;flex:none"').replace(/\bab-x\b/,''):'');};
  paint();const mo=new MutationObserver(paint);src.forEach(e=>e&&mo.observe(e,{childList:true,characterData:true,subtree:true,attributes:true}));
  const tabs=$('.op-tabs',fx);if(tabs){$('.ab-bottom',h).appendChild(tabs);tabs.querySelectorAll('button').forEach(b=>b.classList.add('ab-tab'));}});
 // Orders & History: centred title, Help, Open / History tabs (they drive the existing tab hotspots).
 const h8=bar('s08',{lead:BACK,title:txt('s08','Orders'),actions:HELP,centered:true,cut:122});
 if(h8){const fx=$('.fixed.top',document.getElementById('s08'));const hs=[...fx.querySelectorAll('.hs')].filter(b=>top(b)===88).sort((a,b)=>top(a)-top(b)||parseFloat(a.style.left)-parseFloat(b.style.left));
  const tb=$('.ab-bottom',h8);tb.setAttribute('role','tablist');
  [txt('s08','Open Orders'),'History'].forEach((l,i)=>{const b=document.createElement('button');b.type='button';b.className='ab-tab';b.setAttribute('role','tab');b.setAttribute('aria-selected',i===0);b.textContent=l;
   b.addEventListener('click',ev=>{ev.stopPropagation();if(hs[i])hs[i].click();tb.querySelectorAll('.ab-tab').forEach(x=>x.setAttribute('aria-selected',x===b));});tb.appendChild(b);});}
})();

})();
