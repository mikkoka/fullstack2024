import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick = {onClick}>{text}</button>
  )
}   

const Anecdote = ({anecdotes, votes, selected, title}) => {
  return (
    <>
    <h2>{title}</h2>
    <p>
      {anecdotes[selected]}  ({votes[selected]} votes)
    </p>
    </>

  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * 8))
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const [most_voted, setMostVoted] = useState(0);
  
  const updateVotes = () => {
    const copy = [...votes]
    copy[selected]++
    const votes_max_index = votes.reduce((a, b, i) => votes[i] > votes[a] ? i : a)
    if (copy[selected] > votes[votes_max_index]) setMostVoted(selected)
    setVotes(copy)
  }

  const nextButton = () => {
     setSelected(Math.floor(Math.random() * 8))
  }

  return (
    <div>
      <Button text="next anecdote" onClick={nextButton}/>
      <Anecdote anecdotes = {anecdotes} selected = {selected} votes = {votes} title="Anecdote of the day"/>
      <Button onClick={updateVotes} text="vote" />
      <Anecdote anecdotes = {anecdotes} selected = {most_voted} votes = {votes} title="Most popular anecdote"/>
    </div>
  )
}

export default App