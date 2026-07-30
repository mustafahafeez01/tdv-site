# Privacy Policy | Travel Document Vault

> How Travel Document Vault handles data. Documents stay on your device using system protections.

Source: https://traveldocumentvault.com/privacy-policy/

---

Last updated: 27 July 2026

Travel Document Vault (provided by Mustafa Hafeez) ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application, Travel Document Vault (the "Application"). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.

This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, which may also collect and use data about you. We are not responsible for any of the data collected by any such third party.

## Introduction

Travel Document Vault is designed to provide a secure, local environment for managing your personal travel documents. Our philosophy is strict data isolation: your sensitive documents belong solely to you, on your device. The Application operates without user accounts and without any backend servers run by us. We have never operated a server that holds user data, and we never will. We do not see, hold, or have access to your documents. If you choose to enable our optional Your Own Cloud backup feature, an encrypted copy of your vault is stored in your own iCloud or Google Drive account using end-to-end encryption with a recovery code only you hold. That encrypted copy is unreadable to us, to Apple, and to Google.

## No Accounts & No Tracking

We operate with a strict privacy-first policy:

- **No accounts:** You do not create an account to use the Application.
- **No tracking:** We do not track your location, usage patterns, or document contents.
- **No analytics by default:** We do not collect behavioral analytics or usage data.

## Information We Do NOT Collect

To be clear about our privacy-first approach, the Application does **not** collect any of the following, and none of it ever reaches us:

- Personal identification information (name, email, phone number)
- Document images or scans
- Passport numbers, visa numbers, or other document identifiers
- Travel plans or itineraries
- Location data
- Usage analytics or behavioral data
- Advertising identifiers

The only technical data flows are described under Third-Party Services below: optional, opt-in crash reports (Sentry), consent-gated analytics on our public website, and on-device purchase verification handled directly by Apple or Google. None of these include your documents or anything in your vault.

## Information Handling

All information entered into the Application - including document images, passport details, notes, and expiry dates - stays on your local device by default and is never sent to us. The only exception is the optional Your Own Cloud backup feature (see below): if you choose to enable it, an encrypted copy of your vault is stored in your own iCloud or Google Drive account, which we never operate or access. The Application uses on-device Optical Character Recognition (OCR) technology solely to assist in data entry.

