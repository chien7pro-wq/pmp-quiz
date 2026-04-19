import A from "./A.js";
import B from "./B.js";
import C from "./C.js";
import D from "./D.js";
import E from "./E.js";
import F from "./F.js";

export const allQuestions = [...A, ...B, ...C, ...D, ...E, ...F];

export const questionsByChapter = { A, B, C, D, E, F };

export const getQuestionById = (id) =>
  allQuestions.find((q) => q.id === id);

export const getQuestionsByChapter = (chapter) =>
  questionsByChapter[chapter] || [];
