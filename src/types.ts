export interface IOption {
  id: string;
  value: string;
  /** Для вопросов на соответствие: номер пункта из matchItems (1-based), которому
   *  соответствует этот вариант. Не задано — вариант лишний (дистрактор). */
  match?: number;
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
  /** Если задано — вопрос на соответствие: левая колонка пунктов (1-based по порядку).
   *  У каждого варианта проставляется номер соответствующего пункта (см. IOption.match). */
  matchItems?: string[];
  /** Если true — вопрос на последовательность: нужно проставить вариантам правильный
   *  порядок (1..N). Правильный номер каждого варианта — в IOption.match. */
  sequence?: boolean;
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
