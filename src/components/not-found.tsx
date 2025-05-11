import { FC } from 'react';
import { BackButton } from './back-button';

export const NotFound: FC = () => (
  <div>
    <p style={{ marginBottom: 24, fontSize: 20 }}>К сожалению, страница не найдена</p>
    <BackButton link="/" text="На главную" />
  </div>
);
