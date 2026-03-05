// Cursor
const cur = document.getElementById('cur'), ring = document.getElementById('cur-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function tick(){
  cur.style.left=mx+'px'; cur.style.top=my+'px';
  rx += (mx-rx)*.12; ry += (my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(tick);
})();
document.querySelectorAll('a,button,.proj-item,.soc-card,.skill-cat,.stat-box').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.classList.add('big'); cur.style.width='14px'; cur.style.height='14px'; });
  el.addEventListener('mouseleave', () => { ring.classList.remove('big'); cur.style.width='8px'; cur.style.height='8px'; });
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => obs.observe(el));

// Contact form
function sendMsg(){
  const n=document.getElementById('cf-name').value.trim();
  const e=document.getElementById('cf-email').value.trim();
  const m=document.getElementById('cf-msg').value.trim();
  if(!n||!e||!m){ alert('FILL ALL FIELDS BEFORE TRANSMITTING.'); return; }
  document.getElementById('cf-ok').style.display='block';
  document.getElementById('cf-name').value='';
  document.getElementById('cf-email').value='';
  document.getElementById('cf-msg').value='';
  setTimeout(()=>document.getElementById('cf-ok').style.display='none', 6000);
}