# Sicherung erklärt: Lokale Sicherungen, Vault-Export und Cloud-Sicherung | Travel Document Vault

> Die drei Wege, wie Travel Document Vault Ihre Daten schützt: lokale Sicherungen, Vault-Export (.tdvault) und optionale verschlüsselte Cloud-Sicherung.

Source: https://traveldocumentvault.com/de/faq/backup-explained/

---

Travel Document Vault bietet Ihnen drei Schutzebenen. Hier erfahren Sie genau, was jede einzelne tut, für wen sie geeignet ist und wie Sie sie wiederherstellen können.

## Drei Mechanismen, ein Ziel

Travel Document Vault bietet drei Schutzebenen: (1) automatische lokale Sicherungen, die alle paar Minuten kostenlos auf Ihrem Gerät erstellt werden, (2) den Tresor-Export, eine kostenlose manuelle verschlüsselte Sicherungsdatei (.tdvault), die Sie an einem beliebigen Ort speichern, und (3) die Cloud-Sicherung, eine Pro-Option für eine Ende-zu-Ende-verschlüsselte Kopie in Ihrem eigenen iCloud oder Google Drive.

- **Automatische lokale Sicherungen** – laufen im Hintergrund ab, keine Aktion erforderlich.
- **Vault-Export (.tdvault)** – eine tragbare verschlüsselte Datei, die Sie überall speichern können.
- **Cloud-Sicherung (Pro)** – eine automatische verschlüsselte Kopie in Ihrem eigenen iCloud oder Google Drive.

## Auf einen Blick

| Mechanismus | Stufe | Automatisch? | Wo befindet sie sich? | So stellen Sie sie wieder her |
|---|---|---|---|---|
| **Automatische lokale Sicherungen** | Kostenlos | Ja, alle paar Minuten | Auf Ihrem Gerät | Einstellungen, Lokale Sicherung wiederherstellen |
| **Vault-Export (.tdvault)** | Kostenlos | Nein, manuell | Überall, wo Sie es speichern: Dateien, iCloud Drive, Google Drive, E-Mail | Einstellungen, Sicherung importieren |
| **Cloud-Sicherung** | Pro | Ja, automatisch | Ihr eigenes iCloud (iOS) oder Google Drive (Android) | Einstellungen, Cloud-Sicherung, Aus Sicherung wiederherstellen |

## Automatische lokale Sicherungen

Während die App geöffnet ist und Sie Änderungen vornehmen, erstellt sie alle paar Minuten automatisch Snapshots Ihres Tresors. Sie brauchen nichts zu tun. Die App behält einige der neuesten Snapshots und entfernt ältere, um Platz zu sparen. Der Tresor-Export erstellt eine portable verschlüsselte Datei, die Sie außerhalb des Geräts speichern können.

In den Einstellungen sehen Sie eine Zeile wie *Letzte Sicherung: vor 2 Stunden, 12 Dokumente*. Dies zeigt Ihnen das Alter des letzten Snapshots und die Anzahl der erfassten Dokumente. Sie zeigt den neuesten verfügbaren lokalen Snapshot. Lokale Snapshots enthalten keine unabhängigen Kopien der Anhangsdateien.

**So stellen Sie wieder her:** Einstellungen, dann Lokale Sicherung wiederherstellen. Wählen Sie einen Snapshot aus der Liste und bestätigen Sie. Die Wiederherstellung ersetzt Ihre aktuellen Daten durch den Inhalt des Snapshots.

Diese lokalen Snapshots bleiben auf Ihrem Gerät. Eine Systemsicherung (iCloud Backup, Google Backup) installiert die App neu, kann sie aber nicht auf einem neuen Telefon wiederherstellen, da gewöhnliche Telefonsicherungen den an das Gerät gebundenen Verschlüsselungsschlüssel nicht übertragen. Der Tresor-Export enthält eine mit einem Passwort verschlüsselte Kopie dieses Schlüssels. Um Ihren Tresor zu verschieben, verwenden Sie Cloud-Sicherung (Pro) oder den kostenlosen Vault-Export.

