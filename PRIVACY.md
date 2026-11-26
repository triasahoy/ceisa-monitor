# Kebijakan Privasi CEISA Monitor

Berlaku sejak 28 September 2026 untuk versi 1.3.0 dan seterusnya. Diperbarui 26 November 2026 untuk versi 2.1.0.

## Data yang dibaca

CEISA Monitor adalah ekstensi tidak resmi dan tidak berafiliasi dengan Direktorat Jenderal Bea dan Cukai. Ekstensi membaca daftar dokumen pabean milik pengguna dari portal CEISA 4.0 (portal.beacukai.go.id), yaitu nomor pengajuan, nomor dan tanggal pendaftaran, jenis dokumen, status proses, jalur, respons, kantor pabean, dan nama perusahaan. Permintaan dikirim dari tab portal ke layanan data portal di `apis-gw.beacukai.go.id` dengan sesi pengguna sendiri. Data dibaca ketika pengguna menekan Perbarui data, ketika pengguna menyalakan Pemantauan (mati secara bawaan), dan melalui Perbarui data otomatis. Perbarui data otomatis menyala secara bawaan: pemeriksaan tiap jam (alarm yang sama dengan pembaruan lencana) menjalankan pembaruan data penuh bila sebuah tab portal sedang terbuka, pengguna sudah masuk, dan data tersimpan lebih lama dari 6 jam. Permintaannya sama dengan Perbarui data manual (hanya membaca, dengan sesi pengguna, tanpa membuka tab portal sendiri). Pengguna dapat mematikannya di Pengaturan → Data dan pembaruan (Perbarui data otomatis). Sejak versi 2.0.0, dokumen yang terdaftar dengan NPWP 15 digit milik akun yang sama ikut dibaca dengan permintaan yang sama; nomor identitas tetap tidak disimpan.

Untuk memisahkan data antarakun, nomor identitas perusahaan (NPWP/NITKU) dari sesi login hanya dipakai untuk membuat kunci akun berupa sidik (hash) yang berfungsi sebagai nama samaran. Kunci ini diturunkan dari nomor identitas dan bukan rahasia yang tidak dapat dibalik: karena bentuk nomor identitas terbatas, pihak yang memegang berkas cadangan (.ceisadata) dapat menelusurinya kembali dengan percobaan massal. Perlakukan berkas cadangan sebagai data rahasia. Sejak versi 1.18.0, nomor identitas, NPWP, dan nama pengguna tidak disimpan; data dari versi sebelumnya dibersihkan otomatis saat pembaruan.

Pada halaman portal, ekstensi hanya memeriksa ada atau tidaknya sesi aktif untuk memicu pembaruan otomatis; isi token tidak dibaca oleh pemeriksaan ini. Token sesi dibaca dari tab portal pada saat penarikan data, dipakai untuk permintaan tersebut, lalu dibuang. Ekstensi tidak membaca atau menyimpan kata sandi, tidak menyimpan token, dan tidak memperpanjang sesi.

## Tempat data disimpan

