/* ══════════════════════════════════════
   LEÓN INFORMÁTICA — main.js
   ══════════════════════════════════════ */

// ── Scroll reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Menú mobile ──
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  const links = document.querySelector('.nav-links');
  links.style.cssText = menuOpen
    ? 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(5,12,16,.97);padding:1.5rem 6vw;gap:1.2rem;border-bottom:1px solid rgba(0,200,232,.18);backdrop-filter:blur(16px);'
    : 'display:none;';
}

// ── Formulario de contacto ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '✓ CONSULTA ENVIADA';
  btn.style.background = 'rgba(0,200,100,.15)';
  btn.style.borderColor = '#00c864';
  btn.style.color = '#00c864';
  setTimeout(() => {
    btn.textContent = 'ENVIAR CONSULTA →';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}
