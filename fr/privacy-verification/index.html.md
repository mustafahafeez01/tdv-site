# Vérification de la confidentialité | Travel Document Vault

> Déclarations de confidentialité vérifiables pour Travel Document Vault. Zéro suivi, zéro collecte de données. Sur l

Source: https://traveldocumentvault.com/fr/privacy-verification/

---

## Nos déclarations de confidentialité

### Zéro suivi

Aucun SDK d'analyse, aucune bibliothèque publicitaire, aucun pixel de suivi dans l'application.

### Pas de collecte de données sortantes

L'application n'établit zéro connexion sortante par défaut. Elle fonctionne complètement hors ligne. Le seul usage réseau est la sauvegarde cloud Pro, qui se synchronise avec votre propre iCloud ou Google Drive - jamais sur nos serveurs.

### Sur l'appareil par défaut

Tous les documents, les analyses et les données restent sur votre appareil. Il n'y a pas de cloud TDV, pas de serveur TDV, pas de backend TDV. Les utilisateurs Pro peuvent optionnellement sauvegarder leur coffre chiffré sur leur propre compte iCloud ou Google Drive - seuls ils détiennent la clé de récupération.

### Chiffrement AES-256-GCM

Chaque document est chiffré avant de toucher le stockage de votre appareil.

## Vérification

Vous n'avez pas besoin de nous faire confiance. Vous pouvez confirmer chaque déclaration ci-dessus avec des outils gratuits et libres disponibles publiquement.

### 1. Test du trafic réseau

Installez un moniteur réseau tel que **mitmproxy** (gratuit, open source), **Wireshark** (gratuit, open source), ou **Charles Proxy**. Ouvrez Travel Document Vault, analysez un document, parcourez votre coffre et définissez un rappel. Vous ne devriez pas voir vos documents, scans, dates d'expiration ou le contenu de votre coffre envoyés à Travel Document Vault. Le trafic réseau devrait se limiter à des fonctions précises : rapports de crash Sentry optionnels, vérifications d'achat App Store ou Google Play, sauvegarde cloud optionnelle vers votre propre compte iCloud ou Google Drive, et une vérification manuelle de correctifs expliquée ci-dessous.

Les réglages proposent un bouton **Check for Updates**. Il s'agit d'une vérification manuelle, jamais automatique - elle ne s'exécute que lorsque vous appuyez dessus vous-même, jamais en arrière-plan et jamais d'elle-même. La vérification contacte **updates.traveldocumentvault.com** - notre propre serveur de mise à jour, exploité par nous sur Google Cloud, qui distribue les fichiers de mise à jour signés cryptographiquement à partir d'un compartiment de stockage. Nous n'enregistrons pas la vérification : les journaux de requête sont désactivés de notre côté, aucune adresse IP n'est conservée. Chaque mise à jour est signée avec une clé que seuls nous détenons, et l'application refuse tout ce dont la signature ne correspond pas au certificat qui y est intégré. Le même appui vérifie aussi si une version plus récente de l'application est disponible sur l'**App Store** ou sur **Google Play**. Cette fonction existe pour que certains correctifs puissent vous parvenir plus rapidement qu'en attendant une toute nouvelle publication sur l'App Store ou Google Play, utile pour les correctifs urgents, selon la nature du correctif. Même règle que pour le reste de cette page : aucun appel réseau sans que vous le demandiez.

### 2. Rapport de confidentialité de l'application iOS

Sur iPhone, allez à **Réglages > Confidentialité et sécurité > Rapport de confidentialité des applications**. Cette fonction intégrée d'Apple montre quelles applications ont contacté des domaines réseau. Travel Document Vault ne nous envoie pas vos documents, scans, dates d'expiration ou le contenu de votre coffre. Si vous avez activé la sauvegarde cloud Pro, vous verrez des connexions aux domaines iCloud d'Apple - c'est votre propre sauvegarde qui se synchronise avec votre propre compte iCloud.

### 3. Android - vérifier votre confidentialité

