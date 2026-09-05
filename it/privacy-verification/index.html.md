# Verifica della privacy | Travel Document Vault

> Privacy verificabile: zero tracker, zero raccolta dati, nessun account. Tutto resta sul dispositivo. Guarda ogni autorizzazione richiesta e perché.

Source: https://traveldocumentvault.com/it/privacy-verification/

---

## Le nostre affermazioni sulla privacy

### Zero tracker

Nessun SDK di analisi, nessuna libreria pubblicitaria, nessun pixel di tracciamento nell'app.

### Nessuna raccolta di dati in uscita

L'app non effettua zero connessioni in uscita per impostazione predefinita. Funziona completamente offline. L'unico utilizzo di rete è il backup cloud Pro opzionale, che si sincronizza con il tuo iCloud o Google Drive personale — mai con i nostri server.

### Sul dispositivo per impostazione predefinita

Tutti i documenti, le scansioni e i dati rimangono sul tuo dispositivo. Non c'è nessun cloud TDV, nessun server TDV, nessun backend TDV. Gli utenti Pro possono facoltativamente eseguire il backup del loro vault crittografato nel loro account iCloud o Google Drive personale — solo loro detengono la chiave di recupero.

### Crittografia AES-256-GCM

Ogni documento è crittografato prima di toccare l'archiviazione del tuo dispositivo.

## Verifica

Non devi fidarti di noi. Puoi confermare ogni affermazione qui sopra con strumenti gratuiti e open source disponibili pubblicamente.

### 1. Test del traffico di rete

Installa un monitor di rete come **mitmproxy** (gratuito, open source), **Wireshark** (gratuito, open source), o **Charles Proxy**. Apri Travel Document Vault, scansiona un documento, sfoglia il tuo vault e imposta un promemoria. Non dovresti vedere i tuoi documenti, scansioni, date di scadenza o contenuti del vault inviati a Travel Document Vault. Il traffico di rete dovrebbe limitarsi a funzioni specifiche: rapporti di arresto di Sentry opzionali, controlli di acquisto dell'App Store o di Google Play, backup cloud opzionale sul tuo account iCloud o Google Drive personale, e un controllo manuale delle correzioni di bug spiegato di seguito.

Le impostazioni hanno un pulsante **Check for Updates**. È un controllo manuale, mai automatico — viene eseguito solo quando lo tocchi tu stesso, mai in background e mai da solo. Il controllo contatta **updates.traveldocumentvault.com** — il nostro server di aggiornamenti, gestito da noi su Google Cloud, che fornisce file di aggiornamento firmati crittograficamente da un bucket di archiviazione. Non registriamo il controllo: i registri di richiesta sono disabilitati da parte nostra, quindi nessun indirizzo IP viene conservato. Ogni aggiornamento è firmato con una chiave che solo noi possediamo, e l'app rifiuta tutto ciò la cui firma non corrisponde al certificato integrato in essa. Lo stesso tocco verifica anche se sull'**App Store** o su **Google Play** è disponibile una versione più recente dell'app. Questa funzione esiste per permettere ad alcune correzioni di bug di raggiungerti più rapidamente rispetto ad attendere una release completamente nuova sull'App Store o Google Play, utile per correzioni urgenti, a seconda della natura della correzione. Vale la stessa regola di tutto il resto di questa pagina: nessuna chiamata di rete senza che tu la richieda.

### 2. Rapporto sulla privacy dell'app iOS

Su iPhone, vai a **Impostazioni > Privacy e sicurezza > Rapporto sulla privacy dell'app**. Questa funzione integrata di Apple mostra quali app hanno contattato i domini di rete. Travel Document Vault non ci invia i tuoi documenti, scansioni, date di scadenza o contenuti del vault. Se hai abilitato il backup cloud Pro, vedrai connessioni ai domini iCloud di Apple — è il tuo backup che si sincronizza con il tuo account iCloud personale.

### 3. Android — come verificare la tua privacy

Android non ha un unico rapporto sulla privacy integrato come l'iPhone. Due modi semplici per verificarlo tu stesso: guarda la sezione **Data Safety** di questa app nella sua pagina di Google Play (indica chiaramente cosa viene raccolto, cosa viene condiviso, che i tuoi dati sono crittografati in transito e che non possono essere eliminati) — oppure usa un monitor di rete come descritto al passaggio 1 sopra.

