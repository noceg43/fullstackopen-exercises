import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Anecdote = ({anecdote, votes}) => <>{anecdote}
        <p>has {votes} votes</p></>


const indexOfMax = (list) => {
  const localList = [...list]
  let max = list[0]
  for (let index in list) {
    const item = list[index]
    if (item > max)
      max = item
  }
  return localList.indexOf(max)
}

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

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const randomAnecdote = () => Math.floor(Math.random() * anecdotes.length)

  const onNextAnecdote = () => {
    const index = randomAnecdote()
    setSelected(index)
  }

  const onVote = (anedcdote) => {
    const index = anecdotes.indexOf(anedcdote)
    const newVotes = [...votes]
    newVotes[index]++
    setVotes(newVotes)
  }

  const anecdoteSelected = anecdotes[selected]

  const voteSelected = votes[selected]

  const mostVotedIndex = indexOfMax(votes)
  

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote anecdote={anecdoteSelected} votes={voteSelected}></Anecdote>
        <Button handleClick = {() => onVote(anecdoteSelected)} text="vote"></Button>
        <Button handleClick = {onNextAnecdote} text="next anecdote"></Button>
        <h1>Anecdote with most votes</h1>
        <Anecdote anecdote={anecdotes[mostVotedIndex]} votes={votes[mostVotedIndex]}></Anecdote>

      </div>
    </div>
  )
}

export default App