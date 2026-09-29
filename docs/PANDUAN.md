# Panduan Lengkap CEISA Monitor v1.15

Panduan ini menjelaskan setiap fitur secara berurutan, dari pemasangan sampai laporan. Semua gambar memakai data demo.

[Kembali ke README](../README.md) · [Alur kerja](ALUR_KERJA.md) · [Tanya jawab](FAQ.md)

## Daftar isi

1. [Pemasangan dan layar sambutan](#1-pemasangan-dan-layar-sambutan)
2. [Menarik data pertama kali](#2-menarik-data-pertama-kali)
3. [Kepala dasbor](#3-kepala-dasbor)
4. [Periode, pembanding, dan filter](#4-periode-pembanding-dan-filter)
5. [Enam angka utama](#5-enam-angka-utama)
6. [Perubahan, rincian perubahan status, dan isi dokumen](#6-perubahan-rincian-perubahan-status-dan-isi-dokumen)
7. [Komposisi status](#7-komposisi-status)
8. [Status per jenis, umur dokumen, dan rincian status](#8-status-per-jenis-umur-dokumen-dan-rincian-status)
9. [Penjaluran dan tindak lanjut](#9-penjaluran-dan-tindak-lanjut)
10. [Rincian dokumen](#10-rincian-dokumen)
11. [Mencatat tindak lanjut dan riwayatnya](#11-mencatat-tindak-lanjut-dan-riwayatnya)
12. [Penugasan via WhatsApp](#12-penugasan-via-whatsapp)
13. [Mengelola penanggung jawab](#13-mengelola-penanggung-jawab)
14. [Pengaturan dan SLA](#14-pengaturan-dan-sla)
15. [Profil perusahaan](#15-profil-perusahaan)
16. [Ekspor](#16-ekspor)
17. [Popup dan pembaruan otomatis](#17-popup-dan-pembaruan-otomatis)
18. [Bahasa, tema, dan mode demo](#18-bahasa-tema-dan-mode-demo)

## 1. Pemasangan dan layar sambutan

1. Unduh `ceisa-monitor-v1.15.2.zip` dari halaman [Releases](../../../releases/latest), lalu ekstrak.
2. Buka `chrome://extensions` (Edge: `edge://extensions`), aktifkan **Developer mode**, klik **Load unpacked**, dan pilih folder hasil ekstrak.
3. Klik ikon puzzle di bilah alat, lalu sematkan CEISA Monitor.

Setelah dipasang, dasbor terbuka dengan panduan empat langkah. Pilih **Coba mode demo** untuk melihat semua fitur dengan data contoh. Panduan ini dapat dibuka lagi melalui tautan **Lihat panduan** pada halaman "Belum ada data".

![Layar sambutan](images/01_sambutan.png)

Memperbarui versi: ekstrak paket baru ke folder yang sama, lalu klik ikon muat ulang (↻) pada kartu CEISA Monitor di `chrome://extensions`. Data dan catatan tidak hilang.

## 2. Menarik data pertama kali

1. Masuk ke portal CEISA 4.0 seperti biasa dengan akun Anda sendiri.
2. Buka halaman **Daftar Dokumen** (`portal.beacukai.go.id/dokumen-pabean/`) dan tunggu sampai tabel dokumen tampil. Tombol **CEISA Monitor** muncul di pojok kanan bawah portal.
3. Buka dasbor, lalu klik **Perbarui data**. Biarkan tab portal tetap terbuka.
4. Atur **Profil perusahaan** (bagian 15).

Secara bawaan, CEISA Monitor menarik **semua data** yang tersedia di portal, termasuk tahun-tahun sebelumnya. Penarikan pertama memerlukan beberapa menit, tergantung jumlah dokumen. Bila portal membatasi jumlah hasil per permintaan, penarikan otomatis dilanjutkan per kode dokumen. Setelah itu, data diperbarui otomatis setiap kali Anda masuk ke portal dan data sudah lebih lama dari batas yang diatur (bawaan 6 jam).

![Dasbor](images/02_dasbor.png)

## 3. Kepala dasbor

![Kepala dasbor](images/03_kepala.png)

- **ID / EN**: mengganti bahasa antarmuka. Dasbor selalu terbuka dalam bahasa Indonesia; English hanya tampil bila dipilih dari tombol ini.
- **Auto / Terang / Gelap**: tema tampilan.
- **Status sesi**: menunjukkan apakah portal terhubung dan berapa lama lagi sesi berlaku.
- **Perbarui data**: menarik data terbaru dari portal.
- **Ekspor**: **Buat laporan** (presentasi, laporan resmi, dan Excel sekaligus) dan **Bagikan ringkasan** (WhatsApp/surel).
- **Profil perusahaan** dan **Pengaturan**: dijelaskan di bagian 14 dan 15.

## 4. Periode, pembanding, dan filter

![Filter](images/04_filter.png)

- **Periode**: 7, 30, atau 90 hari terakhir, bulan ini, bulan lalu, kuartal ini, tahun ini, tahun lalu, 12 bulan terakhir, semua data, atau rentang tanggal khusus. Grafik otomatis menjadi harian (≤ 45 hari), mingguan (≤ 200 hari), atau bulanan.
- **Bandingkan dengan**: 7 hari lalu, 30 hari lalu, periode sebelumnya, atau periode sama tahun lalu.
- **Jalur dan jenis dokumen**: menyaring seluruh dasbor sekaligus. Bilah filter hanya dua baris agar tidak menutupi layar.
- **Filter lain**: membuka pilihan **Bandingkan dengan**, perusahaan, dan kantor. Titik emas di tombol menandakan ada filter lain yang aktif.
- **Atur ulang**: kembali ke tampilan awal.

![Filter lain](images/36_filter_terbuka.png)

Bila tanggal awal penarikan pernah diubah dan periode yang dipilih lebih awal dari data yang tersimpan, dasbor menampilkan tombol **Tarik data sejak …** dan **Tarik semua data**.

![Periode](gif/periode.gif)

## Hari ini

Kartu **Hari ini** di bagian atas dasbor menampilkan hal yang perlu ditindaklanjuti sekarang: tugas terlambat atau jatuh tempo, dokumen Jalur Merah atau pemeriksaan yang belum selesai, dokumen yang baru melewati SLA, dan dokumen melewati SLA yang belum memiliki penanggung jawab. Klik satu baris untuk langsung melihat daftarnya. Bila tidak ada yang mendesak, kartu menyatakannya.

![Kartu Hari ini](images/33_hari_ini.png)

## 5. Enam angka utama

Setiap kartu menampilkan nilai, keterangan, selisih terhadap pembanding (hijau berarti membaik, merah berarti memburuk), dan garis kecil pergerakan 30 hari terakhir. Arahkan kursor ke garis untuk melihat nilai per tanggal. Klik kartu **Sesuai SLA**, **Belum selesai**, atau **Lebih dari 30 hari** untuk langsung melihat dokumennya.

![Dasbor](gif/dasbor.gif)

## 6. Perubahan, rincian perubahan status, dan isi dokumen

![Perubahan](images/05_perubahan.png)

Kartu Perubahan menampilkan dokumen yang berubah status, menjadi selesai, dokumen baru, dan dokumen yang baru melewati SLA. Pembandingnya dapat dipilih: sejak kemarin, sejak Senin, 7 hari terakhir, sejak terakhir Anda membuka dasbor, atau sejak pembaruan sebelumnya. Klik angkanya untuk melihat dokumen di tabel rincian.

Di tabel rincian, arahkan kursor atau klik tanda **BERUBAH** untuk melihat:

- status sebelum dan sesudah;
- kapan status lama terakhir terlihat dan status baru pertama terlihat, serta rentang waktu perubahannya;
- respons dan waktu respons dari portal (misalnya SPPB atau SPJM);
- Riwayat Status dan Riwayat Respon dari portal, dengan jam persis.

**Riwayat dari portal pada ikon BERUBAH.** Saat popup dibuka, CEISA Monitor mengambil riwayat satu dokumen dari alamat yang sama dengan tab Riwayat Status dan Riwayat Respon di portal (dua permintaan baca-saja). Tampil sebagai lini masa: setiap status dengan tanggal dan jam, terbaru di atas, lalu daftar respons (misalnya SPPB, SPPD). Status yang muncul sejak pengecekan terakhir diberi label **baru**, dan baris **Sesudah** menulis "terjadi … (jam portal)". Nama petugas dan nomor identitas tidak diambil.

Syaratnya, tab portal CEISA terbuka dan sudah masuk. Bila tidak, popup menampilkan pesan dan tetap memakai rekaman ekstensi sebagai cadangan. Riwayat disimpan di komputer Anda: dokumen berjalan diambil ulang bila statusnya berubah atau lebih dari 30 menit, dokumen final tidak diambil ulang.

Bila riwayat portal tidak tersedia, waktu dasar yang ditampilkan adalah saat perubahan terlihat pada pembaruan data. Bila rekaman pada tanggal pembanding tidak ada, status sebelumnya diperkirakan dari tanggal daftar dan tanggal respons, dan diberi label **perkiraan**.

**Kartu arsip dan isi dokumen.** Klik dua kali baris di tabel rincian untuk membuka kartu arsip: dokumen pelengkap dengan nama resmi, barang, nilai dan logistik, pungutan, dan jaminan. Isinya dibaca dari layanan Unduh Excel portal. Kotak pencarian rincian ikut mencari nomor invoice, B/L, kontrak, dan kontainer.

![Kartu arsip pengajuan](images/29_kartu_arsip.png)

**Ambil isi dokumen dengan cakupan.** Untuk banyak dokumen sekaligus, klik **Ambil isi dokumen…** di kartu **Isi dokumen**. Dialog cakupan meminta:

- **Rentang tanggal daftar**: Bulan ini, 90 hari, Tahun ini, atau Sesuai filter dasbor.
- **Jenis dokumen**: hanya jenis yang ada di data pada rentang tanggal terpilih, beserta jumlahnya. Kosong berarti semua jenis. Jenis yang sudah terambil menampilkan jumlah terambil dan pilihan **Ambil ulang**.
- **Ringkasan**: jumlah dokumen yang sesuai, yang dilewati karena isinya sudah diambil, yang akan dibaca, dan perkiraan waktu dalam menit.

Tidak ada batas jumlah per klik. Klik tombol yang sama untuk berhenti, lalu lanjutkan kapan saja; dokumen yang sudah diambil dilewati.

![Dialog Ambil isi dokumen](images/37_ambil_isi.png)

Isi dokumen cukup diambil sekali. Setiap dokumen tersimpan segera setelah selesai, proses dapat dihentikan dan dilanjutkan, dan dokumen hanya diambil ulang bila statusnya berubah atau Anda memilih **Ambil ulang**. Kartu **Isi dokumen** menampilkan kemajuan "Isi {n} dari {m} dokumen" selama proses berjalan.

![Isi dokumen: nilai dan pungutan](images/28_isi_dokumen.png)

**Nilai dan pungutan.** Kartu Isi dokumen memiliki empat tampilan: **Per pungutan**, **Per jenis dokumen**, **Per fasilitas**, dan **Per bulan**. Tiga tampilan pertama menampilkan kartu ringkasan (dokumen, nilai pabean, pungutan dibayar, pungutan berfasilitas, netto, dan kontainer), satu tabel sesuai tampilan, dan tabel **Rincian per dokumen** dengan kolom nilai pabean, BM, PPN, PPh, total dibayar, dan fasilitas. Rincian dapat dicari, diurutkan per kolom, dan dikelompokkan per jenis (centang **Kelompokkan per jenis**: tiap kelompok memiliki judul dengan jumlah dokumen dan subtotal). Penghitung "Menampilkan {a} dari {b} dokumen" menunjukkan jumlah baris yang tampil; klik **Tampilkan {n} lagi** atau **Tampilkan semua**.

- **Per pungutan**: total per jenis pungutan (dibayar dan fasilitas). BC 2.5 dan dokumen sejenis dibaca dari lembar PUNGUTAN portal, karena kolom tarif per barang di dokumen itu bernilai 0. Dibayar berarti kode fasilitas 1 (dibayar) dan 7 (sudah dilunasi); dibebaskan, ditangguhkan, ditanggung pemerintah, dan tidak dipungut dihitung sebagai fasilitas. Sebuah catatan muncul bila total pungutan portal berbeda dari jumlah tarif per barang.
- **Per jenis dokumen**: satu baris per jenis dengan isi yang sudah diambil dibanding jumlah dokumen, nilai pabean, BM, PPN, PPh, total dibayar, fasilitas, dan porsi fasilitas, ditambah baris jumlah. Klik satu baris untuk menyaring rincian ke jenis itu; klik lagi untuk melepasnya.
- **Per fasilitas**: porsi tiap fasilitas terhadap seluruh pungutan berfasilitas.
- **Per bulan**: menurut bulan tanggal daftar, memuat jumlah dokumen, nilai pabean, pungutan yang dibayar, pungutan berfasilitas, dan persentase fasilitas.

**Filter khusus kartu.** Di atas kartu ada baris filter sendiri: **Jenis dokumen** (boleh lebih dari satu, dengan jumlah yang sudah terambil dibanding jumlah dokumen), **Jalur**, dan **Pungutan** (semua dokumen, ada pungutan atau fasilitas, ada pungutan dibayar, atau ada fasilitas). Klik **Atur ulang** untuk menghapus semuanya. Filter ini hanya berlaku untuk kartu dan ekspornya; dasar datanya tetap periode dan filter dasbor di bagian atas halaman, sehingga dasbor status tidak ikut berubah.

![Per jenis dokumen dengan filter kartu](images/39_per_jenis_filter.png)

![Rincian dikelompokkan per jenis](images/40_rincian_kelompok.png)

Tombol **Excel** di kartu ini membuka dialog **Ekspor nilai dan pungutan** (lihat bagian berikut) dengan jenis dan jalur yang sedang dipilih di kartu. Kolom **Isi** (✓) di tabel rincian dan filter **Isi dokumen** (Sudah/Belum diambil) menunjukkan dokumen yang isinya sudah diambil; tombol **Ambil yang belum** melengkapi sisanya.

![Nilai dan pungutan](images/32_nilai_pungutan.png)

**Ekspor nilai dan pungutan ke Excel.** Klik **Excel** di kartu Isi dokumen. Dialog meminta:

- **Rentang tanggal daftar**: awalnya mengikuti filter dasbor; tombol cepat Bulan ini, 90 hari, Tahun ini, dan Sesuai filter dasbor.
- **Jenis dokumen**: centang jenis yang diinginkan (hanya jenis yang ada di data, dengan jumlah dan yang sudah terambil). Tanpa centang berarti semua jenis. Filter jalur, perusahaan, dan kantor yang aktif di dasbor ikut diterapkan.
- **Pisahkan per jenis dokumen**: satu lembar Nilai untuk setiap jenis dokumen, di samping lembar gabungan.

Di bawahnya tampil ringkasan kelengkapan: dokumen dalam cakupan, yang isinya sudah diambil, dan yang belum. Bila ada yang belum, klik **Ambil yang belum lalu ekspor** untuk mengambil sisanya dan langsung mengunduh, atau **Unduh yang sudah ada** untuk mengekspor yang tersedia saja.

![Dialog ekspor nilai dan pungutan](images/35_ekspor_nilai.png)

Nama berkas memuat cakupannya, misalnya `CEISA_Nilai_Pungutan_PT-Contoh_2026-08-01_sd_2026-08-31_Pengeluaran-ke-LDP_1457.xlsx`. Isi berkas: lembar **Cakupan** (perusahaan, periode, jenis dokumen, filter, waktu ekspor, dan jumlah dokumen yang masuk maupun belum masuk perhitungan), **Nilai & Pungutan** (ringkasan, total per jenis pungutan, rekap bulanan), **Ringkasan per Jenis** (satu baris per jenis dokumen dengan jumlah, nilai, pungutan, fasilitas, dan porsi fasilitas), dan **Nilai per Dokumen** dengan kolom fasilitas terpisah (dibebaskan, ditangguhkan, tidak dipungut, ditanggung pemerintah, fasilitas lain, dan total). Baris total ikut berubah saat Anda menyaring tabel di Excel.

![Lembar Cakupan](images/36_excel_cakupan.png)

![Rekap bulanan](images/34_rekap_bulanan.png)

**Kode respons angka.** Respons yang tampil sebagai angka (misalnya 2305) langsung diterjemahkan dengan tabel Referensi Respon resmi CEISA 4.0 dari [portal pengembang Bea Cukai](https://openapi.beacukai.go.id/portal/). Artinya bergantung pada jenis dokumen: akhiran 03 berarti SPPB pada BC 2.3, tetapi Surat Perintah Pemeriksaan Fisik pada BC 2.6.1. Sel Respons menampilkan singkatannya; klik untuk melihat nama lengkap. BC 4.0 dan BC 4.1 tidak tercantum di tabel resmi, sehingga kodenya tidak ditebak.

Tanda **SLA** menampilkan tanggal daftar, batas SLA, dan sejak kapan batas itu terlewati.

![Rincian perubahan status](images/26_rincian_perubahan.png)

## 7. Komposisi status

![Komposisi status](images/06_komposisi_status.png)

Kartu **Komposisi status** menampilkan donat dan daftar status dengan jumlah dan persentase dokumen pada periode terpilih. Klik satu status untuk menyaring tabel rincian pada status tersebut.

Kartu **Komposisi status per jenis dokumen** menampilkan satu batang per jenis dokumen berisi porsi tiap status (tombol Persentase atau Jumlah). Klik segmen untuk menyaring rincian pada jenis dokumen dan status tersebut.

![Komposisi status per jenis dokumen](images/31_komposisi_jenis.png)

## 8. Status per jenis, umur dokumen, dan rincian status

![Status dan umur](images/08_status_umur.png)

Klik baris jenis dokumen untuk menyaring dasbor. Klik sel pada peta umur untuk melihat dokumen dengan status dan umur tersebut.

Grafik **Tingkat penyelesaian** menampilkan persentase dokumen yang sudah selesai menurut tanggal daftar. Tombol **Rincian status** menampilkan setiap status secara lengkap, masing-masing dengan warna berbeda. Tanda ▲ menunjukkan catatan kejadian dari Profil perusahaan.

![Rincian status](images/27_rincian_status.png)

## 9. Penjaluran dan tindak lanjut

![Penjaluran dan tindak lanjut](images/09_jalur_tindaklanjut.png)

- **Penjaluran dokumen**: jumlah Jalur Hijau dan Jalur Merah, serta Jalur Merah per jenis dokumen.
- **Tindak lanjut**: perlu tindak lanjut, sedang berjalan, melewati target, dan selesai dicek; cakupan tindak lanjut; dan daftar penanggung jawab.
- Tombol **Kirim tugas via WhatsApp** (bagian 12) dan **Salin memo per penanggung jawab** (memo formal).

## 10. Rincian dokumen

![Rincian dokumen](images/10_rincian.png)

- Cari nomor pengajuan, nomor daftar, respons, penanggung jawab, atau catatan.
- Saring menurut status, umur, tindak lanjut (termasuk **Jatuh tempo**), dan perubahan; urutkan menurut umur, SLA, atau target.
- Klik nomor pengajuan untuk menyalinnya.
- Baris bergaris merah di kiri adalah dokumen prioritas: Jalur Merah, status pemeriksaan, atau respons SPJM/SPJK/SPPF.
- Baris bergaris kuning dengan label **VERIFIKASI** adalah dokumen berstatus Pemeriksaan Dokumen dengan jalur bukan merah: dokumen perlu disampaikan dan diverifikasi ke kantor Bea Cukai. Ini berbeda dari Jalur Merah (pemeriksaan fisik).

## 11. Mencatat tindak lanjut dan riwayatnya

Klik **+ Catat** pada baris dokumen, atau centang beberapa dokumen lalu klik **Isi tindak lanjut**.

![Dialog tindak lanjut](images/20_dialog_tugas.png)

| Kolom | Isi |
|---|---|
| Penanggung jawab | Nama orang yang menangani; nama yang pernah dipakai muncul sebagai saran |
| Status tindak lanjut | Belum ditindaklanjuti, Sedang dicek, Menunggu pihak lain, Selesai dicek |
| Target selesai | Tanggal target; dipakai untuk kartu Hari ini dan filter Jatuh tempo |
| Nomor WhatsApp | Disimpan per nama, cukup diisi sekali |
| Tugas yang diminta | Terisi otomatis dari templat bawaan sesuai status dokumen. Pilih **Tulis sendiri…** untuk mengosongkan kolom lalu mengetik tugas sendiri; mengetik langsung di kolom juga bisa |
| Catatan | Keterangan bebas |

Bagian bawah dialog menampilkan **Riwayat status dokumen** dan **Riwayat tindak lanjut**. Setiap perubahan penanggung jawab, status, target, tugas, catatan, dan pengiriman WhatsApp tercatat dengan waktunya. Riwayat tidak dapat diubah karena berfungsi sebagai jejak audit.

![Tindak lanjut](gif/tindak_lanjut.gif)

## 12. Penugasan via WhatsApp

- Di dialog tindak lanjut, klik **Simpan & salin pesan** untuk menyalin pesan tugas, atau **Simpan & buka WhatsApp** untuk langsung membuka WhatsApp ke nomor penanggung jawab.
- Di kartu Tindak lanjut, klik **Kirim tugas via WhatsApp** untuk mengirim satu pesan per penanggung jawab. Pilih nama untuk melihat pratinjau, atur cakupan (semua tugas, melewati target, jatuh tempo, atau belum pernah dikirim), lalu **Salin pesan** atau **Buka WhatsApp**.
- Dokumen yang tugasnya sudah dikirim ditandai **✓ WA** di tabel rincian.

![Kirim tugas via WhatsApp](images/21_kirim_tugas_whatsapp.png)

Contoh pesan:

```
*TUGAS TINDAK LANJUT DOKUMEN PABEAN*
Kepada: Budi
Tanggal: 28 September 2026

Mohon ditindaklanjuti dokumen berikut:

1. *201049B8676F82809202601545*
   Jenis: Pemasukan dari TLDDP
   Nomor pendaftaran: 040147 tanggal 28-09-2026
   Status: Pembongkaran · umur 9 hari (SLA 7 hari) · Jalur Hijau
   Tugas: Pastikan realisasi pembongkaran sudah dilakukan dan dicatat, lalu laporkan jumlah barang yang diterima.
   Target: *30-09-2026*

Mohon balas pesan ini dengan perkembangan terbaru dan kabari bila ada kendala. Terima kasih.
```

Ekstensi tidak mengirim pesan sendiri. WhatsApp hanya dibuka saat Anda mengklik tombolnya, dan Anda sendiri yang menekan kirim.

![Penugasan via WhatsApp](gif/penugasan_whatsapp.gif)

## 13. Mengelola penanggung jawab

| Keperluan | Cara |
|---|---|
| Mengubah isian satu dokumen | Klik isi kolom Tindak lanjut pada dokumen, ubah, lalu Simpan |
| Menghapus penanggung jawab saja | Kosongkan kolom Penanggung jawab, lalu Simpan |
| Menghapus seluruh catatan dokumen | Klik **Hapus** di kiri bawah dialog |
| Mengganti nama untuk banyak dokumen | Cari nama di kotak pencarian, centang kotak judul tabel, klik **Isi tindak lanjut**, isi nama baru, Simpan |
| Menandai selesai | Ubah status tindak lanjut menjadi **Selesai dicek** |
| Mengubah nomor WhatsApp | Di dialog tindak lanjut atau di dialog Kirim tugas via WhatsApp |

Pada pengisian massal, kolom yang dibiarkan kosong tidak mengubah isian lama. Nama di daftar saran hilang dengan sendirinya setelah tidak dipakai di dokumen mana pun.

## 14. Pengaturan dan SLA

![Pengaturan](images/11_pengaturan.png)

Dua bagian yang dapat dilipat:

- **Data**: sejak dan sampai tanggal daftar (kosong = semua data), **jenis dokumen yang ditarik**, pembaruan otomatis, pembaruan saat masuk portal, pilihan menyimpan Excel asli portal ke Unduhan, dan batas data dianggap lama.
- **SLA**: batas hari bawaan, per jenis dokumen, dan per status. Kolom kosong mengikuti batas di atasnya.

**Jenis dokumen yang ditarik** kini berupa pemilih centang dari tabel referensi resmi (243 jenis), bukan kolom ketik kode. Jenis yang ada di data Anda tampil paling atas beserta jumlahnya; ada kolom cari. Kosong berarti semua jenis.

![Pemilih jenis dokumen](images/38_pengaturan_jenis_dokumen.png)

## 15. Profil perusahaan

![Profil perusahaan](images/12_profil.png)

Isi jenis fasilitas (menentukan templat SLA), nama, target SLA, warna, dan logo. **Status final** dan **Catatan kejadian** ada di bagian yang dapat dilipat. Profil dapat diekspor dan diimpor agar rekan satu perusahaan memakai pengaturan yang sama.

## 16. Ekspor

![Menu ekspor](images/13_menu_ekspor.png)

| Ekspor | Isi |
|---|---|
| Buat laporan | Pilih periode sekali, lalu centang berkas yang dibuat: presentasi 22 slide (judul berupa kesimpulan, slide "Keputusan yang dimohon"), laporan resmi A4 format dinas (cetak ke PDF atau unduh sebagai Word), dan/atau Excel dengan lembar pilihan |
| Bagikan ringkasan | Pratinjau, pilihan bagian, format WhatsApp atau teks biasa |

![Presentasi](images/14_presentasi.png)

![Contoh slide](images/19_slide_contoh.jpg)

![Laporan resmi](images/17_laporan_resmi.png)

## 17. Popup dan pembaruan otomatis

<img src="images/18_popup.png" width="360" alt="Popup">

Klik ikon CEISA Monitor untuk melihat umur data, status sesi, empat angka utama, dan hasil pembaruan terakhir. Lencana ikon berubah abu-abu bila data sudah lama.

Bila komputer dimatikan atau sesi portal berakhir, data diperbarui otomatis saat Anda masuk kembali ke portal atau saat Chrome dibuka dan portal sudah masuk. Tren tetap lengkap karena dihitung ulang dari tanggal daftar dan tanggal respons setiap dokumen.

## 18. Bahasa, tema, dan mode demo

- Dasbor selalu terbuka dalam bahasa Indonesia sejak pembukaan pertama, tanpa mengikuti bahasa Chrome. Klik **ID** atau **EN** di kepala dasbor untuk mengganti. Pilihan berlaku juga untuk popup. Presentasi, laporan resmi, Excel, dan ringkasan disusun dalam bahasa Indonesia.
- Klik **Auto**, **Terang**, atau **Gelap** untuk tema tampilan.
- Mode demo menampilkan data contoh. Untuk keluar, klik **Mode demo aktif · Keluar**.

![Tema gelap](images/24_tema_gelap.png)

---

Masih ada pertanyaan? Lihat [Tanya jawab](FAQ.md) atau buka [Issues](../../../issues/new/choose).
