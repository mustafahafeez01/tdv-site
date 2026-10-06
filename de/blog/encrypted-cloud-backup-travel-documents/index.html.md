# Verschlüsseltes Cloud-Backup für Reisedokumente: Wer hält den Schlüssel

> Was ein verschlüsseltes Backup Ihrer Passscans wirklich bedeutet, und warum wir Ihren Wiederherstellungscode nicht zurücksetzen können.

Source: https://traveldocumentvault.com/de/blog/encrypted-cloud-backup-travel-documents/

---

![Ein Elternteil und ein Kind sitzen in der Abenddämmerung zusammen auf einem Sofa und schauen auf ein Telefon und einen kleinen goldenen Schlüssel, der neben einem Pass auf dem Tisch liegt, während eine Wolke darüber nur verwürfelte Zeichen hinter einem Vorhängeschloss zeigt](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Die wichtigsten Punkte

- **„Verschlüsseltes Backup" bedeutet erst dann etwas, wenn Sie wissen, wer den Schlüssel hält.** Kann das Unternehmen Ihre Dokumente lesen, schützt die Verschlüsselung sie vor Fremden, nicht vor dem Unternehmen.
- Ein Backup, das vor dem Hochladen auf Ihrem Telefon verschlüsselt wird, erreicht die Cloud als unlesbare Daten. Der Speicheranbieter hält Chiffretext, nicht Ihren Pass.
- **Kein Konto bedeutet kein Zurücksetzen des Passworts.** Verlieren Sie den Wiederherstellungscode und den Zugang zu allen Geräten, die den Tresor noch öffnen können, können wir das verschlüsselte Backup nicht wiederherstellen. Das ist der bewusste Tausch.
- Schreiben Sie den Code auf, bevor Sie sich auf das Backup verlassen, bewahren Sie ihn getrennt vom Telefon auf und lesen Sie ihn einmal vor, um zu prüfen, ob er lesbar ist.
- Ein System-Gerätebackup installiert die App neu, kann Ihre Dokumente aber nicht zurückbringen, weil Systemsicherungen den an das Gerät gebundenen Verschlüsselungsschlüssel nicht übertragen.

Sie haben vier Pässe, zwei Visa und die Geburtsurkunden der Kinder in eine App gescannt, die alles auf Ihrem Telefon behält. Gut so. Dann kommt die naheliegende Sorge: Was passiert, wenn das Telefon im Meer landet oder von einem Café-Tisch in Lissabon gestohlen wird.

Die Antwort ist ein Backup. Das Unangenehme daran: Fast jede App verwendet den Ausdruck „verschlüsseltes Backup", und fast keine meint damit dasselbe. Dieser Artikel erklärt, was die Worte tatsächlich bedeuten und worauf Sie sich einlassen, wenn ein Unternehmen Ihre Daten wirklich nicht lesen kann. Am Ende steht eine kurze Routine für die Woche vor einer Reise, damit ein verlorenes Telefon ein Ärgernis bleibt und keine Katastrophe wird.

## Was „verschlüsseltes Backup" tatsächlich bedeutet

Verschlüsselung verwürfelt eine Datei so, dass nur ein passender Schlüssel sie wieder lesbar machen kann. So weit ist das Standard. Was darüber entscheidet, ob sie Sie tatsächlich schützt, ist, wo das Verwürfeln stattfindet und wer am Ende den Schlüssel hat.

Zwei Ansätze werden beide als verschlüsseltes Backup verkauft, und sie verhalten sich sehr unterschiedlich.

Der eine sendet die Datei über eine verschlüsselte Verbindung an den Server des Unternehmens und speichert sie dort verschlüsselt ab. Beide Aussagen stimmen, und beide klingen beruhigend. Aber das Unternehmen hält weiterhin den Schlüssel und kann Ihre Dokumente jederzeit entschlüsseln: um eine Funktion auszuführen, um eine rechtliche Anfrage zu beantworten oder weil jemand im Unternehmen einen Fehler gemacht hat. Ihr Passscan ist am anderen Ende lesbar.

Beim anderen Ansatz wird die Datei auf Ihrem Telefon verschlüsselt, bevor sie irgendwohin geht, mit einem Schlüssel, der aus etwas abgeleitet wird, das nur Sie besitzen. Im Speicher kommt ein Block aus Rauschen an, und niemand am anderen Ende kann ihn lesen, weil niemand am anderen Ende den Schlüssel hat. Das nennt man üblicherweise Ende-zu-Ende-verschlüsselt oder Zero-Knowledge.

Die Frage, die sich bei jeder App lohnt, ist kurz: **Wer hält den Schlüssel?** Alles andere im Marketing ergibt sich aus der Antwort.

## Der Wiederherstellungscode, und warum wir ihn nicht zurücksetzen können

Travel Document Vault benötigt kein App-Konto, um Dokumente auf Ihrem Gerät zu speichern. Das optionale [Cloud-Backup](https://traveldocumentvault.com/de/cloud-backup/) erfordert Pro und Ihren Wiederherstellungscode, um den Cloud-Verschlüsselungsschlüssel zu entsperren. Die App erstellt diesen 24-stelligen Code, wenn Sie Ihre PIN festlegen. Der verschlüsselte Tresor geht dann an **Ihr eigenes iCloud-Konto auf iPhone und iPad oder Ihr eigenes Google-Drive-Konto auf Android** und nicht an uns.

Die Konsequenz lässt sich nicht umgehen. **Wenn Sie den Wiederherstellungscode und den Zugang zu allen Geräten verlieren, die den Tresor noch öffnen können, können wir das verschlüsselte Backup nicht wiederherstellen.** Es gibt keinen Link zum Zurücksetzen, weil es kein Konto gibt, an das er sich hängen ließe. Es gibt kein Support-Ticket, das ihn wiederherstellt, weil wir ihn nie besessen haben und ihn unmöglich erraten könnten.

Schriftlich klingt das hart, und es lohnt sich, ehrlich damit umzugehen, statt es in einem Einstellungsbildschirm zu verstecken. Es ist derselbe Tausch, den Sie mit einem Haustürschlüssel eingehen: Das Schloss lohnt sich nur, weil kein Schlüsseldienst der Welt einen Ersatzschlüssel aufbewahrt, und genau deshalb ist ein verlorener Schlüssel Ihr Problem.

Ein Unternehmen, das Ihre Dokumente wiederherstellen kann, nachdem Sie alles vergessen haben, ist ein Unternehmen, das sie die ganze Zeit über lesen konnte.

Behandeln Sie den Code also als die eine Sache, bei der Sie nichts falsch machen dürfen:

- Speichern Sie ihn, bevor Sie sich auf das Backup verlassen, nicht danach.
- Bewahren Sie ihn dort auf, wo der Verlust des Telefons ihn nicht mit sich reißt. Ein Passwort-Manager auf einem anderen Gerät funktioniert. Genauso ein Zettel in der Schublade, in der die Geburtsurkunden liegen.
- Lesen Sie ihn einmal von dort vor, wo Sie ihn aufbewahrt haben. Handschrift, die im Moment eindeutig wirkte, wird im Notfall gerne unleserlich.
- Zwei Kopien an zwei Orten schlagen eine perfekte Kopie.

## Ist Cloud-Backup sicher für Passscans?

Das hängt vollständig davon ab, was in der Cloud ankommt, und das ist eine Frage der App, nicht der Cloud.

Ein Foto Ihres Passes in einer gewöhnlichen Fotobibliothek oder einem synchronisierten Ordner kommt lesbar an. Es liegt in einem Konto, das durch ein Passwort geschützt ist, das Sie vielleicht mehrfach verwendet haben. Es wird indexiert und mit Vorschaubildern versehen, und wer sich Zugang zu diesem Konto verschafft, sieht eine saubere Kopie der Identitätsseite. Wie diese Angriffsfläche in der Praxis aussieht, haben wir unter [Pass in Google Fotos speichern](https://traveldocumentvault.com/de/blog/is-it-safe-to-store-passport-in-google-photos/) durchgespielt. Das ist ein echtes Risiko, und es ist die Einrichtung, mit der die meisten Familien unterwegs sind, ohne sie je bewusst gewählt zu haben.

Ein Tresor, der vor dem Hochladen auf dem Gerät verschlüsselt wird, kommt als Chiffretext an. Wer sich Zugang zum Cloud-Konto verschafft, findet eine Datei, die er nicht öffnen kann. Der Schutz reist mit der Datei, statt vom Konto abzuhängen, in dem sie landet.

Deshalb lautet die ehrliche Version von „ist die Cloud sicher": Die Cloud ist eine Lieferadresse, kein Sicherheitsmodell. Entscheidend ist der Zustand, in dem die Datei dort ankommt. Müssten wir einen Standard empfehlen, wäre es die Variante, die die Datei verschlüsselt, bevor sie das Telefon verlässt. Unser [Vergleich der wichtigsten Orte, an denen Menschen Passscans aufbewahren](https://traveldocumentvault.com/de/blog/safest-way-to-store-passport-digitally/), geht die Abwägungen jeder Option durch.

| Was Sie sichern | Zustand bei Ankunft | Wer es lesen kann | Bei einem Einbruch ins Konto |
|---|---|---|---|
| **Foto Ihres Passes in einer Fotobibliothek** | Lesbares Bild | Sie, der Anbieter, jeder mit Kontozugriff | Vollständige Identitätsseite offengelegt |
| **PDF in einem synchronisierten Laufwerksordner** | Lesbare Datei | Sie, der Anbieter, jeder mit Kontozugriff | Dokumente offengelegt und herunterladbar |
| **App-Backup, bei dem das Unternehmen den Schlüssel hält** | Verschlüsselt gespeichert | Sie und das Unternehmen | Hängt vom eigenen Schlüsselmanagement des Unternehmens ab |
| **Backup, das zuerst auf Ihrem Gerät verschlüsselt wird** | Chiffretext | Nur wer den Wiederherstellungscode besitzt | Angreifer erhält eine unlesbare Datei |

## Was ins Backup einfließt, und was zurückbleibt

Das Backup enthält Profile, Scans, Anhänge, Ablaufdaten, Notizen und Erinnerungsverläufe, die auf ein neues Gerät übertragen werden können. Die App verschlüsselt sie vor dem Hochladen. Bei der Wiederherstellung kommt dieser Tresorinhalt zurück; Geräteeinstellungen bleiben getrennt, und die App erstellt Benachrichtigungen neu.

Drei Dinge bleiben bewusst auf dem Telefon, und der Wiederherstellungscode steht an erster Stelle: Er wird nicht mit dem Backup hochgeladen. Auch Ihre App-Sperre bleibt lokal, sodass Face ID, Touch ID oder Ihre PIN andere aus der App fernhält, während die Verschlüsselung sie aus der Datei fernhält. Und die automatischen lokalen Sicherungspunkte, die die App während der Nutzung anlegt, bleiben ausschließlich auf dem Gerät.

Der letzte Punkt überrascht viele, deshalb hier die unverblümte Version. **Ein systemweites Gerätebackup installiert die App neu, kann Ihre Dokumente aber nicht wiederherstellen.** Systemsicherungen übertragen den an das Gerät gebundenen Verschlüsselungsschlüssel nicht; das neue Telefon benötigt deshalb eine Cloud-Wiederherstellung (Pro) oder eine exportierte Tresordatei. Soll Ihr Tresor das Telefon überleben, brauchen Sie entweder ein eingeschaltetes Cloud-Backup oder eine exportierte Datei, die irgendwo gespeichert ist.

## Ihren Tresor wiederherstellen – ein Neustart lässt das alte Backup unangetastet

Die Dauer der Wiederherstellung hängt von der Tresorgröße und Ihrer Verbindung ab.

Installieren Sie die App auf dem neuen Telefon und melden Sie sich beim gleichen iCloud- oder Google-Konto an, das Sie zuvor genutzt haben. Öffnen Sie mit Pro bei ausgeschalteter Cloud-Sicherung auf dem Zielgerät „Einstellungen“, „Cloud-Sicherung“ und dann „Aus Sicherung wiederherstellen“. Wählen Sie den vorhandenen Tresor, geben Sie Ihren Wiederherstellungscode ein und bestätigen Sie die Wiederherstellung, die den lokalen Tresorinhalt ersetzt. Profile, Dokumente und Ablaufdaten werden wiederhergestellt; Benachrichtigungen werden auf dem Zielgerät neu erstellt.

Die App prüft außerdem, bevor sie schreibt. Erkennt das Cloud-Backup ein bestehendes Backup in diesem Konto, fragt es Sie, ob Sie es wiederherstellen oder neu beginnen möchten. Ein neues Telefon kann nicht stillschweigend überschreiben, was bereits vorhanden ist.

### Der Wechsel zwischen iPhone und Android läuft über den Tresor-Export

Das Cloud-Backup bleibt auf einer Plattform, weil es auf Apple-Geräten Ihr eigenes iCloud-Konto und auf Android Ihr eigenes Google-Drive-Konto nutzt. Der Wechsel von einer Plattform zur anderen braucht den anderen Weg.

Der Tresor-Export ist kostenlos. Unter „Einstellungen“ erstellt „Tresor exportieren“ eine passwortgeschützte Datei mit Profilen, Dokumenten, Reisen, unterstützten Einstellungen und lesbaren Anhängen. Sie wählen den Speicherort: die Dateien-App, ein Laufwerk oder eine E-Mail an sich selbst. Auf dem neuen Telefon liest „Einstellungen“, „Sicherung importieren“ die Datei wieder ein und ersetzt die dort vorhandenen Daten. Beide Plattformen werden unterstützt. Prüfen Sie importierte Dokumente, Notizen und Anhänge, kontrollieren Sie die Erinnerungen erneut und behalten Sie den ursprünglichen Export. Benachrichtigungen werden auf dem Zielgerät neu erstellt.

Diese exportierte Datei ist auch die Antwort für alle, die eine Kopie wollen, die überhaupt nicht von einem Cloud-Konto abhängt. Es ist sinnvoll, sie unabhängig vom eigenen Telefon auf einem Laufwerk zu Hause aufzubewahren.

## Eine Backup-Routine, die ein verlorenes Telefon übersteht

Zwanzig Minuten, einmalig, vor der nächsten Reise:

- Schalten Sie das verschlüsselte Backup ein und lassen Sie den ersten Upload im heimischen WLAN abschließen.
- Schreiben Sie den Wiederherstellungscode irgendwo auf, das nicht das Telefon ist, und lesen Sie ihn dann von dieser Kopie vor, um die Lesbarkeit zu prüfen.
- Fertigen Sie eine zweite Kopie des Codes an und bewahren Sie sie an einem anderen Ort als die erste auf.
- Exportieren Sie den Tresor einmal und speichern Sie die Datei an einem Ort, den Sie selbst kontrollieren, als Weg, der von keinem Cloud-Konto abhängt.
- Prüfen Sie vor dem Abflug, ob die App ein aktuelles Backup anzeigt, genau wie Sie prüfen würden, ob die Pässe in der Tasche sind.

Eine letzte Anmerkung zu den Erwartungen. Backup ist eine Sicherheitsebene und garantiert nichts: Cloud-Konten werden gesperrt, Codes werden vergessen, Speicherdienste haben schlechte Tage. Bei Dokumenten, die wirklich wichtig sind, bewahren Sie zusätzlich etwas Unabhängiges auf, sei es eine gedruckte Kopie in einer Schublade zu Hause oder ein zweiter Export auf einem Laufwerk.

Nichts davon ist dramatisch, und genau das ist der Sinn. Familien, die mit einem gestohlenen Telefon im Ausland gut zurechtkommen, sind so gut wie nie diejenigen, die brillant reagiert haben. Es sind die, die zwei Wochen zuvor zwanzig unauffällige Minuten am Küchentisch verbracht haben. Falls Sie das noch nicht erledigt haben, richten Sie Ihr Backup heute ein und notieren Sie, wo der Wiederherstellungscode liegt.

**Bevor Sie sich darauf verlassen:** Das ist ein Blog, keine offizielle Quelle. Regeln und Details ändern sich, und Ihre Situation kann anders sein. Wir prüfen, was wir veröffentlichen, und können trotzdem falsch liegen oder veraltet sein. Wenn etwas davon für Ihre Pläne wichtig ist, lassen Sie es von der zuständigen Stelle bestätigen, bevor Sie handeln.

## Häufig gestellte Fragen

### Was bedeutet verschlüsseltes Backup eigentlich?

Es bedeutet, dass die Kopie auf Ihrem Telefon verschlüsselt wird, bevor sie irgendwohin geht, mit einem Schlüssel, der bei Ihnen bleibt. Wer die Datei anschließend speichert, hält einen Block unlesbarer Daten in den Händen, nicht Ihren Pass. Das Wort bedeutet erst dann etwas, wenn Sie die Anschlussfrage beantworten können: Wer hält den Schlüssel? Kann das Unternehmen hinter der App Ihre Dokumente lesen, schützt die Verschlüsselung sie vor Außenstehenden, nicht vor dem Unternehmen.

### Was passiert, wenn ich meinen Backup-Schlüssel verliere?

Wenn Sie den Wiederherstellungscode und den Zugang zu allen Geräten verlieren, die den Tresor noch öffnen können, können wir das verschlüsselte Backup nicht wiederherstellen. Es gibt kein Konto, kein Zurücksetzen des Passworts und keinen Support-Weg, der es wiederherstellt, weil der Wiederherstellungscode uns von vornherein nie erreicht. Das ist der bewusste Tausch dafür, dass auch sonst niemand Ihre Dokumente lesen kann. Schreiben Sie den Code auf, bevor Sie sich auf das Backup verlassen, bewahren Sie ihn getrennt von Ihrem Telefon auf und lesen Sie ihn einmal zur Kontrolle vor.

### Ist Cloud-Backup sicher für Passscans?

Das hängt vollständig davon ab, was in der Cloud ankommt. Ein Foto Ihres Passes in einer normalen Fotobibliothek oder einem synchronisierten Ordner kommt lesbar an, und jeder, der sich Zugang zu diesem Konto verschafft, kann es lesen. Ein Backup, das vor dem Hochladen auf dem Gerät verschlüsselt wird, kommt als Chiffretext an, sodass der Speicheranbieter etwas hält, das er nicht öffnen kann. Mit Pro verschlüsselt Travel Document Vault den Tresor auf Ihrem Telefon mit AES-256-GCM und sendet die verschlüsselte Datei an Ihr eigenes iCloud- oder Google-Drive-Konto statt an einen TDV-Server.

### Kann ich meine Dokumente auf einem anderen Telefon wiederherstellen?

Ja, mit Pro. Installieren Sie die App auf dem neuen Telefon und melden Sie sich beim selben iCloud- oder Google-Konto an. Öffnen Sie bei ausgeschalteter Cloud-Sicherung auf dem Zielgerät „Einstellungen“, „Cloud-Sicherung“ und dann „Aus Sicherung wiederherstellen“. Wählen Sie den vorhandenen Tresor, geben Sie Ihren Wiederherstellungscode ein und bestätigen Sie die Wiederherstellung, die den lokalen Tresorinhalt ersetzt. Profile, Dokumente und Ablaufdaten werden wiederhergestellt; Benachrichtigungen werden auf dem Zielgerät neu erstellt. Beachten Sie, dass ein systemweites Gerätebackup das nicht von sich aus leistet: Es installiert die App neu, kann Ihre Dokumente aber nicht entschlüsseln, weil Systemsicherungen den an das Gerät gebundenen Verschlüsselungsschlüssel nicht übertragen.

### Funktioniert das Backup zwischen iPhone und Android?

Cloud-Backups bleiben auf einer Plattform: Ihr eigenes iCloud auf iPhone und iPad oder Ihr eigenes Google Drive unter Android. Für einen Wechsel nutzen Sie den kostenlosen Tresor-Export. Unter „Einstellungen“ erstellt „Tresor exportieren“ eine passwortgeschützte .tdvault-Datei, die Sie sich selbst senden können. Auf dem neuen Telefon liest „Einstellungen“, „Sicherung importieren“ sie wieder ein und ersetzt die dort vorhandenen Daten. Der Import unterstützt beide Plattformen. Prüfen Sie importierte Dokumente, Notizen und Anhänge, kontrollieren Sie die Erinnerungen erneut und behalten Sie den ursprünglichen Export. Benachrichtigungen werden auf dem Zielgerät neu erstellt.

### Was wird im Backup gespeichert, und was bleibt auf dem Gerät?

Das Backup enthält Profile, lesbare Scans und Anhänge, Ablaufdaten, Notizen und übertragbare Erinnerungsverläufe, die vor dem Hochladen verschlüsselt werden. Ihr Wiederherstellungscode wird nicht mit dem Backup hochgeladen. Das Gleiche gilt für Ihre App-Sperre, sodass Face ID, Touch ID oder Ihre PIN die App schützt, während die Verschlüsselung die Datei schützt. Auch die automatischen lokalen Sicherungspunkte bleiben ausschließlich auf dem Gerät, weshalb sie Ihren Tresor auf einem Ersatztelefon nicht zurückbringen können.

## Verwandte Artikel

[Datenschutz und Sicherheit7 Min. LesezeitiCloud vs Google Fotos vs verschlüsselte Tresor: Der sicherste Weg, Ihren Reisepass zu speichern](https://traveldocumentvault.com/de/blog/safest-way-to-store-passport-digitally/)

[Datenschutz7 Min. LesezeitIst es sicher, seinen Reisepass in Google Photos zu speichern? Was Sie wissen müssen](https://traveldocumentvault.com/de/blog/is-it-safe-to-store-passport-in-google-photos/)
