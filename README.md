<p align="center"><img src="docs/images/logo.png" width="96" alt="Logo CEISA Monitor"></p>

<h1 align="center">CEISA Monitor</h1>

<p align="center">Pantau status dokumen pabean di portal CEISA 4.0 dalam satu layar.<br>
Dasbor, penugasan via WhatsApp, nilai dan pungutan per dokumen, presentasi rapat, laporan resmi, dan Excel.</p>

<p align="center">
<a href="../../releases/latest"><b>Unduh rilis terbaru</b></a> ·
<a href="docs/PANDUAN.md">Panduan bergambar</a> ·
<a href="docs/ALUR_KERJA.md">Alur kerja</a> ·
<a href="docs/FAQ.md">Tanya jawab</a> ·
<a href="SECURITY.md">Keamanan</a> ·
<a href="#english">English</a>
</p>

<p align="center"><b>Versi 1.16.3</b> · Chrome dan Edge · Bahasa Indonesia dan English · Gratis · Tidak resmi, tidak berafiliasi dengan DJBC</p>

![CEISA Monitor](docs/gif/dasbor.gif)

## Mengapa CEISA Monitor

Status dokumen ada di portal CEISA 4.0, tetapi harus dicari halaman demi halaman, disalin ke Excel, lalu disusun menjadi laporan. Tugas untuk tim pun diketik ulang satu per satu ke WhatsApp. CEISA Monitor membaca daftar dokumen dengan sesi login Anda sendiri dan mengolahnya langsung di peramban, tanpa server.

## Fitur

| Kebutuhan | Yang disediakan |
|---|---|
| Gambaran cepat | Enam angka utama untuk semua jenis dokumen, dibandingkan dengan 30 hari lalu, periode sebelumnya, atau tahun lalu |
| Semua data | Menarik seluruh dokumen yang tersedia di portal, termasuk tahun-tahun sebelumnya |
| Periode bebas | 7/30/90 hari, bulan ini, bulan lalu, kuartal, tahun ini, tahun lalu, semua data, atau rentang tanggal sendiri |
| Komposisi status | Donat dan daftar status dengan jumlah dan persentase; pilih jenis dokumen pada tombol di atas dasbor untuk melihatnya per jenis, dan klik status untuk menyaring rincian |
| Verifikasi ke kantor | Dokumen Pemeriksaan Dokumen dengan jalur bukan merah bertanda **VERIFIKASI** (bukan Jalur Merah), karena dokumen perlu disampaikan dan diverifikasi ke kantor Bea Cukai |
| Apa yang berubah | Perubahan sejak kemarin, sejak Senin, 7 hari terakhir, atau sejak terakhir dibuka |
| Kapan berubah | Popup ikon **BERUBAH** menampilkan **Riwayat Status dan Riwayat Respon dari portal** dengan jam persis, seperti tab di portal; status yang baru muncul ditandai. Riwayat diambil per dokumen saat popup dibuka, tanpa nama petugas. Kartu rincian memuat status sebelum dan sesudah, dengan kode respons resmi CEISA 4.0 diterjemahkan otomatis |
| Isi dokumen | Tombol **Ambil isi dokumen…** dengan dialog cakupan (rentang tanggal daftar dan jenis dokumen). Kartu arsip per pengajuan (klik dua kali baris): dokumen pelengkap, barang, nilai, pungutan, jaminan; pencarian nomor invoice, B/L, dan kontainer |
| Nilai dan pungutan | Total nilai pabean, pungutan dibayar dan berfasilitas, tabel rincian per dokumen (BM, PPN, PPh, total dibayar, fasilitas) yang dapat dicari dan diurutkan, serta rekap bulanan; BC 2.5 dan sejenisnya dibaca dari lembar PUNGUTAN portal; tombol Excel membuka dialog cakupan (periode dan jenis dokumen sendiri, ringkasan kelengkapan, lembar Cakupan, pilihan satu lembar per jenis) |
| Siapa yang menangani | Tindak lanjut per dokumen: penanggung jawab, tugas, target, catatan, dan riwayat perubahan |
| Penugasan | Satu pesan WhatsApp per penanggung jawab, berisi nomor pengajuan, nomor pendaftaran, status, tugas, dan target |
| Prioritas harian | Kartu **Hari ini**: tugas terlambat atau jatuh tempo, Jalur Merah atau pemeriksaan yang belum selesai, baru melewati SLA, dan belum ada penanggung jawab |
| Laporan | Presentasi .pptx (26 slide, atau 9 slide pada mode ringkasan eksekutif) dengan slide Poin utama, bab Nilai dan pungutan, dan lampiran; laporan resmi A4 (PDF/Word) dengan bab dan lampiran yang sama; Excel dengan lembar Daftar Isi, Nilai per Dokumen, dan Perubahan Status; ringkasan WhatsApp Pagi/Sore dengan nilai dan tugas hari ini |
| Kenyamanan | Bahasa Indonesia sejak pembukaan pertama (English dari tombol ID/EN), tema terang dan gelap, mode demo |

