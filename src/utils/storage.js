const KEYS = {
  PROGRESS: "pmp_progress_v1",
  WRONG: "pmp_wrong_v1",
  SETTINGS: "pmp_settings_v1",
};

const safeParse = (raw, fallback) => {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const loadProgress = () =>
  safeParse(localStorage.getItem(KEYS.PROGRESS), {});

export const saveProgress = (progress) => {
  localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
};

export const loadWrong = () =>
  safeParse(localStorage.getItem(KEYS.WRONG), []);

export const saveWrong = (wrongIds) => {
  localStorage.setItem(KEYS.WRONG, JSON.stringify(wrongIds));
};

export const loadSettings = () =>
  safeParse(localStorage.getItem(KEYS.SETTINGS), {
    shuffleOptions: false,
    showExplanationImmediately: true,
  });

export const saveSettings = (settings) => {
  localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
};

export const recordAnswer = (questionId, chapter, isCorrect) => {
  const progress = loadProgress();
  const prev = progress[questionId] || {
    chapter,
    attempts: 0,
    correct: 0,
    lastCorrect: false,
  };
  progress[questionId] = {
    chapter,
    attempts: prev.attempts + 1,
    correct: prev.correct + (isCorrect ? 1 : 0),
    lastCorrect: isCorrect,
    lastAnsweredAt: Date.now(),
  };
  saveProgress(progress);

  const wrong = new Set(loadWrong());
  if (isCorrect) {
    wrong.delete(questionId);
  } else {
    wrong.add(questionId);
  }
  saveWrong([...wrong]);
};

export const resetAll = () => {
  localStorage.removeItem(KEYS.PROGRESS);
  localStorage.removeItem(KEYS.WRONG);
};

export const getChapterStats = (chapterId, allQuestions) => {
  const progress = loadProgress();
  const chapterQuestions = allQuestions.filter((q) => q.chapter === chapterId);
  const total = chapterQuestions.length;
  let answered = 0;
  let correct = 0;
  chapterQuestions.forEach((q) => {
    const p = progress[q.id];
    if (p && p.attempts > 0) {
      answered += 1;
      if (p.lastCorrect) correct += 1;
    }
  });
  return {
    total,
    answered,
    correct,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    coverage: total > 0 ? Math.round((answered / total) * 100) : 0,
  };
};