## Vault-Export (.tdvault) – kostenlos für alle

Der Tresor-Export bündelt unterstützte Tresordatensätze und verfügbare Anhänge in einer verschlüsselten, passwortgeschützten Datei. Für jeden Export gilt eine Größenbegrenzung. Sie wählen, wo Sie sie speichern: Dateien-App, iCloud Drive, Google Drive oder teilen sie per AirDrop oder E-Mail.

Die Datei wird auf Ihrem Gerät verschlüsselt, bevor sie die App verlässt. Nur das Passwort, das Sie beim Export festgelegt haben, kann es entsperren.

**So exportieren Sie:** Einstellungen, Tresor exportieren, dann befolgen Sie die Anweisungen und wählen Sie ein Ziel.

**So stellen Sie wieder her:** „Einstellungen“, „Sicherung importieren“, dann wählen Sie Ihre .tdvault-Datei aus, bestätigen Sie und geben Sie das Passwort ein. Der Import ersetzt alles, was bereits auf diesem Telefon gespeichert ist. Er funktioniert auf unterstützten Geräten, auch plattformübergreifend (iOS zu Android oder umgekehrt). Exporte erhalten unterstützte Tresorfelder und ausgewählte Einstellungen. Fehlende Anhänge oder unlesbare Notizen können ausgelassen werden. Prüfen Sie Ihre importierten Dokumente und Erinnerungen. Die App-Sperre und andere Geräteeinstellungen bleiben lokal.

Dies ist kostenlos für alle Benutzer. Kein Pro-Kauf erforderlich.

## Cloud-Sicherung (Pro)

Cloud-Sicherung ist eine Pro-Funktion. Aktivieren Sie sie, um eine automatische Kopie in Ihrem eigenen iCloud (iOS) oder Google Drive (Android) aufzubewahren. Die App aktualisiert sie, während sie geöffnet und mit dem Internet verbunden ist. Wir erhalten sie nicht. Dokumentinhalte sind verschlüsselt. Backup-Metadaten wie Gerätenamen, Anzahlen und Zeitstempel sind es nicht.

Dokumentinhalte werden vor dem Hochladen auf Ihrem Gerät Ende-zu-Ende mit AES-256-GCM verschlüsselt. Die Cloud-Verschlüsselungsschlüssel werden mit Ihrem Wiederherstellungscode entsperrt, einer 24-stelligen Passphrase, die die App beim Festlegen Ihrer PIN erzeugt. Bewahren Sie Ihren Wiederherstellungscode an einem sicheren Ort auf. Wenn Sie jede Kopie des Codes und den Zugang zu allen Geräten verlieren, die den Tresor noch entsperren können, können wir das verschlüsselte Backup nicht wiederherstellen.

**So stellen Sie wieder her:** Nutzen Sie ein unterstütztes Gerät derselben Plattform und dieselbe Apple ID oder dasselbe Google-Konto. Öffnen Sie bei ausgeschaltetem Backup „Einstellungen“, „Cloud-Sicherung“. Wählen Sie „Aus Sicherung wiederherstellen“, wählen Sie Ihr Backup, geben Sie Ihren Wiederherstellungscode ein und bestätigen Sie. Die Wiederherstellung ersetzt den lokalen Tresorinhalt.

Die Cloud-Sicherung läuft automatisch, während die App geöffnet und mit dem Internet verbunden ist. Stellen Sie über „Einstellungen“ mit Ihrem Wiederherstellungscode wieder her, mit demselben Cloud-Konto und einem unterstützten Gerät derselben Plattform.

## Welche sollte ich verwenden?

Die kurze Antwort: Verwenden Sie alle drei.

