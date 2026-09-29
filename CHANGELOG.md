# Catatan Perubahan

## 1.12.0 (29 September 2026)

- **Bahasa Indonesia sejak pembukaan pertama.** Bahasa tidak lagi mengikuti bahasa Chrome; English hanya tampil bila dipilih dari tombol ID/EN.
- **Ambil isi dokumen dengan cakupan.** Tombol membuka dialog: rentang tanggal daftar (Bulan ini, 90 hari, Tahun ini, atau sesuai filter dasbor), jenis dokumen yang dipilih dari daftar, serta ringkasan jumlah dokumen yang akan dibaca, yang dilewati karena sudah tersimpan, dan perkiraan waktu. Batas 300 dokumen per klik dihapus untuk jalur ini; pengambilan dapat dihentikan dan dilanjutkan.
- **Pilihan jenis dokumen dari tabel referensi resmi** (243 jenis) menggantikan kolom ketik kode di Pengaturan dan di dialog pengambilan. Jenis yang ada di data Anda tampil paling atas beserta jumlahnya; ada kolom cari.
- **Nilai dan pungutan**: total (nilai pabean, pungutan dibayar, pungutan berfasilitas, per jenis pungutan) dan tabel **rincian per dokumen** (nilai pabean, BM, PPN, PPh, total dibayar, fasilitas) yang dapat dicari dan diurutkan. Excel mendapat lembar Nilai per Dokumen.
- **Komposisi status** menggantikan bagan Dokumen masuk dan Dokumen selesai: donat dan daftar status dengan jumlah dan persentase; klik status untuk menyaring rincian.
- **Riwayat pada ikon BERUBAH**: lini masa dengan tanggal lengkap, selisih hari antarstatus, dan respons portal bila isi dokumen sudah diambil.
- **Dihapus agar lebih ringkas**: tab Pemeriksaan dan Pengeluaran sementara (beserta peringatan, lembar Excel, dan pengaturan batas hari), semua notifikasi Chrome dan ringkasan pagi (izin `notifications` dilepas dari manifest), serta bagian Notifikasi dan Tindak lanjut dan tim di Pengaturan. Catatan tindak lanjut di tabel dan penugasan WhatsApp tetap ada.

## 1.11.0 (29 September 2026)

- **Riwayat dari portal dihapus.** Jam pasti status dan respons dari portal jarang dipakai untuk keputusan, sementara memperbanyak permintaan ke portal. Yang dipertahankan: kode respons angka tetap diterjemahkan dengan tabel Referensi Respon resmi CEISA 4.0, dan kartu Waktu proses tetap menampilkan hari penyelesaian serta lama per status dari rekaman Anda sendiri. Lembar Excel Riwayat Portal dan Riwayat Rinci, tombol Ambil riwayat/rincian portal, dan pengaturan teknis riwayat ikut dihapus. Setelah Perbarui data, ekstensi tidak lagi mengambil riwayat otomatis.
- **Kartu Hari ini** di bagian atas dasbor: tugas terlambat atau jatuh tempo, Jalur Merah/pemeriksaan, baru melewati SLA, belum ada penanggung jawab, serta pengeluaran sementara melewati batas hari dan jaminan jatuh tempo ≤ 30 hari. Setiap baris membuka daftarnya.
- **Rekap bulanan** di kartu Isi dokumen (dan di lembar Nilai & Pungutan pada Excel): dokumen, nilai pabean, pungutan dibayar, pungutan berfasilitas, dan persentase fasilitas per bulan.
- **Peringatan pengeluaran sementara**: notifikasi harian bila sisa barang belum kembali melewati batas hari (bawaan 180, dapat diubah atau 0 = mati) atau jaminan jatuh tempo dalam 30 hari.
- **Tampilan**: font Plus Jakarta Sans dan JetBrains Mono disertakan di dalam paket (lisensi SIL OFL) sehingga tampilan sama di semua komputer; bilah filter menjadi dua baris dengan tombol **Filter lain** (Bandingkan dengan, perusahaan, kantor); tanggal seragam dd-mm-yyyy; satuan barang memakai nama (pcs, kg, m); kolom umur bersatuan hari; penanda bentuk (▲ ◆) selain warna.
- **Pengaturan dan Profil lebih ringkas**: bagian yang dapat dilipat (Data, Notifikasi, Tindak lanjut dan tim, SLA), teks penjelasan dipangkas menjadi satu baris, dan Profil hanya menampilkan isian utama dengan Status final serta Catatan kejadian yang dapat dilipat.
- **Perbaikan**: memilih **Tulis sendiri…** pada Tugas yang diminta kini mengosongkan kolom dan langsung siap diketik; mengetik di kolom tidak lagi tertahan pada templat terpilih.
- **Lebih ringkas**: menu Ekspor tinggal Buat laporan dan Bagikan ringkasan; tombol Ringkasan untuk tim di kartu Perubahan dihapus (fungsinya ada di menu); notifikasi diatur dengan satu pilihan (Lengkap, Ringkasan pagi saja, Nonaktif), rincian ada di Atur satu per satu.

