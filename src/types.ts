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
