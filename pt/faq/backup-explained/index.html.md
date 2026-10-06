# Cópia de Segurança Explicada: Cópias Locais, Exportação do Cofre e Cópia de Segurança na Nuvem | Travel Document Vault

> As três formas como Travel Document Vault protege os seus dados: cópias locais, Exportação do Cofre (.tdvault) e cópia na nuvem encriptada opcional.

Source: https://traveldocumentvault.com/pt/faq/backup-explained/

---

Travel Document Vault oferece-lhe três camadas de proteção. Aqui está exatamente o que cada uma faz, para quem é e como restaurar a partir dela.

## Três mecanismos, um objetivo

Travel Document Vault oferece três camadas de proteção: (1) Cópias de segurança locais automáticas, criadas a cada poucos minutos no seu dispositivo sem custo. (2) Exportação do Cofre, um ficheiro de cópia de segurança manual encriptado e gratuito (.tdvault) que guarda onde desejar. (3) Cópia de Segurança na Nuvem, uma opção Pro que mantém uma cópia encriptada de ponta a ponta no seu próprio iCloud ou Google Drive.

- **Cópias de segurança locais automáticas** — ocorrem silenciosamente em segundo plano, sem ação necessária.
- **Exportação do Cofre (.tdvault)** — um ficheiro encriptado portátil que guarda onde desejar.
- **Cópia de Segurança na Nuvem (Pro)** — uma cópia encriptada automática no seu próprio iCloud ou Google Drive.

## Num relance

| Mecanismo | Nível | Automático? | Onde fica | Como restaurar |
|---|---|---|---|---|
| **Cópias de segurança locais automáticas** | Gratuito | Sim, a cada poucos minutos | No seu dispositivo | Definições, Restaurar Cópia Local |
| **Exportação do Cofre (.tdvault)** | Gratuito | Não, manual | Onde guardar: Ficheiros, iCloud Drive, Google Drive, email | Definições, Importar backup |
| **Cópia de Segurança na Nuvem** | Pro | Sim, automático | O seu próprio iCloud (iOS) ou Google Drive (Android) | Definições, Cópia de Segurança na Nuvem, Restaurar a partir da Cópia |

## Cópias de segurança locais automáticas

Enquanto a aplicação está aberta e faz alterações, faz silenciosamente uma fotografia do seu cofre a cada poucos minutos. Não precisa fazer nada. A aplicação mantém os instantâneos mais recentes e remove os mais antigos para poupar espaço. A Exportação do Cofre cria um ficheiro encriptado portátil que pode guardar fora do dispositivo.

Em Definições verá uma linha como *Última cópia de segurança: há 2 horas, 12 documentos*. Isto diz-lhe a idade do instantâneo mais recente e quantos documentos capturou. Mostra o instantâneo local mais recente disponível. Os instantâneos locais não contêm cópias independentes dos ficheiros anexos.

**Para restaurar:** Definições e depois Restaurar Cópia Local. Escolha um instantâneo da lista e confirme. Restaurar substitui os seus dados atuais pelo conteúdo do instantâneo.

Estes instantâneos locais ficam no seu dispositivo. Uma cópia de segurança do sistema (iCloud Backup, Google Backup) reinstala a aplicação mas não pode restaurá-los num telemóvel novo porque as cópias de segurança normais do telemóvel não transferem a chave de encriptação vinculada ao dispositivo. A Exportação do Cofre inclui uma cópia dessa chave encriptada com palavra-passe. Para mover o seu cofre, use cópia de segurança na nuvem (Pro) ou a Exportação do Cofre gratuita.

## Exportação do Cofre (.tdvault) — gratuito para todos

A Exportação do Cofre reúne os registos suportados do cofre e os anexos disponíveis num ficheiro encriptado e protegido por palavra-passe. Cada exportação tem um limite de tamanho. Escolhe onde guardar: aplicação Ficheiros, iCloud Drive, Google Drive ou partilhar via AirDrop ou email.

O ficheiro está encriptado no dispositivo antes de sair da aplicação. Apenas a palavra-passe que define no momento da exportação pode desbloqueá-lo.

**Para exportar:** Definições, Exportar cofre e depois siga as instruções e escolha um destino.

