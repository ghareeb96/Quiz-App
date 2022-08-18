import React, { useEffect } from 'react'
import './Start.scss'

const Start = ({ name, setName,setActivePage }) => {

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.length > 0){
            setActivePage('practice-page')
        }
    }

    useEffect(()=>{
        setName('')
    },[])

    return (
        <div id='start-page' className='page'>
            <div className="container">
                <div className="form-side">
                    <form>
                        <div className="name-input form-element">
                            <label htmlFor="name-input">Name</label>
                            <input type="text" id="name-input" value={name} onChange={handleChange} />
                        </div>
                        <button onClick={handleSubmit} type="submit" className="form-element primary-btn" id="start-btn">Let's Start</button>
                    </form>
                </div>

                <div className="description-side">
                    <h3>Practice description</h3>
                    <ul>
                        <li>
                            This practice improves your english skills by categorizing the part of speech.
                        </li>
                        <li>
                            You’ll be asked 10 questions, 10 points for each question and your goal is to score 100 points.
                        </li>
                        <li>
                            After the practice ends, you’ll be ranked among others by your final score.
                        </li>
                    </ul>
                    <h2>Good Luck</h2>
                </div>
            </div>
        </div>
    )
}

export default Start
