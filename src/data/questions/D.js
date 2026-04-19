// D. 組織文化與變革管理（40 題）
// 主題：ADKAR、敏捷思維、變革抗拒、組織轉型、團隊動力
const questions = [
  {
    id: "D-001",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革起點",
    difficulty: "medium",
    question:
      "預測式專案中途績效嚴重偏差，贊助者要求轉為敏捷式。PM 應「首先」？",
    options: {
      A: "向團隊介紹敏捷宣言的價值與原則",
      B: "向團隊介紹實施敏捷的好處",
      C: "與贊助者討論修改專案章程",
      D: "直接授權團隊制定團隊章程自組織運作",
    },
    answer: "A",
    explanation: {
      why: "轉敏捷第一步 = 建立敏捷思維（Being Agile）。價值觀與原則是所有實踐的前提。",
      others: {
        B: "只講好處沒建立核心思維骨架。",
        C: "章程不寫開發手法；贊助者已主動提出不需再討論。",
        D: "思維未建立就授權會造成更大混亂。",
      },
      keyPoint: "轉敏捷首要 = 介紹敏捷宣言價值與原則（思維先於實踐）。",
    },
  },
  {
    id: "D-002",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR 模型",
    difficulty: "medium",
    question:
      "ADKAR 變革管理模型的五個階段依序為？",
    options: {
      A: "Awareness → Desire → Knowledge → Ability → Reinforcement",
      B: "Action → Desire → Knowledge → Ability → Result",
      C: "Awareness → Decision → Knowledge → Ability → Review",
      D: "Awareness → Desire → Knowledge → Agility → Reinforcement",
    },
    answer: "A",
    explanation: {
      why: "ADKAR = 覺察 → 渴望 → 知識 → 能力 → 強化。",
      others: {
        B: "開頭錯誤。",
        C: "第二、第五字母錯。",
        D: "第四個字錯。",
      },
      keyPoint: "ADKAR：A覺察→D渴望→K知識→A能力→R強化。",
    },
  },
  {
    id: "D-003",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR 起點",
    difficulty: "medium",
    question:
      "公司要推動重大變革，員工完全不知道為什麼要變。根據 ADKAR，首要動作為？",
    options: {
      A: "直接訓練新技能",
      B: "先建立員工對變革必要性的「覺察（Awareness）」",
      C: "立即實施新流程",
      D: "處罰反對者",
    },
    answer: "B",
    explanation: {
      why: "ADKAR 第一步是建立覺察，讓員工知道「為什麼要變」。",
      others: {
        A: "訓練屬於 Knowledge/Ability，不是第一步。",
        C: "沒有覺察直接推動會失敗。",
        D: "強迫不是變革管理方法。",
      },
      keyPoint: "變革從「為什麼要變」開始 → Awareness。",
    },
  },
  {
    id: "D-004",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR Desire",
    difficulty: "medium",
    question:
      "員工已經知道要變革，但內心抗拒。ADKAR 中應加強哪一階段？",
    options: {
      A: "Awareness",
      B: "Desire",
      C: "Ability",
      D: "Reinforcement",
    },
    answer: "B",
    explanation: {
      why: "已覺察但抗拒 → 需加強渴望（Desire），讓員工主動想改變。",
      others: {
        A: "覺察已建立。",
        C: "能力是後階段。",
        D: "強化是最後階段。",
      },
      keyPoint: "抗拒 → 提升 Desire（渴望）。",
    },
  },
  {
    id: "D-005",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR Knowledge",
    difficulty: "medium",
    question:
      "員工願意改變但不知道「該怎麼做」，ADKAR 中應強化？",
    options: {
      A: "Knowledge（知識）",
      B: "Awareness",
      C: "Desire",
      D: "Reinforcement",
    },
    answer: "A",
    explanation: {
      why: "知道「怎麼做」屬於 Knowledge，透過教育訓練提供。",
      others: {
        B: "覺察處理「為什麼」。",
        C: "渴望處理「想不想」。",
        D: "強化是維持階段。",
      },
      keyPoint: "知道怎麼做 = Knowledge，透過教育訓練達成。",
    },
  },
  {
    id: "D-006",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR Ability",
    difficulty: "medium",
    question:
      "員工受訓完成但實際操作時卡卡的，ADKAR 中應加強？",
    options: {
      A: "Knowledge",
      B: "Ability（能力）",
      C: "Awareness",
      D: "Desire",
    },
    answer: "B",
    explanation: {
      why: "已知知識但不熟練 → 需要 Ability，透過練習、教練、時間累積。",
      others: {
        A: "知識已有。",
        C: "覺察已有。",
        D: "意願已有。",
      },
      keyPoint: "Knowledge 是「懂」；Ability 是「會」。",
    },
  },
  {
    id: "D-007",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR Reinforcement",
    difficulty: "medium",
    question:
      "變革成功推行後，ADKAR 最後一階段 Reinforcement 的目的為？",
    options: {
      A: "維持並鞏固新行為，避免回到舊做法",
      B: "讓員工重新接受訓練",
      C: "評估員工績效",
      D: "與員工續約",
    },
    answer: "A",
    explanation: {
      why: "強化階段用獎勵、回饋、持續檢核確保變革長期生效。",
      others: {
        B: "重訓是 Ability 階段。",
        C: "績效評估不是 Reinforcement 本質。",
        D: "與續約無關。",
      },
      keyPoint: "Reinforcement = 鞏固新行為，防止倒退。",
    },
  },
  {
    id: "D-008",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷思維",
    difficulty: "medium",
    question:
      "下列何者「最能」反映敏捷思維？",
    options: {
      A: "嚴格按計畫不可變動",
      B: "擁抱變更，持續交付客戶價值",
      C: "只依 PM 指令做事",
      D: "凡事需經主管簽核",
    },
    answer: "B",
    explanation: {
      why: "敏捷核心思維是擁抱變更與持續交付價值。",
      others: {
        A: "敏捷反對死守計畫。",
        C: "敏捷是自組織團隊。",
        D: "敏捷減少官僚簽核。",
      },
      keyPoint: "敏捷思維 = 擁抱變更 + 持續交付價值。",
    },
  },
  {
    id: "D-009",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革抗拒",
    difficulty: "medium",
    question:
      "員工抗拒變革最常見的根本原因為？",
    options: {
      A: "不喜歡主管",
      B: "對不確定性與失控感到恐懼",
      C: "電腦太舊",
      D: "薪水太低",
    },
    answer: "B",
    explanation: {
      why: "變革抗拒多源於對未來的恐懼、失去控制感、工作安全感受威脅。",
      others: {
        A: "人際因素是次要。",
        C: "設備問題與變革抗拒無關。",
        D: "非主要原因。",
      },
      keyPoint: "變革抗拒根本原因 = 不確定性與恐懼。",
    },
  },
  {
    id: "D-010",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "自組織團隊",
    difficulty: "medium",
    question:
      "敏捷的「自組織團隊」最重要的前提條件為？",
    options: {
      A: "團隊完全沒有規則",
      B: "團隊具備敏捷思維與充分授權",
      C: "團隊都是新人",
      D: "取消所有會議",
    },
    answer: "B",
    explanation: {
      why: "自組織需要思維到位 + 適當授權，才能發揮。",
      others: {
        A: "仍需工作框架（如 Scrum）。",
        C: "資深資淺都能自組織。",
        D: "必要會議（站立、回顧）仍存在。",
      },
      keyPoint: "自組織團隊 = 敏捷思維 + 充分授權。",
    },
  },
  {
    id: "D-011",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "團隊章程",
    difficulty: "medium",
    question:
      "「團隊章程（Team Charter）」與「專案章程（Project Charter）」的差異？",
    options: {
      A: "兩者相同",
      B: "專案章程授權專案；團隊章程是團隊內部工作規則與共識",
      C: "團隊章程由贊助者簽",
      D: "專案章程由團隊自行制定",
    },
    answer: "B",
    explanation: {
      why: "專案章程是高階授權文件；團隊章程是團隊內部自訂的工作規則。",
      others: {
        A: "兩者完全不同。",
        C: "團隊章程由團隊自訂。",
        D: "專案章程由贊助者簽發。",
      },
      keyPoint: "專案章程 = 對外正式授權；團隊章程 = 對內工作規則。",
    },
  },
  {
    id: "D-012",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "組織文化影響",
    difficulty: "medium",
    question:
      "下列何者「最能」說明組織文化對專案的影響？",
    options: {
      A: "完全沒有影響",
      B: "組織文化會形塑決策方式、風險容忍度、溝通風格，並影響手法選擇",
      C: "只影響辦公室布置",
      D: "只影響員工餐廳",
    },
    answer: "B",
    explanation: {
      why: "組織文化深刻影響專案管理方式，包含決策、風險、溝通與工作方式。",
      others: {
        A: "影響非常深遠。",
        C: "只是表面現象。",
        D: "與專案無關。",
      },
      keyPoint: "組織文化 → 決策+風險+溝通+手法選擇。",
    },
  },
  {
    id: "D-013",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革領導",
    difficulty: "hard",
    question:
      "PMO 推行全公司敏捷轉型，但各部門抗拒明顯。PMO 最重要的行動是？",
    options: {
      A: "發布命令強制執行",
      B: "舉辦變革領導計畫，建立覺察與渴望，設置早期成功案例",
      C: "先處罰反對者",
      D: "停止推行",
    },
    answer: "B",
    explanation: {
      why: "全公司變革需分階段建立覺察與渴望，用 Quick Win 降低抗拒。",
      others: {
        A: "強制反而加深抗拒。",
        C: "處罰製造更大衝突。",
        D: "消極放棄不解決問題。",
      },
      keyPoint: "變革領導 = 建立覺察+渴望+Quick Win。",
    },
  },
  {
    id: "D-014",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷宣言 12 原則",
    difficulty: "hard",
    question:
      "敏捷 12 原則中「最高優先事項」為？",
    options: {
      A: "團隊和睦",
      B: "透過早期持續交付有價值軟體讓客戶滿意",
      C: "嚴格遵守合約",
      D: "產出詳盡文件",
    },
    answer: "B",
    explanation: {
      why: "敏捷宣言第一條：最高優先是透過盡早且持續交付有價值的軟體讓客戶滿意。",
      others: {
        A: "團隊和睦重要但不是第一原則。",
        C: "宣言重視協作勝於合約。",
        D: "宣言重視軟體勝於文件。",
      },
      keyPoint: "敏捷第一原則 = 早期持續交付價值。",
    },
  },
  {
    id: "D-015",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷 vs 預測式文化",
    difficulty: "medium",
    question:
      "下列何者「較不符合」敏捷文化？",
    options: {
      A: "跨職能自組織團隊",
      B: "透明與頻繁的溝通",
      C: "嚴密階層審批文化",
      D: "擁抱失敗學習",
    },
    answer: "C",
    explanation: {
      why: "階層式審批與敏捷的自組織、快速決策相違。",
      others: {
        A: "典型敏捷特徵。",
        B: "典型敏捷特徵。",
        D: "典型敏捷特徵。",
      },
      keyPoint: "敏捷文化 = 扁平、透明、擁抱失敗。",
    },
  },
  {
    id: "D-016",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革溝通",
    difficulty: "medium",
    question:
      "員工聽到變革消息後感到恐慌，PM 應？",
    options: {
      A: "避而不談等自然平息",
      B: "主動、透明溝通變革原因、影響與支持措施",
      C: "告訴員工不用擔心",
      D: "完全交給 HR 處理",
    },
    answer: "B",
    explanation: {
      why: "透明溝通可降低不確定性與恐慌，是變革成功關鍵。",
      others: {
        A: "避而不談加重恐慌。",
        C: "空話不解決問題。",
        D: "PM 仍需主動溝通。",
      },
      keyPoint: "變革溝通要主動、透明、具體。",
    },
  },
  {
    id: "D-017",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Servant Leadership",
    difficulty: "medium",
    question:
      "「僕人式領導（Servant Leadership）」的核心概念為？",
    options: {
      A: "領導者命令團隊做事",
      B: "領導者服務團隊，移除障礙、賦能團隊成功",
      C: "領導者只監督不參與",
      D: "領導者決定所有事",
    },
    answer: "B",
    explanation: {
      why: "Servant Leader 翻轉傳統金字塔，先服務團隊並移除障礙。",
      others: {
        A: "命令式是指令型領導。",
        C: "不參與是放任型領導。",
        D: "集權不是僕人式。",
      },
      keyPoint: "Servant Leader = 服務團隊、移除障礙、賦能。",
    },
  },
  {
    id: "D-018",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷授權",
    difficulty: "medium",
    question:
      "敏捷團隊成員感到決策權被剝奪，無法自主解決問題。PM 應？",
    options: {
      A: "繼續集中決策",
      B: "檢視授權範圍，把技術、流程決策權還給團隊",
      C: "解散團隊重組",
      D: "減少站立會議次數",
    },
    answer: "B",
    explanation: {
      why: "敏捷自組織要求團隊擁有技術與流程決策權。",
      others: {
        A: "違反敏捷自組織精神。",
        C: "重組不解決根本問題。",
        D: "儀式次數不是問題關鍵。",
      },
      keyPoint: "敏捷團隊要有技術/流程決策權，PM 不該越位。",
    },
  },
  {
    id: "D-019",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革七步驟（Kotter）",
    difficulty: "hard",
    question:
      "Kotter 八步驟變革模型的第一步為？",
    options: {
      A: "建立變革願景",
      B: "建立危機感/急迫感",
      C: "移除障礙",
      D: "慶祝小成功",
    },
    answer: "B",
    explanation: {
      why: "Kotter 第一步是建立急迫感（Create Urgency），讓團隊意識到不變就會出事。",
      others: {
        A: "建立願景是第三步。",
        C: "移除障礙是第五步。",
        D: "慶祝小成功是第六步。",
      },
      keyPoint: "Kotter 第一步 = 建立急迫感。",
    },
  },
  {
    id: "D-020",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革關鍵人物",
    difficulty: "medium",
    question:
      "組織變革中，「變革代言人（Change Champion）」的最主要角色為？",
    options: {
      A: "反對變革",
      B: "主動倡議、示範並協助推動變革",
      C: "負責裁員",
      D: "只做紀錄",
    },
    answer: "B",
    explanation: {
      why: "Change Champion 是組織內的變革推動者，透過示範與倡議帶動同僚。",
      others: {
        A: "相反角色。",
        C: "那是 HR/管理層。",
        D: "記錄不是主要角色。",
      },
      keyPoint: "Change Champion = 變革推手與代言人。",
    },
  },
  {
    id: "D-021",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "組織轉型",
    difficulty: "hard",
    question:
      "PMI 指南中，組織轉型的起點應為？",
    options: {
      A: "引入新工具",
      B: "翻轉員工的思維與渴望",
      C: "重新裝潢辦公室",
      D: "降低員工薪資",
    },
    answer: "B",
    explanation: {
      why: "PMI 強調組織轉型必須從翻轉員工思維與渴望做起。",
      others: {
        A: "工具不是核心。",
        C: "表面裝飾不是核心。",
        D: "薪資調整與轉型不直接相關。",
      },
      keyPoint: "組織轉型的根在人的思維與渴望。",
    },
  },
  {
    id: "D-022",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "回顧會議",
    difficulty: "medium",
    question:
      "敏捷的「回顧會議（Retrospective）」主要目的為？",
    options: {
      A: "報告進度給老闆",
      B: "團隊檢視流程、找出改善點，持續改善工作方式",
      C: "做績效考核",
      D: "討論薪水",
    },
    answer: "B",
    explanation: {
      why: "Retrospective 是團隊檢視流程、持續改善的儀式。",
      others: {
        A: "那是 Sprint Review 或向上報告。",
        C: "考核不屬於 Retro 目的。",
        D: "與薪資無關。",
      },
      keyPoint: "Retrospective = 團隊流程持續改善。",
    },
  },
  {
    id: "D-023",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷教練",
    difficulty: "medium",
    question:
      "敏捷教練（Agile Coach）的主要目的是？",
    options: {
      A: "替團隊做決定",
      B: "引導團隊與組織提升敏捷思維與能力",
      C: "幫團隊寫程式",
      D: "負責專案進度追蹤",
    },
    answer: "B",
    explanation: {
      why: "Agile Coach 透過引導、教練式領導協助團隊與組織內化敏捷。",
      others: {
        A: "敏捷教練不替代決策。",
        C: "不是開發工程師。",
        D: "進度追蹤是 PM/SM 職能的一部分。",
      },
      keyPoint: "Agile Coach = 提升敏捷思維的引導者。",
    },
  },
  {
    id: "D-024",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革阻力處理",
    difficulty: "hard",
    question:
      "PM 發現某關鍵利害關係人強烈反對變革，最佳處理方式？",
    options: {
      A: "避開他",
      B: "主動理解其疑慮，針對性提供資訊與支持",
      C: "直接投訴高層",
      D: "等他退休",
    },
    answer: "B",
    explanation: {
      why: "理解其疑慮再提供針對性協助是處理關鍵反對者的最佳方式。",
      others: {
        A: "避開讓衝突惡化。",
        C: "直接投訴破壞關係。",
        D: "消極等待不現實。",
      },
      keyPoint: "關鍵反對者 = 主動聆聽、針對性溝通。",
    },
  },
  {
    id: "D-025",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "文化裁適",
    difficulty: "medium",
    question:
      "跨國專案中，團隊成員來自不同文化。PM 應？",
    options: {
      A: "要求全部使用 PM 母國文化",
      B: "建立文化敏感度，尊重並調和差異",
      C: "禁止討論文化議題",
      D: "全部採用線上工作避免互動",
    },
    answer: "B",
    explanation: {
      why: "跨文化團隊需建立文化敏感度並協調差異以維持合作。",
      others: {
        A: "強加文化破壞團隊。",
        C: "禁止討論壓抑問題。",
        D: "失去人際連結。",
      },
      keyPoint: "跨文化 PM = 敏感度 + 協調差異。",
    },
  },
  {
    id: "D-026",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Being Agile",
    difficulty: "medium",
    question:
      "某公司買了 Jira、排了 Sprint，但仍用指令式管理。這屬於？",
    options: {
      A: "真敏捷",
      B: "假敏捷（只有 Doing Agile 沒有 Being Agile）",
      C: "混合式",
      D: "預測式",
    },
    answer: "B",
    explanation: {
      why: "只套工具沒建立敏捷思維，就是假敏捷（Doing Agile without Being Agile）。",
      others: {
        A: "未內化思維不算真敏捷。",
        C: "不是混合式定義。",
        D: "表面是敏捷儀式。",
      },
      keyPoint: "工具 + 儀式 ≠ 敏捷，真敏捷需要思維。",
    },
  },
  {
    id: "D-027",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "團隊成長 Tuckman",
    difficulty: "hard",
    question:
      "Tuckman 團隊發展五階段的順序為？",
    options: {
      A: "Forming → Storming → Norming → Performing → Adjourning",
      B: "Storming → Forming → Performing → Norming → Adjourning",
      C: "Forming → Performing → Norming → Storming → Adjourning",
      D: "Norming → Forming → Storming → Performing → Adjourning",
    },
    answer: "A",
    explanation: {
      why: "Tuckman：形成 → 風暴 → 規範 → 表現 → 解散。",
      others: {
        B: "順序錯。",
        C: "順序錯。",
        D: "順序錯。",
      },
      keyPoint: "Tuckman：FSNPA（形成→風暴→規範→表現→解散）。",
    },
  },
  {
    id: "D-028",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "衝突處理",
    difficulty: "medium",
    question:
      "PMI 建議處理團隊衝突「最佳」方式為？",
    options: {
      A: "迴避（Avoid）",
      B: "強制（Force）",
      C: "協同/解決（Collaborate/Problem Solve）",
      D: "妥協（Compromise）",
    },
    answer: "C",
    explanation: {
      why: "PMI 推崇協同解決，雙贏達成根本處理。",
      others: {
        A: "迴避延誤問題。",
        B: "強制破壞關係。",
        D: "妥協雙方都犧牲，不是最佳。",
      },
      keyPoint: "衝突處理 PMI 首選：Collaborate / Problem Solve。",
    },
  },
  {
    id: "D-029",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷思維落實",
    difficulty: "hard",
    question:
      "要讓團隊從預測式轉為敏捷成功，下列哪個「不是」必要條件？",
    options: {
      A: "建立敏捷價值觀與原則",
      B: "取消所有規劃",
      C: "充分授權團隊",
      D: "管理層支持與組織文化配合",
    },
    answer: "B",
    explanation: {
      why: "敏捷不是沒計畫，而是「輕量、滾動式」計畫。取消所有規劃是誤解。",
      others: {
        A: "價值觀是基礎。",
        C: "授權是必要條件。",
        D: "管理層支持是成功關鍵。",
      },
      keyPoint: "敏捷仍需計畫，只是輕量、滾動。",
    },
  },
  {
    id: "D-030",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "抗拒類型",
    difficulty: "medium",
    question:
      "員工抗拒變革最「需要先處理」的是哪種？",
    options: {
      A: "理性抗拒（基於資訊或事實）",
      B: "情緒抗拒（恐懼、焦慮、失控感）",
      C: "政治抗拒（利益受損）",
      D: "三者都不用處理",
    },
    answer: "B",
    explanation: {
      why: "情緒抗拒常最強烈且蔓延快，應優先處理；但實務上三種並存都需要處理。",
      others: {
        A: "可用資料說服。",
        C: "可用利益調整。",
        D: "都需要處理。",
      },
      keyPoint: "情緒抗拒最難最先處理，透過溝通與同理心。",
    },
  },
  {
    id: "D-031",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革經理 vs PM",
    difficulty: "medium",
    question:
      "「變革經理（Change Manager）」與「專案經理（PM）」的關係？",
    options: {
      A: "兩者相同職位",
      B: "PM 負責交付專案成果；變革經理負責組織/人員接受與使用該成果",
      C: "變革經理只管 HR",
      D: "PM 只管敏捷專案",
    },
    answer: "B",
    explanation: {
      why: "PM 交付「東西做出來」；變革經理負責「人能用新東西」。",
      others: {
        A: "兩者角色不同。",
        C: "變革經理跨職能不只 HR。",
        D: "PM 不限於敏捷。",
      },
      keyPoint: "PM = 交付；變革經理 = 人員採用。",
    },
  },
  {
    id: "D-032",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷儀式",
    difficulty: "easy",
    question:
      "Scrum 的四大儀式不包含下列何者？",
    options: {
      A: "Sprint Planning",
      B: "Daily Standup",
      C: "Sprint Review",
      D: "年度績效面談",
    },
    answer: "D",
    explanation: {
      why: "年度績效面談不是 Scrum 儀式；四大為 Planning、Daily、Review、Retrospective。",
      others: {
        A: "是 Scrum 儀式。",
        B: "是 Scrum 儀式。",
        C: "是 Scrum 儀式。",
      },
      keyPoint: "Scrum 四大儀式：Planning、Daily、Review、Retro。",
    },
  },
  {
    id: "D-033",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "持續改善",
    difficulty: "medium",
    question:
      "敏捷宣言 12 原則強調「固定節奏持續改善」是？",
    options: {
      A: "Daily Standup",
      B: "Retrospective（回顧會議）",
      C: "Sprint Planning",
      D: "Refinement",
    },
    answer: "B",
    explanation: {
      why: "Retrospective 是敏捷實踐中體現持續改善（Kaizen）的固定節奏儀式。",
      others: {
        A: "每日同步進度。",
        C: "規劃下一 Sprint。",
        D: "梳理 Backlog 細化。",
      },
      keyPoint: "持續改善 → Retrospective。",
    },
  },
  {
    id: "D-034",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "引入敏捷",
    difficulty: "hard",
    question:
      "PMO 首次在公司引入敏捷，最合適的起點為？",
    options: {
      A: "要求所有部門一天內切換",
      B: "選擇一個 Pilot 試點專案，累積成功經驗後逐步擴散",
      C: "完全停止所有專案",
      D: "立刻裁員傳統 PM",
    },
    answer: "B",
    explanation: {
      why: "引入重大變革適合先選 Pilot，累積經驗後推廣，降低組織風險。",
      others: {
        A: "全面切換風險極高。",
        C: "停工影響營運。",
        D: "裁員破壞組織士氣。",
      },
      keyPoint: "大變革先 Pilot，降低風險。",
    },
  },
  {
    id: "D-035",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "文化對決策",
    difficulty: "medium",
    question:
      "在「高權力距離」文化中，PM 需特別注意？",
    options: {
      A: "下屬不會主動表達異議，需主動引導發聲",
      B: "下屬會搶著決策",
      C: "會議會變得太隨性",
      D: "團隊不需要 PM",
    },
    answer: "A",
    explanation: {
      why: "高權力距離文化中，下屬傾向遵從，PM 需主動創造安全環境讓他們發聲。",
      others: {
        B: "相反行為。",
        C: "不是典型特徵。",
        D: "團隊仍需領導。",
      },
      keyPoint: "高權力距離 → 主動引導下屬發聲。",
    },
  },
  {
    id: "D-036",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革前提",
    difficulty: "hard",
    question:
      "PMI 指南中，變革管理「不該做」的是？",
    options: {
      A: "透過教育建立覺察",
      B: "強迫員工接受變革",
      C: "提供支持與訓練",
      D: "引入變革代言人",
    },
    answer: "B",
    explanation: {
      why: "強迫會加深抗拒，PMI 明確建議不該強迫。",
      others: {
        A: "正面做法。",
        C: "必要做法。",
        D: "有效策略。",
      },
      keyPoint: "變革管理不能強迫，要靠覺察+渴望建立。",
    },
  },
  {
    id: "D-037",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷運作環境",
    difficulty: "medium",
    question:
      "下列哪種組織文化「最不利」敏捷推行？",
    options: {
      A: "鼓勵實驗與學習",
      B: "失敗零容忍、層層審批",
      C: "透明資訊流通",
      D: "信任授權團隊",
    },
    answer: "B",
    explanation: {
      why: "失敗零容忍與層層審批與敏捷擁抱失敗、快速決策文化相悖。",
      others: {
        A: "利於敏捷。",
        C: "利於敏捷。",
        D: "利於敏捷。",
      },
      keyPoint: "敏捷需要擁抱失敗與快速決策的文化土壤。",
    },
  },
  {
    id: "D-038",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Sprint 目標",
    difficulty: "medium",
    question:
      "Sprint Planning 設定的「Sprint 目標」最主要的作用？",
    options: {
      A: "給團隊方向與對齊焦點",
      B: "用來考核個人績效",
      C: "宣告給客戶的 KPI",
      D: "提供研發預算基準",
    },
    answer: "A",
    explanation: {
      why: "Sprint 目標提供本輪工作的方向與焦點，讓團隊聚焦。",
      others: {
        B: "不用於個人考核。",
        C: "非主要用途。",
        D: "與預算無直接關聯。",
      },
      keyPoint: "Sprint 目標 = 本輪方向與焦點。",
    },
  },
  {
    id: "D-039",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革 Quick Win",
    difficulty: "medium",
    question:
      "組織變革初期設置「Quick Win（快速勝利）」的目的？",
    options: {
      A: "向員工展示變革可行並建立信心",
      B: "節省預算",
      C: "加速裁員",
      D: "替換主管",
    },
    answer: "A",
    explanation: {
      why: "Quick Win 用實例證明變革可行，強化信心與支持。",
      others: {
        B: "不是預算目的。",
        C: "不是裁員目的。",
        D: "不是人員變動目的。",
      },
      keyPoint: "Quick Win = 建立變革信心的關鍵策略。",
    },
  },
  {
    id: "D-040",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷授權責任",
    difficulty: "hard",
    question:
      "敏捷團隊雖充分授權，但誰仍負最終「專案交付與商業成果」責任？",
    options: {
      A: "Scrum Master",
      B: "PO（產品負責人）與贊助者",
      C: "整個敏捷團隊集體承擔所有責任",
      D: "客戶",
    },
    answer: "B",
    explanation: {
      why: "PO 負責產品價值與成果；贊助者承擔專案總體商業責任。",
      others: {
        A: "SM 是流程引導者。",
        C: "團隊負責交付，但最終商業成果由 PO+贊助者承擔。",
        D: "客戶是受益者不是責任方。",
      },
      keyPoint: "敏捷成果責任 = PO + 贊助者。",
    },
  },
];

export default questions;
