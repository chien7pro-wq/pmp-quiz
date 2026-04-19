// B. 策略調整（校準）（25 題）
// 主題：組織策略對齊、商業價值、利害關係人期望、外部環境應對
const questions = [
  {
    id: "B-001",
    chapter: "B",
    topic: "策略調整",
    subtopic: "外部變化應對",
    difficulty: "medium",
    question:
      "某敏捷新產品開發中，競爭者突然推出類似產品。專案經理「首先」該做什麼？",
    options: {
      A: "壓縮時程盡快上市",
      B: "重新檢視此專案的價值",
      C: "研究競品後改良現有產品",
      D: "召開贊助者會議決定方案",
    },
    answer: "B",
    explanation: {
      why: "外部重大變化下，PM 首要動作是重新評估商業價值，確認是否仍值得做。",
      others: {
        A: "盲目趕工可能加速虧損。",
        C: "執行層面動作，應在評估價值之後。",
        D: "應帶著價值評估結果去找贊助者，不是空手討論。",
      },
      keyPoint: "外部變化首要 = 重新檢視商業價值。",
    },
  },
  {
    id: "B-002",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略對齊",
    difficulty: "medium",
    question:
      "利害關係人詢問某進行中專案「是否與公司策略校準」，專案經理應提供哪份文件最能回應？",
    options: {
      A: "效益管理計畫書",
      B: "專案管理計畫書",
      C: "溝通管理計畫書",
      D: "風險管理計畫書",
    },
    answer: "A",
    explanation: {
      why: "選項中效益管理計畫書是唯一商業文件，連結效益與組織策略。",
      others: {
        B: "專案管理計畫書講執行細節，不含策略校準內容。",
        C: "溝通計畫只定義誰收什麼資訊。",
        D: "風險計畫講風險管理方法。",
      },
      keyPoint: "講策略校準 → 找商業文件（章程/效益管理計畫書/商業企劃案）。",
    },
  },
  {
    id: "B-003",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業價值",
    difficulty: "easy",
    question:
      "下列何者最能描述「商業價值（Business Value）」的概念？",
    options: {
      A: "只看財務面的利潤數字",
      B: "組織從專案成果獲得的有形與無形效益總和",
      C: "專案完成所需的成本",
      D: "利害關係人數量",
    },
    answer: "B",
    explanation: {
      why: "商業價值涵蓋財務、客戶滿意度、市場地位等有形與無形效益。",
      others: {
        A: "不只財務，還包含無形效益（品牌、員工士氣等）。",
        C: "成本是投入不是價值。",
        D: "數量與價值無直接關係。",
      },
      keyPoint: "商業價值 = 有形+無形效益總和。",
    },
  },
  {
    id: "B-004",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷 Backlog 調整",
    difficulty: "medium",
    question:
      "敏捷專案中，當市場出現新機會時，誰應該「重新排序 Product Backlog」以反映新的價值方向？",
    options: {
      A: "Scrum Master",
      B: "開發團隊",
      C: "產品負責人（PO）",
      D: "贊助者",
    },
    answer: "C",
    explanation: {
      why: "PO 負責管理 Backlog 與價值優先序，有權重新排序。",
      others: {
        A: "SM 是引導者，不決定內容優先序。",
        B: "開發團隊執行工作，不擁有優先序決定權。",
        D: "贊助者授權專案、提供大方向，不直接調 Backlog。",
      },
      keyPoint: "Backlog 優先序 = PO 的職責。",
    },
  },
  {
    id: "B-005",
    chapter: "B",
    topic: "策略調整",
    subtopic: "外部商業環境",
    difficulty: "medium",
    question:
      "下列何者屬於「企業環境因素（EEFs）」的外部變化？",
    options: {
      A: "公司內部的專案管理流程",
      B: "同業推出革命性新產品",
      C: "組織既有的歷史教訓資料庫",
      D: "公司的範本文件",
    },
    answer: "B",
    explanation: {
      why: "同業/競爭者動態屬於外部的企業環境因素（EEFs）。",
      others: {
        A: "內部流程屬於組織過程資產（OPA）。",
        C: "歷史教訓資料庫是 OPA。",
        D: "範本文件是 OPA。",
      },
      keyPoint: "EEFs = 外部環境（法規、市場、競爭）；OPA = 內部資產（流程、範本）。",
    },
  },
  {
    id: "B-006",
    chapter: "B",
    topic: "策略調整",
    subtopic: "應對變化順序",
    difficulty: "hard",
    question:
      "外部環境發生重大變化影響專案時，PM 的行動優先順序為何？",
    options: {
      A: "壓縮時程 → 審視商業價值 → 更新文件 → 召開會議",
      B: "審視商業價值 → 溝通與建議 → 更新商業文件 → 執行調整",
      C: "更新文件 → 審視價值 → 召開會議 → 壓縮時程",
      D: "召開會議 → 執行調整 → 更新文件 → 審視價值",
    },
    answer: "B",
    explanation: {
      why: "PMP 建議先評估價值，確認繼續做才找人談方案、更新文件，最後才動執行面。",
      others: {
        A: "壓縮時程是執行層面，不能最先做。",
        C: "未審視價值就更新文件方向容易錯。",
        D: "跳過價值評估會無依據行動。",
      },
      keyPoint: "順序：商業價值 → 溝通 → 更新文件 → 執行調整。",
    },
  },
  {
    id: "B-007",
    chapter: "B",
    topic: "策略調整",
    subtopic: "利害關係人",
    difficulty: "medium",
    question:
      "利害關係人對專案的期望與公司策略出現矛盾，專案經理該怎麼做？",
    options: {
      A: "直接按利害關係人期望執行",
      B: "直接按公司策略執行，忽略利害關係人",
      C: "向贊助者陳報衝突，尋求裁決或校準方向",
      D: "等問題自行消失",
    },
    answer: "C",
    explanation: {
      why: "涉及策略衝突的決策超出 PM 權限，需向上陳報由贊助者裁決。",
      others: {
        A: "不經評估就按利害關係人走，可能偏離策略。",
        B: "完全忽略利害關係人會造成支持度問題。",
        D: "消極不處理會讓問題惡化。",
      },
      keyPoint: "衝突超越 PM 權限 → 向贊助者/治理層陳報。",
    },
  },
  {
    id: "B-008",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業企劃案內容",
    difficulty: "medium",
    question:
      "下列何者「最不像」商業企劃案（Business Case）的內容？",
    options: {
      A: "專案的目的與商業需要",
      B: "成本效益分析（NPV、ROI）",
      C: "每日站立會議的議程範本",
      D: "專案對公司策略的貢獻",
    },
    answer: "C",
    explanation: {
      why: "商業企劃案是高階商業文件，不會包含每日站立會議這類執行層面細節。",
      others: {
        A: "商業需要是商業企劃案核心。",
        B: "成本效益分析是商業企劃案關鍵。",
        D: "策略貢獻是商業企劃案要件。",
      },
      keyPoint: "商業企劃案 = 高階、商業層面，不含執行細節。",
    },
  },
  {
    id: "B-009",
    chapter: "B",
    topic: "策略調整",
    subtopic: "價值交付",
    difficulty: "medium",
    question:
      "預測式與敏捷式在「價值交付」上的最大差異是？",
    options: {
      A: "預測式完全不創造價值",
      B: "預測式最終一次性交付；敏捷式分批早期交付",
      C: "敏捷式不用交付任何東西",
      D: "兩者沒有差別",
    },
    answer: "B",
    explanation: {
      why: "預測式在專案尾聲一次交付；敏捷式透過迭代/增量分批交付提早實現價值。",
      others: {
        A: "預測式也創造價值，只是時機不同。",
        C: "敏捷式持續交付可用增量。",
        D: "有明顯差異。",
      },
      keyPoint: "預測式 = 最後一次；敏捷式 = 早期分批。",
    },
  },
  {
    id: "B-010",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷思維",
    difficulty: "hard",
    question:
      "「Being Agile」相對於「Doing Agile」強調什麼？",
    options: {
      A: "只要使用 Jira 就是敏捷",
      B: "內化敏捷價值觀與思維比套用流程工具更重要",
      C: "每天開站立會就是敏捷",
      D: "敏捷只是工具不是文化",
    },
    answer: "B",
    explanation: {
      why: "Being Agile = 內化敏捷價值觀（思維先於實踐）；Doing Agile 只是套用流程。",
      others: {
        A: "工具不代表敏捷。",
        C: "儀式不等於思維改變。",
        D: "敏捷本質是文化與價值觀。",
      },
      keyPoint: "Being Agile > Doing Agile。沒思維 = 假敏捷。",
    },
  },
  {
    id: "B-011",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業需要",
    difficulty: "medium",
    question:
      "專案存在的根本理由來自於哪一份文件？",
    options: {
      A: "專案章程",
      B: "商業企劃案（Business Case）",
      C: "溝通管理計畫書",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案證明專案存在的商業需要與合理性，是專案誕生的源頭。",
      others: {
        A: "專案章程是基於商業企劃案產出的正式授權文件。",
        C: "溝通計畫處理資訊流通。",
        D: "風險登錄冊記錄風險，與商業需要無關。",
      },
      keyPoint: "商業企劃案 → 專案章程 → 後續計畫書。",
    },
  },
  {
    id: "B-012",
    chapter: "B",
    topic: "策略調整",
    subtopic: "效益管理計畫書",
    difficulty: "medium",
    question:
      "效益管理計畫書（Benefits Management Plan）的核心目的為何？",
    options: {
      A: "規範專案執行期間的每日站立會議",
      B: "描述如何創造、最大化、維持專案效益，並追蹤效益實現",
      C: "詳細記錄所有程式碼與測試",
      D: "規定專案預算分配",
    },
    answer: "B",
    explanation: {
      why: "效益管理計畫書聚焦「效益如何落地與追蹤」，含度量指標、時間框架、責任人。",
      others: {
        A: "不涉及執行細節儀式。",
        C: "不涉及技術實作。",
        D: "預算屬於成本管理範疇。",
      },
      keyPoint: "效益管理計畫書 = 效益的落地追蹤與指標。",
    },
  },
  {
    id: "B-013",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略對齊責任",
    difficulty: "medium",
    question:
      "確保專案「校準組織策略」最主要的文件依據是？",
    options: {
      A: "溝通管理計畫書",
      B: "專案章程",
      C: "工作分解結構",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "發展專案章程的核心目的之一是確認專案目的與目標校準組織策略。",
      others: {
        A: "溝通管理不直接處理策略對齊。",
        C: "WBS 是範疇分解，不談策略。",
        D: "風險登錄冊記錄風險。",
      },
      keyPoint: "專案目的 + 策略校準 → 最精準是專案章程。",
    },
  },
  {
    id: "B-014",
    chapter: "B",
    topic: "策略調整",
    subtopic: "市場機會",
    difficulty: "hard",
    question:
      "執行中專案的 PO 發現競爭者新技術可以整合進自家產品。PO「應該」怎麼做？",
    options: {
      A: "直接讓團隊停下手邊工作，加入新技術",
      B: "先評估新技術帶來的商業價值，再重新排 Backlog 優先序",
      C: "請贊助者裁決是否加入",
      D: "完全忽略競爭者技術",
    },
    answer: "B",
    explanation: {
      why: "PO 先評估新技術的價值，再更新 Backlog 優先序。",
      others: {
        A: "未評估就打亂工作容易混亂。",
        C: "Backlog 管理是 PO 權限，不需每件事都找贊助者。",
        D: "完全忽略會錯過價值提升機會。",
      },
      keyPoint: "PO 面對新機會 = 評估價值 + 重新排 Backlog。",
    },
  },
  {
    id: "B-015",
    chapter: "B",
    topic: "策略調整",
    subtopic: "高階文件區辨",
    difficulty: "hard",
    question:
      "「商業企劃案」、「效益管理計畫書」、「專案章程」三者的「先後順序」最可能是？",
    options: {
      A: "專案章程 → 商業企劃案 → 效益管理計畫書",
      B: "商業企劃案 → 效益管理計畫書 → 專案章程",
      C: "效益管理計畫書 → 商業企劃案 → 專案章程",
      D: "專案章程 → 效益管理計畫書 → 商業企劃案",
    },
    answer: "B",
    explanation: {
      why: "通常先有商業需要（BC）→ 定義效益如何實現（BMP）→ 發布正式章程授權啟動。",
      others: {
        A: "章程建立在商業企劃案之後。",
        C: "效益管理計畫書建立在商業企劃案之後。",
        D: "順序顛倒。",
      },
      keyPoint: "商業企劃案 → 效益管理計畫書 → 專案章程。",
    },
  },
  {
    id: "B-016",
    chapter: "B",
    topic: "策略調整",
    subtopic: "公司願景",
    difficulty: "easy",
    question:
      "「專案的營收目標實現公司五年的高端化願景」這段敘述最符合 SMART 哪一項？",
    options: {
      A: "Specific",
      B: "Measurable",
      C: "Relevant",
      D: "Time-bound",
    },
    answer: "C",
    explanation: {
      why: "連結公司願景/策略 = Relevant（相關）。",
      others: {
        A: "具體要描述產出物。",
        B: "可衡量要有數字。",
        D: "有時限要有日期。",
      },
      keyPoint: "對齊公司願景/策略 → Relevant。",
    },
  },
  {
    id: "B-017",
    chapter: "B",
    topic: "策略調整",
    subtopic: "組織策略變動",
    difficulty: "medium",
    question:
      "公司年度大會宣布策略從「量大」轉向「高端利潤」，專案 KPI 原本設定來客量 +30%。PM 應？",
    options: {
      A: "繼續執行原 KPI",
      B: "重新檢視 KPI 是否仍對齊新策略，並與贊助者討論調整",
      C: "直接把 KPI 砍半",
      D: "讓團隊停工等公司指示",
    },
    answer: "B",
    explanation: {
      why: "策略變動應評估 KPI 是否仍有意義，並與贊助者討論後調整。",
      others: {
        A: "盲目執行會偏離策略。",
        C: "未評估就改數字沒依據。",
        D: "消極停工浪費資源。",
      },
      keyPoint: "策略變 → 檢視對齊 → 討論調整。",
    },
  },
  {
    id: "B-018",
    chapter: "B",
    topic: "策略調整",
    subtopic: "短期 vs 長期效益",
    difficulty: "medium",
    question:
      "效益管理計畫書通常會同時描述哪兩類效益的時間框架？",
    options: {
      A: "風險與議題",
      B: "短期與長期效益",
      C: "成本與利潤",
      D: "硬體與軟體",
    },
    answer: "B",
    explanation: {
      why: "效益管理計畫書記錄效益的短期與長期實現時間框架與指標。",
      others: {
        A: "風險議題屬於風險/議題管理。",
        C: "成本與利潤屬於財務分析。",
        D: "硬體軟體屬於產品架構。",
      },
      keyPoint: "效益管理計畫書 = 短期+長期效益實現追蹤。",
    },
  },
  {
    id: "B-019",
    chapter: "B",
    topic: "策略調整",
    subtopic: "利害關係人期望",
    difficulty: "medium",
    question:
      "面對多位利害關係人對價值認知不一致，PM 首要行動是？",
    options: {
      A: "自行判斷後執行",
      B: "召開會議協助利害關係人達成對「價值」的共識",
      C: "完全按最高階主管說的做",
      D: "暫停專案",
    },
    answer: "B",
    explanation: {
      why: "對齊不同利害關係人對價值的認知，是達成專案成功的關鍵。",
      others: {
        A: "自行判斷風險高。",
        C: "忽略其他利害關係人可能造成反彈。",
        D: "消極處理會延誤。",
      },
      keyPoint: "價值認知不一 → 主動協調達成共識。",
    },
  },
  {
    id: "B-020",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷客戶參與",
    difficulty: "medium",
    question:
      "敏捷專案為何比預測式更能因應策略變化？",
    options: {
      A: "敏捷不需要計畫",
      B: "敏捷透過短迭代與客戶回饋，可即時調整 Backlog 方向",
      C: "敏捷專案絕對不會失敗",
      D: "敏捷沒有預算限制",
    },
    answer: "B",
    explanation: {
      why: "短迭代 + 客戶回饋 + 重新排序 Backlog = 能快速回應策略變化。",
      others: {
        A: "敏捷也需要計畫。",
        C: "敏捷不保證成功。",
        D: "預算一樣要管理。",
      },
      keyPoint: "敏捷的適應力來自「短迭代 + 持續回饋」。",
    },
  },
  {
    id: "B-021",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業文件變更",
    difficulty: "hard",
    question:
      "專案進行中，若確認外部變化導致商業需要改變，應更新哪兩份「商業文件」？",
    options: {
      A: "商業企劃案 + 效益管理計畫書",
      B: "溝通計畫書 + 風險登錄冊",
      C: "WBS + 時程網圖",
      D: "品質管理計畫書 + 採購計畫書",
    },
    answer: "A",
    explanation: {
      why: "商業文件 = 商業企劃案 + 效益管理計畫書，策略/價值變動時需同步更新。",
      others: {
        B: "溝通計畫與風險登錄冊是專案文件，不是商業文件。",
        C: "都是範疇/時程執行面文件。",
        D: "都是知識領域計畫書。",
      },
      keyPoint: "兩大商業文件 = 商業企劃案 + 效益管理計畫書。",
    },
  },
  {
    id: "B-022",
    chapter: "B",
    topic: "策略調整",
    subtopic: "專案 vs 營運",
    difficulty: "easy",
    question:
      "「專案」與「營運」在策略角色上的主要差異？",
    options: {
      A: "兩者完全一樣",
      B: "專案創造變革與新價值；營運持續交付既有價值",
      C: "專案只做財務、營運只做技術",
      D: "專案不用關心策略",
    },
    answer: "B",
    explanation: {
      why: "專案是變革載體，營運是持續交付，兩者都對齊策略但角色不同。",
      others: {
        A: "性質完全不同。",
        C: "領域上有重疊。",
        D: "專案必須對齊策略。",
      },
      keyPoint: "專案 = 變革創造新價值；營運 = 持續維持價值。",
    },
  },
  {
    id: "B-023",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略脈絡裁適",
    difficulty: "medium",
    question:
      "下列何者最能說明「依專案脈絡裁適」的原則？",
    options: {
      A: "所有專案都用同一套流程",
      B: "根據專案獨特性、環境、人員、時間調整工作方式",
      C: "只依贊助者喜好選方法",
      D: "按年齡分配開發手法",
    },
    answer: "B",
    explanation: {
      why: "Tailoring 原則強調每個專案獨特，要依脈絡調整手法與流程。",
      others: {
        A: "相反，Tailoring 不主張一刀切。",
        C: "應基於專案特性而非個人喜好。",
        D: "與年齡無關。",
      },
      keyPoint: "Tailoring = 依脈絡（獨特性+環境+人員+時間）調整。",
    },
  },
  {
    id: "B-024",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷新機會",
    difficulty: "medium",
    question:
      "敏捷專案中，當發現原計畫功能已無市場價值，PO 應如何處理 Backlog？",
    options: {
      A: "堅持完成所有原訂功能",
      B: "移除或降低該功能優先序，改做有價值的項目",
      C: "暫停 Sprint 直到確定",
      D: "交給 Scrum Master 決定",
    },
    answer: "B",
    explanation: {
      why: "敏捷強調價值交付，PO 有責任調整 Backlog，砍掉低價值項目。",
      others: {
        A: "違背敏捷「價值優先」原則。",
        C: "不需要完全停工。",
        D: "Backlog 優先序是 PO 的責任。",
      },
      keyPoint: "敏捷 Backlog 以價值為先，沒價值的功能可砍。",
    },
  },
  {
    id: "B-025",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業價值來源",
    difficulty: "easy",
    question:
      "下列何者「不屬於」商業價值的有形與無形效益？",
    options: {
      A: "財務獲利",
      B: "品牌形象提升",
      C: "員工加班時數",
      D: "市場佔有率",
    },
    answer: "C",
    explanation: {
      why: "加班時數是投入/成本，不是價值產出。",
      others: {
        A: "財務是有形效益。",
        B: "品牌是無形效益。",
        D: "市場佔有率是有形效益。",
      },
      keyPoint: "價值 = 產出的效益（有形+無形），不是投入。",
    },
  },
];

export default questions;
