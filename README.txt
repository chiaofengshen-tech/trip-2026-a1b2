沖繩親子旅行網頁（手機版）
================================

如何使用
--------
直接用瀏覽器打開 index.html 即可，不需要安裝、不需要網路、不需要登入。
建議用手機瀏覽器開啟，畫面寬度設計以手機為主（最大寬度 480px，置中顯示）。

檔案說明
--------
- index.html  網頁結構（首頁／行程／地圖／記帳／資訊／底部導覽）
- style.css   外觀樣式（奶油米底、深咖啡文字、橘棕線、圓角卡片）
- script.js   所有資料與互動邏輯
- README.txt  本說明檔

如何修改成你的真實行程
--------------------
打開 script.js，最上方有一個 tripData 物件，裡面包含：

1. days：5 天的行程陣列，每天包含
   - id：D1~D5
   - date：日期（YYYY-MM-DD，用來判斷「今天」自動跳到對應天）
   - theme：今日主題（一句話）
   - departureTime：出發時間
   - route：今日重點動線（簡短文字）
   - meals.lunch / meals.dinner：午餐、晚餐名稱
   - hotel：飯店名稱
   - schedule：完整時間軸陣列，每筆包含 time / place / note
   - mapPoints：當天地圖地點陣列，每筆包含 name / type / link
     type 可填：住宿、景點、餐廳、交通、購物
     link 請換成真實的 Google Maps 連結

2. transport：交通資訊（去程航班、回程航班、租車公司、取還車地點）

3. hotels：每段住宿的飯店名稱、地址、Google Maps 連結、入住退房時間

4. emergencyContacts：緊急聯絡人姓名與電話

5. jpEmergency：日本緊急電話（警察、救護/消防），通常不需要修改

直接把假資料換成真實資料即可，不需要改動其他程式碼。

記帳資料
--------
記帳頁的花費紀錄是存在瀏覽器的 localStorage，不會寫進檔案裡。
如果換瀏覽器或清除瀏覽器資料，記帳紀錄會消失（這是設計上的限制，但對單次旅行使用沒有影響）。

地圖連結
--------
目前 mapPoints 與 hotels 裡的 link / mapLink 都是假連結（#）。
之後請把它們換成真實的 Google Maps 連結，例如：
https://www.google.com/maps/search/?api=1&query=地點名稱
或直接從 Google Maps App 分享連結貼上即可。
