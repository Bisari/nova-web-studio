'use strict';
// CONTACTO: todos los botones data-demo son intencionalmente inactivos.
// Para activar SOLO NOVA, sustituir su botón por un enlace wa.me con el número real.
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#nav-links');
function closeMenu(){menu?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Abrir menú');}
menuButton?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
 document.documentElement.classList.add('js-motion');
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const dialog=document.querySelector('#demo-dialog');
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
document.querySelectorAll('.dialog-close,.dialog-dismiss').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('.demo-form')?.addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;form.querySelector('.form-status').textContent='Prueba completada. No se ha enviado ni guardado ningún dato.';form.reset();});

// El formulario permanece inactivo si JavaScript está deshabilitado.
const demoSubmit=document.querySelector(".demo-form button[type=submit]");
if(demoSubmit) demoSubmit.disabled=false;
