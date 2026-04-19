// A. 基礎專案管理（25 題 情境題版）
const questions = [
  {
    id: "A-001",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "開發手法選擇",
    difficulty: "medium",
    question:
      "某金融機構要開發「監管報表自動化系統」，金管會已公告報表格式與欄位，未來兩年內不會變動；IT 主管希望快速導入並嚴格控管預算與時程。專案經理被要求選擇開發手法，最適合的選擇為？",
    options: {
      A: "預測式（瀑布），在規劃期完整定義規格後依序執行",
      B: "調適式（敏捷），每兩週一個 Sprint 交付可用版本",
      C: "迭代式，每輪都產出整份草稿再優化",
      D: "混合式，硬體預測式、軟體敏捷式",
    },
    answer: "A",
    explanation: {
      why: "法規明確不變、IT 要求嚴控預算時程 → 典型預測式。規格穩定的專案用敏捷反而浪費溝通成本。",
      others: {
        B: "規格已明確，沒必要迭代探索需求。",
        C: "迭代適合需求模糊要反覆釐清，與本情境不符。",
        D: "本案沒有硬體成分，混合式無意義。",
      },
      keyPoint: "需求穩定且法規明確 → 預測式。裁適原則看脈絡不是看流行。",
    },
  },
  {
    id: "A-002",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "開發手法選擇",
    difficulty: "medium",
    question:
      "新創公司要推出 AI 對話客服，客戶需求尚未驗證、競爭者快速迭代、行銷希望每月都能 demo 新功能給潛在客戶。PM 建議的開發手法應該是？",
    options: {
      A: "預測式，一次規劃完所有功能再開發",
      B: "調適式（敏捷），以短迭代搭配客戶回饋持續調整",
      C: "瀑布式，嚴格控管階段交界",
      D: "完全不要規劃，看客戶每天說什麼就做什麼",
    },
    answer: "B",
    explanation: {
      why: "需求未驗證 + 每月要 demo + 競爭快 → 典型敏捷適用場景，短迭代取得回饋最能降低風險。",
      others: {
        A: "規格不明確硬走預測式會在後段大量返工。",
        C: "瀑布式與預測式同義，不適合。",
        D: "敏捷仍需計畫，只是輕量滾動，不是沒計畫。",
      },
      keyPoint: "需求模糊 + 要快速回饋 → 敏捷；敏捷 ≠ 沒計畫。",
    },
  },
  {
    id: "A-003",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "迭代 vs 增量",
    difficulty: "hard",
    question:
      "某品牌電商網站改版，UX 設計師先畫出首頁、商品頁、結帳頁的低保真線框圖給客戶看整體流程，第二輪再鋪視覺設計，第三輪加入動態互動細節。每一輪都是整份稿，讓客戶從粗到細確認方向。這最貼近哪一種交付模式？",
    options: {
      A: "迭代式（Iterative），反覆完善整份產出",
      B: "增量式（Incremental），分頁逐張交付完成品",
      C: "預測式（Predictive），一次交付最終版",
      D: "瀑布式，完成所有設計後再交付",
    },
    answer: "A",
    explanation: {
      why: "每輪都是整份稿由粗到細優化 = 迭代式。核心在「反覆處理同一個產出物，逐輪完善」。",
      others: {
        B: "增量會是「先完整做好首頁交付→再做商品頁交付」一頁一頁完成。",
        C: "預測式不會分輪給客戶看中間版本。",
        D: "瀑布式 = 預測式。",
      },
      keyPoint: "迭代 = 整份反覆完善；增量 = 切塊各自完成交付。",
    },
  },
  {
    id: "A-004",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "迭代 vs 增量",
    difficulty: "hard",
    question:
      "房地產商要推出豪宅社區，為了加速回收資金，選擇先把 A 棟完全蓋好並交屋，住戶入住後再動工 B 棟、最後 C 棟。這種策略在開發手法上最接近？",
    options: {
      A: "迭代式，反覆優化整個社區設計",
      B: "增量式，分棟完整交付讓客戶提早使用",
      C: "混合式，硬體敏捷、軟體預測式",
      D: "預測式，等所有棟都蓋完再一次交屋",
    },
    answer: "B",
    explanation: {
      why: "一棟一棟完整交付、讓住戶提早入住 → 增量式的精神。重點在「分塊交付完成品、提早實現價值」。",
      others: {
        A: "迭代式不會拆成三棟分別完工，而是整體一版一版改。",
        C: "本案沒有軟體部分。",
        D: "題目明顯不是一次交屋。",
      },
      keyPoint: "增量目的 = 提早分批交付實現價值與現金流。",
    },
  },
  {
    id: "A-005",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "混合式",
    difficulty: "medium",
    question:
      "某科技公司承接「智慧工廠」專案，包含產線硬體改造與 MES 軟體系統開發。工廠總經理要求硬體配合產能排程必須分階段進場、依序施工；但 MES 系統功能希望能邊做邊讓產線人員回饋調整。專案經理應如何規劃開發手法？",
    options: {
      A: "全案敏捷式，每兩週交付",
      B: "全案預測式，嚴格按工程圖施作",
      C: "硬體預測式、MES 系統調適式的混合式",
      D: "等硬體完成後再啟動 MES 開發",
    },
    answer: "C",
    explanation: {
      why: "硬體特性穩定需按計畫施作 + 軟體需求會調整 → 典型「你儂我儂」混合式。",
      others: {
        A: "硬體不可能敏捷施作，產能排程不允許。",
        B: "MES 需要產線回饋調整，預測式會僵化。",
        D: "拖延會讓 MES 上線時機落後，不符合平行推進原則。",
      },
      keyPoint: "產品含穩定 + 變動兩種特性 → 混合式平行推進。",
    },
  },
  {
    id: "A-006",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART-Specific",
    difficulty: "medium",
    question:
      "贊助者寫給 PM 的目標草稿：「我希望這個專案能做出一個讓客戶會推薦的好產品。」PM 認為這個寫法在 SMART 上最欠缺哪一面向，應該怎麼補？",
    options: {
      A: "欠缺 Specific（具體），應明確寫出產品型態、規格與範圍",
      B: "欠缺 Achievable（可達成），應補上團隊能力佐證",
      C: "欠缺 Relevant（相關），應寫明對齊公司策略",
      D: "欠缺 Time-bound（有時限），應補上截止日期",
    },
    answer: "A",
    explanation: {
      why: "「讓客戶會推薦的好產品」完全沒講產品是什麼，最缺的是具體化（Specific）產出物樣貌。",
      others: {
        B: "能力佐證不是目前最欠缺的。",
        C: "可能缺但非第一缺。",
        D: "可能缺但沒具體產出討論時限也沒意義。",
      },
      keyPoint: "Specific 答「要做什麼東西出來」；沒講產出就是最缺 S。",
    },
  },
  {
    id: "A-007",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART-Measurable",
    difficulty: "medium",
    question:
      "PM 正在跟贊助者討論新零售 POS 系統的專案目標。贊助者說「希望能提升結帳效率」。PM 問贊助者要如何衡量「效率提升」，才能在專案結束時判定成敗。這個問題是在補強 SMART 哪一面向？",
    options: {
      A: "Specific",
      B: "Measurable",
      C: "Achievable",
      D: "Relevant",
    },
    answer: "B",
    explanation: {
      why: "要「如何衡量」是在把模糊描述轉為具體 KPI（如：單筆結帳時間 ≤ 20 秒），對應 Measurable。",
      others: {
        A: "Specific 是產出物樣貌，這題問衡量方式。",
        C: "Achievable 是資源能力問題。",
        D: "Relevant 是策略對齊。",
      },
      keyPoint: "「怎麼量 / 拿什麼尺」= Measurable。",
    },
  },
  {
    id: "A-008",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART-Achievable",
    difficulty: "medium",
    question:
      "贊助者看完 PM 提案後問：「以我們目前的工程師人力和時程，真的能做到這個規模嗎？」PM 在準備回答時應聚焦補強哪一項？",
    options: {
      A: "Specific 具體",
      B: "Measurable 可衡量",
      C: "Achievable 可達成",
      D: "Time-bound 有時限",
    },
    answer: "C",
    explanation: {
      why: "贊助者在挑戰資源與能力是否足以達成，PM 應佐證團隊能力、資源配置 = Achievable。",
      others: {
        A: "具體是規格描述。",
        B: "可衡量是 KPI 設計。",
        D: "時限是截止日。",
      },
      keyPoint: "「做不做得到」問資源能力 → Achievable。",
    },
  },
  {
    id: "A-009",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART-Relevant",
    difficulty: "medium",
    question:
      "CEO 在專案啟動會議上問 PM：「這個專案為什麼值得我們今年投入？它跟公司今年的策略有什麼關係？」PM 該從哪個面向回答？",
    options: {
      A: "說明產品規格有多具體（Specific）",
      B: "列出所有 KPI 數字（Measurable）",
      C: "連結到今年度公司策略或年度目標（Relevant）",
      D: "強調團隊過去經驗（Achievable）",
    },
    answer: "C",
    explanation: {
      why: "CEO 問的是「和公司策略的關係」，直指 Relevant（對齊組織策略）。",
      others: {
        A: "規格不是策略連結。",
        B: "KPI 是衡量不是策略意義。",
        D: "能力不回答策略問題。",
      },
      keyPoint: "對齊公司策略/年度目標 → Relevant。",
    },
  },
  {
    id: "A-010",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART 區辨",
    difficulty: "hard",
    question:
      "專案章程草稿寫著：「本專案將在台北 101 大樓 35 樓打造一間 300 坪的會員制私廚餐廳，預計每月接待 500 位會員，於 2027/3/31 前開幕，以實現公司高端品牌策略。」這段敘述同時符合 SMART 的哪些面向？",
    options: {
      A: "只有 Specific 與 Measurable",
      B: "Specific、Measurable、Time-bound 三項",
      C: "Specific、Measurable、Relevant、Time-bound 四項",
      D: "完整五項 SMART",
    },
    answer: "C",
    explanation: {
      why: "產出清楚（S）、有數字（M）、有時限（T）、對齊高端策略（R），但沒提團隊能力佐證所以缺 A。",
      others: {
        A: "漏掉時限與策略。",
        B: "漏掉策略對齊。",
        D: "沒有資源/能力佐證，不能算 Achievable 齊備。",
      },
      keyPoint: "SMART 五項要分別檢視，沒提到能力就是沒 A。",
    },
  },
  {
    id: "A-011",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "PM vs PO 分工",
    difficulty: "medium",
    question:
      "混合式專案中，硬體按工程圖施作、APP 用 Scrum 開發。某天工地進度延遲會影響 APP 上線時程，同時 APP Backlog 也有新需求要排序。最符合角色分工的處理是？",
    options: {
      A: "PM 處理工地延遲與時程整合；PO 負責重新排 Backlog 優先序",
      B: "PM 同時處理工地與 Backlog，PO 旁觀",
      C: "PO 處理工地延遲，PM 處理 Backlog",
      D: "Scrum Master 一個人處理所有事",
    },
    answer: "A",
    explanation: {
      why: "PM 管整體大局與整合（Do things right）、PO 管價值與 Backlog（Do the right things）。",
      others: {
        B: "PM 越位到 Backlog 管理會削弱 PO 職能。",
        C: "職責完全錯位。",
        D: "SM 是引導者不是執行者。",
      },
      keyPoint: "PM 整合大局、PO 管價值優先序，職責不互搶。",
    },
  },
  {
    id: "A-012",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "Scrum Master 角色",
    difficulty: "medium",
    question:
      "敏捷團隊新人反映：「站立會議有人每天都超時、總是被同一個同事打斷，我覺得浪費時間。」這件事最該由誰介入處理？",
    options: {
      A: "PO，因為他管 Backlog",
      B: "贊助者，因為他是最高層",
      C: "Scrum Master / 敏捷教練，因為他負責引導流程與移除障礙",
      D: "新人自己跟那位同事吵架",
    },
    answer: "C",
    explanation: {
      why: "站立會議流程與團隊互動障礙屬於 SM 的引導職能範疇。",
      others: {
        A: "PO 管價值不管流程儀式品質。",
        B: "小障礙不用拉到贊助者。",
        D: "不專業且傷團隊。",
      },
      keyPoint: "流程引導與移除障礙 = Scrum Master。",
    },
  },
  {
    id: "A-013",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "MVP",
    difficulty: "medium",
    question:
      "創業團隊想驗證「訂閱制鮮食便當」市場接受度。三個月後有限預算只能做出下單與每週配送兩個核心功能，沒有 APP、沒有 AI 推薦、沒有 LINE 通知。這樣設計的產品稱為？",
    options: {
      A: "Phase Gate 交付物",
      B: "MVP（最小可行性產品）",
      C: "DoD（完成的定義）",
      D: "AC（驗收準則）",
    },
    answer: "B",
    explanation: {
      why: "用最少功能驗證市場並取得早期回饋 = MVP 的經典情境。",
      others: {
        A: "Phase Gate 是預測式階段審查點。",
        C: "DoD 是內部品質標準。",
        D: "AC 是特定故事的外部驗收標準。",
      },
      keyPoint: "MVP = 最小可行 + 早期驗證市場。",
    },
  },
  {
    id: "A-014",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "DoD vs AC",
    difficulty: "hard",
    question:
      "Sprint Review 時，團隊認為某張故事「做完了」，但 PO 認為還不能驗收。調查後發現「通過單元測試、無 critical bug」是團隊共同的完工標準；「支援繁中 / 英文切換」則是這張故事當初答應客戶的條件。兩者分別對應？",
    options: {
      A: "前者是 AC、後者是 DoD",
      B: "前者是 DoD、後者是 AC",
      C: "兩者都是 DoD",
      D: "兩者都是 AC",
    },
    answer: "B",
    explanation: {
      why: "團隊共同、所有故事都要符合 → DoD（內部）；特定故事對客戶的驗收條件 → AC（外部）。",
      others: {
        A: "定義顛倒。",
        C: "忽略外部驗收標準。",
        D: "忽略內部品質標準。",
      },
      keyPoint: "DoD 是內部共通品質；AC 是該張故事的外部驗收。",
    },
  },
  {
    id: "A-015",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "審查時機差異",
    difficulty: "medium",
    question:
      "贊助者問 PM：「我們這個預測式大型基建案和我們另一個敏捷 APP 專案，治理審查時機應該怎麼設計？」PM 最正確的回答為？",
    options: {
      A: "兩案都用 Sprint Review 每兩週一次",
      B: "預測式用階段閘門（Phase Gate）在階段交界審查；敏捷用迭代結束 Review",
      C: "兩案都用 Phase Gate",
      D: "敏捷案不用審查",
    },
    answer: "B",
    explanation: {
      why: "兩種手法審查時機本就不同：Phase Gate vs 每迭代 Review，依特性設計最合理。",
      others: {
        A: "預測式沒有 Sprint 概念。",
        C: "敏捷不適用硬階段劃分。",
        D: "敏捷依然需要審查。",
      },
      keyPoint: "預測式 = Phase Gate；敏捷 = 每迭代 Review。",
    },
  },
  {
    id: "A-016",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷宣言",
    difficulty: "hard",
    question:
      "客戶在 Sprint 進行中臨時要求新增一個重要功能，會影響原計畫。某位團隊成員說：「我們的計畫書已經簽字了，不能改。」PM 應該如何引導？",
    options: {
      A: "支持該成員，拒絕所有變更",
      B: "依敏捷宣言「應對變更勝於遵循計畫書」精神，透過 PO 評估價值並決定是否納入下一 Sprint",
      C: "繞過 PO 自行接下需求",
      D: "立即暫停 Sprint 重做計畫",
    },
    answer: "B",
    explanation: {
      why: "敏捷不是拒絕計畫，而是允許計畫隨價值變化調整，應透過 PO 決策納入時機。",
      others: {
        A: "違背敏捷擁抱變更精神。",
        C: "繞過 PO 破壞治理。",
        D: "不需立即暫停，Sprint 期內優先完成原 Backlog。",
      },
      keyPoint: "敏捷允許變更，但要透過 PO 評估價值、排優先序。",
    },
  },
  {
    id: "A-017",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "裁適（Tailoring）",
    difficulty: "medium",
    question:
      "PMO 推出一份「所有專案都必須照做」的瀑布式範本。資深 PM 在敏捷新專案套用時發現僵化、團隊反彈。他應該與 PMO 溝通的核心概念為？",
    options: {
      A: "標準化優於彈性，應照做",
      B: "每個專案獨一無二，應依脈絡進行裁適（Tailoring）",
      C: "敏捷專案根本不需要範本",
      D: "直接無視 PMO 範本",
    },
    answer: "B",
    explanation: {
      why: "Tailoring 原則：依專案脈絡、環境、人員、時間調整工作方式，不是一套走天下。",
      others: {
        A: "違背 Tailoring 精神。",
        C: "過度極端，仍可參考有用部分。",
        D: "違反治理。",
      },
      keyPoint: "Tailoring = 依脈絡調整，不是一刀切。",
    },
  },
  {
    id: "A-018",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "過程組",
    difficulty: "easy",
    question:
      "專案進行到中後段，PM 每週追蹤時程與成本、檢視偏差並提出矯正措施。這些活動最對應 PMBOK 五大過程組中的？",
    options: {
      A: "起始",
      B: "規劃",
      C: "監視與控制",
      D: "結案",
    },
    answer: "C",
    explanation: {
      why: "追蹤、偏差檢視、矯正措施 = 監視與控制過程組核心。",
      others: {
        A: "起始只在專案開頭。",
        B: "規劃是訂計畫。",
        D: "結案是最後階段。",
      },
      keyPoint: "追蹤+偏差+矯正 → 監視與控制。",
    },
  },
  {
    id: "A-019",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "專案 vs 營運",
    difficulty: "easy",
    question:
      "某公司的客服中心每天 24 小時接聽電話並記錄客訴，已運作十年。同時公司正要開發一套新 CRM 系統為期一年。下列判斷何者正確？",
    options: {
      A: "兩者都是專案",
      B: "客服中心是營運；CRM 開發是專案",
      C: "客服中心是專案；CRM 開發是營運",
      D: "兩者都是營運",
    },
    answer: "B",
    explanation: {
      why: "專案 = 暫時性、獨特、創造價值；營運 = 持續性、重複執行。客服中心持續運作屬營運；CRM 開發有起迄屬專案。",
      others: {
        A: "客服中心非暫時性。",
        C: "完全顛倒。",
        D: "CRM 有明確起迄。",
      },
      keyPoint: "專案 = 暫時+獨特；營運 = 持續+重複。",
    },
  },
  {
    id: "A-020",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "預測式特徵",
    difficulty: "medium",
    question:
      "某建築公司接到政府標案，規格、圖說、驗收標準都寫在合約附件且不得變動。客戶要求依施工進度分階段請款。這個專案最典型的特徵是？",
    options: {
      A: "規格明確、階段線性、以計畫為驅動的預測式",
      B: "需求不明、短迭代的敏捷式",
      C: "持續反覆探索的迭代式",
      D: "沒有計畫的混亂式",
    },
    answer: "A",
    explanation: {
      why: "規格明確不可變、階段請款 = 預測式典型特徵：計畫驅動、線性執行。",
      others: {
        B: "需求早已明確。",
        C: "不需要探索。",
        D: "不存在此分類。",
      },
      keyPoint: "規格明確+階段線性 → 預測式。",
    },
  },
  {
    id: "A-021",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "天才三角",
    difficulty: "medium",
    question:
      "某 PM 技術能力強，但團隊抱怨他只會下命令、不會聆聽、不理解業務。HR 建議他補強 PMI 天才三角中的哪兩塊？",
    options: {
      A: "Ways of Working 與 Coding",
      B: "Power Skills（領導力）與 Business Acumen（商業敏銳度）",
      C: "只需要加強技術",
      D: "Power Skills 與 Coding",
    },
    answer: "B",
    explanation: {
      why: "「只會下命令不會聆聽」= Power Skills 不足；「不理解業務」= Business Acumen 不足。",
      others: {
        A: "Coding 不是天才三角項目。",
        C: "技術已強，補其他兩塊。",
        D: "Coding 同上。",
      },
      keyPoint: "天才三角：Ways of Working + Power Skills + Business Acumen。",
    },
  },
  {
    id: "A-022",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "混合式彈性",
    difficulty: "hard",
    question:
      "某國際車廠推動「純電新車」專案：電池與車體硬體走預測式、車機 APP 與 OTA 更新走敏捷、供應鏈 ERP 整合部分採滾動式規劃。團隊成員疑惑「混合式是不是只能小案用」。PM 最正確的說明為？",
    options: {
      A: "混合式只適合小型專案",
      B: "混合式是彈性組合手法，特別適合繁雜產品，可前後、平行、你儂我儂多種組合",
      C: "混合式其實就是沒有方法",
      D: "混合式不受 PMI 承認",
    },
    answer: "B",
    explanation: {
      why: "混合式沒有規模限制，繁雜產品反而最需要它。",
      others: {
        A: "規模與混合式無關。",
        C: "混合式是有意設計的組合。",
        D: "PMI 正式承認混合式為三大手法之一。",
      },
      keyPoint: "混合式適合繁雜產品，組合彈性極大。",
    },
  },
  {
    id: "A-023",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "迭代式情境",
    difficulty: "hard",
    question:
      "品牌要重新設計 logo。設計師每週端出一版整體概念（造型+配色+字體），跟客戶討論後下一版整體重新調整，直到雙方滿意定稿。這種做法最貼近？",
    options: {
      A: "增量式，每次交付一個局部完成品",
      B: "迭代式，整份稿反覆完善釐清方向",
      C: "預測式，一次定案交付",
      D: "瀑布式，前期一次規劃完",
    },
    answer: "B",
    explanation: {
      why: "logo 是單一整體，每週整份重做、由粗到精 = 迭代式反覆完善的典型。",
      others: {
        A: "logo 沒有獨立可交付的局部。",
        C: "每週交付中間版本非預測式。",
        D: "瀑布式不會讓客戶看中間稿。",
      },
      keyPoint: "整體反覆優化 → 迭代；分塊完整交付 → 增量。",
    },
  },
  {
    id: "A-024",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "角色責任",
    difficulty: "medium",
    question:
      "敏捷專案進行中，客戶抱怨功能不符期待。PM 與 PO 討論責任歸屬時，PM 說「我負責交付準時」、PO 說「我負責價值正確」。哪一句最符合 PMI 的標準分工觀？",
    options: {
      A: "PM 說的對，他一人就該負責價值",
      B: "PO 說的對，PM 不用管價值",
      C: "兩人說法互補且正確，對應「Do things right（PM）+ Do the right things（PO）」",
      D: "角色分工 PMI 沒有明確定義",
    },
    answer: "C",
    explanation: {
      why: "PM 確保把事情做對（整合、時程、預算）；PO 確保做對的事（產品價值）。兩者互補。",
      others: {
        A: "價值正確是 PO 職責。",
        B: "PM 也要關心價值對齊。",
        D: "PMI 有清楚定義。",
      },
      keyPoint: "PM Do things right；PO Do the right things。",
    },
  },
  {
    id: "A-025",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷訓練需求",
    difficulty: "medium",
    question:
      "公司剛決定把某預測式專案轉成敏捷，團隊成員說「我們都有讀過敏捷宣言，所以可以馬上開始」。資深教練提醒 PM，只懂宣言還不夠，還需要什麼「思維落實」的練習，否則會變成假敏捷？",
    options: {
      A: "只要加裝 Jira 就好",
      B: "內化敏捷價值觀並在日常決策中實踐（Being Agile > Doing Agile）",
      C: "每天站立會議出席就等於敏捷",
      D: "把預測式流程改名字就好",
    },
    answer: "B",
    explanation: {
      why: "知道宣言 ≠ 內化思維，要把價值觀反映在日常決策才是真敏捷。",
      others: {
        A: "工具不等於思維。",
        C: "出席儀式不等於價值觀。",
        D: "改名不改本質。",
      },
      keyPoint: "Being Agile > Doing Agile；思維比工具重要。",
    },
  },
];

export default questions;
