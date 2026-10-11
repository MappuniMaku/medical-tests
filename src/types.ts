export interface IOption {
  id: string;
  value: string;
}

export interface IQuestion {
  number: number;
  question: string;
  image?: string;
  options: IOption[];
  rightAnswers: string[];
  solution?: string;
  /** Если задано — вопрос с вводом слова: вместо вариантов показывается текстовое поле,
   *  ответ сверяется с этими формами (без учёта регистра, пробелов и ё/е). */
  textAnswers?: string[];
}

export interface ITopic {
  number: number;
  title: string;
  questions: IQuestion[];
}

export interface ISubject {
  id: string;
  title: string;
  topics: ITopic[];
}

export interface IQuestionHandlers {
  handleAnswer: () => boolean | undefined;
}

export type IResults = Record<number, boolean>;

export interface IResultsSummary {
  correct: number;
  wrong: number;
  total: number;
}
