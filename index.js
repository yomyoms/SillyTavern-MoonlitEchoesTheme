/**
 * Moonlit Echoes Theme for SillyTavern
 * A beautiful theme with extensive customization options
 */

// 全局設定與常量
const EXTENSION_NAME = 'Moonlit Echoes Theme（月下回聲）';
const settingsKey = 'SillyTavernMoonlitEchoesTheme';
const extensionName = "SillyTavern-MoonlitEchoesTheme";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;
const THEME_VERSION = "2.0.0"; // 主題版本號

/**
 * 主題設定設定
 * 此設定定義了所有可自定義的設定項
 *
 * 支持的輸入類型:
 * - color: 顏色選擇器
 * - slider: 滑桿
 * - select: 下拉選單
 * - text: 文字輸入框
 *
 * 每個設定項需包含:
 * - type: 輸入類型
 * - varId: CSS變數ID (將作為 --varId 在CSS中使用)
 * - displayText: 顯示文本
 * - default: 默認值
 * - category: 設定類別，用於分組顯示
 * - description: 可選的設定說明
 *
 * 特定類型的額外屬性:
 * - slider: min, max, step
 * - select: options (包含 label 和 value 的對象數組)
 */
const themeCustomSettings = [
    // 主題顏色設定
    {
        "type": "color",
        "varId": "customThemeColor",
        "displayText": t`Primary Theme Color`,
        "default": "rgba(81, 160, 222, 1)",
        "category": "colors",
        "description": t`The main interface theme color, used for highlights and accents`
    },
    {
        "type": "color",
        "varId": "customThemeColor2",
        "displayText": t`Secondary Theme Color`,
        "default": "rgba(250, 198, 121, 1)",
        "category": "colors",
        "description": t`A complementary secondary color, used for special highlights`
    },
    {
        "type": "color",
        "varId": "customTopBarColor",
        "displayText": t`Top Menu Color`,
        "default": "rgba(23, 23, 23, 0.7)",
        "category": "colors",
        "description": t`Background color of the top menu (#top-bar)`
    },
    {
        "type": "color",
        "varId": "Drawer-iconColor",
        "displayText": t`Menu Icon Color`,
        "default": "rgba(255, 255, 255, 0.8)",
        "category": "colors",
        "description": t`Color of icons in the top menu, sidebar, and dropdown menus`
    },
    {
        "type": "color",
        "varId": "sheldBackgroundColor",
        "displayText": t`Chat Field Background Color`,
        "default": "rgba(0, 0, 0, 0.2)",
        "category": "colors",
        "description": t`Background color of the chat field (#sheld)`
    },

    // 背景和模糊設定
    {
        "type": "slider",
        "varId": "customCSS-bg-blur",
        "displayText": t`Background Blur Intensity`,
        "default": "3",
        "min": 0,
        "max": 10,
        "step": 1,
        "category": "background",
        "description": t`Adjusts the blur level of the background image`
    },
    {
        "type": "slider",
        "varId": "sheldBlurStrength",
        "displayText": t`Chat Field Background Blur Intensity`,
        "default": "5",
        "min": 0,
        "max": 10,
        "step": 1,
        "category": "background",
        "description": t`Blur level of the chat field background (#sheld)`
    },

    // 聊天介面設定
    {
        "type": "select",
        "varId": "customCSS-top-padding",
        "displayText": t`Chat Field Top Spacing`,
        "default": "25px",
        "options": [
            {
                "label": t`Enabled`,
                "value": "25px"
            },
            {
                "label": t`Disabled`,
                "value": "0px"
            }
        ],
        "category": "chat",
        "description": t`Sets the top spacing of the chat field (#chat)`
    },
    {
        "type": "select",
        "varId": "customCSS-chat-gradient-blur",
        "displayText": t`Chat Field Gradient Blur`,
        "default": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 100%)",
        "options": [
            {
                "label": t`Default`,
                "value": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                "label": t`Subtle`,
                "value": "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 4%, rgba(0, 0, 0, 1) 96%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                "label": t`None`,
                "value": "none"
            }
        ],
        "category": "chat",
        "description": t`Applies a transparent gradient effect to the top and bottom of the chat field (#chat)`
    },
    {
        "type": "text",
        "varId": "custom-ChatAvatar",
        "displayText": t`Chat Field Avatar Size`,
        "default": "40px",
        "category": "chat",
        "description": t`Width and height of character avatars in the chat field`
    },
    {
        "type": "text",
        "varId": "custom-EchoAvatarWidth",
        "displayText": t`[Echo] Message Background Avatar Width`,
        "default": "25%",
        "category": "chat",
        "description": t`Width of character avatars in the message background for the Echo style`
    },
    {
        "type": "text",
        "varId": "customWhisperAvatarWidth",
        "displayText": t`[Whisper] Message Background Avatar Width`,
        "default": "50%",
        "category": "chat",
        "description": t`Width of character avatars in the message background for the Whisper style`
    },
    {
        "type": "select",
        "varId": "customWhisperAvatarAlign",
        "displayText": t`[Whisper] Avatar Alignment`,
        "default": "center",
        "options": [
            {
                "label": t`Top Aligned`,
                "value": "top"
            },
            {
                "label": t`Center Aligned`,
                "value": "center"
            },
            {
                "label": t`Bottom Aligned`,
                "value": "bottom"
            }
        ],
        "category": "chat",
        "description": t`Vertical alignment of character avatars in the message background for the Whisper style`
    },


    // 視覺小說模式設定
    {
        "type": "select",
        "varId": "VN-sheld-height",
        "displayText": t`Visual Novel Mode Chat Field Height`,
        "default": "40dvh",
        "options": [
            {
                "label": "40dvh",
                "value": "40dvh"
            },
            {
                "label": "50dvh",
                "value": "50dvh"
            },
            {
                "label": "60dvh",
                "value": "60dvh"
            }
        ],
        "category": "visualNovel",
        "description": t`Maximum height of the chat field (#sheld) in Visual Novel mode`
    },
    {
        "type": "select",
        "varId": "VN-expression-holder",
        "displayText": t`Visual Novel Mode Character Portrait Gradient Transparency`,
        "default": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        "options": [
            {
                "label": t`Enabled`,
                "value": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)"
            },
            {
                "label": t`Disabled`,
                "value": "none"
            }
        ],
        "category": "visualNovel",
        "description": t`Bottom transparency effect for character portraits in Visual Novel mode`
    },

    // 進階設定
    {
        "type": "checkbox",
        "varId": "enableMobile-send_form",
        "displayText": t`Enable New Mobile Input Field`,
        "default": true,
        "category": "features",
        "description": t`A message input field designed for mobile, providing a wider input box`,
        "cssBlock":  `
            /* Mobile Input Field 手機端輸入欄位 */
            @media screen and (max-width: 1000px) {
                /* Mobile Chat Input Overall 聊天輸入欄位整體 */
                #send_form {
                    margin-bottom: 0 !important;
                    border: none !important;
                    border-top: 2px solid var(--SmartThemeBodyColor) !important;
                    box-shadow: 0 0 15px var(--SmartThemeBodyColor);
                    min-height: 100% !important;
                    padding: 10px 25px;
                    border-radius: 30px 30px 0 0 !important;
                    transition: all 0.5s ease;

                    &:focus-within {
                        border: none !important;
                        border-top: 2px solid var(--customThemeColor) !important;
                        box-shadow: 0 0 15px var(--customThemeColor);
                    }

                    &.compact {
                        #leftSendForm,
                        #rightSendForm {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: nowrap;
                            width: unset;
                        }
                    }
                }

                /* Mobile Chat Menu 聊天輸選單 */
                #nonQRFormItems {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto auto;
                    grid-template-areas:
                    "textarea textarea"
                    "left right";
                    gap: 0;
                    padding: 0;

                    #send_textarea {
                        grid-area: textarea;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 5px 0;
                    }
                }

                /* Mobile Left & Right Chat Menu 左右側聊天選單 */
                #leftSendForm,
                #rightSendForm {
                    margin: 5px 0;
                }
                #leftSendForm {
                    grid-area: left;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start !important;
                }
                #rightSendForm {
                    grid-area: right;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end !important;
                }

                #rightSendForm > div,
                #leftSendForm > div,
                #nonQRFormItems #options_button {
                    font-size: 16px;
                }
                #nonQRFormItems #options_button {
                    margin-right: 10px;
                }
            }
    `
    },
];

