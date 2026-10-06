# Krypteret cloud backup | Dit cloud. Din nøgle. | Travel Document Vault

> Krypteret backup (Pro) til din egen iCloud eller Google Drive. Gendan med din gendannelseskode, som vi ikke opbevarer.

Source: https://traveldocumentvault.com/da/cloud-backup/

---

## Sådan fungerer krypteret backup

Dit dokumentindhold krypteres før upload til skyen.

1

### Kryptering på enheden

Dit dokumentindhold krypteres på din enhed med AES-256-GCM. PBKDF2 med 600.000 iterationer afleder nøglen, der låser hvælvingens tilfældigt genererede hovednøgle op.

AES-256-GCM krypterer dit dokumentindhold. Appen uploader ikke din gendannelseskode til os, Apple eller Google. Du bør stadig beskytte din telefon med en stærk adgangskode og appens PIN-lås. Kryptering beskytter filen; din adgangskode beskytter telefonen.

2

### Upload til dit cloud

Den krypterede backup går til din personlige iCloud- eller Google Drive-konto, ikke til vores servere – det er dit cloud og din konto.

På iPhone og iPad kan du se dine backupfiler i iCloud Drive. På Android ligger de i en skjult appmappe i din egen Google Drive. Du har fuldstændig kontrol.

3

### Kun du holder nøglen

Din gendannelseskode låser dine krypteringsnøgler til skyen op. Appen uploader ikke koden til os, Apple eller Google; hold de kopier, du laver, private.

Opbevar din gendannelseskode på et sikkert sted, fordi uden den kan selv vi ikke gendanne dine data – dette er intentionelt, ikke en fejl.

4

### Gendan på en ny enhed

Skifter til en ny telefon. Gendan din backup med din gendannelseskode. Det samme gælder en ny iPad eller en anden understøttet enhed på samme platform med samme skykonto.

Åbn Indstillinger, Skybakup på den nye enhed, og vælg Gendann fra sikkerhedskopi. Vælg din backup, indtast din gendannelseskode, og bekræft. Gendannelse erstatter den lokale hvælving.

## Sådan beskytter det dine data

Flere sikkerhedslag står mellem et utilsigtet tryk og tabt data.

**Uendelig papirkurv-opbevaring.** Slettede dokumenter bliver i Senest slettet, så længe cloud backup er aktiveret. Ingen automatisk 30-dages rensning.

**Permanent sletning kræver bekræftelse.** Et separat prompt advarer dig om, at dokumentet også bliver fjernet fra din cloud backup.

****

**Vælg dit historikvindue.** Vælg, hvor langt tilbage din daglige backuphistorik rækker: 7, 30, 90 eller 180 dage. Gendan dit vault til en tidligere dag inden for det vindue. Ældre snapshots slettes automatisk.

**Beskyttelse mod synkronisering af en tom hvælving.** En beskyttelse springer nogle backupforsøg med en tom hvælving over; førstegangsbackup og gendannelses- og synkroniseringsforløb har undtagelser. Masseslettede dokumenter bliver i Nylig slettet, mens cloud-backup er slået til, indtil du sletter dem permanent.

**Sikkerhedsprompt for ny enhed.** Aktivering af cloud backup på en ny enhed registrerer eksisterende backups og spørger, om du vil gendanne eller starte forfra. Ingen stille overskrivning.

**Bekræftet sletning af cloud-backup.** Sletning af din cloud-backup kræver Face ID, Touch ID eller din PIN, hvis den tilsvarende applås er slået til, efterfulgt af bekræftelse. Et enkelt utilsigtet tryk kan ikke slette din backup.

**Gendannelse fra Indstillinger.** Åbn Skybakup i Indstillinger på en understøttet enhed på samme platform med samme skykonto, mens backup er slået fra. Vælg din backup, indtast gendannelseskoden, og bekræft gendannelsen. Det erstatter indholdet af den lokale hvælving. Ingen grund til at geninstallere eller gå gennem onboarding-flowet.

**Nulstil og gensynk.** Hvis dine lokale data og cloud-backup ikke længere er synkroniserede, kan du bruge Nulstil og gensynkroniser til at uploade en ny kopi af din hvælving.

### ⚠ Din gendannelseskode er kritisk

