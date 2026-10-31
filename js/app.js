import * as S from "./state.js";
import {render,afterRender,bindPage,bindUrgeTimer} from "./pages.js";
import {refreshHUD,mountIcons,$} from "./ui.js";
let current="dashboard";
function navigate(page){current=page;document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));$("#pageName").textContent=page.replaceAll("-"," ").toUpperCase();$("#app").innerHTML=render(page);refreshHUD();afterRender(page);bindPage(page);bindUrgeTimer();mountIcons();$("#sidebar").classList.remove("open")}
function boot(){S.load();document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");window.addEventListener("navigate",e=>navigate(e.detail));window.addEventListener("rerender",()=>navigate(current));window.addEventListener("levelup",e=>alert(`LEVEL UP! You reached level ${e.detail.level}.`));navigate("dashboard");if("serviceWorker"in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("./sw.js").catch(()=>{})}
boot();