Automatische lokale Sicherungen können helfen, aktuelle Tresordatensätze wiederherzustellen, wenn Snapshots verfügbar sind. Sie laufen bei geöffneter App und ersetzen kein unabhängiges Dokumenten-Backup.

Vault-Export ist der richtige Schritt vor einem Gerätewechsel, einem großen App-Update oder wenn Sie möchten, dass eine tragbare Kopie irgendwo unabhängig von Ihrem Telefon gespeichert wird. Tun Sie es mindestens einmal und speichern Sie die Datei an einem sicheren Ort.

Cloud-Sicherung (Pro) ist die richtige Wahl, wenn Sie automatischen Schutz ohne manuelle Dateiverwaltung wünschen. Wenn Sie zu einem unterstützten Telefon derselben Plattform wechseln, nutzen Sie dasselbe Cloud-Konto, wählen Sie Ihr Backup im Wiederherstellungsablauf, geben Sie Ihren Wiederherstellungscode ein und bestätigen Sie. Die Wiederherstellung ersetzt den lokalen Tresorinhalt.

Keine einzelne Ebene ist ein Grund, die anderen zu überspringen. Cloud-Konten können verloren gehen, Wiederherstellungscodes können vergessen werden und Telefone können gestohlen werden, bevor eine lokale Sicherung ausgeführt wird. Die Kombination aller drei bietet Ihnen den stärksten Schutz.

### Verwandte Leitfäden

- [So exportieren und importieren Sie Ihren Tresor – Schritt-für-Schritt-Anleitung](https://traveldocumentvault.com/de/faq/export-import/)
- [Was ist mein Wiederherstellungscode? – Vollständiger Leitfaden zum sicheren Speichern](https://traveldocumentvault.com/de/faq/recovery-code/)
- [Cloud-Sicherung – wie Ende-zu-Ende-Verschlüsselung funktioniert](https://traveldocumentvault.com/de/cloud-backup/)

## Schnelle Antworten

Welche Sicherungsoptionen bietet Travel Document Vault? Travel Document Vault bietet drei Schutzebenen: (1) Automatische lokale Sicherungen, die alle paar Minuten kostenlos auf Ihrem Gerät erstellt werden. (2) Vault-Export, eine kostenlose manuelle verschlüsselte Sicherungsdatei (.tdvault), die Sie überall speichern können. (3) Cloud-Sicherung, eine Pro-Option, die eine Ende-zu-Ende verschlüsselte Kopie in Ihrem eigenen iCloud oder Google Drive führt. Ist Vault-Export kostenlos? Dies ist kostenlos für alle Benutzer. Kein Pro-Kauf erforderlich. Was ist der Unterschied zwischen lokalen Sicherungen und Vault-Export? Während die App geöffnet ist und Sie Änderungen vornehmen, erstellt sie alle paar Minuten automatisch Snapshots Ihres Tresors. Sie brauchen nichts zu tun. Die App behält einige der neuesten Snapshots und entfernt ältere, um Platz zu sparen. Der Tresor-Export erstellt eine portable verschlüsselte Datei, die Sie außerhalb des Geräts speichern können. Was ist Cloud-Sicherung und wer braucht sie? Cloud-Sicherung ist eine Pro-Funktion. Aktivieren Sie sie, um eine automatische Kopie in Ihrem eigenen iCloud (iOS) oder Google Drive (Android) aufzubewahren. Die App aktualisiert sie, während sie geöffnet und mit dem Internet verbunden ist. Wir erhalten sie nicht. Dokumentinhalte sind verschlüsselt. Backup-Metadaten wie Gerätenamen, Anzahlen und Zeitstempel sind es nicht.

## Travel Document Vault herunterladen

Kostenloser Download. Vault-Export und lokale Sicherungen sind für alle enthalten. Pro fügt Cloud-Sicherung, unbegrenzte Profile, kombinierter PDF-Export und mehr hinzu. Einmaliger Kauf, kein Abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Bei Google Play herunterladen](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
