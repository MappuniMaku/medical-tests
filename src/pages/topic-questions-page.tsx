import { FC, useState } from 'react';
import QuestionComponent from '../components/question.tsx';
import { data } from '../data.ts';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export const TopicQuestionsPage: FC = () => {
  const { topicNumber } = useParams();

  // Состояние для текущего индекса вопроса
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const targetTopic = data.find((item) => item.number === Number(topicNumber));

  if (!targetTopic) {
    return <div>Тема не найдена</div>;
  }

  const { title, questions } = targetTopic;

  // Функция для перехода к следующему вопросу
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Функция для перехода к предыдущему вопросу
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          startIcon={<ArrowBack />}
          component={Link}
          to="/topics"
          style={{ verticalAlign: 'middle', fontSize: 16, lineHeight: '1px' }}
        >
          К списку тем
        </Button>
      </div>
      <h3>
        Тема № {topicNumber}. {title}
      </h3>
      {/* Рендер текущего вопроса */}
      <div style={{ marginTop: 24 }}>
        <QuestionComponent key={currentQuestionIndex} question={questions[currentQuestionIndex]} />
      </div>

      {/* Кнопки для навигации между вопросами */}
      <div style={{ display: 'flex', gap: 16, marginTop: '20px' }}>
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Назад
        </Button>
        <Button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          Вперед
        </Button>
      </div>
    </div>
  );
};
