# Keamanan

## Prinsip

| Prinsip | Penerapan |
|---|---|
| Hanya membaca | Ekstensi hanya mengirim permintaan baca (GET) ke layanan portal yang sama dengan halaman Daftar Dokumen. Tidak ada pengisian, perubahan, atau pengiriman dokumen |
| Sesi milik pengguna | Data dibaca di tab portal dengan sesi login pengguna. Token tidak disalin, tidak disimpan, dan sesi tidak diperpanjang |
| Tanpa server | Tidak ada server, analitik, iklan, atau pihak ketiga. Semua data disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun |
| Izin minimum | `storage`, `unlimitedStorage`, `scripting`, `alarms`, `notifications`, dan akses host hanya untuk `https://portal.beacukai.go.id/*` |
| CSP ketat | `script-src 'self'; object-src 'self'; base-uri 'none'; frame-ancestors 'self'`. Tidak ada skrip dari luar, `eval`, atau skrip inline |
| Validasi data | Struktur data portal diperiksa setiap kali ditarik. Bila berubah, angka tidak ditampilkan agar tidak menyesatkan |
| Kode rilis | Diminifikasi (sesuai kebijakan Chrome Web Store), tanpa obfuskasi, dengan pernyataan hak cipta di setiap berkas. Kode sumber tidak dipublikasikan dan dilindungi lisensi hak cipta |
| Tautan luar | Hanya dua tautan yang dibuka sebagai tab biasa atas klik pengguna: Saweria (dukungan) dan WhatsApp (wa.me, pesan tugas). Tidak ada data yang dikirim otomatis |

## Memeriksa keaslian paket

Unduh paket hanya dari halaman [Releases](../../releases) repositori ini atau dari Chrome Web Store resmi. Sebelum memasang, cocokkan kode SHA-256:

| Berkas | SHA-256 |
|---|---|
| `ceisa-monitor-v1.10.0.zip` | `495242a6f56c20bc7b57fd4401e64e4037b49b9461d02490fde58a2914d07556` |

Cara memeriksa:

- Windows (PowerShell): `Get-FileHash .\ceisa-monitor-v1.10.0.zip -Algorithm SHA256`
- macOS/Linux: `shasum -a 256 ceisa-monitor-v1.10.0.zip`

Kode untuk setiap berkas di folder `extension/` tercantum di [SHA256SUMS.txt](SHA256SUMS.txt) dan diperiksa otomatis oleh GitHub Actions setiap ada perubahan.

## Melaporkan celah keamanan

Mohon jangan melaporkan celah keamanan melalui Issues publik. Gunakan fitur **Security → Report a vulnerability** di repositori ini. Laporan akan ditanggapi dalam 7 hari kerja.

Jangan menyertakan data asli perusahaan, nomor pengajuan, atau token sesi dalam laporan apa pun.

## Versi yang didukung

| Versi | Didukung |
|---|---|
| 1.10.x | Ya |
| < 1.10 | Tidak, mohon perbarui |

## Tentang perlindungan kode

Kode di folder `extension/` sengaja diminifikasi dan tidak disertai kode sumber. Chrome Web Store melarang obfuskasi, dan kode JavaScript di peramban pada dasarnya tetap dapat dibaca oleh orang yang berniat. Karena itu perlindungan utama proyek ini adalah hak cipta dan lisensi: penyalinan, pengubahan, ekstraksi ulang, dan distribusi ulang tanpa izin tertulis dilarang (lihat [LICENSE](LICENSE)). Keaslian paket dijamin melalui kode SHA-256 dan pemeriksaan otomatis GitHub Actions.
