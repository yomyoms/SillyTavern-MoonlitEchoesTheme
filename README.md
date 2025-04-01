# Moonlit Echoes Theme

**English** | [繁體中文](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/README-zh_Hant.md)

![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/chat_screen_demo_preview.jpg)

**Moonlit Echoes 月下回聲** is a UI theme designed for SillyTavern. It has been customized and refined based on my personal preferences to create a more modern, elegant, and minimalist interface while enhancing the user experience across both desktop and mobile platforms.

Moonlit Echoes was first released on the SillyTavern Discord server on November 25, 2024, and has been continuously updated with valuable feedback and support from the community. Eventually, to improve maintainability and ease of updates—and to satisfy my obsession with well-designed themes—I developed this as a SillyTavern extension and made it open-source on GitHub.

| UI Interface Preview | Visual Novel Mode |
|----------------------|-------------------|
| ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/ui_overview_preview.jpg)     | ![](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/visual_novel_mode_preview.jpg)    |

## Features

### Core Features
- Fully compatible with SillyTavern's default themes and ensures seamless integration with other SillyTavern extensions.
- Optimized for both desktop and mobile devices, featuring a wider input field and layout adjustments for a better experience, especially for those who are meticulous about UI aesthetics.
- Includes various chat styles beyond SillyTavern’s built-in "Flat," "Bubble," and "Document" styles. Available styles include "Echo," "Whisper," "Hush," and the newly added "Ripple".
- Offers extensive customization options to tailor the interface to your liking.

### Moonlit Echoes Theme Presets
Users can now easily share color schemes and themes based on Moonlit Echoes Theme. These presets can sync with SillyTavern’s built-in UI themes for a seamless transition.

<img src="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme/blob/main/.github/Moonlit%20Echoes%20Theme%20Presets.png" width="500">

## Screenshots
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
1. **Install Moonlit Echoes Theme**: In the **SillyTavern Extension Manager**, use "Install from URL" and paste the following Git URL:
   ```
   https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme
   ```
2. **Disable Thumbnail Scaling (Recommended for Clearer Avatars)**: Some message styles display character avatars in the background. Since SillyTavern enables thumbnail scaling by default, this may cause blurriness. To disable it, modify `config.yaml` (located at `/SillyTavern/config.yaml`) and set `thumbnails.enabled` to `false`:
   ```
   thumbnails:
     enabled: false
   ```
3. **Download and Enable the Theme (Optional)**: The Moonlit Echoes Theme extension is now usable upon installation. However, if you wish to use the styles shown in the preview images, download and import `Moonlit Echoes - by Rivelle.json` into User Settings and set it as the UI theme. Do not rename the file, or the extension may not function correctly.

### For SillyTavern Users via Termux 📱
If you’re using SillyTavern via Termux, here’s how you can modify `config.yaml`.

> [!Warning]
> I don’t have experience with Android devices or Termux, so I can’t answer related questions, test the steps, or guarantee results. The following methods are provided by other users.

> [!NOTE]
> You may find two config.yaml files inside the SillyTavern folder. Make sure to edit the one in the root directory: `/SillyTavern/config.yaml.` **Do NOT modify** `/SillyTavern/default/config.yaml` or anything inside the default folder.

### Method 1: Edit via Termux
1. Open Termux and enter: `cd SillyTavern`
2. Then, run: `nano config.yaml` to edit the file.

### Method 2: Use Material Files (Android File Manager)
1. **Open Material Files** > **Add Storage** > **Navigate to Termux** > **SillyTavern**
2. Within the SillyTavern directory, edit `config.yaml` directly

## Usage Guide

### How to Use the Moonlit Echoes Theme Preset?
The Moonlit Echoes theme preset is partially synced with the UI themes in SillyTavern. If there are matching options in the menu, switching either one will sync the settings accordingly.

However, the Moonlit Echoes theme preset is fundamentally separate from SillyTavern’s UI themes. The Moonlit Echoes Theme does NOT create or modify any SillyTavern UI themes.

### Import & Export
- Moonlit Echoes theme preset files follow the format `[Moonlit] PresetName.json` (e.g., `[Moonlit] Honey Cream.json`). There is a half-width space after `[Moonlit]`
- This does not affect functionality. You do **NOT** need to remove `[Moonlit] ` before importing—just import the file directly
- If the imported preset does not sync with SillyTavern UI themes, **reload the page** or **select a different theme** to apply the changes

## Feedback & Suggestions
If you encounter any issues or have feature requests, please submit them in the Issues section using the provided template.

You’re also welcome to share your color schemes in the Discussions section!<br>
Whether it’s a SillyTavern UI theme or a Moonlit Echoes theme preset, I’d love to see your creative designs.

## Special Thanks

A heartfelt thank you to everyone who has supported and contributed to this project.

- A big thank you to ceruleandeep for your early support in the SillyTavern Discord—this all started because of you.
- Huge thanks to IceFog72 for encouraging me to create SillyTavern themes and for developing [SillyTavern-CustomThemeStyleInputs](https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme), which saved me a lot of hassle in the early stages.
- Much appreciation to Bronya-Rand for your open-source work—I learned a lot from your SillyTavern extension and took inspiration from its feature layout.
- Thanks to vesper—I drew inspiration from your custom themes when designing the Ripple message style.

Finally, endless gratitude to Wolfsblvt and Cohee for adding i18n support for third-party extensions in SillyTavern. This has greatly improved the experience for non-English users, and I truly appreciate it!

## License
AGPLv3
