# Back-up uitgelegd: lokale back-ups, Vault Export en Cloudback-up | Travel Document Vault

> De drie manieren waarop Travel Document Vault uw gegevens beschermt: lokale back-ups, Vault Export (.tdvault) en optionele versleutelde cloudback-up.

Source: https://traveldocumentvault.com/nl/faq/backup-explained/

---

Travel Document Vault biedt u drie beschermingslagen. Hier leest u precies wat elke laag doet, voor wie deze bedoeld is en hoe u ermee kunt herstellen.

## Drie mechanismen, een doel

Travel Document Vault biedt drie beschermingslagen: (1) Automatische lokale back-ups, die elke paar minuten gratis op uw apparaat worden gemaakt. (2) Vault Export, een gratis handmatig versleuteld back-upbestand (.tdvault) dat u opslaat waar u zelf kiest. (3) Cloudback-up, een Pro-optie die een end-to-end versleutelde kopie bewaart in uw eigen iCloud of Google Drive.

- **Automatische lokale back-ups** – werken stil op de achtergrond, geen actie vereist.
- **Vault Export (.tdvault)** – een draagbaar versleuteld bestand dat u opslaat waar u zelf kiest.
- **Cloudback-up (Pro)** – een automatische versleutelde kopie in uw eigen iCloud of Google Drive.

## In een oogopslag

| Mechanisme | Niveau | Automatisch? | Waar het zich bevindt | Zo herstelt u |
|---|---|---|---|---|
| **Automatische lokale back-ups** | Gratis | Ja, elke paar minuten | Op uw apparaat | Instellingen, Lokale back-up herstellen |
| **Vault Export (.tdvault)** | Gratis | Nee, handmatig | Waar u het ook opslaat: Bestanden, iCloud Drive, Google Drive, e-mail | Instellingen, Back-up importeren |
| **Cloudback-up** | Pro | Ja, automatisch | Uw eigen iCloud (iOS) of Google Drive (Android) | Instellingen, Cloudback-up, Herstellen vanuit back-up |

## Automatische lokale back-ups

Terwijl de app geopend is en u wijzigingen aanbrengt, maakt deze stilletjes elke paar minuten een momentopname van uw kluis. U hoeft niets te doen. De app bewaart enkele recente momentopnamen en verwijdert oudere om ruimte te besparen. Vault Export maakt een draagbaar versleuteld bestand dat u buiten het apparaat kunt opslaan.

In Instellingen ziet u een regel zoals *Laatste back-up: 2 uur geleden, 12 documenten*. Dit toont de leeftijd van de meest recente momentopname en hoeveel documenten daarin zijn vastgelegd. Het toont de laatst beschikbare lokale momentopname. Lokale momentopnamen bevatten geen onafhankelijke kopieën van bijlagebestanden.

**Zo herstelt u:** Instellingen, dan Lokale back-up herstellen. Kies een momentopname uit de lijst en bevestig. Herstellen vervangt uw huidige gegevens door de inhoud van de momentopname.

Deze lokale momentopnamen blijven op uw apparaat. Een systeemback-up (iCloud-back-up, Google-back-up) installeert de app opnieuw, maar kan deze niet herstellen op een nieuw toestel, omdat gewone telefoonback-ups de apparaatgebonden versleutelingssleutel niet overzetten. Vault Export bevat een met een wachtwoord versleutelde kopie van die sleutel. Gebruik Cloudback-up (Pro) of de gratis Vault Export om uw kluis over te zetten.

## Vault Export (.tdvault) – gratis voor iedereen

Vault Export bundelt ondersteunde kluisgegevens en beschikbare bijlagen in één versleuteld bestand dat met een wachtwoord is beveiligd. Elke export heeft een maximale bestandsgrootte. U kiest waar u het opslaat: de Bestanden-app, iCloud Drive, Google Drive, of u deelt het via AirDrop of e-mail.

Het bestand wordt op uw apparaat versleuteld voordat het de app verlaat. Alleen het wachtwoord dat u bij het exporteren instelt, kan het ontgrendelen.

**Zo exporteert u:** Instellingen, Kluis exporteren, en volg vervolgens de aanwijzingen en kies een bestemming.

**Zo herstelt u:** Instellingen, Back-up importeren, selecteer dan uw .tdvault-bestand, bevestig en voer het wachtwoord in. Importeren vervangt alles wat al op die telefoon staat. Importeren werkt op ondersteunde apparaten, ook tussen platforms (van iOS naar Android of omgekeerd). Exports bewaren ondersteunde kluisvelden en bepaalde instellingen. Ontbrekende bijlagen of onleesbare notities kunnen worden weggelaten. Controleer uw geïmporteerde documenten en herinneringen. Appvergrendeling en andere apparaatinstellingen blijven lokaal.

Dit is gratis voor alle gebruikers. Geen Pro-aankoop vereist.

## Cloudback-up (Pro)

