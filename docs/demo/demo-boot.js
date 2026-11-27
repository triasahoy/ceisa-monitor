/* Demo CEISA Monitor: tiruan chrome.* untuk situs (bukan bagian ekstensi). Dibuat oleh store/build_situs.py dari store/demo/ dan tests/stub.js. */
// Demo CEISA Monitor: localStorage khusus demo. Semua kunci (data tiruan chrome.storage dan pengaturan tampilan pv.*) diberi awalan
// agar tidak bertabrakan dengan apa pun di asal (origin) situs yang sama. Bila storage diblokir browser, demo tetap jalan di memori.
(() => {
  const NS = 'cmdemo1:'; let real = null, mem = new Map();
  try { real = window.localStorage; real.getItem(NS); } catch { real = null; }
  const keys = () => real ? Object.keys(real).filter(k => k.startsWith(NS)).map(k => k.slice(NS.length)) : [...mem.keys()];
  const S = {
    getItem: k => { k = String(k); try { return real ? real.getItem(NS + k) : (mem.has(k) ? mem.get(k) : null); } catch { return null; } },
    setItem: (k, v) => { k = String(k); v = String(v); try { if (real) real.setItem(NS + k, v); else mem.set(k, v); } catch { mem.set(k, v); } },
    removeItem: k => { k = String(k); try { if (real) real.removeItem(NS + k); } catch {} mem.delete(k); },
    clear: () => { keys().forEach(k => S.removeItem(k)); mem.clear(); },
    key: i => keys()[i] ?? null,
    get length() { return keys().length; },
  };
  Object.defineProperty(window, 'localStorage', { value: S, configurable: true });
  window.__demoReset = () => { S.clear(); location.reload(); };
})();

// --- tests/stub.js (salinan apa adanya) ---
(() => {
  const LS = '__chromeStub';
  const load = () => { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch { return {}; } };
  const save = o => localStorage.setItem(LS, JSON.stringify(o));
  const local = {
    // Cap cache (lib/cache.js): service worker sungguhan menulis cap baru di storage.onChanged; di tiruan ini cap dihitung
    // dari isi kunci sumbernya, sehingga data yang ditanam langsung ke localStorage tetap membatalkan cache.
    get: async k => { const o = load(); if (k == null) return o; if (typeof k === 'string') k = [k];
      if (Array.isArray(k)) for (const x of k) if (typeof x === 'string' && x.startsWith('cv:')) { const b = x.slice(3); if (b in o) { const j = JSON.stringify(o[b]); let h = j.length; for (let i = 0; i < j.length; i += 97) h = (h * 31 + j.charCodeAt(i)) | 0; o[x] = 'h' + h; } else delete o[x]; }
      if (Array.isArray(k)) return Object.fromEntries(k.filter(x => x in o).map(x => [x, o[x]]));
      return Object.fromEntries(Object.entries(k).map(([x, d]) => [x, x in o ? o[x] : d])); },
    set: async v => { save({ ...load(), ...v }); },
    remove: async k => { const o = load(); [].concat(k).forEach(x => delete o[x]); save(o); },
    getBytesInUse: async () => 0,
  };
  const ev = { addListener() {}, removeListener() {} };
  window.chrome = { storage: { local, onChanged: ev, session: local }, runtime: { id: 'test', getURL: p => p, sendMessage: async m => { (window.__msgs ||= []).push(m); if (m?.type === 'pantau-set') { await local.set({ pantauSet: m.set }); return { ok: true, set: m.set }; } if (m?.type === 'pantau-now') return { text: 'Tidak ada perubahan status' }; if (m?.type === 'pantau-test') return { ok: true }; return {}; }, getContexts: async () => [], onMessage: ev, getManifest: () => ({ version: '2.0.0.11' }), lastError: null },
    tabs: { query: async () => [], create: async () => ({}), sendMessage: async () => ({}) }, scripting: { executeScript: async () => [] }, alarms: { create() {}, get: async () => null, clear: async () => true, onAlarm: ev }, permissions: { contains: async () => !!load().__perm, request: async () => { save({ ...load(), __perm: true }); return true; }, onAdded: ev } };
  window.__seed = (rows) => save({ ...load(), snapshot: { at: new Date().toISOString(), meta: {}, rows, overSlaIds: [] } });
})();

