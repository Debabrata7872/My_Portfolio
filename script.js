// ── PRELOADER ──
(function(){
  const terminal = document.getElementById('pl-terminal');
  const fill     = document.getElementById('pl-fill');
  const pctLabel = document.getElementById('pl-pct-label');
  const pctText  = document.getElementById('pl-pct');
  const loader   = document.getElementById('preloader');

  const lines = [
    { text: '>> INITIALIZING_KERNEL...',          ok: false, delay: 0   },
    { text: '>> LOADING_ASSETS          [OK]',    ok: true,  delay: 320 },
    { text: '>> MOUNTING_FILESYSTEM...',           ok: false, delay: 600 },
    { text: '>> AUTH_MODULE             [OK]',    ok: true,  delay: 900 },
    { text: '>> COMPILING_STYLESHEETS...',         ok: false, delay: 1150},
    { text: '>> UI_ENGINE               [OK]',    ok: true,  delay: 1420},
    { text: '>> LINKING_PORTFOLIO_DATA...',        ok: false, delay: 1650},
    { text: '>> DEBABRATA_SAHOO.exe     [READY]', ok: true,  delay: 1950},
  ];

  const pctSteps = [0,12,28,44,58,72,88,100];

  lines.forEach((l, i) => {
    setTimeout(() => {
      const span = document.createElement('div');
      span.className = 'pl-line' + (l.ok ? ' pl-ok' : '');
      span.textContent = l.text;
      terminal.appendChild(span);
      terminal.scrollTop = terminal.scrollHeight;
      const p = pctSteps[i];
      fill.style.width = p + '%';
      pctLabel.textContent = p + '%';
      pctText.textContent  = p < 100 ? 'LOADING... ' + p + '%' : 'SYSTEM_READY ●';
    }, l.delay);
  });

  // hide after boot sequence finishes
  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => { loader.style.display = 'none'; }, 750);
  }, 2600);
})();

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