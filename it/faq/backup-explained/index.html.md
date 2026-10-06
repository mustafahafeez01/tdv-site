# Backup spiegato: backup locali, Vault Export e Cloud Backup | Travel Document Vault

> I tre modi in cui i tuoi dati sono protetti: backup locali automatici, esportazione del Vault (.tdvault) e backup cloud crittografato con Pro.

Source: https://traveldocumentvault.com/it/faq/backup-explained/

---

Travel Document Vault offre tre livelli di protezione. Ecco esattamente cosa fa ognuno, per chi è, e come ripristinare da esso.

## Tre meccanismi, un unico obiettivo

Travel Document Vault offre tre livelli di protezione: (1) Backup locali automatici, creati ogni pochi minuti sul dispositivo senza costi. (2) Vault Export, un file di backup crittografato gratuito (.tdvault) che salva dove sceglie. (3) Cloud Backup, un'opzione Pro che conserva una copia crittografata da capo a capo nel Suo iCloud o Google Drive personale.

- **Backup locali automatici** — avvengono silenziosamente in background, nessuna azione richiesta.
- **Vault Export (.tdvault)** — un file crittografato portabile che salvate dove volete.
- **Cloud Backup (Pro)** — una copia crittografata automatica nel vostro iCloud o Google Drive personale.

## A colpo d'occhio

| Meccanismo | Livello | Automatico? | Dove si trova | Come ripristinare |
|---|---|---|---|---|
| **Backup locali automatici** | Gratuito | Sì, ogni pochi minuti | Sul Suo dispositivo | Impostazioni, Ripristina backup locale |
| **Vault Export (.tdvault)** | Gratuito | No, manuale | Dove lo salva: File, iCloud Drive, Google Drive, email | Impostazioni, Importa backup |
| **Cloud Backup** | Pro | Sì, automatico | Il Suo iCloud (iOS) o Google Drive (Android) | Impostazioni, Cloud Backup, Ripristina da backup |

## Backup locali automatici

Mentre l’app è aperta e apporta modifiche, crea snapshot del Suo vault ogni pochi minuti. Non deve fare nulla. L’app conserva alcuni degli snapshot più recenti e rimuove quelli più vecchi per risparmiare spazio. L’esportazione del vault crea un file crittografato portatile che può salvare fuori dal dispositivo.

In Impostazioni vedrà una riga come *Ultimo backup: 2 ore fa, 12 documenti*. Questo le dice l'età dello snapshot più recente e quanti documenti ha acquisito. Mostra l’ultimo snapshot locale disponibile. Gli snapshot locali non contengono copie indipendenti dei file allegati.

**Per ripristinare:** Impostazioni, poi Ripristina backup locale. Scelga uno snapshot dall'elenco e confermi. Il ripristino sostituisce i Suoi dati attuali con il contenuto dello snapshot.

Questi snapshot locali rimangono sul Suo dispositivo. Un backup di sistema (iCloud Backup, Google Backup) reinstalla l'app ma non può ripristinarli su un nuovo telefono, perché i normali backup del telefono non trasferiscono la chiave di crittografia legata al dispositivo. L’esportazione del vault include una copia di quella chiave crittografata con una password. Per spostare il Suo Vault, usi il cloud backup (Pro) o Vault Export gratuito.

## Vault Export (.tdvault) — gratuito per tutti

L’esportazione del vault raccoglie i dati supportati del vault e gli allegati disponibili in un unico file crittografato e protetto da password. Ogni esportazione ha un limite di dimensioni. Scelga dove salvarlo: app File, iCloud Drive, Google Drive, oppure lo condivida tramite AirDrop o email.

Il file viene crittografato sul dispositivo prima di lasciare l'app. Solo la password che imposta al momento dell'esportazione può sbloccarlo.

**Per esportare:** Impostazioni, Esporta vault, poi segua i prompt e scelga una destinazione.

**Per ripristinare:** Impostazioni, Importa backup, poi selezioni il file .tdvault, confermi e inserisca la password. L’importazione sostituisce tutti i dati già presenti sul telefono. Funziona sui dispositivi supportati, anche tra piattaforme diverse (iOS verso Android o viceversa). Le esportazioni conservano i campi supportati del vault e alcune impostazioni. Gli allegati mancanti o le note illeggibili possono essere omessi. Controlli i documenti e i promemoria importati. Il blocco dell’app e altre impostazioni del dispositivo restano locali.

