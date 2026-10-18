import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  let average;
  if (all > 0) {
     average = (good - bad) / all;
  }else {
     average = 0;
  }

  let positive;
  if (all > 0) {
     positive = (good / all) * 100;
  }else {
     positive = 0;
  }
  

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <Statistics text='good' value={good} />
          <Statistics text='good' value={good} />
          <Statistics text='neutral' value={neutral} />
          <Statistics text='bad' value={bad} />
          <Statistics text='all' value={all} />
          <Statistics text='average' value={average} />
          <Statistics text='positive' value={positive} />
        </div>)
      }
    </div>
  )
}

export default App