# Tanya Jawab CEISA Monitor 2.0

[Kembali ke README](../README.md) · [Panduan](PANDUAN.md) · [Video tutorial](TUTORIAL.md)

## Umum

| Pertanyaan | Jawaban |
|---|---|
| Apakah ini aplikasi resmi DJBC? | Bukan. CEISA Monitor adalah proyek independen yang hanya membaca data yang sudah dapat diakses pengguna yang masuk ke portal. |
| Apakah gratis? | Ya, seluruh fitur gratis. Dukungan sukarela dapat diberikan melalui [Saweria](https://saweria.co/triasex) atau [Buy Me a Coffee](https://buymeacoffee.com/triase). |
| Di mana memasang CEISA Monitor? | Hanya dari [Chrome Web Store](https://chromewebstore.google.com/detail/iojgnclbfhgoapolmfgcjkphacdfjbgi) (penerbit: Trias EXIM). Repositori ini hanya berisi dokumentasi. |
| Browser apa yang didukung? | Chrome dan Microsoft Edge versi 128 atau lebih baru sudah diuji. Brave, Opera, dan Arc belum diuji, tetapi diperkirakan berjalan karena memakai mesin yang sama. |
| Apakah ekstensi melewati login portal atau membaca data pihak lain? | Tidak. Ekstensi hanya membaca data milik Anda sendiri lewat sesi login Anda sendiri di tab portal, dan tidak melewati proses masuk (login) portal. |
| Apakah kode sumbernya terbuka? | Tidak. Hak cipta dilindungi; lihat [LICENSE](../LICENSE). |
| Bahasa apa yang dipakai? | Versi 2.0 tampil dalam bahasa Indonesia. Tampilan English menyusul di versi berikutnya. |

## Pembaruan dari versi 1

| Pertanyaan | Jawaban |
|---|---|
| Apakah saya perlu memasang ulang? | Tidak. Chrome memperbarui ekstensi otomatis karena ID ekstensinya sama. |
| Apakah data versi 1 hilang? | Tidak. Data dokumen, tindak lanjut, kontak WhatsApp, dan pengaturan tetap dipakai. Sebelum perubahan apa pun, 2.0 membuat cadangan lengkap di browser (disimpan 60 hari) yang dapat diunduh dari Pengaturan → Kesehatan. |
| Pembaruan otomatis versi 1 ke mana? | Dialihkan ke **Pemantauan** dengan selang terdekat (15, 30, atau 60 menit). Catatan pembaruan tampil sekali di lonceng. |
| Saya memakai tampilan English di versi 1. | Versi 2.0 tampil dalam bahasa Indonesia; catatan tentang hal ini tampil sekali di lonceng. English kembali di versi berikutnya. |
| Chrome saya versi lama. | Versi 2.0.0 memerlukan Chrome 116 atau lebih baru; mulai versi 2.1.0 diperlukan Chrome 128 atau lebih baru. Pada Chrome yang lebih lama, versi 1 tetap berjalan sampai browser diperbarui. |

## Data dan angka

| Pertanyaan | Jawaban |
|---|---|
| Mengapa perlu tab portal yang terbuka? | Data dibaca dengan sesi login Anda di tab tersebut. Ekstensi tidak pernah masuk ke portal atas nama Anda dan tidak membuka tab portal sendiri. |
| Apakah dasbor harus tetap terbuka saat Perbarui data atau Ambil isi dokumen? | Tidak. Keduanya berjalan di latar belakang. Tab portal harus tetap terbuka dan masuk; bila sesi berakhir, proses berhenti dan dapat dilanjutkan. |
| Mengapa jumlah dokumen bertambah setelah memperbarui ke 2.0? | Dokumen yang terdaftar dengan NPWP 15 digit (sebelum pergantian ke NITKU 22 digit) kini ikut ditarik dan digabung ke akun yang sama. Pilihan ini ada di Pengaturan → Data dan pembaruan. |
| Apa itu dokumen lama? | Dokumen yang belum berstatus final dan berumur lebih dari 365 hari. Dokumen ini dipisahkan dari angka utama secara bawaan agar tidak mendistorsi angka harian; statusnya tidak diubah. Catatan di bilah filter menawarkan Lihat, Hitung semua, atau Buat Excel. |
| Bagaimana Reject dihitung? | Sebagai status final, tetapi tidak dihitung sebagai selesai (sama seperti Pembatalan). |
| Kapan dokumen dihitung Jalur Merah dalam pemeriksaan? | Hanya selama berstatus Penjaluran/Siap Jalur, Pemeriksaan Fisik/Barang, atau Penerimaan Dokumen Pelengkap. Sesudah Stuffing, Gate In/Out, atau Pembongkaran, dokumen dihitung belum selesai biasa. Pemeriksaan Dokumen tidak termasuk. |
| Apakah Gate In dan Gate Out dihitung selesai? | Tidak. Status final bawaan adalah Selesai Proses dan Pembatalan (ditambah Reject); dapat diubah di Profil perusahaan. |
| Sampai kapan SLA dihitung? | Sampai Selesai Proses. |
| Mengapa bulan tertentu di Nilai dan pungutan diarsir? | Isi dokumen bulan itu belum diambil, sehingga pungutannya belum dapat dihitung. Klik **Ambil isi** untuk melengkapinya. |
| Bagaimana bila struktur portal berubah? | Ekstensi memeriksa struktur data setiap kali menarik data. Bila berubah, angka tidak ditampilkan dan muncul pesan galat, bukan angka contoh. |

## Laporan

| Pertanyaan | Jawaban |
|---|---|
| Laporan memakai data apa? | Data dan filter yang sama dengan dasbor, sehingga angkanya selalu cocok dengan layar. |
| Berapa slide presentasinya? | Sekitar 15 slide; versi ringkas sekitar 7. Rincian per jenis hanya dibuat untuk paling banyak dua jenis yang perlu perhatian. |
| Apakah isian kop dan tanda tangan harus diketik ulang setiap bulan? | Tidak. Di laporan resmi A4, klik **Ingat isian kop dan tanda tangan**. Isian dipakai lagi untuk laporan berikutnya di browser yang sama. |
| Dapatkah presentasi langsung menjadi PDF? | Tidak oleh ekstensi. Buka berkas .pptx di PowerPoint lalu Simpan sebagai PDF. Laporan resmi A4 dapat langsung dicetak ke PDF dari browser. |
| Apa beda pesan WhatsApp Singkat dan Lengkap? | Singkat berisi lima baris angka utama untuk atasan. Lengkap berisi bagian yang dipilih (angka utama, nilai, tugas jatuh tempo, perlu perhatian) dan dapat ditambah daftar dokumen. |
| Apakah Samarkan identitas berlaku untuk semua berkas? | Ya: presentasi, laporan A4, Excel, pesan WhatsApp, dan nama berkas. Tetap periksa berkas sebelum dibagikan. |

## Laporan per penanggung jawab

| Pertanyaan | Jawaban |
|---|---|
| Dokumen mana yang masuk laporan? | Dokumen belum selesai yang sudah punya penanggung jawab. Dokumen tanpa penanggung jawab dihitung terpisah dengan tautan Lihat dan tugaskan. |
| Bagaimana urutan dokumen dalam pesan? | Jalur Merah dalam pemeriksaan lebih dulu, lalu yang lewat target atau SLA, lalu lainnya. |
| Bolehkah kolom Hasil diisi bebas? | Boleh. Pilihan Selesai, Sedang diproses, dan Menunggu pihak lain mengubah status tindak lanjut; teks bebas dan Keterangan disimpan sebagai catatan bertanggal tanpa mengubah status. |
| Apa yang terjadi saat impor? | Berkas dibaca di browser, lalu pratinjau menunjukkan dokumen yang akan diperbarui. Tidak ada yang berubah sebelum Anda menekan Terapkan ke tindak lanjut. |
| Apakah ada pengingat otomatis? | Tidak. Laporan dibuat kapan saja Anda perlukan. |
| Apakah ekstensi mengirim pesan WhatsApp sendiri? | Tidak. Pesan hanya disalin atau WhatsApp dibuka saat Anda mengklik tombolnya; Anda sendiri yang memilih penerima dan menekan kirim. |

## Keamanan, cadangan, dan akun

| Pertanyaan | Jawaban |
|---|---|
| Apakah data saya aman? | Data diolah dan disimpan di browser Anda. Tidak ada server, analitik, atau pihak ketiga. Kata sandi dan token tidak disimpan. Lihat [SECURITY.md](../SECURITY.md). |
| Apakah NPWP atau NITKU saya disimpan? | Tidak. Nomor identitas hanya dipakai sesaat untuk membuat kunci akun berupa sidik (hash) sebagai nama samaran. Kunci ini diturunkan dari nomor identitas dan bukan rahasia yang tidak dapat dibalik, sehingga berkas cadangan (`.ceisadata`) perlu diperlakukan sebagai data rahasia. |
| Apakah data diperbarui tanpa saya menekan tombol? | Ya, bila **Perbarui data otomatis** menyala (bawaan): pemeriksaan tiap jam menarik data ketika tab portal terbuka, Anda sudah masuk, dan data tersimpan lebih lama dari 6 jam. Hanya membaca, tidak membuka tab portal sendiri, dan dapat dimatikan di Pengaturan → Data dan pembaruan. |
| Apakah Pemantauan berjalan sendiri tanpa saya ketahui? | Tidak. Pemantauan mati secara bawaan dan hanya berjalan setelah Anda menyalakannya, ketika tab portal terbuka dan Anda sudah masuk. |
| Mengapa ekstensi meminta izin pemberitahuan? | Hanya bila Anda menyalakan pemberitahuan browser di Pengaturan → Pemantauan. Izin ini bersifat pilihan. |
| Bagaimana memindahkan data ke komputer lain? | Pengaturan → Cadangan: buat cadangan Ringan atau Lengkap (`.ceisadata`), lalu impor di komputer lain. Impor menampilkan pratinjau per akun sebelum digabung. |
| Bisakah dipakai lebih dari satu akun perusahaan? | Bisa. Data setiap akun terpisah. Pengaturan → Lanjutan → Akun di browser ini menampilkan semua akun, dengan pilihan pakai atau hapus akun yang tidak dipakai. |
| Bagaimana menghapus semua data? | Pengaturan → Lanjutan → Hapus data tersimpan (perlu konfirmasi), atau hapus ekstensi dari Chrome. Buat cadangan lebih dulu bila masih diperlukan. |
| Apakah tagihan dibayar atau diubah? | Tidak. Tagihan hanya membaca Browse Billing dan menampilkan datanya apa adanya. |
| Apakah nama atau NIP petugas diambil dari portal? | Tidak. Pelaku di riwayat hanya ditandai Sistem atau Petugas. |

## Pesan galat

Tulisan di kolom kiri sama dengan yang tampil di ekstensi, sehingga dapat dicari. Ekstensi memakai sesi login Anda yang sudah ada dan tidak pernah masuk ke portal sendiri, termasuk bila portal meminta verifikasi dua langkah (MFA): selesaikan masuk di portal, lalu ulangi.

| Pesan | Arti dan tindakan |
|---|---|
| Akun portal berganti saat data diambil. Data tidak disimpan. Perbarui data lagi. | Akun di portal berubah (misalnya Anda masuk dengan perusahaan lain) di tengah penarikan, sehingga hasilnya dibuang agar data dua akun tidak tercampur. Pastikan akun di portal yang Anda inginkan, lalu tekan Perbarui data. |
| Akun yang masuk di portal berbeda dengan akun di dasbor. | Akun di portal tidak sama dengan akun yang sedang dibuka di dasbor. Ganti akun di portal atau di sidebar dasbor, lalu coba lagi. |
| Halaman portal ditutup saat proses berjalan. Buka portal CEISA dan masuk, lalu coba lagi. | Tab portal tertutup ketika data sedang dibaca. Buka lagi portal CEISA 4.0, masuk, dan ulangi. Proses tidak melanjutkan sendiri tanpa tab portal. |
| Halaman portal sedang dimuat ulang. Tunggu hingga portal selesai dimuat, lalu coba lagi. | Tab portal sedang berpindah halaman atau memuat ulang. Tunggu sampai halaman portal tampil penuh, lalu ulangi. |
| Portal tidak dapat dihubungi. Coba lagi nanti. | Portal tidak menjawab atau memberi galat; rincian singkat tampil di belakang pesan. Periksa jaringan dan buka portal di tab biasa. Bila portal sedang gangguan, coba beberapa saat lagi. |
| Koneksi ke portal terputus. Periksa jaringan, lalu coba lagi. | Sambungan internet terputus di tengah permintaan. Periksa jaringan, lalu ulangi. |
| Buka portal CEISA 4.0 di tab lain dan masuk (login), lalu coba lagi. | Ekstensi membaca lewat tab portal yang sudah terbuka dan tidak membukanya sendiri. Buka portal CEISA 4.0 di tab lain, masuk, lalu ulangi. |
| Sesi portal belum aktif. Masuk (login) di portal CEISA 4.0, lalu coba lagi. | Sesi login di portal belum ada atau sudah habis, termasuk saat portal menunggu verifikasi dua langkah. Masuk dulu di portal; ekstensi tidak masuk atas nama Anda. |
| Sesi portal berakhir. Masuk kembali di portal. | Sesi habis ketika proses berjalan. Masuk kembali di portal; Ambil isi dokumen dan Pemantauan dapat dilanjutkan setelahnya. |
| Perbarui data atau Ambil isi dokumen sedang berjalan. Tunggu sampai selesai, lalu impor lagi. | Impor ditolak selama ada pekerjaan latar belakang agar data tidak tertimpa. Tunggu pekerjaan selesai (kemajuannya tampil di kepala halaman), lalu impor lagi. Hapus data juga ditolak selama Perbarui data berjalan. |
| Cadangan tidak dapat dibuat. Coba cadangan Ringan, atau hapus akun yang tidak dipakai. | Cadangan yang diminta sebelum penghapusan gagal dibuat (rincian singkat tampil di belakang pesan), sehingga tidak ada yang dihapus. Pilih cadangan Ringan, atau hapus akun yang tidak dipakai lebih dulu. |
| Cadangan tidak dapat dibuat, sehingga akun tidak dihapus. | Penghapusan akun dibatalkan karena cadangan yang diminta gagal. Akun tetap utuh; coba lagi atau hapus tanpa cadangan bila memang tidak diperlukan. |
| Kata sandi berkas tidak cocok. | Kata sandi yang diketik tidak sama dengan yang dipakai saat berkas dibuat. Kata sandi tidak disimpan di mana pun dan tidak dapat dipulihkan; coba kata sandi lain yang mungkin Anda pakai. |
| Kata sandi minimal 8 karakter. | Kata sandi cadangan terlalu pendek. Pakai paling sedikit 8 karakter. |
| Berkas rusak atau bukan berkas data CEISA Monitor. | Berkas tidak dapat dibaca atau sudah berubah. Pakai berkas `.ceisadata` asli dari Ekspor data. |
| Struktur data portal CEISA berubah (kolom ... tidak ditemukan). Data tidak diproses agar angka tidak keliru. Mohon perbarui ekstensi. | Portal mengubah isi datanya, sehingga ekstensi sengaja tidak menampilkan angka daripada menampilkan angka keliru. Perbarui ekstensi dari Chrome Web Store dan laporkan lewat Issues bila tetap muncul. Versi untuk tagihan: Struktur data tagihan berubah (kolom ... tidak ditemukan). Data tidak diproses. |
| Hasil portal tidak lengkap; ... dokumen dari daftar sebelumnya dipertahankan. Perbarui data lagi nanti. | Portal menjawab sebagian, sehingga dokumen yang tidak ikut tertarik tetap memakai data dari penarikan sebelumnya (riwayat status ikut bertahan). Pesan ini tampil di Pengaturan > Kesehatan. Perbarui data lagi beberapa saat kemudian; tidak ada dokumen yang dihapus. Sebagian jenis tidak lengkap (...) berarti hanya jenis dokumen yang disebut yang terkena. |
| Data tidak ditemukan | Jawaban portal untuk hasil kosong, misalnya akun tanpa dokumen NPWP 15 digit atau pencarian yang tidak memiliki hasil. Ini bukan galat dan tidak menggagalkan Perbarui data. |
| Portal tidak mengembalikan daftar tagihan. | Portal tidak mengirim daftar billing yang dapat dibaca. Coba lagi nanti; tagihan tidak diubah. |
| Akun pada berkas tindak lanjut ini belum ada di browser ini. Perbarui data dari portal untuk akun tersebut, lalu impor lagi. | Berkas Tindak lanjut saja hanya digabung ke akun yang sudah ada. Tarik data akun itu dari portal lebih dulu, lalu impor ulang. |
| Berkas tidak memuat akun. | Berkas impor kosong atau bukan berkas data. Pilih berkas hasil Ekspor data. |
| Akun yang sedang dipakai tidak dapat dihapus. Pindah ke akun lain dulu. | Akun yang sedang dibuka tidak boleh dihapus. Ganti ke akun lain di sidebar, lalu hapus. |
| Ketik paling sedikit 6 angka atau huruf dari nomor pengajuan. | Cari di portal memerlukan paling sedikit 6 karakter agar hasilnya tidak terlalu luas. Tambahkan karakter. |
| Pembaruan lain sedang berjalan (misalnya pembaruan otomatis). Tunggu sebentar, lalu coba kembali. | Hanya satu penarikan data yang boleh berjalan sekali waktu. Tunggu sampai selesai, lalu ulangi. |

## Masukan

Temukan masalah atau punya ide fitur? Buka [Issues](../../../issues/new/choose). Jangan melampirkan data asli perusahaan, nomor pengajuan, atau tangkapan layar portal yang memuat data rahasia. Pengaturan → Kesehatan dapat membuat berkas diagnostik tanpa data pribadi untuk dilampirkan.
