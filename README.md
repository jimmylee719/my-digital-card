# Jimmy Lee 的電子名片網頁 (React + Vite)

這是一個現代化、響應式的個人電子名片網站，支援中英文顯示，適合 QR code/NFC 分享，並可隨時在 GitHub 維護與 Vercel 全球部署。

## 目前功能
- 深綠色現代卡片式設計，響應式支援手機/桌機
- 個人大頭照、姓名、公司名稱、Email（點擊可發信）
- 證照清單（含 icon 與中英文名稱）
- 學經歷清單（含 icon 與中英文名稱）
- 作品集（含 icon、縮圖、名稱中英文、連結）
- 社群連結（GitHub、LinkedIn，含 icon）
- 卡片進場動畫、hover 效果、行動裝置優化
- 所有個人資料集中於 `src/data.js`，維護超簡單

## 未來可擴充功能
- 多語言切換（中/英）
- 作品集支援影片、外部連結、分類
- 更多社群平台支援（Facebook、Instagram...）
- SEO/OG 標籤優化
- 下載 vCard、直接加聯絡人
- 進階動畫（如滑動、點擊波紋、icon 動畫）
- 聯絡表單/即時通訊

## 如何維護/更新
1. 修改 `src/data.js` 內容即可更新所有個人資訊
2. 更換大頭照：將 `public/profile.jpg` 換成新照片
3. 推送到 GitHub，Vercel 會自動重新部署

## 部署方式
- 直接連接 GitHub repository 到 [Vercel](https://vercel.com/)，自動部署
- 取得專屬網址，可用於 QR code/NFC 分享

---

本專案以 React + Vite 製作，歡迎 fork 或自訂！
