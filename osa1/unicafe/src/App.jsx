import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if((good + neutral + bad) == 0)
    return (
    <>
      <p>Klikkaa napeista antaaksesi palautetta.</p>
    </>
    )
  return (
    <>
      <h1>Statistics</h1>
      <table>
      <StatisticsLine text = "Good" value = {good} />
      <StatisticsLine text = "Neutral" value = {neutral} />
      <StatisticsLine text = "Bad" value = {bad} />
      <StatisticsLine text = "All" value = {good + neutral + bad} />
      <StatisticsLine text = "Average" value = {(good - bad) / (good + neutral + bad)} />
      <StatisticsLine text = "Positive" value = {(good + neutral)/(good + bad + neutral)} />
      </table>
    </>
  )

}

const Button = (props) => { 
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tr><td>{text}</td> <td>{value}</td></tr>
    </>
  )
}

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Feedback</h1>
      <Button handleClick = {handleGoodClick} text = "Good" />
      <Button handleClick = {handleNeutralClick} text = "Neutral" />
      <Button handleClick = {handleBadClick} text = "Bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App