Se hai attivato il backup cloud, potresti notare un po' di attività verso i server di Google (indirizzi web che terminano in **googleapis.com**). È normale e sicuro: si tratta solo del tuo file di backup bloccato e crittografato e di un controllo di accesso, inviati direttamente al **tuo** account Google Drive personale — lo stesso che usi già per foto o Gmail. Non lo vediamo mai, non lo riceviamo mai e non ne conserviamo mai una copia da nessuna parte. Solo tu possiedi la chiave di recupero che può sbloccarlo.

### 4. Etichette sulla privacy dell'App Store e del Play Store

Sia Apple che Google richiedono agli sviluppatori di dichiarare quali dati raccoglie la loro app. Controlla l'elenco dell'App Store o del Google Play per Travel Document Vault. La nostra dichiarazione: **nessun dato raccolto**.

## Come testiamo la sicurezza dell'app

Non ci limitiamo a dire che l'app è sicura. Lo verifichiamo, usando gli stessi strumenti aperti e gli stessi standard pubblici adottati dal settore della sicurezza.

### Sottoponiamo l'app a uno standard pubblico

Valutiamo Travel Document Vault rispetto all'[OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), la checklist di riferimento del settore su come un'app mobile dovrebbe archiviare i dati, utilizzare la crittografia, bloccarsi dietro Face ID o un PIN, e gestire i link provenienti da altre app. Chiunque può leggere lo standard e confrontarlo con il comportamento reale dell'app.

### Analizziamo il nostro codice

Prima di ogni rilascio eseguiamo un'analisi statica del nostro codice con [Semgrep](https://semgrep.dev/), uno strumento open source che segnala schemi non sicuri, come crittografia debole o gestione impropria dei dati, così da correggerli per tempo.

### Analizziamo l'app compilata

Esaminiamo anche le nostre build pubblicate con strumenti di scansione della sicurezza per app mobili, verificando come la build archivia i dati, a cosa può accedere e come è firmata.

### Hai trovato un problema? Segnalacelo

