# Tanya Jawab

[Kembali ke README](../README.md)

| Pertanyaan | Jawaban |
|---|---|
| Apakah ini aplikasi resmi DJBC? | Bukan. CEISA Monitor adalah proyek independen yang hanya membaca data yang sudah dapat diakses pengguna yang masuk ke portal. |
| Apakah gratis? | Ya, seluruh fitur gratis. Dukungan sukarela dapat diberikan melalui [saweria.co/triastore](https://saweria.co/triastore). |
| Apakah data saya aman? | Data diolah dan disimpan di peramban Anda. Tidak ada server, analitik, atau pihak ketiga. Kata sandi dan token tidak disimpan. Lihat [SECURITY.md](../SECURITY.md). |
| Apakah ekstensi bisa mengubah atau mengirim dokumen? | Tidak. Ekstensi hanya membaca daftar dokumen. |
| Apakah ekstensi mengirim pesan WhatsApp sendiri? | Tidak. Pesan hanya disalin atau WhatsApp dibuka saat Anda mengklik tombolnya; Anda sendiri yang menekan kirim. |
| Mengapa perlu tab portal yang terbuka? | Data dibaca dengan sesi login Anda di tab tersebut. Ekstensi tidak pernah masuk ke portal atas nama Anda. |
| Apakah data tahun lalu ikut ditarik? | Ya. Secara bawaan semua data yang tersedia di portal ditarik. Bila tanggal awal pernah diubah, klik **Semua data** di Pengaturan. |
| Penarikan pertama lama? | Wajar untuk ribuan dokumen. Biarkan tab portal terbuka; pembaruan berikutnya berjalan otomatis. |
| Bagaimana jika komputer mati atau sesi habis? | Data diperbarui otomatis saat Anda masuk kembali. Tren tetap lengkap karena dihitung ulang dari tanggal dokumen. Ringkasan pagi muncul saat Chrome dibuka pada hari itu. |
| Seberapa tepat waktu perubahan status? | Kartu rincian menampilkan kapan perubahan terlihat pada pembaruan data. Untuk jam pasti, klik **Ambil riwayat dari portal**; untuk banyak dokumen, pilih dokumen lalu **Ambil riwayat portal**, atau **Lengkapi riwayat dari portal** saat membuat Excel (lembar Riwayat Portal dan Riwayat Rinci). |
| Respons tampil sebagai angka, misalnya 2305. Apa artinya? | Kode respons angka diterjemahkan otomatis dengan tabel Referensi Respon resmi CEISA 4.0 dari [portal pengembang Bea Cukai](https://openapi.beacukai.go.id/portal/), sesuai jenis dokumen (2305 pada BC 2.3 = SPPD). Arahkan kursor atau klik sel Respons untuk melihat nama lengkapnya. BC 4.0 dan BC 4.1 tidak tercantum di tabel resmi; untuk dokumen tersebut gunakan **Ambil riwayat dari portal**. |
| Perlukah membuka F12 atau alat pengembang? | Tidak. Riwayat status dan respons diambil dari alamat yang sama dengan tab Riwayat Status dan Riwayat Respon di portal, tanpa pengaturan. |
| Apakah bisa dipakai PPJK atau kawasan berikat? | Bisa. Pilih jenis fasilitas di Profil perusahaan. PPJK dapat menyaring dasbor, presentasi, dan laporan per klien. |
| Bisakah dipakai lebih dari satu akun perusahaan? | Bisa. Data setiap akun disimpan terpisah dan dapat dipilih di kepala dasbor. |
| Bisakah tim memakai catatan yang sama? | Bisa, melalui Ekspor dan Impor tindak lanjut (.json) di Pengaturan. |
| Bagaimana jika struktur portal berubah? | Ekstensi memeriksa struktur data setiap kali menarik data. Bila berubah, angka tidak ditampilkan dan muncul pesan agar ekstensi diperbarui. |
| Apakah tersedia di Chrome Web Store? | Sedang dalam peninjauan. Sementara itu, pasang dari halaman [Releases](../../../releases/latest). |
| Apakah kode sumbernya terbuka? | Tidak. Repositori ini berisi paket rilis yang sudah diminifikasi dan dokumentasi. Hak cipta dilindungi; lihat [LICENSE](../LICENSE). |
| Bagaimana cara memperbarui versi? | Ekstrak paket baru ke folder yang sama (timpa berkas lama), lalu klik muat ulang (↻) di `chrome://extensions`. Data tidak hilang. Jangan memasang folder baru dengan Load unpacked: Chrome menganggapnya ekstensi lain, sehingga datanya kosong dan semua data ditarik ulang dari awal. |
| Mengapa muncul "Pembaruan sedang berjalan" dan dasbor masih kosong? | Pembaruan otomatis (misalnya saat masuk portal) sedang menarik data. Dasbor menampilkan halaman ke berapa, jumlah dokumen, dan perkiraan sisa waktu; data tampil sendiri setelah selesai. Penarikan pertama untuk semua data memerlukan beberapa menit sampai puluhan menit, bergantung pada jumlah dokumen dan kecepatan internet. Biarkan tab portal tetap terbuka. |
| Bagaimana cara menghapus semua data? | Pengaturan → Hapus data tersimpan, atau hapus ekstensi dari Chrome. |
| Ke mana saya mengirim masukan? | Buka [Issues](../../../issues/new/choose) dan pilih templat yang sesuai. |
