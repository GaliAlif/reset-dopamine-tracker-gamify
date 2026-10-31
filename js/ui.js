import {get,levelInfo,rankFor,today} from "./state.js";
export const $=s=>document.querySelector(s);
export function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
export function icon(name){return `<i data-lucide="${name}"></i>`}
export function head(title,desc,action=""){return `<div class="page-head"><div><div class="eyebrow">PERSONAL DEVELOPMENT SYSTEM // ${today()}</div><h1 class="page-title">${title}</h1><div class="page-desc">${desc}</div></div>${action}</div>`}
export function panel(title,body,cls=""){return `<section class="panel ${cls}"><h2 class="section-title">${title}</h2>${body}</section>`}
export function empty(msg){return `<div class="empty">${icon("database")}<b>${msg}</b><p>Start by adding your first record.</p></div>`}
export function refreshHUD(){const d=get(),p=d.profile,l=levelInfo(p.totalXP);$("#topUsername").textContent=p.username.toUpperCase();$("#topLevel").textContent=`LVL ${l.level} · ${rankFor(l.level)}`;$("#topXP").textContent=`${l.into} / ${l.next}`;$("#topXPBar").style.width=l.percent+"%";$("#topCredits").textContent=p.credits;$("#avatar").textContent=(p.avatar||p.username[0]||"P").slice(0,1).toUpperCase()}
export function mountIcons(){if(window.lucide)lucide.createIcons()}
export function modal(title,content){$("#modalRoot").innerHTML=`<div class="modal-backdrop" id="backdrop"><div class="modal"><div class="close-row"><h2>${title}</h2><button class="icon-btn" id="closeModal">✕</button></div>${content}</div></div>`;$("#closeModal").onclick=closeModal;$("#backdrop").onclick=e=>{if(e.target.id==="backdrop")closeModal()}}
export function closeModal(){$("#modalRoot").innerHTML=""}
export function field(label,name,placeholder="",type="text",value=""){return `<div class="field"><label>${label}</label><input class="input" name="${name}" type="${type}" placeholder="${placeholder}" value="${String(value).replaceAll('"',"&quot;")}"></div>`}
export function formData(form){return Object.fromEntries(new FormData(form).entries())}
