# Cadangan Dijelaskan: Cadangan Lokal, Ekspor Vault, dan Cadangan Cloud | Travel Document Vault

> Perbandingan jelas tentang tiga cara Travel Document Vault melindungi data Anda: cadangan lokal otomatis, Ekspor Vault (.tdvault), dan cadangan cloud Pro opsional ke iCloud atau Google Drive.

Source: https://traveldocumentvault.com/id/faq/backup-explained/

---

Travel Document Vault memberi Anda tiga lapisan perlindungan. Berikut penjelasan tepat tentang fungsi masing-masing, untuk siapa, dan cara memulihkan darinya.

## Tiga mekanisme, satu tujuan

Dokumen Anda disimpan di perangkat Anda. Dokumen tidak pernah dikirim ke server kami. Ketiga mekanisme cadangan masing-masing memiliki tujuan berbeda, dan Anda dapat menggunakan ketiganya sekaligus.

- **Cadangan lokal otomatis** - berjalan diam-diam di latar belakang, tidak perlu tindakan apa pun.
- **Ekspor Vault (.tdvault)** - file terenkripsi portabel yang dapat Anda simpan di mana pun Anda pilih.
- **Cadangan Cloud (Pro)** - salinan terenkripsi otomatis di iCloud atau Google Drive milik Anda sendiri.

## Sekilas

| Mekanisme | Tingkat | Otomatis? | Tempat penyimpanan | Cara memulihkan |
|---|---|---|---|---|
| **Cadangan lokal otomatis** | Gratis | Ya, setiap beberapa menit | Di perangkat Anda | Pengaturan, Pulihkan Cadangan Lokal |
| **Ekspor Vault (.tdvault)** | Gratis | Tidak, manual | Di mana pun Anda menyimpannya: Files, iCloud Drive, Google Drive, email | Pengaturan, Impor Vault |
| **Cadangan Cloud** | Pro | Ya, otomatis | iCloud (iOS) atau Google Drive (Android) milik Anda sendiri | Pengaturan, Cadangan Cloud, Pulihkan dari Cadangan |

## Cadangan lokal otomatis

Selagi aplikasi terbuka dan Anda membuat perubahan, aplikasi diam-diam mengambil snapshot vault Anda setiap beberapa menit. Anda tidak perlu melakukan apa pun. Aplikasi menyimpan 10 snapshot terbaru dan menghapus yang lebih lama untuk menghemat ruang penyimpanan.

Di Pengaturan Anda akan melihat baris seperti *Cadangan terakhir: 2 jam lalu, 12 dokumen*. Ini menunjukkan usia snapshot terbaru dan berapa banyak dokumen yang tercakup di dalamnya. Baris ini ada untuk meyakinkan Anda bahwa salinan yang dapat dipulihkan selalu tersedia di dekat Anda.

**Untuk memulihkan:** Pengaturan, lalu Pulihkan Cadangan Lokal. Pilih snapshot dari daftar dan konfirmasi. Memulihkan akan mengganti data Anda saat ini dengan isi snapshot tersebut.

Snapshot lokal ini tetap berada di perangkat Anda. Cadangan sistem (iCloud Backup, Google Backup) akan menginstal ulang aplikasi tetapi tidak dapat memulihkan snapshot ini di ponsel baru, karena kunci enkripsi tidak pernah meninggalkan perangkat asli Anda. Untuk memindahkan vault Anda, gunakan cadangan cloud (Pro) atau Ekspor Vault yang gratis.

## Ekspor Vault (.tdvault) - gratis untuk semua orang

Ekspor Vault membuat satu file terenkripsi dan dilindungi kata sandi yang berisi setiap profil, dokumen, dan lampiran di vault Anda. Anda memilih tempat menyimpannya: aplikasi Files, iCloud Drive, Google Drive, atau bagikan melalui AirDrop atau email.

File ini dienkripsi di perangkat sebelum keluar dari aplikasi. Hanya kata sandi yang Anda tetapkan saat mengekspor yang dapat membukanya.

