# Cadangan Dijelaskan: Cadangan Lokal, Ekspor Vault, dan Cadangan Cloud | Travel Document Vault

> Tiga cara Travel Document Vault melindungi data Anda: cadangan lokal, Ekspor Vault (.tdvault), dan cadangan cloud terenkripsi opsional.

Source: https://traveldocumentvault.com/id/faq/backup-explained/

---

Travel Document Vault memberi Anda tiga lapisan perlindungan. Berikut penjelasan tepat tentang fungsi masing-masing, untuk siapa, dan cara memulihkan darinya.

## Tiga mekanisme, satu tujuan

Travel Document Vault menawarkan tiga lapisan perlindungan: (1) Cadangan lokal otomatis, dibuat setiap beberapa menit di perangkat Anda tanpa biaya. (2) Ekspor Vault, file cadangan terenkripsi manual gratis (.tdvault) yang dapat Anda simpan di mana pun Anda pilih. (3) Cadangan Cloud, opsi Pro yang menyimpan salinan terenkripsi ujung ke ujung di iCloud atau Google Drive milik Anda sendiri.

- **Cadangan lokal otomatis** - berjalan diam-diam di latar belakang, tidak perlu tindakan apa pun.
- **Ekspor Vault (.tdvault)** - file terenkripsi portabel yang dapat Anda simpan di mana pun Anda pilih.
- **Cadangan Cloud (Pro)** - salinan terenkripsi otomatis di iCloud atau Google Drive milik Anda sendiri.

## Sekilas

| Mekanisme | Tingkat | Otomatis? | Tempat penyimpanan | Cara memulihkan |
|---|---|---|---|---|
| **Cadangan lokal otomatis** | Gratis | Ya, setiap beberapa menit | Di perangkat Anda | Pengaturan, Pulihkan Cadangan Lokal |
| **Ekspor Vault (.tdvault)** | Gratis | Tidak, manual | Di mana pun Anda menyimpannya: Files, iCloud Drive, Google Drive, email | Pengaturan, Impor cadangan |
| **Cadangan Cloud** | Pro | Ya, otomatis | iCloud (iOS) atau Google Drive (Android) milik Anda sendiri | Pengaturan, Cadangan Cloud, Pulihkan dari Cadangan |

## Cadangan lokal otomatis

Selagi aplikasi terbuka dan Anda membuat perubahan, aplikasi diam-diam mengambil snapshot vault Anda setiap beberapa menit. Anda tidak perlu melakukan apa pun. Aplikasi menyimpan beberapa snapshot terbaru dan menghapus yang lebih lama untuk menghemat ruang penyimpanan. Ekspor vault membuat file terenkripsi portabel yang bisa Anda simpan di luar perangkat.

Di Pengaturan Anda akan melihat baris seperti *Cadangan terakhir: 2 jam lalu, 12 dokumen*. Ini menunjukkan usia snapshot terbaru dan berapa banyak dokumen yang tercakup di dalamnya. Baris ini menunjukkan snapshot lokal terbaru yang tersedia. Snapshot lokal tidak menyimpan salinan file lampiran tersendiri.

**Untuk memulihkan:** Pengaturan, lalu Pulihkan Cadangan Lokal. Pilih snapshot dari daftar dan konfirmasi. Memulihkan akan mengganti data Anda saat ini dengan isi snapshot tersebut.

Snapshot lokal ini tetap berada di perangkat Anda. Cadangan sistem (iCloud Backup, Google Backup) akan menginstal ulang aplikasi tetapi tidak dapat memulihkan snapshot ini di ponsel baru, karena cadangan ponsel biasa tidak memindahkan kunci enkripsi yang terikat pada perangkat. Ekspor vault menyertakan salinan kunci tersebut yang dienkripsi dengan kata sandi. Untuk memindahkan vault Anda, gunakan cadangan cloud (Pro) atau ekspor vault gratis.

## Ekspor Vault (.tdvault) - gratis untuk semua orang

Ekspor vault menyatukan data vault yang didukung dan lampiran yang tersedia dalam satu file terenkripsi yang dilindungi kata sandi. Setiap ekspor memiliki batas ukuran. Anda memilih tempat menyimpannya: aplikasi Files, iCloud Drive, Google Drive, atau bagikan melalui AirDrop atau email.

File ini dienkripsi di perangkat sebelum keluar dari aplikasi. Hanya kata sandi yang Anda tetapkan saat mengekspor yang dapat membukanya.

**Untuk mengekspor:** Pengaturan, Ekspor vault, lalu ikuti petunjuknya dan pilih tujuan penyimpanan.

**Untuk memulihkan:** Pengaturan, Impor cadangan, lalu pilih file .tdvault Anda, konfirmasi, dan masukkan kata sandinya. Impor menggantikan semua data yang sudah ada di ponsel tersebut. Impor bekerja pada perangkat yang didukung, termasuk lintas platform (iOS ke Android atau sebaliknya). Ekspor mempertahankan data vault yang didukung dan pengaturan tertentu. Lampiran yang hilang atau catatan yang tidak bisa dibaca mungkin tidak disertakan. Periksa dokumen dan pengingat yang diimpor. Kunci aplikasi dan pengaturan perangkat lainnya tetap lokal.

Ini gratis untuk semua pengguna. Tidak memerlukan pembelian Pro.

## Cadangan Cloud (Pro)