// --- store/demo/demo-glue.js ---
// Demo CEISA Monitor: dijalankan SESUDAH tiruan chrome.* (tests/stub.js) dan SEBELUM skrip dasbor.
// Menanam data fiktif, lalu membuat semua yang akan menghubungi portal atau mengubah data sungguhan menjadi tidak aktif dengan pesan.
(() => {
  const TXT = 'Tidak tersedia di demo. Pasang ekstensi untuk memakai data Anda sendiri.';
  const LS = '__chromeStub';
  // Data demo bertanggal tetap; geser semua tanggal agar dokumen terbaru berumur satu hari (kalau tidak, semua dokumen tampak usang).
  // Ditanam ulang sekali sehari supaya pengunjung yang kembali tidak melihat data basi.
  const segar = D => {
    const P = n => String(n).padStart(2, '0'), DMY = /^(\d{2})-(\d{2})-(\d{4})(.*)$/, ISO = /^(\d{4})-(\d{2})-(\d{2})(T.*)?$/;
    let max = 0;
    for (const r of D?.snapshot?.rows || []) { const m = DMY.exec(r.tgl || ''); if (m) max = Math.max(max, Date.UTC(+m[3], m[2] - 1, +m[1])); }
    if (!max) return D;
    const now = new Date(), d = Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - 864e5 - max) / 864e5);
    if (!d) return D;
    const day = (y, m, dd) => new Date(Date.UTC(y, m - 1, dd) + d * 864e5);
    const str = v => {
      let m = DMY.exec(v); if (m) { const t = day(+m[3], +m[2], +m[1]); return P(t.getUTCDate()) + '-' + P(t.getUTCMonth() + 1) + '-' + t.getUTCFullYear() + m[4]; }
      m = ISO.exec(v); if (!m) return v;
      if (m[4]) { const t = new Date(v); return isNaN(t) ? v : new Date(+t + d * 864e5).toISOString(); }
      const t = day(+m[1], +m[2], +m[3]); return t.getUTCFullYear() + '-' + P(t.getUTCMonth() + 1) + '-' + P(t.getUTCDate());
    };
    const walk = (v, k) => {
      if (typeof v === 'string') return str(v);
      if (typeof v === 'number') return /^(at|ts|time|t)$/i.test(k || '') && v > 1e12 && v < 4e12 ? v + d * 864e5 : v;
      if (Array.isArray(v)) return v.map(x => walk(x));
      if (v && typeof v === 'object') { const o = {}; for (const q in v) o[/^\d{4}-\d{2}-\d{2}$/.test(q) ? str(q) : q] = walk(v[q], q); return o; }
      return v;
    };
    const S = walk(D);
    if (S.snapshot && typeof D.snapshot.at === 'string') S.snapshot.at = new Date(Date.now() - 12 * 6e4).toISOString();
    return S;
  };
  const HARI = new Date().toLocaleDateString('sv-SE');
  if (window.__DEMO_DATA && (!localStorage.getItem(LS) || localStorage.getItem('__demoDay') !== HARI)) {
    localStorage.setItem(LS, JSON.stringify(segar(window.__DEMO_DATA))); localStorage.setItem('__demoDay', HARI);
  }
  delete window.__DEMO_DATA;
  // Pesan singkat: memakai toast dasbor bila sudah ada, kalau belum (mis. halaman laporan) elemen sendiri.
  let tt;
  const note = () => {
    if (typeof window.toast === 'function' && document.getElementById('toast')) { window.toast(TXT); return; }
    let t = document.getElementById('demoToast');
    if (!t) { t = document.createElement('div'); t.id = 'demoToast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = TXT; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 3200);
  };
  window.__demoNote = note;
  chrome.runtime.getManifest = () => ({ version: '2.1.0' });
  // Pekerjaan latar belakang (Perbarui data, Ambil isi, Pemantauan, dsb.) hanya ada di service worker ekstensi.
  const SILENT = new Set(['det-migrate', 'isi-stop']);
  chrome.runtime.sendMessage = async m => { if (m && SILENT.has(m.type)) return {}; note(); return { error: TXT }; };
  chrome.permissions.request = async () => { note(); return false; };
  chrome.tabs.create = async o => {
    const u = String(o?.url || '');
    if (/(^|\/)report\.html(\?|#|$)/.test(u)) { if (!window.open(u, '_blank')) note(); } else note();   // laporan A4 dibuka di tab demo sendiri
    return {};
  };
  // Hapus semua data (nyata.js memasangnya sendiri): dikunci supaya hanya menampilkan pesan.
  Object.defineProperty(window, '__hapusSemua', { get: () => async () => { note(); }, set() {}, configurable: false });
  // Impor, cadangan, hapus semua data, dan pemilih berkas: tidak aktif (data demo hanya fiktif dan selalu dapat dimulai ulang).
  const BLOCK = '#refresh,#billPull,#nyPull,#nyImp,#nyHapus,[data-bak],#pfImp,[data-m="pull"],[data-m="imp"],[data-m="del"],[data-m="portal"]';
  document.addEventListener('click', e => {
    const t = e.target; if (!(t instanceof Element)) return;
    if (t.closest(BLOCK) || (t.tagName === 'INPUT' && t.type === 'file')) { e.preventDefault(); e.stopImmediatePropagation(); note(); }
  }, true);
  document.addEventListener('change', e => { const t = e.target; if (t instanceof HTMLInputElement && t.type === 'file') { e.stopImmediatePropagation(); try { t.value = ''; } catch {} note(); } }, true);
  document.addEventListener('dragover', e => e.preventDefault(), true);
  document.addEventListener('drop', e => { e.preventDefault(); e.stopImmediatePropagation(); note(); }, true);
  // Judul tetap (tata.js mengubah judul saat dasbor siap).
  const TITLE = document.title;
  const lock = () => { const el = document.querySelector('title'); if (el) new MutationObserver(() => { if (document.title !== TITLE) document.title = TITLE; }).observe(el, { childList: true, characterData: true, subtree: true }); };
  lock();
  document.documentElement.dataset.demo = '1';
  // Tinggi pita demo dipakai tata letak (sidebar, bilah filter) agar tidak tertutup.
  addEventListener('DOMContentLoaded', () => {
    const b = document.getElementById('demoBar'), root = document.documentElement; if (!b) return;
    const set = () => root.style.setProperty('--dh', b.offsetHeight + 'px');
    set(); if (window.ResizeObserver) new ResizeObserver(set).observe(b); addEventListener('resize', set);
    const r = document.getElementById('demoReset'); if (r) r.addEventListener('click', e => { e.preventDefault(); window.__demoReset(); });
  });
})();
