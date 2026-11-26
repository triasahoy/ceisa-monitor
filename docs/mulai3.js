// CEISA Monitor 2.0 (2.0.0.48) – halaman awal: produk asli di hero, tur produk bertitik, perjalanan dokumen yang hidup,
// "dari data ke laporan" per tujuan, panel Mulai cepat, dan tombol menempel di ponsel. Semua gambar dari assets/land (DATA DEMO).
// Animasi berhenti saat tidak terlihat dan tidak berjalan bila pengguna memilih mengurangi gerakan.
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const seen = (el, cb, th = .25) => { if (!el) return; if (!('IntersectionObserver' in window)) return cb(true); new IntersectionObserver(e => cb(e[0].isIntersecting && !document.hidden), { threshold: th }).observe(el); };

/* ---------- Jeda: satu keadaan bersama untuk semua gerak otomatis (tombol Jeda di tiap kelompok) ----------
   Tanpa gerakan (prefers-reduced-motion) tidak ada yang berjalan sendiri, jadi tombol tidak dipasang. */
const PZ = (() => { let on = false; try { on = sessionStorage.getItem('cm2.jeda') === '1'; } catch {}
  const subs = [], btns = [], H = document.documentElement;
  const paint = b => { b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', on ? 'Lanjutkan gerakan otomatis' : 'Jeda gerakan otomatis'); b.querySelector('span').textContent = on ? 'Lanjutkan' : 'Jeda'; };
  const apply = () => { H.classList.toggle('jeda', on); btns.forEach(paint); $$('.sdg svg').forEach(s => on ? s.pauseAnimations?.() : s.unpauseAnimations?.()); document.dispatchEvent(new CustomEvent('cm-jeda', { detail: on })); subs.forEach(f => f(on)); };
  const set = v => { on = v; try { sessionStorage.setItem('cm2.jeda', v ? '1' : ''); } catch {} apply(); };
  const btn = (host, wrap) => { if (RM || !host) return; const b = document.createElement('button'); b.type = 'button'; b.className = 'pz';
    b.innerHTML = '<svg class="p1" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg><svg class="p2" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg><span></span>';
    b.onclick = () => set(!on); btns.push(b); paint(b);
    if (wrap) { const w = document.createElement('div'); w.className = 'pzrow'; w.appendChild(b); host.before(w); } else if (host.matches('.lcap')) host.appendChild(b); else host.after(b); };
  if (on && !RM) apply();
  return { get on() { return on && !RM; }, sub: f => subs.push(f), btn }; })();
// Tahan gerak saat penunjuk di atas elemen atau fokus papan ketik di dalamnya (bukan fokus karena klik mouse).
const hold = (el, cb) => { const s = { h: 0, f: 0, get on() { return !!(s.h || s.f || PZ.on); } }, ch = () => cb?.(s.on);
  el.addEventListener('mouseenter', () => { s.h = 1; ch(); }); el.addEventListener('mouseleave', () => { s.h = 0; ch(); });
  el.addEventListener('focusin', e => { if (e.target.matches?.(':focus-visible')) { s.f = 1; ch(); } });
  el.addEventListener('focusout', e => { if (!el.contains(e.relatedTarget)) { s.f = 0; ch(); } });
  PZ.sub(ch); return s; };

// Kotak elemen pada gambar assets/land (persen: x, y, lebar, tinggi), diukur oleh video/capture_land.py.
const BOX = {
  ringkasan: [[18.19, 20.58, 80, 10.97], [18.19, 33.55, 80, 25.56], [18.19, 61.11, 80, 28.02]],
  dokumen: [[19.65, 29.5, 77.08, 4.08], [19.72, 45.25, 77, 4.89], [19.65, 34.92, 62.85, 3.89]],
  panel: [[70.83, 0, 29.17, 100]],
  laporan: [[20.97, 23.44, 74.44, 13.03], [20.97, 40.75, 74.44, 18.05], [85.87, 92.56, 9.62, 4.78]],
  tim: [[24.58, 34.79, 50.83, 9.67], [64.51, 37.92, 5.92, 3.42], [25.42, 28.64, 12.11, 3.42], [38.09, 28.64, 6.63, 3.42]],
};
// Tema gelap: Ringkasan memakai tangkapan layar gelap (tata letak sama, BOX tetap berlaku).
const isDark = () => { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; };
const src = k => `assets/land/${k === 'ringkasan' && isDark() ? 'ringkasan_gelap' : k}.webp`;
// Titik tur di tepi kiri kotak agar tidak menutupi isi yang dijelaskan.
const pinAt = b => [Math.max(2, b[0]), Math.min(95, Math.max(5, b[1] + Math.min(b[3] / 2, 5)))];

/* ---------- 1. Hero: halaman asli bergantian, kursor menunjuk bagian penting ---------- */
{ const root = $('#lshot');
  if (root) {
    const slides = $$('#lview .ls'), tabs = $$('.ltabs [data-i]'), cur = $('#lcur'), url = $('#lurl'), view = $('#lview');
    // Kursor menunjuk titik AIM (piksel gambar 1440 x 900), dihitung dari letak gambar yang tampil (potongan diatur di mulai2.css),
    // di ruang kosong di samping isi agar tidak menutupi tulisan.
    const AIM = [[292, 640], [1210, 162], [545, 300], [972, 357]];
    const aimAt = i => { const v = view.getBoundingClientRect(), r = slides[i].querySelector('img').getBoundingClientRect(), s = r.width / 1440;
      return [Math.min(v.width - 24, Math.max(8, r.left - v.left + AIM[i][0] * s)), Math.min(v.height - 24, Math.max(8, r.top - v.top + AIM[i][1] * s))]; };
    const DWELL = 5200; let idx = 0, timer = 0, run = false, t0 = 0;
    const hs = hold(root, on => { clearTimeout(timer); if (on) tabs[idx].classList.remove('run'); else if (run && !RM) show(idx); });
    PZ.btn(root.querySelector('.lcap'));
    const show = (n, user) => { idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('on', i === idx)); tabs.forEach((t, i) => { t.setAttribute('aria-selected', i === idx); t.classList.remove('run'); });
      if (url) url.textContent = slides[idx].dataset.u;
      if (cur) { cur.classList.remove('go', 'click'); const [x, y] = aimAt(idx); cur.style.setProperty('--x', x + 'px'); cur.style.setProperty('--y', y + 'px');
        if (!RM) { void cur.offsetWidth; cur.classList.add('go'); setTimeout(() => cur.classList.add('click'), 1500); } }
      if (!RM && run && !hs.on) { void tabs[idx].offsetWidth; tabs[idx].classList.add('run'); }
      clearTimeout(timer); if (!RM && run && !hs.on && !user) timer = setTimeout(() => show(idx + 1), DWELL);
      if (user && !RM && !hs.on) { clearTimeout(timer); timer = setTimeout(() => show(idx + 1), DWELL * 2); } };
    tabs.forEach(t => t.addEventListener('click', () => show(+t.dataset.i, true)));
    seen(root, v => { run = v; clearTimeout(timer); if (v && !RM) show(idx); }, .3);
    show(0, false);
  } }

