# Backup spiegato: backup locali, Vault Export e Cloud Backup | Travel Document Vault

> I tre modi in cui i tuoi dati sono protetti: backup locali automatici, esportazione del Vault (.tdvault) e backup cloud crittografato con Pro.

Source: https://traveldocumentvault.com/it/faq/backup-explained/

---

Travel Document Vault offre tre livelli di protezione. Ecco esattamente cosa fa ognuno, per chi è, e come ripristinare da esso.

## Tre meccanismi, un unico obiettivo

I Suoi documenti si trovano sul dispositivo. Non vanno sui nostri server. I tre meccanismi di backup servono a scopi diversi, e potete usarli tutti e tre contemporaneamente.

- **Backup locali automatici** — avvengono silenziosamente in background, nessuna azione richiesta.
- **Vault Export (.tdvault)** — un file crittografato portabile che salvate dove volete.
- **Cloud Backup (Pro)** — una copia crittografata automatica nel vostro iCloud o Google Drive personale.

## A colpo d'occhio

| Meccanismo | Livello | Automatico? | Dove si trova | Come ripristinare |
|---|---|---|---|---|
| **Backup locali automatici** | Gratuito | Sì, ogni pochi minuti | Sul Suo dispositivo | Impostazioni, Ripristina backup locale |
| **Vault Export (.tdvault)** | Gratuito | No, manuale | Dove lo salva: File, iCloud Drive, Google Drive, email | Impostazioni, Importa Vault |
| **Cloud Backup** | Pro | Sì, automatico | Il Suo iCloud (iOS) o Google Drive (Android) | Impostazioni, Cloud Backup, Ripristina da backup |

## Backup locali automatici

Mentre l'app è aperta e fa modifiche, essa crea silenziosamente uno snapshot del Suo Vault ogni pochi minuti. Non deve fare nulla. L'app conserva i 10 snapshot più recenti e rimuove quelli più vecchi per risparmiare spazio.

In Impostazioni vedrà una riga come *Ultimo backup: 2 ore fa, 12 documenti*. Questo le dice l'età dello snapshot più recente e quanti documenti ha acquisito. È lì per rassicurarla che una copia recuperabile è sempre a portata di mano.

**Per ripristinare:** Impostazioni, poi Ripristina backup locale. Scelga uno snapshot dall'elenco e confermi. Il ripristino sostituisce i Suoi dati attuali con il contenuto dello snapshot.

Questi snapshot locali rimangono sul Suo dispositivo. Un backup di sistema (iCloud Backup, Google Backup) reinstalla l'app ma non può ripristinarli su un nuovo telefono, perché la chiave di crittografia non lascia mai il dispositivo originale. Per spostare il Suo Vault, usi il cloud backup (Pro) o Vault Export gratuito.

## Vault Export (.tdvault) — gratuito per tutti

Vault Export crea un unico file crittografato e protetto da password contenente ogni profilo, documento e allegato nel Suo Vault. Scelga dove salvarlo: app File, iCloud Drive, Google Drive, oppure lo condivida tramite AirDrop o email.

Il file viene crittografato sul dispositivo prima di lasciare l'app. Solo la password che imposta al momento dell'esportazione può sbloccarlo.

**Per esportare:** Impostazioni, Esporta Vault, poi segua i prompt e scelga una destinazione.

**Per ripristinare:** Impostazioni, Importa Vault, poi selezioni il Suo file .tdvault e inserisca la password. L'importazione funziona su qualsiasi dispositivo, anche tra piattaforme diverse (iOS verso Android o viceversa). La fedeltà del round-trip è completa: tutti i nomi dei documenti, le date, gli avvisi di scadenza, i colori, gli allegati e le note vengono preservati esattamente.

Questo è gratuito per tutti gli utenti. Nessun abbonamento Pro necessario.

## Cloud Backup (Pro)

Cloud Backup è l'opzione Pro. Una volta abilitato, l'app conserva automaticamente una copia continuamente aggiornata del Suo Vault nel Suo account iCloud (iOS) o nel Suo Google Drive (Android). I Suoi dati non vengono mai visualizzati dai nostri server. Apple e Google vedono solo il testo cifrato.

Il Vault viene crittografato da capo a capo sul Suo dispositivo usando AES-256-GCM prima del caricamento. La chiave è derivata dal Suo codice di ripristino, una passphrase di 24 caratteri che l'app genera quando abilita il cloud backup. Conservi il Suo codice di ripristino in un luogo sicuro. Se lo perde, il backup crittografato diventa irrecuperabile.

**Per ripristinare:** Su un nuovo dispositivo connesso allo stesso Apple ID o account Google, apra l'app, vada in Impostazioni, Cloud Backup, Ripristina da backup, e inserisca il Suo codice di ripristino.

Cloud Backup è l'opzione più pratica: funziona automaticamente una volta abilitato, e ripristinare su un nuovo telefono richiede un tap più il Suo codice di ripristino.

## Quale dovrei usare?

La risposta breve: li usi tutti e tre.

I backup locali automatici la proteggono da eliminazioni accidentali o problemi dell'app in questo momento, senza che debba pensarci. Sono sempre attivi.

Vault Export è la scelta giusta prima di un cambio dispositivo, un aggiornamento importante dell'app, o ogni volta che vuole una copia portabile salvata da qualche parte indipendente dal Suo telefono. Lo faccia almeno una volta e conservi il file in un luogo sicuro.

Cloud Backup (Pro) è la scelta giusta se desidera una protezione automatica fuori dal dispositivo senza gestire i file manualmente. È particolarmente preziosa quando passa a un nuovo telefono: installi l'app, inserisca il Suo codice di ripristino, e il Suo Vault viene ripristinato in pochi secondi.

Nessun singolo livello è un motivo per saltare gli altri. Gli account cloud possono andare persi, i codici di ripristino possono essere dimenticati, e i telefoni possono essere rubati prima che un backup locale avvenga. La combinazione di tutti e tre le dà la protezione più forte.

### Guide correlate

- [Come esportare e importare la vostra Vault - procedura dettagliata](https://traveldocumentvault.com/it/faq/export-import/)
- [Che cos'è il mio codice di ripristino? - guida completa al suo archiviazione sicura](https://traveldocumentvault.com/it/faq/recovery-code/)
- [Cloud Backup - come funziona la crittografia da capo a capo](https://traveldocumentvault.com/it/cloud-backup/)

## Ottieni Travel Document Vault

Download gratuito. Vault Export e backup locali sono inclusi per tutti. Pro aggiunge cloud backup, profili illimitati, esportazione PDF combinata, e altro ancora. Acquisto una tantum, nessun abbonamento.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
