import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadWrong } from "../utils/storage.js";
import { getQuestionById } from "../data/questions/index.js";
import { getChapter } from "../data/chapters.js";

export default function WrongBook() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ids = loadWrong();
    setItems(ids.map((id) => getQuestionById(id)).filter(Boolean));
  }, []);

  return (
    <div className="space-y-4 px-4 pt-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            錯題本
          </h1>
          <p className="text-sm text-gray-500">{items.length} 題待攻克</p>
        </div>
        {items.length > 0 && (
          <Link
            to="/quiz/wrong"
            className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
          >
            開始刷
          </Link>
        )}
      </header>

      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center text-gray-400 dark:border-gray-700">
          🎉 目前沒有錯題
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((q) => {
            const ch = getChapter(q.chapter);
            return (
              <li
                key={q.id}
                className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-1 flex items-center gap-2 text-xs">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {q.id}
                  </span>
                  {ch && (
                    <span
                      className={`rounded px-2 py-0.5 text-white ${ch.color}`}
                    >
                      {ch.title}
                    </span>
                  )}
                </div>
                <p className="line-clamp-2 text-sm text-gray-800 dark:text-gray-200">
                  {q.question}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