/**
 * 轉換設定設定為默認設定對象
 * 從 themeCustomSettings 中提取默認值
 */
function generateDefaultSettings() {
    const settings = {
        enabled: true
    };

    themeCustomSettings.forEach(setting => {
        settings[setting.varId] = setting.default;
    });

    return Object.freeze(settings);
}

// 生成默認設定
const defaultSettings = generateDefaultSettings();

/**
 * 擴展初始化主函數
 * 在擴展載入時執行，設定設定並初始化功能
 */
(function initExtension() {
    console.debug(`[${EXTENSION_NAME}]`, 'Initializing extension');

    // 獲取SillyTavern上下文
    const context = SillyTavern.getContext();

    // 初始化設定
    if (!context.extensionSettings[settingsKey]) {
        context.extensionSettings[settingsKey] = structuredClone(defaultSettings);
    }

    // 確保所有預設設定鍵存在
    for (const key of Object.keys(defaultSettings)) {
        if (context.extensionSettings[settingsKey][key] === undefined) {
            context.extensionSettings[settingsKey][key] = defaultSettings[key];
        }
    }

    // 保存設定
    context.saveSettingsDebounced();

    // 依照設定中的 enabled 狀態自動載入或移除CSS
    toggleCss(context.extensionSettings[settingsKey].enabled);

    // 當DOM完全載入後執行擴展的UI初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExtensionUI);
    } else {
        initExtensionUI();
    }

    console.debug(`[${EXTENSION_NAME}]`, 'Extension initialized');
})();

/**
 * 初始化擴展的UI元素與事件
 * 包括設定面板、聊天樣式和顏色選擇器
 */
function initExtensionUI() {
    // 載入設定HTML和初始化設定面板
    loadSettingsHTML().then(() => {
        renderExtensionSettings();
        initChatDisplaySwitcher();
        initAvatarInjector();

        // 應用所有自定義主題設定
        applyAllThemeSettings();

        // 添加製作者資訊
        addThemeCreatorInfo();

        // 添加現代緊湊樣式
        addModernCompactStyles();

        // 添加主題版本資訊
        addThemeVersionInfo();
    });
}

/**
 * 載入設定HTML到UI
 * @returns {Promise} 完成載入的Promise
 */
function loadSettingsHTML() {
    return new Promise((resolve, reject) => {
        jQuery.get(`${extensionFolderPath}/settings.html`)
            .done(html => {
                $("#extensions_settings2").append(html);
                resolve();
            })
            .fail(error => {
                console.error(`[${EXTENSION_NAME}]`, 'Failed to load settings HTML', error);
                reject(error);
            });
    });
}

/**
 * 根據 shouldLoad 決定是否動態載入或移除CSS檔案
 * @param {boolean} shouldLoad - 若為 true 則載入 CSS，false 則移除
 */
function toggleCss(shouldLoad) {
    // 抓取已存在的 <link> 元素
    const existingLinkStyle = document.getElementById('MoonlitEchosTheme-style');
    const existingLinkExt = document.getElementById('MoonlitEchosTheme-extension');

    if (shouldLoad) {
        // 確定基礎URL路徑
        const baseUrl = getBaseUrl();

        // 載入主題樣式
        if (!existingLinkStyle) {
            const cssUrl = baseUrl + '/style.css';
            const linkStyle = document.createElement('link');
            linkStyle.id = 'MoonlitEchosTheme-style';
            linkStyle.rel = 'stylesheet';
            linkStyle.href = cssUrl;
            document.head.append(linkStyle);
        }

        // 載入擴展樣式
        if (!existingLinkExt) {
            const extUrl = baseUrl + '/extension.css';
            const linkExt = document.createElement('link');
            linkExt.id = 'MoonlitEchosTheme-extension';
            linkExt.rel = 'stylesheet';
            linkExt.href = extUrl;
            document.head.append(linkExt);
        }
    } else {
        // 移除CSS
        if (existingLinkStyle) existingLinkStyle.remove();
        if (existingLinkExt) existingLinkExt.remove();
    }
}

