import { useState } from 'react'
import Button from './Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  console.log('Anecdotes array length:', anecdotes.length)

  const votes = Array(anecdotes.length).fill(0)

  console.log('Votes array', votes)
   
  const [selected, setSelected] = useState(0)

  const [voteCounts, setVoteCounts] = useState(votes)

  console.log('Vote counts state', voteCounts)

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const newVoteCounts = [...voteCounts]
    newVoteCounts[selected] += 1
    setVoteCounts(newVoteCounts)
  }

  console.log('the highest one is', Math.max(...voteCounts))


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {voteCounts[selected]} votes</p>
      <Button click={handleNextAnecdote} text="next anecdote" />
      <Button click={handleVote} text="vote" />

      <h1>Anecdote with most votes</h1>
      {anecdotes[voteCounts.indexOf(Math.max(...voteCounts))]}
    </div>
  )
}

export default App