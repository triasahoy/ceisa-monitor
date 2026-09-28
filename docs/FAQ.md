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
| Seberapa tepat waktu perubahan status? | Portal tidak mencatat jam setiap perpindahan status. CEISA Monitor menampilkan kapan perubahan terlihat pada pembaruan data dan waktu respons dari portal; perkiraan diberi label. |
| Apakah bisa dipakai PPJK atau kawasan berikat? | Bisa. Pilih jenis fasilitas di Profil perusahaan. PPJK dapat menyaring dasbor, presentasi, dan laporan per klien. |
| Bisakah dipakai lebih dari satu akun perusahaan? | Bisa. Data setiap akun disimpan terpisah dan dapat dipilih di kepala dasbor. |
| Bisakah tim memakai catatan yang sama? | Bisa, melalui Ekspor dan Impor tindak lanjut (.json) di Pengaturan. |
| Bagaimana jika struktur portal berubah? | Ekstensi memeriksa struktur data setiap kali menarik data. Bila berubah, angka tidak ditampilkan dan muncul pesan agar ekstensi diperbarui. |
| Apakah tersedia di Chrome Web Store? | Sedang dalam peninjauan. Sementara itu, pasang dari halaman [Releases](../../../releases/latest). |
| Apakah kode sumbernya terbuka? | Tidak. Repositori ini berisi paket rilis yang sudah diminifikasi dan dokumentasi. Hak cipta dilindungi; lihat [LICENSE](../LICENSE). |
| Bagaimana cara memperbarui versi? | Ekstrak paket baru ke folder yang sama, lalu klik muat ulang (↻) di `chrome://extensions`. Data tidak hilang. |
| Bagaimana cara menghapus semua data? | Pengaturan → Hapus data tersimpan, atau hapus ekstensi dari Chrome. |
| Ke mana saya mengirim masukan? | Buka [Issues](../../../issues/new/choose) dan pilih templat yang sesuai. |