Hasil olahan, rekaman status harian (paling lama 62 hari, untuk pembanding perubahan), pengaturan, pilihan bahasa, profil perusahaan, dan catatan tindak lanjut disimpan di `chrome.storage.local` pada komputer pengguna, terpisah per akun. Data tidak dikirim ke server mana pun. Ekstensi tidak memakai analitik, iklan, atau layanan pihak ketiga. Tautan "Dukung proyek ini" hanya membuka halaman Saweria (saweria.co) pada tampilan bahasa Indonesia atau Buy Me a Coffee (buymeacoffee.com) pada tampilan English, di tab baru bila diklik; ekstensi tidak mengirim data apa pun ke keduanya. Fitur penugasan menyusun pesan tugas di browser; pesan hanya disalin ke papan klip atau dibuka di WhatsApp (wa.me) bila pengguna mengklik tombolnya, sehingga isi pesan dikirim oleh pengguna sendiri melalui WhatsApp. Nomor WhatsApp penanggung jawab dan riwayat tindak lanjut disimpan lokal di komputer pengguna. Font antarmuka (Plus Jakarta Sans dan JetBrains Mono, lisensi SIL OFL) disertakan di dalam paket; ekstensi tidak memuat font dari internet. Saat pengguna membuka popup BERUBAH pada satu dokumen, ekstensi meminta Riwayat Status dan Riwayat Respon dokumen itu dari layanan portal yang sama dengan tab riwayat di portal (dua permintaan baca-saja, dengan sesi pengguna); jam dan nama status atau respons disimpan lokal per akun, sedangkan nama petugas, nama pengguna, dan nomor identitas tidak diambil. Bila pengguna mengambil isi dokumen, berkas Excel dokumen dari portal dibaca di browser dan ringkasannya (dokumen pelengkap, barang, nilai, pungutan, jaminan, logistik, dan nama perusahaan mitra seperti pengirim, pemasok, penerima, atau pembeli) disimpan lokal; alamat dan nomor identitas entitas serta nama penandatangan tidak disimpan. Daftar dokumen pelengkap juga dibaca dari layanan portal yang sama dengan Detail Dokumen (permintaan baca-saja); yang disimpan hanya jenis, nomor, tanggal, seri, fasilitas, dan izin, tanpa tautan berkas, nama berkas, atau catatan. Nama atau NIP petugas tidak dibaca dari portal dan tidak disimpan; nama petugas pemeriksa yang pernah diisi pada versi 1.18 dihapus saat pembaruan. Saat pengguna membuka kartu Tagihan, ekstensi membaca daftar billing dari Browse Billing di portal (kode billing, nomor dokumen, jenis, tanggal, tenggat, nilai, status, dan NTPN) dengan sesi pengguna; daftar ini disimpan lokal per akun. Saat pengguna mengklik Rincian atau PDF pada satu billing, ekstensi meminta detail billing itu (riwayat status, bukti pembayaran, pungutan) dan berkas PDF-nya dari layanan portal yang sama (permintaan baca-saja); hasilnya hanya ditampilkan dan tidak disimpan, sedangkan nama petugas perekam tidak diambil. Ekstensi tidak melakukan pembayaran dan tidak mengubah data billing. Pilihan Samarkan identitas bekerja sepenuhnya di browser dan, sejak versi 2.0.1, berlaku juga untuk isi presentasi dan laporan A4. Fitur Ekspor data menyimpan salinan data ekstensi ke satu berkas `.ceisadata` di komputer pengguna, dan Impor data membacanya kembali; berkas tidak dikirim ke mana pun.

Sejak versi 2.0.0: Pemantauan (bila dinyalakan) membaca daftar dokumen dan riwayat status secara berkala dengan sesi pengguna di tab portal yang sudah terbuka, lalu menyimpan catatan perubahan di kotak masuk lokal. Pemberitahuan browser hanya tampil bila pengguna memberi izin `notifications`. Laporan per penanggung jawab menyusun pesan dan Excel di browser; Excel yang diisi kembali oleh penanggung jawab dibaca di browser saat diimpor dan hanya kolom Hasil dan Keterangan yang disimpan sebagai tindak lanjut. Isian kop dan tanda tangan laporan resmi serta riwayat "Terakhir dibuat" disimpan lokal. Saat pembaruan dari versi 1, salinan cadangan data dibuat di IndexedDB browser pengguna dan disimpan 60 hari; cadangan ini tidak dikirim ke mana pun. Salinan baca (cache) data di IndexedDB hanya mempercepat pembukaan dasbor.

