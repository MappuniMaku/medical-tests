import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage, TopicQuestionsPage, TopicsListPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: 'subjects/:subject', element: <TopicsListPage /> },
  {
    path: 'subjects/:subject/topics/:topic',
    element: <TopicQuestionsPage />,
  },
]);

export const App: FC = () => <RouterProvider router={router} />;