Cadangan Awan adalah fitur Pro. Aktifkan untuk menyimpan salinan otomatis di iCloud (iOS) atau Google Drive (Android) Anda sendiri. Aplikasi memperbaruinya saat terbuka dan terhubung. Kami tidak menerimanya. Isi dokumen dienkripsi. Metadata cadangan, seperti nama perangkat, jumlah, dan cap waktu, tidak dienkripsi.

Isi dokumen dienkripsi ujung ke ujung di perangkat Anda menggunakan AES-256-GCM sebelum diunggah. Kunci enkripsi cloud dibuka dengan kode pemulihan Anda, frasa sandi 24 karakter yang dibuat aplikasi saat Anda mengatur PIN. Simpan kode pemulihan Anda di tempat yang aman. Jika Anda kehilangan semua salinan kode dan akses ke semua perangkat yang masih bisa membuka vault, kami tidak bisa memulihkan cadangan terenkripsi.

**Untuk memulihkan:** Gunakan perangkat yang didukung pada platform yang sama dan Apple ID atau akun Google yang sama. Dengan cadangan nonaktif, buka Pengaturan, Cadangan Awan. Pilih Pulihkan dari Cadangan, pilih cadangan Anda, masukkan kode pemulihan, dan konfirmasi. Pemulihan menggantikan isi vault lokal.

Cadangan Awan bekerja secara otomatis saat aplikasi terbuka dan terhubung. Pulihkan melalui Pengaturan dengan kode pemulihan Anda, menggunakan akun cloud yang sama dan perangkat yang didukung pada platform yang sama.

## Mana yang sebaiknya saya gunakan?

Jawaban singkatnya: gunakan ketiganya.

Cadangan lokal otomatis dapat membantu memulihkan data vault terbaru saat snapshot tersedia. Cadangan ini berjalan saat aplikasi terbuka dan tidak menggantikan cadangan dokumen yang terpisah.

Ekspor Vault adalah langkah yang tepat sebelum pergantian perangkat, pembaruan besar aplikasi, atau kapan pun Anda menginginkan salinan portabel yang disimpan di tempat yang independen dari ponsel Anda. Lakukan setidaknya sekali dan simpan filenya di lokasi yang aman.

Cadangan Awan (Pro) adalah pilihan tepat jika Anda menginginkan perlindungan otomatis di luar perangkat tanpa perlu mengelola file secara manual. Saat berpindah ke ponsel yang didukung pada platform yang sama, gunakan akun cloud yang sama, pilih cadangan dalam alur pemulihan, masukkan kode pemulihan Anda, dan konfirmasi. Pemulihan menggantikan isi vault lokal.

Tidak ada satu lapisan pun yang menjadi alasan untuk melewatkan yang lain. Akun cloud bisa hilang, kode pemulihan bisa terlupakan, dan ponsel bisa dicuri sebelum cadangan lokal sempat berjalan. Kombinasi ketiganya memberi Anda perlindungan terkuat.

### Panduan terkait

- [Cara Mengekspor dan Mengimpor Vault Anda - panduan langkah demi langkah](https://traveldocumentvault.com/id/faq/export-import/)
- [Apa Itu Kode Pemulihan Saya? - panduan lengkap untuk menyimpannya dengan aman](https://traveldocumentvault.com/id/faq/recovery-code/)
- [Cadangan Cloud - cara kerja enkripsi ujung ke ujung](https://traveldocumentvault.com/id/cloud-backup/)

## Jawaban Cepat

Opsi cadangan apa saja yang ditawarkan Travel Document Vault? Travel Document Vault menawarkan tiga lapisan perlindungan: (1) Cadangan lokal otomatis, dibuat setiap beberapa menit di perangkat Anda tanpa biaya. (2) Ekspor Vault, file cadangan terenkripsi manual gratis (.tdvault) yang dapat Anda simpan di mana pun Anda pilih. (3) Cadangan Cloud, opsi Pro yang menyimpan salinan terenkripsi ujung ke ujung di iCloud atau Google Drive milik Anda sendiri. Apakah Ekspor Vault gratis? Ini gratis untuk semua pengguna. Tidak memerlukan pembelian Pro. Apa perbedaan antara cadangan lokal dan Ekspor Vault? Selagi aplikasi terbuka dan Anda membuat perubahan, aplikasi diam-diam mengambil snapshot vault Anda setiap beberapa menit. Anda tidak perlu melakukan apa pun. Aplikasi menyimpan beberapa snapshot terbaru dan menghapus yang lebih lama untuk menghemat ruang penyimpanan. Ekspor vault membuat file terenkripsi portabel yang bisa Anda simpan di luar perangkat. Apa itu cadangan cloud dan siapa yang membutuhkannya? Cadangan Awan adalah fitur Pro. Aktifkan untuk menyimpan salinan otomatis di iCloud (iOS) atau Google Drive (Android) Anda sendiri. Aplikasi memperbaruinya saat terbuka dan terhubung. Kami tidak menerimanya. Isi dokumen dienkripsi. Metadata cadangan, seperti nama perangkat, jumlah, dan cap waktu, tidak dienkripsi.

## Dapatkan Travel Document Vault

Unduh gratis. Ekspor Vault dan cadangan lokal disertakan untuk semua orang. Pro menambahkan cadangan cloud, profil tak terbatas, ekspor PDF gabungan, dan lainnya. Pembelian satu kali, tanpa langganan.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Dapatkan di Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
