# Backup Cloud Crittografato | Suo Cloud. Sua Chiave. | Travel Document Vault

> Backup crittografato end-to-end nel tuo iCloud o Google Drive. Il codice di ripristino ce l'hai solo tu, quindi nessun altro può aprirlo. Nemmeno noi.

Source: https://traveldocumentvault.com/it/cloud-backup/

---

## Come funziona il backup crittografato

Vera privacy significa che solo Lei e nessun altro può leggere i Suoi dati.

1

### Crittografia sul Dispositivo

Il Suo caveau viene crittografato sul Suo dispositivo con AES-256-GCM. La chiave di crittografia è derivata dal Suo codice di ripristino con PBKDF2 e 600.000 iterazioni.

AES-256-GCM è una crittografia forte e moderna, e il codice di recupero non lascia mai le Sue mani. Dovrebbe comunque proteggere il Suo telefono con una passcode robusta e il Blocco App. La crittografia protegge il file; la Sua passcode protegge il telefono.

2

### Caricamento nel Suo Cloud

Il backup crittografato va al Suo account iCloud o Google Drive personale, non ai nostri server — è il Suo cloud e il Suo account.

Può visualizzare e gestire i Suoi backup direttamente nel Suo iCloud o Google Drive. Ha il pieno controllo.

3

### Solo Lei detiene la Chiave

Il Suo codice di ripristino è la chiave per decrittare i Suoi backup, e non lascia mai il Suo dispositivo — mai mandato a noi, Apple o Google.

Conservi il Suo codice di ripristino in un luogo sicuro, perché senza di esso nemmeno noi possiamo ripristinare i Suoi dati — questo è intenzionale, non un bug.

4

### Ripristina su Qualsiasi Dispositivo

Cambia telefono? Ripristina il Suo backup con il Suo codice di ripristino. Lo stesso per nuovo iPad, Mac o altri dispositivi.

Scarica l'app, ripristina dal backup e inserisci il codice di ripristino per ottenere l'intero Suo caveau indietro, crittografato e pronto.

## Come Protegge i Suoi Dati

Diversi livelli di sicurezza si interpongono tra un tocco accidentale e i dati persi.

**Conservazione indefinita dei file eliminati.** I documenti eliminati rimangono nei File Eliminati di recente finché il backup cloud è attivo. Nessuna eliminazione automatica dopo 30 giorni.

**L'eliminazione permanente richiede conferma.** Un prompt separato La avverte che il documento sarà rimosso anche dal Suo backup cloud. Nessuna eliminazione accidentale.

**Finestra di grazia della cronologia di backup.** Anche dopo l'eliminazione permanente, il backup conserva i dati del Suo documento per diversi altri cicli di sincronizzazione come rete di sicurezza.

**Scelga la finestra di cronologia.** Decida fino a quanti giorni si estende la cronologia dei backup giornalieri: 7, 30, 90 o 180 giorni. Ripristini il Suo caveau a un giorno precedente all'interno di quella finestra. Gli snapshot più vecchi vengono eliminati automaticamente.

**Salta sincronizzazione caveau vuoto.** L'app non sincronizza mai un caveau vuoto al cloud. Un'eliminazione in massa non può cancellare il Suo backup esistente.

**Prompt di sicurezza per nuovo dispositivo.** L'abilitazione del backup cloud su un nuovo dispositivo rileva i backup esistenti e chiede se ripristinare o ricominciare da capo. Nessuna sovrascrittura silenziosa.

**Eliminazione bloccata biometricamente.** L'eliminazione del Suo backup cloud richiede Face ID, Touch ID o il Suo PIN. Un singolo tocco accidentale non può cancellare il Suo backup.

**Ripristino con un tocco dalle Impostazioni.** Ripristini il Suo backup in qualsiasi momento dalla schermata delle impostazioni del Backup Cloud. Nessuna necessità di reinstallare o seguire il flusso di onboarding.

**Ripristina e risincronizza.** Se i Suoi dati locali e il backup cloud non fossero mai sincronizzati, un pulsante forza un ricaricamento pulito del Suo intero caveau in modo che tutto rimanga coerente.

