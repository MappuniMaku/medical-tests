import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { IQuestion, IQuestionHandlers } from '../types';

interface IQuestionProps {
  question: IQuestion;
}

export const QuestionComponent = forwardRef<IQuestionHandlers, IQuestionProps>(
  ({ question }, ref) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { number, question: text, options, rightAnswers } = question;

    const randomOptions = useMemo(() => options.slice().sort(() => Math.random() - 0.5), [options]);

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

    useImperativeHandle(ref, () => ({
      handleAnswer: handleSubmit,
    }));

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <h4>
            {number}. {text}
          </h4>
        </div>

        <FormGroup>
          {randomOptions.map((option) => (
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
      </div>
    );
  },
);
