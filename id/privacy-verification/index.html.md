# Verifikasi Privasi | Travel Document Vault

> Klaim privasi yang dapat diverifikasi untuk Travel Document Vault. Tanpa pelacak, tanpa pengumpulan data. Disimpan di perangkat secara bawaan - tidak ada cloud TDV, tidak memerlukan akun. Lihat setiap izin yang kami minta dan alasannya.

Source: https://traveldocumentvault.com/id/privacy-verification/

---

## Klaim privasi kami

### Tanpa pelacak

Tidak ada SDK analitik, tidak ada perpustakaan iklan, tidak ada piksel pelacak di dalam aplikasi.

### Tanpa pengumpulan data keluar

Aplikasi tidak membuat koneksi keluar secara bawaan. Bekerja sepenuhnya offline. Satu-satunya penggunaan jaringan adalah pencadangan cloud Pro opsional, yang disinkronkan ke iCloud atau Google Drive Anda sendiri, tidak pernah ke server kami.

### Disimpan di perangkat secara bawaan

Semua dokumen, pemindaian, dan data tetap berada di perangkat Anda. Tidak ada cloud TDV, tidak ada server TDV, tidak ada backend TDV. Pengguna Pro dapat secara opsional mencadangkan brankas terenkripsi mereka ke akun iCloud atau Google Drive mereka sendiri, hanya mereka yang memegang kunci pemulihan.

### Enkripsi AES-256-GCM

Setiap dokumen dienkripsi sebelum menyentuh penyimpanan perangkat Anda.

## Verifikasi

Anda tidak perlu mempercayai kami. Anda dapat mengonfirmasi setiap klaim di atas dengan alat gratis yang tersedia untuk umum.

### 1. Uji lalu lintas jaringan

Instal pemantau jaringan seperti **mitmproxy** (gratis, sumber terbuka), **Wireshark** (gratis, sumber terbuka), atau **Charles Proxy**. Buka Travel Document Vault, pindai dokumen, telusuri brankas Anda, dan atur pengingat. Anda seharusnya tidak melihat dokumen, hasil pindai, tanggal kedaluwarsa, atau isi brankas Anda dikirim ke Travel Document Vault. Lalu lintas jaringan seharusnya terbatas pada fitur tertentu: pelaporan kerusakan Sentry opsional, pemeriksaan pembelian App Store atau Google Play, pencadangan cloud opsional ke akun iCloud atau Google Drive milik Anda sendiri, dan pemeriksaan perbaikan bug manual yang dijelaskan di bawah ini.

Pengaturan memiliki tombol **Check for Updates**. Ini adalah pemeriksaan manual, tidak pernah otomatis — hanya berjalan saat Anda sendiri menekannya, tidak pernah di latar belakang dan tidak pernah dengan sendirinya. Pemeriksaan menghubungi **updates.traveldocumentvault.com** — server pembaruan milik kami sendiri, dioperasikan oleh kami di Google Cloud, yang menyajikan file pembaruan yang ditandatangani secara kriptografi dari bucket penyimpanan. Kami tidak mencatat pemeriksaan: log permintaan dinonaktifkan di sisi kami, sehingga tidak ada alamat IP yang disimpan. Setiap pembaruan ditandatangani dengan kunci yang hanya kami miliki, dan aplikasi menolak apa pun yang tandatangannya tidak sesuai dengan sertifikat yang tertanam di dalamnya. Ketukan yang sama juga memeriksa apakah versi aplikasi yang lebih baru tersedia di **App Store** atau **Google Play**. Fitur ini ada agar perbaikan bug tertentu bisa sampai ke Anda lebih cepat daripada menunggu rilis penuh baru di App Store atau Google Play, berguna untuk perbaikan mendesak, tergantung sifat perbaikannya. Berlaku aturan yang sama seperti bagian lain di halaman ini: tidak ada permintaan jaringan tanpa Anda yang memintanya.

### 2. Laporan Privasi Aplikasi iOS

Di iPhone, buka **Pengaturan > Privasi & Keamanan > Laporan Privasi Aplikasi**. Fitur bawaan Apple ini menunjukkan aplikasi mana yang telah menghubungi domain jaringan. Travel Document Vault tidak mengirim dokumen, hasil pindai, tanggal kedaluwarsa, atau isi brankas Anda kepada kami. Jika Anda telah mengaktifkan pencadangan cloud Pro, Anda akan melihat koneksi ke domain iCloud Apple, itu adalah cadangan Anda sendiri yang disinkronkan ke akun iCloud Anda sendiri.

### 3. Android - cara memeriksa privasi Anda

Android tidak memiliki satu laporan privasi bawaan seperti iPhone. Ada dua cara sederhana untuk memeriksanya sendiri: lihat bagian **Data Safety** milik aplikasi ini di halaman Google Play-nya (yang menyatakan dengan jelas apa yang dikumpulkan, apa yang dibagikan, bahwa data Anda dienkripsi saat transit, dan bahwa data tersebut tidak dapat dihapus), atau gunakan pemantau jaringan seperti yang dijelaskan pada langkah 1 di atas.

