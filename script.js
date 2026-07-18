const toast=document.querySelector('[data-toast]');
const showToast=(m)=>{if(!toast)return;toast.textContent=m;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)};
document.querySelector('[data-copy]')?.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('ONEPUNCHMARK');showToast('Code ONEPUNCHMARK kopiert 👊')}
  catch{showToast('Code: ONEPUNCHMARK')}
});
let taps=0,timer;
document.querySelector('[data-profile]')?.addEventListener('click',()=>{
  taps++;clearTimeout(timer);timer=setTimeout(()=>taps=0,1600);
  if(taps>=5){showToast('Saitama hätte nur einmal getippt 👊');taps=0}
});
