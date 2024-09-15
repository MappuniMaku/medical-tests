import { FC } from 'react';
import { Link } from 'react-router-dom';

export const MainPage: FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Тесты по топке</h2>
      <Link to="/topics" style={{ fontSize: 20 }}>
        К списку тем
      </Link>
    </div>
  );
};
