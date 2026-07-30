# Verificación de privacidad | Travel Document Vault

> Afirmaciones de privacidad verificables para Travel Document Vault. Cero rastreadores, cero recopilación de datos. En el dispositivo por defecto - sin TDV cloud, sin cuenta requerida. Ve cada permiso que solicitamos y por qué.

Source: https://traveldocumentvault.com/es/privacy-verification/

---

## Nuestras afirmaciones de privacidad

### Cero rastreadores

Sin SDKs de análisis, sin librerías publicitarias, sin píxeles de seguimiento dentro de la aplicación.

### Sin recopilación de datos salientes

La aplicación no realiza conexiones salientes por defecto. Funciona completamente sin conexión. El único uso de red es la copia de seguridad Pro en la nube, que se sincroniza con tu propio iCloud o Google Drive - nunca con nuestros servidores.

### En el dispositivo por defecto

Todos los documentos, escaneos y datos permanecen en tu dispositivo. No hay nube TDV, no hay servidor TDV, no hay backend TDV. Los usuarios Pro pueden opcionalmente hacer una copia de seguridad de su bóveda cifrada en su propia cuenta de iCloud o Google Drive - solo ellos tienen la clave de recuperación.

### Encriptación AES-256-GCM

Cada documento se encripta antes de tocar el almacenamiento de tu dispositivo.

## Verificación

No necesitas confiar en nosotros. Puedes confirmar cada afirmación anterior con herramientas gratuitas de código abierto disponibles públicamente.

### 1. Prueba de tráfico de red

Instala un monitor de red como **mitmproxy** (gratuito, código abierto), **Wireshark** (gratuito, código abierto), o **Charles Proxy**. Abre Travel Document Vault, escanea un documento, explora tu bóveda y establece un recordatorio. No deberías ver tus documentos, escaneos, fechas de vencimiento ni el contenido de tu bóveda enviados a Travel Document Vault. El tráfico de red debería limitarse a funciones concretas: reporte de fallos de Sentry opcional, comprobaciones de compra del App Store o Google Play, copia de seguridad opcional en tu propia cuenta de iCloud o Google Drive, y una comprobación manual de corrección de errores explicada más abajo.

Ajustes tiene un botón **Check for Updates**. Es una comprobación manual, nunca automática - solo se ejecuta cuando tú mismo lo pulsas, nunca en segundo plano ni por sí sola. La comprobación contacta con **updates.traveldocumentvault.com** - nuestro propio servidor de actualizaciones, operado por nosotros en Google Cloud, que distribuye archivos de actualización con firma criptográfica desde un contenedor de almacenamiento. No registramos la comprobación: los registros de solicitudes están deshabilitados en nuestro lado, por lo que no se retienen direcciones IP. Cada actualización está firmada con una clave que solo nosotros tenemos, y la aplicación rechaza cualquier cosa cuya firma no coincida con el certificado incorporado en ella. El mismo toque también comprueba si hay una versión más reciente de la aplicación en el **App Store** o en **Google Play**. Existe para que ciertas correcciones puedan llegarte más rápido que esperar a una publicación completamente nueva en el App Store o Google Play, útil para correcciones urgentes, según la naturaleza de la corrección. La misma regla que el resto de esta página: ninguna llamada de red sin que tú la pidas.

### 2. Reporte de privacidad de la aplicación iOS

En iPhone, ve a **Configuración > Privacidad y Seguridad > Informe de Privacidad de la Aplicación**. Esta función integrada de Apple muestra qué aplicaciones han contactado dominios de red. Travel Document Vault no envía tus documentos, escaneos, fechas de vencimiento ni el contenido de tu bóveda a nosotros. Si has habilitado la copia de seguridad Pro en la nube, verás conexiones a dominios de iCloud de Apple - esa es tu propia copia de seguridad sincronizándose con tu propia cuenta de iCloud.

### 3. Android - cómo comprobar tu privacidad

Android no tiene un único informe de privacidad integrado como el iPhone. Hay dos formas sencillas de comprobarlo por ti mismo: consulta la propia sección **Data Safety** de esta aplicación en su página de Google Play (indica claramente qué se recopila, qué se comparte, que tus datos se cifran en tránsito y que no se pueden eliminar) - o usa un monitor de red como se describe en el paso 1 anterior.

