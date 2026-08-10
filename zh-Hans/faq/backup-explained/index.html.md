# 备份说明：本地备份、Vault Export 和云备份 | Travel Document Vault

> 关于 Travel Document Vault 保护您数据的三种方式的清晰对比：自动本地备份、Vault Export (.tdvault) 和可选的 Pro 云备份到 iCloud 或 Google Drive。

Source: https://traveldocumentvault.com/zh-Hans/faq/backup-explained/

---

Travel Document Vault 为您提供三层保护。以下是每一层的功能、适用人群以及如何从中恢复。

## 三种机制，一个目标

您的文档存储在您的设备上。它们不会上传到我们的服务器。三种备份机制各有用途，您可以同时使用所有三种。

- **自动本地备份** - 在后台静默进行，无需任何操作。
- **Vault Export (.tdvault)** - 一个可移植加密文件，您可以保存在任何选择的位置。
- **云备份 (Pro)** - 您自己的 iCloud 或 Google Drive 中的自动加密副本。

## 概览

| 机制 | 版本 | 自动？ | 存储位置 | 如何恢复 |
|---|---|---|---|---|
| **自动本地备份** | 免费 | 是的，每隔几分钟 | 在您的设备上 | 设置，恢复本地备份 |
| **Vault Export (.tdvault)** | 免费 | 否，手动 | 您选择的任何位置：Files、iCloud Drive、Google Drive、电子邮件 | 设置，导入 Vault |
| **云备份** | Pro | 是的，自动 | 您自己的 iCloud（iOS）或 Google Drive（Android） | 设置，云备份，从备份恢复 |

## 自动本地备份

当应用程序打开且您进行更改时，应用会每隔几分钟静默创建一个快照。您无需执行任何操作。该应用程序保留最近的 10 个快照，并删除旧快照以节省空间。

在设置中，您将看到一行类似"最后备份：2 小时前，12 个文档"的内容。这会告诉您最新快照的时间和捕获的文档数量。这是为了让您放心，恢复副本始终近在咫尺。

**恢复方法：**打开设置，然后选择"恢复本地备份"。从列表中选择一个快照并确认。恢复会将您的当前数据替换为快照内容。

这些本地快照保留在您的设备上。系统备份（iCloud Backup、Google Backup）会重新安装应用程序，但无法在新手机上恢复它们，因为加密密钥永远不会离开您的原始设备。要移动您的 Vault，请使用云备份 (Pro) 或免费的 Vault Export。

## Vault Export (.tdvault) - 免费供所有人使用

Vault Export 创建一个加密、受密码保护的文件，其中包含您的 Vault 中的每个配置文件、文档和附件。您可以选择保存位置：Files 应用程序、iCloud Drive、Google Drive 或通过 AirDrop 或电子邮件分享。

该文件在离开应用程序之前已在设备上加密。只有您在导出时设置的密码才能解锁它。

**导出方法：**打开设置，选择"导出 Vault"，然后按照提示选择目标位置。

**恢复方法：**打开设置，选择"导入 Vault"，然后选择您的 .tdvault 文件并输入密码。导入可在任何设备上进行，包括跨平台（iOS 到 Android 或反之）。往返保真度完全：所有文档名称、日期、过期提醒、颜色、附件和注释都完全保留。

这对所有用户都是免费的。无需 Pro 订阅。

## 云备份 (Pro)

云备份是 Pro 选项。启用后，应用程序会自动在您自己的 iCloud 账户（iOS）或您自己的 Google Drive（Android）中保留您的 Vault 的持续更新副本。我们永远看不到此数据。Apple 和 Google 只能看到密文。

Vault 在上传前使用 AES-256-GCM 在您的设备上进行端到端加密。密钥来自您的恢复代码，这是启用云备份时应用程序生成的 24 字符密码短语。将您的恢复代码保存在安全的地方。如果丢失，加密备份将变得无法恢复。

**恢复方法：**在登录相同 Apple ID 或 Google 账户的新设备上，打开应用程序，转到设置、云备份、从备份恢复，然后输入您的恢复代码。

云备份是最省事的选项：启用后会自动运行，在新手机上恢复只需一次点击加您的恢复代码。

## 我应该使用哪一个？

简短回答：使用全部三种。

自动本地备份可以保护您免受意外删除或应用程序问题的影响，无需您费心。它们总是开启的。

在更换设备、进行重大应用程序更新或任何时候您需要将可移植副本保存在独立于您的手机的位置时，Vault Export 是正确的选择。至少执行一次，并将文件存储在安全的位置。

如果您希望获得自动的设备外保护而无需手动管理文件，云备份 (Pro) 是正确的选择。切换到新手机时特别有价值：安装应用程序、输入您的恢复代码，您的 Vault 将在几秒钟内恢复。

没有任何一层是跳过其他层的理由。云账户可能会丢失，恢复代码可能会被遗忘，手机可能会在本地备份运行之前被盗。所有三层的组合为您提供了最强的保护。

### 相关指南

- [如何导出和导入您的 Vault - 分步演练](https://traveldocumentvault.com/zh-Hans/faq/export-import/)
- [我的恢复代码是什么？- 安全存储的完整指南](https://traveldocumentvault.com/zh-Hans/faq/recovery-code/)
- [云备份 - 端到端加密如何工作](https://traveldocumentvault.com/zh-Hans/cloud-backup/)

## 获取 Travel Document Vault

免费下载。Vault Export 和本地备份对所有人都包括在内。Pro 添加了云备份、无限配置文件、组合 PDF 导出等。一次性购买，无订阅。

[App Store](https://apps.apple.com/app/travel-document-vault/id6757014877)

![在 Google Play 上获取](https://traveldocumentvault.com/assets/images/google-play-badge.svg)
