import { Checkbox, FormControlLabel, FormGroup, MenuItem, Select } from '@mui/material';
import { forwardRef, useImperativeHandle, useMemo, useState, useEffect } from 'react';
import { IQuestion, IQuestionHandlers, IResults } from '../types';

interface IQuestionProps {
  questions: IQuestion[];
  currentQuestionIndex: number;
  results: IResults;
  setCurrentQuestionIndex: (index: number) => void;
}

export const QuestionComponent = forwardRef<IQuestionHandlers, IQuestionProps>(
  ({ questions, currentQuestionIndex, results, setCurrentQuestionIndex }, ref) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);

    const { options, rightAnswers, image } = questions[currentQuestionIndex];

    useEffect(() => {
      setImageLoaded(false);
    }, [image]);

    const randomOptions = useMemo(() => options.slice().sort(() => Math.random() - 0.5), [options]);

    const handleCheckboxChange = (id: string) => {
      setErrorMessage('');
      if (selectedAnswers.includes(id)) {
        setSelectedAnswers(selectedAnswers.filter((answer) => answer !== id));
      } else {
        setSelectedAnswers([...selectedAnswers, id]);
      }
    };

    const isCorrect = (id: string) => rightAnswers.includes(id);
    const isSelected = (id: string) => selectedAnswers.includes(id);

    const handleSubmit = (): boolean | undefined => {
      if (selectedAnswers.length === 0) {
        setErrorMessage('Нужно выбрать хотя бы 1 вариант');
        setShowResult(false);
      } else {
        setErrorMessage('');
        setShowResult(true);
        return selectedAnswers.length === rightAnswers.length && selectedAnswers.every(isCorrect);
      }
    };

    useImperativeHandle(ref, () => ({
      handleAnswer: handleSubmit,
    }));

    return (
      <div>
        <Select
          variant="outlined"
          value={currentQuestionIndex}
          sx={{
            '& .MuiSelect-select.MuiInputBase-input': {
              whiteSpace: 'normal',
              lineHeight: 1.3,
              py: 1.5,
            },
          }}
          onChange={(e) => setCurrentQuestionIndex(Number(e.target.value))}
        >
          {questions.map((item) => {
            const id = item.number - 1;
            return (
              <MenuItem
                key={id}
                value={id}
                sx={{
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}
              >
                <span>
                  <span
                    style={
                      results[id] !== undefined
                        ? {
                            outlineWidth: 2,
                            outlineStyle: 'solid',
                            outlineColor: results[id] ? 'green' : 'red',
                          }
                        : undefined
                    }
                  >
                    {item.number}.
                  </span>{' '}
                  {item.question}
                </span>
              </MenuItem>
            );
          })}
        </Select>

        {image && (
          <div
            style={{
              margin: '12px 0',
              background: imageLoaded ? 'none' : '#e0e0e0',
              minHeight: imageLoaded ? 0 : 200,
              borderRadius: 4,
              display: 'inline-block',
              width: '100%',
              animation: imageLoaded ? 'none' : 'pulse 1.4s ease-in-out infinite',
            }}
          >
            <img
              src={image}
              alt=""
              onLoad={() => setImageLoaded(true)}
              style={{
                maxWidth: '100%',
                display: 'block',
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 3s',
              }}
            />
          </div>
        )}

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
              label={<span style={{ whiteSpace: 'pre-wrap' }}>{option.value}</span>}
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
