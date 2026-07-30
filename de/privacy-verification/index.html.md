# Datenschutzüberprüfung | Travel Document Vault

> Überprüfbare Datenschutzaussagen für Travel Document Vault. Keine Tracker, keine Datenerfassung. Standardmäßig auf dem Gerät - keine TDV-Cloud, kein Konto erforderlich. Sehen Sie alle Berechtigungen, die wir anfordern und warum.

Source: https://traveldocumentvault.com/de/privacy-verification/

---

## Unsere Datenschutzaussagen

### Keine Tracker

Keine Analyse-SDKs, keine Werbebibliotheken, keine Tracking-Pixel in der App.

### Keine ausgehende Datenerfassung

Die App stellt standardmäßig keine ausgehenden Verbindungen her. Sie funktioniert vollständig offline. Die einzige Netzwerknutzung ist die optionale Pro-Cloud-Sicherung, die sich mit Ihrem eigenen iCloud oder Google Drive synchronisiert - niemals mit unseren Servern.

### Standardmäßig auf dem Gerät

Alle Dokumente, Scans und Daten bleiben auf Ihrem Gerät. Es gibt keine TDV-Cloud, keinen TDV-Server, kein TDV-Backend. Pro-Benutzer können ihre verschlüsselte Vault optional in ihr eigenes iCloud oder Google Drive-Konto sichern - nur sie halten den Wiederherstellungsschlüssel.

### AES-256-GCM-Verschlüsselung

Jedes Dokument wird verschlüsselt, bevor es den Speicher Ihres Geräts berührt.

## Überprüfung

Sie müssen uns nicht vertrauen. Sie können jede obige Aussage mit kostenlosen, öffentlich verfügbaren Open-Source-Tools bestätigen.

### 1. Netzwerk-Traffic-Test

Installieren Sie einen Netzwerk-Monitor wie **mitmproxy** (kostenlos, Open Source), **Wireshark** (kostenlos, Open Source), oder **Charles Proxy**. Öffnen Sie Travel Document Vault, scannen Sie ein Dokument, durchsuchen Sie Ihren Tresor und stellen Sie einen Reminder ein. Sie sollten nicht sehen, dass Ihre Dokumente, Scans, Ablaufdaten oder Tresorinhalte an Travel Document Vault gesendet werden. Der Netzwerkverkehr sollte sich auf bestimmte Funktionen beschränken: optionale Sentry-Absturzberichte, Kaufprüfungen über App Store oder Google Play, optionale Cloud-Sicherung in Ihr eigenes iCloud- oder Google-Drive-Konto und eine manuelle Bugfix-Prüfung, die unten erklärt wird.

In den Einstellungen gibt es eine Schaltfläche **Check for Updates**. Dies ist eine manuelle Prüfung, nie automatisch - sie wird nur ausgeführt, wenn Sie selbst darauf tippen, nie im Hintergrund und nie von selbst. Die Prüfung kontaktiert **updates.traveldocumentvault.com** - unseren eigenen Update-Server, den wir auf Google Cloud betreiben und der kryptografisch signierte Update-Dateien aus einem Speicher-Bucket bereitstellt. Wir führen keine Aufzeichnungen über die Prüfung: Anforderungsprotokolle sind auf unserer Seite deaktiviert, daher werden keine IP-Adressen beibehalten. Jedes Update ist mit einem Schlüssel signiert, den nur wir haben, und die App lehnt alles ab, dessen Signatur nicht dem in der App integrierten Zertifikat entspricht. Derselbe Tipp prüft auch, ob im **App Store** oder bei **Google Play** eine neuere Version der App verfügbar ist. Sie existiert, damit bestimmte Fehlerbehebungen Sie schneller erreichen können, als auf eine komplett neue Veröffentlichung im App Store oder bei Google Play zu warten - nützlich bei dringenden Fehlerbehebungen, abhängig von der Art der Behebung. Es gilt dieselbe Regel wie für alles andere auf dieser Seite: kein Netzwerkaufruf ohne Ihre Anforderung.

### 2. iOS App Datenschutzbericht

Gehen Sie auf dem iPhone zu **Einstellungen > Datenschutz & Sicherheit > App-Datenschutzbericht**. Diese integrierte Apple-Funktion zeigt, welche Apps mit Netzwerk-Domänen Kontakt aufgenommen haben. Travel Document Vault sendet uns Ihre Dokumente, Scans, Ablaufdaten oder Tresorinhalte nicht. Wenn Sie Pro Cloud-Sicherung aktiviert haben, sehen Sie Verbindungen zu Apples iCloud-Domains - das ist Ihre eigene Sicherung, die sich mit Ihrem eigenen iCloud-Konto synchronisiert.

### 3. Android - Ihre Privatsphäre überprüfen

Android hat keinen einzelnen integrierten Datenschutzbericht wie das iPhone. Zwei einfache Möglichkeiten, es selbst zu überprüfen: Sehen Sie sich den eigenen **Data Safety**-Bereich dieser App auf ihrer Google-Play-Seite an (er gibt klar an, was erfasst wird, was geteilt wird, dass Ihre Daten bei der Übertragung verschlüsselt sind und dass sie nicht gelöscht werden können) - oder verwenden Sie einen Netzwerk-Monitor wie in Schritt 1 oben beschrieben.