Si has activado la copia de seguridad en la nube, es posible que notes algo de actividad hacia los servidores de Google (direcciones web que terminan en **googleapis.com**). Eso es normal y seguro: es solo tu archivo de copia de seguridad bloqueado y cifrado, junto con una comprobación de inicio de sesión, enviados directamente a **tu propia** cuenta de Google Drive - la misma que ya usas para tus fotos o tu Gmail. Nosotros nunca lo vemos, lo recibimos ni guardamos una copia en ningún sitio. Solo tú tienes la clave de recuperación que puede desbloquearlo.

### 4. Etiquetas de privacidad de App Store y Play Store

Tanto Apple como Google requieren que los desarrolladores declaren qué datos recopila su aplicación. Revisa el listado de App Store o Google Play para Travel Document Vault. Nuestra declaración: **sin datos recopilados**.

## Cómo probamos la seguridad de la aplicación

No nos limitamos a decir que la aplicación es segura. La comprobamos, utilizando las mismas herramientas abiertas y normas públicas que usa el sector de la seguridad.

### Sometemos la aplicación a un estándar público

Evaluamos Travel Document Vault frente al [OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/), la lista de referencia del sector sobre cómo debe una aplicación móvil almacenar datos, utilizar el cifrado, bloquearse mediante Face ID o un PIN, y gestionar los enlaces procedentes de otras aplicaciones. Cualquiera puede leer el estándar y comparar lo que dice con el comportamiento real de la aplicación.

### Analizamos nuestro propio código

