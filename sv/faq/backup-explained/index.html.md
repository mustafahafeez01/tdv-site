# Säkerhetskopiering förklarad: lokala säkerhetskopior, Vault Export och molnsäkerhetskopia | Travel Document Vault

> De tre sätten din data skyddas på: automatiska lokala säkerhetskopior, export av valvet (.tdvault) och valfri krypterad molnsäkerhetskopia med Pro.

Source: https://traveldocumentvault.com/sv/faq/backup-explained/

---

Travel Document Vault ger dig tre skyddslager. Här är exakt vad var och en gör, vem den passar för och hur du återställer från den.

## Tre mekanismer, ett mål

Travel Document Vault erbjuder tre skyddslager: (1) Automatiska lokala säkerhetskopior, som skapas med några minuters mellanrum på din enhet utan kostnad. (2) Vault Export, en gratis manuell krypterad säkerhetskopieringsfil (.tdvault) som du sparar var du vill. (3) Molnsäkerhetskopia, ett Pro-alternativ som håller en ände-till-ände-krypterad kopia i ditt eget iCloud eller Google Drive.

- **Automatiska lokala säkerhetskopior** - sker tyst i bakgrunden, ingen åtgärd krävs.
- **Vault Export (.tdvault)** - en portabel krypterad fil du sparar var du vill.
- **Molnsäkerhetskopia (Pro)** - en automatisk krypterad kopia i ditt eget iCloud eller Google Drive.

## På en snabb överblick

| Mekanism | Nivå | Automatisk? | Var den finns | Så återställer du |
|---|---|---|---|---|
| **Automatiska lokala säkerhetskopior** | Gratis | Ja, med några minuters mellanrum | På din enhet | Inställningar, Återställ lokal säkerhetskopia |
| **Vault Export (.tdvault)** | Gratis | Nej, manuell | Var du än sparar den: Filer, iCloud Drive, Google Drive, e-post | Inställningar, Importera säkerhetskopia |
| **Molnsäkerhetskopia** | Pro | Ja, automatisk | Ditt eget iCloud (iOS) eller Google Drive (Android) | Inställningar, Molnsäkerhetskopia, Återställ från säkerhetskopia |

## Automatiska lokala säkerhetskopior

Medan appen är öppen och du gör ändringar tar den tyst en ögonblicksbild av ditt valv med några minuters mellanrum. Du behöver inte göra något. Appen sparar några av de senaste ögonblicksbilderna och tar bort äldre för att spara utrymme. Vault Export skapar en portabel krypterad fil som du kan spara utanför enheten.

I Inställningar ser du en rad som *Senaste säkerhetskopia: för 2 timmar sedan, 12 dokument*. Den visar hur gammal den senaste ögonblicksbilden är och hur många dokument den innehåller. Den sammanfattar den senaste lokala ögonblicksbilden.

**Så återställer du:** Inställningar, sedan Återställ lokal säkerhetskopia. Välj en ögonblicksbild från listan och bekräfta. Återställningen ersätter din nuvarande data med innehållet i ögonblicksbilden.

Dessa lokala ögonblicksbilder stannar på din enhet. En systemsäkerhetskopia (iCloud Backup, Google Backup) installerar om appen men kan inte återställa dem på en ny telefon, eftersom vanliga telefonsäkerhetskopior inte överför den enhetsbundna krypteringsnyckeln. Vault Export innehåller en lösenordskrypterad kopia av den nyckeln. För att flytta ditt valv använder du molnsäkerhetskopia (Pro) eller den gratis Vault Export.

## Vault Export (.tdvault) – gratis för alla

Vault Export samlar valvposter som stöds och tillgängliga bilagor i en krypterad, lösenordsskyddad fil. Varje export har en storleksgräns. Du väljer var du vill spara den: Filer-appen, iCloud Drive, Google Drive, eller dela den via AirDrop eller e-post.

Filen krypteras på din enhet innan den lämnar appen. Bara lösenordet du anger vid export kan låsa upp den.

