# 备份说明：本地备份、Vault Export 和云备份 | Travel Document Vault

> 关于 Travel Document Vault 保护您数据的三种方式的清晰对比：自动本地备份、Vault Export (.tdvault) 和可选的 Pro 云备份到 iCloud 或 Google Drive。

Source: https://traveldocumentvault.com/zh-Hans/faq/backup-explained/

---

Travel Document Vault 为您提供三层保护。以下是每一层的功能、适用人群以及如何从中恢复。

## 三种机制，一个目标

Travel Document Vault 提供三层保护：(1) 自动本地备份，每隔几分钟在您的设备上创建，无需付费。(2) Vault Export，一个免费的手动加密备份文件 (.tdvault)，您可以保存在任何选择的位置。(3) 云备份，一个 Pro 选项，可以在您自己的 iCloud 或 Google Drive 中保留端到端加密副本。

- **自动本地备份**：在后台静默进行，无需任何操作。
- **Vault Export (.tdvault)**：一个可移植加密文件，您可以保存在任何选择的位置。
- **云备份 (Pro)**：您自己的 iCloud 或 Google Drive 中的自动加密副本。

## 概览

| 机制 | 版本 | 自动？ | 存储位置 | 如何恢复 |
|---|---|---|---|---|
| **自动本地备份** | 免费 | 是的，每隔几分钟 | 在您的设备上 | 设置，恢复本地备份 |
| **Vault Export (.tdvault)** | 免费 | 否，手动 | 您选择的任何位置：Files、iCloud Drive、Google Drive、电子邮件 | 设置，导入备份 |
| **云备份** | Pro | 是的，自动 | 您自己的 iCloud（iOS）或 Google Drive（Android） | 设置，云备份，从备份恢复 |

## 自动本地备份

当应用打开且您进行更改时，应用会每隔几分钟静默创建保险库快照。您无需操作。应用保留最近的几个快照，并删除旧快照以节省空间。Vault Export 会创建可移出设备保存的便携加密文件。

在“设置”中，您会看到类似“最后备份：2 小时前，12 个文档”的内容，说明最新快照的时间和包含的文档数量。这显示最新可用的本地快照。本地快照不包含附件文件的独立副本。

**恢复方法：**打开设置，然后选择"恢复本地备份"。从列表中选择一个快照并确认。恢复会将您的当前数据替换为快照内容。

这些本地快照留在您的设备上。系统备份（iCloud Backup、Google Backup）可以重新安装应用，但无法在新手机上恢复它们，因为普通手机备份不会传输绑定设备的加密密钥。Vault Export 包含该密钥的密码加密副本。迁移保险库请使用云备份（Pro）或免费的 Vault Export。

## Vault Export (.tdvault)——免费供所有人使用

Vault Export 将受支持的保险库记录和可用附件打包到一个加密、受密码保护的文件中。每次导出都有大小限制。您可以保存到 Files 应用、iCloud Drive、Google Drive，或通过 AirDrop 或电子邮件分享。

该文件在离开应用程序之前已在设备上加密。只有您在导出时设置的密码才能解锁它。

**导出方法：**打开“设置”，选择“导出保险库”，然后按照提示选择保存位置。

**恢复方法：**打开“设置”，选择“导入备份”，选择 .tdvault 文件、确认并输入密码。导入会替换该手机已有的全部内容。导入支持受支持的设备，包括跨平台迁移（iOS 到 Android 或反之）。导出保留受支持的保险库字段和部分设置，缺失的附件或无法读取的备注可能被省略。请检查导入的文档和提醒。应用锁及其他设备设置保留在本地。

这对所有用户都是免费的。无需购买 Pro。

## 云备份 (Pro)

云备份是 Pro 功能。开启后，会在您自己的 iCloud（iOS）或 Google Drive（Android）中保留自动备份。应用在打开且联网时更新备份。我们不接收备份。文档内容已加密；设备名称、数量和时间戳等备份元数据未加密。

文档内容在上传前使用 AES-256-GCM 在您的设备上进行端到端加密。云端加密密钥由恢复码解锁；这个24字符的密码短语由应用在设置 PIN 时生成。请妥善保管恢复码。如果您丢失所有副本，也无法再访问任何能够解锁保险库的设备，我们就无法恢复加密备份。

**恢复方法：**使用同一平台上的受支持设备，并登录相同的 Apple ID 或 Google 账户。关闭备份后，打开“设置”“云备份”。选择“从备份恢复”，选择备份、输入恢复码并确认。恢复会替换本地保险库内容。

云备份在应用打开且联网时自动运行。使用同一云账户及同一平台上的受支持设备，通过“设置”输入恢复码进行恢复。

## 我应该使用哪一个？

简短回答：使用全部三种。

有可用快照时，自动本地备份可以帮助恢复近期的保险库记录。它们在应用打开时运行，不能代替独立的文档备份。

在更换设备、进行重大应用程序更新或任何时候您需要将可移植副本保存在独立于您的手机的位置时，Vault Export 是正确的选择。至少执行一次，并将文件存储在安全的位置。

如果您希望自动进行设备外备份，而不必手动管理文件，云备份（Pro）适合您。换到同一平台上的受支持手机时，请使用同一云账户，在恢复流程中选择备份、输入恢复码并确认。恢复会替换本地保险库内容。

没有任何一层是跳过其他层的理由。云账户可能会丢失，恢复代码可能会被遗忘，手机可能会在本地备份运行之前被盗。所有三层的组合为您提供了最强的保护。

### 相关指南

- [如何导出和导入您的 Vault——分步演练](https://traveldocumentvault.com/zh-Hans/faq/export-import/)
- [我的恢复代码是什么？——安全存储的完整指南](https://traveldocumentvault.com/zh-Hans/faq/recovery-code/)
- [云备份——端到端加密如何工作](https://traveldocumentvault.com/zh-Hans/cloud-backup/)

## 快速解答

Travel Document Vault 提供哪些备份选项？ Travel Document Vault 提供三层保护：(1) 自动本地备份，每隔几分钟在您的设备上创建，无需付费。(2) Vault Export，一个免费的手动加密备份文件 (.tdvault)，您可以保存在任何选择的位置。(3) 云备份，一个 Pro 选项，可以在您自己的 iCloud 或 Google Drive 中保留端到端加密副本。 Vault Export 是免费的吗？ 这对所有用户都是免费的。无需购买 Pro。 本地备份和 Vault Export 之间有什么区别？ 当应用打开且您进行更改时，应用会每隔几分钟静默创建保险库快照。您无需操作。应用保留最近的几个快照，并删除旧快照以节省空间。Vault Export 会创建可移出设备保存的便携加密文件。 什么是云备份，谁需要它？ 云备份是 Pro 功能。开启后，会在您自己的 iCloud（iOS）或 Google Drive（Android）中保留自动备份。应用在打开且联网时更新备份。我们不接收备份。文档内容已加密；设备名称、数量和时间戳等备份元数据未加密。

## 获取 Travel Document Vault

免费下载。Vault Export 和本地备份对所有人都包括在内。Pro 添加了云备份、无限配置文件、组合 PDF 导出等。一次性购买，无订阅。

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877?ct=faq&mt=8)

![在 Google Play 上获取](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
