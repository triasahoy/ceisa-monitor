# Catatan Perubahan

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
