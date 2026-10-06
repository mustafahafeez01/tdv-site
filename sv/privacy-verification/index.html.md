# Integritetskontroll | Travel Document Vault

> Verifierbar integritet: noll spårare, noll datainsamling, inget konto. Allt sparas på enheten. Se varje behörighet appen ber om och varför.

Source: https://traveldocumentvault.com/sv/privacy-verification/

---

## Våra integritetsgarantier

### Noll spårare

Ingen analys-SDK, ingen annonsbibliotek, ingen spårningspixlar i appen.

### Ingen utgående datainsamling

Appen gör inga utgående anslutningar som standard. Den fungerar helt offline. Det enda nätverksanvändandet är valfri Pro-molnsäkerhetskopiering, som synkroniserar med ditt eget iCloud eller Google Drive – aldrig till våra servrar.

### Som standard på enheten

Alla dokument, skanningar och data stannar på din enhet. Det finns inget Travel Document Vault-moln, ingen Travel Document Vault-server, ingen Travel Document Vault-backend. Pro-användare kan valfritt säkerhetskopiera sitt krypterade valv till sitt eget iCloud- eller Google Drive-konto – bara de håller återställningsnyckeln.

### AES-256-GCM-kryptering

Varje dokument krypteras innan det vidrör din enhets lagring.

## Verifiering

Du behöver inte tro på oss. Du kan bekräfta alla påståenden ovan med kostnadsfria, offentligt tillgängliga verktyg.

### 1. Nätverkstrafiktest

Installera en nätverksövervakare som **mitmproxy** (gratis, öppen källkod), **Wireshark** (gratis, öppen källkod) eller **Charles Proxy**. Öppna Travel Document Vault, skanna ett dokument, bläddra i ditt valv och ställ in en påminnelse. Du ska inte se att dina dokument, skanningar, utgångsdatum eller valvinnehåll skickas till Travel Document Vault. Nätverkstrafiken bör vara begränsad till specifika funktioner: valfri kraschrapportering via Sentry, köpverifieringar via App Store eller Google Play, valfri molnsäkerhetskopiering till ditt eget iCloud- eller Google Drive-konto, och en kontroll av felkorrigeringar som förklaras nedan.

Inställningar har en knapp för **Sök efter uppdateringar**. Kontrollen är avstängd som standard: den körs när du trycker på knappen, eller en gång per appstart om du aktiverar Sök efter uppdateringar vid öppning. En pågående nedladdning kan fortsätta när appen går till bakgrunden. Kontrollen kontaktar **updates.traveldocumentvault.com** – vår egen uppdateringsserver, som drivs av oss på Google Cloud och som tillhandahåller kryptografiskt signerade uppdateringsfiler från en lagringsbucket. Uppdateringshanteraren skriver inga förfrågningsloggar för applikationen. Varje uppdatering är signerad med en nyckel som bara vi har, och appen avvisar allt vars signatur inte motsvarar det certifikat som är inbyggt i den. Samma tryck kontrollerar också om en nyare version av appen finns på **App Store** eller **Google Play**. Funktionen finns så att vissa felkorrigeringar kan nå dig snabbare än att vänta på en helt ny release i App Store eller Google Play, användbart för brådskande korrigeringar, beroende på typ av korrigering. Dokumentlagring kräver inget nätverk; köpverifieringar och aktiverade valfria funktioner kan göra automatiska nätverksanrop.

### 2. iOS App Privacy Report

På iPhone går du till **Inställningar > Integritet och säkerhet > Integritetsrapport för appar**. Den här inbyggda Apple-funktionen visar vilka appar som har kontaktat nätdomäner. Travel Document Vault skickar inte dina dokument, skanningar, utgångsdatum eller valvinnehåll till oss. Om du har aktiverat Pro-molnsäkerhetskopiering kommer du att se anslutningar till Apples iCloud-domäner – det är din egen säkerhetskopia som synkroniseras till ditt eget iCloud-konto.

### 3. Android – kontrollera din integritet

Android har ingen enda inbyggd integritetsrapport som iPhone. Två enkla sätt att kontrollera själv: titta på appens egen **Data Safety**-sektion på dess Google Play-sida (den anger tydligt vad som samlas in, vad som delas, att dina data krypteras under överföring och att de inte kan raderas) – eller använd en nätverksövervakare enligt beskrivningen i steg 1 ovan.

