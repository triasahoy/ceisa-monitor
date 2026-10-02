# Tanya Jawab

[Kembali ke README](../README.md)

| Pertanyaan | Jawaban |
|---|---|
| Apakah ini aplikasi resmi DJBC? | Bukan. CEISA Monitor adalah proyek independen yang hanya membaca data yang sudah dapat diakses pengguna yang masuk ke portal. |
| Apakah gratis? | Ya, seluruh fitur gratis. Dukungan sukarela dapat diberikan melalui [Saweria](https://saweria.co/triasex) atau [Buy Me a Coffee](https://buymeacoffee.com/triase). |
| Apakah data saya aman? | Data diolah dan disimpan di browser Anda. Tidak ada server, analitik, atau pihak ketiga. Kata sandi dan token tidak disimpan. Lihat [SECURITY.md](../SECURITY.md). |
| Apakah ekstensi bisa mengubah atau mengirim dokumen? | Tidak. Ekstensi hanya membaca daftar dokumen. |
| Apakah ekstensi mengirim pesan WhatsApp sendiri? | Tidak. Pesan hanya disalin atau WhatsApp dibuka saat Anda mengklik tombolnya; Anda sendiri yang menekan kirim. |
| Mengapa perlu tab portal yang terbuka? | Data dibaca dengan sesi login Anda di tab tersebut. Ekstensi tidak pernah masuk ke portal atas nama Anda. |
| Apakah data tahun lalu ikut ditarik? | Ya. Secara bawaan semua data yang tersedia di portal ditarik. Bila tanggal awal pernah diubah, klik **Semua data** di Pengaturan. |
| Penarikan pertama lama? | Wajar untuk ribuan dokumen. Biarkan tab portal terbuka; pembaruan berikutnya berjalan otomatis. |
| Bagaimana jika komputer mati atau sesi habis? | Data diperbarui otomatis saat Anda masuk kembali. Tren tetap lengkap karena dihitung ulang dari tanggal dokumen. |
| Seberapa tepat waktu perubahan status? | Popup **BERUBAH** menampilkan Riwayat Status dan Riwayat Respon dari portal dengan jam persis, diambil saat popup dibuka (tab portal harus terbuka dan sudah masuk). Bila riwayat tidak tersedia, popup memakai saat perubahan pertama kali terlihat pada pembaruan data; perbarui lebih sering (Pengaturan → Pembaruan otomatis, mulai 5 menit) untuk perkiraan yang lebih rapat. |
| Respons tampil sebagai angka, misalnya 2305. Apa artinya? | Kode respons angka diterjemahkan otomatis dengan tabel Referensi Respon resmi CEISA 4.0 dari [portal pengembang Bea Cukai](https://openapi.beacukai.go.id/portal/), sesuai jenis dokumen (2305 pada BC 2.3 = SPPD). Arahkan kursor atau klik sel Respons untuk melihat nama lengkapnya. BC 4.0 dan BC 4.1 tidak tercantum di tabel resmi; kode untuk dokumen tersebut ditampilkan apa adanya. |
| Apa itu isi dokumen dan kartu arsip? | CEISA Monitor membaca isi lengkap nomor pengajuan dari layanan Unduh Excel portal, dengan sesi Anda sendiri. Klik dua kali baris di tabel rincian untuk kartu arsip, atau klik **Ambil isi dokumen…** di kartu Isi dokumen untuk memilih cakupan (rentang tanggal daftar dan jenis dokumen). Berkas Excel tidak disimpan ke folder kecuali Anda mengaktifkannya di Pengaturan. |
| Apakah ada batas jumlah dokumen saat mengambil isi dokumen? | Tidak. Dialog cakupan menampilkan jumlah dokumen yang akan dibaca, yang dilewati karena sudah diambil, dan perkiraan menit. Klik tombol yang sama untuk berhenti, lalu lanjutkan nanti. |
| Bagaimana memilih jenis dokumen? | Di dialog Ambil isi dokumen dan di Pengaturan → Data, centang dari tabel referensi resmi (243 jenis). Jenis yang ada di data Anda tampil paling atas; kosong berarti semua jenis. |
| Bagaimana melihat nilai dan pungutan per dokumen? | Setelah isi dokumen diambil, buka tab **Nilai dan pungutan** di kartu Isi dokumen. Tabel Rincian per dokumen dapat dicari dan diurutkan, dan tersedia juga sebagai lembar **Nilai per Dokumen** di Excel. |
| Bagaimana mengekspor nilai dan pungutan untuk periode atau jenis dokumen tertentu? | Klik **Excel** di kartu Isi dokumen, lalu pilih rentang tanggal daftar dan jenis dokumen di dialog. Nama berkas dan lembar **Cakupan** mencatat pilihan itu. Dokumen yang isinya belum diambil tidak masuk perhitungan; dialog menawarkan **Ambil yang belum lalu ekspor**. Pilihan **Pisahkan per jenis dokumen** membuat satu lembar untuk setiap jenis. |
| Bagaimana melihat nilai dan pungutan per jenis dokumen? | Di kartu Isi dokumen, pilih tampilan **Per jenis dokumen**. Klik satu baris untuk menyaring rincian ke jenis itu, atau gunakan baris filter di atas kartu (jenis, jalur, pungutan). Filter ini hanya berlaku untuk kartu dan ekspornya, tidak mengubah dasbor status. Di Excel, lembar **Ringkasan per Jenis** memuat angka yang sama. |
| Apakah bisa dipakai PPJK atau kawasan berikat? | Bisa. Pilih jenis fasilitas di Profil perusahaan. PPJK dapat menyaring dasbor, presentasi, dan laporan per klien. |
| Bisakah dipakai lebih dari satu akun perusahaan? | Bisa. Data setiap akun disimpan terpisah dan dapat dipilih di kepala dasbor. |
| Bahasa apa yang dipakai saat pertama dibuka? | Bahasa Indonesia, tanpa mengikuti bahasa Chrome. English hanya tampil bila dipilih dari tombol ID/EN. |
| Bagaimana jika struktur portal berubah? | Ekstensi memeriksa struktur data setiap kali menarik data. Bila berubah, angka tidak ditampilkan dan muncul pesan agar ekstensi diperbarui. |
| Di mana memasang CEISA Monitor? | Hanya dari [Chrome Web Store](https://chromewebstore.google.com/detail/iojgnclbfhgoapolmfgcjkphacdfjbgi) (penerbit: Trias EXIM). Repositori ini hanya berisi dokumentasi. |
| Apakah kode sumbernya terbuka? | Tidak. Repositori ini berisi dokumentasi dan panduan. Hak cipta dilindungi; lihat [LICENSE](../LICENSE). |
| Bagaimana cara memperbarui versi? | Otomatis oleh Chrome bila dipasang dari Chrome Web Store. Data tidak hilang. |
| Mengapa muncul "Pembaruan sedang berjalan" dan dasbor masih kosong? | Pembaruan otomatis (misalnya saat masuk portal) sedang menarik data. Dasbor menampilkan halaman ke berapa, jumlah dokumen, dan perkiraan sisa waktu; data tampil sendiri setelah selesai. Penarikan pertama untuk semua data memerlukan beberapa menit sampai puluhan menit, bergantung pada jumlah dokumen dan kecepatan internet. Biarkan tab portal tetap terbuka. |
| Mengapa muncul "Frame with ID 0 was removed" saat pembaruan? | Halaman portal berpindah atau dimuat ulang ketika pembaruan berjalan (misalnya portal memperbarui sesinya). Sejak versi 1.15.1 ekstensi menunggu dan mengulang otomatis; bila tetap gagal, tunggu portal selesai dimuat lalu klik Perbarui data. Muat ulang ekstensi di `chrome://extensions` bila Anda masih memakai versi lama. |
| Apakah isi dokumen harus diambil berulang dari awal? | Tidak. Isi dokumen diambil sekali, disimpan per dokumen segera setelah selesai, dan dapat dihentikan lalu dilanjutkan kapan saja. Dokumen diambil ulang hanya bila statusnya berubah atau Anda memilih **Ambil ulang**. Setelah pengambilan pertama, **Ambil yang belum** hanya memuat dokumen baru dan yang berubah. |
| Apa itu Ringkasan eksekutif di dialog Buat laporan? | Mode yang memangkas presentasi dari 26 menjadi 9 slide dan laporan resmi menjadi bagian inti (ringkasan, nilai dan pungutan, usulan tindak lanjut). Nama berkas berakhiran `_Ringkas`. |
| Mengapa bab Nilai dan pungutan tidak muncul di laporan? | Bab itu dibuat dari isi dokumen. Bila isi dokumen periode itu belum diambil, bab tidak disertakan; dialog Buat laporan menampilkan alasannya. Bila baru sebagian yang diambil, bab muncul dengan catatan cakupan. |
| Dapatkah presentasi langsung menjadi PDF? | Tidak oleh ekstensi. Buka berkas .pptx di PowerPoint lalu Simpan sebagai PDF. Laporan resmi A4 dapat langsung dicetak ke PDF dari browser. |
| Bagaimana cara membagikan ekstensi ke rekan? | Klik **Bagikan ke rekan** di kaki dasbor atau di Pengaturan. Pesan siap kirim (dapat diubah) dibuka di LinkedIn, WhatsApp, X, atau Telegram, atau disalin. Hanya tautan halaman proyek yang dikirim; tidak ada data dokumen. |
| Bagaimana cara menghapus semua data? | Pengaturan → Hapus data, atau hapus ekstensi dari Chrome. |
| Ke mana saya mengirim masukan? | Buka [Issues](../../../issues/new/choose) dan pilih templat yang sesuai. |
| Apa isi kartu Hari ini? | Daftar tindakan yang mendesak: tugas terlambat, Jalur Merah atau pemeriksaan yang belum selesai, baru melewati SLA, dan belum ada penanggung jawab. Klik satu baris untuk melihat daftarnya. |
| Apa itu Komposisi status? | Donat dan daftar status dengan jumlah dan persentase. Klik satu status untuk menyaring tabel rincian. |

### Apakah data saya hilang bila ekstensi dihapus atau diganti?

Ya, bila ekstensi dihapus. Data disimpan di penyimpanan lokal browser milik ekstensi. Pembaruan otomatis dari Chrome Web Store tidak menghilangkan data karena ID ekstensi tetap. Pengaturan dapat dipindahkan lewat Ekspor profil dan Impor profil; data lain tidak ikut pindah.

### Bolehkah memasang dari berkas ZIP atau dari sumber selain Chrome Web Store?

Tidak dianjurkan dan tidak disediakan. Repositori ini tidak membagikan berkas ekstensi. Salinan dari sumber lain tidak dapat dipastikan keasliannya dan dapat berisi kode yang mengambil data Anda.

### Apakah kartu Tagihan membayar atau mengubah billing?

Tidak. Kartu Tagihan hanya membaca Browse Billing dan menyajikan datanya. Status billing tampil sebagaimana dicatat portal; ekstensi tidak menilai billing mana yang dibayar atau apa yang perlu dilakukan.

### Apakah rincian dan PDF billing disimpan?

Tidak. Rincian dan PDF diambil dari portal saat diklik, ditampilkan, lalu dibuang. Nama petugas perekam tidak diambil.

### Bagaimana membagikan contoh laporan tanpa membuka identitas?

Centang **Samarkan identitas** pada dialog ekspor. Nama perusahaan menjadi Perusahaan A, B, dan seterusnya, dan nomor penting hanya menampilkan empat angka terakhir. Tetap periksa berkas sebelum dibagikan.

