// C. 專案效益與價值（40 題）
// 主題：NPV、IRR、ROI、回收期、商業企劃案、效益管理計畫書、成本效益分析
const questions = [
  {
    id: "C-001",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業文件時機",
    difficulty: "medium",
    question:
      "專案尚未正式啟動，技術複雜度很高，關鍵資源擔心能否產出與交付。PM 首先該？",
    options: {
      A: "審查和評量商業企劃案的內容",
      B: "與關鍵資源審視效益管理計畫書",
      C: "進行新技術研發失敗風險的規劃",
      D: "與贊助者討論修改專案章程",
    },
    answer: "A",
    explanation: {
      why: "專案尚未啟動 + 懷疑可行性 → 回頭審查商業企劃案的商業需要與成本效益分析。",
      others: {
        B: "效益管理計畫書談效益實現，不談技術可行性。",
        C: "風險規劃屬規劃階段，專案未啟動時機過早。",
        D: "章程源頭是商業企劃案，沒看源頭就改章程順序錯。",
      },
      keyPoint: "專案未啟動 + 可行性疑慮 → 先看商業企劃案。",
    },
  },
  {
    id: "C-002",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 判讀",
    difficulty: "easy",
    question:
      "某專案 NPV 計算結果為 +$29,426。根據判讀規則，下列何者正確？",
    options: {
      A: "虧損，不應投資",
      B: "NPV 大於 0，可投資",
      C: "無法判斷",
      D: "必須與 IRR 比較才能決定",
    },
    answer: "B",
    explanation: {
      why: "NPV > 0 表示扣除折現後仍有淨獲利，值得投資。",
      others: {
        A: "+$29,426 是正值不是虧損。",
        C: "NPV 本身就是判讀依據。",
        D: "NPV 單一指標可判斷投不投資。",
      },
      keyPoint: "NPV > 0 可投資；多選一時越大越好。",
    },
  },
  {
    id: "C-003",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR 判讀",
    difficulty: "medium",
    question:
      "三個專案 IRR 分別為 8%、12%、15%。若機會成本報酬率（折現率）為 10%，應投資？",
    options: {
      A: "IRR = 8% 的專案",
      B: "IRR = 12% 的專案",
      C: "IRR = 15% 的專案",
      D: "IRR = 8% 與 12% 的專案",
    },
    answer: "C",
    explanation: {
      why: "IRR 必須高於折現率才值得投資；多選一時 IRR 越大越好。",
      others: {
        A: "8% 低於折現率 10%，不值得投資。",
        B: "12% 值得投資，但不是最佳。",
        D: "8% 不值得投資。",
      },
      keyPoint: "IRR > 折現率值得投資，多選一時選最大。",
    },
  },
  {
    id: "C-004",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "回收期",
    difficulty: "easy",
    question:
      "下列四個專案回收期分別為 3、5、7、10 年。若公司追求資金快速回收，應選擇？",
    options: {
      A: "3 年",
      B: "5 年",
      C: "7 年",
      D: "10 年",
    },
    answer: "A",
    explanation: {
      why: "回收期越短越好，資金回收快、風險曝險時間短。",
      others: {
        B: "5 年不是最短。",
        C: "7 年不夠短。",
        D: "10 年最差。",
      },
      keyPoint: "回收期越短越好。",
    },
  },
  {
    id: "C-005",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "機會成本",
    difficulty: "medium",
    question:
      "三個互斥專案機會成本分別為 5%、8%、12%。若從機會成本角度考量，應優先選擇？",
    options: {
      A: "機會成本 5%",
      B: "機會成本 8%",
      C: "機會成本 12%",
      D: "皆可",
    },
    answer: "A",
    explanation: {
      why: "機會成本越低越好，代表放棄的替代選項價值越小。",
      others: {
        B: "8% 不是最低。",
        C: "12% 最高，最不利。",
        D: "有明顯差別。",
      },
      keyPoint: "機會成本越小越好（放棄的代價小）。",
    },
  },
  {
    id: "C-006",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "折現率概念",
    difficulty: "medium",
    question:
      "為什麼未來現金流要以「折現率」打折換算成現值？",
    options: {
      A: "通膨與機會成本讓未來的錢不如現在的錢值錢",
      B: "老闆喜歡打折",
      C: "會計法規強制要求",
      D: "讓數字看起來比較小",
    },
    answer: "A",
    explanation: {
      why: "通膨讓購買力下降、機會成本代表能拿別處的報酬，所以未來錢要打折。",
      others: {
        B: "不是主觀喜好。",
        C: "不是會計法規原因。",
        D: "目的不是視覺。",
      },
      keyPoint: "折現率反映通膨 + 機會成本。",
    },
  },
  {
    id: "C-007",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "ROI 判讀",
    difficulty: "easy",
    question:
      "兩專案 ROI 分別為 20% 與 50%。多選一時應選？",
    options: {
      A: "20%",
      B: "50%",
      C: "都選",
      D: "都不選",
    },
    answer: "B",
    explanation: {
      why: "ROI 越大越好，投資效率越高。",
      others: {
        A: "20% 較小。",
        C: "題目問多選一。",
        D: "都是正數值得投資。",
      },
      keyPoint: "ROI 越大越好。",
    },
  },
  {
    id: "C-008",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "秒殺口訣",
    difficulty: "easy",
    question:
      "下列哪一組指標「全部都是越大越好」？",
    options: {
      A: "NPV、IRR、ROI",
      B: "回收期、機會成本、成本",
      C: "NPV、回收期、折現率",
      D: "ROI、機會成本、IRR",
    },
    answer: "A",
    explanation: {
      why: "NPV、IRR、ROI 三個是利潤指標，越大越好；回收期/機會成本越小越好。",
      others: {
        B: "都是越小越好。",
        C: "回收期越小越好。",
        D: "機會成本越小越好。",
      },
      keyPoint: "賺錢指標（NPV/IRR/ROI）越大越好；時間/成本指標越小越好。",
    },
  },
  {
    id: "C-009",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "現值 PV",
    difficulty: "medium",
    question:
      "未來第 3 年可以收到 $100，若折現率 10%，其現值（PV）為多少？",
    options: {
      A: "$100 × (1+10%)^3",
      B: "$100 ÷ (1+10%)^3",
      C: "$100 × 10% × 3",
      D: "$100 + 10% × 3",
    },
    answer: "B",
    explanation: {
      why: "PV = 未來值 / (1+折現率)^年數，把未來錢打折回現在。",
      others: {
        A: "這是未來值公式（複利），不是現值。",
        C: "這是單利總額，不是現值。",
        D: "計算錯誤。",
      },
      keyPoint: "PV = FV ÷ (1 + r)^n。",
    },
  },
  {
    id: "C-010",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 公式",
    difficulty: "hard",
    question:
      "NPV 的計算公式為？",
    options: {
      A: "未來現金流總和 − 初始投資",
      B: "未來現金流「打折後的現值總和」 − 初始投資",
      C: "初始投資 ÷ 未來現金流",
      D: "未來現金流 × 折現率",
    },
    answer: "B",
    explanation: {
      why: "NPV = 所有未來現金流折現到現在的總和 - 初始投資。",
      others: {
        A: "未折現，忽略時間價值。",
        C: "是回收期近似概念。",
        D: "不是 NPV 定義。",
      },
      keyPoint: "NPV = Σ(未來現金流現值) − 初始投資。",
    },
  },
  {
    id: "C-011",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR 定義",
    difficulty: "hard",
    question:
      "IRR（內部報酬率）的本質是什麼？",
    options: {
      A: "讓 NPV = 0 的折現率",
      B: "初始投資金額",
      C: "回收期的倒數",
      D: "ROI 的另一種寫法",
    },
    answer: "A",
    explanation: {
      why: "IRR 就是能讓 NPV = 0 的那個折現率，可視為專案的「內含報酬率」。",
      others: {
        B: "IRR 是百分比，不是金額。",
        C: "與回收期不直接等價。",
        D: "ROI 與 IRR 計算方式不同。",
      },
      keyPoint: "IRR = 使 NPV = 0 的折現率。",
    },
  },
  {
    id: "C-012",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案用途",
    difficulty: "medium",
    question:
      "下列何者「不是」商業企劃案（Business Case）的主要用途？",
    options: {
      A: "證明專案的合理性",
      B: "建立專案的邊界與限制條件",
      C: "規定每日站立會議流程",
      D: "判斷專案是否值得投入時間與金錢",
    },
    answer: "C",
    explanation: {
      why: "站立會議是執行層面，不屬於商業企劃案內容。",
      others: {
        A: "合理性佐證是核心。",
        B: "建立邊界是核心用途。",
        D: "投資決策是核心用途。",
      },
      keyPoint: "商業企劃案 = 高階商業決策文件，不含執行細節。",
    },
  },
  {
    id: "C-013",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益 vs 成果",
    difficulty: "medium",
    question:
      "專案「交付物（Deliverable）」與「效益（Benefit）」的差別是？",
    options: {
      A: "兩者同義",
      B: "交付物是產出的物品/結果；效益是該產出對組織帶來的價值",
      C: "交付物只是計畫，效益是實際執行",
      D: "交付物是財務數字，效益是實體物",
    },
    answer: "B",
    explanation: {
      why: "交付物是「做出什麼」；效益是「因此獲得什麼價值」。",
      others: {
        A: "兩者意義不同。",
        C: "計畫 vs 執行不是這組概念。",
        D: "兩者都可能是有形或無形。",
      },
      keyPoint: "交付物是產出，效益是產出帶來的價值。",
    },
  },
  {
    id: "C-014",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益責任人",
    difficulty: "medium",
    question:
      "效益管理計畫書中，「效益責任人（Benefit Owner）」的主要職責為？",
    options: {
      A: "每天執行程式碼開發",
      B: "確保專案交付的效益實際被追蹤、實現與維持",
      C: "管理辦公室設備",
      D: "出席每日站立會議",
    },
    answer: "B",
    explanation: {
      why: "效益責任人對效益的實現負責，確保專案結束後效益仍持續產生。",
      others: {
        A: "那是開發工程師。",
        C: "那是行政。",
        D: "是團隊成員的行為。",
      },
      keyPoint: "效益責任人 = 確保效益實現與維持。",
    },
  },
  {
    id: "C-015",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "專案終止",
    difficulty: "medium",
    question:
      "專案進行中發現 NPV 計算結果變為 -$50,000，且市場需求已消失。PM 應？",
    options: {
      A: "繼續執行直到結束",
      B: "向治理層陳報，建議評估終止或重大變更",
      C: "隱瞞消息等問題自己解決",
      D: "直接取消專案無需通知任何人",
    },
    answer: "B",
    explanation: {
      why: "NPV 負值且需求消失 = 商業價值消失，應向治理層陳報做出決策。",
      others: {
        A: "繼續執行會加速虧損。",
        C: "隱瞞不符合倫理與專業。",
        D: "PM 無權直接取消專案。",
      },
      keyPoint: "商業價值消失 → 向治理層陳報，不自行取消也不隱瞞。",
    },
  },
  {
    id: "C-016",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "成本效益分析綜合",
    difficulty: "hard",
    question:
      "四個專案指標如下，若只能選一個，最佳是？\nA: NPV=+100 萬, IRR=15%, 回收期 6 年\nB: NPV=+80 萬, IRR=18%, 回收期 4 年\nC: NPV=+50 萬, IRR=12%, 回收期 3 年\nD: NPV=+120 萬, IRR=10%, 回收期 8 年",
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "D（NPV 最大）",
    },
    answer: "B",
    explanation: {
      why: "綜合考量：B 的 NPV 也高、IRR 最高、回收期短，整體效益最佳。D 雖 NPV 最大但 IRR 最低且回收期最長。",
      others: {
        A: "沒有明顯優勢。",
        C: "NPV 最小。",
        D: "IRR 最低，回收期太長。",
      },
      keyPoint: "實務上需綜合考量多指標，不只看單一 NPV。",
    },
  },
  {
    id: "C-017",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案 15 項內容",
    difficulty: "easy",
    question:
      "下列何者通常「不會」出現在商業企劃案中？",
    options: {
      A: "成本效益分析",
      B: "預期財務目標",
      C: "每週例行會議時間表",
      D: "商業需要與問題陳述",
    },
    answer: "C",
    explanation: {
      why: "會議時間表屬於執行層面溝通計畫，不是商業企劃案內容。",
      others: {
        A: "成本效益是核心內容。",
        B: "財務目標是核心內容。",
        D: "商業需要是起點。",
      },
      keyPoint: "商業企劃案內容 = 高階商業面，不含執行細節。",
    },
  },
  {
    id: "C-018",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案 vs 章程",
    difficulty: "medium",
    question:
      "「商業企劃案」與「專案章程」的時序關係為？",
    options: {
      A: "兩者同時產出",
      B: "先有商業企劃案，後有專案章程",
      C: "先有專案章程，後有商業企劃案",
      D: "互不相關",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案證明專案合理性 → 獲得接受 → 發布專案章程正式啟動。",
      others: {
        A: "順序明確不是同時。",
        C: "順序相反。",
        D: "章程內容依據商業企劃案。",
      },
      keyPoint: "商業企劃案 → 章程 → 其他計畫書。",
    },
  },
  {
    id: "C-019",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益管理時間框架",
    difficulty: "hard",
    question:
      "某公司做效益管理計畫書時，記錄「短期：6 個月內達成 5% 營收成長；長期：3 年內達成 30% 市佔率」。這符合？",
    options: {
      A: "只描述短期效益即可",
      B: "效益管理計畫書應同時記錄短期與長期效益實現時間框架",
      C: "這是商業企劃案內容",
      D: "這是溝通管理計畫書內容",
    },
    answer: "B",
    explanation: {
      why: "效益管理計畫書應記錄短期與長期效益與時間框架。",
      others: {
        A: "只看短期會忽略策略。",
        C: "時間框架是 BMP 特色。",
        D: "溝通計畫書處理資訊流，不談效益。",
      },
      keyPoint: "效益管理計畫書 = 短期+長期效益時間框架+度量指標。",
    },
  },
  {
    id: "C-020",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業價值指標",
    difficulty: "medium",
    question:
      "下列何者是「無形商業價值」的例子？",
    options: {
      A: "利潤增加 $1,000,000",
      B: "品牌知名度與員工士氣提升",
      C: "市場佔有率提升 5%",
      D: "股價上漲 3 元",
    },
    answer: "B",
    explanation: {
      why: "品牌知名度與員工士氣難以直接以金額衡量，屬於無形價值。",
      others: {
        A: "有金額是有形。",
        C: "有百分比是有形。",
        D: "有金額是有形。",
      },
      keyPoint: "無形效益 = 難以金錢直接計量的效益。",
    },
  },
  {
    id: "C-021",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV > 0 解讀",
    difficulty: "medium",
    question:
      "NPV = +$29,426 具體代表什麼意思？",
    options: {
      A: "投資後每年多賺 $29,426",
      B: "扣除折現後仍有相當於今天 $29,426 的淨獲利",
      C: "專案總收入 $29,426",
      D: "總成本 $29,426",
    },
    answer: "B",
    explanation: {
      why: "NPV 的意思是將未來現金流折現後總值 − 成本，正值代表扣除時間價值後的淨獲利。",
      others: {
        A: "每年金額不是 NPV。",
        C: "總收入是毛收入。",
        D: "成本是投入金額。",
      },
      keyPoint: "NPV = 扣除折現後的淨獲利（以「今天的錢」計）。",
    },
  },
  {
    id: "C-022",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "敏捷價值交付",
    difficulty: "medium",
    question:
      "敏捷為何能「提早創造商業價值」？",
    options: {
      A: "因為敏捷不寫文件",
      B: "因為敏捷透過增量分批交付，客戶能提早使用部分成果",
      C: "因為敏捷成本低",
      D: "因為敏捷不用測試",
    },
    answer: "B",
    explanation: {
      why: "增量式交付讓客戶提早拿到可用成果，實現早期價值。",
      others: {
        A: "敏捷仍需必要文件。",
        C: "成本不一定更低。",
        D: "敏捷仍需測試，且強調內建品質。",
      },
      keyPoint: "敏捷增量交付 = 提早實現價值。",
    },
  },
  {
    id: "C-023",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR vs NPV 比較",
    difficulty: "hard",
    question:
      "IRR 和 NPV 的主要差異為？",
    options: {
      A: "IRR 表達「報酬率百分比」；NPV 表達「絕對金額」",
      B: "兩者完全一樣",
      C: "NPV 是百分比；IRR 是金額",
      D: "兩者都是時間指標",
    },
    answer: "A",
    explanation: {
      why: "IRR 是百分比（類似利率）；NPV 是絕對金額。兩者視角互補。",
      others: {
        B: "表達方式不同。",
        C: "說法顛倒。",
        D: "都不是時間指標。",
      },
      keyPoint: "IRR = 百分比；NPV = 絕對金額。",
    },
  },
  {
    id: "C-024",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "折現率來源",
    difficulty: "medium",
    question:
      "企業在計算 NPV 時使用的折現率，通常如何決定？",
    options: {
      A: "隨意指定",
      B: "通常依「機會成本報酬率」或「資金成本（WACC）」而定",
      C: "由銀行決定",
      D: "等於 ROI",
    },
    answer: "B",
    explanation: {
      why: "折現率通常等於機會成本率或企業加權平均資金成本（WACC）。",
      others: {
        A: "不是隨意決定。",
        C: "銀行不決定公司內部折現率。",
        D: "ROI 是投資結果，不是折現率。",
      },
      keyPoint: "折現率 ≈ 機會成本 / WACC。",
    },
  },
  {
    id: "C-025",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "回收期計算",
    difficulty: "easy",
    question:
      "投入 $100 萬，每年淨賺 $25 萬，回收期約為？",
    options: {
      A: "2 年",
      B: "3 年",
      C: "4 年",
      D: "5 年",
    },
    answer: "C",
    explanation: {
      why: "$100萬 ÷ $25萬/年 = 4 年。",
      others: {
        A: "少算。",
        B: "少算。",
        D: "多算。",
      },
      keyPoint: "回收期 = 投資 ÷ 每期淨回流。",
    },
  },
  {
    id: "C-026",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "ROI vs 回收期",
    difficulty: "medium",
    question:
      "ROI 與回收期的差異？",
    options: {
      A: "兩者都看時間",
      B: "ROI 看投資報酬比例；回收期看多久拿回本金",
      C: "ROI 看錢；回收期也看錢",
      D: "完全相同",
    },
    answer: "B",
    explanation: {
      why: "ROI 是百分比比率，回收期是時間長度，兩者視角互補。",
      others: {
        A: "ROI 不看時間。",
        C: "回收期看時間。",
        D: "兩者不同。",
      },
      keyPoint: "ROI = 比率；回收期 = 時間。",
    },
  },
  {
    id: "C-027",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業文件完整性",
    difficulty: "hard",
    question:
      "兩大商業文件（Business Documents）為？",
    options: {
      A: "商業企劃案 + 效益管理計畫書",
      B: "專案章程 + WBS",
      C: "風險登錄冊 + 議題登錄冊",
      D: "品質計畫書 + 採購計畫書",
    },
    answer: "A",
    explanation: {
      why: "PMBOK 定義兩大商業文件為商業企劃案與效益管理計畫書。",
      others: {
        B: "WBS 是範疇基準。",
        C: "兩者為執行期文件。",
        D: "兩者是知識領域計畫書。",
      },
      keyPoint: "兩大商業文件 = Business Case + Benefits Management Plan。",
    },
  },
  {
    id: "C-028",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益維持",
    difficulty: "medium",
    question:
      "專案結束後，誰應該持續確保效益實現與維持？",
    options: {
      A: "專案經理持續到退休",
      B: "效益責任人（Benefit Owner）與營運單位",
      C: "沒有人需要負責",
      D: "客戶",
    },
    answer: "B",
    explanation: {
      why: "專案結案後，效益實現由效益責任人與承接的營運單位負責持續追蹤。",
      others: {
        A: "PM 在專案結案後不再負責。",
        C: "必須有人負責。",
        D: "客戶是效益受益者之一，但不負責管理。",
      },
      keyPoint: "效益維持由效益責任人 + 營運承接。",
    },
  },
  {
    id: "C-029",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案 vs 效益管理",
    difficulty: "hard",
    question:
      "「商業企劃案」與「效益管理計畫書」的核心差別？",
    options: {
      A: "兩者完全相同",
      B: "商業企劃案證明專案合理性；效益管理計畫書描述效益如何實現與維持",
      C: "商業企劃案在結案寫，效益管理計畫書在啟動寫",
      D: "商業企劃案是小文件，效益管理計畫書是長篇論文",
    },
    answer: "B",
    explanation: {
      why: "BC 回答「為什麼做」；BMP 回答「效益如何落地追蹤」。",
      others: {
        A: "兩者不同。",
        C: "順序顛倒。",
        D: "長短不是差別重點。",
      },
      keyPoint: "BC = 為什麼做；BMP = 效益如何實現。",
    },
  },
  {
    id: "C-030",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 最大迷思",
    difficulty: "hard",
    question:
      "若四個專案 NPV 都相同，下列哪個情境最值得投資？",
    options: {
      A: "IRR 最低、回收期最長",
      B: "IRR 最高、回收期最短",
      C: "ROI 最低",
      D: "機會成本最高",
    },
    answer: "B",
    explanation: {
      why: "NPV 相同時，IRR 越高（獲利率好）+ 回收期越短（風險低）是最佳。",
      others: {
        A: "相反是最差組合。",
        C: "ROI 低不是優勢。",
        D: "機會成本越小越好。",
      },
      keyPoint: "多指標綜合判斷：IRR 高 + 回收期短最佳。",
    },
  },
  {
    id: "C-031",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "時間價值",
    difficulty: "medium",
    question:
      "「明年的 $100 ≠ 今年的 $100」這個觀念稱為？",
    options: {
      A: "通膨等於無限",
      B: "金錢的時間價值（Time Value of Money）",
      C: "回收期",
      D: "沉沒成本",
    },
    answer: "B",
    explanation: {
      why: "金錢的時間價值 = 同樣金額在不同時間點的購買力與機會成本不同。",
      others: {
        A: "通膨是因素之一，不是概念名稱。",
        C: "回收期是時間指標。",
        D: "沉沒成本是已花掉無法回收的成本。",
      },
      keyPoint: "時間價值 = 折現的根本邏輯。",
    },
  },
  {
    id: "C-032",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "章程內容",
    difficulty: "medium",
    question:
      "下列何者「通常不寫在專案章程」？",
    options: {
      A: "專案目的與目標",
      B: "PM 的授權與責任範圍",
      C: "高階風險",
      D: "每週 Sprint 的詳細任務分配",
    },
    answer: "D",
    explanation: {
      why: "章程是高階文件，不含 Sprint 任務這類執行細節。",
      others: {
        A: "是核心內容。",
        B: "是核心內容。",
        C: "高階風險是章程內容。",
      },
      keyPoint: "章程 = 高階、無細節。",
    },
  },
  {
    id: "C-033",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "變更商業企劃案",
    difficulty: "hard",
    question:
      "哪些情況需要更新商業企劃案？",
    options: {
      A: "每日工作進度有變動",
      B: "商業環境重大變化使原商業需要或預期效益改變",
      C: "有人請病假",
      D: "辦公室調整座位",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案是高階文件，只有商業需要或預期效益重大變化才會更新。",
      others: {
        A: "每日進度是執行層面。",
        C: "人員異動不涉及商業企劃案。",
        D: "座位跟企劃案無關。",
      },
      keyPoint: "商業企劃案更新時機 = 商業需要/效益重大變化。",
    },
  },
  {
    id: "C-034",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "敏捷最小交付",
    difficulty: "medium",
    question:
      "敏捷專案中，「最小可行性產品（MVP）」的核心意義？",
    options: {
      A: "最低品質的劣質產品",
      B: "只實現產品最小需求，用來最快取得客戶回饋",
      C: "最便宜的產品",
      D: "最小團隊做出的產品",
    },
    answer: "B",
    explanation: {
      why: "MVP 的本質是最少功能驗證假設，並取得早期客戶回饋。",
      others: {
        A: "MVP 不等於劣質。",
        C: "不是成本概念。",
        D: "不是團隊規模概念。",
      },
      keyPoint: "MVP = 最小可行 + 早期回饋。",
    },
  },
  {
    id: "C-035",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "增量 vs 迭代 目的",
    difficulty: "hard",
    question:
      "增量式（Incremental）交付相較迭代式（Iterative），其「主要目的」為？",
    options: {
      A: "反覆修改同一產出物",
      B: "分階段交付完成品，提早實現價值與搶佔市場",
      C: "減少預算",
      D: "取代敏捷",
    },
    answer: "B",
    explanation: {
      why: "增量 = 分批交付完成部分，提早實現商業價值與市佔。",
      others: {
        A: "那是迭代式的目的。",
        C: "不是成本目的。",
        D: "增量不取代敏捷。",
      },
      keyPoint: "增量目的 = 提早分批交付實現價值。",
    },
  },
  {
    id: "C-036",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "迭代 vs 增量 目的",
    difficulty: "hard",
    question:
      "迭代式（Iterative）的「主要目的」為？",
    options: {
      A: "釐清模糊需求、探索解決方案、反覆完善",
      B: "提早交付完成品",
      C: "節省成本",
      D: "取代預測式",
    },
    answer: "A",
    explanation: {
      why: "迭代式核心是透過反覆循環釐清需求與改善。",
      others: {
        B: "那是增量式目的。",
        C: "不是成本目的。",
        D: "不取代，而是另一種方法。",
      },
      keyPoint: "迭代目的 = 需求釐清與反覆完善。",
    },
  },
  {
    id: "C-037",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 計算邏輯",
    difficulty: "hard",
    question:
      "一專案 0 期投資 $30 萬，未來 3 年每年現金流入 $15 萬，折現率 10%。NPV 的計算步驟正確順序為？",
    options: {
      A: "直接把 $45 萬 - $30 萬 = $15 萬",
      B: "分別將每年 $15 萬折現到第 0 期相加，再減去 $30 萬",
      C: "把 $30 萬乘以折現率",
      D: "把 $30 萬與 $45 萬平均",
    },
    answer: "B",
    explanation: {
      why: "NPV 必須先將每年現金流折現到第 0 期相加，再減去初始投資。",
      others: {
        A: "忽略了時間價值。",
        C: "錯誤方法。",
        D: "無意義。",
      },
      keyPoint: "NPV 步驟：各期折現 → 加總 → 減去初始投資。",
    },
  },
  {
    id: "C-038",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "殘值",
    difficulty: "medium",
    question:
      "成本效益分析中，專案結束時設備「殘值」應如何處理？",
    options: {
      A: "完全忽略",
      B: "計入最後一年的現金流入，並折現至現在",
      C: "計入初始投資",
      D: "只用於報稅",
    },
    answer: "B",
    explanation: {
      why: "殘值是最後一期可回收的現金流入，應計入並折現。",
      others: {
        A: "忽略會低估 NPV。",
        C: "不是初始投資。",
        D: "不只報稅用途。",
      },
      keyPoint: "殘值 = 最後一年現金流入，需折現。",
    },
  },
  {
    id: "C-039",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "利益相關群體",
    difficulty: "easy",
    question:
      "效益的「受益者」可能包含下列何者？",
    options: {
      A: "只有股東",
      B: "股東、客戶、員工、社會等多元群體",
      C: "只有專案經理",
      D: "只有贊助者",
    },
    answer: "B",
    explanation: {
      why: "效益的受益群體多元，包含內外部利害關係人。",
      others: {
        A: "只看股東過於狹隘。",
        C: "PM 不是主要受益者。",
        D: "贊助者只是其中一方。",
      },
      keyPoint: "效益受益 = 多元群體。",
    },
  },
  {
    id: "C-040",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 誤區",
    difficulty: "hard",
    question:
      "下列對 NPV 的敘述何者「錯誤」？",
    options: {
      A: "NPV < 0 表示不值得投資",
      B: "多選一時 NPV 越大越好",
      C: "NPV = 0 代表剛好打平折現率報酬",
      D: "NPV 不考慮時間價值",
    },
    answer: "D",
    explanation: {
      why: "NPV 的核心正是考慮時間價值（折現）。",
      others: {
        A: "正確敘述。",
        B: "正確敘述。",
        C: "正確敘述，NPV=0 代表 IRR = 折現率。",
      },
      keyPoint: "NPV 的精神就是處理時間價值。",
    },
  },
];

export default questions;
