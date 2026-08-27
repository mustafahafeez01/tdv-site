# Sicherung erklärt: Lokale Sicherungen, Vault-Export und Cloud-Sicherung | Travel Document Vault

> Ein klarer Vergleich der drei Möglichkeiten, wie Travel Document Vault Ihre Daten schützt: automatische lokale Sicherungen, Vault-Export (.tdvault) und optionale Pro-Cloud-Sicherung in iCloud oder Google Drive.

Source: https://traveldocumentvault.com/de/faq/backup-explained/

---

Travel Document Vault bietet Ihnen drei Schutzebenen. Hier erfahren Sie genau, was jede einzelne tut, für wen sie geeignet ist und wie Sie sie wiederherstellen können.

## Drei Mechanismen, ein Ziel

Ihre Dokumente befinden sich auf Ihrem Gerät. Sie gehen nicht an unsere Server. Die drei Sicherungsmechanismen dienen jeweils einem anderen Zweck und Sie können alle drei gleichzeitig verwenden.

- **Automatische lokale Sicherungen** - laufen im Hintergrund ab, keine Aktion erforderlich.
- **Vault-Export (.tdvault)** - eine tragbare verschlüsselte Datei, die Sie überall speichern können.
- **Cloud-Sicherung (Pro)** - eine automatische verschlüsselte Kopie in Ihrem eigenen iCloud oder Google Drive.

## Auf einen Blick

| Mechanismus | Stufe | Automatisch? | Wo befindet sie sich? | So stellen Sie sie wieder her |
|---|---|---|---|---|
| **Automatische lokale Sicherungen** | Kostenlos | Ja, alle paar Minuten | Auf Ihrem Gerät | Einstellungen, Lokale Sicherung wiederherstellen |
| **Vault-Export (.tdvault)** | Kostenlos | Nein, manuell | Überall, wo Sie es speichern: Dateien, iCloud Drive, Google Drive, E-Mail | Einstellungen, Tresor importieren |
| **Cloud-Sicherung** | Pro | Ja, automatisch | Ihr eigenes iCloud (iOS) oder Google Drive (Android) | Einstellungen, Cloud-Sicherung, Aus Sicherung wiederherstellen |

## Automatische lokale Sicherungen

Während die App geöffnet ist und Sie Änderungen vornehmen, erstellt sie alle paar Minuten automatisch Snapshots Ihres Tresors. Sie brauchen nichts zu tun. Die App speichert die 10 letzten Snapshots und löscht ältere, um Platz zu sparen.

In den Einstellungen sehen Sie eine Zeile wie *Letzte Sicherung: vor 2 Stunden, 12 Dokumente*. Dies zeigt Ihnen das Alter des letzten Snapshots und die Anzahl der erfassten Dokumente. Dies soll Ihnen versichern, dass eine wiederherstellbare Kopie immer in der Nähe ist.

**So stellen Sie wieder her:** Einstellungen, dann Lokale Sicherung wiederherstellen. Wählen Sie einen Snapshot aus der Liste und bestätigen Sie. Die Wiederherstellung ersetzt Ihre aktuellen Daten durch den Inhalt des Snapshots.

Diese lokalen Snapshots bleiben auf Ihrem Gerät. Eine Systemsicherung (iCloud Backup, Google Backup) installiert die App neu, kann sie aber nicht auf einem neuen Telefon wiederherstellen, da der Verschlüsselungsschlüssel Ihr ursprüngliches Gerät nie verlässt. Um Ihren Tresor zu verschieben, verwenden Sie Cloud-Sicherung (Pro) oder den kostenlosen Vault-Export.

## Vault-Export (.tdvault) - kostenlos für alle

Vault-Export erstellt eine einzelne verschlüsselte, passwortgeschützte Datei, die jedes Profil, Dokument und jede Anlage in Ihrem Tresor enthält. Sie wählen, wo Sie sie speichern: Dateien-App, iCloud Drive, Google Drive oder teilen sie per AirDrop oder E-Mail.

Die Datei wird auf Ihrem Gerät verschlüsselt, bevor sie die App verlässt. Nur das Passwort, das Sie beim Export festgelegt haben, kann es entsperren.

**So exportieren Sie:** Einstellungen, Tresor exportieren, dann befolgen Sie die Anweisungen und wählen Sie ein Ziel.

