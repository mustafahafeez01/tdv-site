# Backup Cloud Crittografato per i Documenti di Viaggio: Chi Ha la Chiave

> Cosa cifra davvero un backup delle scansioni del passaporto, e perché nessuno può reimpostare il tuo codice di recupero.

Source: https://traveldocumentvault.com/it/blog/encrypted-cloud-backup-travel-documents/

---

![Un genitore e un bambino seduti insieme su un divano al crepuscolo, che guardano un telefono e una piccola chiave dorata appoggiata sul tavolo accanto a un passaporto, mentre sopra di loro una nuvola contiene solo segni indecifrabili dietro un lucchetto](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Punti Chiave

- **"Backup crittografato" ha senso solo quando sai chi ha la chiave.** Se l'azienda può leggere i tuoi documenti, la cifratura li protegge dagli estranei, non dall'azienda.
- Un backup cifrato sul telefono prima del caricamento arriva nel cloud come dati illeggibili. Il fornitore di archiviazione conserva testo cifrato, non il tuo passaporto.
- **Nessun account significa nessun reset della password.** Perdi il codice di recupero e il backup non può essere aperto da nessuno, noi compresi. È lo scambio deliberato.
- Scrivi il codice prima di dipendere dal backup, tienilo lontano dal telefono, e rileggilo una volta per verificare che sia leggibile.
- Un backup di sistema del dispositivo reinstalla l'app ma non può riportare indietro i tuoi documenti, perché la chiave di cifratura non ha mai lasciato il vecchio telefono.

Hai scansionato quattro passaporti, due visti e i certificati di nascita dei bambini in un'app che conserva tutto sul tuo telefono. Bene. Poi arriva la preoccupazione ovvia: cosa succede se il telefono finisce in mare, o viene sfilato da un tavolino di un caffè a Lisbona.

La risposta è un backup. La parte scomoda è che quasi ogni app usa la frase "backup crittografato" e quasi nessuna intende la stessa cosa. Questo articolo spiega cosa significano davvero queste parole e cosa comporta quando un'azienda non può davvero leggere i tuoi dati. Si conclude con una breve routine per la settimana prima di un viaggio, così un telefono perso resta un fastidio invece di un disastro.

## Cosa Significa Davvero "Backup Crittografato"

La cifratura mescola un file in modo che solo una chiave corrispondente possa riportarlo a qualcosa di leggibile. Questo è lo standard. Ciò che decide se ti protegge davvero è dove avviene la cifratura e chi finisce per avere la chiave.

Due configurazioni vengono entrambe vendute come backup crittografato, ma si comportano in modo molto diverso.

La prima invia il file al server dell'azienda tramite una connessione cifrata, poi lo conserva cifrato a riposo. Entrambe le affermazioni sono vere, ed entrambe suonano rassicuranti. Ma l'azienda continua ad avere la chiave, quindi può decifrare i tuoi documenti ogni volta che ne ha bisogno: per far funzionare una funzionalità, per rispondere a una richiesta legale, o perché qualcuno al suo interno ha commesso un errore. La scansione del tuo passaporto è leggibile dall'altra parte.

L'altra configurazione cifra il file sul tuo telefono prima ancora che venga inviato, usando una chiave derivata da qualcosa che solo tu possiedi. Ciò che arriva nello storage è un blocco di rumore, e nessuno dall'altra parte può leggerlo, perché nessuno dall'altra parte ha la chiave. Questo è solitamente chiamato cifratura end-to-end, o zero-knowledge.

Quindi la domanda da porsi a qualsiasi app è breve: **chi ha la chiave?** Tutto il resto del marketing discende da questa risposta.

## Il Codice di Recupero, e Perché Nessuno Può Reimpostarlo

Ecco la parte che la maggior parte degli articoli salta, e merita di essere detta chiaramente: Travel Document Vault non ha account. Non ci hai mai dato un indirizzo email, non ti abbiamo mai impostato una password, e non esiste alcuna traccia di te su nessun server che gestiamo. Quando attivi il [backup cloud](https://traveldocumentvault.com/it/cloud-backup/), l'app genera un codice di recupero di 24 caratteri e da esso deriva la chiave di cifratura. Il vault cifrato va poi al tuo **iCloud personale su iPhone e iPad, o al tuo Google Drive personale su Android**, non a noi.

La conseguenza è inevitabile. **Se perdi quel codice di recupero, il backup non potrà mai più essere aperto.** Non da te, non da Apple o Google, e non da noi. Non esiste un link per il reset, perché non esiste un account a cui collegarlo. Non esiste un ticket di assistenza che possa recuperarlo, perché non l'abbiamo mai avuto e non possiamo nemmeno iniziare a indovinarlo.

Detta così suona dura, ed è meglio essere onesti piuttosto che nasconderla in una schermata delle impostazioni. È lo stesso scambio che fai con la chiave di casa: la serratura vale qualcosa solo perché nessun fabbro al mondo tiene una copia di riserva, ed è proprio per questo che perdere la tua è un problema tuo. Un'azienda in grado di ripristinare i tuoi documenti dopo che hai dimenticato tutto è un'azienda che avrebbe potuto leggerli fin dall'inizio.

Quindi tratta il codice come l'unica cosa da fare bene:

- Salvalo prima di fare affidamento sul backup, non dopo.
- Conservalo in un posto che la perdita del telefono non può toccare. Va bene un gestore di password su un altro dispositivo. Va bene anche un foglio nel cassetto dove tieni i certificati di nascita.
- Rileggilo una volta da dove lo hai conservato. Una scrittura a mano che aveva senso al momento tende a diventare ambigua in un'emergenza.
- Due copie in due posti valgono più di una copia perfetta.

## Il Backup Cloud È Sicuro per le Scansioni del Passaporto?

Dipende completamente da cosa arriva effettivamente nel cloud, ed è una domanda che riguarda l'app, non il cloud.

Una foto del passaporto in una normale libreria fotografica o in una cartella sincronizzata arriva leggibile. Resta in un account protetto da una password che magari hai già riutilizzato altrove. Viene indicizzata e trasformata in miniatura, e chiunque acceda a quell'account vede una copia perfettamente leggibile della pagina anagrafica. Abbiamo analizzato in dettaglio come appare questa esposizione in [conservare un passaporto in Google Photos](https://traveldocumentvault.com/it/blog/is-it-safe-to-store-passport-in-google-photos/). È un rischio reale, ed è la configurazione che la maggior parte delle famiglie usa senza averla mai scelta davvero.

Un vault cifrato sul dispositivo prima del caricamento arriva come testo cifrato. Chi riesce a violare l'account cloud trova un file che non può aprire. La protezione viaggia insieme al file, invece di dipendere dall'account in cui finisce.

Ecco perché la versione onesta di "il cloud è sicuro" è: il cloud è un indirizzo di consegna, non un modello di sicurezza. Ciò che conta è lo stato del file nel momento in cui arriva. Il nostro [confronto dei principali posti in cui le persone conservano le scansioni del passaporto](https://traveldocumentvault.com/it/blog/safest-way-to-store-passport-digitally/) analizza i compromessi di ciascuno.

| Cosa esegui in backup | Stato all'arrivo | Chi può leggerlo | Se l'account viene violato |
|---|---|---|---|
| **Foto del passaporto in una libreria fotografica** | Immagine leggibile | Tu, il fornitore, chiunque abbia accesso all'account | Pagina anagrafica completamente esposta |
| **PDF in una cartella drive sincronizzata** | File leggibile | Tu, il fornitore, chiunque abbia accesso all'account | Documenti esposti e scaricabili |
| **Backup dell'app in cui l'azienda ha la chiave** | Cifrato a riposo | Tu e l'azienda | Dipende da come l'azienda gestisce le proprie chiavi |
| **Backup cifrato prima sul tuo dispositivo** | Testo cifrato | Solo chi possiede il codice di recupero | L'attaccante ottiene un file illeggibile |

## Cosa Va Nel Backup, e Cosa Resta Fuori

Il backup contiene una copia cifrata del vault: ogni profilo, ogni scansione, scadenze, promemoria, note e allegati. Ripristinandolo, l'app torna esattamente come l'avevi lasciata.

Tre cose restano deliberatamente sul telefono, e il codice di recupero viene prima di tutto: non lascia mai il dispositivo, ed è proprio questo il punto. Anche il blocco dell'app resta locale, quindi Face ID, Touch ID o il tuo PIN tengono fuori dal telefono le altre persone, mentre la cifratura le tiene fuori dal file. E gli snapshot locali automatici che l'app crea mentre lavori restano solo sul dispositivo.

Quest'ultimo punto trae in inganno molte persone, quindi ecco la versione senza giri di parole. **Un backup di sistema del dispositivo reinstalla l'app ma non può ripristinare i tuoi documenti.** La chiave di cifratura non ha mai lasciato il vecchio telefono, quindi quello nuovo non ha nulla con cui decifrare. Se vuoi che il tuo vault sopravviva al telefono, ti serve il backup cloud attivo oppure un file esportato salvato da qualche parte.

## Ripristinare su un Nuovo Telefono

Il ripristino è breve, ed è proprio questo il senso di fare la preparazione in anticipo.

Installa l'app sul nuovo telefono e accedi allo stesso account iCloud o Google che usavi prima. Apri Impostazioni, poi Backup Cloud, poi Ripristina da Backup, e inserisci il tuo codice di recupero. Il vault torna con profili, scadenze e promemoria intatti.

L'app controlla anche prima di scrivere. Se il backup cloud rileva un backup già esistente in quell'account, ti chiede di scegliere tra ripristinarlo e ricominciare da zero. Un telefono nuovo non può sovrascrivere silenziosamente ciò che è già presente.

### Passare da iPhone ad Android (e Viceversa)

Il backup cloud resta su un'unica piattaforma, perché usa il tuo iCloud personale sui dispositivi Apple e il tuo Google Drive personale su Android. Per passare dall'uno all'altro serve l'altra strada.

Usa l'Esportazione Vault. Impostazioni, Esporta Vault produce un unico file protetto da password che contiene tutto, e scegli tu dove farlo finire: l'app File, un drive, un'email a te stesso. Sul nuovo telefono, Impostazioni, Importa Vault lo rilegge. Funziona in entrambe le direzioni e mantiene nomi, date, promemoria, colori, note e allegati come erano.

Quel file esportato è anche la risposta per chi vuole una copia che non dipenda affatto da un account cloud. È sensato tenerne una su un drive a casa, indipendentemente dal telefono che usi.

## Una Routine di Backup Che Sopravvive a un Telefono Perso

Venti minuti, una volta sola, prima del prossimo viaggio:

- Attiva il backup crittografato e lascia che il primo caricamento si completi mentre sei sul wifi di casa.
- Scrivi il codice di recupero da qualche parte che non sia il telefono, poi rileggilo da quella copia per verificare che sia leggibile.
- Fai una seconda copia del codice e conservala in un posto diverso dalla prima.
- Esporta il vault una volta e salva il file in un posto che controlli, come alternativa che non dipende da nessun account cloud.
- Controlla che l'app mostri un backup recente prima di partire, allo stesso modo in cui controlli che i passaporti siano in valigia.

Niente di tutto questo è drammatico, ed è proprio questo il punto. Le famiglie che gestiscono bene un telefono rubato all'estero non sono quasi mai quelle che hanno reagito in modo brillante. Sono quelle che hanno passato venti minuti banali al tavolo della cucina due settimane prima.

Un'ultima nota sulle aspettative. Il backup è un livello di sicurezza, e non garantisce nulla: gli account cloud si bloccano, i codici si dimenticano, i servizi di archiviazione hanno le loro giornate storte. Per i documenti che contano davvero, tieni anche qualcosa di indipendente, che sia una copia stampata in un cassetto a casa o una seconda esportazione su un drive.

**Prima di farci affidamento:** questo è un blog, non una fonte ufficiale. Le regole e i dettagli cambiano, e la tua situazione può essere diversa. Controlliamo quello che pubblichiamo, e possiamo comunque sbagliare o essere superati. Se qualcosa qui conta per i tuoi programmi, confermalo con l'autorità competente prima di agire.

## Domande Frequenti

### Cosa significa davvero un backup crittografato?

Significa che la copia viene cifrata sul tuo telefono prima ancora di essere inviata, usando una chiave che resta con te. Chiunque conservi il file in seguito ha in mano un blocco di dati illeggibili, non il tuo passaporto. La parola ha senso solo se sai rispondere alla domanda successiva: chi ha la chiave? Se l'azienda che ha creato l'app può leggere i tuoi documenti, la cifratura li protegge dagli estranei, non dall'azienda stessa.

### Cosa succede se perdo la mia chiave di backup?

Il backup resta cifrato e nessuno può aprirlo, noi compresi. Non esiste un account, non esiste un reset della password, e non esiste un canale di assistenza che possa recuperarlo, perché il codice di recupero non arriva mai fino a noi. È lo scambio deliberato per garantire che nessun altro possa leggere i tuoi documenti. Scrivi il codice prima di fare affidamento sul backup, conservalo in un posto separato dal telefono, e rileggilo una volta per verificare che tu riesca davvero a farlo.

### Il backup cloud è sicuro per le scansioni del passaporto?

Dipende interamente da cosa arriva effettivamente nel cloud. Una foto del passaporto in una normale libreria fotografica o in una cartella sincronizzata arriva leggibile, e chiunque acceda a quell'account può leggerla. Un backup cifrato sul dispositivo prima del caricamento arriva come testo cifrato, quindi il fornitore di archiviazione conserva qualcosa che non può aprire. Travel Document Vault cifra il vault sul tuo telefono con AES-256-GCM e invia il file cifrato al tuo iCloud o Google Drive personale, non a un server dell'azienda.

### Posso ripristinare i miei documenti su un telefono diverso?

Sì. Installa l'app sul nuovo telefono, accedi allo stesso account iCloud o Google, poi apri Impostazioni, Backup Cloud, Ripristina da Backup e inserisci il tuo codice di recupero. I tuoi profili, documenti, scadenze e promemoria tornano esattamente come li avevi lasciati. Tieni presente che un backup di sistema del dispositivo non fa questo da solo: reinstalla l'app ma non può decifrare i tuoi documenti, perché la chiave di cifratura non lascia mai il dispositivo originale.

### Il backup funziona tra iPhone e Android?

Il backup cloud in sé resta su un'unica piattaforma, perché usa il tuo iCloud personale su iPhone e iPad e il tuo Google Drive personale su Android. Per passare dall'uno all'altro, usa invece l'Esportazione Vault: Impostazioni, Esporta Vault crea un unico file .tdvault protetto da password che puoi inviarti come preferisci, poi Impostazioni, Importa Vault sul nuovo telefono lo rilegge. L'importazione funziona tra piattaforme diverse in entrambe le direzioni e mantiene intatti nomi, date, promemoria, note e allegati.

### Cosa viene salvato nel backup e cosa resta sul dispositivo?

Il backup contiene una copia cifrata del tuo vault: ogni profilo, scansione, scadenza, promemoria e nota. Il tuo codice di recupero non è incluso e non lascia mai il dispositivo. Lo stesso vale per il blocco dell'app, quindi Face ID, Touch ID o il tuo PIN proteggono il telefono mentre la cifratura protegge il file. Anche gli snapshot locali automatici restano solo sul dispositivo, ed è per questo che non possono riportare indietro il tuo vault su un telefono sostitutivo.

## Articoli Correlati

[Privacy e Sicurezza7 min di letturaiCloud vs Google Photos vs Vault Crittografato: Il Modo più Sicuro per Archiviare il Tuo Passaporto](https://traveldocumentvault.com/it/blog/safest-way-to-store-passport-digitally/)

[Privacy7 min di letturaÈ sicuro archiviare il passaporto in Google Photos? Ciò che è importante sapere](https://traveldocumentvault.com/it/blog/is-it-safe-to-store-passport-in-google-photos/)
