# Backup Cloud Crittografato | Suo Cloud. Sua Chiave. | Travel Document Vault

> Backup crittografato (Pro) sul tuo iCloud o Google Drive. Ripristina con il codice di recupero, che non conserviamo. Il vault salvato funziona offline.

Source: https://traveldocumentvault.com/it/cloud-backup/

---

## Come funziona il backup crittografato

I contenuti dei Suoi documenti vengono crittografati prima del caricamento nel cloud.

1

### Crittografia sul Dispositivo

I contenuti dei Suoi documenti vengono crittografati sul dispositivo con AES-256-GCM. PBKDF2 con 600.000 iterazioni deriva la chiave che sblocca la chiave principale del vault, generata casualmente.

AES-256-GCM crittografa i contenuti dei documenti. L’app non carica il codice di recupero sui nostri server né su quelli di Apple o Google. Protegga comunque il telefono con un codice di accesso robusto e il Blocco PIN dell’app: la crittografia protegge il file, il codice di accesso protegge il telefono.

2

### Caricamento nel Suo Cloud

Il backup crittografato va al Suo account iCloud o Google Drive personale, non ai nostri server — è il Suo cloud e il Suo account.

Su iPhone e iPad può vedere i file di backup in iCloud Drive. Su Android si trovano in una cartella nascosta dell’app nel Suo Google Drive. Ha il pieno controllo.

3

### Solo Lei detiene la Chiave

Il codice di recupero sblocca le chiavi di crittografia cloud. L’app non carica il codice sui nostri server né su quelli di Apple o Google; mantenga riservate le copie che crea.

Conservi il Suo codice di ripristino in un luogo sicuro, perché senza di esso nemmeno noi possiamo ripristinare i Suoi dati — questo è intenzionale, non un bug.

4

### Ripristina su un nuovo dispositivo

Cambia telefono? Ripristini il backup con il codice di recupero. Vale anche per un nuovo iPad o un altro dispositivo supportato sulla stessa piattaforma, usando lo stesso account cloud.

Sul nuovo dispositivo apra Impostazioni, Backup su Cloud e scelga Ripristina da Backup. Selezioni il backup, inserisca il codice di recupero e confermi. Il ripristino sostituisce il vault locale.

## Come Protegge i Suoi Dati

Diversi livelli di sicurezza si interpongono tra un tocco accidentale e i dati persi.

**Conservazione indefinita dei file eliminati.** I documenti eliminati rimangono nei File Eliminati di recente finché il backup cloud è attivo. Nessuna eliminazione automatica dopo 30 giorni.

**L'eliminazione permanente richiede conferma.** Un prompt separato La avverte che il documento sarà rimosso anche dal Suo backup cloud.

****

**Scelga la finestra di cronologia.** Decida fino a quanti giorni si estende la cronologia dei backup giornalieri: 7, 30, 90 o 180 giorni. Ripristini il Suo caveau a un giorno precedente all'interno di quella finestra. Gli snapshot più vecchi vengono eliminati automaticamente.

**Protezione per il backup di un vault vuoto.** Una protezione salta alcuni tentativi di backup di un vault vuoto; esistono eccezioni per il primo backup e per le procedure di ripristino e sincronizzazione. I documenti eliminati in massa restano in Eliminato di Recente mentre il backup cloud è attivo, finché non li elimina definitivamente.

**Prompt di sicurezza per nuovo dispositivo.** L'abilitazione del backup cloud su un nuovo dispositivo rileva i backup esistenti e chiede se ripristinare o ricominciare da capo. Nessuna sovrascrittura silenziosa.

**Eliminazione del backup cloud con conferma.** L’eliminazione del backup cloud richiede Face ID, Touch ID o il PIN se il relativo blocco dell’app è attivo, seguiti da una conferma. Un singolo tocco accidentale non può cancellare il Suo backup.

**Ripristino da Impostazioni.** Su un dispositivo supportato sulla stessa piattaforma e con lo stesso account cloud, apra la schermata Backup su Cloud con il backup disattivato, selezioni il backup, inserisca il codice di recupero e confermi il ripristino. Questo sostituisce il contenuto locale del vault. Nessuna necessità di reinstallare o seguire il flusso di onboarding.

**Reimposta e risincronizza.** Se i dati locali e il backup cloud non sono più sincronizzati, usi Reimposta e risincronizza per caricare una nuova copia del vault.

