import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  allQuestions,
  getQuestionsByChapter,
  getQuestionById,
} from "../data/questions/index.js";
import { shuffle } from "../utils/shuffle.js";
import { recordAnswer, loadWrong } from "../utils/storage.js";

const OPTION_KEYS = ["A", "B", "C", "D"];

function buildDeck(mode, param) {
  if (mode === "random") {
    const pool = shuffle(allQuestions);
    if (param === "all") return pool;
    const n = parseInt(param, 10);
    return pool.slice(0, Number.isFinite(n) ? n : 20);
  }
  if (mode === "chapter") {
    return shuffle(getQuestionsByChapter(param));
  }
  if (mode === "wrong") {
    const ids = loadWrong();
    return shuffle(
      ids.map((id) => getQuestionById(id)).filter(Boolean),
    );
  }
  return [];
}

export default function Quiz() {
  const { mode, param } = useParams();
  const navigate = useNavigate();

  const deck = useMemo(() => buildDeck(mode, param), [mode, param]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  if (deck.length === 0) {
    return (
      <div className="space-y-4 px-4 pt-12 text-center">
        <div className="text-4xl">📭</div>
        <h2 className="text-xl font-semibold">這個模式沒有題目</h2>
        <p className="text-sm text-gray-500">
          可能題庫還沒建立，或是你沒有錯題要練。
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm text-white"
        >
          回首頁
        </Link>
      </div>
    );
  }

  const q = deck[index];
  const isDone = index >= deck.length;

  if (isDone) {
    const pct = Math.round((correctCount / deck.length) * 100);
    return (
      <div className="space-y-6 px-4 pt-12 text-center">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold">已完成</h2>
        <div className="text-lg text-gray-700 dark:text-gray-200">
          答對 {correctCount} / {deck.length}（{pct}%）
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800"
          >
            回首頁
          </button>
          <button
            onClick={() => {
              setIndex(0);
              setPicked(null);
              setCorrectCount(0);
            }}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm text-white"
          >
            再來一輪
          </button>
        </div>
      </div>
    );
  }

  const handlePick = (key) => {
    if (picked) return;
    const isCorrect = key === q.answer;
    recordAnswer(q.id, q.chapter, isCorrect);
    if (isCorrect) setCorrectCount((n) => n + 1);
    setPicked(key);
  };

  const handleNext = () => {
    setPicked(null);
    setIndex((i) => i + 1);
  };

  return (
    <div className="px-4 pb-24 pt-4">
      <div className="mb-3 flex items-center justify-between text-sm">
        <Link to="/" className="text-gray-500 active:text-gray-900">
          ← 退出
        </Link>
        <div className="font-mono text-xs text-gray-500">
          {index + 1} / {deck.length}
        </div>
      </div>

      <div className="mb-2 h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-brand-600 transition-all"
          style={{ width: `${((index + 1) / deck.length) * 100}%` }}
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {q.id}
        </span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {q.topic}
        </span>
        <span
          className={`rounded px-2 py-0.5 text-xs ${
            q.difficulty === "hard"
              ? "bg-rose-100 text-rose-700"
              : q.difficulty === "medium"
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {q.difficulty === "hard"
            ? "難"
            : q.difficulty === "medium"
              ? "中"
              : "易"}
        </span>
      </div>

      <h2 className="mb-5 whitespace-pre-wrap text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-50">
        {q.question}
      </h2>

      <div className="space-y-2">
        {OPTION_KEYS.map((key) => {
          const isCorrect = key === q.answer;
          const isPicked = picked === key;
          let cls =
            "w-full rounded-xl border p-3 text-left transition active:scale-[.99] ";
          if (!picked) {
            cls +=
              "border-gray-200 bg-white hover:border-brand-500 dark:border-gray-800 dark:bg-gray-900";
          } else if (isCorrect) {
            cls += "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40";
          } else if (isPicked) {
            cls += "border-rose-500 bg-rose-50 dark:bg-rose-950/40";
          } else {
            cls +=
              "border-gray-200 bg-gray-50 opacity-60 dark:border-gray-800 dark:bg-gray-900";
          }
          return (
            <button
              key={key}
              onClick={() => handlePick(key)}
              disabled={!!picked}
              className={cls}
            >
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {key}
                </span>
                <span className="flex-1 text-sm text-gray-800 dark:text-gray-200">
                  {q.options[key]}
                </span>
                {picked && isCorrect && <span className="text-emerald-600">✓</span>}
                {picked && isPicked && !isCorrect && (
                  <span className="text-rose-600">✗</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="mt-5 space-y-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <span
              className={`rounded px-2 py-0.5 text-xs font-semibold ${
                picked === q.answer
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              {picked === q.answer ? "答對" : "答錯"}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              正解：{q.answer}
            </span>
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold text-gray-500">
              為什麼選 {q.answer}
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800 dark:text-gray-200">
              {q.explanation.why}
            </p>
          </div>

          {q.explanation.others &&
            Object.keys(q.explanation.others).length > 0 && (
              <div>
                <div className="mb-1 text-xs font-semibold text-gray-500">
                  其他選項為什麼錯
                </div>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {Object.entries(q.explanation.others).map(([key, text]) => (
                    <li key={key}>
                      <span className="font-semibold">{key}.</span> {text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {q.explanation.keyPoint && (
            <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
              <span className="font-semibold">🎯 考點：</span>
              {q.explanation.keyPoint}
            </div>
          )}

          <button
            onClick={handleNext}
            className="w-full rounded-lg bg-brand-600 py-3 font-semibold text-white active:scale-[.99]"
          >
            {index + 1 >= deck.length ? "完成" : "下一題"}
          </button>
        </div>
      )}
    </div>
  );
}