Din gendannelseskode låser de krypteringsnøgler til skyen op, som du skal bruge til at gendanne din backup. Vi kan ikke nulstille den for dig. Hvis du mister alle kopier og adgang til alle enheder, der stadig kan låse hvælvingen op, kan vi ikke gendanne den krypterede backup.

Gem din gendannelseskode på et sikkert sted, før du bruger cloud backup. En adgangskodeadministrator, en udprintet kopi på et sikkert sted, eller begge dele. Bekræft, at du kan læse den igen, før du gemmer den som din eneste kopi.

### Enhedskrav

Cloud backup på iPhone og iPad bruger Apple iCloud. Det kræver en understøttet iPhone eller iPad, hvor iCloud Drive er tilgængelig og slået til for appen.

Cloud backup på Android bruger Google Drive. Det kræver Google Play Services, som er installeret som standard på Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme og de fleste andre store Android-mærker.

Enheder uden Google Play Services (såsom Huawei-enheder udgivet efter 2019, Amazon Fire-tablets og AOSP-kun-varianter) kan ikke bruge cloud backup. Resten af appen, herunder lokal lagring og kryptering på enheden, fungerer fortsat på understøttede enheder, men automatisk datoaflæsning kræver også Google Play Services.

### Vigtig: Bevar altid uafhængige kopier

Cloud backup er ét sikkerhedslag, men intet system er perfekt. Cloudkonti kan gå tabt, gendannelseskoder kan glemmes, tredepartslagertjenester kan få driftsforstyrrelser, og uventede synkroniserings- eller dataproblemer kan forekomme. Vi tilbyder cloud backup som en bekvemmelighed, ikke en garanti.

For kritiske dokumenter skal du altid beholde en uafhængig kopi. Eksempler: en udprintet papierkopi på et sikkert sted, en separat krypteret vault-eksport gemt på anden lagerplads, eller originaler gemt fysisk. Bekræft, at dine dokumenter kan gendannes, før du har brug for det.

Du er ansvarlig for at vedligeholde dine egne dokumentbackups og for at holde din gendannelseskode sikker. Appen, Apple, Google og udvikler er ikke ansvarlige for datatab, der stammer fra mistede gendannelseskoder, cloudkontoproblemer eller afhængighed af cloud backup som eneste kopi.

## Kryptering og gendannelse

#### AES-256-GCM

Autentificeret kryptering af dokumentindhold.

#### PBKDF2 600k iterationer

Nøgleafledning, der kræver meget beregningsarbejde. Det øger omkostningerne ved at gætte gendannelseskoden.

#### HKDF nøgleudvidelse

Separate nøgler til hver backupfil; en gendannelse krypterer dine dokumenter igen med den nye enheds egen nøgle. En kompromitteret autoriseret enhed eller gendannelseskode kan blotlægge den fælles hvælving i skyen.

#### Zero-knowledge-design

Din krypterede backup bliver i din egen skykonto. Vi modtager den ikke og har ikke de nøgler, der skal til for at læse dokumentindholdet.

#### Hvad Apple ser

Dokumentindhold er krypteret i din iCloud eller Google Drive. Backupmetadata, såsom enhedsnavne, antal og tidsstempler, er ikke krypteret.

#### Tab af gendannelseskode

Hvis du mister alle kopier af din gendannelseskode og adgang til alle enheder, der stadig kan låse hvælvingen op, kan vi ikke dekryptere dine backups. Vi opbevarer ikke dine krypteringsnøgler til skyen.

## Privatlivs- og overensstemmelse

**Valgfri nedbrudsrapportering:** Nedbrudsrapportering er slået fra som standard. Dit dokumentindhold uploades ikke til vores servere.

**Ingen backup-spørsmål:** Vi opbevarer ikke kopier af din gendannelseskode eller krypteringsnøgler. Opbevar din kode et sikkert sted.

**Deaktiveret som standard:** Cloud-backup er slået fra som standard. Slå den til i Indstillinger, når du vil bruge den.

Læs mere i vores [fulde privatlivspolitik](https://traveldocumentvault.com/privacy-policy/).

## Oplev ægte privatliv

Hent gratis. Aktivér backup med Pro, når du er klar. Ingen konto. Bare dig.

![Download på App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Hent på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
