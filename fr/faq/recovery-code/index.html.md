# Qu'est-ce que mon code de récupération ? | Travel Document Vault

> Votre code de récupération est la clé maître de vos sauvegardes cloud chiffrées. Découvrez ce qu

Source: https://traveldocumentvault.com/fr/faq/recovery-code/

---

Votre code de récupération est une phrase de passe de 24 caractères qui chiffre vos sauvegardes cloud. Si vous la perdez, ces sauvegardes deviennent irrécupérables. Nous ne la conservons pas et ne pouvons pas la réinitialiser, conservez-la donc dans un endroit sûr.

## Fonctionnement

### Ce qu'il est

Votre code de récupération est une phrase de passe de 24 caractères générée quand vous activez la sauvegarde cloud. Il ressemble à ceci :

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

Ce code est dérivé mathématiquement de vos paramètres de sauvegarde et est la seule clé qui peut déchiffrer votre coffre-fort chiffré dans le cloud. Nous le générons une seule fois et nous vous l'affichons une seule fois. Après cela, la responsabilité de le conserver en sécurité vous incombe.

### Pourquoi vous en avez besoin

Quand vous activez la sauvegarde cloud, votre coffre-fort entier est chiffré sur votre appareil en utilisant AES-256-GCM avant qu'il ne quitte votre téléphone. La clé de chiffrement est dérivée de votre code de récupération. Sans le code de récupération, la sauvegarde est cryptographiquement inaccessible, même pour nous.

C'est une garantie de confidentialité. Nous ne pouvons littéralement pas lire vos sauvegardes, les déchiffrer à la demande, ou les réinitialiser pour vous. Si votre code de récupération est perdu, cette sauvegarde est perdue à jamais. Cela peut sembler rigoureux, mais c'est exactement ce que vous voulez : votre confidentialité n'est pas seulement une promesse que nous faisons, c'est un fait technique que nous ne pouvons pas violer.

### Si vous le perdez

Si vous oubliez votre code de récupération, votre sauvegarde cloud existante ne peut pas être récupérée. Vous avez deux options :

- **Restaurer depuis votre téléphone :** Si le code est toujours conservé dans l'application (vérifiez Paramètres - Sauvegarde cloud), copiez-le dans un endroit sûr et enregistrez-le.
- **Générer un nouveau :** Désactivez la sauvegarde cloud et réactivez-la. Cela crée un nouveau code de récupération et abandonne la sauvegarde existante. Vous recommencez de zéro.

### Où le stocker

Votre code de récupération est aussi sensible que votre mot de passe maître. Conservez-le d'une de ces façons :

- **Gestionnaire de mots de passe :** Bitwarden, 1Password, Trousseau Apple ou similaire. C'est l'option la plus pratique.
- **Sauvegarde physique :** Écrivez-le sur papier et conservez-le dans un coffre-fort, un coffre-fort bancaire ou un endroit sécurisé chez vous.
- **Document hors ligne :** Enregistrez-le sur un disque externe chiffré ou une clé USB (jamais synchronisé dans le cloud).
- **À éviter :** Email, application Notes, services cloud non chiffrés ou captures d'écran.

### Régénération de votre code

Si vous pensez que votre code de récupération est compromis, désactivez la sauvegarde cloud et réactivez-la. L'application génère un nouveau code de récupération. Votre ancienne sauvegarde chiffrée est abandonnée. C'est volontaire : la rotation du code de récupération est intentionnellement rare et entraîne une perte de données, de sorte que vous ne la fassiez pas à la légère.

**Avertissement :** Votre code de récupération est votre seule responsabilité. Travel Document Vault ne peut pas le récupérer, le réinitialiser ou le régénérer s'il est perdu. Conservez-le de façon sécurisée. Ne vous fiez pas à cette application comme seul système de sauvegarde pour les documents critiques.

## Prêt à protéger votre coffre-fort ?

Téléchargez Travel Document Vault et activez la sauvegarde cloud pour garder vos documents en sécurité.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault)
