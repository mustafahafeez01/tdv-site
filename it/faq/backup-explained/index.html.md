# Backup spiegato: backup locali, esportazione del caveau e Backup su Cloud | Travel Document Vault

> I tre modi in cui i tuoi dati sono protetti: backup locali automatici, esportazione del Vault (.tdvault) e backup cloud crittografato con Pro.

Source: https://traveldocumentvault.com/it/faq/backup-explained/

---

Travel Document Vault ha tre livelli di protezione. Ecco cosa fa ciascuno, per chi è pensato e come ripristinare i dati da ciascuno.

## Tre meccanismi, un unico obiettivo

Travel Document Vault ha tre livelli di protezione: (1) Backup locali automatici, creati sul dispositivo ogni pochi minuti, senza costi. (2) Esportazione del vault, un file di backup crittografato gratuito (.tdvault) che salvi dove vuoi. (3) Backup cloud, un'opzione Pro che tiene una copia crittografata end-to-end nel tuo iCloud o Google Drive personale.

- **Backup locali automatici** — avvengono in silenzio, in background: non devi fare nulla.
- **Esportazione del vault (.tdvault)** — un file crittografato portatile, da salvare dove preferisci.
- **Backup cloud (Pro)** — una copia crittografata automatica sul tuo iCloud o Google Drive personale.

## A colpo d'occhio

| Meccanismo | Livello | Automatico? | Dove si trova | Come ripristinare |
|---|---|---|---|---|
| **Backup locali automatici** | Gratuito | Sì, ogni pochi minuti | Sul tuo dispositivo | Impostazioni, Ripristina backup locale |
| **Esportazione del vault (.tdvault)** | Gratuito | No, manuale | Dove lo salvi: File, iCloud Drive, Google Drive, email | Impostazioni, Importa backup |
| **Backup cloud** | Pro | Sì, automatico | Il tuo iCloud (iOS) o Google Drive (Android) | Impostazioni, Backup su Cloud, Ripristina da Backup |

## Backup locali automatici

Mentre l’app è aperta e fai modifiche, crea snapshot del tuo vault ogni pochi minuti. Non devi fare nulla. L’app tiene alcuni degli snapshot più recenti e rimuove i più vecchi per risparmiare spazio. L’esportazione del vault crea un file crittografato portatile, che puoi salvare fuori dal dispositivo.

In Impostazioni vedrai una riga come *Ultimo backup: 2 ore fa, 12 documenti*. Questo ti dice l'età dello snapshot più recente e quanti documenti contiene. Mostra l’ultimo snapshot locale disponibile. Gli snapshot locali non contengono copie indipendenti dei file allegati.

**Per ripristinare:** Impostazioni, poi Ripristina backup locale. Scegli uno snapshot dall'elenco e conferma. Il ripristino sostituisce i tuoi dati attuali con il contenuto dello snapshot.

Questi snapshot locali restano sul tuo dispositivo. Un backup di sistema (iCloud Backup, Google Backup) reinstalla l'app ma non può ripristinarli su un nuovo telefono, perché i normali backup del telefono non trasferiscono la chiave di crittografia legata al dispositivo. L’esportazione del vault include una copia di quella chiave, crittografata con una password. Per spostare il tuo vault, usa il backup cloud (Pro) o l’esportazione del vault, gratuita.

## Esportazione del vault (.tdvault) — gratuita per tutti

L’esportazione raccoglie i dati supportati del vault e gli allegati disponibili in un unico file crittografato e protetto da password. Ogni esportazione ha un limite di dimensioni. Scegli dove salvarlo: app File, iCloud Drive, Google Drive, oppure condividilo con AirDrop o email.

Il file viene crittografato sul dispositivo prima di lasciare l'app. Solo la password che imposti al momento dell'esportazione può sbloccarlo.

**Per esportare:** Impostazioni, Esporta vault, poi segui le istruzioni e scegli una destinazione.

**Per ripristinare:** Impostazioni, Importa backup, poi seleziona il file .tdvault, conferma e inserisci la password. L’importazione sostituisce tutti i dati già presenti sul telefono. Funziona sui dispositivi supportati, anche tra piattaforme diverse (da iOS ad Android e viceversa). Le esportazioni conservano i campi supportati del vault e alcune impostazioni. Gli allegati mancanti o le note illeggibili possono essere omessi. Controlla i documenti e i promemoria importati. Il blocco dell’app e altre impostazioni del dispositivo restano locali.

