# Backup Explained: Local Backups, Vault Export, and Cloud Backup | Travel Document Vault

> The three ways your data is protected: automatic local backups, Vault Export (.tdvault), and optional cloud backup to iCloud or Google Drive.

Source: https://traveldocumentvault.com/faq/backup-explained/

---

Travel Document Vault gives you three layers of protection. Here is exactly what each one does, who it is for, and how to restore from it.

## Three mechanisms, one goal

Travel Document Vault offers three layers of protection: (1) Automatic local backups, created every few minutes on your device at no cost. (2) Vault Export, a free manual encrypted backup file (.tdvault) you save wherever you choose. (3) Cloud Backup, a Pro option that keeps an end-to-end encrypted copy in your own iCloud or Google Drive.

- **Automatic local backups** - happen quietly in the background, no action required.
- **Vault Export (.tdvault)** - a portable encrypted file you save wherever you choose.
- **Cloud Backup (Pro)** - an automatic encrypted copy in your own iCloud or Google Drive.

## At a glance

| Mechanism | Tier | Automatic? | Where it lives | How to restore |
|---|---|---|---|---|
| **Automatic local backups** | Free | Yes, every few minutes | On your device | Settings, Restore Local Backup |
| **Vault Export (.tdvault)** | Free | No, manual | Wherever you save it: Files, iCloud Drive, Google Drive, email | Settings, Import backup |
| **Cloud Backup** | Pro | Yes, automatic | Your own iCloud (iOS) or Google Drive (Android) | Settings, Cloud Backup, Restore from Backup |

## Automatic local backups

While the app is open and you make changes, it quietly snapshots your vault every few minutes. You do not need to do anything. The app keeps its few most recent snapshots and removes older ones to save space. Vault Export creates a portable encrypted file you can save off-device.

In Settings you will see a line like *Last backup: 2 hours ago, 12 documents*. That tells you the age of the most recent snapshot and how many documents it captured. It shows the latest available local snapshot. Local snapshots do not contain independent copies of attachment files.

**To restore:** Settings, then Restore Local Backup. Pick a snapshot from the list and confirm. Restoring replaces your current data with the snapshot contents.

These local snapshots stay on your device. A system backup (iCloud Backup, Google Backup) reinstalls the app but cannot restore them on a new phone, because ordinary phone backups do not transfer the device-bound encryption key. Vault Export includes a password-encrypted copy of that key. To move your vault, use cloud backup (Pro) or the free Vault Export.

## Vault Export (.tdvault) - free for everyone

Vault Export puts supported vault records and available attachments in one encrypted, password-protected file. Each export has a size limit. You choose where to save it: Files app, iCloud Drive, Google Drive, or share it via AirDrop or email.

The file is encrypted on-device before it leaves the app. Only the password you set at export time can unlock it.

**To export:** Settings, Export vault, then follow the prompts and choose a destination.

**To restore:** Settings, Import backup, then select your .tdvault file, confirm, and enter the password. Importing replaces everything already on that phone. Import works on supported devices, including across platforms (iOS to Android or vice versa). Exports preserve supported vault fields and selected settings. Missing attachments or unreadable notes may be omitted. Check your imported documents and reminders. App lock and other device settings remain local.

This is free for all users. No Pro purchase required.

## Cloud Backup (Pro)

Cloud Backup is a Pro feature. Turn it on to keep an automatic copy in your own iCloud (iOS) or Google Drive (Android). The app updates it while open and connected. We do not receive it. Document contents are encrypted. Backup metadata, such as device names, counts and timestamps, is not.

Document contents are encrypted end-to-end on your device using AES-256-GCM before upload. The cloud encryption keys are unlocked with your recovery code, a 24-character passphrase the app generates when you set your PIN. Keep your recovery code somewhere safe. If you lose every copy of the code and access to every device that can still unlock the vault, we cannot recover the encrypted backup.

**To restore:** Use a supported device on the same platform and the same Apple ID or Google account. With backup turned off, open Settings, Cloud Backup. Choose Restore from Backup, select your backup, enter your recovery code and confirm. Restoring replaces local vault contents.

Cloud Backup runs automatically while the app is open and connected. Restore through Settings with your recovery code, using the same cloud account and a supported device on the same platform.

## Which should I use?

The short answer: use all three.

Automatic local backups can help recover recent vault records when snapshots are available. They run while the app is open and do not replace an independent document backup.

Vault Export is the right move before a device change, a major app update, or any time you want a portable copy saved somewhere independent of your phone. Do it at least once and store the file in a safe location.

Cloud Backup (Pro) is the right choice if you want automatic off-device protection without managing files manually. When switching to a supported phone on the same platform, use the same cloud account, select your backup in the restore flow, enter your recovery code and confirm. Restoring replaces local vault contents.

No single layer is a reason to skip the others. Cloud accounts can be lost, recovery codes can be forgotten, and phones can be stolen before a local backup runs. The combination of all three gives you the strongest protection.

### Related guides

- [How to Export and Import Your Vault - step-by-step walkthrough](https://traveldocumentvault.com/faq/export-import/)
- [What is My Recovery Code? - full guide to storing it safely](https://traveldocumentvault.com/faq/recovery-code/)
- [Cloud Backup - how end-to-end encryption works](https://traveldocumentvault.com/cloud-backup/)

## Quick Answers

What backup options does Travel Document Vault offer? Travel Document Vault offers three layers of protection: (1) Automatic local backups, created every few minutes on your device at no cost. (2) Vault Export, a free manual encrypted backup file (.tdvault) you save wherever you choose. (3) Cloud Backup, a Pro option that keeps an end-to-end encrypted copy in your own iCloud or Google Drive. Is Vault Export free? This is free for all users. No Pro purchase required. What is the difference between local backups and Vault Export? While the app is open and you make changes, it quietly snapshots your vault every few minutes. You do not need to do anything. The app keeps its few most recent snapshots and removes older ones to save space. Vault Export creates a portable encrypted file you can save off-device. What is cloud backup and who needs it? Cloud Backup is a Pro feature. Turn it on to keep an automatic copy in your own iCloud (iOS) or Google Drive (Android). The app updates it while open and connected. We do not receive it. Document contents are encrypted. Backup metadata, such as device names, counts and timestamps, is not.

## Get Travel Document Vault

Free download. Vault Export and local backups are included for everyone. Pro adds cloud backup, unlimited profiles, combined PDF export, and more. One-time purchase, no subscription.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Get it on Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
