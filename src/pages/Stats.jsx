import { useEffect, useState } from "react";
import { chapters } from "../data/chapters.js";
import { allQuestions } from "../data/questions/index.js";
import { getChapterStats, loadProgress, loadWrong } from "../utils/storage.js";

export default function Stats() {
  const [chapterStats, setChapterStats] = useState({});
  const [summary, setSummary] = useState({
    totalAnswered: 0,
    totalCorrect: 0,
    wrong: 0,
  });

  useEffect(() => {
    const stats = {};
    chapters.forEach((c) => {
      stats[c.id] = getChapterStats(c.id, allQuestions);
    });
    setChapterStats(stats);
    const progress = loadProgress();
    const totalAnswered = Object.values(progress).filter(
      (p) => p.attempts > 0,
    ).length;
    const totalCorrect = Object.values(progress).filter(
      (p) => p.lastCorrect,
    ).length;
    setSummary({
      totalAnswered,
      totalCorrect,
      wrong: loadWrong().length,
    });
  }, []);

  const overallAccuracy =
    summary.totalAnswered > 0
      ? Math.round((summary.totalCorrect / summary.totalAnswered) * 100)
      : 0;

  return (
    <div className="space-y-5 px-4 pt-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          章節統計
        </h1>
        <p className="text-sm text-gray-500">總題庫 {allQuestions.length} 題</p>
      </header>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
          <div className="text-xs text-gray-500">已做過</div>
          <div className="text-xl font-bold">{summary.totalAnswered}</div>
        </div>
        <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
          <div className="text-xs text-gray-500">正確率</div>
          <div className="text-xl font-bold">{overallAccuracy}%</div>
        </div>
        <div className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-900">
          <div className="text-xs text-gray-500">錯題</div>
          <div className="text-xl font-bold text-rose-600">{summary.wrong}</div>
        </div>
      </div>

      <div className="space-y-2">
        {chapters.map((c) => {
          const s = chapterStats[c.id] || {
            total: 0,
            answered: 0,
            correct: 0,
            accuracy: 0,
            coverage: 0,
          };
          return (
            <div
              key={c.id}
              className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`grid h-7 w-7 place-items-center rounded text-xs font-bold text-white ${c.color}`}
                  >
                    {c.id}
                  </div>
                  <div className="text-sm font-semibold">{c.title}</div>
                </div>
                <div className="text-xs text-gray-500">
                  正確率 {s.accuracy}%
                </div>
              </div>
              <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                <span>
                  覆蓋率 {s.answered} / {s.total}
                </span>
                <span>{s.coverage}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className={`h-full ${c.color}`}
                  style={{ width: `${s.coverage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
