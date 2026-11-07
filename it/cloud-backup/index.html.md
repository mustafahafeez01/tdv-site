# Backup Cloud Crittografato | Suo Cloud. Sua Chiave. | Travel Document Vault

> Backup crittografato (Pro) sul tuo iCloud o Google Drive. Ripristina con il codice di recupero, che non conserviamo. Il vault salvato funziona offline.

Source: https://traveldocumentvault.com/it/cloud-backup/

---

## Come funziona il backup crittografato

I contenuti dei tuoi documenti vengono crittografati prima di arrivare nel cloud.

![Diagramma del Backup Cloud, una funzione Pro: i contenuti dei documenti vengono crittografati sul dispositivo, il file crittografato va al tuo iCloud o Google Drive personale, solo tu hai il codice di recupero e, su un nuovo dispositivo, scegli Ripristina da Backup, inserisci il codice e tocchi Ripristina](https://traveldocumentvault.com/assets/figures/cloud-backup-flow-it.jpg) 1

### Crittografia sul dispositivo

I contenuti dei tuoi documenti vengono crittografati sul dispositivo con AES-256-GCM. PBKDF2 con 600.000 iterazioni ricava la chiave che sblocca la chiave principale del vault, generata in modo casuale.

AES-256-GCM crittografa i contenuti dei documenti. L’app non carica il codice di recupero sui nostri server né su quelli di Apple o Google. Proteggi comunque il telefono con un codice di accesso solido e il Blocco PIN dell’app: la crittografia protegge il file, il codice di accesso protegge il telefono.

2

### Caricamento nel tuo cloud

Il backup crittografato va al tuo account iCloud o Google Drive personale, non ai nostri server. È il tuo cloud e il tuo account.

Su iPhone e iPad puoi vedere i file di backup in iCloud Drive. Su Android si trovano in una cartella nascosta dell’app nel tuo Google Drive. Il controllo è tutto tuo.

3

### La chiave ce l'hai solo tu

Il codice di recupero sblocca le chiavi di crittografia cloud. L’app non carica il codice sui nostri server né su quelli di Apple o Google; tieni riservate le copie che crei.

Conserva il tuo codice di recupero in un posto sicuro: senza di esso nemmeno noi possiamo ripristinare i tuoi dati. È voluto, non è un bug.

4

### Ripristina su un nuovo dispositivo

Cambi telefono? Ripristina il backup con il codice di recupero. Vale anche per un nuovo iPad o un altro dispositivo supportato sulla stessa piattaforma, con lo stesso account cloud.

Sul nuovo dispositivo apri Impostazioni, Backup su Cloud e scegli Ripristina da Backup. Seleziona il backup, inserisci il codice di recupero e conferma. Il ripristino sostituisce il vault locale.

## Come proteggiamo i tuoi dati

Più livelli di sicurezza stanno tra un tocco sbagliato e i dati persi.

**I file eliminati restano senza scadenza.** I documenti eliminati restano in Eliminati di recente finché il backup cloud è attivo. Nessuna eliminazione automatica dopo 30 giorni.

**L'eliminazione permanente richiede conferma.** Una richiesta a parte ti avvisa che il documento verrà rimosso anche dal tuo backup cloud.

****

**Scegli la finestra di cronologia.** Decidi per quanti giorni tenere la cronologia dei backup giornalieri: 7, 30, 90 o 180 giorni. Puoi riportare il tuo vault a un giorno qualsiasi dentro quella finestra. Le copie più vecchie vengono eliminate automaticamente.

**Protezione per il backup di un vault vuoto.** Una protezione salta alcuni tentativi di backup di un vault vuoto; ci sono eccezioni per il primo backup e per le procedure di ripristino e sincronizzazione. I documenti eliminati in blocco restano in Eliminati di recente mentre il backup cloud è attivo, finché non li elimini definitivamente.

**Avviso di sicurezza su un nuovo dispositivo.** Quando attivi il backup cloud su un nuovo dispositivo, l'app trova i backup esistenti e ti chiede se ripristinare o ricominciare da capo. Nessuna sovrascrittura in silenzio.

**Eliminazione del backup cloud con conferma.** Per eliminare il backup cloud servono Face ID, Touch ID o il PIN, se il relativo blocco dell’app è attivo, e poi una conferma. Un singolo tocco sbagliato non può cancellare il tuo backup.

**Ripristino dalle Impostazioni.** Su un dispositivo supportato sulla stessa piattaforma e con lo stesso account cloud, apri la schermata Backup su Cloud con il backup disattivato, seleziona il backup, inserisci il codice di recupero e conferma il ripristino. Questo sostituisce il contenuto locale del vault. Non devi reinstallare l'app né rifare l'onboarding.

**Reimposta e risincronizza.** Se i dati locali e il backup cloud non sono più allineati, usa Reimposta e risincronizza per caricare una nuova copia del vault.

### Il tuo codice di recupero è fondamentale

Il codice di recupero sblocca le chiavi di crittografia cloud necessarie per ripristinare il backup. Non possiamo reimpostarlo per te. Se perdi tutte le copie e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo recuperare il backup crittografato.

Conserva il tuo codice di recupero in un posto sicuro prima di affidarti al backup cloud: un gestore di password, una copia stampata al sicuro, o entrambi. Controlla di riuscire a rileggerlo prima di salvarlo come unica copia.

### Requisiti del dispositivo

Il backup cloud su iPhone e iPad usa iCloud di Apple. Serve un iPhone o iPad supportato, con iCloud Drive disponibile e attivato per l’app.

Il backup cloud su Android usa Google Drive. Serve Google Play Services, già installato di serie su Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme e la maggior parte degli altri principali brand Android.

I dispositivi senza Google Play Services (come i dispositivi Huawei usciti dopo il 2019, i tablet Amazon Fire e le varianti AOSP-only) non possono usare il backup cloud. Il resto dell'app, compresi l'archiviazione locale e la crittografia sul dispositivo, continua a funzionare sui dispositivi supportati, ma anche la lettura automatica delle date richiede Google Play Services.

### Importante: tieni sempre copie indipendenti

Il backup cloud è un livello di sicurezza in più, ma nessun sistema è perfetto. Gli account cloud possono andare persi, i codici di recupero si possono dimenticare, i servizi di archiviazione di terze parti possono avere interruzioni e possono capitare problemi di sincronizzazione o dati imprevisti. Offriamo il backup cloud per comodità, non come garanzia.

Per i documenti importanti tieni sempre una copia indipendente: una copia stampata in un posto sicuro, un'esportazione crittografata del vault salvata altrove, o gli originali fisici. E verifica che i tuoi documenti si possano ripristinare prima di averne bisogno.

Sei tu il responsabile dei backup dei tuoi documenti e della sicurezza del tuo codice di recupero. L'app, Apple, Google e lo sviluppatore non rispondono della perdita di dati dovuta a codici di recupero persi, problemi dell'account cloud o all'uso del backup cloud come unica copia.

## Crittografia e recupero

### AES-256-GCM

Crittografia autenticata per i contenuti dei documenti.

### PBKDF2 600k iterazioni

Una derivazione della chiave molto onerosa per il calcolo. Rende più costoso ogni tentativo di indovinare il codice di recupero.

### Espansione della chiave HKDF

Chiavi separate per ogni file di backup; il ripristino crittografa di nuovo i documenti con la chiave del nuovo dispositivo. Un dispositivo autorizzato compromesso o un codice di recupero compromesso possono esporre il vault cloud condiviso.

### Progettato zero-knowledge

Il backup crittografato resta nel tuo account cloud. Noi non lo riceviamo e non abbiamo le chiavi per leggerne i documenti.

### Cosa vede Apple

I contenuti dei documenti sono crittografati nel tuo iCloud o Google Drive. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non sono crittografati.

### Se perdi il codice di recupero

Se perdi tutte le copie del codice di recupero e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo decrittografare i backup. Non abbiamo le chiavi di crittografia cloud.

## Privacy e conformità

**Segnalazione facoltativa degli arresti anomali:** La segnalazione degli arresti anomali è disattivata di default. I contenuti dei documenti non vengono caricati sui nostri server.

**Nessuna copia di riserva:** Non conserviamo copie del codice di recupero né delle chiavi di crittografia. Tieni il codice al sicuro.

**Disattivato di default:** Il backup cloud è disattivato di default. Lo attivi tu in Impostazioni, quando vuoi usarlo.

Scopri di più nella nostra [Informativa sulla Privacy completa](https://traveldocumentvault.com/privacy-policy/).

## Prova la vera privacy

Scarica gratis. Attiva il backup con Pro quando sei pronto. Nessun account. Solo tu.

![Scarica su App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