## Lihat cara kerjanya

| Penugasan via WhatsApp | Komposisi status |
|---|---|
| ![Penugasan via WhatsApp](docs/gif/penugasan_whatsapp.gif) | ![Komposisi status](docs/images/06_komposisi_status.png) |
| **Rincian perubahan status** | **Riwayat dari portal pada ikon BERUBAH** |
| ![Rincian perubahan](docs/gif/rincian_perubahan.gif) | ![Popup BERUBAH](docs/images/05_perubahan.png) |
| **Tindak lanjut** | **Presentasi rapat** |
| ![Tindak lanjut](docs/gif/tindak_lanjut.gif) | ![Presentasi](docs/gif/presentasi.gif) |
| **Ambil isi dokumen** | **Nilai dan pungutan per dokumen** |
| ![Ambil isi dokumen](docs/images/37_ambil_isi.png) | ![Nilai dan pungutan](docs/images/32_nilai_pungutan.png) |
| **Per jenis dokumen dengan filter kartu** | **Rincian dikelompokkan per jenis** |
| ![Per jenis dokumen](docs/images/39_per_jenis_filter.png) | ![Rincian dikelompokkan](docs/images/40_rincian_kelompok.png) |
| **Kartu arsip pengajuan** | **Ringkasan WhatsApp/surel** |
| ![Kartu arsip](docs/images/29_kartu_arsip.png) | ![Ringkasan WhatsApp](docs/images/42_ringkasan_wa.png) |
| **Hari ini** | **Rekap bulanan** |
| ![Hari ini](docs/images/33_hari_ini.png) | ![Rekap bulanan](docs/images/34_rekap_bulanan.png) |

Video **Yang baru di v1.15** (bernarasi dan bersubtitle): baris filter kartu Isi dokumen, tampilan per jenis dokumen, rincian berkelompok dengan subtotal, ekspor Excel, dan pengambilan isi dokumen yang dapat dilanjutkan. Unduh `CEISA_Monitor_Yang_Baru_v1.15.mp4` dari rilis [v1.16.3](../../releases/tag/v1.16.3). Video sebelumnya (v1.12) ada di rilis [v1.12.0](../../releases/tag/v1.12.0). Perubahan lengkap ada di [CHANGELOG](CHANGELOG.md).

Video tutorial lengkap untuk dasar pemakaian (15 bagian, direkam pada versi 1.7) tersedia di rilis [v1.7.0](../../releases/tag/v1.7.0). Semua gambar dan video memakai data demo.

## Pemasangan

1. Unduh `ceisa-monitor-v1.16.3.zip` dari [Releases](../../releases/latest), lalu ekstrak. Anda juga dapat memakai folder [`extension/`](extension) di repositori ini.
2. Buka `chrome://extensions` (atau `edge://extensions`), lalu aktifkan **Developer mode**.
3. Klik **Load unpacked** dan pilih folder hasil ekstrak.
4. Sematkan ikon CEISA Monitor di bilah alat.

