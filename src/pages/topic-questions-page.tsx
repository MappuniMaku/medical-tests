import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button, colors, Tooltip } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, NotFound, QuestionComponent } from '../components';
import { subjects } from '../data';
import { IQuestionHandlers } from '../types';

export const TopicQuestionsPage: FC = () => {
  const { subject, topic } = useParams();

  const targetSubject = subjects.find((item) => item.id === subject);
  const targetTopic = targetSubject?.topics.find((item) => item.number === Number(topic));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questionRef = useRef<IQuestionHandlers>(null);

  if (targetSubject === undefined || targetTopic === undefined) {
    return <NotFound />;
  }

  const { number, title, questions } = targetTopic;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = () => {
    questionRef.current?.handleAnswer();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <BackButton link={`/subjects/${targetSubject.id}`} text={targetSubject.title} />
      </div>
      <Tooltip title={title} arrow>
        <h3
          style={{
            whiteSpace: 'nowrap',
            maxWidth: '100%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          Тема № {number}. {title}
        </h3>
      </Tooltip>
      <div style={{ marginTop: 24 }}>
        <QuestionComponent
          key={currentQuestionIndex}
          ref={questionRef}
          question={questions[currentQuestionIndex]}
        />
      </div>
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'space-between',
          width: 'calc(100% + 32px)',
          maxWidth: 500,
          margin: 'auto -16px 0',
          padding: 4,
          backgroundColor: colors.grey['300'],
        }}
      >
        <Button
          style={{ width: 64, height: 50, backgroundColor: colors.blue['100'] }}
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowBack />
        </Button>
        <Button variant="contained" color="secondary" onClick={handleAnswer}>
          Ответить
        </Button>
        <Button
          style={{ width: 64, height: 50, backgroundColor: colors.blue['100'] }}
          variant="outlined"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <ArrowForward />
        </Button>
      </div>
    </div>
  );
};
