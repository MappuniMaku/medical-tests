import { FC, useState } from 'react';
import { IQuestion } from '../types';

interface QuestionProps {
  question: IQuestion;
}

const QuestionComponent: FC<QuestionProps> = ({
  question: { number, question, options, rightAnswers },
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (id: string) => {
    setErrorMessage('');
    if (selectedAnswers.includes(id)) {
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== id));
    } else {
      setSelectedAnswers([...selectedAnswers, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
      setErrorMessage('Нужно выбрать хотя бы 1 вариант.');
      setShowResult(false);
    } else {
      setErrorMessage('');
      setShowResult(true);
    }
  };

  const isCorrect = (id: string) => rightAnswers.includes(id);
  const isSelected = (id: string) => selectedAnswers.includes(id);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h3>
          {number}. {question}
        </h3>
      </div>

      <ul>
        {options.map((option) => (
          <li key={option.id} style={{ listStyleType: 'none', marginBottom: '8px' }}>
            <label
              style={{
                color: showResult
                  ? isSelected(option.id)
                    ? isCorrect(option.id)
                      ? 'green'
                      : 'red'
                    : ''
                  : '',
                border: '2px solid',
                borderColor:
                  showResult && !isSelected(option.id) && isCorrect(option.id)
                    ? 'red'
                    : 'transparent',
                padding: '5px',
                display: 'block',
              }}
            >
              <input
                type="checkbox"
                checked={selectedAnswers.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
                style={{ marginRight: '8px' }}
              />
              {option.value}
            </label>
          </li>
        ))}
      </ul>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button style={{ marginTop: 8 }} onClick={handleSubmit}>
        Ответить
      </button>
    </div>
  );
};

export default QuestionComponent;
