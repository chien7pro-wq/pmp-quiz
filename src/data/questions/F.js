// F. 專案合規性（30 題）
// 主題：法規、標準、合規風險、內部稽核、倫理、隱私
const questions = [
  {
    id: "F-001",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規定義",
    difficulty: "easy",
    question:
      "專案管理中，「合規（Compliance）」主要指？",
    options: {
      A: "遵守適用的法律、法規、標準與政策",
      B: "按時完成專案",
      C: "降低成本",
      D: "加快開發進度",
    },
    answer: "A",
    explanation: {
      why: "合規 = 遵循適用法律、法規、行業標準與組織政策。",
      others: {
        B: "進度與合規不同。",
        C: "成本管理不是合規核心。",
        D: "速度無關合規。",
      },
      keyPoint: "合規 = 遵循法律+法規+標準+政策。",
    },
  },
  {
    id: "F-002",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規處理時機",
    difficulty: "medium",
    question:
      "發現新法規會影響專案交付物，PM 應「首先」？",
    options: {
      A: "假裝沒看到",
      B: "評估法規對專案範疇、時程、成本的衝擊，更新風險與規劃",
      C: "立即停工",
      D: "交給律師獨自處理",
    },
    answer: "B",
    explanation: {
      why: "法規變動應先評估影響，再更新風險登錄冊與相關計畫。",
      others: {
        A: "不作為會造成違法。",
        C: "不必立即停工。",
        D: "PM 要參與整合管理。",
      },
      keyPoint: "法規變動 → 評估影響 → 更新規劃與風險。",
    },
  },
  {
    id: "F-003",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "倫理守則",
    difficulty: "easy",
    question:
      "PMI 倫理守則的四大核心價值觀不包含下列何者？",
    options: {
      A: "責任（Responsibility）",
      B: "尊重（Respect）",
      C: "公平（Fairness）",
      D: "神秘（Secrecy）",
    },
    answer: "D",
    explanation: {
      why: "PMI 四大價值：Responsibility、Respect、Fairness、Honesty。沒有「神秘」。",
      others: {
        A: "是四大之一。",
        B: "是四大之一。",
        C: "是四大之一。",
      },
      keyPoint: "PMI 倫理四大：責任、尊重、公平、誠信。",
    },
  },
  {
    id: "F-004",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "倫理：誠信",
    difficulty: "medium",
    question:
      "PM 發現贊助者希望隱瞞壞消息上報給董事會，PM 最合適的做法？",
    options: {
      A: "照贊助者要求隱瞞",
      B: "堅持誠信原則，依實際狀況如實報告，必要時透過適當管道陳報",
      C: "與贊助者一起隱瞞",
      D: "向媒體揭露",
    },
    answer: "B",
    explanation: {
      why: "PMI 倫理強調誠信（Honesty），不得隱瞞重大事實。",
      others: {
        A: "違背誠信。",
        C: "同樣違背誠信。",
        D: "應先內部管道，不是直接外部揭露。",
      },
      keyPoint: "誠信優先，壞消息要如實透過適當管道陳報。",
    },
  },
  {
    id: "F-005",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "倫理：公平",
    difficulty: "medium",
    question:
      "供應商私下送 PM 高額禮物，希望在採購中勝出。PM 應？",
    options: {
      A: "收下，反正禮尚往來",
      B: "婉拒並依組織政策揭露，避免利益衝突",
      C: "收下並給其他供應商",
      D: "告訴老婆不要讓她知道",
    },
    answer: "B",
    explanation: {
      why: "收受高額禮物構成利益衝突，違反公平原則，應婉拒並揭露。",
      others: {
        A: "構成利益衝突。",
        C: "不改變違規本質。",
        D: "不構成合規處理。",
      },
      keyPoint: "利益衝突 → 婉拒 + 依政策揭露。",
    },
  },
  {
    id: "F-006",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "資料隱私",
    difficulty: "medium",
    question:
      "開發 APP 需處理歐盟使用者個資，應特別遵循哪項法規？",
    options: {
      A: "HIPAA",
      B: "GDPR",
      C: "SOX",
      D: "PCI DSS",
    },
    answer: "B",
    explanation: {
      why: "GDPR 是歐盟一般資料保護規則，處理歐盟個資必須遵循。",
      others: {
        A: "HIPAA 是美國健康資訊法規。",
        C: "SOX 是美國上市公司財務治理。",
        D: "PCI DSS 是信用卡資料安全標準。",
      },
      keyPoint: "歐盟個資 → GDPR。",
    },
  },
  {
    id: "F-007",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "內部稽核",
    difficulty: "medium",
    question:
      "內部稽核發現專案文件不符合公司治理政策。PM 應？",
    options: {
      A: "忽略報告",
      B: "根據稽核報告制定矯正行動計畫，並追蹤改善",
      C: "辭職",
      D: "隱瞞問題",
    },
    answer: "B",
    explanation: {
      why: "合規處理標準流程：制定矯正行動、追蹤改善、回覆稽核。",
      others: {
        A: "忽略會擴大風險。",
        C: "極端反應。",
        D: "違背倫理。",
      },
      keyPoint: "稽核發現問題 → 矯正計畫 + 追蹤改善。",
    },
  },
  {
    id: "F-008",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規風險",
    difficulty: "medium",
    question:
      "將合規風險納入「專案風險管理」的正確做法為？",
    options: {
      A: "忽略，由法務獨自處理",
      B: "納入風險登錄冊，評估可能性與衝擊，規劃回應策略",
      C: "只做一次評估",
      D: "等到發生再處理",
    },
    answer: "B",
    explanation: {
      why: "合規風險應納入風險登錄冊，正式納入風險管理流程。",
      others: {
        A: "PM 要整合，不能全推法務。",
        C: "要持續監視。",
        D: "事後處理代價高。",
      },
      keyPoint: "合規風險與一般風險同流程管理。",
    },
  },
  {
    id: "F-009",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規成本",
    difficulty: "medium",
    question:
      "專案新增法規合規要求，造成成本上升。PM 該？",
    options: {
      A: "私下省略不做",
      B: "將額外成本納入變更請求，由 CCB 核准後更新預算",
      C: "自掏腰包",
      D: "直接裁減團隊",
    },
    answer: "B",
    explanation: {
      why: "合規成本變動屬於變更，需透過正式變更流程調整預算。",
      others: {
        A: "省略合規違法。",
        C: "不合理也不可能。",
        D: "處理方式錯誤。",
      },
      keyPoint: "合規成本 → 變更請求 → CCB 核准 → 更新預算。",
    },
  },
  {
    id: "F-010",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "利益衝突",
    difficulty: "medium",
    question:
      "PM 的配偶在候選供應商任職。PM 該？",
    options: {
      A: "隱瞞這件事",
      B: "主動揭露並迴避該供應商的評選",
      C: "替配偶爭取訂單",
      D: "不告訴任何人",
    },
    answer: "B",
    explanation: {
      why: "利益衝突應主動揭露並迴避，符合 PMI 倫理公平原則。",
      others: {
        A: "隱瞞加重違規。",
        C: "嚴重違規。",
        D: "違背揭露義務。",
      },
      keyPoint: "利益衝突 = 主動揭露 + 迴避。",
    },
  },
  {
    id: "F-011",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規文件",
    difficulty: "medium",
    question:
      "合規文件（如安全測試紀錄、審核證據）應？",
    options: {
      A: "隨意存放",
      B: "依政策建檔保存，可供稽核追溯",
      C: "定期刪除",
      D: "放在私人雲端",
    },
    answer: "B",
    explanation: {
      why: "合規文件應妥善保存並可追溯，以應稽核或法律要求。",
      others: {
        A: "隨意放導致遺失。",
        C: "可能違法。",
        D: "違反資訊安全政策。",
      },
      keyPoint: "合規文件 = 建檔保存 + 可追溯。",
    },
  },
  {
    id: "F-012",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "行業標準",
    difficulty: "medium",
    question:
      "醫療器材開發專案應特別遵循哪類合規？",
    options: {
      A: "FDA、ISO 13485 等醫材相關法規與標準",
      B: "GDPR",
      C: "PCI DSS",
      D: "SOX",
    },
    answer: "A",
    explanation: {
      why: "醫療器材屬高度管制行業，需遵循 FDA、ISO 13485 等。",
      others: {
        B: "GDPR 是個資保護。",
        C: "PCI DSS 是信用卡資料。",
        D: "SOX 是財報治理。",
      },
      keyPoint: "行業合規要依產業別（醫材 → FDA/ISO 13485）。",
    },
  },
  {
    id: "F-013",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "安全標準",
    difficulty: "medium",
    question:
      "處理信用卡資料的電商專案應遵循？",
    options: {
      A: "PCI DSS",
      B: "HIPAA",
      C: "ISO 14001",
      D: "ISO 13485",
    },
    answer: "A",
    explanation: {
      why: "PCI DSS 是信用卡支付產業資料安全標準。",
      others: {
        B: "HIPAA 是健康資訊。",
        C: "ISO 14001 是環境管理。",
        D: "ISO 13485 是醫材。",
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
      "大型建築專案在環境影響方面應關注？",
    options: {
      A: "只關注成本",
      B: "環境影響評估與當地環保法規的遵循",
      C: "只關注時程",
      D: "只關注設計美感",
    },
    answer: "B",
    explanation: {
      why: "建築專案需做環評並符合環保法規，避免合規風險。",
      others: {
        A: "成本重要但不是合規。",
        C: "時程不涉及合規。",
        D: "美感不涉合規。",
      },
      keyPoint: "建築專案 → 環評 + 當地環保法規。",
    },
  },
  {
    id: "F-015",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "智慧財產權",
    difficulty: "medium",
    question:
      "專案團隊要使用外部開源套件，合規上應注意？",
    options: {
      A: "隨便用",
      B: "檢查授權條款（License）並確保使用方式符合要求",
      C: "所有開源都能免費商用",
      D: "不用告訴客戶",
    },
    answer: "B",
    explanation: {
      why: "開源軟體各有不同 License（MIT、GPL、Apache 等），需確認條款。",
      others: {
        A: "違反授權造成法律風險。",
        C: "GPL 等有嚴格要求。",
        D: "透明揭露符合倫理。",
      },
      keyPoint: "開源授權必須逐一檢查條款是否符合商用要求。",
    },
  },
  {
    id: "F-016",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "勞動法合規",
    difficulty: "medium",
    question:
      "專案團隊長期加班到違反勞基法時數上限，PM 應？",
    options: {
      A: "繼續加班趕進度",
      B: "評估時程與資源調整，遵守法規，避免合規與人員風險",
      C: "讓員工自己承擔",
      D: "偽造打卡紀錄",
    },
    answer: "B",
    explanation: {
      why: "勞動法合規是底線，不可違反；需透過時程與資源調整化解壓力。",
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
    subtopic: "文件留存",
    difficulty: "easy",
    question:
      "合規紀錄留存期限通常由什麼決定？",
    options: {
      A: "PM 心情",
      B: "相關法規/行業標準/組織政策要求",
      C: "隨意決定",
      D: "每個月刪一次",
    },
    answer: "B",
    explanation: {
      why: "留存期限由法規、行業標準、內部政策共同規範。",
      others: {
        A: "不是主觀決定。",
        C: "隨意易違規。",
        D: "可能違法。",
      },
      keyPoint: "留存期限 = 法規 + 標準 + 政策 共同決定。",
    },
  },
  {
    id: "F-018",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "倫理：責任",
    difficulty: "medium",
    question:
      "PMI 倫理「責任」的核心意義為？",
    options: {
      A: "對自己決策與行為負責，承擔後果",
      B: "把錯推給下屬",
      C: "有事請假",
      D: "只做對自己有利的事",
    },
    answer: "A",
    explanation: {
      why: "責任 = 對自己與團隊決策負責，承擔後果。",
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
    subtopic: "倫理：尊重",
    difficulty: "medium",
    question:
      "PMI 倫理「尊重」具體行為為？",
    options: {
      A: "尊重不同文化、觀點、意見，以專業對待他人",
      B: "只尊重主管",
      C: "只尊重同事",
      D: "只尊重客戶",
    },
    answer: "A",
    explanation: {
      why: "尊重應普遍且專業，對所有利害關係人一視同仁。",
      others: {
        B: "選擇性尊重違背倫理。",
        C: "選擇性尊重違背倫理。",
        D: "選擇性尊重違背倫理。",
      },
      keyPoint: "尊重所有利害關係人，不分階級。",
    },
  },
  {
    id: "F-020",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規與敏捷",
    difficulty: "hard",
    question:
      "高度管制行業（如金融、醫療）採敏捷時的最大合規挑戰為？",
    options: {
      A: "敏捷與合規可同時進行",
      B: "需在快速迭代中同時維持完整的合規證據鏈與審計追溯",
      C: "敏捷完全不能用",
      D: "合規文件不需要保留",
    },
    answer: "B",
    explanation: {
      why: "高度管制行業敏捷需要保留完整可追溯證據鏈，最具挑戰。",
      others: {
        A: "兩者需要設計對接機制。",
        C: "敏捷可用，但需合規設計。",
        D: "文件一定要保留。",
      },
      keyPoint: "敏捷+高度合規 = 維持證據鏈與審計追溯。",
    },
  },
  {
    id: "F-021",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "法規變動影響",
    difficulty: "hard",
    question:
      "法規重大修訂導致產品設計必須重做，且成本大幅增加。PM 應？",
    options: {
      A: "隱瞞",
      B: "評估影響 → 正式變更請求 → 治理層核准 → 更新計畫書",
      C: "自行扛責",
      D: "直接終止專案",
    },
    answer: "B",
    explanation: {
      why: "法規重大變動屬重大變更，應正式流程處理。",
      others: {
        A: "隱瞞造成違法。",
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
      "PM 對團隊「合規訓練」的最主要目的為？",
    options: {
      A: "讓團隊了解適用法規並建立合規意識",
      B: "取代技術訓練",
      C: "打卡湊時數",
      D: "為裁員做準備",
    },
    answer: "A",
    explanation: {
      why: "合規訓練在建立團隊合規意識與具體行為準則。",
      others: {
        B: "不取代技術訓練。",
        C: "不是目的。",
        D: "不相關。",
      },
      keyPoint: "合規訓練 = 建立意識與行為準則。",
    },
  },
  {
    id: "F-023",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "資訊安全",
    difficulty: "medium",
    question:
      "ISO 27001 主要規範什麼？",
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
      keyPoint: "ISO 27001 = 資安管理系統標準。",
    },
  },
  {
    id: "F-024",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "供應商合規",
    difficulty: "medium",
    question:
      "採購時選擇供應商，合規層面應審查？",
    options: {
      A: "只看報價",
      B: "資質、證照、過往合規紀錄、資訊安全能力",
      C: "只看員工人數",
      D: "只看辦公地點",
    },
    answer: "B",
    explanation: {
      why: "供應商盡職調查必須涵蓋資質、合規紀錄、資安等。",
      others: {
        A: "價格只是一環。",
        C: "規模非核心。",
        D: "地點非核心。",
      },
      keyPoint: "供應商合規 = 資質+證照+合規紀錄+資安。",
    },
  },
  {
    id: "F-025",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規優先級",
    difficulty: "hard",
    question:
      "專案時程壓力大，某合規步驟被建議「跳過」。PM 應？",
    options: {
      A: "配合省略",
      B: "堅守合規底線，與治理層討論替代方案（如調整範疇/時程）",
      C: "默默省略不告訴別人",
      D: "由下屬自行決定",
    },
    answer: "B",
    explanation: {
      why: "合規是底線，不可因時程壓力省略。若有壓力應由治理層決策替代方案。",
      others: {
        A: "省略造成違規。",
        C: "隱瞞加重違規。",
        D: "下屬無此裁量權。",
      },
      keyPoint: "合規為底線 → 不可跳過 → 透過治理層調整其他面向。",
    },
  },
  {
    id: "F-026",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規角色",
    difficulty: "medium",
    question:
      "「合規長（Chief Compliance Officer）」在專案中的作用為？",
    options: {
      A: "日常專案執行",
      B: "提供合規指引、審查高風險議題、協助建立合規機制",
      C: "寫程式",
      D: "設計 UI",
    },
    answer: "B",
    explanation: {
      why: "合規長協助組織與專案落實合規，審查高風險議題。",
      others: {
        A: "是 PM 工作。",
        C: "開發團隊工作。",
        D: "設計團隊工作。",
      },
      keyPoint: "合規長 = 組織合規指引與高風險審查。",
    },
  },
  {
    id: "F-027",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規與品質",
    difficulty: "hard",
    question:
      "「合規」與「品質」的關係？",
    options: {
      A: "兩者完全相同",
      B: "合規是法規底線；品質是符合需求與預期的程度，兩者相關但不等同",
      C: "品質包含合規",
      D: "合規取代品質",
    },
    answer: "B",
    explanation: {
      why: "合規是法規底線；品質是對需求滿足度的度量。兩者相關但不等同。",
      others: {
        A: "不相同。",
        C: "部分相關但不完全包含。",
        D: "兩者並存。",
      },
      keyPoint: "合規 = 法規底線；品質 = 需求滿足度。",
    },
  },
  {
    id: "F-028",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "隱私風險",
    difficulty: "medium",
    question:
      "使用者個資處理若違反 GDPR，最嚴重的後果可能為？",
    options: {
      A: "被責備",
      B: "高達全球營收 4% 或 2000 萬歐元（擇高）的罰款",
      C: "警告信",
      D: "沒事",
    },
    answer: "B",
    explanation: {
      why: "GDPR 違規最高可罰全球營收 4% 或 2000 萬歐元，擇高。",
      others: {
        A: "低估後果。",
        C: "不是唯一後果。",
        D: "錯誤。",
      },
      keyPoint: "GDPR 違規最高罰款 = 4% 全球營收 / 2000 萬歐元擇高。",
    },
  },
  {
    id: "F-029",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規驗證",
    difficulty: "medium",
    question:
      "下列何者「最能」驗證專案合規？",
    options: {
      A: "口頭保證",
      B: "通過第三方稽核或認證、保留可追溯證據",
      C: "PM 自己說合規",
      D: "看運氣",
    },
    answer: "B",
    explanation: {
      why: "正式稽核與可追溯證據是驗證合規的客觀方式。",
      others: {
        A: "口頭無效。",
        C: "自稱不是驗證。",
        D: "不可靠。",
      },
      keyPoint: "合規驗證 = 第三方稽核 + 可追溯證據。",
    },
  },
  {
    id: "F-030",
    chapter: "F",
    topic: "專案合規性",
    subtopic: "合規與變更",
    difficulty: "hard",
    question:
      "專案需求變更可能帶來新合規風險時，PM 應？",
    options: {
      A: "忽略",
      B: "在變更評估流程中納入合規風險分析，必要時邀請合規 / 法務參與",
      C: "等問題發生再說",
      D: "變更不影響合規",
    },
    answer: "B",
    explanation: {
      why: "變更評估必須納入合規分析，必要時由合規/法務參與判斷。",
      others: {
        A: "忽略會造成違規。",
        C: "被動處理代價高。",
        D: "變更有可能影響合規。",
      },
      keyPoint: "變更評估 = 合規風險 + 法務/合規參與。",
    },
  },
];

export default questions;
