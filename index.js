const settingsKey = 'SillyTavernMoonlitEchoesTheme';
const EXTENSION_NAME = 'Moonlit Echos Theme';

/**
 * @typedef {Object} SillyTavernMoonlitechosThemeSettings
 * @property {boolean} enabled 是否啟用此擴充
 */
const defaultSettings = Object.freeze({
    enabled: true,
});

/**
 * 根據 shouldLoad 決定是否動態載入或移除同資料夾中的 style.css、extension.css 檔案
 * @param {boolean} shouldLoad - 若為 true 則載入 CSS，false 則移除
 */
function toggleCss(shouldLoad) {
    // 先抓取已存在的 <link>（避免重複載入）
    const existingLinkStyle = document.getElementById('MoonlitEchosTheme-style');
    const existingLinkExt   = document.getElementById('MoonlitEchosTheme-extension');

    if (shouldLoad) {
        // 若不存在，就動態建立 <link> 載入 style.css
        if (!existingLinkStyle) {
            let baseUrl = '';
            // 優先嘗試使用 import.meta.url（若此模組環境支援）
            if (typeof import.meta !== 'undefined' && import.meta.url) {
                baseUrl = new URL('.', import.meta.url).href;
            } else {
                // 若使用非 module 載入方式，則嘗試使用 document.currentScript
                const currentScript = document.currentScript;
                if (currentScript && currentScript.src) {
                    baseUrl = currentScript.src.substring(0, currentScript.src.lastIndexOf('/'));
                }
            }

            const cssUrl = baseUrl + '/style.css';
            const linkStyle = document.createElement('link');
            linkStyle.id = 'MoonlitEchosTheme-style';
            linkStyle.rel = 'stylesheet';
            linkStyle.href = cssUrl;
            document.head.append(linkStyle);
        }

        // 若不存在，就動態建立 <link> 載入 extension.css
        if (!existingLinkExt) {
            let baseUrl = '';
            if (typeof import.meta !== 'undefined' && import.meta.url) {
                baseUrl = new URL('.', import.meta.url).href;
            } else {
                const currentScript = document.currentScript;
                if (currentScript && currentScript.src) {
                    baseUrl = currentScript.src.substring(0, currentScript.src.lastIndexOf('/'));
                }
            }

            const extUrl = baseUrl + '/extension.css';
            const linkExt = document.createElement('link');
            linkExt.id = 'MoonlitEchosTheme-extension';
            linkExt.rel = 'stylesheet';
            linkExt.href = extUrl;
            document.head.append(linkExt);
        }
    } else {
        // 若 shouldLoad 為 false，就移除兩個 <link>
        if (existingLinkStyle) existingLinkStyle.remove();
        if (existingLinkExt) existingLinkExt.remove();
    }
}

function renderExtensionSettings() {
    const context = SillyTavern.getContext();
    const settingsContainer = document.getElementById(`${settingsKey}-container`) ?? document.getElementById('extensions_settings2');
    if (!settingsContainer) {
        return;
    }

    const inlineDrawer = document.createElement('div');
    inlineDrawer.classList.add('inline-drawer');
    settingsContainer.append(inlineDrawer);

    const inlineDrawerToggle = document.createElement('div');
    inlineDrawerToggle.classList.add('inline-drawer-toggle', 'inline-drawer-header');

    const extensionName = document.createElement('b');
    extensionName.textContent = context.t`${EXTENSION_NAME}`;

    const inlineDrawerIcon = document.createElement('div');
    inlineDrawerIcon.classList.add('inline-drawer-icon', 'fa-solid', 'fa-circle-chevron-down', 'down');

    inlineDrawerToggle.append(extensionName, inlineDrawerIcon);

    const inlineDrawerContent = document.createElement('div');
    inlineDrawerContent.classList.add('inline-drawer-content');

    inlineDrawer.append(inlineDrawerToggle, inlineDrawerContent);

    /** @type {SillyTavernMoonlitechosThemeSettings} */
    const settings = context.extensionSettings[settingsKey];

    // Enabled 開關：改變啟用狀態時，自動載入或移除 CSS
    const enabledCheckboxLabel = document.createElement('label');
    enabledCheckboxLabel.classList.add('checkbox_label');
    enabledCheckboxLabel.htmlFor = `${settingsKey}-enabled`;
    const enabledCheckbox = document.createElement('input');
    enabledCheckbox.id = `${settingsKey}-enabled`;
    enabledCheckbox.type = 'checkbox';
    enabledCheckbox.checked = settings.enabled;
    enabledCheckbox.addEventListener('change', () => {
        settings.enabled = enabledCheckbox.checked;
        // 呼叫 toggleCss 來載入或移除 style.css + extension.css
        toggleCss(settings.enabled);
        context.saveSettingsDebounced();
    });
    const enabledCheckboxText = document.createElement('span');
    enabledCheckboxText.textContent = context.t`Enabled`;
    enabledCheckboxLabel.append(enabledCheckbox, enabledCheckboxText);
    inlineDrawerContent.append(enabledCheckboxLabel);
}

