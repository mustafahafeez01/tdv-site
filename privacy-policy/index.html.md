# Privacy Policy | Travel Document Vault

> How Travel Document Vault handles on-device storage, optional encrypted backup, diagnostic reports and website information.

Source: https://traveldocumentvault.com/privacy-policy/

---

Last updated: 15 November 2026

Travel Document Vault (provided by Mustafa Hafeez) ("we", "us" or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard information in connection with the Travel Document Vault application (the "Application") and our public website. Please read it to understand our information practices.

We may update this Privacy Policy as described under Changes to This Policy below. The "Last updated" date identifies the current version. Updating this notice does not itself provide consent to new processing or enable any optional feature.

The app stores through which you install the Application or make purchases have their own privacy notices. This Privacy Policy describes our practices; it does not replace those notices or limit any responsibility we have under applicable law.

## Introduction

Your vault documents and the details you enter are stored on your device by default. You do not need to register or create an account with Travel Document Vault to use the Application. Optional Pro Cloud Backup uses your own iCloud or Google account.

We do not operate a service for storing or syncing your vault documents or the details you enter. Our existing commitment not to operate such a vault-storage service remains unchanged. The Application does not give us remote access to the vault stored on your device. If you enable Cloud Backup, the Application encrypts your vault content on your device before uploading it to your own cloud account. Your cloud provider receives encrypted vault content, together with some readable operational backup metadata described under Cloud Backup below. Cloud Backup does not send your recovery code or decryption keys to us.

Our software-update service is separate from vault storage and is described under Third-Party Services below. If you choose to send us files or information for support, we receive what you send.

## No Accounts & No Tracking

The Application is built to work without telling us who you are:

- **No Travel Document Vault account:** You do not need to register or create an account with us to use the Application. Two optional features use accounts you already hold with someone else: Pro purchases use your App Store or Google Play account, and Cloud Backup uses your own iCloud or Google account. Those accounts are run by Apple or Google, not by us.
- **No tracking by us:** The Application contains no advertising networks. We do not use it to track your location or to build a profile of how you use it, and it is not designed to send us the contents of your documents.
- **No analytics by default:** The Application sends us no usage analytics by default. Optional diagnostic reporting, described under Third-Party Services below, stays off unless you turn it on.

## Information We Do NOT Collect

Core vault storage does not send us the document content or personal details you enter. The following list describes that local vault content and the tracking data the Application is not designed to collect for us. It does not exclude the support, diagnostics, update-request and purchase-related information described below.

- Your name, email address or phone number
- Document images or scans
- Passport numbers, visa numbers, or other document identifiers
- Travel plans or itineraries
- Location data
- Usage analytics or behavioural data
- Advertising identifiers

There are situations in which we, or a provider acting for us, do receive information. If you contact us, we receive your email address and whatever you choose to send, which could include any of the items above. If you turn on optional diagnostic reporting, technical error and crash reports are sent to our diagnostics provider. If you tap Check for Updates, a technical request goes to the app store and to our update service. If you accept analytics on our website, Google Analytics collects website usage data. Store purchase or order information may also be available to us for entitlement checks, support and refunds, as described under Purchase Verification. Each of these is described in this policy.

Other information goes to parties other than us because of a choice you make: Cloud Backup files go to your own iCloud or Google Drive account, purchases go through your app store, and anything you export or share goes wherever you send it.

## Information Handling

The information you put into the Application - including document images, passport details, notes and expiry dates - is stored on your device by default. The Application does not send it to us. Application features that send this information outside your device include: optional Cloud Backup to your own iCloud or Google Drive account (see below), the Export vault feature, sharing an item through your device's share sheet, and sending something to us for support. Your operating system may also include some app data in its own backups, as explained under Data Storage. The Application uses Optical Character Recognition (OCR) on your device to help with data entry.

**Assistive features:** Optical character recognition and reminder features are assistive only. Detected dates and reminders should always be reviewed and verified by the user. The app does not verify documents or provide legal or travel advice. For the full limitation of liability that applies to your use of the Application, please see our [Terms of Service](https://traveldocumentvault.com/terms/).

## Data Storage

The Application encrypts stored document files on your device using AES-256-GCM. Its structured vault database uses SQLCipher encryption.

By default, the Application keeps your vault documents and the details you enter on your device. It does not upload them, and it does not sync or back them up to a cloud account. Optional Pro Cloud Backup stores encrypted vault content in your own iCloud or Google Drive account. Some operational backup metadata is readable by the provider, as explained under Cloud Backup below. Cloud Backup uses your own cloud account, not a service we run. It does not change our commitment not to operate a service for storing or syncing your vault documents or the details you enter.

If you use iCloud Backup or your Android device's backup, your operating system may include some of the Application's data in that backup. This is handled by your operating system under its own settings, not by us. Do not rely on a device or system backup as your only way to preserve access to your vault. Keep an app Cloud Backup or an Export vault file, together with the recovery code or export password needed to restore it. The Export vault feature creates a password-protected file using AES-256-GCM and PBKDF2 key derivation. The file includes an encrypted copy of the device encryption key. Files created by the current Export vault feature require their export password to restore them.

These technical descriptions are provided for transparency. They are not a security certification or a guarantee - no method of electronic storage is completely secure. See our [Terms of Service](https://traveldocumentvault.com/terms/) for the limitations that apply.

## Cloud Backup (Optional)

Cloud Backup is an optional Pro feature. It is off by default. You enable it inside the Application and can turn it off at any time.

Cloud Backup stores encrypted vault content in your own iCloud account on iOS or your own Google Drive account on Android. The backup goes from your device to your own cloud account; it is not sent to us. This is not a vault-storage service operated by Travel Document Vault. Our commitment not to operate a service for storing or syncing your vault documents or the details you enter remains unchanged.

**How encryption and recovery work:**

- The Application creates a recovery code on your device before you can enable Cloud Backup. Keep a copy safe. The Application keeps recovery credentials in secure storage on your device.
- When creating a new cloud vault-key record, the Application uses PBKDF2-SHA256 with 600,000 iterations to derive a key from your recovery code. That key protects the vault's encryption key. Further encryption keys are derived for backup contents. Vault content is encrypted on your device using AES-256-GCM before upload. Cloud Backup does not send your recovery code or decryption keys to us.
- If you still have authorised access to a device that can open the vault, the Application may let you replace the recovery code. We cannot supply a lost recovery code. If you lose the code and access to every device that can open the vault, we cannot recover the encrypted backup for you.

**Backup contents and metadata:** The backup uses multiple encrypted files, rather than one file containing everything. Some operational information is not encrypted by the Application. This includes device names and types, platform and app-version information, item counts, timestamps, vault identifiers, sequence numbers and integrity hashes. The cloud account also holds key-derivation parameters, salt and an encrypted copy of the vault key. These are separate from the encrypted vault content and do not contain your recovery code. Your cloud provider can read the unencrypted operational information.

**Restoration and sync:** You can use Cloud Backup to restore or sync on another supported device using the same backup provider and cloud account. You need your recovery code to restore the encrypted vault. Device compatibility, your cloud account and a successful connection affect whether backup, restore and sync can complete. An iCloud backup is separate from a Google Drive backup; this feature does not transfer a backup between those providers.

**Turning it off:** Turning Cloud Backup off stops backup and sync from that device. It does not by itself delete an existing cloud backup. The Application offers separate choices to disable backup or to disable it and delete the cloud backup. If the Application reports a deletion error, do not assume the entire cloud backup has been removed. Files you exported or copies you shared are managed separately.

**Provider relationship:** Your cloud provider handles the files in your own account under its terms and privacy notice. The vault contents are encrypted, but the operational information described above is readable to the provider. Do not treat disabling Cloud Backup or deleting a backup through the Application as a promise that every provider-retained version or separately saved copy has been erased.

Cloud Backup is optional. You enable it in the Application and can stop backup and sync from that device by disabling it. Disabling does not delete existing cloud copies.

## Data Retention

How long information is kept depends on where it is held:

- **Your vault on your device:** you can remove records using the Application's controls. Device loss, deletion, reset or technical failure can also make local data unavailable. We cannot open, recover or delete your vault remotely.
- **Removing the Application:** uninstalling can remove local app data. Your operating system controls what remains, including secure-storage entries or device-backup copies.
- **Cloud Backup:** turning Cloud Backup off or uninstalling the Application does not itself delete existing cloud copies. Use the Application's explicit deletion option or the provider's available controls to request removal; provider retention and technical failures can affect the outcome.
- **Exports and shared copies:** files you export or share are managed where you save or send them.

**Information held by us or for us:** the categories of diagnostic reports, update-service requests, store purchase or order information and support correspondence are described under Third-Party Services and Data Sharing. We delete routine support correspondence and attachments once the issue is resolved. We retain information needed for an ongoing complaint, refund or dispute, or where applicable law requires recordkeeping, only while that need continues. Deleting an email from our mailbox does not necessarily erase copies immediately from the email provider’s trash or backups. This policy does not yet set out our retention periods or criteria for developer-held identifiable order records. You can ask us what we hold, and ask us to delete it, using the contact details below.

**Website analytics** (only if you accepted the cookie banner on traveldocumentvault.com): Google Analytics keeps event-level data for 2 months and user-level data, tied to the random identifier in its cookie, for 14 months. New activity recorded while analytics consent is active restarts that 14-month period. Google deletes data that reaches the end of its period in a monthly clean-up. Summary reports that contain no identifiers, such as total page views, are not affected by these settings. Website analytics loads only after you give consent, including when a previously granted choice is stored in your browser. You can withdraw consent through Cookie settings at any time. Withdrawal stops further consent-based analytics collection; it does not automatically delete information already received by Google.

## Data Sharing

We do not sell your personal information. The Application's export, sharing and optional Cloud Backup functions send information to the destinations described below. Operating-system backups are controlled separately by your device settings. Information leaves the Application in these situations:

- **Export and sharing:** when you export your vault or share an item through your device's share sheet, the file goes to the app or person you choose.
- **Cloud Backup (optional, Pro):** encrypted vault content and some readable operational metadata go to your own iCloud or Google Drive account, as described under Cloud Backup above.
- **Diagnostic reporting (optional):** if you turn it on, error and crash reports go to Sentry, as described under Third-Party Services below.
- **Check for Updates:** when you tap it, the Application contacts your app store and our update service, as described below.
- **Purchases:** buying or restoring Pro goes through the Apple App Store or Google Play.
- **Support:** if you email us, we receive your email address and whatever you choose to send, including any error logs or files you attach. We use it to answer you and to fix problems.
- **Operating-system backups:** your device's own backup may include some of the Application's data, under your operating system's settings.

We may also disclose information we hold where the law requires it. The Application does not give us remote access to your vault, and Cloud Backup does not send us your recovery code or decryption keys. We therefore cannot obtain them through that workflow. If you separately send us files or information for support, we receive what you send. Please do not send recovery codes, passwords or decryption keys.

## Third-Party Services

The Application keeps its reliance on external services small. We do not use advertising networks or third-party analytics within the **Application** to track user behaviour. The services below are the ones involved in the Application and our website.

**Website Analytics:** When you visit our public website (traveldocumentvault.com), we use Google Analytics to understand site traffic and improve our marketing. **Website analytics loads only after you give consent, including a previously granted choice stored in your browser. You can withdraw consent through Cookie settings at any time. Withdrawal stops further consent-based analytics collection.** We read analytics data as summary reports. Google Analytics recognises a returning browser by a random identifier stored in its cookie, not by your name or email. The website and the Application are separate, and the Application does not send its activity to Google Analytics. Website analytics events include which store button you tapped, the page you were on and the page language.

**Cloud provider sign-in (Cloud Backup only):** On iOS, Cloud Backup uses the iCloud account on your device. On Android, enabling Cloud Backup asks you to sign in with Google. The Application asks for permission to use its own app-data area in your Google Drive, rather than general access to your Drive files. Google and its sign-in software handle your account information; signing in can involve identity information. This is a sign-in with your cloud provider, not an account with us.

### Software Update Check (first-party)

Settings includes a **Check for Updates** button. In the current release the check runs only when you tap it. It does two things. First, it asks the Apple App Store (iOS) or Google Play (Android) for the current store version of the Application. That request goes to Apple or Google, not to us. Second, it contacts **updates.traveldocumentvault.com**, an update service we operate on Google Cloud, to check for a signed update and to download one if it is available.

The request to our update service includes technical information such as your platform (iOS or Android) and the app's runtime version. As with any internet request, the service and its hosting provider also receive your IP address. The request does not include your vault documents or the details you enter. Our update service is not designed to keep its own record of who checked for updates. Updates are signed, and the Application is designed to check the signature against a certificate built into the app before applying an update.

### Purchase Verification

Pro purchases are processed by the Apple App Store or Google Play using your store account. Your local Pro price is shown by the store before you confirm a purchase. The store handles payment. The Application uses the platform's native purchase and entitlement functions to check and restore Pro. These flows can process purchase identifiers, receipts or purchase tokens. Purchases awaiting completion are kept in a secure device-storage queue so the Application can retry completing them with the store. The queued item is removed after store completion succeeds; failed attempts can remain for recovery, and an empty queue is removed. Purchase identifiers can also appear in error logs kept on your device. If you export local error logs, you choose where to send the exported report. Optional diagnostic error reports are separate and may contain personal information despite filtering. Apple and Google may make purchase or order information available to us through their developer services. We do not receive your full payment-card credentials through the Application's store checkout. Purchase, transaction or order information may be available to us for entitlement checks, support and refunds. The store also handles information under its own privacy notice; that does not remove our responsibility for information we process.

### Crash Reporting (Sentry)

The Application uses **Sentry** (sentry.io) for optional diagnostic reporting, to help us find and fix problems. It is off by default. When enabled, diagnostic reporting can send crash and exception reports, including some errors that do not stop the app. It is not limited to complete crashes.

**Reports may include:**

- Device type and model
- Operating system version
- Application version
- Stack traces, error messages and technical details of what failed

A report travels over the internet, so Sentry's servers also receive the IP address of the connection. Our project uses Sentry's server-side and default data scrubbers and is configured to prevent IP addresses from being stored in new events. This setting does not itself erase information already stored. Diagnostic filtering is a safeguard, not a guarantee that a report contains no personal information. Sentry processes diagnostic report data for us under its [Data Processing Addendum](https://sentry.io/legal/dpa/), which sets out its data-protection obligations.

**Reports are not intended to include:**

- Document images or scans
- Document contents or details you've entered (names, numbers, dates, expiry info)
- OCR data or extracted text
- File contents or attachments
- Email addresses or account identifiers

**Safeguards and their limits:** Before a report is sent, the Application switches off Sentry's default collection of personal identifiers, removes user, request and breadcrumb data, and redacts text in the report. These safeguards work on a best-effort basis. We cannot promise that a report will never contain personal information, for example if an error message happens to include it.

**Local error logs:** Separately, the Application keeps error logs on your device. In the Support section of Settings, choose "Export error logs" to create a text or compressed text report and open your device's sharing flow. You choose where to send it. This export action does not automatically upload the report to us and is separate from optional Sentry reporting. Review the report before sharing it; it may contain personal information.

**Your choice:** Diagnostic reporting is **opt-in** and disabled by default. You can enable or disable it using "Help Improve the App" in the Support section of Settings. Turning it off tells the Application to stop sending further reports. It does not delete reports already sent; contact us if you want to ask about those. Document storage and OCR happen on your device whether this setting is on or off.

**Data processing location:** Our Sentry organisation uses the European Union data-storage region for diagnostic event data. This does not mean that every provider account, support or subprocessor operation stays within that region; see International Transfers below.

## Biometric Authentication

The Application offers optional biometric authentication (Face ID, Touch ID, or fingerprint unlock) for convenient app access.

**Authentication is handled by your device's operating system.** The Application uses the operating system's authentication interface, which returns success, failure or error information rather than face or fingerprint templates or images. The system may allow your device passcode as a fallback, so a successful unlock does not necessarily mean that a biometric was used. The Application does not receive your face or fingerprint templates or images through this interface, and neither do we.

**Requirements:** To use biometric unlock, you must already have biometrics set up in your device settings. Biometric authentication is optional and can be disabled at any time in the Application's Settings.

## Notifications

Expiry reminders use the device's local notification scheduling system. A reminder can show the profile name and the document title you entered, so that you know which document it concerns. What appears on your lock screen also depends on your device's notification preview settings. If you would rather keep these labels private, change the notification preview setting for the Application in your device settings, or use titles that reveal less.

## User Control

You decide what goes into your vault. You can add, change, export or delete records in the Application whenever you choose. Optional features stay off until you turn them on, and you can turn them off again: Cloud Backup and diagnostic reporting in the Application's Settings, and website analytics through Cookie settings. Withdrawal stops further consent-based website analytics collection; it does not automatically delete information already received by Google.

Uninstalling can remove local app data. Your operating system controls what remains, including secure-storage entries or device-backup copies, as described under Data Retention above. Uninstalling does not delete a Cloud Backup in your cloud account, files you have exported or copies you have shared. You manage those where they are held. To ask about information held by us or for us, use the contact details below.

## Children's Privacy

The Application is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.

If you are a parent or guardian and believe your child has provided information to us, for example by emailing us, please contact us at the email address below. We will look for it and delete what we hold.

If you use the Application to store a family member's documents, including a child's passport or ID, that information is handled in the same way as your own. It is encrypted and stored on your device by default, and the Application does not send it to us. If you enable optional Cloud Backup (see above), it is encrypted on your device before upload and stored in your own iCloud or Google Drive account, not on a service we operate. The readable operational metadata described under Cloud Backup applies in the same way.

## California Privacy Rights

California residents may have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA/CPRA). We do not sell your personal information. The limited information described in this policy (support correspondence, optional diagnostic reports, update-service requests, store purchase or order information and consent-gated website analytics) is not sold or shared for cross-context behavioural advertising. Disclosures to service providers for the purposes explained in this policy are described separately above. To exercise any applicable rights, or to ask what we hold about you, contact [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). We will not treat you differently for making a request.

## European Economic Area, UK & International Users (GDPR)

If you are located in the European Economic Area (EEA), United Kingdom, or any jurisdiction with similar data protection laws, this section gives you further information about the personal data described in this policy.

**Data Controller:** Mustafa Hafeez is responsible for the personal data we process for the purposes described in this policy. This does not mean that we receive or control every document you keep locally or every use of your own cloud account. Contact: [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com)

**Legal Basis for Processing:** For optional diagnostic reports sent to Sentry, our legal basis is your **consent** (Article 6(1)(a) GDPR), given when you enable diagnostic reporting in the Application's Settings - it is off by default. For website analytics, our legal basis is your consent, given through the cookie banner. You may withdraw consent at any time, in Settings for diagnostic reporting and through Cookie settings for website analytics. Withdrawing consent does not affect the lawfulness of processing that was based on valid consent before withdrawal. It does not make earlier processing lawful if valid consent was missing, or remove other rights you may have.

**Who receives personal data:** Sentry (diagnostic reports, if enabled), Google (website analytics, if accepted, and hosting of our update service), our website host, and the provider of the email service we use for support. Apple and Google also act in their own right as your app store and, if you use Cloud Backup, as your cloud provider.

**Your Rights:** Under applicable data protection laws, you have the right to:

- **Access** any personal data we hold about you
- **Rectification** of inaccurate personal data
- **Erasure** ("right to be forgotten") of your personal data
- **Restriction** of processing
- **Data portability**
- **Object** to processing based on legitimate interests
- **Withdraw consent** at any time where we rely on it
- **Lodge a complaint** with your local data protection authority

Your vault is stored on your device and the Application does not give us access to it, so you act on that data yourself in the Application, for example by deleting or exporting it. For personal data held by us or for us, such as support correspondence or diagnostic reports, you may exercise your rights by contacting us at the email above. Diagnostic reports are designed not to identify you, so we may need to ask you for details that help us find a particular report.

**International Transfers:** Our Sentry organisation uses the European Union data-storage region for diagnostic event data. This storage setting does not mean that every provider account, support or subprocessor operation stays within that region. Website analytics data, if you accept analytics, is processed by Google and may be processed outside your country. Turning off optional diagnostics or website analytics stops future consent-based collection; it does not itself delete information already received by a provider.

## Cookies and Similar Technologies

The Application does not use advertising cookies and contains no advertising code.

**On this website:** If you decline before giving consent, no analytics script runs and no analytics cookies are created. Website analytics loads only after you give consent, including when a previously granted choice is stored in your browser. You can withdraw consent through Cookie settings at any time. Withdrawal stops further consent-based analytics collection; it does not automatically delete information already received by Google. If you accept, Google Analytics loads and sets its own cookies so we can see which pages people read. Google states that Google Analytics does not log or store individual IP addresses of users in the EU, Switzerland or the UK, and uses them only to work out an approximate location before discarding them. We record the page language so we can tell which translations are worth maintaining.

**Hosting and store links:** our website is hosted by Cloudflare. If that host is unavailable, the site may be served from a backup copy on GitHub Pages. Like any web host, these providers receive your IP address and request details in order to deliver the pages you ask for. Store buttons on our website carry a campaign tag that tells the Apple App Store or Google Play that the visit came from our website. The tag does not contain your name or email.

**Remembering your choice:** your answer is stored in your browser's local storage under `cookie_consent_status`, so we stop asking. That is not a cookie and it is not sent to us. To change your mind at any time, use the Cookie settings link in the footer of any page. It clears your stored choice and brings the banner back. Existing analytics cookies may remain until expiry or removal through your browser settings, but their presence does not authorise further collection after withdrawal.

## Changes to This Policy

We update this policy when the Application changes in a way that affects your privacy, when we find that a description here needs correcting, or when the law requires it. The date at the top of this page always reflects the current version.

If a change materially affects how your information is handled, we will say so in the app's release notes rather than relying on you to re-read this page. Optional features that involve a third party - diagnostic reports, Cloud Backup, website analytics - stay off until you turn them on, and a change to this policy never turns one on for you. Continuing to use the Application is not treated as consent to new processing.

## Contact Information

For legal or privacy enquiries, including requests about your personal data, contact [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com)

Our [Privacy Verification](https://traveldocumentvault.com/privacy-verification/) page explains our published privacy checks and the permissions used by the Application.
