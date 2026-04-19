// E. 專案治理（40 題）
// 主題：專案章程、PMO、治理框架、決策權限、組織結構
const questions = [
  {
    id: "E-001",
    chapter: "E",
    topic: "專案治理",
    subtopic: "無 PMO 治理",
    difficulty: "medium",
    question:
      "組織沒有 PMO，沒有正式治理政策。為確定有效治理方式，PM 首先該？",
    options: {
      A: "與團隊成員及利害關係人討論，判定組織是否有非正式的治理政策與慣例",
      B: "請教主題專家了解業界最佳實務",
      C: "選擇預測式或敏捷式框架作為治理基礎",
      D: "輔導團隊制定客製化治理政策",
    },
    answer: "A",
    explanation: {
      why: "沒有 PMO ≠ 沒有慣例；先向內找現有非正式 OPA，避免重造輪子且對齊組織文化。",
      others: {
        B: "SME 給業界實務，容易水土不服。",
        C: "開發框架 ≠ 治理，治理範圍更大。",
        D: "客製化是最後手段，必先確認真的沒有才做。",
      },
      keyPoint: "沒 PMO → 先問現有非正式慣例（OPA 包含非正式）。",
    },
  },
  {
    id: "E-002",
    chapter: "E",
    topic: "專案治理",
    subtopic: "專案章程定義",
    difficulty: "easy",
    question:
      "下列何者最能描述「專案章程（Project Charter）」的作用？",
    options: {
      A: "規範每日工作細節",
      B: "正式授權專案成立，並授權 PM 動用資源",
      C: "規範程式碼風格",
      D: "記錄 Sprint 待辦清單",
    },
    answer: "B",
    explanation: {
      why: "章程的核心作用是正式授權專案、賦予 PM 動用資源權限。",
      others: {
        A: "章程不含每日細節。",
        C: "不涉及技術細節。",
        D: "那是 Sprint Backlog。",
      },
      keyPoint: "章程 = 專案正式授權書 + PM 動用資源的依據。",
    },
  },
  {
    id: "E-003",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程核准者",
    difficulty: "easy",
    question:
      "專案章程的「核准與簽署」由誰負責？",
    options: {
      A: "專案經理",
      B: "專案發起人或贊助者",
      C: "開發團隊",
      D: "品保經理",
    },
    answer: "B",
    explanation: {
      why: "章程必須由發起人/贊助者核准簽署，才能授權 PM 與專案成立。",
      others: {
        A: "PM 可參與撰寫但不核准自己的授權書。",
        C: "團隊不核准章程。",
        D: "QA 不核准。",
      },
      keyPoint: "章程核准權 = 發起人 / 贊助者。",
    },
  },
  {
    id: "E-004",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程內容",
    difficulty: "medium",
    question:
      "下列何者「不會」寫在專案章程中？",
    options: {
      A: "專案目的與目標",
      B: "委派的 PM 姓名與授權範圍",
      C: "每日程式碼提交規範",
      D: "高階里程碑時程",
    },
    answer: "C",
    explanation: {
      why: "程式碼規範屬於開發團隊內部細節，非章程內容。",
      others: {
        A: "目的與目標是章程核心。",
        B: "PM 姓名與權限是章程要件。",
        D: "里程碑是章程內容。",
      },
      keyPoint: "章程 = 高階 15 項內容，不含技術/執行細節。",
    },
  },
  {
    id: "E-005",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 類型",
    difficulty: "medium",
    question:
      "PMO 三大類型中，具有最大控制權、可直接管理專案的是？",
    options: {
      A: "支援型（Supportive）",
      B: "控制型（Controlling）",
      C: "指導型（Directive）",
      D: "諮詢型（Advisory）",
    },
    answer: "C",
    explanation: {
      why: "Directive 指導型 PMO 直接負責專案執行，控制權最大。",
      others: {
        A: "支援型只提供範本、訓練。",
        B: "控制型要求遵循流程但不直接管專案。",
        D: "諮詢型是非正式術語。",
      },
      keyPoint: "PMO 三型：Supportive (小) → Controlling (中) → Directive (大)。",
    },
  },
  {
    id: "E-006",
    chapter: "E",
    topic: "專案治理",
    subtopic: "組織結構",
    difficulty: "hard",
    question:
      "在「功能型組織」中，專案經理的典型權力為？",
    options: {
      A: "權力最大，控制預算與資源",
      B: "權力較小，通常是協調角色",
      C: "與功能經理平起平坐",
      D: "沒有專案經理",
    },
    answer: "B",
    explanation: {
      why: "功能型組織中，資源與預算握在 FM 手中，PM 權力較小，多為協調者。",
      others: {
        A: "那是專案型組織特徵。",
        C: "那是平衡矩陣。",
        D: "仍有 PM 角色。",
      },
      keyPoint: "功能型組織 → PM 權小，FM 權大。",
    },
  },
  {
    id: "E-007",
    chapter: "E",
    topic: "專案治理",
    subtopic: "矩陣組織",
    difficulty: "medium",
    question:
      "在「平衡矩陣」組織中，團隊成員面臨的最大挑戰是？",
    options: {
      A: "沒有領導",
      B: "同時向 PM 與 FM 報告，容易產生衝突的忠誠",
      C: "資源永遠不夠",
      D: "完全沒有規章",
    },
    answer: "B",
    explanation: {
      why: "平衡矩陣中 PM 與 FM 權力相當，成員同時向兩人報告造成「衝突的忠誠」。",
      others: {
        A: "有領導。",
        C: "不是結構本身造成。",
        D: "有規章。",
      },
      keyPoint: "平衡矩陣 = PM + FM 共同掌權，衝突的忠誠。",
    },
  },
  {
    id: "E-008",
    chapter: "E",
    topic: "專案治理",
    subtopic: "專案型組織",
    difficulty: "medium",
    question:
      "在「專案型組織」中，PM 的權力最接近？",
    options: {
      A: "極低",
      B: "與 FM 平等",
      C: "高，完全控制資源與預算",
      D: "只控制時程",
    },
    answer: "C",
    explanation: {
      why: "專案型組織是以專案為中心，PM 擁有完整資源與預算控制權。",
      others: {
        A: "那是功能型。",
        B: "那是平衡矩陣。",
        D: "PM 不只管時程。",
      },
      keyPoint: "專案型組織 → PM 全權在握。",
    },
  },
  {
    id: "E-009",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程變更",
    difficulty: "hard",
    question:
      "專案進行中若商業需要發生重大改變，應優先更新哪份文件？",
    options: {
      A: "專案管理計畫書",
      B: "商業企劃案（若需要，再更新專案章程）",
      C: "WBS",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "商業需要變動應先回到源頭商業企劃案，必要時再更新章程。",
      others: {
        A: "計畫書後更新。",
        C: "WBS 是範疇工具。",
        D: "風險登錄冊記錄風險。",
      },
      keyPoint: "改源頭（BC）→ 再動章程 → 再調整計畫書。",
    },
  },
  {
    id: "E-010",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理政策來源",
    difficulty: "medium",
    question:
      "專案治理政策通常來自？",
    options: {
      A: "PM 自己擬",
      B: "組織治理框架（由 PMO 制定或與組織治理政策對齊）",
      C: "團隊投票決定",
      D: "客戶指定",
    },
    answer: "B",
    explanation: {
      why: "專案治理從組織治理向下延伸，確保與公司治理對齊。",
      others: {
        A: "PM 無權自訂治理。",
        C: "治理非投票議題。",
        D: "客戶可能有要求但治理源自組織。",
      },
      keyPoint: "專案治理 = 組織治理向下延伸。",
    },
  },
  {
    id: "E-011",
    chapter: "E",
    topic: "專案治理",
    subtopic: "贊助者角色",
    difficulty: "easy",
    question:
      "專案「贊助者（Sponsor）」最主要的責任是？",
    options: {
      A: "參與每日站立會議",
      B: "提供資源、授權 PM、排除高層障礙、對商業成果負責",
      C: "負責程式實作",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "贊助者提供資源、授權 PM、向上溝通、排除障礙、對商業成功負責。",
      others: {
        A: "贊助者不參與執行細節。",
        C: "不是開發角色。",
        D: "不是設計角色。",
      },
      keyPoint: "贊助者 = 提供資源+授權+承擔商業成果。",
    },
  },
  {
    id: "E-012",
    chapter: "E",
    topic: "專案治理",
    subtopic: "向上陳報",
    difficulty: "medium",
    question:
      "PM 面對超出授權範圍的問題時，應？",
    options: {
      A: "自行解決不報告",
      B: "向治理委員會或贊助者陳報",
      C: "交給團隊投票",
      D: "拖延不處理",
    },
    answer: "B",
    explanation: {
      why: "超出 PM 授權須向治理層陳報，由具權限者裁決。",
      others: {
        A: "越權行為。",
        C: "團隊無裁決權。",
        D: "延誤造成更大問題。",
      },
      keyPoint: "超越授權 → 向治理層陳報。",
    },
  },
  {
    id: "E-013",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程 15 項",
    difficulty: "medium",
    question:
      "下列何者「最可能」出現在專案章程？",
    options: {
      A: "WBS 細節",
      B: "高階風險清單",
      C: "敏捷 Sprint 時程",
      D: "程式架構圖",
    },
    answer: "B",
    explanation: {
      why: "高階風險是章程要件之一，反映專案整體風險考量。",
      others: {
        A: "WBS 屬範疇管理產出。",
        C: "Sprint 時程屬執行層面。",
        D: "程式架構屬技術設計。",
      },
      keyPoint: "章程包含高階風險，不含技術/執行細節。",
    },
  },
  {
    id: "E-014",
    chapter: "E",
    topic: "專案治理",
    subtopic: "變更管制",
    difficulty: "medium",
    question:
      "專案變更管制委員會（CCB）的主要功能為？",
    options: {
      A: "執行每日程式碼審查",
      B: "評估與核准/駁回重大變更請求",
      C: "處理薪資調整",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "CCB 是治理機制，審核重大變更是否核准。",
      others: {
        A: "程式審查是技術實務。",
        C: "不涉及人資。",
        D: "不涉及設計。",
      },
      keyPoint: "CCB = 變更請求的核准機制。",
    },
  },
  {
    id: "E-015",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 支援",
    difficulty: "easy",
    question:
      "支援型 PMO 最主要的角色為？",
    options: {
      A: "強制要求專案遵循流程",
      B: "提供範本、訓練、最佳實務供專案參考",
      C: "直接指揮專案",
      D: "稽核財務",
    },
    answer: "B",
    explanation: {
      why: "Supportive PMO 主要提供資源、範本、訓練，不強制。",
      others: {
        A: "那是 Controlling PMO。",
        C: "那是 Directive PMO。",
        D: "不是 PMO 核心職能。",
      },
      keyPoint: "Supportive PMO = 提供資源支援，不強制。",
    },
  },
  {
    id: "E-016",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 控制",
    difficulty: "medium",
    question:
      "控制型 PMO 最主要的作用為？",
    options: {
      A: "直接指揮專案",
      B: "要求專案遵循共同方法、流程與範本，確保一致性",
      C: "完全不介入",
      D: "只做培訓",
    },
    answer: "B",
    explanation: {
      why: "Controlling PMO 要求組織內專案遵循標準流程與方法，確保一致性。",
      others: {
        A: "那是 Directive。",
        C: "不介入是 Supportive。",
        D: "培訓是 Supportive 功能之一。",
      },
      keyPoint: "Controlling PMO = 要求遵循流程，確保一致性。",
    },
  },
  {
    id: "E-017",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理框架",
    difficulty: "medium",
    question:
      "專案治理框架「不包含」下列何者？",
    options: {
      A: "決策權限",
      B: "向上陳報門檻",
      C: "預算監督",
      D: "程式命名規範",
    },
    answer: "D",
    explanation: {
      why: "命名規範屬技術開發實務，不屬治理框架。",
      others: {
        A: "治理核心。",
        B: "治理核心。",
        C: "治理核心。",
      },
      keyPoint: "治理 = 決策+陳報+預算監督+議題處理。",
    },
  },
  {
    id: "E-018",
    chapter: "E",
    topic: "專案治理",
    subtopic: "FM 權力",
    difficulty: "medium",
    question:
      "「功能經理（FM）」在強矩陣組織中的權力為？",
    options: {
      A: "最大",
      B: "較小，資源與預算多由 PM 掌握",
      C: "與 PM 平等",
      D: "完全沒有",
    },
    answer: "B",
    explanation: {
      why: "強矩陣偏向專案導向，PM 權大，FM 權相對較小。",
      others: {
        A: "那是功能型組織。",
        C: "那是平衡矩陣。",
        D: "仍有 FM 角色。",
      },
      keyPoint: "強矩陣 → PM 權大 > FM。",
    },
  },
  {
    id: "E-019",
    chapter: "E",
    topic: "專案治理",
    subtopic: "弱矩陣 FM",
    difficulty: "medium",
    question:
      "「弱矩陣」組織中，FM 的權力為？",
    options: {
      A: "與 PM 平等",
      B: "大，PM 多為協調者",
      C: "極小",
      D: "沒有 FM 角色",
    },
    answer: "B",
    explanation: {
      why: "弱矩陣中 FM 仍掌握資源與預算，PM 多為協調角色。",
      others: {
        A: "那是平衡矩陣。",
        C: "那是專案型。",
        D: "有 FM 角色。",
      },
      keyPoint: "弱矩陣 → FM 權大，PM 協調。",
    },
  },
  {
    id: "E-020",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PM 授權",
    difficulty: "medium",
    question:
      "章程記錄 PM「可核准 10% 以內時程異動或 5 萬元以內預算調整」。這屬於？",
    options: {
      A: "每日站立會議安排",
      B: "PM 的授權範圍與責任",
      C: "風險分類",
      D: "利害關係人清單",
    },
    answer: "B",
    explanation: {
      why: "這段描述 PM 可自行核准的異動閾值，屬授權範圍。",
      others: {
        A: "不屬執行細節。",
        C: "不涉及風險分類。",
        D: "與利害關係人無關。",
      },
      keyPoint: "章程內 PM 授權範圍 = 能獨立核准的額度/範疇。",
    },
  },
  {
    id: "E-021",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理層決策",
    difficulty: "hard",
    question:
      "下列何者「最可能」需要治理層（Sponsor/Steering Committee）決策？",
    options: {
      A: "每日代碼 review",
      B: "是否終止虧損專案或追加大幅預算",
      C: "Sprint Backlog 排序",
      D: "每日站立會議時間",
    },
    answer: "B",
    explanation: {
      why: "終止專案或追加大幅預算超越 PM 授權，需要治理層決策。",
      others: {
        A: "技術層面，團隊處理。",
        C: "PO 決定。",
        D: "團隊自訂。",
      },
      keyPoint: "治理層決策 = 超越 PM 授權的重大議題。",
    },
  },
  {
    id: "E-022",
    chapter: "E",
    topic: "專案治理",
    subtopic: "敏捷治理差異",
    difficulty: "hard",
    question:
      "敏捷專案與預測式專案在「治理審查時機」上的主要差異？",
    options: {
      A: "兩者完全相同",
      B: "預測式用階段閘門（Phase Gate）；敏捷用迭代結束審查",
      C: "敏捷不做審查",
      D: "預測式不做審查",
    },
    answer: "B",
    explanation: {
      why: "預測式依階段在交界做 Phase Gate；敏捷每個迭代結束做 Review。",
      others: {
        A: "方式不同。",
        C: "敏捷有 Review 審查。",
        D: "預測式有 Phase Gate。",
      },
      keyPoint: "預測式 Phase Gate；敏捷 Iteration Review。",
    },
  },
  {
    id: "E-023",
    chapter: "E",
    topic: "專案治理",
    subtopic: "OPA 正式與非正式",
    difficulty: "medium",
    question:
      "下列何者屬於組織過程資產（OPA）？",
    options: {
      A: "公司的專案範本、歷史教訓資料庫、非正式潛規則",
      B: "外部市場指數",
      C: "競爭者產品規格",
      D: "政府法規",
    },
    answer: "A",
    explanation: {
      why: "OPA 包含組織內部的正式流程、範本、歷史知識與非正式慣例。",
      others: {
        B: "市場指數是 EEF。",
        C: "競爭者資訊是 EEF。",
        D: "法規是 EEF。",
      },
      keyPoint: "OPA = 內部資產（含非正式）；EEF = 外部環境。",
    },
  },
  {
    id: "E-024",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理 vs 管理",
    difficulty: "hard",
    question:
      "「專案治理」與「專案管理」的差別為？",
    options: {
      A: "兩者相同",
      B: "治理定義決策與權限結構；管理執行專案工作",
      C: "治理只談錢，管理只談時程",
      D: "管理是治理的子集",
    },
    answer: "B",
    explanation: {
      why: "治理是框架（決策權、陳報路徑、核准門檻）；管理是執行（計畫、執行、監控）。",
      others: {
        A: "兩者職能不同。",
        C: "過度簡化。",
        D: "相反，管理在治理框架下運作。",
      },
      keyPoint: "治理 = 框架決策；管理 = 執行落地。",
    },
  },
  {
    id: "E-025",
    chapter: "E",
    topic: "專案治理",
    subtopic: "退出準則",
    difficulty: "medium",
    question:
      "章程中「專案退出準則（Exit Criteria）」的作用為？",
    options: {
      A: "規定成員每日下班時間",
      B: "明確專案在何種條件下完成或被終止",
      C: "設定薪資結構",
      D: "定義會議規則",
    },
    answer: "B",
    explanation: {
      why: "退出準則明確專案何時算完成或終止，避免無限延伸。",
      others: {
        A: "與下班無關。",
        C: "與薪資無關。",
        D: "與會議無關。",
      },
      keyPoint: "退出準則 = 何時算完成/終止的驗收/中止條件。",
    },
  },
  {
    id: "E-026",
    chapter: "E",
    topic: "專案治理",
    subtopic: "Steering Committee",
    difficulty: "medium",
    question:
      "專案「指導委員會（Steering Committee）」的主要職責為？",
    options: {
      A: "日常專案管理",
      B: "提供戰略指引、重大決策與資源調配",
      C: "開發產品",
      D: "執行測試",
    },
    answer: "B",
    explanation: {
      why: "Steering Committee 是治理層，提供戰略指引與重大決策。",
      others: {
        A: "那是 PM 工作。",
        C: "團隊工作。",
        D: "QA 工作。",
      },
      keyPoint: "Steering Committee = 戰略+重大決策+資源。",
    },
  },
  {
    id: "E-027",
    chapter: "E",
    topic: "專案治理",
    subtopic: "組織結構影響",
    difficulty: "medium",
    question:
      "選擇組織結構會影響專案下列何者「最顯著」？",
    options: {
      A: "程式碼品質",
      B: "PM 與 FM 的權力與資源分配",
      C: "辦公室顏色",
      D: "員工餐點",
    },
    answer: "B",
    explanation: {
      why: "組織結構直接決定 PM 與 FM 的權力比例與資源歸屬。",
      others: {
        A: "品質與流程/人員有關。",
        C: "表面。",
        D: "無關。",
      },
      keyPoint: "組織結構 → PM vs FM 權力比重。",
    },
  },
  {
    id: "E-028",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程 vs 計畫書",
    difficulty: "hard",
    question:
      "「專案章程」與「專案管理計畫書」的差別？",
    options: {
      A: "兩者相同",
      B: "章程為高階授權文件；計畫書為詳細執行藍圖",
      C: "計畫書先於章程",
      D: "章程包含 WBS",
    },
    answer: "B",
    explanation: {
      why: "章程是啟動授權的高階文件；計畫書是規劃階段產出、指導執行與監控。",
      others: {
        A: "兩者不同。",
        C: "章程先於計畫書。",
        D: "章程不含 WBS，WBS 是計畫書產出。",
      },
      keyPoint: "章程 = 高階授權；計畫書 = 詳細執行藍圖。",
    },
  },
  {
    id: "E-029",
    chapter: "E",
    topic: "專案治理",
    subtopic: "贊助者支持",
    difficulty: "medium",
    question:
      "研究顯示專案成功與下列哪項「最直接相關」？",
    options: {
      A: "團隊加班時數",
      B: "贊助者的積極支持",
      C: "辦公室大小",
      D: "電腦配備",
    },
    answer: "B",
    explanation: {
      why: "贊助者積極支持是專案成功最重要的關鍵成功因素之一。",
      others: {
        A: "加班不保證成功。",
        C: "與成功無關。",
        D: "影響有限。",
      },
      keyPoint: "贊助者積極支持 = 專案成功關鍵。",
    },
  },
  {
    id: "E-030",
    chapter: "E",
    topic: "專案治理",
    subtopic: "委員會角色",
    difficulty: "medium",
    question:
      "PM 發現專案遭遇贊助者無法解決的跨部門衝突，應向誰陳報？",
    options: {
      A: "自行解決",
      B: "指導委員會或更高治理層",
      C: "完全不處理",
      D: "內部宣戰",
    },
    answer: "B",
    explanation: {
      why: "贊助者無法處理時，應向更高治理層（指導委員會/董事會）陳報。",
      others: {
        A: "超越權限。",
        C: "會惡化。",
        D: "不專業。",
      },
      keyPoint: "陳報路徑：PM → 贊助者 → 指導委員會 → 董事會。",
    },
  },
  {
    id: "E-031",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 價值",
    difficulty: "medium",
    question:
      "下列何者「不是」PMO 的典型價值？",
    options: {
      A: "統一方法論與範本",
      B: "跨專案資源協調",
      C: "替所有專案寫程式",
      D: "建立專案組合管理能力",
    },
    answer: "C",
    explanation: {
      why: "寫程式是團隊職能，不是 PMO 價值。",
      others: {
        A: "PMO 典型價值。",
        B: "PMO 典型價值。",
        D: "PMO 典型價值。",
      },
      keyPoint: "PMO = 方法論、協調、組合管理，不是技術實作。",
    },
  },
  {
    id: "E-032",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程與利害關係人",
    difficulty: "medium",
    question:
      "章程中「利害關係人清單」的作用為？",
    options: {
      A: "列出技術規格",
      B: "先行指派關鍵內外部人員，為專案啟動建立共識",
      C: "記錄所有員工薪資",
      D: "列出法規",
    },
    answer: "B",
    explanation: {
      why: "章程中的利害關係人清單列出先期關鍵人員，建立初始共識。",
      others: {
        A: "不是技術規格。",
        C: "不涉及薪資。",
        D: "法規在其他地方。",
      },
      keyPoint: "章程利害關係人清單 = 先期關鍵人員。",
    },
  },
  {
    id: "E-033",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程目的目標",
    difficulty: "medium",
    question:
      "章程記錄「專案目的」應為？",
    options: {
      A: "定量數字如營收、時程",
      B: "定性描述專案要達成的願景",
      C: "程式架構",
      D: "UI 設計圖",
    },
    answer: "B",
    explanation: {
      why: "專案目的是定性描述（如：打造最高級無國界餐廳）；目標才是定量（KPI）。",
      others: {
        A: "那是目標。",
        C: "技術細節。",
        D: "執行細節。",
      },
      keyPoint: "目的 = 定性；目標 = 定量。",
    },
  },
  {
    id: "E-034",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 演進",
    difficulty: "hard",
    question:
      "組織從 Supportive PMO 演進到 Directive PMO 的最常見動機？",
    options: {
      A: "組織策略需要更強的標準化與直接控制",
      B: "員工要求",
      C: "節省辦公室空間",
      D: "減少人力",
    },
    answer: "A",
    explanation: {
      why: "當組織需要更強控制與標準化時會朝 Directive 演進。",
      others: {
        B: "不是員工決定。",
        C: "與空間無關。",
        D: "與人力無關。",
      },
      keyPoint: "PMO 演進由策略驅動，目標是更強治理與一致性。",
    },
  },
  {
    id: "E-035",
    chapter: "E",
    topic: "專案治理",
    subtopic: "專案邊界",
    difficulty: "medium",
    question:
      "章程中「高階專案邊界」的作用為？",
    options: {
      A: "明確說明專案「不包含」什麼，避免範疇蔓延",
      B: "列出所有任務",
      C: "規定工作時數",
      D: "紀錄品質標準",
    },
    answer: "A",
    explanation: {
      why: "高階邊界重點在 Out-of-Scope 聲明，避免範疇蔓延。",
      others: {
        B: "那是 WBS。",
        C: "與時數無關。",
        D: "品質另有計畫書。",
      },
      keyPoint: "章程邊界 = 明確「不包含什麼」避免範疇蔓延。",
    },
  },
  {
    id: "E-036",
    chapter: "E",
    topic: "專案治理",
    subtopic: "核准門檻",
    difficulty: "hard",
    question:
      "治理框架中設置「核准門檻（Threshold）」的目的？",
    options: {
      A: "確保重大議題向上陳報，小議題可自行處理",
      B: "讓 PM 沒有權力",
      C: "延遲決策",
      D: "增加會議數量",
    },
    answer: "A",
    explanation: {
      why: "門檻讓授權範圍清晰，小事 PM 自決，大事向上陳報。",
      others: {
        B: "正好相反。",
        C: "設計是為了加快決策。",
        D: "減少不必要會議。",
      },
      keyPoint: "門檻 = 決策層級切分，效率與控管兼顧。",
    },
  },
  {
    id: "E-037",
    chapter: "E",
    topic: "專案治理",
    subtopic: "敏捷治理",
    difficulty: "hard",
    question:
      "敏捷專案中，誰「通常扮演輕量化治理決策」的角色？",
    options: {
      A: "PO + 贊助者",
      B: "開發團隊投票",
      C: "QA 單獨決定",
      D: "沒有治理",
    },
    answer: "A",
    explanation: {
      why: "敏捷治理輕量化，PO 管價值、贊助者承擔商業成果，兩者為治理核心。",
      others: {
        B: "團隊不負治理。",
        C: "QA 不負治理。",
        D: "敏捷仍需治理。",
      },
      keyPoint: "敏捷治理 = PO + 贊助者。",
    },
  },
  {
    id: "E-038",
    chapter: "E",
    topic: "專案治理",
    subtopic: "商業企劃案變更",
    difficulty: "hard",
    question:
      "商業環境變動導致專案原商業企劃案失效，下一步？",
    options: {
      A: "PM 自行修改企劃案",
      B: "由治理層（贊助者或指導委員會）重新評估並決定是否繼續、變更或終止",
      C: "忽略變動",
      D: "延後處理",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案失效涉及專案去留，必須由治理層決策。",
      others: {
        A: "超越 PM 權限。",
        C: "忽略會造成損失。",
        D: "延後惡化情況。",
      },
      keyPoint: "商業企劃案失效 = 治理層決策。",
    },
  },
  {
    id: "E-039",
    chapter: "E",
    topic: "專案治理",
    subtopic: "跨組織治理",
    difficulty: "hard",
    question:
      "跨組織（多公司合作）專案，治理最關鍵的設計為？",
    options: {
      A: "各公司自己做主",
      B: "建立統一的聯合治理委員會與清楚的決策權、爭議處理機制",
      C: "取消治理",
      D: "交給外部顧問全權決定",
    },
    answer: "B",
    explanation: {
      why: "跨組織需統一治理機制，確保決策權與爭議處理一致。",
      others: {
        A: "會造成混亂。",
        C: "失去管控。",
        D: "外部顧問非當事方，不宜全權。",
      },
      keyPoint: "跨組織治理 = 聯合委員會 + 清楚決策 + 爭議機制。",
    },
  },
  {
    id: "E-040",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程利害關係人指派",
    difficulty: "medium",
    question:
      "章程中指派的「PM 姓名」有什麼重要性？",
    options: {
      A: "只是紀錄",
      B: "明確專案經理身份與其權限，避免日後權責不清",
      C: "讓員工知道誰請客",
      D: "無實質意義",
    },
    answer: "B",
    explanation: {
      why: "明確寫出 PM 姓名與授權範圍，避免日後權責不清爭議。",
      others: {
        A: "不只是紀錄。",
        C: "無關。",
        D: "有實質意義。",
      },
      keyPoint: "章程明確 PM 姓名與授權 = 權責清晰。",
    },
  },
];

export default questions;
