# 隐私验证 | Travel Document Vault

> Travel Document Vault 的可验证隐私声明。零追踪器，零数据收集。默认情况下在设备上存储 - 无 TDV 云，无需账户。查看我们请求的每项权限及其原因。

Source: https://traveldocumentvault.com/zh-Hans/privacy-verification/

---

## 我们的隐私声明

### 零追踪器

应用中无分析 SDK、无广告库、无跟踪像素。

### 零出站数据收集

应用默认不建立出站连接。完全离线工作。唯一的网络使用是可选的 Pro 云备份，它同步到您自己的 iCloud 或 Google Drive - 永远不会同步到我们的服务器。

### 默认情况下在设备上存储

所有文档、扫描和数据都保存在您的设备上。无 TDV 云、无 TDV 服务器、无 TDV 后端。Pro 用户可以选择将其加密保险库备份到他们自己的 iCloud 或 Google Drive 账户 - 只有他们持有恢复密钥。

### AES-256-GCM 加密

每个文档在接触设备存储之前都会被加密。

## 验证

您不需要相信我们。您可以使用免费的公开工具来确认上述所有声明。

### 1. 网络流量测试

安装网络监控工具，如 **mitmproxy**（免费、开源）、**Wireshark**（免费、开源）或 **Charles Proxy**。打开 Travel Document Vault，扫描文档，浏览您的保险库，并设置提醒。您不应该看到您的文档、扫描件、到期日期或保险库内容被发送到 Travel Document Vault。网络流量应仅限于特定功能：可选的 Sentry 崩溃报告、App Store 或 Google Play 的购买检查、同步到您自己 iCloud 或 Google Drive 账户的可选云备份，以及下文说明的手动错误修复检查。

设置中有一个 **Check for Updates** 按钮。这是手动检查，绝不会自动进行 - 只有当您自己点按它时才会运行，绝不会在后台，也绝不会自行运行。此检查联系 **updates.traveldocumentvault.com** - 我们自己的更新服务器，由我们在 Google Cloud 上运营，从存储桶提供加密签名的更新文件。我们不会记录此检查：我们这边已禁用请求日志，因此不会保留任何 IP 地址。每项更新都用我们唯一持有的密钥进行签名，应用将拒绝任何签名与内置证书不匹配的内容。同一次点按还会检查 **App Store** 或 **Google Play** 上是否有更新版本的应用。设置这个按钮是为了让某些错误修复能比等待 App Store 或 Google Play 全新发布更快送达给您，对紧急修复很有用，具体取决于修复的性质。本页其他部分同样的规则依然适用：未经您主动请求，绝不会发起任何网络请求。

### 2. iOS 应用隐私报告

在 iPhone 上，前往 **设置 > 隐私与安全 > 应用隐私报告**。这是 Apple 的内置功能，可显示哪些应用联系过网络域。Travel Document Vault 不会把您的文档、扫描件、到期日期或保险库内容发送给我们。如果您启用了 Pro 云备份，您会看到与 Apple iCloud 域的连接 - 这是您的备份正在同步到您自己的 iCloud 账户。

### 3. Android - 如何检查您的隐私

Android 没有像 iPhone 那样单一的内置隐私报告。有两种简单的方法可以自行检查：查看此应用在 Google Play 页面上自己的 **Data Safety** 部分（其中明确说明了收集了哪些内容、共享了哪些内容、您的数据在传输中是加密的，以及无法被删除）- 或者使用上文第 1 步中描述的网络监控工具。

如果您已开启云备份，您可能会注意到一些流向 Google 服务器的活动（以 **googleapis.com** 结尾的网址）。这是正常且安全的：发送的只是您已锁定、已加密的备份文件以及一次登录检查，直接发送到**您自己的** Google Drive 账户 - 就是您已经用于照片或 Gmail 的那个账户。我们从不查看它、接收它，也不会在任何地方保存它的副本。只有您持有能够解锁它的恢复密钥。

### 4. App Store 和 Google Play 隐私标签

Apple 和 Google 要求开发者声明他们的应用收集什么数据。检查 App Store 或 Google Play 上的 Travel Document Vault 列表。我们的声明：**不收集任何数据**。

## 我们如何测试应用的安全性

我们不会只是声称这款应用是安全的，而是会去实际核查，使用的正是安全行业本身所采用的开放工具和公开标准。

### 我们以公开标准来衡量应用