**Para restaurar:** Definições, Importar backup e depois selecione o ficheiro .tdvault, confirme e introduza a palavra-passe. A importação substitui tudo o que já está nesse telemóvel. Funciona em dispositivos suportados, incluindo entre plataformas (iOS para Android ou vice-versa). As exportações preservam os campos suportados do cofre e determinadas definições. Os anexos em falta ou as notas ilegíveis podem ser omitidos. Verifique os documentos e lembretes importados. O bloqueio da aplicação e outras definições do dispositivo mantêm-se locais.

Isto é gratuito para todos os utilizadores. Sem compra Pro necessária.

## Cópia de Segurança na Nuvem (Pro)

A Cópia de Segurança na Nuvem é uma funcionalidade Pro. Ative-a para manter uma cópia automática no seu próprio iCloud (iOS) ou Google Drive (Android). A aplicação atualiza-a enquanto está aberta e ligada à internet. Não a recebemos. O conteúdo dos documentos é encriptado. Os metadados da cópia de segurança, como nomes de dispositivos, contagens e datas e horas, não são.

O conteúdo dos documentos é encriptado de ponta a ponta no dispositivo com AES-256-GCM antes do envio. As chaves de encriptação da nuvem são desbloqueadas com o código de recuperação, uma frase de 24 caracteres que a aplicação gera quando define o PIN. Guarde o seu código de recuperação num local seguro. Se perder todas as cópias do código e o acesso a todos os dispositivos que ainda conseguem desbloquear o cofre, não podemos recuperar a cópia de segurança encriptada.

**Para restaurar:** Use um dispositivo suportado na mesma plataforma e com o mesmo Apple ID ou conta Google. Com a cópia de segurança desativada, abra Definições, Cópia de Segurança na Nuvem. Escolha Restaurar da Cópia de Segurança, selecione a cópia de segurança, introduza o código de recuperação e confirme. A restauração substitui o conteúdo local do cofre.

A Cópia de Segurança na Nuvem funciona automaticamente enquanto a aplicação está aberta e ligada à internet. Restaure através de Definições com o código de recuperação, usando a mesma conta na nuvem e um dispositivo suportado na mesma plataforma.

## Qual devo usar?

A resposta curta: use as três.

As cópias de segurança locais automáticas podem ajudar a recuperar registos recentes do cofre quando há instantâneos disponíveis. Funcionam enquanto a aplicação está aberta e não substituem uma cópia de segurança independente dos documentos.

A Exportação do Cofre é o movimento certo antes de uma alteração de dispositivo, uma atualização maior da aplicação ou qualquer altura que queira uma cópia portátil guardada num local independente do seu telemóvel. Faça-o pelo menos uma vez e guarde o ficheiro numa localização segura.

A Cópia de Segurança na Nuvem (Pro) é a escolha certa se quer proteção automática fora do dispositivo sem gerir ficheiros manualmente. Ao mudar para um telemóvel suportado na mesma plataforma, use a mesma conta na nuvem, selecione a cópia de segurança no processo de restauração, introduza o código de recuperação e confirme. A restauração substitui o conteúdo local do cofre.

Nenhuma camada única é razão para saltar as outras. As contas na nuvem podem ser perdidas, os códigos de recuperação podem ser esquecidos e os telemóveis podem ser roubados antes de uma cópia de segurança local ocorrer. A combinação das três dá-lhe a proteção mais forte.

### Guias relacionados

- [Como Exportar e Importar o Seu Cofre — passo-a-passo](https://traveldocumentvault.com/pt/faq/export-import/)
- [O Que É o Meu Código de Recuperação? — guia completo para o armazenar com segurança](https://traveldocumentvault.com/pt/faq/recovery-code/)
- [Cópia de Segurança na Nuvem — como funciona a encriptação de ponta a ponta](https://traveldocumentvault.com/pt/cloud-backup/)

## Obter Travel Document Vault

Transferência gratuita. Exportação do Cofre e cópias de segurança locais estão incluídas para todos. Pro adiciona cópia de segurança na nuvem, perfis ilimitados, exportação PDF combinada e muito mais. Compra única, sem subscrição.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![Obter no Google Play](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
