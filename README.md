# Global Insights — 日本打工度假人物專題

## 專案結構

```text
global-insights/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── （預留本地圖片）
└── README.md
```

## 直接部署

這是一個純靜態網站，不需要 Node.js、PHP 或資料庫。

### Netlify
1. 將整個 `global-insights` 資料夾拖到 Netlify 的部署區。
2. 部署完成後即可取得 `.netlify.app` 網址。

### GitHub Pages
1. 建立 GitHub Repository。
2. 上傳整個資料夾內的檔案。
3. Settings → Pages → Deploy from a branch。
4. 選 `main` / `/root`（依 GitHub 介面顯示）。
5. 儲存後等待部署。

## 本地預覽

直接雙擊 `index.html` 通常即可查看。

若瀏覽器對本地檔案有額外限制，也可以使用 VS Code 的 Live Server。

## 圖片

目前保留原本 HTML 中的 Unsplash 遠端圖片網址，方便直接部署與預覽。

正式網站建議將確認過授權的圖片放入：

```text
assets/images/
```

再把 HTML 的圖片路徑改成：

```html
./assets/images/檔名.jpg
```

## 後續擴充

可以在此結構上新增：

```text
articles/
people/
about/
assets/images/
```

逐步擴充成完整的 Global Insights 專題網站。