我们依据[OWASP Mobile Application Security Verification Standard (MASVS)](https://mas.owasp.org/MASVS/)对Travel Document Vault进行评估，这是业界公认的检查清单，规定了移动应用应如何存储数据、使用加密、通过Face ID或PIN锁定，以及如何处理来自其他应用的链接。任何人都可以查阅该标准，并将其与应用的实际表现进行对比。

### 我们扫描自己的代码

在每次发布之前，我们都会使用开源工具[Semgrep](https://semgrep.dev/)对代码进行静态分析。Semgrep能够标记不安全的模式，例如弱加密或不安全的数据处理方式，帮助我们及早发现问题。

### 我们扫描已构建完成的应用

我们还会使用移动应用安全扫描工具对发布版本进行审查，检查该版本如何存储数据、可以访问哪些内容，以及签名方式。

### 发现问题？请告诉我们

如果您发现安全问题，请发邮件至[support@traveldocumentvault.com](mailto:support@traveldocumentvault.com)。我们的披露流程详情已公布在[/.well-known/security.txt](https://traveldocumentvault.com/.well-known/security.txt)。

这是我们依据公开标准所做的自我评估，并非第三方独立审计或认证。最后审查时间：2026年7月。

## 每项权限解释

Android 应用在其清单中声明权限。有些由应用直接请求，有些从应用依赖的库继承。这是每项权限的透明分析，按目的分组。

### 应用直接使用的权限

### 摄像头

iOS + Android

**我们请求的原因：** 直接从应用中扫描您的护照、签证或旅行文件页面。

**我们从不做的事：** 照片保存在您的设备上。永远不会上传、传输或发送到任何地方。

### 照片库 / 照片 / 存储

iOS + Android

**我们请求的原因：** 以便您可以导入现有文档照片，并且应用可以在您请求时导出加密的备份文件 (.tdvault)。在较旧的 Android 版本中，需要 READ_EXTERNAL_STORAGE 和 WRITE_EXTERNAL_STORAGE。在 Android 13 以上，改用 READ_MEDIA_IMAGES。

**我们从不做的事：** 应用仅读取您选择的图像。永远不会扫描、索引或浏览您的照片库或文件系统。

### Face ID / Touch ID / 生物识别解锁

iOS + Android

**我们请求的原因：** 锁定和解锁应用，以便只有您才能访问您的文档。在 Android 6-8 上，使用 USE_FINGERPRINT。在 Android 9 以上，改用 USE_BIOMETRIC。

**我们从不做的事：** 您的生物识别数据永远不会离开您的设备。操作系统处理身份验证并仅向应用返回通过/失败结果。

### 通知、振动、启动完成、Wake Lock

Android

**我们请求的原因：** 传递您自己设置的设备内到期提醒。RECEIVE_BOOT_COMPLETED 在设备重启后重新安排您的提醒。WAKE_LOCK 确保提醒即使在手机睡眠时也能可靠地发送。VIBRATE 伴随通知传递。

**我们从不做的事：** 不会发送任何营销、促销或第三方通知。提醒完全在您的设备上安排。

### 互联网、网络状态、Wi-Fi 状态

Android

**为什么会出现这些：** 它们是网络相关功能所必需的：**Sentry 崩溃报告**（可选加入，默认禁用）、用于购买 Pro 升级的 **App Store 或 Google Play 计费**、**Pro 云备份**（可选，会把您的加密保险库同步到您自己的 iCloud 或 Google Drive），以及设置中手动的 **Check for Updates** 按钮（仅在您点按时运行）。ACCESS_NETWORK_STATE 和 ACCESS_WIFI_STATE 让这些功能在尝试发送前检查连接是否可用。

**我们不会做的事：** 应用不会把您的文档、扫描件、到期日期、照片或保险库内容上传到 Travel Document Vault。对于正常的文档存储和提醒，它完全可以离线工作。

### 从库继承的权限（应用不使用）

Android 应用包含用于应用内购买、崩溃报告和通知等功能的第三方库。这些库在自己的清单中声明权限，这些权限被合并到最终应用中。下面的权限由依赖项声明，而不是由我们的代码声明。应用从不调用它们背后的 API。

### 录制音频

继承的，未使用

**这出现的原因：** 此权限由构建中包含的第三方库（通常是相机或媒体插件）声明。它在 Android 清单中出现，但从不由我们的代码触发。应用在任何情况下都不会录制音频或视频。

**您如何确认：** 应用不会要求麦克风访问权限。如果您检查设备的权限管理器，您会看到未授予 Travel Document Vault 音频录制权限。

### 系统警报窗口

继承的

由 Flutter 框架为开发和调试覆盖层声明。此权限在应用的发布版本中不使用，不会影响您的隐私。

### 检测屏幕捕获

继承的

由框架依赖项声明。应用不检测、阻止或响应屏幕截图。此权限不会影响您的使用。

### 徽章计数权限

继承的

READ_APP_BADGE、UPDATE_BADGE、BADGE_COUNT_READ、BADGE_COUNT_WRITE、READ_SETTINGS、WRITE_SETTINGS、UPDATE_COUNT、CHANGE_BADGE、BROADCAST_BADGE 和 PROVIDER_INSERT_BADGE 由通知库声明，以在不同 Android 制造商（Samsung、Huawei、Xiaomi 等）的主屏幕图标上显示未读徽章计数。它们只影响应用图标上显示的数字。

### 计费、检查许可证、安装推荐

Google Play

由 Google Play 计费库（用于 Pro 升级购买）和 Play 安装推荐库声明。这些是标准的 Google Play 商店要求，不会访问任何个人数据。

### 无通知下载

继承的

由框架依赖项声明。应用不在后台下载文件。

### 我们不请求的权限

这些是许多应用请求的常见权限。我们不请求这些中的任何一个，它们不会在我们的清单中出现。

**位置** - 无 GPS、无地理围栏、无跟踪 **联系人** - 不访问您的通讯录 **蓝牙** - 无本地网络或设备扫描 **日历** - 提醒在设备上处理，不通过您的日历

还有疑问吗？阅读我们的完整 [隐私政策](https://traveldocumentvault.com/privacy-policy/) 或查看 [常见问题](https://traveldocumentvault.com/zh-Hans/faq/)。
