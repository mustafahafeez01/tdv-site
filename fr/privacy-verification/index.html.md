# Vérification de la confidentialité | Travel Document Vault

> Confidentialité vérifiable : zéro traceur, aucune collecte de données, tout sur l'appareil par défaut, sans compte. Chaque autorisation est expliquée.

Source: https://traveldocumentvault.com/fr/privacy-verification/

---

## Nos déclarations de confidentialité

### Zéro suivi

Aucun SDK d'analyse, aucune bibliothèque publicitaire, aucun pixel de suivi dans l'application.

### Pas de collecte de données sortantes

L'application n'établit zéro connexion sortante par défaut. Elle fonctionne complètement hors ligne. Le seul usage réseau est la sauvegarde cloud Pro, qui se synchronise avec votre propre iCloud ou Google Drive — jamais sur nos serveurs.

### Sur l'appareil par défaut

Tous les documents, les analyses et les données restent sur votre appareil. Il n'y a pas de cloud TDV, pas de serveur TDV, pas de backend TDV. Les utilisateurs Pro peuvent optionnellement sauvegarder leur coffre chiffré sur leur propre compte iCloud ou Google Drive — seuls ils détiennent la clé de récupération.

### Chiffrement AES-256-GCM

Chaque document est chiffré avant de toucher le stockage de votre appareil.

## Vérification

Vous n'avez pas besoin de nous faire confiance. Vous pouvez confirmer chaque déclaration ci-dessus avec des outils gratuits et libres disponibles publiquement.

### 1. Test du trafic réseau

Installez un moniteur réseau tel que **mitmproxy** (gratuit, open source), **Wireshark** (gratuit, open source), ou **Charles Proxy**. Ouvrez Travel Document Vault, analysez un document, parcourez votre coffre et définissez un rappel. Vous ne devriez pas voir vos documents, scans, dates d'expiration ou le contenu de votre coffre envoyés à Travel Document Vault. Le trafic réseau devrait se limiter à des fonctions précises : rapports de crash Sentry optionnels, vérifications d'achat App Store ou Google Play, sauvegarde cloud optionnelle vers votre propre compte iCloud ou Google Drive, et une vérification de correctifs expliquée ci-dessous.

Réglages propose un bouton **Rechercher des mises à jour**. Cette vérification est désactivée par défaut : elle s’exécute lorsque vous appuyez sur le bouton, ou une fois par lancement si vous activez Vérifier les mises à jour à l’ouverture. Un téléchargement en cours peut continuer après le passage de l’application en arrière-plan. La vérification contacte **updates.traveldocumentvault.com** — notre propre serveur de mise à jour, exploité par nous sur Google Cloud, qui distribue les fichiers de mise à jour signés cryptographiquement à partir d'un compartiment de stockage. Le gestionnaire de mises à jour n’écrit pas de journaux de requêtes applicatifs. Chaque mise à jour est signée avec une clé que seuls nous détenons, et l'application refuse tout ce dont la signature ne correspond pas au certificat qui y est intégré. Le même appui vérifie aussi si une version plus récente de l'application est disponible sur l'**App Store** ou sur **Google Play**. Cette fonction existe pour que certains correctifs puissent vous parvenir plus rapidement qu'en attendant une toute nouvelle publication sur l'App Store ou Google Play, utile pour les correctifs urgents, selon la nature du correctif. Le stockage des documents ne nécessite aucun réseau ; les vérifications d’achat des boutiques et les fonctionnalités facultatives activées peuvent effectuer des appels réseau automatiques.

### 2. Rapport de confidentialité de l'application iOS

Sur iPhone, allez à **Réglages > Confidentialité et sécurité > Rapport de confidentialité des applications**. Cette fonction intégrée d'Apple montre quelles applications ont contacté des domaines réseau. Travel Document Vault ne nous envoie pas vos documents, scans, dates d'expiration ou le contenu de votre coffre. Si vous avez activé la sauvegarde cloud Pro, vous verrez des connexions aux domaines iCloud d'Apple — c'est votre propre sauvegarde qui se synchronise avec votre propre compte iCloud.

### 3. Android — vérifier votre confidentialité

