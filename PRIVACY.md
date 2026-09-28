# Kebijakan Privasi CEISA Monitor

Berlaku sejak 28 September 2026 untuk versi 1.3.0 dan seterusnya.

## Data yang dibaca

CEISA Monitor adalah ekstensi tidak resmi dan tidak berafiliasi dengan Direktorat Jenderal Bea dan Cukai. Ekstensi membaca daftar dokumen pabean milik pengguna dari portal CEISA 4.0 (portal.beacukai.go.id), yaitu nomor pengajuan, nomor dan tanggal pendaftaran, jenis dokumen, status proses, jalur, respons, kantor pabean, dan nama perusahaan. Data dibaca hanya ketika pengguna menekan Perbarui data atau ketika pengguna mengaktifkan pembaruan otomatis.

Ekstensi juga membaca nama pengguna dan nomor identitas perusahaan (NPWP/NITKU) dari sesi login, semata-mata untuk memisahkan data antarakun.

Pada halaman portal, ekstensi hanya memeriksa ada atau tidaknya sesi aktif untuk memicu pembaruan otomatis; isi token tidak dibaca oleh pemeriksaan ini. Token sesi dibaca dari tab portal pada saat penarikan data, dipakai untuk permintaan tersebut, lalu dibuang. Ekstensi tidak membaca atau menyimpan kata sandi, tidak menyimpan token, dan tidak memperpanjang sesi.

## Tempat data disimpan

Hasil olahan, rekaman status harian (paling lama 62 hari, untuk pembanding perubahan), pengaturan, pilihan bahasa, profil perusahaan, dan catatan tindak lanjut disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun/NPWP. Data tidak dikirim ke server mana pun. Ekstensi tidak memakai analitik, iklan, atau layanan pihak ketiga. Tautan "Dukung proyek ini" hanya membuka halaman Saweria (saweria.co) di tab baru bila diklik; ekstensi tidak mengirim data apa pun ke Saweria. Fitur penugasan menyusun pesan tugas di peramban; pesan hanya disalin ke papan klip atau dibuka di WhatsApp (wa.me) bila pengguna mengklik tombolnya, sehingga isi pesan dikirim oleh pengguna sendiri melalui WhatsApp. Nomor WhatsApp penanggung jawab, riwayat tindak lanjut, dan templat tugas disimpan lokal di komputer pengguna. Berkas ekspor tindak lanjut (.json) hanya dibuat bila pengguna mengkliknya dan tersimpan di folder unduhan pengguna.

Berkas yang diekspor (Excel, CSV, presentasi, laporan) dibuat di peramban dan disimpan ke folder unduhan pengguna. Pengguna bertanggung jawab atas pembagian berkas tersebut sesuai kebijakan perusahaan.

## Izin

| Izin | Kegunaan |
|---|---|
| Akses `portal.beacukai.go.id` dan `scripting` | Menjalankan permintaan baca di tab portal dengan sesi yang masih aktif |
| `storage` dan `unlimitedStorage` | Menyimpan hasil dan pengaturan di komputer pengguna tanpa batas 10 MB, untuk data banyak akun dan periode panjang |
| `alarms` | Pembaruan otomatis (bila diaktifkan) |
| `notifications` | Pemberitahuan perubahan status (bila diaktifkan) |

## Menghapus data

Buka Pengaturan di dasbor, lalu pilih Hapus data tersimpan. Menghapus ekstensi juga menghapus seluruh data yang tersimpan.

## Kontak

Pertanyaan tentang privasi dapat disampaikan kepada pengembang melalui halaman proyek https://github.com/triasahoy/ceisa-monitor/issues.

## Perubahan kebijakan

Perubahan kebijakan ini dicatat di CHANGELOG.md dan diumumkan pada halaman toko.
