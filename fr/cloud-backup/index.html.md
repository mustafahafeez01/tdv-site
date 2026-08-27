# Sauvegarde cloud chiffrée | Votre cloud. Votre clé. | Travel Document Vault

> Sauvegarde chiffrée de bout en bout vers votre propre iCloud ou Google Drive. Vous détenez le code de récupération et personne d'autre ne peut l'ouvrir, pas même nous. Fonctionne hors ligne avant tout.

Source: https://traveldocumentvault.com/fr/cloud-backup/

---

## Comment fonctionne la sauvegarde chiffrée

La vraie intimité signifie que vous, et seulement vous, pouvez lire vos données.

1

### Chiffrement sur l'appareil

Votre coffre est chiffré sur votre appareil à l'aide d'AES-256-GCM. La clé de chiffrement est dérivée de votre code de récupération à l'aide de PBKDF2 avec 600 000 itérations.

AES-256-GCM est un chiffrement solide et moderne, et le code de récupération ne quitte jamais vos mains. Vous devriez toujours protéger votre téléphone avec un code d'accès fort et App Lock - le chiffrement protège le fichier, votre code d'accès protège le téléphone.

2

### Téléchargez vers votre cloud

La sauvegarde chiffrée accède à votre compte iCloud ou Google Drive personnel, pas à nos serveurs - c'est votre cloud et votre compte.

Vous pouvez afficher et gérer vos sauvegardes directement dans votre iCloud ou Google Drive. Vous avez un contrôle total.

3

### Seul vous détenez la clé

Votre code de récupération est la clé pour déchiffrer vos sauvegardes, et il ne quitte jamais votre appareil - jamais envoyé à nous, Apple ou Google.

Stockez votre code de récupération en toute sécurité, car sans lui, même nous ne pouvons pas récupérer vos données - c'est intentionnel, pas un bug.

4

### Restaurer sur n'importe quel appareil

Passer à un nouveau téléphone ? Restaurez votre sauvegarde avec votre code de récupération. Idem pour les nouveaux iPad, Mac ou autres appareils.

Téléchargez l'application, restaurez à partir de la sauvegarde et entrez votre code de récupération pour récupérer votre coffre entier, chiffré et prêt.

## Comment cela protège vos données

Plusieurs couches de sécurité se dressent entre un appui accidentel et la perte de données.

**Conservation indéfinie de la corbeille.** Les documents supprimés restent dans Éléments supprimés tant que la sauvegarde dans le cloud est activée. Pas de purge automatique après 30 jours.

**Suppression définitive nécessite une confirmation.** Une invite distincte vous avertit que le document sera également supprimé de votre sauvegarde dans le cloud. Pas de suppressions accidentelles.

**Fenêtre de grâce de l'historique des sauvegardes.** Même après suppression définitive, la sauvegarde conserve vos données documentaires pendant plusieurs cycles de synchronisation supplémentaires en guise de filet de sécurité.

**Choisissez votre fenêtre d'historique.** Définissez jusqu'où remonte votre historique de sauvegardes quotidiennes : 7, 30, 90 ou 180 jours. Restaurez votre coffre à un jour antérieur dans cette fenêtre. Les instantanés plus anciens sont supprimés automatiquement.

**Synchronisation vide du coffre ignorée.** L'application ne synchronise jamais un coffre vide vers le cloud. Une suppression en masse ne peut pas effacer votre sauvegarde existante.

**Invite de sécurité pour nouvel appareil.** L'activation de la sauvegarde cloud sur un nouvel appareil détecte les sauvegardes existantes et vous demande si vous souhaitez les restaurer ou recommencer à zéro. Pas de remplacement silencieux.

**Suppression protégée par biométrie.** La suppression de votre sauvegarde cloud nécessite Face ID, Touch ID ou votre PIN. Un simple appui accidentel ne peut pas effacer votre sauvegarde.

**Restauration en un clic depuis les paramètres.** Restaurez votre sauvegarde à tout moment depuis l'écran des paramètres de sauvegarde cloud. Pas besoin de réinstaller ou de suivre le flux d'intégration.

**Réinitialiser et resynchroniser.** Si vos données locales et votre sauvegarde cloud se désynchronisent jamais, un bouton force un nouvel upload complet de votre coffre entier pour que tout reste cohérent.

