# Krypterad molnsäkerhetskopia | Din molnlagring. Din nyckel. | Travel Document Vault

> Ände-till-ände-krypterad säkerhetskopia i ditt eget iCloud eller Google Drive. Du håller återställningskoden. AES-256-GCM + PBKDF2 600k. Vi kommer aldrig åt den. Åtkomst från alla enheter. Offline-först.

Source: https://traveldocumentvault.com/sv/cloud-backup/

---

## Så fungerar krypterad säkerhetskopia

Äkta integritet betyder att du och bara du kan läsa dina data.

1

### Kryptering på enheten

Ditt valv krypteras på din enhet med AES-256-GCM. Krypteringsnyckeln härledds från din återställningskod med PBKDF2 och 600 000 iterationer.

AES-256-GCM är stark, modern kryptering, och återställningskoden lämnar aldrig dina händer. Du bör fortfarande skydda din telefon med ett starkt lösenord och App Lock. Kryptering skyddar filen; ditt lösenord skyddar telefonen.

2

### Ladda upp till din molnlagring

Den krypterade säkerhetskopian går till ditt personliga iCloud- eller Google Drive-konto, inte till våra servrar - det är din molnlagring och ditt konto.

Du kan se och hantera dina säkerhetskopior direkt i ditt iCloud eller Google Drive. Du har full kontroll.

3

### Bara du håller nyckeln

Din återställningskod är nyckeln för att dekryptera dina säkerhetskopior, och den lämnar aldrig din enhet - aldrig skickas till oss, Apple eller Google.

Spara din återställningskod på en säker plats, för utan den kan inte ens vi återställa dina data - detta är avsiktligt, inte en bugg.

4

### Återställ på vilken enhet som helst

Byta till en ny telefon? Återställ din säkerhetskopia med din återställningskod. Samma för nya iPad, Mac eller andra enheter.

Ladda ned appen, återställ från säkerhetskopia och ange återställningskoden för att få ditt hela valv tillbaka, krypterat och klart.

## Hur det skyddar dina data

Flera säkerhetslager står mellan en oavsiktlig tryckning och förlorad data.

**Obegränsad lagring av borttagna objekt.** Borttagna dokument stannar i Nyligen borttagna så länge molnsäkerhetskopia är på. Ingen automatisk 30-dagars rensning.

**Permanent borttagning kräver bekräftelse.** En separat prompt varnar dig om att dokumentet också kommer att tas bort från din molnsäkerhetskopia. Ingen oavsiktlig borttagning.

**Respitperiod för säkerhetskopieringshistorik.** Även efter permanent borttagning behåller säkerhetskopian dina dokumentdata under flera fler synkroniseringscykler som ett skyddsnät.

**Välj ditt historikfönster.** Bestäm hur långt tillbaka din dagliga säkerhetskopieringshistorik sträcker sig: 7, 30, 90 eller 180 dagar. Återställ ditt valv till en tidigare dag inom det fönstret. Äldre ögonblicksbilder rensas automatiskt.

**Hoppa över tom välvsynkronisering.** Appen synkroniserar aldrig ett tomt valv till molnet. En bulkborttagning kan inte rensa din befintliga säkerhetskopia.

**Säkerhetsprompt för ny enhet.** Aktivering av molnsäkerhetskopia på en ny enhet upptäcker befintliga säkerhetskopior och frågar om du vill återställa eller börja på nytt. Ingen tyst överskrivning.

**Biometriskt öppnad borttagning.** Att ta bort molnsäkerhetskopian kräver Face ID, Touch ID eller din PIN-kod. Ett enda oavsiktligt tryck kan inte radera säkerhetskopian.

**En-tap återställning från inställningar.** Återställ säkerhetskopian när som helst från inställningsskärmen för molnsäkerhetskopia. Ingen anledning att ominstallera eller gå igenom onboarding-flödet.

**Återställ och synka om.** Om dina lokala data och molnsäkerhetskopia någonsin blir osynkroniserad tvingar en knapp en ren omuppladdning av hela välvet så att allt förblir konsistent.

