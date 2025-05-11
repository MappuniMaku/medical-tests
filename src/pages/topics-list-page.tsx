import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BackButton, NotFound } from '../components';
import { subjects } from '../data';

export const TopicsListPage: FC = () => {
  const { subject } = useParams();

  const targetSubject = subjects.find((item) => item.id === subject);

  if (targetSubject === undefined) {
    return <NotFound />;
  }

  const { id, title, topics } = targetSubject;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <BackButton link="/" text="На главную" />
      </div>
      <h2 style={{ marginBottom: 24 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {topics.map(({ number, title }) => (
          <div key={number}>
            <Link to={`/subjects/${id}/topics/${number}`}>
              {number}. {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