Cloud Backup is een Pro-functie. Schakel deze in om automatisch een kopie te bewaren in uw eigen iCloud (iOS) of Google Drive (Android). De app werkt deze bij terwijl hij geopend is en verbinding heeft. Wij ontvangen de back-up niet. De documentinhoud is versleuteld. Back-upmetadata, zoals apparaatnamen, aantallen en tijdstempels, zijn dat niet.

De documentinhoud wordt op uw apparaat end-to-end versleuteld met AES-256-GCM voordat deze wordt geüpload. De cloudversleutelingssleutels worden ontgrendeld met uw herstelcode, een wachtwoordzin van 24 tekens die de app genereert wanneer u uw PIN instelt. Bewaar uw herstelcode op een veilige plek. Als u elke kopie van de code en toegang tot elk apparaat dat de kluis nog kan ontgrendelen verliest, kunnen wij de versleutelde back-up niet herstellen.

**Zo herstelt u:** Gebruik een ondersteund apparaat op hetzelfde platform en dezelfde Apple ID of hetzelfde Google-account. Open Instellingen, Cloud Backup terwijl de back-up uit staat. Kies Herstellen uit Back-up, selecteer uw back-up, voer uw herstelcode in en bevestig. Herstellen vervangt de lokale kluisinhoud.

Cloud Backup werkt automatisch terwijl de app geopend is en verbinding heeft. Herstel via Instellingen met uw herstelcode, hetzelfde cloudaccount en een ondersteund apparaat op hetzelfde platform.

## Welke moet ik gebruiken?

Het korte antwoord: gebruik alle drie.

Automatische lokale back-ups kunnen helpen recente kluisgegevens te herstellen wanneer momentopnamen beschikbaar zijn. Ze worden gemaakt terwijl de app geopend is en vervangen geen onafhankelijke documentback-up.

Vault Export is de juiste stap voor een apparaatwissel, een grote app-update, of elk moment waarop u een draagbare kopie wilt die onafhankelijk van uw telefoon ergens wordt bewaard. Doe dit minstens één keer en bewaar het bestand op een veilige plek.

Cloudback-up (Pro) is de juiste keuze als u automatische bescherming buiten het apparaat wilt zonder bestanden handmatig te beheren. Gebruik bij het overstappen naar een ondersteunde telefoon op hetzelfde platform hetzelfde cloudaccount, selecteer uw back-up in de herstelprocedure, voer uw herstelcode in en bevestig. Herstellen vervangt de lokale kluisinhoud.

Geen enkele laag is een reden om de andere over te slaan. Cloud-accounts kunnen verloren gaan, herstelcodes kunnen worden vergeten, en telefoons kunnen worden gestolen voordat een lokale back-up wordt uitgevoerd. De combinatie van alle drie geeft u de sterkste bescherming.

### Verwante handleidingen

- [Uw kluis exporteren en importeren - stap-voor-stap handleiding](https://traveldocumentvault.com/nl/faq/export-import/)
- [Wat is mijn herstelcode? - volledige handleiding voor veilige opslag](https://traveldocumentvault.com/nl/faq/recovery-code/)
- [Cloudback-up - hoe end-to-end versleuteling werkt](https://traveldocumentvault.com/nl/cloud-backup/)

## Snelle antwoorden

Welke back-upopties biedt Travel Document Vault? Travel Document Vault biedt drie beschermingslagen: (1) Automatische lokale back-ups, die elke paar minuten gratis op uw apparaat worden gemaakt. (2) Vault Export, een gratis handmatig versleuteld back-upbestand (.tdvault) dat u opslaat waar u zelf kiest. (3) Cloudback-up, een Pro-optie die een end-to-end versleutelde kopie bewaart in uw eigen iCloud of Google Drive. Is Vault Export gratis? Dit is gratis voor alle gebruikers. Geen Pro-aankoop vereist. Wat is het verschil tussen lokale back-ups en Vault Export? Terwijl de app geopend is en u wijzigingen aanbrengt, maakt deze stilletjes elke paar minuten een momentopname van uw kluis. U hoeft niets te doen. De app bewaart enkele recente momentopnamen en verwijdert oudere om ruimte te besparen. Vault Export maakt een draagbaar versleuteld bestand dat u buiten het apparaat kunt opslaan. Wat is Cloudback-up en wie heeft het nodig? Cloud Backup is een Pro-functie. Schakel deze in om automatisch een kopie te bewaren in uw eigen iCloud (iOS) of Google Drive (Android). De app werkt deze bij terwijl hij geopend is en verbinding heeft. Wij ontvangen de back-up niet. De documentinhoud is versleuteld. Back-upmetadata, zoals apparaatnamen, aantallen en tijdstempels, zijn dat niet.

## Travel Document Vault downloaden

Gratis download. Vault Export en lokale back-ups zijn voor iedereen inbegrepen. Pro voegt Cloudback-up, onbeperkte profielen, gecombineerde PDF-export en meer toe. Eenmalige aankoop, geen abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Download van Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