/* ---------- 2. Tur produk dengan titik penjelas ---------- */
const TOUR = {
  ringkasan: { img: 'ringkasan', alt: 'Halaman Ringkasan', pins: [
    [BOX.ringkasan[0], 'Kesimpulan satu kalimat', 'Berapa dokumen belum selesai dan jenis mana yang paling banyak, langsung di baris pertama.'],
    [BOX.ringkasan[1], 'Angka utama', 'Total per bulan, belum selesai beserta umurnya, Sesuai SLA terhadap target, status tempat dokumen tertahan, dan pungutan.'],
    [BOX.ringkasan[2], 'Perlu perhatian hari ini', 'Jalur Merah yang masih dalam pemeriksaan, dokumen lebih dari 30 hari, dan dokumen yang Anda pantau. Klik untuk membuka daftarnya.']] },
  dokumen: { img: 'dokumen', alt: 'Halaman Dokumen', pins: [
    [BOX.dokumen[0], 'Tampilan siap pakai', 'Semua, Belum selesai, Jalur Merah, Melewati SLA, dan tampilan cepat seperti Belum ada penanggung jawab.', [96, 31.5]],
    [BOX.dokumen[2], 'Cari apa saja', 'Nomor pengajuan, invoice, mitra, atau nama penanggung jawab.'],
    [BOX.dokumen[1], 'Panel dokumen', 'Klik satu dokumen untuk melihat tahapan dan lama di setiap status, isi dokumen, pungutan, tindak lanjut, dan billing.']] },
  laporan: { img: 'laporan', alt: 'Halaman Buat laporan', pins: [
    [BOX.laporan[0], 'Mulai dari tujuan', 'Rapat bulanan, Kabar harian, Arsip dan audit, atau Tugas tim. Berkas yang cocok langsung terpilih.'],
    [BOX.laporan[1], 'Berkas yang dibuat', 'Presentasi, laporan resmi A4, Excel, pesan WhatsApp, dan laporan per penanggung jawab, dengan gambar kecil isinya.'],
    [BOX.laporan[2], 'Satu tombol', 'Nama berkas di layar sama persis dengan yang diunduh. Tidak ada data yang dikirim keluar.']] },
  tim: { img: 'tim', alt: 'Laporan per penanggung jawab', pins: [
    [BOX.tim[0], 'Satu baris per orang', 'Jumlah dokumen belum selesai, Jalur Merah, dan yang lewat target atau SLA.'],
    [BOX.tim[1], 'WhatsApp per orang', 'Pesan tersusun menurut prioritas. WhatsApp hanya dibuka saat Anda mengklik.'],
    [BOX.tim[2], 'Excel untuk diisi tim', 'Satu sheet per orang dengan kolom Hasil dan Keterangan.'],
    [BOX.tim[3], 'Hasil kembali ke dasbor', 'Impor Excel yang sudah diisi; pratinjau dulu, lalu terapkan ke tindak lanjut.']] },
};
{ const stage = $('#tstage');
  if (stage) {
    const img = $('#timg'), pins = $('#tpins'), list = $('#tlist'), box = $('#tbox');
    let cur = 'ringkasan', sel = 0;
    const pick = i => { sel = i; const P = TOUR[cur].pins[i], b = P[0];
      box.style.cssText = `left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%`; box.classList.add('on');
      $$('#tpins .tpin').forEach((p, k) => p.classList.toggle('on', k === i)); $$('#tlist li').forEach((l, k) => l.classList.toggle('on', k === i)); };
    const load = k => { cur = k; const T = TOUR[k];
      $$('.ttabs [data-t]').forEach(b => b.setAttribute('aria-selected', b.dataset.t === k));
      img.src = src(T.img); img.alt = T.alt;
      pins.innerHTML = T.pins.map(([b, h, , at], i) => { const [x, y] = at || pinAt(b); return `<button type="button" class="tpin" style="left:${x}%;top:${y}%" data-p="${i}" aria-label="${i + 1}. ${esc(h)}">${i + 1}</button>`; }).join('');
      list.innerHTML = T.pins.map(([, h, t], i) => `<li data-p="${i}"><button type="button"><b><i>${i + 1}</i>${esc(h)}</b><span>${esc(t)}</span></button></li>`).join('');
      pick(0); };
    $('.ttabs')?.addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) load(b.dataset.t); });
    stage.addEventListener('click', e => { const p = e.target.closest('[data-p]'); if (p) pick(+p.dataset.p); });
    list.addEventListener('click', e => { const p = e.target.closest('[data-p]'); if (p) pick(+p.dataset.p); });
    load('ringkasan');
    window.__landTheme = () => { img.src = src(TOUR[cur].img); };
    // berjalan sendiri pelan selama terlihat dan belum disentuh
    const hs = hold($('.tgrid')); PZ.btn($('.ttabs'));
    let touched = false, tm = 0; ['pointerdown', 'keydown'].forEach(ev => $('#tur').addEventListener(ev, () => { touched = true; clearInterval(tm); }));
    seen($('#tur'), v => { clearInterval(tm); if (v && !touched && !RM) tm = setInterval(() => { if (!hs.on) pick((sel + 1) % TOUR[cur].pins.length); }, 3800); }, .4);
  } }

