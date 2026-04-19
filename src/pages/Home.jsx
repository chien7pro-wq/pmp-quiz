import { Link } from "react-router-dom";
import { chapters } from "../data/chapters.js";
import { allQuestions } from "../data/questions/index.js";
import { loadWrong, getChapterStats } from "../utils/storage.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [wrongCount, setWrongCount] = useState(0);
  const [chapterStats, setChapterStats] = useState({});

  useEffect(() => {
    setWrongCount(loadWrong().length);
    const stats = {};
    chapters.forEach((c) => {
      stats[c.id] = getChapterStats(c.id, allQuestions);
    });
    setChapterStats(stats);
  }, []);

  const totalQuestions = allQuestions.length;

  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          PMP L1 商業環境
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          題庫總數 {totalQuestions} 題 · 錯題 {wrongCount} 題
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          快速開始
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/quiz/random/20"
            className="rounded-xl bg-brand-600 p-4 text-left text-white shadow-sm active:scale-95"
          >
            <div className="text-lg font-semibold">隨機 20 題</div>
            <div className="text-xs opacity-80">混合所有章節</div>
          </Link>
          <Link
            to="/quiz/random/50"
            className="rounded-xl bg-brand-700 p-4 text-left text-white shadow-sm active:scale-95"
          >
            <div className="text-lg font-semibold">隨機 50 題</div>
            <div className="text-xs opacity-80">模擬考體驗</div>
          </Link>
          <Link
            to="/quiz/wrong"
            className={`rounded-xl p-4 text-left shadow-sm active:scale-95 ${
              wrongCount > 0
                ? "bg-rose-500 text-white"
                : "bg-gray-200 text-gray-400 dark:bg-gray-800"
            }`}
            onClick={(e) => wrongCount === 0 && e.preventDefault()}
          >
            <div className="text-lg font-semibold">刷錯題</div>
            <div className="text-xs opacity-80">
              {wrongCount > 0 ? `${wrongCount} 題待攻克` : "目前沒有錯題"}
            </div>
          </Link>
          <Link
            to="/quiz/random/all"
            className="rounded-xl bg-gray-900 p-4 text-left text-white shadow-sm active:scale-95 dark:bg-gray-100 dark:text-gray-900"
          >
            <div className="text-lg font-semibold">全部 {totalQuestions}</div>
            <div className="text-xs opacity-80">全範圍刷題</div>
          </Link>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          按章節練習
        </h2>
        <div className="space-y-2">
          {chapters.map((c) => {
            const s = chapterStats[c.id] || {
              total: 0,
              answered: 0,
              accuracy: 0,
              coverage: 0,
            };
            return (
              <Link
                key={c.id}
                to={`/quiz/chapter/${c.id}`}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 active:scale-[.98] dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-lg text-lg font-bold text-white ${c.color}`}
                >
                  {c.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 dark:text-gray-50">
                    {c.title}
                  </div>
                  <div className="truncate text-xs text-gray-500">
                    {c.description}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">
                    {s.total} 題
                  </div>
                  <div className="text-gray-400">
                    已做 {s.answered} · 正確率 {s.accuracy}%
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
