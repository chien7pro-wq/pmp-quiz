# 題目 JSON Schema

```js
{
  id: "A-001",              // 章節-流水號
  chapter: "A",             // A-F
  topic: "基礎專案管理",       // 所屬章節標題
  subtopic: "開發手法",       // 細分主題
  difficulty: "medium",     // easy | medium | hard
  question: "...",          // 題幹
  options: {
    A: "選項A",
    B: "選項B",
    C: "選項C",
    D: "選項D"
  },
  answer: "A",              // 正解
  explanation: {
    why: "為什麼選這個",
    others: {               // 其他選項錯在哪
      B: "...",
      C: "...",
      D: "..."
    },
    keyPoint: "考點關鍵字 / 口訣"
  },
  tags: ["預測式", "敏捷"]   // 額外標籤（選填）
}
```
