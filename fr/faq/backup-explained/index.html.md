# Sauvegardes expliquées : sauvegardes locales, Vault Export et sauvegarde cloud | Travel Document Vault

> Une comparaison claire des trois façons dont Travel Document Vault protège vos données : sauvegardes locales automatiques, Vault Export (.tdvault) et sauvegarde cloud Pro optionnelle vers iCloud ou Google Drive.

Source: https://traveldocumentvault.com/fr/faq/backup-explained/

---

Travel Document Vault vous offre trois niveaux de protection. Voici exactement ce que chacun fait, à qui il convient et comment restaurer à partir de celui-ci.

## Trois mécanismes, un objectif

Vos documents résident sur votre appareil. Ils ne vont pas sur nos serveurs. Les trois mécanismes de sauvegarde servent chacun un objectif différent, et vous pouvez les utiliser tous les trois en même temps.

- **Sauvegardes locales automatiques** - se font discrètement en arrière-plan, aucune action requise.
- **Vault Export (.tdvault)** - un fichier chiffré portable que vous enregistrez où vous le souhaitez.
- **Cloud Backup (Pro)** - une copie chiffrée automatique dans votre propre iCloud ou Google Drive.

## En un coup d'oeil

| Mécanisme | Niveau | Automatique ? | Où il réside | Comment restaurer |
|---|---|---|---|---|
| **Sauvegardes locales automatiques** | Gratuit | Oui, toutes les quelques minutes | Sur votre appareil | Paramètres, Restaurer la sauvegarde locale |
| **Vault Export (.tdvault)** | Gratuit | Non, manuel | Où vous l'enregistrez : Fichiers, iCloud Drive, Google Drive, e-mail | Paramètres, Importer le coffre-fort |
| **Cloud Backup** | Pro | Oui, automatique | Votre propre iCloud (iOS) ou Google Drive (Android) | Paramètres, Cloud Backup, Restaurer à partir de la sauvegarde |

## Sauvegardes locales automatiques

Pendant que l'application est ouverte et que vous apportez des modifications, elle prend discrètement un instantané de votre coffre-fort toutes les quelques minutes. Vous n'avez rien à faire. L'application conserve les 10 instantanés les plus récents et supprime les anciens pour économiser de l'espace.

Dans les paramètres, vous verrez une ligne comme *Dernière sauvegarde : il y a 2 heures, 12 documents*. Cela vous indique l'âge de l'instantané le plus récent et le nombre de documents qu'il a capturés. C'est là pour vous rassurer qu'une copie récupérable est toujours à proximité.

**Pour restaurer :** Paramètres, puis Restaurer la sauvegarde locale. Choisissez un instantané dans la liste et confirmez. La restauration remplace vos données actuelles par le contenu de l'instantané.

Ces instantanés locaux restent sur votre appareil. Une sauvegarde système (sauvegarde iCloud, Google Backup) réinstalle l'application mais ne peut pas les restaurer sur un nouveau téléphone, car la clé de chiffrement ne quitte jamais votre appareil d'origine. Pour déplacer votre coffre-fort, utilisez la sauvegarde cloud (Pro) ou Vault Export gratuit.

## Vault Export (.tdvault) - gratuit pour tous

Vault Export crée un seul fichier chiffré et protégé par mot de passe contenant tous les profils, documents et pièces jointes dans votre coffre-fort. Vous choisissez où l'enregistrer : application Fichiers, iCloud Drive, Google Drive, ou le partager via AirDrop ou par e-mail.

Le fichier est chiffré sur l'appareil avant de quitter l'application. Seul le mot de passe que vous définissez au moment de l'export peut le déverrouiller.

**Pour exporter :** Paramètres, Exporter le coffre-fort, puis suivez les invites et choisissez une destination.

**Pour restaurer :** Paramètres, Importer le coffre-fort, puis sélectionnez votre fichier .tdvault et entrez le mot de passe. L'importation fonctionne sur n'importe quel appareil, y compris entre les plateformes (iOS vers Android ou vice versa). La fidélité aller-retour est complète : tous les noms de documents, les dates, les alertes d'expiration, les couleurs, les pièces jointes et les notes sont préservés exactement.

C'est gratuit pour tous les utilisateurs. Aucun abonnement Pro requis.

## Cloud Backup (Pro)

Cloud Backup est l'option Pro. Une fois activé, l'application maintient automatiquement une copie continuellement mise à jour de votre coffre-fort dans votre propre compte iCloud (iOS) ou votre propre Google Drive (Android). Nous ne voyons jamais ces données. Apple et Google ne voient que du texte chiffré.

Le coffre-fort est chiffré de bout en bout sur votre appareil à l'aide d'AES-256-GCM avant le téléchargement. La clé est dérivée de votre code de récupération, une phrase de passe de 24 caractères que l'application génère lorsque vous activez la sauvegarde cloud. Gardez votre code de récupération quelque part en sécurité. Si vous le perdez, la sauvegarde chiffrée devient irrécouvrable.

**Pour restaurer :** Sur un nouvel appareil connecté au même Apple ID ou compte Google, ouvrez l'application, allez à Paramètres, Cloud Backup, Restaurer à partir de la sauvegarde, et entrez votre code de récupération.

Cloud Backup est l'option la plus sans intervention : elle fonctionne automatiquement une fois activée, et la restauration sur un nouveau téléphone ne prend qu'un clic plus votre code de récupération.

## Laquelle dois-je utiliser ?

La réponse courte : utilisez les trois.

Les sauvegardes locales automatiques vous protègent contre les suppressions accidentelles ou les problèmes d'application en ce moment, sans que vous ayez besoin d'y penser. Elles sont toujours activées.

Vault Export est le bon choix avant un changement d'appareil, une mise à jour majeure d'application, ou chaque fois que vous voulez une copie portable enregistrée quelque part indépendante de votre téléphone. Faites-le au moins une fois et stockez le fichier dans un endroit sûr.

Cloud Backup (Pro) est le bon choix si vous voulez une protection automatique hors appareil sans gérer les fichiers manuellement. C'est particulièrement précieux lors du passage à un nouveau téléphone : installez l'application, entrez votre code de récupération, et votre coffre-fort est restauré en quelques secondes.

Aucune couche simple n'est une raison de sauter les autres. Les comptes cloud peuvent être perdus, les codes de récupération peuvent être oubliés, et les téléphones peuvent être volés avant l'exécution d'une sauvegarde locale. La combinaison des trois vous offre la protection la plus forte.

### Guides connexes

- [Comment exporter et importer votre coffre-fort - procédure étape par étape](https://traveldocumentvault.com/fr/faq/export-import/)
- [Quel est mon code de récupération ? - guide complet pour le stocker en sécurité](https://traveldocumentvault.com/fr/faq/recovery-code/)
- [Cloud Backup - comment le chiffrement de bout en bout fonctionne](https://traveldocumentvault.com/fr/cloud-backup/)

## Obtenir Travel Document Vault

Téléchargement gratuit. Vault Export et les sauvegardes locales sont inclus pour tous. Pro ajoute la sauvegarde cloud, les profils illimités, l'export PDF combiné et plus. Achat unique, pas d'abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Télécharger sur Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
