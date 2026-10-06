# Sikkerhedskopiering forklaret: Lokale sikkerhedskopier, Vault Export og Cloud Backup | Travel Document Vault

> De tre måder dine data beskyttes på: automatiske lokale sikkerhedskopier, eksport af dit vault (.tdvault) og valgfri krypteret cloud-backup med Pro.

Source: https://traveldocumentvault.com/da/faq/backup-explained/

---

Travel Document Vault giver dig tre beskyttelseslag. Her får du en præcis gennemgang af, hvad hver enkelt gør, hvem den er til, og hvordan du gendanner fra den.

## Tre mekanismer, ét mål

Travel Document Vault tilbyder tre beskyttelseslag: (1) Automatiske lokale sikkerhedskopier, der oprettes hvert par minutter på din enhed uden beregning. (2) Vault Export, en gratis manuel krypteret sikkerhedskopifil (.tdvault), du gemmer, hvor du vil. (3) Cloud Backup, en Pro-mulighed, der holder en ende-til-ende-krypteret kopi i din egen iCloud eller Google Drive.

- **Automatiske lokale sikkerhedskopier** - sker stille i baggrunden, ingen handling påkrævet.
- **Vault Export (.tdvault)** - en transportabel krypteret fil, du gemmer, hvor du vil.
- **Cloud Backup (Pro)** - en automatisk krypteret kopi i din egen iCloud eller Google Drive.

## Et overblik

| Mekanisme | Niveau | Automatisk? | Hvor den findes | Sådan gendanner du |
|---|---|---|---|---|
| **Automatiske lokale sikkerhedskopier** | Gratis | Ja, hvert par minutter | På din enhed | Indstillinger, Gendan lokal sikkerhedskopi |
| **Vault Export (.tdvault)** | Gratis | Nej, manuel | Hvor du end gemmer den: Filer, iCloud Drive, Google Drive, e-mail | Indstillinger, Importér sikkerhedskopi |
| **Cloud Backup** | Pro | Ja, automatisk | Din egen iCloud (iOS) eller Google Drive (Android) | Indstillinger, Cloud Backup, Gendan fra sikkerhedskopi |

## Automatiske lokale sikkerhedskopier

Mens appen er åben, og du foretager ændringer, tager den stille et øjebliksbillede af dit vault hvert par minutter. Du behøver ikke gøre noget. Appen beholder de seneste få øjebliksbilleder og fjerner ældre for at spare plads. Vault Export opretter en transportabel krypteret fil, du kan gemme uden for enheden.

I Indstillinger ser du en linje som *Seneste sikkerhedskopi: for 2 timer siden, 12 dokumenter*. Den fortæller dig, hvor gammelt det seneste øjebliksbillede er, og hvor mange dokumenter det indeholder. Den viser det seneste tilgængelige lokale øjebliksbillede. Lokale øjebliksbilleder indeholder ikke uafhængige kopier af vedhæftede filer.

**Sådan gendanner du:** Indstillinger, derefter Gendan lokal sikkerhedskopi. Vælg et øjebliksbillede fra listen, og bekræft. Gendannelse erstatter dine nuværende data med indholdet af øjebliksbilledet.

Disse lokale øjebliksbilleder bliver på din enhed. En systemsikkerhedskopi (iCloud Backup, Google Backup) geninstallerer appen, men kan ikke gendanne dem på en ny telefon, fordi almindelige telefonbackups ikke overfører den enhedsbundne krypteringsnøgle. Vault Export indeholder en adgangskodekrypteret kopi af den nøgle. For at flytte dit vault skal du bruge Cloud Backup (Pro) eller den gratis Vault Export.

## Vault Export (.tdvault) – gratis for alle

Vault Export samler understøttede hvælvingsposter og tilgængelige vedhæftninger i én krypteret, adgangskodebeskyttet fil. Hver eksport har en størrelsesgrænse. Du vælger selv, hvor du gemmer den: Filer-appen, iCloud Drive, Google Drive, eller del den via AirDrop eller e-mail.

Filen krypteres på enheden, før den forlader appen. Kun den adgangskode, du angiver ved eksport, kan låse den op.

