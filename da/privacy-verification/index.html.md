# Privatlivsbekræftelse | Travel Document Vault

> Verificerbare privatlivsgarantier for Travel Document Vault. Nul sporere, nul dataindsamling. På enheden som standard - ingen Travel Document Vault-sky, ingen konto påkrævet. Se hver tilladelse vi anmoder om, og hvorfor.

Source: https://traveldocumentvault.com/da/privacy-verification/

---

## Vores privatlivsgarantier

### Nul sporere

Ingen analyse-SDK'er, ingen annoncebiblioteker, ingen sporingspixler i appen.

### Ingen udgående dataindsamling

Appen foretager som standard ingen udgående forbindelser. Den fungerer helt offline. Den eneste netværksbrug er valgfri Pro-cloudsikkerhedskopi, som synkroniserer med din egen iCloud eller Google Drive - aldrig til vores servere.

### Som standard på enheden

Alle dokumenter, scanninger og data forbliver på din enhed. Der er ingen Travel Document Vault-sky, ingen Travel Document Vault-server, ingen Travel Document Vault-backend. Pro-brugere kan valgfrit sikkerhedskopiere deres krypterede boks til deres egen iCloud- eller Google Drive-konto - kun de har gendannelsesnøglen.

### AES-256-GCM-kryptering

Hvert dokument krypteres, før det rører din enheds opbygning.

## Verifikation

Du behøver ikke tro på os. Du kan bekræfte hvert påstand ovenfor med gratis, offentligt tilgængelige værktøjer.

### 1. Netværkstrafik test

Installér en netværksovervågning som **mitmproxy** (gratis, open source), **Wireshark** (gratis, open source) eller **Charles Proxy**. Åbn Travel Document Vault, scan et dokument, gennemse din boks og indstil en påmindelse. Du bør ikke se dine dokumenter, scanninger, udløbsdatoer eller indholdet af din boks blive sendt til Travel Document Vault. Netværkstrafikken bør være begrænset til bestemte funktioner: valgfri Sentry-crashrapportering, købskontrol via App Store eller Google Play, valgfri cloud backup til din egen iCloud- eller Google Drive-konto, og et manuelt tjek for fejlrettelser, som forklares nedenfor.

Indstillinger har en knap kaldet **Check for Updates**. Dette er et manuelt tjek, aldrig automatisk - den kører kun når du selv trykker på den, aldrig i baggrunden og aldrig af sig selv. Tjekket kontakter **updates.traveldocumentvault.com** - vores egen opdateringsserver, drevet af os på Google Cloud, som tilbyder kryptografisk signerede opdateringsfiler fra en lagerbeholder. Vi registrerer ikke tjekket: anmodningslogfiler er deaktiveret på vores side, så der gemmes ingen IP-adresser. Hver opdatering er signeret med en nøgle, som kun vi har, og appen afviser alt, hvis signatur ikke matcher det certifikat, der er indbygget i den. Det samme tryk tjekker også **App Store** eller **Google Play** for en nyere version af appen. Den findes, så visse fejlrettelser kan nå dig hurtigere end at vente på en helt ny udgivelse i App Store eller Google Play, nyttigt for hastende rettelser, afhængigt af rettelsens art. Samme regel som for alt andet på denne side: ingen netværksopkald uden at du har bedt om det.

### 2. iOS App Privacy Report

På iPhone skal du gå til **Indstillinger > Privatliv og sikkerhed > App Privacy Report**. Denne indbyggede Apple-funktion viser, hvilke apps der har kontaktet netværksdomæner. Travel Document Vault sender ikke dine dokumenter, scanninger, udløbsdatoer eller indholdet af din boks til os. Hvis du har aktiveret Pro-cloudsikkerhedskopi, vil du se forbindelser til Apples iCloud-domæner - det er din egen sikkerhedskopi, der synkroniseres med din egen iCloud-konto.

### 3. Android - sådan tjekker du dit privatliv

Android har ikke én samlet indbygget privatlivsrapport som iPhone. To enkle måder at tjekke det selv på: se appens egen **Data Safety**-sektion på dens Google Play-side (den angiver tydeligt, hvad der indsamles, hvad der deles, at dine data krypteres under overførsel, og at de ikke kan slettes) - eller brug en netværksovervågning som beskrevet i trin 1 ovenfor.