### ⚠ Votre code de récupération est critique

Votre code de récupération est la seule clé pour décrypter votre sauvegarde. Nous avons une conception de connaissance zéro, ce qui signifie que nous ne pouvons pas la réinitialiser pour vous. Si vous la perdez, votre sauvegarde devient irrécupérable.

Enregistrez votre code de récupération en lieu sûr avant de dépendre de la sauvegarde cloud - soit un gestionnaire de mots de passe, soit une copie imprimée en lieu sûr, soit les deux - et vérifiez que vous pouvez la relire avant de la conserver comme seule copie.

### Configuration requise de l'appareil

La sauvegarde cloud sur iPhone et iPad utilise Apple iCloud. Elle fonctionne sur tous les appareils qui se connectent avec un Apple ID.

La sauvegarde cloud sur Android utilise Google Drive. Elle nécessite Google Play Services, qui est installé par défaut sur Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme et la plupart des autres grandes marques Android.

Les appareils sans Google Play Services (comme les appareils Huawei sortis après 2019, les tablettes Amazon Fire et les variantes AOSP uniquement) ne peuvent pas utiliser la sauvegarde cloud. Le reste de l'application, y compris le stockage local et le chiffrement sur l'appareil, continue de fonctionner sur tous les appareils.

### Important : conservez toujours des copies indépendantes

La sauvegarde cloud est une couche de sécurité, mais aucun système n'est parfait. Les comptes cloud peuvent être perdus, les codes de récupération peuvent être oubliés, les services de stockage tiers peuvent avoir des pannes, et des problèmes de synchronisation ou de données inattendus peuvent survenir. Nous fournissons la sauvegarde cloud par commodité, non par garantie.

Pour les documents critiques, conservez toujours une copie indépendante, comme une copie papier imprimée dans un endroit sûr, une export de coffre chiffré séparé enregistrée dans un stockage différent, ou des originaux stockés physiquement, et vérifiez que vos documents sont récupérables avant d'en avoir besoin.

Vous êtes responsable du maintien de vos propres sauvegardes de documents et de la sécurisation de votre code de récupération. L'application, Apple, Google et le développeur ne sont pas responsables de la perte de données découlant de codes de récupération perdus, de problèmes de compte cloud ou de dépendance à la sauvegarde cloud comme seule copie.

## Sécurité en laquelle vous pouvez avoir confiance

#### AES-256-GCM

Chiffrement authentifié conforme aux normes industrielles. Utilisé par la NIST, la NSA et les systèmes bancaires mondiaux.

#### PBKDF2 600k itérations

Dérivation de clé coûteuse en calcul. Les attaques par force brute deviennent impossibles.

#### Expansion de clé HKDF

Clés de chiffrement par appareil. Chaque restauration génère une clé unique. Compromettre un appareil ne compromet pas les autres.

#### Conception sans connaissance

Nous n'avons pas accès à vos données. Pas chiffré sur nos serveurs. Pas stocké sur nos serveurs. Véritable absence de connaissance.

#### Ce qu'Apple voit

Des objets blobs chiffrés dans votre iCloud. Apple les stocke. Apple ne peut pas les lire. Idem pour Google Drive.

#### Perte du code de récupération

Si vous perdez votre code de récupération, vos sauvegardes ne peuvent pas être déchiffrées. Pas de porte dérobée. Pas de clé maître. Conçu ainsi.

## Confidentialité et conformité

**Conforme au RGPD :** Nous ne traitons pas de données personnelles. Nous n'avons pas accès à vos données. Pas de données, pas de traitement, pas de conformité.

**Pas de dépôt de sauvegarde :** Contrairement à certains fournisseurs, nous ne conservons pas de copies de votre code de récupération, clés privées ou clés de chiffrement. La garde des sauvegardes est à 100 % la vôtre.

**Désactivé par défaut :** La sauvegarde cloud est désactivée par défaut. Vous l'activez explicitement. Vous décidez.

En savoir plus dans notre [politique de confidentialité complète](https://traveldocumentvault.com/privacy-policy/).

## Découvrez la véritable confidentialité

Téléchargez gratuitement. Activez la sauvegarde quand vous êtes prêt. Pas de compte. Juste vous.

![Télécharger sur l'App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponible sur Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
