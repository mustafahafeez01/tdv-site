# Privacy Verification | Travel Document Vault

> Checkable proof of Travel Document Vault's privacy: no advertising trackers, network tests you can run yourself, and every permission explained.

Source: https://traveldocumentvault.com/privacy-verification/

---

## The short version

### No advertising trackers

No ad networks, no behavioural analytics, and no tracking pixels inside the app. Optional crash reporting is separate and stays off unless you turn it on.

### No document data collection

Your documents, scans, expiry dates, and vault contents are not sent to Travel Document Vault. The app works fully offline for normal document storage and reminders.

### On-device by default

Documents stay on your device by default. There is no Travel Document Vault cloud account, document server, or backend database. Pro users can optionally back up an encrypted vault file to their own iCloud or Google Drive account - only they hold the recovery key.

### AES-256-GCM encryption

The app encrypts document data before saving it to local app storage.

## Verification

You do not need to take this on trust. These checks show the important parts: whether your vault data leaves the app, which domains appear, and which permissions Android reports.

### 1. Network traffic test

Install a network monitor such as **mitmproxy** (free, open source), **Wireshark** (free, open source), or **Charles Proxy**. Open Travel Document Vault, scan a document, browse your vault, and set a reminder. You should not see your documents, scans, expiry dates, or vault contents sent to Travel Document Vault. Network traffic should be limited to specific features: optional Sentry crash reporting, App Store or Google Play purchase checks, optional cloud backup to your own iCloud or Google Drive account, and a manual bug-fix check explained below.

Settings has a **Check for Updates** button. This is a manual check, never automatic, it runs only when you tap it yourself, never in the background and never on its own. The check contacts **updates.traveldocumentvault.com** - our own update server, run by us on Google Cloud, which serves cryptographically signed update files from a storage bucket. We keep no record of the check: request logs are disabled on our side, so no IP addresses are retained. Every update is signed with a key only we hold, and the app refuses anything whose signature does not match the certificate built into it. The same tap also checks the **App Store** or **Google Play** for a newer version of the app. It exists so that certain bug fixes can reach you faster than waiting for a whole new App Store or Google Play release, useful for urgent fixes, depending on the nature of the fix. Same rule as everything else on this page: no network call without you asking for it.

### 2. iOS App Privacy Report

On iPhone, go to **Settings > Privacy & Security > App Privacy Report**. This built-in Apple feature shows which apps have contacted network domains. Travel Document Vault does not send your documents, scans, expiry dates, or vault contents to us. If you have enabled Pro cloud backup, you will see connections to Apple's iCloud domains - that is your own backup syncing to your own iCloud account.

### 3. Android - checking your privacy

Android does not have a single built-in privacy report like iPhone. Two simple ways to check for yourself: look at this app's own **Data Safety** section on its Google Play page (it plainly states what is collected, what is shared, that your data is encrypted in transit, and that it cannot be deleted) - or use a network monitor as described in step 1 above.

If you have turned on Cloud Backup, you may notice some activity going to Google's servers (web addresses ending in **googleapis.com**). That is expected and safe: it is only your locked, encrypted backup file and a sign-in check being sent straight to **your own** Google Drive account - the same one you already use for photos or Gmail. We never see it, receive it, or keep a copy anywhere. Only you hold the recovery code that can unlock it.

### 4. App Store and Play Store privacy labels

Apple and Google require developers to declare what data their app collects. Check the App Store or Google Play listing for Travel Document Vault and compare it with the behaviour you see in your own network test. The key point to verify is simple: your document data is not collected by Travel Document Vault.

## How we test the app's security

We do not just say the app is safe. We check it, using the same open tools and public standards the security industry uses.

### We hold the app to a public standard

We review Travel Document Vault against the [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), the industry checklist for how a mobile app should store data, use encryption, lock behind Face ID or a PIN, and handle links from other apps. Anyone can read the standard and compare it with how the app behaves.

### We scan our own code