Hvis du har slået cloud backup til, kan du bemærke noget aktivitet mod Googles servere (webadresser, der ender på **googleapis.com**). Det er forventet og sikkert: det er kun din låste, krypterede sikkerhedskopifil og et logintjek, der sendes direkte til **din egen** Google Drive-konto - den samme konto, du allerede bruger til fotos eller Gmail. Vi ser den aldrig, modtager den aldrig og gemmer aldrig en kopi nogen steder. Kun du har gendannelsesnøglen, der kan låse den op.

### 4. App Store og Play Store privatlivsmærkater

Apple og Google kræver, at udviklere erklærer, hvilke data deres app indsamler. Kontrollér Travel Document Vault-oplistingen i App Store eller Google Play. Vores erklæring: **ingen data indsamlet**.

## Sådan tester vi appens sikkerhed

Vi nøjes ikke med at sige, at appen er sikker. Vi undersøger det, med de samme åbne værktøjer og offentlige standarder, som sikkerhedsbranchen selv bruger.

### Vi holder appen op mod en offentlig standard

Vi vurderer Travel Document Vault ud fra [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), branchens tjekliste for, hvordan en mobilapp bør gemme data, bruge kryptering, låse sig bag Face ID eller en PIN-kode, og håndtere links fra andre apps. Alle kan læse standarden og sammenligne den med, hvordan appen rent faktisk opfører sig.

### Vi scanner vores egen kode

