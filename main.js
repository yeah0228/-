
document.addEventListener("DOMContentLoaded",()=>{
  const date=document.querySelector("[data-current-date]");
  if(date) date.innerHTML=`<i class="far fa-calendar-alt mr-1"></i> ${new Date().toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric",weekday:"long"})}`;

  const theme=document.querySelector("#themeToggle");
  if(theme) theme.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("gi-theme",document.documentElement.classList.contains("dark")?"dark":"light");
    showToast("已切換主題模式");
  });
  if(localStorage.getItem("gi-theme")==="dark") document.documentElement.classList.add("dark");

  const progress=document.querySelector("#progressBar");
  if(progress) window.addEventListener("scroll",()=>{
    const h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    progress.style.width=(h?document.documentElement.scrollTop/h*100:0)+"%";
  });

  const searchBtn=document.querySelector("#searchBtn");
  const searchPanel=document.querySelector("#searchPanel");
  if(searchBtn&&searchPanel) searchBtn.addEventListener("click",()=>searchPanel.classList.toggle("hidden"));

  document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",()=>copyQuote(btn.dataset.copy)));
  document.querySelectorAll("[data-lightbox]").forEach(el=>el.addEventListener("click",()=>{
    const modal=document.querySelector("#imageModal");
    if(!modal)return;
    modal.querySelector("img").src=el.dataset.lightbox;
    modal.querySelector("[data-caption]").textContent=el.dataset.caption||"";
    modal.classList.remove("hidden");
  }));
  document.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",()=>document.querySelector("#imageModal")?.classList.add("hidden")));
});

function showToast(msg){
  const t=document.querySelector("#toast"); if(!t)return;
  t.querySelector("[data-toast-msg]").textContent=msg;
  t.classList.remove("translate-y-20","opacity-0");
  setTimeout(()=>t.classList.add("translate-y-20","opacity-0"),2200);
}
async function copyQuote(text){
  try{await navigator.clipboard.writeText(text)}catch{
    const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove();
  }
  showToast("已複製至剪貼簿！");
}
function openSummaryDrawer(){document.querySelector("#summaryDrawer")?.classList.remove("translate-x-full")}
function closeSummaryDrawer(){document.querySelector("#summaryDrawer")?.classList.add("translate-x-full")}
