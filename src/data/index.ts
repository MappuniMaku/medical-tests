import { ISubject } from '../types';
import { biology } from './biology';
import { ozz } from './ozz';
import { topka } from './topka';

export const subjects: ISubject[] = [
  {
    id: 'topka',
    title: 'Топографическая анатомия',
    topics: topka,
  },
  {
    id: 'ozz',
    title: 'ОЗЗ',
    topics: ozz,
  },
  {
    id: 'biology',
    title: 'Биология',
    topics: biology,
  },
];
