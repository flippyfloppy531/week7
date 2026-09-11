const panel=document.getElementById('search-panel');
const trigger=document.getElementById('search-trigger');
const closeButton=document.getElementById('search-close');
const shoeSearch=document.getElementById('shoe-search');
const tagOptions=document.getElementById('tag-options');
const cards=[...document.querySelectorAll('.shoe-card')];
const result=document.getElementById('search-result');
let activeTag='all';
function filterShoes(){const query=shoeSearch.value.trim().toLowerCase();let count=0;cards.forEach(card=>{const show=card.dataset.shoe.includes(query)&&(activeTag==='all'||card.dataset.tags.includes(activeTag));card.hidden=!show;if(show)count++});result.textContent=(query||activeTag!=='all')?`${count} ${count===1?'shoe':'shoes'} found`:'';document.getElementById('shoes').scrollIntoView({behavior:'smooth',block:'start'});}
function openSearch(){panel.classList.add('is-open');panel.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');setTimeout(()=>shoeSearch.focus(),150);}
function closeSearch(){panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');trigger.setAttribute('aria-expanded','false');trigger.focus();}
trigger.addEventListener('click',openSearch);closeButton.addEventListener('click',closeSearch);shoeSearch.addEventListener('input',filterShoes);tagOptions.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;activeTag=button.dataset.tag;tagOptions.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));filterShoes();});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.classList.contains('is-open'))closeSearch();});
