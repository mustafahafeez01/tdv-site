# Krypteret skybackup til rejsedokumenter: Hvem har nøglen?

> Hvad "krypteret backup" egentlig betyder for pas-scanninger, hvorfor en gendannelseskode ikke kan nulstilles af nogen, og hvordan du opbevarer en kopi, du rent faktisk kan gendanne.

Source: https://traveldocumentvault.com/da/blog/encrypted-cloud-backup-travel-documents/

---

![En forælder og et barn sidder sammen i sofaen i skumringen og kigger på en telefon og en lille guldnøgle, der ligger på bordet ved siden af et pas, mens en sky ovenover kun indeholder ukendelige tegn bag en hængelås](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Vigtigste punkter

- **"Krypteret backup" betyder kun noget, når du ved, hvem der har nøglen.** Hvis virksomheden kan læse dine dokumenter, beskytter krypteringen dem mod fremmede - ikke mod virksomheden.
- En backup, der er krypteret på din telefon før upload, når skyen som ulæselige data. Lagringsudbyderen opbevarer krypteret tekst, ikke dit pas.
- **Ingen konto betyder ingen nulstilling af adgangskode.** Mister du gendannelseskoden, kan backuppen ikke åbnes af nogen - os inklusive. Det er den bevidste afvejning.
- Skriv koden ned, før du er afhængig af backuppen, opbevar den væk fra telefonen, og læs den igennem én gang for at tjekke, at den er læselig.
- En systembackup af enheden geninstallerer appen, men kan ikke bringe dine dokumenter tilbage, fordi krypteringsnøglen aldrig forlod den gamle telefon.

Du har scannet fire pas, to visa og børnenes fødselsattester ind i en app, der opbevarer alting på din telefon. Godt. Så dukker den oplagte bekymring op: hvad sker der, hvis telefonen ryger i havet, eller bliver stjålet fra et cafébord i Lissabon.

Svaret er en backup. Det akavede er, at næsten alle apps bruger udtrykket "krypteret backup", og næsten ingen af dem mener det samme med det. Denne artikel forklarer, hvad ordene reelt betyder, og hvad du accepterer, når en virksomhed for alvor ikke kan læse dine data. Den slutter med en kort rutine til ugen før en rejse, så en mistet telefon forbliver en ulempe frem for en katastrofe.

## Hvad "krypteret backup" egentlig betyder

Kryptering blander en fil, så kun en tilsvarende nøgle kan gøre den læselig igen. Det er standard. Det, der afgør, om det beskytter dig, er hvor blandingen finder sted, og hvem der ender med at have nøglen.

To forskellige opsætninger sælges begge som krypteret backup, og de fungerer meget forskelligt.

Den ene sender filen til virksomhedens server via en krypteret forbindelse og opbevarer den derefter krypteret, mens den ligger stille. Begge dele er sande, og begge lyder betryggende. Men virksomheden har stadig nøglen, så den kan dekryptere dine dokumenter, når som helst den har brug for det: for at køre en funktion, for at besvare en juridisk anmodning, eller fordi nogen internt har lavet en fejl. Din passcanning er læselig i den anden ende.

Den anden opsætning blander filen på din telefon, før den sendes nogen steder, med en nøgle udledt af noget, kun du har. Det, der ankommer til lagringen, er en blok af støj, og ingen i den anden ende kan læse det, fordi ingen i den anden ende har nøglen. Det kaldes normalt end-to-end-krypteret eller zero-knowledge.

Så spørgsmålet, det er værd at stille til enhver app, er kort: **hvem har nøglen?** Alt andet i markedsføringen følger af svaret.

## Gendannelseskoden - og hvorfor ingen kan nulstille den

Her kommer den del, de fleste artikler springer over, og den fortjener at blive sagt ligeud: Travel Document Vault har ingen konti. Du har aldrig givet os en e-mailadresse, vi har aldrig sat dig op med en adgangskode, og der findes ingen optegnelse om dig på nogen server, vi driver. Når du slår [cloud-backup](https://traveldocumentvault.com/da/cloud-backup/) til, genererer appen en gendannelseskode på 24 tegn og udleder krypteringsnøglen af den. Det krypterede arkiv sendes derefter til **din egen iCloud på iPhone og iPad, eller din egen Google Drive på Android** - ikke til os.

Konsekvensen er uundgåelig. **Mister du gendannelseskoden, kan backuppen aldrig åbnes igen.** Hverken af dig, af Apple eller Google, eller af os. Der findes intet nulstillingslink, fordi der ikke er nogen konto at knytte det til. Der findes ingen supportsag, der kan gendanne den, fordi vi aldrig har haft den og ikke engang kan gætte den.

Det lyder hårdt, når det skrives ned, og det er værd at være ærlig om det frem for at gemme det væk i en indstillingsskærm. Det er den samme afvejning, du laver med en husnøgle: låsen er kun noget værd, fordi ingen låsesmed på jorden opbevarer en ekstra, og det er præcis derfor, det er dit eget problem, hvis du mister din. En virksomhed, der kan gendanne dine dokumenter, efter du har glemt alt, er en virksomhed, der kunne læse dem hele tiden.

Behandl derfor koden som det ene, du skal have styr på:

- Gem den, før du er afhængig af backuppen - ikke bagefter.
- Opbevar den et sted, hvor tabet af telefonen ikke rammer den. En adgangskodemanager på en anden enhed virker fint. Det gør papir i skuffen, hvor fødselsattesterne ligger, også.
- Læs den igennem én gang fra der, hvor du har opbevaret den. Håndskrift, der gav mening dengang, har det med at blive uklar i en nødsituation.
- To kopier på to steder slår én perfekt kopi.

## Er cloud-backup sikkert for passcanninger?

Det afhænger fuldstændigt af, hvad der når skyen, og det er et spørgsmål om appen snarere end om skyen selv.

Et foto af dit pas i et almindeligt fotobibliotek eller en synkroniseret mappe ankommer læseligt. Det ligger i en konto beskyttet af en adgangskode, du måske har genbrugt. Det bliver indekseret og miniaturebilledet, og alle, der kommer ind i den konto, ser en ren kopi af identitetssiden. Vi har gennemgået, hvordan den eksponering reelt ser ud, i vores artikel om [at opbevare et pas i Google Fotos](https://traveldocumentvault.com/da/blog/is-it-safe-to-store-passport-in-google-photos/). Det er en reel risiko, og det er den opsætning, de fleste familier kører med, uden nogensinde at have valgt den aktivt.

Et arkiv, der er krypteret på enheden før upload, ankommer som krypteret tekst. Nogen, der bryder ind i cloud-kontoen, finder en fil, de ikke kan åbne. Beskyttelsen følger filen i stedet for at afhænge af den konto, den lander i.

Det er derfor, det ærlige svar på "er skyen sikker" er: skyen er en leveringsadresse, ikke en sikkerhedsmodel. Det, der betyder noget, er den tilstand, filen er i, når den når frem. Vores [sammenligning af de vigtigste steder, folk opbevarer passcanninger](https://traveldocumentvault.com/da/blog/safest-way-to-store-passport-digitally/) gennemgår afvejningerne ved hver af dem.

| Hvad du sikkerhedskopierer | Tilstand ved ankomst | Hvem kan læse det | Hvis kontoen bliver kompromitteret |
|---|---|---|---|
| **Foto af dit pas i et fotobibliotek** | Læseligt billede | Dig, udbyderen, alle med adgang til kontoen | Hele identitetssiden eksponeret |
| **PDF i en synkroniseret drev-mappe** | Læselig fil | Dig, udbyderen, alle med adgang til kontoen | Dokumenter eksponeret og kan downloades |
| **App-backup, hvor virksomheden har nøglen** | Krypteret i hvile | Dig og virksomheden | Afhænger af virksomhedens egen nøglehåndtering |
| **Backup krypteret på din enhed først** | Krypteret tekst | Kun den, der har gendannelseskoden | Angriberen får en ulæselig fil |

## Hvad indgår i backuppen, og hvad bliver tilbage

Backuppen indeholder en krypteret kopi af arkivet: hver profil, hver scanning, udløbsdatoer, påmindelser, noter og vedhæftninger. Gendan den, og appen ser ud, som da du forlod den.

Tre ting bliver bevidst på telefonen, og gendannelseskoden kommer først: den forlader aldrig enheden, hvilket er hele pointen. Din applås forbliver også lokal, så Face ID, Touch ID eller din PIN holder andre ude af telefonen, mens krypteringen holder dem ude af filen. Og de automatiske lokale øjebliksbilleder, appen tager, mens du arbejder, bliver kun på enheden.

Det sidste punkt overrasker folk, så her er den ligefremme version. **En systembackup af enheden geninstallerer appen, men kan ikke gendanne dine dokumenter.** Krypteringsnøglen forlod aldrig den gamle telefon, så den nye har intet at dekryptere med. Hvis du vil have, at dit arkiv overlever telefonen, skal du enten have cloud-backup slået til eller en eksporteret fil gemt et sted.

## Gendannelse på en ny telefon

Selve gendannelsen er hurtig, hvilket er hele pointen med at forberede sig tidligere.

Installer appen på den nye telefon, og log ind med den samme iCloud- eller Google-konto, du brugte før. Åbn Indstillinger, derefter Cloud-backup, derefter Gendan fra backup, og indtast din gendannelseskode. Arkivet kommer tilbage med profiler, udløbsdatoer og påmindelser intakte.

Appen tjekker også, før den skriver. Hvis cloud-backup finder en eksisterende backup i den konto, bliver du bedt om at vælge mellem at gendanne og starte forfra. En ny telefon kan ikke stille og roligt overskrive det, der allerede er der.

### Skift mellem iPhone og Android

Cloud-backup bliver på én platform, fordi den bruger din egen iCloud på Apple-enheder og din egen Google Drive på Android. Skifter du fra den ene til den anden, skal du bruge den anden metode.

Brug Eksporter arkiv. Indstillinger, Eksporter arkiv laver én adgangskodebeskyttet fil med alt, og du vælger selv, hvor den skal hen: Filer-appen, et drev, en e-mail til dig selv. På den nye telefon læser Indstillinger, Importer arkiv den tilbage. Det virker begge veje og bevarer navne, datoer, påmindelser, farver, noter og vedhæftninger, som de var.

Den eksporterede fil er også svaret for alle, der vil have en kopi, som slet ikke afhænger af en cloud-konto. Det er fornuftigt at have liggende på et drev derhjemme, uanset hvilken telefon du går rundt med.

## En backup-rutine, der overlever en mistet telefon

Tyve minutter, én gang, før næste rejse:

- Slå krypteret backup til, og lad den første upload gøre sig færdig, mens du er på hjemme-wifi.
- Skriv gendannelseskoden ned et sted, der ikke er telefonen, og læs den derefter igennem fra den kopi for at tjekke, den er læselig.
- Lav en ekstra kopi af koden, og opbevar den et andet sted end den første.
- Eksporter arkivet én gang, og gem filen et sted, du selv kontrollerer, som en løsning, der ikke afhænger af nogen cloud-konto.
- Tjek, at appen viser en ny backup, før du flyver - på samme måde som du tjekker, at passerne er i tasken.

Intet af det her er dramatisk, og det er lidt pointen. De familier, der klarer sig godt, når telefonen bliver stjålet i udlandet, er næsten aldrig dem, der reagerede genialt. Det er dem, der brugte tyve helt almindelige minutter ved køkkenbordet fjorten dage forinden.

En sidste bemærkning om forventninger. Backup er et sikkerhedslag, og det garanterer ikke noget: cloud-konti bliver låst, koder bliver glemt, lagringstjenester har dårlige dage. For dokumenter, der virkelig betyder noget, bør du også have noget uafhængigt liggende - hvad enten det er en udprintet kopi i en skuffe derhjemme eller en ekstra eksport på et drev.

**Før du stoler på det her:** det er en blog, ikke en officiel kilde. Regler og detaljer ændrer sig, og din situation kan være en anden. Vi kontrollerer det, vi udgiver, og vi kan stadig tage fejl eller være forældede. Hvis noget her har betydning for dine planer, så få det bekræftet hos den ansvarlige myndighed, før du gør noget.

## Ofte stillede spørgsmål

### Hvad betyder krypteret backup egentlig?

Det betyder, at kopien bliver blandet på din telefon, før den sendes nogen steder, med en nøgle, der bliver hos dig. Den, der derefter opbevarer filen, sidder med en blok ulæselige data - ikke dit pas. Ordet betyder kun noget, når du kan svare på opfølgningsspørgsmålet: hvem har nøglen? Hvis virksomheden bag appen kan læse dine dokumenter, beskytter krypteringen dem mod udenforstående - ikke mod virksomheden.

### Hvad sker der, hvis jeg mister min backup-nøgle?

Backuppen forbliver krypteret, og ingen kan åbne den - os inklusive. Der er ingen konto, ingen nulstilling af adgangskode, og ingen supportvej, der kan gendanne den, fordi gendannelseskoden aldrig når frem til os i første omgang. Det er den bevidste afvejning for, at ingen andre heller kan læse dine dokumenter. Skriv koden ned, før du er afhængig af backuppen, opbevar den et sted adskilt fra telefonen, og læs den igennem én gang for at tjekke, du kan.

### Er cloud-backup sikkert for passcanninger?

Det afhænger fuldstændigt af, hvad der når frem til skyen. Et foto af dit pas i et almindeligt fotobibliotek eller en synkroniseret mappe ankommer læseligt, og alle, der kommer ind i den konto, kan læse det. En backup, der er krypteret på enheden før upload, ankommer som krypteret tekst, så lagringsudbyderen sidder med noget, den ikke kan åbne. Travel Document Vault krypterer arkivet på din telefon med AES-256-GCM og sender den krypterede fil til din egen iCloud eller Google Drive - ikke til en virksomheds server.

### Kan jeg gendanne mine dokumenter på en anden telefon?

Ja. Installer appen på den nye telefon, log ind med den samme iCloud- eller Google-konto, åbn derefter Indstillinger, Cloud-backup, Gendan fra backup, og indtast din gendannelseskode. Dine profiler, dokumenter, udløbsdatoer og påmindelser kommer tilbage, som de var. Bemærk, at en systembackup af enheden ikke gør dette af sig selv: den geninstallerer appen, men kan ikke dekryptere dine dokumenter, fordi krypteringsnøglen aldrig forlader din oprindelige enhed.

### Virker backuppen mellem iPhone og Android?

Selve cloud-backuppen bliver på én platform, da den bruger din egen iCloud på iPhone og iPad og din egen Google Drive på Android. For at flytte mellem dem skal du i stedet bruge Eksporter arkiv: Indstillinger, Eksporter arkiv laver én adgangskodebeskyttet .tdvault-fil, som du kan sende til dig selv, som du vil, hvorefter Indstillinger, Importer arkiv på den nye telefon læser den tilbage. Import virker på tværs af platforme begge veje og bevarer navne, datoer, påmindelser, noter og vedhæftninger intakte.

### Hvad opbevares i backuppen, og hvad bliver på enheden?

Backuppen indeholder en krypteret kopi af dit arkiv: hver profil, dokumentscanning, udløbsdato, påmindelse og note. Din gendannelseskode er ikke en del af den og forlader aldrig din enhed. Det gør din applås heller ikke, så Face ID, Touch ID eller din PIN beskytter telefonen, mens krypteringen beskytter filen. Automatiske lokale øjebliksbilleder bliver også kun på enheden, hvilket er grunden til, at de ikke kan bringe dit arkiv tilbage på en ny telefon.

## Relaterede artikler

[Privatliv & sikkerhed7 min læsningiCloud vs Google Photos vs krypteret app: sikreste måde at gemme dit pas](https://traveldocumentvault.com/da/blog/safest-way-to-store-passport-digitally/)

[Privatliv7 min læsningEr det sikkert at gemme dit pas i Google Fotos? Det skal du vide](https://traveldocumentvault.com/da/blog/is-it-safe-to-store-passport-in-google-photos/)
