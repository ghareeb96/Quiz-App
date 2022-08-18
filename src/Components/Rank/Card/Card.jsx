import React from 'react'
import { ReactComponent as Success } from './success.svg'
import { ReactComponent as Fail } from './fail.svg'
const Card = ({ score, rank, name, message, isSucceed }) => {



    return (
        <>
            <div className={isSucceed ? "score-icon-container success-container" : "score-icon-container fail-container"}>
                {isSucceed? 
                <Success className='icon'/>
                :
                <Fail className='icon'/>    
            }
            </div>

            <div className="messages">
                <div className="final-message">
                    <h1>{message}{name}</h1>
                </div>
                <div className="score-message">
                    <h3>You scored {score} out of 100</h3>
                </div>
                <div className="rank-message">
                    <h3>Your rank is {rank}</h3>
                </div>
            </div>

            
        </>
    )
}

export default Card