/* ---------- 3. Perjalanan dokumen: satu dokumen bergerak melewati tahapan ---------- */
{ const fl = $('#flow'), tok = $('#ftok');
  if (fl && tok) {
    const STEP = [[0, 'Belum selesai', ''], [2, 'Siap Jalur · Jalur Merah', 'm'], [6, 'Jalur Merah dalam pemeriksaan', 'm'], [11, 'Belum selesai', ''], [14, 'Selesai Proses · 14 hari', 'ok']];
    const age = $('#ftAge'), tag = $('#ftTag'); let i = 0, tm = 0;
    const place = n => { const fn = fl.querySelectorAll('.fn')[n]; if (!fn) return; const a = fl.getBoundingClientRect(), r = fn.getBoundingClientRect();
      tok.style.setProperty('--tx', (r.left - a.left + r.width / 2) + 'px'); tok.style.setProperty('--ty', (r.top - a.top - 8) + 'px');
      age.textContent = n === 4 ? 'Waktu penyelesaian' : `Umur ${STEP[n][0]} hari`; tag.textContent = STEP[n][1]; tok.dataset.k = STEP[n][2];
      fl.querySelectorAll('li').forEach((li, k) => li.classList.toggle('now', k === n)); };
    const hs = hold(fl); PZ.btn($('.fhead .sub') || fl, !$('.fhead .sub'));
    const tick = () => { if (hs.on) return; place(i); i = (i + 1) % STEP.length; };
    addEventListener('resize', () => place((i + STEP.length - 1) % STEP.length));
    if (RM) place(2); else seen(fl, v => { clearInterval(tm); if (v) { tick(); tm = setInterval(tick, 2200); } }, .3);
  } }