(function initExtension() {
    console.debug(`[${EXTENSION_NAME}]`, 'Initializing extension');
    const context = SillyTavern.getContext();

    // 初始化設定
    if (!context.extensionSettings[settingsKey]) {
        context.extensionSettings[settingsKey] = structuredClone(defaultSettings);
    }
    for (const key of Object.keys(defaultSettings)) {
        if (context.extensionSettings[settingsKey][key] === undefined) {
            context.extensionSettings[settingsKey][key] = defaultSettings[key];
        }
    }
    context.saveSettingsDebounced();

    renderExtensionSettings();

    // 依照設定中的 enabled 狀態自動載入或移除
    toggleCss(context.extensionSettings[settingsKey].enabled);

    console.debug(`[${EXTENSION_NAME}]`, 'Extension initialized');
})();


/*
 * Chat Display Switcher (聊天外觀切換器)
 * Dynamically toggles chat display styles (e.g., Echo, Whisper, Hush) based on the selected theme.
 * Also stores and restores user preferences via localStorage.
 */

// === (1) 先抓到需要的下拉選單 ===
var themeSelect = document.getElementById("themes");
var chatDisplaySelect = document.getElementById("chat_display");

// 用來儲存動態新增的 echo、whisper、hush <option> 物件
var newEchoOption = null;
var newWhisperOption = null;
var newHushOption = null;

// === (2) 根據主題動態新增/移除 echo、whisper、hush 選項 ===
function checkAndToggleEchoOption() {
    if (themeSelect.value === "Moonlit Echoes - by Rivelle") {
        // 當主題為 "Moonlit Echoes - by Rivelle" 時，如下選項不存在就新增

        // Echo
        if (!newEchoOption) {
            newEchoOption = document.createElement("option");
            newEchoOption.value = "3"; // 使用值 3 表示 echo 風格
            newEchoOption.text = "Echo";
            chatDisplaySelect.appendChild(newEchoOption);
        }

        // Whisper
        if (!newWhisperOption) {
            newWhisperOption = document.createElement("option");
            newWhisperOption.value = "4"; // 使用值 4 表示 whisper 風格
            newWhisperOption.text = "Whisper";
            chatDisplaySelect.appendChild(newWhisperOption);
        }

        // Hush
        if (!newHushOption) {
            newHushOption = document.createElement("option");
            newHushOption.value = "5"; // 使用值 5 表示 hush 風格
            newHushOption.text = "Hush";
            chatDisplaySelect.appendChild(newHushOption);
        }

    } else {
        // 若主題不是 "Moonlit Echoes - by Rivelle"，移除 echo、whisper、hush 選項（若存在）
        if (newEchoOption) {
            chatDisplaySelect.removeChild(newEchoOption);
            newEchoOption = null;
        }
        if (newWhisperOption) {
            chatDisplaySelect.removeChild(newWhisperOption);
            newWhisperOption = null;
        }
        if (newHushOption) {
            chatDisplaySelect.removeChild(newHushOption);
            newHushOption = null;
        }
        // 確保 body 上不帶有 echo、whisper、hush 風格
        document.body.classList.remove("echostyle", "whisperstyle", "hushstyle");
    }
}

