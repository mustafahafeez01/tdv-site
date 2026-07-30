# ¿Cuál es mi código de recuperación? | Travel Document Vault

> Tu código de recuperación es la clave maestra de tus copias de seguridad encriptadas en la nube. Aprende qué es, por qué lo necesitas, qué ocurre si lo pierdes y cómo guardarlo de forma segura.

Source: https://traveldocumentvault.com/es/faq/recovery-code/

---

Tu código de recuperación es una frase de 24 caracteres que encripta tus copias de seguridad en la nube. Si lo pierdes, esas copias de seguridad se vuelven irrecuperables. No lo guardamos ni lo reiniciamos, así que guárdalo en un lugar seguro.

## Cómo funciona

### Qué es

Tu código de recuperación es una frase de 24 caracteres generada cuando activas la copia de seguridad en la nube. Se ve así:

XXXX-XXXX-XXXX-XXXX-XXXX-XXXX

Este código está derivado matemáticamente de tus configuraciones de copia de seguridad y es la única clave que puede desencriptar tu bóveda encriptada en la nube. Lo generamos una sola vez y te lo mostramos una sola vez. Después, la responsabilidad de mantenerlo seguro es tuya.

### Por qué lo necesitas

Cuando activas la copia de seguridad en la nube, toda tu bóveda se encripta en tu dispositivo usando AES-256-GCM antes de que salga de tu teléfono. La clave de encriptación se deriva de tu código de recuperación. Sin el código de recuperación, la copia de seguridad es criptográficamente inaccesible, incluso para nosotros.

Esta es una garantía de privacidad. Literalmente no podemos leer tus copias de seguridad, desencriptarlas bajo demanda, o reiniciarlas por ti. Si se pierde tu código de recuperación, esa copia de seguridad se ha ido para siempre. Suena duro, pero es exactamente lo que quieres: tu privacidad no es solo una promesa que hacemos, es un hecho técnico que no podemos violar.

### Si lo pierdes

Si olvidas tu código de recuperación, tu copia de seguridad en la nube existente no puede ser recuperada. Tienes dos opciones:

- **Restaurar desde tu teléfono:** Si el código aún está guardado en la aplicación (comprueba Configuración - Copia de seguridad en la nube), cópialo a un lugar seguro y guárdalo.
- **Generar uno nuevo:** Desactiva la copia de seguridad en la nube y reactivala. Esto crea un nuevo código de recuperación y descarta la copia de seguridad existente. Comienzas de nuevo.

### Dónde guardarlo

Tu código de recuperación es tan sensible como tu contraseña maestra. Guárdalo de una de estas formas:

- **Gestor de contraseñas:** Bitwarden, 1Password, Apple Keychain, o similar. Esta es la opción más conveniente.
- **Copia de seguridad física:** Escríbelo en papel y guárdalo en una caja fuerte, caja de seguridad, o lugar seguro en casa.
- **Documento sin conexión:** Guarda en una unidad externa encriptada o USB (nunca sincronizado en la nube).
- **Evitar:** Correo electrónico, aplicación Notas, servicios en la nube sin encriptar, o capturas de pantalla.

### Regenerar tu código

Si crees que tu código de recuperación está comprometido, desactiva la copia de seguridad en la nube y reactivala. La aplicación genera un nuevo código de recuperación. Tu copia de seguridad encriptada antigua se descarta. Esto es intencional: la rotación del código de recuperación es deliberadamente rara y con pérdida de datos, así que no la haces sin pensar bien.

**Descargo de responsabilidad:** Tu código de recuperación es tu única responsabilidad. Travel Document Vault no puede recuperarlo, reiniciarlo ni regenerarlo si se pierde. Guárdalo de forma segura. No confíes en esta aplicación como tu único sistema de copia de seguridad para documentos críticos.

## ¿Listo para proteger tu bóveda?

Descarga Travel Document Vault y activa la copia de seguridad en la nube para mantener tus documentos seguros.

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877) [Google Play](https://play.google.com/store/apps/details?id=com.mustafahafeez.traveldocumentvault)
