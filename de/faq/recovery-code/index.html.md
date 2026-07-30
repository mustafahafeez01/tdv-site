# Was ist mein Wiederherstellungscode? | Travel Document Vault

> Ihr Wiederherstellungscode ist der Schlüssel zu Ihren verschlüsselten Cloud-Sicherungen. Erfahren Sie, was er ist, warum Sie ihn benötigen, was passiert, wenn Sie ihn verlieren, und wie Sie ihn sicher aufbewahren.

Source: https://traveldocumentvault.com/de/faq/recovery-code/

---

Ihr Wiederherstellungscode ist eine 24-stellige Passphrase, die Ihre Cloud-Sicherungen verschlüsselt. Wenn Sie ihn verlieren, werden diese Sicherungen unwiederherstellbar. Wir speichern ihn nicht und können ihn nicht zurücksetzen. Speichern Sie ihn also an einem sicheren Ort.

## So funktioniert es

### Was ist es

Ihr Wiederherstellungscode ist eine 24-stellige Passphrase, die generiert wird, wenn Sie Cloud-Sicherung aktivieren. Er sieht so aus:

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

Dieser Code wird mathematisch aus Ihren Sicherungseinstellungen abgeleitet und ist der einzige Schlüssel, der Ihren verschlüsselten Tresor in der Cloud entschlüsseln kann. Wir generieren ihn einmal und zeigen ihn Ihnen einmal. Danach liegt die Verantwortung für seine Sicherheit bei Ihnen.

### Warum Sie ihn benötigen

Wenn Sie Cloud-Sicherung aktivieren, wird Ihr gesamter Tresor auf Ihrem Gerät mit AES-256-GCM verschlüsselt, bevor er Ihr Telefon verlässt. Der Verschlüsselungsschlüssel wird von Ihrem Wiederherstellungscode abgeleitet. Ohne den Wiederherstellungscode ist die Sicherung kryptographisch unzugänglich, selbst für uns.

Dies ist eine Datenschutz-Garantie. Wir können Ihre Sicherungen buchstäblich nicht lesen, auf Anfrage entschlüsseln oder für Sie zurücksetzen. Wenn Ihr Wiederherstellungscode verloren geht, ist diese Sicherung auf Dauer weg. Das klingt streng, aber es ist genau das, was Sie wollen: Ihr Datenschutz ist nicht nur ein Versprechen, das wir machen, sondern eine technische Tatsache, die wir nicht verletzen können.

### Wenn Sie ihn verlieren

Falls Sie Ihren Wiederherstellungscode vergessen, kann Ihre bestehende Cloud-Sicherung nicht wiederhergestellt werden. Sie haben zwei Optionen:

- **Aus Ihrem Telefon wiederherstellen:** Falls der Code noch in der App gespeichert ist (überprüfen Sie Einstellungen - Cloud-Sicherung), kopieren Sie ihn an einen sicheren Ort und speichern Sie ihn.
- **Einen neuen generieren:** Deaktivieren Sie Cloud-Sicherung und aktivieren Sie sie erneut. Dies erstellt einen neuen Wiederherstellungscode und verwirft die bestehende Sicherung. Sie beginnen von vorne.

### Wo Sie ihn aufbewahren

Ihr Wiederherstellungscode ist so sensibel wie Ihr Master-Passwort. Speichern Sie ihn auf eine dieser Weisen:

- **Passwort-Manager:** Bitwarden, 1Password, Apple Keychain oder ähnlich. Dies ist die bequemste Option.
- **Physische Sicherung:** Schreiben Sie es auf Papier und speichern Sie es in einem Safe, Bankschließfach oder an einem sicheren Ort zu Hause.
- **Offline-Dokument:** Speichern Sie es auf einem verschlüsselten externen Laufwerk oder USB-Stick (nie Cloud-synchronisiert).
- **Vermeiden:** E-Mail, Notes-App, unverschlüsselte Cloud-Services oder Screenshots.

### Ihren Code neu generieren

Falls Sie glauben, dass Ihr Wiederherstellungscode kompromittiert wurde, deaktivieren Sie Cloud-Sicherung und aktivieren Sie sie erneut. Die App generiert einen neuen Wiederherstellungscode. Ihre alte verschlüsselte Sicherung wird verworfen. Dies geschieht absichtlich: Rotation des Wiederherstellungscodes ist beabsichtigt selten und verlustbringend, damit Sie es nicht leichtfertig tun.

**Haftungsausschluss:** Ihr Wiederherstellungscode liegt in Ihrer alleinigen Verantwortung. Travel Document Vault kann ihn nicht wiederherstellen, zurücksetzen oder neu generieren, wenn er verloren geht. Speichern Sie ihn sicher. Verlassen Sie sich nicht auf diese App als einziges Sicherungssystem für wichtige Dokumente.

## Bereit, Ihren Tresor zu schützen?

Laden Sie Travel Document Vault herunter und aktivieren Sie Cloud-Sicherung, um Ihre Dokumente sicher zu halten.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault)