Questo è gratuito per tutti gli utenti. Non è necessario acquistare Pro.

## Cloud Backup (Pro)

Backup su Cloud è una funzione Pro. La attivi per conservare una copia automatica nel Suo iCloud (iOS) o Google Drive (Android). L’app la aggiorna mentre è aperta e connessa. Non la riceviamo. I contenuti dei documenti sono crittografati. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non lo sono.

I contenuti dei documenti vengono crittografati da capo a capo sul dispositivo con AES-256-GCM prima del caricamento. Le chiavi di crittografia cloud si sbloccano con il codice di recupero, una passphrase di 24 caratteri che l’app genera quando imposta il PIN. Conservi il codice al sicuro. Se perde tutte le copie del codice e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo recuperare il backup crittografato.

**Per ripristinare:** Usi un dispositivo supportato sulla stessa piattaforma e lo stesso Apple ID o account Google. Con il backup disattivato, apra Impostazioni, Backup su Cloud. Scelga Ripristina da Backup, selezioni il backup, inserisca il codice di recupero e confermi. Il ripristino sostituisce il contenuto locale del vault.

Backup su Cloud funziona automaticamente mentre l’app è aperta e connessa. Ripristini da Impostazioni con il codice di recupero, usando lo stesso account cloud e un dispositivo supportato sulla stessa piattaforma.

## Quale dovrei usare?

La risposta breve: li usi tutti e tre.

I backup locali automatici la proteggono da eliminazioni accidentali o problemi dell'app in questo momento, senza che debba pensarci. Sono sempre attivi.

I backup locali automatici possono aiutare a recuperare i dati recenti del vault quando sono disponibili snapshot. Vengono eseguiti mentre l’app è aperta e non sostituiscono un backup indipendente dei documenti.

Cloud Backup (Pro) è la scelta giusta se desidera una protezione automatica fuori dal dispositivo senza gestire i file manualmente. Quando passa a un telefono supportato sulla stessa piattaforma, usi lo stesso account cloud, selezioni il backup nella procedura di ripristino, inserisca il codice di recupero e confermi. Il ripristino sostituisce il contenuto locale del vault.

Nessun singolo livello è un motivo per saltare gli altri. Gli account cloud possono andare persi, i codici di ripristino possono essere dimenticati, e i telefoni possono essere rubati prima che un backup locale avvenga. La combinazione di tutti e tre le dà la protezione più forte.

### Guide correlate

- [Come esportare e importare la vostra Vault - procedura dettagliata](https://traveldocumentvault.com/it/faq/export-import/)
- [Che cos'è il mio codice di ripristino? - guida completa al suo archiviazione sicura](https://traveldocumentvault.com/it/faq/recovery-code/)
- [Cloud Backup - come funziona la crittografia da capo a capo](https://traveldocumentvault.com/it/cloud-backup/)

## Risposte Rapide

Quali opzioni di backup offre Travel Document Vault? Travel Document Vault offre tre livelli di protezione: (1) Backup locali automatici, creati ogni pochi minuti sul dispositivo senza costi. (2) Vault Export, un file di backup crittografato gratuito (.tdvault) che salva dove sceglie. (3) Cloud Backup, un'opzione Pro che conserva una copia crittografata da capo a capo nel Suo iCloud o Google Drive personale. Vault Export è gratuito? Questo è gratuito per tutti gli utenti. Non è necessario acquistare Pro. Qual è la differenza tra backup locali e Vault Export? Mentre l’app è aperta e apporta modifiche, crea snapshot del Suo vault ogni pochi minuti. Non deve fare nulla. L’app conserva alcuni degli snapshot più recenti e rimuove quelli più vecchi per risparmiare spazio. L’esportazione del vault crea un file crittografato portatile che può salvare fuori dal dispositivo. Che cos'è il cloud backup e chi ne ha bisogno? Backup su Cloud è una funzione Pro. La attivi per conservare una copia automatica nel Suo iCloud (iOS) o Google Drive (Android). L’app la aggiorna mentre è aperta e connessa. Non la riceviamo. I contenuti dei documenti sono crittografati. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non lo sono.

## Ottieni Travel Document Vault

Download gratuito. Vault Export e backup locali sono inclusi per tutti. Pro aggiunge cloud backup, profili illimitati, esportazione PDF combinata, e altro ancora. Acquisto una tantum, nessun abbonamento.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
