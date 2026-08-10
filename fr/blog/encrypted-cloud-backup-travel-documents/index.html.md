# Sauvegarde cloud chiffrée pour vos documents de voyage : qui détient la clé

> Ce que signifie vraiment une sauvegarde chiffrée pour vos scans de passeport, pourquoi un code de récupération ne peut être réinitialisé par personne, et comment garder une copie que vous pourrez réellement restaurer.

Source: https://traveldocumentvault.com/fr/blog/encrypted-cloud-backup-travel-documents/

---

![Un parent et un enfant assis ensemble sur un canapé au crépuscule, regardant un téléphone et une petite clé dorée posée sur la table à côté d'un passeport, tandis qu'un nuage au-dessus ne contient que des symboles brouillés derrière un cadenas](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Points clés à retenir

- **Une « sauvegarde chiffrée » ne veut dire quelque chose que si vous savez qui détient la clé.** Si l'entreprise peut lire vos documents, le chiffrement les protège des inconnus, pas de l'entreprise.
- Une sauvegarde chiffrée sur votre téléphone avant l'envoi arrive dans le cloud sous forme de données illisibles. Le fournisseur de stockage détient du texte chiffré, pas votre passeport.
- **Pas de compte signifie pas de réinitialisation de mot de passe.** Perdez le code de récupération et la sauvegarde ne pourra être ouverte par personne, nous y compris. C'est un compromis voulu.
- Notez le code avant de dépendre de la sauvegarde, gardez-le loin du téléphone, et relisez-le une fois pour vérifier qu'il est lisible.
- Une sauvegarde système de l'appareil réinstalle l'application, mais ne peut pas récupérer vos documents, car la clé de chiffrement n'a jamais quitté l'ancien téléphone.

Vous avez scanné quatre passeports, deux visas et les actes de naissance des enfants dans une application qui garde tout sur votre téléphone. Bien. Puis l'inquiétude évidente arrive : que se passe-t-il si le téléphone tombe à l'eau, ou disparaît d'une table de café à Lisbonne.

La réponse, c'est une sauvegarde. Le problème, c'est que presque toutes les applications emploient l'expression « sauvegarde chiffrée », et presque aucune ne veut dire la même chose par là. Cet article explique ce que ces mots signifient réellement et ce que vous acceptez lorsqu'une entreprise ne peut véritablement pas lire vos données. Il se termine par une courte routine à suivre la semaine avant un voyage, pour qu'un téléphone perdu reste un désagrément plutôt qu'un désastre.

## Ce que signifie vraiment une « sauvegarde chiffrée »

Le chiffrement brouille un fichier de sorte que seule une clé correspondante puisse le rendre à nouveau lisible. Cela, c'est la base. Ce qui détermine s'il vous protège vraiment, c'est l'endroit où le brouillage a lieu et qui finit par détenir la clé.

Deux systèmes se vendent tous deux comme « sauvegarde chiffrée », et pourtant ils se comportent très différemment.

Le premier envoie le fichier vers le serveur de l'entreprise via une connexion chiffrée, puis le stocke chiffré au repos. Ces deux affirmations sont vraies, et toutes deux paraissent rassurantes. Mais l'entreprise détient toujours la clé, donc elle peut déchiffrer vos documents chaque fois qu'elle en a besoin : pour faire fonctionner une fonctionnalité, pour répondre à une demande légale, ou parce que quelqu'un en interne a fait une erreur. Votre scan de passeport est lisible à l'autre bout.

Le second système brouille le fichier sur votre téléphone avant qu'il n'aille où que ce soit, à l'aide d'une clé dérivée de quelque chose que vous seul possédez. Ce qui arrive dans le stockage est un bloc de bruit, et personne à l'autre bout ne peut le lire, parce que personne à l'autre bout ne détient la clé. On appelle généralement cela le chiffrement de bout en bout, ou « zero-knowledge ».

La question à poser à n'importe quelle application tient donc en peu de mots : **qui détient la clé ?** Tout le reste du discours marketing en découle.

## Le code de récupération, et pourquoi personne ne peut le réinitialiser

Voici la partie que la plupart des articles évitent, et elle mérite d'être dite clairement : Travel Document Vault n'a pas de comptes. Vous ne nous avez jamais donné d'adresse e-mail, nous ne vous avons jamais défini de mot de passe, et il n'existe aucune trace de vous sur le moindre serveur que nous exploitons. Quand vous activez la [sauvegarde cloud](https://traveldocumentvault.com/fr/cloud-backup/), l'application génère un code de récupération de 24 caractères et en dérive la clé de chiffrement. Le coffre chiffré est ensuite envoyé vers **votre propre iCloud sur iPhone et iPad, ou votre propre Google Drive sur Android**, plutôt que vers nous.

La conséquence est inévitable. **Si vous perdez ce code de récupération, la sauvegarde ne pourra plus jamais être ouverte.** Ni par vous, ni par Apple ou Google, ni par nous. Il n'existe aucun lien de réinitialisation, car il n'y a aucun compte auquel le rattacher. Il n'existe aucun ticket d'assistance qui puisse le récupérer, car nous ne l'avons jamais détenu et sommes incapables de le deviner.

Écrit noir sur blanc, cela peut sembler dur, et il vaut mieux être honnête à ce sujet plutôt que de l'enterrer dans un écran de paramètres. C'est le même compromis qu'avec la clé de votre maison : la serrure n'a de valeur que parce qu'aucun serrurier au monde n'en garde un double, et c'est exactement pour cela que perdre la vôtre devient votre problème. Une entreprise capable de restaurer vos documents après que vous ayez tout oublié est une entreprise qui aurait pu les lire depuis le début.

Traitez donc ce code comme la seule chose à ne pas rater :

- Enregistrez-le avant de compter sur la sauvegarde, pas après.
- Gardez-le à un endroit que la perte du téléphone n'atteint pas. Un gestionnaire de mots de passe sur un autre appareil fonctionne. Un papier dans le tiroir où se trouvent les actes de naissance aussi.
- Relisez-le une fois, où que vous l'ayez stocké. Une écriture qui semblait claire sur le moment a tendance à devenir ambiguë dans l'urgence.
- Deux copies à deux endroits valent mieux qu'une copie parfaite.

## La sauvegarde cloud est-elle sûre pour les scans de passeport ?

Cela dépend entièrement de ce qui arrive dans le cloud, et c'est une question qui concerne l'application plutôt que le cloud lui-même.

Une photo de votre passeport dans une bibliothèque de photos ordinaire ou un dossier synchronisé arrive lisible. Elle réside dans un compte protégé par un mot de passe que vous avez peut-être réutilisé. Elle est indexée et vignettée, et quiconque accède à ce compte voit une copie nette de la page d'identité. Nous avons détaillé à quoi ressemble concrètement cette exposition dans [stocker un passeport dans Google Photos](https://traveldocumentvault.com/fr/blog/is-it-safe-to-store-passport-in-google-photos/). C'est un risque réel, et c'est la configuration que la plupart des familles utilisent sans jamais l'avoir vraiment choisie.

Un coffre chiffré sur l'appareil avant l'envoi arrive sous forme de texte chiffré. Quiconque s'introduit dans le compte cloud trouve un fichier qu'il ne peut pas ouvrir. La protection voyage avec le fichier, plutôt que de dépendre du compte où il atterrit.

C'est pourquoi la version honnête de « le cloud est-il sûr » est la suivante : le cloud est une adresse de livraison, pas un modèle de sécurité. Ce qui compte, c'est l'état dans lequel se trouve le fichier quand il y arrive. Notre [comparaison des principaux endroits où l'on conserve des scans de passeport](https://traveldocumentvault.com/fr/blog/safest-way-to-store-passport-digitally/) détaille les compromis de chacun.

| Ce que vous sauvegardez | État à l'arrivée | Qui peut le lire | En cas de compromission du compte |
|---|---|---|---|
| **Photo de votre passeport dans une bibliothèque de photos** | Image lisible | Vous, le fournisseur, toute personne ayant accès au compte | Page d'identité complète exposée |
| **PDF dans un dossier de drive synchronisé** | Fichier lisible | Vous, le fournisseur, toute personne ayant accès au compte | Documents exposés et téléchargeables |
| **Sauvegarde d'application où l'entreprise détient la clé** | Chiffré au repos | Vous et l'entreprise | Dépend de la gestion des clés propre à l'entreprise |
| **Sauvegarde chiffrée sur votre appareil d'abord** | Texte chiffré | Seule la personne qui détient le code de récupération | L'attaquant obtient un fichier illisible |

## Ce qui va dans la sauvegarde, et ce qui reste sur l'appareil

La sauvegarde contient une copie chiffrée du coffre : chaque profil, chaque scan, les dates d'expiration, les rappels, les notes et les pièces jointes. Restaurez-la et l'application retrouve exactement l'état où vous l'aviez laissée.

Trois choses restent volontairement sur le téléphone, et le code de récupération vient en premier : il ne quitte jamais l'appareil, c'est tout l'intérêt. Le verrouillage de l'application reste local lui aussi, donc Face ID, Touch ID ou votre code PIN empêche les autres d'accéder au téléphone pendant que le chiffrement les empêche d'accéder au fichier. Et les instantanés locaux automatiques que l'application prend pendant que vous travaillez restent uniquement sur l'appareil.

Ce dernier point piège beaucoup de gens, alors voici la version sans détour. **Une sauvegarde système de l'appareil réinstalle l'application, mais ne peut pas restaurer vos documents.** La clé de chiffrement n'a jamais quitté l'ancien téléphone, donc le nouveau n'a rien avec quoi déchiffrer. Si vous voulez que votre coffre survive au téléphone, il vous faut soit la sauvegarde cloud activée, soit un fichier exporté enregistré quelque part.

## Restaurer sur un nouveau téléphone

La restauration est rapide, et c'est justement l'intérêt d'avoir fait la préparation en amont.

Installez l'application sur le nouveau téléphone et connectez-vous au même compte iCloud ou Google que celui utilisé auparavant. Ouvrez Réglages, puis Sauvegarde cloud, puis Restaurer depuis la sauvegarde, et saisissez votre code de récupération. Le coffre revient avec ses profils, dates d'expiration et rappels intacts.

L'application vérifie aussi avant d'écrire quoi que ce soit. Si la sauvegarde cloud détecte une sauvegarde existante dans ce compte, elle vous demande de choisir entre restaurer ou repartir de zéro. Un nouveau téléphone ne peut pas écraser discrètement ce qui existe déjà.

### Passer d'iPhone à Android (ou l'inverse)

La sauvegarde cloud reste propre à une plateforme, car elle utilise votre propre iCloud sur les appareils Apple et votre propre Google Drive sur Android. Passer de l'un à l'autre nécessite une autre méthode.

Utilisez l'export du coffre. Réglages, Exporter le coffre produit un seul fichier protégé par mot de passe contenant tout, et vous choisissez sa destination : l'application Fichiers, un drive, un e-mail à vous-même. Sur le nouveau téléphone, Réglages, Importer le coffre le relit. Cela fonctionne dans les deux sens et conserve les noms, dates, rappels, couleurs, notes et pièces jointes tels qu'ils étaient.

Ce fichier exporté est aussi la solution pour quiconque veut une copie qui ne dépend d'aucun compte cloud. C'est une bonne chose à garder sur un disque à la maison, quel que soit le téléphone que vous utilisez.

## Une routine de sauvegarde qui survit à un téléphone perdu

Vingt minutes, une seule fois, avant le prochain voyage :

- Activez la sauvegarde chiffrée et laissez le premier envoi se terminer pendant que vous êtes sur le wifi de la maison.
- Notez le code de récupération quelque part qui n'est pas le téléphone, puis relisez-le depuis cette copie pour vérifier qu'il est lisible.
- Faites une seconde copie du code et gardez-la à un endroit différent de la première.
- Exportez le coffre une fois et enregistrez le fichier à un endroit que vous contrôlez, comme solution indépendante de tout compte cloud.
- Vérifiez que l'application affiche une sauvegarde récente avant de prendre l'avion, tout comme vous vérifieriez que les passeports sont dans le sac.

Rien de tout cela n'est spectaculaire, et c'est bien l'idée. Les familles qui s'en sortent bien après le vol d'un téléphone à l'étranger ne sont presque jamais celles qui ont réagi brillamment sur le moment. Ce sont celles qui ont passé vingt minutes sans éclat à la table de la cuisine deux semaines plus tôt.

Une dernière remarque sur les attentes. La sauvegarde est une couche de sécurité, elle ne garantit rien : des comptes cloud se retrouvent bloqués, des codes s'oublient, des services de stockage ont de mauvais jours. Pour les documents qui comptent vraiment, gardez aussi quelque chose d'indépendant, que ce soit une copie imprimée dans un tiroir à la maison ou un second export sur un disque.

**Avant de vous y fier :** c'est un blog, pas une source officielle. Les règles et les détails changent, et votre situation peut être différente. Nous vérifions ce que nous publions, et nous pouvons quand même nous tromper ou être dépassés. Si un point compte pour vos projets, confirmez-le auprès de l'autorité compétente avant d'agir.

## Questions fréquemment posées

### Que signifie vraiment une sauvegarde chiffrée ?

Cela signifie que la copie est brouillée sur votre téléphone avant d'aller où que ce soit, à l'aide d'une clé qui reste avec vous. Quiconque stocke ensuite le fichier détient un bloc de données illisibles, pas votre passeport. Le mot ne veut dire quelque chose que si vous pouvez répondre à la question suivante : qui détient la clé ? Si l'entreprise qui a créé l'application peut lire vos documents, le chiffrement les protège des inconnus, pas de l'entreprise.

### Que se passe-t-il si je perds ma clé de sauvegarde ?

La sauvegarde reste chiffrée et personne ne peut l'ouvrir, nous y compris. Il n'y a ni compte, ni réinitialisation de mot de passe, ni aucune voie d'assistance capable de la récupérer, car le code de récupération ne nous parvient jamais. C'est le compromis voulu pour que personne d'autre ne puisse non plus lire vos documents. Notez le code avant de compter sur la sauvegarde, gardez-le à part de votre téléphone, et relisez-le une fois pour vérifier que vous le pouvez.

### La sauvegarde cloud est-elle sûre pour les scans de passeport ?

Cela dépend entièrement de ce qui arrive dans le cloud. Une photo de votre passeport dans une bibliothèque de photos classique ou un dossier de synchronisation de fichiers arrive lisible, et quiconque accède à ce compte peut la lire. Une sauvegarde chiffrée sur l'appareil avant l'envoi arrive sous forme de texte chiffré, donc le fournisseur de stockage détient quelque chose qu'il ne peut pas ouvrir. Travel Document Vault chiffre le coffre sur votre téléphone avec AES-256-GCM et envoie le fichier chiffré vers votre propre iCloud ou Google Drive plutôt que vers un serveur d'entreprise.

### Puis-je restaurer mes documents sur un autre téléphone ?

Oui. Installez l'application sur le nouveau téléphone, connectez-vous au même compte iCloud ou Google, puis ouvrez Réglages, Sauvegarde cloud, Restaurer depuis la sauvegarde et saisissez votre code de récupération. Vos profils, documents, dates d'expiration et rappels reviennent tels qu'ils étaient. Notez qu'une sauvegarde système de l'appareil ne fait pas cela toute seule : elle réinstalle l'application mais ne peut pas déchiffrer vos documents, car la clé de chiffrement ne quitte jamais votre appareil d'origine.

### La sauvegarde fonctionne-t-elle entre iPhone et Android ?

La sauvegarde cloud en elle-même reste propre à une plateforme, puisqu'elle utilise votre propre iCloud sur iPhone et iPad et votre propre Google Drive sur Android. Pour passer de l'une à l'autre, utilisez plutôt l'export du coffre : Réglages, Exporter le coffre crée un seul fichier .tdvault protégé par mot de passe que vous pouvez vous envoyer comme bon vous semble, puis Réglages, Importer le coffre sur le nouveau téléphone le relit. L'import fonctionne dans les deux sens entre plateformes et conserve intacts les noms, dates, rappels, notes et pièces jointes.

### Que contient la sauvegarde et que reste-t-il sur l'appareil ?

La sauvegarde contient une copie chiffrée de votre coffre : chaque profil, chaque scan de document, date d'expiration, rappel et note. Votre code de récupération n'y figure pas, et ne quitte jamais votre appareil. Le verrouillage de l'application non plus, donc Face ID, Touch ID ou votre code PIN protège le téléphone pendant que le chiffrement protège le fichier. Les instantanés locaux automatiques restent eux aussi uniquement sur l'appareil, c'est pourquoi ils ne peuvent pas ramener votre coffre sur un téléphone de remplacement.

## Articles connexes

[Confidentialité et sécurité7 min de lectureiCloud vs Google Photos vs Coffre-fort chiffré - Comment stocker votre passeport en toute sécurité](https://traveldocumentvault.com/fr/blog/safest-way-to-store-passport-digitally/)

[Confidentialité7 min de lectureEst-il sûr de stocker votre passeport dans Google Photos - Ce qu'il faut savoir](https://traveldocumentvault.com/fr/blog/is-it-safe-to-store-passport-in-google-photos/)
