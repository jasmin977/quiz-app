
import './App.css';
import React, { useState } from 'react';
import questions from './data.json';


export default function App() {
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(true);
	const [score, setScore] = useState(0);
  const [myanwser, setAnwser] = useState();
  const restart=()=>{
    setScore(0)
    setCurrentQuestion(0);
    setShowScore(false);
    setStart(true)
    
  }

 
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
      <div className='header-section'>
      <img className='Logo' src={require('./cyberlogo.png')} alt="Logo" />
      <h3>Quiz Application</h3>
      </div>

      {start ? (
        <div className='start-section'>
           <span>	Ready to start?</span>
         <button className='next_button' onClick={() => setStart(false)}>Start</button> 

          </div>
        
      )
      :(

<>
{showScore ? (
			<>	<div className='score-section'>
              <img className='crown' src={require('./crown.png')} alt="Logo" />

				    <span>	You've completed the Quiz</span>
          <span>	You got {score} out of {questions.length}</span>
          <button className='next_button' onClick={() => restart()}>Restart</button>

</div>
        
       
        
      
      </>
			) : (
				<div className='body-section'>
					<div className='question-section'>
						
						<div className='question-text'> {currentQuestion + 1} .{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
              
            <button className='buttons' key={answerOption.index} onClick={() => setAnwser(answerOption)}>{answerOption.answerText}</button>

						))}
					</div>
				</div>
			)}
      	{showScore ? (<>
        </>):
        (
      <div className='footer-section'>
      <div className='question-count'>
							<span>{currentQuestion + 1} of {questions.length} Questions</span>
						</div>
             <button className='next_button' onClick={() => handleAnswerOptionClick(myanwser.isCorrect)}>Next</button> 
      </div>)}</>
      )}
		
		</div>
	);
}