/**
 * 獲取擴展的基礎URL路徑
 * @returns {string} 擴展的基礎URL
 */
function getBaseUrl() {
    let baseUrl = '';

    // 嘗試各種可能的路徑獲取方法
    if (typeof import.meta !== 'undefined' && import.meta.url) {
        baseUrl = new URL('.', import.meta.url).href;
    } else {
        const currentScript = document.currentScript;
        if (currentScript && currentScript.src) {
            baseUrl = currentScript.src.substring(0, currentScript.src.lastIndexOf('/'));
        } else {
            // 如果上述方法都失敗，使用硬編碼路徑
            baseUrl = `${window.location.origin}/scripts/extensions/third-party/${extensionName}`;
        }
    }

    return baseUrl;
}

/**
 * 渲染擴展設定面板
 * 創建UI元素並設定事件處理
 */
function renderExtensionSettings() {
    const context = SillyTavern.getContext();
    const settingsContainer = document.getElementById(`${settingsKey}-container`) ?? document.getElementById('extensions_settings2');
    if (!settingsContainer) {
        return;
    }

    // 尋找現有的設定抽屜，避免重複創建
    let existingDrawer = settingsContainer.querySelector(`#${settingsKey}-drawer`);
    if (existingDrawer) {
        return; // 已存在則不重複創建
    }

    // 創建設定抽屜
    const inlineDrawer = document.createElement('div');
    inlineDrawer.id = `${settingsKey}-drawer`;
    inlineDrawer.classList.add('inline-drawer');
    settingsContainer.append(inlineDrawer);

    // 創建抽屜標題
    const inlineDrawerToggle = document.createElement('div');
    inlineDrawerToggle.classList.add('inline-drawer-toggle', 'inline-drawer-header');

    const extensionNameElement = document.createElement('b');
    extensionNameElement.textContent = EXTENSION_NAME;

    const inlineDrawerIcon = document.createElement('div');
    inlineDrawerIcon.classList.add('inline-drawer-icon', 'fa-solid', 'fa-circle-chevron-down', 'down');

    inlineDrawerToggle.append(extensionNameElement, inlineDrawerIcon);

    // 創建設定內容區域
    const inlineDrawerContent = document.createElement('div');
    inlineDrawerContent.classList.add('inline-drawer-content');

    // 添加到抽屜
    inlineDrawer.append(inlineDrawerToggle, inlineDrawerContent);

    // 獲取設定
    const settings = context.extensionSettings[settingsKey];

    // 添加製作者
    addThemeCreatorInfo(inlineDrawerContent);

    // 創建啟用開關
    const enabledCheckboxLabel = document.createElement('label');
    enabledCheckboxLabel.classList.add('checkbox_label');
    enabledCheckboxLabel.htmlFor = `${settingsKey}-enabled`;

    const enabledCheckbox = document.createElement('input');
    enabledCheckbox.id = `${settingsKey}-enabled`;
    enabledCheckbox.type = 'checkbox';
    enabledCheckbox.checked = settings.enabled;

    enabledCheckbox.addEventListener('change', () => {
        settings.enabled = enabledCheckbox.checked;
        toggleCss(settings.enabled);
        context.saveSettingsDebounced();
    });

    const enabledCheckboxText = document.createElement('span');
    enabledCheckboxText.textContent = t`Enable Moonlit Echoes Theme`;

    enabledCheckboxLabel.append(enabledCheckbox, enabledCheckboxText);
    inlineDrawerContent.append(enabledCheckboxLabel);

    // 添加空格分隔，增加視覺空間
    const spacer = document.createElement('div');
    spacer.style.height = '15px'; // 調整高度值以獲得所需的間距
    inlineDrawerContent.append(spacer);

    // 創建所有自定義設定項
    createCustomSettingsUI(inlineDrawerContent, settings);

    // 添加版本資訊
    addThemeVersionInfo(inlineDrawerContent);

    // 初始化抽屜切換功能
    inlineDrawerToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        inlineDrawerIcon.classList.toggle('down');
        inlineDrawerIcon.classList.toggle('up');
        inlineDrawerContent.classList.toggle('open');
    });
}

/**
 * 添加主題製作者資訊到設定面板
 * @param {HTMLElement} [container] - 可選的容器，若未提供則使用默認的設定容器
 */
function addThemeCreatorInfo(container) {
    // 檢查是否已經添加過製作者資訊
    if (document.getElementById('moonlit-echoes-creator')) return;

    // 如果沒有傳入容器，則使用默認的設定容器
    if (!container) {
        container = document.querySelector('.settings-container');
    }

    // 檢查容器是否存在
    if (!container) return;

    // 創建製作者資訊容器
    const creatorContainer = document.createElement('div');
    creatorContainer.classList.add('moonlit-echoes', 'flex-container', 'flexFlowColumn');
    creatorContainer.style.marginTop = '5px';
    creatorContainer.style.marginBottom = '15px';
    creatorContainer.style.textAlign = 'center';

    // 設定HTML內容
    creatorContainer.innerHTML = `
        <small id="moonlit-echoes-creator">
            <span>Created with Heartfelt Passion by</span>
            <a href="https://github.com/RivelleDays" target="_blank" rel="noopener noreferrer">Rivelle</a><br>
            <span>Dedicated to All 可愛 (Kind & Wonderful) People</span>
        </small>
    `;

    // 添加到設定面板容器
    container.appendChild(creatorContainer);
}


