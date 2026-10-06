# Sauvegardes expliquées : sauvegardes locales, Vault Export et sauvegarde cloud | Travel Document Vault

> Les trois façons dont Travel Document Vault protège vos données : sauvegardes locales, Vault Export (.tdvault) et sauvegarde cloud chiffrée en option.

Source: https://traveldocumentvault.com/fr/faq/backup-explained/

---

Travel Document Vault vous offre trois niveaux de protection. Voici exactement ce que chacun fait, à qui il convient et comment restaurer à partir de celui-ci.

## Trois mécanismes, un objectif

Travel Document Vault offre trois niveaux de protection : (1) Sauvegardes locales automatiques, créées toutes les quelques minutes sur votre appareil sans frais. (2) Vault Export, un fichier de sauvegarde chiffré gratuit (.tdvault) que vous enregistrez où vous le souhaitez. (3) Cloud Backup, une option Pro qui maintient une copie chiffrée de bout en bout dans votre propre iCloud ou Google Drive.

- **Sauvegardes locales automatiques** — se font discrètement en arrière-plan, aucune action requise.
- **Vault Export (.tdvault)** — un fichier chiffré portable que vous enregistrez où vous le souhaitez.
- **Cloud Backup (Pro)** — une copie chiffrée automatique dans votre propre iCloud ou Google Drive.

## En un coup d'oeil

| Mécanisme | Niveau | Automatique ? | Où il réside | Comment restaurer |
|---|---|---|---|---|
| **Sauvegardes locales automatiques** | Gratuit | Oui, toutes les quelques minutes | Sur votre appareil | Paramètres, Restaurer la sauvegarde locale |
| **Vault Export (.tdvault)** | Gratuit | Non, manuel | Où vous l'enregistrez : Fichiers, iCloud Drive, Google Drive, e-mail | Réglages, Importer une sauvegarde |
| **Cloud Backup** | Pro | Oui, automatique | Votre propre iCloud (iOS) ou Google Drive (Android) | Paramètres, Cloud Backup, Restaurer à partir de la sauvegarde |

## Sauvegardes locales automatiques

Pendant que l’application est ouverte et que vous apportez des modifications, elle prend discrètement un instantané de votre coffre-fort toutes les quelques minutes. Vous n’avez rien à faire. L’application conserve quelques instantanés récents et supprime les anciens pour économiser de l’espace. L’exportation du coffre crée un fichier chiffré portable que vous pouvez enregistrer hors de l’appareil.

Dans les paramètres, vous verrez une ligne comme *Dernière sauvegarde : il y a 2 heures, 12 documents*. Cela vous indique l'âge de l'instantané le plus récent et le nombre de documents qu'il a capturés. Cela indique le dernier instantané local disponible. Les instantanés locaux ne contiennent pas de copies indépendantes des fichiers joints.

**Pour restaurer :** Paramètres, puis Restaurer la sauvegarde locale. Choisissez un instantané dans la liste et confirmez. La restauration remplace vos données actuelles par le contenu de l'instantané.

Ces instantanés locaux restent sur votre appareil. Une sauvegarde système (sauvegarde iCloud, Google Backup) réinstalle l'application mais ne peut pas les restaurer sur un nouveau téléphone, car les sauvegardes ordinaires du téléphone ne transfèrent pas la clé de chiffrement liée à l’appareil. L’exportation du coffre inclut une copie de cette clé chiffrée par mot de passe. Pour déplacer votre coffre-fort, utilisez la sauvegarde cloud (Pro) ou Vault Export gratuit.

## Vault Export (.tdvault) — gratuit pour tous

L’exportation du coffre regroupe les données du coffre prises en charge et les pièces jointes disponibles dans un seul fichier chiffré et protégé par mot de passe. Chaque exportation est soumise à une limite de taille. Vous choisissez où l'enregistrer : application Fichiers, iCloud Drive, Google Drive, ou le partager via AirDrop ou par e-mail.

Le fichier est chiffré sur l'appareil avant de quitter l'application. Seul le mot de passe que vous définissez au moment de l'export peut le déverrouiller.

**Pour exporter :** Réglages, Exporter le coffre, puis suivez les invites et choisissez une destination.

