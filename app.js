function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }
function setupIndexFilter(){
  const input = qs('#q');
  if(!input) return;
  const cards = qsa('[data-filter]');
  const norm = (s)=> (s||'').toLowerCase();
  input.addEventListener('input', ()=>{
    const q = norm(input.value);
    for(const c of cards){
      const hay = norm(c.getAttribute('data-filter'));
      c.style.display = hay.includes(q) ? '' : 'none';
    }
  });
  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ input.value=''; input.dispatchEvent(new Event('input')); }
  });
}
document.addEventListener('DOMContentLoaded', setupIndexFilter);