### ⚠ Il Suo Codice di Ripristino È Critico

Il codice di recupero sblocca le chiavi di crittografia cloud necessarie per ripristinare il backup. Non possiamo reimpostarlo per Lei. Se perde tutte le copie e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo recuperare il backup crittografato.

Conservi il Suo codice di ripristino in un luogo sicuro prima di affidarsi al backup cloud — o un gestore di password, o una copia stampata in un luogo sicuro, o entrambi — e verifichi di poterlo rileggere prima di memorizzarlo come unica copia.

### Requisiti del Dispositivo

Il backup cloud su iPhone e iPad utilizza Apple iCloud. Richiede un iPhone o iPad supportato con iCloud Drive disponibile e attivato per l’app.

Il backup cloud su Android utilizza Google Drive. Richiede Google Play Services, che è installato per impostazione predefinita su Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme e la maggior parte degli altri principali brand Android.

I dispositivi senza Google Play Services (come i dispositivi Huawei rilasciati dopo il 2019, i tablet Amazon Fire e le varianti AOSP-only) non possono utilizzare il backup cloud. Il resto dell'app, inclusa l'archiviazione locale e la crittografia on-device, continua a funzionare sui dispositivi supportati, ma anche la lettura automatica delle date richiede Google Play Services.

### Importante: Conservi Sempre Copie Indipendenti

Il backup cloud è uno strato di sicurezza, ma nessun sistema è perfetto. Gli account cloud possono andare persi, i codici di ripristino possono essere dimenticati, i servizi di archiviazione di terze parti possono avere interruzioni e possono verificarsi problemi di sincronizzazione o dati imprevisti. Forniamo il backup cloud come convenienza, non come garanzia.

Per i documenti critici, conservi sempre una copia indipendente, come una copia cartacea stampata in un luogo sicuro, un'esportazione di caveau crittografata separata salvata in un'archiviazione diversa, o originali archiviati fisicamente, e verifichi che i Suoi documenti siano ripristinabili prima di averne bisogno.

Lei è responsabile del mantenimento dei Suoi backup di documenti e della sicurezza del Suo codice di ripristino. L'app, Apple, Google e lo sviluppatore non sono responsabili della perdita di dati derivante da codici di ripristino persi, problemi di account cloud o affidamento al backup cloud come unica copia.

## Crittografia e recupero

#### AES-256-GCM

Crittografia autenticata per i contenuti dei documenti.

#### PBKDF2 600k Iterazioni

Derivazione della chiave computazionalmente intensiva. Questo aumenta il costo dei tentativi di indovinare il codice di recupero.

#### Espansione Chiave HKDF

Chiavi separate per ciascun file di backup; il ripristino crittografa di nuovo i documenti con la chiave del nuovo dispositivo. Un dispositivo autorizzato compromesso o un codice di recupero compromesso possono esporre il vault cloud condiviso.

#### Design Zero-Knowledge

Il backup crittografato resta nel Suo account cloud. Non lo riceviamo e non possediamo le chiavi necessarie per leggerne i documenti.

#### Cosa vede Apple

I contenuti dei documenti sono crittografati nel Suo iCloud o Google Drive. I metadati del backup, come nomi dei dispositivi, conteggi e date e orari, non sono crittografati.

#### Perdita del Codice di Ripristino

Se perde tutte le copie del codice di recupero e l’accesso a tutti i dispositivi che possono ancora sbloccare il vault, non possiamo decrittografare i backup. Non possediamo le chiavi di crittografia cloud.

## Privacy e Conformità

**Segnalazione facoltativa degli arresti anomali:** La segnalazione degli arresti anomali è disattivata per impostazione predefinita. I contenuti dei documenti non vengono caricati sui nostri server.

**Nessun Deposito di Backup:** Non conserviamo copie del codice di recupero o delle chiavi di crittografia. Conservi il codice al sicuro.

**Disabilitato per Impostazione Predefinita:** Il backup cloud è disattivato per impostazione predefinita. Lo attivi in Impostazioni quando desidera usarlo.

Scopri di più nella nostra [completa Informativa sulla Privacy](https://traveldocumentvault.com/privacy-policy/).

## Sperimenta vera privacy

Scarica gratis. Attiva il backup con Pro quando è pronto. Nessun account. Solo Lei.

![Scarica su App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponibile su Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
