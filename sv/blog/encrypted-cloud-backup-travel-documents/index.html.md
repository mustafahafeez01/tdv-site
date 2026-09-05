# Krypterad molnsäkerhetskopiering för resehandlingar: Vem som har nyckeln

> Vad krypterad säkerhetskopiering innebär för skannade pass, varför ingen kan återställa din återställningskod, och hur du sparar en kopia som fungerar.

Source: https://traveldocumentvault.com/sv/blog/encrypted-cloud-backup-travel-documents/

---

![En förälder och ett barn sitter tillsammans i en soffa i skymningen och tittar på en telefon och en liten guldnyckel som ligger på bordet bredvid ett pass, medan ett moln ovanför bara håller kaotiska tecken bakom ett hänglås](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Viktiga punkter

- **"Krypterad säkerhetskopiering" betyder bara något när du vet vem som har nyckeln.** Om företaget kan läsa dina handlingar skyddar krypteringen dem från främlingar, inte från företaget.
- En säkerhetskopia krypterad på din telefon före uppladdning når molnet som oläsbar data. Lagringsleverantören har krypterad text, inte ditt pass.
- **Inget konto betyder ingen lösenordsåterställning.** Förlorar du återställningskoden kan säkerhetskopian inte öppnas av någon, oss inräknat. Det är den medvetna avvägningen.
- Skriv ner koden innan du förlitar dig på säkerhetskopian, förvara den borta från telefonen, och läs upp den en gång för att kontrollera att den går att läsa.
- En systembaserad enhetssäkerhetskopia installerar om appen men kan inte få tillbaka dina handlingar, eftersom krypteringsnyckeln aldrig lämnade den gamla telefonen.

Du har skannat in fyra pass, två visum och barnens födelsebevis i en app som sparar allt på din telefon. Bra. Sedan dyker den självklara oron upp: vad händer när telefonen hamnar i havet eller blir stulen från ett kafébord i Lissabon.

Svaret är en säkerhetskopia. Det besvärliga är att nästan alla appar använder uttrycket "krypterad säkerhetskopia", och nästan ingen av dem menar samma sak med det. Den här artikeln förklarar vad orden faktiskt betyder och vad du går med på när ett företag verkligen inte kan läsa dina uppgifter. Den avslutas med en kort rutin för veckan före en resa, så att en förlorad telefon förblir ett besvär i stället för en katastrof.

## Vad "krypterad säkerhetskopiering" egentligen betyder

Kryptering blandar ihop en fil så att endast en matchande nyckel kan göra den läsbar igen. Så långt är det standard. Det som avgör om det faktiskt skyddar dig är var blandningen sker och vem som till slut har nyckeln.

Två olika upplägg säljs båda som krypterad säkerhetskopiering, och de fungerar helt olika.

Det ena skickar filen till företagets server över en krypterad anslutning och lagrar den sedan krypterad i vila. Båda dessa påståenden är sanna, och båda låter betryggande. Men företaget har fortfarande nyckeln, så det kan dekryptera dina handlingar närhelst det behövs: för att köra en funktion, för att svara på en juridisk begäran, eller för att någon inuti företaget gjorde ett misstag. Din passkopia går att läsa i andra änden.

Det andra upplägget blandar ihop filen på din telefon innan den skickas någonstans, med en nyckel som härleds från något bara du har. Det som når lagringen är ett block av brus, och ingen i andra änden kan läsa det, eftersom ingen i andra änden har nyckeln. Det här kallas oftast end-to-end-krypterat, eller "zero-knowledge".

Så frågan värd att ställa till vilken app som helst är kort: **vem har nyckeln?** Allt annat i marknadsföringen följer av svaret.

## Återställningskoden, och varför ingen kan återställa den

Här är den del de flesta artiklar hoppar över, och den förtjänar att sägas rakt ut: Travel Document Vault har inga konton. Du har aldrig gett oss en e-postadress, vi har aldrig satt upp ett lösenord åt dig, och det finns ingen uppgift om dig på någon server vi driver. När du slår på [molnsäkerhetskopiering](https://traveldocumentvault.com/sv/cloud-backup/) genererar appen en 24-tecken lång återställningskod och härleder krypteringsnyckeln från den. Det krypterade valvet skickas sedan till **din egen iCloud på iPhone och iPad, eller din egen Google Drive på Android**, i stället för till oss.

Konsekvensen är oundviklig. **Om du förlorar återställningskoden kan säkerhetskopian aldrig öppnas igen.** Inte av dig, inte av Apple eller Google, och inte av oss. Det finns ingen återställningslänk, eftersom det inte finns något konto att koppla den till. Det finns inget supportärende som kan återställa den, eftersom vi aldrig har haft den och inte ens kan börja gissa oss till den.

Det låter hårt skrivet i klartext, och det är värt att vara ärlig om det i stället för att gömma undan det på en inställningsskärm. Det är samma avvägning du gör med en husnyckel: låset är bara värt något för att ingen låssmed på jorden har en reservnyckel, och det är precis därför att förlora din blir ditt eget problem. Ett företag som kan återställa dina handlingar efter att du glömt allt är ett företag som kunde läsa dem hela tiden.

Behandla därför koden som den enda sak du måste göra rätt:

- Spara den innan du förlitar dig på säkerhetskopian, inte efteråt.
- Förvara den någonstans dit telefonens förlust inte når. En lösenordshanterare på en annan enhet fungerar. Det gör även papper i lådan där födelsebevisen ligger.
- Läs upp den en gång från var du än sparade den. Handstil som verkade tydlig i stunden har en tendens att bli tvetydig i en nödsituation.
- Två kopior på två platser slår en perfekt kopia.

## Är molnsäkerhetskopiering säker för passkopior?

Det beror helt på vad som når molnet, och det är en fråga om appen snarare än om molnet.

Ett foto av ditt pass i ett vanligt fotobibliotek eller en synkad mapp anländer läsbart. Det ligger i ett konto skyddat av ett lösenord du kanske har återanvänt. Det indexeras och får en miniatyrbild, och alla som tar sig in i det kontot ser en ren kopia av identitetssidan. Vi gick igenom hur den exponeringen faktiskt ser ut i [att spara ett pass i Google Foto](https://traveldocumentvault.com/sv/blog/is-it-safe-to-store-passport-in-google-photos/). Det är en verklig risk, och det är upplägget de flesta familjer kör utan att någonsin ha valt det.

Ett valv krypterat på enheten före uppladdning anländer som krypterad text. Den som bryter sig in i molnkontot hittar en fil de inte kan öppna. Skyddet följer med filen i stället för att bero på kontot den hamnar i.

Vilket är varför det ärliga svaret på "är molnet säkert" är: molnet är en leveransadress, inte en säkerhetsmodell. Det som spelar roll är vilket skick filen är i när den kommer fram. Vår [jämförelse av de vanligaste ställena folk sparar passkopior](https://traveldocumentvault.com/sv/blog/safest-way-to-store-passport-digitally/) går igenom avvägningarna för vart och ett.

| Vad du säkerhetskopierar | Skick vid ankomst | Vem kan läsa den | Om kontot komprometteras |
|---|---|---|---|
| **Foto av ditt pass i ett fotobibliotek** | Läsbar bild | Du, leverantören, alla med kontoåtkomst | Hela identitetssidan exponerad |
| **PDF i en synkad molnmapp** | Läsbar fil | Du, leverantören, alla med kontoåtkomst | Handlingar exponerade och nedladdningsbara |
| **Appsäkerhetskopia där företaget har nyckeln** | Krypterad i vila | Du och företaget | Beror på företagets egen nyckelhantering |
| **Säkerhetskopia krypterad på din enhet först** | Krypterad text | Bara den som har återställningskoden | Angriparen får en oläsbar fil |

## Vad som ingår i säkerhetskopian, och vad som stannar kvar

Säkerhetskopian innehåller en krypterad kopia av valvet: varje profil, varje skanning, utgångsdatum, påminnelser, anteckningar och bilagor. Återställ den och appen ser ut precis som du lämnade den.

Tre saker stannar medvetet kvar på telefonen, och återställningskoden kommer först: den lämnar aldrig enheten, vilket är hela poängen. Ditt applås förblir också lokalt, så Face ID, Touch ID eller din PIN-kod håller andra borta från telefonen medan krypteringen håller dem borta från filen. Och de automatiska lokala ögonblicksbilderna som appen tar medan du arbetar stannar bara på enheten.

Det sista brukar överraska folk, så här kommer den raka versionen. **En systemnivås enhetssäkerhetskopia installerar om appen men kan inte återställa dina handlingar.** Krypteringsnyckeln lämnade aldrig den gamla telefonen, så den nya har inget att dekryptera med. Om du vill att ditt valv ska överleva telefonen behöver du antingen ha molnsäkerhetskopiering påslagen eller en exporterad fil sparad någonstans.

## Återställa på en ny telefon

Återställningen går snabbt, vilket är hela poängen med att göra förberedelserna i förväg.

Installera appen på den nya telefonen och logga in på samma iCloud- eller Google-konto som du använde tidigare. Öppna Inställningar, sedan Molnsäkerhetskopiering, sedan Återställ från säkerhetskopia, och ange din återställningskod. Valvet kommer tillbaka med profiler, utgångsdatum och påminnelser intakta.

Appen kontrollerar också innan den skriver. Om molnsäkerhetskopieringen upptäcker en befintlig säkerhetskopia i det kontot ber den dig välja mellan att återställa och börja om från början. En ny telefon kan inte tyst skriva över det som redan finns där.

### Byta mellan iPhone och Android

Molnsäkerhetskopiering stannar på en plattform, eftersom den använder din egen iCloud på Apple-enheter och din egen Google Drive på Android. Att gå från den ena till den andra kräver den andra vägen.

Använd Exportera valv. Inställningar, Exportera valv skapar en enda lösenordsskyddad fil som innehåller allt, och du väljer var den ska hamna: Filer-appen, en molnenhet, ett mejl till dig själv. På den nya telefonen läser Inställningar, Importera säkerhetskopia in den igen. Det fungerar i båda riktningarna och behåller namn, datum, påminnelser, färger, anteckningar och bilagor som de var.

Den exporterade filen är också svaret för alla som vill ha en kopia som inte alls beror på ett molnkonto. Det är förnuftigt att förvara den på en hårddisk hemma oavsett vilken telefon du bär på.

## En säkerhetskopieringsrutin som överlever en förlorad telefon

Tjugo minuter, en gång, före nästa resa:

- Slå på krypterad säkerhetskopiering och låt den första uppladdningen bli klar medan du är på hemmawifi.
- Skriv ner återställningskoden någonstans som inte är telefonen, läs sedan upp den från den kopian för att kontrollera att den går att läsa.
- Gör en andra kopia av koden och förvara den på en annan plats än den första.
- Exportera valvet en gång och spara filen någonstans du själv kontrollerar, som en väg som inte beror på något molnkonto.
- Kontrollera att appen visar en ny säkerhetskopia innan du flyger, på samma sätt som du kollar att passen ligger i väskan.

Inget av det här är dramatiskt, och det är lite grann poängen. De familjer som klarar en stulen telefon utomlands bäst är nästan aldrig de som reagerade briljant. Det är de som la tjugo odramatiska minuter vid köksbordet två veckor tidigare.

En sista sak om förväntningar. Säkerhetskopiering är ett extra skyddslager, och det garanterar ingenting: molnkonton låses ute, koder glöms bort, lagringstjänster har dåliga dagar. För handlingar som verkligen betyder något, förvara även något oberoende, vare sig det är en utskriven kopia i en låda hemma eller en andra export på en hårddisk.

**Innan du förlitar dig på det här:** det här är en blogg, inte en officiell källa. Regler och detaljer ändras, och din situation kan se annorlunda ut. Vi kontrollerar det vi publicerar, och vi kan ändå ha fel eller vara inaktuella. Om något här har betydelse för dina planer, bekräfta det med ansvarig myndighet innan du gör något.

## Vanliga frågor

### Vad betyder krypterad säkerhetskopiering egentligen?

Det betyder att kopian blandas ihop på din telefon innan den skickas någonstans, med en nyckel som stannar hos dig. Den som sedan lagrar filen har ett block av oläsbar data, inte ditt pass. Ordet betyder bara något när du kan svara på följdfrågan: vem har nyckeln? Om företaget som gjort appen kan läsa dina handlingar skyddar krypteringen dem från utomstående, inte från företaget.

### Vad händer om jag förlorar min säkerhetskopieringsnyckel?

Säkerhetskopian förblir krypterad och ingen kan öppna den, inte ens vi. Det finns inget konto, ingen lösenordsåterställning och ingen supportväg som kan återställa den, eftersom återställningskoden aldrig når oss över huvud taget. Det är den medvetna avvägningen för att inte heller någon annan ska kunna läsa dina handlingar. Skriv ner koden innan du förlitar dig på säkerhetskopian, förvara den skilt från telefonen, och läs upp den en gång för att kontrollera att du kan.

### Är molnsäkerhetskopiering säker för passkopior?

Det beror helt på vad som når molnet. Ett foto av ditt pass i ett vanligt fotobibliotek eller en synkmapp anländer läsbart, och alla som tar sig in i det kontot kan läsa det. En säkerhetskopia krypterad på enheten före uppladdning anländer som krypterad text, så lagringsleverantören har något den inte kan öppna. Travel Document Vault krypterar valvet på din telefon med AES-256-GCM och skickar den krypterade filen till din egen iCloud eller Google Drive i stället för till en företagsserver.

### Kan jag återställa mina handlingar på en annan telefon?

Ja. Installera appen på den nya telefonen, logga in på samma iCloud- eller Google-konto, öppna sedan Inställningar, Molnsäkerhetskopiering, Återställ från säkerhetskopia och ange din återställningskod. Dina profiler, handlingar, utgångsdatum och påminnelser kommer tillbaka som de var. Observera att en systemnivås enhetssäkerhetskopia inte gör det här på egen hand: den installerar om appen men kan inte dekryptera dina handlingar, eftersom krypteringsnyckeln aldrig lämnar din ursprungliga enhet.

### Fungerar säkerhetskopieringen mellan iPhone och Android?

Molnsäkerhetskopieringen i sig stannar på en plattform, eftersom den använder din egen iCloud på iPhone och iPad och din egen Google Drive på Android. För att flytta mellan dem, använd Exportera valv i stället: Inställningar, Exportera valv skapar en enda lösenordsskyddad .tdvault-fil som du kan skicka till dig själv hur du vill, och sedan läser Inställningar, Importera säkerhetskopia på den nya telefonen in den igen. Import fungerar mellan plattformar i båda riktningarna och behåller namn, datum, påminnelser, anteckningar och bilagor intakta.

### Vad lagras i säkerhetskopian och vad stannar på enheten?

Säkerhetskopian innehåller en krypterad kopia av ditt valv: varje profil, dokumentskanning, utgångsdatum, påminnelse och anteckning. Din återställningskod finns inte med i den, och lämnar aldrig din enhet. Det gör inte heller ditt applås, så Face ID, Touch ID eller din PIN-kod skyddar telefonen medan krypteringen skyddar filen. Automatiska lokala ögonblicksbilder stannar också bara på enheten, vilket är varför de inte kan få tillbaka ditt valv på en ersättningstelefon.

## Relaterade artiklar

[Integritet & säkerhet7 min läsningiCloud vs Google Foto vs krypterat valv: säkraste sättet att spara ditt pass digitalt](https://traveldocumentvault.com/sv/blog/safest-way-to-store-passport-digitally/)

[Integritet7 min läsningÄr det säkert att spara ditt pass i Google Foto? Vad du behöver veta](https://traveldocumentvault.com/sv/blog/is-it-safe-to-store-passport-in-google-photos/)
