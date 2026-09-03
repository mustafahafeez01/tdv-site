# Krypteret cloud backup | Dit cloud. Din nøgle. | Travel Document Vault

> End-to-end krypteret backup til dit eget iCloud eller Google Drive. Du holder gendannelseskoden - vi får aldrig adgang. Adgang på alle enheder. Offline-først.

Source: https://traveldocumentvault.com/da/cloud-backup/

---

## Sådan fungerer krypteret backup

Ægte privatliv betyder, at kun du kan læse dine data.

1

### Kryptering på enheden

Dit vault krypteres på din enhed ved hjælp af AES-256-GCM. Krypteringsnøglen stammer fra din gendannelseskode ved hjælp af PBKDF2 med 600.000 iterationer.

AES-256-GCM er stærk, moderne kryptering, og gendannelseskoden forlader aldrig dine hænder. Du bør stadig beskytte din telefon med en stærk adgangskode og App Lock. Kryptering beskytter filen; din adgangskode beskytter telefonen.

2

### Upload til dit cloud

Den krypterede backup går til din personlige iCloud- eller Google Drive-konto, ikke til vores servere – det er dit cloud og din konto.

Du kan se og administrere dine backups direkte i dit iCloud eller Google Drive. Du har fuldstændig kontrol.

3

### Kun du holder nøglen

Din gendannelseskode er nøglen til at dekryptere dine backups, og den forlader aldrig din enhed – aldrig sendt til os, Apple eller Google.

Opbevar din gendannelseskode på et sikkert sted, fordi uden den kan selv vi ikke gendanne dine data – dette er intentionelt, ikke en fejl.

4

### Gendan på hvilken som helst enhed

Skifter til en ny telefon. Gendan din backup med din gendannelseskode. Samme for nye iPad, Mac eller anden enhed.

Download appen, gendan fra backup, og indtast gendannelseskoden for at få dit hele vault tilbage, krypteret og klar.

## Sådan beskytter det dine data

Flere sikkerhedslag står mellem et utilsigtet tryk og tabt data.

**Uendelig papirkurv-opbevaring.** Slettede dokumenter bliver i Senest slettet, så længe cloud backup er aktiveret. Ingen automatisk 30-dages rensning.

**Permanent sletning kræver bekræftelse.** Et separat prompt advarer dig om, at dokumentet også bliver fjernet fra din cloud backup. Ingen utilsigtede sletninger.

**Grace-periode for backuphistorik.** Selv efter permanent sletning bevarer backuppen dine dokumentdata i flere synkroniseringscyklusser som sikkerhedsnet.

**Vælg dit historikvindue.** Vælg, hvor langt tilbage din daglige backuphistorik rækker: 7, 30, 90 eller 180 dage. Gendan dit vault til en tidligere dag inden for det vindue. Ældre snapshots slettes automatisk.

**Synkronisering af tomt vault springes over.** Appen synkroniserer aldrig et tomt vault til cloudoen. En massesletning kan ikke rydde din eksisterende backup.

**Sikkerhedsprompt for ny enhed.** Aktivering af cloud backup på en ny enhed registrerer eksisterende backups og spørger, om du vil gendanne eller starte forfra. Ingen stille overskrivning.

**Biometrisk-gated sletning.** Sletning af din cloud backup kræver Face ID, Touch ID eller din PIN-kode. Et enkelt utilsigtet tryk kan ikke slette din backup.

**En-tryk gendannelse fra indstillinger.** Gendan din backup når som helst fra indstillingsskærmen for Cloud Backup. Ingen grund til at geninstallere eller gå gennem onboarding-flowet.

**Nulstil og gensynk.** Hvis dine lokale data og cloud backup nogensinde bliver usynkroniserede, tvinger én knap en ren genupload af hele dit vault, så alt forbliver konsistent.

### ⚠ Din gendannelseskode er kritisk

