import { ITopic } from '../types.ts';
import { topic2 } from './2.ts';
import { topic3 } from './3.ts';
import { topic4 } from './4.ts';
import { topic5 } from './5.ts';

export const data: ITopic[] = [topic2, topic3, topic4, topic5];

// const q = [];
// const a = [];
// const result = q.map((question) => ({
//   ...question,
//   rightAnswers: a.find((answers) => answers.number === question.number).rightAnswers,
// }));
