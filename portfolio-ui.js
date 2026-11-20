(() => {
 const $=id=>document.getElementById(id);
 const key="lr3d-ui-v3";
 const tools=$("pj-tools");
 const ui=$("pj-ui-status");
 const search=$("pj-project-search");
 const list=$("panel-projects")?.querySelector(".projects-grid");
 const cards=[...(list?.querySelectorAll(".project-card")||[])];
 const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
 function load(name){try{return localStorage.getItem(key+"-"+name)}catch{return null}}
 function save(name,v){try{localStorage.setItem(key+"-"+name,String(v))}catch{}}
 let timer;
 function notify(m){clearTimeout(timer);ui.textContent=m;ui.classList.add("active");timer=setTimeout(()=>ui.classList.remove("active"),2800)}
 function toggle(id,name,enable,disable){
   const el=$(id);if(!el)return;
   let state=load(name)==="true";
   function render(){document.documentElement.dataset["pj"+name]=String(state);el.textContent=state?enable:disable;el.setAttribute("aria-pressed",String(state))}
   el.onclick=()=>{state=!state;save(name,state);render();notify(state?"Mode aktif":"Mode nonaktif")};
   render();
 }
 toggle("pj-motion","motion","Motion off","Motion on");
 toggle("pj-contrast","contrast","Kontras ✓","Kontras");
 const pageTitle=document.title;
 const progress=$("pj-progress");
 let raf=false;
 function scroll(){
   const max=document.documentElement.scrollHeight-window.innerHeight;
   progress.style.transform="scaleX("+(max>0?Math.min(1,window.scrollY/max):0)+")";
 }
 window.addEventListener("scroll",()=>{if(raf)return;raf=true;requestAnimationFrame(()=>{scroll();raf=false})},{passive:true});
 scroll();
 const share=$("pj-share");
 share.onclick=async()=>{
   const link=location.href.split("#")[0];
   try{if(navigator.share)await navigator.share({title:pageTitle,url:link});else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(link);notify("Link portofolio disalin.")}else notify("Fitur berbagi membutuhkan HTTPS.")}
   catch(e){if(e.name!=="AbortError")notify("Gagal membagikan.");}
 };
 const full=$("pj-fullscreen");
 full.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{notify("Layar penuh tidak tersedia.");}};
 const help=$("pj-help");
 const dialog=$("pj-shortcuts");
 if (dialog && dialog.parentElement !== document.body) document.body.append(dialog);
 help.onclick=()=>{if(dialog.showModal)dialog.showModal();else dialog.hidden=false;};
 $("pj-shortcuts-close").onclick=()=>{if(dialog.close)dialog.close();else dialog.hidden=true;};
 function go(id){
   const node=$(id);
   if(!node)return;
   node.click();
   notify(id==="logo"?"Beranda":id==="about-menu"?"Profil kreator":"Galeri proyek");
 }
 const map={"0":"logo","1":"about-menu","2":"projects-menu"};
 document.addEventListener("keydown",e=>{
   const tag=document.activeElement?.tagName;
   if(["INPUT","TEXTAREA","SELECT"].includes(tag))return;
   if(e.altKey&&(e.key.toLowerCase()==="h")){e.preventDefault();go("logo")}
   if(e.key in map){e.preventDefault();go(map[e.key])}
   if(e.key==="/"&&search){e.preventDefault();go("projects-menu");setTimeout(()=>search.focus(),550);}
   if(e.key==="Escape"&&dialog?.open)dialog.close();
 });
 search?.addEventListener("input",()=>{
   const q=search.value.trim().toLocaleLowerCase("id-ID");
   let count=0;
   for(const card of cards){const hit=card.textContent.toLocaleLowerCase("id-ID").includes(q);card.hidden=!hit;if(hit)count++;}
   $("pj-project-count").textContent=String(count);
   $("pj-empty").hidden=count>0;
 });
 $("pj-project-count").textContent=String(cards.length);
 $("pj-refresh").onclick=()=>{
   search.value="";
   search.dispatchEvent(new Event("input"));
   notify("Filter dibersihkan.");
 };
 const nav=[...document.querySelectorAll(".side-nav a")];
 for(const item of nav){item.setAttribute("tabindex","0");}
 document.querySelectorAll('a[target="_blank"]').forEach(link=>link.rel=[link.rel,"noopener","noreferrer"].join(" ").trim());
 const heroImg=$("logo")?.querySelector("img");
 if(heroImg)heroImg.loading="eager";
 const subtitle=$("pj-detect");
 if(subtitle)subtitle.textContent=(window.innerWidth<760?"MOBILE":"DESKTOP")+" • "+((navigator.hardwareConcurrency||4)>4?"ENHANCED":"BALANCED")+" RENDERER";
 if(!("WebGLRenderingContext" in window)){
   document.documentElement.classList.add("pj-no-webgl");
   notify("WebGL tidak didukung. Konten teks tetap tersedia.");
 }
 const panelAbout=$("panel-about");
 const panelProjects=$("panel-projects");
 [panelAbout,panelProjects].forEach(p=>{if(p){p.setAttribute("role","region");p.setAttribute("aria-label",p.id==="panel-about"?"Tentang kreator":"Daftar proyek");}});
 const menu=[...document.querySelectorAll(".main-nav a")].filter(a=>a.href);
 menu.forEach(a=>{if(a.target==="_blank")a.rel="noopener noreferrer"});
 document.addEventListener("visibilitychange",()=>{tools.dataset.visibility=document.hidden?"paused":"active"});
 window.addEventListener("offline",()=>notify("Koneksi offline. Aset 3D yang belum tersimpan mungkin tidak tersedia."));
 window.addEventListener("online",()=>notify("Koneksi kembali tersedia."));
 if(reduced)document.documentElement.dataset.pjmotion="true";
})();