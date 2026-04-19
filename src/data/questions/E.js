// E. 專案治理（40 題 情境題版）
const questions = [
  {
    id: "E-001",
    chapter: "E",
    topic: "專案治理",
    subtopic: "無 PMO 找治理",
    difficulty: "medium",
    question:
      "PM 被正式指派一項新專案，他發現組織沒有 PMO，也沒有正式的治理政策、過程或指引。為了確定有效的治理方式，他「首先」應該？",
    options: {
      A: "與團隊成員及利害關係人討論，判定組織是否存在任何非正式的治理政策、過程和指引",
      B: "請教主題專家了解本專案應採用的最佳治理實務",
      C: "選擇預測式或敏捷式框架作為治理政策的基礎",
      D: "輔導自組織團隊為本專案制定客製化治理政策",
    },
    answer: "A",
    explanation: {
      why: "沒 PMO ≠ 沒慣例。OPA 包含「非正式」的政策過程，PM 應先向內探詢現有慣例，避免重造輪子且對齊組織文化。",
      others: {
        B: "業界最佳實務未必適合組織文化，易水土不服。",
        C: "開發框架 ≠ 治理，治理範圍更大。",
        D: "客製化是最後手段，先確認真的沒有才做。",
      },
      keyPoint: "沒 PMO → 先問現有非正式慣例（OPA 含非正式）。",
    },
  },
  {
    id: "E-002",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程作用",
    difficulty: "easy",
    question:
      "新人 PM 問：「專案章程到底有什麼用？感覺只是一份文件。」資深 PM 最精準的回答是？",
    options: {
      A: "章程規範每日工作細節",
      B: "章程正式授權專案成立，賦予 PM 動用組織資源以規劃、執行、監控專案的權力",
      C: "章程規範程式碼風格",
      D: "章程是 Sprint Backlog",
    },
    answer: "B",
    explanation: {
      why: "章程的核心作用是正式授權專案與 PM 動用資源的權限，讓團隊有所依歸。",
      others: {
        A: "章程不含每日細節。",
        C: "不涉技術細節。",
        D: "是 Sprint Backlog。",
      },
      keyPoint: "章程 = 專案正式授權書 + PM 授權依據。",
    },
  },
  {
    id: "E-003",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程核准者",
    difficulty: "easy",
    question:
      "PM 將章程草稿準備好，要找人簽核。依治理原則，應該由誰「核准並簽署」章程？",
    options: {
      A: "PM 自己",
      B: "專案發起人或贊助者",
      C: "開發團隊投票決定",
      D: "品保經理",
    },
    answer: "B",
    explanation: {
      why: "章程必須由發起人/贊助者核准簽署，才能授權 PM 與專案成立。PM 可參與撰寫但不核准自己的授權書。",
      others: {
        A: "不能自己授權自己。",
        C: "團隊無核准權。",
        D: "QA 無核准權。",
      },
      keyPoint: "章程核准權 = 發起人 / 贊助者。",
    },
  },
  {
    id: "E-004",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程不寫之物",
    difficulty: "medium",
    question:
      "新人把下列內容都塞進章程草稿，PM 要刪掉最不該寫進章程的一項。他會刪哪個？",
    options: {
      A: "專案目的與目標",
      B: "委派 PM 的姓名與授權範圍",
      C: "每日程式碼提交規範",
      D: "高階里程碑時程",
    },
    answer: "C",
    explanation: {
      why: "章程是高階授權文件，不含程式碼規範這類技術執行細節。",
      others: {
        A: "核心內容。",
        B: "核心內容。",
        D: "高階里程碑屬於章程內容。",
      },
      keyPoint: "章程 = 高階 15 項內容，不含執行細節。",
    },
  },
  {
    id: "E-005",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 類型選擇",
    difficulty: "medium",
    question:
      "PMO 主任要統一公司方法論並直接負責專案執行。這三大 PMO 類型中，最符合「直接指揮執行」的是？",
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
        A: "Supportive 只提供範本訓練。",
        B: "Controlling 要求遵循流程但不直接執行。",
        D: "非 PMI 正式類型。",
      },
      keyPoint: "PMO 三型：Supportive < Controlling < Directive。",
    },
  },
  {
    id: "E-006",
    chapter: "E",
    topic: "專案治理",
    subtopic: "功能型 PM",
    difficulty: "hard",
    question:
      "PM 剛加入一家傳統製造公司，發現資源與預算全掌握在各部門的功能經理手上，他只能跨部門協調。他所處的組織最可能是？",
    options: {
      A: "專案型組織",
      B: "功能型組織，PM 權力較小多為協調者",
      C: "平衡矩陣組織",
      D: "強矩陣組織",
    },
    answer: "B",
    explanation: {
      why: "資源/預算在 FM 手中、PM 協調 = 典型功能型組織。",
      others: {
        A: "專案型 PM 權最大。",
        C: "平衡矩陣 PM 與 FM 平等。",
        D: "強矩陣 PM 權大。",
      },
      keyPoint: "功能型 → PM 權小，FM 權大。",
    },
  },
  {
    id: "E-007",
    chapter: "E",
    topic: "專案治理",
    subtopic: "平衡矩陣挑戰",
    difficulty: "medium",
    question:
      "PM 在平衡矩陣組織中，團隊成員經常陷入「不知道要聽 PM 還是 FM 的」困境。這種結構性挑戰稱為？",
    options: {
      A: "沒有領導",
      B: "衝突的忠誠（Conflict of Loyalty），PM 與 FM 權力相當致成員雙重報告",
      C: "資源永遠不夠",
      D: "完全沒有規章",
    },
    answer: "B",
    explanation: {
      why: "平衡矩陣中 PM 與 FM 權力相當，團隊同時對兩位主管報告造成衝突的忠誠。",
      others: {
        A: "有領導但雙頭。",
        C: "非結構本身問題。",
        D: "有規章。",
      },
      keyPoint: "平衡矩陣 = 衝突的忠誠。",
    },
  },
  {
    id: "E-008",
    chapter: "E",
    topic: "專案治理",
    subtopic: "專案型組織",
    difficulty: "medium",
    question:
      "新科技公司成立，整個公司以專案為單位運作，PM 擁有完整的資源分派與預算權。這種組織類型最接近？",
    options: {
      A: "功能型",
      B: "平衡矩陣",
      C: "專案型組織，PM 權力最大",
      D: "弱矩陣",
    },
    answer: "C",
    explanation: {
      why: "以專案為核心運作、PM 完全控制資源預算 = 專案型組織。",
      others: {
        A: "功能型相反。",
        B: "平衡矩陣不是完全控制。",
        D: "弱矩陣 PM 權小。",
      },
      keyPoint: "專案型 → PM 全權在握。",
    },
  },
  {
    id: "E-009",
    chapter: "E",
    topic: "專案治理",
    subtopic: "商業需要變更源頭",
    difficulty: "hard",
    question:
      "市場劇變使專案原商業需要不再成立。PM 準備啟動變更，他應先更新哪份文件？",
    options: {
      A: "專案管理計畫書",
      B: "商業企劃案（若仍要繼續，再連動更新章程）",
      C: "WBS",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "商業需要變動應從源頭商業企劃案改起，再視情況更新章程、計畫書。",
      others: {
        A: "計畫書在章程後更新。",
        C: "WBS 是範疇工具。",
        D: "風險登錄冊記錄風險。",
      },
      keyPoint: "源頭先動：BC → Charter → 計畫書。",
    },
  },
  {
    id: "E-010",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理政策來源",
    difficulty: "medium",
    question:
      "新 PM 想制定專屬治理政策。主管說「治理應該跟組織治理對齊」。PM 應從哪裡取得治理政策基礎？",
    options: {
      A: "PM 自己擬",
      B: "組織治理框架（通常由 PMO 制定或與組織治理政策對齊）",
      C: "團隊投票",
      D: "客戶指定",
    },
    answer: "B",
    explanation: {
      why: "專案治理必須從組織治理向下延伸，確保對齊。",
      others: {
        A: "PM 無權自訂。",
        C: "治理非投票。",
        D: "客戶可有要求但治理源自組織。",
      },
      keyPoint: "專案治理 = 組織治理向下延伸。",
    },
  },
  {
    id: "E-011",
    chapter: "E",
    topic: "專案治理",
    subtopic: "贊助者責任",
    difficulty: "easy",
    question:
      "新任贊助者問 PM：「我這個角色到底該做什麼？」PM 最合適的說明為？",
    options: {
      A: "每日參與站立會議",
      B: "提供資源、授權 PM、排除高層障礙、對商業成果負責",
      C: "負責寫程式",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "贊助者核心責任：資源、授權、向上溝通、排除障礙、承擔商業成果。",
      others: {
        A: "不參與執行細節。",
        C: "非開發角色。",
        D: "非設計角色。",
      },
      keyPoint: "贊助者 = 資源+授權+排除障礙+承擔商業成果。",
    },
  },
  {
    id: "E-012",
    chapter: "E",
    topic: "專案治理",
    subtopic: "越權陳報",
    difficulty: "medium",
    question:
      "PM 面對一個超出自己授權範圍的重大決策（例如：是否終止專案）。他該？",
    options: {
      A: "自行拍板決定",
      B: "依治理陳報路徑向贊助者或指導委員會陳報由有權者裁決",
      C: "交給團隊投票",
      D: "拖延不處理",
    },
    answer: "B",
    explanation: {
      why: "超越授權的決策必須依陳報路徑向治理層尋求裁決。",
      others: {
        A: "越權。",
        C: "團隊無裁決權。",
        D: "拖延加重問題。",
      },
      keyPoint: "越權 → 向治理層陳報。",
    },
  },
  {
    id: "E-013",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程內容有無",
    difficulty: "medium",
    question:
      "下列哪一項「最可能」出現在專案章程？",
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
        A: "WBS 是範疇管理產出。",
        C: "Sprint 時程屬執行層。",
        D: "程式架構屬技術設計。",
      },
      keyPoint: "章程包含高階風險，不含技術細節。",
    },
  },
  {
    id: "E-014",
    chapter: "E",
    topic: "專案治理",
    subtopic: "CCB 功能",
    difficulty: "medium",
    question:
      "某大型專案啟動 CCB（變更管制委員會）。新成員問「CCB 到底做什麼？」最正確的回答為？",
    options: {
      A: "執行每日程式碼審查",
      B: "評估與核准/駁回專案重大變更請求",
      C: "處理薪資調整",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "CCB 是治理機制，審核變更請求並裁決。",
      others: {
        A: "屬技術實務。",
        C: "非 CCB 範疇。",
        D: "與設計無關。",
      },
      keyPoint: "CCB = 變更請求核准機制。",
    },
  },
  {
    id: "E-015",
    chapter: "E",
    topic: "專案治理",
    subtopic: "Supportive PMO",
    difficulty: "easy",
    question:
      "PMO 主任說：「我們的 PMO 提供範本、訓練、最佳實務，但不強制大家遵循。」這是哪一類 PMO？",
    options: {
      A: "Directive",
      B: "Supportive",
      C: "Controlling",
      D: "強制型",
    },
    answer: "B",
    explanation: {
      why: "Supportive PMO 主要提供資源支援（範本、訓練）但不強制。",
      others: {
        A: "Directive 直接指揮。",
        C: "Controlling 會要求遵循。",
        D: "非 PMI 分類。",
      },
      keyPoint: "Supportive PMO = 提供支援，不強制。",
    },
  },
  {
    id: "E-016",
    chapter: "E",
    topic: "專案治理",
    subtopic: "Controlling PMO",
    difficulty: "medium",
    question:
      "PMO 要求全公司專案遵循共同方法、範本、報表格式，未遵循會被要求改正。這是哪一類 PMO？",
    options: {
      A: "Directive",
      B: "Supportive",
      C: "Controlling",
      D: "Minor",
    },
    answer: "C",
    explanation: {
      why: "要求遵循共同流程與範本 = Controlling PMO 的典型角色。",
      others: {
        A: "Directive 是直接指揮專案。",
        B: "Supportive 不強制。",
        D: "非分類。",
      },
      keyPoint: "Controlling PMO = 要求遵循流程。",
    },
  },
  {
    id: "E-017",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理範圍",
    difficulty: "medium",
    question:
      "新人把下列項目列為治理框架，PM 指出哪一項不屬於治理？",
    options: {
      A: "決策權限",
      B: "向上陳報門檻",
      C: "預算監督",
      D: "程式變數命名規範",
    },
    answer: "D",
    explanation: {
      why: "命名規範屬技術開發實務，不在治理範圍。",
      others: {
        A: "治理核心。",
        B: "治理核心。",
        C: "治理核心。",
      },
      keyPoint: "治理 = 決策+陳報+預算+議題處理。",
    },
  },
  {
    id: "E-018",
    chapter: "E",
    topic: "專案治理",
    subtopic: "強矩陣 FM",
    difficulty: "medium",
    question:
      "在強矩陣組織中，PM 權力大，那麼 FM（功能經理）的權力通常為？",
    options: {
      A: "最大",
      B: "較小，資源與預算多由 PM 掌握",
      C: "與 PM 完全平等",
      D: "完全沒有",
    },
    answer: "B",
    explanation: {
      why: "強矩陣偏專案導向，PM 權大、FM 相對較小，但仍管部門專業資源。",
      others: {
        A: "功能型才是 FM 權最大。",
        C: "平衡矩陣才平等。",
        D: "仍有 FM 角色。",
      },
      keyPoint: "強矩陣 → PM > FM。",
    },
  },
  {
    id: "E-019",
    chapter: "E",
    topic: "專案治理",
    subtopic: "弱矩陣 FM",
    difficulty: "medium",
    question:
      "某公司組織中 FM 仍掌握多數資源與預算、PM 多為協調者。這屬於？",
    options: {
      A: "平衡矩陣",
      B: "弱矩陣",
      C: "專案型",
      D: "強矩陣",
    },
    answer: "B",
    explanation: {
      why: "FM 大權在握 + PM 為協調者 = 弱矩陣的典型樣態，接近功能型。",
      others: {
        A: "平衡矩陣是 PM/FM 平等。",
        C: "專案型 PM 權最大。",
        D: "強矩陣 PM 權大。",
      },
      keyPoint: "弱矩陣 → FM 權大，PM 協調。",
    },
  },
  {
    id: "E-020",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程內授權",
    difficulty: "medium",
    question:
      "章程內記載「PM 可自行核准 10% 以內時程異動、5 萬元以內預算調整」。這段內容屬於？",
    options: {
      A: "每日站立會議安排",
      B: "PM 的授權範圍與可獨立核准的閾值",
      C: "風險分類",
      D: "利害關係人清單",
    },
    answer: "B",
    explanation: {
      why: "這是章程中明確 PM 權責範圍與可自行核准的閾值。",
      others: {
        A: "非執行安排。",
        C: "非風險分類。",
        D: "與利害關係人無關。",
      },
      keyPoint: "章程內 PM 授權範圍 = 可獨立核准的閾值。",
    },
  },
  {
    id: "E-021",
    chapter: "E",
    topic: "專案治理",
    subtopic: "治理層決策範例",
    difficulty: "hard",
    question:
      "下列情境中，最可能需要「治理層（指導委員會/贊助者）」裁決的是？",
    options: {
      A: "每日代碼 Review",
      B: "是否終止虧損專案或追加大額預算",
      C: "Sprint Backlog 排序",
      D: "每日站立會議時間",
    },
    answer: "B",
    explanation: {
      why: "終止專案或追加大額預算超越 PM 授權，必須由治理層裁決。",
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
    subtopic: "審查時機差異",
    difficulty: "hard",
    question:
      "贊助者問：「我們的預測式基建與敏捷 APP 兩個專案，治理審查時機該一致嗎？」PM 最正確的回答是？",
    options: {
      A: "都用 Sprint Review 每兩週",
      B: "預測式用 Phase Gate（階段閘門）；敏捷用迭代結束 Review，依特性分別設計",
      C: "都用 Phase Gate",
      D: "敏捷案不需要審查",
    },
    answer: "B",
    explanation: {
      why: "審查時機依手法特性設計：預測式 Phase Gate、敏捷每迭代 Review。",
      others: {
        A: "預測式沒有 Sprint 概念。",
        C: "敏捷不適用硬階段劃分。",
        D: "敏捷依然要審查。",
      },
      keyPoint: "預測式 Phase Gate；敏捷 Iteration Review。",
    },
  },
  {
    id: "E-023",
    chapter: "E",
    topic: "專案治理",
    subtopic: "OPA 含非正式",
    difficulty: "medium",
    question:
      "新人 PM 整理 OPA 資料，把「公司專案範本、歷史教訓資料庫、部門口耳相傳的報告慣例」都列入。主管說做得對，因為？",
    options: {
      A: "OPA 包含組織的正式文件以及非正式慣例",
      B: "OPA 只含正式文件",
      C: "OPA 只含非正式慣例",
      D: "OPA 是外部環境因素",
    },
    answer: "A",
    explanation: {
      why: "PMBOK 明確說 OPA 包含正式與非正式的政策、過程、程序、歷史資訊。",
      others: {
        B: "也含非正式。",
        C: "也含正式。",
        D: "那是 EEF。",
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
      "新任 PM 問資深 PM：「治理跟管理到底差在哪？」資深 PM 最精準的回答是？",
    options: {
      A: "兩者相同",
      B: "治理定義決策與權限結構（框架）；管理執行專案工作（落地）",
      C: "治理只談錢、管理只談時程",
      D: "管理是治理的子集",
    },
    answer: "B",
    explanation: {
      why: "治理是框架（決策權、陳報路徑、核准門檻）；管理是執行（計畫、執行、監控）。",
      others: {
        A: "職能不同。",
        C: "過度簡化。",
        D: "順序顛倒。",
      },
      keyPoint: "治理 = 框架；管理 = 執行。",
    },
  },
  {
    id: "E-025",
    chapter: "E",
    topic: "專案治理",
    subtopic: "退出準則",
    difficulty: "medium",
    question:
      "章程草稿裡寫著「退出準則」。贊助者問這是什麼？PM 最合適的解釋為？",
    options: {
      A: "成員每日下班時間",
      B: "明確專案在何種條件下算完成，或在何種情況下被終止",
      C: "薪資結構",
      D: "會議規則",
    },
    answer: "B",
    explanation: {
      why: "退出準則明確專案何時完成/終止，避免無限延伸。",
      others: {
        A: "與下班無關。",
        C: "與薪資無關。",
        D: "與會議無關。",
      },
      keyPoint: "退出準則 = 完成/終止條件。",
    },
  },
  {
    id: "E-026",
    chapter: "E",
    topic: "專案治理",
    subtopic: "Steering Committee",
    difficulty: "medium",
    question:
      "贊助者邀請幾位高階組成「指導委員會（Steering Committee）」定期審視專案。他們的主要職責為？",
    options: {
      A: "日常專案管理",
      B: "提供戰略指引、重大決策、資源調配、風險議題裁決",
      C: "開發產品",
      D: "執行測試",
    },
    answer: "B",
    explanation: {
      why: "Steering Committee 屬治理層，提供戰略指引與重大決策。",
      others: {
        A: "是 PM 工作。",
        C: "是團隊工作。",
        D: "是 QA 工作。",
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
      "PM 被派到某新公司，發現同一套方法論遇到很多阻力。他判斷「可能是組織結構因素」。組織結構最明顯影響下列何者？",
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
        A: "與流程/人員相關。",
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
      "贊助者常把「專案章程」和「專案管理計畫書」搞混。PM 最精準的區辨為？",
    options: {
      A: "兩者相同",
      B: "章程是起始階段的高階授權文件；專案管理計畫書是規劃階段產出的詳細執行藍圖",
      C: "計畫書先於章程",
      D: "章程包含 WBS",
    },
    answer: "B",
    explanation: {
      why: "章程是啟動授權的高階文件；計畫書是規劃階段產出、指導執行與監控。",
      others: {
        A: "不同。",
        C: "章程先於計畫書。",
        D: "章程不含 WBS。",
      },
      keyPoint: "章程 = 高階授權；計畫書 = 詳細執行藍圖。",
    },
  },
  {
    id: "E-029",
    chapter: "E",
    topic: "專案治理",
    subtopic: "贊助者支持成功關鍵",
    difficulty: "medium",
    question:
      "研究顯示專案成功最直接相關的因素之一為「贊助者的積極支持」。PM 若想強化成功率，最該持續做的是？",
    options: {
      A: "要求團隊加班",
      B: "積極經營贊助者關係，讓他理解進度、風險、支援需求",
      C: "擴大辦公室",
      D: "買更好的電腦",
    },
    answer: "B",
    explanation: {
      why: "贊助者積極支持是成功關鍵，PM 應持續經營這份關係。",
      others: {
        A: "加班不保成功。",
        C: "空間非成功關鍵。",
        D: "設備影響有限。",
      },
      keyPoint: "贊助者關係 = 成功關鍵要持續經營。",
    },
  },
  {
    id: "E-030",
    chapter: "E",
    topic: "專案治理",
    subtopic: "陳報路徑",
    difficulty: "medium",
    question:
      "PM 發現一個跨部門衝突連贊助者都無法解決。他應該再向上陳報給？",
    options: {
      A: "自行解決",
      B: "指導委員會或更高治理層（必要時至董事會）",
      C: "完全不處理",
      D: "內部宣戰",
    },
    answer: "B",
    explanation: {
      why: "贊助者無法處理時，應向上一層治理層陳報。",
      others: {
        A: "超越 PM 權限。",
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
    subtopic: "PMO 非典型價值",
    difficulty: "medium",
    question:
      "下列哪一項「不屬於」PMO 的典型價值？",
    options: {
      A: "統一方法論與範本",
      B: "跨專案資源協調",
      C: "替所有專案寫程式",
      D: "建立專案組合管理能力",
    },
    answer: "C",
    explanation: {
      why: "寫程式是開發團隊職能，不是 PMO 價值。",
      others: {
        A: "典型價值。",
        B: "典型價值。",
        D: "典型價值。",
      },
      keyPoint: "PMO = 方法論、協調、組合管理。",
    },
  },
  {
    id: "E-032",
    chapter: "E",
    topic: "專案治理",
    subtopic: "章程利害關係人清單",
    difficulty: "medium",
    question:
      "章程中的「利害關係人清單」具體用意為？",
    options: {
      A: "列出技術規格",
      B: "先行指派內外部關鍵人員、確保啟動時的共識與溝通對象",
      C: "記錄薪資",
      D: "列出法規",
    },
    answer: "B",
    explanation: {
      why: "章程的利害關係人清單列出啟動時的關鍵人員與溝通對象。",
      others: {
        A: "非技術規格。",
        C: "不涉薪資。",
        D: "法規不在這。",
      },
      keyPoint: "章程利害關係人清單 = 先期關鍵人員。",
    },
  },
  {
    id: "E-033",
    chapter: "E",
    topic: "專案治理",
    subtopic: "目的 vs 目標",
    difficulty: "medium",
    question:
      "章程寫「專案目的」時，應該是什麼樣的敘述？",
    options: {
      A: "定量數字如營收、時程",
      B: "定性描述專案要達成的願景",
      C: "程式架構圖",
      D: "UI 設計圖",
    },
    answer: "B",
    explanation: {
      why: "專案目的是定性描述（如：打造最高級無國界餐廳）；定量數字是目標（KPI）。",
      others: {
        A: "那是目標。",
        C: "技術細節。",
        D: "執行細節。",
      },
      keyPoint: "目的定性、目標定量。",
    },
  },
  {
    id: "E-034",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PMO 演進",
    difficulty: "hard",
    question:
      "公司的 PMO 從 Supportive 慢慢演進到 Directive，最可能的驅動原因為？",
    options: {
      A: "組織策略需要更強的標準化與直接控制",
      B: "員工要求",
      C: "節省辦公室空間",
      D: "減少人力",
    },
    answer: "A",
    explanation: {
      why: "PMO 演進由組織策略驅動，當需要更強控制時會朝 Directive。",
      others: {
        B: "非員工決定。",
        C: "與空間無關。",
        D: "與人力無關。",
      },
      keyPoint: "PMO 演進由策略驅動。",
    },
  },
  {
    id: "E-035",
    chapter: "E",
    topic: "專案治理",
    subtopic: "邊界避免範疇蔓延",
    difficulty: "medium",
    question:
      "專案章程的「高階專案邊界」主要作用為？",
    options: {
      A: "明確說明專案「不包含」什麼，避免範疇蔓延",
      B: "列出所有任務",
      C: "規定工作時數",
      D: "紀錄品質標準",
    },
    answer: "A",
    explanation: {
      why: "章程邊界的重點在 Out-of-Scope 聲明，避免日後範疇無限擴張。",
      others: {
        B: "那是 WBS。",
        C: "與時數無關。",
        D: "品質另有計畫書。",
      },
      keyPoint: "章程邊界 = 明確「不包含」避免蔓延。",
    },
  },
  {
    id: "E-036",
    chapter: "E",
    topic: "專案治理",
    subtopic: "核准門檻目的",
    difficulty: "hard",
    question:
      "治理框架設計「核准門檻（Threshold）」的目的為？",
    options: {
      A: "讓 PM 沒有權力",
      B: "依議題重要性分層授權：小事 PM 自決、大事向上陳報",
      C: "延遲決策",
      D: "增加會議數量",
    },
    answer: "B",
    explanation: {
      why: "門檻是分層授權機制，兼顧效率與風險控管。",
      others: {
        A: "正好相反。",
        C: "目的是加快決策。",
        D: "減少不必要會議。",
      },
      keyPoint: "門檻 = 分層授權；效率+控管兼顧。",
    },
  },
  {
    id: "E-037",
    chapter: "E",
    topic: "專案治理",
    subtopic: "敏捷治理核心",
    difficulty: "hard",
    question:
      "敏捷專案中，誰「通常扮演輕量化治理決策」的核心角色？",
    options: {
      A: "PO + 贊助者",
      B: "開發團隊投票",
      C: "QA 單獨決定",
      D: "沒有治理",
    },
    answer: "A",
    explanation: {
      why: "敏捷治理輕量但仍存在：PO 管價值、贊助者承擔商業成果，兩者為治理核心。",
      others: {
        B: "團隊不負治理決策。",
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
    subtopic: "BC 失效處理",
    difficulty: "hard",
    question:
      "商業環境變動導致原商業企劃案失效，PM 下一步最合適的做法是？",
    options: {
      A: "自行修改商業企劃案",
      B: "向治理層陳報，由治理層決定繼續/變更/終止，必要時更新商業企劃案",
      C: "忽略變動",
      D: "延後處理",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案失效涉及專案去留，必須由治理層決策而非 PM 自行處理。",
      others: {
        A: "超越權限。",
        C: "造成損失。",
        D: "惡化情況。",
      },
      keyPoint: "BC 失效 → 治理層決策。",
    },
  },
  {
    id: "E-039",
    chapter: "E",
    topic: "專案治理",
    subtopic: "跨組織治理",
    difficulty: "hard",
    question:
      "某合資公司由三家企業共同出資成立，專案橫跨三家。治理最關鍵的設計為？",
    options: {
      A: "各公司自己做主",
      B: "建立統一的聯合治理委員會、清楚的決策權與爭議處理機制",
      C: "取消治理",
      D: "交給外部顧問全權決定",
    },
    answer: "B",
    explanation: {
      why: "跨組織需統一治理機制才能確保決策有效、爭議有解。",
      others: {
        A: "會造成混亂。",
        C: "失去管控。",
        D: "顧問非當事方。",
      },
      keyPoint: "跨組織治理 = 聯合委員會 + 清楚決策 + 爭議機制。",
    },
  },
  {
    id: "E-040",
    chapter: "E",
    topic: "專案治理",
    subtopic: "PM 姓名章程意義",
    difficulty: "medium",
    question:
      "實習生問：「章程為什麼要明確寫 PM 姓名與授權範圍？」最合適的回答為？",
    options: {
      A: "只是紀錄",
      B: "明確 PM 身份與權限，避免日後權責不清、減少跨部門爭議",
      C: "讓大家知道誰請客",
      D: "無實質意義",
    },
    answer: "B",
    explanation: {
      why: "章程明確 PM 姓名與授權是治理清晰化的關鍵。",
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
