export const chapters = [
  {
    id: "A",
    title: "基礎專案管理",
    description: "專案定義、五大過程組、三大開發手法、SMART",
    color: "bg-blue-500",
    target: 25,
  },
  {
    id: "B",
    title: "策略調整（校準）",
    description: "組織策略對齊、商業價值、利害關係人期望",
    color: "bg-green-500",
    target: 25,
  },
  {
    id: "C",
    title: "專案效益與價值",
    description: "NPV、IRR、ROI、回收期、商業企劃案、效益管理計畫書",
    color: "bg-amber-500",
    target: 40,
  },
  {
    id: "D",
    title: "組織文化與變革管理",
    description: "ADKAR、敏捷思維、變革抗拒、組織轉型",
    color: "bg-purple-500",
    target: 40,
  },
  {
    id: "E",
    title: "專案治理",
    description: "專案章程、PMO、治理框架、決策權限",
    color: "bg-rose-500",
    target: 40,
  },
  {
    id: "F",
    title: "專案合規性",
    description: "法規、標準、合規風險、內部稽核",
    color: "bg-teal-500",
    target: 30,
  },
];

export const getChapter = (id) => chapters.find((c) => c.id === id);