### ⚠ Din återställningskod är kritisk

Din återställningskod är den enda nyckeln för att dekryptera säkerhetskopian. Vi har en noll-kunskap-design, vilket betyder att vi inte kan återställa den åt dig. Om du förlorar den blir säkerhetskopian oåterkallig.

Spara din återställningskod på en säker plats innan du förlitar dig på molnsäkerhetskopia - antingen en lösenordshanterare, en utskriven kopia på en säker plats, eller båda - och verifiera att du kan läsa den igen innan du lagrar den som din enda kopia.

### Enhetskrav

Molnsäkerhetskopia på iPhone och iPad använder Apple iCloud. Det fungerar på alla enheter som loggar in med ett Apple ID.

Molnsäkerhetskopia på Android använder Google Drive. Det kräver Google Play Services, som är installerat som standard på Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme och de flesta andra stora Android-märken.

Enheter utan Google Play Services (som Huawei-enheter som släpptes efter 2019, Amazon Fire-surfplattor och AOSP-bara varianter) kan inte använda molnsäkerhetskopia. Resten av appen, inklusive lokal lagring och enhetskryptering, fortsätter att fungera på alla enheter.

### Viktigt: hålla alltid oberoende kopior

Molnsäkerhetskopia är ett säkerhetslager, men inget system är perfekt. Molnkonton kan gå förlorade, återställningskoder kan glömmas, lagringstjänster från tredje part kan ha avbrott och oväntade synkroniserings- eller dataproblem kan inträffa. Vi tillhandahåller molnsäkerhetskopia som en bekvämlighet, inte en garanti.

För kritiska dokument ska du alltid behålla en oberoende kopia, till exempel en utskriven papperskopia på en säker plats, en separat krypterad välvexport sparad i annan lagring, eller original som lagras fysiskt, och verifiera att dina dokument kan återställas innan du behöver dem.

Du är ansvarig för att upprätthålla dina egna dokumentsäkerhetskopior och för att hålla återställningskoden säker. Appen, Apple, Google och utvecklaren är inte ansvariga för dataförlust som uppstår från förlorade återställningskoder, molnkontoproblem eller beroende av molnsäkerhetskopia som enda kopia.

## Säkerhet du kan lita på

#### AES-256-GCM

Industribestandard för autentiserad kryptering. Använd av NIST, NSA och globala banksystem.

#### PBKDF2 600k iterationer

Nyckelabletering som är beräkningsintensiv. Brute-force-attacker blir omöjliga.

#### HKDF-nyckelexpansion

Per-enhet-krypteringsnyckel. Varje återställning skapar en unik nyckel. Att kompromissa en enhet komprometterar inte andra.

#### Noll-kunskap-design

Vi har ingen åtkomst till dina data. Inte krypterat på våra servrar. Inte lagrat på våra servrar. Äkta noll-kunskap.

#### Vad Apple ser

Krypterade blobar i ditt iCloud. Apple lagrar dem. Apple kan inte läsa dem. Samma för Google Drive.

#### Förlorad återställningskod

Om du förlorar din återställningskod kan dina säkerhetskopior inte dekrypteras. Ingen bakdörr. Ingen huvudnyckel. Designat på så sätt.

## Dataskydd och efterlevnad

**GDPR-överensstämmelse:** Vi behandlar inte personliga data. Vi har ingen åtkomst till dina data. Inga data, ingen behandling, ingen efterlevnadsbörda.

**Ingen escrow av säkerhetskopior:** Till skillnad från vissa leverantörer behåller vi inte kopior av din återställningskod, privata nyckel eller krypteringsnyckel. Säkerhetskopior är 100% ditt ansvar.

**Inaktiverad som standard:** Molnsäkerhetskopia är inaktiverad som standard. Du aktiverar det uttryckligt. Du bestämmer.

Läs mer i vår [kompletta integritetspolicy](https://traveldocumentvault.com/privacy-policy/).

## Upplev äkta integritet

Ladda ned gratis. Aktivera säkerhetskopia när du är redo. Inget konto. Bara du.

![Ladda ned på App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Hämta på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
