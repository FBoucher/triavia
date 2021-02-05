import React from 'react';
//Types
import { AnswerObject } from '../App';
//Styles
import { Wrapper, ButtonWrapper } from './questionCard.styles';

type Props = {
    category: string;
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNb: number;
    totalQuestions: number;
}

const QuestionCard:React.FC<Props> = ({
    category,
    question,
    answers,
    callback,
    userAnswer,
    questionNb,
    totalQuestions
}) => (

    <Wrapper>
        <p className='number'>
            Question: {questionNb} / {totalQuestions}
        </p>
        <h4 className='category'> { category } </h4>
        <p dangerouslySetInnerHTML = {{ __html: question}} ></p>
        <div>
            {answers.map(answer => (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={ userAnswer ? true: false } value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML = {{ __html: answer}}>
                        </span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);
 
export default QuestionCard;