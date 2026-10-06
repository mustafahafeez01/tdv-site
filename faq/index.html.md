# Passport & Travel Document FAQ | Travel Document Vault

> Answers about Travel Document Vault: on-device passport storage, offline access, expiry reminders, and optional encrypted backup to your own cloud.

Source: https://traveldocumentvault.com/faq/

---

Privacy-first. On-device by default. No accounts needed.

# Frequently Asked Questions

Everything you need to know about Travel Document Vault.

![Download on the App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Get it on Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg) One-time purchase · No subscription Jump to: Privacy Features Backup Pricing Troubleshooting Legal

## Trust & Transparency

Can the developer see my documents?

No. The local vault needs no Travel Document Vault account or server. Your documents are stored on your device by default. If you choose to enable optional Pro cloud backup, your vault is end-to-end encrypted on-device before upload to **your own iCloud** (iOS) or **your own Google Drive** (Android), sealed with a recovery code only you hold. We do not receive your cloud backup and cannot read its encrypted document contents. Neither can Apple or Google.

What does Sentry crash reporting collect, and can I turn it off?

Sentry is a crash reporting tool that helps us find and fix bugs. It is **disabled by default** and sends absolutely nothing when turned off. If you choose to enable it in Settings, it sends sanitised technical crash diagnostics. Session replay is a separate opt-in. Crash reports are sanitised to reduce personal data, and document files are not intentionally attached.

What does the Pro upgrade include?

Pro is a **one-time purchase** that unlocks unlimited profiles, unlimited documents, combined PDF export, encrypted cloud backup to iCloud or Google Drive, and custom reminder timing. You pay once - no subscription, no recurring charge, and no trial that quietly starts billing you.

Are future updates included with my purchase?

Yes. Your purchase covers every update within the current major version (v1.x), including bug fixes, security patches, and new features. Improvements driven by user feedback, like usability changes and new document types, are part of those normal updates. If we ever release a v2.0 with a substantially rebuilt feature set, that may be a separate purchase, but we would give early adopters advance notice and preferential pricing. People who trust the app early are the reason it gets better, and that is not something we take for granted.

What happens if I lose my phone or switch to a new one?

**Pro users:** Enable encrypted cloud backup in Settings - Cloud Backup. Your vault is encrypted on-device with your recovery code before it reaches iCloud (iOS) or Google Drive (Android). On a supported device on the same platform, use the same cloud account. Open Cloud Backup in Settings, choose your backup and restore it with your recovery code. Restoring replaces the local vault. Document contents are encrypted; the cloud provider can see backup metadata such as counts, timestamps and device information. We see nothing.

**Everyone:** Use the free Vault Export (.tdvault) in Settings and import it on any device. System backups (iCloud or Google) reinstall the app but cannot restore your documents - system backups do not transfer the device-bound encryption key, so export before you switch phones.

Does the app work without an internet connection?

Yes, completely. The core app has no server and does not need the internet to function. Scanning, viewing, exporting, and reminders all work offline. Features that need a connection include store purchases and restoration, update checks and downloads, and optional cloud backup (Pro) to your own iCloud or Google Drive account. Changing your recovery code while cloud backup is on also needs a connection.

What languages does the app support?

The app is available in over 40 languages, including full right-to-left support for Arabic, Urdu, and Farsi. Your phone's language is detected automatically, and you can change it any time in Settings. If something reads oddly in your language, we genuinely want to know. Drop us a line at [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com) and it will directly influence the roadmap.

What happens if you stop developing the app?

Your documents live on your device, not on our servers, so they do not disappear if we stop releasing updates. Access to your saved vault does not depend on a Travel Document Vault server; future operating-system compatibility cannot be guaranteed. You can also export an encrypted copy of your vault, subject to export size limits and readable attachment files.

Who built this app, and why is it privacy-first?

