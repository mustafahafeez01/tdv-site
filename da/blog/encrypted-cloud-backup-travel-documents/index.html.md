# Krypteret skybackup til rejsedokumenter: Hvem har nøglen?

> Hvad krypteret backup egentlig betyder for pas-scanninger, hvorfor vi ikke kan nulstille din gendannelseskode, og hvordan du gemmer en kopi, der virker.

Source: https://traveldocumentvault.com/da/blog/encrypted-cloud-backup-travel-documents/

---

![En forælder og et barn sidder sammen i sofaen i skumringen og kigger på en telefon og en lille guldnøgle, der ligger på bordet ved siden af et pas, mens en sky ovenover kun indeholder ukendelige tegn bag en hængelås](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Vigtigste punkter

- **"Krypteret backup" betyder kun noget, når du ved, hvem der har nøglen.** Hvis virksomheden kan læse dine dokumenter, beskytter krypteringen dem mod fremmede – ikke mod virksomheden.
- En backup, der er krypteret på din telefon før upload, når skyen som ulæselige data. Lagringsudbyderen opbevarer krypteret tekst, ikke dit pas.
- **Ingen konto betyder ingen nulstilling af adgangskode.** Hvis du mister gendannelseskoden og adgang til alle enheder, der stadig kan åbne hvælvingen, kan vi ikke gendanne den krypterede backup. Det er den bevidste afvejning.
- Skriv koden ned, før du er afhængig af backuppen, opbevar den væk fra telefonen, og læs den igennem én gang for at tjekke, at den er læselig.
- En systembackup af enheden geninstallerer appen, men kan ikke bringe dine dokumenter tilbage, fordi systembackups ikke overfører den enhedsbundne krypteringsnøgle.

Du har scannet fire pas, to visa og børnenes fødselsattester ind i en app, der opbevarer alting på din telefon. Godt. Så dukker den oplagte bekymring op: hvad sker der, hvis telefonen ryger i havet, eller bliver stjålet fra et cafébord i Lissabon.

Svaret er en backup. Det akavede er, at næsten alle apps bruger udtrykket "krypteret backup", og næsten ingen af dem mener det samme med det. Denne artikel forklarer, hvad ordene reelt betyder, og hvad du accepterer, når en virksomhed for alvor ikke kan læse dine data. Den slutter med en kort rutine til ugen før en rejse, så en mistet telefon forbliver en ulempe frem for en katastrofe.

## Hvad "krypteret backup" egentlig betyder

Kryptering blander en fil, så kun en tilsvarende nøgle kan gøre den læselig igen. Det er standard. Det, der afgør, om det beskytter dig, er hvor blandingen finder sted, og hvem der ender med at have nøglen.

To forskellige opsætninger sælges begge som krypteret backup, og de fungerer meget forskelligt.

Den ene sender filen til virksomhedens server via en krypteret forbindelse og opbevarer den derefter krypteret, mens den ligger stille. Begge dele er sande, og begge lyder betryggende. Men virksomheden har stadig nøglen, så den kan dekryptere dine dokumenter, når som helst den har brug for det: for at køre en funktion, for at besvare en juridisk anmodning, eller fordi nogen internt har lavet en fejl. Din passcanning er læselig i den anden ende.

Den anden opsætning blander filen på din telefon, før den sendes nogen steder, med en nøgle udledt af noget, kun du har. Det, der ankommer til lagringen, er en blok af støj, og ingen i den anden ende kan læse det, fordi ingen i den anden ende har nøglen. Det kaldes normalt end-to-end-krypteret eller zero-knowledge.

Så spørgsmålet, det er værd at stille til enhver app, er kort: **hvem har nøglen?** Alt andet i markedsføringen følger af svaret.

## Gendannelseskoden – og hvorfor vi ikke kan nulstille den

Travel Document Vault kræver ingen appkonto for at gemme dokumenter på din enhed. Valgfri [cloud-backup](https://traveldocumentvault.com/da/cloud-backup/) kræver Pro og din gendannelseskode for at låse krypteringsnøglen til skyen op. Appen opretter denne kode på 24 tegn, når du opsætter din PIN. Det krypterede arkiv sendes derefter til **din egen iCloud på iPhone og iPad, eller din egen Google Drive på Android** – ikke til os.

Konsekvensen er uundgåelig. **Hvis du mister gendannelseskoden og adgang til alle enheder, der stadig kan åbne hvælvingen, kan vi ikke gendanne den krypterede backup.** Der findes intet nulstillingslink, fordi der ikke er nogen konto at knytte det til. Der findes ingen supportsag, der kan gendanne den, fordi vi aldrig har haft den og ikke engang kan gætte den.

Det lyder hårdt, når det skrives ned, og det er værd at være ærlig om det frem for at gemme det væk i en indstillingsskærm. Det er den samme afvejning, du laver med en husnøgle: låsen er kun noget værd, fordi ingen låsesmed på jorden opbevarer en ekstra, og det er præcis derfor, det er dit eget problem, hvis du mister din.

En virksomhed, der kan gendanne dine dokumenter, efter du har glemt alt, er en virksomhed, der kunne læse dem hele tiden.

Behandl derfor koden som det ene, du skal have styr på:

- Gem den, før du er afhængig af backuppen – ikke bagefter.
- Opbevar den et sted, hvor tabet af telefonen ikke rammer den. En adgangskodemanager på en anden enhed virker fint. Det gør papir i skuffen, hvor fødselsattesterne ligger, også.
- Læs den igennem én gang fra der, hvor du har opbevaret den. Håndskrift, der gav mening dengang, har det med at blive uklar i en nødsituation.
- To kopier på to steder slår én perfekt kopi.

## Er cloud-backup sikkert for passcanninger?

Det afhænger fuldstændigt af, hvad der når skyen, og det er et spørgsmål om appen snarere end om skyen selv.

Et foto af dit pas i et almindeligt fotobibliotek eller en synkroniseret mappe ankommer læseligt. Det ligger i en konto beskyttet af en adgangskode, du måske har genbrugt. Det bliver indekseret og miniaturebilledet, og alle, der kommer ind i den konto, ser en ren kopi af identitetssiden. Vi har gennemgået, hvordan den eksponering reelt ser ud, i vores artikel om [at opbevare et pas i Google Fotos](https://traveldocumentvault.com/da/blog/is-it-safe-to-store-passport-in-google-photos/). Det er en reel risiko, og det er den opsætning, de fleste familier kører med, uden nogensinde at have valgt den aktivt.

Et arkiv, der er krypteret på enheden før upload, ankommer som krypteret tekst. Nogen, der bryder ind i cloud-kontoen, finder en fil, de ikke kan åbne. Beskyttelsen følger filen i stedet for at afhænge af den konto, den lander i.

Det er derfor, det ærlige svar på "er skyen sikker" er: skyen er en leveringsadresse, ikke en sikkerhedsmodel. Det, der betyder noget, er den tilstand, filen er i, når den når frem. Skulle vi vælge en standard, ville vi vælge den opsætning, der krypterer filen, før den forlader telefonen. Vores [sammenligning af de vigtigste steder, folk opbevarer passcanninger](https://traveldocumentvault.com/da/blog/safest-way-to-store-passport-digitally/) gennemgår afvejningerne ved hver af dem.

| Hvad du sikkerhedskopierer | Tilstand ved ankomst | Hvem kan læse det | Hvis kontoen bliver kompromitteret |
|---|---|---|---|
| **Foto af dit pas i et fotobibliotek** | Læseligt billede | Dig, udbyderen, alle med adgang til kontoen | Hele identitetssiden eksponeret |
| **PDF i en synkroniseret drev-mappe** | Læselig fil | Dig, udbyderen, alle med adgang til kontoen | Dokumenter eksponeret og kan downloades |
| **App-backup, hvor virksomheden har nøglen** | Krypteret i hvile | Dig og virksomheden | Afhænger af virksomhedens egen nøglehåndtering |
| **Backup krypteret på din enhed først** | Krypteret tekst | Kun den, der har gendannelseskoden | Angriberen får en ulæselig fil |

## Hvad indgår i backuppen, og hvad bliver tilbage

Backuppen indeholder profiler, scanninger, vedhæftninger, udløbsdatoer, noter og påmindelseshistorik, der kan flyttes til en ny enhed. Appen krypterer dem før upload. Gendannelse bringer dette hvælvingsindhold tilbage; enhedsindstillinger holdes adskilt, og appen genopretter notifikationer.

Tre ting bliver bevidst på telefonen, og gendannelseskoden kommer først: den uploades ikke med backuppen. Din applås forbliver også lokal, så Face ID, Touch ID eller din PIN holder andre ude af appen, mens krypteringen holder dem ude af filen. Og de automatiske lokale øjebliksbilleder, appen tager, mens du arbejder, bliver kun på enheden.

Det sidste punkt overrasker folk, så her er den ligefremme version. **En systembackup af enheden geninstallerer appen, men kan ikke gendanne dine dokumenter.** Systembackups overfører ikke den enhedsbundne krypteringsnøgle, så den nye telefon skal bruge gendannelse fra skyen (Pro) eller en eksporteret hvælvingsfil. Hvis du vil have, at dit arkiv overlever telefonen, skal du enten have cloud-backup slået til eller en eksporteret fil gemt et sted.

## Gendan din hvælving; at starte forfra ændrer aldrig den gamle backup

Gendannelsestiden afhænger af hvælvingens størrelse og din forbindelse.

Installer appen på den nye telefon, og log ind med den samme iCloud- eller Google-konto, du brugte før. Med Pro og cloud-backup slået fra på modtagerenheden skal du åbne Indstillinger, Skybakup og derefter Gendann fra sikkerhedskopi. Vælg den eksisterende hvælving, indtast gendannelseskoden, og bekræft gendannelsen, som erstatter lokalt hvælvingsindhold. Profiler, dokumenter og udløbsdatoer gendannes; notifikationer genoprettes på modtagerenheden.

Appen tjekker også, før den skriver. Hvis cloud-backup finder en eksisterende backup i den konto, bliver du bedt om at vælge mellem at gendanne og starte forfra. En ny telefon kan ikke stille og roligt overskrive det, der allerede er der.

### Skift mellem iPhone og Android betyder, at du skal bruge Eksporter arkiv

Cloud-backup bliver på én platform, fordi den bruger din egen iCloud på Apple-enheder og din egen Google Drive på Android. Skifter du fra den ene til den anden, skal du bruge den anden metode.

Vault Export er gratis. I Indstillinger opretter Eksportér hvælving én adgangskodebeskyttet fil med profiler, dokumenter, rejser, understøttede indstillinger og læsbare vedhæftninger. Du vælger, hvor den skal gemmes: Filer-appen, et drev eller en e-mail til dig selv. På den nye telefon læser Indstillinger, Importér sikkerhedskopi den tilbage og erstatter alt, der allerede ligger der. Det understøtter begge platforme. Gennemgå importerede dokumenter, noter og vedhæftninger, tjek påmindelser igen, og behold den oprindelige eksport. Notifikationer genoprettes på modtagerenheden.

Den eksporterede fil er også svaret for alle, der vil have en kopi, som slet ikke afhænger af en cloud-konto. Det er fornuftigt at have liggende på et drev derhjemme, uanset hvilken telefon du går rundt med.

## En backup-rutine, der overlever en mistet telefon

Tyve minutter, én gang, før næste rejse:

- Slå krypteret backup til, og lad den første upload gøre sig færdig, mens du er på hjemme-wifi.
- Skriv gendannelseskoden ned et sted, der ikke er telefonen, og læs den derefter igennem fra den kopi for at tjekke, den er læselig.
- Lav en ekstra kopi af koden, og opbevar den et andet sted end den første.
- Eksporter arkivet én gang, og gem filen et sted, du selv kontrollerer, som en løsning, der ikke afhænger af nogen cloud-konto.
- Tjek, at appen viser en ny backup, før du flyver – på samme måde som du tjekker, at passerne er i tasken.

En sidste bemærkning om forventninger. Backup er et sikkerhedslag, og det garanterer ikke noget: cloud-konti bliver låst, koder bliver glemt, lagringstjenester har dårlige dage. For dokumenter, der virkelig betyder noget, bør du også have noget uafhængigt liggende – hvad enten det er en udprintet kopi i en skuffe derhjemme eller en ekstra eksport på et drev.

Intet af det her er dramatisk, og det er lidt pointen. De familier, der klarer sig godt, når telefonen bliver stjålet i udlandet, er næsten aldrig dem, der reagerede genialt. Det er dem, der brugte tyve helt almindelige minutter ved køkkenbordet fjorten dage forinden. Har du ikke gjort det endnu, så sæt din backup op i dag, og skriv ned, hvor gendannelseskoden ligger.

**Før du stoler på det her:** det er en blog, ikke en officiel kilde. Regler og detaljer ændrer sig, og din situation kan være en anden. Vi kontrollerer det, vi udgiver, og vi kan stadig tage fejl eller være forældede. Hvis noget her har betydning for dine planer, så få det bekræftet hos den ansvarlige myndighed, før du gør noget.

## Ofte stillede spørgsmål

### Hvad betyder krypteret backup egentlig?

Det betyder, at kopien bliver blandet på din telefon, før den sendes nogen steder, med en nøgle, der bliver hos dig. Den, der derefter opbevarer filen, sidder med en blok ulæselige data – ikke dit pas. Ordet betyder kun noget, når du kan svare på opfølgningsspørgsmålet: hvem har nøglen? Hvis virksomheden bag appen kan læse dine dokumenter, beskytter krypteringen dem mod udenforstående – ikke mod virksomheden.

### Hvad sker der, hvis jeg mister min backup-nøgle?

Hvis du mister gendannelseskoden og adgang til alle enheder, der stadig kan åbne hvælvingen, kan vi ikke gendanne den krypterede backup. Der er ingen konto, ingen nulstilling af adgangskode, og ingen supportvej, der kan gendanne den, fordi gendannelseskoden aldrig når frem til os i første omgang. Det er den bevidste afvejning for, at ingen andre heller kan læse dine dokumenter. Skriv koden ned, før du er afhængig af backuppen, opbevar den et sted adskilt fra telefonen, og læs den igennem én gang for at tjekke, du kan.

### Er cloud-backup sikkert for passcanninger?

Det afhænger fuldstændigt af, hvad der når frem til skyen. Et foto af dit pas i et almindeligt fotobibliotek eller en synkroniseret mappe ankommer læseligt, og alle, der kommer ind i den konto, kan læse det. En backup, der er krypteret på enheden før upload, ankommer som krypteret tekst, så lagringsudbyderen sidder med noget, den ikke kan åbne. Med Pro krypterer Travel Document Vault hvælvingen på din telefon med AES-256-GCM og sender den krypterede fil til din egen iCloud eller Google Drive frem for en TDV-server.

### Kan jeg gendanne mine dokumenter på en anden telefon?

Ja, med Pro. Installer appen på den nye telefon, og log ind med samme iCloud- eller Google-konto. Med cloud-backup slået fra på modtagerenheden skal du åbne Indstillinger, Skybakup og derefter Gendann fra sikkerhedskopi. Vælg den eksisterende hvælving, indtast gendannelseskoden, og bekræft gendannelsen, som erstatter lokalt hvælvingsindhold. Profiler, dokumenter og udløbsdatoer gendannes; notifikationer genoprettes på modtagerenheden. Bemærk, at en systembackup af enheden ikke gør dette af sig selv: den geninstallerer appen, men kan ikke dekryptere dine dokumenter, fordi systembackups ikke overfører den enhedsbundne krypteringsnøgle.

### Virker backuppen mellem iPhone og Android?

Cloud-backup bliver på én platform: din egen iCloud på iPhone og iPad eller din egen Google Drive på Android. Brug gratis Vault Export til at flytte mellem dem. I Indstillinger opretter Eksportér hvælving en adgangskodebeskyttet .tdvault-fil, som du kan sende til dig selv. På den nye telefon læser Indstillinger, Importér sikkerhedskopi den tilbage og erstatter de data, der allerede ligger der. Import understøtter begge platforme. Gennemgå importerede dokumenter, noter og vedhæftninger, tjek påmindelser igen, og behold den oprindelige eksport. Notifikationer genoprettes på modtagerenheden.

### Hvad opbevares i backuppen, og hvad bliver på enheden?

Backuppen indeholder profiler, læsbare scanninger og vedhæftninger, udløbsdatoer, noter og transportabel påmindelseshistorik, krypteret før upload. Din gendannelseskode uploades ikke med backuppen. Det gør din applås heller ikke, så Face ID, Touch ID eller din PIN beskytter appen, mens krypteringen beskytter filen. Automatiske lokale øjebliksbilleder bliver også kun på enheden, hvilket er grunden til, at de ikke kan bringe dit arkiv tilbage på en ny telefon.

## Relaterede artikler

[Privatliv & sikkerhed7 min læsningiCloud vs Google Photos vs krypteret app: sikreste måde at gemme dit pas](https://traveldocumentvault.com/da/blog/safest-way-to-store-passport-digitally/)

[Privatliv7 min læsningEr det sikkert at gemme dit pas i Google Fotos? Det skal du vide](https://traveldocumentvault.com/da/blog/is-it-safe-to-store-passport-in-google-photos/)
