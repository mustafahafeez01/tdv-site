# Verificação de privacidade | Travel Document Vault

> Declarações de privacidade verificáveis para Travel Document Vault. Zero rastreadores, zero coleta de dados. No dispositivo por padrão - sem nuvem TDV, sem conta necessária. Veja todas as permissões que solicitamos e por quê.

Source: https://traveldocumentvault.com/pt/privacy-verification/

---

## Nossas declarações de privacidade

### Zero rastreadores

Sem SDKs de análise, sem bibliotecas de publicidade, sem pixels de rastreamento no aplicativo.

### Sem coleta de dados de saída

O aplicativo não faz conexões de saída por padrão. Funciona completamente offline. O único uso de rede é o backup na nuvem Pro opcional, que sincroniza com seu iCloud ou Google Drive pessoal — nunca com nossos servidores.

### No dispositivo por padrão

Todos os documentos, digitalizações e dados permanecem no seu dispositivo. Não há nuvem TDV, nenhum servidor TDV, nenhum backend TDV. Os usuários Pro podem opcionalmente fazer backup do seu cofre criptografado na sua própria conta iCloud ou Google Drive — apenas eles têm a chave de recuperação.

### Criptografia AES-256-GCM

Cada documento é criptografado antes de tocar no armazenamento do seu dispositivo.

## Verificação

Não precisa confiar em nós. Você pode confirmar cada afirmação acima com ferramentas gratuitas e de código aberto disponíveis publicamente.

### 1. Teste de tráfego de rede

Instale um monitor de rede como **mitmproxy** (gratuito, código aberto), **Wireshark** (gratuito, código aberto), ou **Charles Proxy**. Abra Travel Document Vault, digitalize um documento, navegue pelo seu cofre e defina um lembrete. Você não deve ver seus documentos, digitalizações, datas de validade ou o conteúdo do cofre sendo enviados para a Travel Document Vault. O tráfego de rede deve se limitar a recursos específicos: relatórios opcionais de falha do Sentry, verificações de compra da App Store ou Google Play, backup opcional na sua própria conta do iCloud ou Google Drive, e uma verificação manual de correção de erros explicada abaixo.

As Configurações têm um botão **Check for Updates**. É uma verificação manual, nunca automática — executada apenas quando você toca nele, nunca em segundo plano e nunca por conta própria. A verificação entra em contato com **updates.traveldocumentvault.com** — nosso próprio servidor de atualizações, operado por nós no Google Cloud, que fornece arquivos de atualização assinados criptograficamente a partir de um compartimento de armazenamento. Não registramos a verificação: os logs de solicitações estão desabilitados do nosso lado, portanto nenhum endereço IP é mantido. Toda atualização é assinada com uma chave que apenas temos, e o aplicativo recusa qualquer coisa cuja assinatura não corresponda ao certificado nele incorporado. O mesmo toque também verifica se há uma versão mais recente do aplicativo na **App Store** ou no **Google Play**. Esse recurso existe para que certas correções de erros possam chegar até você mais rápido do que esperar por um lançamento totalmente novo na App Store ou no Google Play, útil para correções urgentes, dependendo da natureza da correção. Vale a mesma regra do resto desta página: nenhuma chamada de rede sem que você peça.

### 2. Relatório de privacidade de aplicativo iOS

No iPhone, vá para **Configurações > Privacidade e segurança > Relatório de privacidade do aplicativo**. Este recurso integrado da Apple mostra quais aplicativos contataram domínios de rede. A Travel Document Vault não nos envia seus documentos, digitalizações, datas de validade nem o conteúdo do seu cofre. Se você tiver habilitado o backup na nuvem Pro, verá conexões com domínios iCloud da Apple — esse é o seu backup sincronizando com a sua própria conta iCloud.

### 3. Android — como verificar a sua privacidade

O Android não tem um único relatório de privacidade integrado como o iPhone. Duas formas simples de verificar você mesmo: veja a própria seção **Data Safety** deste aplicativo na sua página do Google Play (ela indica claramente o que é coletado, o que é compartilhado, que os seus dados são criptografados em trânsito, e que não podem ser excluídos) — ou use um monitor de rede conforme descrito no passo 1 acima.

