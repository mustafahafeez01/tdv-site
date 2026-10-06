# Krypterad molnsäkerhetskopia | Din molnlagring. Din nyckel. | Travel Document Vault

> Krypterad backup (Pro) till ditt eget iCloud eller Google Drive. Återställ med din återställningskod, som vi inte har. Ditt sparade valv fungerar offline.

Source: https://traveldocumentvault.com/sv/cloud-backup/

---

## Så fungerar krypterad säkerhetskopia

Dina dokument krypteras före uppladdning till molnet.

1

### Kryptering på enheten

Dina dokument krypteras på din enhet med AES-256-GCM. PBKDF2 med 600 000 iterationer härleder nyckeln som används för att låsa upp valvets slumpmässigt genererade huvudnyckel.

AES-256-GCM krypterar dina dokument. Appen laddar inte upp din återställningskod till oss, Apple eller Google. Du bör fortfarande skydda din telefon med en stark lösenkod och appens PIN-lås. Kryptering skyddar filen; ditt lösenord skyddar telefonen.

2

### Ladda upp till din molnlagring

Den krypterade säkerhetskopian går till ditt personliga iCloud- eller Google Drive-konto, inte till våra servrar – det är din molnlagring och ditt konto.

På iPhone och iPad kan du se dina säkerhetskopieringsfiler i iCloud Drive. På Android ligger de i en dold appmapp i ditt eget Google Drive. Du har full kontroll.

3

### Bara du håller nyckeln

Din återställningskod låser upp dina krypteringsnycklar för molnet. Appen laddar inte upp koden till oss, Apple eller Google; håll alla kopior du gör privata.

Spara din återställningskod på en säker plats, för utan den kan inte ens vi återställa dina data – detta är avsiktligt, inte en bugg.

4

### Återställ på en ny enhet

Byta till en ny telefon? Återställ din säkerhetskopia med din återställningskod. Detsamma gäller en ny iPad eller en annan enhet som stöds på samma plattform och använder samma molnkonto.

Öppna Inställningar, Molnsäkerhetskopia på den nya enheten och välj Återställ från säkerhetskopia. Välj säkerhetskopian, ange din återställningskod och bekräfta. Återställningen ersätter det lokala valvet.

## Hur det skyddar dina data

Flera säkerhetslager står mellan en oavsiktlig tryckning och förlorad data.

**Obegränsad lagring av borttagna objekt.** Borttagna dokument stannar i Nyligen borttagna så länge molnsäkerhetskopia är på. Ingen automatisk 30-dagars rensning.

**Permanent borttagning kräver bekräftelse.** En separat prompt varnar dig om att dokumentet också kommer att tas bort från din molnsäkerhetskopia.

****

**Välj ditt historikfönster.** Bestäm hur långt tillbaka din dagliga säkerhetskopieringshistorik sträcker sig: 7, 30, 90 eller 180 dagar. Återställ ditt valv till en tidigare dag inom det fönstret. Äldre ögonblicksbilder rensas automatiskt.

**Skydd vid säkerhetskopiering av tomt valv.** Ett skydd hoppar över vissa försök att säkerhetskopiera ett tomt valv; första säkerhetskopieringen och återställnings- och synkroniseringsflöden har undantag. Dokument som raderas i grupp stannar i Nyligen raderad medan molnsäkerhetskopiering är på, tills du raderar dem permanent.

**Säkerhetsprompt för ny enhet.** Aktivering av molnsäkerhetskopia på en ny enhet upptäcker befintliga säkerhetskopior och frågar om du vill återställa eller börja på nytt. Ingen tyst överskrivning.

**Bekräftad radering av molnsäkerhetskopia.** Att ta bort molnsäkerhetskopian kräver Face ID, Touch ID eller din PIN-kod om motsvarande applås är aktiverat, följt av bekräftelse. Ett enda oavsiktligt tryck kan inte radera säkerhetskopian.

**Återställning från Inställningar.** På en enhet som stöds på samma plattform och använder samma molnkonto öppnar du Molnsäkerhetskopia medan säkerhetskopiering är avstängd, väljer din säkerhetskopia, anger din återställningskod och bekräftar återställningen. Detta ersätter det lokala valvets innehåll. Ingen anledning att ominstallera eller gå igenom onboarding-flödet.

**Återställ och synkronisera om.** Om dina lokala data och molnsäkerhetskopian hamnar ur synk använder du Återställ och synkronisera om för att ladda upp en ny kopia av valvet.

