// C. 專案效益與價值（40 題 情境題版）
const questions = [
  {
    id: "C-001",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "未啟動期可行性",
    difficulty: "medium",
    question:
      "新任 PM 剛被委派負責一個涉及複雜 AI 技術的專案，章程尚未簽署、專案尚未正式啟動。一位被預指派的關鍵資源私下告訴他：「以我們的團隊實力，這個專案能不能真的產出我很懷疑。」PM「首先」該做什麼？",
    options: {
      A: "回頭審查與評量商業企劃案的內容，確認專案的商業需要與可行性仍成立",
      B: "與關鍵資源共同審視效益管理計畫書",
      C: "立即進行新技術研發失敗風險的規劃",
      D: "與贊助者討論修改專案章程",
    },
    answer: "A",
    explanation: {
      why: "專案未啟動 + 可行性疑慮 = 回頭看商業企劃案這個源頭文件，確認商業需要、限制條件、成本效益是否仍合理。",
      others: {
        B: "效益管理計畫書談效益如何實現，不談技術可行性。",
        C: "風險規劃屬規劃階段，專案未啟動時機過早。",
        D: "章程源自商業企劃案，沒看源頭就改章程順序錯。",
      },
      keyPoint: "未啟動 + 可行性疑慮 → 回頭看 Business Case。",
    },
  },
  {
    id: "C-002",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 判讀",
    difficulty: "easy",
    question:
      "PM 向董事會報告：「本專案投入 30 萬美金，未來 8 年淨現值（NPV）計算結果為 +$29,426。」董事會該怎麼理解這個數字？",
    options: {
      A: "專案虧損 $29,426",
      B: "扣除時間價值（折現）後仍淨獲利 $29,426，NPV > 0 值得投資",
      C: "投資回收還差 $29,426",
      D: "需要搭配 IRR 才能判斷",
    },
    answer: "B",
    explanation: {
      why: "NPV 是把未來現金流折現後的淨獲利；大於 0 代表扣除折現率（通膨+機會成本）後仍有獲利，值得投資。",
      others: {
        A: "正值不是虧損。",
        C: "NPV 不是「還差多少」概念。",
        D: "NPV 單指標本身就可判讀投不投資。",
      },
      keyPoint: "NPV > 0 可投資；NPV 越大越好。",
    },
  },
  {
    id: "C-003",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR 對比折現率",
    difficulty: "medium",
    question:
      "公司的機會成本報酬率（折現率）為 10%。財務部送來三個專案的 IRR：A 專案 8%、B 專案 12%、C 專案 15%。若只能選一個投資，PM 應建議？",
    options: {
      A: "A 專案（IRR 8%）",
      B: "B 專案（IRR 12%）",
      C: "C 專案（IRR 15%）",
      D: "同時做 A 與 B",
    },
    answer: "C",
    explanation: {
      why: "IRR 必須高於折現率才值得投資；多選一時 IRR 越大越好。C 的 15% 是最佳。",
      others: {
        A: "8% < 10% 根本不應投資。",
        B: "可投資但不是最佳。",
        D: "A 不應投資。",
      },
      keyPoint: "IRR > 折現率才投資；多選一時選最大。",
    },
  },
  {
    id: "C-004",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "回收期最短",
    difficulty: "easy",
    question:
      "CFO 交給 PM 四個候選專案，投資金額相近但回收期分別為 3、5、7、10 年。CFO 特別要求：「目前資金緊，希望儘快回收以降低風險。」PM 應建議？",
    options: {
      A: "3 年回收期的專案（最短）",
      B: "5 年回收期",
      C: "7 年回收期",
      D: "10 年回收期（看起來最穩）",
    },
    answer: "A",
    explanation: {
      why: "回收期越短代表資金回流越快、風險曝險時間越短，符合 CFO 資金緊的要求。",
      others: {
        B: "不是最短。",
        C: "不夠短。",
        D: "最長不符需求。",
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
      "三個互斥投資方案的機會成本率分別為 5%、8%、12%。CFO 說「我們要選代價最小的」。PM 應建議哪一個？",
    options: {
      A: "機會成本 5% 的方案",
      B: "機會成本 8% 的方案",
      C: "機會成本 12% 的方案",
      D: "三者皆可",
    },
    answer: "A",
    explanation: {
      why: "機會成本越低 = 放棄的替代選項價值越小 = 選這個的代價最小。",
      others: {
        B: "不是最低。",
        C: "最高代價最大。",
        D: "有明顯差別。",
      },
      keyPoint: "機會成本越小越好。",
    },
  },
  {
    id: "C-006",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "折現率意義",
    difficulty: "medium",
    question:
      "財務長問 PM：「你 NPV 裡用的 10% 折現率是什麼？為什麼不用 5%？」PM 最合適的回答是？",
    options: {
      A: "10% 反映公司資金成本與機會成本（不投資可拿去賺的報酬率），用 5% 會低估時間價值",
      B: "10% 比較好聽",
      C: "10% 是會計法規強制",
      D: "10% 是讓數字看起來小",
    },
    answer: "A",
    explanation: {
      why: "折現率反映公司的機會成本與資金成本（WACC），不能任意調整。",
      others: {
        B: "不是主觀選擇。",
        C: "非會計法規原因。",
        D: "目的不是視覺呈現。",
      },
      keyPoint: "折現率 = 機會成本 / WACC。",
    },
  },
  {
    id: "C-007",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "ROI 比較",
    difficulty: "easy",
    question:
      "兩個行銷專案 A 的 ROI 為 20%、B 為 50%，投入金額相同。董事會要求「多選一」，PM 應建議？",
    options: {
      A: "A（20%）",
      B: "B（50%）",
      C: "兩個都做",
      D: "兩個都不做",
    },
    answer: "B",
    explanation: {
      why: "ROI 越大越好，投資效率越高。題目指定多選一，選 B。",
      others: {
        A: "較低。",
        C: "題目限多選一。",
        D: "皆正值值得投資。",
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
      "PM 幫新人整理「多選一」判讀口訣。哪一組是「全部都是越大越好」？",
    options: {
      A: "NPV、IRR、ROI",
      B: "回收期、機會成本、單位成本",
      C: "NPV、回收期、折現率",
      D: "ROI、機會成本、IRR",
    },
    answer: "A",
    explanation: {
      why: "利潤指標（NPV、IRR、ROI）越大越好；時間/成本指標（回收期、機會成本）越小越好。",
      others: {
        B: "都是越小越好。",
        C: "回收期越小越好。",
        D: "機會成本越小越好。",
      },
      keyPoint: "賺錢指標越大越好，時間/成本指標越小越好。",
    },
  },
  {
    id: "C-009",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "現值計算",
    difficulty: "medium",
    question:
      "財務助理要計算「第 3 年可收到 $100 萬」在折現率 10% 下的現值。她用了哪個公式正確？",
    options: {
      A: "$100 萬 × (1+10%)^3",
      B: "$100 萬 ÷ (1+10%)^3",
      C: "$100 萬 × 10% × 3",
      D: "$100 萬 + (10% × 3)",
    },
    answer: "B",
    explanation: {
      why: "現值（PV）= 未來值 ÷ (1+折現率)^年數，把未來錢「打折」回現在。",
      others: {
        A: "這是把現值推到未來的複利公式。",
        C: "是單利總額。",
        D: "計算錯誤。",
      },
      keyPoint: "PV = FV ÷ (1+r)^n。",
    },
  },
  {
    id: "C-010",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 構成",
    difficulty: "hard",
    question:
      "實習生問 PM：「NPV 到底怎麼算？」PM 最精確的回答是？",
    options: {
      A: "未來每期現金流直接加總後減去初始投資",
      B: "把未來每期現金流分別折現到現在、加總後，再減去初始投資",
      C: "初始投資除以未來現金流",
      D: "初始投資乘以折現率",
    },
    answer: "B",
    explanation: {
      why: "NPV 核心是「考慮時間價值」：每期現金流要折現後相加，再減初始投資。",
      others: {
        A: "忽略時間價值。",
        C: "是回收期近似概念。",
        D: "沒有意義的公式。",
      },
      keyPoint: "NPV = Σ 現值 − 初始投資。",
    },
  },
  {
    id: "C-011",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR 本質",
    difficulty: "hard",
    question:
      "財務長在會議上說：「IRR 其實就是讓 NPV = 0 的那個折現率。」這句話的實務意義是？",
    options: {
      A: "IRR 是專案的內含年化報酬率，可直接與公司折現率/機會成本比較",
      B: "IRR 是專案的絕對金額",
      C: "IRR 等於回收期倒數",
      D: "IRR 是 ROI 的另一種寫法",
    },
    answer: "A",
    explanation: {
      why: "IRR = NPV=0 的折現率，代表專案的內含報酬率，方便與公司資金成本比較。",
      others: {
        B: "IRR 是百分比不是金額。",
        C: "與回收期無直接等價。",
        D: "計算方式不同。",
      },
      keyPoint: "IRR = 讓 NPV=0 的折現率 = 專案內含報酬率。",
    },
  },
  {
    id: "C-012",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案範圍",
    difficulty: "medium",
    question:
      "PM 正在審查新人寫的商業企劃案草稿。下列哪一項「不該」出現，應建議刪除？",
    options: {
      A: "專案的商業需要與目的",
      B: "成本效益分析與預期效益",
      C: "每日站立會議的議程範本",
      D: "關鍵商業假設條件",
    },
    answer: "C",
    explanation: {
      why: "站立會議議程是執行層面細節，不屬於商業企劃案這類高階商業決策文件。",
      others: {
        A: "核心內容。",
        B: "核心內容。",
        D: "核心內容。",
      },
      keyPoint: "商業企劃案 = 高階商業文件，不含執行細節。",
    },
  },
  {
    id: "C-013",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "交付物 vs 效益",
    difficulty: "medium",
    question:
      "贊助者問 PM：「我們做出這個 APP 後算是完成了嗎？」PM 回答：「APP 上線只是交付物，但要確認是否真的帶來了我們預期的效益。」PM 的區辨意思是？",
    options: {
      A: "交付物＝產出的東西本身；效益＝該產出帶來的業務價值",
      B: "交付物是計畫；效益是執行",
      C: "交付物與效益相同",
      D: "交付物是財務數字、效益是實體物",
    },
    answer: "A",
    explanation: {
      why: "交付物是「做了什麼」；效益是「因此獲得什麼價值」。APP 做出來不代表自動產生業務效益。",
      others: {
        B: "不是計畫 vs 執行。",
        C: "概念不同。",
        D: "兩者都可有形或無形。",
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
      "專案結案後半年，董事會問「當初說要提升 20% 客戶留存率有達成嗎？」。依 PMI 治理原則，這個後續追蹤最該由誰負責？",
    options: {
      A: "已結案的 PM 持續到退休",
      B: "效益管理計畫書指派的「效益責任人」與承接的營運單位",
      C: "沒有人需要負責",
      D: "客戶",
    },
    answer: "B",
    explanation: {
      why: "效益實現發生在結案後，需要 BMP 預先指派的效益責任人與營運單位追蹤。",
      others: {
        A: "PM 在結案後不再負責。",
        C: "必須有人負責。",
        D: "客戶是受益者不是負責人。",
      },
      keyPoint: "結案後效益追蹤 = 效益責任人 + 營運承接。",
    },
  },
  {
    id: "C-015",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "價值消失處理",
    difficulty: "medium",
    question:
      "專案進行到中段，PM 重新計算 NPV 後發現變為 -$50,000，且市場需求已劇烈下滑。他該怎麼做？",
    options: {
      A: "繼續執行到結案",
      B: "依治理程序向贊助者/指導委員會陳報，建議評估終止或重大變更",
      C: "隱瞞希望後續扭轉",
      D: "自行決定取消專案",
    },
    answer: "B",
    explanation: {
      why: "商業價值消失是重大議題，超越 PM 權限，應依治理陳報由治理層決策。",
      others: {
        A: "持續執行會加速虧損。",
        C: "隱瞞違背倫理與專業。",
        D: "PM 無權自行取消。",
      },
      keyPoint: "價值消失 → 陳報治理層，不隱瞞也不自行取消。",
    },
  },
  {
    id: "C-016",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "多指標綜合判斷",
    difficulty: "hard",
    question:
      "董事會比較四個方案：\n甲：NPV +100 萬、IRR 15%、回收期 6 年\n乙：NPV +80 萬、IRR 18%、回收期 4 年\n丙：NPV +50 萬、IRR 12%、回收期 3 年\n丁：NPV +120 萬、IRR 10%、回收期 8 年\n公司策略要求「獲利要好、回收要快、風險要低」。最符合的選擇是？",
    options: {
      A: "甲",
      B: "乙",
      C: "丙",
      D: "丁（NPV 最大）",
    },
    answer: "B",
    explanation: {
      why: "乙的 NPV 雖非最大但也高，IRR 最高、回收期短，綜合最符合「獲利好+回收快+風險低」。丁 NPV 最大但 IRR 最低且回收期最長，風險高。",
      others: {
        A: "沒有突出優勢。",
        C: "NPV 最小。",
        D: "IRR 最低、回收期最長，風險最高。",
      },
      keyPoint: "多指標綜合選最均衡，非單看 NPV。",
    },
  },
  {
    id: "C-017",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案 vs 章程",
    difficulty: "medium",
    question:
      "新人在會議上把「商業企劃案」和「專案章程」搞混。資深 PM 澄清兩者差異最精確的說法為？",
    options: {
      A: "兩者是同一份文件",
      B: "商業企劃案在專案前證明合理性；專案章程在獲核准後正式授權專案啟動",
      C: "專案章程在商業企劃案之前",
      D: "兩者互不相關",
    },
    answer: "B",
    explanation: {
      why: "順序是：商業企劃案通過 → 發布專案章程啟動。前者證明為什麼做，後者授權正式啟動。",
      others: {
        A: "兩份文件不同。",
        C: "順序顛倒。",
        D: "章程建立在商業企劃案之上。",
      },
      keyPoint: "BC → Charter。",
    },
  },
  {
    id: "C-018",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益時間框架",
    difficulty: "hard",
    question:
      "效益管理計畫書寫著「短期：6 個月內達 5% 營收成長；長期：3 年內達 30% 市佔」。稽核員問：「為什麼不只寫短期？」PM 的回答最符合 BMP 精神的是？",
    options: {
      A: "效益管理計畫書本來就應同時記錄短期與長期效益實現時間框架，避免只看戰術忽略策略",
      B: "長期效益不需要寫",
      C: "短期根本不用寫",
      D: "法規強制要求",
    },
    answer: "A",
    explanation: {
      why: "BMP 本質就是記錄短期+長期效益實現時間框架與度量指標。",
      others: {
        B: "長期效益攸關策略意義。",
        C: "短期同樣重要。",
        D: "非法規強制。",
      },
      keyPoint: "BMP = 短+長期效益的時間框架與指標。",
    },
  },
  {
    id: "C-019",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "無形價值",
    difficulty: "medium",
    question:
      "行銷長在董事會提出：「這個品牌活動會帶來的價值是員工士氣與品牌知名度。」有董事質疑「這些沒有數字沒意義」。PM 最合適的回應是？",
    options: {
      A: "認同董事，只看財務數字就好",
      B: "說明這些屬於無形價值，同樣是商業價值一環，可用代理指標（NPS、留任率、品牌調查）追蹤",
      C: "承認行銷長講的沒意義",
      D: "建議取消專案",
    },
    answer: "B",
    explanation: {
      why: "商業價值包含有形與無形效益，無形部分可透過代理指標追蹤。",
      others: {
        A: "違背商業價值完整定義。",
        C: "無形價值確實有意義。",
        D: "過度反應。",
      },
      keyPoint: "商業價值 = 有形 + 無形效益，無形可用代理指標。",
    },
  },
  {
    id: "C-020",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 實際意義",
    difficulty: "medium",
    question:
      "贊助者盯著 NPV = +$29,426 問 PM：「這個 29,426 到底是什麼意思？」PM 最準確的一句話解釋為？",
    options: {
      A: "未來每年多賺 $29,426",
      B: "扣除折現後的淨獲利，用今天的幣值衡量共值 $29,426",
      C: "專案總收入 $29,426",
      D: "總成本 $29,426",
    },
    answer: "B",
    explanation: {
      why: "NPV 是把未來現金流折現總和 − 初始投資後的淨值，用「今天的錢」計。",
      others: {
        A: "不是年均值。",
        C: "總收入是毛收入。",
        D: "成本是投入。",
      },
      keyPoint: "NPV = 折現後淨獲利（以今天幣值計）。",
    },
  },
  {
    id: "C-021",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "敏捷早期價值",
    difficulty: "medium",
    question:
      "客戶問 PM：「為什麼你們敏捷案每兩週就要交付一次？這不會更累嗎？」PM 最合適的回答是？",
    options: {
      A: "因為敏捷不寫文件",
      B: "透過增量交付，客戶能提早使用部分成果並提供回饋，提早實現商業價值也降低風險",
      C: "因為敏捷成本比較低",
      D: "因為敏捷不需要測試",
    },
    answer: "B",
    explanation: {
      why: "敏捷增量交付讓客戶提早使用、取得回饋，縮短反饋循環並提早實現價值。",
      others: {
        A: "敏捷仍需必要文件。",
        C: "成本不必然較低。",
        D: "敏捷強調內建品質。",
      },
      keyPoint: "敏捷增量交付 = 提早實現價值 + 降低風險。",
    },
  },
  {
    id: "C-022",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "IRR vs NPV",
    difficulty: "hard",
    question:
      "董事問 PM：「我看 IRR 跟 NPV 兩個指標有時會給不同結論，它們到底差在哪？」PM 最精確的回答是？",
    options: {
      A: "IRR 表達報酬率（百分比）；NPV 表達絕對金額，視角互補",
      B: "兩者完全相同只是名稱不同",
      C: "NPV 是百分比、IRR 是金額",
      D: "兩者都是時間指標",
    },
    answer: "A",
    explanation: {
      why: "IRR 是百分比（類利率）；NPV 是絕對金額。大專案 NPV 大但 IRR 未必高，反之亦然。",
      others: {
        B: "兩者表達方式不同。",
        C: "敘述顛倒。",
        D: "兩者都不是時間指標。",
      },
      keyPoint: "IRR = 百分比；NPV = 絕對金額；互補視角。",
    },
  },
  {
    id: "C-023",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "折現率來源",
    difficulty: "medium",
    question:
      "PM 在試算 NPV 時，財務部給他 10% 折現率。他問為什麼是這個數字。財務部的說法為？",
    options: {
      A: "隨意指定",
      B: "依公司加權平均資金成本（WACC）或內部要求的機會成本率而定",
      C: "依 PM 意見",
      D: "等於 ROI",
    },
    answer: "B",
    explanation: {
      why: "折現率通常是公司 WACC 或內部要求的機會成本率，不是任意指定。",
      others: {
        A: "非隨意。",
        C: "非個人決定。",
        D: "ROI 是結果，不是折現率。",
      },
      keyPoint: "折現率 ≈ 機會成本 / WACC。",
    },
  },
  {
    id: "C-024",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "回收期計算",
    difficulty: "easy",
    question:
      "某專案初始投資 $100 萬，每年穩定淨賺 $25 萬。贊助者問：「大概幾年能回本？」PM 的答案是？",
    options: {
      A: "2 年",
      B: "3 年",
      C: "4 年",
      D: "5 年",
    },
    answer: "C",
    explanation: {
      why: "$100 萬 ÷ $25 萬/年 = 4 年。",
      others: {
        A: "少算。",
        B: "少算。",
        D: "多算。",
      },
      keyPoint: "回收期 = 投資 ÷ 每期淨回流。",
    },
  },
  {
    id: "C-025",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "ROI vs 回收期",
    difficulty: "medium",
    question:
      "董事會同時看 ROI 與回收期。PM 向董事解釋「這兩個不能混為一談」，他最正確的區辨是？",
    options: {
      A: "兩者都看時間",
      B: "ROI 看投資報酬比例（%）；回收期看多久拿回本金（時間）",
      C: "ROI 看錢，回收期也看錢",
      D: "完全相同",
    },
    answer: "B",
    explanation: {
      why: "ROI 是比率（獲利/投入）；回收期是時間。互補但不同面向。",
      others: {
        A: "ROI 不看時間。",
        C: "回收期看時間。",
        D: "兩者不同。",
      },
      keyPoint: "ROI = 比率；回收期 = 時間。",
    },
  },
  {
    id: "C-026",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "兩大商業文件",
    difficulty: "hard",
    question:
      "PMO 要求 PM 盤點「兩大商業文件」。他應該列出的是？",
    options: {
      A: "商業企劃案 + 效益管理計畫書",
      B: "專案章程 + WBS",
      C: "風險登錄冊 + 議題登錄冊",
      D: "品質計畫書 + 採購計畫書",
    },
    answer: "A",
    explanation: {
      why: "PMBOK 明確定義 Business Documents = Business Case + Benefits Management Plan。",
      others: {
        B: "WBS 是範疇基準。",
        C: "執行期文件。",
        D: "知識領域計畫書。",
      },
      keyPoint: "兩大商業文件 = BC + BMP。",
    },
  },
  {
    id: "C-027",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "跳過合規風險",
    difficulty: "hard",
    question:
      "四個專案 NPV 相同時，董事要從以下組合挑出「最佳」。哪一組最值得投資？",
    options: {
      A: "IRR 最低、回收期最長",
      B: "IRR 最高、回收期最短",
      C: "ROI 最低",
      D: "機會成本最高",
    },
    answer: "B",
    explanation: {
      why: "NPV 相同時，IRR 高（報酬率好）+ 回收期短（風險曝險時間短）= 最佳。",
      others: {
        A: "最差組合。",
        C: "ROI 越大越好。",
        D: "機會成本越小越好。",
      },
      keyPoint: "NPV 相同時：IRR 高 + 回收期短 最佳。",
    },
  },
  {
    id: "C-028",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "金錢時間價值",
    difficulty: "medium",
    question:
      "實習生問：「同樣是 $100，明年的 $100 跟今年的 $100 為什麼不一樣？」PM 的解釋是？",
    options: {
      A: "通膨讓錢貶值也可放在其他地方生利息，這叫做金錢的時間價值",
      B: "因為通膨是無限的",
      C: "兩者其實一樣",
      D: "因為會計法規規定",
    },
    answer: "A",
    explanation: {
      why: "時間價值 = 通膨使購買力下降 + 機會成本（資金可放他處生利）。",
      others: {
        B: "通膨不是無限。",
        C: "兩者不同。",
        D: "非會計原因。",
      },
      keyPoint: "金錢時間價值 = 通膨 + 機會成本。",
    },
  },
  {
    id: "C-029",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "章程不寫之物",
    difficulty: "medium",
    question:
      "新人把每週 Sprint 任務分配表、程式碼風格規範、團隊壓力等都塞進專案章程草稿。PM 幫他整理，最需要刪掉的是？",
    options: {
      A: "專案目的與目標",
      B: "PM 的授權與責任範圍",
      C: "每週 Sprint 的詳細任務分配",
      D: "高階里程碑時程",
    },
    answer: "C",
    explanation: {
      why: "章程是高階授權文件，不含 Sprint 任務這類執行細節。",
      others: {
        A: "核心內容。",
        B: "核心內容。",
        D: "高階里程碑屬於章程。",
      },
      keyPoint: "章程 = 高階、無細節。",
    },
  },
  {
    id: "C-030",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "更新 BC 時機",
    difficulty: "hard",
    question:
      "下列情境中，最需要「更新商業企劃案」的是？",
    options: {
      A: "每日進度有小變動",
      B: "法規變動讓原商業需要或預期效益重大改變",
      C: "有人請病假",
      D: "辦公室調座位",
    },
    answer: "B",
    explanation: {
      why: "商業企劃案是高階文件，只有商業需要或預期效益重大變化才會更新。",
      others: {
        A: "日常進度是執行層。",
        C: "人員異動不涉 BC。",
        D: "與 BC 無關。",
      },
      keyPoint: "BC 更新時機 = 商業需要 / 效益重大變化。",
    },
  },
  {
    id: "C-031",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "MVP 本質",
    difficulty: "medium",
    question:
      "創業團隊提出 MVP 計畫要驗證「訂閱鮮食」市場。老闆說「那不就是做個品質差的版本？」。PM 幫忙澄清 MVP 的本質，最正確的說法為？",
    options: {
      A: "MVP 是品質最低的劣質產品",
      B: "MVP 是實現產品核心價值的最小功能組合，用來取得早期回饋與驗證假設",
      C: "MVP 是最便宜的版本",
      D: "MVP 是最小規模團隊做出的版本",
    },
    answer: "B",
    explanation: {
      why: "MVP 核心是「最小功能集 + 早期驗證」，不是品質劣質。",
      others: {
        A: "MVP 不等於品質劣。",
        C: "MVP 不是成本概念。",
        D: "與團隊規模無關。",
      },
      keyPoint: "MVP = 最小可行 + 早期驗證假設。",
    },
  },
  {
    id: "C-032",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "增量目的",
    difficulty: "hard",
    question:
      "PM 跟贊助者解釋「為什麼我們要切三批交付而不是最後一次給」。哪一句最說明增量式的目的？",
    options: {
      A: "反覆修改同一產出物",
      B: "分批交付完成品讓客戶提早使用，實現早期價值並搶佔市場",
      C: "節省預算",
      D: "取代敏捷",
    },
    answer: "B",
    explanation: {
      why: "增量式 = 切塊各自完成交付，提早實現商業價值。",
      others: {
        A: "那是迭代式目的。",
        C: "不是成本目的。",
        D: "增量是敏捷的一環而非取代。",
      },
      keyPoint: "增量目的 = 提早分批交付實現價值。",
    },
  },
  {
    id: "C-033",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "迭代目的",
    difficulty: "hard",
    question:
      "UX 團隊要為新服務設計整體體驗，他們採用每週一份整份方案給客戶看、下週整份改版的做法。PM 向新人說明這是迭代式，主要目的為？",
    options: {
      A: "釐清模糊需求、探索解決方案、反覆完善",
      B: "提早交付完成品",
      C: "節省成本",
      D: "取代預測式",
    },
    answer: "A",
    explanation: {
      why: "迭代式聚焦「反覆優化同一產出物」以釐清需求與完善方案。",
      others: {
        B: "那是增量式目的。",
        C: "不是成本目的。",
        D: "不是取代關係。",
      },
      keyPoint: "迭代目的 = 反覆完善、釐清需求。",
    },
  },
  {
    id: "C-034",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 計算順序",
    difficulty: "hard",
    question:
      "財務助理在算 NPV。他在白板上寫了四種不同計算順序，PM 指出哪一種是正確的 NPV 計算順序？",
    options: {
      A: "直接把未來收入全部加總，再減去初始投資",
      B: "把每年的現金流分別折現到第 0 期後相加，再減去初始投資",
      C: "初始投資乘以折現率",
      D: "把初始投資跟總收入平均",
    },
    answer: "B",
    explanation: {
      why: "NPV 核心在處理時間價值，每期都要先折現再加總。",
      others: {
        A: "忽略時間價值。",
        C: "無意義。",
        D: "無意義。",
      },
      keyPoint: "NPV 步驟：逐期折現 → 加總 → 減去初始投資。",
    },
  },
  {
    id: "C-035",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "殘值處理",
    difficulty: "medium",
    question:
      "實習生做 NPV 時漏了「專案結束設備殘值 $2 萬」。PM 指出正確做法為？",
    options: {
      A: "殘值直接忽略",
      B: "殘值應計入最後一年的現金流入，並比照其他現金流一起折現",
      C: "殘值計入初始投資",
      D: "殘值只供報稅用不進 NPV",
    },
    answer: "B",
    explanation: {
      why: "殘值是最後一期可回收的現金流入，要計入並折現。",
      others: {
        A: "忽略會低估 NPV。",
        C: "殘值是流入不是初始投資。",
        D: "NPV 計算要納入。",
      },
      keyPoint: "殘值 = 最後一年流入，需折現。",
    },
  },
  {
    id: "C-036",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益受益範圍",
    difficulty: "easy",
    question:
      "某 ESG 專案的效益受益者除了股東外，PM 還要考慮？",
    options: {
      A: "只考慮股東",
      B: "股東、客戶、員工、供應鏈、社會等多元群體",
      C: "只考慮 PM 自己",
      D: "只考慮贊助者",
    },
    answer: "B",
    explanation: {
      why: "效益受益範圍廣泛，尤其 ESG 專案更需納入內外部多元群體。",
      others: {
        A: "過度狹隘。",
        C: "不合邏輯。",
        D: "僅其中一方。",
      },
      keyPoint: "效益受益 = 多元群體（利害關係人）。",
    },
  },
  {
    id: "C-037",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "NPV 誤區",
    difficulty: "hard",
    question:
      "下列關於 NPV 的敘述，哪一個「錯誤」？",
    options: {
      A: "NPV < 0 不值得投資",
      B: "多選一時 NPV 越大越好",
      C: "NPV = 0 代表內部報酬率剛好等於折現率",
      D: "NPV 不考慮時間價值",
    },
    answer: "D",
    explanation: {
      why: "NPV 的核心特點就是處理時間價值，D 敘述與事實相反。",
      others: {
        A: "正確。",
        B: "正確。",
        C: "正確，NPV=0 等於 IRR=折現率。",
      },
      keyPoint: "NPV 的精神就是處理時間價值。",
    },
  },
  {
    id: "C-038",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "商業企劃案 vs 效益管理",
    difficulty: "hard",
    question:
      "稽核員問 PM：「商業企劃案跟效益管理計畫書這兩份文件，內容是不是重複？」PM 最精確的差異說明為？",
    options: {
      A: "兩者完全相同",
      B: "BC 證明『為什麼做』（合理性）；BMP 描述『效益如何實現、維持、追蹤』",
      C: "BC 在結案寫、BMP 在啟動寫",
      D: "BC 是小文件、BMP 是長文件",
    },
    answer: "B",
    explanation: {
      why: "BC 回答為什麼做；BMP 回答效益如何實現。兩者目的不同。",
      others: {
        A: "不同。",
        C: "順序顛倒。",
        D: "長短非差別重點。",
      },
      keyPoint: "BC = 為什麼做；BMP = 效益如何實現。",
    },
  },
  {
    id: "C-039",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "效益實現責任",
    difficulty: "medium",
    question:
      "專案結案 1 年後董事會追問效益，誰該出來答？",
    options: {
      A: "結案後的 PM",
      B: "效益責任人與承接的營運單位主管",
      C: "客戶",
      D: "Scrum Master",
    },
    answer: "B",
    explanation: {
      why: "結案後 PM 角色已結束，效益實現與維持由預先指派的效益責任人與營運單位負責。",
      others: {
        A: "PM 責任在結案後終止。",
        C: "客戶不是負責人。",
        D: "與 SM 無關。",
      },
      keyPoint: "結案後效益 → 效益責任人 + 營運單位。",
    },
  },
  {
    id: "C-040",
    chapter: "C",
    topic: "專案效益與價值",
    subtopic: "敏捷預算治理",
    difficulty: "hard",
    question:
      "敏捷專案中贊助者問 PM：「為什麼我們不一次核定全部預算，而是每季審？」PM 最合理的說明是？",
    options: {
      A: "因為敏捷省錢",
      B: "以滾動式資助（Rolling-wave Funding）依據每季累積的商業價值與學習回饋決定續投，風險管控更好",
      C: "敏捷預算隨便估",
      D: "因為財務部要求",
    },
    answer: "B",
    explanation: {
      why: "敏捷常用滾動式資助：每階段依實際價值與回饋決定是否續投，可及早中止低價值專案。",
      others: {
        A: "不必然省。",
        C: "敏捷仍嚴謹估算。",
        D: "非單純財務要求，是治理設計。",
      },
      keyPoint: "敏捷 = 滾動式資助，依價值回饋決定續投。",
    },
  },
];

export default questions;
