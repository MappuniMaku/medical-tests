export interface IOption {
  id: string;
  value: string;
}

export interface IQuestion {
  number: number;
  question: string;
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
  handleAnswer: () => void;
}