/**
 * 添加主題版本資訊到設定面板
 * @param {HTMLElement} container - 要添加版本資訊的容器
 */
function addThemeVersionInfo(container) {
    // 檢查是否已經添加過版本資訊
    if (document.getElementById('moonlit-echoes-version')) return;

    // 檢查容器是否存在
    if (!container) return;

    // 創建版本資訊容器
    const versionContainer = document.createElement('div');
    versionContainer.classList.add('moonlit-echoes', 'flex-container', 'flexFlowColumn');
    versionContainer.style.marginTop = '5px';
    versionContainer.style.marginBottom = '15px';
    versionContainer.style.textAlign = 'center';

    // 設定HTML內容
    versionContainer.innerHTML = `
        <small class="flex-container justifyCenter alignitemscenter">
            <span data-i18n="Moonlit Echoes Theme Version">Moonlit Echoes Theme Version</span>
            <a id="moonlit-echoes-version"
                href="https://github.com/RivelleDays/SillyTavern-MoonlitEchoesTheme"
                target="_blank"
                rel="noopener noreferrer"
                style="margin-left: 5px;">${THEME_VERSION}</a>
        </small>
    `;

    // 添加到提供的容器
    container.appendChild(versionContainer);
}

/**
 * 添加現代緊湊樣式
 * 添加更現代、更緊湊的UI樣式
 */
function addModernCompactStyles() {
    // 檢查是否已經添加過樣式
    if (document.getElementById('moonlit-modern-styles')) {
        return;
    }

    // 創建樣式元素
    const styleElement = document.createElement('style');
    styleElement.id = 'moonlit-modern-styles';

    // 添加現代緊湊的CSS樣式
    styleElement.textContent = `
        /* 基本設定 */
        .theme-category-content {
            display: block;
            width: 100%;
            padding: 8px 0;
        }

        /* 單欄佈局 */
        .colors-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        /* 改進設定項容器 */
        .theme-setting-item {
            margin-bottom: 12px;
        }

        /* 改進類別標題容器 */
        .theme-category-header {
            padding: 8px 0 !important;
            margin-bottom: 5px !important;
        }

        /* 改進標籤和描述 */
        .theme-setting-container label {
            display: block;
            margin-bottom: 4px;
            font-size: 0.95em;
        }

        .theme-setting-container small {
            display: block;
            margin-bottom: 6px;
            opacity: 0.7;
            font-size: 0.85em;
        }

        /* 改進顏色選擇器佈局 */
        .theme-color-picker {
            max-width: 480px;
        }

        /* 改進下拉選單 */
        select.widthNatural.flex1.margin0 {
            min-width: 120px;
            max-width: 480px;
        }

        /* 設定項統一寬度限制 */
        .theme-setting-container {
            max-width: 480px;
        }

        /* 改進滑桿樣式 */
        input[type="range"].moonlit-neo-range-input {
            height: 6px;
            border-radius: 3px;
        }
        input[type="number"].moonlit-neo-range-input {
            width: 60px;
            height: 32.5px;
            text-align: center;
            border-radius: 5px;
            background-color: rgba(30, 30, 30, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* 改進顏色選擇器視覺效果 */
        .color-preview {
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }

        /* 改進輸入框樣式 */
        .theme-setting-container input[type="text"] {
            padding: 5px 8px;
            background-color: rgba(30, 30, 30, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
        }
    `;

    // 添加到頭部
    document.head.appendChild(styleElement);
}

/**
 * 創建自定義設定UI
 * 根據themeCustomSettings設定生成所有設定項的UI元素
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} settings - 當前設定值對象
 */
function createCustomSettingsUI(container, settings) {
    const context = SillyTavern.getContext();

    // 獲取設定類別
    const categories = {};
    themeCustomSettings.forEach(setting => {
        const category = setting.category || 'general';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(setting);
    });

    // 類別名稱映射
    const categoryNames = {
        'colors': t`Theme Color Settings`,
        'background': t`Background Settings`,
        'chat': t`Chat Interface`,
        'visualNovel': t`Visual Novel Mode`,
        'general': t`General Settings`,
        'features': t`Advanced Settings`
    };

    // 處理所有類別設定
    Object.keys(categories).forEach(category => {
        // 創建類別容器
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('theme-setting-category');

        // 創建可折疊的類別標題容器
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('theme-category-header');
        titleContainer.style.cursor = 'pointer';
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.marginBottom = '5px';
        titleContainer.style.padding = '5px 0';
        titleContainer.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';

        // 添加展開/收縮圖示
        const toggleIcon = document.createElement('i');
        toggleIcon.classList.add('fa', 'fa-chevron-down');
        toggleIcon.style.marginRight = '8px';
        toggleIcon.style.transition = 'transform 0.3s';
        toggleIcon.style.transform = 'rotate(-90deg)'; // 預設收合狀態

        // 創建類別標題
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = categoryNames[category] || category;
        categoryTitle.style.margin = '0';

        titleContainer.appendChild(toggleIcon);
        titleContainer.appendChild(categoryTitle);
        categoryContainer.appendChild(titleContainer);

        // 創建內容容器
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('theme-category-content');
        contentContainer.style.transition = 'max-height 0.3s ease-out, opacity 0.2s ease-out';
        contentContainer.style.overflow = 'hidden';
        contentContainer.style.maxHeight = '0px'; // 預設收合
        contentContainer.style.opacity = '0';

        // 創建該類別下的所有設定項
        categories[category].forEach(setting => {
            const settingContainer = document.createElement('div');
            settingContainer.classList.add('theme-setting-item');

            createSettingItem(settingContainer, setting, settings);
            contentContainer.appendChild(settingContainer);
        });

        // 添加折疊事件
        titleContainer.addEventListener('click', () => {
            const isCollapsed = contentContainer.style.maxHeight === '0px';

            if (isCollapsed) {
                // 展開
                contentContainer.style.maxHeight = '1000px'; // 足夠高的值以容納所有內容
                contentContainer.style.opacity = '1';
                toggleIcon.style.transform = 'rotate(0deg)';
            } else {
                // 收縮
                contentContainer.style.maxHeight = '0px';
                contentContainer.style.opacity = '0';
                toggleIcon.style.transform = 'rotate(-90deg)';
            }
        });

        categoryContainer.appendChild(contentContainer);
        // 添加到主容器
        container.appendChild(categoryContainer);
    });

    // 添加CSS樣式以支持緊湊佈局
    addModernCompactStyles();
}

