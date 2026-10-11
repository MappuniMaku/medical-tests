import { ISubject } from '../types';
import { biology } from './biology';
import { epidemiology } from './epidemiology';
import { ozz } from './ozz';
import { topka } from './topka';

export const subjects: ISubject[] = [
  {
    id: 'epidemiology',
    title: 'Общая эпидемиология',
    topics: epidemiology,
  },
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