Fitur tambahan sejak pratinjau 2.0.0.51 (semuanya diproses di browser; tidak ada yang keluar dari browser): (a) Cari dari bilah alamat: bila pengguna mengetik kata kunci `cm` lalu spasi di bilah alamat, ekstensi menerima teks yang diketik setelah kata kunci itu dan mencocokkannya dengan nomor dokumen yang tersimpan lokal; teks itu tidak dikirim ke mana pun dan tidak disimpan. (b) Cadangan berkata sandi (pilihan): berkas cadangan dienkripsi di browser; kata sandi tidak pernah disimpan, sehingga bila lupa berkas tidak dapat dibuka. (c) Berkas Tindak lanjut saja: hanya penanggung jawab, status, target, dan catatan, disimpan sebagai berkas unduhan di komputer pengguna. (d) Unduh kalender target: berkas `.ics` dibuat di browser dan disimpan ke folder unduhan; ekstensi tidak membuat pengingat atau mengirim data ke layanan kalender mana pun. (e) Nama PPJK serta nomor, tanggal, dan pos BC 1.1 dari daftar dokumen disimpan lokal bila portal mengisinya. (f) Cari di portal: satu permintaan baca-saja dengan sebagian nomor pengajuan yang diketik pengguna, dengan sesi pengguna sendiri; hasilnya hanya ditampilkan dan tidak disimpan. (g) Lama per tahap dan Yang berubah sejak dihitung di browser dari data yang sudah tersimpan.

Berkas yang diekspor (Excel, CSV, presentasi, laporan) dibuat di browser dan disimpan ke folder unduhan pengguna. Pengguna bertanggung jawab atas pembagian berkas tersebut sesuai kebijakan perusahaan.

## Peran para pihak, hak, dan penyimpanan

Peran para pihak. Isi yang dimasukkan ke ekstensi, misalnya nama penanggung jawab dan nomor telepon untuk tautan WhatsApp, ditentukan oleh pengguna atau perusahaannya. Pengguna atau perusahaan itulah pihak yang mengendalikan data tersebut. Pengembang tidak menerima data itu dan tidak menyimpan salinannya.

Koreksi atau penghapusan oleh orang yang namanya tercantum. Orang yang namanya atau nomor teleponnya tercatat di ekstensi dapat meminta koreksi atau penghapusan kepada orang atau perusahaan yang menjalankan ekstensi itu, karena hanya merekalah yang memegang data tersebut. Pengembang tidak memiliki salinan sehingga tidak dapat mengoreksi atau menghapusnya.

Lama penyimpanan. Data tetap tersimpan di browser pengguna sampai pengguna menghapusnya (Pengaturan, Lanjutan) atau menghapus ekstensi. Jangka khusus yang sudah disebut tetap berlaku: rekaman status harian paling lama 62 hari dan cadangan otomatis dari pembaruan versi 1 disimpan 60 hari.

Kebocoran data. Pengembang tidak menyimpan data pengguna sehingga sistem pengembang tidak dapat membocorkannya. Keamanan komputer pengguna, serta berkas yang diekspor atau dicadangkan, menjadi tanggung jawab pengguna; simpan dan bagikan berkas itu sesuai kebijakan perusahaan.

Ketepatan angka. Angka dihitung dari data portal dan bukan sumber resmi untuk keperluan hukum atau audit.

## Izin

| Izin | Kegunaan |
|---|---|
| Akses `portal.beacukai.go.id` dan `scripting` | Menjalankan permintaan baca di tab portal dengan sesi yang masih aktif |
| `storage` dan `unlimitedStorage` | Menyimpan hasil dan pengaturan di komputer pengguna tanpa batas 10 MB, untuk data banyak akun dan periode panjang |
| `alarms` | Lencana jumlah dokumen, Pemantauan (bila dinyalakan), dan pemeriksaan tiap jam untuk Perbarui data otomatis (dapat dimatikan di Pengaturan) |
| `notifications` (pilihan) | Pemberitahuan perubahan status, hanya bila pengguna menyalakannya |

## Menghapus data

Buka Pengaturan → Lanjutan. Akun tertentu dapat dihapus dari daftar Akun di browser ini, dan seluruh data dapat dihapus dengan Hapus data tersimpan. Hapus data tersimpan menghapus semua salinan: penyimpanan ekstensi, salinan baca (cache), cadangan otomatis dari pembaruan versi 1, dan catatan kecil di browser. Menghapus ekstensi juga menghapus seluruh data yang tersimpan.

## Kontak

Pertanyaan tentang privasi dapat disampaikan kepada pengembang melalui surel triasx6@gmail.com atau halaman proyek https://github.com/triasahoy/ceisa-monitor/issues.

## Perubahan kebijakan

Perubahan kebijakan ini dicatat di CHANGELOG.md dan diumumkan pada halaman toko.