Før en ny version udgives, kører vi statisk analyse af vores kode med [Semgrep](https://semgrep.dev/), et open source-værktøj, der markerer usikre mønstre som svag kryptering eller usikker datahåndtering, så vi kan rette dem tidligt.

### Vi scanner den færdige app

Vi gennemgår også vores udgivne builds med sikkerhedsscanningsværktøjer til mobilapps, hvor vi tjekker, hvordan builden gemmer data, hvad den har adgang til, og hvordan den er signeret.

### Fundet et problem? Sig til

Hvis du opdager et sikkerhedsproblem, så send en mail til [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Detaljerne om vores procedure for indrapportering er offentliggjort på [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Dette er vores egen vurdering op mod en offentlig standard, ikke en uafhængig revision eller certificering. Senest gennemgået juli 2026.

## Hver tilladelse forklaret

Android-apps erklærer tilladelser i deres manifest. Nogle anmodes af appen direkte, og nogle er nedarvet fra biblioteker, som appen er afhængig af. Her er en gennemsigtig opdeling af hver tilladelse, grupperet efter formål.

### Tilladelser, som appen bruger direkte

### Kamera

iOS og Android

**Hvorfor vi anmoder:** Så du kan scanne dit pas, visum eller dokumentsider direkte fra appen.

**Hvad vi aldrig gør:** Fotos gemmes lokalt på din enhed. De bliver aldrig uploadet, transmitteret eller sendt nogen steder.

### Fotobibliotek / Fotos / Opbygning

iOS og Android

**Hvorfor vi anmoder:** Så du kan importere et eksisterende foto af et dokument, og så appen kan eksportere krypterede sikkerhedskopifiler (.tdvault), når du anmoder det. På ældre Android-versioner er READ_EXTERNAL_STORAGE og WRITE_EXTERNAL_STORAGE påkrævet. På Android 13+ bruges READ_MEDIA_IMAGES i stedet.

**Hvad vi aldrig gør:** Appen læser kun det billede, du vælger. Den scanner, indekserer eller gennemser aldrig dit fotobibliotek eller filsystem.

### Face ID / Touch ID / Biometrisk oplåsning

iOS og Android

**Hvorfor vi anmoder:** Så du kan låse og låse op appen, så kun du kan få adgang til dine dokumenter. På Android 6–8 bruges USE_FINGERPRINT. På Android 9+ bruges USE_BIOMETRIC i stedet.

**Hvad vi aldrig gør:** Dine biometriske data forlader aldrig din enhed. Operativsystemet håndterer godkendelse og returnerer kun et suc/fejl-resultat til appen.

### Notifikationer, Vibration, Boot fuldført, Wake Lock

Android

**Hvorfor vi anmoder:** For at levere på-enhed udløbspåmindelser, som du selv indstiller. RECEIVE_BOOT_COMPLETED omdisponerer dine påmindelser efter en enhed genstart. WAKE_LOCK sikrer, at påmindelser udløses pålideligt, selv når telefonen sover. VIBRATE ledsager meddelelsesforsendelse.

**Hvad vi aldrig gør:** Vi sender aldrig marketing-, kampagne- eller tredjepartsmeddelser. Påmindelser planlægges helt på din enhed.

### Internet, netværksstatus, Wi-Fi-status

Android

**Hvorfor disse vises:** De er nødvendige for netværksafhængige funktioner: **Sentry-crashrapportering** (opt-in, deaktiveret som standard), **fakturering via App Store eller Google Play** til køb af Pro-opgraderingen, **Pro cloud backup** (valgfrit), som synkroniserer din krypterede boks til din egen iCloud eller Google Drive, og den manuelle knap **Check for Updates** i Indstillinger (kører kun, når du trykker på den). ACCESS_NETWORK_STATE og ACCESS_WIFI_STATE lader disse funktioner kontrollere, om en forbindelse er tilgængelig, før de forsøger at sende.

**Hvad vi ikke gør:** Appen uploader ikke dine dokumenter, scanninger, udløbsdatoer, fotos eller indholdet af din boks til Travel Document Vault. Den fungerer helt offline til normal dokumentopbevaring og påmindelser.

### Tilladelser nedarvet fra biblioteker (ikke brugt af appen)

Android-apps inkluderer tredjepartsbiblioteker til funktioner som in-app-køb, kraschrapportering og notifikationer. Disse biblioteker erklærer tilladelser i deres egne manifester, som flettes ind i den endelige app. Tilladelserne nedenfor er erklæret af afhængigheder, ikke af vores kode. Appen kalder aldrig API'erne bag dem.

### Optag lyd

Nedarvet, aldrig brugt

**Hvorfor det fremgår:** Denne tilladelse erklæres af et tredjepartsbibliotek, der er inkluderet i versionen (typisk kamera eller medie-plugin). Det vises i Android-manifestet, men udløses aldrig af vores kode. Appen optager aldrig lyd eller video under nogen omstændigheder.

**Hvordan du kan bekræfte:** Appen anmoder dig aldrig om mikrofontilladelse. Når du kontrollerer enhedens tilladelseshåndterings, vil du se, at lydoptagelse ikke er givet til Travel Document Vault.

### Systemadvarselvindue

Nedarvet

Erklæret af Flutter-rammeværket til udviklings- og fejlfindingsoverlay. Denne tilladelse bruges ikke i frigivelsesversionen af appen og påvirker ikke dit privatliv.

### Detekter skærmbillede

Nedarvet

Erklæret af en rammeværksafhængighed. Appen registrerer, blokerer eller reagerer ikke på skærmbilleder. Denne tilladelse påvirker ikke din brug.

### Tilladelser for badge-antal

Nedarvet

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE og PROVIDER_INSERT_BADGE erklæres af meddelelsebiblioteket for at vise ulæste badge-tal på dit hjemmeskærmsikon på tværs af forskellige Android-producenter (Samsung, Huawei, Xiaomi osv.). De påvirker kun det tal, der vises på app-ikonet.

### Fakturering, Check licens, Install referrer

Google Play

Erklæret af Google Play Billing-biblioteket (til Pro-opgraderingen) og Play Install Referrer-biblioteket. Disse er standardkrav for Google Play Store og giver ingen adgang til personlige data.

### Download uden notifikation

Nedarvet

Erklæret af en rammeværksafhængighed. Appen downloader ikke filer i baggrunden.

### Tilladelser, som vi ikke anmoder om

Disse er almindelige tilladelser, som mange apps anmoder om. Vi anmoder ikke om dem, og de vises ikke i vores manifest.

**Placering** - ingen GPS, ingen geolokalisering, ingen sporing **Kontakter** - ingen adgang til din adressebog **Bluetooth** - intet lokalt netværk eller enhedsscanining **Kalender** - påmindelser håndteres på enheden, ikke via din kalender

Har du flere spørgsmål? Læs vores fulde [Privatlivspolitik](https://traveldocumentvault.com/privacy-policy/) eller kontroller [Spørgsmål](https://traveldocumentvault.com/da/faq/).
