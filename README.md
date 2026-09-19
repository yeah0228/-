# Global Insights V2

這個版本改成「首頁＋文章頁」的靜態網站架構。

## 結構

```text
global-insights/
├── index.html
├── articles/
│   └── japan-working-holiday.html
├── people/
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
└── README.md
```

## 新增文章

複製 `articles/japan-working-holiday.html`，例如：

`articles/australia-working-holiday.html`

然後在首頁的卡片加入連結即可。

## 部署

直接將整個資料夾部署到 Netlify、GitHub Pages 或其他靜態網站主機。

本版本使用絕對路徑 `/assets/...`，因此建議部署在網域根目錄；GitHub Pages 若使用 `https://帳號.github.io/專案名/` 這種子路徑，需改成相對路徑或設定 base path。

## 圖片

目前保留原本的 Unsplash 遠端圖片，`assets/images/` 已預留給未來的本地圖片。