**So stellen Sie wieder her:** Einstellungen, Tresor importieren, wählen Sie dann Ihre .tdvault-Datei aus und geben Sie das Passwort ein. Der Import funktioniert auf jedem Gerät, auch plattformübergreifend (iOS zu Android oder umgekehrt). Die Wiedergabetreue ist vollständig: Alle Dokumentnamen, Daten, Ablaufwarnungen, Farben, Anhänge und Notizen bleiben genau erhalten.

Dies ist kostenlos für alle Benutzer. Kein Pro-Abonnement erforderlich.

## Cloud-Sicherung (Pro)

Cloud-Sicherung ist die Pro-Option. Sobald sie aktiviert ist, behält die App automatisch eine ständig aktualisierte Kopie Ihres Tresors in Ihrem eigenen iCloud-Konto (iOS) oder Ihrem eigenen Google Drive (Android). Wir sehen diese Daten nie. Apple und Google sehen nur Chiffretext.

Der Tresor wird vor dem Hochladen auf Ihrem Gerät Ende-zu-Ende mit AES-256-GCM verschlüsselt. Der Schlüssel wird von Ihrem Wiederherstellungscode abgeleitet, einer 24-stelligen Passphrase, die die App beim Aktivieren der Cloud-Sicherung generiert. Bewahren Sie Ihren Wiederherstellungscode an einem sicheren Ort auf. Wenn Sie ihn verlieren, wird die verschlüsselte Sicherung nicht wiederherstellbar.

**So stellen Sie wieder her:** Melden Sie sich auf einem neuen Gerät mit derselben Apple ID oder dem gleichen Google-Konto an, öffnen Sie die App, gehen Sie zu Einstellungen, Cloud-Sicherung, Aus Sicherung wiederherstellen, und geben Sie Ihren Wiederherstellungscode ein.

Cloud-Sicherung ist die wartungsfreundlichste Option: Sie funktioniert automatisch nach dem Aktivieren, und die Wiederherstellung auf einem neuen Telefon erfordert nur ein Tippen plus Ihren Wiederherstellungscode.

## Welche sollte ich verwenden?

Die kurze Antwort: Verwenden Sie alle drei.

Automatische lokale Sicherungen schützen Sie sofort vor versehentlichen Löschungen oder App-Problemen, ohne dass Sie darüber nachdenken müssen. Sie sind immer aktiviert.

Vault-Export ist der richtige Schritt vor einem Gerätewechsel, einem großen App-Update oder wenn Sie möchten, dass eine tragbare Kopie irgendwo unabhängig von Ihrem Telefon gespeichert wird. Tun Sie es mindestens einmal und speichern Sie die Datei an einem sicheren Ort.

Cloud-Sicherung (Pro) ist die richtige Wahl, wenn Sie automatischen Schutz ohne manuelle Dateiverwaltung wünschen. Sie ist besonders wertvoll beim Wechsel zu einem neuen Telefon: Installieren Sie die App, geben Sie Ihren Wiederherstellungscode ein, und Ihr Tresor wird in Sekunden wiederhergestellt.

Keine einzelne Ebene ist ein Grund, die anderen zu überspringen. Cloud-Konten können verloren gehen, Wiederherstellungscodes können vergessen werden und Telefone können gestohlen werden, bevor eine lokale Sicherung ausgeführt wird. Die Kombination aller drei bietet Ihnen den stärksten Schutz.

### Verwandte Leitfäden

- [So exportieren und importieren Sie Ihren Tresor - Schritt-für-Schritt-Anleitung](https://traveldocumentvault.com/de/faq/export-import/)
- [Was ist mein Wiederherstellungscode? - Vollständiger Leitfaden zum sicheren Speichern](https://traveldocumentvault.com/de/faq/recovery-code/)
- [Cloud-Sicherung - wie Ende-zu-Ende-Verschlüsselung funktioniert](https://traveldocumentvault.com/de/cloud-backup/)

## Travel Document Vault herunterladen

Kostenloser Download. Vault-Export und lokale Sicherungen sind für alle enthalten. Pro fügt Cloud-Sicherung, unbegrenzte Profile, kombinierter PDF-Export und mehr hinzu. Einmaliger Kauf, kein Abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Bei Google Play herunterladen](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
