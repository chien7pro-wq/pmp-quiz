// F. 專案合規性（30 題 情境題版）
const questions = [
  {
    id: "F-001",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規定義",
    difficulty: "easy",
    question:
      "新任 PM 第一次接到一個受高度管制的醫療專案，贊助者說「我們最重要的是合規」。新人問 PM 合規具體指什麼？最合適的說明為？",
    options: {
      A: "遵守適用的法律、法規、行業標準與組織政策",
      B: "按時完成專案",
      C: "降低成本",
      D: "加快開發進度",
    },
    answer: "A",
    explanation: {
      why: "合規 = 遵循適用法律、法規、行業標準與組織政策。",
      others: {
        B: "進度與合規不同。",
        C: "成本不是合規核心。",
        D: "速度與合規無關。",
      },
      keyPoint: "合規 = 遵循法律+法規+標準+政策。",
    },
  },
  {
    id: "F-002",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "法規變動應對",
    difficulty: "medium",
    question:
      "PM 收到法務通知：「主管機關下週將公告新法規，會影響我們正在開發的平台。」PM 首先應該？",
    options: {
      A: "假裝沒看到",
      B: "評估法規對專案範疇、時程、成本的衝擊，更新風險登錄冊並啟動必要變更",
      C: "立即停工",
      D: "全權交給律師處理",
    },
    answer: "B",
    explanation: {
      why: "法規變動應先評估影響，更新風險與相關計畫，必要時走變更流程。",
      others: {
        A: "不作為會造成違法。",
        C: "不用立即停工。",
        D: "PM 仍要整合管理。",
      },
      keyPoint: "法規變動 → 評估影響 → 更新風險 → 必要時變更。",
    },
  },
  {
    id: "F-003",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "PMI 倫理",
    difficulty: "easy",
    question:
      "新人 PMP 考生背不起來 PMI 的四大倫理價值觀。下列哪一項「不屬於」四大？",
    options: {
      A: "Responsibility（責任）",
      B: "Respect（尊重）",
      C: "Fairness（公平）",
      D: "Secrecy（神秘）",
    },
    answer: "D",
    explanation: {
      why: "PMI 四大倫理：Responsibility、Respect、Fairness、Honesty（誠信）。沒有「神秘」。",
      others: {
        A: "四大之一。",
        B: "四大之一。",
        C: "四大之一。",
      },
      keyPoint: "PMI 四大：責任、尊重、公平、誠信。",
    },
  },
  {
    id: "F-004",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "倫理-誠信",
    difficulty: "medium",
    question:
      "贊助者私下對 PM 說：「下週董事會，你別提這個月的壞消息，先過關再說。」PM 最符合 PMI 倫理的做法為？",
    options: {
      A: "照贊助者要求隱瞞",
      B: "堅持誠信，依實際狀況如實報告，必要時透過適當治理管道陳報",
      C: "與贊助者一起隱瞞",
      D: "直接向媒體揭露",
    },
    answer: "B",
    explanation: {
      why: "PMI 誠信（Honesty）要求不得隱瞞重大事實；應透過內部管道陳報，而非直接對外揭露。",
      others: {
        A: "違背誠信。",
        C: "同樣違背。",
        D: "應先走內部管道。",
      },
      keyPoint: "誠信優先，壞消息依實陳報不隱瞞。",
    },
  },
  {
    id: "F-005",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "利益衝突",
    difficulty: "medium",
    question:
      "某候選供應商私下送 PM 一支高階手錶，希望在評選中勝出。PM 最符合 PMI 公平原則的做法為？",
    options: {
      A: "收下當作禮尚往來",
      B: "婉拒並依組織利益衝突政策揭露此事，避免影響評選",
      C: "收下後轉送其他供應商",
      D: "私下收下但不告訴任何人",
    },
    answer: "B",
    explanation: {
      why: "高額禮物構成利益衝突，違反公平原則，應婉拒 + 揭露。",
      others: {
        A: "構成利益衝突。",
        C: "不改變違規本質。",
        D: "違反揭露義務。",
      },
      keyPoint: "利益衝突 → 婉拒 + 依政策揭露。",
    },
  },
  {
    id: "F-006",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "GDPR",
    difficulty: "medium",
    question:
      "PM 的團隊正在開發一款要賣到歐盟的新 APP，法務特別提醒要遵循哪一項法規？",
    options: {
      A: "HIPAA",
      B: "GDPR（歐盟一般資料保護規則）",
      C: "SOX",
      D: "PCI DSS",
    },
    answer: "B",
    explanation: {
      why: "GDPR 是歐盟個資保護法規，處理歐盟使用者資料必須遵循。",
      others: {
        A: "美國健康資訊法規。",
        C: "美國上市公司財務治理。",
        D: "信用卡資料安全標準。",
      },
      keyPoint: "歐盟個資 → GDPR。",
    },
  },
  {
    id: "F-007",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "稽核發現",
    difficulty: "medium",
    question:
      "內部稽核報告指出「專案文件不符合公司治理政策」。PM 最合適的回應方式是？",
    options: {
      A: "忽略報告",
      B: "依稽核發現擬定矯正行動計畫，設定時程、負責人並追蹤改善",
      C: "直接辭職",
      D: "掩蓋問題",
    },
    answer: "B",
    explanation: {
      why: "稽核發現的處理流程：矯正計畫 → 執行 → 追蹤 → 回覆稽核。",
      others: {
        A: "會擴大風險。",
        C: "極端反應。",
        D: "違背倫理。",
      },
      keyPoint: "稽核發現 → 矯正計畫 + 追蹤改善。",
    },
  },
  {
    id: "F-008",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規風險管理",
    difficulty: "medium",
    question:
      "新人 PM 問：「合規風險是法務的事，還是我們要管？」資深 PM 的回答是？",
    options: {
      A: "合規風險全交法務獨自處理",
      B: "納入專案風險登錄冊，評估可能性與衝擊，規劃回應策略；法務參與而非獨攬",
      C: "只做一次評估",
      D: "等發生再處理",
    },
    answer: "B",
    explanation: {
      why: "合規風險是專案風險一環，納入風險登錄冊並由法務協同處理。",
      others: {
        A: "PM 要整合，不能全推法務。",
        C: "風險要持續監視。",
        D: "事後代價高。",
      },
      keyPoint: "合規風險與一般風險同流程管理。",
    },
  },
  {
    id: "F-009",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規成本變更",
    difficulty: "medium",
    question:
      "新法規導致專案需要額外投入資安加固，預算會超標 20%。PM 該？",
    options: {
      A: "偷偷省略合規步驟",
      B: "將額外成本納入正式變更請求，由 CCB 核准後更新預算與計畫書",
      C: "PM 自掏腰包",
      D: "裁減團隊省錢",
    },
    answer: "B",
    explanation: {
      why: "合規導致的成本變動屬變更，應走正式變更流程。",
      others: {
        A: "違法。",
        C: "不合理。",
        D: "錯誤處理。",
      },
      keyPoint: "合規成本 → 變更請求 → CCB 核准。",
    },
  },
  {
    id: "F-010",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "利益衝突揭露",
    difficulty: "medium",
    question:
      "PM 的配偶在某候選供應商擔任主管。評選即將開始。PM 該？",
    options: {
      A: "隱瞞這件事",
      B: "主動揭露並迴避該供應商的評選工作",
      C: "替配偶爭取訂單",
      D: "不告訴任何人",
    },
    answer: "B",
    explanation: {
      why: "利益衝突應主動揭露並迴避，符合 PMI 公平原則。",
      others: {
        A: "隱瞞加重違規。",
        C: "嚴重違規。",
        D: "違背揭露義務。",
      },
      keyPoint: "利益衝突 = 揭露 + 迴避。",
    },
  },
  {
    id: "F-011",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規文件保存",
    difficulty: "medium",
    question:
      "團隊要存放安全測試紀錄、授權審核證據等合規文件。PM 應建議的做法是？",
    options: {
      A: "隨意存放",
      B: "依組織政策與法規要求建檔保存，確保可追溯且符合保存年限",
      C: "定期刪除減少空間",
      D: "放在私人雲端",
    },
    answer: "B",
    explanation: {
      why: "合規文件應妥善建檔、保存年限符合法規、可追溯以供稽核。",
      others: {
        A: "易遺失。",
        C: "可能違法。",
        D: "違反資安政策。",
      },
      keyPoint: "合規文件 = 建檔保存 + 可追溯。",
    },
  },
  {
    id: "F-012",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "醫材法規",
    difficulty: "medium",
    question:
      "PM 承接新醫材開發案，法務建議他特別關注哪些合規標準？",
    options: {
      A: "FDA、ISO 13485 等醫材相關法規與標準",
      B: "GDPR",
      C: "PCI DSS",
      D: "SOX",
    },
    answer: "A",
    explanation: {
      why: "醫材屬高度管制行業，需遵循 FDA、ISO 13485 等。",
      others: {
        B: "個資保護。",
        C: "信用卡資料。",
        D: "財報治理。",
      },
      keyPoint: "醫材合規 → FDA / ISO 13485。",
    },
  },
  {
    id: "F-013",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "信用卡標準",
    difficulty: "medium",
    question:
      "電商平台要處理信用卡支付，資安長特別要求 PM 確認遵循哪個國際標準？",
    options: {
      A: "PCI DSS",
      B: "HIPAA",
      C: "ISO 14001",
      D: "ISO 13485",
    },
    answer: "A",
    explanation: {
      why: "PCI DSS 是信用卡產業資料安全標準。",
      others: {
        B: "健康資訊。",
        C: "環境管理。",
        D: "醫材。",
      },
      keyPoint: "處理信用卡 → PCI DSS。",
    },
  },
  {
    id: "F-014",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "環境合規",
    difficulty: "medium",
    question:
      "建設集團要開發一塊山坡地。PM 從合規角度應優先關注？",
    options: {
      A: "只關注成本",
      B: "環境影響評估（EIA）與當地環保法規的遵循",
      C: "只關注時程",
      D: "只關注設計美感",
    },
    answer: "B",
    explanation: {
      why: "建築專案需做環評並符合環保法規，避免合規與環境風險。",
      others: {
        A: "成本重要但非合規。",
        C: "時程不涉合規。",
        D: "美感非合規。",
      },
      keyPoint: "建築專案 → 環評 + 環保法規。",
    },
  },
  {
    id: "F-015",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "開源授權",
    difficulty: "medium",
    question:
      "開發團隊想引入多個開源套件加快進度。PM 從合規角度提醒應？",
    options: {
      A: "隨便用不用檢查",
      B: "逐一檢查授權條款（MIT / GPL / Apache 等），確保使用方式符合商用要求",
      C: "所有開源一定能免費商用",
      D: "用了不用告訴客戶",
    },
    answer: "B",
    explanation: {
      why: "各 License 條款不同，GPL 類甚至有傳染性限制，必須逐一檢查。",
      others: {
        A: "違規風險。",
        C: "GPL 等並非如此。",
        D: "透明揭露符合倫理。",
      },
      keyPoint: "開源授權逐一檢查條款。",
    },
  },
  {
    id: "F-016",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "勞動法合規",
    difficulty: "medium",
    question:
      "專案進入趕工階段，團隊被要求連續加班到接近違反勞基法時數上限。PM 應？",
    options: {
      A: "繼續加班趕進度",
      B: "評估資源/時程調整方案，遵守勞動法規，避免合規與人員風險",
      C: "讓員工自己承擔",
      D: "偽造打卡紀錄",
    },
    answer: "B",
    explanation: {
      why: "勞動法合規是底線，不可違反；應透過資源/時程調整化解趕工壓力。",
      others: {
        A: "違法。",
        C: "違反勞動保障。",
        D: "嚴重違規且違法。",
      },
      keyPoint: "合規優先 → 調整資源/時程，絕不違法加班。",
    },
  },
  {
    id: "F-017",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "文件保存年限",
    difficulty: "easy",
    question:
      "合規紀錄的保存年限應該由什麼決定？",
    options: {
      A: "PM 心情",
      B: "法規、行業標準、組織政策綜合要求中最嚴格者為準",
      C: "隨意決定",
      D: "每月刪一次",
    },
    answer: "B",
    explanation: {
      why: "保存年限由多重要求共同決定，採最嚴格標準。",
      others: {
        A: "非主觀決定。",
        C: "易違規。",
        D: "可能違法。",
      },
      keyPoint: "保存年限 = 法規/標準/政策最嚴者為準。",
    },
  },
  {
    id: "F-018",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "PMI-責任",
    difficulty: "medium",
    question:
      "PMI 倫理中「責任（Responsibility）」的核心行為為？",
    options: {
      A: "對自己的決策與行為負責並承擔後果",
      B: "把錯推給下屬",
      C: "請假躲避",
      D: "只做對自己有利的事",
    },
    answer: "A",
    explanation: {
      why: "責任 = 對自己與團隊決策負責、承擔後果。",
      others: {
        B: "違背責任。",
        C: "逃避責任。",
        D: "自私違倫理。",
      },
      keyPoint: "責任 = 承擔後果。",
    },
  },
  {
    id: "F-019",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "PMI-尊重",
    difficulty: "medium",
    question:
      "PMI 倫理「尊重（Respect）」的具體實踐不包括下列何者？",
    options: {
      A: "尊重不同文化、觀點、意見",
      B: "以專業態度對待內外部所有利害關係人",
      C: "積極聆聽不同立場",
      D: "只尊重高階主管",
    },
    answer: "D",
    explanation: {
      why: "尊重應普遍且專業，選擇性尊重違背倫理。",
      others: {
        A: "正確實踐。",
        B: "正確實踐。",
        C: "正確實踐。",
      },
      keyPoint: "尊重所有利害關係人，不分階級。",
    },
  },
  {
    id: "F-020",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "敏捷 + 高度合規",
    difficulty: "hard",
    question:
      "金融業 PM 在採用敏捷時發現最大合規挑戰為？",
    options: {
      A: "敏捷與合規互不相容",
      B: "如何在短迭代中同時維持完整的合規證據鏈與審計追溯",
      C: "敏捷完全不能用於高度合規行業",
      D: "合規文件不需要保留",
    },
    answer: "B",
    explanation: {
      why: "高度合規行業敏捷可用，但挑戰在短迭代中仍要維持證據鏈。",
      others: {
        A: "兩者可並存。",
        C: "可用但要設計合規對接。",
        D: "文件必須保留。",
      },
      keyPoint: "敏捷+高度合規 = 維持證據鏈與審計追溯。",
    },
  },
  {
    id: "F-021",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "法規重大變動",
    difficulty: "hard",
    question:
      "法規重大修訂迫使產品設計必須重做，且預算大幅增加。PM 該？",
    options: {
      A: "隱瞞此事",
      B: "評估影響 → 正式變更請求 → 治理層核准 → 更新商業文件與計畫書",
      C: "自行扛責",
      D: "直接終止專案",
    },
    answer: "B",
    explanation: {
      why: "重大合規變動涉及治理層決策，應走正式變更流程。",
      others: {
        A: "造成違法。",
        C: "超越授權。",
        D: "終止需治理層決策。",
      },
      keyPoint: "重大合規變動 = 正式變更流程 + 治理層決策。",
    },
  },
  {
    id: "F-022",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規訓練",
    difficulty: "easy",
    question:
      "新團隊成員上工前，PM 要安排合規訓練的主要目的為？",
    options: {
      A: "建立合規意識並傳達具體行為準則，降低違規風險",
      B: "取代技術訓練",
      C: "湊滿訓練時數",
      D: "為裁員鋪路",
    },
    answer: "A",
    explanation: {
      why: "合規訓練建立意識與行為準則。",
      others: {
        B: "不取代技術訓練。",
        C: "非目的。",
        D: "無關。",
      },
      keyPoint: "合規訓練 = 建立意識 + 行為準則。",
    },
  },
  {
    id: "F-023",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "ISO 27001",
    difficulty: "medium",
    question:
      "PM 被要求讓專案產品符合 ISO 27001。這份標準主要規範？",
    options: {
      A: "資訊安全管理系統（ISMS）",
      B: "醫療器材",
      C: "環境管理",
      D: "食品安全",
    },
    answer: "A",
    explanation: {
      why: "ISO 27001 是國際資訊安全管理系統標準。",
      others: {
        B: "醫材是 ISO 13485。",
        C: "環境是 ISO 14001。",
        D: "食品是 ISO 22000。",
      },
      keyPoint: "ISO 27001 = 資安管理系統。",
    },
  },
  {
    id: "F-024",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "供應商盡職調查",
    difficulty: "medium",
    question:
      "PM 評選供應商時，合規層面應審查哪些？",
    options: {
      A: "只看報價",
      B: "資質、證照、過往合規紀錄、資訊安全能力、財務穩健度",
      C: "只看員工人數",
      D: "只看辦公地點",
    },
    answer: "B",
    explanation: {
      why: "供應商盡職調查涵蓋資質、合規紀錄、資安能力、財務穩健度。",
      others: {
        A: "過度簡化。",
        C: "非核心。",
        D: "非核心。",
      },
      keyPoint: "供應商合規 = 資質+證照+合規紀錄+資安+財務。",
    },
  },
  {
    id: "F-025",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規底線",
    difficulty: "hard",
    question:
      "時程壓力下，業務主管建議「先跳過合規測試之後補」。PM 該如何回應？",
    options: {
      A: "配合省略",
      B: "堅守合規底線，拒絕跳過，並與治理層討論調整時程/範疇的替代方案",
      C: "默默省略不告訴別人",
      D: "讓下屬自行決定",
    },
    answer: "B",
    explanation: {
      why: "合規為底線不可省略，若有時程壓力應由治理層決定其他調整。",
      others: {
        A: "造成違規。",
        C: "隱瞞加重違規。",
        D: "下屬無此權限。",
      },
      keyPoint: "合規為底線 → 不跳過 → 透過治理層調整其他面向。",
    },
  },
  {
    id: "F-026",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規長角色",
    difficulty: "medium",
    question:
      "公司新設「合規長（Chief Compliance Officer）」，PM 要跟他打交道。合規長在專案中的作用為？",
    options: {
      A: "日常專案管理",
      B: "提供合規指引、審查高風險議題、協助建立合規機制",
      C: "寫程式",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "合規長協助組織落實合規、審查高風險議題。",
      others: {
        A: "是 PM 工作。",
        C: "開發團隊工作。",
        D: "設計團隊工作。",
      },
      keyPoint: "合規長 = 合規指引 + 高風險審查。",
    },
  },
  {
    id: "F-027",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規 vs 品質",
    difficulty: "hard",
    question:
      "品保經理問 PM：「合規跟品質這兩件事差別在哪？」最精準的說法為？",
    options: {
      A: "兩者相同",
      B: "合規是法規底線（Must）；品質是符合需求與預期的程度（Should），兩者相關但不等同",
      C: "品質完全包含合規",
      D: "合規取代品質",
    },
    answer: "B",
    explanation: {
      why: "合規是法規底線；品質是對需求滿足度的度量。兩者相關但不等同。",
      others: {
        A: "不同。",
        C: "部分相關但不完全包含。",
        D: "兩者並存。",
      },
      keyPoint: "合規 = 底線；品質 = 需求滿足度。",
    },
  },
  {
    id: "F-028",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "GDPR 罰則",
    difficulty: "medium",
    question:
      "贊助者問「如果個資處理違反 GDPR，最慘會怎樣？」法務給的答覆最接近？",
    options: {
      A: "只會被責備一下",
      B: "最高可被罰全球年營收 4% 或 2000 萬歐元（擇高）",
      C: "只會收到警告信",
      D: "沒什麼後果",
    },
    answer: "B",
    explanation: {
      why: "GDPR 違規上限為全球年營收 4% 或 2000 萬歐元擇高。",
      others: {
        A: "低估後果。",
        C: "不是唯一後果。",
        D: "錯誤。",
      },
      keyPoint: "GDPR 違規 = 4% 營收 / 2000 萬歐元擇高。",
    },
  },
  {
    id: "F-029",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規驗證方式",
    difficulty: "medium",
    question:
      "PM 要在專案結案前向董事證明「我們合規」。最有公信力的方式為？",
    options: {
      A: "PM 口頭保證",
      B: "通過第三方稽核或取得認證，並保留可追溯的合規證據",
      C: "PM 自己宣稱合規",
      D: "看運氣",
    },
    answer: "B",
    explanation: {
      why: "第三方稽核/認證 + 可追溯證據是合規驗證最客觀有效的方式。",
      others: {
        A: "口頭無效。",
        C: "自稱非驗證。",
        D: "不可靠。",
      },
      keyPoint: "合規驗證 = 第三方稽核 + 可追溯證據。",
    },
  },
  {
    id: "F-030",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "變更與合規",
    difficulty: "hard",
    question:
      "PM 收到客戶新需求，團隊討論後發現可能觸發新的個資法合規風險。PM 該？",
    options: {
      A: "忽略這部分",
      B: "在變更評估流程中納入合規風險分析，必要時邀請法務/合規長參與判斷",
      C: "等發生再說",
      D: "變更不影響合規",
    },
    answer: "B",
    explanation: {
      why: "變更可能觸發合規風險時，評估流程必須納入合規分析，必要時由法務/合規長把關。",
      others: {
        A: "忽略會造成違規。",
        C: "被動處理代價高。",
        D: "變更確實可能影響合規。",
      },
      keyPoint: "變更評估 = 納入合規風險分析 + 法務/合規參與。",
    },
  },
];

export default questions;
