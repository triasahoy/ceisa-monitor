# Roadmap CEISA Monitor

Status per 30 September 2026 (versi terpasang 1.17.0; 80 pengujian otomatis). Roadmap memuat **rencana dan status fitur**. Apa yang sudah terjadi, rilis demi rilis, ada di [CHANGELOG.md](CHANGELOG.md). Rincian fitur ditulis di satu tempat saja: fitur yang belum dirilis di roadmap ini, fitur yang sudah dirilis di CHANGELOG.

## Jadwal

Rilis fitur setiap dua minggu pada hari Senin. Tanggal di bawah adalah target; rilis yang bergantung pada data portal ditunda ke jadwal berikutnya bila contoh respons belum tersedia pada hari Jumat sebelumnya.

| Versi | Target | Tema | Isi |
|---|---|---|---|
| 1.18.0 | Senin, 12 Oktober 2026 | Data aman | DTA-01 sampai DTA-03 dan DST-03. Data pengguna dapat dipindahkan dan tetap terbaca di versi baru |
| 2.0.0 | Senin, 26 Oktober 2026 | Tampilan baru | UI-01 sampai UI-08. MAJOR karena navigasi berubah total; data, izin, dan cara kerja tetap |
| 2.1.0 | Senin, 9 November 2026 | Wawasan | WAS-01 sampai WAS-04 |
| 2.2.0 | Senin, 23 November 2026 | Bukti dan pencarian | BKT-01 sampai BKT-03 |
| 2.3.0 | Senin, 7 Desember 2026 | Tim dan banyak akun | KLB-01 sampai KLB-03 |

Setelah 2.3.0, isi rilis berikutnya ditentukan dari masukan pengguna dan hasil tinjauan bulanan. Jalur distribusi yang tidak terikat versi (Chrome Web Store dan GitHub sebagai dokumentasi) dicatat di bagian Distribusi.

## Daftar fitur

Setiap fitur punya ID tetap (huruf kelompok dan nomor) dan satu status. ID yang sama dipakai di CHANGELOG, pesan commit, dan pengujian.

**Status:** Direncanakan → Dikerjakan → Siap uji (dibangun, menunggu uji pengguna di portal) → Siap rilis (lulus uji) → Dirilis. Status lain: Ditunda dan Tidak direncanakan.

### 1.17.0 · Tagihan (dirilis 30 September 2026)

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| TGH-01 | Hitung mundur sesi portal di header | Dirilis | Hanya waktu kedaluwarsa yang dibaca; token tidak disimpan |
| TGH-02 | Diagnosa Tagihan di Pengaturan | Dirilis | Menyalin alamat dan bentuk data saja, tanpa isi |
| TGH-03 | Kartu Tagihan: NTPN, tenggat, nilai, billing ganti | Dirilis | Hanya billing terbaru per dokumen dihitung; tanpa bahasa tindakan |
| TGH-04 | Rincian billing: riwayat, bukti pembayaran, pungutan | Dirilis | Diambil saat diklik, tidak disimpan |
| TGH-05 | PDF billing dan PDF respon dengan pratinjau dan unduh | Dirilis | pdf.js lokal (Apache-2.0) |
| TGH-06 | Peringatan billing hampir berakhir di kartu Hari ini | Dirilis | Hanya billing masih berlaku dengan tenggat 3 hari |
| TGH-07 | Lembar Billing di Excel | Dirilis | Tanpa identitas wajib bayar |
| TGH-08 | Samarkan identitas pada ekspor dan pesan | Dirilis | Pilihan di dialog Excel, presentasi/laporan, dan ringkasan |
| TGH-09 | Periode tagihan dipilih di kartu; empat angka menjadi filter satu klik | Dirilis | Kartu dibuat ringkas; penjelasan dipindah ke tombol keterangan |
| TGH-10 | Billing tanpa dokumen: penanda dan pengecualian bila dokumen dihapus | Dirilis | Tidak dihitung hanya bila belum ada NTPN, penarikan mencakup semua jenis, dan tanggal dokumen dalam rentang data; tetap dapat dilihat lewat "Tanpa dokumen" |

### 1.18.0 · Data aman