/**
 * 創建單個設定項
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} setting - 設定設定對象
 * @param {Object} settings - 當前設定值對象
 */
function createSettingItem(container, setting, settings) {
    // 創建設定項容器
    const settingContainer = document.createElement('div');
    settingContainer.classList.add('theme-setting-container');

    // 只有非複選框類型才創建標準標籤和描述
    if (setting.type !== 'checkbox') {
        // 創建設定項標籤
        const label = document.createElement('label');
        label.textContent = setting.displayText;
        settingContainer.appendChild(label);

        // 如果有說明，添加說明文字
        if (setting.description) {
            const description = document.createElement('small');
            description.textContent = setting.description;
            settingContainer.appendChild(description);
        }
    }

    // 根據設定類型創建不同的UI元素
    switch (setting.type) {
        case 'color':
            createColorPicker(settingContainer, setting, settings);
            break;
        case 'slider':
            createSlider(settingContainer, setting, settings);
            break;
        case 'select':
            createSelect(settingContainer, setting, settings);
            break;
        case 'text':
            createTextInput(settingContainer, setting, settings);
            break;
        case 'checkbox':
            createCheckbox(settingContainer, setting, settings);
            break;
        default:
            console.warn(`[${EXTENSION_NAME}]`, `未知的設定類型: ${setting.type}`);
    }

    container.appendChild(settingContainer);
}

/**
 * 創建顏色選擇器設定項 - 改進版
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} setting - 設定設定對象
 * @param {Object} settings - 當前設定值對象
 */
function createColorPicker(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue } = setting;
    const currentValue = settings[varId] || defaultValue;

    // 創建顏色選擇容器
    const colorPickerContainer = document.createElement('div');
    colorPickerContainer.classList.add('theme-color-picker');
    colorPickerContainer.style.display = 'flex';
    colorPickerContainer.style.alignItems = 'center';
    colorPickerContainer.style.gap = '8px';

    // 創建顏色預覽方塊 - 設定最小寬度和高度
    const colorPreview = document.createElement('div');
    colorPreview.classList.add('color-preview');
    colorPreview.style.width = '28px';
    colorPreview.style.height = '28px';
    colorPreview.style.minWidth = '28px';  // 添加最小寬度
    colorPreview.style.minHeight = '28px'; // 添加最小高度
    colorPreview.style.borderRadius = '4px';
    colorPreview.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    colorPreview.style.background = currentValue;
    colorPreview.style.cursor = 'pointer';

    // 創建文本輸入
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = currentValue;
    textInput.classList.add('color-input-text');
    textInput.style.flex = '1';

    // 創建顏色選擇器（隱藏）
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = rgbaToHex(currentValue) || '#ffffff';
    colorInput.style.position = 'absolute';
    colorInput.style.opacity = '0';
    colorInput.style.pointerEvents = 'none';

// 創建透明度滑桿
const alphaSlider = document.createElement('input');
alphaSlider.type = 'range';
alphaSlider.min = '0';
alphaSlider.max = '100';
alphaSlider.step = '1';
alphaSlider.value = Math.round(getAlphaFromRgba(currentValue) * 100);
alphaSlider.style.width = '80px';

// 點擊顏色預覽時觸發顏色選擇器
colorPreview.addEventListener('click', () => {
    colorInput.click();
});

// 顏色選擇器變更時更新
colorInput.addEventListener('input', () => {
    updateColor();
});

// 透明度滑桿變更時更新
alphaSlider.addEventListener('input', () => {
    updateColor();
});

// 文本輸入變更時更新
textInput.addEventListener('change', () => {
    try {
        // 嘗試將文本解析為顏色
        const color = textInput.value;

        // 檢查是否是有效的RGBA格式
        if (/^rgba?\([\d\s,\.]+\)$/.test(color)) {
            // 更新顏色預覽
            colorPreview.style.background = color;

            // 嘗試更新顏色選擇器
            const hexColor = rgbaToHex(color);
            if (hexColor) {
                colorInput.value = hexColor;
            }

            // 更新透明度滑桿
            alphaSlider.value = Math.round(getAlphaFromRgba(color) * 100);

            // 更新設定並應用
            settings[varId] = color;
            applyThemeSetting(varId, color);
            context.saveSettingsDebounced();
        } else {
            // 恢復為之前的值
            textInput.value = settings[varId] || defaultValue;
        }
    } catch (error) {
        console.error(`[${EXTENSION_NAME}]`, `Error parsing color: ${error.message}`);
        // 恢復為之前的值
        textInput.value = settings[varId] || defaultValue;
    }
});

// 更新顏色的函數
function updateColor() {
    const hexColor = colorInput.value;
    const alpha = alphaSlider.value / 100;

    // 從HEX色碼獲取RGB部分
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // 生成RGBA顏色字符串
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    // 更新顏色預覽和文本輸入
    colorPreview.style.background = rgbaColor;
    textInput.value = rgbaColor;

    // 更新設定並應用
    settings[varId] = rgbaColor;
    applyThemeSetting(varId, rgbaColor);
    context.saveSettingsDebounced();
}

// 添加到容器
colorPickerContainer.appendChild(colorPreview);
colorPickerContainer.appendChild(textInput);
colorPickerContainer.appendChild(alphaSlider);
colorPickerContainer.appendChild(colorInput); // 添加隱藏的顏色選擇器

container.appendChild(colorPickerContainer);
}