Antes de publicar una versión, ejecutamos un análisis estático de nuestro código con [Semgrep](https://semgrep.dev/), una herramienta de código abierto que detecta patrones inseguros, como un cifrado débil o un manejo incorrecto de datos, para corregirlos a tiempo.

### Analizamos la aplicación ya compilada

También revisamos nuestras versiones publicadas con herramientas de análisis de seguridad para aplicaciones móviles, comprobando cómo almacena los datos, a qué puede acceder y cómo está firmada.

### ¿Encontraste un problema? Cuéntanoslo

Si detectas un problema de seguridad, escribe a [support@traveldocumentvault.com](mailto:support@traveldocumentvault.com). Los detalles de nuestro proceso de divulgación están publicados en [/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt).

Esta es nuestra propia evaluación frente a un estándar público, no una auditoría independiente ni una certificación. Última revisión en julio de 2026.

## Cada permiso explicado

Las aplicaciones Android declaran permisos en su manifiesto. Algunos son solicitados directamente por la aplicación y otros se heredan de librerías de las que depende la aplicación. Aquí hay un desglose transparente de cada permiso, agrupado por propósito.

### Permisos que la aplicación usa directamente

### Cámara

iOS + Android

**Por qué lo pedimos:** Para escanear tus páginas de pasaporte, visa o documentos de viaje directamente desde la aplicación.

**Lo que nunca hacemos:** Las fotos se guardan localmente en tu dispositivo. Nunca se cargan, transmiten o se envían a ningún lado.

### Galería de fotos / Fotos / Almacenamiento

iOS + Android

**Por qué lo pedimos:** Para que puedas importar una foto existente de un documento y para que la aplicación pueda exportar archivos de copia de seguridad cifrada (.tdvault) cuando los solicites. En versiones anteriores de Android, READ_EXTERNAL_STORAGE y WRITE_EXTERNAL_STORAGE son necesarios para esto. En Android 13+, READ_MEDIA_IMAGES se usa en su lugar.

**Lo que nunca hacemos:** La aplicación solo lee la imagen que seleccionas. Nunca escanea, indexa o explora tu galería de fotos o sistema de archivos.

### Face ID / Touch ID / Desbloqueo biométrico

iOS + Android

**Por qué lo pedimos:** Para bloquear y desbloquear la aplicación para que solo tú puedas acceder a tus documentos. En Android 6-8, se usa USE_FINGERPRINT. En Android 9+, USE_BIOMETRIC se usa en su lugar.

**Lo que nunca hacemos:** Tus datos biométricos nunca dejan tu dispositivo. El sistema operativo maneja la autenticación y devuelve solo un resultado aprobado/rechazado a la aplicación.

### Notificaciones, Vibración, Inicio completado, Wake Lock

Android

**Por qué lo pedimos:** Para entregar recordatorios de vencimiento en el dispositivo que tú mismo configuras. RECEIVE_BOOT_COMPLETED reprograma tus recordatorios después de un reinicio del dispositivo. WAKE_LOCK asegura que los recordatorios se activen confiablemente incluso cuando el teléfono está dormido. VIBRATE acompaña la entrega de notificaciones.

**Lo que nunca hacemos:** Nunca se envían notificaciones de marketing, promocionales o de terceros. Los recordatorios se programan completamente en tu dispositivo.

### Internet, Estado de red, Estado de Wi-Fi

Android

**Por qué aparecen:** Estos son necesarios para funciones con uso de red: **Reporte de fallos de Sentry** (opt-in, deshabilitado por defecto), **facturación del App Store o Google Play** para la compra de la mejora Pro, **copia de seguridad Pro en la nube** (opcional), que sincroniza tu bóveda cifrada con tu propio iCloud o Google Drive, y el botón manual **Check for Updates** en Ajustes (solo se ejecuta cuando lo pulsas). ACCESS_NETWORK_STATE y ACCESS_WIFI_STATE permiten comprobar si hay conexión antes de intentar enviar.

**Lo que no hacemos:** La aplicación no sube tus documentos, escaneos, fechas de vencimiento, fotos ni el contenido de tu bóveda a Travel Document Vault. Funciona completamente sin conexión para el almacenamiento normal de documentos y recordatorios.

### Permisos heredados de librerías (no utilizados por la aplicación)

Las aplicaciones Android incluyen librerías de terceros para características como compras in-app, reporte de fallos y notificaciones. Estas librerías declaran permisos en sus propios manifiestos, que se fusionan con la aplicación final. Los permisos a continuación son declarados por dependencias, no por nuestro código. La aplicación nunca llama a las APIs detrás de ellos.

### Grabar audio

Heredado, nunca usado

**Por qué aparece:** Este permiso es declarado por una librería de terceros incluida en la compilación (comúnmente el plugin de cámara o medios). Aparece en el manifiesto de Android pero nunca es activado por nuestro código. La aplicación no graba audio ni video bajo ninguna circunstancia.

**Cómo puedes confirmar:** La aplicación nunca te solicitará acceso al micrófono. Si revisas el gestor de permisos de tu dispositivo, verás que la grabación de audio no se otorga a Travel Document Vault.

### Ventana de alerta del sistema

Heredado

Declarado por el marco de trabajo Flutter para superposiciones de desarrollo y depuración. Este permiso no se usa en la compilación de lanzamiento de la aplicación y no tiene efecto en tu privacidad.

### Detectar captura de pantalla

Heredado

Declarado por una dependencia del marco de trabajo. La aplicación no detecta, bloquea ni responde a capturas de pantalla. Este permiso no tiene efecto en tu uso.

### Permisos de recuento de insignias

Heredado

READ_APP_BADGE, UPDATE_BADGE, BADGE_COUNT_READ, BADGE_COUNT_WRITE, READ_SETTINGS, WRITE_SETTINGS, UPDATE_COUNT, CHANGE_BADGE, BROADCAST_BADGE, y PROVIDER_INSERT_BADGE son declarados por la librería de notificaciones para mostrar recuentos de insignias no leídas en tu icono de pantalla de inicio en diferentes fabricantes de Android (Samsung, Huawei, Xiaomi, etc.). Solo afectan el número mostrado en el icono de la aplicación.

### Facturación, Verificar licencia, Referrer de instalación

Google Play

Declarado por la librería de facturación de Google Play (para la compra de actualización Pro) y la librería de Referrer de instalación de Play. Estos son requisitos estándar de Google Play Store y no acceden a datos personales.

### Descargar sin notificación

Heredado

Declarado por una dependencia del marco de trabajo. La aplicación no descarga archivos en segundo plano.

### Permisos que no solicitamos

Estos son permisos comunes que muchas aplicaciones solicitan. No solicitamos ninguno de ellos y no aparecen en nuestro manifiesto.

**Ubicación** - Sin GPS, sin geofencing, sin rastreo **Contactos** - Sin acceso a tu libreta de direcciones **Bluetooth** - Sin red local ni escaneo de dispositivos **Calendario** - Los recordatorios se manejan en el dispositivo, no a través de tu calendario

¿Aún tienes dudas? Lee nuestra [Política de privacidad](https://traveldocumentvault.com/privacy-policy/) completa o revisa las [Preguntas frecuentes](https://traveldocumentvault.com/es/faq/).
