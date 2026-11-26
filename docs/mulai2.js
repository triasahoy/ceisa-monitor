// CEISA Monitor 2.0 – halaman awal "next level" (2.0.0.19; ditata ulang 2.0.0.48). Semua interaksi tambahan halaman awal ada di sini.
// Tanpa jaringan: video hero hanya dipakai bila berkasnya ada di folder assets/ ekstensi.
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const nf = (v, d = 0) => Number(v).toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });

/* ---------- bilah kemajuan gulir ---------- */
{ const bar = $('#sprog'); const on = () => { const h = document.documentElement.scrollHeight - innerHeight; bar?.style.setProperty('--p', h > 0 ? Math.min(1, scrollY / h) : 0); };
  addEventListener('scroll', on, { passive: true }); on(); }

/* ---------- kalkulator hemat waktu ---------- */
{ const g = id => $('#' + id), ins = ['cD', 'cX', 'cY', 'cZ'].map(g); let shown = 0, anim = 0;
  const calc = () => { const [D, X, Y, Z] = ins.map(i => +i.value);
    ins.forEach(i => i.style.setProperty('--v', (i.value - i.min) / (i.max - i.min) * 100 + '%'));
    g('cvD').textContent = nf(D); g('cvX').textContent = X + ' kali'; g('cvY').textContent = Y + ' menit'; g('cvZ').textContent = Z + ' jam';
    const manual = D * X * Y / 60 + Z, monitor = 22 * 10 / 60 + .5, hem = Math.max(0, Math.round(manual - monitor));
    g('cE').textContent = `setara ${nf(hem / 8, 1)} hari kerja, dari ±${nf(Math.round(manual))} jam menjadi ±${nf(Math.round(monitor))} jam`;
    cancelAnimationFrame(anim); const from = shown, t0 = performance.now(); shown = hem;
    if (RM) { g('cH').textContent = nf(hem); return; }
    const step = now => { const p = Math.min(1, (now - t0) / 500); g('cH').textContent = nf(Math.round(from + (hem - from) * (1 - Math.pow(1 - p, 3)))); if (p < 1) anim = requestAnimationFrame(step); }; anim = requestAnimationFrame(step); };
  if (ins.every(Boolean)) { ins.forEach(i => i.addEventListener('input', calc)); calc(); } }

const wait = ms => new Promise(r => setTimeout(r, ms));

/* ---------- mode presentasi: halaman berjalan sendiri seperti video, cocok direkam untuk LinkedIn ---------- */
{ const STOPS = [
    ['.hero', 'Semua status dokumen pabean, dalam satu dasbor', 9000],
    ['#alur', 'Setiap tahap CEISA 4.0 terpantau', 9000],
    ['#tur', 'Ringkasan, Dokumen, Buat laporan, dan Tim', 12000, 'tur'],
    ['#beda', 'Dari portal satu per satu, menjadi satu layar', 5000],
    ['#laporan', 'Pilih tujuannya, berkasnya tersusun sendiri', 14000, 'lap'],
    ['#hemat', 'Hitung jam yang dihemat tim Anda', 6000, 'hemat'],
    ['#aman', 'Data tetap di browser Anda', 6000],
    ['.final', 'Gratis, hanya membaca, mulai sekarang', 6000]];
  const btn = $('#presBtn'); if (btn) {
    const bar = document.createElement('div'); bar.className = 'pbar'; bar.hidden = true; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Kontrol mode presentasi');
    bar.innerHTML = `<div class="pc"><small>Mode presentasi</small><b id="pcap"></b></div><div class="pd">${STOPS.map(() => '<i></i>').join('')}</div>
      <button type="button" data-p="prev" aria-label="Sebelumnya">‹</button><button type="button" data-p="pause" aria-label="Jeda">❚❚</button><button type="button" data-p="next" aria-label="Berikutnya">›</button><button type="button" data-p="x" aria-label="Keluar dari mode presentasi">✕</button><div class="pt"><i id="pti"></i></div>`;
    document.body.appendChild(bar);
    let idx = 0, on = false, paused = false, timer = 0, token = 0;
    const cap = $('#pcap'), dots = [...bar.querySelectorAll('.pd i')], ptb = $('#pti'), pz = bar.querySelector('[data-p=pause]');
    const extra = async (k, my) => {
      if (k === 'tur') { for (const t of ['dokumen', 'laporan', 'tim']) { await wait(3000); if (my !== token) return; $(`.ttabs [data-t="${t}"]`)?.click(); } }
      if (k === 'lap') { for (const g of ['kabar', 'arsip', 'tim']) { await wait(3500); if (my !== token) return; $(`.rgoals [data-g="${g}"]`)?.click(); } }
      if (k === 'hemat') { const i = $('#cD'); if (!i) return; for (let v = 300; v <= 3000; v += 150) { await wait(220); if (my !== token) return; i.value = v; i.dispatchEvent(new Event('input')); } }
    };
    const go = async n => { idx = (n + STOPS.length) % STOPS.length; const [sel, text, dwell, k] = STOPS[idx], my = ++token; clearTimeout(timer);
      dots.forEach((d, i) => d.classList.toggle('on', i === idx)); cap.textContent = text;
      const el = $(sel); if (el) { const y = el.getBoundingClientRect().top + scrollY - (sel === '.hero' ? 0 : 24); scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' }); }
      el?.classList.add('in');
      ptb.style.transition = 'none'; ptb.style.transform = 'scaleX(0)';
      extra(k, my);
      requestAnimationFrame(() => { ptb.style.transition = `transform ${dwell}ms linear`; ptb.style.transform = 'scaleX(1)'; });
      timer = setTimeout(() => { if (my === token && !paused) go(idx + 1); }, dwell); };
    const start = () => { on = true; paused = false; pz.textContent = '❚❚'; document.body.classList.add('pres'); bar.hidden = false; document.documentElement.requestFullscreen?.().catch(() => {}); go(0); };
    const stop = () => { on = false; token++; clearTimeout(timer); document.body.classList.remove('pres'); bar.hidden = true; if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {}); };
    const toggle = () => { paused = !paused; pz.textContent = paused ? '▶' : '❚❚'; pz.setAttribute('aria-label', paused ? 'Lanjutkan' : 'Jeda'); if (paused) { token++; clearTimeout(timer); const s = getComputedStyle(ptb).transform; ptb.style.transition = 'none'; ptb.style.transform = s; } else go(idx); };
    btn.addEventListener('click', start);
    bar.addEventListener('click', e => { const a = e.target.closest('[data-p]')?.dataset.p; if (a === 'x') stop(); else if (a === 'next') go(idx + 1); else if (a === 'prev') go(idx - 1); else if (a === 'pause') toggle(); });
    document.addEventListener('keydown', e => { if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) return;
      if (!on && (e.key === 'p' || e.key === 'P')) { e.preventDefault(); start(); return; } if (!on) return;
      if (e.key === 'Escape') stop(); else if (e.key === 'ArrowRight') go(idx + 1); else if (e.key === 'ArrowLeft') go(idx - 1); else if (e.key === ' ') { e.preventDefault(); toggle(); } });
    document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && on && document.body.classList.contains('pres')) { /* tetap berjalan tanpa layar penuh */ } });
  } }