Jika Anda telah mengaktifkan pencadangan cloud, Anda mungkin melihat sejumlah aktivitas menuju server Google (alamat web yang berakhiran **googleapis.com**). Itu wajar dan aman: yang dikirim hanyalah file cadangan Anda yang terkunci dan terenkripsi beserta pemeriksaan masuk, langsung ke akun Google Drive **milik Anda sendiri**, akun yang sama yang sudah Anda gunakan untuk foto atau Gmail. Kami tidak pernah melihatnya, menerimanya, atau menyimpan salinannya di mana pun. Hanya Anda yang memiliki kunci pemulihan yang dapat membukanya.

### 4. Label privasi App Store dan Google Play

Apple dan Google mengharuskan pengembang untuk mendeklarasikan data apa yang dikumpulkan aplikasi mereka. Periksa daftar App Store atau Google Play untuk Travel Document Vault. Deklarasi kami: **tidak ada data yang dikumpulkan**.

## Cara kami menguji keamanan aplikasi

Kami tidak sekadar mengklaim bahwa aplikasi ini aman. Kami memeriksanya, menggunakan alat terbuka dan standar publik yang sama seperti yang digunakan industri keamanan.

### Kami menilai aplikasi berdasarkan standar publik

Kami mengevaluasi Travel Document Vault berdasarkan [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), daftar acuan industri tentang bagaimana seharusnya aplikasi seluler menyimpan data, menggunakan enkripsi, mengunci layar dengan Face ID atau PIN, dan menangani tautan dari aplikasi lain. Siapa pun bisa membaca standar ini dan membandingkannya dengan perilaku aplikasi yang sebenarnya.

### Kami memindai kode kami sendiri

