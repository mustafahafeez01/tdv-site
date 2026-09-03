# Versleutelde cloud-back-up | Uw cloud. Uw sleutel. | Travel Document Vault

> End-to-end versleutelde back-up naar uw eigen iCloud of Google Drive. Alleen u bezit de herstelcode, dus niemand anders kan hem openen, ook wij niet. Werkt offline-first.

Source: https://traveldocumentvault.com/nl/cloud-backup/

---

## Hoe versleutelde back-up werkt

Echte privacy betekent dat u en alleen u uw gegevens kunt lezen.

1

### Versleutel op het apparaat

Uw kluis wordt op uw apparaat versleuteld met AES-256-GCM. De versleutelingssleutel wordt afgeleid van uw herstelcode met PBKDF2 en 600.000 iteraties.

AES-256-GCM is sterke, moderne versleuteling, en de herstelcode verlaat nooit uw handen. U moet uw telefoon nog steeds beschermen met een sterk wachtwoord en App Lock. Versleuteling beschermt het bestand; uw wachtwoord beschermt de telefoon.

2

### Upload naar uw cloud

De versleutelde back-up gaat naar uw persoonlijke iCloud- of Google Drive-account, niet naar onze servers – het is uw cloud en uw account.

U kunt uw back-ups direct in uw iCloud of Google Drive bekijken en beheren. U hebt volledige controle.

3

### Alleen u hebt de sleutel

Uw herstelcode is de sleutel om uw back-ups te ontsleutelen, en het verlaat nooit uw apparaat – nooit naar ons, Apple of Google verzonden.

Bewaar uw herstelcode op een veilige plaats, want zonder dit kunnen zelfs wij uw gegevens niet herstellen – dit is opzettelijk, geen bug.

4

### Herstel op elk apparaat

Overstap naar een nieuwe telefoon? Herstel uw back-up met uw herstelcode. Hetzelfde voor nieuw iPad, Mac of ander apparaat.

Download de app, herstel de back-up en voer uw herstelcode in om uw volledige kluis terug te krijgen, versleuteld en klaar.

## Hoe uw gegevens worden beschermd

Meerdere beveiligingslagen staan tussen een onopzettelijke tap en verloren gegevens.

**Onbeperkte retentie van verwijderde items.** Verwijderde documenten blijven in Onlangs verwijderd zolang cloud-back-up is ingeschakeld. Geen automatische verwijdering na 30 dagen.

**Permanente verwijdering vereist bevestiging.** Een afzonderlijke prompt waarschuwt u dat het document ook uit uw cloud-back-up wordt verwijderd. Geen onopzettelijke wissen.

**Uitstelperiode voor back-upgeschiedenis.** Zelfs na permanente verwijdering behoudt de back-up uw documentgegevens nog enkele synchronisatiecycli als vangnet.

**Kies uw geschiedenisvenster.** Bepaal hoe ver uw dagelijkse back-upgeschiedenis teruggaat: 7, 30, 90 of 180 dagen. Herstel uw kluis naar een eerdere dag binnen dat venster. Oudere momentopnamen worden automatisch verwijderd.

**Overslaan van lege kluissynchronisatie.** De app synchroniseert nooit een lege kluis naar de cloud. Een bulkverwijdering kan uw bestaande back-up niet wissen.

**Beveiligingsprompt voor nieuw apparaat.** Het inschakelen van cloud-back-up op een nieuw apparaat detecteert bestaande back-ups en vraagt of u wilt herstellen of opnieuw wilt beginnen. Geen stille overschrijving.

**Biometrisch gated-verwijdering.** Als u uw cloud-back-up wilt verwijderen, hebt u Face ID, Touch ID of uw PIN nodig. Een onopzettelijke tap kan uw back-up niet wissen.

**Eenmalig herstellen van instellingen.** Herstel uw back-up op elk moment vanaf het scherm Instellingen cloudback-up. U hoeft niet opnieuw te installeren of door de onboarding-flow te gaan.

**Opnieuw instellen en synchroniseren.** Als uw lokale gegevens en cloud-back-up ooit niet gesynchroniseerd raken, forceert één knop een schone herupload van uw hele kluis, zodat alles consistent blijft.

### ⚠ Uw herstelcode is kritiek