Din gendannelseskode er den eneste nøgle til at dekryptere din backup. Vi har et zero-knowledge-design, hvilket betyder, at vi ikke kan nulstille den for dig. Hvis du mister den, bliver din backup ugenbrugelig.

Gem din gendannelseskode på et sikkert sted, før du bruger cloud backup. En adgangskodeadministrator, en udprintet kopi på et sikkert sted, eller begge dele. Bekræft, at du kan læse den igen, før du gemmer den som din eneste kopi.

### Enhedskrav

Cloud backup på iPhone og iPad bruger Apple iCloud. Det fungerer på alle enheder, der logger ind med et Apple ID.

Cloud backup på Android bruger Google Drive. Det kræver Google Play Services, som er installeret som standard på Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme og de fleste andre store Android-mærker.

Enheder uden Google Play Services (såsom Huawei-enheder udgivet efter 2019, Amazon Fire-tablets og AOSP-kun-varianter) kan ikke bruge cloud backup. Resten af appen, herunder lokal lagring og kryptering på enheden, fortsætter med at fungere på alle enheder.

### Vigtig: Bevar altid uafhængige kopier

Cloud backup er ét sikkerhedslag, men intet system er perfekt. Cloudkonti kan gå tabt, gendannelseskoder kan glemmes, tredepartslagertjenester kan få driftsforstyrrelser, og uventede synkroniserings- eller dataproblemer kan forekomme. Vi tilbyder cloud backup som en bekvemmelighed, ikke en garanti.

For kritiske dokumenter skal du altid beholde en uafhængig kopi. Eksempler: en udprintet papierkopi på et sikkert sted, en separat krypteret vault-eksport gemt på anden lagerplads, eller originaler gemt fysisk. Bekræft, at dine dokumenter kan gendannes, før du har brug for det.

Du er ansvarlig for at vedligeholde dine egne dokumentbackups og for at holde din gendannelseskode sikker. Appen, Apple, Google og udvikler er ikke ansvarlige for datatab, der stammer fra mistede gendannelseskoder, cloudkontoproblemer eller afhængighed af cloud backup som eneste kopi.

## Sikkerhed du kan stole på

#### AES-256-GCM

Industristandard for godkendt kryptering. Brugt af NIST, NSA og globale banksystemer.

#### PBKDF2 600k iterationer

Nøgleledetigeelse, der er beregningsintensiv. Brute-force-angreb bliver umulige.

#### HKDF nøgleudvidelse

Pr. enhed-krypteringsnøgler. Hver gendannelse genererer en unik nøgle. Kompromis på en enhed kompromitterer ikke andre.

#### Zero-knowledge-design

Vi har ingen adgang til dine data. Ikke krypteret på vores servere. Ikke lagret på vores servere. Ægte zero-knowledge.

#### Hvad Apple ser

Krypterede blobs i dit iCloud. Apple opbevarer dem. Apple kan ikke læse dem. Samme for Google Drive.

#### Tab af gendannelseskode

Hvis du mister din gendannelseskode, kan dine backups ikke dekrypteres. Ingen bagdør. Ingen hovednøgle. Designet sådan.

## Privatlivs- og overensstemmelse

**GDPR-kompatibel:** Vi behandler ikke personoplysninger. Vi har ingen adgang til dine data. Ingen data, ingen behandling, ingen overensstemmelsebyrde.

**Ingen backup-spørsmål:** I modsætning til nogle udbydere beholder vi ikke kopier af din gendannelseskode, private nøgler eller krypteringsnøgler. Backup-forvaltning er 100% på dig.

**Deaktiveret som standard:** Cloud backup er deaktiveret som standard. Du aktiverer det eksplicit. Du beslutter.

Læs mere i vores [fulde privatlivspolitik](https://traveldocumentvault.com/privacy-policy/).

## Oplev ægte privatliv

Download gratis. Aktivér backup, når du er klar. Ingen konto. Bare dig.

![Download på App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Hent på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