Se noti un problema di sicurezza, scrivi a [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). I dettagli della nostra procedura di divulgazione sono pubblicati su [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Questa è una nostra valutazione rispetto a uno standard pubblico, non un audit indipendente né una certificazione. Ultima revisione a luglio 2026.

## Ogni autorizzazione spiegata

Le app Android dichiarano i permessi nel loro manifesto. Alcuni sono richiesti direttamente dall'app e altri sono ereditati dalle librerie da cui dipende l'app. Ecco una suddivisione trasparente di ogni autorizzazione, raggruppata per scopo.

### Autorizzazioni che l'app utilizza direttamente

### Fotocamera

iOS + Android

**Perché chiediamo:** Per scansionare le pagine del passaporto, del visto o dei documenti di viaggio direttamente dall'app.

**Cosa non facciamo mai:** Le foto vengono salvate localmente sul tuo dispositivo. Non vengono mai caricate, trasmesse o inviate da nessuna parte.

### Libreria fotografica / Foto / Archiviazione

iOS + Android

**Perché chiediamo:** Per permetterti di importare una foto esistente di un documento e per permettere all'app di esportare file di backup crittografati (.tdvault) quando li richiedi. Su versioni Android più vecchie, READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE sono necessari. Su Android 13+, READ_MEDIA_IMAGES viene utilizzato invece.

**Cosa non facciamo mai:** L'app legge solo l'immagine che selezioni. Non scansiona, indicizza o sfoglia mai la tua libreria fotografica o il file system.

### Face ID / Touch ID / Sblocco biometrico

iOS + Android

**Perché chiediamo:** Per bloccare e sbloccare l'app in modo che solo tu possa accedere ai tuoi documenti. Su Android 6-8, USE_FINGERPRINT viene utilizzato. Su Android 9+, USE_BIOMETRIC viene utilizzato invece.

**Cosa non facciamo mai:** I tuoi dati biometrici non lasciano mai il tuo dispositivo. Il sistema operativo gestisce l'autenticazione e restituisce solo un risultato pass/fail all'app.

### Notifiche, Vibrazione, Boot completato, Wake Lock

Android

**Perché chiediamo:** Per fornire i promemoria di scadenza sul dispositivo che hai impostato tu stesso. RECEIVE_BOOT_COMPLETED riprogramma i tuoi promemoria dopo un riavvio del dispositivo. WAKE_LOCK garantisce che i promemoria si attivino in modo affidabile anche quando il telefono è in standby. VIBRATE accompagna la consegna delle notifiche.

**Cosa non facciamo mai:** Non vengono mai inviate notifiche di marketing, promozionali o di terze parti. I promemoria sono interamente programmati sul tuo dispositivo.

### Internet, Stato della rete, Stato Wi-Fi

Android

**Perché compaiono:** Sono necessari per funzioni che usano la rete: **rapporti di arresto di Sentry** (opt-in, disabilitati per impostazione predefinita), **fatturazione App Store o Google Play** per l'acquisto dell'upgrade Pro, **backup cloud Pro** (opzionale), che sincronizza il tuo vault crittografato con il tuo iCloud o Google Drive personale, e il pulsante manuale **Check for Updates** nelle impostazioni (si attiva solo quando lo tocchi). ACCESS_NETWORK_STATE e ACCESS_WIFI_STATE permettono a queste funzioni di verificare se una connessione è disponibile prima di tentare l'invio.

**Cosa non facciamo:** L'app non carica i tuoi documenti, scansioni, date di scadenza, foto o contenuti del vault su Travel Document Vault. Funziona completamente offline per il normale archivio documenti e i promemoria.

### Autorizzazioni ereditate dalle librerie (non utilizzate dall'app)

Le app Android includono librerie di terze parti per funzioni come acquisti in-app, rapporti di arresto e notifiche. Queste librerie dichiarano autorizzazioni nei loro manifesti, che vengono unite nell'app finale. Le autorizzazioni di seguito sono dichiarate dalle dipendenze, non dal nostro codice. L'app non chiama mai le API dietro di esse.

### Registra audio

Ereditata, mai utilizzata

**Perché appare:** Questa autorizzazione è dichiarata da una libreria di terze parti inclusa nella compilazione (comunemente il plug-in della fotocamera o dei media). Appare nel manifesto di Android ma non viene mai attivata dal nostro codice. L'app non registra mai audio o video in nessuna circostanza.

**Come puoi confermare:** L'app non ti chiederà mai l'accesso al microfono. Se controlli il gestore dei permessi del tuo dispositivo, vedrai che la registrazione audio non è concessa a Travel Document Vault.

### Finestra di avviso del sistema

Ereditata

Dichiarata dal framework Flutter per i sovrapposti di sviluppo e debug. Questa autorizzazione non viene utilizzata nella build di rilascio dell'app e non ha alcun effetto sulla tua privacy.

### Rileva cattura dello schermo

Ereditata

Dichiarata da una dipendenza del framework. L'app non rileva, blocca o risponde agli screenshot. Questa autorizzazione non ha alcun effetto sul tuo utilizzo.

### Autorizzazioni del conteggio dei badge

Ereditata

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, e PROVIDER_INSERT_BADGE sono dichiarati dalla libreria di notifiche per visualizzare i conteggi dei badge non letti sull'icona della schermata iniziale tra diversi produttori Android (Samsung, Huawei, Xiaomi, ecc.). Influiscono solo sul numero mostrato sull'icona dell'app.

### Fatturazione, Verifica licenza, Referrer di installazione

Google Play

Dichiarato dalla libreria di fatturazione Google Play (per l'acquisto dell'upgrade Pro) e dalla libreria di referrer di installazione Play. Questi sono requisiti standard del Google Play Store e non accedono a dati personali.

### Scarica senza notifica

Ereditata

Dichiarato da una dipendenza del framework. L'app non scarica file in background.

### Autorizzazioni che non richiediamo

Queste sono autorizzazioni comuni che molte app richiedono. Non ne richiediamo nessuna e non appaiono nel nostro manifesto.

**Posizione** — Nessun GPS, nessun geofencing, nessun tracciamento **Contatti** — Nessun accesso alla tua rubrica **Bluetooth** — Nessuna rete locale o scansione dei dispositivi **Calendario** — I promemoria vengono gestiti sul dispositivo, non tramite il tuo calendario

Hai ancora domande? Leggi la nostra [Informativa sulla privacy](https://traveldocumentvault.com/privacy-policy/) completa o consulta le [FAQ](https://traveldocumentvault.com/it/faq/).
