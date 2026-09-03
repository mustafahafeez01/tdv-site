# Privacyverificatie | Travel Document Vault

> Verifieerbare privacygaranties voor Travel Document Vault. Nul trackers, nul gegevensverzameling. Op het apparaat standaard - geen Travel Document Vault-cloud, geen account vereist. Bekijk elk verzoek om toestemming dat we doen en waarom.

Source: https://traveldocumentvault.com/nl/privacy-verification/

---

## Onze privacygaranties

### Nul trackers

Geen analytische SDK's, geen advertentiebiblioteken, geen trackingpixels in de app.

### Geen uitgaande gegevensverzameling

De app doet geen uitgaande verbindingen standaard. Het werkt volledig offline. Het enige netwerkgebruik is optionele Pro cloud backup, die synchroniseert met je eigen iCloud of Google Drive – nooit naar onze servers.

### Standaard op het apparaat

Alle documenten, scans en gegevens blijven op je apparaat. Er is geen Travel Document Vault-cloud, geen Travel Document Vault-server, geen Travel Document Vault-backend. Pro-gebruikers kunnen hun versleutelde kluis optioneel back-uppen naar hun eigen iCloud- of Google Drive-account – alleen zij houden de herstelsleutel.

### AES-256-GCM versleuteling

Elk document wordt versleuteld voordat het de opslag van je apparaat bereikt.

## Verificatie

Je hoeft ons niet te vertrouwen. Je kunt elke bewering hierboven bevestigen met gratis, openbare tools.

### 1. Netwerkverkeerstest

Installeer een netwerkmonitor zoals **mitmproxy** (gratis, open source), **Wireshark** (gratis, open source) of **Charles Proxy**. Open Travel Document Vault, scan een document, blader door je kluis en stel een herinnering in. Je zou niet moeten zien dat je documenten, scans, vervaldata of kluisinhoud naar Travel Document Vault worden gestuurd. Het netwerkverkeer zou beperkt moeten blijven tot specifieke functies: optionele Sentry-crashrapportage, aankoopcontroles via App Store of Google Play, optionele cloudback-up naar je eigen iCloud of Google Drive-account, en een handmatige bugfixcontrole die hieronder wordt uitgelegd.

Instellingen heeft een knop **Check for Updates**. Dit is een handmatige controle, nooit automatisch – deze wordt alleen uitgevoerd wanneer je er zelf op tikt, nooit op de achtergrond en nooit uit zichzelf. De controle neemt contact op met **updates.traveldocumentvault.com** – onze eigen updateserver, beheerd door ons op Google Cloud, die cryptografisch ondertekende updatebestanden van een opslagbucket levert. Wij registreren de controle niet: aanvraaglogboeken zijn aan onze kant uitgeschakeld, dus geen IP-adressen worden bewaard. Elke update is ondertekend met een sleutel die alleen wij hebben, en de app weigert alles waarvan de handtekening niet overeenkomt met het certificaat dat erin is ingebouwd. Dezelfde tik controleert ook of er een nieuwere versie van de app beschikbaar is in de **App Store** of op **Google Play**. Deze functie bestaat zodat bepaalde bugfixes je sneller kunnen bereiken dan wanneer je moet wachten op een volledig nieuwe release in de App Store of Google Play, handig bij dringende fixes, afhankelijk van de aard van de fix. Dezelfde regel als voor de rest van deze pagina: geen netwerkverzoek zonder dat jij erom vraagt.

### 2. iOS App Privacy Report

Ga op iPhone naar **Instellingen > Privacy en beveiliging > App Privacy Report**. Deze ingebouwde Apple-functie laat zien welke apps netwerkdomeinen hebben benaderd. Travel Document Vault stuurt je documenten, scans, vervaldata of kluisinhoud niet naar ons. Als je Pro cloud backup hebt ingeschakeld, zie je verbindingen met Apple's iCloud-domeinen – dat is je eigen backup die synchroniseert naar je eigen iCloud-account.

### 3. Android – je privacy controleren

Android heeft geen enkel ingebouwd privacyrapport zoals de iPhone. Twee simpele manieren om het zelf te controleren: bekijk de eigen **Data Safety**-sectie van deze app op de Google Play-pagina (deze geeft duidelijk aan wat er wordt verzameld, wat er wordt gedeeld, dat je gegevens versleuteld worden verzonden en dat ze niet kunnen worden verwijderd) – of gebruik een netwerkmonitor zoals beschreven bij stap 1 hierboven.