È gratuita per tutti gli utenti. Non è necessario acquistare Pro.

## Backup cloud (Pro)

Il backup cloud è una funzione Pro. Attivalo per tenere una copia automatica nel tuo iCloud (iOS) o Google Drive (Android). L’app la aggiorna mentre è aperta e connessa. Non la riceviamo. I contenuti dei documenti sono crittografati. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non lo sono.

I contenuti dei documenti vengono crittografati end-to-end sul dispositivo con AES-256-GCM prima del caricamento. Le chiavi di crittografia cloud si sbloccano con il codice di recupero, una passphrase di 24 caratteri che l’app genera quando imposti il PIN. Conserva il codice al sicuro. Se perdi tutte le copie del codice e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo recuperare il backup crittografato.

**Per ripristinare:** usa un dispositivo supportato sulla stessa piattaforma e lo stesso Apple ID o account Google. Con il backup disattivato, apri Impostazioni, Backup su Cloud. Scegli Ripristina da Backup, seleziona il backup, inserisci il codice di recupero e conferma. Il ripristino sostituisce il contenuto locale del vault.

Il backup cloud funziona in automatico mentre l’app è aperta e connessa. Ripristina da Impostazioni con il codice di recupero, usando lo stesso account cloud e un dispositivo supportato sulla stessa piattaforma.

## Quale dovrei usare?

La risposta breve: usali tutti e tre.

I backup locali automatici ti proteggono da eliminazioni accidentali o problemi dell'app in questo momento, senza che tu debba pensarci. Sono sempre attivi.

I backup locali automatici possono aiutarti a recuperare i dati recenti del vault quando ci sono snapshot disponibili. Vengono eseguiti mentre l’app è aperta e non sostituiscono un backup indipendente dei documenti.

Il backup cloud (Pro) è la scelta giusta se vuoi una protezione automatica fuori dal dispositivo, senza gestire i file a mano. Quando passi a un telefono supportato sulla stessa piattaforma, usa lo stesso account cloud, seleziona il backup nella procedura di ripristino, inserisci il codice di recupero e conferma. Il ripristino sostituisce il contenuto locale del vault.

Nessun livello da solo è un buon motivo per saltare gli altri. Gli account cloud possono andare persi, i codici di recupero si possono dimenticare e i telefoni possono essere rubati prima che avvenga un backup locale. Tutti e tre insieme ti danno la protezione più solida.

### Guide correlate

- [Come esportare e importare il vault: procedura dettagliata](https://traveldocumentvault.com/it/faq/export-import/)
- [Che cos'è il mio codice di recupero? Guida completa per conservarlo al sicuro](https://traveldocumentvault.com/it/faq/recovery-code/)
- [Backup cloud: come funziona la crittografia end-to-end](https://traveldocumentvault.com/it/cloud-backup/)

## Risposte rapide

Quali opzioni di backup offre Travel Document Vault? Travel Document Vault ha tre livelli di protezione: (1) Backup locali automatici, creati sul dispositivo ogni pochi minuti, senza costi. (2) Esportazione del vault, un file di backup crittografato gratuito (.tdvault) che salvi dove vuoi. (3) Backup cloud, un'opzione Pro che tiene una copia crittografata end-to-end nel tuo iCloud o Google Drive personale. L’esportazione del caveau è gratuita? È gratuita per tutti gli utenti. Non è necessario acquistare Pro. Qual è la differenza tra backup locali ed esportazione del caveau? Mentre l’app è aperta e fai modifiche, crea snapshot del tuo vault ogni pochi minuti. Non devi fare nulla. L’app tiene alcuni degli snapshot più recenti e rimuove i più vecchi per risparmiare spazio. L’esportazione del vault crea un file crittografato portatile, che puoi salvare fuori dal dispositivo. Che cos'è il backup cloud e chi ne ha bisogno? Il backup cloud è una funzione Pro. Attivalo per tenere una copia automatica nel tuo iCloud (iOS) o Google Drive (Android). L’app la aggiorna mentre è aperta e connessa. Non la riceviamo. I contenuti dei documenti sono crittografati. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non lo sono.

## Ottieni Travel Document Vault

Download gratuito. L’esportazione del vault e i backup locali sono inclusi per tutti. Pro aggiunge il backup cloud, profili illimitati, esportazione PDF combinata e altro ancora. Acquisto una tantum, nessun abbonamento.

![Scarica su App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
