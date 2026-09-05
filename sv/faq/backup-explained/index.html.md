# Säkerhetskopiering förklarad: lokala säkerhetskopior, Vault Export och molnsäkerhetskopia | Travel Document Vault

> De tre sätten din data skyddas på: automatiska lokala säkerhetskopior, export av valvet (.tdvault) och valfri krypterad molnsäkerhetskopia med Pro.

Source: https://traveldocumentvault.com/sv/faq/backup-explained/

---

Travel Document Vault ger dig tre skyddslager. Här är exakt vad var och en gör, vem den passar för och hur du återställer från den.

## Tre mekanismer, ett mål

Dina dokument finns på din enhet. De skickas aldrig till våra servrar. De tre säkerhetskopieringsmekanismerna fyller varsin funktion, och du kan använda alla tre samtidigt.

- **Automatiska lokala säkerhetskopior** - sker tyst i bakgrunden, ingen åtgärd krävs.
- **Vault Export (.tdvault)** - en portabel krypterad fil du sparar var du vill.
- **Molnsäkerhetskopia (Pro)** - en automatisk krypterad kopia i ditt eget iCloud eller Google Drive.

## På en snabb överblick

| Mekanism | Nivå | Automatisk? | Var den finns | Så återställer du |
|---|---|---|---|---|
| **Automatiska lokala säkerhetskopior** | Gratis | Ja, med några minuters mellanrum | På din enhet | Inställningar, Återställ lokal säkerhetskopia |
| **Vault Export (.tdvault)** | Gratis | Nej, manuell | Var du än sparar den: Filer, iCloud Drive, Google Drive, e-post | Inställningar, Importera valv |
| **Molnsäkerhetskopia** | Pro | Ja, automatisk | Ditt eget iCloud (iOS) eller Google Drive (Android) | Inställningar, Molnsäkerhetskopia, Återställ från säkerhetskopia |

## Automatiska lokala säkerhetskopior

Medan appen är öppen och du gör ändringar tar den tyst en ögonblicksbild av ditt valv med några minuters mellanrum. Du behöver inte göra något. Appen sparar de 10 senaste ögonblicksbilderna och tar bort äldre för att spara utrymme.

I Inställningar ser du en rad som *Senaste säkerhetskopia: för 2 timmar sedan, 12 dokument*. Den visar hur gammal den senaste ögonblicksbilden är och hur många dokument den innehåller. Den finns där för att ge dig trygghet i att en återställningsbar kopia alltid finns nära till hands.

**Så återställer du:** Inställningar, sedan Återställ lokal säkerhetskopia. Välj en ögonblicksbild från listan och bekräfta. Återställningen ersätter din nuvarande data med innehållet i ögonblicksbilden.

Dessa lokala ögonblicksbilder stannar på din enhet. En systemsäkerhetskopia (iCloud Backup, Google Backup) installerar om appen men kan inte återställa dem på en ny telefon, eftersom krypteringsnyckeln aldrig lämnar din ursprungliga enhet. För att flytta ditt valv använder du molnsäkerhetskopia (Pro) eller den gratis Vault Export.

## Vault Export (.tdvault) – gratis för alla

Vault Export skapar en enda krypterad, lösenordsskyddad fil som innehåller varje profil, dokument och bilaga i ditt valv. Du väljer var du vill spara den: Filer-appen, iCloud Drive, Google Drive, eller dela den via AirDrop eller e-post.

Filen krypteras på din enhet innan den lämnar appen. Bara lösenordet du anger vid export kan låsa upp den.

**Så exporterar du:** Inställningar, Exportera valv, följ sedan anvisningarna och välj en destination.

**Så återställer du:** Inställningar, Importera valv, välj din .tdvault-fil och ange lösenordet. Import fungerar på alla enheter, även plattformsövergripande (iOS till Android eller tvärtom). Allt bevaras exakt: alla dokumentnamn, datum, påminnelser om utgångsdatum, färger, bilagor och anteckningar behålls precis som de var.

Detta är gratis för alla användare. Ingen Pro-uppgradering krävs.

## Molnsäkerhetskopia (Pro)

Molnsäkerhetskopia är Pro-alternativet. När den är aktiverad håller appen automatiskt en kontinuerligt uppdaterad kopia av ditt valv i ditt eget iCloud-konto (iOS) eller ditt eget Google Drive (Android). Vi ser aldrig denna data. Apple och Google ser bara chiffertext.

Valvet krypteras ände-till-ände på din enhet med AES-256-GCM innan uppladdning. Nyckeln härleds från din återställningskod, en 24-teckens lösenfras som appen genererar när du aktiverar molnsäkerhetskopia. Förvara din återställningskod på en säker plats. Om du förlorar den blir säkerhetskopian omöjlig att återställa.

**Så återställer du:** På en ny enhet inloggad på samma Apple ID eller Google-konto öppnar du appen, går till Inställningar, Molnsäkerhetskopia, Återställ från säkerhetskopia, och anger din återställningskod.

Molnsäkerhetskopia är det alternativ som kräver minst av dig: det fungerar automatiskt när det är aktiverat, och återställning på en ny telefon tar en knapptryckning plus din återställningskod.

## Vilken bör jag använda?

Det korta svaret: använd alla tre.

Automatiska lokala säkerhetskopior skyddar dig direkt mot oavsiktliga raderingar eller appproblem, utan att du behöver tänka på det. De är alltid på.

Vault Export är rätt drag innan ett enhetsbyte, en stor appuppdatering, eller när du vill ha en portabel kopia sparad någonstans oberoende av din telefon. Gör det minst en gång och förvara filen på en säker plats.

Molnsäkerhetskopia (Pro) är rätt val om du vill ha automatiskt skydd utanför enheten utan att hantera filer manuellt. Den är särskilt värdefull när du byter till en ny telefon: installera appen, ange din återställningskod, och ditt valv är återställt på några sekunder.

Inget enskilt lager är ett skäl att hoppa över de andra. Molnkonton kan gå förlorade, återställningskoder kan glömmas bort, och telefoner kan bli stulna innan en lokal säkerhetskopia hinner köras. Kombinationen av alla tre ger dig det starkaste skyddet.

### Relaterade guider

- [Så exporterar och importerar du ditt valv – steg-för-steg-guide](https://traveldocumentvault.com/sv/faq/export-import/)
- [Vad är min återställningskod? – fullständig guide till hur du förvarar den säkert](https://traveldocumentvault.com/sv/faq/recovery-code/)
- [Molnsäkerhetskopia – så fungerar ände-till-ände-kryptering](https://traveldocumentvault.com/sv/cloud-backup/)

## Skaffa Travel Document Vault

Gratis nedladdning. Vault Export och lokala säkerhetskopior ingår för alla. Pro lägger till molnsäkerhetskopia, obegränsat antal profiler, kombinerad PDF-export och mer. Engångsköp, ingen prenumeration.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Hämta på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
