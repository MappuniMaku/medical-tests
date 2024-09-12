import { FC, useState } from 'react';
import QuestionComponent from './components/question';
import { data } from './data.ts';

const App: FC = () => {
  // Состояние для текущего индекса вопроса
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Функция для перехода к следующему вопросу
  const handleNext = () => {
    if (currentQuestionIndex < data.length - 1) {
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
    <div
      style={{
        padding: 24,
      }}
    >
      <h2>
        Тема № 2. Топография грудной клетки и органов грудной полости. Операции на грудной клетке и
        органах грудной полости
      </h2>
      {/* Рендер текущего вопроса */}
      <div style={{ marginTop: 40 }}>
        <QuestionComponent key={currentQuestionIndex} question={data[currentQuestionIndex]} />
      </div>

      {/* Кнопки для навигации между вопросами */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Назад
        </button>
        <button onClick={handleNext} disabled={currentQuestionIndex === data.length - 1}>
          Вперед
        </button>
      </div>
    </div>
  );
};

export default App;
