# Encrypted Cloud Backup | Your Cloud. Your Key. | Travel Document Vault

> Encrypted backup (Pro) to your own iCloud or Google Drive. Restore with your recovery code, which we do not hold. Your saved vault works offline.

Source: https://traveldocumentvault.com/cloud-backup/

---

## How Encrypted Backup Works

Your document contents are encrypted before cloud upload.

1

### Encrypt On-Device

Your document contents are encrypted on your device using AES-256-GCM. PBKDF2 with 600,000 iterations derives the key used to unlock your vault's randomly generated master key.

AES-256-GCM encrypts your document contents. The app does not upload your recovery code to us, Apple or Google. You should still protect your phone with a strong passcode and the app's PIN lock - encryption protects the file, your passcode protects the phone.

2

### Upload to Your Cloud

The encrypted backup goes to your personal iCloud or Google Drive account, not our servers - it's your cloud and your account.

On iPhone and iPad you can see your backup files in iCloud Drive. On Android they sit in a hidden app folder in your own Google Drive. You are in complete control.

3

### Only You Hold the Key

Your recovery code unlocks your cloud encryption keys. The app does not upload the code to us, Apple, or Google; keep any copies you make private.

Store your recovery code somewhere safe, because without it even we cannot recover your data - this is intentional, not a bug.

4

### Restore on a New Device

Switch to a new phone? Restore your backup with your recovery code. Same for a new iPad or another supported device on the same platform using the same cloud account.

On the new device, open Settings, Cloud Backup and choose Restore from Backup. Select your backup, enter your recovery code and confirm. Restoring replaces the local vault.

## How It Protects Your Data

Multiple safety layers stand between an accidental tap and lost data.

**Indefinite trash retention.** Deleted documents stay in Recently Deleted as long as cloud backup is on. No automatic 30-day purge.

**Delete Forever requires confirmation.** A separate prompt warns you that the document will also be removed from your cloud backup.

**Choose your history window.** Pick how far back your daily backup history reaches: 7, 30, 90, or 180 days. Restore your vault to an earlier day inside that window. Older snapshots are pruned automatically.

**Empty-vault sync guard.** A guard skips some empty-vault backup attempts; first-time backups and restore/sync flows have exceptions. Bulk-deleted documents stay in Recently Deleted while cloud backup is on, until you delete them permanently.

**New-device safety prompt.** Enabling cloud backup on a new device detects existing backups and asks whether to restore or start fresh. No silent overwrite.

**Confirmed cloud-backup deletion.** Deleting your cloud backup requires Face ID, Touch ID, or your PIN if the corresponding app lock is enabled, followed by confirmation. A single accidental tap cannot erase your backup.

**Restore from Settings.** On a supported device on the same platform using the same cloud account, open the Cloud Backup settings screen while backup is turned off, select your backup, enter your recovery code and confirm restoration. This replaces local vault contents. No need to reinstall or go through the onboarding flow.

**Reset and resync.** If your local data and cloud backup drift out of sync, use Reset and Resync to upload a fresh copy of your vault.

### ⚠ Your Recovery Code Is Critical

Your recovery code unlocks the cloud encryption keys needed to restore your backup. We cannot reset it for you. If you lose every copy and access to every device that can still unlock the vault, we cannot recover the encrypted backup.

Save your recovery code somewhere safe before you depend on cloud backup - either a password manager, a printed copy in a secure location, or both - and verify you can read it back before storing it as your only copy.

### Device Requirements

Cloud backup on iPhone and iPad uses Apple iCloud. It requires a supported iPhone or iPad with iCloud Drive available and enabled for the app.

Cloud backup on Android uses Google Drive. It requires Google Play Services, which is installed by default on Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme and most other major Android brands.

Devices without Google Play Services (such as Huawei devices released after 2019, Amazon Fire tablets, and AOSP-only variants) cannot use cloud backup. The rest of the app, including local storage and on-device encryption, continues to work on supported devices, though automatic date reading also needs Google Play Services.

### Important: Always Keep Independent Copies

Cloud backup is one safety layer, but no system is perfect. Cloud accounts can be lost, recovery codes can be forgotten, third-party storage services can have outages, and unexpected sync or data issues can happen. We provide cloud backup as a convenience, not a guarantee.

For critical documents, always keep an independent copy, such as a printed paper copy in a safe place, a separate encrypted vault export saved to different storage, or originals stored physically, and verify your documents are recoverable before you need them.

You are responsible for maintaining your own document backups and for keeping your recovery code safe. The app, Apple, Google, and the developer are not liable for data loss arising from lost recovery codes, cloud account issues, or reliance on cloud backup as the sole copy.

## Encryption and Recovery

#### AES-256-GCM

Authenticated encryption for document contents.

#### PBKDF2 600k Iterations

Key derivation that takes computationally expensive effort. This increases the cost of guessing the recovery code.

#### HKDF Key Expansion

Separate keys for each backup file, and a restore re-encrypts your documents with the new device's own key. A compromised authorised device or recovery code can expose the shared cloud vault.

#### Zero-Knowledge Design

Your encrypted backup stays in your own cloud account. We do not receive it or hold the keys needed to read its document contents.

#### What Apple Sees

Document contents are encrypted in your iCloud or Google Drive. Backup metadata, such as device names, counts and timestamps, is not encrypted.

#### Loss of Recovery Code

If you lose every copy of your recovery code and access to every device that can still unlock the vault, we cannot decrypt your backups. We do not hold your cloud encryption keys.

## Privacy and Compliance

**Optional crash reporting:** Crash reporting is off by default. Your document contents are not uploaded to our servers.

**No Backup Escrow:** We do not keep copies of your recovery code or encryption keys. Keep your code somewhere safe.

**Opt-In By Default:** Cloud backup is off by default. Turn it on in Settings when you want to use it.

Learn more in our [full privacy policy](https://traveldocumentvault.com/privacy-policy/).

## Experience True Privacy

Download free. Enable backup with Pro whenever you're ready. No account. Just you.

![Download on the App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Get it on Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
