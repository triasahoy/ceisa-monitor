# Keamanan

## Prinsip

| Prinsip | Penerapan |
|---|---|
| Hanya membaca | Ekstensi hanya mengirim permintaan baca (GET) ke layanan portal yang sama dengan halaman Daftar Dokumen. Tidak ada pengisian, perubahan, atau pengiriman dokumen |
| Sesi milik pengguna | Data dibaca di tab portal dengan sesi login pengguna. Token tidak disalin, tidak disimpan, dan sesi tidak diperpanjang |
| Tanpa server | Tidak ada server, analitik, iklan, atau pihak ketiga. Semua data disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun |
| Identitas tidak disimpan | Sejak 1.18.0, kunci akun berupa sidik (hash) sebagai nama samaran. Kunci ini turunan nomor identitas dan bukan rahasia yang tidak dapat dibalik, jadi berkas cadangan perlu diperlakukan sebagai data rahasia. NPWP, NITKU, dan nama pengguna tidak disimpan; data versi lama dibersihkan otomatis saat pembaruan |
| Perbarui data otomatis | Menyala secara bawaan dan dapat dimatikan di Pengaturan. Pemeriksaan tiap jam menarik data (hanya membaca) bila tab portal terbuka, pengguna sudah masuk, dan data tersimpan lebih lama dari 6 jam; tidak pernah membuka tab portal sendiri |
| Izin minimum | `storage`, `unlimitedStorage`, `scripting`, dan `alarms`, serta akses host hanya untuk `https://portal.beacukai.go.id/*`. Sejak 2.0.0, `notifications` adalah izin **pilihan** yang baru diminta saat pengguna menyalakan pemberitahuan Pemantauan |
| CSP ketat | Sejak 2.0.0: `default-src 'self'; script-src 'self'`, gambar hanya dari paket atau `data:`, font dari paket, `object-src 'none'`, `base-uri 'none'`, `form-action 'none'`, dan `frame-ancestors 'none'`. Tidak ada skrip dari luar, `eval`, atau skrip inline |
| Berkas dari pengguna | Berkas profil, berkas data (`.ceisadata`), dan Excel hasil isian penanggung jawab diperiksa bentuknya sebelum dipakai dan hanya dibaca di browser; markup dan gambar dari luar ditolak. Excel dan CSV mencegah sel dibaca sebagai rumus |
| Pesan antarbagian | Hanya pesan dari bagian ekstensi sendiri yang diterima |
| Validasi data | Struktur data portal diperiksa setiap kali ditarik. Bila berubah, angka tidak ditampilkan agar tidak menyesatkan |
| Kode rilis | Diminifikasi (sesuai kebijakan Chrome Web Store), tanpa obfuskasi, dengan pernyataan hak cipta di setiap berkas. Kode tidak dipublikasikan di GitHub dan dilindungi lisensi hak cipta |
| Pemantauan | Mati secara bawaan. Bila dinyalakan, hanya membaca, memakai tab portal yang dibuka pengguna (tidak pernah membuka tab sendiri), menjalankan permintaan satu per satu dengan jeda, dan berhenti saat sesi berakhir atau akun berbeda |
| Tautan luar | Hanya tautan yang dibuka sebagai tab biasa atas klik pengguna: Saweria dan Buy Me a Coffee (dukungan), WhatsApp (wa.me, pesan yang disusun di browser), serta tombol Bagikan ke LinkedIn, WhatsApp, X, dan Telegram dengan isi berupa tautan halaman proyek (triasahoy.github.io). Tidak ada data dokumen dan tidak ada data yang dikirim otomatis |

## Memastikan pemasangan asli

CEISA Monitor hanya dibagikan lewat Chrome Web Store; repositori ini tidak menyediakan berkas ekstensi. Chrome Web Store menandatangani paket dan memperbarui ekstensi secara otomatis, sehingga pengguna tidak perlu memeriksa kode SHA-256 sendiri.

- Pasang hanya dari [tautan resmi Chrome Web Store](https://chromewebstore.google.com/detail/iojgnclbfhgoapolmfgcjkphacdfjbgi). Periksa nama penerbit (Trias EXIM) dan ID ekstensi (`iojgnclbfhgoapolmfgcjkphacdfjbgi`) di halaman Store.
- Jangan memasang berkas ZIP atau folder ekstensi yang dikirim lewat pesan atau ditemukan di tempat lain, walaupun bernama CEISA Monitor.
- Periksa izin di `chrome://extensions` → Detail. Izin yang sah persis seperti tabel Prinsip di atas: `storage`, `unlimitedStorage`, `scripting`, `alarms`, akses host hanya ke `https://portal.beacukai.go.id/*`, dan izin pilihan `notifications` (hanya bila Anda menyalakan pemberitahuan). Bila ada izin lain, jangan dipakai dan laporkan lewat Issues.

## Melaporkan celah keamanan

Mohon jangan melaporkan celah keamanan melalui Issues publik. Gunakan fitur **Security → Report a vulnerability** di repositori ini. Laporan akan ditanggapi dalam 7 hari kerja.

Jangan menyertakan data asli perusahaan, nomor pengajuan, atau token sesi dalam laporan apa pun.

## Versi yang didukung

Hanya versi terbaru di Chrome Web Store. Chrome memperbarui ekstensi secara otomatis.

## Tentang perlindungan kode

Kode ekstensi tidak dipublikasikan di repositori ini. Paket di Chrome Web Store diminifikasi tanpa obfuskasi, sesuai kebijakan Store. Kode JavaScript di browser pada dasarnya tetap dapat dibaca oleh orang yang berniat, sehingga perlindungan utama proyek ini adalah hak cipta dan lisensi: penyalinan, pengubahan, ekstraksi ulang, dan distribusi ulang tanpa izin tertulis dilarang (lihat [LICENSE](LICENSE)). Keaslian pemasangan dijamin dengan menyalurkannya hanya lewat Chrome Web Store.