Als je cloud backup hebt ingeschakeld, merk je mogelijk wat activiteit richting de servers van Google (webadressen die eindigen op **googleapis.com**). Dat is normaal en veilig: het gaat alleen om je vergrendelde, versleutelde back-upbestand en een inlogcontrole die rechtstreeks naar **je eigen** Google Drive-account wordt gestuurd – hetzelfde account dat je al gebruikt voor foto's of Gmail. Wij zien het nooit, ontvangen het nooit en bewaren er nergens een kopie van. Alleen jij hebt de herstelsleutel die het kan ontgrendelen.

### 4. App Store en Play Store privacylabels

Apple en Google vereisen dat ontwikkelaars aangeven welke gegevens hun app verzamelt. Controleer de Travel Document Vault-listing op de App Store of Google Play. Onze verklaring: **geen gegevens verzameld**.

## Hoe we de beveiliging van de app testen

We zeggen niet zomaar dat de app veilig is. We controleren het, met dezelfde open tools en publieke standaarden die de beveiligingsindustrie zelf gebruikt.

### We toetsen de app aan een publieke standaard

We beoordelen Travel Document Vault aan de hand van de [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), de checklist die de branche hanteert voor hoe een mobiele app gegevens moet opslaan, versleuteling moet gebruiken, vergrendeld moet zijn achter Face ID of een pincode, en hoe deze moet omgaan met links vanuit andere apps. Iedereen kan de standaard lezen en vergelijken met het daadwerkelijke gedrag van de app.

### We scannen onze eigen code