Latar belakang: data ekstensi disimpan di penyimpanan lokal browser milik satu ID ekstensi. Bila ekstensi dihapus, dipasang dari folder lain, atau berpindah dari pemasangan berkas ZIP lama ke versi Chrome Web Store yang ber-ID lain, penyimpanan itu tidak ikut. Yang tidak dapat ditarik ulang dari portal adalah pengaturan, tindak lanjut, catatan, kontak, dan riwayat perubahan status; data dokumen dan billing dapat ditarik ulang.

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| DTA-01 | Ekspor dan impor data dalam satu berkas | Direncanakan | Pilihan Ringan (pengaturan, profil, tindak lanjut, catatan, kontak, riwayat perubahan) dan Lengkap (ditambah isi dokumen, riwayat portal, billing). Berkas dimampatkan di browser; impor menampilkan pratinjau isi dan memilih gabung atau ganti per akun. Tanpa izin baru dan tanpa jaringan. Menggantikan keputusan lama di TDK-04 |
| DTA-02 | Skema data berversi dan migrasi otomatis | Direncanakan | Setiap versi baru membaca data versi lama; diuji dengan berkas contoh dari tiap skema |
| DTA-03 | Petunjuk pindah pemasangan (dari berkas ZIP lama ke Store, atau ganti komputer) di layar pertama dan panduan | Direncanakan | Satu kalimat "Punya data dari pemasangan sebelumnya? Impor" pada pembukaan pertama; tanpa pengingat berkala |
| DST-03 | Catatan "Baru di versi ini" setelah pembaruan otomatis | Direncanakan | Tampil sekali dari teks yang sudah ada di paket; tanpa jaringan. Penting bagi pengguna Chrome Web Store yang diperbarui tanpa membaca CHANGELOG |

### 2.0.0 · Tampilan baru

Prototipe (`prototipe_ui_v1.18.html`) sudah selesai dan disetujui arahnya. Implementasi belum dimulai.

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| UI-01 | Sidebar dan tab: Ringkasan, Dokumen, Tagihan, Buat laporan, Pengaturan | Direncanakan | Kartu Tagihan pindah ke tab Tagihan |
| UI-02 | KPI dengan visual per kartu | Direncanakan | |
| UI-03 | Tabel berpaginasi | Direncanakan | Menggantikan tombol "Tampilkan lagi" |
| UI-04 | Satu pintu Buat laporan | Direncanakan | Menggabungkan menu ekspor yang tersebar |
| UI-05 | Umpan "Perlu tindakan hari ini" untuk dokumen | Direncanakan | Tidak berlaku untuk data billing, yang hanya disajikan |
| UI-06 | Pencarian Ctrl+K | Direncanakan | |
| UI-07 | Nama jenis dokumen persis seperti CEISA 4.0, kelompok dapat dibuka | Direncanakan | Menghapus pemotongan awalan "KEK - " |
| UI-08 | Aksesibilitas: fokus terlihat, kontras AA, seluruh fitur dapat dijalankan dengan papan ketik | Direncanakan | Dikerjakan bersamaan dengan tampilan baru agar tidak diulang |

### 2.1.0 · Wawasan

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| WAS-01 | Peta hambatan proses (di status mana dokumen paling lama menunggu) | Direncanakan | |
| WAS-02 | Beban kerja per penanggung jawab | Direncanakan | |
| WAS-03 | Rekonsiliasi pungutan dokumen dan billing | Direncanakan | Data billing per pungutan sudah terbaca di TGH-04 |
| WAS-04 | Pemeriksaan kualitas data: tanggal kosong, jenis tidak dikenal, billing tanpa dokumen | Direncanakan | Hanya menyajikan daftar temuan; perluasan dari TGH-10 |

### 2.2.0 · Bukti dan pencarian

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| BKT-01 | Berkas audit satu klik (Excel, kartu arsip, riwayat status, PDF billing) | Direncanakan | |
| BKT-02 | Pencarian bahasa sehari-hari di Ctrl+K | Direncanakan | Bergantung pada UI-06 |
| BKT-03 | Lapisan bantu opsional di tabel portal | Direncanakan | Perlu izin tambahan; keputusan ditinjau dulu |

### 2.3.0 · Tim dan banyak akun

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| KLB-01 | Ringkasan lintas akun untuk PPJK | Direncanakan | Satu tabel: belum selesai dan melewati SLA per akun perusahaan. Data tiap akun tetap terpisah dan dibaca dari penyimpanan lokal |
| KLB-02 | Ekspor tugas jatuh tempo ke kalender (.ics) | Direncanakan | Hanya tugas internal; tanggal tenggat billing tidak diekspor |
| KLB-03 | Preset laporan: bagian dan urutan disimpan (Rapat bulanan, Mingguan, Audit) | Direncanakan | Memangkas pemilihan berulang di dialog laporan |

### Distribusi (tidak terikat versi)

| ID | Fitur | Status | Catatan |
|---|---|---|---|
| DST-01 | Chrome Web Store sebagai satu-satunya saluran pemasangan | Dikerjakan | Paket 1.17.0 (diminifikasi) dan kit unggahan siap; diunggah pemilik, lalu menunggu tinjauan Google. ID tetap dan pembaruan otomatis, sehingga data pengguna bertahan di setiap pembaruan |
| DST-04 | GitHub hanya untuk dokumentasi, panduan, catatan perubahan, roadmap, dan video | Dikerjakan | Folder ekstensi, daftar SHA-256, dan pemeriksaan paket dihapus dari repositori; README, PANDUAN, FAQ, dan halaman proyek mengarahkan pemasangan ke Store. Tautan Store ditambahkan setelah tayang |

