import React, { useEffect, useState } from 'react'
import Loading from '.././Loading/Loading';
import axios from 'axios'
import Card from './Card/Card'
import './Rank.scss'


const Rank = ({ score, setActivePage, name }) => {
    const [rank, setRank] = useState(null)

    useEffect(() => {
        axios.post('https://ghareeb-quiz-app.herokuapp.com/rank',
            { score }
        )
            .then(response => setRank(response.data))
    }, [])

    return (
        <>
            {
                rank === null ?
                    <Loading />
                    :
                    <div id='rank-page' className='page'>
                        <div className="container">

                            {rank === 100 ?
                                <Card
                                    score={score}
                                    rank={rank}
                                    name={name}
                                    message='Well Done '
                                    isSucceed={true}
                                />
                                :
                                <Card
                                    score={score}
                                    rank={rank}
                                    name={name}
                                    message='Keep practicing '
                                    isSucceed={false}
                                />

                            }
                            <div className="action-btns">
                                <button className="primary-btn" onClick={() => setActivePage('practice-page')}>Try Again</button>
                                <button className="secondary-btn" onClick={() => setActivePage('start-page')}>Finish practice</button>
                            </div>
                        </div>

                    </div>

            }
        </>
    )
}

export default Rank