Untuk memastikan paket tidak diubah pihak lain, cocokkan kode SHA-256 di [SECURITY.md](SECURITY.md#memeriksa-keaslian-paket). Versi Chrome Web Store sedang disiapkan; tautannya akan ditambahkan di sini setelah tayang.

## Mulai dalam empat langkah

1. **Masuk ke portal CEISA 4.0** seperti biasa dengan akun Anda sendiri.
2. **Buka halaman Daftar Dokumen** (`portal.beacukai.go.id/dokumen-pabean/`) dan tunggu sampai tabel tampil.
3. **Buka dasbor CEISA Monitor, lalu klik Perbarui data.** Penarikan pertama untuk semua data memerlukan beberapa menit. Biarkan tab portal tetap terbuka.
4. **Atur Profil perusahaan**: jenis fasilitas, status final, dan target SLA.

Ingin mencoba dahulu tanpa masuk ke portal? Pilih **Coba mode demo** pada layar sambutan. Langkah lengkap ada di [Panduan](docs/PANDUAN.md), dan contoh rutinitas harian, mingguan, dan bulanan ada di [Alur kerja](docs/ALUR_KERJA.md).

## Keamanan dan privasi

- Hanya membaca data dengan sesi login Anda sendiri. Kata sandi dan token tidak disimpan, dan sesi tidak diperpanjang.
- Data diolah dan disimpan di peramban Anda. Tidak ada server, analitik, iklan, atau pihak ketiga.
- Izin minimum: penyimpanan lokal, akses ke `portal.beacukai.go.id` saja, dan alarm.
- Kebijakan keamanan konten (CSP) ketat: hanya skrip dari dalam paket yang boleh berjalan.
- Pesan WhatsApp hanya disalin atau dibuka bila Anda mengklik tombolnya; ekstensi tidak mengirim pesan sendiri.
- Setiap perubahan pada folder `extension/` diperiksa otomatis oleh GitHub Actions (SHA-256, manifest, CSP, dan larangan kode dari luar).
- Rincian: [SECURITY.md](SECURITY.md) · [Kebijakan privasi](docs/privacy-policy.html) · [PRIVACY.md](PRIVACY.md)

## Masukan dan dukungan

Temukan masalah atau punya ide fitur? Buka [Issues](../../issues/new/choose) dan pilih templat yang sesuai. Jangan melampirkan data asli perusahaan, nomor pengajuan, atau tangkapan layar portal yang memuat data rahasia.

## Dukung proyek ini

Tombol **Bagikan ke rekan** di dasbor membuka pesan siap kirim ke LinkedIn, WhatsApp, X, atau Telegram; hanya tautan proyek yang dikirim.

CEISA Monitor gratis untuk semua pengguna dan seluruh fiturnya tidak dikunci. Bila bermanfaat bagi tim Anda, dukungan sukarela dapat diberikan melalui [saweria.co/triasex](https://saweria.co/triasex) atau dengan memindai kode QR di bawah. Dana dipakai untuk pengembangan, pengujian dengan data nyata, dan dokumentasi.

<p align="center"><img src="docs/images/dukung_qr.png" alt="Kode QR dukungan sukarela" width="320"></p>

## Lisensi

Hak cipta © 2026 Trias Purwantoro. Hak cipta dilindungi. Folder `extension/` berisi paket rilis yang sudah diminifikasi; kode sumber tidak dipublikasikan. Ekstensi boleh dipasang dan dipakai untuk pekerjaan sendiri, tetapi tidak boleh disalin, diubah, diekstrak ulang, atau didistribusikan ulang tanpa izin tertulis. Lihat [LICENSE](LICENSE). Pustaka ExcelJS dan PptxGenJS memakai lisensi MIT masing-masing.

---

<a id="english"></a>
## English

CEISA Monitor is a free Chrome and Edge extension for Indonesia's CEISA 4.0 customs portal. It pulls all documents available to your account and turns them into a dashboard with any period and comparison and a status-composition donut. "Fetch document contents" opens a scope dialog (list date range and a document-type picker based on the official 243-type reference) and reads each submission's own Excel export into an archive card (supporting documents, goods, value, duties, guarantees) and a Value and duties tab with a per-document breakdown (customs value, import duty, VAT, income tax, total paid, facilities) and monthly recap. The BERUBAH popup shows a status-history timeline, and status-change details show before/after and portal responses. Also included: a Today card, follow-up tracking with WhatsApp task messages per owner, a 22-slide meeting deck, a formal A4 report, and an Excel workbook. It reads data with your own login session and processes everything locally in the browser: no server, no stored passwords, read-only. The interface opens in Indonesian; switch to English with the ID/EN button. Light or dark theme.

Install: download the zip from [Releases](../../releases/latest), unzip, open `chrome://extensions`, enable Developer mode, and choose Load unpacked. Try demo mode first if you do not have a CEISA account.

Independent project, not affiliated with Indonesian Customs (DJBC). All rights reserved; see [LICENSE](LICENSE).
