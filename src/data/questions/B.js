// B. 策略調整（校準）（25 題 情境題版）
const questions = [
  {
    id: "B-001",
    chapter: "B",
    topic: "策略調整",
    subtopic: "外部變化首要行動",
    difficulty: "medium",
    question:
      "星巴克正以敏捷式開發一款新風味精品咖啡，預計下個月推出。PM 今早得知：競爭對手路易莎昨天已先發表類似精品咖啡並造成話題。團隊主管在會議上說「我們要連夜壓縮時程提前上市」；行銷提議先研究對手再改配方；贊助者則想立刻開會討論對策。PM 首先最該採取的行動是？",
    options: {
      A: "壓縮時程，盡快上市搶回話題",
      B: "重新檢視此專案的商業價值是否仍成立",
      C: "研究對手產品後改良配方",
      D: "立刻召開贊助者會議決定方案",
    },
    answer: "B",
    explanation: {
      why: "外部重大變化下 PM 首要動作是評估商業價值是否仍成立，沒先確認價值就動作只會加速損失。",
      others: {
        A: "盲目趕工若價值已消失只會擴大虧損。",
        C: "改配方是執行層面，應在價值評估後。",
        D: "應先帶著價值評估結果再去找贊助者，不是空手開會。",
      },
      keyPoint: "外部變化首要 = 重新檢視商業價值，再談動作。",
    },
  },
  {
    id: "B-002",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略對齊文件",
    difficulty: "medium",
    question:
      "執行中的資料湖專案，一位關鍵董事突然問 PM：「這個專案的目的跟我們公司今年的數位轉型策略有沒有對齊？」PM 手上有專案管理計畫書、溝通計畫、風險登錄冊和效益管理計畫書。他應該拿哪一份給董事看最對題？",
    options: {
      A: "效益管理計畫書（商業文件，連結專案效益與組織策略）",
      B: "專案管理計畫書（執行層面藍圖）",
      C: "溝通管理計畫書（誰收什麼資訊）",
      D: "風險登錄冊（記錄風險）",
    },
    answer: "A",
    explanation: {
      why: "選項中唯一直接連結專案效益與組織策略的就是效益管理計畫書。若選項有「專案章程」那會更精準，但此題沒有。",
      others: {
        B: "講執行不談策略對齊。",
        C: "只定義資訊流。",
        D: "記錄風險與策略無關。",
      },
      keyPoint: "策略對齊 → 商業文件（章程/效益管理計畫書/商業企劃案）。",
    },
  },
  {
    id: "B-003",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業價值概念",
    difficulty: "easy",
    question:
      "財務長問 PM：「你說這個品牌活動會帶來商業價值，具體是什麼意思？我看不到明確的財務數字。」PM 要如何專業地回應？",
    options: {
      A: "商業價值只看財務利潤",
      B: "商業價值包含有形（財務、市佔）與無形（品牌、員工士氣、客戶忠誠）效益的總和",
      C: "商業價值等於成本",
      D: "商業價值無法量化",
    },
    answer: "B",
    explanation: {
      why: "PMI 定義商業價值涵蓋有形與無形效益，不只是財務數字。",
      others: {
        A: "過度狹隘。",
        C: "成本是投入不是價值。",
        D: "部分可用代理指標衡量。",
      },
      keyPoint: "商業價值 = 有形 + 無形效益總和。",
    },
  },
  {
    id: "B-004",
    chapter: "B",
    topic: "策略調整",
    subtopic: "Backlog 重排權責",
    difficulty: "medium",
    question:
      "敏捷 APP 專案中，業務端取得一個潛力大客戶的新需求，希望儘快插入下個 Sprint。開發團隊代表、Scrum Master、PO、贊助者都收到訊息。依 PMI 分工，最應該主導「是否插入、要往上挪多少位」決策的是誰？",
    options: {
      A: "Scrum Master，因為他負責協調",
      B: "開發團隊，因為他們最了解技術",
      C: "產品負責人（PO），因為他負責管理 Backlog 與價值優先序",
      D: "贊助者，因為他是最高層級",
    },
    answer: "C",
    explanation: {
      why: "敏捷中 Backlog 優先序與價值決策是 PO 的核心職責。",
      others: {
        A: "SM 引導流程不決定內容。",
        B: "團隊執行不擁有優先序決策。",
        D: "贊助者提供方向不介入 Backlog 細節。",
      },
      keyPoint: "Backlog 排序 = PO 職責。",
    },
  },
  {
    id: "B-005",
    chapter: "B",
    topic: "策略調整",
    subtopic: "EEF vs OPA",
    difficulty: "medium",
    question:
      "PM 在專案規劃時蒐集了下列資料：公司舊專案的教訓資料庫、政府剛修訂的資安法規、公司的範本表格、同業最新競品報告。他要分類為「企業環境因素（EEF）」的應該是？",
    options: {
      A: "教訓資料庫與範本表格",
      B: "政府資安法規與同業競品報告",
      C: "全部都是 EEF",
      D: "全部都是 OPA",
    },
    answer: "B",
    explanation: {
      why: "EEF 是外部環境（法規、市場、競爭）；OPA 是內部資產（教訓、範本）。",
      others: {
        A: "兩者都是 OPA。",
        C: "教訓與範本屬 OPA。",
        D: "法規與競品屬 EEF。",
      },
      keyPoint: "EEF = 外部；OPA = 內部（含非正式）。",
    },
  },
  {
    id: "B-006",
    chapter: "B",
    topic: "策略調整",
    subtopic: "應變順序",
    difficulty: "hard",
    question:
      "國際局勢變化導致原物料大漲，嚴重影響專案預算。團隊有四種建議：A) 立刻壓縮時程趕在漲價前；B) 先重新檢視專案商業價值；C) 直接更新採購計畫書；D) 召開贊助者會議決定。PMP 建議的「首要」動作是？",
    options: {
      A: "立刻壓縮時程",
      B: "先重新檢視商業價值，再依序溝通、更新文件、最後才執行調整",
      C: "直接更新採購計畫書",
      D: "召開贊助者會議決定",
    },
    answer: "B",
    explanation: {
      why: "PMP 順序：先評估商業價值 → 溝通與建議 → 更新商業文件 → 最後才執行調整。",
      others: {
        A: "執行層面動作不能最先做。",
        C: "未評估價值就改計畫容易錯方向。",
        D: "應帶著價值評估結果再去討論。",
      },
      keyPoint: "順序：商業價值 → 溝通 → 更新文件 → 執行調整。",
    },
  },
  {
    id: "B-007",
    chapter: "B",
    topic: "策略調整",
    subtopic: "利害關係人衝突",
    difficulty: "medium",
    question:
      "業務主管希望專案產品「功能越多越好」，以滿足大客戶；技術長希望「先做穩、少功能」，以確保品質。PM 夾在中間無法裁決，兩派都找他施壓。最符合治理原則的處理是？",
    options: {
      A: "按業務主管意見執行",
      B: "按技術長意見執行",
      C: "向贊助者陳報衝突，尋求策略裁決或校準方向",
      D: "各做一半",
    },
    answer: "C",
    explanation: {
      why: "跨部門策略衝突超出 PM 權限，應向贊助者陳報由治理層裁決。",
      others: {
        A: "未經裁決就偏一方風險高。",
        B: "同上。",
        D: "妥協不等於解決，可能兩邊都不滿意。",
      },
      keyPoint: "策略衝突超越 PM 權限 → 向贊助者陳報裁決。",
    },
  },
  {
    id: "B-008",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業企劃案內容",
    difficulty: "medium",
    question:
      "某新人 PM 第一次看商業企劃案，發現內容非常多，他問資深 PM：「這份文件裡下列哪一項應該不會出現？」資深 PM 的回答是？",
    options: {
      A: "專案的商業需要與策略貢獻",
      B: "成本效益分析如 NPV、ROI、回收期",
      C: "每日站立會議議程範本",
      D: "關鍵商業假設條件",
    },
    answer: "C",
    explanation: {
      why: "站立會議議程是執行層面細節，不屬於商業企劃案這類高階商業文件。",
      others: {
        A: "是商業企劃案核心。",
        B: "是商業企劃案必備。",
        D: "是商業企劃案重要內容。",
      },
      keyPoint: "商業企劃案 = 高階商業面，不含執行細節。",
    },
  },
  {
    id: "B-009",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷價值交付",
    difficulty: "medium",
    question:
      "贊助者質疑 PM：「敏捷這麼亂，真的能比預測式早交出價值？」PM 要如何專業回答這個挑戰？",
    options: {
      A: "敏捷就是不用等到最後，透過增量分批交付讓客戶提早使用並取得回饋",
      B: "敏捷其實比較慢",
      C: "敏捷只是名詞差異，交付時機與預測式一樣",
      D: "敏捷不保證交付",
    },
    answer: "A",
    explanation: {
      why: "敏捷透過增量+短迭代讓客戶提早使用部分成果，實現早期價值。",
      others: {
        B: "事實相反。",
        C: "交付時機本質不同。",
        D: "敏捷同樣要交付。",
      },
      keyPoint: "敏捷提早價值 = 增量分批交付。",
    },
  },
  {
    id: "B-010",
    chapter: "B",
    topic: "策略調整",
    subtopic: "Being Agile",
    difficulty: "hard",
    question:
      "某公司買了 Jira、導入 Scrum、每天站立會議，半年後團隊仍然照瀑布思維工作：需求只進不出、沒有回饋、PM 還是事必躬親。問題最根本的癥結？",
    options: {
      A: "Jira 設定錯誤",
      B: "只有 Doing Agile 沒有 Being Agile，團隊未內化敏捷思維",
      C: "團隊人數太少",
      D: "贊助者不夠強勢",
    },
    answer: "B",
    explanation: {
      why: "工具與儀式到位但思維未改 = 假敏捷。真正敏捷要從思維內化開始。",
      others: {
        A: "Jira 不是核心問題。",
        C: "規模與敏捷無關。",
        D: "強勢反而可能違背敏捷自組織精神。",
      },
      keyPoint: "Being Agile > Doing Agile；沒思維就是假敏捷。",
    },
  },
  {
    id: "B-011",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業文件源頭",
    difficulty: "medium",
    question:
      "新專案啟動會議上，PMO 主任問 PM：「專案存在的根本理由寫在哪份文件？」最正確的回答是？",
    options: {
      A: "專案章程",
      B: "商業企劃案（Business Case）",
      C: "WBS",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案證明「為什麼要做」，是專案的根本理由與源頭文件，章程才據此發布。",
      others: {
        A: "章程是授權文件，建立在商業企劃案之後。",
        C: "WBS 是範疇分解。",
        D: "風險登錄冊記錄風險。",
      },
      keyPoint: "根本理由源頭 = Business Case。",
    },
  },
  {
    id: "B-012",
    chapter: "B",
    topic: "策略調整",
    subtopic: "效益管理計畫書",
    difficulty: "medium",
    question:
      "公司新任 CIO 問 PM：「我想知道這個專案的效益會用什麼指標追蹤、什麼時候實現、由誰負責？」PM 最該拿出的文件為？",
    options: {
      A: "商業企劃案",
      B: "效益管理計畫書（Benefits Management Plan）",
      C: "範疇管理計畫書",
      D: "專案章程",
    },
    answer: "B",
    explanation: {
      why: "效益實現的度量指標、時間框架、效益責任人是 BMP 的核心內容。",
      others: {
        A: "BC 證明合理性但不深入效益追蹤細節。",
        C: "範疇計畫不談效益實現。",
        D: "章程是授權，效益追蹤細節不在章程。",
      },
      keyPoint: "效益指標 + 時間框架 + 責任人 → BMP。",
    },
  },
  {
    id: "B-013",
    chapter: "B",
    topic: "策略調整",
    subtopic: "章程校準策略",
    difficulty: "medium",
    question:
      "贊助者對 PM 說：「這個專案要能幫公司今年的 ESG 策略加分。」PM 要確保後續所有決策都對齊這個策略，最應優先寫進哪份文件作為依據？",
    options: {
      A: "溝通管理計畫書",
      B: "專案章程（明確記錄專案目的如何校準組織策略）",
      C: "時程網圖",
      D: "風險登錄冊",
    },
    answer: "B",
    explanation: {
      why: "發展專案章程的核心目的之一就是確認專案目的與組織策略校準。",
      others: {
        A: "溝通計畫不談策略校準。",
        C: "時程網圖是排程工具。",
        D: "記錄風險不表達策略。",
      },
      keyPoint: "策略校準最精準 → 專案章程。",
    },
  },
  {
    id: "B-014",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷新機會處理",
    difficulty: "medium",
    question:
      "敏捷 APP 專案的 PO 發現一個剛上線的第三方 API 可以讓產品新增強大功能。團隊當下忙於原 Backlog。PO 最合適的行動是？",
    options: {
      A: "立刻插入打斷當前 Sprint",
      B: "評估新功能的商業價值，並在下一次 Backlog Refinement 重新排序",
      C: "請贊助者裁決是否採用",
      D: "自己默默開發不告訴團隊",
    },
    answer: "B",
    explanation: {
      why: "PO 擁有 Backlog 管理權，新機會應評估價值後循正式排序流程納入。",
      others: {
        A: "中斷 Sprint 傷害節奏，非必要不可打斷。",
        C: "這是 PO 權責不需贊助者。",
        D: "繞過團隊不專業。",
      },
      keyPoint: "PO 面對新機會：評估價值 → 下次 Refinement 重排 Backlog。",
    },
  },
  {
    id: "B-015",
    chapter: "B",
    topic: "策略調整",
    subtopic: "商業文件順序",
    difficulty: "hard",
    question:
      "新人 PM 問：「商業企劃案、效益管理計畫書、專案章程，正確的先後順序是什麼？」資深 PM 的回答是？",
    options: {
      A: "章程 → 商業企劃案 → 效益管理計畫書",
      B: "商業企劃案 → 效益管理計畫書 → 專案章程",
      C: "效益管理計畫書 → 商業企劃案 → 章程",
      D: "三者平行產出",
    },
    answer: "B",
    explanation: {
      why: "先有商業需要（BC）→ 設計效益如何實現（BMP）→ 發布正式章程啟動。",
      others: {
        A: "章程建立在 BC 之後。",
        C: "BMP 建立在 BC 之後。",
        D: "有明確順序。",
      },
      keyPoint: "BC → BMP → Charter。",
    },
  },
  {
    id: "B-016",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略校準敘述",
    difficulty: "easy",
    question:
      "下列哪一段敘述最能讓 CEO 看到「此專案如何對齊公司策略」？",
    options: {
      A: "將在第一季推出 3 個新模組",
      B: "預計可為公司帶來 300 萬年營收",
      C: "本專案將實現公司今年『進軍東南亞高端市場』的年度策略目標",
      D: "團隊有過 5 個類似專案經驗",
    },
    answer: "C",
    explanation: {
      why: "唯一明確連結公司年度策略的是 C，符合 SMART 的 Relevant。",
      others: {
        A: "是功能交付描述。",
        B: "是財務 KPI。",
        D: "是能力佐證。",
      },
      keyPoint: "對齊公司策略/年度目標 → Relevant 的核心展現。",
    },
  },
  {
    id: "B-017",
    chapter: "B",
    topic: "策略調整",
    subtopic: "策略變動",
    difficulty: "medium",
    question:
      "公司年度大會宣布策略方向從「市佔優先」轉為「毛利優先」。目前執行中的專案 KPI 原本是「來客量 +30%」。PM 該如何處理原 KPI？",
    options: {
      A: "繼續按原 KPI 執行",
      B: "重新檢視 KPI 是否仍對齊新策略，與贊助者討論調整方向",
      C: "直接把 KPI 改成毛利目標",
      D: "等下次年度大會再處理",
    },
    answer: "B",
    explanation: {
      why: "策略變動應先檢視 KPI 是否仍有意義，再與贊助者討論是否調整。",
      others: {
        A: "盲目執行可能偏離新策略。",
        C: "未經評估就改數字沒依據。",
        D: "被動拖延會讓資源浪費。",
      },
      keyPoint: "策略變 → 檢視 KPI → 與贊助者討論調整。",
    },
  },
  {
    id: "B-018",
    chapter: "B",
    topic: "策略調整",
    subtopic: "短期 vs 長期效益",
    difficulty: "medium",
    question:
      "PMO 要求 PM 在效益管理計畫書中同時記錄「短期」與「長期」效益。他問「為什麼不能只寫短期」？PMO 給的理由最可能是？",
    options: {
      A: "只看短期會忽略策略性價值與持續性影響",
      B: "長期效益不重要",
      C: "短期效益根本不用寫",
      D: "法規強制要求",
    },
    answer: "A",
    explanation: {
      why: "短期通常是戰術性、長期是策略性。只看短期會錯估專案真實價值與策略意義。",
      others: {
        B: "長期效益很重要。",
        C: "短期同樣要寫。",
        D: "非法規強制原因。",
      },
      keyPoint: "短+長期效益並列 = 完整評估策略價值。",
    },
  },
  {
    id: "B-019",
    chapter: "B",
    topic: "策略調整",
    subtopic: "利害關係人共識",
    difficulty: "medium",
    question:
      "三個重量級利害關係人對「本專案的成功定義」意見不一：財務長要利潤、行銷長要品牌、營運長要效率。這個階段 PM 最該做的是？",
    options: {
      A: "自己選一個偏好的方向執行",
      B: "召開對齊會議，協助三方對『專案價值與成功定義』達成共識",
      C: "完全按最高階決定",
      D: "等他們自行協商出結果",
    },
    answer: "B",
    explanation: {
      why: "對齊多位利害關係人對價值的認知，是達成專案成功的關鍵 PM 職責。",
      others: {
        A: "自行裁決容易失支持。",
        C: "忽略其他方會造成後續阻力。",
        D: "被動等待會延誤專案。",
      },
      keyPoint: "價值共識不一 → 主動協調達成共識。",
    },
  },
  {
    id: "B-020",
    chapter: "B",
    topic: "策略調整",
    subtopic: "敏捷應變力來源",
    difficulty: "medium",
    question:
      "某贊助者問「為什麼敏捷比較能因應策略變化？」下列哪個回答最符合敏捷原理？",
    options: {
      A: "敏捷不用計畫所以彈性",
      B: "敏捷透過短迭代與客戶回饋，能即時重新排序 Backlog 以對齊新方向",
      C: "敏捷專案不會失敗",
      D: "敏捷沒有預算限制",
    },
    answer: "B",
    explanation: {
      why: "短迭代 + 持續回饋 + 重新排序 Backlog 是敏捷因應變化的機制。",
      others: {
        A: "敏捷仍有計畫。",
        C: "敏捷不保證成功。",
        D: "預算一樣要管理。",
      },
      keyPoint: "敏捷適應力 = 短迭代 + 持續回饋。",
    },
  },
  {
    id: "B-021",
    chapter: "B",
    topic: "策略調整",
    subtopic: "需更新的商業文件",
    difficulty: "hard",
    question:
      "PM 確認市場需求劇變導致原商業需要改變。他需要更新哪兩份「商業文件」以反映新方向？",
    options: {
      A: "商業企劃案 + 效益管理計畫書",
      B: "溝通管理計畫書 + 風險登錄冊",
      C: "WBS + 時程網圖",
      D: "品質管理計畫書 + 採購計畫書",
    },
    answer: "A",
    explanation: {
      why: "PMBOK 明確定義「商業文件」就是 Business Case + Benefits Management Plan，商業需要改變時兩者必須同步更新。",
      others: {
        B: "都是專案文件，非商業文件。",
        C: "範疇/時程文件。",
        D: "知識領域計畫書。",
      },
      keyPoint: "兩大商業文件 = BC + BMP。",
    },
  },
  {
    id: "B-022",
    chapter: "B",
    topic: "策略調整",
    subtopic: "專案 vs 營運策略角色",
    difficulty: "easy",
    question:
      "新任 COO 問 PM：「專案跟營運在策略上到底差在哪？」PM 最精確的回答是？",
    options: {
      A: "專案跟營運其實一樣",
      B: "專案創造變革與新價值；營運持續交付既有價值，兩者都要對齊策略",
      C: "專案只做財務、營運只做技術",
      D: "專案不用關心策略",
    },
    answer: "B",
    explanation: {
      why: "專案是變革載體（創造新價值）；營運是持續交付（維持既有價值）。",
      others: {
        A: "本質不同。",
        C: "領域有重疊。",
        D: "專案必須對齊策略。",
      },
      keyPoint: "專案 = 創造變革；營運 = 持續交付。",
    },
  },
  {
    id: "B-023",
    chapter: "B",
    topic: "策略調整",
    subtopic: "Tailoring 原則",
    difficulty: "medium",
    question:
      "新人問資深 PM：「為什麼同一家公司不同專案用不同方法？這樣不是很亂嗎？」資深 PM 回答：「依專案脈絡進行裁適（Tailoring）。」他最可能下一句解釋的是？",
    options: {
      A: "因為每個專案獨一無二，脈絡、環境、人員、時間都不同，工作方式要量身打造",
      B: "因為 PMO 規定可以亂來",
      C: "因為 PM 自己喜歡就好",
      D: "因為沒有正式流程",
    },
    answer: "A",
    explanation: {
      why: "Tailoring 核心就是依專案獨特性調整，不是一套流程走天下。",
      others: {
        B: "非 PMO 允許亂來。",
        C: "不是個人喜好。",
        D: "仍依治理框架運作。",
      },
      keyPoint: "Tailoring = 依脈絡量身調整。",
    },
  },
  {
    id: "B-024",
    chapter: "B",
    topic: "策略調整",
    subtopic: "低價值功能處理",
    difficulty: "medium",
    question:
      "敏捷專案進行到一半，PO 發現 Backlog 中某個大功能經市場回饋後「已無商業價值」。團隊已做了 30% 工作。最符合敏捷價值導向的處理是？",
    options: {
      A: "堅持完成所有原訂功能不要浪費前期工作",
      B: "重新評估並將該功能降優先序或移除，將人力放到有價值的項目",
      C: "暫停整個 Sprint 等待決定",
      D: "交給 Scrum Master 決定",
    },
    answer: "B",
    explanation: {
      why: "沉沒成本不該綁架未來決策，敏捷強調持續價值交付，應果斷調整 Backlog。",
      others: {
        A: "違背價值優先原則。",
        C: "不用整個 Sprint 停。",
        D: "Backlog 優先序是 PO 決策。",
      },
      keyPoint: "敏捷 Backlog 以價值為先；沒價值的功能勇敢砍。",
    },
  },
  {
    id: "B-025",
    chapter: "B",
    topic: "策略調整",
    subtopic: "價值與投入區辨",
    difficulty: "easy",
    question:
      "PM 要向董事會報告專案效益。下列哪一項「不屬於」商業效益，應該從簡報中拿掉？",
    options: {
      A: "財務獲利提升",
      B: "品牌形象與客戶忠誠度提升",
      C: "團隊成員總加班時數",
      D: "市場佔有率提升",
    },
    answer: "C",
    explanation: {
      why: "加班時數是投入/成本，不是專案產出的效益。報效益不能把投入當成效益。",
      others: {
        A: "有形效益。",
        B: "無形效益。",
        D: "有形效益。",
      },
      keyPoint: "效益 = 產出的價值；不要把投入當效益。",
    },
  },
];

export default questions;