**Sådan eksporterer du:** Indstillinger, Eksportér hvælving, følg derefter vejledningen, og vælg et mål.

**Sådan gendanner du:** Indstillinger, Importér sikkerhedskopi, vælg din .tdvault-fil, bekræft, og indtast adgangskoden. Import erstatter alt, der allerede ligger på telefonen. Import fungerer på understøttede enheder, også på tværs af platforme (iOS til Android eller omvendt). Eksporter bevarer understøttede hvælvingsfelter og udvalgte indstillinger. Manglende vedhæftninger eller ulæselige noter kan blive udeladt. Tjek dine importerede dokumenter og påmindelser. Applås og andre enhedsindstillinger forbliver lokale.

Dette er gratis for alle brugere. Intet Pro-køb er nødvendigt.

## Cloud Backup (Pro)

Cloud Backup er en Pro-funktion. Slå den til for at gemme en automatisk kopi i din egen iCloud (iOS) eller Google Drive (Android). Appen opdaterer den, mens den er åben og har forbindelse. Vi modtager den ikke. Dokumentindhold er krypteret. Backupmetadata, såsom enhedsnavne, antal og tidsstempler, er ikke krypteret.

Dokumentindhold krypteres ende-til-ende på din enhed med AES-256-GCM før upload. Krypteringsnøglerne til skyen låses op med din gendannelseskode, en adgangsfrase på 24 tegn, som appen genererer, når du indstiller din PIN. Opbevar din gendannelseskode et sikkert sted. Hvis du mister alle kopier af koden og adgang til alle enheder, der stadig kan låse hvælvingen op, kan vi ikke gendanne den krypterede backup.

**Sådan gendanner du:** Brug en understøttet enhed på samme platform med samme Apple-ID eller Google-konto. Åbn Indstillinger, Skybakup, mens backup er slået fra. Vælg Gendann fra sikkerhedskopi, vælg din backup, indtast gendannelseskoden, og bekræft. Gendannelse erstatter indholdet af den lokale hvælving.

Cloud Backup kører automatisk, mens appen er åben og har forbindelse. Gendan via Indstillinger med din gendannelseskode, samme skykonto og en understøttet enhed på samme platform.

## Hvilken skal jeg bruge?

Det korte svar: brug alle tre.

Automatiske lokale sikkerhedskopier kan hjælpe med at gendanne nyere hvælvingsposter, når øjebliksbilleder er tilgængelige. De kører, mens appen er åben, og erstatter ikke en uafhængig dokumentbackup.

Vault Export er det rigtige at gøre før et enhedsskift, en større app-opdatering, eller når du ønsker en transportabel kopi gemt et sted uafhængigt af din telefon. Gør det mindst én gang, og opbevar filen et sikkert sted.

Cloud Backup (Pro) er det rigtige valg, hvis du vil have automatisk beskyttelse uden for enheden uden selv at skulle håndtere filer. Når du skifter til en understøttet telefon på samme platform, skal du bruge samme skykonto, vælge din backup i gendannelsesforløbet, indtaste gendannelseskoden og bekræfte. Gendannelse erstatter indholdet af den lokale hvælving.

Intet enkelt lag er en grund til at springe de andre over. Cloud-konti kan mistes, gendannelseskoder kan glemmes, og telefoner kan blive stjålet, før en lokal sikkerhedskopi når at køre. Kombinationen af alle tre giver dig den stærkeste beskyttelse.

### Relaterede guider

- [Sådan eksporterer og importerer du dit vault - trin for trin-gennemgang](https://traveldocumentvault.com/da/faq/export-import/)
- [Hvad er min gendannelseskode? - fuld guide til sikker opbevaring](https://traveldocumentvault.com/da/faq/recovery-code/)
- [Cloud Backup - sådan fungerer ende-til-ende-kryptering](https://traveldocumentvault.com/da/cloud-backup/)

## Hent Travel Document Vault

Gratis download. Vault Export og lokale sikkerhedskopier er inkluderet for alle. Pro tilføjer cloud-sikkerhedskopiering, ubegrænsede profiler, kombineret PDF-eksport og mere. Engangskøb, intet abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Hent det på Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