### Ditunda dan tidak direncanakan

| ID | Fitur | Status | Alasan |
|---|---|---|---|
| JMN-01 | Jaminan jatuh tempo | Ditunda | Keputusan pengguna |
| XLS-01 | Riwayat portal di lembar Excel dan kolom tambahan Excel nilai (invoice, B/L, negara asal) | Ditunda | Hanya bila diminta pengguna |
| TDK-01 | Estimasi selesai per dokumen | Tidak direncanakan | Tidak dapat diandalkan dari data portal |
| TDK-02 | Notifikasi Chrome dan ringkasan pagi otomatis | Tidak direncanakan | Dilepas pada 1.12.0 agar izin tetap minimal |
| TDK-03 | Perbandingan periode nilai dan pungutan, nilai per HS dan negara | Tidak direncanakan | Di luar tujuan ekstensi |
| DST-02 | ID ekstensi tetap untuk paket GitHub | Tidak direncanakan | Tidak diperlukan: paket tidak lagi dibagikan lewat GitHub, dan ID Store sudah tetap |
| TDK-04 | Halaman Tentang data dan pengingat cadangan berkala | Tidak direncanakan | Ekstensi tetap ringkas. Cadangan dan pemulihan data diputuskan ulang menjadi DTA-01 karena kebutuhan pindah pemasangan |

## Cara mengelola fitur

1. **Masuk daftar dulu.** Ide baru diberi ID dan status Direncanakan sebelum dikerjakan. Ide yang tidak lolos gerbang produk di bawah ditulis sebagai Tidak direncanakan beserta alasannya, agar tidak diusulkan ulang.
2. **Satu fitur, satu versi.** Fitur yang tidak siap pada Kamis pembekuan kode digeser ke rilis berikutnya. Tanggal rilis tidak mundur.
3. **Definisi selesai.** Fitur berstatus Siap rilis bila: pengujian otomatis lulus, diuji pengguna di portal sungguhan bila menyentuh data portal, kalimat bahasa Inggris tersedia, dan README serta CHANGELOG diperbarui.
4. **Dua dokumen, tanpa duplikasi.** Rencana dan status ada di ROADMAP. Setelah Dirilis, isi fitur dipindahkan ke CHANGELOG dan baris di ROADMAP dihapus dari daftar aktif.
5. **Tinjauan bulanan** (Senin pertama tiap bulan): struktur data portal, izin, daftar host, SHA-256 paket, dan peninjauan ulang fitur Ditunda.

### Gerbang produk

Fitur baru harus lolos keempatnya:

- Hanya membaca dari portal; tidak mengubah atau mengirim apa pun ke portal.
- Izin dan daftar host tidak bertambah, kecuali diputuskan tersendiri.
- Data tetap di perangkat pengguna; identitas wajib bayar tidak disimpan.
- Menyajikan data, bukan menyuruh tindakan, terutama untuk billing dan pembayaran.

## Sudah tersedia

| Bagian | Isi |
|---|---|
| Pemantauan | Dasbor status, umur dokumen, SLA per jenis dokumen dan fasilitas, jalur, respons (kode angka diterjemahkan dengan Referensi Respon resmi), status per jenis dokumen, dan tanda BERUBAH dengan Riwayat Status dan Respon dari portal |
| Isi dokumen | Ambil isi dari Unduh Excel portal dengan cakupan tanggal dan jenis dokumen, pengambilan bertahap (kolom Isi, Ambil yang belum, Ambil ulang), kartu arsip per pengajuan |
| Nilai dan pungutan | Total, rincian per dokumen (dapat dikelompokkan per jenis), tabel per jenis dokumen, per pungutan, per fasilitas, rekap bulanan, filter khusus kartu, dan validasi terhadap total portal |
| Tindak lanjut | Penanggung jawab, tugas, target, catatan, riwayat, dan penugasan lewat WhatsApp |
| Keluaran | Excel berformat (termasuk Nilai dan pungutan dengan cakupan sendiri, Daftar Isi, dan Perubahan Status), CSV, presentasi rapat, laporan resmi A4, memo per penanggung jawab, dan ringkasan WhatsApp (Biasa, Pagi, Sore, Ringkas) |
| Adaptif | Profil perusahaan, jenis fasilitas dan templat SLA, filter perusahaan dan kantor, penyimpanan terpisah per akun, pemeriksaan struktur data |
| Bahasa dan tampilan | Bahasa Indonesia bawaan dan English, tema terang dan gelap |
| Berbagi | Tombol Bagikan ke rekan (LinkedIn, WhatsApp, X, Telegram) yang hanya mengirim tautan proyek |
| Mutu dan rilis | 80 pengujian otomatis, uji asap dasbor, paket Chrome Web Store, kebijakan privasi, daftar SHA-256, dan pemeriksaan otomatis paket di GitHub Actions |