Uw herstelcode is de enige sleutel om uw back-up te ontsleutelen. We hebben een zero-knowledge-ontwerp, wat betekent dat we het niet voor u opnieuw kunnen instellen. Als u het verliest, wordt uw back-up onherstelbaar.

Bewaar uw herstelcode op een veilige plaats voordat u op cloud-back-up vertrouwt – ofwel een wachtwoordmanager, een afgedrukte kopie op een veilige plaats, ofwel beide – en controleer of u het opnieuw kunt lezen voordat u het als enige kopie opslaat.

### Apparaatvereisten

Cloud-back-up op iPhone en iPad gebruikt Apple iCloud. Het werkt op elk apparaat dat is aangemeld met een Apple ID.

Cloud-back-up op Android gebruikt Google Drive. Dit vereist Google Play Services, dat standaard is geïnstalleerd op Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme en de meeste andere grote Android-merken.

Apparaten zonder Google Play Services (zoals Huawei-apparaten die na 2019 zijn uitgebracht, Amazon Fire-tablets en AOSP-varianten) kunnen geen cloud-back-up gebruiken. De rest van de app, inclusief lokale opslag en versleuteling op het apparaat, blijft op elk apparaat werken.

### Belangrijk: bewaar altijd onafhankelijke kopieën

Cloud-back-up is één beveiligingslaag, maar geen enkel systeem is perfect. Cloudaccounts kunnen verloren gaan, herstelcodes kunnen vergeten worden, opslagservices van derden kunnen storingen hebben en onverwachte synchronisatie- of gegevensproblemen kunnen optreden. We bieden cloud-back-up als gemak, niet als garantie.

Voor kritieke documenten moet u altijd een onafhankelijke kopie bewaren, zoals een afgedrukte papierkopie op een veilige plaats, een afzonderlijke versleutelde kluisexport opgeslagen op een ander opslagmedium of originelen fysiek opgeslagen, en controleer of uw documenten kunnen worden hersteld voordat u ze nodig hebt.

U bent verantwoordelijk voor het onderhouden van uw eigen documentback-ups en voor het veiligstellen van uw herstelcode. De app, Apple, Google en de ontwikkelaar zijn niet aansprakelijk voor gegevensverlies voortvloeiend uit verloren herstelcodes, cloudaccountproblemen of vertrouwen op cloud-back-up als enige kopie.

## Beveiliging die u kunt vertrouwen

#### AES-256-GCM

Industrie-standaard geverifieerde versleuteling. Gebruikt door NIST, NSA en wereldwijde banksystemen.

#### PBKDF2 600k iteraties

Sleutelafleiding die computationeel duur is. Brute-force-aanvallen worden onhaalbaar.

#### HKDF sleutelexpansie

Per-apparaat-versleutelingssleutels. Elk herstel genereert een unieke sleutel. Compromis van één apparaat compromitteert de anderen niet.

#### Zero-Knowledge-ontwerp

We hebben geen toegang tot uw gegevens. Niet versleuteld op onze servers. Niet opgeslagen op onze servers. Echte zero-knowledge.

#### Wat Apple ziet

Versleutelde blobs in uw iCloud. Apple slaat ze op. Apple kan ze niet lezen. Hetzelfde voor Google Drive.

#### Verlies van herstelcode

Als u uw herstelcode verliest, kunnen uw back-ups niet worden ontsleuteld. Geen achterdeur. Geen mastersleutel. Opzettelijk.

## Privacy en naleving

**AVG-compliant:** We verwerken geen persoonlijke gegevens. We hebben geen toegang tot uw gegevens. Geen gegevens, geen verwerking, geen nalevingslast.

**Geen back-up escrow:** In tegenstelling tot sommige providers bewaren wij geen kopieën van uw herstelcode, privésleutels of versleutelingssleutels. Back-up custody is 100% van u.

**Opt-in standaard:** Cloud-back-up is standaard uitgeschakeld. U schakelt het expliciet in. U beslist.

Lees meer in onze [volledig privacybeleid](https://traveldocumentvault.com/privacy-policy/).

## Ervaar echte privacy

Download gratis. Schakel back-up in wanneer u klaar bent. Geen account. Alleen u.

![Download in de App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Verkrijgbaar op Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