/**
* 創建滑桿設定項
* @param {HTMLElement} container - 設定容器元素
* @param {Object} setting - 設定設定對象
* @param {Object} settings - 當前設定值對象
*/
function createSlider(container, setting, settings) {
const context = SillyTavern.getContext();
const { varId, default: defaultValue, min, max, step } = setting;

// 創建滑桿容器
const sliderContainer = document.createElement('div');
sliderContainer.style.display = 'flex';
sliderContainer.style.alignItems = 'center';
sliderContainer.style.gap = '10px';
sliderContainer.style.maxWidth = '480px';

// 創建滑桿
const slider = document.createElement('input');
slider.id = `cts-slider-${varId}`;
slider.type = 'range';
slider.min = min;
slider.max = max;
slider.step = step;
slider.value = settings[varId] || defaultValue;
slider.classList.add('moonlit-neo-range-input');
slider.style.flex = '1';

// 創建數值輸入
const numberInput = document.createElement('input');
numberInput.id = `cts-number-${varId}`;
numberInput.type = 'number';
numberInput.min = min;
numberInput.max = max;
numberInput.step = step;
numberInput.value = settings[varId] || defaultValue;
numberInput.classList.add('moonlit-neo-range-input');
numberInput.style.width = '60px';

// 滑桿變更事件
slider.addEventListener('input', () => {
    // 更新數值輸入
    numberInput.value = slider.value;

    // 更新設定
    settings[varId] = slider.value;

    // 應用設定
    applyThemeSetting(varId, slider.value);

    // 保存設定
    context.saveSettingsDebounced();
});

// 數值輸入變更事件
numberInput.addEventListener('change', () => {
    // 更新滑桿
    slider.value = numberInput.value;

    // 更新設定
    settings[varId] = numberInput.value;

    // 應用設定
    applyThemeSetting(varId, numberInput.value);

    // 保存設定
    context.saveSettingsDebounced();
});

sliderContainer.appendChild(slider);
sliderContainer.appendChild(numberInput);
container.appendChild(sliderContainer);
}

/**
 * 創建下拉選單設定項
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} setting - 設定設定對象
 * @param {Object} settings - 當前設定值對象
 */
function createSelect(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue, options } = setting;

    // 創建選擇器
    const select = document.createElement('select');
    select.id = `cts-${varId}`;
    select.classList.add('widthNatural', 'flex1', 'margin0', 'moonlit-select'); // 添加專屬類別

    // 添加選項
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        optionElement.selected = (settings[varId] || defaultValue) === option.value;
        select.appendChild(optionElement);
    });

    // 選擇器變更事件
    select.addEventListener('change', () => {
        // 更新設定
        settings[varId] = select.value;

        // 應用設定
        applyThemeSetting(varId, select.value);

        // 保存設定
        context.saveSettingsDebounced();
    });

    container.appendChild(select);
}

/**
 * 創建文本輸入設定項
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} setting - 設定設定對象
 * @param {Object} settings - 當前設定值對象
 */
function createTextInput(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue } = setting;

    // 創建文本輸入
    const input = document.createElement('input');
    input.id = `cts-${varId}`;
    input.type = 'text';
    input.value = settings[varId] || defaultValue;
    input.classList.add('text_pole', 'wide100p', 'widthNatural', 'flex1', 'margin0', 'moonlit-input'); // 添加專屬類別

    // 文本輸入變更事件
    input.addEventListener('change', () => {
        // 更新設定
        settings[varId] = input.value;

        // 應用設定
        applyThemeSetting(varId, input.value);

        // 保存設定
        context.saveSettingsDebounced();
    });

    container.appendChild(input);
}

/**
 * 創建單選框設定項
 * @param {HTMLElement} container - 設定容器元素
 * @param {Object} setting - 設定設定對象
 * @param {Object} settings - 當前設定值對象
 */
function createCheckbox(container, setting, settings) {
    const context = SillyTavern.getContext();
    const { varId, default: defaultValue, displayText, cssBlock, cssFile, description } = setting;

    // 創建複選框容器，使用flex佈局
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    checkboxContainer.style.display = 'flex';
    checkboxContainer.style.flexDirection = 'column'; // 改為垂直排列
    checkboxContainer.style.marginTop = '8px';

    // 創建水平排列的複選框和標籤行
    const checkboxRow = document.createElement('div');
    checkboxRow.style.display = 'flex';
    checkboxRow.style.alignItems = 'center';

    // 創建複選框
    const checkbox = document.createElement('input');
    checkbox.id = `cts-checkbox-${varId}`;
    checkbox.type = 'checkbox';
    checkbox.checked = settings[varId] === true;

    // 創建標籤
    const label = document.createElement('label');
    label.htmlFor = `cts-checkbox-${varId}`;
    label.textContent = displayText;
    label.style.marginLeft = '8px';
    label.style.cursor = 'pointer';

    // 處理單選框的動態CSS樣式表
    let styleElement = document.getElementById(`css-block-${varId}`);
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = `css-block-${varId}`;
        document.head.appendChild(styleElement);
    }

    // 更新CSS樣式表的函數 - 內嵌CSS
    function updateInlineCssBlock(enabled) {
        if (styleElement && cssBlock) {
            styleElement.textContent = enabled ? cssBlock : '';
        }
    }

    // 從外部文件載入CSS的函數
    async function loadExternalCss(enabled) {
        if (!enabled || !cssFile) {
            // 如果禁用或沒有指定文件，清空樣式
            if (styleElement) {
                styleElement.textContent = '';
            }
            return;
        }

        try {
            // 構建CSS文件的完整路徑
            const cssFilePath = `${extensionFolderPath}/css/${cssFile}`;

            // 獲取CSS內容
            const response = await fetch(cssFilePath);
            if (response.ok) {
                const cssText = await response.text();
                if (styleElement) {
                    styleElement.textContent = cssText;
                }
            } else {
                console.error(`[${EXTENSION_NAME}]`, `無法載入CSS文件: ${cssFile}`, response.status);
            }
        } catch (error) {
            console.error(`[${EXTENSION_NAME}]`, `載入CSS文件時出錯: ${cssFile}`, error);
        }
    }

    // 應用CSS的主函數
    async function applyCss(enabled) {
        if (cssFile) {
            // 如果指定了外部文件，優先使用外部文件
            await loadExternalCss(enabled);
        } else if (cssBlock) {
            // 否則使用內嵌的CSS塊
            updateInlineCssBlock(enabled);
        }
    }

    // 初始應用CSS
    applyCss(checkbox.checked);

    // 複選框變更事件
    checkbox.addEventListener('change', () => {
        // 更新設定
        settings[varId] = checkbox.checked;

        // 應用或移除CSS
        applyCss(checkbox.checked);

        // 應用設定
        applyThemeSetting(varId, checkbox.checked ? 'true' : 'false');

        // 保存設定
        context.saveSettingsDebounced();
    });

    // 添加到行容器
    checkboxRow.appendChild(checkbox);
    checkboxRow.appendChild(label);

    // 將行容器添加到主容器
    checkboxContainer.appendChild(checkboxRow);

    // 如果有描述，創建描述元素並添加
    if (description) {
        const descriptionElement = document.createElement('small');
        descriptionElement.textContent = description;
        descriptionElement.style.marginLeft = '44px';
        descriptionElement.style.opacity = '0.7';
        descriptionElement.style.fontSize = '0.85em';
        checkboxContainer.appendChild(descriptionElement);
    }

    // 添加到容器
    container.appendChild(checkboxContainer);
}

