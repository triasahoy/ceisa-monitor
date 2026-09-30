# Keamanan

## Prinsip

| Prinsip | Penerapan |
|---|---|
| Hanya membaca | Ekstensi hanya mengirim permintaan baca (GET) ke layanan portal yang sama dengan halaman Daftar Dokumen. Tidak ada pengisian, perubahan, atau pengiriman dokumen |
| Sesi milik pengguna | Data dibaca di tab portal dengan sesi login pengguna. Token tidak disalin, tidak disimpan, dan sesi tidak diperpanjang |
| Tanpa server | Tidak ada server, analitik, iklan, atau pihak ketiga. Semua data disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun |
| Izin minimum | `storage`, `unlimitedStorage`, `scripting`, dan `alarms`, serta akses host hanya untuk `https://portal.beacukai.go.id/*` |
| CSP ketat | `script-src 'self'; object-src 'self'; base-uri 'none'; frame-ancestors 'self'`. Tidak ada skrip dari luar, `eval`, atau skrip inline |
| Validasi data | Struktur data portal diperiksa setiap kali ditarik. Bila berubah, angka tidak ditampilkan agar tidak menyesatkan |
| Kode rilis | Diminifikasi (sesuai kebijakan Chrome Web Store), tanpa obfuskasi, dengan pernyataan hak cipta di setiap berkas. Kode tidak dipublikasikan di GitHub dan dilindungi lisensi hak cipta |
| Tautan luar | Hanya tautan yang dibuka sebagai tab biasa atas klik pengguna: Saweria (dukungan), WhatsApp (wa.me, pesan tugas), serta tombol Bagikan ke LinkedIn, WhatsApp, X, dan Telegram dengan isi berupa tautan halaman proyek (triasahoy.github.io). Tidak ada data dokumen dan tidak ada data yang dikirim otomatis |

## Memastikan pemasangan asli

CEISA Monitor hanya dibagikan lewat Chrome Web Store; repositori ini tidak menyediakan berkas ekstensi. Chrome Web Store menandatangani paket dan memperbarui ekstensi secara otomatis, sehingga pengguna tidak perlu memeriksa kode SHA-256 sendiri.

- Pasang hanya dari tautan Chrome Web Store yang tercantum di [README](README.md#pemasangan). Periksa nama penerbit dan ID ekstensi di halaman Store.
- Jangan memasang berkas ZIP atau folder ekstensi yang dikirim lewat pesan atau ditemukan di tempat lain, walaupun bernama CEISA Monitor.
- Periksa izin di `chrome://extensions` → Detail. Izin yang sah persis seperti tabel Prinsip di atas: `storage`, `unlimitedStorage`, `scripting`, `alarms`, dan akses host hanya ke `https://portal.beacukai.go.id/*`. Bila ada izin lain, jangan dipakai dan laporkan lewat Issues.

## Melaporkan celah keamanan

Mohon jangan melaporkan celah keamanan melalui Issues publik. Gunakan fitur **Security → Report a vulnerability** di repositori ini. Laporan akan ditanggapi dalam 7 hari kerja.

Jangan menyertakan data asli perusahaan, nomor pengajuan, atau token sesi dalam laporan apa pun.

## Versi yang didukung

Hanya versi terbaru di Chrome Web Store. Chrome memperbarui ekstensi secara otomatis.

## Tentang perlindungan kode

Kode ekstensi tidak dipublikasikan di repositori ini. Paket di Chrome Web Store diminifikasi tanpa obfuskasi, sesuai kebijakan Store. Kode JavaScript di browser pada dasarnya tetap dapat dibaca oleh orang yang berniat, sehingga perlindungan utama proyek ini adalah hak cipta dan lisensi: penyalinan, pengubahan, ekstraksi ulang, dan distribusi ulang tanpa izin tertulis dilarang (lihat [LICENSE](LICENSE)). Keaslian pemasangan dijamin dengan menyalurkannya hanya lewat Chrome Web Store.
