# Moonlit Echoes Theme

[English](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/)｜**繁體中文**

![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_screen_demo_preview.jpg)

**「Moonlit Echoes 月下回聲」** 是一款供 SillyTavern 使用的介面主題。依據我的個人喜好進行調整和修改，旨在讓其更加現代、優雅、簡潔，並盡可能提供桌面與行動端的更舒服的使用體驗。

Moonlit Echoes 最初於 2024 年 11 月 25 日在 SillyTavern Disocord 伺服器公開並更新至今，期間得到許多人的回饋和支持。最終，為了可維護性並方便使用者更新、在其他地方找到它（以及滿足我對更美觀主題的執著），我將其製作為 SillyTavern 擴充功能並於 GitHub 開源。

| UI Interface Preview | Visual Novel Mode |
|----------------------|-------------------|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/ui_overview_preview.jpg)     | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/visual_novel_mode_preview.jpg)    |

## 功能與特色

### 核心功能
- 與 SillyTavern 預設主題兼容，並確保與其他 SillyTavern 擴充功能協作順暢。
- 適配桌機與行動裝置，針對行動設備優化，提供更寬敞的輸入欄位與其他適配調整，致力為介面美觀強迫症帶來更舒適的排版體驗。
- 新增多種聊天風格，除了 SillyTavern 內建的 「Flat」、「Bubble」、「Document」 之外，還有 「Echo」（回音）、「Whisper」（低語）、「Hush」（靜默），以及全新的隱藏款「Ripple」（漣漪）。
- 提供多項自訂設定，可根據個人喜好自由調整。
  
### Moonlit Echoes 主題預設設定檔
使用者現在可以輕鬆分享基於 Moonlit Echoes Theme 的配色與主題，並與 SillyTavern 內建 UI 主題無縫切換。

<img src="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/Moonlit%20Echoes%20Theme%20Presets.png" width="500">  


## 螢幕截圖
截圖來自 **1.0.0 版本**，展示於 MacBook（Chrome），僅供參考。於 iPhone（Safari PWA）展示之更多截圖請見本項目的 [.github 資料夾](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/tree/main/.github)。

| **Flat** | **Bubble** | **Document** |
|:------:|:--------:|:----------:|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_flat_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_bubble_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_document_preview.jpg) |
| **Echo** | **Whisper** | **Hush** |
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_echo_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_whisper_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_hush_preview.jpg) |

## 安裝方式
### 前提條件
建議使用 **最新版** 的 SillyTavern（無論是 Release 或 Staging 版本）與 Chrome 瀏覽器。

### 安裝步驟
1. **安裝 Moonlit Echoes Theme**：在 **SillyTavern 擴充管理器**中，使用「Install from URL」，貼入以下 Git URL：
   ```
   https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme
   ```
2. **關閉縮圖縮放（建議）**：某些訊息風格會將角色頭像顯示於背景中，而 SillyTavern 預設開啟縮圖縮放，可能導致影像模糊。若要關閉此功能，請修改 `config.yaml`（位於 `/SillyTavern/config.yaml`），將 `thumbnails.enabled` 設為 `false`：
   ```
   thumbnails:
     enabled: false
   ```
3. **下載並啟用主題（可選）**：Moonlit Echoes Theme 安裝後即可使用。若要使用 預覽圖中的樣式，請下載 `Moonlit Echoes - by Rivelle.json`，並匯入 User Settings 的 UI Theme。請勿更改檔名，否則可能導致擴充無法正常運作。

### 給 Termux 使用者 📱
如果你透過 Termux 使用 SillyTavern，以下是修改 `config.yaml` 的方法。

> [!Warning]
> 我對 Android 設備或 Termux 沒有經驗，因此無法解答相關問題、測試步驟或保證結果。以下方法由其他使用者提供。

> [!NOTE]
> SillyTavern 資料夾內可能會有兩個 `config.yaml` 檔案。請務必編輯 ST 根目錄 下的 `/SillyTavern/config.yaml`。**請勿修改** `/SillyTavern/default/config.yaml` 或 default 資料夾內的任何內容。

### 方法 1：透過 Termux 編輯
1. 打開 Termux，輸入：`cd SillyTavern`
2. 接著輸入並執行：`nano config.yaml` 以編輯檔案。
### 方法 2：使用 Material Files（Android 檔案管理器）
1. 開啟 Material Files > 新增儲存空間 > 前往 Termux > SillyTavern
2. 新增後，你應該會看到類似 `/SillyTavern` 和 `/data/user/0/com.winlator` 等結構
3. 打開 SillyTavern 資料夾，直接編輯 `config.yaml`

## 回饋與建議
若有任何問題或功能建議，請在 Issues 頁面提交回饋，並使用提供的模板填寫詳細資訊。

## 特別感謝
由衷感謝所有人一路上的幫助與喜愛。

- 感謝 ceruleandeep 在 SillyTavern Discord 群組的初期支援——這一切都是從你開始的。
- 特別感謝 IceFog72 鼓勵我製作 SillyTavern 主題，並開發了 [SillyTavern-CustomThemeStyleInputs](https://github.com/IceFog72/SillyTavern-CustomThemeStyleInputs)，這讓我在初期省去了許多麻煩。
- 感謝 Bronya-Rand 的開源貢獻，讓我從你的 SillyTavern 擴充 中學到了許多，並參考了功能排版設計。
- 感謝 vesper，我從你的自定義主題中得到了設計 Ripple 訊息風格的靈感。

最後，特別、特別感謝 Wolfsblvt 和 Cohee，為 SillyTavern 增加了 讓第三方擴充能夠使用 SillyTavern i18n（國際化系統） 的功能。這極大地改善了非英語使用者的體驗，真的非常感謝！

## 授權協議
AGPLv3