## 1.10.0 (29 September 2026)

- Lebih ringkas: menu Ekspor tinggal tiga pilihan. **Buat laporan** memilih periode sekali lalu membuat presentasi, laporan resmi, dan/atau Excel sekaligus (menggantikan Paket bulanan, Presentasi, dan Laporan resmi yang terpisah); **Excel sesuai filter dasbor**; dan **Ringkasan WhatsApp/surel**. CSV dan Cetak dasbor dihapus karena sudah tercakup Excel dan laporan resmi PDF.
- Kartu **Waktu proses** menggabungkan Waktu penyelesaian dan Rata-rata lama per status, ditambah **Waktu layanan (portal)**: median jam dari status pertama sampai respons pertama dan sampai penjaluran, per jenis dokumen, serta lama setiap perpindahan status dari riwayat portal. KPI Waktu penyelesaian ikut menampilkan waktu layanan portal.
- Setelah Perbarui data, riwayat portal dokumen yang berubah status diambil otomatis (maks 50) sehingga jam perubahan dan waktu layanan terisi tanpa klik tambahan.
- Kartu Perubahan mendapat tombol **Ringkasan untuk tim** (ringkasan sejak kemarin siap ditempel ke WhatsApp).
- Pengaturan lebih bersih: tombol teknis riwayat portal dipindah ke bagian Lanjutan; tombol mode demo cukup di layar sambutan dan kepala dasbor.

## 1.9.0 (29 September 2026)

- Isi dokumen dari portal: CEISA Monitor membaca isi lengkap setiap nomor pengajuan dari layanan Unduh Excel portal (21 lembar), tanpa menyimpan berkas ke folder kecuali diminta. Berlaku untuk semua jenis dokumen.
- Kartu arsip: klik dua kali baris di tabel rincian untuk melihat dokumen pelengkap (invoice, packing list, B/L atau AWB, kontrak, COO, dan lainnya dengan nama resmi), barang, nilai dan logistik, pungutan, jaminan, pengeluaran sementara terkait, serta riwayat dari portal.
- Pencarian di tabel rincian kini juga mencari nomor invoice, B/L, kontrak, kontainer, jaminan, dan kode barang.
- Kartu Isi dokumen di dasbor: Pengeluaran sementara (barang keluar, sudah kembali, sisa, umur, jatuh tempo jaminan; pasangan seperti BC 2.6.1 dan 2.6.2 dicocokkan per seri barang), Nilai dan pungutan (nilai pabean, netto, kontainer, pungutan dibayar dan fasilitas), serta Pemeriksaan (dokumen pelengkap yang belum ada, tanggal janggal, invoice ganda, HS berbeda untuk kode barang yang sama, asal negara mitra FTA tanpa COO, jaminan mendekati jatuh tempo). Pola dokumen pelengkap wajib dipelajari dari data perusahaan sendiri, sehingga cocok untuk jenis perusahaan apa pun.
- Excel: lembar Dokumen Pelengkap, Barang, Pengeluaran Sementara, Nilai & Pungutan, dan Pemeriksaan; kolom Invoice dan B/L / AWB di lembar Rincian dan CSV.
- Satu tombol Ambil rincian portal mengambil riwayat dan isi dokumen sekaligus; klik lagi untuk berhenti.
- Tabel referensi resmi CEISA 4.0 ditambah: dokumen, negara, satuan, kemasan, fasilitas tarif, jenis pungutan, jaminan, cara angkut, valuta, dan kantor.
- Pilihan di Pengaturan: simpan juga berkas Excel asli portal ke folder Unduhan saat mengambil isi dokumen.

## 1.8.2 (29 September 2026)

- Riwayat dari portal langsung aktif: CEISA Monitor memakai alamat yang sama dengan tab Riwayat Status dan Riwayat Respon di portal, sehingga tidak perlu lagi Pelajari dari portal. Jam status memakai waktu mulai seperti tampilan portal, dan nama status serta respons sama persis dengan portal.
- Ambil riwayat banyak dokumen sekaligus: pilih dokumen di tabel lalu Ambil riwayat portal, atau Lengkapi riwayat dari portal di dialog Excel (maks 300 dokumen per klik, berurutan agar tidak membebani portal).
- Excel: lembar baru Riwayat Portal (mulai, penjaluran, respons pertama dan terakhir, waktu layanan dalam jam, serta median lama setiap perpindahan status) dan Riwayat Rinci (setiap status dan respons dengan jamnya).
- Perbaikan Excel: tanggal tidak lagi bergeser satu hari lebih awal pada zona waktu WIB/WITA/WIT.

