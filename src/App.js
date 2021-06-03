import React, {useState} from 'react';
import './App.css';

function App() {
  const questions = [
		{
			questionText: 'Who is the strongest avenger??',
			answerOptions: [
				{ answerText: 'Captain America', isCorrect: false },
				{ answerText: 'Hulk', isCorrect: true },
				{ answerText: 'Thor', isCorrect: false },
				{ answerText: 'Captain Marvel', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the most skilled fighter of the Avengers?',
			answerOptions: [
				{ answerText: 'Black Widow', isCorrect: true },
				{ answerText: 'Hawkeye', isCorrect: false },
				{ answerText: 'Captain America', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the King of Wakanda?',
			answerOptions: [
				{ answerText: 'TChalla', isCorrect: true },
				{ answerText: 'Hawkeye', isCorrect: false },
				{ answerText: 'Shuri', isCorrect: false },
				{ answerText: 'Nick Fury', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the tactical leader of the Avengers?',
			answerOptions: [
				{ answerText: 'Iron Man', isCorrect: false },
				{ answerText: 'Spider man', isCorrect: false },
				{ answerText: 'Doctor Strange', isCorrect: false },
				{ answerText: 'Captain America', isCorrect: true },
			],
		},
	];

  //variables need for question count, user score and correct answers 
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

 //conditionals 
 const handleAnsBtnClick = (isCorrect) => {
   if(isCorrect){
     setScore(score + 1)
   }

   const nextQuestion = currentQuestion +1;
   if(nextQuestion < questions.length) {
     setCurrentQuestion(nextQuestion);
   }else{
     setShowScore(true);
   }
 };

  return (
    
    <div className="app">
     { showScore ? (<div className='score-section'> You scored {score} out of {questions.length}</div>) : (
      <div> 
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion}</span>/{questions.length}
          </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (<button onClick={() => handleAnsBtnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
            </div>
        </div>
      </div>
     )}
    </div>
  );
}

export default App;
