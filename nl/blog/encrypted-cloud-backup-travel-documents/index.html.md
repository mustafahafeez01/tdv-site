# Versleutelde back-up in de cloud voor reisdocumenten: wie heeft de sleutel

> Wat een versleutelde back-up van je paspoortscans echt betekent, en waarom niemand je herstelcode kan resetten.

Source: https://traveldocumentvault.com/nl/blog/encrypted-cloud-backup-travel-documents/

---

![Een ouder en kind zitten samen op de bank in de schemering, kijken naar een telefoon en een klein gouden sleuteltje dat naast een paspoort op tafel ligt, terwijl een wolk erboven alleen door elkaar gehusselde tekens achter een hangslot bevat](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Belangrijkste punten

- **"Versleutelde back-up" betekent pas iets zodra je weet wie de sleutel heeft.** Kan het bedrijf je documenten lezen, dan beschermt de versleuteling ze tegen vreemden, niet tegen het bedrijf.
- Een back-up die op je telefoon wordt versleuteld voordat hij wordt geüpload, komt in de cloud aan als onleesbare data. De opslagaanbieder bewaart cijfertekst, niet je paspoort.
- **Geen account betekent geen wachtwoord resetten.** Verlies je de herstelcode, dan kan niemand de back-up meer openen, wij ook niet. Dat is de bewuste afweging.
- Schrijf de code op voordat je op de back-up vertrouwt, bewaar hem los van je telefoon, en lees hem één keer terug om te controleren of hij leesbaar is.
- Een systeemback-up van je toestel herinstalleert de app, maar kan je documenten niet terugzetten, omdat de versleutelingssleutel nooit van de oude telefoon af is gegaan.

Je hebt vier paspoorten, twee visa en de geboorteaktes van de kinderen ingescand in een app die alles op je telefoon bewaart. Mooi zo. Dan komt de voor de hand liggende zorg: wat gebeurt er als de telefoon in zee valt, of van een caféterras in Lissabon wordt gejat.

Het antwoord is een back-up. Het lastige is dat bijna elke app de term "versleutelde back-up" gebruikt, en bijna geen twee daarvan hetzelfde bedoelen. Dit artikel legt uit wat die woorden werkelijk betekenen, en wat het inhoudt als een bedrijf je gegevens écht niet kan lezen. Het eindigt met een korte routine voor de week voor je vertrek, zodat een kwijtgeraakte telefoon een ongemak blijft in plaats van een ramp.

## Wat "versleutelde back-up" werkelijk betekent

Versleuteling maakt een bestand onleesbaar, zodat alleen de bijpassende sleutel het weer leesbaar kan maken. Zoveel is standaard. Wat bepaalt of het je ook echt beschermt, is waar dat versleutelen gebeurt en wie uiteindelijk de sleutel in handen krijgt.

Twee heel verschillende opzetten worden allebei verkocht als versleutelde back-up.

De ene stuurt het bestand via een versleutelde verbinding naar de server van het bedrijf, en slaat het daar vervolgens versleuteld op. Beide beweringen kloppen, en allebei klinken ze geruststellend. Maar het bedrijf houdt zelf de sleutel, dus het kan je documenten ontsleutelen zodra dat nodig is: om een functie te laten werken, om een juridisch verzoek te beantwoorden, of omdat iemand binnen het bedrijf een fout maakt. Aan de andere kant is je paspoortscan gewoon leesbaar.

De andere opzet versleutelt het bestand al op je telefoon, voordat het ergens naartoe gaat, met een sleutel die is afgeleid van iets dat alleen jij hebt. Wat er in de opslag terechtkomt is een blok ruis, en niemand aan de andere kant kan het lezen, omdat niemand aan de andere kant de sleutel heeft. Dit heet meestal end-to-end versleuteld, of zero-knowledge.

De vraag die je bij elke app zou moeten stellen is kort: **wie heeft de sleutel?** Al het andere in de marketing volgt uit het antwoord daarop.

## De herstelcode, en waarom niemand hem kan resetten

Dit is het deel dat de meeste artikelen overslaan, en het verdient het om gewoon eerlijk gezegd te worden: Travel Document Vault heeft geen accounts. Je hebt ons nooit een e-mailadres gegeven, wij hebben nooit een wachtwoord voor je ingesteld, en er staat nergens op een server van ons een gegeven over jou. Als je [Cloudback-up](https://traveldocumentvault.com/nl/cloud-backup/) inschakelt, genereert de app een herstelcode van 24 tekens en leidt daaruit de versleutelingssleutel af. De versleutelde kluis gaat vervolgens naar **je eigen iCloud op iPhone en iPad, of je eigen Google Drive op Android**, in plaats van naar ons.

Het gevolg is onvermijdelijk. **Verlies je die herstelcode, dan kan de back-up nooit meer worden geopend.** Niet door jou, niet door Apple of Google, en niet door ons. Er is geen reset-link, want er is geen account om die aan te koppelen. Er is geen support-ticket dat hem terughaalt, want wij hebben hem nooit in bezit gehad en kunnen hem onmogelijk raden.

Dat klinkt hard als je het zo opschrijft, en het is beter om daar eerlijk over te zijn dan het weg te stoppen in een instellingenscherm. Het is dezelfde afweging als bij een huissleutel: het slot heeft alleen waarde omdat geen enkele slotenmaker ter wereld een reservesleutel achter de hand houdt, en juist daarom is het jouw probleem als je hem kwijtraakt. Een bedrijf dat je documenten kan herstellen nadat je alles bent vergeten, is een bedrijf dat ze de hele tijd al kon lezen.

Behandel de code dus als het ene ding dat je goed moet doen:

- Bewaar hem voordat je op de back-up vertrouwt, niet erna.
- Bewaar hem ergens waar het verlies van je telefoon niet bij kan. Een wachtwoordmanager op een ander apparaat werkt prima. Papier in de la bij de geboorteaktes ook.
- Lees hem één keer terug vanaf waar je hem hebt bewaard. Handschrift dat op het moment zelf logisch leek, wordt in een noodgeval opeens verrassend onduidelijk.
- Twee kopieën op twee plekken is beter dan één perfecte kopie.

## Is Cloudback-up veilig voor paspoortscans?

Dat hangt volledig af van wat er in de cloud terechtkomt, en dat is een vraag over de app, niet over de cloud.

Een foto van je paspoort in een gewone fotobibliotheek of een gesynchroniseerde map komt gewoon leesbaar aan. Die staat in een account dat wordt beschermd door een wachtwoord dat je misschien ook ergens anders gebruikt. Het wordt geïndexeerd en van een thumbnail voorzien, en iedereen die toegang krijgt tot dat account ziet een nette kopie van de identiteitspagina. Hoe die blootstelling er in de praktijk uitziet, hebben we uitgewerkt in [een paspoort bewaren in Google Foto's](https://traveldocumentvault.com/nl/blog/is-it-safe-to-store-passport-in-google-photos/). Dat is een reëel risico, en het is de opzet die de meeste gezinnen draaien zonder hem ooit bewust te hebben gekozen.

Een kluis die al op het toestel wordt versleuteld voordat hij wordt geüpload, komt aan als cijfertekst. Wie inbreekt in het cloud-account vindt een bestand dat niet te openen is. De bescherming reist mee met het bestand, in plaats van af te hangen van het account waarin het belandt.

Daarom is het eerlijke antwoord op "is de cloud veilig" dit: de cloud is een afleveradres, geen beveiligingsmodel. Wat telt, is in welke staat het bestand verkeert op het moment dat het daar aankomt. Onze [vergelijking van de belangrijkste plekken waar mensen paspoortscans bewaren](https://traveldocumentvault.com/nl/blog/safest-way-to-store-passport-digitally/) zet de voor- en nadelen van elke optie op een rij.

| Wat je back-upt | Status bij aankomst | Wie het kan lezen | Als het account wordt gehackt |
|---|---|---|---|
| **Foto van je paspoort in een fotobibliotheek** | Leesbare afbeelding | Jij, de aanbieder, iedereen met toegang tot het account | Volledige identiteitspagina blootgesteld |
| **PDF in een gesynchroniseerde drive-map** | Leesbaar bestand | Jij, de aanbieder, iedereen met toegang tot het account | Documenten blootgesteld en downloadbaar |
| **App-back-up waarbij het bedrijf de sleutel heeft** | Versleuteld opgeslagen | Jij en het bedrijf | Hangt af van hoe het bedrijf zelf met sleutels omgaat |
| **Back-up die eerst op je toestel wordt versleuteld** | Cijfertekst | Alleen wie de herstelcode heeft | Aanvaller krijgt een onleesbaar bestand |

## Wat in de back-up zit, en wat achterblijft

De back-up bevat een versleutelde kopie van de kluis: elk profiel, elke scan, vervaldatums, herinneringen, notities en bijlagen. Zet je hem terug, dan ziet de app er weer precies zo uit als je hem achterliet.

Drie dingen blijven bewust op de telefoon, en de herstelcode staat voorop: die verlaat het toestel nooit, en dat is precies de bedoeling. Ook je app-vergrendeling blijft lokaal, dus Face ID, Touch ID of je pincode houdt anderen buiten de telefoon, terwijl de versleuteling ze buiten het bestand houdt. En de automatische lokale momentopnamen die de app maakt terwijl je werkt, blijven alleen op het toestel.

Dat laatste punt verrast mensen vaak, dus hier is de botte versie. **Een systeemback-up van je toestel herinstalleert de app, maar kan je documenten niet terugzetten.** De versleutelingssleutel heeft de oude telefoon nooit verlaten, dus de nieuwe telefoon heeft niets om mee te ontsleutelen. Wil je dat je kluis de telefoon overleeft, dan heb je ofwel Cloudback-up ingeschakeld nodig, ofwel een geëxporteerd bestand dat je ergens hebt bewaard.

## Terugzetten op een nieuwe telefoon

Het terugzetten zelf is kort, en dat is precies de bedoeling van de voorbereiding die je eerder deed.

Installeer de app op de nieuwe telefoon en log in met hetzelfde iCloud- of Google-account als voorheen. Open Instellingen, dan Cloudback-up, dan Herstellen vanuit back-up, en voer je herstelcode in. De kluis komt terug met profielen, vervaldatums en herinneringen intact.

De app controleert ook voordat er iets wordt weggeschreven. Detecteert Cloudback-up een bestaande back-up in dat account, dan vraagt de app je te kiezen tussen terugzetten of opnieuw beginnen. Een nieuwe telefoon kan niet stiekem overschrijven wat er al staat.

### Overstappen tussen iPhone en Android

Cloudback-up blijft op één platform, omdat het je eigen iCloud gebruikt op Apple-toestellen en je eigen Google Drive op Android. Om van het ene naar het andere over te stappen, heb je de andere route nodig.

Gebruik Kluis exporteren. Instellingen, Kluis exporteren maakt één met een wachtwoord beveiligd bestand met alles erin, en jij kiest waar het naartoe gaat: de Bestanden-app, een drive, een e-mail aan jezelf. Op de nieuwe telefoon leest Instellingen, Kluis importeren het weer in. Het werkt in beide richtingen en houdt namen, datums, herinneringen, kleuren, notities en bijlagen zoals ze waren.

Dat geëxporteerde bestand is ook het antwoord voor wie een kopie wil die helemaal niet van een cloud-account afhangt. Het is verstandig om er eentje op een drive thuis te bewaren, ongeacht welke telefoon je bij je draagt.

## Een back-uproutine die een kwijtgeraakte telefoon overleeft

Twintig minuten, één keer, voor je volgende reis:

- Schakel Cloudback-up in en laat de eerste upload afronden terwijl je thuis op wifi zit.
- Schrijf de herstelcode ergens anders op dan op je telefoon, en lees hem terug vanaf die kopie om te controleren of hij leesbaar is.
- Maak een tweede kopie van de code en bewaar die op een andere plek dan de eerste.
- Exporteer de kluis één keer en bewaar het bestand ergens waar jij de controle over hebt, als route die niet van een cloud-account afhangt.
- Controleer voor je vertrek of de app een recente back-up laat zien, net zoals je controleert of de paspoorten in de tas zitten.

Niets hiervan is spannend, en dat is eigenlijk het hele idee. Gezinnen die goed omgaan met een gestolen telefoon in het buitenland, zijn bijna nooit degenen die briljant reageerden. Het zijn de gezinnen die twee weken eerder twintig onopvallende minuten aan de keukentafel hebben doorgebracht.

Nog een laatste kanttekening over verwachtingen. Een back-up is een extra veiligheidslaag, geen garantie: cloud-accounts raken vergrendeld, codes worden vergeten, opslagdiensten hebben weleens een slechte dag. Bewaar voor documenten die er echt toe doen ook iets onafhankelijks, of dat nu een afdruk in een la thuis is of een tweede export op een drive.

**Voordat je hierop vertrouwt:** dit is een blog, geen officiële bron. Regels en details veranderen, en jouw situatie kan anders zijn. We controleren wat we publiceren, en we kunnen er alsnog naast zitten of verouderd zijn. Als iets hier belangrijk is voor je plannen, laat het dan bevestigen door de instantie die erover gaat voordat je iets doet.

## Veelgestelde vragen

### Wat betekent een versleutelde back-up eigenlijk?

Het betekent dat de kopie op je telefoon wordt versleuteld voordat hij ergens naartoe gaat, met een sleutel die bij jou blijft. Wie het bestand daarna opslaat, heeft een blok onleesbare data in handen, niet je paspoort. Het woord betekent pas iets als je de vervolgvraag kunt beantwoorden: wie heeft de sleutel? Kan het bedrijf achter de app je documenten lezen, dan beschermt de versleuteling ze tegen buitenstaanders, niet tegen het bedrijf zelf.

### Wat gebeurt er als ik mijn back-upsleutel kwijtraak?

De back-up blijft versleuteld en niemand kan hem openen, wij ook niet. Er is geen account, geen wachtwoord om te resetten, en geen supportroute die hem terughaalt, want de herstelcode bereikt ons om te beginnen al niet. Dat is de bewuste afweging tegenover het feit dat niemand anders je documenten kan lezen. Schrijf de code op voordat je op de back-up vertrouwt, bewaar hem los van je telefoon, en lees hem één keer terug om te checken of het lukt.

### Is Cloudback-up veilig voor paspoortscans?

Dat hangt volledig af van wat er in de cloud terechtkomt. Een foto van je paspoort in een gewone fotobibliotheek of gesynchroniseerde map komt leesbaar aan, en iedereen die toegang krijgt tot dat account kan hem lezen. Een back-up die op het toestel wordt versleuteld voordat hij wordt geüpload, komt aan als cijfertekst, zodat de opslagaanbieder iets in handen heeft wat hij niet kan openen. Travel Document Vault versleutelt de kluis op je telefoon met AES-256-GCM en stuurt het versleutelde bestand naar je eigen iCloud of Google Drive, niet naar een server van het bedrijf.

### Kan ik mijn documenten op een andere telefoon terugzetten?

Ja. Installeer de app op de nieuwe telefoon, log in met hetzelfde iCloud- of Google-account, open dan Instellingen, Cloudback-up, Herstellen vanuit back-up, en voer je herstelcode in. Je profielen, documenten, vervaldatums en herinneringen komen terug zoals ze waren. Let op: een systeemback-up van je toestel doet dit niet vanzelf. Die herinstalleert de app, maar kan je documenten niet ontsleutelen, omdat de versleutelingssleutel je oorspronkelijke toestel nooit verlaat.

### Werkt de back-up tussen iPhone en Android?

Cloudback-up zelf blijft op één platform, want het gebruikt je eigen iCloud op iPhone en iPad en je eigen Google Drive op Android. Om over te stappen gebruik je in plaats daarvan Kluis exporteren: Instellingen, Kluis exporteren maakt één met een wachtwoord beveiligd .tdvault-bestand dat je naar jezelf kunt sturen zoals je zelf wilt, waarna Instellingen, Kluis importeren op de nieuwe telefoon het weer inleest. Importeren werkt in beide richtingen tussen platforms, en houdt namen, datums, herinneringen, notities en bijlagen intact.

### Wat wordt er in de back-up opgeslagen en wat blijft op het toestel?

De back-up bevat een versleutelde kopie van je kluis: elk profiel, elke documentscan, vervaldatum, herinnering en notitie. Je herstelcode zit er niet in, en verlaat je toestel nooit. Je app-vergrendeling ook niet, dus Face ID, Touch ID of je pincode beschermt de telefoon, terwijl de versleuteling het bestand beschermt. Automatische lokale momentopnamen blijven ook alleen op het toestel, en daarom kunnen ze je kluis niet terugbrengen op een vervangende telefoon.

## Gerelateerde artikelen

[Privacy & beveiliging7 min leestijdiCloud vs Google Photos vs versleutelde app: veiligste manier om je paspoort op te slaan](https://traveldocumentvault.com/nl/blog/safest-way-to-store-passport-digitally/)

[Privacy7 min leestijdIs het veilig om je paspoort in Google Foto's te bewaren? Dit moet je weten](https://traveldocumentvault.com/nl/blog/is-it-safe-to-store-passport-in-google-photos/)
