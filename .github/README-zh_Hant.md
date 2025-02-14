# Moonlit Echoes Theme

[English](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/)｜**繁體中文**

![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_screen_demo_preview.jpg)

**「Moonlit Echoes 月下回聲」** 是一款供 SillyTavern 使用的介面主題。依據我的個人喜好進行調整和修改，旨在讓其更加現代、優雅、簡潔，並盡可能提供桌面與行動端的更舒服的使用體驗。

Moonlit Echoes 最初於 2024 年 11 月 25 日在 SillyTavern Disocord 伺服器公開並更新至今，期間得到許多人的回饋和支持。最終，為了可維護性並方便使用者更新、在其他地方找到它（以及滿足我對更美觀主題的執著），我將其製作為 SillyTavern 擴充功能並於 GitHub 開源。

| UI Interface Preview | Visual Novel Mode |
|----------------------|-------------------|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/ui_overview_preview.jpg)     | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/visual_novel_mode_preview.jpg)    |

### 功能與特色
- 與 SillyTavern 預設主題兼容，並確保與其他 SillyTavern 擴充功能協作順暢。
- 適配桌機與行動裝置，針對行動設備優化，提供更寬敞的輸入欄位與其他適配調整，致力為介面美觀強迫症帶來更舒適的排版體驗。
- 新增多種聊天訊息風格，除了 SillyTavern 內建的「扁平」、「氣泡」、「文件」外，還提供：「Echo」（回聲）、「Whisper」（低語）、「Hush」（輕聲）等風格⋯⋯未來仍可能新增更多風格！
- 提供多項自訂設定，可根據個人喜好自由調整。

### 螢幕截圖
截圖來自 **1.0.0 版本**，展示於 MacBook（Chrome），僅供參考。於 iPhone（Safari PWA）展示之更多截圖請見本項目的 [.github 資料夾](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/tree/main/.github)。

| **Flat 扁平** | **Bubble 氣泡** | **Document 文件** |
|:------:|:--------:|:----------:|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_flat_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_bubble_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_document_preview.jpg) |
| **Echo 回聲** | **Whisper 低語** | **Hush 輕聲** |
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_echo_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_whisper_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_hush_preview.jpg) |

## 安裝方式
### 前提條件
建議使用 **最新版** 的 SillyTavern（無論是 Release 或 Staging 版本）與 Chrome 瀏覽器。

### 安裝步驟
1. **安裝必要擴充功能**：透過 [SillyTavern Extension Manager](https://docs.sillytavern.app/extensions/) 安裝由 **IceFog** 製作的 **[Custom Theme Style Inputs](https://github.com/IceFog72/SillyTavern-CustomThemeStyleInputs)**。此擴充可提供更便捷的自訂樣式選項，請務必安裝。
2. **安裝 Moonlit Echoes Theme**：在 **SillyTavern 擴充管理器**中，使用「Install from URL」，貼入以下 Git URL：
   ```
   https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme
   ```
3. **載入並啟用主題**：下載或直接匯入 `Moonlit Echoes - by Rivelle.json` 至 **User Settings**，並將其設為 UI 主題。**請勿更改檔案名稱**，否則擴充將無法正確識別。
   ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/installation_guide.png)
### 額外設定（建議）
「Echo（回聲）」與「Whisper（低語）」訊息風格會在背景顯示角色頭貼，而 SillyTavern 預設開啟縮圖功能，可能導致模糊問題。如需關閉縮圖，請修改 `config.yaml`（位於 `/SillyTavern/config.yaml`），將 `thumbnails.enabled` 設為 `false`：
```
thumbnails:
  enabled: false
```


## 使用說明
- 在 SillyTavern 的擴充功能選單自由開關啟用。若你想切換到其他自定義風格，請先關閉此擴充以避免額外問題和嚴重跑版。
- 特殊訊息風格「Echo」（回聲）、「Whisper」（低語）、「Hush」（輕聲）選項，僅在主題選為 `Moonlit Echoes - by Rivelle` 時才會出現。
### 常見問題
- 介面跑版 / 顏色未正確載入？請確認已安裝 **[Custom Theme Style Inputs](https://github.com/IceFog72/SillyTavern-CustomThemeStyleInputs)**，並將 **Moonlit Echoes - by Rivelle** 設為 UI 主題。
- 上方留白過大 / 背景漸層模糊過重？可在 **使用者設定 > Custom Theme Inputs** 調整，目前支援的調整包括：
  * Theme Primary Color（主題主要色）
  * Theme Secondary Color（主題次要色）
  * Top Bar Color（導航列背景顏色）
  * Drawer Icon Color（導航列圖示顏色）
  * Background Image Blur Strength（背景模糊程度）
  * Chat Background Color（聊天區背景顏色）
  * Chat Gradient Blur（聊天區漸層模糊程度）
  * Chat Avatar Size（頭像大小）
  * Echo Message Background Avatar Width（「回聲」風格的訊息背景角色圖片寬度）
  * Visual Novel Mode Chat Height（視覺小說模式的聊天欄高度）

## 回饋與建議
若有任何問題或功能建議，歡迎透過此專案的 Issues 按照問題模板填寫回饋。


## 特別感謝
由衷感謝所有人一路上的幫助與喜愛。以及在最開始在 SillyTavern Discord 伺服器上幫助我的 **ceruleandeep**，你是這一切的開始。

## 授權協議
AGPLv3