Android n'a pas de rapport de confidentialité intégré unique comme l'iPhone. Deux façons simples de vérifier par vous-même : consultez la section **Data Safety** de cette application sur sa page Google Play (elle indique clairement ce qui est collecté, ce qui est partagé, que vos données sont chiffrées en transit, et qu'elles ne peuvent pas être supprimées) - ou utilisez un moniteur réseau comme décrit à l'étape 1 ci-dessus.

Si vous avez activé la sauvegarde cloud, vous remarquerez peut-être une certaine activité vers les serveurs de Google (adresses web se terminant par **googleapis.com**). C'est normal et sans risque : il s'agit uniquement de votre fichier de sauvegarde verrouillé et chiffré, ainsi que d'une vérification de connexion, envoyés directement à **votre propre** compte Google Drive - le même que celui que vous utilisez déjà pour vos photos ou Gmail. Nous ne le voyons jamais, ne le recevons jamais et n'en gardons de copie nulle part. Vous seul détenez la clé de récupération permettant de le déverrouiller.

### 4. Étiquettes de confidentialité de l'App Store et du Play Store

Apple et Google exigent que les développeurs déclarent les données que leur application collecte. Vérifiez l'annonce App Store ou Google Play pour Travel Document Vault. Notre déclaration: **aucune donnée collectée**.

## Comment nous testons la sécurité de l'application

Nous ne nous contentons pas d'affirmer que l'application est sûre. Nous la vérifions, avec les mêmes outils ouverts et les mêmes normes publiques que celles utilisées par le secteur de la sécurité.

### Nous appliquons une norme publique

Nous évaluons Travel Document Vault au regard de l'[OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), la liste de référence du secteur pour la manière dont une application mobile doit stocker les données, utiliser le chiffrement, se verrouiller derrière Face ID ou un code PIN, et gérer les liens provenant d'autres applications. Chacun peut consulter cette norme et la comparer au comportement réel de l'application.

### Nous analysons notre propre code

Avant chaque publication, nous exécutons une analyse statique de notre code avec [Semgrep](https://semgrep.dev/), un outil open source qui détecte les schémas non sécurisés, comme un chiffrement faible ou une gestion incorrecte des données, afin de les corriger tôt.

### Nous analysons l'application compilée

Nous examinons également nos versions publiées à l'aide d'outils d'analyse de sécurité pour applications mobiles, en vérifiant comment la version stocke les données, ce à quoi elle peut accéder, et comment elle est signée.

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

**Pourquoi nous demandons:** Pour que vous puissiez importer une photo existante d'un document, et pour que l'application puisse exporter des fichiers de sauvegarde chiffre (.tdvault) lorsque vous les demandez. Sur les anciennes versions d'Android, READ_EXTERNAL_STORAGE et WRITE_EXTERNAL_STORAGE sont nécessaires pour cela. Sur Android 13+, READ_MEDIA_IMAGES est utilisé à la place.

**Ce que nous ne faisons jamais:** L'application ne lit que l'image que vous sélectionnez. Elle n'analyse jamais, n'indexe pas ou ne parcourt votre galerie de photos ou système de fichiers.

### Face ID / Touch ID / Déverrouillage biométrique

iOS + Android

**Pourquoi nous demandons:** Pour verrouiller et déverrouiller l'application pour que seul vous puissiez accéder à vos documents. Sur Android 6-8, USE_FINGERPRINT est utilisé. Sur Android 9+, USE_BIOMETRIC est utilisé à la place.

**Ce que nous ne faisons jamais:** Vos données biométriques ne quittent jamais votre appareil. Le système d'exploitation gère l'authentification et retourne uniquement un résultat réussi/échoué à l'application.

### Notifications, Vibration, Démarrage terminé, Wake Lock

Android

**Pourquoi nous demandons:** Pour fournir les rappels d'expiration sur l'appareil que vous avez vous-même définis. RECEIVE_BOOT_COMPLETED reprogramme vos rappels après un redémarrage de l'appareil. WAKE_LOCK garantit que les rappels se déclenchent de manière fiable même lorsque le téléphone est en sommeil. VIBRATE accompagne la livraison des notifications.

**Ce que nous ne faisons jamais:** Aucune notification marketing, promotionnelle ou tierce n'est jamais envoyée. Les rappels sont entièrement programmés sur votre appareil.

### Internet, État du réseau, État du Wi-Fi

Android

**Pourquoi ils apparaissent :** Ils sont nécessaires pour des fonctions utilisant le réseau : **rapports de crash Sentry** (opt-in, désactivés par défaut), **facturation App Store ou Google Play** pour l'achat de la mise à niveau Pro, **sauvegarde cloud Pro** (optionnelle), qui synchronise votre coffre chiffré avec votre propre iCloud ou Google Drive, et le bouton manuel **Check for Updates** dans les réglages (ne s'exécute que lorsque vous appuyez dessus). ACCESS_NETWORK_STATE et ACCESS_WIFI_STATE permettent de vérifier si une connexion est disponible avant d'essayer d'envoyer.

**Ce que nous ne faisons pas :** L'application n'envoie pas vos documents, scans, dates d'expiration, photos ou le contenu de votre coffre à Travel Document Vault. Elle fonctionne complètement hors ligne pour le stockage normal des documents et les rappels.

### Autorisations héritées des bibliothèques (non utilisées par l'application)

Les applications Android incluent des bibliothèques tierces pour des fonctionnalités telles que les achats in-app, les rapports de défaillance et les notifications. Ces bibliothèques déclarent les autorisations dans leurs propres manifestes, qui sont fusionnés dans l'application finale. Les autorisations ci-dessous sont déclarées par des dépendances, pas par notre code. L'application n'appelle jamais les API derrière elles.

### Enregistrer l'audio

Héritée, jamais utilisée

**Pourquoi cela apparaît:** Cette autorisation est déclarée par une bibliothèque tierce incluse dans la compilation (généralement le plugin caméra ou médias). Elle apparaît dans le manifeste Android mais n'est jamais déclenchée par notre code. L'application n'enregistre pas l'audio ou la vidéo en aucune circonstance.

**Comment vous pouvez confirmer:** L'application ne vous demandera jamais l'accès au microphone. Si vous vérifiez le gestionnaire de permissions de votre appareil, vous verrez que l'enregistrement audio n'est pas accordé à Travel Document Vault.

### Fenêtre d'alerte système

Hérité

Déclaré par le cadre Flutter pour les superpositions de développement et de débogage. Cette autorisation n'est pas utilisée dans la compilation de lancement de l'application et n'a aucun effet sur votre confidentialité.

### Détecter la capture d'écran

Hérité

Déclaré par une dépendance du cadre. L'application ne détecte pas, ne bloque pas ou ne répond pas aux captures d'écran. Cette autorisation n'a aucun effet sur votre utilisation.

### Autorisations de comptage de badges

Hérité

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, et PROVIDER_INSERT_BADGE sont déclarés par la bibliothèque de notifications pour afficher les comptages de badges non lus sur votre icône d'écran d'accueil sur différents fabricants Android (Samsung, Huawei, Xiaomi, etc.). Ils ne font que modifier le nombre affiché sur l'icône de l'application.

### Facturation, Vérifier la licence, Référence d'installation

Google Play

Déclaré par la bibliothèque de facturation Google Play (pour l'achat de mise à niveau Pro) et la bibliothèque de référence d'installation Play. Ce sont des exigences standard du Google Play Store et n'accèdent pas à des données personnelles.

### Télécharger sans notification

Hérité

Déclaré par une dépendance du cadre. L'application ne télécharge pas les fichiers en arrière-plan.

### Autorisations que nous ne demandons pas

Ce sont des autorisations courantes que de nombreuses applications demandent. Nous n'en demandons aucune et elles n'apparaissent pas dans notre manifeste.

**Localisation** - Pas de GPS, pas de géofencing, pas de suivi **Contacts** - Pas d'accès à votre carnet d'adresses **Bluetooth** - Pas de réseau local ou de scan d'appareil **Calendrier** - Les rappels sont gérés sur l'appareil, pas via votre calendrier

Vous avez d'autres questions? Lisez notre [Politique de confidentialité](https://traveldocumentvault.com/privacy-policy/) complète ou consultez la [FAQ](https://traveldocumentvault.com/fr/faq/).