**Så exporterar du:** Inställningar, Exportera valv, följ sedan anvisningarna och välj en destination.

**Så återställer du:** Inställningar, Importera säkerhetskopia, välj din .tdvault-fil, bekräfta och ange lösenordet. Import ersätter allt som redan finns på telefonen. Import fungerar på enheter som stöds, även mellan plattformar (iOS till Android eller tvärtom). Exporter bevarar valvfält som stöds och utvalda inställningar. Saknade bilagor eller oläsbara anteckningar kan utelämnas. Kontrollera dina importerade dokument och påminnelser. Applås och andra enhetsinställningar förblir lokala.

Detta är gratis för alla användare. Inget Pro-köp krävs.

## Molnsäkerhetskopia (Pro)

Molnsäkerhetskopia är en Pro-funktion. Aktivera den för att hålla en automatisk kopia i ditt eget iCloud (iOS) eller Google Drive (Android). Appen uppdaterar den medan den är öppen och ansluten. Vi tar inte emot den. Dokumentinnehållet är krypterat. Säkerhetskopians metadata, som enhetsnamn, antal och tidsstämplar, är inte krypterade.

Dokumentinnehållet krypteras ände-till-ände på din enhet med AES-256-GCM före uppladdning. Krypteringsnycklarna för molnet låses upp med din återställningskod, en 24-teckens lösenfras som appen genererar när du ställer in din PIN. Förvara din återställningskod på en säker plats. Om du förlorar alla kopior av koden och tillgången till alla enheter som fortfarande kan låsa upp valvet kan vi inte återställa den krypterade säkerhetskopian.

**Så återställer du:** Använd en enhet som stöds på samma plattform och samma Apple ID eller Google-konto. Med säkerhetskopiering avstängd öppnar du Inställningar, Molnsäkerhetskopia. Välj Återställ från säkerhetskopia, välj din säkerhetskopia, ange din återställningskod och bekräfta. Återställningen ersätter det lokala valvets innehåll.

Molnsäkerhetskopia körs automatiskt medan appen är öppen och ansluten. Återställ via Inställningar med din återställningskod, samma molnkonto och en enhet som stöds på samma plattform.

## Vilken bör jag använda?

Det korta svaret: använd alla tre.

Automatiska lokala säkerhetskopior kan hjälpa dig att återställa senaste valvposter när ögonblicksbilder finns tillgängliga. De körs medan appen är öppen och ersätter inte en oberoende dokumentsäkerhetskopia.

Vault Export är rätt drag innan ett enhetsbyte, en stor appuppdatering, eller när du vill ha en portabel kopia sparad någonstans oberoende av din telefon. Gör det minst en gång och förvara filen på en säker plats.

Molnsäkerhetskopia (Pro) är rätt val om du vill ha automatiskt skydd utanför enheten utan att hantera filer manuellt. När du byter till en telefon som stöds på samma plattform använder du samma molnkonto, väljer din säkerhetskopia i återställningsflödet, anger din återställningskod och bekräftar. Återställningen ersätter det lokala valvets innehåll.

Inget enskilt lager är ett skäl att hoppa över de andra. Molnkonton kan gå förlorade, återställningskoder kan glömmas bort, och telefoner kan bli stulna innan en lokal säkerhetskopia hinner köras. Kombinationen av alla tre ger dig det starkaste skyddet.

### Relaterade guider

- [Så exporterar och importerar du ditt valv – steg-för-steg-guide](https://traveldocumentvault.com/sv/faq/export-import/)
- [Vad är min återställningskod? – fullständig guide till hur du förvarar den säkert](https://traveldocumentvault.com/sv/faq/recovery-code/)
- [Molnsäkerhetskopia – så fungerar ände-till-ände-kryptering](https://traveldocumentvault.com/sv/cloud-backup/)

## Skaffa Travel Document Vault

Gratis nedladdning. Vault Export och lokala säkerhetskopior ingår för alla. Pro lägger till molnsäkerhetskopia, obegränsat antal profiler, kombinerad PDF-export och mer. Engångsköp, ingen prenumeration.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Hämta på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
