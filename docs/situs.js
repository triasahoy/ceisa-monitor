// CEISA Monitor – situs GitHub Pages: pengganti mulai.js (tanpa chrome.*). Tema, kepala halaman padat saat digulir,
// dan bagian yang muncul halus saat terlihat. Dibuat oleh store/build_situs.py dari halaman awal ekstensi.
const $ = s => document.querySelector(s);
{ const top = $('#top'), onS = () => top.classList.toggle('solid', scrollY > 40); addEventListener('scroll', onS, { passive: true }); onS();
  document.documentElement.classList.add('js');
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')), 2500); }
const TH = ['auto', 'light', 'dark'], TL = { auto: 'Otomatis', light: 'Terang', dark: 'Gelap' };
let th = 'auto'; try { th = localStorage.getItem('cm2.theme') || 'auto'; } catch {}
const setTh = v => { th = v; if (v === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = v; $('#themeT').textContent = TL[v]; try { localStorage.setItem('cm2.theme', v); } catch {} };
setTh(th); $('#theme').onclick = () => setTh(TH[(TH.indexOf(th) + 1) % 3]);
