# Moonlit Echoes Theme

**English** | [繁體中文](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/README-zh_Hant.md)

![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_screen_demo_preview.jpg)

**Moonlit Echoes** is a UI theme designed for SillyTavern. It has been customized and refined based on my personal preferences to create a more modern, elegant, and minimalist interface while enhancing the user experience across both desktop and mobile platforms.

Moonlit Echoes was first released on the SillyTavern Discord server on November 25, 2024, and has been continuously updated with valuable feedback and support from the community. Eventually, to improve maintainability and ease of updates—and to satisfy my obsession with well-designed themes—I developed this as a SillyTavern extension and made it open-source on GitHub.

| UI Interface Preview | Visual Novel Mode |
|----------------------|-------------------|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/ui_overview_preview.jpg)     | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/visual_novel_mode_preview.jpg)    |

### Features
- Fully compatible with SillyTavern's default themes and ensures seamless integration with other SillyTavern extensions.
- Optimized for both desktop and mobile devices, featuring a wider input field and layout adjustments for a better experience, especially for those who are meticulous about UI aesthetics.
- Includes multiple chat message styles beyond SillyTavern's built-in "Flat," "Bubble," and "Document" styles, such as **"Echo,"** **"Whisper,"** and **"Hush"**—with more styles potentially coming in the future!
- Offers extensive customization options to tailor the interface to your liking.

### Screenshots
The following screenshots are from **version 1.0.0**, displayed on a MacBook (Chrome). For additional screenshots on iPhone (Safari PWA), check the project's [.github folder](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/tree/main/.github).

| **Flat** | **Bubble** | **Document** |
|:------:|:--------:|:----------:|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_flat_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_bubble_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_document_preview.jpg) |
| **Echo** | **Whisper** | **Hush** |
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_echo_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_whisper_preview.jpg) | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_style_hush_preview.jpg) |

## Installation
### Prerequisites
It is recommended to use the **latest version** of SillyTavern (either Release or Staging) along with Google Chrome.

### Installation Steps
1. **Install the required extension**: Use the [SillyTavern Extension Manager](https://docs.sillytavern.app/extensions/) to install **[Custom Theme Style Inputs](https://github.com/IceFog72/SillyTavern-CustomThemeStyleInputs)** by **IceFog**. This extension enables easier customization—make sure to install it.
2. **Install Moonlit Echoes Theme**: In the **SillyTavern Extension Manager**, use "Install from URL" and paste the following Git URL:
   ```
   https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme
   ```
3. **Load and enable the theme**: Download or directly import `Moonlit Echoes - by Rivelle.json` into **User Settings** and set it as the UI theme. **Do not rename the file**, or the extension may not function correctly.
   ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/installation_guide.png)

### Additional Configuration (Recommended)
The "Echo" and "Whisper" message styles display character avatars in the background. Since SillyTavern enables thumbnail scaling by default, this may cause blurriness. To disable thumbnails, modify `config.yaml` (located at `/SillyTavern/config.yaml`) and set `thumbnails.enabled` to `false`:
   ```
   thumbnails:
     enabled: false
   ```

## Usage
- Enable or disable the theme freely in the SillyTavern extension menu. If you want to switch to another custom theme, disable this extension first to prevent layout issues.
- The special chat styles **"Echo,"** **"Whisper,"** and **"Hush"** will only be available when the UI theme is set to `Moonlit Echoes - by Rivelle`.

### FAQ
- **UI glitches or incorrect colors?** Ensure that [Custom Theme Style Inputs](https://github.com/IceFog72/SillyTavern-CustomThemeStyleInputs) is installed and that **Moonlit Echoes - by Rivelle** is set as the UI theme.
- **Too much blank space or excessive background blur?** Adjust settings in **User Settings > Custom Theme Inputs**. Available adjustments include:
  * Theme Primary Color
  * Theme Secondary Color
  * Top Bar Color
  * Drawer Icon Color
  * Background Image Blur Strength
  * Chat Background Color
  * Chat Gradient Blur
  * Chat Avatar Size
  * Echo Message Background Avatar Width
  * Visual Novel Mode Chat Height

## Feedback & Suggestions
If you have any issues or feature requests, feel free to submit them via the Issues section using the provided template.

## Special Thanks
A heartfelt thank you to everyone who has supported and contributed to this project. Special thanks to **ceruleandeep** for the initial support on the SillyTavern Discord server—you were the beginning of all this.

## License
AGPLv3