**Pour restaurer :** Réglages, Importer une sauvegarde, puis sélectionnez votre fichier .tdvault, confirmez et saisissez le mot de passe. L’importation remplace toutes les données déjà présentes sur ce téléphone. L’importation fonctionne sur les appareils pris en charge, y compris entre les plateformes (iOS vers Android ou vice versa). Les exportations préservent les champs du coffre pris en charge et certains réglages. Les pièces jointes manquantes ou les notes illisibles peuvent être omises. Vérifiez vos documents et rappels importés. Le verrouillage de l’application et les autres réglages de l’appareil restent locaux.

C’est gratuit pour tous les utilisateurs. Aucun achat Pro requis.

## Cloud Backup (Pro)

La sauvegarde cloud est une fonctionnalité Pro. Activez-la pour conserver une copie automatique dans votre propre iCloud (iOS) ou Google Drive (Android). L’application la met à jour lorsqu’elle est ouverte et connectée. Nous ne la recevons pas. Le contenu des documents est chiffré. Les métadonnées de sauvegarde, comme les noms des appareils, les nombres d’éléments et les horodatages, ne le sont pas.

Le contenu des documents est chiffré de bout en bout sur votre appareil avec AES-256-GCM avant l’envoi. Les clés de chiffrement cloud sont déverrouillées avec votre code de récupération, une phrase de passe de 24 caractères générée lorsque vous définissez votre PIN. Gardez votre code de récupération en lieu sûr. Si vous perdez toutes les copies du code et l’accès à tous les appareils capables de déverrouiller encore le coffre, nous ne pouvons pas récupérer la sauvegarde chiffrée.

**Pour restaurer :** Utilisez un appareil pris en charge sur la même plateforme et le même Apple ID ou compte Google. Avec la sauvegarde désactivée, ouvrez Réglages, Sauvegarde cloud. Choisissez Restaurer à partir de la sauvegarde, sélectionnez votre sauvegarde, saisissez votre code de récupération et confirmez. La restauration remplace le contenu du coffre local.

La sauvegarde cloud s’exécute automatiquement lorsque l’application est ouverte et connectée. Restaurez-la depuis Réglages avec votre code de récupération, en utilisant le même compte cloud et un appareil pris en charge sur la même plateforme.

## Laquelle dois-je utiliser ?

La réponse courte : utilisez les trois.

Les sauvegardes locales automatiques peuvent aider à récupérer les données récentes du coffre lorsque des instantanés sont disponibles. Elles s’exécutent lorsque l’application est ouverte et ne remplacent pas une sauvegarde indépendante des documents.

Vault Export est le bon choix avant un changement d'appareil, une mise à jour majeure d'application, ou chaque fois que vous voulez une copie portable enregistrée quelque part indépendante de votre téléphone. Faites-le au moins une fois et stockez le fichier dans un endroit sûr.

Cloud Backup (Pro) est le bon choix si vous voulez une protection automatique hors appareil sans gérer les fichiers manuellement. Lors du passage à un téléphone pris en charge sur la même plateforme, utilisez le même compte cloud, sélectionnez votre sauvegarde dans la procédure de restauration, saisissez votre code de récupération et confirmez. La restauration remplace le contenu du coffre local.

Aucune couche simple n'est une raison de sauter les autres. Les comptes cloud peuvent être perdus, les codes de récupération peuvent être oubliés, et les téléphones peuvent être volés avant l'exécution d'une sauvegarde locale. La combinaison des trois vous offre la protection la plus forte.

### Guides connexes

- [Comment exporter et importer votre coffre-fort — procédure étape par étape](https://traveldocumentvault.com/fr/faq/export-import/)
- [Quel est mon code de récupération ? — guide complet pour le stocker en sécurité](https://traveldocumentvault.com/fr/faq/recovery-code/)
- [Cloud Backup — comment le chiffrement de bout en bout fonctionne](https://traveldocumentvault.com/fr/cloud-backup/)

## Obtenir Travel Document Vault

Téléchargement gratuit. Vault Export et les sauvegardes locales sont inclus pour tous. Pro ajoute la sauvegarde cloud, les profils illimités, l'export PDF combiné et plus. Achat unique, pas d'abonnement.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Télécharger sur Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
