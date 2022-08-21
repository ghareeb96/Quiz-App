import React, { useState } from 'react';
import './App.scss';
import Practice from './Components/Practice/Practice';
import Rank from './Components/Rank/Rank';
import Start from './Components/Start/Start';
import { ReactComponent as QuestionMark } from './questionMark.svg'

function App() {
  const [name, setName] = useState('')
  const [activePage, setActivePage] = useState('start-page')
  const [score, setScore] = useState(0)


  return (
    <div className="App">
      <div className="background">
        <QuestionMark className='icon watermark' />
      </div>

      {
        activePage === 'start-page' ?
          <Start
            name={name}
            setName={setName}
            setActivePage={setActivePage}
          />

          : activePage === 'practice-page' ?
            <Practice
              score={score}
              setScore={setScore}
              setActivePage={setActivePage}

            />
            :
            <Rank 
            setActivePage={setActivePage}
            score={score}
            name={name}
            
            />

      }



    </div>
  );
}

export default App;
