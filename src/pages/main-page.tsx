import { FC } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data';

export const MainPage: FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Медицинские тесты</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {subjects.map(({ id, title }) => (
          <div key={id}>
            <Link to={`/subjects/${id}`}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