Before a build ships we run static analysis on our code with [Semgrep](https://semgrep.dev/), an open source tool that flags insecure patterns such as weak encryption or unsafe data handling, so we catch them early.

### We scan the built app

We also review our release builds with mobile app security scanning tools, checking how the build stores data, what it is allowed to reach, and how it is signed.

### Found a problem? Tell us

If you spot a security issue, email [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Our disclosure details are published at [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

This is our own assessment against a public standard, not an independent audit or a certification. Last reviewed July 2026.

## Every permission explained

Android apps declare permissions in their manifest. Some are requested by the app directly, and some are inherited from libraries the app depends on. Here is a transparent breakdown of every permission, grouped by purpose.

### Permissions the app uses directly

### Camera

iOS + Android

**Why we ask:** To scan your passport, visa, or travel document pages directly from the app.

**What we do not do:** Photos are saved locally on your device. We do not upload them to Travel Document Vault. A photo leaves the app only if you choose to export, share, or back up your vault.

### Photo Library / Photos / Storage

iOS + Android

**Why we ask:** So you can import an existing photo of a document, and so the app can export encrypted backup files (.tdvault) when you request them. On older Android versions, READ_EXTERNAL_STORAGE and WRITE_EXTERNAL_STORAGE are required for this. On Android 13+, READ_MEDIA_IMAGES is used instead.

**What we do not do:** The app reads only the image you select. It does not scan, index, or browse your photo library or file system.

### Face ID / Touch ID / Biometric unlock

iOS + Android

**Why we ask:** To lock and unlock the app so only you can access your documents. On Android 6–8, USE_FINGERPRINT is used. On Android 9+, USE_BIOMETRIC is used instead.

**What we do not do:** The app does not receive your biometric data. The operating system handles authentication and returns only a pass/fail result to the app.

### Notifications, Vibration, Boot Completed, Wake Lock

Android

**Why we ask:** To deliver on-device expiry reminders that you set yourself. RECEIVE_BOOT_COMPLETED re-schedules your reminders after a device restart. WAKE_LOCK ensures reminders fire reliably even when the phone is asleep. VIBRATE accompanies notification delivery.

**What we do not do:** We do not send marketing, promotional, or third-party notifications. Reminders are scheduled entirely on your device.

### Internet, Network State, Wi-Fi State

Android

**Why these appear:** These are required for network-aware features: **Sentry crash reporting** (opt-in, disabled by default), **App Store or Google Play billing** for the Pro upgrade purchase, **Pro cloud backup** (optional) which syncs your encrypted vault to your own iCloud or Google Drive, and the manual **Check for Updates** button in Settings (only runs when you tap it). ACCESS_NETWORK_STATE and ACCESS_WIFI_STATE let these features check whether a connection is available before attempting to send.

**What we do not do:** The app does not upload your documents, scans, expiry dates, photos, or vault contents to Travel Document Vault. It works fully offline for normal document storage and reminders.

### Permissions inherited from libraries (not used by the app)

Android apps include third-party libraries for features like in-app purchases, crash reporting, and notifications. These libraries declare permissions in their own manifests, which get merged into the final app. The permissions below are declared by dependencies, not by our own feature code.

### Record Audio

Inherited, never used

**Why it appears:** This permission is declared by a third-party library included in the build. It appears in the Android manifest but is not used by Travel Document Vault features. The app is designed for still document capture, not audio or video recording.

**How you can confirm:** The app should not prompt you for microphone access. You can also check your device's permission manager to confirm microphone access has not been granted to Travel Document Vault.

### System Alert Window

Inherited

Declared by a React Native framework dependency for development and debugging overlays. Travel Document Vault does not use overlay windows as a product feature.

### Detect Screen Capture

Inherited

Declared by a framework dependency. Travel Document Vault does not detect, block, or respond to screenshots as a product feature.

### Badge count permissions

Inherited

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, and PROVIDER_INSERT_BADGE are declared by the notification library to display unread badge counts on your home screen icon across different Android manufacturers (Samsung, Huawei, Xiaomi, etc.). They only affect the number shown on the app icon.

### Billing, Check License, Install Referrer

Google Play

Declared by the Google Play Billing library for the Pro upgrade purchase and by the Play Install Referrer library. These support store purchases and install attribution handled by Google Play. They do not give Travel Document Vault access to your documents.

### Download Without Notification

Inherited

Declared by a framework dependency. The app does not download files in the background.

### Permissions we do not request

These are common permissions that many apps ask for. We do not request any of them, and they do not appear in our manifest.

**Location:** no GPS, no geofencing, no tracking **Contacts:** no access to your address book **Bluetooth:** no local network or device scanning **Calendar:** reminders are handled on-device, not via your calendar

Still have questions? Read our full [Privacy Policy](https://traveldocumentvault.com/privacy-policy/) or check the [FAQ](https://traveldocumentvault.com/faq/).
