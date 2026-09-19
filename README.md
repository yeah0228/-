# GLOBAL INSIGHTS

這是長期經營版的網站起始專案，採用：

- Next.js App Router
- TypeScript
- Supabase（PostgreSQL / Auth / Storage）
- Responsive Web Design

## 1. 安裝

```bash
npm install
```

## 2. 建立 Supabase

建立一個 Supabase project，然後把 `supabase/schema.sql` 貼到 SQL Editor 執行。

再建立 `.env.local`：

```env
NEXT_PUBLIC_SUPABASE_URL=你的網址
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的匿名金鑰
```

## 3. 啟動

```bash
npm run dev
```

瀏覽：

http://localhost:3000

## 4. 正式部署

建議使用 Vercel 部署 Next.js，Supabase 負責資料庫、登入與圖片儲存。

## 5. 下一階段

目前專案已把「前台網站 + 資料庫模型 + 管理後台入口」建立好。

正式上線前建議再完成：

1. Supabase Auth 管理員登入
2. Admin CRUD
3. Supabase Storage 圖片上傳
4. 文章編輯器
5. SEO / sitemap / OG image
6. 網站分析
7. 備份與權限
8. 自訂網域
