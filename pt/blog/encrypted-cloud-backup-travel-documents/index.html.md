# Cópia de Segurança Encriptada na Cloud para Documentos de Viagem: Quem Guarda a Chave

> O que significa realmente uma cópia de segurança encriptada para digitalizações do passaporte, porque é que um código de recuperação não pode ser reposto por ninguém, e como manter uma cópia que consegue mesmo restaurar.

Source: https://traveldocumentvault.com/pt/blog/encrypted-cloud-backup-travel-documents/

---

![Um pai e uma criança sentados juntos num sofá ao entardecer, a olhar para um telemóvel e uma pequena chave dourada pousada na mesa junto a um passaporte, enquanto uma nuvem por cima só guarda marcas embaralhadas atrás de um cadeado](https://traveldocumentvault.com/blog/encrypted-cloud-backup-travel-documents/cover.jpg)

## Pontos-Chave

- **"Cópia de segurança encriptada" só significa alguma coisa quando sabe quem tem a chave.** Se a empresa conseguir ler os seus documentos, a encriptação está a protegê-los de estranhos, não da empresa.
- Uma cópia de segurança encriptada no telemóvel antes do envio chega à cloud como dados ilegíveis. O fornecedor de armazenamento fica com texto cifrado, não com o seu passaporte.
- **Sem conta significa sem reposição de palavra-passe.** Perca o código de recuperação e a cópia de segurança não pode ser aberta por ninguém, nós incluídos. Essa é a troca deliberada.
- Escreva o código antes de depender da cópia de segurança, guarde-o longe do telemóvel, e releia-o uma vez para confirmar que está legível.
- Uma cópia de segurança do sistema do dispositivo reinstala a aplicação mas não consegue trazer de volta os seus documentos, porque a chave de encriptação nunca saiu do telemóvel antigo.

Digitalizou quatro passaportes, dois vistos e as certidões de nascimento dos filhos numa aplicação que guarda tudo no seu telemóvel. Ótimo. Depois surge a preocupação óbvia: o que acontece quando o telemóvel cai ao mar, ou desaparece da mesa de um café em Lisboa.

A resposta é uma cópia de segurança. A parte incómoda é que praticamente todas as aplicações usam a expressão "cópia de segurança encriptada" e quase nenhuma quer dizer exatamente a mesma coisa com ela. Este artigo explica o que estas palavras realmente significam e o que está em jogo quando uma empresa genuinamente não consegue ler os seus dados. Termina com uma rotina rápida para a semana antes de uma viagem, para que um telemóvel perdido continue a ser um incómodo e não um desastre.

## O Que "Cópia de Segurança Encriptada" Realmente Significa

A encriptação embaralha um ficheiro para que só uma chave correspondente o consiga transformar novamente em algo legível. Isso é standard. A parte que decide se realmente o protege é onde acontece esse embaralhamento e quem acaba por ficar com a chave.

Existem duas configurações que são ambas vendidas como cópia de segurança encriptada, e comportam-se de forma muito diferente.

Uma envia o ficheiro para o servidor da empresa através de uma ligação encriptada, e depois guarda-o encriptado em repouso. As duas afirmações são verdadeiras, e ambas soam tranquilizadoras. Mas a empresa continua com a chave, por isso consegue desencriptar os seus documentos sempre que precisar: para fazer funcionar uma funcionalidade, para responder a um pedido legal, ou porque alguém lá dentro cometeu um erro. A digitalização do seu passaporte é legível do outro lado.

A outra configuração embaralha o ficheiro no seu telemóvel antes de ele ir para qualquer lado, usando uma chave derivada de algo que só o utilizador tem. O que chega ao armazenamento é um bloco de ruído, e ninguém do outro lado consegue lê-lo, porque ninguém do outro lado tem a chave. A isto chama-se normalmente encriptação de ponta a ponta, ou zero-knowledge.

Por isso a pergunta que vale a pena fazer a qualquer aplicação é curta: **quem tem a chave?** Tudo o resto no marketing decorre dessa resposta.

## O Código de Recuperação, e Porque É Que Ninguém o Consegue Repor

Aqui está a parte que a maioria dos artigos evita, e merece ser dita sem rodeios: o [Travel Document Vault](https://traveldocumentvault.com/pt/) não tem contas. Nunca nos deu um endereço de email, nunca lhe definimos uma palavra-passe, e não existe qualquer registo seu em nenhum servidor nosso. Quando ativa a [cópia de segurança na cloud](https://traveldocumentvault.com/pt/cloud-backup/), a aplicação gera um código de recuperação de 24 carateres e deriva dele a chave de encriptação. O cofre encriptado vai depois para **o seu próprio iCloud no iPhone e iPad, ou para o seu próprio Google Drive no Android**, e não para nós.

A consequência é inevitável. **Se perder esse código de recuperação, a cópia de segurança nunca mais poderá ser aberta.** Nem por si, nem pela Apple ou pela Google, nem por nós. Não existe uma ligação de reposição, porque não há conta a que a associar. Não existe um pedido de suporte que a recupere, porque nunca a tivemos e não temos forma de a adivinhar.

Isto soa duro por escrito, e vale mais ser honesto sobre o assunto do que escondê-lo num ecrã de definições. É a mesma troca que faz com a chave de casa: a fechadura só vale a pena porque nenhum chaveiro do mundo guarda uma cópia, e é exatamente por isso que perder a sua é um problema seu. Uma empresa que consegue restaurar os seus documentos depois de se esquecer de tudo é uma empresa que sempre os conseguiu ler.

Por isso, trate o código como a única coisa que tem mesmo de acertar:

- Guarde-o antes de confiar na cópia de segurança, não depois.
- Guarde-o num sítio que a perda do telemóvel não alcance. Um gestor de palavras-passe noutro dispositivo funciona. Também funciona papel na gaveta onde guarda as certidões de nascimento.
- Releia-o uma vez a partir do sítio onde o guardou. Uma letra que fazia sentido na altura tem o hábito de se tornar ambígua numa emergência.
- Duas cópias em dois sítios vencem sempre uma cópia perfeita.

## A Cópia de Segurança na Cloud é Segura para Digitalizações de Passaporte?

Depende completamente do que chega à cloud, e essa é uma questão sobre a aplicação, não sobre a cloud em si.

Uma fotografia do seu passaporte numa biblioteca de fotos comum ou numa pasta sincronizada chega legível. Fica numa conta protegida por uma palavra-passe que pode já ter reutilizado noutro lado. É indexada e recebe miniatura, e qualquer pessoa que entre nessa conta vê uma cópia perfeitamente legível da página de identificação. Explorámos como é realmente essa exposição em [guardar um passaporte no Google Photos](https://traveldocumentvault.com/pt/blog/is-it-safe-to-store-passport-in-google-photos/). É um risco genuíno, e é a configuração que a maioria das famílias usa sem alguma vez a ter escolhido conscientemente.

Um cofre encriptado no dispositivo antes do envio chega como texto cifrado. Quem invadir a conta na cloud encontra um ficheiro que não consegue abrir. A proteção viaja com o ficheiro, em vez de depender da conta onde este acaba por ficar.

É por isso que a versão honesta de "a cloud é segura" é esta: a cloud é um endereço de entrega, não um modelo de segurança. O que importa é o estado em que o ficheiro chega até lá. A nossa [comparação dos principais sítios onde as pessoas guardam digitalizações do passaporte](https://traveldocumentvault.com/pt/blog/safest-way-to-store-passport-digitally/) percorre as vantagens e desvantagens de cada um.

| O que guarda | Estado à chegada | Quem o consegue ler | Se a conta for comprometida |
|---|---|---|---|
| **Fotografia do passaporte numa biblioteca de fotos** | Imagem legível | O utilizador, o fornecedor, qualquer pessoa com acesso à conta | Página de identificação totalmente exposta |
| **PDF numa pasta de disco sincronizado** | Ficheiro legível | O utilizador, o fornecedor, qualquer pessoa com acesso à conta | Documentos expostos e disponíveis para descarregar |
| **Cópia de segurança de aplicação em que a empresa fica com a chave** | Encriptado em repouso | O utilizador e a empresa | Depende da forma como a empresa gere as suas próprias chaves |
| **Cópia de segurança encriptada primeiro no dispositivo** | Texto cifrado | Apenas quem tiver o código de recuperação | O atacante obtém um ficheiro ilegível |

## O Que Vai na Cópia de Segurança, e O Que Fica de Fora

A cópia de segurança contém uma cópia encriptada do cofre: todos os perfis, todas as digitalizações, datas de validade, lembretes, notas e anexos. Ao restaurá-la, a aplicação fica exatamente como a deixou.

Há três coisas que ficam deliberadamente no telemóvel, e o código de recuperação é a primeira: nunca sai do dispositivo, e essa é precisamente a questão. O bloqueio da aplicação também fica local, por isso o Face ID, o Touch ID ou o PIN mantêm outras pessoas fora do telemóvel enquanto a encriptação as mantém fora do ficheiro. E as cópias de segurança automáticas locais que a aplicação cria enquanto trabalha ficam apenas no dispositivo.

Este último ponto apanha muita gente desprevenida, por isso aqui fica a versão direta. **Uma cópia de segurança do sistema do telemóvel reinstala a aplicação mas não consegue restaurar os seus documentos.** A chave de encriptação nunca saiu do telemóvel antigo, por isso o novo não tem nada com que desencriptar. Se quer que o seu cofre sobreviva ao telemóvel, precisa de ter a cópia de segurança na cloud ativada, ou um ficheiro exportado guardado nalgum sítio.

## Restaurar num Telemóvel Novo

O processo de restauro é rápido, e é precisamente essa a razão de fazer a preparação antecipadamente.

Instale a aplicação no telemóvel novo e inicie sessão na mesma conta iCloud ou Google que usava antes. Abra Definições, depois Cópia de Segurança na Cloud, depois Restaurar Cópia de Segurança, e introduza o seu código de recuperação. O cofre regressa com os perfis, datas de validade e lembretes intactos.

A aplicação também verifica antes de escrever. Se a cópia de segurança na cloud detetar uma cópia já existente nessa conta, pede-lhe para escolher entre restaurar ou começar do zero. Um telemóvel novo não consegue substituir silenciosamente o que já lá está.

### Mudar Entre iPhone e Android

A cópia de segurança na cloud fica confinada a uma só plataforma, porque usa o seu próprio iCloud em dispositivos Apple e o seu próprio Google Drive no Android. Passar de um para o outro exige a outra via.

Use a Exportação do Cofre. Definições, Exportar Cofre produz um único ficheiro protegido por palavra-passe com tudo lá dentro, e escolhe para onde vai: a aplicação Ficheiros, um disco, um email para si próprio. No telemóvel novo, Definições, Importar Cofre lê-o de volta. Funciona nos dois sentidos e mantém nomes, datas, lembretes, cores, notas e anexos tal como estavam.

Esse ficheiro exportado é também a resposta para quem quer uma cópia que não dependa de todo de uma conta na cloud. É sensato guardá-lo num disco em casa, independentemente do telemóvel que use.

## Uma Rotina de Cópia de Segurança Que Sobrevive à Perda do Telemóvel

Vinte minutos, uma vez, antes da próxima viagem:

- Ative a cópia de segurança encriptada e deixe o primeiro envio terminar enquanto está no wifi de casa.
- Escreva o código de recuperação nalgum sítio que não seja o telemóvel, e releia-o a partir dessa cópia para confirmar que está legível.
- Faça uma segunda cópia do código e guarde-a num sítio diferente da primeira.
- Exporte o cofre uma vez e guarde o ficheiro nalgum sítio que controle, como uma via que não depende de nenhuma conta na cloud.
- Verifique se a aplicação mostra uma cópia de segurança recente antes de voar, da mesma forma que verificaria se os passaportes estão na mala.

Nada disto é dramático, e essa é precisamente a ideia. As famílias que lidam bem com um telemóvel roubado no estrangeiro quase nunca são as que reagiram de forma brilhante. São as que passaram vinte minutos sem grande importância à mesa da cozinha duas semanas antes.

Uma última nota sobre expectativas. A cópia de segurança é uma camada de proteção, e não garante nada: contas na cloud ficam bloqueadas, códigos são esquecidos, os serviços de armazenamento têm dias maus. Para documentos que realmente importam, mantenha também algo independente, seja uma cópia impressa numa gaveta em casa ou uma segunda exportação num disco.

**Antes de confiar nisto:** isto é um blogue, não uma fonte oficial. As regras e os detalhes mudam, e a sua situação pode ser diferente. Verificamos o que publicamos e ainda assim podemos estar errados ou desatualizados. Se algo aqui for importante para os seus planos, confirme-o junto da autoridade competente antes de agir.

## Perguntas Frequentes

### O que significa realmente uma cópia de segurança encriptada?

Significa que a cópia é embaralhada no seu telemóvel antes de ir para qualquer lado, usando uma chave que fica consigo. Quem guardar o ficheiro depois fica apenas com um bloco de dados ilegíveis, não com o seu passaporte. A palavra só significa alguma coisa quando consegue responder à pergunta seguinte: quem tem a chave? Se a empresa que fez a aplicação conseguir ler os seus documentos, a encriptação está a protegê-los de estranhos, não da empresa.

### O que acontece se perder a minha chave de cópia de segurança?

A cópia de segurança permanece encriptada e ninguém a consegue abrir, nós incluídos. Não existe conta, não existe reposição de palavra-passe, e não existe via de suporte que a recupere, porque o código de recuperação nunca chega até nós. Essa é a troca deliberada para que também mais ninguém consiga ler os seus documentos. Escreva o código antes de confiar na cópia de segurança, guarde-o num sítio separado do telemóvel, e releia-o uma vez para confirmar que consegue.

### A cópia de segurança na cloud é segura para digitalizações de passaporte?

Depende inteiramente do que chega à cloud. Uma fotografia do seu passaporte numa biblioteca de fotos comum ou numa pasta de sincronização de ficheiros chega legível, e qualquer pessoa que entre nessa conta consegue lê-la. Uma cópia de segurança encriptada no dispositivo antes do envio chega como texto cifrado, por isso o fornecedor de armazenamento fica com algo que não consegue abrir. O Travel Document Vault encripta o cofre no seu telemóvel com AES-256-GCM e envia o ficheiro encriptado para o seu próprio iCloud ou Google Drive, e não para um servidor da empresa.

### Consigo restaurar os meus documentos noutro telemóvel?

Sim. Instale a aplicação no telemóvel novo, inicie sessão na mesma conta iCloud ou Google, depois abra Definições, Cópia de Segurança na Cloud, Restaurar Cópia de Segurança e introduza o seu código de recuperação. Os seus perfis, documentos, datas de validade e lembretes regressam tal como estavam. Note que uma cópia de segurança do sistema do telemóvel não faz isto sozinha: reinstala a aplicação mas não consegue desencriptar os seus documentos, porque a chave de encriptação nunca sai do dispositivo original.

### A cópia de segurança funciona entre iPhone e Android?

A cópia de segurança na cloud fica confinada a uma só plataforma, já que usa o seu próprio iCloud no iPhone e iPad e o seu próprio Google Drive no Android. Para mudar entre eles, use antes a Exportação do Cofre: Definições, Exportar Cofre cria um único ficheiro .tdvault protegido por palavra-passe que pode enviar a si próprio da forma que preferir, e depois Definições, Importar Cofre no telemóvel novo lê-o de volta. A importação funciona entre plataformas nos dois sentidos e mantém nomes, datas, lembretes, notas e anexos intactos.

### O que fica guardado na cópia de segurança e o que permanece no dispositivo?

A cópia de segurança contém uma cópia encriptada do seu cofre: todos os perfis, digitalizações de documentos, datas de validade, lembretes e notas. O seu código de recuperação não está lá dentro, e nunca sai do dispositivo. O mesmo acontece com o bloqueio da aplicação, por isso o Face ID, o Touch ID ou o PIN protegem o telemóvel enquanto a encriptação protege o ficheiro. As cópias de segurança locais automáticas também ficam apenas no dispositivo, e é por isso que não conseguem trazer de volta o seu cofre num telemóvel de substituição.

## Artigos Relacionados

[Privacidade e Segurança7 min de leituraiCloud vs Google Photos vs Cofre Encriptado: A Forma Mais Segura de Guardar o Seu Passaporte](https://traveldocumentvault.com/pt/blog/safest-way-to-store-passport-digitally/)

[Privacidade7 min de leituraÉ Seguro Guardar o Seu Passaporte no Google Photos? O Que Precisa de Saber](https://traveldocumentvault.com/pt/blog/is-it-safe-to-store-passport-in-google-photos/)
