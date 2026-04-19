// A. 基礎專案管理（25 題）
// 主題：專案定義、生命週期、三大開發手法、SMART、PM 角色
const questions = [
  {
    id: "A-001",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "開發手法分類",
    difficulty: "easy",
    question:
      "下列何者「不是」PMI 定義的三大專案開發手法之一？",
    options: {
      A: "預測式（Predictive）",
      B: "調適式（Adaptive）",
      C: "混合式（Hybrid）",
      D: "即興式（Improvisational）",
    },
    answer: "D",
    explanation: {
      why: "PMI 定義的三大開發手法為預測式、調適式、混合式。「即興式」不是正式分類。",
      others: {
        A: "預測式（瀑布）以計畫為驅動，是三大手法之一。",
        B: "調適式（敏捷傘狀概念）以變更為驅動，是三大手法之一。",
        C: "混合式結合預測式與調適式，適合繁雜產品，是三大手法之一。",
      },
      keyPoint: "三大手法：預測式、調適式、混合式。",
    },
  },
  {
    id: "A-002",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "預測式特徵",
    difficulty: "easy",
    question:
      "某專案產品規格一開始就完整定義，階段必須依序執行，且價值在最終一次性交付。這最可能採用何種開發手法？",
    options: {
      A: "敏捷式",
      B: "預測式",
      C: "迭代式",
      D: "增量式",
    },
    answer: "B",
    explanation: {
      why: "規格一開始就明確、階段線性、最終才交付 → 典型的預測式（瀑布）。",
      others: {
        A: "敏捷式以變更為驅動，規格會邊做邊完善。",
        C: "迭代式允許重複循環改善，非線性。",
        D: "增量式是分批交付，不會等到最終才給客戶。",
      },
      keyPoint: "預測式 = 計畫驅動、規格明確、線性、最終一次交付。",
    },
  },
  {
    id: "A-003",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "調適式特徵",
    difficulty: "medium",
    question:
      "開發一款新手機 APP，需求模糊且會隨市場快速變化。專案採用短衝（Sprint）每兩週交付可用版本讓客戶回饋。這是哪一類開發手法？",
    options: {
      A: "預測式",
      B: "混合式",
      C: "調適式",
      D: "階段式",
    },
    answer: "C",
    explanation: {
      why: "需求不確定 + Sprint 短迭代 + 持續客戶回饋 = 調適式（敏捷）。",
      others: {
        A: "預測式不適合需求模糊、不會用 Sprint。",
        B: "混合式是預測+調適組合，題目純粹是敏捷。",
        D: "「階段式」不是 PMI 正式分類。",
      },
      keyPoint: "需求不明 + Sprint + 客戶回饋 → 調適式。",
    },
  },
  {
    id: "A-004",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "混合式概念",
    difficulty: "medium",
    question:
      "一個智慧建築專案，硬體施工必須按圖施工、階段明確；但其住戶 APP 需求多變。專案經理應如何選擇開發手法？",
    options: {
      A: "全部採用預測式，減少變動",
      B: "全部採用敏捷式，保持彈性",
      C: "硬體用預測式、APP 用調適式的混合式",
      D: "等硬體完工後再開發 APP",
    },
    answer: "C",
    explanation: {
      why: "產品包含兩種特性（硬體穩定、軟體多變），典型混合式適用場景。",
      others: {
        A: "硬體雖適合預測式，APP 需求多變用預測式會失敗。",
        B: "硬體不可能邊蓋邊改，敏捷不適合。",
        D: "平行推進 APP 才能讓交屋與上線同步，不是等。",
      },
      keyPoint: "硬體/穩定部分預測式 + 軟體/變動部分調適式 = 混合式。",
    },
  },
  {
    id: "A-005",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "迭代 vs 增量",
    difficulty: "hard",
    question:
      "畫家先畫整張風景畫的草稿，第二輪再鋪底色，第三輪加細節。每輪都是整張畫，由粗到細。這種做法符合哪一種方法？",
    options: {
      A: "增量式",
      B: "迭代式",
      C: "預測式",
      D: "混合式",
    },
    answer: "B",
    explanation: {
      why: "整張畫反覆完善、先求有再求好 = 迭代式。重點在「重複與完善」同一個產出。",
      others: {
        A: "增量式會一塊一塊完成交付（天空→山→草地），不是整張一起改。",
        C: "預測式不是反覆修改，而是一次做對。",
        D: "混合式是手法組合，與此比喻無關。",
      },
      keyPoint: "迭代 = 整張反覆完善；增量 = 一塊一塊補。",
    },
  },
  {
    id: "A-006",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "迭代 vs 增量",
    difficulty: "hard",
    question:
      "蓋大樓時先把一樓完全蓋好讓住戶入住，再蓋二樓、三樓。每層蓋完都能獨立使用。這是哪一種做法？",
    options: {
      A: "迭代式",
      B: "增量式",
      C: "瀑布式",
      D: "混合式",
    },
    answer: "B",
    explanation: {
      why: "一塊一塊（一樓一樓）完整交付、提早使用，就是增量式。",
      others: {
        A: "迭代是反覆完善同一物，不是分塊交付。",
        C: "瀑布式要全部蓋完才驗收。",
        D: "混合式是手法組合，與此比喻無關。",
      },
      keyPoint: "增量 = 切塊交付，每塊都是完成品。",
    },
  },
  {
    id: "A-007",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART - Specific",
    difficulty: "medium",
    question:
      "下列哪一個敘述最符合 SMART 原則中的「具體（Specific）」？",
    options: {
      A: "團隊過去有蓋類似規模的餐廳經驗",
      B: "要在台北市大直興建一間 400 坪歐式自助餐廳",
      C: "目標要對齊公司高端市場策略",
      D: "要在 2026/12/31 前完成開幕",
    },
    answer: "B",
    explanation: {
      why: "具體（Specific）在描述「要做出什麼」，有地點、規模、類型即為具體。",
      others: {
        A: "這描述團隊能力 → 屬於 Achievable（可達成）。",
        C: "對齊策略 → 屬於 Relevant（相關）。",
        D: "有明確期限 → 屬於 Time-bound（有時限）。",
      },
      keyPoint: "Specific 回答「要做什麼東西出來」。",
    },
  },
  {
    id: "A-008",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART - Measurable",
    difficulty: "medium",
    question:
      "「此專案的目標之一是提升 30% 的來客量」這句話最符合 SMART 哪一項？",
    options: {
      A: "Specific（具體）",
      B: "Measurable（可衡量）",
      C: "Achievable（可達成）",
      D: "Relevant（相關）",
    },
    answer: "B",
    explanation: {
      why: "出現具體百分比 / 數字，屬於可衡量的績效標準。",
      others: {
        A: "具體在描述產出物樣貌，不是績效數字。",
        C: "可達成要講資源/能力佐證。",
        D: "相關要綁公司策略或年度目標。",
      },
      keyPoint: "有數字（%、金額、數量）→ Measurable。",
    },
  },
  {
    id: "A-009",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART - Achievable",
    difficulty: "easy",
    question:
      "「該專案團隊過去曾完成一個類似的專案」這句話最符合 SMART 哪一項？",
    options: {
      A: "Specific",
      B: "Measurable",
      C: "Achievable",
      D: "Time-bound",
    },
    answer: "C",
    explanation: {
      why: "描述團隊過往經驗，證明「有能力做到」= Achievable（可達成）。",
      others: {
        A: "具體要講產出物樣貌。",
        B: "可衡量要有數字。",
        D: "有時限要有日期。",
      },
      keyPoint: "團隊能力/資源佐證 → Achievable。",
    },
  },
  {
    id: "A-010",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "SMART - Relevant",
    difficulty: "medium",
    question:
      "下列哪個敘述最能展現 SMART 原則中的「Relevant（相關）」？",
    options: {
      A: "預計可為公司帶來 500 萬年營收",
      B: "此專案對齊公司今年「進軍年輕客群」的年度策略",
      C: "需在 2026 年第二季前完工",
      D: "開發 APP 提供預約、支付、通知三大功能",
    },
    answer: "B",
    explanation: {
      why: "Relevant 要展示「與組織策略/願景對齊」，明確綁年度策略即為相關。",
      others: {
        A: "有數字，屬於 Measurable。",
        C: "有期限，屬於 Time-bound。",
        D: "描述功能產出，屬於 Specific。",
      },
      keyPoint: "Relevant = 對齊公司策略或年度目標。",
    },
  },
  {
    id: "A-011",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "專案定義",
    difficulty: "easy",
    question: "下列何者最符合「專案」的定義？",
    options: {
      A: "每月固定發薪水的人資流程",
      B: "工廠每天生產 1000 台手機的產線",
      C: "為新產品發表會建立一個臨時活動網站，預計三個月完成",
      D: "永久運營的客服中心",
    },
    answer: "C",
    explanation: {
      why: "專案具有「暫時性、獨特性、創造價值」三大特徵，C 三者皆符合。",
      others: {
        A: "發薪水是重複性營運活動，不是專案。",
        B: "生產線是持續性營運。",
        D: "永久運營是日常營運（Operation）不是專案。",
      },
      keyPoint: "專案 = 暫時性 + 獨特性 + 創造價值。",
    },
  },
  {
    id: "A-012",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "PM vs PO 職責",
    difficulty: "medium",
    question:
      "在一個混合式專案中，「管制產品待辦清單優先順序、確保客戶價值」主要是誰的職責？",
    options: {
      A: "專案經理（PM）",
      B: "產品負責人（PO）",
      C: "Scrum Master",
      D: "贊助者（Sponsor）",
    },
    answer: "B",
    explanation: {
      why: "PO 負責管制價值主張、排序 Backlog，確保團隊做對的事。",
      others: {
        A: "PM 負責整體大局（時程、預算、整合），不直接排 Backlog。",
        C: "Scrum Master 是引導者/促進者，移除障礙，不決定內容優先序。",
        D: "贊助者授權專案、提供資源，不介入日常 Backlog 管理。",
      },
      keyPoint: "PM「Do things right」；PO「Do the right things」。",
    },
  },
  {
    id: "A-013",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷角色",
    difficulty: "medium",
    question:
      "敏捷專案中，下列何者主要扮演「引導、促進、移除團隊障礙」的角色？",
    options: {
      A: "產品負責人（PO）",
      B: "專案經理（PM）",
      C: "Scrum Master / 敏捷教練",
      D: "功能經理（FM）",
    },
    answer: "C",
    explanation: {
      why: "Scrum Master/敏捷教練是 Servant Leader，引導團隊、移除阻礙、維護敏捷實踐。",
      others: {
        A: "PO 負責管制價值與 Backlog。",
        B: "傳統 PM 在敏捷中角色較弱，多由 SM/PO 替代部分職責。",
        D: "FM 是部門主管，不是敏捷角色。",
      },
      keyPoint: "Scrum Master = 引導者、障礙排除者、敏捷推手。",
    },
  },
  {
    id: "A-014",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷三大名詞",
    difficulty: "hard",
    question:
      "敏捷團隊內部約定「所有故事都要通過單元測試且無 Critical Bug 才能展示」，這屬於什麼？",
    options: {
      A: "MVP（最小可行性產品）",
      B: "DoD（完成的定義）",
      C: "AC（驗收準則）",
      D: "Sprint 目標",
    },
    answer: "B",
    explanation: {
      why: "DoD 是團隊內部檢核標準，描述「什麼樣的工作才算做完」。",
      others: {
        A: "MVP 是最低可行產品，用來驗證市場。",
        C: "AC 是客戶/PO 外部驗收標準，針對特定故事。",
        D: "Sprint 目標是整輪要達成的業務目的，不是品質檢核標準。",
      },
      keyPoint: "DoD 內部通用標準；AC 針對單一故事的外部驗收。",
    },
  },
  {
    id: "A-015",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷三大名詞",
    difficulty: "hard",
    question:
      "某電商想驗證「訂閱制咖啡」能否被市場接受，決定先推出只有下單與每月配送兩個功能的簡易版，收集早期客戶回饋。這個簡易版稱為？",
    options: {
      A: "MVP",
      B: "DoD",
      C: "AC",
      D: "Sprint Backlog",
    },
    answer: "A",
    explanation: {
      why: "MVP = 最小可行性產品，用最少功能驗證市場與取得早期回饋。",
      others: {
        B: "DoD 是完成品質標準。",
        C: "AC 是特定故事的驗收標準。",
        D: "Sprint Backlog 是某一 Sprint 要做的工作清單。",
      },
      keyPoint: "MVP 目的 = 最早時間點取得客戶回饋。",
    },
  },
  {
    id: "A-016",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "預測式 vs 敏捷審查",
    difficulty: "medium",
    question:
      "採用預測式手法的專案，通常在每個階段交界會進行什麼審查機制？",
    options: {
      A: "Sprint Review",
      B: "Phase Gate / Kill Point",
      C: "回顧會議",
      D: "每日站立會議",
    },
    answer: "B",
    explanation: {
      why: "預測式在階段交界做 Phase Gate（階段閘門）決定繼續、修改或終止。",
      others: {
        A: "Sprint Review 是敏捷每個迭代結束的審查。",
        C: "回顧會議（Retrospective）是敏捷團隊反思流程。",
        D: "每日站立會議是敏捷的每日同步。",
      },
      keyPoint: "預測式治理 = Phase Gate；調適式 = 迭代結束審查。",
    },
  },
  {
    id: "A-017",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "開發手法選擇",
    difficulty: "medium",
    question:
      "某公司要開發一套「政府法規報表」系統，規格由法律嚴格規定、產出要求明確且不可變動。最適合哪種開發手法？",
    options: {
      A: "敏捷式",
      B: "預測式",
      C: "迭代式",
      D: "增量式",
    },
    answer: "B",
    explanation: {
      why: "規格明確、不可變動、有法規約束 → 預測式最適合。",
      others: {
        A: "敏捷適合需求會變的情況。",
        C: "迭代式要有反覆優化空間，法規不需要。",
        D: "增量式用於提早取得客戶回饋，法規不需客戶回饋。",
      },
      keyPoint: "規格明確且需求穩定 → 預測式。",
    },
  },
  {
    id: "A-018",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷宣言價值",
    difficulty: "medium",
    question:
      "敏捷宣言四大價值觀之一是「應對變更勝於遵循計畫書」。這句話最主要強調什麼？",
    options: {
      A: "專案不需要計畫書",
      B: "計畫書只是參考，不用執行",
      C: "當環境變化時，能調整方向比死守原計畫更重要",
      D: "客戶要什麼就給什麼",
    },
    answer: "C",
    explanation: {
      why: "敏捷重視應變能力，原計畫是基礎但可以因應變化調整。",
      others: {
        A: "敏捷也需要計畫，只是允許調整。",
        B: "計畫書仍是重要依據。",
        D: "要依 PO 判斷價值，不是無條件照客戶說。",
      },
      keyPoint: "敏捷 = 擁抱變更，而不是拋棄計畫。",
    },
  },
  {
    id: "A-019",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "裁適（Tailoring）",
    difficulty: "medium",
    question:
      "專案經理在決定使用哪種手法時，根據「每個專案都是獨一無二」原則進行調整，這稱為？",
    options: {
      A: "標準化（Standardization）",
      B: "裁適（Tailoring）",
      C: "基準化（Benchmarking）",
      D: "敏捷化（Agilization）",
    },
    answer: "B",
    explanation: {
      why: "Tailoring = 裁適，依專案脈絡、環境、人員、時間調整最合適的工作方式。",
      others: {
        A: "標準化相反，是統一流程。",
        C: "基準化是比較外部最佳實務。",
        D: "敏捷化不是正式 PMI 術語。",
      },
      keyPoint: "Tailoring = 依專案獨特性量身打造工作方式。",
    },
  },
  {
    id: "A-020",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "五大過程組",
    difficulty: "easy",
    question:
      "PMBOK 的五大過程組依序為：起始、規劃、執行、______、結案。中間空缺為？",
    options: {
      A: "監視與控制",
      B: "溝通",
      C: "採購",
      D: "風險管理",
    },
    answer: "A",
    explanation: {
      why: "五大過程組：Initiating → Planning → Executing → Monitoring & Controlling → Closing。",
      others: {
        B: "溝通是一個知識領域，不是過程組。",
        C: "採購是知識領域。",
        D: "風險管理是知識領域。",
      },
      keyPoint: "五大過程組：起始 → 規劃 → 執行 → 監控 → 結案。",
    },
  },
  {
    id: "A-021",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "專案特徵",
    difficulty: "easy",
    question: "下列何者「不是」專案的核心特徵？",
    options: {
      A: "暫時性（有明確開始與結束）",
      B: "獨特性（產出不重複）",
      C: "永續營運（持續不斷地生產相同產出）",
      D: "為企業或組織創造價值",
    },
    answer: "C",
    explanation: {
      why: "「永續營運」是 Operation 的特徵，不是專案。專案必須有結束點。",
      others: {
        A: "暫時性是核心特徵之一。",
        B: "獨特性是核心特徵之一。",
        D: "創造價值是核心特徵之一。",
      },
      keyPoint: "專案三大特徵：暫時 + 獨特 + 創造價值。",
    },
  },
  {
    id: "A-022",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "敏捷宣言",
    difficulty: "medium",
    question:
      "敏捷宣言四大價值觀中，「客戶協作」主要是「勝於」下列何者？",
    options: {
      A: "工作軟體",
      B: "契約協商",
      C: "個人與互動",
      D: "應對變更",
    },
    answer: "B",
    explanation: {
      why: "敏捷宣言：客戶協作勝於契約協商（Customer collaboration over contract negotiation）。",
      others: {
        A: "工作軟體是「勝於」詳盡文件。",
        C: "個人與互動是「勝於」流程與工具。",
        D: "應對變更是「勝於」遵循計畫書。",
      },
      keyPoint: "敏捷四組對比：個人>流程、軟體>文件、協作>契約、變更>計畫。",
    },
  },
  {
    id: "A-023",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "調適式子分類",
    difficulty: "medium",
    question:
      "某設計專案需要先產出多個概念稿，逐輪收集客戶反饋後逐漸聚焦到最終方案。這種做法屬於？",
    options: {
      A: "迭代式（Iterative）",
      B: "增量式（Incremental）",
      C: "預測式（Predictive）",
      D: "並行式（Parallel）",
    },
    answer: "A",
    explanation: {
      why: "反覆產出草稿並逐輪優化至聚焦方案，是迭代式的典型樣貌。",
      others: {
        B: "增量式是分塊交付完成品。",
        C: "預測式不會反覆修改。",
        D: "並行式非 PMI 正式開發手法。",
      },
      keyPoint: "釐清需求/探索選項 → 迭代式。",
    },
  },
  {
    id: "A-024",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "混合式組合",
    difficulty: "hard",
    question:
      "關於混合式專案，下列敘述何者「錯誤」？",
    options: {
      A: "可以前後組合：先預測式規劃再敏捷式開發",
      B: "可以平行組合：預測式與敏捷式同時進行",
      C: "只能用於小型專案",
      D: "可以你儂我儂：硬體預測式、軟體敏捷式",
    },
    answer: "C",
    explanation: {
      why: "混合式特別適合「繁雜」的大型專案，並非限於小型。",
      others: {
        A: "前後組合是合法的混合方式。",
        B: "平行組合也常見（如大樓與 APP 同步進行）。",
        D: "你儂我儂是混合式的典型型態。",
      },
      keyPoint: "混合式適合繁雜專案，組合方式非常彈性。",
    },
  },
  {
    id: "A-025",
    chapter: "A",
    topic: "基礎專案管理",
    subtopic: "PM 能力",
    difficulty: "easy",
    question:
      "PMI 天才三角（PMI Talent Triangle）的三個能力領域不包含下列何者？",
    options: {
      A: "技術專案管理（Ways of Working）",
      B: "領導力（Power Skills）",
      C: "商業敏銳度（Business Acumen）",
      D: "程式開發能力（Coding）",
    },
    answer: "D",
    explanation: {
      why: "天才三角三大能力：Ways of Working、Power Skills、Business Acumen，不含程式能力。",
      others: {
        A: "技術專案管理是三角之一。",
        B: "領導力是三角之一。",
        C: "商業敏銳度是三角之一。",
      },
      keyPoint: "PMI 天才三角 = 技術管理 + 領導力 + 商業敏銳度。",
    },
  },
];

export default questions;