**Untuk mengekspor:** Pengaturan, Ekspor Vault, lalu ikuti petunjuknya dan pilih tujuan penyimpanan.

**Untuk memulihkan:** Pengaturan, Impor Vault, lalu pilih file .tdvault Anda dan masukkan kata sandinya. Impor bekerja di perangkat mana pun, termasuk lintas platform (iOS ke Android atau sebaliknya). Ketepatan bolak-baliknya sempurna: semua nama dokumen, tanggal, pengingat kedaluwarsa, warna, lampiran, dan catatan dipertahankan persis sama.

Ini gratis untuk semua pengguna. Tidak memerlukan langganan Pro.

## Cadangan Cloud (Pro)

Cadangan Cloud adalah opsi Pro. Setelah diaktifkan, aplikasi secara otomatis menyimpan salinan vault Anda yang terus diperbarui di akun iCloud (iOS) atau Google Drive (Android) milik Anda sendiri. Kami tidak pernah melihat data ini. Apple dan Google hanya melihat teks tersandi.

Vault dienkripsi ujung ke ujung di perangkat Anda menggunakan AES-256-GCM sebelum diunggah. Kuncinya diturunkan dari kode pemulihan Anda, frasa sandi 24 karakter yang dibuat aplikasi saat Anda mengaktifkan cadangan cloud. Simpan kode pemulihan Anda di tempat yang aman. Jika Anda kehilangannya, cadangan terenkripsi tersebut tidak dapat dipulihkan lagi.

**Untuk memulihkan:** Pada perangkat baru yang masuk dengan Apple ID atau akun Google yang sama, buka aplikasi, buka Pengaturan, Cadangan Cloud, Pulihkan dari Cadangan, lalu masukkan kode pemulihan Anda.

Cadangan Cloud adalah opsi paling praktis: bekerja otomatis setelah diaktifkan, dan memulihkan di ponsel baru hanya perlu satu ketukan ditambah kode pemulihan Anda.

## Mana yang sebaiknya saya gunakan?

Jawaban singkatnya: gunakan ketiganya.

Cadangan lokal otomatis melindungi Anda dari penghapusan tidak sengaja atau masalah aplikasi saat ini juga, tanpa Anda perlu memikirkannya. Cadangan ini selalu aktif.

Ekspor Vault adalah langkah yang tepat sebelum pergantian perangkat, pembaruan besar aplikasi, atau kapan pun Anda menginginkan salinan portabel yang disimpan di tempat yang independen dari ponsel Anda. Lakukan setidaknya sekali dan simpan filenya di lokasi yang aman.

Cadangan Cloud (Pro) adalah pilihan tepat jika Anda menginginkan perlindungan otomatis di luar perangkat tanpa perlu mengelola file secara manual. Ini sangat berguna saat berpindah ke ponsel baru: instal aplikasi, masukkan kode pemulihan Anda, dan vault Anda dipulihkan dalam hitungan detik.

Tidak ada satu lapisan pun yang menjadi alasan untuk melewatkan yang lain. Akun cloud bisa hilang, kode pemulihan bisa terlupakan, dan ponsel bisa dicuri sebelum cadangan lokal sempat berjalan. Kombinasi ketiganya memberi Anda perlindungan terkuat.

### Panduan terkait

- [Cara Mengekspor dan Mengimpor Vault Anda - panduan langkah demi langkah](https://traveldocumentvault.com/id/faq/export-import/)
- [Apa Itu Kode Pemulihan Saya? - panduan lengkap untuk menyimpannya dengan aman](https://traveldocumentvault.com/id/faq/recovery-code/)
- [Cadangan Cloud - cara kerja enkripsi ujung ke ujung](https://traveldocumentvault.com/id/cloud-backup/)

## Dapatkan Travel Document Vault

Unduh gratis. Ekspor Vault dan cadangan lokal disertakan untuk semua orang. Pro menambahkan cadangan cloud, profil tak terbatas, ekspor PDF gabungan, dan lainnya. Pembelian satu kali, tanpa langganan.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877)

![Dapatkan di Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
