# Hvad er min gendannelseskode? | Travel Document Vault

> Din gendannelseskode er hovednøglen til dine krypterede cloud-sikkerhedskopier. Lær, hvad den er, hvorfor du har brug for den, hvad der sker, hvis du mister den, og hvordan du opbevarer den sikkert.

Source: https://traveldocumentvault.com/da/faq/recovery-code/

---

Din gendannelseskode er en 24-tegns adgangsfrase, der krypterer dine cloud-sikkerhedskopier. Hvis du mister den, kan disse sikkerhedskopier ikke gendannes. Vi opbevarer den ikke og kan ikke nulstille den, så gem den et sikkert sted.

## Sådan fungerer det

### Hvad den er

Din gendannelseskode er en 24-tegns adgangsfrase, der genereres, når du aktiverer cloud-sikkerhedskopiering. Den ser sådan ud:

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

Denne kode er matematisk udledt af dine sikkerhedskopieringsindstillinger og er den eneste nøgle, der kan dekryptere dit krypterede vault i skyen. Vi genererer den én gang og viser den til dig én gang. Derefter er ansvaret for at holde den sikker dit.

### Hvorfor du har brug for den

Når du aktiverer cloud-sikkerhedskopiering, krypteres hele dit vault på din enhed med AES-256-GCM, før det nogensinde forlader din telefon. Krypteringsnøglen udledes af din gendannelseskode. Uden gendannelseskoden er sikkerhedskopien kryptografisk utilgængelig, selv for os.

Dette er en privatlivsgaranti. Vi kan bogstaveligt talt ikke læse dine sikkerhedskopier, dekryptere dem efter behov eller nulstille dem for dig. Hvis din gendannelseskode går tabt, er den sikkerhedskopi væk for altid. Det lyder hårdt, men det er præcis, hvad du ønsker: dit privatliv er ikke bare et løfte, vi giver, det er en teknisk kendsgerning, vi ikke kan bryde.

### Hvis du mister den

Hvis du glemmer din gendannelseskode, kan din eksisterende cloud-sikkerhedskopi ikke gendannes. Du har to muligheder:

- **Gendan fra din telefon:** Hvis koden stadig er gemt i appen (tjek Indstillinger - Cloud Backup), kan du kopiere den til et sikkert sted og gemme den.
- **Generer en ny:** Deaktiver cloud-sikkerhedskopiering, og aktiver den igen. Dette opretter en ny gendannelseskode og kasserer den eksisterende sikkerhedskopi. Du starter forfra.

### Hvor du skal opbevare den

Din gendannelseskode er lige så følsom som din hovedadgangskode. Opbevar den på en af disse måder:

- **Adgangskodeadministrator:** Bitwarden, 1Password, Apple Keychain eller lignende. Dette er den mest bekvemme løsning.
- **Fysisk sikkerhedskopi:** Skriv den ned på papir, og opbevar den i et pengeskab, en bankboks eller et sikkert sted derhjemme.
- **Offline dokument:** Gem på et krypteret eksternt drev eller USB (aldrig cloud-synkroniseret).
- **Undgå:** E-mail, Noter-appen, ukrypterede cloud-tjenester eller skærmbilleder.

### Generering af en ny kode

Hvis du tror, din gendannelseskode er kompromitteret, skal du slå cloud-sikkerhedskopiering fra og til igen. Appen genererer en ny gendannelseskode. Din gamle krypterede sikkerhedskopi kasseres. Dette er tilsigtet: rotation af gendannelseskoden er bevidst sjælden og medfører tab, så du ikke gør det uden videre.

**Ansvarsfraskrivelse:** Din gendannelseskode er dit eget ansvar. Travel Document Vault kan ikke gendanne, nulstille eller genskabe den, hvis den går tabt. Opbevar den sikkert. Stol ikke på denne app som dit eneste sikkerhedskopisystem for vigtige dokumenter.

## Klar til at beskytte dit vault?

Download Travel Document Vault, og aktiver cloud-sikkerhedskopiering for at holde dine dokumenter sikre.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault)
