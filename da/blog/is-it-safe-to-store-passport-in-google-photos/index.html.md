# Er dit pas sikkert i Google Fotos? Ikke rigtig

> Én Google-konto udsat for phishing eksponerer alle billeder i den, dit pas inklusive, og Googles vilkår tillader automatiseret scanning. Risiciene - og hvor en scanning er sikrere.

Source: https://traveldocumentvault.com/da/blog/is-it-safe-to-store-passport-in-google-photos/

---

![Et pas på en dyb marineblå baggrund beskyttet af et blødt guldskjold, der antyder privat og sikker dokumentopbevaring](https://traveldocumentvault.com/blog/is-it-safe-to-store-passport-in-google-photos/cover.jpg)

## Vigtigste punkter

- At gemme en passcanning i Google Fotos betyder, at dit identitetsdokument ligger på Googles servere, bliver behandlet af deres systemer og kun beskyttet af den sikkerhed, din Google-konto tilfældigvis har.
- En kompromitteret Google-konto - via phishing, et genbrugt kodeord eller et databrud et andet sted - udleverer alt indhold i Google Fotos, dit pas inklusive.
- Googles vilkår tillader automatiseret scanning af dine billeder til funktioner og tjenesteforbedringer, og det gælder også billeder med pasoplysninger.
- Der findes bedre alternativer: krypterede kodeordshåndteringer, krypterede apps på enheden eller cloud-lagring med klientsidig kryptering - ingen af dem smider dit pas ind i et almindeligt fotobibliotek.
- For de fleste er den reelle risiko svag kontosikkerhed, ikke Google i sig selv: et genbrugt kodeord, et delt login, eller nogen der allerede ved, hvordan man kommer ind.

Mange mennesker gemmer passcanninger i Google Fotos uden at tænke sig om: du skal bruge en kopi, du tager et billede, og det bliver sikkerhedskopieret automatisk. Spørgsmålet om, hvorvidt det faktisk er et klogt valg for dit mest følsomme identitetsdokument, dukker sjældent op, før noget går galt.

Google Fotos er ikke en tvivlsom tjeneste. Risiciene ved at opbevare identitetsdokumenter i et almindeligt cloud-fotobibliotek er reelle og værd at forstå, så du selv kan afgøre, hvilken afvejning du er tryg ved.

## Hvad indeholder en passcanning egentlig?

Før vi taler om risiko, lad os være konkrete om, hvad der faktisk er i en passcanning:

- Fulde navn
- Fødselsdato
- Nationalitet og udstedelsesland
- Pasnummer
- Udstedelses- og udløbsdato
- Fødested (i mange pas)
- Dit fotografi
- Den maskinlæsbare zone (MRZ) - de to tekstlinjer nederst, der koder alt ovenstående i et standardformat

Det er mange personlige oplysninger i ét billede. Navn, fødselsdato og pasnummer tilsammen er nok til at forsøge identitetstyveri, gennemføre et overbevisende phishing-angreb med dine rigtige oplysninger, eller i visse jurisdiktioner optage kredit i dit navn. **Fotoet gør det kun endnu mere nyttigt for nogen, der ikke burde have det.**

## Hvad er de reelle risici ved at opbevare i Google Fotos?

Risiciene handler egentlig ikke om, at Google gør noget ondsindet; de er langt mere hverdagsagtige end det - hvilket er præcis det, der gør dem mere sandsynlige.

**Kontokompromittering**

Nogen kommer ind i din Google-konto - via phishing, et genbrugt kodeord fra et andet databrud, eller bare et svagt kodeord - og de har adgang til alt: hvert billede, hvert dokument, alt i Google Drev. Det er den mest realistiske trussel for de fleste, og det er præcis derfor, sikkerheden omkring pasbilleder betyder mere, end de fleste går og tror.

**Delt adgang**

Google-konti bliver delt oftere, end man skulle tro - mellem partnere, på familieenheder, med børn der kender pinkoden. Din passcanning ligger i Google Fotos, tilgængelig fra enhver logget-ind enhed, så det er ikke et teoretisk særtilfælde - det sker hele tiden.

**Tredjepartsapps med adgang**

Du har formentlig koblet flere apps til din Google-konto, end du tror, og nogle af de tilladelser rækker ind i Google Fotos. En app med adgang til Fotos kan i princippet læse din digitale paskopi, uden du nogensinde opdager det.

**Automatiseret indholdsscanning**

Googles privatlivspolitik bekræfter, at billeder bliver behandlet af automatiserede systemer - ansigtsgenkendelse, objektgenkendelse, søgeindeksering. Din passcanning gennemgår de samme systemer til søgning og funktionsgenkendelse. Intet menneske læser dit pas, og Google gør ikke noget lyssky her, men dine dokumentdata forlader stadig din enhed for at blive analyseret af tredjepartsinfrastruktur.

**Databrud hos Google**

Google har en stærk sikkerhedshistorik, men ingen cloud-udbyder kan love, at dine data er sikret mod indbrud for evigt. For de fleste billeder er det en fin afvejning - men for identitetsdokumenter vil nogle med rette hellere have en løsning, hvor data aldrig rører en server overhovedet.

Hvad det betyder i praksis

Sig, at dit Google-kodeord blev genbrugt på en side, der led et databrud for to år siden. Du har glemt alt om det. Et automatiseret værktøj prøver kodeordet mod Google, og det virker. I løbet af få minutter er alt i din Google Fotos tilgængeligt: feriebilleder, skærmbilleder og din passcanning. Angriberen har nu dit fulde navn, fødselsdato, nationalitet, pasnummer og dit fotografi. Det er nok til at åbne en kreditkonto i dit navn eller udføre et målrettet phishing-angreb, der er svært at gennemskue, fordi det bruger dine rigtige oplysninger. Kontobruddet er den realistiske trussel, ikke Google i sig selv.

## Hvad er den sikreste måde at opbevare et pasbillede på? Google Fotos over for iCloud over for et dedikeret arkiv

| Opbevaringsmetode | Hvor data ligger | Kryptering | Risikoniveau | Vurdering |
|---|---|---|---|---|
| Google Fotos | Googles cloud-servere | Under overførsel + i hvile (Google-styrede nøgler) | Moderat | Acceptabelt med stærk 2FA |
| iCloud-fotos | Apples cloud-servere | Under overførsel + i hvile (Apple-styrede nøgler) | Moderat | Acceptabelt med stærk 2FA |
| Krypteret kodeordshåndtering (1Password, Bitwarden) | Cloud (zero-knowledge) | End-to-end; udbyderen kan ikke læse indholdet | Lav | Godt valg |
| Krypteret app på enheden (valgfri egen cloud-backup) | Kun din telefon | Krypteret på enheden; ingen serverkopi | Lavest | Bedst til følsomme dokumenter |
| Kamerarulle / ukrypteret mappe | Din enhed | Kun enhedskryptering | Højere | Anbefales ikke |

### iCloud-fotos over for Google Fotos: Er Apple sikrere?

iOS-brugere antager ofte, at iCloud er markant sikrere end Google Fotos til opbevaring af passcanninger. På et strukturelt niveau ligner de hinanden meget. Begge gemmer dine billeder på cloud-servere, som udbyderen styrer, begge krypterer data under overførsel og i hvile med deres egne styrede nøgler, og begge behandler dine billeder gennem automatiserede systemer til funktioner som søgning og ansigtsgenkendelse.

Apples Avanceret databeskyttelse (tilgængelig fra iOS 16.2) hæver barren - når den er slået til, udvider den end-to-end-kryptering til iCloud-fotos, hvilket betyder, at end ikke Apple kan læse dit indhold. Alligevel er den ikke slået til som standard, og de fleste brugere ved ikke, at den findes.

Den samme risiko for kontokompromittering gælder begge platforme. Et svagt Apple-ID-kodeord er lige så farligt som et svagt Google-kodeord. Ingen af dem er specifikt designet til at opbevare identitetsdokumenter med høj følsomhed.

Er du iPhone-bruger, er det værd at slå **Avanceret databeskyttelse i iCloud** til. En app bygget specifikt til formålet uden cloud-upload forbliver den stærkeste løsning til pasopbevaring, uanset hvilken platform du bruger.

**Travel Document Vault** gemmer dine passcanninger på enheden med stærk kryptering. Ingen konto påkrævet. Valgfri krypteret backup til din egen iCloud eller Google Drev (Pro), forseglet med en gendannelseskode, kun du har. [Hent den i App Store.](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=blog&mt=8)

## Hvad er de sikrere alternativer?

Vil du gerne have en digital paskopi ved hånden, når du rejser - som backup, hvis dit fysiske pas bliver væk eller stjålet - findes der løsninger, der giver reel sikkerhed uden det store besvær.

To ting er værd at holde adskilt: at gemme en kopi til eget brug, og at forvente, at nogen accepterer den som legitimation. Det er ikke det samme, og [hvor en digital paskopi bliver accepteret](https://traveldocumentvault.com/da/blog/digital-passport-copy-valid/) viser, hvor grænsen går.

**Krypterede kodeordshåndteringer**

1Password og Bitwarden lader dig begge gemme dokumentcanninger som vedhæftede filer. De bruger zero-knowledge-kryptering - udbyderen kan ikke læse dit indhold, selv hvis de ville. Dine dokumenter bliver krypteret på din enhed, før noget sendes til deres servere. Det er et reelt løft fra et almindeligt cloud-fotobibliotek.

**Krypterede apps på enheden**

Apps bygget specifikt til dette - som [Travel Document Vault](https://traveldocumentvault.com) - holder alt på din telefon med stærk kryptering og uden krav om konto. Du får valgfri krypteret backup til din egen iCloud eller Google Drev (Pro), og der er ingen server at bryde ind i, fordi din digitale paskopi aldrig forlader enheden. Den eneste afvejning er, at hvis du mister telefonen uden en backup, forsvinder den digitale kopi med den, selvom dit fysiske pas stadig er hos dig.

**Krypteret cloud-lagring med klientsidige nøgler**

Tresorit og Proton Drive tilbyder klientsidig kryptering til cloud-lagring, så udbyderen ikke kan læse dine filer, mere end en kodeordshåndtering kan. Du får cloud-bekvemmelighed med markant stærkere sikkerhed for pasbilleder end Google Fotos.

## Bedste praksis, hvis du fortsætter med at bruge Google Fotos

Mange vil fortsætte med at bruge Google Fotos til dette - bekvemmeligheden er reel. Er det dig, gør disse trin faktisk en forskel for risikoen:

- **Slå totrinsgodkendelse til.** Det er det enkeltstående vigtigste, du kan gøre. Brug en autentificeringsapp, ikke sms - sms-baseret 2FA er bedre end intet, men lettere at opsnappe.
- **Brug et stærkt, unikt kodeord til din Google-konto.** Genbrug af kodeord på tværs af tjenester er, hvordan de fleste konti reelt bliver overtaget.
- **Gennemgå dine tredjepartsapps' tilladelser.** Gå til myaccount.google.com → Sikkerhed → Tredjepartsapps med adgang til kontoen, og fjern alt, der ikke behøver at være der.
- **Tjek dine aktive enheder og sessioner.** Fjern alt, du ikke genkender.
- **Opret et privat album til følsomme dokumenter** i stedet for at lade dem ligge løst i din hovedstrøm af billeder. Det stopper ikke et databrud, men det mindsker utilsigtet eksponering, når nogen kigger med over skulderen.

For flere tips til at holde dine rejsedokumenter organiserede og sikre, kan du kigge på vores [rejsedokument-tips på bloggen](https://traveldocumentvault.com/da/blog/) - herunder en praktisk guide til, hvordan du [organiserer familiens rejsedokumenter](https://traveldocumentvault.com/da/blog/how-to-organise-family-travel-documents/) inden næste rejse.

**Før du stoler på det her:** det er en blog, ikke en officiel kilde. Regler og detaljer ændrer sig, og din situation kan være en anden. Vi kontrollerer det, vi udgiver, og vi kan stadig tage fejl eller være forældede. Hvis noget her har betydning for dine planer, så få det bekræftet hos den ansvarlige myndighed, før du gør noget.

## Ofte stillede spørgsmål

### Er det sikkert at gemme et pasbillede i Google Fotos?

Det er bekvemt, men Google Fotos blev ikke bygget til følsomme identitetsdokumenter. Din canning ligger på Googles servere, bliver behandlet af deres automatiserede systemer og er kun beskyttet af den sikkerhed, din Google-konto tilfældigvis har. Bliver din konto kompromitteret (via phishing, et genbrugt kodeord, eller et databrud et andet sted), følger din passcanning med. For et dokument så følsomt som et pas er en dedikeret krypteret opbevaringsløsning et klogere valg. Bruger du alligevel Google Fotos, så slå totrinsgodkendelse til, og brug et unikt kodeord til din Google-konto.

### Scanner Google indholdet af billeder gemt i Google Fotos?

Ja. Automatiserede systemer behandler dine billeder til ting som ansigtsgenkendelse, objektgenkendelse og søgeindeksering. Googles privatlivspolitik tillader også, at indhold bruges til at forbedre deres tjenester. Intet menneske læser dit pas - men dine dokumentdata bliver behandlet af Googles infrastruktur, ikke bare passivt liggende på en server.

### Hvad er den sikreste måde at opbevare en digital paskopi på?

Krypteret opbevaring på enheden er dit sikreste valg - apps, der holder dine canninger på telefonen med stærk kryptering og uden cloud-upload. Ingen tredjepartsserver rører nogensinde dine pasoplysninger. Vil du også have cloud-adgang, er en zero-knowledge-krypteret kodeordshåndtering som 1Password eller Bitwarden et solidt mellemtrin.

### Kan nogen stjæle min identitet fra en passcanning?

Ja, realistisk set. Dit navn, fødselsdato, nationalitet, pasnummer og udløbsdato tilsammen er nok til at forsøge identitetstyveri, søge om kredit i dit navn eller udføre et meget overbevisende phishing-angreb. Risikoen stiger, hvis de data bliver kombineret med andre personlige oplysninger fra andre databrud - hvilket sker oftere, end de fleste regner med.

### Er iCloud sikrere end Google Fotos til opbevaring af passcanninger?

På et strukturelt niveau ligner de hinanden meget. Begge gemmer billeder på cloud-servere, som udbyderen styrer, og begge behandler billeder gennem automatiserede systemer. Apples Avanceret databeskyttelse (iOS 16.2+) udvider end-to-end-kryptering til iCloud-fotos, når den er slået til, hvilket hæver barren mærkbart - men den er slået fra som standard, og de fleste brugere har ikke aktiveret den. Den større faktor for begge platforme er dit kontokodeord, og om totrinsgodkendelse er aktiveret. Specifikt til pasopbevaring forbliver en dedikeret krypteret app på enheden det stærkere valg, uanset platform.

## Relaterede artikler

[Familierejser7 min læsning · 5. feb. 2026Sådan organiserer du familiens rejsedokumenter (inden næste rejse)](https://traveldocumentvault.com/da/blog/how-to-organise-family-travel-documents/)

[Stifterens historie7 min læsning · 3. jan. 2026Hvorfor jeg byggede Travel Document Vault: For den forælder, der husker alt](https://traveldocumentvault.com/da/blog/why-i-built-travel-document-vault/)
