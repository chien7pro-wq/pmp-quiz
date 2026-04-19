# PMP L1 商業環境 刷題 APP

手機優先、離線可用的 PMP L1（商業環境）互動式刷題練習工具。

## ✨ 功能

- **6 大子章節** 共 200 題（按知識點權重分配）
- **詳解寫死**：每題都附「為什麼選對、為什麼其他錯、考點口訣」
- **錯題本**：自動記錄答錯題，可單獨刷錯題
- **章節統計**：覆蓋率、正確率視覺化
- **LocalStorage**：資料存瀏覽器本機，無需登入，無需後端
- **手機 RWD**：底部 Tab 導航，拇指操作

## 📚 題庫分配

| 章節 | 主題 | 題數 |
|---|---|---|
| A | 基礎專案管理 | 25 |
| B | 策略調整（校準） | 25 |
| C | 專案效益與價值 | 40 |
| D | 組織文化與變革管理 | 40 |
| E | 專案治理 | 40 |
| F | 專案合規性 | 30 |
| **總計** | | **200** |

## 🛠 本機開發

```bash
npm install
npm run dev
```

啟動後開 <http://localhost:5173> 即可使用。

## 🚀 部署到 GitHub Pages

### 第一次設定

1. 在 GitHub 建立一個新 repo，名字叫 `pmp-quiz`（要與 vite base 對應）
2. 在本機：

```bash
cd pmp-quiz
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<你的帳號>/pmp-quiz.git
git push -u origin main
```

3. 進入 GitHub repo → Settings → Pages → Source 選 `gh-pages` branch（第一次部署後會出現）

### 每次更新部署

```bash
npm run deploy
```

部署完成後網址會是：

```
https://<你的帳號>.github.io/pmp-quiz/
```

### 若 repo 名稱不是 `pmp-quiz`

改 `package.json` 的 `build:gh` script：

```json
"build:gh": "VITE_BASE=/<你的-repo-名稱>/ vite build"
```

## 📱 手機使用

把部署後的網址用 Safari 打開 → 右下方分享 → 加入主畫面，就能像原生 APP 一樣打開。

妹妹要用：直接把網址傳給她，她也加到主畫面即可。每個人進度獨立存在自己手機。

## 🗂 專案結構

```
src/
├── App.jsx              # Router + 底部 Tab 導航
├── main.jsx
├── index.css            # Tailwind
├── pages/
│   ├── Home.jsx         # 首頁（快速模式 + 章節列表）
│   ├── Quiz.jsx         # 做題頁（隨機/章節/錯題模式）
│   ├── WrongBook.jsx    # 錯題本
│   ├── Stats.jsx        # 章節統計
│   └── Settings.jsx     # 設定（清除進度）
├── data/
│   ├── chapters.js      # 章節元資料
│   ├── schema.md        # 題目 JSON Schema 說明
│   └── questions/
│       ├── A.js ~ F.js  # 各章節題庫
│       └── index.js     # 聚合匯出
└── utils/
    ├── storage.js       # LocalStorage 讀寫
    └── shuffle.js       # 隨機洗牌
```

## ➕ 新增題目

編輯 `src/data/questions/X.js`（X 為章節代號），按 schema 加一筆到陣列尾端即可。`id` 規則：`章節-流水號`（如 `A-026`）。

Schema 見 `src/data/schema.md`。

## 🧹 清除進度

首頁底部 Tab → 設定 → 按兩次「清除所有進度」確認。
