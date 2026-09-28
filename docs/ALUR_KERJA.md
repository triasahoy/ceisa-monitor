# Alur Kerja dengan CEISA Monitor

Contoh rutinitas tim ekspor-impor: harian, mingguan, dan bulanan. Sesuaikan dengan prosedur perusahaan Anda.

[Kembali ke README](../README.md) · [Panduan lengkap](PANDUAN.md)

## Gambaran besar

```mermaid
flowchart LR
  A[Masuk portal CEISA 4.0] --> B[Buka Daftar Dokumen]
  B --> C[Perbarui data<br>otomatis atau manual]
  C --> D[Dasbor dan Perubahan]
  D --> E{Perlu tindakan?}
  E -- Ya --> F[Catat tindak lanjut<br>penanggung jawab, tugas, target]
  F --> G[Kirim tugas via WhatsApp]
  G --> H[Penanggung jawab menindaklanjuti]
  H --> I[Perbarui status tindak lanjut<br>Selesai dicek]
  E -- Tidak --> J[Pantau]
  I --> K[Rapat bulanan:<br>presentasi, laporan resmi, Excel]
  J --> K
```

Data hanya mengalir dari portal ke peramban Anda. Ekstensi tidak mengubah apa pun di portal dan tidak mengirim data ke server.

## Harian (10–15 menit)

| Waktu | Langkah | Fitur |
|---|---|---|
| 08.00 | Baca notifikasi **Ringkasan pagi**, salin ringkasan ke grup WhatsApp tim | Ringkasan pagi |
| 08.05 | Buka dasbor, lihat kartu **Perubahan** "Sejak kemarin" | Perubahan |
| 08.10 | Periksa dokumen **Prioritas** (Jalur Merah, pemeriksaan, SPJM) | Perubahan → Prioritas |
| 08.15 | Klik **Tampilkan yang perlu ditindaklanjuti**, isi penanggung jawab, tugas, dan target | Tindak lanjut |
| 08.20 | **Kirim tugas via WhatsApp** dengan cakupan "Jatuh tempo" atau "Belum pernah dikirim" | Penugasan |
| Sepanjang hari | Arahkan kursor ke tanda **BERUBAH** untuk memastikan kapan status berubah dan respons portalnya | Rincian perubahan |
| Sore | Ubah status tindak lanjut yang sudah beres menjadi **Selesai dicek** | Tindak lanjut |

## Mingguan (Senin, 30 menit)

1. Pilih pembanding **Sejak Senin** atau **7 hari terakhir** di kartu Perubahan.
2. Lihat grafik **Aliran dokumen**: apakah dokumen selesai lebih banyak daripada dokumen masuk?
3. Saring **Tindak lanjut → Melewati target**, lalu kirim ulang tugas kepada penanggung jawab.
4. Periksa **peta umur dokumen**: status mana yang paling lama tertahan?
5. Bagikan **Ringkasan WhatsApp** mingguan kepada atasan.

## Bulanan (rapat, 15 menit persiapan)

1. **Ekspor → Buat laporan**: pilih bulan, centang presentasi, laporan resmi A4, dan Excel, lalu klik Buat.
2. Periksa slide **Keputusan yang dimohon** dan sesuaikan usulan.
3. Cetak atau simpan laporan resmi sebagai PDF/Word untuk tanda tangan.
4. Bandingkan dengan **Periode sama tahun lalu** untuk melihat tren musiman.

## Pembagian peran yang disarankan

| Peran | Tanggung jawab di CEISA Monitor |
|---|---|
| Supervisor EXIM | Memeriksa ringkasan pagi, menetapkan penanggung jawab dan target, mengirim tugas, menyiapkan laporan bulanan |
| Staf dokumen | Menindaklanjuti tugas, melaporkan perkembangan melalui balasan WhatsApp |
| Koordinator gudang | Menangani tugas Gate In, Pembongkaran, Stuffing, dan pemeriksaan fisik |
| Atasan | Menerima ringkasan WhatsApp dan laporan resmi bulanan |

Catatan tindak lanjut tersimpan di komputer masing-masing. Untuk memakai catatan yang sama di beberapa komputer, gunakan **Pengaturan → Ekspor tindak lanjut (.json)** lalu **Impor tindak lanjut** di komputer rekan.

## Menyesuaikan dengan perusahaan Anda

- **Profil perusahaan**: pilih jenis fasilitas agar templat SLA dan status final sesuai (KEK, kawasan berikat, importir umum, PPJK).
- **SLA per jenis dan status**: misalnya Pembongkaran 2 hari, Gate In TPB/KEK 3 hari.
- **Templat tugas sendiri**: tulis instruksi baku perusahaan per status.
- **Jam ringkasan pagi**: sesuaikan dengan jam masuk kerja.