Se você ativou o backup na nuvem, pode notar alguma atividade em direção aos servidores do Google (endereços que terminam em **googleapis.com**). Isso é esperado e seguro: é apenas o seu arquivo de backup bloqueado e criptografado, junto com uma verificação de login, sendo enviado diretamente para a **sua própria** conta do Google Drive — a mesma que você já usa para fotos ou Gmail. Nós nunca a vemos, recebemos ou guardamos uma cópia em lugar nenhum. Só você tem a chave de recuperação que pode desbloqueá-la.

### 4. Rótulos de privacidade da App Store e Google Play

Tanto Apple quanto Google exigem que os desenvolvedores declarem quais dados seu aplicativo coleta. Verifique o anúncio da App Store ou Google Play para Travel Document Vault. Nossa declaração: **nenhum dado coletado**.

## Como testamos a segurança da aplicação

Não nos limitamos a afirmar que a aplicação é segura. Verificamos isso, utilizando as mesmas ferramentas abertas e normas públicas que o setor de segurança utiliza.

### Avaliamos a aplicação segundo uma norma pública

Avaliamos a Travel Document Vault em relação ao [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), a lista de referência do setor sobre como uma aplicação móvel deve armazenar dados, utilizar encriptação, bloquear-se com Face ID ou um PIN, e lidar com ligações vindas de outras aplicações. Qualquer pessoa pode consultar a norma e comparar com o comportamento real da aplicação.

### Analisamos o nosso próprio código

