import React, { useState, useEffect } from 'react'
import Loading from '.././Loading/Loading';
import axios from 'axios'
import { ReactComponent as Arrow } from './arrow.svg'

import './Practice.scss'

const Practice = ({score, setScore, setActivePage}) => {
    const [words, setWords] = useState(null)
    const [activeWord, setActiveWord] = useState(null)
    const [progress, setProgress] = useState(1)
    const [answerFeedback, setAnswerFeedback] = useState('')
    const answers = ['verb', 'noun', 'adverb', 'adjective']

    const validateAnswer = (e) => {
        const btns = document.querySelectorAll('.answer-option')
        btns.forEach(btn => {
            btn.style.pointerEvents = "none"
        })
        setTimeout(() => {
            btns.forEach(btn => {
                btn.style.pointerEvents = "all"
            })
        }, 3000)


        e.target.value === activeWord.pos ?
            rightAnswer(e.target)
            :
            wrongAnswer(e.target)
    }

    const nextQuestion = () => {
        if (words.length > progress ) {
            setActiveWord(words[progress])
            setProgress(progress + 1)
        } else {
            setActivePage('rank-page')
        }

    }

    const rightAnswer = (btn) => {
        setScore(score + 10)
        btn.classList.add('correct-answer')
        setAnswerFeedback('Correct')
        setTimeout(() => {
            btn.classList.remove('correct-answer')
            nextQuestion()
            setAnswerFeedback('')

        }, 3000)
    }

    const wrongAnswer = (btn) => {
        btn.classList.add('incorrect-answer')
        setAnswerFeedback('Incorrect')

        setTimeout(() => {
            btn.classList.remove('incorrect-answer')
            nextQuestion()
            setAnswerFeedback('')

        }, 3000)
    }



    useEffect(() => {
        const getWords = () => {
            axios.get('https://ghareeb-quiz-app.herokuapp.com/practice')
                .then(data => {
                    setWords(data.data)
                    setActiveWord(data.data[0])
                })
        }
        setProgress(1)
        setScore(0)
        getWords()
    }, [])

    return (
        <>
            {
                activeWord?.pos ?
                    <div id='practice-page' className='page'>
                        <div className="container">
                            <div className="progress-bar">
                                <div className="progress-bar-inner" style={{ width: `${progress * 10}%` }}>

                                </div>
                            </div>

                            <div className="question">
                                <div className="question-container">
                                    <div className="question-header">
                                        <h5>Please choose the suitable category for this word</h5>
                                    </div>
                                    <h2>{activeWord.word}</h2>
                                </div>

                                <div className="answers">
                                    {
                                        answers.map((answer, index) => (
                                            <button key={index} className="answer-option" onClick={validateAnswer} value={answer}>
                                                <Arrow className='icon' />
                                                <h4>{answer}</h4>
                                            </button>
                                        ))
                                    }
                                </div>
                                <div className={answerFeedback ==='Correct' ? 'answer-feedback correct-feedback' : 'answer-feedback incorrect-feedback'}>
                                    <h2>{answerFeedback}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading />
            }

        </>

    )
}

export default Practice