### ⚠ Din återställningskod är kritisk

Din återställningskod låser upp de krypteringsnycklar för molnet som behövs för att återställa säkerhetskopian. Vi kan inte återställa koden åt dig. Om du förlorar alla kopior och tillgången till alla enheter som fortfarande kan låsa upp valvet kan vi inte återställa den krypterade säkerhetskopian.

Spara din återställningskod på en säker plats innan du förlitar dig på molnsäkerhetskopia – antingen en lösenordshanterare, en utskriven kopia på en säker plats, eller båda – och verifiera att du kan läsa den igen innan du lagrar den som din enda kopia.

### Enhetskrav

Molnsäkerhetskopia på iPhone och iPad använder Apple iCloud. Det kräver en iPhone eller iPad som stöds, med iCloud Drive tillgängligt och aktiverat för appen.

Molnsäkerhetskopia på Android använder Google Drive. Det kräver Google Play Services, som är installerat som standard på Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme och de flesta andra stora Android-märken.

Enheter utan Google Play Services (som Huawei-enheter som släpptes efter 2019, Amazon Fire-surfplattor och AOSP-bara varianter) kan inte använda molnsäkerhetskopia. Resten av appen, inklusive lokal lagring och enhetskryptering, fortsätter att fungera på enheter som stöds, men automatisk datumavläsning kräver också Google Play Services.

### Viktigt: hålla alltid oberoende kopior

Molnsäkerhetskopia är ett säkerhetslager, men inget system är perfekt. Molnkonton kan gå förlorade, återställningskoder kan glömmas, lagringstjänster från tredje part kan ha avbrott och oväntade synkroniserings- eller dataproblem kan inträffa. Vi tillhandahåller molnsäkerhetskopia som en bekvämlighet, inte en garanti.

För kritiska dokument ska du alltid behålla en oberoende kopia, till exempel en utskriven papperskopia på en säker plats, en separat krypterad välvexport sparad i annan lagring, eller original som lagras fysiskt, och verifiera att dina dokument kan återställas innan du behöver dem.

Du är ansvarig för att upprätthålla dina egna dokumentsäkerhetskopior och för att hålla återställningskoden säker. Appen, Apple, Google och utvecklaren är inte ansvariga för dataförlust som uppstår från förlorade återställningskoder, molnkontoproblem eller beroende av molnsäkerhetskopia som enda kopia.

## Kryptering och återställning

#### AES-256-GCM

Autentiserad kryptering av dokumentinnehåll.

#### PBKDF2 600k iterationer

Nyckelhärledning som kräver mycket beräkningsarbete. Det ökar kostnaden för att gissa återställningskoden.

#### HKDF-nyckelexpansion

Separata nycklar för varje säkerhetskopieringsfil, och en återställning krypterar om dina dokument med den nya enhetens egen nyckel. En komprometterad behörig enhet eller återställningskod kan exponera det delade molnvalvet.

#### Noll-kunskap-design

Din krypterade säkerhetskopia stannar i ditt eget molnkonto. Vi tar inte emot den och har inte de nycklar som behövs för att läsa dokumentinnehållet.

#### Vad Apple ser

Dokumentinnehållet är krypterat i ditt iCloud eller Google Drive. Säkerhetskopians metadata, som enhetsnamn, antal och tidsstämplar, är inte krypterade.

#### Förlorad återställningskod

Om du förlorar alla kopior av din återställningskod och tillgången till alla enheter som fortfarande kan låsa upp valvet kan vi inte dekryptera dina säkerhetskopior. Vi har inte dina krypteringsnycklar för molnet.

## Dataskydd och efterlevnad

**Valfri kraschrapportering:** Kraschrapportering är avstängd som standard. Ditt dokumentinnehåll laddas inte upp till våra servrar.

**Ingen escrow av säkerhetskopior:** Vi behåller inte kopior av din återställningskod eller dina krypteringsnycklar. Förvara koden på en säker plats.

**Inaktiverad som standard:** Molnsäkerhetskopiering är avstängd som standard. Aktivera den i Inställningar när du vill använda den.

Läs mer i vår [kompletta integritetspolicy](https://traveldocumentvault.com/privacy-policy/).

## Upplev äkta integritet

Ladda ned gratis. Aktivera säkerhetskopia med Pro när du är redo. Inget konto. Bara du.

![Ladda ned på App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Hämta på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