Antes de cada lançamento, executamos uma análise estática do nosso código com [Semgrep](https://semgrep.dev/), uma ferramenta de código aberto que identifica padrões inseguros, como encriptação fraca ou tratamento inadequado de dados, para que possamos corrigi-los cedo.

### Analisamos a aplicação já compilada

Também revemos as nossas versões lançadas com ferramentas de análise de segurança para aplicações móveis, verificando como a versão armazena dados, a que pode aceder e como está assinada.

### Encontrou um problema? Diga-nos

Se detetar um problema de segurança, envie um e-mail para [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Os detalhes do nosso processo de divulgação estão publicados em [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Esta é a nossa própria avaliação em relação a uma norma pública, não uma auditoria independente nem uma certificação. Última revisão em julho de 2026.

## Cada permissão explicada

Os aplicativos Android declaram permissões em seu manifesto. Alguns são solicitados diretamente pelo aplicativo e alguns são herdados das bibliotecas das quais o aplicativo depende. Aqui está um detalhamento transparente de cada permissão, agrupada por propósito.

### Permissões que o aplicativo usa diretamente

### Câmera

iOS + Android

**Por que pedimos:** Para digitalizar suas páginas de passaporte, visto ou documento de viagem diretamente do aplicativo.

**O que nunca fazemos:** As fotos são salvas localmente no seu dispositivo. Nunca são carregadas, transmitidas ou enviadas para nenhum lugar.

### Biblioteca de fotos / Fotos / Armazenamento

iOS + Android

**Por que pedimos:** Para permitir que você importe uma foto existente de um documento e para que o aplicativo possa exportar arquivos de backup criptografados (.tdvault) quando você os solicitar. Em versões antigas do Android, READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE são necessários. No Android 13+, READ_MEDIA_IMAGES é usado em seu lugar.

**O que nunca fazemos:** O aplicativo apenas lê a imagem que você seleciona. Nunca digitaliza, indexa ou procura sua biblioteca de fotos ou sistema de arquivos.

### Face ID / Touch ID / Desbloqueio biométrico

iOS + Android

**Por que pedimos:** Para bloquear e desbloquear o aplicativo para que apenas você possa acessar seus documentos. No Android 6-8, USE_FINGERPRINT é usado. No Android 9+, USE_BIOMETRIC é usado em seu lugar.

**O que nunca fazemos:** Seus dados biométricos nunca saem do seu dispositivo. O sistema operacional lida com a autenticação e retorna apenas um resultado de aprovado/falhou ao aplicativo.

### Notificações, Vibração, Inicialização concluída, Wake Lock

Android

**Por que pedimos:** Para fornecer lembretes de vencimento no dispositivo que você mesmo definiu. RECEIVE_BOOT_COMPLETED reagenda seus lembretes após uma reinicialização do dispositivo. WAKE_LOCK garante que os lembretes sejam acionados de forma confiável mesmo quando o telefone está em modo de espera. VIBRATE acompanha a entrega de notificações.

**O que nunca fazemos:** Nunca são enviadas notificações de marketing, promoções ou terceiros. Os lembretes são totalmente agendados no seu dispositivo.

### Internet, Estado da rede, Estado do Wi-Fi

Android

**Por que estes aparecem:** Eles são necessários para recursos que usam rede: **relatórios de falha do Sentry** (opt-in, desabilitados por padrão), **faturamento da App Store ou Google Play** para a compra do upgrade Pro, **backup na nuvem Pro** (opcional), que sincroniza seu cofre criptografado com seu próprio iCloud ou Google Drive, e o botão manual **Check for Updates** nas Configurações (só funciona quando você toca nele). ACCESS_NETWORK_STATE e ACCESS_WIFI_STATE permitem verificar se há conexão disponível antes de tentar enviar.

**O que não fazemos:** O aplicativo não envia seus documentos, digitalizações, datas de validade, fotos nem o conteúdo do seu cofre para a Travel Document Vault. Ele funciona completamente offline para armazenamento normal de documentos e lembretes.

### Permissões herdadas de bibliotecas (não usadas pelo aplicativo)

Os aplicativos Android incluem bibliotecas de terceiros para recursos como compras no aplicativo, relatórios de falha e notificações. Essas bibliotecas declaram permissões em seus próprios manifestos, que são mesclados no aplicativo final. As permissões abaixo são declaradas por dependências, não pelo nosso código. O aplicativo nunca chama as APIs atrás delas.

### Gravar áudio

Herdada, nunca usada

**Por que aparece:** Esta permissão é declarada por uma biblioteca de terceiros incluída na compilação (normalmente o plug-in de câmera ou mídia). Ela aparece no manifesto do Android mas nunca é acionada pelo nosso código. O aplicativo nunca grava áudio ou vídeo em nenhuma circunstância.

**Como você pode confirmar:** O aplicativo nunca solicitará acesso ao microfone. Se você verificar o gerenciador de permissões do seu dispositivo, verá que a gravação de áudio não é concedida ao Travel Document Vault.

### Janela de alerta do sistema

Herdada

Declarado pelo framework Flutter para sobreposições de desenvolvimento e depuração. Esta permissão não é usada na compilação de lançamento do aplicativo e não afeta sua privacidade.

### Detectar captura de tela

Herdada

Declarado por uma dependência do framework. O aplicativo não detecta, bloqueia ou responde a capturas de tela. Esta permissão não afeta seu uso.

### Permissões de contagem de emblema

Herdada

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, e PROVIDER_INSERT_BADGE são declarados pela biblioteca de notificações para exibir contagens de emblema não lidos no seu ícone da tela inicial em diferentes fabricantes Android (Samsung, Huawei, Xiaomi, etc.). Eles apenas afetam o número exibido no ícone do aplicativo.

### Faturamento, Verificar licença, Referência de instalação

Google Play

Declarado pela biblioteca de faturamento Google Play (para compra de atualização Pro) e biblioteca de referência de instalação Play. Esses são requisitos padrão da Google Play Store e não acessam dados pessoais.

### Baixar sem notificação

Herdada

Declarado por uma dependência do framework. O aplicativo não baixa arquivos em segundo plano.

### Permissões que não solicitamos

Estas são permissões comuns que muitos aplicativos solicitam. Não solicitamos nenhuma delas e elas não aparecem em nosso manifesto.

**Localização** — Sem GPS, sem geofencing, sem rastreamento **Contatos** — Sem acesso ao seu catálogo de endereços **Bluetooth** — Sem rede local ou varredura de dispositivo **Calendário** — Lembretes são tratados no dispositivo, não através do seu calendário

Ainda tem dúvidas? Leia nossa [Política de privacidade](https://traveldocumentvault.com/privacy-policy/) completa ou consulte as [Perguntas frequentes](https://traveldocumentvault.com/pt/faq/).