/**
* 初始化聊天外觀切換器
* 處理不同聊天樣式的切換
*/
function initChatDisplaySwitcher() {
// 獲取選擇器元素
const themeSelect = document.getElementById("themes");
const chatDisplaySelect = document.getElementById("chat_display");

if (!themeSelect || !chatDisplaySelect) {
    console.error(`[${EXTENSION_NAME}]`, 'Theme or chat display selectors not found');
    return;
}

let newEchoOption, newWhisperOption, newHushOption;

// 添加自定義樣式選項
function addCustomStyleOptions() {
    // 檢查並添加Echo選項
    if (!newEchoOption) {
        newEchoOption = document.createElement("option");
        newEchoOption.value = "3";
        newEchoOption.text = t`Echo`;
        chatDisplaySelect.appendChild(newEchoOption);
    }

    // 檢查並添加Whisper選項
    if (!newWhisperOption) {
        newWhisperOption = document.createElement("option");
        newWhisperOption.value = "4";
        newWhisperOption.text = t`Whisper`;
        chatDisplaySelect.appendChild(newWhisperOption);
    }

    // 檢查並添加Hush選項
    if (!newHushOption) {
        newHushOption = document.createElement("option");
        newHushOption.value = "5";
        newHushOption.text = t`Hush`;
        chatDisplaySelect.appendChild(newHushOption);
    }
}

// 套用聊天樣式
function applyChatDisplayStyle() {
    // 移除所有可能的樣式類
    document.body.classList.remove("flatchat", "bubblechat", "documentstyle", "echostyle", "whisperstyle", "hushstyle");

    // 根據選擇套用樣式
    switch (chatDisplaySelect.value) {
        case "0": document.body.classList.add("flatchat"); break;
        case "1": document.body.classList.add("bubblechat"); break;
        case "2": document.body.classList.add("documentstyle"); break;
        case "3": document.body.classList.add("echostyle"); break;
        case "4": document.body.classList.add("whisperstyle"); break;
        case "5": document.body.classList.add("hushstyle"); break;
    }
}

// 主題變更事件處理
themeSelect.addEventListener("change", function() {
    addCustomStyleOptions();
    localStorage.setItem("savedTheme", themeSelect.value);
    applyChatDisplayStyle();
});

// 聊天樣式變更事件處理
chatDisplaySelect.addEventListener("change", function() {
    applyChatDisplayStyle();
    localStorage.setItem("savedChatStyle", chatDisplaySelect.value);
});

// 從localStorage恢復設定
const savedTheme = localStorage.getItem("savedTheme");
const savedChatStyle = localStorage.getItem("savedChatStyle");

// 應用已保存的設定
if (savedTheme) {
    themeSelect.value = savedTheme;
}

addCustomStyleOptions();

if (savedChatStyle) {
    chatDisplaySelect.value = savedChatStyle;
}

applyChatDisplayStyle();
}

/**
* 初始化頭像注入器
* 將頭像URL注入到消息元素作為CSS變量
*/
function initAvatarInjector() {
// 更新所有消息的頭像
function updateAvatars() {
    document.querySelectorAll('.mes').forEach(mes => {
        // 跳過已處理的元素
        if (mes.dataset.avatar) return;

        // 找到頭像圖像
        const avatarImg = mes.querySelector('.avatar img');
        if (!avatarImg) {
            return;
        }

        // 獲取圖像源
        let src = avatarImg.src || avatarImg.getAttribute('data-src');
        if (!src) return;

        // 轉換絕對URL為相對路徑
        if (src.startsWith(window.location.origin)) {
            src = src.replace(window.location.origin, '');
        }

        // 添加加載事件
        avatarImg.addEventListener('load', () => {
            let loadedSrc = avatarImg.src;
            if (loadedSrc.startsWith(window.location.origin)) {
                loadedSrc = loadedSrc.replace(window.location.origin, '');
            }
            mes.dataset.avatar = loadedSrc;
            mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
        }, { once: true });

        // 如果圖像已加載，立即更新
        if (avatarImg.complete && src && !src.endsWith("/")) {
            mes.dataset.avatar = src;
            mes.style.setProperty('--mes-avatar-url', `url('${mes.dataset.avatar}')`);
        }
    });
}

// 初始執行
updateAvatars();

// 使用防抖的MutationObserver回調
let debounceTimer;
const observerCallback = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        updateAvatars();
    }, 100);
};

// 觀察聊天容器的變化
const chatContainer = document.getElementById('chat');
if (chatContainer) {
    const observer = new MutationObserver(observerCallback);
    observer.observe(chatContainer, { childList: true, subtree: true });
}