Om du har aktiverat molnsäkerhetskopiering kan du märka viss aktivitet mot Googles servrar (webbadresser som slutar på **googleapis.com**). Dessa anslutningar skickar dina krypterade valvfiler, inloggningskontroller och okrypterade metadata för säkerhetskopian, som enhetsnamn, antal och tidsstämplar, till **ditt eget** Google Drive-konto – samma konto du redan använder för foton eller Gmail. Vi ser aldrig, tar aldrig emot och sparar aldrig en kopia någonstans. Bara du har återställningsnyckeln som kan låsa upp den.

### 4. App Store och Play Store integritetsetiketter

Apple och Google kräver att utvecklare deklarerar vilka data deras app samlar in. Kontrollera Travel Document Vault-listningen i App Store eller Google Play. Vår deklaration: **ingen data insamlad**.

## Hur vi testar appens säkerhet

Vi nöjer oss inte med att säga att appen är säker. Vi kontrollerar det, med samma öppna verktyg och offentliga standarder som säkerhetsbranschen använder.

### Jämför appen med en offentlig standard

Du kan jämföra Travel Document Vault med [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), branschens checklista för hur en mobilapp bör lagra data, använda kryptering, låsas bakom Face ID eller en PIN-kod, och hantera länkar från andra appar. Vem som helst kan läsa standarden och jämföra den med hur appen faktiskt beter sig.

### Analys av källkoden

