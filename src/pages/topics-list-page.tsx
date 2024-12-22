import { FC } from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';

export const TopicsListPage: FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Список тем</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map(({ number, title }) => (
          <div key={number}>
            <Link to={`/topics/${number}`}>
              {number}. {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