/* ---------- 4. Dari data ke laporan ---------- */
const XL = (rows, hasil) => `<div class="xm${hasil ? ' h' : ''}"><div class="xh"><span>No</span><span>Nomor pengajuan</span><span>Status</span>${hasil ? '<span>Hasil</span>' : '<span>Umur</span>'}</div>${rows.map(r => `<div class="xr${r[3] ? ' ' + r[3] : ''}"><span>${r[0]}</span><span>${r[1]}</span><span>${r[2]}</span><span>${r[4] ?? ''}</span></div>`).join('')}</div>`;
const XROWS = [[1, '…0926-099810', 'Pemeriksaan Fisik', 'bad', '41 hari'], [2, '…0927-100412', 'Gate In TPB/KEK', '', '12 hari'], [3, '…0925-099702', 'Pembongkaran', '', '9 hari'], [4, '…0924-099655', 'Siap Jalur', '', '3 hari']];
const PJROWS = [[1, '…0926-099810', 'Pemeriksaan Fisik', '', '<em class="ok">Selesai</em>'], [2, '…0927-100412', 'Gate In TPB/KEK', '', '<em class="wn">Menunggu pihak lain</em>'], [3, '…0925-099702', 'Pembongkaran', '', '<em>Sudah telepon importir</em>']];
const CARD = (cls, inner, b, s) => `<figure class="rc ${cls}"><div class="rv">${inner}</div><figcaption><b>${b}</b><span>${s}</span></figcaption></figure>`;
const OUT = {
  rapat: [CARD('slide', '<img src="assets/land/slide_sampul.webp" alt="Slide sampul presentasi rapat" width="960" height="540"><img class="b2" src="assets/land/slide_jenis.webp" alt="Slide perbandingan jenis dokumen" width="960" height="540">', 'Presentasi rapat', 'sekitar 15 slide, judul berupa kesimpulan'),
    CARD('a4', '<img src="assets/land/a4.webp" alt="Halaman pertama laporan resmi A4" width="700" height="820">', 'Laporan resmi A4', 'ikhtisar di halaman pertama, siap ditandatangani'),
    CARD('xl', XL(XROWS), 'Excel berformat', 'ringkasan, per jenis, dokumen, tagihan')],
  kabar: [CARD('wa', '<div class="phone"><div class="pbar2">Grup EXIM</div><img src="assets/land/wa.webp" alt="Pesan WhatsApp singkat berisi angka utama" width="378" height="181"></div>', 'Pesan WhatsApp Singkat', 'lima baris angka utama untuk atasan, Salin atau Buka WhatsApp'),
    CARD('note', '<ul class="ck"><li>Belum selesai dan lebih dari 30 hari</li><li>Jalur Merah dalam pemeriksaan</li><li>Sesuai SLA terhadap target</li><li>Jenis dengan dokumen belum selesai terbanyak</li></ul>', 'Isinya', 'versi Lengkap menambah nilai, tugas jatuh tempo, dan daftar dokumen')],
  arsip: [CARD('a4', '<img src="assets/land/a4.webp" alt="Halaman pertama laporan resmi A4" width="700" height="820">', 'Laporan resmi A4', 'cetak ke PDF atau unduh Word, kop dan tanda tangan diingat'),
    CARD('xl', XL(XROWS), 'Excel berformat', 'filter dan baris kepala beku, dokumen lebih dari 30 hari ditandai'),
    CARD('slide', '<img src="assets/land/slide_keputusan.webp" alt="Slide temuan dan keputusan" width="960" height="540">', 'Lampiran keputusan', 'temuan, usulan, dan keputusan yang dimohon')],
  tim: [CARD('wa', '<div class="phone"><div class="pbar2">Andi</div><div class="bub">*Tugas CEISA – Andi*<br>8 dokumen perlu diselesaikan<br><br>🔴 <b>Jalur Merah (2)</b><br>1. …0926-099810 · Pemeriksaan Fisik<br>→ siapkan barang dan dokumen<br>⏰ <b>Lewat target (6)</b><br>…</div></div>', '1. Kirim', 'pesan WhatsApp per orang, urut menurut prioritas'),
    CARD('xl', XL(PJROWS, true), '2. Tim mengisi Hasil', 'pilihan atau ketik bebas, ditambah Keterangan'),
    CARD('imp', '<div class="impc"><b>Hasil dari CEISA_Tugas_Andi.xlsx</b><p>3 dokumen akan diperbarui: Selesai 1, Menunggu pihak lain 1, Catatan 1</p><span class="ib">Terapkan ke tindak lanjut</span></div>', '3. Impor kembali', 'status dan catatan tindak lanjut diperbarui setelah pratinjau')],
};
{ const st = $('#rstage2'), goals = $$('.rgoals [data-g]');
  if (st && goals.length) {
    let g = 'rapat', tm = 0, touched = false, run = false;
    const arm = () => { clearInterval(tm); goals.forEach(b => b.classList.remove('run')); if (run && !touched && !RM && !hs.on) { show(g); tm = setInterval(next, 6000); } };
    const hs = hold($('.rgrid'), arm); PZ.btn($('.rgoals'));
    const show = k => { g = k; goals.forEach(b => { b.setAttribute('aria-selected', b.dataset.g === k); b.classList.remove('run'); });
      st.dataset.g = k; st.innerHTML = OUT[k].join(''); const cards = [...st.children];
      if (RM) cards.forEach(c => c.classList.add('on')); else cards.forEach((c, i) => setTimeout(() => c.classList.add('on'), 120 + i * 260));
      const b = goals.find(x => x.dataset.g === k); if (run && !touched && !RM && !hs.on) { void b.offsetWidth; b.classList.add('run'); } };
    const next = () => { const i = goals.findIndex(b => b.dataset.g === g); show(goals[(i + 1) % goals.length].dataset.g); };
    $('.rgoals').addEventListener('click', e => { const b = e.target.closest('[data-g]'); if (!b) return; touched = true; clearInterval(tm); show(b.dataset.g); });
    show('rapat');
    seen($('#laporan'), v => { run = v; arm(); }, .35);
  } }

