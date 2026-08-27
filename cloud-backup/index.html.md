# Encrypted Cloud Backup | Your Cloud. Your Key. | Travel Document Vault

> End-to-end encrypted backup to your own iCloud or Google Drive. You hold the recovery code and nobody else can open it, including us. Works offline first.

Source: https://traveldocumentvault.com/cloud-backup/

---

## How Encrypted Backup Works

True privacy means you, and only you, can read your data.

1

### Encrypt On-Device

Your vault is encrypted on your device using AES-256-GCM. The encryption key is derived from your recovery code using PBKDF2 with 600,000 iterations.

AES-256-GCM is strong, modern encryption, and the recovery code never leaves your hands. You should still protect your phone with a strong passcode and App Lock - encryption protects the file, your passcode protects the phone.

2

### Upload to Your Cloud

The encrypted backup goes to your personal iCloud or Google Drive account, not our servers - it's your cloud and your account.

You can view and manage your backups directly in your iCloud or Google Drive. You are in complete control.

3

### Only You Hold the Key

Your recovery code is the key to decrypt your backups, and it never leaves your device - never sent to us, Apple, or Google.

Store your recovery code somewhere safe, because without it even we cannot recover your data - this is intentional, not a bug.

4

### Restore on Any Device

Switch to a new phone? Restore your backup with your recovery code. Same for new iPad, Mac, or other device.

Download the app, restore from backup, and enter your recovery code to get your entire vault back, encrypted and ready.

## How It Protects Your Data

Multiple safety layers stand between an accidental tap and lost data.

**Indefinite trash retention.** Deleted documents stay in Recently Deleted as long as cloud backup is on. No automatic 30-day purge.

**Delete Forever requires confirmation.** A separate prompt warns you that the document will also be removed from your cloud backup. No accidental wipes.

**Backup history grace window.** Even after permanent deletion, the backup retains your document data for several more sync cycles as a safety net.

**Choose your history window.** Pick how far back your daily backup history reaches: 7, 30, 90, or 180 days. Restore your vault to an earlier day inside that window. Older snapshots are pruned automatically.

**Empty-vault sync skip.** The app never syncs an empty vault to the cloud. A bulk delete cannot wipe your existing backup.

**New-device safety prompt.** Enabling cloud backup on a new device detects existing backups and asks whether to restore or start fresh. No silent overwrite.

**Biometric-gated delete.** Deleting your cloud backup requires Face ID, Touch ID, or your PIN. A single accidental tap cannot erase your backup.

**One-tap restore from Settings.** Restore your backup at any time from the Cloud Backup settings screen. No need to reinstall or go through the onboarding flow.

**Reset and resync.** If your local data and cloud backup ever drift out of sync, one button forces a clean re-upload of your entire vault so everything stays consistent.

### ⚠ Your Recovery Code Is Critical

Your recovery code is the only key to decrypt your backup. We have a zero-knowledge design, which means we cannot reset it for you. If you lose it, your backup becomes unrecoverable.

Save your recovery code somewhere safe before you depend on cloud backup - either a password manager, a printed copy in a secure location, or both - and verify you can read it back before storing it as your only copy.

### Device Requirements

Cloud backup on iPhone and iPad uses Apple iCloud. It works on every device that signs in with an Apple ID.

Cloud backup on Android uses Google Drive. It requires Google Play Services, which is installed by default on Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme and most other major Android brands.

Devices without Google Play Services (such as Huawei devices released after 2019, Amazon Fire tablets, and AOSP-only variants) cannot use cloud backup. The rest of the app, including local storage and on-device encryption, continues to work on every device.

### Important: Always Keep Independent Copies

Cloud backup is one safety layer, but no system is perfect. Cloud accounts can be lost, recovery codes can be forgotten, third-party storage services can have outages, and unexpected sync or data issues can happen. We provide cloud backup as a convenience, not a guarantee.

For critical documents, always keep an independent copy, such as a printed paper copy in a safe place, a separate encrypted vault export saved to different storage, or originals stored physically, and verify your documents are recoverable before you need them.

You are responsible for maintaining your own document backups and for keeping your recovery code safe. The app, Apple, Google, and the developer are not liable for data loss arising from lost recovery codes, cloud account issues, or reliance on cloud backup as the sole copy.

## Security You Can Trust

#### AES-256-GCM

Industry-standard authenticated encryption. Used by NIST, NSA, and global banking systems.

#### PBKDF2 600k Iterations

Key derivation that takes computationally expensive effort. Brute force attacks become infeasible.

#### HKDF Key Expansion

Per-device encryption keys. Each restore generates a unique key. Compromising one device doesn't compromise others.

#### Zero-Knowledge Design

We have no access to your data. Not encrypted on our servers. Not stored on our servers. True zero-knowledge.

#### What Apple Sees

Encrypted blobs in your iCloud. Apple stores them. Apple cannot read them. Same for Google Drive.

#### Loss of Recovery Code

If you lose your recovery code, your backups cannot be decrypted. No back door. No master key. By design.

## Privacy and Compliance

**GDPR Compliant:** We don't process personal data. We don't have access to your data. No data, no processing, no compliance burden.

**No Backup Escrow:** Unlike some providers, we do not keep copies of your recovery code, private keys, or encryption keys. Backup custody is 100% yours.

**Opt-In By Default:** Cloud backup is disabled by default. You explicitly enable it. You decide.

Learn more in our [full privacy policy](https://traveldocumentvault.com/privacy-policy/).

## Experience True Privacy

Download free. Enable backup whenever you're ready. No account. Just you.

![Download on the App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Get it on Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