## 1.8.1 (29 September 2026)

- Pembaruan yang berjalan di latar belakang (misalnya otomatis saat masuk portal) kini terlihat di dasbor: bilah kemajuan, halaman ke berapa dari total, jumlah dokumen, dan perkiraan sisa waktu. Data tampil sendiri setelah selesai.
- Mengklik Perbarui data saat pembaruan lain berjalan tidak lagi menampilkan pesan galat merah, tetapi menampilkan kemajuan pembaruan yang sedang berjalan.
- Kunci pembaruan memakai detak per halaman: penarikan semua data yang lama tidak lagi dianggap macet setelah 5 menit, sehingga tidak terjadi dua penarikan bersamaan. Kunci tanpa detak lebih dari 3 menit dianggap berhenti.
- Pelajari dari portal: hasilnya tampil langsung di bawah tombol dan pesan tidak lagi tertutup jendela Pengaturan. Alamat riwayat kini dapat dipelajari walaupun data belum ditarik.

## 1.8.0 (29 September 2026)

- Riwayat dari portal: jam pasti setiap status (termasuk Validasi, Siap Jalur, Penjaluran) dan semua respons dokumen diambil langsung dari portal dengan satu klik, dari kartu rincian perubahan, kolom Respons, atau dialog tindak lanjut. Tidak perlu lagi mencari nomor pendaftaran, membuka dokumen, dan tab Riwayat Respon secara manual.
- Respons "tanpa nama" atau berupa angka di tabel rincian dapat diklik dan diganti dengan nama respons terbaru dari riwayat respons portal.
- Alamat layanan riwayat dipelajari dari portal (Pengaturan → Riwayat dari portal), sehingga tidak memerlukan alat pengembang (F12). Nama petugas dan pengguna tidak diambil.
- Kode respons angka (mis. 2305) langsung diterjemahkan menjadi nama resminya sesuai jenis dokumen (mis. SPPD untuk BC 2.3) memakai tabel Referensi Respon dan Referensi Status CEISA 4.0 dari portal pengembang Bea Cukai (openapi.beacukai.go.id/portal). Berlaku di tabel rincian, grafik respons, ekspor Excel/CSV (kolom Kode Respons baru), dan riwayat dari portal. Kode yang tidak tercantum di tabel resmi (misalnya BC 4.0 dan BC 4.1) tidak ditebak.
- Tombol Salin info teknis berisi alamat layanan dan nama kolom saja, tanpa data dokumen, untuk keperluan dukungan.

## 1.7.1 (29 September 2026)

- Mode demo: riwayat status contoh tidak lagi memuat tanggal di masa depan.
- Tombol "Tampilkan ringkasan pagi sekarang" pada mode demo langsung membuka ringkasan pagi di dasbor.

## 1.7.0 (29 September 2026)

- Rincian perubahan status: arahkan kursor atau klik tanda BERUBAH di tabel rincian untuk melihat status sebelum dan sesudah, kapan status lama terakhir terlihat dan status baru pertama terlihat, rentang waktu perubahan, respons dan waktu respons dari portal, serta riwayat status dokumen. Waktu yang diperkirakan diberi label "perkiraan".
- Tanda SLA menampilkan tanggal daftar, batas SLA, tanggal batas terlewati, dan umur dokumen.
- Dialog tindak lanjut menampilkan Riwayat status dokumen di samping Riwayat tindak lanjut.

## 1.6.3 (29 September 2026)

- Tarik semua data: tanggal awal penarikan kini bawaan kosong, artinya semua dokumen yang tersedia di portal CEISA 4.0 (termasuk tahun lalu dan sebelumnya). Pengaturan lama "1 Januari" otomatis diubah menjadi semua data satu kali.
- Tombol Semua data di Pengaturan, serta pilihan Tarik semua data pada pita periode.
- Batas penarikan dinaikkan (hingga 1 juta baris). Bila portal menolak halaman lanjutan, penarikan otomatis dilanjutkan per kode dokumen agar dokumen lama tetap tertarik; kode yang masih terpotong ditampilkan di dasbor.

## 1.6.2 (28 September 2026)

- Halaman "Belum ada data" memakai empat langkah yang sama dengan panduan sambutan (masuk portal, buka Daftar Dokumen, Perbarui data, Profil perusahaan) dan menyediakan tautan Lihat panduan.

## 1.6.1 (28 September 2026)

- Perbaikan: saat dasbor menggulir otomatis ke tabel rincian (misalnya setelah mengklik kartu atau tombol Tampilkan yang perlu ditindaklanjuti), bagian atas tabel dan bilah pilihan massal tidak lagi tertutup bilah filter yang menempel.