Voordat een build wordt uitgebracht, voeren we statische analyse uit op onze code met [Semgrep](https://semgrep.dev/), een opensourcetool die onveilige patronen signaleert, zoals zwakke versleuteling of onveilige gegevensverwerking, zodat we ze vroegtijdig kunnen opsporen.

### We scannen de gebouwde app

We beoordelen ook onze uitgebrachte builds met beveiligingsscantools voor mobiele apps, waarbij we controleren hoe de build gegevens opslaat, waar deze toegang toe heeft en hoe deze is ondertekend.

### Een probleem gevonden? Laat het ons weten

Als u een beveiligingsprobleem ontdekt, mail dan naar [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). De details van onze procedure voor het melden van kwetsbaarheden zijn gepubliceerd op [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Dit is onze eigen beoordeling aan de hand van een publieke standaard, geen onafhankelijke audit of certificering. Laatst beoordeeld in juli 2026.

## Elke toestemming uitgelegd

Android-apps verklaren toestemmingen in hun manifest. Sommige worden rechtstreeks door de app aangevraagd, andere worden geërfd van bibliotheken waarvan de app afhankelijk is. Hier is een transparante uitsplitsing van elke toestemming, gegroepeerd op doel.

### Toestemmingen die de app rechtstreeks gebruikt

### Camera

iOS en Android

**Waarom we vragen:** Zodat je je paspoort, visum of documentpagina's rechtstreeks vanuit de app kunt scannen.

**Wat we nooit doen:** Foto's worden lokaal op je apparaat opgeslagen. Ze worden nooit geüpload, verzonden of ergens heen gestuurd.

### Fotobibliotheek / Foto's / Opslag

iOS en Android

**Waarom we vragen:** Zodat je een bestaande foto van een document kunt importeren en zodat de app versleutelde back-upbestanden (.tdvault) kan exporteren wanneer je daar om vraagt. Op oudere Android-versies zijn READ_EXTERNAL_STORAGE en WRITE_EXTERNAL_STORAGE vereist. Op Android 13+ wordt in plaats daarvan READ_MEDIA_IMAGES gebruikt.

**Wat we nooit doen:** De app leest alleen de afbeelding die je selecteert. Het scant, indexeert of bladert nooit door je fotobibliotheek of bestandssysteem.

### Face ID / Touch ID / Biometrisch ontgrendelen

iOS en Android

**Waarom we vragen:** Zodat je de app kunt vergrendelen en ontgrendelen zodat alleen jij je documenten kunt bekijken. Op Android 6-8 wordt USE_FINGERPRINT gebruikt. Op Android 9+ wordt in plaats daarvan USE_BIOMETRIC gebruikt.

**Wat we nooit doen:** Je biometrische gegevens verlaten je apparaat nooit. Het besturingssysteem verwerkt authenticatie en retourneert alleen een slagen/mislukken-resultaat naar de app.

### Meldingen, Trillingen, Boot voltooid, Wake Lock

Android

**Waarom we vragen:** Zodat je herinneringen voor vervaldatum die je zelf instelt, on-device worden bezorgd. RECEIVE_BOOT_COMPLETED plant je herinneringen opnieuw in na een apparaatherstarten. WAKE_LOCK zorgt ervoor dat herinneringen betrouwbaar worden geactiveerd, zelfs als de telefoon slaapt. VIBRATE begeleidt meldingsbezorging.

**Wat we nooit doen:** We sturen nooit marketing-, promotie- of meldingen van derden. Herinneringen worden volledig op je apparaat ingedeeld.

### Internet, Netwerkstatus, Wi-Fi-status

Android

**Waarom deze verschijnen:** Ze zijn nodig voor netwerkafhankelijke functies: **Sentry-crashrapportage** (opt-in, standaard uitgeschakeld), **facturatie via App Store of Google Play** voor de aankoop van de Pro-upgrade, **Pro cloud backup** (optioneel), die je versleutelde kluis synchroniseert met je eigen iCloud of Google Drive, en de handmatige knop **Check for Updates** in Instellingen (wordt alleen uitgevoerd wanneer je erop tikt). ACCESS_NETWORK_STATE en ACCESS_WIFI_STATE laten deze functies controleren of er een verbinding beschikbaar is voordat ze proberen te verzenden.

**Wat we niet doen:** De app uploadt je documenten, scans, vervaldata, foto's of kluisinhoud niet naar Travel Document Vault. Voor normale documentopslag en herinneringen werkt de app volledig offline.

### Toestemmingen geërfd van bibliotheken (niet gebruikt door de app)

Android-apps omvatten bibliotheken van derden voor functies zoals in-app aankopen, crash reporting en meldingen. Deze bibliotheken verklaren toestemmingen in hun eigen manifesten, die worden samengevoegd in de uiteindelijke app. De onderstaande toestemmingen worden gedeclareerd door afhankelijkheden, niet door onze code. De app roept nooit de API's achter deze aanroepen.

### Opnemen van audio

Geërfd, nooit gebruikt

**Waarom het verschijnt:** Deze toestemming wordt gedeclareerd door een bibliotheek van derden in de build (meestal de camera- of mediaplug-in). Het verschijnt in het Android-manifest maar wordt nooit geactiveerd door onze code. De app neemt nooit audio of video op onder welke omstandigheden dan ook.

**Hoe je het kunt bevestigen:** De app vraagt je nooit om microfoontoegang. Wanneer je de permissiemanager van je apparaat controleert, zie je dat audioopname niet aan Travel Document Vault is verleend.

### Systeemwaarschuwingsvenster

Geërfd

Verklaarde door het Flutter-raamwerk voor overlays voor ontwikkeling en foutopsporing. Deze toestemming wordt niet gebruikt in de releaseversie van de app en heeft geen effect op je privacy.

### Schermafbeelding detecteren

Geërfd

Verklaarde door een raamwerkafhankelijkheid. De app detecteert, blokkeert of reageert niet op screenshots. Deze toestemming heeft geen effect op je gebruik.

### Badge-notificatietoestemmingen

Geërfd

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE en PROVIDER_INSERT_BADGE worden verklaard door de meldingsbibliotheek om ongelezen badgetotalen op het homescreenpictogram te tonen voor verschillende Android-fabrikanten (Samsung, Huawei, Xiaomi, enz.). Ze beïnvloeden alleen het getal op het app-pictogram.

### Facturering, Licentie controleren, Install Referrer

Google Play

Verklaard door de Google Play Billing-bibliotheek (voor de Pro-upgrade) en de Play Install Referrer-bibliotheek. Dit zijn standaardvereisten van Google Play Store en geven geen toegang tot persoonlijke gegevens.

### Download zonder melding

Geërfd

Verklaard door een raamwerkafhankelijkheid. De app downloadt geen bestanden op de achtergrond.

### Toestemmingen die we niet vragen

Dit zijn veelvoorkomende toestemmingen die veel apps vragen. We vragen ze niet, en ze verschijnen niet in ons manifest.

**Locatie** - geen GPS, geen geolokatie, geen tracking **Contacten** - geen toegang tot je adresboek **Bluetooth** - geen lokaal netwerk of apparaatscanning **Agenda** - herinneringen worden op het apparaat verwerkt, niet via je agenda

Nog vragen? Lees ons volledige [Privacyverklaring](https://traveldocumentvault.com/privacy-policy/) of controleer de [Vragen](https://traveldocumentvault.com/nl/faq/).