Sebelum sebuah build dirilis, kami menjalankan analisis statis pada kode kami dengan [Semgrep](https://semgrep.dev/), alat sumber terbuka yang menandai pola tidak aman seperti enkripsi lemah atau penanganan data yang tidak tepat, sehingga kami bisa memperbaikinya sejak dini.

### Kami memindai aplikasi yang sudah dibangun

Kami juga meninjau build rilis kami dengan alat pemindai keamanan aplikasi seluler, memeriksa bagaimana build tersebut menyimpan data, apa saja yang bisa diaksesnya, dan bagaimana build itu ditandatangani.

### Menemukan masalah? Beri tahu kami

Jika Anda menemukan masalah keamanan, kirim email ke [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Detail prosedur pengungkapan kami dipublikasikan di [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Ini adalah penilaian kami sendiri terhadap sebuah standar publik, bukan audit independen atau sertifikasi. Terakhir ditinjau Juli 2026.

## Setiap izin dijelaskan

Aplikasi Android mendeklarasikan izin dalam manifes mereka. Beberapa diminta oleh aplikasi secara langsung, dan beberapa diwariskan dari perpustakaan yang bergantung pada aplikasi. Berikut adalah rincian transparan setiap izin, dikelompokkan berdasarkan tujuan.

### Izin yang digunakan aplikasi secara langsung

### Kamera

iOS + Android

**Alasan kami meminta:** Untuk memindai halaman paspor, visa, atau dokumen perjalanan Anda langsung dari aplikasi.

**Yang tidak pernah kami lakukan:** Foto disimpan secara lokal di perangkat Anda. Tidak pernah diunggah, dikirim, atau dikirim ke mana pun.

### Perpustakaan Foto / Foto / Penyimpanan

iOS + Android

**Alasan kami meminta:** Agar Anda dapat mengimpor foto dokumen yang ada, dan agar aplikasi dapat mengekspor file cadangan terenkripsi (.tdvault) saat Anda memintanya. Pada versi Android yang lebih lama, READ_EXTERNAL_STORAGE dan WRITE_EXTERNAL_STORAGE diperlukan. Pada Android 13+, READ_MEDIA_IMAGES digunakan sebagai gantinya.

**Yang tidak pernah kami lakukan:** Aplikasi hanya membaca gambar yang Anda pilih. Tidak pernah memindai, mengindeks, atau menjelajahi perpustakaan foto atau sistem file Anda.

### Face ID / Touch ID / Buka Kunci Biometrik

iOS + Android

**Alasan kami meminta:** Untuk mengunci dan membuka kunci aplikasi sehingga hanya Anda yang dapat mengakses dokumen Anda. Pada Android 6-8, USE_FINGERPRINT digunakan. Pada Android 9+, USE_BIOMETRIC digunakan sebagai gantinya.

**Yang tidak pernah kami lakukan:** Data biometrik Anda tidak pernah meninggalkan perangkat Anda. Sistem operasi menangani autentikasi dan mengembalikan hanya hasil lulus/gagal ke aplikasi.

### Notifikasi, Getaran, Boot Selesai, Wake Lock

Android

**Alasan kami meminta:** Untuk mengirimkan pengingat kedaluwarsa on-device yang Anda atur sendiri. RECEIVE_BOOT_COMPLETED menjadwalkan ulang pengingat Anda setelah restart perangkat. WAKE_LOCK memastikan pengingat mengirim dengan andal bahkan ketika telepon tidur. VIBRATE menyertai pengiriman notifikasi.

**Yang tidak pernah kami lakukan:** Tidak ada notifikasi pemasaran, promosi, atau pihak ketiga yang pernah dikirim. Pengingat dijadwalkan sepenuhnya di perangkat Anda.

### Internet, Status Jaringan, Status Wi-Fi

Android

**Mengapa ini muncul:** Izin ini diperlukan untuk fitur yang menggunakan jaringan: **pelaporan kerusakan Sentry** (opt-in, dinonaktifkan secara bawaan), **penagihan App Store atau Google Play** untuk pembelian upgrade Pro, **pencadangan cloud Pro** (opsional), yang menyinkronkan brankas terenkripsi Anda ke iCloud atau Google Drive milik Anda sendiri, dan tombol manual **Check for Updates** di Pengaturan (hanya berjalan saat Anda menekannya). ACCESS_NETWORK_STATE dan ACCESS_WIFI_STATE memungkinkan fitur-fitur ini memeriksa apakah koneksi tersedia sebelum mencoba mengirim.

**Yang tidak kami lakukan:** Aplikasi tidak mengunggah dokumen, hasil pindai, tanggal kedaluwarsa, foto, atau isi brankas Anda ke Travel Document Vault. Aplikasi tetap berfungsi sepenuhnya offline untuk penyimpanan dokumen dan pengingat normal.

### Izin yang diwariskan dari perpustakaan (tidak digunakan oleh aplikasi)

Aplikasi Android menyertakan perpustakaan pihak ketiga untuk fitur seperti pembelian dalam aplikasi, pelaporan kerusakan, dan notifikasi. Perpustakaan ini mendeklarasikan izin dalam manifes mereka sendiri, yang digabungkan ke dalam aplikasi akhir. Izin di bawah dideklarasikan oleh ketergantungan, bukan oleh kode kami. Aplikasi tidak pernah memanggil API di balik mereka.

### Rekam Audio

Diwariskan, tidak digunakan

**Alasan ini muncul:** Izin ini dideklarasikan oleh perpustakaan pihak ketiga yang disertakan dalam pembuatan (biasanya plugin kamera atau media). Muncul dalam manifes Android tetapi tidak pernah dipicu oleh kode kami. Aplikasi tidak merekam audio atau video dalam keadaan apa pun.

**Bagaimana Anda dapat mengkonfirmasi:** Aplikasi tidak akan pernah meminta akses mikrofon. Jika Anda memeriksa pengelola izin perangkat Anda, Anda akan melihat bahwa perekaman audio tidak diberikan kepada Travel Document Vault.

### Jendela Peringatan Sistem

Diwariskan

Dideklarasikan oleh kerangka kerja Flutter untuk lapisan pengembangan dan debug. Izin ini tidak digunakan dalam build rilis aplikasi dan tidak berpengaruh pada privasi Anda.

### Deteksi Tangkapan Layar

Diwariskan

Dideklarasikan oleh ketergantungan kerangka kerja. Aplikasi tidak mendeteksi, memblokir, atau merespons tangkapan layar. Izin ini tidak berpengaruh pada penggunaan Anda.

### Izin penghitungan badge

Diwariskan

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, dan PROVIDER_INSERT_BADGE dideklarasikan oleh perpustakaan notifikasi untuk menampilkan jumlah badge yang belum dibaca pada ikon layar utama Anda di seluruh produsen Android yang berbeda (Samsung, Huawei, Xiaomi, dll). Mereka hanya mempengaruhi angka yang ditampilkan pada ikon aplikasi.

### Penagihan, Periksa Lisensi, Instal Rujukan

Google Play

Dideklarasikan oleh perpustakaan Penagihan Google Play (untuk pembelian upgrade Pro) dan perpustakaan Rujukan Instalasi Bermain. Ini adalah persyaratan Google Play Store standar dan tidak mengakses data pribadi apa pun.

### Unduh Tanpa Notifikasi

Diwariskan

Dideklarasikan oleh ketergantungan kerangka kerja. Aplikasi tidak mendownload file di latar belakang.

### Izin yang tidak kami minta

Ini adalah izin umum yang diminta banyak aplikasi. Kami tidak meminta satu pun dari ini, dan mereka tidak muncul dalam manifes kami.

**Lokasi** - tidak ada GPS, tidak ada geofencing, tidak ada pelacakan **Kontak** - tidak ada akses ke buku alamat Anda **Bluetooth** - tidak ada jaringan lokal atau pemindaian perangkat **Kalender** - pengingat ditangani on-device, bukan melalui kalender Anda

Masih memiliki pertanyaan? Baca [Kebijakan Privasi](https://traveldocumentvault.com/privacy-policy/) lengkap kami atau periksa [FAQ](https://traveldocumentvault.com/id/faq/).
