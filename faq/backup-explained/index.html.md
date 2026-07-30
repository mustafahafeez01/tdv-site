# Backup Explained: Local Backups, Vault Export, and Cloud Backup | Travel Document Vault

> A clear comparison of the three ways Travel Document Vault protects your data: automatic local backups, Vault Export (.tdvault), and optional Pro cloud backup to iCloud or Google Drive.

Source: https://traveldocumentvault.com/faq/backup-explained/

---

Travel Document Vault gives you three layers of protection. Here is exactly what each one does, who it is for, and how to restore from it.

## Three mechanisms, one goal

Your documents live on your device. They do not go to our servers. The three backup mechanisms each serve a different purpose, and you can use all three at once.

- **Automatic local backups** - happen quietly in the background, no action required.
- **Vault Export (.tdvault)** - a portable encrypted file you save wherever you choose.
- **Cloud Backup (Pro)** - an automatic encrypted copy in your own iCloud or Google Drive.

## At a glance

| Mechanism | Tier | Automatic? | Where it lives | How to restore |
|---|---|---|---|---|
| **Automatic local backups** | Free | Yes, every few minutes | On your device | Settings, Restore Local Backup |
| **Vault Export (.tdvault)** | Free | No, manual | Wherever you save it: Files, iCloud Drive, Google Drive, email | Settings, Import Vault |
| **Cloud Backup** | Pro | Yes, automatic | Your own iCloud (iOS) or Google Drive (Android) | Settings, Cloud Backup, Restore from Backup |

## Automatic local backups

While the app is open and you make changes, it quietly snapshots your vault every few minutes. You do not need to do anything. The app keeps the 10 most recent snapshots and removes older ones to save space.

In Settings you will see a line like *Last backup: 2 hours ago, 12 documents*. That tells you the age of the most recent snapshot and how many documents it captured. It is there to reassure you that a recoverable copy is always nearby.

**To restore:** Settings, then Restore Local Backup. Pick a snapshot from the list and confirm. Restoring replaces your current data with the snapshot contents.

These local snapshots stay on your device. A system backup (iCloud Backup, Google Backup) reinstalls the app but cannot restore them on a new phone, because the encryption key never leaves your original device. To move your vault, use cloud backup (Pro) or the free Vault Export.

## Vault Export (.tdvault) - free for everyone

Vault Export creates a single encrypted, password-protected file containing every profile, document, and attachment in your vault. You choose where to save it: Files app, iCloud Drive, Google Drive, or share it via AirDrop or email.

The file is encrypted on-device before it leaves the app. Only the password you set at export time can unlock it.

**To export:** Settings, Export Vault, then follow the prompts and choose a destination.

**To restore:** Settings, Import Vault, then select your .tdvault file and enter the password. Import works on any device, including across platforms (iOS to Android or vice versa). Round-trip fidelity is complete: all document names, dates, expiry alerts, colours, attachments, and notes are preserved exactly.

This is free for all users. No Pro subscription required.

## Cloud Backup (Pro)

Cloud Backup is the Pro option. Once enabled, the app automatically keeps a continuously updated copy of your vault in your own iCloud account (iOS) or your own Google Drive (Android). We never see this data. Apple and Google see only ciphertext.

The vault is encrypted end-to-end on your device using AES-256-GCM before upload. The key is derived from your recovery code, a 24-character passphrase the app generates when you enable cloud backup. Keep your recovery code somewhere safe. If you lose it, the encrypted backup becomes unrecoverable.

**To restore:** On a new device signed into the same Apple ID or Google account, open the app, go to Settings, Cloud Backup, Restore from Backup, and enter your recovery code.

Cloud Backup is the most hands-off option: it works automatically once enabled, and restoring on a new phone takes one tap plus your recovery code.

## Which should I use?

The short answer: use all three.

Automatic local backups protect you from accidental deletes or app issues right now, without you having to think about it. They are always on.

Vault Export is the right move before a device change, a major app update, or any time you want a portable copy saved somewhere independent of your phone. Do it at least once and store the file in a safe location.

Cloud Backup (Pro) is the right choice if you want automatic off-device protection without managing files manually. It is particularly valuable when switching to a new phone: install the app, enter your recovery code, and your vault is restored in seconds.

No single layer is a reason to skip the others. Cloud accounts can be lost, recovery codes can be forgotten, and phones can be stolen before a local backup runs. The combination of all three gives you the strongest protection.

### Related guides

- [How to Export and Import Your Vault - step-by-step walkthrough](https://traveldocumentvault.com/faq/export-import/)
- [What is My Recovery Code? - full guide to storing it safely](https://traveldocumentvault.com/faq/recovery-code/)
- [Cloud Backup - how end-to-end encryption works](https://traveldocumentvault.com/cloud-backup/)

## Get Travel Document Vault

Free download. Vault Export and local backups are included for everyone. Pro adds cloud backup, unlimited profiles, combined PDF export, and more. One-time purchase, no subscription.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877)

![Get it on Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
