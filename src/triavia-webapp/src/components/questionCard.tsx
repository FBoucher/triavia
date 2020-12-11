import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNb: number;
    totalQuestions: number;
}

const QuestionCard:React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNb,
    totalQuestions
}) => (

    <div>
        <p className='number'>
            Question: {questionNb} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML = {{ __html: question}} ></p>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML = {{ __html: answer}}>
                        </span>
                    </button>
                </div>
            ))}
        </div>
    </div>
);
 
export default QuestionCard;