# What is My Recovery Code? | Travel Document Vault

> Your recovery code is the master key to your encrypted cloud backups. Learn what it is, why you need it, what happens if you lose it, and how to store it safely.

Source: https://traveldocumentvault.com/faq/recovery-code/

---

Your recovery code is a 24-character passphrase that encrypts your cloud backups. If you lose it, those backups become unrecoverable. We do not hold or reset it, so store it somewhere safe.

## How it works

### What it is

Your recovery code is a 24-character passphrase generated when you enable cloud backup. It looks like:

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

This code is mathematically derived from your backup settings and is the only key that can decrypt your encrypted vault on the cloud. We generate it once and show it to you once. After that, the responsibility to keep it safe is yours.

### Why you need it

When you enable cloud backup, your entire vault is encrypted on your device using AES-256-GCM before it ever leaves your phone. The encryption key is derived from your recovery code. Without the recovery code, the backup is cryptographically inaccessible, even to us.

This is a privacy guarantee. We literally cannot read your backups, decrypt them on demand, or reset them for you. If your recovery code is lost, that backup is gone forever. This sounds harsh, but it is exactly what you want: your privacy is not just a promise we make, it is a technical fact we cannot violate.

### If you lose it

If you forget your recovery code, your existing cloud backup cannot be recovered. You have two options:

- **Restore from your phone:** If the code is still stored in the app (check Settings - Cloud Backup), copy it to a safe location and save it.
- **Generate a new one:** Disable cloud backup and re-enable it. This creates a new recovery code and discards the existing backup. You start fresh.

### Where to store it

Your recovery code is as sensitive as your master password. Store it in one of these ways:

- **Password manager:** Bitwarden, 1Password, Apple Keychain, or similar. This is the most convenient option.
- **Physical backup:** Write it on paper and store in a safe, safety deposit box, or secure location at home.
- **Offline document:** Save to an encrypted external drive or USB (never cloud-synced).
- **Avoid:** Email, Notes app, unencrypted cloud services, or screenshots.

### Regenerating your code

If you think your recovery code is compromised, turn off cloud backup and turn it back on. The app generates a new recovery code. Your old encrypted backup is discarded. This is by design: recovery code rotation is intentionally rare and lossy, so you do not do it lightly.

**Disclaimer:** Your recovery code is your sole responsibility. Travel Document Vault cannot recover, reset, or regenerate it if lost. Store it securely. Do not rely on this app as your only backup system for critical documents.

## Ready to protect your vault?

Download Travel Document Vault and enable cloud backup to keep your documents safe.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault&referrer=utm_source%3Dtraveldocumentvault.com%26utm_medium%3Dweb%26utm_content%3Dfaq)
