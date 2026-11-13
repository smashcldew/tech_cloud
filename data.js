"use strict";

/*
  科技脈絡圖 資料檔 V1.2.1
  之後要新增技術，只需要改這個檔案：
  1. 在 NODES 加一列：[id, 名稱, 領域, 類別, 年份, 說明]
  2. 在 LINKS 加連線：[前置技術 id, 衍生技術 id]（A 是 B 的基礎）
*/
window.TECH_DATA = {
  VERSION: "1.2.1",

  DOMAINS: { hw: "硬體", bridge: "介面層", sw: "軟體" },

  CATS: {
    semi:    { name: "半導體",     color: "#5aa9ff" },
    compute: { name: "運算晶片",   color: "#3ad1e0" },
    storage: { name: "儲存",       color: "#6fe3a8" },
    comm:    { name: "通訊",       color: "#8f9bff" },
    device:  { name: "裝置",       color: "#b99cff" },
    bridge:  { name: "介面層",     color: "#ffc857" },
    lang:    { name: "語言與工具", color: "#ff7b8a" },
    os:      { name: "作業系統",   color: "#ff9d4d" },
    net:     { name: "網路協定",   color: "#ef78d8" },
    app:     { name: "網路應用",   color: "#b5e853" },
    sec:     { name: "資訊安全",   color: "#ff5a5a" },
    data:    { name: "資料與雲端", color: "#5fd0b0" },
    ai:      { name: "人工智慧",   color: "#e0a3ff" }
  },

  NODES: [
    /* ---------- 硬體：半導體 ---------- */
    ["transistor", "電晶體", "hw", "semi", 1947, "取代真空管的半導體開關，是所有現代電子運算的最小單位。"],
    ["photolith", "光刻技術", "hw", "semi", 1957, "用光把電路圖案轉印到矽晶圓上，晶片能做得多小，主要取決於它。"],
    ["ic", "積體電路", "hw", "semi", 1958, "把許多電晶體做在同一片晶片上，讓電子設備得以微型化。"],
    ["mosfet", "MOSFET", "hw", "semi", 1959, "以電壓控制導通的場效電晶體，容易微縮，是現代晶片裡最主要的電晶體類型。"],
    ["cmos", "CMOS 製程", "hw", "semi", 1963, "低功耗的晶片製造方式，至今仍是處理器與記憶體的基礎。"],
    ["moore", "摩爾定律", "hw", "semi", 1965, "預言晶片上的電晶體數量約每兩年翻倍，長年主導半導體產業的節奏。"],
    ["finfet", "FinFET", "hw", "semi", 2011, "把電晶體做成立體鰭狀結構，解決平面電晶體在小尺寸下漏電的問題。"],
    ["euv", "EUV 極紫外光刻", "hw", "semi", 2019, "用極短波長的光刻出更細的電路，是先進製程（7nm 以下）的關鍵設備。"],

    /* ---------- 硬體：運算晶片 ---------- */
    ["cpu", "微處理器 CPU", "hw", "compute", 1971, "把運算核心整合進單一晶片（Intel 4004），開啟個人電腦時代。"],
    ["fpga", "FPGA", "hw", "compute", 1985, "可重新規劃電路的晶片，常用於原型驗證與特殊用途加速。"],
    ["gpu", "GPU", "hw", "compute", 1999, "原本為繪圖設計的大量平行運算晶片，後來成為 AI 訓練的主力。"],
    ["multicore", "多核心處理器", "hw", "compute", 2001, "時脈難以再提升後，改把多個核心放進同一顆晶片，靠平行運算提升效能。"],
    ["accel", "AI 加速器", "hw", "compute", 2016, "專為矩陣運算設計的晶片（例如 TPU），讓大型模型訓練更有效率。"],

    /* ---------- 硬體：儲存 ---------- */
    ["hdd", "硬碟", "hw", "storage", 1956, "以磁性碟片儲存資料，長年是主要的大容量儲存裝置。"],
    ["cache", "快取記憶體", "hw", "storage", 1968, "放在處理器旁的小而快的記憶體，減少處理器等待主記憶體的時間。"],
    ["dram", "DRAM 記憶體", "hw", "storage", 1970, "以電容儲存資料的主記憶體，速度快但斷電就消失。"],
    ["flash", "快閃記憶體", "hw", "storage", 1984, "斷電後資料仍保留的半導體記憶體（東芝發明），是 SSD 與隨身碟的基礎。"],
    ["ssd", "SSD", "hw", "storage", 1991, "以快閃記憶體組成的儲存裝置，沒有機械結構，速度遠勝硬碟。"],
    ["nvme", "NVMe", "hw", "storage", 2011, "專為快閃記憶體設計的傳輸協定，直接走 PCIe，大幅降低儲存延遲。"],
    ["hbm", "HBM 高頻寬記憶體", "hw", "storage", 2013, "把記憶體晶片垂直堆疊並貼近處理器，供應 AI 加速器所需的極高頻寬。"],

    /* ---------- 硬體：通訊 ---------- */
    ["laser", "雷射", "hw", "comm", 1960, "以受激輻射產生同調光，是光纖通訊與光碟機的核心元件。"],
    ["fiber", "光纖通訊", "hw", "comm", 1970, "用光脈衝傳輸資料，構成網際網路的骨幹。"],
    ["ethernet", "乙太網路", "hw", "comm", 1973, "區域網路的有線標準，至今仍是辦公室與機房的主流。"],
    ["gps", "GPS", "hw", "comm", 1978, "由衛星提供定位與授時的系統，是手機地圖與導航的基礎。"],
    ["gsm", "2G 行動通訊 GSM", "hw", "comm", 1991, "第一個全面數位化的行動通訊標準，讓手機普及並帶來簡訊。"],
    ["wifi", "Wi-Fi", "hw", "comm", 1997, "802.11 無線區域網路標準，讓裝置不用接線就能上網。"],
    ["bluetooth", "藍牙", "hw", "comm", 1999, "短距離低功耗無線通訊，用於耳機、鍵盤與穿戴裝置。"],
    ["lte", "4G LTE", "hw", "comm", 2009, "高速行動寬頻，讓手機上的影音串流與行動應用成為日常。"],
    ["fiveg", "5G", "hw", "comm", 2019, "更高頻寬、更低延遲的行動網路，支援大量連網裝置。"],

    /* ---------- 硬體：裝置 ---------- */
    ["touch", "觸控螢幕", "hw", "device", 1965, "直接用手指操作畫面，後來的多點觸控成為智慧型手機的核心互動。"],
    ["lcd", "液晶顯示器", "hw", "device", 1968, "以液晶控制光線的平面顯示，取代笨重的映像管。"],
    ["ccd", "影像感測器", "hw", "device", 1969, "把光轉成電訊號的晶片（CCD 與後來的 CMOS 感測器），是數位相機與手機鏡頭的核心。"],
    ["pc", "個人電腦", "hw", "device", 1981, "IBM PC 確立了開放架構，帶動軟體與周邊產業，電腦走進家庭與辦公室。"],
    ["iot", "物聯網 IoT", "hw", "device", 1999, "讓各種日常裝置連上網路並交換資料，這個詞由 Kevin Ashton 提出。"],
    ["smartphone", "智慧型手機", "hw", "device", 2007, "整合處理器、觸控螢幕、無線通訊與應用商店的行動運算裝置。"],
    ["tablet", "平板電腦", "hw", "device", 2010, "大螢幕觸控裝置，介於手機與筆電之間。"],
    ["wearable", "穿戴裝置", "hw", "device", 2015, "智慧手錶與手環等貼身裝置，整合感測器與藍牙。"],
    ["vr", "VR / AR 頭戴裝置", "hw", "device", 2016, "結合高解析顯示、感測器與 GPU 的沉浸式裝置。"],

    /* ---------- 介面層 ---------- */
    ["vonneumann", "馮紐曼架構", "bridge", "bridge", 1945, "程式與資料存放在同一個記憶體，由處理器依序取出執行，奠定現代電腦的基本結構。"],
    ["isa", "指令集架構", "bridge", "bridge", 1964, "定義軟體如何指揮處理器的合約（IBM System/360），讓硬體與軟體能各自演進。"],
    ["bios", "韌體 BIOS", "bridge", "bridge", 1975, "開機時最先執行的程式，負責初始化硬體，再把控制權交給作業系統。"],
    ["x86", "x86 架構", "bridge", "bridge", 1978, "Intel 8086 開始的指令集，因 IBM PC 而成為桌上型電腦與伺服器的主流。"],
    ["risc", "RISC 精簡指令集", "bridge", "bridge", 1980, "以較少、較簡單的指令換取更高效率的設計理念（Berkeley、Stanford）。"],
    ["driver", "驅動程式", "bridge", "bridge", 1980, "讓作業系統能操控特定硬體（顯示卡、網卡…）的軟體層。"],
    ["internet", "網際網路", "bridge", "bridge", 1983, "TCP/IP 全面啟用後，各種網路互連成全球網路，同時包含實體線路與協定。"],
    ["hdl", "硬體描述語言", "bridge", "bridge", 1984, "用程式碼描述電路（Verilog、VHDL），是設計晶片與 FPGA 的主要方式。"],
    ["arm", "ARM 架構", "bridge", "bridge", 1985, "以 RISC 為基礎、功耗很低的指令集，主宰手機與嵌入式處理器。"],
    ["usb", "USB", "bridge", "bridge", 1996, "統一周邊裝置連接的介面標準，取代各式雜亂的接口。"],
    ["virtualization", "虛擬化", "bridge", "bridge", 1999, "用軟體模擬出多台虛擬電腦，需要處理器的硬體支援才有效率。"],
    ["pcie", "PCIe", "bridge", "bridge", 2003, "主機板上連接顯示卡、SSD 等高速裝置的主要匯流排。"],
    ["uefi", "UEFI", "bridge", "bridge", 2005, "取代 BIOS 的現代韌體介面，支援大容量硬碟與安全開機。"],
    ["cuda", "CUDA", "bridge", "bridge", 2007, "NVIDIA 的平行運算平台，讓開發者能把 GPU 用在一般運算而不只是繪圖。"],
    ["riscv", "RISC-V", "bridge", "bridge", 2010, "開放、免授權費的指令集，讓任何人都能設計自己的處理器。"],

    /* ---------- 軟體：語言與工具 ---------- */
    ["assembly", "組合語言", "sw", "lang", 1949, "用助記符號取代機器碼，是最貼近硬體的程式語言。"],
    ["compiler", "編譯器", "sw", "lang", 1952, "把高階語言翻譯成機器碼的程式，讓人不必再手寫組合語言。"],
    ["fortran", "Fortran", "sw", "lang", 1957, "第一個被廣泛使用的高階語言，主要用於科學計算。"],
    ["lisp", "Lisp", "sw", "lang", 1958, "以串列與函數為核心的語言，開創垃圾回收與函數式程式設計，長期是 AI 研究的語言。"],
    ["cobol", "COBOL", "sw", "lang", 1959, "為商業資料處理設計的語言，至今仍運行在許多銀行與政府系統。"],
    ["gc", "垃圾回收", "sw", "lang", 1960, "自動回收不再使用的記憶體，最早出現在 Lisp，後來成為 Java、Go 等語言的標配。"],
    ["basic", "BASIC", "sw", "lang", 1964, "為初學者設計的簡單語言，帶動早期個人電腦的程式設計風氣。"],
    ["simula", "Simula", "sw", "lang", 1967, "第一個提出類別與物件的語言，是物件導向程式設計的起源。"],
    ["c", "C 語言", "sw", "lang", 1972, "兼具高階語法與硬體控制能力，是作業系統與嵌入式系統的主力語言。"],
    ["smalltalk", "Smalltalk", "sw", "lang", 1972, "純粹的物件導向語言，也是圖形使用者介面的搖籃（Xerox PARC）。"],
    ["cpp", "C++", "sw", "lang", 1985, "在 C 之上加入物件導向，常用於遊戲、瀏覽器與高效能系統。"],
    ["python", "Python", "sw", "lang", 1991, "語法簡潔易讀，是資料科學與機器學習最常用的語言。"],
    ["java", "Java", "sw", "lang", 1995, "以虛擬機器達成「一次撰寫，到處執行」，長期主導企業應用。"],
    ["js", "JavaScript", "sw", "lang", 1995, "瀏覽器內建的語言，讓網頁具備互動能力。"],
    ["php", "PHP", "sw", "lang", 1995, "專為網頁後端設計的語言，早期支撐了大量網站。"],
    ["csharp", "C#", "sw", "lang", 2000, "微軟推出的物件導向語言，常用於 Windows 應用與遊戲開發。"],
    ["llvm", "LLVM", "sw", "lang", 2003, "模組化的編譯器基礎架構，Rust、Swift 等新語言都建在它之上。"],
    ["git", "Git", "sw", "lang", 2005, "Linus Torvalds 為 Linux 開發的分散式版本控制系統，現在幾乎是軟體開發的標準。"],
    ["opensource", "開放原始碼", "sw", "lang", 1998, "公開原始碼、允許自由修改與散布的開發模式，是 Linux 與許多現代基礎設施的根基。"],
    ["github", "GitHub", "sw", "lang", 2008, "以 Git 為核心的程式碼代管與協作平台，讓開源協作變得容易。"],
    ["nodejs", "Node.js", "sw", "lang", 2009, "讓 JavaScript 能在伺服器端執行，使前後端可以使用同一種語言。"],
    ["go", "Go", "sw", "lang", 2009, "Google 設計的簡潔語言，內建併發，常用於雲端與後端服務。"],
    ["rust", "Rust", "sw", "lang", 2010, "不靠垃圾回收也能保證記憶體安全的系統語言。"],
    ["kotlin", "Kotlin", "sw", "lang", 2011, "與 Java 相容的現代語言，是 Android 開發的主流選擇。"],
    ["ts", "TypeScript", "sw", "lang", 2012, "在 JavaScript 上加入型別檢查，讓大型前端專案更好維護。"],
    ["react", "React", "sw", "lang", 2013, "以元件為單位的前端框架，改變了建構網頁介面的方式。"],
    ["swift", "Swift", "sw", "lang", 2014, "Apple 推出，用來取代 Objective-C 開發 iOS 與 macOS 應用。"],
    ["wasm", "WebAssembly", "sw", "lang", 2017, "讓 C++、Rust 等語言編譯後能在瀏覽器高效執行的格式。"],

    /* ---------- 軟體：作業系統 ---------- */
    ["timesharing", "分時系統", "sw", "os", 1961, "讓多位使用者同時共用一台電腦（CTSS），是多人多工作業系統的起點。"],
    ["vmem", "虛擬記憶體", "sw", "os", 1962, "讓程式以為自己擁有連續的大記憶體，由系統在記憶體與硬碟間搬移。"],
    ["multics", "Multics", "sw", "os", 1965, "早期野心很大的分時系統，Unix 的設計者從中汲取經驗並刻意簡化。"],
    ["unix", "Unix", "sw", "os", 1969, "以 C 重寫的多工作業系統，奠定現代作業系統的設計思想。"],
    ["gui", "圖形使用者介面", "sw", "os", 1973, "視窗、圖示與滑鼠的操作方式（Xerox Alto），後來被 Mac 與 Windows 普及。"],
    ["bsd", "BSD", "sw", "os", 1977, "柏克萊的 Unix 衍生版本，貢獻了 TCP/IP 的實作，也是 macOS 與 iOS 的血緣來源之一。"],
    ["msdos", "MS-DOS", "sw", "os", 1981, "IBM PC 上的指令列作業系統，讓微軟站穩軟體市場。"],
    ["gnu", "GNU 專案", "sw", "os", 1983, "Richard Stallman 發起的自由軟體計畫，提供編譯器與各種工具，與 Linux 核心合起來成為完整系統。"],
    ["macos", "Macintosh / macOS", "sw", "os", 1984, "把圖形介面帶給一般消費者的電腦，後來演進為以 Unix 為基礎的 macOS。"],
    ["windows", "Windows", "sw", "os", 1985, "把圖形介面帶進一般桌上型電腦的作業系統。"],
    ["linux", "Linux", "sw", "os", 1991, "開源的類 Unix 核心，撐起伺服器、雲端與 Android。"],
    ["ios", "iOS", "sw", "os", 2007, "Apple 的行動作業系統，以觸控介面與 App Store 重新定義手機。"],
    ["android", "Android", "sw", "os", 2008, "以 Linux 核心為基礎的行動作業系統，是全球最普及的手機系統。"],

    /* ---------- 軟體：網路協定 ---------- */
    ["arpanet", "ARPANET", "sw", "net", 1969, "美國國防部資助的封包交換網路，是網際網路的前身。"],
    ["email", "電子郵件", "sw", "net", 1971, "在網路上的使用者之間傳遞訊息，是早期網路最受歡迎的應用（Ray Tomlinson 引入 @）。"],
    ["tcp", "TCP/IP", "sw", "net", 1974, "定義封包如何可靠傳送與定址的協定，是網際網路的共同語言。"],
    ["dns", "DNS", "sw", "net", 1983, "把好記的網域名稱轉成 IP 位址，像是網際網路的電話簿。"],
    ["www", "全球資訊網", "sw", "net", 1989, "以超連結串起文件的系統（Tim Berners-Lee），讓網路普及到一般人。"],
    ["http", "HTTP", "sw", "net", 1991, "網頁瀏覽器與伺服器之間傳輸資料的應用層協定。"],
    ["html", "HTML", "sw", "net", 1991, "描述網頁結構的標記語言。"],
    ["browser", "瀏覽器", "sw", "net", 1993, "從 Mosaic 開始，把網頁以圖形方式呈現的軟體。"],
    ["css", "CSS", "sw", "net", 1996, "描述網頁外觀的樣式語言，讓內容與呈現分離。"],
    ["search", "搜尋引擎", "sw", "net", 1998, "Google 的 PageRank 以連結關係排序網頁，讓龐大的網路變得可用。"],
    ["cdn", "CDN", "sw", "net", 1998, "把內容複製到世界各地的節點，讓使用者從最近的地方取得資料。"],
    ["p2p", "點對點網路 P2P", "sw", "net", 1999, "裝置之間直接交換資料而不靠中央伺服器（Napster、BitTorrent）。"],
    ["rest", "REST API", "sw", "net", 2000, "以 HTTP 為基礎的 Web 服務設計風格，成為前後端與各服務之間的通用語言。"],
    ["websocket", "WebSocket", "sw", "net", 2011, "讓瀏覽器與伺服器保持雙向連線，支援即時聊天與推播。"],

    /* ---------- 軟體：網路應用 ---------- */
    ["ecommerce", "電子商務", "sw", "app", 1995, "在網路上買賣商品（Amazon、eBay 皆創立於 1994 至 1995 年），仰賴瀏覽器與加密連線。"],
    ["social", "社群媒體", "sw", "app", 2004, "以人際關係為核心的網路平台，改變了資訊傳播與人際互動方式。"],
    ["streaming", "串流影音", "sw", "app", 2005, "邊下載邊播放影音（YouTube），依賴寬頻、CDN 與影音壓縮。"],
    ["appstore", "App Store", "sw", "app", 2008, "集中發行與購買手機應用的商店，建立起行動 App 經濟。"],

    /* ---------- 軟體：資訊安全 ---------- */
    ["pubkey", "公開金鑰密碼學", "sw", "sec", 1976, "加密與解密使用不同金鑰，讓陌生人也能安全通訊。"],
    ["dh", "Diffie-Hellman 金鑰交換", "sw", "sec", 1976, "讓雙方在公開頻道上協商出只有彼此知道的祕密金鑰。"],
    ["rsa", "RSA", "sw", "sec", 1977, "第一個實用的公開金鑰加密與簽章演算法，基於大數分解的困難性。"],
    ["ecc", "橢圓曲線密碼學", "sw", "sec", 1985, "以較短的金鑰提供同等安全性，適合手機與嵌入式裝置。"],
    ["pki", "數位憑證 PKI", "sw", "sec", 1988, "由憑證機構簽發憑證，證明某把公開金鑰確實屬於某個網站或個人（X.509）。"],
    ["firewall", "防火牆", "sw", "sec", 1988, "依規則過濾網路流量，區隔內部與外部網路。"],
    ["hash", "密碼學雜湊", "sw", "sec", 1991, "把任意資料壓成固定長度的指紋（MD5、SHA 系列），用於驗證完整性與簽章。"],
    ["pgp", "PGP", "sw", "sec", 1991, "普及的電子郵件與檔案加密工具，讓一般人也能使用公開金鑰加密。"],
    ["ssh", "SSH", "sw", "sec", 1995, "加密的遠端登入協定，取代明文傳輸的 Telnet。"],
    ["tls", "TLS / SSL", "sw", "sec", 1995, "為網路連線加密與驗證身分，也就是網址前面的 HTTPS。"],
    ["aes", "AES", "sw", "sec", 2001, "取代 DES 的對稱式加密標準，幾乎所有加密連線與儲存都在使用。"],
    ["blockchain", "區塊鏈", "sw", "sec", 2008, "以雜湊串接的分散式帳本，不需中央機構就能讓大家對紀錄達成共識。"],
    ["bitcoin", "比特幣", "sw", "sec", 2009, "第一個實用的區塊鏈應用，結合公開金鑰簽章、雜湊與工作量證明。"],
    ["smartcontract", "智慧合約", "sw", "sec", 2015, "在區塊鏈上自動執行的程式（以太坊），延伸出去中心化應用。"],

    /* ---------- 軟體：資料與雲端 ---------- */
    ["database", "關聯式資料庫", "sw", "data", 1970, "以表格管理結構化資料，是大多數應用的資料核心。"],
    ["sql", "SQL", "sw", "data", 1974, "操作關聯式資料庫的標準查詢語言。"],
    ["datawarehouse", "資料倉儲", "sw", "data", 1988, "整合多個來源、專供分析查詢的資料庫架構。"],
    ["saas", "SaaS", "sw", "data", 1999, "透過瀏覽器租用軟體服務而不是自己安裝（Salesforce 是代表）。"],
    ["mapreduce", "MapReduce", "sw", "data", 2004, "Google 提出的大規模平行處理模型，讓一般伺服器叢集就能處理海量資料。"],
    ["cloud", "雲端運算", "sw", "data", 2006, "把運算與儲存當成可租用的服務，以 AWS 為代表。"],
    ["hadoop", "Hadoop", "sw", "data", 2006, "MapReduce 與分散式檔案系統的開源實作，帶動大數據技術的普及。"],
    ["nosql", "NoSQL", "sw", "data", 2009, "放棄固定表格結構以換取擴充性與彈性的各類資料庫（如 MongoDB、Redis）。"],
    ["devops", "DevOps", "sw", "data", 2009, "讓開發與維運協作、自動化部署與監控的文化與實務。"],
    ["microservice", "微服務", "sw", "data", 2011, "把大型應用拆成多個小型服務，各自獨立部署與擴充。"],
    ["container", "容器 Docker", "sw", "data", 2013, "把應用程式與其環境封裝在一起，讓部署在任何地方都一致。"],
    ["k8s", "Kubernetes", "sw", "data", 2014, "自動管理大量容器的部署、擴充與修復的平台，源自 Google 內部經驗。"],
    ["serverless", "無伺服器運算", "sw", "data", 2014, "只寫函式、由雲端平台負責配置資源與擴縮，按使用量計費（如 AWS Lambda）。"],

    /* ---------- 軟體：人工智慧 ---------- */
    ["turing", "圖靈測試", "sw", "ai", 1950, "圖靈提出的判斷機器是否具備智慧的思想實驗，開啟人工智慧的哲學討論。"],
    ["dartmouth", "人工智慧誕生", "sw", "ai", 1956, "達特茅斯會議正式提出「人工智慧」一詞，確立這個研究領域。"],
    ["nn", "神經網路", "sw", "ai", 1958, "模仿神經元的運算模型（感知器），是深度學習的起點。"],
    ["ml", "機器學習", "sw", "ai", 1959, "讓電腦從資料中學習規律，而不是靠人手寫規則（Arthur Samuel 的西洋棋程式）。"],
    ["expert", "專家系統", "sw", "ai", 1972, "把專家知識寫成規則讓電腦推論（如 MYCIN），是 1980 年代 AI 的主流。"],
    ["backprop", "反向傳播", "sw", "ai", 1986, "有效率地訓練多層神經網路的演算法。"],
    ["rnn", "循環神經網路 RNN", "sw", "ai", 1986, "讓輸出回饋給自己，能處理有順序的資料，例如語音與文字。"],
    ["cnn", "卷積神經網路 CNN", "sw", "ai", 1989, "以卷積核擷取局部特徵，是影像辨識的主力（LeNet）。"],
    ["rl", "強化學習", "sw", "ai", 1989, "讓程式在與環境互動中依獎勵學習策略（Q-learning），後來用在遊戲與機器人。"],
    ["svm", "支援向量機", "sw", "ai", 1995, "在深度學習興起前最受歡迎的分類演算法之一。"],
    ["deepblue", "深藍 Deep Blue", "sw", "ai", 1997, "IBM 的西洋棋電腦擊敗世界冠軍，展示大量搜尋加專用硬體的力量。"],
    ["lstm", "LSTM", "sw", "ai", 1997, "以閘門機制解決 RNN 記不住長距離資訊的問題。"],
    ["imagenet", "ImageNet", "sw", "ai", 2009, "含上百萬張標註圖片的資料集，提供了訓練深層模型所需的大量資料。"],
    ["dl", "深度學習", "sw", "ai", 2012, "以 GPU 訓練深層網路，AlexNet 在 ImageNet 競賽大幅領先，引爆深度學習熱潮。"],
    ["word2vec", "詞向量 Word2Vec", "sw", "ai", 2013, "把詞映射成向量，語意相近的詞距離也近，是自然語言處理的轉捩點。"],
    ["vae", "變分自編碼器 VAE", "sw", "ai", 2013, "學習資料的壓縮表示並能生成新樣本的生成模型。"],
    ["gan", "生成對抗網路 GAN", "sw", "ai", 2014, "讓生成器與判別器互相對抗，能產生逼真的圖片。"],
    ["gru", "GRU", "sw", "ai", 2014, "LSTM 的簡化版，參數較少、訓練較快。"],
    ["seq2seq", "Seq2Seq", "sw", "ai", 2014, "編碼器加解碼器架構，開啟神經網路機器翻譯的時代。"],
    ["attention", "注意力機制", "sw", "ai", 2014, "讓模型自己決定該看輸入的哪一部分，直接催生 Transformer。"],
    ["resnet", "ResNet", "sw", "ai", 2015, "以殘差連接讓網路能堆到上百層而不退化，成為視覺模型的基本骨幹。"],
    ["alphago", "AlphaGo", "sw", "ai", 2016, "結合深度學習、強化學習與搜尋，擊敗圍棋世界冠軍。"],
    ["transformer", "Transformer", "sw", "ai", 2017, "以注意力機制處理序列的架構，成為現代語言模型的基礎。"],
    ["bert", "BERT", "sw", "ai", 2018, "雙向預訓練的 Transformer 編碼器，在各種語言理解任務上刷新紀錄。"],
    ["gpt", "GPT", "sw", "ai", 2018, "以 Transformer 解碼器做自回歸預訓練，是生成式語言模型的起點。"],
    ["diffusion", "擴散模型", "sw", "ai", 2020, "從雜訊逐步還原成圖像的生成方法，成為影像生成的主流。"],
    ["vit", "Vision Transformer", "sw", "ai", 2020, "把圖片切成小塊交給 Transformer 處理，挑戰 CNN 在視覺領域的地位。"],
    ["llm", "大型語言模型", "sw", "ai", 2020, "用海量文字訓練、參數規模巨大的語言模型（以 GPT-3 為代表），只看少量範例就能完成任務。"],
    ["rag", "檢索增強生成 RAG", "sw", "ai", 2020, "生成前先檢索外部資料並放進提示，減少幻覺並讓模型使用最新知識。"],
    ["lora", "LoRA 微調", "sw", "ai", 2021, "只訓練少量額外參數就能客製大型模型，大幅降低微調成本。"],
    ["multimodal", "多模態模型", "sw", "ai", 2021, "同時理解文字、圖像等多種輸入（如 CLIP），串起視覺與語言。"],
    ["rlhf", "RLHF 人類回饋強化學習", "sw", "ai", 2022, "用人類偏好訓練模型，使輸出更有幫助、更安全。"],
    ["chatgpt", "ChatGPT", "sw", "ai", 2022, "對話式的大型語言模型產品，讓一般大眾直接體驗生成式 AI。"],
    ["sd", "Stable Diffusion", "sw", "ai", 2022, "開源的文字生成圖像擴散模型，讓個人電腦也能生成圖片。"],
    ["agent", "AI 代理 Agent", "sw", "ai", 2023, "讓語言模型呼叫工具、規劃步驟並完成多步驟任務的系統。"]
  ],

  // [前置技術, 衍生技術]（A 是 B 的基礎）
  LINKS: [
    /* 半導體 */
    ["transistor", "mosfet"], ["transistor", "ic"], ["photolith", "ic"], ["ic", "cmos"], ["mosfet", "cmos"],
    ["ic", "moore"], ["moore", "finfet"], ["cmos", "finfet"], ["photolith", "euv"], ["moore", "euv"],

    /* 運算晶片 */
    ["vonneumann", "isa"], ["isa", "cpu"], ["cmos", "cpu"], ["ic", "cpu"], ["cpu", "multicore"],
    ["cmos", "gpu"], ["cpu", "gpu"], ["gpu", "accel"], ["hbm", "accel"], ["hdl", "fpga"], ["ic", "fpga"],

    /* 儲存 */
    ["ic", "dram"], ["ic", "cache"], ["mosfet", "flash"], ["flash", "ssd"], ["ssd", "nvme"], ["pcie", "nvme"],
    ["dram", "hbm"], ["hdd", "vmem"],

    /* 通訊 */
    ["laser", "fiber"], ["fiber", "internet"], ["ethernet", "internet"], ["ethernet", "wifi"],
    ["gsm", "lte"], ["lte", "fiveg"], ["gsm", "smartphone"], ["wifi", "smartphone"],
    ["bluetooth", "smartphone"], ["bluetooth", "wearable"], ["gps", "smartphone"],
    ["wifi", "iot"], ["bluetooth", "iot"],

    /* 裝置 */
    ["ic", "ccd"], ["ccd", "smartphone"], ["lcd", "smartphone"], ["touch", "smartphone"], ["cpu", "smartphone"],
    ["flash", "smartphone"], ["arm", "smartphone"], ["smartphone", "tablet"], ["lcd", "tablet"], ["touch", "tablet"],
    ["smartphone", "wearable"], ["lcd", "vr"], ["gpu", "vr"],
    ["cpu", "pc"], ["dram", "pc"], ["x86", "pc"], ["hdd", "pc"], ["pc", "usb"], ["pc", "pcie"],

    /* 介面層 */
    ["isa", "x86"], ["isa", "risc"], ["risc", "arm"], ["risc", "riscv"], ["vonneumann", "assembly"],
    ["cpu", "bios"], ["bios", "uefi"], ["bios", "msdos"], ["bios", "linux"],
    ["cpu", "driver"], ["driver", "linux"], ["driver", "windows"],
    ["gpu", "cuda"], ["cuda", "dl"],
    ["cpu", "virtualization"], ["virtualization", "cloud"], ["virtualization", "container"],
    ["arm", "ios"], ["arm", "android"],

    /* 語言與工具 */
    ["assembly", "compiler"], ["compiler", "fortran"], ["compiler", "cobol"], ["compiler", "c"], ["compiler", "llvm"],
    ["fortran", "basic"], ["lisp", "gc"], ["gc", "java"], ["gc", "go"],
    ["simula", "smalltalk"], ["simula", "cpp"], ["smalltalk", "java"], ["c", "cpp"], ["cpp", "java"],
    ["cpp", "csharp"], ["java", "csharp"], ["java", "kotlin"], ["java", "android"],
    ["c", "python"], ["c", "go"], ["cpp", "rust"], ["llvm", "rust"], ["llvm", "swift"],
    ["browser", "js"], ["js", "ts"], ["js", "nodejs"], ["js", "react"], ["js", "wasm"], ["html", "php"],
    ["linux", "git"], ["git", "github"], ["gnu", "opensource"], ["opensource", "github"],

    /* 作業系統 */
    ["timesharing", "multics"], ["vmem", "multics"], ["multics", "unix"], ["vmem", "unix"], ["hdd", "unix"],
    ["assembly", "unix"], ["unix", "bsd"], ["unix", "gnu"], ["unix", "linux"], ["gnu", "linux"], ["c", "linux"],
    ["linux", "android"], ["smartphone", "android"], ["smartphone", "ios"], ["macos", "ios"], ["bsd", "macos"],
    ["smalltalk", "gui"], ["gui", "macos"], ["gui", "windows"], ["msdos", "windows"],

    /* 網路協定 */
    ["arpanet", "tcp"], ["arpanet", "email"], ["tcp", "internet"], ["tcp", "dns"],
    ["internet", "www"], ["dns", "www"], ["www", "http"], ["www", "html"], ["http", "browser"], ["html", "browser"],
    ["html", "css"], ["http", "rest"], ["http", "websocket"], ["www", "search"],
    ["internet", "cdn"], ["http", "cdn"], ["internet", "p2p"],

    /* 網路應用 */
    ["www", "ecommerce"], ["tls", "ecommerce"], ["www", "social"],
    ["www", "streaming"], ["cdn", "streaming"], ["ios", "appstore"], ["android", "appstore"],

    /* 資訊安全 */
    ["pubkey", "dh"], ["pubkey", "rsa"], ["pubkey", "ecc"], ["pubkey", "pgp"], ["rsa", "pgp"], ["hash", "pgp"],
    ["rsa", "pki"], ["pki", "tls"], ["dh", "tls"], ["rsa", "tls"], ["ecc", "tls"], ["aes", "tls"],
    ["tcp", "tls"], ["http", "tls"], ["rsa", "ssh"], ["tcp", "ssh"], ["tcp", "firewall"],
    ["hash", "blockchain"], ["pubkey", "blockchain"], ["p2p", "blockchain"], ["blockchain", "bitcoin"],
    ["ecc", "bitcoin"], ["hash", "bitcoin"], ["blockchain", "smartcontract"], ["bitcoin", "smartcontract"],

    /* 資料與雲端 */
    ["hdd", "database"], ["database", "sql"], ["database", "datawarehouse"], ["sql", "datawarehouse"], ["database", "nosql"],
    ["search", "mapreduce"], ["mapreduce", "hadoop"], ["internet", "saas"], ["browser", "saas"], ["saas", "cloud"],
    ["database", "cloud"], ["internet", "cloud"], ["ssd", "cloud"], ["cloud", "serverless"], ["cloud", "microservice"],
    ["rest", "microservice"], ["cloud", "devops"], ["git", "devops"], ["linux", "container"], ["go", "container"],
    ["container", "k8s"], ["go", "k8s"],

    /* 人工智慧 */
    ["turing", "dartmouth"], ["dartmouth", "nn"], ["dartmouth", "ml"], ["dartmouth", "lisp"], ["dartmouth", "expert"],
    ["dartmouth", "deepblue"], ["lisp", "expert"], ["ml", "svm"], ["ml", "rl"],
    ["nn", "backprop"], ["nn", "cnn"], ["backprop", "cnn"], ["nn", "rnn"], ["backprop", "rnn"],
    ["rnn", "lstm"], ["lstm", "gru"], ["lstm", "seq2seq"], ["word2vec", "seq2seq"], ["seq2seq", "attention"],
    ["attention", "transformer"], ["internet", "imagenet"], ["imagenet", "dl"], ["cnn", "dl"], ["backprop", "dl"],
    ["gpu", "dl"], ["python", "dl"], ["dl", "accel"], ["dl", "word2vec"], ["dl", "vae"], ["dl", "gan"],
    ["dl", "resnet"], ["cnn", "resnet"], ["resnet", "vit"], ["transformer", "vit"],
    ["dl", "diffusion"], ["vae", "sd"], ["diffusion", "sd"], ["multimodal", "sd"],
    ["rl", "alphago"], ["dl", "alphago"], ["rl", "rlhf"],
    ["transformer", "bert"], ["transformer", "gpt"], ["bert", "llm"], ["gpt", "llm"], ["transformer", "llm"],
    ["accel", "llm"], ["cloud", "llm"], ["internet", "llm"],
    ["llm", "rag"], ["search", "rag"], ["llm", "lora"], ["llm", "rlhf"], ["rlhf", "chatgpt"], ["llm", "chatgpt"],
    ["llm", "multimodal"], ["vit", "multimodal"], ["llm", "agent"], ["chatgpt", "agent"], ["rag", "agent"]
  ]
};
