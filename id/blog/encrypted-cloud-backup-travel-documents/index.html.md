# Cadangan Cloud Terenkripsi untuk Dokumen Perjalanan: Siapa yang Memegang Kuncinya

> Apa arti sebenarnya cadangan terenkripsi untuk pindaian paspor, dan mengapa kode pemulihan Anda tidak bisa direset siapa pun.

Source: https://traveldocumentvault.com/id/blog/encrypted-cloud-backup-travel-documents/

---

![Orang tua dan anak duduk bersama di sofa saat senja, memandangi ponsel dan kunci emas kecil yang tergeletak di meja di samping paspor, sementara awan di atasnya hanya berisi coretan acak di balik gembok](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Poin Penting

- **"Cadangan terenkripsi" baru berarti sesuatu setelah Anda tahu siapa yang memegang kuncinya.** Jika perusahaan bisa membaca dokumen Anda, enkripsi itu hanya menjaga dokumen dari orang asing, bukan dari perusahaan itu sendiri.
- Cadangan yang dienkripsi di ponsel Anda sebelum diunggah akan sampai ke cloud sebagai data yang tidak bisa dibaca. Penyedia penyimpanan hanya memegang ciphertext, bukan paspor Anda.
- **Tanpa akun berarti tanpa reset kata sandi.** Kehilangan kode pemulihan berarti cadangan tidak bisa dibuka oleh siapa pun, termasuk kami. Itu adalah kompromi yang memang disengaja.
- Tulis kode itu sebelum Anda bergantung pada cadangan, simpan jauh dari ponsel, dan baca ulang sekali untuk memastikan tulisannya masih jelas terbaca.
- Cadangan bawaan sistem ponsel memasang ulang aplikasi tetapi tidak bisa mengembalikan dokumen Anda, karena kunci enkripsi tidak pernah meninggalkan ponsel lama.

Anda sudah memindai empat paspor, dua visa, dan akta lahir anak-anak ke dalam aplikasi yang menyimpan semuanya di ponsel Anda. Bagus. Lalu muncul kekhawatiran yang jelas: bagaimana kalau ponsel itu tercebur ke laut, atau diambil orang dari meja kafe di Lisbon.

Jawabannya adalah cadangan. Bagian yang merepotkan adalah hampir semua aplikasi memakai frasa "cadangan terenkripsi", dan hampir tidak ada yang memaknainya dengan cara yang sama. Artikel ini menjelaskan apa arti sebenarnya dari kata-kata itu, dan apa konsekuensinya ketika sebuah perusahaan benar-benar tidak bisa membaca data Anda. Artikel ini ditutup dengan rutinitas singkat untuk seminggu sebelum bepergian, supaya ponsel yang hilang tetap sekadar merepotkan, bukan menjadi bencana.

## Apa Sebenarnya Arti "Cadangan Terenkripsi"

Enkripsi mengacak sebuah file sehingga hanya kunci yang cocok yang bisa mengubahnya kembali menjadi sesuatu yang bisa dibaca. Sejauh itu sudah standar. Bagian yang menentukan apakah enkripsi benar-benar melindungi Anda adalah di mana proses pengacakan itu terjadi, dan siapa yang akhirnya memegang kuncinya.

Ada dua model yang sama-sama dijual sebagai cadangan terenkripsi, dan keduanya bekerja dengan sangat berbeda.

Model pertama mengirim file ke server perusahaan melalui koneksi terenkripsi, lalu menyimpannya dalam keadaan terenkripsi saat disimpan. Kedua pernyataan itu benar, dan keduanya terdengar meyakinkan. Tetapi perusahaan tetap memegang kuncinya, sehingga bisa mendekripsi dokumen Anda kapan pun diperlukan: untuk menjalankan sebuah fitur, untuk menjawab permintaan hukum, atau karena seseorang di dalam perusahaan itu membuat kesalahan. Pindaian paspor Anda tetap bisa dibaca di ujung sana.

Model kedua mengacak file di ponsel Anda sebelum dikirim ke mana pun, menggunakan kunci yang diturunkan dari sesuatu yang hanya Anda miliki. Yang sampai ke penyimpanan hanyalah blok data acak, dan tidak ada yang di ujung sana bisa membacanya, karena tidak ada yang memegang kuncinya di sana. Model ini biasanya disebut terenkripsi end-to-end, atau zero-knowledge.

Jadi pertanyaan yang layak diajukan pada aplikasi mana pun cukup singkat: **siapa yang memegang kuncinya?** Semua hal lain dalam materi pemasarannya mengikuti jawaban itu.

## Kode Pemulihan, dan Mengapa Tidak Ada yang Bisa Mereset-nya

Berikut bagian yang dilewatkan sebagian besar artikel, dan layak dikatakan dengan jelas: Travel Document Vault tidak punya akun. Anda tidak pernah memberi kami alamat email, kami tidak pernah membuatkan Anda kata sandi, dan tidak ada catatan tentang Anda di server mana pun yang kami jalankan. Saat Anda mengaktifkan [cadangan cloud](https://traveldocumentvault.com/id/cloud-backup/), aplikasi membuat kode pemulihan 24 karakter dan menurunkan kunci enkripsi darinya. Vault terenkripsi itu kemudian dikirim ke **iCloud Anda sendiri di iPhone dan iPad, atau Google Drive Anda sendiri di Android**, bukan ke kami.

Konsekuensinya tidak terelakkan. **Jika Anda kehilangan kode pemulihan itu, cadangan tidak akan pernah bisa dibuka lagi.** Bukan oleh Anda, bukan oleh Apple atau Google, dan bukan oleh kami. Tidak ada tautan reset, karena tidak ada akun untuk menautkannya. Tidak ada tiket dukungan yang bisa memulihkannya, karena kami memang tidak pernah memegangnya dan sama sekali tidak bisa menebaknya.

Itu terdengar keras kalau dituliskan, dan lebih baik jujur soal ini daripada menguburnya di halaman pengaturan. Ini kompromi yang sama seperti kunci rumah: gembok baru berguna karena tidak ada tukang kunci mana pun di dunia yang menyimpan cadangannya, dan itulah tepatnya alasan mengapa kehilangan kunci Anda menjadi masalah Anda sendiri. Perusahaan yang bisa memulihkan dokumen Anda setelah Anda lupa segalanya adalah perusahaan yang sebenarnya bisa membacanya sejak awal.

Jadi perlakukan kode itu sebagai satu hal yang harus benar-benar Anda urus dengan baik:

- Simpan kode itu sebelum Anda mengandalkan cadangan, bukan sesudahnya.
- Simpan di tempat yang tidak ikut hilang bersama ponsel. Pengelola kata sandi di perangkat lain bisa dipakai. Begitu juga kertas di laci tempat akta lahir disimpan.
- Baca ulang sekali dari mana pun Anda menyimpannya. Tulisan tangan yang jelas saat ditulis punya kebiasaan menjadi ambigu saat keadaan darurat.
- Dua salinan di dua tempat lebih baik daripada satu salinan yang sempurna.

## Apakah Cadangan Cloud Aman untuk Pindaian Paspor?

Semuanya sepenuhnya tergantung pada bentuk file yang sampai ke cloud, dan itu pertanyaan tentang aplikasinya, bukan tentang cloud itu sendiri.

Foto paspor Anda di galeri foto biasa atau folder yang tersinkron akan sampai dalam bentuk yang bisa dibaca. Foto itu tersimpan di akun yang dilindungi kata sandi yang mungkin sudah Anda pakai berulang kali di tempat lain. Foto itu diindeks dan dibuat thumbnail-nya, dan siapa pun yang berhasil masuk ke akun itu akan melihat salinan bersih dari halaman identitas Anda. Kami sudah membahas seperti apa risiko ini sebenarnya dalam [menyimpan paspor di Google Foto](https://traveldocumentvault.com/id/blog/is-it-safe-to-store-passport-in-google-photos/). Itu risiko yang nyata, dan itulah kondisi yang dijalani sebagian besar keluarga tanpa pernah benar-benar memilihnya.

Vault yang dienkripsi di perangkat sebelum diunggah akan sampai sebagai ciphertext. Orang yang berhasil membobol akun cloud hanya menemukan file yang tidak bisa dibukanya. Perlindungan itu melekat pada file itu sendiri, bukan bergantung pada akun tempat file itu berlabuh.

Itu sebabnya versi jujur dari pertanyaan "apakah cloud aman" adalah: cloud itu hanya alamat pengiriman, bukan model keamanan. Yang penting adalah kondisi file itu saat sampai di sana. [Perbandingan tempat-tempat utama orang menyimpan pindaian paspor](https://traveldocumentvault.com/id/blog/safest-way-to-store-passport-digitally/) kami membahas kelebihan dan kekurangan masing-masing.

| Yang Anda cadangkan | Kondisi saat tiba | Siapa yang bisa membacanya | Jika akun dibobol |
|---|---|---|---|
| **Foto paspor Anda di galeri foto** | Gambar yang bisa dibaca | Anda, penyedia layanan, siapa pun yang punya akses akun | Halaman identitas lengkap terekspos |
| **PDF di folder drive yang tersinkron** | File yang bisa dibaca | Anda, penyedia layanan, siapa pun yang punya akses akun | Dokumen terekspos dan bisa diunduh |
| **Cadangan aplikasi tempat perusahaan memegang kuncinya** | Terenkripsi saat disimpan | Anda dan perusahaan | Tergantung cara perusahaan menangani kuncinya sendiri |
| **Cadangan yang dienkripsi di perangkat Anda terlebih dahulu** | Ciphertext | Hanya siapa pun yang memegang kode pemulihan | Penyerang hanya mendapat file yang tidak bisa dibaca |

## Apa yang Masuk ke Cadangan, dan Apa yang Tetap Tertinggal

Cadangan membawa salinan terenkripsi dari vault: setiap profil, setiap pindaian, tanggal kedaluwarsa, pengingat, catatan, dan lampiran. Pulihkan cadangan itu, dan aplikasi akan tampak seperti saat Anda meninggalkannya.

Ada tiga hal yang sengaja tetap tinggal di ponsel, dan kode pemulihan menjadi yang pertama: kode itu tidak pernah meninggalkan perangkat, dan itulah inti dari desainnya. Kunci aplikasi Anda juga tetap lokal, sehingga Face ID, Touch ID, atau PIN Anda menjaga orang lain agar tidak bisa masuk ke ponsel, sementara enkripsi menjaga mereka agar tidak bisa membuka filenya. Dan snapshot lokal otomatis yang dibuat aplikasi saat Anda bekerja juga hanya tetap ada di perangkat.

Poin terakhir ini yang sering membuat orang terkejut, jadi ini versi terus terangnya. **Cadangan bawaan sistem ponsel memasang ulang aplikasi, tetapi tidak bisa memulihkan dokumen Anda.** Kunci enkripsi tidak pernah meninggalkan ponsel lama, sehingga ponsel baru tidak punya apa pun untuk mendekripsinya. Jika Anda ingin vault Anda bertahan melampaui usia ponsel, Anda perlu mengaktifkan cadangan cloud atau menyimpan file ekspor di suatu tempat.

## Memulihkan di Ponsel Baru

Proses pemulihannya singkat, dan itulah tujuan dari melakukan persiapan lebih awal.

Pasang aplikasi di ponsel baru dan masuk dengan akun iCloud atau Google yang sama seperti sebelumnya. Buka Settings, lalu Cloud Backup, lalu Restore from Backup, dan masukkan kode pemulihan Anda. Vault akan kembali lengkap dengan profil, tanggal kedaluwarsa, dan pengingatnya.

Aplikasi juga memeriksa sebelum menulis apa pun. Jika cadangan cloud mendeteksi ada cadangan yang sudah ada di akun itu, aplikasi akan meminta Anda memilih antara memulihkan atau memulai dari awal. Ponsel baru tidak bisa diam-diam menimpa apa yang sudah ada di sana.

### Berpindah Antara iPhone dan Android

Cadangan cloud tetap berada di satu platform, karena menggunakan iCloud Anda sendiri di perangkat Apple dan Google Drive Anda sendiri di Android. Berpindah dari satu ke yang lain memerlukan jalur yang berbeda.

Gunakan Vault Export. Settings, Export Vault akan menghasilkan satu file yang dilindungi kata sandi berisi semuanya, dan Anda yang menentukan ke mana file itu pergi: aplikasi Files, sebuah drive, atau email ke diri sendiri. Di ponsel baru, Settings, Import Vault akan membacanya kembali. Fitur ini bekerja ke dua arah dan menjaga nama, tanggal, pengingat, warna, catatan, dan lampiran tetap seperti semula.

File ekspor itu juga menjadi jawaban bagi siapa pun yang ingin memiliki salinan yang sama sekali tidak bergantung pada akun cloud. Menyimpannya di sebuah drive di rumah adalah hal yang masuk akal, terlepas dari ponsel apa pun yang Anda bawa.

## Rutinitas Cadangan yang Tetap Berguna Meski Ponsel Hilang

Dua puluh menit, sekali saja, sebelum perjalanan berikutnya:

- Aktifkan cadangan terenkripsi dan biarkan unggahan pertama selesai saat Anda masih di WiFi rumah.
- Tulis kode pemulihan di tempat yang bukan ponsel, lalu baca ulang dari salinan itu untuk memastikan tulisannya masih jelas terbaca.
- Buat salinan kedua dari kode itu dan simpan di tempat yang berbeda dari salinan pertama.
- Ekspor vault sekali dan simpan filenya di tempat yang Anda kendalikan sendiri, sebagai jalur cadangan yang tidak bergantung pada akun cloud mana pun.
- Periksa apakah aplikasi menampilkan cadangan terbaru sebelum Anda terbang, sama seperti Anda memeriksa paspor sudah ada di dalam tas.

Tidak ada yang dramatis dari semua ini, dan justru itulah intinya. Keluarga yang bisa menghadapi ponsel yang dicuri di luar negeri dengan baik hampir tidak pernah mereka yang bereaksi cemerlang saat itu terjadi. Mereka adalah yang menghabiskan dua puluh menit yang biasa-biasa saja di meja dapur dua minggu sebelumnya.

Satu catatan terakhir soal ekspektasi. Cadangan adalah lapisan keamanan, dan tidak menjamin apa pun: akun cloud bisa terkunci, kode bisa terlupakan, layanan penyimpanan bisa mengalami gangguan. Untuk dokumen yang benar-benar penting, simpan juga sesuatu yang independen, entah itu salinan cetak di laci rumah atau ekspor kedua di sebuah drive.

**Sebelum Anda mengandalkan ini:** ini blog, bukan sumber resmi. Aturan dan detailnya berubah, dan situasi Anda bisa berbeda. Kami memeriksa apa yang kami terbitkan, dan tetap bisa keliru atau ketinggalan zaman. Kalau ada hal di sini yang penting bagi rencana Anda, pastikan dulu ke instansi yang menanganinya sebelum bertindak.

## Pertanyaan yang Sering Diajukan

### Apa sebenarnya arti cadangan terenkripsi?

Artinya salinan diacak di ponsel Anda sebelum dikirim ke mana pun, menggunakan kunci yang tetap ada pada Anda. Siapa pun yang kemudian menyimpan file itu hanya memegang blok data yang tidak bisa dibaca, bukan paspor Anda. Kata itu baru berarti sesuatu kalau Anda bisa menjawab pertanyaan lanjutannya: siapa yang memegang kuncinya? Jika perusahaan pembuat aplikasi bisa membaca dokumen Anda, enkripsi itu melindungi dokumen dari pihak luar, bukan dari perusahaan itu sendiri.

### Apa yang terjadi jika saya kehilangan kunci cadangan saya?

Cadangan itu tetap terenkripsi dan tidak ada yang bisa membukanya, termasuk kami. Tidak ada akun, tidak ada reset kata sandi, dan tidak ada jalur dukungan yang bisa memulihkannya, karena kode pemulihan memang tidak pernah sampai ke kami sejak awal. Itu adalah kompromi yang sengaja dipilih, agar tidak ada pihak lain pun yang bisa membaca dokumen Anda. Tulis kode itu sebelum Anda mengandalkan cadangan, simpan di tempat yang terpisah dari ponsel Anda, dan baca ulang sekali untuk memastikan Anda benar-benar bisa membacanya.

### Apakah cadangan cloud aman untuk pindaian paspor?

Semuanya tergantung pada bentuk file yang sampai ke cloud. Foto paspor Anda di galeri foto biasa atau folder sinkronisasi file akan sampai dalam bentuk yang bisa dibaca, dan siapa pun yang berhasil masuk ke akun itu bisa membacanya. Cadangan yang dienkripsi di perangkat sebelum diunggah akan sampai sebagai ciphertext, sehingga penyedia penyimpanan hanya memegang sesuatu yang tidak bisa dibukanya. Travel Document Vault mengenkripsi vault di ponsel Anda dengan AES-256-GCM dan mengirim file terenkripsi itu ke iCloud atau Google Drive milik Anda sendiri, bukan ke server perusahaan.

### Bisakah saya memulihkan dokumen saya di ponsel yang berbeda?

Bisa. Pasang aplikasi di ponsel baru, masuk dengan akun iCloud atau Google yang sama, lalu buka Settings, Cloud Backup, Restore from Backup, dan masukkan kode pemulihan Anda. Profil, dokumen, tanggal kedaluwarsa, dan pengingat Anda akan kembali seperti semula. Perlu diketahui, cadangan bawaan sistem ponsel tidak melakukan ini dengan sendirinya: cadangan itu memasang ulang aplikasi tetapi tidak bisa mendekripsi dokumen Anda, karena kunci enkripsi tidak pernah meninggalkan ponsel asli Anda.

### Apakah cadangan ini berfungsi antara iPhone dan Android?

Cadangan cloud sendiri tetap berada di satu platform, karena menggunakan iCloud Anda sendiri di iPhone dan iPad, serta Google Drive Anda sendiri di Android. Untuk berpindah di antara keduanya, gunakan Vault Export: Settings, Export Vault akan membuat satu file .tdvault yang dilindungi kata sandi, yang bisa Anda kirim ke diri sendiri dengan cara apa pun yang Anda suka, lalu Settings, Import Vault di ponsel baru akan membacanya kembali. Import berfungsi lintas platform ke dua arah dan menjaga nama, tanggal, pengingat, catatan, dan lampiran tetap utuh.

### Apa yang disimpan dalam cadangan dan apa yang tetap ada di perangkat?

Cadangan menyimpan salinan terenkripsi dari vault Anda: setiap profil, pindaian dokumen, tanggal kedaluwarsa, pengingat, dan catatan. Kode pemulihan Anda tidak termasuk di dalamnya, dan tidak pernah meninggalkan perangkat Anda. Begitu juga dengan kunci aplikasi Anda, sehingga Face ID, Touch ID, atau PIN Anda melindungi ponsel, sementara enkripsi melindungi filenya. Snapshot lokal otomatis juga hanya tetap ada di perangkat, itulah sebabnya snapshot tidak bisa mengembalikan vault Anda di ponsel pengganti.

## Artikel Terkait

[Privasi & Keamanan7 menit bacaiCloud vs Google Photos vs aplikasi terenkripsi: cara paling aman menyimpan paspor Anda](https://traveldocumentvault.com/id/blog/safest-way-to-store-passport-digitally/)

[Privasi7 menit bacaApakah Aman Menyimpan Paspor di Google Foto? Ini yang Perlu Anda Ketahui](https://traveldocumentvault.com/id/blog/is-it-safe-to-store-passport-in-google-photos/)