Wenn Sie die Cloud-Sicherung aktiviert haben, bemerken Sie eventuell etwas Aktivität zu Googles Servern (Webadressen, die auf **googleapis.com** enden). Das ist normal und sicher: Es handelt sich nur um Ihre gesperrte, verschlüsselte Sicherungsdatei und eine Anmeldeprüfung, die direkt an **Ihr eigenes** Google-Drive-Konto gesendet werden - dasselbe, das Sie bereits für Fotos oder Gmail nutzen. Wir sehen sie nie, erhalten sie nie und bewahren nirgendwo eine Kopie auf. Nur Sie besitzen den Wiederherstellungsschlüssel, der sie entsperren kann.

### 4. App Store und Play Store Datenschutzetiketten

Apple und Google verlangen, dass Entwickler deklarieren, welche Daten ihre App sammelt. Überprüfen Sie den App Store oder Google Play-Eintrag für Travel Document Vault. Unsere Erklärung: **Keine Daten erfasst**.

## Wie wir die Sicherheit der App testen

Wir behaupten nicht einfach, dass die App sicher ist. Wir überprüfen es, mit denselben offenen Werkzeugen und öffentlichen Standards, die auch die Sicherheitsbranche verwendet.

### Wir messen die App an einem öffentlichen Standard

Wir prüfen Travel Document Vault anhand des [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), der Branchencheckliste dafür, wie eine mobile App Daten speichern, Verschlüsselung einsetzen, sich hinter Face ID oder einer PIN sperren und Links aus anderen Apps behandeln sollte. Jeder kann den Standard nachlesen und mit dem tatsächlichen Verhalten der App vergleichen.

### Wir scannen unseren eigenen Code