/* ---------- 5. Mulai cepat: kartu "Pakai data portal saya" dibuka di jendela, tanpa menggulir ---------- */
{ const dlg = $('#qs'), body = $('#qsBody'), card = $('#portal');
  const inExt = location.protocol === 'chrome-extension:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  if (dlg && body && card && inExt && dlg.showModal) {
    const home = document.createComment('portal'); card.before(home);
    const open = e => { e?.preventDefault(); body.appendChild(card); dlg.showModal(); };
    dlg.addEventListener('close', () => home.after(card));
    $('#qsX').onclick = () => dlg.close();
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    [$('#heroCta'), ...$$('[data-qs]')].forEach(a => a && a.addEventListener('click', open));
    $('#mePull')?.addEventListener('click', open);
    window.__mulaiCepat = open;
  } }

/* ---------- 6. Ponsel: tombol Mulai menempel di bawah setelah hero, hilang di bagian Mulai ---------- */
{ const bar = $('#mcta'), hero = $('.hero'), sec = $('#mulai');
  if (bar && hero) { let inStart = false;
    bar.hidden = false; bar.classList.add('off');
    const on = () => { const off = !(scrollY > hero.offsetHeight - 80 && !inStart); bar.classList.toggle('off', off); bar.inert = off; };
    addEventListener('scroll', on, { passive: true }); seen(sec, v => { inStart = v; on(); }, .15); on(); } }

/* ---------- 7. Ikuti tema: tombol tema di kepala halaman atau tema sistem ---------- */
{ const sync = () => { const h = $('#lview .ls[data-i="0"] img'); if (h) h.src = src('ringkasan'); window.__landTheme?.(); };
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', sync); sync(); }

/* ---------- 8. Diagram keamanan: titik data berhenti saat ditunjuk, dijeda, atau tidak terlihat (tombol Jeda di atasnya) ---------- */
{ const box = $('.sdg'), sv = box?.querySelector('svg');
  if (sv?.pauseAnimations) {
    if (RM) sv.pauseAnimations();
    else { let vis = true, hs = null; const apply = () => (hs?.on || !vis) ? sv.pauseAnimations() : sv.unpauseAnimations();
      hs = hold(box, apply); PZ.btn(box); seen(box, v => { vis = v; apply(); }, .2); } } }
