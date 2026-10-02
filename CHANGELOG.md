# Catatan Perubahan

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/) dan penomoran mengikuti [Semantic Versioning](https://semver.org/lang/id/): versi MAJOR.MINOR.PATCH, dengan MINOR untuk fitur baru dan PATCH untuk perbaikan. Tanggal rilis yang sudah lewat dicatat apa adanya. Setiap fitur diberi ID tetap (misalnya TGH-03).

## Rilis

| Versi | Tanggal | Tema |
|---|---|---|
| 1.17.0 | 30 September 2026 | Tagihan: Browse Billing, rincian dan PDF billing, hitung mundur sesi, lembar Billing di Excel, samarkan identitas. Tayang di [Chrome Web Store](https://chromewebstore.google.com/detail/iojgnclbfhgoapolmfgcjkphacdfjbgi) sejak 1 Oktober 2026 |
| 1.16.3 | 30 September 2026 | Bagikan ke rekan |
| 1.16.2 | 30 September 2026 | Perbaikan tautan dukungan |
| 1.16.1 | 30 September 2026 | Perampingan kartu dan uji asap |
| 1.16.0 | 29 September 2026 | Isi ekspor lengkap dan konsisten |
| 1.0.0 sampai 1.15.2 | 28 sampai 29 September 2026 (1.0.0 sampai 1.2.0: tanggal tidak tercatat) | 26 rilis dalam lima fase, lihat Riwayat rilis di bawah |

## Riwayat rilis

Rilis di bawah dikelompokkan menjadi enam fase menurut tema. Pengelompokan ini hanya untuk memudahkan membaca; tanggal setiap rilis tetap sesuai catatan.

### Fase 6. Tagihan

*Versi 1.17.0.* Kartu Tagihan dari Browse Billing, dengan rincian, PDF, lembar Excel, dan pilihan menyamarkan identitas.

#### 1.17.0 · 30 September 2026

**Tema:** Tagihan.

##### Ditambahkan

- **TGH-01 Penghitung mundur sesi portal** (jj:mm:dd) di header dasbor, kuning di bawah 10 menit, dengan pesan jelas saat sesi berakhir. Peringatan muncul bila sesi tinggal kurang dari 5 menit sebelum penarikan data. Hanya waktu kedaluwarsa yang dibaca; token tidak disimpan.
- **TGH-02 Diagnosa Tagihan** di Pengaturan: menyalin hanya alamat (tanpa nilai parameter) dan bentuk data (nama kolom dan tipe) dari Browse Billing dan berkas PDF-nya. Tidak ada isi data, token, atau identitas yang disalin.
- **TGH-03 Kartu Tagihan** dari Browse Billing: billing menurut nomor NTPN, tenggat, dan nilai; tampilan Semua, Ada NTPN, dan Belum ada NTPN; pencarian kode billing, nomor dokumen, atau NTPN. Mengikuti alur CEISA: billing terbit saat Payment Verification, dan bila kedaluwarsa dokumen di-reject lalu terbit billing baru. Karena itu hanya billing terbaru per dokumen yang dihitung; billing lama yang sudah diganti tidak dihitung kedaluwarsa. Status billing dari portal (Kirim Billing, Tunggu Rekon CEISA, Rekon - CEISA) ditampilkan apa adanya. Kartu hanya menyajikan data.
- **TGH-04 Rincian billing** per baris, diambil dari portal saat diklik dan tidak disimpan: riwayat status, bukti pembayaran (NTPN, NTB, tanggal buku, bank, nomor struk bayar, total dibayar; hanya isian yang terisi), dan pungutan per akun dengan pemeriksaan jumlah terhadap total tagihan. Untuk dokumen dengan dua billing, billing yang dibayar ditunjukkan oleh NTPN dan bukti bayarnya.
- **TGH-05 PDF billing dan PDF respon**: tombol PDF di baris membuka Pratinjau billing; di Rincian tersedia juga Cetak Respon. Keduanya tampil sebagai pratinjau di dalam dasbor dengan pdf.js lokal (Apache-2.0), karena penampil PDF bawaan Chrome tidak tampil di bingkai halaman ekstensi. Tombol Unduh PDF dan Buka di tab baru tetap ada; berkas tidak disimpan.
- **TGH-06 Peringatan billing** pada kartu Hari ini, hanya untuk billing yang masih berlaku dan tenggatnya dalam 3 hari.
- **TGH-07 Lembar Billing di Excel**: satu baris per billing (kode billing, nomor dokumen, jenis, status portal, NTPN, tenggat, nilai, keterangan) dengan baris jumlah. Tidak memuat identitas wajib bayar.
- **TGH-08 Samarkan identitas**: pilihan di dialog ekspor Excel, presentasi/laporan, dan ringkasan. Nama perusahaan menjadi Perusahaan A, B, dan seterusnya (perusahaan sendiri selalu A), logo dihapus, sedangkan nomor pengajuan, nomor daftar, kode billing, NTPN, serta NPWP dan NITKU hanya menampilkan empat angka terakhir. Nama berkas ikut disamarkan. Pilihan ini berlaku sama di ketiga dialog dan diingat di browser.

##### Diubah

- Istilah "peramban" diganti "browser" di seluruh antarmuka dan dokumen.
- **DST-01, DST-04 Pemasangan hanya lewat Chrome Web Store.** Repositori GitHub hanya memuat dokumentasi, panduan, catatan perubahan, dan video; folder ekstensi, daftar SHA-256, dan pemeriksaan paket dihapus. Paket 1.17.0 kini diminifikasi.
- **Judul kolom "Umur (hari)" diperjelas menjadi "Umur Dokumen (Hari)"** di rincian dasbor, lembar Excel (Rincian dan Tindak Lanjut), laporan resmi, presentasi, ekspor CSV, dan pesan tugas WhatsApp ("umur dokumen N hari").
- **Ringkasan WhatsApp/surel** kini memuat seluruh dokumen belum selesai, tidak hanya yang melewati SLA: angka utama menambah "masih dalam batas SLA", bagian Per jenis dokumen merinci melewati SLA dan dalam batas SLA, bagian baru "Belum selesai menurut status", dan daftar dokumen tertua diberi penanda SLA.
- **Pilihan jenis dokumen pada ringkasan WhatsApp/surel**: daftar centang di dialog; angka, nilai, tugas, dan perubahan mengikuti jenis yang dipilih. Pilihan diingat di browser.
- **TGH-09 Kartu Tagihan lebih ringkas**: periode dipilih langsung di kartu (12 bulan terakhir, ikuti periode dasbor, bulan ini, 30 hari, 90 hari, tahun ini, atau rentang sendiri) dan berlaku untuk Tarik tagihan maupun Perbarui data; empat angka menjadi filter satu klik; keterangan panjang dipindah ke ikon "i".
- **TGH-10 Billing tanpa dokumen**: billing yang nomor dokumennya tidak ada di data Daftar Dokumen yang ditarik diberi keterangan netral dan dapat disaring dengan pilihan "Tanpa dokumen". Bila penarikan mencakup semua jenis dokumen, tanggal dokumennya berada dalam rentang data, dan billing belum memiliki NTPN, dokumen dianggap telah dihapus pengguna: billing ditandai "Dokumen tidak ada di Daftar Dokumen (kemungkinan dihapus)" dan tidak dihitung pada empat angka kartu Tagihan serta peringatan Hari ini. Billing yang sudah memiliki NTPN tidak pernah ditandai.
- Mode demo kini menyediakan PDF contoh (berlabel "DATA DEMO - bukan dokumen resmi") untuk billing dan respon, sehingga pratinjau PDF dapat dicoba tanpa login portal. Tanggal terbit billing demo tidak lagi melewati hari ini.

##### Diperbaiki

- Samarkan identitas: perusahaan sendiri yang tertulis dengan huruf besar-kecil berbeda di dua sumber tidak lagi menjadi "Perusahaan B"; pencocokan nama tidak membedakan huruf besar-kecil.

### Fase 5. Ketahanan dan pelaporan lengkap

*Versi 1.15.0 sampai 1.16.3.* Pembaruan lebih tahan gangguan, filter isi dokumen, dan seluruh keluaran (presentasi, laporan, Excel, ringkasan) dilengkapi bab nilai dan pungutan.

#### 1.16.3 · 30 September 2026

**Tema:** Bagikan ke rekan.

- **Tombol "Bagikan ke rekan"** di kaki dasbor dan Pengaturan: membuka pesan siap kirim (dapat diedit) ke LinkedIn, WhatsApp, X, Telegram, atau disalin. Hanya tautan halaman proyek yang dikirim; tidak ada data dokumen dan tidak ada panggilan jaringan dari ekstensi (browser hanya membuka tab situs tujuan saat tombol diklik).

#### 1.16.2 · 30 September 2026

**Tema:** Perbaikan tautan dukungan.

- **Perbaikan tautan dukungan sukarela**: alamat halaman Saweria yang benar adalah saweria.co/triasex (sebelumnya menunjuk ke alamat yang salah). Berlaku di kaki dasbor, popup, README, dan FAQ.
- **Kartu dukungan** dengan kode QR di README dan halaman web, disertai penjelasan penggunaan dana.

#### 1.16.1 · 30 September 2026

**Tema:** Perampingan kartu dan uji asap.

- **Kartu "Komposisi status per jenis dokumen" dihapus.** Isinya tumpang tindih dengan tabel Status per jenis dokumen (klik baris untuk menyaring) dan donat Komposisi status yang mengikuti tombol jenis dokumen.
- **Filter Pungutan kartu Isi dokumen kini tercatat pada ekspor Excel** (lembar Cakupan dan Daftar Isi), sehingga pembaca berkas tahu bahwa lembar nilai hanya memuat dokumen berpungutan atau berfasilitas.
- **Uji asap dasbor** (`npm run smoke`): membuka dasbor demo, mengambil isi dokumen, lalu membuat presentasi, Excel, laporan, dan ringkasan. Bersifat opsional dan memerlukan Playwright.

#### 1.16.0 · 29 September 2026

**Tema:** Isi ekspor lengkap dan konsisten.

Isi ekspor (presentasi, laporan resmi, Excel, ringkasan WhatsApp) dilengkapi dan dibuat konsisten.

- **Bab Nilai dan pungutan** di presentasi dan laporan resmi: nilai pabean, BM, PPN, PPh, pungutan dibayar, dan fasilitas, per jenis dokumen dan per bulan, disertai kalimat temuan otomatis dan perbandingan dengan bulan sebelumnya. Bab hanya muncul bila isi dokumen sudah diambil, dan mencantumkan cakupannya.
- **Slide "Poin utama"** (dan kalimat pembuka laporan) yang disusun otomatis dari angka periode.
- **Mode ringkasan eksekutif**: kotak centang di dialog Buat laporan; presentasi dan laporan lebih pendek (nama berkas berakhiran _Ringkas).
- **Dialog Buat laporan menampilkan cakupan**: berapa dokumen periode itu yang isinya sudah terambil, sebelum laporan dibuat.
- **Lampiran otomatis**: dokumen belum selesai tertua dan Jalur Merah yang belum selesai.
- **Ringkasan WhatsApp/surel**: bagian baru Nilai dan pungutan dan Tugas jatuh tempo hari ini, pilihan Biasa/Pagi/Sore, dan Ringkas untuk ponsel.
- **Excel lebih rapi**: lembar Daftar Isi (dengan tautan dan catatan sumber) di depan, lembar Perubahan Status, serta pengaturan bawaan Untuk atasan dan Untuk tim diperbarui.
- **Pengujian**: 66 pengujian otomatis (baru: model nilai, kalimat temuan, Daftar Isi dan Perubahan Status, ringkasan, dan jumlah slide presentasi).
- **Batasan**: presentasi tidak dapat langsung dijadikan PDF oleh ekstensi; gunakan Simpan sebagai PDF di PowerPoint.

#### 1.15.2 · 29 September 2026

**Tema:** Pengambilan isi dokumen lebih hemat.

- **Isi dokumen tidak lagi diambil ulang setiap 6 jam.** Sebelumnya dokumen yang belum berstatus final dianggap kedaluwarsa setelah 6 jam, sehingga pengambilan ulang untuk ribuan dokumen terasa selalu panjang. Kini isi dokumen (barang, nilai, pungutan, dokumen pelengkap) dianggap segar sampai **statusnya berubah** atau Anda memilih **Ambil ulang**. Setelah pengambilan pertama selesai, klik **Ambil yang belum** hanya memuat dokumen baru dan dokumen yang statusnya berubah.
- **Kalimat "Isi {n} dari {m} dokumen" bergerak selama pengambilan berjalan** (diperbarui tiap 10 dokumen), sehingga kemajuan terlihat tanpa menunggu proses selesai.
- **Tetap aman dihentikan kapan saja**: setiap dokumen disimpan segera setelah selesai, dan pengambilan berikutnya melewati yang sudah ada.
- **Dokumentasi**: FAQ dan Panduan menjelaskan kapan isi dokumen diambil ulang; video baru "Yang baru di v1.15" dan teks posting LinkedIn diperbarui.

#### 1.15.1 · 29 September 2026

**Tema:** Ketahanan pembaruan saat portal berpindah halaman.

- **Perbaikan: pembaruan gagal dengan pesan "Frame with ID 0 was removed."** Pesan ini muncul bila halaman portal berpindah atau dimuat ulang saat pembaruan berjalan (mis. portal memperbarui sesi). Sebelumnya pembaruan langsung berhenti. Kini ekstensi menunggu, mencari ulang tab portal, dan mengulang hingga empat kali untuk penarikan data, pengambilan isi dokumen (Unduh Excel), dan riwayat portal.
- **Pesan yang jelas** bila tetap gagal: "Halaman portal sedang dimuat ulang. Tunggu hingga portal selesai dimuat, lalu coba lagi." atau, bila tab portal ditutup, "Halaman portal ditutup saat proses berjalan. Buka portal CEISA dan masuk, lalu coba lagi."
- **Pengujian**: 62 pengujian otomatis (baru: pengulangan saat frame dihapus, tab berpindah, dan tab ditutup). Penjalan uji kini menunggu pengujian async, sehingga kegagalannya tidak lagi terlewat; satu uji ekspor yang datanya kurang lengkap ikut dibetulkan.

#### 1.15.0 · 29 September 2026

**Tema:** Filter khusus kartu Isi dokumen.

- **Filter khusus kartu Isi dokumen.** Di atas kartu ada baris filter sendiri: jenis dokumen (boleh pilih beberapa, dengan jumlah yang sudah terambil per jenis), jalur, dan pungutan (semua, ada pungutan atau fasilitas, ada pungutan dibayar, ada fasilitas), serta tombol Atur ulang. Filter ini hanya berlaku untuk kartu dan ekspornya; dasar datanya tetap periode dan filter dasbor.
- **Tabel Per jenis dokumen.** Satu baris per jenis: isi yang sudah diambil dibanding jumlah dokumen, nilai pabean, BM, PPN, PPh, total dibayar, fasilitas, dan porsi fasilitas, dengan baris jumlah. Klik satu baris untuk menyaring rincian ke jenis itu.
- **Empat tampilan ringkasan**: Per pungutan, Per jenis dokumen, Per fasilitas, dan Per bulan (menggantikan dua tombol sebelumnya). Angka kartu, tabel, dan rincian mengikuti filter kartu.
- **Rincian per dokumen**: pilihan **Kelompokkan per jenis** (judul kelompok dengan jumlah dokumen dan subtotal), penghitung "Menampilkan {a} dari {b} dokumen", dan tombol **Tampilkan semua**. Jarak antara judul dan kotak pencarian dirapikan.
- **Ekspor mengikuti kartu**: tombol Excel membuka dialog dengan jenis dan jalur yang sedang dipilih di kartu. Berkas Excel memuat lembar baru **Ringkasan per Jenis** (satu baris per jenis dengan jumlah, nilai, pungutan, fasilitas, dan porsi), di samping Cakupan, Nilai & Pungutan, dan Nilai per Dokumen.
- **Pengujian**: 61 pengujian otomatis (uji ekspor diperluas untuk lembar Ringkasan per Jenis).
- **Dokumentasi**: README, Panduan, FAQ, halaman utama, dan gambar diperbarui.

### Fase 4. Perampingan dan nilai pungutan

*Versi 1.10.0 sampai 1.14.0.* Menu disederhanakan menjadi satu pintu laporan; isi dokumen, nilai, dan pungutan menjadi inti analisis.

#### 1.14.0 · 29 September 2026

**Tema:** Ekspor nilai dan pungutan dengan cakupan sendiri.

- **Ekspor nilai dan pungutan dengan cakupan sendiri.** Tombol Excel di kartu Isi dokumen kini membuka dialog: pilih rentang tanggal daftar dan jenis dokumen (hanya jenis yang ada di data, lengkap dengan jumlah dan yang sudah terambil). Awalnya mengikuti filter dasbor, dengan tombol cepat Bulan ini, 90 hari, Tahun ini, dan Sesuai filter dasbor. Filter jalur, perusahaan, dan kantor yang aktif ikut diterapkan.
- **Ringkasan kelengkapan sebelum unduh**: dialog menampilkan jumlah dokumen dalam cakupan, yang isinya sudah diambil, dan yang belum. Bila ada yang belum, tersedia **Ambil yang belum lalu ekspor** (mengambil sisanya, lalu langsung mengunduh) atau **Unduh yang sudah ada**.
- **Nama berkas memuat cakupan**: `CEISA_Nilai_Pungutan_{perusahaan}_{dari}_sd_{sampai}_{jenis}_{jam}.xlsx`, misalnya `..._2026-08-01_sd_2026-08-31_Pengeluaran-ke-LDP_1457.xlsx`. Jam ditambahkan agar unduhan berulang tidak menjadi "(1)".
- **Lembar Cakupan** di awal berkas: perusahaan, periode, jenis dokumen, filter yang ikut, waktu ekspor, dan jumlah dokumen (dalam cakupan, sudah diambil, belum diambil, disorot bila ada yang belum).
- **Pisahkan per jenis dokumen** (pilihan): satu lembar Nilai untuk setiap jenis dokumen, di samping lembar Nilai per Dokumen gabungan.
- **Kolom fasilitas dipecah**: Dibebaskan, Ditangguhkan, Tidak dipungut, Ditanggung pemerintah, Fasilitas lain, dan Total fasilitas. Baris total memakai fungsi tabel Excel sehingga ikut berubah saat Anda menyaring di Excel.
- **Pengujian**: 61 pengujian otomatis (baru: lembar Cakupan, kolom fasilitas, lembar per jenis).
- **Dokumentasi**: README, Panduan, FAQ, halaman utama, dan gambar diperbarui.

#### 1.13.0 · 29 September 2026

**Tema:** Riwayat status per dokumen dari portal.

- **Popup BERUBAH menampilkan Riwayat Status dan Riwayat Respon dari portal**, sama seperti tab di portal: setiap status dengan jam persis (mis. Perekaman Dokumen, Validasi, Siap Jalur, Penjaluran, Gate In TPB/KEK, Pembongkaran, Selesai Proses), terbaru di atas, lalu daftar respons (mis. SPPB, SPPD) dengan jamnya. Status yang muncul sejak pengecekan terakhir ditandai **baru**.
- **Waktu perubahan menjadi tepat**: bila riwayat portal tersedia, baris Sesudah menulis "terjadi {jam} (jam portal)" dan perkiraan rentang waktu tidak ditampilkan lagi.
- **Diambil hanya saat dibutuhkan**: riwayat satu dokumen (dua permintaan baca-saja) diambil ketika popup dibuka, disimpan per akun di komputer Anda, dan dipakai ulang. Riwayat dokumen berjalan diperbarui bila statusnya berubah atau lebih dari 30 menit; dokumen final tidak diambil ulang. Pembaruan otomatis dan tarikan data tidak menambah permintaan.
- **Berbeda dari fitur riwayat sebelum 1.12.0**: tidak ada lagi pengambilan massal, pengaturan alamat, atau lembar Excel riwayat. Hanya satu dokumen yang sedang Anda lihat.
- **Aman untuk privasi**: nama petugas, nama pengguna, dan nomor identitas pada riwayat tidak diambil dan tidak disimpan.
- **Pesan yang jelas** bila portal belum dibuka, sesi berakhir, atau riwayat tidak tersedia; popup tetap menampilkan rekaman ekstensi sebagai cadangan.
- **Perbaikan penanda selisih**: catatan "total pungutan portal berbeda dari jumlah tarif per barang" tidak lagi muncul bila lembar PUNGUTAN dokumen kosong. Data contoh BC 2.5 kini memuat pungutan.
- **Pengujian**: 60 pengujian otomatis (tiga baru: urutan dan pembersihan riwayat, bentuk resmi dataStatus/dataRespon, alamat layanan). Mode demo menampilkan riwayat contoh.
- **Dokumentasi**: README, Panduan, FAQ, Alur Kerja, Kebijakan Privasi, dan gambar popup diperbarui.

#### 1.12.1 · 29 September 2026

**Tema:** Perbaikan pungutan dan Excel nilai.

- **Pemeriksaan Dokumen dibedakan dari Jalur Merah.** Dokumen berstatus Pemeriksaan Dokumen dengan jalur bukan merah kini bertanda garis kuning dan label VERIFIKASI (dokumen perlu disampaikan dan diverifikasi ke kantor Bea Cukai), bukan garis merah. Kartu Hari ini memisahkannya menjadi satu baris tersendiri.
- **Kartu Waktu proses diganti Komposisi status per jenis dokumen**: satu batang per jenis dokumen berisi porsi tiap status (tombol Persentase atau Jumlah); klik segmen untuk menyaring rincian.
- **Tombol Excel di kartu Isi dokumen**: mengunduh lembar Nilai & Pungutan (ringkasan, total per jenis pungutan, rekap bulanan) dan Nilai per Dokumen untuk periode yang tampil.
- **Perbaikan nilai pungutan BC 2.5 dan sejenisnya**: BM, PPN, PPh, total dibayar, dan fasilitas kini dibaca dari lembar PUNGUTAN portal (dibayar = kode fasilitas 1 dan 7; dibebaskan, ditangguhkan, DTP, dan tidak dipungut = fasilitas). Sebelumnya dibaca dari kolom tarif per barang yang di BC 2.5 bernilai 0. Isi yang sudah diambil langsung terhitung benar tanpa ambil ulang.
- **Waktu perubahan status lebih tepat dan lebih cepat**: pembaruan otomatis kini dapat setiap 5 atau 15 menit; bila respons portal mencatat jamnya, popup BERUBAH memakai jam itu sebagai waktu perubahan dan menampilkan kapan ekstensi melihatnya, bukan lagi rentang perkiraan.
- **Pengambilan isi dokumen bertahap**: kolom Isi (✓) dan filter Isi dokumen (Sudah/Belum diambil) di tabel rincian, tombol Ambil yang belum, jumlah terambil per jenis dan opsi Ambil ulang di dialog cakupan.
- **Kartu Nilai dan pungutan**: tabel Menurut fasilitas (dibayar, dibebaskan, ditangguhkan, dan seterusnya) serta penanda bila total pungutan portal berbeda dari jumlah tarif per barang.
- **Dialog Ambil isi dokumen lebih ringkas**: daftar jenis dokumen hanya memuat jenis yang ada di data pada rentang tanggal terpilih (dengan jumlahnya), tanpa kolom cari dan kode.

#### 1.12.0 · 29 September 2026

**Tema:** Ambil isi bercakupan, nilai dan pungutan.

- **Bahasa Indonesia sejak pembukaan pertama.** Bahasa tidak lagi mengikuti bahasa Chrome; English hanya tampil bila dipilih dari tombol ID/EN.
- **Ambil isi dokumen dengan cakupan.** Tombol membuka dialog: rentang tanggal daftar (Bulan ini, 90 hari, Tahun ini, atau sesuai filter dasbor), jenis dokumen yang dipilih dari daftar, serta ringkasan jumlah dokumen yang akan dibaca, yang dilewati karena sudah tersimpan, dan perkiraan waktu. Batas 300 dokumen per klik dihapus untuk jalur ini; pengambilan dapat dihentikan dan dilanjutkan.
- **Pilihan jenis dokumen dari tabel referensi resmi** (243 jenis) menggantikan kolom ketik kode di Pengaturan dan di dialog pengambilan. Jenis yang ada di data Anda tampil paling atas beserta jumlahnya; ada kolom cari.
- **Nilai dan pungutan**: total (nilai pabean, pungutan dibayar, pungutan berfasilitas, per jenis pungutan) dan tabel **rincian per dokumen** (nilai pabean, BM, PPN, PPh, total dibayar, fasilitas) yang dapat dicari dan diurutkan. Excel mendapat lembar Nilai per Dokumen.
- **Komposisi status** menggantikan bagan Dokumen masuk dan Dokumen selesai: donat dan daftar status dengan jumlah dan persentase; klik status untuk menyaring rincian.
- **Riwayat pada ikon BERUBAH**: lini masa dengan tanggal lengkap, selisih hari antarstatus, dan respons portal bila isi dokumen sudah diambil.
- **Dihapus agar lebih ringkas**: tab Pemeriksaan dan Pengeluaran sementara (beserta peringatan, lembar Excel, dan pengaturan batas hari), semua notifikasi Chrome dan ringkasan pagi (izin `notifications` dilepas dari manifest), serta bagian Notifikasi dan Tindak lanjut dan tim di Pengaturan. Catatan tindak lanjut di tabel dan penugasan WhatsApp tetap ada.

#### 1.11.0 · 29 September 2026

**Tema:** Kartu Hari ini dan perampingan.

- **Riwayat dari portal dihapus.** Jam pasti status dan respons dari portal jarang dipakai untuk keputusan, sementara memperbanyak permintaan ke portal. Yang dipertahankan: kode respons angka tetap diterjemahkan dengan tabel Referensi Respon resmi CEISA 4.0, dan kartu Waktu proses tetap menampilkan hari penyelesaian serta lama per status dari rekaman Anda sendiri. Lembar Excel Riwayat Portal dan Riwayat Rinci, tombol Ambil riwayat/rincian portal, dan pengaturan teknis riwayat ikut dihapus. Setelah Perbarui data, ekstensi tidak lagi mengambil riwayat otomatis.
- **Kartu Hari ini** di bagian atas dasbor: tugas terlambat atau jatuh tempo, Jalur Merah/pemeriksaan, baru melewati SLA, belum ada penanggung jawab, serta pengeluaran sementara melewati batas hari dan jaminan jatuh tempo ≤ 30 hari. Setiap baris membuka daftarnya.
- **Rekap bulanan** di kartu Isi dokumen (dan di lembar Nilai & Pungutan pada Excel): dokumen, nilai pabean, pungutan dibayar, pungutan berfasilitas, dan persentase fasilitas per bulan.
- **Peringatan pengeluaran sementara**: notifikasi harian bila sisa barang belum kembali melewati batas hari (bawaan 180, dapat diubah atau 0 = mati) atau jaminan jatuh tempo dalam 30 hari.
- **Tampilan**: font Plus Jakarta Sans dan JetBrains Mono disertakan di dalam paket (lisensi SIL OFL) sehingga tampilan sama di semua komputer; bilah filter menjadi dua baris dengan tombol **Filter lain** (Bandingkan dengan, perusahaan, kantor); tanggal seragam dd-mm-yyyy; satuan barang memakai nama (pcs, kg, m); kolom umur bersatuan hari; penanda bentuk (▲ ◆) selain warna.
- **Pengaturan dan Profil lebih ringkas**: bagian yang dapat dilipat (Data, Notifikasi, Tindak lanjut dan tim, SLA), teks penjelasan dipangkas menjadi satu baris, dan Profil hanya menampilkan isian utama dengan Status final serta Catatan kejadian yang dapat dilipat.
- **Perbaikan**: memilih **Tulis sendiri…** pada Tugas yang diminta kini mengosongkan kolom dan langsung siap diketik; mengetik di kolom tidak lagi tertahan pada templat terpilih.
- **Lebih ringkas**: menu Ekspor tinggal Buat laporan dan Bagikan ringkasan; tombol Ringkasan untuk tim di kartu Perubahan dihapus (fungsinya ada di menu); notifikasi diatur dengan satu pilihan (Lengkap, Ringkasan pagi saja, Nonaktif), rincian ada di Atur satu per satu.

#### 1.10.0 · 29 September 2026

**Tema:** Buat laporan terpadu.

- Lebih ringkas: menu Ekspor tinggal tiga pilihan. **Buat laporan** memilih periode sekali lalu membuat presentasi, laporan resmi, dan/atau Excel sekaligus (menggantikan Paket bulanan, Presentasi, dan Laporan resmi yang terpisah); **Excel sesuai filter dasbor**; dan **Ringkasan WhatsApp/surel**. CSV dan Cetak dasbor dihapus karena sudah tercakup Excel dan laporan resmi PDF.
- Kartu **Waktu proses** menggabungkan Waktu penyelesaian dan Rata-rata lama per status, ditambah **Waktu layanan (portal)**: median jam dari status pertama sampai respons pertama dan sampai penjaluran, per jenis dokumen, serta lama setiap perpindahan status dari riwayat portal. KPI Waktu penyelesaian ikut menampilkan waktu layanan portal.
- Setelah Perbarui data, riwayat portal dokumen yang berubah status diambil otomatis (maks 50) sehingga jam perubahan dan waktu layanan terisi tanpa klik tambahan.
- Kartu Perubahan mendapat tombol **Ringkasan untuk tim** (ringkasan sejak kemarin siap ditempel ke WhatsApp).
- Pengaturan lebih bersih: tombol teknis riwayat portal dipindah ke bagian Lanjutan; tombol mode demo cukup di layar sambutan dan kepala dasbor.

### Fase 3. Riwayat dan isi dokumen

*Versi 1.7.0 sampai 1.9.0.* Rincian perubahan status, riwayat dari portal, dan pembacaan isi lengkap dokumen.

#### 1.9.0 · 29 September 2026

**Tema:** Isi dokumen dari portal dan kartu arsip.

- Isi dokumen dari portal: CEISA Monitor membaca isi lengkap setiap nomor pengajuan dari layanan Unduh Excel portal (21 lembar), tanpa menyimpan berkas ke folder kecuali diminta. Berlaku untuk semua jenis dokumen.
- Kartu arsip: klik dua kali baris di tabel rincian untuk melihat dokumen pelengkap (invoice, packing list, B/L atau AWB, kontrak, COO, dan lainnya dengan nama resmi), barang, nilai dan logistik, pungutan, jaminan, pengeluaran sementara terkait, serta riwayat dari portal.
- Pencarian di tabel rincian kini juga mencari nomor invoice, B/L, kontrak, kontainer, jaminan, dan kode barang.
- Kartu Isi dokumen di dasbor: Pengeluaran sementara (barang keluar, sudah kembali, sisa, umur, jatuh tempo jaminan; pasangan seperti BC 2.6.1 dan 2.6.2 dicocokkan per seri barang), Nilai dan pungutan (nilai pabean, netto, kontainer, pungutan dibayar dan fasilitas), serta Pemeriksaan (dokumen pelengkap yang belum ada, tanggal janggal, invoice ganda, HS berbeda untuk kode barang yang sama, asal negara mitra FTA tanpa COO, jaminan mendekati jatuh tempo). Pola dokumen pelengkap wajib dipelajari dari data perusahaan sendiri, sehingga cocok untuk jenis perusahaan apa pun.
- Excel: lembar Dokumen Pelengkap, Barang, Pengeluaran Sementara, Nilai & Pungutan, dan Pemeriksaan; kolom Invoice dan B/L / AWB di lembar Rincian dan CSV.
- Satu tombol Ambil rincian portal mengambil riwayat dan isi dokumen sekaligus; klik lagi untuk berhenti.
- Tabel referensi resmi CEISA 4.0 ditambah: dokumen, negara, satuan, kemasan, fasilitas tarif, jenis pungutan, jaminan, cara angkut, valuta, dan kantor.
- Pilihan di Pengaturan: simpan juga berkas Excel asli portal ke folder Unduhan saat mengambil isi dokumen.

#### 1.8.2 · 29 September 2026

**Tema:** Riwayat portal langsung aktif.

- Riwayat dari portal langsung aktif: CEISA Monitor memakai alamat yang sama dengan tab Riwayat Status dan Riwayat Respon di portal, sehingga tidak perlu lagi Pelajari dari portal. Jam status memakai waktu mulai seperti tampilan portal, dan nama status serta respons sama persis dengan portal.
- Ambil riwayat banyak dokumen sekaligus: pilih dokumen di tabel lalu Ambil riwayat portal, atau Lengkapi riwayat dari portal di dialog Excel (maks 300 dokumen per klik, berurutan agar tidak membebani portal).
- Excel: lembar baru Riwayat Portal (mulai, penjaluran, respons pertama dan terakhir, waktu layanan dalam jam, serta median lama setiap perpindahan status) dan Riwayat Rinci (setiap status dan respons dengan jamnya).
- Perbaikan Excel: tanggal tidak lagi bergeser satu hari lebih awal pada zona waktu WIB/WITA/WIT.

#### 1.8.1 · 29 September 2026

**Tema:** Kemajuan pembaruan di latar belakang.

- Pembaruan yang berjalan di latar belakang (misalnya otomatis saat masuk portal) kini terlihat di dasbor: bilah kemajuan, halaman ke berapa dari total, jumlah dokumen, dan perkiraan sisa waktu. Data tampil sendiri setelah selesai.
- Mengklik Perbarui data saat pembaruan lain berjalan tidak lagi menampilkan pesan galat merah, tetapi menampilkan kemajuan pembaruan yang sedang berjalan.
- Kunci pembaruan memakai detak per halaman: penarikan semua data yang lama tidak lagi dianggap macet setelah 5 menit, sehingga tidak terjadi dua penarikan bersamaan. Kunci tanpa detak lebih dari 3 menit dianggap berhenti.
- Pelajari dari portal: hasilnya tampil langsung di bawah tombol dan pesan tidak lagi tertutup jendela Pengaturan. Alamat riwayat kini dapat dipelajari walaupun data belum ditarik.

#### 1.8.0 · 29 September 2026

**Tema:** Riwayat portal dan referensi respons.

- Riwayat dari portal: jam pasti setiap status (termasuk Validasi, Siap Jalur, Penjaluran) dan semua respons dokumen diambil langsung dari portal dengan satu klik, dari kartu rincian perubahan, kolom Respons, atau dialog tindak lanjut. Tidak perlu lagi mencari nomor pendaftaran, membuka dokumen, dan tab Riwayat Respon secara manual.
- Respons "tanpa nama" atau berupa angka di tabel rincian dapat diklik dan diganti dengan nama respons terbaru dari riwayat respons portal.
- Alamat layanan riwayat dipelajari dari portal (Pengaturan → Riwayat dari portal), sehingga tidak memerlukan alat pengembang (F12). Nama petugas dan pengguna tidak diambil.
- Kode respons angka (mis. 2305) langsung diterjemahkan menjadi nama resminya sesuai jenis dokumen (mis. SPPD untuk BC 2.3) memakai tabel Referensi Respon dan Referensi Status CEISA 4.0 dari portal pengembang Bea Cukai (openapi.beacukai.go.id/portal). Berlaku di tabel rincian, grafik respons, ekspor Excel/CSV (kolom Kode Respons baru), dan riwayat dari portal. Kode yang tidak tercantum di tabel resmi (misalnya BC 4.0 dan BC 4.1) tidak ditebak.
- Tombol Salin info teknis berisi alamat layanan dan nama kolom saja, tanpa data dokumen, untuk keperluan dukungan.

#### 1.7.1 · 29 September 2026

**Tema:** Perbaikan mode demo.

- Mode demo: riwayat status contoh tidak lagi memuat tanggal di masa depan.
- Tombol "Tampilkan ringkasan pagi sekarang" pada mode demo langsung membuka ringkasan pagi di dasbor.

#### 1.7.0 · 29 September 2026

**Tema:** Rincian perubahan status.

- Rincian perubahan status: arahkan kursor atau klik tanda BERUBAH di tabel rincian untuk melihat status sebelum dan sesudah, kapan status lama terakhir terlihat dan status baru pertama terlihat, rentang waktu perubahan, respons dan waktu respons dari portal, serta riwayat status dokumen. Waktu yang diperkirakan diberi label "perkiraan".
- Tanda SLA menampilkan tanggal daftar, batas SLA, tanggal batas terlewati, dan umur dokumen.
- Dialog tindak lanjut menampilkan Riwayat status dokumen di samping Riwayat tindak lanjut.

### Fase 2. Periode, bahasa, dan tindak lanjut tim

*Versi 1.4.0 sampai 1.6.3.* Periode fleksibel, dua bahasa, tema, penugasan lewat WhatsApp, dan pengingat.

#### 1.6.3 · 29 September 2026

**Tema:** Tarik semua data.

- Tarik semua data: tanggal awal penarikan kini bawaan kosong, artinya semua dokumen yang tersedia di portal CEISA 4.0 (termasuk tahun lalu dan sebelumnya). Pengaturan lama "1 Januari" otomatis diubah menjadi semua data satu kali.
- Tombol Semua data di Pengaturan, serta pilihan Tarik semua data pada pita periode.
- Batas penarikan dinaikkan (hingga 1 juta baris). Bila portal menolak halaman lanjutan, penarikan otomatis dilanjutkan per kode dokumen agar dokumen lama tetap tertarik; kode yang masih terpotong ditampilkan di dasbor.

#### 1.6.2 · 28 September 2026

**Tema:** Halaman kosong yang menuntun.

- Halaman "Belum ada data" memakai empat langkah yang sama dengan panduan sambutan (masuk portal, buka Daftar Dokumen, Perbarui data, Profil perusahaan) dan menyediakan tautan Lihat panduan.

#### 1.6.1 · 28 September 2026

**Tema:** Perbaikan gulir tabel.

- Perbaikan: saat dasbor menggulir otomatis ke tabel rincian (misalnya setelah mengklik kartu atau tombol Tampilkan yang perlu ditindaklanjuti), bagian atas tabel dan bilah pilihan massal tidak lagi tertutup bilah filter yang menempel.

#### 1.6.0 · 28 September 2026

**Tema:** Pengingat, peringatan, dan berbagi tugas tim.

- Ringkasan pagi: notifikasi harian (jam dapat diatur, bawaan 08.00) berisi dokumen selesai, baru melewati SLA, prioritas baru, dan tugas jatuh tempo. Tombol notifikasi membuka ringkasan siap tempel ke grup WhatsApp atau langsung ke daftar tugas jatuh tempo. Bila komputer mati pada jamnya, notifikasi muncul saat Chrome dibuka kembali pada hari itu.
- Pengingat tugas: tugas yang terlambat, jatuh tempo hari ini, dan besok; filter rincian "Jatuh tempo" dan cakupan yang sama di dialog Kirim tugas via WhatsApp.
- Peringatan prioritas: notifikasi saat dokumen baru terkena Jalur Merah, status pemeriksaan (dokumen, barang, fisik), atau respons SPJM/SPJK/SPPF. Baris prioritas ditandai garis merah dan dapat disaring melalui Perubahan → Prioritas.
- Riwayat tindak lanjut per dokumen: setiap perubahan penanggung jawab, status, target, tugas, catatan, dan pengiriman WhatsApp tercatat dengan waktunya (40 entri terakhir).
- Templat tugas sendiri di Pengaturan, dengan format "status; status | teks tugas" atau teks umum.
- Ekspor dan impor tindak lanjut (.json) beserta nomor WhatsApp dan templat, untuk berbagi antarkomputer tim tanpa server. Saat impor, isian yang lebih baru dipertahankan dan riwayat digabung.

#### 1.5.0 · 28 September 2026

**Tema:** Penugasan lewat WhatsApp.

- Penugasan tindak lanjut melalui WhatsApp. Dialog tindak lanjut kini memiliki kolom Tugas yang diminta (templat otomatis sesuai status dan jalur dokumen, dapat diubah) dan Nomor WhatsApp penanggung jawab (disimpan lokal per nama).
- Tombol Simpan & salin pesan dan Simpan & buka WhatsApp menyusun pesan tugas berformat WhatsApp: nomor pengajuan, jenis, status, umur/SLA, jalur, tugas, target, dan catatan.
- Kartu Tindak lanjut: tombol Kirim tugas via WhatsApp membuka daftar penanggung jawab dengan pratinjau pesan per orang, pilihan cakupan (semua, melewati target, belum pernah dikirim), serta Salin pesan atau Buka WhatsApp.
- Dokumen yang tugasnya sudah dikirim ditandai "✓ WA" pada tabel rincian. Tugas juga ikut di kolom catatan Excel.
- Ekstensi tidak mengirim pesan sendiri; WhatsApp hanya dibuka saat pengguna mengklik.

#### 1.4.2 · 28 September 2026

**Tema:** Tema tampilan.

- Pilihan tema tampilan di kepala dasbor: Auto (mengikuti sistem), Terang, atau Gelap.
- Tema gelap diperbaiki: pilihan pada daftar tarik-turun kini terbaca, bilah filter tidak lagi tembus pandang saat menggulir, dan warna status yang terlalu gelap (misalnya Gate In TPS) dicerahkan agar kontras.
- Rincian status pada grafik Tingkat penyelesaian kini menampilkan setiap status secara lengkap, tanpa kelompok "Lainnya", dengan warna yang tidak berulang.
- Panduan sambutan menjadi empat langkah: masuk portal, buka halaman Daftar Dokumen (portal.beacukai.go.id/dokumen-pabean/), klik Perbarui data, lalu atur Profil perusahaan.

#### 1.4.1 · 28 September 2026

**Tema:** Tautan dukungan sukarela.

- Tautan dukungan sukarela ke halaman Saweria (saweria.co/triastore) di kaki dasbor, Pengaturan, dan popup. Dibuka sebagai tab biasa; tanpa pelacakan, tanpa izin tambahan, dan seluruh fitur tetap gratis.

#### 1.4.0 · 28 September 2026

**Tema:** Periode fleksibel dan dua bahasa.

- Dua bahasa antarmuka: Indonesia dan English, dipilih dari tombol ID/EN di kepala dasbor (bawaan mengikuti bahasa Chrome). Berlaku untuk dasbor, popup, notifikasi, dan format angka/tanggal. Presentasi, laporan resmi, Excel, dan ringkasan WhatsApp tetap berbahasa Indonesia.
- Periode fleksibel: 7/30/90 hari terakhir, bulan ini, bulan lalu, kuartal ini, tahun ini, tahun lalu, 12 bulan terakhir, semua data, atau rentang tanggal khusus per hari. Grafik otomatis per hari (≤ 45 hari), per minggu (≤ 200 hari), atau per bulan.
- Periode di luar data yang sudah ditarik (misalnya tahun lalu): dasbor menawarkan "Tarik data sejak …" dan memperluas penarikan.
- Pembanding angka utama: 7 hari lalu, 30 hari lalu, periode sebelumnya, atau periode sama tahun lalu. Setiap kartu menampilkan selisih, arah (membaik/memburuk), dan sparkline berlabel tanggal dan nilai; Sesuai SLA ditampilkan sebagai bilah terhadap garis target.
- Rekonstruksi riwayat: posisi dokumen pada tanggal mana pun dihitung ulang dari tanggal daftar dan tanggal respons, sehingga tren tidak bergantung pada komputer yang menyala setiap hari.
- Grafik baru "Aliran dokumen": posisi belum selesai di akhir setiap hari/minggu/bulan, serta dokumen masuk dan selesai, dengan kalimat kesimpulan.
- Grafik "Tingkat penyelesaian menurut tanggal daftar" menggantikan grafik 12 warna: bawaan dua warna (selesai dan belum selesai) dengan persentase di atas batang; rincian status (5 teratas + lainnya) tersedia melalui tombol.
- Kartu Perubahan dengan pilihan pembanding: sejak kemarin, sejak Senin, 7 hari terakhir, sejak terakhir saya buka, atau sejak pembaruan sebelumnya. Tanggal pembanding dan jeda tanpa pembaruan ditampilkan apa adanya. Rekaman status harian disimpan 62 hari; bila rekaman tidak ada, pembanding diperkirakan dari tanggal dokumen.
- Kartu Respons terakhir dihapus (informasi respons tetap ada di tabel rincian). Penggantinya kartu Tindak lanjut: perlu tindak lanjut (melewati SLA dan belum dicatat), sedang berjalan, melewati target, selesai dicek, cakupan tindak lanjut, dan daftar penanggung jawab. Filter rincian baru "Perlu tindak lanjut".
- Kartu "Tren dokumen belum selesai" digabung ke grafik Aliran dokumen.
- Keluar dari mode demo lebih mudah: tombol "Mode demo aktif · Keluar" di kepala dasbor, di popup, dan di Pengaturan.
- Susulan otomatis: saat Chrome dibuka atau komputer aktif kembali, ekstensi memeriksa umur data dan langsung memperbarui bila tab portal sudah masuk (login).
- Ringkasan WhatsApp: bagian perubahan memuat tanggal pembanding, dokumen yang menjadi selesai, dan dokumen baru.
- Pengujian bertambah menjadi 39 (periode, rekonstruksi, aliran, pembanding perubahan, dan bahasa).

### Fase 1. Fondasi dan rilis Chrome Web Store

*Versi 1.0.0 sampai 1.3.0.* Dasbor, ekspor, profil perusahaan, dan rilis publik pertama.

#### 1.3.0 · 28 September 2026 (rilis Chrome Web Store pertama)

**Tema:** Rilis Chrome Web Store pertama.

- Nama dan deskripsi dua bahasa (Indonesia dan Inggris) melalui `_locales`, dengan penanda "Tidak Resmi".
- Izin `tabs` dihapus; pencarian tab portal cukup memakai izin host.
- Jenis fasilitas kini dipilih sendiri oleh pengguna (tanpa tebakan otomatis), dengan keterangan templat SLA di bawah pilihan.
- Jalur ditampilkan dengan nama lengkap (Jalur Hijau, Jalur Merah) dan titik warna di filter, tabel, dan Excel.
- Kartu "Jalur & respons" dipisah menjadi "Penjaluran dokumen" (termasuk Jalur Merah per jenis dokumen) dan "Respons terakhir"; keduanya dapat diklik untuk menyaring.
- Respons dibedakan: "Belum ada respons" dan "Ada respons, nama tidak tersedia" (dokumen selesai yang tanggal responsnya ada tetapi portal tidak menyertakan nama responsnya, misalnya BC 4.1).
- Tombol "salin" diganti: klik nomor pengajuan untuk menyalinnya, dengan tanda centang sesaat.
- Perbaikan tampilan kolom tanggal di tabel rincian.
- Ekspor Excel baru (ExcelJS): 8 lembar berformat dengan kartu angka, tabel berfilter, baris judul terkunci, tanggal dan persen asli, pewarnaan otomatis, pengaturan cetak, dan lembar Definisi. Nama berkas memuat nama perusahaan dan periode.
- Ringkasan WhatsApp/surel baru dengan dialog pratinjau: pilih format (WhatsApp atau surel) dan bagian yang disertakan (angka utama, per jenis dokumen, perlu perhatian, lima dokumen tertua, tindak lanjut, perubahan). Pilihan diingat.
- Dialog Ekspor Excel: pilih lembar yang disertakan (preset Lengkap, Untuk atasan, Untuk tim) dan opsi satu lembar per penanggung jawab.
- Paket laporan bulanan: presentasi, Excel, dan laporan resmi dibuat sekaligus untuk periode dan perusahaan yang sama, tanpa mengubah filter dasbor.
- Presentasi dan laporan resmi: slide dan bagian baru "Penjaluran dokumen" (Jalur Merah per jenis dan per bulan, serta perbandingan waktu penyelesaian Jalur Hijau dan Jalur Merah).
- Cetak dasbor: kepala halaman berisi perusahaan, periode, filter, dan tanggal cetak; tombol dan pewarnaan disesuaikan untuk kertas.
- Penyuntingan bahasa: istilah seragam (melewati SLA, melewati target, nomor pengajuan, lebih dari 30 hari, masuk/login), perbandingan formal (dibandingkan dengan), dan penutup memo resmi.
- Popup disederhanakan: tanpa tombol Perbarui data; menampilkan kesegaran data (berwarna), status sesi, hasil pembaruan terakhir, dan tombol "Buka dasbor dan perbarui data" bila data sudah lama.
- Pembaruan otomatis saat masuk ke portal: bila data lebih lama dari batas yang diatur (bawaan 6 jam), data diperbarui otomatis begitu sesi portal aktif, termasuk setelah komputer dinyalakan kembali atau setelah sesi berakhir lalu masuk ulang.
- Penanda data lama: lencana ikon berubah abu-abu, spanduk di dasbor, dan catatan hasil pembaruan terakhir (berhasil/gagal beserta alasannya). Notifikasi kegagalan hanya dikirim sekali sampai pembaruan berikutnya berhasil.
- Kunci pembaruan agar dasbor dan pembaruan otomatis tidak menarik data bersamaan.
- Perbaikan: pesan "Gagal memperbarui" di popup ketika dasbor sedang terbuka.
- Izin unlimitedStorage agar data banyak akun dan periode panjang tidak terkena batas penyimpanan 10 MB.
- Halaman sambutan saat pertama dipasang: tiga langkah mulai, catatan privasi, dan tombol mode demo.
- Logo baru: monogram "C" dengan garis denyut (pemantauan), gradasi biru tua ke hijau toska, versi khusus untuk 16 px, serta berkas SVG sumber. Tombol pintas di portal memakai warna yang sama.
- Baris filter tidak lagi menempel di layar laptop agar ruang tampilan lebih luas.
- Keterangan "tidak resmi, tidak berafiliasi dengan DJBC" di kaki dasbor.
- Skrip `npm run build`: pengujian, pemeriksaan rilis (berkas, CSP, URL luar, eval, kata terlarang), lalu zip siap unggah.

#### 1.2.0 · tanggal tidak tercatat

**Tema:** Profil perusahaan dan laporan resmi.

- Profil perusahaan: fasilitas otomatis, status final, templat SLA, logo, warna, target, catatan kejadian, ekspor-impor profil.
- Data terpisah per akun/NPWP; filter perusahaan (akun ini dan mitra) serta kantor.
- Laporan resmi A4 (cetak, PDF, .doc) dan memo per penanggung jawab.
- Presentasi dengan judul kesimpulan, agenda, target, dan slide "Keputusan yang dimohon".
- Pengaturan SLA dengan pratinjau jumlah dokumen yang melewati SLA.
- Pemeriksaan struktur data portal dan validasi jumlah baris.

#### 1.1.0 · tanggal tidak tercatat

**Tema:** Tindak lanjut dan deteksi perubahan.

- Tindak lanjut per dokumen, deteksi perubahan, SLA per jenis dokumen dan status, pembaruan otomatis, notifikasi, mode demo.

#### 1.0.0 · tanggal tidak tercatat

**Tema:** Versi awal.

- Dasbor status dokumen, ekspor Excel dan presentasi.