// === (3) 根據 chatDisplaySelect 的值套用對應的 class ===
function applyChatDisplayStyle() {
    // 移除所有可能的風格 class
    document.body.classList.remove("flatchat", "bubblechat", "documentstyle", "echostyle", "whisperstyle", "hushstyle");

    // 根據選擇的值來新增對應的風格 class
    switch (chatDisplaySelect.value) {
        case "0": // Flat: 完全移除其他風格，這邊可選擇不加其他樣式或加上 flatchat 樣式（依需求而定）
            document.body.classList.add("flatchat");
            break;
        case "1": // bubble: 只保留 bubblechat
            document.body.classList.add("bubblechat");
            break;
        case "2": // document: 只保留 documentstyle
            document.body.classList.add("documentstyle");
            break;
        case "3": // echo: 僅在主題為 "Moonlit Echoes - by Rivelle" 時套用
            if (themeSelect.value === "Moonlit Echoes - by Rivelle") {
                document.body.classList.add("echostyle");
            }
            break;
        case "4": // whisper: 同上，僅在主題為 "Moonlit Echoes - by Rivelle" 時套用
            if (themeSelect.value === "Moonlit Echoes - by Rivelle") {
                document.body.classList.add("whisperstyle");
            }
            break;
        case "5": // hush: 同上，僅在主題為 "Moonlit Echoes - by Rivelle" 時套用
            if (themeSelect.value === "Moonlit Echoes - by Rivelle") {
                document.body.classList.add("hushstyle");
            }
            break;
        default:
            // 其他值的情況，可視需求處理
            break;
    }
}

// === (4) 當主題改變時執行的動作 ===
themeSelect.addEventListener("change", function () {
    checkAndToggleEchoOption();
    localStorage.setItem("savedTheme", themeSelect.value);
    // 主題改變時同步套用一次外觀，確保移除不該留存的 class
    applyChatDisplayStyle();
});

// === (5) 當聊天外觀改變時執行的動作 ===
chatDisplaySelect.addEventListener("change", function () {
    applyChatDisplayStyle();
    localStorage.setItem("savedChatStyle", chatDisplaySelect.value);
});

// === (6) 當頁面載入時，從 localStorage 讀取先前存的主題與外觀 ===
var savedTheme = localStorage.getItem("savedTheme");
var savedChatStyle = localStorage.getItem("savedChatStyle");

if (savedTheme) {
    themeSelect.value = savedTheme;
}
checkAndToggleEchoOption();

if (savedChatStyle) {
    chatDisplaySelect.value = savedChatStyle;
}
applyChatDisplayStyle();


/*
 * Avatar Injector (訊息圖片設定器)
 * Injects avatar URLs into each message (.mes) using CSS variables.
 */

window.updateAvatars = function() {
    // Process each .mes element
    document.querySelectorAll('.mes').forEach(mes => {
    // Skip if already processed
    if (mes.dataset.avatar) return;

    // Find the avatar image within the .mes element
    const avatarImg = mes.querySelector('.avatar img');
    if (!avatarImg) {
        console.error("No .avatar img found", mes);
        return;
    }

    // Retrieve the image source from src or data-src
    let src = avatarImg.src || avatarImg.getAttribute('data-src');
    if (src && src.startsWith(window.location.origin)) {
        // Convert absolute URL to relative path
        src = src.replace(window.location.origin, '');
    }

    // Add a one-time load event to update data-avatar and CSS variable when the image loads
    avatarImg.addEventListener('load', () => {
        let loadedSrc = avatarImg.src;
        if (loadedSrc.startsWith(window.location.origin)) {
        loadedSrc = loadedSrc.replace(window.location.origin, '');
        }
        mes.dataset.avatar = loadedSrc;
        mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
    }, { once: true });

    // If the image is already loaded, update immediately
    if (avatarImg.complete && src && !src.endsWith("/")) {
        mes.dataset.avatar = src;
        mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
    } else {
        console.warn("Image not loaded or invalid src", avatarImg);
    }
    });
};

// Initial execution
updateAvatars();

// Debounced MutationObserver callback
let debounceTimer;
const observerCallback = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
    updateAvatars();
    }, 100);
};

// Observe changes in the #chat container
const observer = new MutationObserver(observerCallback);
const chatContainer = document.getElementById('chat');

if (chatContainer) {
    observer.observe(chatContainer, { childList: true, subtree: true });
} else {
    console.error("No #chat found. Check your HTML structure.");
}