Travel Document Vault was built by [Mustafa Hafeez](https://traveldocumentvault.com/blog/why-i-built-travel-document-vault/), a senior software developer with years of professional experience building privacy-respecting applications, and a parent who needed this app for his own family. Privacy is not a marketing line. The local vault needs no Travel Document Vault account or server. Enable App Lock to restrict access on an unlocked phone. Optional cloud backup uses your own iCloud or Google Drive, end-to-end encrypted with a recovery code only you hold. That is a deliberate engineering decision, not a policy that could be changed with a settings toggle.

Want to verify these claims yourself? See our [Privacy Verification](https://traveldocumentvault.com/privacy-verification/) page for independent proof and a full breakdown of every app permission.

## Privacy & Data

Where is my data stored?

By default, all your data is stored **exclusively on your device**. We have no servers that hold your documents and no Travel Document Vault user accounts. When you save a document, it stays in your phone's secure storage area. Pro users can enable optional **Your Own Cloud** backup, which sends an end-to-end encrypted copy of your vault to your own iCloud or Google Drive account. We still cannot read it.

Is my data backed up to the cloud?

**Pro users** can enable encrypted cloud backup in the app (Settings - Cloud Backup). Your vault is encrypted on-device with your recovery code before it is uploaded to **your own iCloud** (iOS) or **your own Google Drive AppFolder** (Android). We have no access to your data. Document contents are stored encrypted; some backup metadata remains readable.

There is no cloud database on our servers. We never see your documents.

A system-level device backup (iCloud Backup, Google Backup) reinstalls the app but does not restore your documents - system backups do not transfer the device-bound encryption key. To move your vault to a new phone, use cloud backup (Pro) or the free Vault Export.

Can I back up my data for free?

Yes. Vault Export (.tdvault encrypted backup file) is free for everyone. Go to Settings, Export vault, and the app creates a password-protected file you can save to Files, iCloud Drive, or share off-device. The app also keeps **automatic local backups** on your device every few minutes, at no cost. Cloud backup to your own iCloud or Google Drive is the Pro option. No backup feature traps your data.

What if someone steals my phone? Are my documents protected?

Yes. Your documents are **encrypted on disk** within the app's storage. This protects against direct file extraction (if someone accesses the device's physical storage, the raw files are unreadable without the decryption keys).

- **Encryption on Disk:** Stored vault attachment originals are encrypted; viewing, scanning and sharing can create temporary readable copies.
- **App Lock:** Add a second layer of defence by enabling PIN, Face ID, or Touch ID in the app settings.

**Important:** Maximum security requires a strong device passcode. If your device is unlocked, the encryption keys may be accessible to whoever holds the phone.

Do you collect any analytics or tracking data?

**No.** We don't use any analytics SDKs, advertising networks, or tracking services. Optional **Sentry** crash reporting stays off unless you turn it on in settings. Cloud backup (Pro), store purchases and updates also use external services. Crash reports contain sanitised technical diagnostics. Reports are sanitised to reduce personal data and do not intentionally attach document files.

What happens when I delete the app?

All your data on this phone is **permanently deleted** when you uninstall the app. There's no way to recover it afterward unless you made a Vault Export or turned on cloud backup, since we don't store anything externally. **Before deleting:** Export your documents or create an encrypted backup file (.tdvault) via Settings to save them elsewhere.

## Additional Security

Are my document images encrypted?

**Yes.** The original images and PDFs stored in your vault are encrypted. Viewing, scanning and sharing can create temporary readable copies. Encrypted stored originals cannot be read without their decryption keys.

**For maximum security:** We recommend enabling App Lock and using a strong device passcode. See our [Privacy Policy](https://traveldocumentvault.com/privacy-policy/) for complete details.

What is "Show to Another Person"?

Show to Another Person is a protected display mode for moments when a border officer, hotel receptionist, or airline agent needs to see a document on your screen. With PIN lock set up, tap the icon to open a full-screen view with **screenshot and screen-recording protection enabled by default**, subject to device support and your settings. Close the protected view, then unlock the vault with your PIN or enabled biometrics.

This display mode does not upload your documents. Set up PIN lock first so closing the protected view locks access to the vault. Without PIN lock, the viewer does not restrict access to the rest of your vault.

What is a recovery code, and why do I need one?

When you set up App Lock, the app generates a unique recovery code that's your safety net if you ever forget your PIN. Save it somewhere safe - your password manager, a printed note, anywhere you trust.

If you forget your PIN, enter your recovery code on the PIN screen. The recovery code **unlocks the app without deleting your documents**; App Lock remains enabled.

If neither your PIN nor enabled biometrics can unlock the app and you have no recovery code, you may need to erase the local vault and restore a saved backup. Save your code when prompted. While you still know your PIN, you can generate a new one in Settings → Security.

What is Auto-Erase?

Auto-Erase is intended to erase this phone's vault after repeated incorrect PIN attempts. Do not rely on it as a guaranteed safeguard. It is **on by default** once you set a PIN. Turn it off in Settings → Security if you'd rather keep your data after failed attempts. A completed local erase removes this phone's vault; recovery requires an independent usable backup.

**Important:** Create a vault export backup before you rely on Auto-Erase. That way, if it ever triggers accidentally, you can restore from your backup. Keep an independent backup and its required password or recovery code before relying on Auto-Erase.

## Features

What document types can I store?

The app supports **Passports**, **National IDs** (front + back), **Visas/Residence Permits**, **Airline Tickets**, **Vouchers & Entry Tickets** (gift cards, promo codes, event tickets, with expiry reminders so they do not go to waste), **Other Documents** (travel insurance, health insurance, vaccination records, memberships, prescriptions, anything with an expiry date), and **Notes** (text with optional image attachments and reminders). You can capture documents using your camera, import from your photo library, or import PDF files. Pro users can capture multi-page documents for Airline Tickets, Vouchers, and Other Documents.

How do expiry reminders work?

Reminders start on their own, timed to the document type. A passport starts 8 months before expiry (renewals typically take 6-8 weeks), then steps down through 6 months, 3 months, 6 weeks, 1 month, 2 weeks and 1 week, and again on the expiry day. Visas, national IDs and travel insurance start 3 months out. Even if you miss the date, we'll remind you **the day after** and **one week after** expiry to help you start the renewal. Airline tickets get a tighter run instead (1 week, 2 days, 1 day, 24 hours) and no post-expiry reminders, since the flight has departed.

What is OCR and how does it work?

OCR (Optical Character Recognition) automatically detects expiry dates from your documents. Point your camera at a document, and the app will try to read the expiry date. All processing happens on your phone - nothing is uploaded. Tick the "I confirm this date is correct" checkbox to accept the detected date, or edit the date manually before saving.

Can I export my documents?

Yes. Free users can share individual documents. Pro adds combined PDF export: select specific documents (or everyone's profiles) and generate a **single combined PDF** for printing. You can set custom filenames to keep your exports organised.

How does the app back up my data?

**Free:** Use Vault Export (.tdvault encrypted backup file) from Settings to manually back up your entire vault as a password-protected file. You control where it's stored.

**Pro:** Enable encrypted cloud backup to your own iCloud (iOS) or Google Drive (Android). Your vault is encrypted on-device with your recovery code before upload. We never see your data. Document contents are encrypted; the cloud provider can see backup metadata such as counts, timestamps and device information. Backup runs automatically while the app is open and connected. Restore with your recovery code on a supported device on the same platform, using the same cloud account. Restoring replaces the local vault.

The app also keeps automatic local backups on your device every few minutes, at no cost. System backups (iCloud Backup, Google Backup) reinstall the app but cannot restore your documents, because system backups do not transfer the device-bound encryption key.

Can I share documents with family members?

The app uses **profiles** to organise documents by family member. By default, all data stays on your device. Pro users can enable **Your Own Cloud** to sync the same vault between their own devices via their own iCloud or Google Drive, end-to-end encrypted. To share a single document with someone else, export it using the system share sheet and send via AirDrop, email, or messaging.

Does the app work offline?

**Yes.** You can add documents, view saved copies and receive expiry reminders offline. Cloud backup, purchases and updates need a connection.

How do I enable App Lock with PIN or Face ID/Touch ID?

To enable App Lock, go to **Settings → Security** in the app:

- **PIN Lock (Free):** Set a 6-digit PIN code. App Lock asks you to authenticate when required; enabled biometrics can replace PIN entry, and brief app switches have a five-second grace period.
- **Biometric Lock:** Enable Face ID (iPhone with Face ID), Touch ID (iPhone with fingerprint), or fingerprint unlock (Android). Free for all users. Security should not be paywalled.

**Best practice:** Enable App Lock + set your device to auto-lock after 30 seconds. This creates multiple layers of protection: device lock, then app lock, then encrypted files.

**Forgotten PIN?** Save your recovery code when you set up App Lock. Enter it in the PIN screen to unlock the app without deleting your documents. See "What is a recovery code?" below for full details.

Does the app create automatic backups?

**Yes, the app creates automatic local backups every few minutes** (when the app is open and changes are made). These backups are stored on your device. A device backup (iCloud or Google) cannot bring your documents back from them, because system backups do not transfer the device-bound encryption key.

**How it works:**

- The app keeps **a few rolling backups** on your device. Older backups are rotated out once the local retention limit is reached.
- Backups stay in the app's **private storage** on your device.
- A valid local backup can restore earlier vault records via **Settings → Restore Local Backup**, but cannot recreate permanently deleted attachment files. Use Recently Deleted for ordinary deletions.

**Vault Export:** Any user can export an encrypted backup file (.tdvault) and save it to Files, iCloud Drive, or share it via AirDrop/email for off-device storage. This is recommended before major updates or device changes.

What does "Last backup: 2 hours ago, 12 documents" mean in Settings?

That line shows the app's most recent automatic local backup, how long ago it was saved, and how many documents it contains. It shows the latest local snapshot. Tap **Restore Local Backup** to restore its saved records. Local snapshots do not contain independent copies of attachment files.

How do I restore my vault from a local backup?

Go to **Settings**, then tap **Restore Local Backup**. The app shows a list of available backups with timestamps. Pick the one you want, then confirm. To restore from a .tdvault file you exported, tap **Import backup** instead and select the file. Both options are free for everyone. Be aware that restoring replaces your current data with the contents of the backup.

The app is showing a recovery screen or says my data could not be loaded. What do I do?

If the app cannot read the local store, it shows a recovery screen and keeps the unreadable data. Tap **Restore** to recover from one of your automatic local backups, or go to Settings and tap **Import backup** to restore from a .tdvault file you previously exported. Backups created before a recent app update can also be restored. Your previous data is kept, not deleted.

Why did the app create a backup before updating?

Before a major data-format upgrade the app automatically snapshots your vault. If a valid, readable pre-upgrade snapshot is available, you can try restoring it from Settings. The process is automatic and free for everyone.

Can I customize reminder timing?

**Free users:** Get smart defaults chosen by document type. Passports start 8 months out, visas and IDs 3 months out, tickets and bookings a week out, and each one cascades down to the expiry date on its own.

**Pro users:** Can change the starting point for any document. Pick 8 months, 6 months, 3 months, 6 weeks, 1 month, 2 weeks, 1 week or expiry day, and the rest of the schedule fills in from there. Airline tickets have their own choices: 1 week, 2 days, 1 day or 24 hours.

To customise reminders, tap any document → Edit → Reminders section (Pro only).

How do I select multiple documents?

Open the document list's overflow menu and tap **"Select documents"** to enter select mode. Tap documents to select or deselect them, then use the bottom **Delete, Share or PDF** controls to delete the selected documents, share original files, or export a combined PDF (Pro). You can also **long-press** any document card for a quick context menu with the same options for that single document.

Can I undo a bulk delete?

**Yes - you have two layers of protection.** After deleting documents (single or bulk), you'll see a short undo window at the bottom of the screen. Tap **"Undo"** to restore them immediately. If you miss the undo window, deleted documents move to **Recently Deleted** in Settings, where they stay for 30 days before permanently deleting. Pro users with cloud backup enabled keep items in Recently Deleted indefinitely until they tap Delete Forever.

What is the long-press context menu?

Long-press (press and hold) any document card in your list to open a quick actions menu. From there you can **Export PDF**, **Share Original** files, or **Delete** the document without opening it first. You'll feel a subtle haptic tap when the menu appears. This works for all users (Free and Pro).

Can I store medical or prescription documents?

Yes. You can store health insurance cards, repeat prescriptions, vaccination records, and any other health-related document. Choose **Note** or **Other** and save an expiry date. Reminders are on by default, with timing based on the document type. Everything stays on your device, encrypted. If you turn on optional Pro cloud backup, the encrypted copy goes to your own iCloud or Google Drive, sealed with a recovery code only you hold.

Can I snooze a reminder?

Yes. When a reminder fires, **snooze** it directly from the notification. Choose 1 hour, 3 hours, tomorrow, or next week. The app reschedules it automatically. You can also snooze from inside the app on the Alerts tab. The app schedules the snoozed reminder for your chosen time.

Can I colour-code my documents?

Every document card is colour-coded automatically. **Green** means valid, **amber** means expiry is approaching, and **red** means expired or expiring imminently. You can see the status of your entire vault at a glance without opening a single document.

**Pro users** can go further: override the colour on a per-document-type basis from the profile settings tab. Assign a distinct colour to passports, visas, or any category you want to stand out. This stacks on top of the status colours, so you always see both the category and the urgency at once.

Can I attach photos to my notes?

Yes. Notes and Vouchers support multiple image attachments. Free users can attach one image per note. **Pro users can attach up to 10.** Attach a photo of a confirmation email, a QR code, a booking reference, or anything else that adds context. Every image is encrypted on-device, exactly like the rest of your vault.

## Platform & Compatibility

Is Travel Document Vault available on Android?

**Yes. Travel Document Vault is available on Android.** [Download it free on Google Play.](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault&referrer=utm_source%3Dtraveldocumentvault.com%26utm_medium%3Dweb%26utm_content%3Dfaq) Android supports encrypted on-device storage, OCR scanning and expiry reminders. With Pro, you can use unlimited profiles, batch PDF export and custom reminder timing.

Can I transfer my data from iPhone to Android (or vice versa)?

**Yes, using encrypted Vault Export.** Export an encrypted backup from your current device (Settings, Export vault), transfer it to your new device (via email, cloud storage, or direct transfer), then use Settings, Import backup to restore your documents, which replaces anything already on the new device.

This works across platforms because the encryption format is universal. You'll need the same password you used when exporting the vault. Pro purchases restore within the same platform and store account; switching between iOS and Android requires a separate Pro purchase (see "Can I restore my purchase on a new device?" below).

How much storage space does the app use?

**Storage usage depends on document count and file sizes, plus vault metadata, backups and temporary files.**

The app includes a few automatic backups of your vault data. Free users can add up to five documents. With Pro, there is no document-count cap, subject to your device's available storage.

Why does the app need camera and photo library access?

**Camera:** To capture photos of your documents directly in the app. **Photo Library:** To import existing document photos you've already taken.

We **never upload** your photos to our servers. We have no servers that store your documents. All processing (including OCR scanning) happens on your device. If you turn on optional Pro cloud backup, the encrypted vault goes to your own iCloud or Google Drive, sealed with a recovery code only you hold. You can still add document details manually or import a PDF if you deny camera and photo permissions. If you accidentally denied permissions, you can re-enable them in your device Settings → Privacy → Camera / Photos → Travel Document Vault.

## Pricing & Purchases

What's the difference between Free and Pro?

**Free** includes 1 profile and up to 5 documents with core tools, including OCR scanning, expiry reminders, document sharing, PIN Lock, and Biometric Lock (Face ID / Touch ID). **Pro** (one-time purchase*) unlocks unlimited profiles, unlimited documents, combined PDF export, encrypted cloud backup, custom reminder timing, and multi-page capture for Airline Tickets and Other Documents.

* See [Pricing Policy](https://traveldocumentvault.com/pricing-policy/#version-policy) for versioning details.

Is Pro a subscription?

**No.** Pro is a one-time purchase. Pay once, all v1.x updates included, forever. No recurring charges, no subscription.

[About our version policy →](https://traveldocumentvault.com/pricing-policy/#version-policy)

Can I restore my purchase on a new device?

**Yes.** Go to Settings in the app and tap "Restore purchases." On the same platform, use the store account that bought Pro; restoration requires a connection and a valid entitlement returned by the store. Note: your documents won't transfer. Only the Pro unlock.

Will I get future updates if I buy Pro?

**Yes.** Pro is a one-time purchase for the **current major version** (v1.x). You'll receive all bug fixes, security updates, and feature additions for free within that version.

If we release a major version 2.0 in the future with significant new features, that might require a separate upgrade purchase. We'll give advance notice and early-bird pricing to existing Pro users. This policy supports continued improvements to the app with a one-time purchase.

Learn more in our [Pricing Policy](https://traveldocumentvault.com/pricing-policy/).

What does "all v1.x updates included" mean?

Your purchase covers every update within the current major version. That means all bug fixes, security patches, and new features released within the current version line. Your app keeps working and improving at no extra cost.

If a future major version (v2.0) is ever released with a significantly rebuilt feature set, that may be offered as a separate purchase. You would never be forced to upgrade. Your current version keeps working exactly as it does today. See our [full version policy](https://traveldocumentvault.com/pricing-policy/#version-policy) for details.

How do I get a refund?

All purchases are processed through the respective App Store. For refunds, you'll need to request one through Apple or Google. Please check your purchase receipt email for instructions on how to request a refund from the store where you downloaded the app.

## Troubleshooting

I'm not receiving reminder notifications

Check that notifications are enabled for Travel Document Vault in your device Settings → Notifications. Also ensure you've added an expiry date to your document. Reminders are only scheduled when there's an expiry date.

OCR isn't detecting my expiry date

OCR works best with good lighting and a flat document. Try adjusting the angle or lighting. If detection fails, you can always enter the expiry date manually. OCR is assistive. It's designed to help, not replace careful data entry.

Why is my document image blurry or low quality?

Document quality depends on the source image, lighting, and the app's cropping, resizing and compression. Saved photos may be cropped, resized and compressed; OCR may enhance a temporary copy for text recognition. For best results: use good lighting (natural light works well), hold your phone steady, ensure the document is flat and fully visible in the frame, and clean your camera lens. The same applies to exported PDFs. Print quality reflects your original capture quality.

The app crashed. Did I lose my data?

Probably not. Your data is saved automatically when you add or edit documents. A crash shouldn't cause data loss. Reopen the app and check your documents. If you're seeing issues, please contact us at support@traveldocumentvault.com.

## Setup and recovery

How is my cloud backup encrypted?

Your vault is encrypted end-to-end using AES-256-GCM on your device before it leaves your phone. A key derived from your recovery code protects the randomly generated vault encryption key. Apple and Google can see the encrypted file on their servers, but they cannot decrypt it. Neither can we. Your recovery code unlocks the cloud encryption key; configured devices retain access for automatic backup.

[Read full guide →](https://traveldocumentvault.com/faq/backup-explained/)

How do PIN, Face ID, and recovery code work together?

Your PIN is the day-to-day lock. Face ID is a fast shortcut to unlock. The recovery code is the master key for when you forget your PIN entirely. If Face ID fails, try your PIN. If you forget your PIN, enter your recovery code. If no unlock method works, you may need to reset the local vault, then restore an export or a cloud backup for which you still have the recovery code.

[Read full guide →](https://traveldocumentvault.com/faq/recovery-code/)

How do I export and import my vault?

You can export supported vault records and available attachments as an encrypted, password-protected backup file (.tdvault) from Settings, subject to size limits, then import it into a compatible installation of the app. Export and import transfer supported vault records and available attachments; device security settings, preferences and some internal state are not copied exactly. For step-by-step instructions, see the export-import walkthrough. (Combined multi-document PDF export is a separate Pro feature.)

[Read full guide →](https://traveldocumentvault.com/faq/export-import/)

Days inside or days outside a country: which should I pick?

Ask yourself one question: are you a guest in this country, or is it your home? Guests count the days they are there, so pick **Days inside** - that is the one for a visitor limit such as 90 days. Residents count the days they are away, so pick **Days outside** - that is the one for a residence permit that allows a certain time abroad. Most people need only one of the two, and if you are unsure, Days inside is the more common choice.

What are family profiles?

With Pro, profiles help you organise each family member's documents, photos and reminders within the same vault. They do not have separate access locks. With cloud backup on, profiles sync to devices connected to the same cloud vault.

What happens when I delete something?

Without cloud backup, deleted items go to the trash for 30 days and are then permanently removed from your device. You can restore them at any time during that 30-day window. With cloud backup enabled, items stay in Recently Deleted **indefinitely** until you tap Delete Forever. See the Cloud Backup section below for details. Clearing the trash or factory-resetting your phone removes local data; recovery requires a usable independent backup.

## Cloud Backup

What happens when I delete a document with cloud backup enabled?

Deleting moves it to **Recently Deleted** (trash). It stays there indefinitely, there is no automatic purge when cloud backup is on. The trashed document is still backed up to your cloud. To permanently remove it, go to Recently Deleted and tap **Delete Forever** on each item. You will see a warning that this also removes it from your cloud backup.

What happens if I delete all my documents?

The app blocks some empty-vault uploads to protect existing backups; deleted records and other vault data may still sync. Recovery depends on a usable retained backup. You can restore from it using **Settings**, **Cloud Backup**, **Restore from Backup**.

How do I set up cloud backup on a second device?

When you enable cloud backup on a new device signed into the same iCloud or Google account, the app detects your existing backup and asks whether to restore it or start a new backup. Choose your backup, tap **Restore** and enter your recovery code. Both devices then share the same backup. Starting a new backup instead leaves the existing one untouched.

Can I use cloud backup on multiple devices at the same time?

Yes, with **Sync across devices** turned on in Settings - Cloud Backup. Devices on the same platform check for changes while the app is open and connected. Some changes merge automatically; some conflicts offer a choice of versions, although note text is not shown in the comparison. To move to a new device, restore from your backup on the new device.

What if I enable cloud backup while offline?

You need an internet connection to enable cloud backup. The app checks for existing backups in your cloud account during setup, which requires connectivity. Once enabled, the app works fully offline and syncs when you are back online.

Is my backup protected if I accidentally delete something?

Yes, multiple layers protect you. Deleted documents stay in Recently Deleted indefinitely (no auto-purge with cloud backup on). Permanent deletion requires a separate confirmation that warns about cloud impact. Earlier backup versions may retain the document until history retention or backup cleanup removes it. Empty-upload safeguards and retained backup versions can help after accidental deletion; keep an independent export as well.

Should I keep my own backup copies as well?

**Yes.** Cloud backup is one safety layer, but no system is perfect. Cloud accounts can be lost, recovery codes can be forgotten, and unexpected sync or storage issues can happen. We strongly recommend keeping an independent copy of critical documents, such as a printed copy in a safe place or an encrypted vault export saved to separate storage. Treat cloud backup as a convenience, not your only line of defence. **You are responsible for verifying your documents remain recoverable.**

What happens if I lose my recovery code?

Your recovery code unlocks your cloud backup's encryption key; configured devices retain it for automatic backup. We have a **zero-knowledge design**, which means we cannot reset, retrieve, or recover it for you. Neither can Apple or Google. If you lose the recovery code and access to every configured device that retains it, your encrypted cloud backup becomes **unrecoverable**. Save your recovery code somewhere safe before you depend on cloud backup. A password manager, a printed copy in a secure location, or both. Verify you can read it back before you store it as your only copy.

## Legal & Disclaimers

Is this app a replacement for official documents?

**No.** Travel Document Vault is a personal organisation tool only. It does not replace official documents, verify authenticity, or guarantee compliance with any immigration requirements. Always carry your original documents when travelling and verify requirements with official government sources.

What if I miss a deadline because of a reminder failure?

Reminders are a convenience feature and should not be your only reminder system. We are not liable for missed deadlines, expired documents, or any consequences resulting from reminder failures. Please see our [Terms of Service](https://traveldocumentvault.com/terms/) for full details.

[For a full comparison, see why families choose Travel Document Vault →](https://traveldocumentvault.com/why-us/)

## Still have questions?

We're here to help. Reach out and we'll get back to you as soon as possible.

[Contact Support](mailto:support@traveldocumentvault.com)