### ⚠ Il Suo Codice di Ripristino È Critico

Il Suo codice di ripristino è l'unica chiave per decrittare il Suo backup. Abbiamo un design zero-knowledge, il che significa che non possiamo ripristinarlo per Lei. Se lo perde, il Suo backup diventa irrecuperabile.

Conservi il Suo codice di ripristino in un luogo sicuro prima di affidarsi al backup cloud — o un gestore di password, o una copia stampata in un luogo sicuro, o entrambi — e verifichi di poterlo rileggere prima di memorizzarlo come unica copia.

### Requisiti del Dispositivo

Il backup cloud su iPhone e iPad utilizza Apple iCloud. Funziona su tutti i dispositivi che accedono con un Apple ID.

Il backup cloud su Android utilizza Google Drive. Richiede Google Play Services, che è installato per impostazione predefinita su Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme e la maggior parte degli altri principali brand Android.

I dispositivi senza Google Play Services (come i dispositivi Huawei rilasciati dopo il 2019, i tablet Amazon Fire e le varianti AOSP-only) non possono utilizzare il backup cloud. Il resto dell'app, inclusa l'archiviazione locale e la crittografia on-device, continua a funzionare su ogni dispositivo.

### Importante: Conservi Sempre Copie Indipendenti

Il backup cloud è uno strato di sicurezza, ma nessun sistema è perfetto. Gli account cloud possono andare persi, i codici di ripristino possono essere dimenticati, i servizi di archiviazione di terze parti possono avere interruzioni e possono verificarsi problemi di sincronizzazione o dati imprevisti. Forniamo il backup cloud come convenienza, non come garanzia.

Per i documenti critici, conservi sempre una copia indipendente, come una copia cartacea stampata in un luogo sicuro, un'esportazione di caveau crittografata separata salvata in un'archiviazione diversa, o originali archiviati fisicamente, e verifichi che i Suoi documenti siano ripristinabili prima di averne bisogno.

Lei è responsabile del mantenimento dei Suoi backup di documenti e della sicurezza del Suo codice di ripristino. L'app, Apple, Google e lo sviluppatore non sono responsabili della perdita di dati derivante da codici di ripristino persi, problemi di account cloud o affidamento al backup cloud come unica copia.

## Sicurezza di cui fidarsi

#### AES-256-GCM

Standard industriale per la crittografia autenticata. Utilizzato da NIST, NSA e sistemi bancari globali.

#### PBKDF2 600k Iterazioni

Derivazione della chiave computazionalmente intensiva. Gli attacchi a forza bruta diventano impraticabili.

#### Espansione Chiave HKDF

Chiave di crittografia per dispositivo. Ogni ripristino genera una chiave unica. Il compromesso di un dispositivo non compromette gli altri.

#### Design Zero-Knowledge

Non abbiamo accesso ai Suoi dati. Non crittografati sui nostri server. Non memorizzati sui nostri server. Vera Zero-Knowledge.

#### Cosa vede Apple

Blob crittografati nel Suo iCloud. Apple li archivia. Apple non può leggerli. Lo stesso per Google Drive.

#### Perdita del Codice di Ripristino

Se perde il Suo codice di ripristino, i Suoi backup non possono essere decriptati. Nessuna backdoor. Nessuna chiave master. Così progettato.

## Privacy e Conformità

**GDPR-Conforme:** Non elaboriamo dati personali. Non abbiamo accesso ai Suoi dati. Nessun dato, nessuna elaborazione, nessun onere di conformità.

**Nessun Deposito di Backup:** A differenza di alcuni fornitori, non conserviamo copie del Suo codice di ripristino, chiavi private o chiavi di crittografia. La custodia del backup è 100% nelle Sue mani.

**Disabilitato per Impostazione Predefinita:** Il backup cloud è disabilitato per impostazione predefinita. Lei lo attiva esplicitamente. Lei decide.

Scopri di più nella nostra [completa Informativa sulla Privacy](https://traveldocumentvault.com/privacy-policy/).

## Sperimenta vera privacy

Scarica gratis. Attiva il backup quando è pronto. Nessun account. Solo Lei.

![Scarica su App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
