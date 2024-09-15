import { FC, useState } from 'react';
import { IQuestion } from '../types';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';

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
      setErrorMessage('Нужно выбрать хотя бы 1 вариант');
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
        <h4>
          {number}. {question}
        </h4>
      </div>

      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={selectedAnswers.includes(option.id)}
                color="secondary"
                onChange={() => handleCheckboxChange(option.id)}
              />
            }
            label={option.value}
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
          />
        ))}
      </FormGroup>

      {errorMessage && (
        <p style={{ marginTop: 8, marginBottom: 16, color: 'red' }}>{errorMessage}</p>
      )}

      <Button color="secondary" variant="contained" style={{ marginTop: 8 }} onClick={handleSubmit}>
        Ответить
      </Button>
    </div>
  );
};

export default QuestionComponent;