**Assistive features:** Optical character recognition and reminder features are assistive only. Detected dates and reminders should always be reviewed and verified by the user. The app does not verify documents or provide legal or travel advice. For the full limitation of liability that applies to your use of the Application, please see our [Terms of Service](https://traveldocumentvault.com/terms/).

## Data Storage

All documents and related data are **encrypted on disk** locally on your device using AES-256-GCM encryption. The app scrambles your files before saving them to your device's storage.

By default, the app does not upload, sync, or back up your documents anywhere. We do not run servers. If you choose to enable Your Own Cloud (see next section), an encrypted copy of your vault is stored in your own iCloud or Google Drive account, sealed with a key only you hold. We never receive your data and never operate infrastructure that stores it.

If you have **iCloud Backup** (iOS) or **Google Backup** (Android) enabled at the operating-system level, your encrypted local app data is included in your operating system's device backup. This is handled by your operating system, not by us. Note that such a backup can reinstall the Application but cannot restore your documents on a new or reset device, because the encryption key never leaves your original device - use Your Own Cloud backup or a Vault Export for a restorable copy. When you manually export your vault, the export file is **password-protected** with AES-256-GCM encryption and PBKDF2 key derivation, so your data remains encrypted even outside your device.

These technical descriptions are provided for transparency. They are not a security certification or a guarantee - no method of electronic storage is completely secure. See our [Terms of Service](https://traveldocumentvault.com/terms/) for the limitations that apply.

## Your Own Cloud (Optional Backup)

The Application offers an **optional** backup feature called **Your Own Cloud**. It is **off by default**. You enable it from inside the app and you can turn it off at any time.

When enabled, an encrypted copy of your vault is stored in **your own iCloud account** (iOS) or **your own Google Drive account** (Android). It is never stored on any server we operate. We do not run servers that hold user data and we never have.

**How the encryption works:**

- When you turn on backup, the app generates a **recovery code** on your device. This recovery code is your only key.
- The recovery code is processed using PBKDF2 with 600,000 iterations, then HKDF, to derive the keys that seal your vault.
- Your vault is sealed with AES-256-GCM before it ever leaves your device.
- The recovery code is **never sent to us**, never sent to Apple, and never sent to Google. Only you have it. If you lose it, no one can recover your backup, including us.
- Apple and Google see only an encrypted blob in your iCloud or Google Drive folder. They cannot read its contents. Neither can we.
- We see nothing. We have no servers, no logs, and no telemetry tied to your backup.

**What is uploaded:** An encrypted blob containing your documents, profiles, trips, notes, expiry dates, and reminders. Everything in your vault, sealed as one package before it leaves your device.

**Multi-device sync:** Once enabled, you can install the Application on another device, sign in with the same iCloud or Google account, enter your recovery code, and restore your vault. Subsequent changes sync between your devices through your own cloud account, end-to-end encrypted at every step.

**Turning it off:** You can disable Your Own Cloud at any time inside the app. When you disable it, the Application removes the encrypted blob from your iCloud or Google Drive folder. Your local vault on your device is unaffected.

**Provider relationship:** Apple Inc. (iCloud) and Google LLC (Google Drive) act as blind storage for the encrypted blob. Their handling of the file is governed by your own iCloud or Google account terms. Because we never operate servers and never receive your data, no data processing agreement between you and us is needed for the backup contents.

**Legal basis (UK GDPR / EU GDPR):** Your explicit, opt-in consent (Article 6(1)(a)), given inside the Application when you enable the feature. You can withdraw consent at any time by disabling the feature.

## Data Retention

Your data persists on your device for as long as you choose to keep the Application installed. Since all data is stored locally:

- Data remains on your device until you manually delete it within the app or uninstall the Application
- Uninstalling the Application permanently deletes all data stored on that device. If you enabled Your Own Cloud backup, the encrypted backup remains in your own iCloud or Google Drive until you disable the backup in the app or delete the file from your own cloud storage
- We cannot access, recover, or delete your data remotely
- You have full control over your data at all times

## Data Sharing

Data export or sharing is strictly user-initiated. Information leaves the Application only when you explicitly interact with the system share sheet, or through optional features you have enabled: Your Own Cloud backup (which syncs your encrypted vault to your own cloud account) and opt-in crash reporting. Beyond those, the Application performs no background transmission of data.

## Third-Party Services

The Application (App) minimizes reliance on external services to preserve privacy. We do not use advertising networks or third-party analytics within the **Application (App)** to track user behavior.

**Website Analytics:** When you visit our public website (traveldocumentvault.com), we use anonymous analytics (Google Analytics) to understand site traffic and improve our marketing. **This website analytics data is ONLY collected if you consent via our cookie banner.** This data is aggregate only and is never linked to your personal data or your activity within the App. Website analytics events include which store button you tapped and the page you were on.

### Software Update Check (first-party)

Settings includes a **Check for Updates** button. It runs only when you tap it - never automatically and never in the background. The check contacts **updates.traveldocumentvault.com**, an update server we operate ourselves on Google Cloud, which serves cryptographically signed update files from a storage bucket. The request carries only what is technically necessary: your platform (iOS or Android), the app's runtime version, and - as with any internet request - your IP address at the connection level. **We retain none of it:** request logging is disabled on our server, so no IP addresses, identifiers, or usage records are kept. We cannot tell who checked for updates, or how many people did. Every update file is signed with a private key only we hold, and the Application verifies the signature against a certificate built into the app before installing anything.

### Purchase Verification

Pro purchases are processed and verified directly between your device and the Apple App Store or Google Play Billing. We operate no server in this flow and never receive your payment details or identity. Your app store's own privacy policy governs that transaction.

### Crash Reporting (Sentry)

The Application uses **Sentry** (sentry.io) for optional crash reporting to help us identify and fix critical application issues. When enabled, the Application automatically sends anonymous crash reports **only when the app crashes completely and stops working**.

**Crash reports may include:**

- Device type and model
- Operating system version
- Application version
- Anonymized crash stack traces

**Crash reports never include:**

- Document images or scans
- Document contents or metadata you've entered (names, numbers, dates, expiry info)
- OCR data or extracted text
- File contents or attachments
- Device IDs, email addresses, or personal identifiers

**Manual error reporting:** For non-fatal errors (export failures, feature issues), the app captures detailed error logs locally on your device. You can export these logs at any time via Settings > Data & Privacy > "Export Error Logs" and send them to us if you need support. **Error logs never leave your device unless you explicitly export and share them.**

**You have full control:** Crash reporting is **opt-in** and disabled by default. You can enable or disable it at any time in Settings > Data & Privacy > "Help Improve the App". All document storage and OCR processing remain entirely on the device and are never transmitted to Sentry or any external server, regardless of this setting.

**Data processing location:** Crash report data may be processed by Sentry, Inc. in the United States. Sentry maintains compliance with applicable data protection frameworks. You may opt out at any time by disabling crash reporting in Settings.

### Biometric Authentication

The Application offers optional biometric authentication (Face ID, Touch ID, or fingerprint unlock) for convenient app access.

**Your biometric data never leaves your device.** The Application uses your device's built-in Face ID or Touch ID. We never access, store, or process your biometric data. The Application only receives a simple "unlocked" or "locked" result from your device.

**Requirements:** To use biometric unlock, you must have Face ID or Touch ID already set up in your device settings. Biometric authentication is optional and can be disabled at any time in the Application's Settings.

## Notifications

Expiry reminders are managed locally via the device's notification center. The scheduling and delivery of these alerts occur entirely on-device, ensuring that your travel plans and document expiry dates are not tracked externally. **Notification content uses generic messages** (e.g., "A document expires soon") and does not reveal passport numbers, visa details, or other sensitive information in the notification preview.

## User Control

You retain complete autonomy over your data. You may add, modify, export, or permanently delete records at your discretion. As there are no user accounts or remote servers, deleting the Application from your device results in the immediate and permanent removal of all associated local data.

## Children's Privacy

The Application is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. Since the Application does not collect any personal information and stores all data locally on your device, there is no mechanism through which we could collect data from children.

If you are a parent or guardian and believe your child has provided information to us, please contact us at the email address below. However, please note that since we do not operate servers or collect data, we have no data to delete.

If you use the Application to store a family member's documents, including a child's passport or ID, that information receives exactly the same protection as your own: it is encrypted and stored locally on your device by default, and it is never transmitted to us. If you choose to enable the optional Your Own Cloud backup feature (see above), it is end-to-end encrypted before it ever leaves your device and stored only in your own iCloud or Google Drive account, never on any server we operate. It remains under your control at all times.

## California Privacy Rights

California residents may have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA/CPRA). The Application does not collect, sell, or share your personal information - your vault data stays on your device under your exclusive control. The limited technical data described under Third-Party Services (consent-gated website analytics and opt-in crash reports) is never sold or shared and is used only as described there. To exercise any applicable rights, contact [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com).

## European Economic Area, UK & International Users (GDPR)

If you are located in the European Economic Area (EEA), United Kingdom, or any jurisdiction with similar data protection laws, the following applies:

**Data Controller:** Mustafa Hafeez is the data controller for any personal data processed through the Application. Contact: [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com)

**Legal Basis for Processing:** To the limited extent that we process any personal data (crash reports via Sentry, if enabled), our legal basis is your **consent** (Article 6(1)(a) GDPR), given when you enable crash reporting in the Application's Settings - it is off by default. You may withdraw consent at any time by disabling it there.

**Your Rights:** Under applicable data protection laws, you have the right to:

- **Access** any personal data we hold about you
- **Rectification** of inaccurate personal data
- **Erasure** ("right to be forgotten") of your personal data
- **Restriction** of processing
- **Data portability**
- **Object** to processing based on legitimate interests
- **Lodge a complaint** with your local data protection authority

Because the Application stores all document data exclusively on your device and we have no access to it, most of these rights are exercised directly by you through the Application (e.g., deleting data, exporting data). For crash report data processed by Sentry (if enabled), you may exercise your rights by contacting us at the email above or by disabling crash reporting in Settings.

**International Transfers:** Crash report data (if enabled) may be processed by Sentry in the United States. Sentry maintains appropriate safeguards for international data transfers. You may opt out at any time.

## Cookies and Similar Technologies

The Application sets no cookies. It has no browser, no web view for your documents, and no advertising code.

**On this website:** nothing is loaded until you answer the banner. If you decline, no analytics script runs and no analytics cookies are created. If you accept, Google Analytics loads and sets its own cookies so we can see which pages people read. We enable IP anonymisation, and we record the page language so we can tell which translations are worth maintaining.

**Remembering your choice:** your answer is stored in your browser's local storage under `cookie_consent_status`, so we stop asking. That is not a cookie and is never sent to us or to anyone else. To change your mind at any time, use the Cookie settings link in the footer of any page. It clears your stored choice and brings the banner back, so withdrawing is exactly as easy as giving.

## Changes to This Policy

We update this policy when the Application changes in a way that affects your privacy, or when the law requires it. The date at the top of this page always reflects the current version.

If a change materially affects how your information is handled, we will say so in the app's release notes rather than relying on you to re-read this page. Optional features that involve a third party - crash reports, Your Own Cloud backup, website analytics - stay off until you turn them on, and a change to this policy never turns one on for you.

## Contact Information

For questions about this policy, contact [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com)

Looking for proof, not promises? See our [Privacy Verification](https://traveldocumentvault.com/privacy-verification/) page for independent tracker scans, network traffic evidence, and a full breakdown of every permission the app requests.