Verktyg för statisk analys, som [Semgrep](https://semgrep.dev/), kan flagga osäkra mönster, till exempel svag kryptering eller osäker datahantering. Detta beskriver en kontrollmetod, inte ett bevis på att varje version har klarat en skanning.

### Den färdiga appens beteende

Appen krypterar dokumentfiler på din enhet, och dess uppdateringskonfiguration kräver ett certifikat för kodsignering. Du kan kontrollera nätverksbeteendet med stegen ovan.

### Har du hittat ett problem? Berätta för oss

Om du upptäcker ett säkerhetsproblem, mejla [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Detaljerna kring vår process för att rapportera säkerhetsproblem finns publicerade på [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Det här är vår egen bedömning mot en offentlig standard, inte en oberoende granskning eller certifiering. Senast granskad i juli 2026.

## Varje behörighet förklarad

Android-appar deklarerar behörigheter i sitt manifest. Vissa efterfrågas av appen direkt, och vissa ärvs från bibliotek som appen är beroende av. Här är en transparent uppdelning av varje behörighet, grupperad efter syfte.

### Behörigheter som appen använder direkt

### Kamera

iOS och Android

**Varför vi frågar:** Så att du kan skanna ditt pass, visum eller dokumentsidor direkt från appen.

**Vad vi aldrig gör:** Foton lagras lokalt på din enhet. De överförs aldrig, skickas aldrig och skickas aldrig någonstans.

### Fotobibliotek / Foton / Lagring

iOS och Android

**Varför vi frågar:** Så att du kan importera ett befintligt foto av ett dokument. På Android använder appen systemets fotoväljare, så READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE och READ_MEDIA_IMAGES tas bort från det slutliga bygget. Krypterade säkerhetskopieringsfiler (.tdvault) exporteras via telefonens delningsmeny, som inte kräver lagringsbehörighet.

**Vad vi aldrig gör:** Appen läser bara den bild du väljer. Den skannar aldrig, indexerar aldrig eller bläddrar aldrig igenom ditt fotobibliotek eller filsystem.

### Face ID / Touch ID / Biometrisk upplåsning

iOS och Android

**Varför vi frågar:** Så att du kan låsa och låsa upp appen så bara du kan komma åt dina dokument. På Android 6–8 används USE_FINGERPRINT. På Android 9+ används USE_BIOMETRIC istället.

**Vad vi aldrig gör:** Dina biometriska data lämnar aldrig din enhet. Operativsystemet hanterar autentisering och returnerar bara ett pass/fail-resultat till appen.

### Aviseringar, Vibration, Boot slutfört, Wake Lock

Android

**Varför vi frågar:** För att skicka påminnelser om dokumentens utgångsdatum på din enhet. RECEIVE_BOOT_COMPLETED planerar om dina påminnelser efter en enhetsomstart. WAKE_LOCK stöder aviseringshantering. VIBRATE följer meddelandesleverans.

**Vad vi aldrig gör:** Vi skickar aldrig marknadsförings-, kampanj- eller tredjepartsmeddelanden. Påminnelser schemaläggs helt på din enhet.

### Internet, nätverksstatus, Wi-Fi-status

Android

**Varför dessa visas:** De behövs för nätverksberoende funktioner: **Sentry-kraschrapportering** (opt-in, inaktiverad som standard), **App Store- eller Google Play-fakturering** för Pro-uppgraderingen, **Pro-molnsäkerhetskopiering** (valfritt), som synkroniserar ditt krypterade valv till ditt eget iCloud eller Google Drive, och knappen **Sök efter uppdateringar** i Inställningar (körs när du trycker på den, eller vid öppning om du aktiverar det). ACCESS_NETWORK_STATE och ACCESS_WIFI_STATE låter dessa funktioner kontrollera om en anslutning är tillgänglig innan de försöker skicka.

**Vad vi inte gör:** Appen laddar inte upp dina dokument, skanningar, utgångsdatum, foton eller valvinnehåll till Travel Document Vault. Den fungerar helt offline för vanlig dokumentlagring och påminnelser.

### Behörigheter som ärvs från bibliotek (används inte av appen)

Android-appar innehåller bibliotek från tredje part för funktioner som köp i appen, kraschrapportering och aviseringar. Dessa bibliotek deklarerar behörigheter i sina egna manifest, som slås samman i den slutgiltiga appen. Behörigheterna nedan deklareras av beroenden, inte av vår kod. Appen anropar aldrig API:erna bakom dem.

### Spela in ljud

Ärvd, borttagen

**Varför det visas:** Denna behörighet deklareras av kamerabiblioteken i bygget. Travel Document Vault tar bort den från det slutliga Android-manifestet, eftersom appen tar stillbilder av dokument och aldrig spelar in ljud eller video.

**Hur du kan bekräfta:** Appen frågar aldrig dig om mikrofontillåtelse. När du kontrollerar enhetsens behörighetshanterare ser du att ljudinspelning inte har getts till Travel Document Vault.

### Systemvarnfönster

Ärvd

Deklarerad av Flutter-ramverket för utveckling och felsökningsöverlagringar. Denna behörighet används inte i appsens utgåva och påverkar inte din integritet.

### Detektera skärmbild

Ärvd

Deklarerad av ett ramverksberoende. Travel Document Vault aktiverar skydd mot skärmbilder och skärminspelning som standard på dokumentskärmar där det stöds. Du kan ändra detta i Inställningar.

### Behörigheter för badgeantal

Ärvd

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE och PROVIDER_INSERT_BADGE deklareras av meddelandebiblioteket för att visa olästa badgeantal på hemskärmsikonen på olika Android-tillverkare (Samsung, Huawei, Xiaomi, etc.). De påverkar bara numret som visas på appikonen.

### Fakturering, Kontrollera licens, Installera referent

Google Play

Deklarerad av Google Play Billing-biblioteket (för Pro-uppgraderingen) och biblioteket Play Install Referrer. Dessa är standardkrav för Google Play Store och ger ingen åtkomst till personuppgifter.

### Ladda ned utan aviseringar

Ärvd

Deklarerad av ett ramverksberoende. En uppdateringsnedladdning som startats i appen kan fortsätta när appen går till bakgrunden, och iCloud kan hantera filöverföringar via operativsystemet.

### Behörigheter som vi inte frågar om

Dessa är vanliga behörigheter som många appar frågar om. Vi frågar inte om dem, och de visas inte i vårt manifest.

**Plats** – ingen GPS, ingen geolokalisering, ingen spårning **Kontakter** – ingen tillgång till din adressbok **Bluetooth** – ingen lokalt nätverk eller enhetssökning **Kalender** – påminnelser hanteras på enheten, inte via din kalender

Har du fler frågor? Läs vår fullständiga [Integritetspolicy](https://traveldocumentvault.com/privacy-policy/) eller kontrollera [Frågor](https://traveldocumentvault.com/sv/faq/).
