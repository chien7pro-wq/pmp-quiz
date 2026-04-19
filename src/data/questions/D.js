// D. 組織文化與變革管理（40 題 情境題版）
const questions = [
  {
    id: "D-001",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "轉敏捷首要",
    difficulty: "medium",
    question:
      "某預測式專案因需求多變導致時程嚴重落後、成本超支，關鍵利害關係人頻繁抱怨。贊助者開會宣布「立即轉為敏捷式開發」並授權 PM 負責轉型。PM 該如何開始？",
    options: {
      A: "向團隊成員介紹敏捷宣言思維的價值和原則",
      B: "向團隊成員介紹實施敏捷的好處",
      C: "跟贊助者討論並修改專案章程",
      D: "引導團隊制定團隊章程並充分授權",
    },
    answer: "A",
    explanation: {
      why: "轉敏捷本質是組織變革，第一步必須是建立敏捷思維（Being Agile），讓團隊理解價值觀與原則，後續實踐才不會變假敏捷。",
      others: {
        B: "只講好處沒建立思維骨架，變革不穩固。",
        C: "開發手法不寫在章程；贊助者已主動提出不需再討論。",
        D: "思維未建立就授權會造成更大混亂。",
      },
      keyPoint: "轉敏捷首要 = 介紹價值與原則（思維先於實踐）。",
    },
  },
  {
    id: "D-002",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR 階段",
    difficulty: "medium",
    question:
      "PMO 邀請外部顧問為公司規劃變革導入，顧問推薦使用 ADKAR 模型。實習生問 PM：「ADKAR 五個字母分別代表什麼？」最正確的回答為？",
    options: {
      A: "Awareness（覺察）→ Desire（渴望）→ Knowledge（知識）→ Ability（能力）→ Reinforcement（強化）",
      B: "Action → Desire → Knowledge → Ability → Result",
      C: "Awareness → Decision → Knowledge → Ability → Review",
      D: "Awareness → Desire → Knowledge → Agility → Reinforcement",
    },
    answer: "A",
    explanation: {
      why: "ADKAR = Awareness（覺察）→ Desire（渴望）→ Knowledge（知識）→ Ability（能力）→ Reinforcement（強化）。",
      others: {
        B: "開頭錯誤。",
        C: "第 2、5 個字錯。",
        D: "第 4 個字錯。",
      },
      keyPoint: "ADKAR：A覺察→D渴望→K知識→A能力→R強化。",
    },
  },
  {
    id: "D-003",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR-Awareness",
    difficulty: "medium",
    question:
      "公司要導入新 ERP，員工完全不知道「為什麼」要改。HR 問 PM 該從 ADKAR 哪一步下手？",
    options: {
      A: "直接開新系統訓練課",
      B: "先建立員工對變革必要性的「覺察（Awareness）」",
      C: "立即上線新系統",
      D: "處罰不配合的人",
    },
    answer: "B",
    explanation: {
      why: "員工不知為何而變 → 第一步建立覺察（Awareness），讓他們理解變革的必要性。",
      others: {
        A: "訓練屬 Knowledge/Ability，不是第一步。",
        C: "沒覺察就推會失敗。",
        D: "強迫不是變革管理。",
      },
      keyPoint: "變革第一步 = 建立 Awareness。",
    },
  },
  {
    id: "D-004",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR-Desire",
    difficulty: "medium",
    question:
      "員工已經知道公司要導入敏捷，但內心覺得「敏捷會讓我失業」而抗拒。PM 該加強 ADKAR 的哪個階段？",
    options: {
      A: "Awareness",
      B: "Desire（渴望）",
      C: "Ability",
      D: "Reinforcement",
    },
    answer: "B",
    explanation: {
      why: "已覺察但抗拒 → 要加強 Desire（渴望），讓員工產生主動想改變的意願。",
      others: {
        A: "覺察已有。",
        C: "能力屬後階段。",
        D: "強化是最後階段。",
      },
      keyPoint: "抗拒 → 提升 Desire。",
    },
  },
  {
    id: "D-005",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR-Knowledge",
    difficulty: "medium",
    question:
      "員工願意配合新系統但不知道「該怎麼操作」，在 ADKAR 中該補強？",
    options: {
      A: "Knowledge（知識）",
      B: "Awareness",
      C: "Desire",
      D: "Reinforcement",
    },
    answer: "A",
    explanation: {
      why: "「怎麼做」屬於 Knowledge 階段，透過教育訓練提供。",
      others: {
        B: "覺察處理「為什麼」。",
        C: "渴望處理「想不想」。",
        D: "強化是維持階段。",
      },
      keyPoint: "怎麼做 = Knowledge，透過訓練補強。",
    },
  },
  {
    id: "D-006",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR-Ability",
    difficulty: "medium",
    question:
      "員工上完訓練課懂了，但實際操作時仍然卡手。這時該加強？",
    options: {
      A: "Knowledge",
      B: "Ability（能力）",
      C: "Awareness",
      D: "Desire",
    },
    answer: "B",
    explanation: {
      why: "懂了但不熟練 → 需 Ability，透過練習、教練、時間累積。",
      others: {
        A: "知識已有。",
        C: "覺察已有。",
        D: "意願已有。",
      },
      keyPoint: "Knowledge 是『懂』；Ability 是『會』。",
    },
  },
  {
    id: "D-007",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "ADKAR-Reinforcement",
    difficulty: "medium",
    question:
      "新流程已順利推行兩個月，PM 注意到有部分員工偷偷回到舊做法。他該啟動 ADKAR 的哪一階段？",
    options: {
      A: "Reinforcement（強化），透過獎勵、回饋、持續檢核鞏固新行為",
      B: "再做一次 Awareness",
      C: "取消變革",
      D: "直接裁員",
    },
    answer: "A",
    explanation: {
      why: "變革推行後出現回頭現象 → 最後一階段 Reinforcement 的典型觸發點。",
      others: {
        B: "已覺察只是倒退。",
        C: "過度反應。",
        D: "不解決問題。",
      },
      keyPoint: "Reinforcement = 鞏固新行為防倒退。",
    },
  },
  {
    id: "D-008",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷思維",
    difficulty: "medium",
    question:
      "新進團隊成員問：「你說的敏捷思維，到底在想什麼？」PM 最貼近敏捷精神的回答為？",
    options: {
      A: "嚴格按計畫不可變動",
      B: "擁抱變更、持續交付客戶價值，並以短迭代回饋修正",
      C: "只依 PM 指令做事",
      D: "凡事需層層簽核",
    },
    answer: "B",
    explanation: {
      why: "敏捷核心思維 = 擁抱變更 + 持續交付價值 + 短迭代回饋。",
      others: {
        A: "敏捷反對死守計畫。",
        C: "敏捷是自組織。",
        D: "敏捷減少官僚簽核。",
      },
      keyPoint: "敏捷思維 = 擁抱變更 + 價值交付 + 回饋迭代。",
    },
  },
  {
    id: "D-009",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革抗拒根源",
    difficulty: "medium",
    question:
      "HR 來找 PM：「我發現你專案團隊對即將導入的新工具抗拒強烈，原因是什麼？」PM 依變革管理經驗，最常見的根本原因為？",
    options: {
      A: "不喜歡主管",
      B: "對不確定性、失去控制感、工作安全感受威脅",
      C: "電腦太舊",
      D: "薪水太低",
    },
    answer: "B",
    explanation: {
      why: "變革抗拒多源於未來不確定性、失控感與工作安全感受威脅。",
      others: {
        A: "人際是次要。",
        C: "設備無關核心。",
        D: "非主要原因。",
      },
      keyPoint: "抗拒根本 = 不確定性 + 恐懼。",
    },
  },
  {
    id: "D-010",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "自組織前提",
    difficulty: "medium",
    question:
      "某 PM 想推「自組織團隊」，贊助者擔心失控問：「自組織的前提是什麼？」PM 最合適的回答是？",
    options: {
      A: "團隊完全沒有規則",
      B: "團隊具備敏捷思維與充分授權，並在明確框架（如 Scrum）內自主運作",
      C: "團隊都是新人",
      D: "取消所有會議",
    },
    answer: "B",
    explanation: {
      why: "自組織不是放任，而是在思維到位+適當授權+清楚框架下自主運作。",
      others: {
        A: "仍需框架。",
        C: "與資深/新無關。",
        D: "必要儀式仍存在。",
      },
      keyPoint: "自組織 = 敏捷思維 + 授權 + 框架。",
    },
  },
  {
    id: "D-011",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "團隊章程 vs 專案章程",
    difficulty: "medium",
    question:
      "新人把「團隊章程」跟「專案章程」搞混。PM 澄清兩者差異，最正確的說法是？",
    options: {
      A: "兩者相同",
      B: "專案章程是贊助者簽發的正式授權文件；團隊章程是團隊內部自訂的工作規則與共識",
      C: "團隊章程由贊助者簽",
      D: "專案章程由團隊自訂",
    },
    answer: "B",
    explanation: {
      why: "專案章程是對外正式授權；團隊章程是對內工作規則。",
      others: {
        A: "完全不同。",
        C: "團隊章程由團隊自訂。",
        D: "專案章程由贊助者簽。",
      },
      keyPoint: "專案章程 = 對外授權；團隊章程 = 對內規則。",
    },
  },
  {
    id: "D-012",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "組織文化影響",
    difficulty: "medium",
    question:
      "PM 剛從 A 公司換到 B 公司，發現同樣的方法論在 B 公司窒礙難行。HR 告訴他「那是文化差異」。組織文化最可能影響專案哪些面向？",
    options: {
      A: "完全沒影響",
      B: "決策方式、風險容忍度、溝通風格、手法選擇",
      C: "只影響辦公室布置",
      D: "只影響員工餐廳",
    },
    answer: "B",
    explanation: {
      why: "組織文化深刻影響決策、風險、溝通、手法選擇。",
      others: {
        A: "影響深遠。",
        C: "表面現象。",
        D: "與專案無關。",
      },
      keyPoint: "文化 → 決策+風險+溝通+手法。",
    },
  },
  {
    id: "D-013",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革領導",
    difficulty: "hard",
    question:
      "PMO 推行全公司敏捷轉型，各部門抗拒明顯。高階問 PMO 主任「該怎麼辦？」最符合變革領導原則的建議為？",
    options: {
      A: "發布強制命令全公司統一切換",
      B: "啟動變革領導計畫：建立覺察與渴望、設置 Pilot 與 Quick Win、擴散成功經驗",
      C: "先處罰反對者",
      D: "停止推行",
    },
    answer: "B",
    explanation: {
      why: "全公司變革需分階段建立覺察渴望、用 Pilot 與 Quick Win 降低抗拒。",
      others: {
        A: "強制加深抗拒。",
        C: "製造對立。",
        D: "消極放棄。",
      },
      keyPoint: "變革領導 = 覺察+渴望+Quick Win+擴散。",
    },
  },
  {
    id: "D-014",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷 12 原則首要",
    difficulty: "hard",
    question:
      "Scrum Master 問新人：「你知道敏捷 12 原則的第一條是什麼嗎？」最正確的回答為？",
    options: {
      A: "團隊和睦",
      B: "最高優先事項是透過早期且持續交付有價值的軟體讓客戶滿意",
      C: "嚴格遵守合約",
      D: "產出詳盡文件",
    },
    answer: "B",
    explanation: {
      why: "敏捷宣言 12 原則第 1 條明確是早期且持續交付有價值軟體讓客戶滿意。",
      others: {
        A: "重要但非第一條。",
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
    subtopic: "文化與敏捷衝突",
    difficulty: "medium",
    question:
      "PM 被派到一家文化是「失敗零容忍 + 層層審批 + 階級分明」的傳統大公司推敏捷，他最先遇到的挑戰是？",
    options: {
      A: "敏捷的擁抱失敗、扁平協作、快速決策文化與組織文化衝突",
      B: "工具不夠",
      C: "團隊太年輕",
      D: "客戶不配合",
    },
    answer: "A",
    explanation: {
      why: "敏捷文化（擁抱失敗+扁平+快速決策）與失敗零容忍+層層審批文化正面衝突，是最大阻力。",
      others: {
        B: "工具次要。",
        C: "無關。",
        D: "非首要衝突。",
      },
      keyPoint: "敏捷需要擁抱失敗 + 扁平 + 快決策的文化土壤。",
    },
  },
  {
    id: "D-016",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革溝通",
    difficulty: "medium",
    question:
      "某團隊得知要進行重大重組訊息後恐慌、謠言四起。PM 應？",
    options: {
      A: "避而不談讓謠言自然平息",
      B: "主動、透明溝通變革原因、影響範圍、時程與支持措施",
      C: "只告訴員工「不用擔心」",
      D: "完全交給 HR 獨自處理",
    },
    answer: "B",
    explanation: {
      why: "透明溝通能降低不確定性與恐慌，是變革成功的關鍵。",
      others: {
        A: "避而不談加重恐慌。",
        C: "空話不解決問題。",
        D: "PM 仍需主動參與。",
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
      "敏捷教練跟新任 SM 說：「你要當一個 Servant Leader。」新任 SM 問這是什麼意思？最合適的說明為？",
    options: {
      A: "領導者發號施令要求團隊服從",
      B: "領導者服務團隊：移除障礙、提供資源、賦能團隊自主成功",
      C: "領導者只監督不參與",
      D: "領導者決定所有事",
    },
    answer: "B",
    explanation: {
      why: "Servant Leader 翻轉傳統金字塔，先服務團隊、移除障礙、讓團隊成功。",
      others: {
        A: "命令式。",
        C: "放任型。",
        D: "集權。",
      },
      keyPoint: "Servant Leader = 服務團隊、移除障礙、賦能。",
    },
  },
  {
    id: "D-018",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "權限回歸",
    difficulty: "medium",
    question:
      "敏捷團隊成員反應「小事都要等 PM 批准、我們根本沒有決策權，還叫什麼自組織？」PM 該如何反應？",
    options: {
      A: "繼續集中決策",
      B: "檢視授權範圍，把技術實作、流程調整等決策權還給團隊，自己聚焦整合層",
      C: "解散團隊重組",
      D: "減少站立會議次數",
    },
    answer: "B",
    explanation: {
      why: "敏捷自組織要求團隊擁有技術與流程決策權，PM 越位會削弱團隊。",
      others: {
        A: "違背自組織。",
        C: "不解決根本。",
        D: "儀式次數不是關鍵。",
      },
      keyPoint: "敏捷團隊須有技術/流程自決權，PM 聚焦整合層。",
    },
  },
  {
    id: "D-019",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Kotter 首步",
    difficulty: "hard",
    question:
      "高階要用 Kotter 八步驟變革模型推動組織轉型。顧問問 PM：「第一步是什麼？」最正確的回答為？",
    options: {
      A: "建立變革願景",
      B: "建立急迫感（Create Urgency）",
      C: "移除障礙",
      D: "慶祝小成功",
    },
    answer: "B",
    explanation: {
      why: "Kotter 第一步是建立急迫感，讓組織意識到「不變就會出事」。",
      others: {
        A: "是第三步。",
        C: "是第五步。",
        D: "是第六步。",
      },
      keyPoint: "Kotter 第一步 = 建立急迫感。",
    },
  },
  {
    id: "D-020",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革代言人",
    difficulty: "medium",
    question:
      "PMO 要在各部門挑選「變革代言人（Change Champion）」。他們的角色應該是？",
    options: {
      A: "反對變革的關鍵人物",
      B: "部門內自願主動倡議、示範並協助推動變革的同仁",
      C: "負責裁員",
      D: "只做紀錄",
    },
    answer: "B",
    explanation: {
      why: "Change Champion 是部門內的變革推手，透過示範與倡議帶動同僚。",
      others: {
        A: "相反角色。",
        C: "HR/管理層職能。",
        D: "紀錄不是主要角色。",
      },
      keyPoint: "Change Champion = 部門內變革推手。",
    },
  },
  {
    id: "D-021",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "組織轉型起點",
    difficulty: "hard",
    question:
      "CEO 宣布全組織數位轉型，問 PMO 主任「我們應該從哪裡開始？」依 PMI 組織轉型指南，起點應該是？",
    options: {
      A: "引入新工具",
      B: "翻轉員工的思維與渴望",
      C: "重新裝潢辦公室",
      D: "降低員工薪資",
    },
    answer: "B",
    explanation: {
      why: "PMI 指南明確指出組織轉型必須從翻轉員工思維與渴望開始。",
      others: {
        A: "工具非核心。",
        C: "表面無用。",
        D: "薪資與轉型非直接相關。",
      },
      keyPoint: "組織轉型的根在人的思維與渴望。",
    },
  },
  {
    id: "D-022",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Retrospective 目的",
    difficulty: "medium",
    question:
      "新人問 PM：「Sprint Retrospective 到底是在幹嘛？好像每次都在聊天。」PM 最合適的說明為？",
    options: {
      A: "向老闆報告進度",
      B: "團隊共同檢視流程、找出改善點、啟動行動項，落實持續改善",
      C: "做個人績效考核",
      D: "討論薪水",
    },
    answer: "B",
    explanation: {
      why: "Retrospective 是敏捷持續改善的儀式，產出具體行動項。",
      others: {
        A: "那是 Sprint Review / 向上報告。",
        C: "非考核場合。",
        D: "與薪資無關。",
      },
      keyPoint: "Retrospective = 團隊持續改善儀式。",
    },
  },
  {
    id: "D-023",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷教練角色",
    difficulty: "medium",
    question:
      "公司請外部敏捷教練進駐。HR 問 PM：「這位教練主要任務是什麼？」最貼近的答案為？",
    options: {
      A: "替團隊做決定",
      B: "引導團隊與組織提升敏捷思維與實踐能力，扮演教練與催化者",
      C: "幫團隊寫程式",
      D: "管理專案進度",
    },
    answer: "B",
    explanation: {
      why: "Agile Coach 用引導、教練式領導提升敏捷思維能力，不替代決策也不開發。",
      others: {
        A: "不替代決策。",
        C: "不是工程師。",
        D: "進度追蹤是 PM/SM 範疇。",
      },
      keyPoint: "Agile Coach = 提升敏捷思維的引導者。",
    },
  },
  {
    id: "D-024",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "關鍵反對者",
    difficulty: "hard",
    question:
      "PM 發現某位跨部門的關鍵利害關係人強烈反對變革，散佈負面消息。最佳處理方式是？",
    options: {
      A: "避開他不直接接觸",
      B: "主動拜訪理解其疑慮，針對性提供資訊與支持，尋找合作空間",
      C: "直接投訴給高層",
      D: "等他自己退休",
    },
    answer: "B",
    explanation: {
      why: "理解疑慮後針對性協助，是處理關鍵反對者最有效的方式。",
      others: {
        A: "避開讓衝突惡化。",
        C: "直接投訴破壞關係。",
        D: "消極不現實。",
      },
      keyPoint: "關鍵反對者 → 主動聆聽 + 針對性溝通。",
    },
  },
  {
    id: "D-025",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "跨文化團隊",
    difficulty: "medium",
    question:
      "PM 接手的新團隊橫跨台灣、日本、印度三地。他第一次會議就發現三地成員溝通風格、決策速度、表達方式差異極大。PM 最佳做法為？",
    options: {
      A: "強制全體使用台灣溝通風格",
      B: "建立文化敏感度，尊重並協調差異，設計共同工作規則",
      C: "禁止討論文化議題",
      D: "全部改為非同步工作避免互動",
    },
    answer: "B",
    explanation: {
      why: "跨文化團隊要建立文化敏感度、尊重差異、協商共同工作規則。",
      others: {
        A: "強加文化破壞團隊。",
        C: "壓抑問題。",
        D: "失去人際連結。",
      },
      keyPoint: "跨文化 PM = 敏感度 + 協調差異 + 共同規則。",
    },
  },
  {
    id: "D-026",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "假敏捷",
    difficulty: "medium",
    question:
      "某公司買了 Jira、排了 Sprint、每天開站立會，但贊助者仍一人決定所有需求、團隊不能質疑、回饋永遠被忽略。這種狀態算？",
    options: {
      A: "真敏捷",
      B: "假敏捷（Doing Agile without Being Agile）",
      C: "混合式",
      D: "預測式",
    },
    answer: "B",
    explanation: {
      why: "只套工具與儀式沒建立敏捷思維與授權，就是假敏捷。",
      others: {
        A: "未內化思維。",
        C: "不是混合式定義。",
        D: "只是披敏捷皮。",
      },
      keyPoint: "工具+儀式 ≠ 敏捷，真敏捷需思維+授權。",
    },
  },
  {
    id: "D-027",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Tuckman 發展",
    difficulty: "hard",
    question:
      "HR 問 PM 新團隊目前處於哪個階段。PM 回答「剛成軍、成員還在互相摸索、偶爾有小磨擦」。依 Tuckman 五階段判斷，團隊應該在？",
    options: {
      A: "Forming（形成）→ Storming（風暴）之間",
      B: "Performing（表現）階段",
      C: "Adjourning（解散）階段",
      D: "Norming（規範）階段",
    },
    answer: "A",
    explanation: {
      why: "剛成軍是 Forming，偶有小摩擦已進入 Storming 初期。",
      others: {
        B: "表現階段是高績效狀態。",
        C: "解散是專案結束。",
        D: "規範是已建立共同規則。",
      },
      keyPoint: "Tuckman：FSNPA（形成→風暴→規範→表現→解散）。",
    },
  },
  {
    id: "D-028",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "衝突最佳處理",
    difficulty: "medium",
    question:
      "兩個團隊成員因技術選型爭執不下，情緒激動。PM 知道 PMI 倡議某種「最佳」衝突處理方式，他應採用？",
    options: {
      A: "迴避（Avoid）讓他們自己冷靜",
      B: "強制（Force）直接定案",
      C: "協同解決（Collaborate / Problem Solve）雙贏達成共識",
      D: "妥協（Compromise）讓雙方各退一步",
    },
    answer: "C",
    explanation: {
      why: "PMI 推崇 Collaborate / Problem Solve：雙贏根本解決，不是折衷。",
      others: {
        A: "延誤問題。",
        B: "破壞關係。",
        D: "雙方都犧牲、非最佳。",
      },
      keyPoint: "衝突首選 = Collaborate / Problem Solve。",
    },
  },
  {
    id: "D-029",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷規劃誤區",
    difficulty: "hard",
    question:
      "新進 PM 對敏捷有個迷思：「敏捷就是不用規劃，做到哪算到哪。」他的主管糾正他，最合理的說法為？",
    options: {
      A: "主管同意，敏捷不用計畫",
      B: "敏捷仍需計畫，只是採用輕量、滾動式的規劃，不是沒計畫",
      C: "敏捷只用口頭交代",
      D: "敏捷只寫程式不寫任何東西",
    },
    answer: "B",
    explanation: {
      why: "敏捷的計畫是滾動式、輕量、隨回饋調整，不是沒計畫。",
      others: {
        A: "事實相反。",
        C: "仍需必要文件。",
        D: "仍有使用者故事、Backlog 等。",
      },
      keyPoint: "敏捷 ≠ 沒計畫，是滾動式計畫。",
    },
  },
  {
    id: "D-030",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "情緒抗拒優先",
    difficulty: "medium",
    question:
      "團隊對變革的抗拒同時包含理性（資料不足）、情緒（恐懼失業）、政治（利益受損）三面向。PM 依變革管理通則該「優先」處理？",
    options: {
      A: "理性抗拒（補資料即可）",
      B: "情緒抗拒（恐懼焦慮影響最強烈且易擴散）",
      C: "政治抗拒",
      D: "三者都不用處理",
    },
    answer: "B",
    explanation: {
      why: "情緒抗拒通常最強烈且擴散最快，應透過同理與溝通優先處理。實務上三者並行處理。",
      others: {
        A: "可用資料處理。",
        C: "需時間協調利益。",
        D: "都需處理。",
      },
      keyPoint: "情緒抗拒最優先（最強烈且易擴散）。",
    },
  },
  {
    id: "D-031",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "PM vs 變革經理",
    difficulty: "medium",
    question:
      "組織同時指派 PM 與變革經理（Change Manager）。新人問兩人怎麼分工？最合適的說明為？",
    options: {
      A: "兩者相同",
      B: "PM 負責專案成果交付；變革經理負責組織/人員對該成果的接受與採用",
      C: "變革經理只管 HR",
      D: "PM 只管敏捷",
    },
    answer: "B",
    explanation: {
      why: "PM 交付「東西做出來」；變革經理負責「人能真的用新東西」。",
      others: {
        A: "角色不同。",
        C: "跨職能不只 HR。",
        D: "PM 不限於敏捷。",
      },
      keyPoint: "PM 交付；變革經理 採用。",
    },
  },
  {
    id: "D-032",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Scrum 儀式辨識",
    difficulty: "easy",
    question:
      "實習生列出「每天的站立會議、Sprint 規劃、Sprint 審查、年度績效面談」，並說「這是 Scrum 四大儀式」。PM 指出錯誤，「不是」Scrum 儀式的是？",
    options: {
      A: "Sprint Planning",
      B: "Daily Standup",
      C: "Sprint Review",
      D: "年度績效面談",
    },
    answer: "D",
    explanation: {
      why: "Scrum 四大：Planning、Daily、Review、Retrospective。年度考核不是 Scrum 儀式。",
      others: {
        A: "是。",
        B: "是。",
        C: "是。",
      },
      keyPoint: "Scrum 四大：Planning、Daily、Review、Retro。",
    },
  },
  {
    id: "D-033",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "持續改善機制",
    difficulty: "medium",
    question:
      "敏捷宣言 12 原則強調「團隊在固定節奏下反思如何變得更有效」。這個原則最直接對應的儀式為？",
    options: {
      A: "Daily Standup",
      B: "Retrospective（回顧會議）",
      C: "Sprint Planning",
      D: "Backlog Refinement",
    },
    answer: "B",
    explanation: {
      why: "Retrospective 是體現 Kaizen 持續改善、固定節奏反思的儀式。",
      others: {
        A: "每日同步工作。",
        C: "規劃下一 Sprint。",
        D: "梳理 Backlog。",
      },
      keyPoint: "持續改善反思 → Retrospective。",
    },
  },
  {
    id: "D-034",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "首次引入敏捷",
    difficulty: "hard",
    question:
      "PMO 第一次要在公司引入敏捷，贊助者傾向「三個月內全公司切換」。PM 從變革管理角度提出建議，最合適的是？",
    options: {
      A: "全公司一天切換",
      B: "先選一個高價值 Pilot 試點專案，累積成功經驗後漸次擴散",
      C: "完全停止所有進行中專案再推",
      D: "立刻裁員所有傳統 PM",
    },
    answer: "B",
    explanation: {
      why: "重大變革應先 Pilot 累積經驗、降低風險、建立 Quick Win 再擴散。",
      others: {
        A: "全面切換風險極高。",
        C: "停工破壞營運。",
        D: "破壞組織士氣。",
      },
      keyPoint: "大變革先 Pilot 再擴散。",
    },
  },
  {
    id: "D-035",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "高權力距離文化",
    difficulty: "medium",
    question:
      "PM 派駐在「高權力距離」文化的海外分公司，發現下屬從不主動表達意見。他應該如何設計會議才能真實蒐集回饋？",
    options: {
      A: "主動引導下屬發聲，使用匿名回饋工具、一對一訪談，創造心理安全",
      B: "要求下屬當場直接反駁上級",
      C: "取消所有會議",
      D: "由上級代下屬發言",
    },
    answer: "A",
    explanation: {
      why: "高權力距離文化下，下屬不敢公開異議，PM 應創造心理安全（匿名、1:1）蒐集真實回饋。",
      others: {
        B: "直接反駁違反文化常規。",
        C: "避而不談錯。",
        D: "仍未取得下屬真實意見。",
      },
      keyPoint: "高權力距離 → 匿名/1:1 主動引導。",
    },
  },
  {
    id: "D-036",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "變革禁忌",
    difficulty: "hard",
    question:
      "PMI 變革管理原則中，「絕對不該做」的是？",
    options: {
      A: "透過教育建立覺察",
      B: "強迫員工立即接受變革",
      C: "提供支持與訓練",
      D: "引入變革代言人",
    },
    answer: "B",
    explanation: {
      why: "強迫會加深抗拒，違反 ADKAR 原則。PMI 明確建議不該強迫。",
      others: {
        A: "正面做法。",
        C: "必要做法。",
        D: "有效策略。",
      },
      keyPoint: "變革不能強迫，要靠覺察+渴望建立。",
    },
  },
  {
    id: "D-037",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "文化與敏捷匹配",
    difficulty: "medium",
    question:
      "PM 評估幾家公司是否適合敏捷，下列「最不利敏捷」的文化特徵是？",
    options: {
      A: "鼓勵實驗與快速學習",
      B: "失敗零容忍、決策需層層審批",
      C: "資訊透明流通",
      D: "信任並授權團隊",
    },
    answer: "B",
    explanation: {
      why: "失敗零容忍 + 層層審批與敏捷擁抱失敗、快速決策文化相悖。",
      others: {
        A: "利於敏捷。",
        C: "利於敏捷。",
        D: "利於敏捷。",
      },
      keyPoint: "敏捷需要擁抱失敗 + 快決策文化。",
    },
  },
  {
    id: "D-038",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Sprint 目標意義",
    difficulty: "medium",
    question:
      "Sprint Planning 結束，PO 堅持設定一個明確 Sprint 目標。實習生問「為什麼不直接列任務就好？」PM 最合適的說明為？",
    options: {
      A: "Sprint 目標給團隊一個共同方向與焦點，避免只看任務清單失去意圖",
      B: "Sprint 目標是考核個人績效用",
      C: "Sprint 目標是給客戶的 KPI",
      D: "Sprint 目標是預算基準",
    },
    answer: "A",
    explanation: {
      why: "Sprint 目標是本輪共同意圖，讓團隊在取捨時有依歸。",
      others: {
        B: "不用於個人考核。",
        C: "非主要用途。",
        D: "不是預算工具。",
      },
      keyPoint: "Sprint 目標 = 本輪共同方向與焦點。",
    },
  },
  {
    id: "D-039",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "Quick Win 策略",
    difficulty: "medium",
    question:
      "變革導入初期，顧問建議 PM 設計「Quick Win（快速勝利）」。其主要目的為？",
    options: {
      A: "用具體成功案例建立信心、強化支持、減少抗拒",
      B: "節省預算",
      C: "加速裁員",
      D: "替換主管",
    },
    answer: "A",
    explanation: {
      why: "Quick Win 用早期成功案例證明變革可行，強化信心與支持。",
      others: {
        B: "非預算目的。",
        C: "非裁員目的。",
        D: "非人員變動目的。",
      },
      keyPoint: "Quick Win = 建立信心、降低抗拒。",
    },
  },
  {
    id: "D-040",
    chapter: "D",
    topic: "組織文化與變革管理",
    subtopic: "敏捷商業成果責任",
    difficulty: "hard",
    question:
      "敏捷專案出現問題，贊助者問「誰對最終商業成果負責？」。依角色設計最精準的答案是？",
    options: {
      A: "Scrum Master",
      B: "PO（產品價值）與贊助者（整體商業成果）",
      C: "整個敏捷團隊集體承擔",
      D: "客戶",
    },
    answer: "B",
    explanation: {
      why: "PO 負責產品價值與 Backlog 成果；贊助者承擔整體商業責任。",
      others: {
        A: "SM 是流程引導者。",
        C: "團隊對交付負責但商業成果由 PO+贊助者。",
        D: "客戶是受益者。",
      },
      keyPoint: "敏捷成果責任 = PO + 贊助者。",
    },
  },
];

export default questions;