// 公開更新函數
window.updateAvatars = updateAvatars;
}

/**
* 應用所有主題設定
* 從設定中應用所有CSS變量
*/
function applyAllThemeSettings() {
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 確保有專用的style元素
let themeStyleElement = document.getElementById('dynamic-theme-styles');
if (!themeStyleElement) {
    themeStyleElement = document.createElement('style');
    themeStyleElement.id = 'dynamic-theme-styles';
    document.head.appendChild(themeStyleElement);
}

// 構建CSS變量定義
let cssVars = ':root {\n';

// 處理所有設定項
themeCustomSettings.forEach(setting => {
    const { varId } = setting;
    const value = settings[varId];

    if (value !== undefined) {
        cssVars += `  --${varId}: ${value} !important;\n`;
    }
});

cssVars += '}';

// 應用CSS變量
themeStyleElement.textContent = cssVars;

console.debug(`[${EXTENSION_NAME}]`, 'Applied all theme settings');
}


/**
* 應用單個主題設定
* @param {string} varId - CSS變量ID
* @param {string} value - 設定值
*/
function applyThemeSetting(varId, value) {
// 直接設定CSS變量
document.documentElement.style.setProperty(`--${varId}`, value, 'important');

// 觸發自定義事件
document.dispatchEvent(new CustomEvent('themeSettingChanged', {
    detail: { varId, value }
}));

console.debug(`[${EXTENSION_NAME}]`, `Applied setting: --${varId} = ${value}`);
}

/**
* 將RGBA轉換為HEX
* @param {string} rgba - RGBA顏色字符串
* @returns {string|null} HEX顏色字符串或null
*/
function rgbaToHex(rgba) {
// 檢查是否是CSS變數格式
if (!rgba || rgba.startsWith('var(--')) {
    return null;
}

// 如果已經是HEX格式
if (rgba && rgba.startsWith('#')) {
    return rgba;
}

// 嘗試匹配RGBA格式
const match = rgba && rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
if (!match) return null;

const r = parseInt(match[1]);
const g = parseInt(match[2]);
const b = parseInt(match[3]);

return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
* 從RGBA字符串獲取透明度值
* @param {string} rgba - RGBA顏色字符串
* @returns {number} 透明度值，預設為1
*/
function getAlphaFromRgba(rgba) {
// 檢查是否是CSS變數格式
if (!rgba || rgba.startsWith('var(--')) {
    return 1;
}

// 如果是HEX格式
if (rgba.startsWith('#')) {
    return 1;
}

// 嘗試匹配RGBA格式
const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
if (!match) return 1;

// 返回透明度或預設值
return match[4] ? parseFloat(match[4]) : 1;
}

/**
* 從RGBA字符串獲取RGB部分
* @param {string} rgba - RGBA顏色字符串
* @returns {string} RGB部分字符串
*/
function getRgbPartFromRgba(rgba) {
// 檢查是否是CSS變數格式
if (!rgba || rgba.startsWith('var(--')) {
    return '0, 0, 0';
}

// 嘗試匹配RGBA格式
const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)/);
if (!match) return '0, 0, 0';

// 返回RGB部分
return `${match[1]}, ${match[2]}, ${match[3]}`;
}

/**
* 動態添加一個新的自定義設定
* 使用此函數可以在運行時添加新的設定項
* @param {Object} settingConfig - 設定設定對象
*/
function addCustomSetting(settingConfig) {
// 檢查設定有效性
if (!settingConfig || !settingConfig.varId || !settingConfig.type) {
    console.error(`[${EXTENSION_NAME}]`, 'Invalid setting configuration', settingConfig);
    return;
}

// 檢查是否已存在
const existing = themeCustomSettings.find(s => s.varId === settingConfig.varId);
if (existing) {
    console.warn(`[${EXTENSION_NAME}]`, `Setting with varId ${settingConfig.varId} already exists`);
    return;
}

// 添加到設定設定
themeCustomSettings.push(settingConfig);

// 獲取設定並添加默認值
const context = SillyTavern.getContext();
const settings = context.extensionSettings[settingsKey];

// 如果設定中沒有此項，添加默認值
if (settings[settingConfig.varId] === undefined) {
    settings[settingConfig.varId] = settingConfig.default;
}

// 保存設定
context.saveSettingsDebounced();

// 重新渲染設定面板
const settingsContainer = document.querySelector(`#${settingsKey}-drawer .inline-drawer-content`);
if (settingsContainer) {
    // 清空現有設定項（保留啟用開關）
    const enabledCheckbox = settingsContainer.querySelector(`#${settingsKey}-enabled`).parentElement;
    const separator = settingsContainer.querySelector('hr');

    // 清空子元素
    while (settingsContainer.lastChild) {
        settingsContainer.removeChild(settingsContainer.lastChild);
    }

    // 重新添加啟用開關
    settingsContainer.appendChild(enabledCheckbox);
    settingsContainer.appendChild(separator);

    // 重新創建設定項
    createCustomSettingsUI(settingsContainer, settings);
}

console.debug(`[${EXTENSION_NAME}]`, `Added new setting: ${settingConfig.varId}`);
}

// 公開API
window.MoonlitEchoesTheme = {
// 初始化函數
init: function() {
    applyAllThemeSettings();
    initializeThemeColorOnDemand();
},

// 添加新設定
addSetting: addCustomSetting,

// 應用設定
applySetting: applyThemeSetting,

// 獲取所有設定
getSettings: function() {
    const context = SillyTavern.getContext();
    return context.extensionSettings[settingsKey];
},

// 獲取設定設定
getSettingsConfig: function() {
    return [...themeCustomSettings];
}
};

// 公開初始化函數以供外部調用
window.initializeThemeColorOnDemand = function() {
applyAllThemeSettings();
};

// 確保在頁面加載完成後添加現代緊湊樣式
document.addEventListener('DOMContentLoaded', function() {
// 在適當的時機添加現代緊湊樣式
addModernCompactStyles();
});

