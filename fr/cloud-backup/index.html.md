# Sauvegarde cloud chiffrée | Votre cloud. Votre clé. | Travel Document Vault

> Sauvegarde chiffrée (Pro) sur votre iCloud ou Google Drive. Restaurez par code de récupération, inconnu de nous. Coffre enregistré utilisable hors ligne.

Source: https://traveldocumentvault.com/fr/cloud-backup/

---

## Comment fonctionne la sauvegarde chiffrée

Le contenu de vos documents est chiffré avant l’envoi dans le cloud.

1

### Chiffrement sur l'appareil

Le contenu de vos documents est chiffré sur votre appareil avec AES-256-GCM. PBKDF2, avec 600 000 itérations, dérive la clé qui sert à déverrouiller la clé maître de votre coffre, générée aléatoirement.

AES-256-GCM chiffre le contenu de vos documents. L’application ne téléverse pas votre code de récupération vers nous, Apple ou Google. Protégez aussi votre téléphone avec un code d’accès fort et le verrouillage PIN de l’application : le chiffrement protège le fichier, votre code d’accès protège le téléphone.

2

### Téléchargez vers votre cloud

La sauvegarde chiffrée accède à votre compte iCloud ou Google Drive personnel, pas à nos serveurs — c'est votre cloud et votre compte.

Sur iPhone et iPad, vous pouvez voir vos fichiers de sauvegarde dans iCloud Drive. Sur Android, ils se trouvent dans un dossier masqué de l’application dans votre propre Google Drive. Vous avez un contrôle total.

3

### Seul vous détenez la clé

Votre code de récupération déverrouille vos clés de chiffrement cloud. L’application ne téléverse pas ce code vers nous, Apple ou Google ; gardez privées les copies que vous en faites.

Stockez votre code de récupération en toute sécurité, car sans lui, même nous ne pouvons pas récupérer vos données — c'est intentionnel, pas un bug.

4

### Restaurer sur un nouvel appareil

Passer à un nouveau téléphone ? Restaurez votre sauvegarde avec votre code de récupération. Idem pour un nouvel iPad ou un autre appareil pris en charge sur la même plateforme, utilisant le même compte cloud.

Sur le nouvel appareil, ouvrez Réglages, Sauvegarde cloud, puis choisissez Restaurer à partir de la sauvegarde. Sélectionnez votre sauvegarde, saisissez votre code de récupération et confirmez. La restauration remplace le coffre local.

## Comment cela protège vos données

Plusieurs couches de sécurité se dressent entre un appui accidentel et la perte de données.

**Conservation indéfinie de la corbeille.** Les documents supprimés restent dans Éléments supprimés tant que la sauvegarde dans le cloud est activée. Pas de purge automatique après 30 jours.

**Suppression définitive nécessite une confirmation.** Une invite distincte vous avertit que le document sera également supprimé de votre sauvegarde dans le cloud.

****

**Choisissez votre fenêtre d'historique.** Définissez jusqu'où remonte votre historique de sauvegardes quotidiennes : 7, 30, 90 ou 180 jours. Restaurez votre coffre à un jour antérieur dans cette fenêtre. Les instantanés plus anciens sont supprimés automatiquement.

**Protection contre la synchronisation d’un coffre vide.** Une protection empêche certaines tentatives de sauvegarde d’un coffre vide ; les premières sauvegardes et les opérations de restauration et de synchronisation ont des exceptions. Les documents supprimés en masse restent dans Récemment supprimé tant que la sauvegarde cloud est activée, jusqu’à leur suppression définitive.

**Invite de sécurité pour nouvel appareil.** L'activation de la sauvegarde cloud sur un nouvel appareil détecte les sauvegardes existantes et vous demande si vous souhaitez les restaurer ou recommencer à zéro. Pas de remplacement silencieux.

**Suppression de la sauvegarde cloud avec confirmation.** La suppression de votre sauvegarde cloud nécessite Face ID, Touch ID ou votre PIN si le verrouillage correspondant de l’application est activé, puis une confirmation. Un simple appui accidentel ne peut pas effacer votre sauvegarde.

**Restauration depuis Réglages.** Sur un appareil pris en charge sur la même plateforme, utilisant le même compte cloud, ouvrez l’écran Sauvegarde cloud dans Réglages avec la sauvegarde désactivée, sélectionnez votre sauvegarde, saisissez votre code de récupération et confirmez la restauration. Cela remplace le contenu du coffre local. Pas besoin de réinstaller ou de suivre le flux d'intégration.

**Réinitialiser et resynchroniser.** Si vos données locales et votre sauvegarde cloud se désynchronisent, utilisez Réinitialiser et resynchroniser pour envoyer une nouvelle copie de votre coffre.

### ⚠ Votre code de récupération est critique

