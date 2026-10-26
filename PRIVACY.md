# Kebijakan Privasi CEISA Monitor

Berlaku sejak 28 September 2026 untuk versi 1.3.0 dan seterusnya. Diperbarui 26 Oktober 2026 untuk versi 1.19.0.

## Data yang dibaca

CEISA Monitor adalah ekstensi tidak resmi dan tidak berafiliasi dengan Direktorat Jenderal Bea dan Cukai. Ekstensi membaca daftar dokumen pabean milik pengguna dari portal CEISA 4.0 (portal.beacukai.go.id), yaitu nomor pengajuan, nomor dan tanggal pendaftaran, jenis dokumen, status proses, jalur, respons, kantor pabean, dan nama perusahaan. Permintaan dikirim dari tab portal ke layanan data portal di `apis-gw.beacukai.go.id` dengan sesi pengguna sendiri. Data dibaca hanya ketika pengguna menekan Perbarui data atau ketika pengguna mengaktifkan pembaruan otomatis.

Untuk memisahkan data antarakun, nomor identitas perusahaan (NPWP/NITKU) dari sesi login hanya dipakai untuk membuat kunci akun berupa sidik acak (hash) satu arah. Sejak versi 1.18.0, nomor identitas, NPWP, dan nama pengguna tidak disimpan; data dari versi sebelumnya dibersihkan otomatis saat pembaruan.

Pada halaman portal, ekstensi hanya memeriksa ada atau tidaknya sesi aktif untuk memicu pembaruan otomatis; isi token tidak dibaca oleh pemeriksaan ini. Token sesi dibaca dari tab portal pada saat penarikan data, dipakai untuk permintaan tersebut, lalu dibuang. Ekstensi tidak membaca atau menyimpan kata sandi, tidak menyimpan token, dan tidak memperpanjang sesi.

## Tempat data disimpan

Hasil olahan, rekaman status harian (paling lama 62 hari, untuk pembanding perubahan), pengaturan, pilihan bahasa, profil perusahaan, dan catatan tindak lanjut disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun. Data tidak dikirim ke server mana pun. Ekstensi tidak memakai analitik, iklan, atau layanan pihak ketiga. Tautan "Dukung proyek ini" hanya membuka halaman Saweria (saweria.co) pada tampilan bahasa Indonesia atau Buy Me a Coffee (buymeacoffee.com) pada tampilan English, di tab baru bila diklik; ekstensi tidak mengirim data apa pun ke keduanya. Fitur penugasan menyusun pesan tugas di browser; pesan hanya disalin ke papan klip atau dibuka di WhatsApp (wa.me) bila pengguna mengklik tombolnya, sehingga isi pesan dikirim oleh pengguna sendiri melalui WhatsApp. Nomor WhatsApp penanggung jawab dan riwayat tindak lanjut disimpan lokal di komputer pengguna. Font antarmuka (Plus Jakarta Sans dan JetBrains Mono, lisensi SIL OFL) disertakan di dalam paket; ekstensi tidak memuat font dari internet. Saat pengguna membuka popup BERUBAH pada satu dokumen, ekstensi meminta Riwayat Status dan Riwayat Respon dokumen itu dari layanan portal yang sama dengan tab riwayat di portal (dua permintaan baca-saja, dengan sesi pengguna); jam dan nama status atau respons disimpan lokal per akun, sedangkan nama petugas, nama pengguna, dan nomor identitas tidak diambil. Bila pengguna mengambil isi dokumen, berkas Excel dokumen dari portal dibaca di browser dan ringkasannya (dokumen pelengkap, barang, nilai, pungutan, jaminan, logistik, dan nama perusahaan mitra seperti pengirim, pemasok, penerima, atau pembeli) disimpan lokal; alamat dan nomor identitas entitas serta nama penandatangan tidak disimpan. Daftar dokumen pelengkap juga dibaca dari layanan portal yang sama dengan Detail Dokumen (permintaan baca-saja); yang disimpan hanya jenis, nomor, tanggal, seri, fasilitas, dan izin, tanpa tautan berkas, nama berkas, atau catatan. Kolom Petugas pemeriksa barang pada tindak lanjut diisi manual oleh pengguna dan disimpan lokal; ekstensi tidak membaca NIP atau nama petugas dari portal. Saat pengguna membuka kartu Tagihan, ekstensi membaca daftar billing dari Browse Billing di portal (kode billing, nomor dokumen, jenis, tanggal, tenggat, nilai, status, dan NTPN) dengan sesi pengguna; daftar ini disimpan lokal per akun. Saat pengguna mengklik Rincian atau PDF pada satu billing, ekstensi meminta detail billing itu (riwayat status, bukti pembayaran, pungutan) dan berkas PDF-nya dari layanan portal yang sama (permintaan baca-saja); hasilnya hanya ditampilkan dan tidak disimpan, sedangkan nama petugas perekam tidak diambil. Ekstensi tidak melakukan pembayaran dan tidak mengubah data billing. Pilihan Samarkan identitas bekerja sepenuhnya di browser. Fitur Ekspor data menyimpan salinan data ekstensi ke satu berkas `.ceisadata` di komputer pengguna, dan Impor data membacanya kembali; berkas tidak dikirim ke mana pun.

Berkas yang diekspor (Excel, CSV, presentasi, laporan) dibuat di browser dan disimpan ke folder unduhan pengguna. Pengguna bertanggung jawab atas pembagian berkas tersebut sesuai kebijakan perusahaan.

## Izin

| Izin | Kegunaan |
|---|---|
| Akses `portal.beacukai.go.id` dan `scripting` | Menjalankan permintaan baca di tab portal dengan sesi yang masih aktif |
| `storage` dan `unlimitedStorage` | Menyimpan hasil dan pengaturan di komputer pengguna tanpa batas 10 MB, untuk data banyak akun dan periode panjang |
| `alarms` | Pembaruan otomatis (bila diaktifkan) |

## Menghapus data

Buka Pengaturan di dasbor, lalu pilih Hapus data tersimpan. Menghapus ekstensi juga menghapus seluruh data yang tersimpan.

## Kontak

Pertanyaan tentang privasi dapat disampaikan kepada pengembang melalui surel triasx6@gmail.com atau halaman proyek https://github.com/triasahoy/ceisa-monitor/issues.

## Perubahan kebijakan

Perubahan kebijakan ini dicatat di CHANGELOG.md dan diumumkan pada halaman toko.
