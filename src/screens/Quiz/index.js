/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../layout/QuestionWidget';
import LoadingWidget from '../../layout/LoadingWidget';
import ResultWidget from '../../layout/ResultsWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizScreen({ db }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
