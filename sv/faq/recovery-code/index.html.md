# Vad är min återställningskod? | Travel Document Vault

> Din återställningskod är huvudnyckeln till dina krypterade molnsäkerhetskopior. Läs om vad den är, varför du behöver den, vad som händer om du förlorar den, och hur du förvarar den säkert.

Source: https://traveldocumentvault.com/sv/faq/recovery-code/

---

Din återställningskod är en 24-teckens lösenfras som krypterar dina molnsäkerhetskopior. Om du förlorar den blir de säkerhetskopiorna omöjliga att återställa. Vi sparar den inte och kan inte återställa den, så förvara den på en säker plats.

## Så fungerar det

### Vad den är

Din återställningskod är en 24-teckens lösenfras som skapas när du aktiverar molnsäkerhetskopia. Den ser ut så här:

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

Koden härleds matematiskt från dina säkerhetskopieringsinställningar och är den enda nyckel som kan dekryptera ditt krypterade valv i molnet. Vi skapar den en gång och visar den för dig en gång. Efter det ligger ansvaret för att hålla den säker hos dig.

### Varför du behöver den

När du aktiverar molnsäkerhetskopia krypteras hela ditt valv på din enhet med AES-256-GCM innan det någonsin lämnar din telefon. Krypteringsnyckeln härleds från din återställningskod. Utan återställningskoden är säkerhetskopian kryptografiskt oåtkomlig, även för oss.

Det är en integritetsgaranti. Vi kan bokstavligen inte läsa dina säkerhetskopior, dekryptera dem på begäran, eller återställa dem åt dig. Om din återställningskod försvinner är den säkerhetskopian borta för gott. Det låter hårt, men det är precis vad du vill ha: din integritet är inte bara ett löfte vi ger, det är ett tekniskt faktum vi inte kan bryta mot.

### Om du förlorar den

Om du glömmer din återställningskod kan din befintliga molnsäkerhetskopia inte återställas. Du har två alternativ:

- **Återställ från din telefon:** Om koden fortfarande finns sparad i appen (kontrollera Inställningar - Molnsäkerhetskopia), kopiera den till en säker plats och spara den.
- **Skapa en ny:** Stäng av molnsäkerhetskopia och slå på den igen. Det skapar en ny återställningskod och raderar den befintliga säkerhetskopian. Du börjar om från början.

### Var du bör förvara den

Din återställningskod är lika känslig som ditt huvudlösenord. Förvara den på ett av dessa sätt:

- **Lösenordshanterare:** Bitwarden, 1Password, Apple Nyckelring, eller liknande. Det är det mest bekväma alternativet.
- **Fysisk kopia:** Skriv ner den på papper och förvara i ett kassaskåp, bankfack, eller på en säker plats hemma.
- **Offline-dokument:** Spara på en krypterad extern hårddisk eller USB-sticka (aldrig molnsynkad).
- **Undvik:** E-post, Anteckningar-appen, okrypterade molntjänster, eller skärmbilder.

### Att skapa en ny kod

Om du tror att din återställningskod har komprometterats, stäng av molnsäkerhetskopia och slå på den igen. Appen skapar en ny återställningskod. Din gamla krypterade säkerhetskopia raderas. Detta är medvetet: rotation av återställningskoden är avsiktligt sällsynt och medför förlust, så att du inte gör det lättvindigt.

**Ansvarsfriskrivning:** Din återställningskod är ditt eget ansvar. Travel Document Vault kan inte återställa, nollställa eller skapa den på nytt om den går förlorad. Förvara den säkert. Förlita dig inte på den här appen som ditt enda säkerhetskopieringssystem för viktiga dokument.

## Redo att skydda ditt valv?

Ladda ner Travel Document Vault och aktivera molnsäkerhetskopia för att hålla dina dokument säkra.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault&referrer=utm_source%3Dtraveldocumentvault.com%26utm_medium%3Dweb%26utm_content%3Dfaq)