Android n'a pas de rapport de confidentialité intégré unique comme l'iPhone. Deux façons simples de vérifier par vous-même : consultez la section **Data Safety** de cette application sur sa page Google Play (elle indique clairement ce qui est collecté, ce qui est partagé, que vos données sont chiffrées en transit, et qu'elles ne peuvent pas être supprimées) — ou utilisez un moniteur réseau comme décrit à l'étape 1 ci-dessus.

Si vous avez activé la sauvegarde cloud, vous remarquerez peut-être une certaine activité vers les serveurs de Google (adresses web se terminant par **googleapis.com**). Ces connexions transmettent vos fichiers de coffre chiffrés, les vérifications de connexion et les métadonnées de sauvegarde non chiffrées, comme le nom de l’appareil, les nombres d’éléments et les horodatages, à **votre propre** compte Google Drive — le même que celui que vous utilisez déjà pour vos photos ou Gmail. Nous ne le voyons jamais, ne le recevons jamais et n'en gardons de copie nulle part. Vous seul détenez la clé de récupération permettant de le déverrouiller.

### 4. Étiquettes de confidentialité de l'App Store et du Play Store

Apple et Google exigent que les développeurs déclarent les données que leur application collecte. Vérifiez l'annonce App Store ou Google Play pour Travel Document Vault. Notre déclaration: **aucune donnée collectée**.

## Comment nous testons la sécurité de l'application

Nous ne nous contentons pas d'affirmer que l'application est sûre. Nous la vérifions, avec les mêmes outils ouverts et les mêmes normes publiques que celles utilisées par le secteur de la sécurité.

### Comparez l’application à une norme publique

Vous pouvez comparer Travel Document Vault à l'[OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), la liste de référence du secteur pour la manière dont une application mobile doit stocker les données, utiliser le chiffrement, se verrouiller derrière Face ID ou un code PIN, et gérer les liens provenant d'autres applications. Chacun peut consulter cette norme et la comparer au comportement réel de l'application.

### Analyse du code source

Les outils d’analyse statique comme [Semgrep](https://semgrep.dev/) peuvent détecter des schémas non sécurisés, comme un chiffrement faible ou une gestion incorrecte des données. Il s’agit d’une méthode de vérification, pas d’une preuve que chaque version a passé une analyse.

### Comportement de l’application compilée

L’application chiffre les fichiers de documents sur votre appareil, et sa configuration de mise à jour exige un certificat de signature du code. Vous pouvez vérifier son comportement réseau en suivant les étapes ci-dessus.

### Vous avez trouvé un problème ? Dites-le-nous

Si vous repérez un problème de sécurité, écrivez à [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Les détails de notre procédure de divulgation sont publiés à l'adresse [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Il s'agit de notre propre évaluation par rapport à une norme publique, et non d'un audit indépendant ni d'une certification. Dernière révision en juillet 2026.

## Chaque autorisation expliquée

Les applications Android déclarent les autorisations dans leur manifeste. Certaines sont demandées directement par l'application et d'autres sont héritées des bibliothèques dont l'application dépend. Voici une ventilation transparente de chaque autorisation, regroupée par objectif.

### Autorisations que l'application utilise directement

### Caméra

iOS + Android

**Pourquoi nous demandons:** Pour numériser vos pages de passeport, de visa ou de document de voyage directement depuis l'application.

**Ce que nous ne faisons jamais:** Les photos sont enregistrées localement sur votre appareil. Elles ne sont jamais téléchargées, transmises ou envoyées nulle part.

### Galerie de photos / Photos / Stockage

iOS + Android

**Pourquoi nous demandons:** Pour que vous puissiez importer une photo existante d’un document. Sur Android, l’application utilise le sélecteur de photos du système : READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE et READ_MEDIA_IMAGES sont donc retirées de la version finale. Les fichiers de sauvegarde chiffrés (.tdvault) sont exportés via la feuille de partage de votre téléphone, qui ne nécessite aucune autorisation de stockage.

**Ce que nous ne faisons jamais:** L'application ne lit que l'image que vous sélectionnez. Elle n'analyse jamais, n'indexe pas ou ne parcourt votre galerie de photos ou système de fichiers.

### Face ID / Touch ID / Déverrouillage biométrique

iOS + Android

**Pourquoi nous demandons:** Pour verrouiller et déverrouiller l'application pour que seul vous puissiez accéder à vos documents. Sur Android 6-8, USE_FINGERPRINT est utilisé. Sur Android 9+, USE_BIOMETRIC est utilisé à la place.

**Ce que nous ne faisons jamais:** Vos données biométriques ne quittent jamais votre appareil. Le système d'exploitation gère l'authentification et retourne uniquement un résultat réussi/échoué à l'application.

### Notifications, Vibration, Démarrage terminé, Wake Lock

Android

**Pourquoi nous demandons:** Pour fournir les rappels d’expiration sur l’appareil pour vos documents. RECEIVE_BOOT_COMPLETED reprogramme vos rappels après un redémarrage de l'appareil. WAKE_LOCK prend en charge la gestion des notifications. VIBRATE accompagne la livraison des notifications.

**Ce que nous ne faisons jamais:** Aucune notification marketing, promotionnelle ou tierce n'est jamais envoyée. Les rappels sont entièrement programmés sur votre appareil.

### Internet, État du réseau, État du Wi-Fi

Android

**Pourquoi ils apparaissent :** Ils sont nécessaires pour des fonctions utilisant le réseau : **rapports de crash Sentry** (opt-in, désactivés par défaut), **facturation App Store ou Google Play** pour l'achat de la mise à niveau Pro, **sauvegarde cloud Pro** (optionnelle), qui synchronise votre coffre chiffré avec votre propre iCloud ou Google Drive, et le bouton **Rechercher des mises à jour** dans Réglages (s’exécute uniquement lorsque vous appuyez dessus, ou à l’ouverture si vous activez cette option). ACCESS_NETWORK_STATE et ACCESS_WIFI_STATE permettent de vérifier si une connexion est disponible avant d'essayer d'envoyer.

**Ce que nous ne faisons pas :** L'application n'envoie pas vos documents, scans, dates d'expiration, photos ou le contenu de votre coffre à Travel Document Vault. Elle fonctionne complètement hors ligne pour le stockage normal des documents et les rappels.

### Autorisations héritées des bibliothèques (non utilisées par l'application)

Les applications Android incluent des bibliothèques tierces pour des fonctionnalités telles que les achats in-app, les rapports de défaillance et les notifications. Ces bibliothèques déclarent les autorisations dans leurs propres manifestes, qui sont fusionnés dans l'application finale. Les autorisations ci-dessous sont déclarées par des dépendances, pas par notre code. L'application n'appelle jamais les API derrière elles.

### Enregistrer l'audio

Héritée, retirée

**Pourquoi cela apparaît:** Cette autorisation est déclarée par les bibliothèques de caméra incluses dans la compilation. Travel Document Vault la retire du manifeste Android final, car l’application capture des images fixes de documents et n’enregistre jamais d’audio ni de vidéo.

**Comment vous pouvez confirmer:** L'application ne vous demandera jamais l'accès au microphone. Si vous vérifiez le gestionnaire de permissions de votre appareil, vous verrez que l'enregistrement audio n'est pas accordé à Travel Document Vault.

### Fenêtre d'alerte système

Hérité

Déclaré par le cadre Flutter pour les superpositions de développement et de débogage. Travel Document Vault la retire du manifeste Android final et n’utilise pas de fenêtres superposées.

### Détecter la capture d'écran

Hérité

Déclaré par une dépendance du cadre. Travel Document Vault active la protection contre les captures d’écran par défaut sur les écrans de documents lorsqu’elle est prise en charge. Vous pouvez modifier ce réglage dans Réglages.

### Autorisations de comptage de badges

Hérité

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, et PROVIDER_INSERT_BADGE sont déclarés par la bibliothèque de notifications pour afficher les comptages de badges non lus sur votre icône d'écran d'accueil sur différents fabricants Android (Samsung, Huawei, Xiaomi, etc.). Ils ne font que modifier le nombre affiché sur l'icône de l'application.

### Facturation, Vérifier la licence, Référence d'installation

Google Play

Déclaré par la bibliothèque de facturation Google Play (pour l'achat de mise à niveau Pro) et la bibliothèque de référence d'installation Play. Ce sont des exigences standard du Google Play Store et n'accèdent pas à des données personnelles.

### Télécharger sans notification

Hérité

Déclaré par une dépendance du cadre. Un téléchargement de mise à jour lancé dans l’application peut continuer après son passage en arrière-plan, et iCloud peut gérer les transferts de fichiers via le système d’exploitation.

### Autorisations que nous ne demandons pas

Ce sont des autorisations courantes que de nombreuses applications demandent. Nous n'en demandons aucune et elles n'apparaissent pas dans notre manifeste.

**Localisation** — Pas de GPS, pas de géofencing, pas de suivi **Contacts** — Pas d'accès à votre carnet d'adresses **Bluetooth** — Pas de réseau local ou de scan d'appareil **Calendrier** — Les rappels sont gérés sur l'appareil, pas via votre calendrier

Vous avez d'autres questions? Lisez notre [Politique de confidentialité](https://traveldocumentvault.com/privacy-policy/) complète ou consultez la [FAQ](https://traveldocumentvault.com/fr/faq/).
