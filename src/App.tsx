import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main-page.tsx';
import { TopicsListPage } from './pages/topics-list-page.tsx';
import { TopicQuestionsPage } from './pages/topic-questions-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: 'topics', element: <TopicsListPage /> },
  {
    path: 'topics/:topicNumber',
    element: <TopicQuestionsPage />,
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