## 1.6.0 (28 September 2026)

- Ringkasan pagi: notifikasi harian (jam dapat diatur, bawaan 08.00) berisi dokumen selesai, baru melewati SLA, prioritas baru, dan tugas jatuh tempo. Tombol notifikasi membuka ringkasan siap tempel ke grup WhatsApp atau langsung ke daftar tugas jatuh tempo. Bila komputer mati pada jamnya, notifikasi muncul saat Chrome dibuka kembali pada hari itu.
- Pengingat tugas: tugas yang terlambat, jatuh tempo hari ini, dan besok; filter rincian "Jatuh tempo" dan cakupan yang sama di dialog Kirim tugas via WhatsApp.
- Peringatan prioritas: notifikasi saat dokumen baru terkena Jalur Merah, status pemeriksaan (dokumen, barang, fisik), atau respons SPJM/SPJK/SPPF. Baris prioritas ditandai garis merah dan dapat disaring melalui Perubahan → Prioritas.
- Riwayat tindak lanjut per dokumen: setiap perubahan penanggung jawab, status, target, tugas, catatan, dan pengiriman WhatsApp tercatat dengan waktunya (40 entri terakhir).
- Templat tugas sendiri di Pengaturan, dengan format "status; status | teks tugas" atau teks umum.
- Ekspor dan impor tindak lanjut (.json) beserta nomor WhatsApp dan templat, untuk berbagi antarkomputer tim tanpa server. Saat impor, isian yang lebih baru dipertahankan dan riwayat digabung.

## 1.5.0 (28 September 2026)

- Penugasan tindak lanjut melalui WhatsApp. Dialog tindak lanjut kini memiliki kolom Tugas yang diminta (templat otomatis sesuai status dan jalur dokumen, dapat diubah) dan Nomor WhatsApp penanggung jawab (disimpan lokal per nama).
- Tombol Simpan & salin pesan dan Simpan & buka WhatsApp menyusun pesan tugas berformat WhatsApp: nomor pengajuan, jenis, status, umur/SLA, jalur, tugas, target, dan catatan.
- Kartu Tindak lanjut: tombol Kirim tugas via WhatsApp membuka daftar penanggung jawab dengan pratinjau pesan per orang, pilihan cakupan (semua, melewati target, belum pernah dikirim), serta Salin pesan atau Buka WhatsApp.
- Dokumen yang tugasnya sudah dikirim ditandai "✓ WA" pada tabel rincian. Tugas juga ikut di kolom catatan Excel.
- Ekstensi tidak mengirim pesan sendiri; WhatsApp hanya dibuka saat pengguna mengklik.

## 1.4.2 (28 September 2026)

- Pilihan tema tampilan di kepala dasbor: Auto (mengikuti sistem), Terang, atau Gelap.
- Tema gelap diperbaiki: pilihan pada daftar tarik-turun kini terbaca, bilah filter tidak lagi tembus pandang saat menggulir, dan warna status yang terlalu gelap (misalnya Gate In TPS) dicerahkan agar kontras.
- Rincian status pada grafik Tingkat penyelesaian kini menampilkan setiap status secara lengkap, tanpa kelompok "Lainnya", dengan warna yang tidak berulang.
- Panduan sambutan menjadi empat langkah: masuk portal, buka halaman Daftar Dokumen (portal.beacukai.go.id/dokumen-pabean/), klik Perbarui data, lalu atur Profil perusahaan.

## 1.4.1 (28 September 2026)

- Tautan dukungan sukarela ke halaman Saweria (saweria.co/triastore) di kaki dasbor, Pengaturan, dan popup. Dibuka sebagai tab biasa; tanpa pelacakan, tanpa izin tambahan, dan seluruh fitur tetap gratis.

## 1.4.0 (28 September 2026)

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

## 1.3.0 (28 September 2026), rilis Chrome Web Store pertama

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

## 1.2.0

- Profil perusahaan: fasilitas otomatis, status final, templat SLA, logo, warna, target, catatan kejadian, ekspor-impor profil.
- Data terpisah per akun/NPWP; filter perusahaan (akun ini dan mitra) serta kantor.
- Laporan resmi A4 (cetak, PDF, .doc) dan memo per penanggung jawab.
- Presentasi dengan judul kesimpulan, agenda, target, dan slide "Keputusan yang dimohon".
- Pengaturan SLA dengan pratinjau jumlah dokumen yang melewati SLA.
- Pemeriksaan struktur data portal dan validasi jumlah baris.

## 1.1.0

- Tindak lanjut per dokumen, deteksi perubahan, SLA per jenis dokumen dan status, pembaruan otomatis, notifikasi, mode demo.

## 1.0.0

- Dasbor status dokumen, ekspor Excel dan presentasi.