Votre code de récupération déverrouille les clés de chiffrement cloud nécessaires pour restaurer votre sauvegarde. Nous ne pouvons pas le réinitialiser pour vous. Si vous perdez toutes les copies et l’accès à tous les appareils capables de déverrouiller encore le coffre, nous ne pouvons pas récupérer la sauvegarde chiffrée.

Enregistrez votre code de récupération en lieu sûr avant de dépendre de la sauvegarde cloud — soit un gestionnaire de mots de passe, soit une copie imprimée en lieu sûr, soit les deux — et vérifiez que vous pouvez la relire avant de la conserver comme seule copie.

### Configuration requise de l'appareil

La sauvegarde cloud sur iPhone et iPad utilise Apple iCloud. Elle nécessite un iPhone ou iPad pris en charge, avec iCloud Drive disponible et activé pour l’application.

La sauvegarde cloud sur Android utilise Google Drive. Elle nécessite Google Play Services, qui est installé par défaut sur Google, Samsung, OnePlus, Sony, Motorola, Xiaomi global, Oppo global, Vivo global, Nokia, Asus, Realme et la plupart des autres grandes marques Android.

Les appareils sans Google Play Services (comme les appareils Huawei sortis après 2019, les tablettes Amazon Fire et les variantes AOSP uniquement) ne peuvent pas utiliser la sauvegarde cloud. Le reste de l'application, y compris le stockage local et le chiffrement sur l'appareil, continue de fonctionner sur les appareils pris en charge, mais la lecture automatique des dates nécessite aussi Google Play Services.

### Important : conservez toujours des copies indépendantes

La sauvegarde cloud est une couche de sécurité, mais aucun système n'est parfait. Les comptes cloud peuvent être perdus, les codes de récupération peuvent être oubliés, les services de stockage tiers peuvent avoir des pannes, et des problèmes de synchronisation ou de données inattendus peuvent survenir. Nous fournissons la sauvegarde cloud par commodité, non par garantie.

Pour les documents critiques, conservez toujours une copie indépendante, comme une copie papier imprimée dans un endroit sûr, une export de coffre chiffré séparé enregistrée dans un stockage différent, ou des originaux stockés physiquement, et vérifiez que vos documents sont récupérables avant d'en avoir besoin.

Vous êtes responsable du maintien de vos propres sauvegardes de documents et de la sécurisation de votre code de récupération. L'application, Apple, Google et le développeur ne sont pas responsables de la perte de données découlant de codes de récupération perdus, de problèmes de compte cloud ou de dépendance à la sauvegarde cloud comme seule copie.

## Chiffrement et récupération

#### AES-256-GCM

Chiffrement authentifié du contenu des documents.

#### PBKDF2 600k itérations

Dérivation de clé coûteuse en calcul. Cela augmente le coût des tentatives pour deviner le code de récupération.

#### Expansion de clé HKDF

Des clés distinctes pour chaque fichier de sauvegarde ; la restauration rechiffre vos documents avec la clé propre au nouvel appareil. Un appareil autorisé ou un code de récupération compromis peut exposer le coffre cloud partagé.

#### Conception sans connaissance

Votre sauvegarde chiffrée reste dans votre propre compte cloud. Nous ne la recevons pas et ne détenons pas les clés nécessaires pour lire le contenu de ses documents.

#### Ce qu'Apple voit

Le contenu des documents est chiffré dans votre iCloud ou Google Drive. Les métadonnées de sauvegarde, comme les noms des appareils, les nombres d’éléments et les horodatages, ne sont pas chiffrées.

#### Perte du code de récupération

Si vous perdez toutes les copies de votre code de récupération et l’accès à tous les appareils capables de déverrouiller encore le coffre, nous ne pouvons pas déchiffrer vos sauvegardes. Nous ne détenons pas vos clés de chiffrement cloud.

## Confidentialité et conformité

**Rapports de plantage facultatifs :** Les rapports de plantage sont désactivés par défaut. Le contenu de vos documents n’est pas téléversé sur nos serveurs.

**Pas de dépôt de sauvegarde :** Nous ne conservons pas de copies de votre code de récupération ni de vos clés de chiffrement. Gardez votre code en lieu sûr.

**Désactivé par défaut :** La sauvegarde cloud est désactivée par défaut. Activez-la dans Réglages quand vous souhaitez l’utiliser.

En savoir plus dans notre [politique de confidentialité complète](https://traveldocumentvault.com/privacy-policy/).

## Découvrez la véritable confidentialité

Téléchargez gratuitement. Activez la sauvegarde avec Pro quand vous êtes prêt. Pas de compte. Juste vous.

![Télécharger sur l'App Store](https://traveldocumentvault.com/assets/images/app-store-badge-black.svg)

![Disponible sur Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