Vor jeder Veröffentlichung führen wir eine statische Analyse unseres Codes mit [Semgrep](https://semgrep.dev/) durch, einem Open-Source-Tool, das unsichere Muster wie schwache Verschlüsselung oder unsicheren Umgang mit Daten aufspürt, damit wir sie frühzeitig erkennen.

### Wir scannen die fertige App

Außerdem prüfen wir unsere veröffentlichten Builds mit Sicherheitsscan-Tools für mobile Apps und untersuchen, wie der Build Daten speichert, worauf er zugreifen darf und wie er signiert ist.

### Problem gefunden? Sagen Sie uns Bescheid

Wenn Sie ein Sicherheitsproblem entdecken, schreiben Sie an [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Die Einzelheiten zu unserem Meldeverfahren sind unter [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt) veröffentlicht.

Dies ist unsere eigene Einschätzung anhand eines öffentlichen Standards, keine unabhängige Prüfung und keine Zertifizierung. Zuletzt geprüft im Juli 2026.

## Jede Berechtigung erklärt

Android-Apps deklarieren Berechtigungen in ihrem Manifest. Einige werden direkt von der App angefordert, andere werden von Bibliotheken geerbt, von denen die App abhängt. Hier ist eine transparente Aufschlüsselung jeder Berechtigung, gruppiert nach Zweck.

### Berechtigungen, die die App direkt verwendet

### Kamera

iOS + Android

**Warum wir fragen:** Um Ihre Reisepass-, Visa- oder Reisedokumentseiten direkt von der App aus zu scannen.

**Was wir niemals tun:** Fotos werden lokal auf Ihrem Gerät gespeichert. Sie werden niemals hochgeladen, übertragen oder irgendwo versendet.

### Fotogalerie / Fotos / Speicherung

iOS + Android

**Warum wir fragen:** So können Sie ein vorhandenes Foto eines Dokuments importieren und die App kann verschlüsselte Sicherungsdateien (.tdvault) exportieren, wenn Sie diese anfordern. Bei älteren Android-Versionen sind READ_EXTERNAL_STORAGE und WRITE_EXTERNAL_STORAGE erforderlich. Ab Android 13 wird stattdessen READ_MEDIA_IMAGES verwendet.

**Was wir niemals tun:** Die App liest nur das Bild, das Sie auswählen. Sie durchsucht, indiziert oder durchsucht niemals Ihre Fotogalerie oder Ihr Dateisystem.

### Face ID / Touch ID / Biometrisches Entsperren

iOS + Android

**Warum wir fragen:** Um die App zu sperren und zu entsperren, damit nur Sie auf Ihre Dokumente zugreifen können. Bei Android 6-8 wird USE_FINGERPRINT verwendet. Bei Android 9+ wird stattdessen USE_BIOMETRIC verwendet.

**Was wir niemals tun:** Ihre biometrischen Daten verlassen niemals Ihr Gerät. Das Betriebssystem handhabt die Authentifizierung und gibt der App nur ein Bestanden-/Fehlschlag-Ergebnis zurück.

### Benachrichtigungen, Vibration, Boot abgeschlossen, Wake Lock

Android

**Warum wir fragen:** Um Verfallserinnerungen auf dem Gerät zu liefern, die Sie selbst einstellen. RECEIVE_BOOT_COMPLETED plant Ihre Erinnerungen nach einem Geräteneustart neu ein. WAKE_LOCK stellt sicher, dass Erinnerungen zuverlässig auch dann ausgelöst werden, wenn das Telefon im Ruhezustand ist. VIBRATE begleitet die Benachrichtigungslieferung.

**Was wir niemals tun:** Es werden niemals Marketing-, Werbe- oder Drittanbieter-Benachrichtigungen versendet. Erinnerungen werden vollständig auf Ihrem Gerät eingeplant.

### Internet, Netzwerkzustand, Wi-Fi-Zustand

Android

**Warum diese erscheinen:** Sie werden für netzwerkabhängige Funktionen benötigt: **Sentry-Absturzberichte** (Opt-in, standardmässig deaktiviert), **App-Store- oder Google-Play-Abrechnung** für den Kauf des Pro-Upgrades, **Pro Cloud-Sicherung** (optional), die Ihren verschlüsselten Tresor mit Ihrem eigenen iCloud oder Google Drive synchronisiert, und die manuelle Schaltfläche **Check for Updates** in den Einstellungen (wird nur ausgeführt, wenn Sie darauf tippen). ACCESS_NETWORK_STATE und ACCESS_WIFI_STATE lassen diese Funktionen prüfen, ob eine Verbindung verfügbar ist, bevor etwas gesendet wird.

**Was wir nicht tun:** Die App lädt Ihre Dokumente, Scans, Ablaufdaten, Fotos oder Tresorinhalte nicht zu Travel Document Vault hoch. Für normale Dokumentablage und Erinnerungen funktioniert sie vollständig offline.

### Berechtigungen von Bibliotheken geerbt (nicht von der App verwendet)

Android-Apps enthalten Drittanbieter-Bibliotheken für Funktionen wie In-App-Käufe, Absturzberichte und Benachrichtigungen. Diese Bibliotheken deklarieren Berechtigungen in ihren eigenen Manifesten, die in die endgültige App zusammengeführt werden. Die folgenden Berechtigungen werden von Abhängigkeiten deklariert, nicht von unserem Code. Die App ruft niemals die APIs hinter ihnen auf.

### Audio aufnehmen

Geerbt, niemals verwendet

**Warum das erscheint:** Diese Berechtigung wird von einer Drittanbieter-Bibliothek deklariert, die in der Kompilation enthalten ist (üblicherweise das Camera oder Media Plugin). Sie erscheint im Android-Manifest, wird aber niemals durch unseren Code ausgelöst. Die App zeichnet niemals Audio oder Video unter keinen Umständen auf.

**Wie Sie bestätigen können:** Die App fordert Sie niemals auf, Zugriff auf das Mikrofon zu gewähren. Wenn Sie den Berechtigungsmanager Ihres Geräts überprüfen, sehen Sie, dass Audio-Aufzeichnung nicht für Travel Document Vault gewährt wird.

### Systemwarnungsfenster

Geerbt

Von Flutter Framework für Entwicklungs- und Debug-Overlays deklariert. Diese Berechtigung wird nicht in der Veröffentlichungsbuild der App verwendet und hat keine Auswirkungen auf Ihre Datenschutz.

### Bildschirmaufzeichnung erkennen

Geerbt

Von einer Framework-Abhängigkeit deklariert. Die App erkennt, blockiert oder antwortet nicht auf Screenshots. Diese Berechtigung hat keine Auswirkungen auf Ihre Verwendung.

### Abzeichen-Zählberechtigungen

Geerbt

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, und PROVIDER_INSERT_BADGE werden von der Benachrichtigungsbibliothek deklariert, um ungelesene Abzeichen-Zählungen auf Ihrem Startsymbol über verschiedene Android-Hersteller (Samsung, Huawei, Xiaomi, usw.) anzuzeigen. Sie beeinflussen nur die auf dem App-Symbol angezeigte Zahl.

### Abrechnung, Lizenz überprüfen, Installationsreferrer

Google Play

Von der Google Play Abrechnungsbibliothek (für den Pro Upgrade-Kauf) und der Play Install Referrer Bibliothek deklariert. Dies sind Standard Google Play Store Anforderungen und greifen nicht auf persönliche Daten zu.

### Ohne Benachrichtigung herunterladen

Geerbt

Von einer Framework-Abhängigkeit deklariert. Die App lädt keine Dateien im Hintergrund herunter.

### Berechtigungen, die wir nicht anfordern

Dies sind häufige Berechtigungen, die viele Apps anfordern. Wir fordern keine an und sie erscheinen nicht in unserem Manifest.

**Standort** - Kein GPS, kein Geofencing, kein Tracking **Kontakte** - Kein Zugriff auf Ihr Adressbuch **Bluetooth** - Kein lokales Netzwerk oder Gerätescanning **Kalender** - Erinnerungen werden auf dem Gerät verwaltet, nicht über Ihren Kalender

Noch Fragen? Lesen Sie unsere vollständige [Datenschutzrichtlinie](https://traveldocumentvault.com/privacy-policy/) oder konsultieren Sie die [FAQ](https://traveldocumentvault.com/de/faq/).
