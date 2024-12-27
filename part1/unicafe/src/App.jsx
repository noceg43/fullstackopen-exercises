import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text,value}) => <tr>
<td>{text}</td>
<td>{value}</td>
</tr>

const Statistics = ({good, neutral, bad}) => {

  if (good == 0 && neutral == 0 && bad == 0) {
    return <p>No feedback given</p>
  }

  const total = good + neutral + bad

  const average = () => {
    let totalWithWeights = 0

    for (let i = 0; i < good; i++) {
      totalWithWeights ++
    }
    for (let i = 0; i < bad; i++) {
      totalWithWeights--
    }
    
    return totalWithWeights / total
  }

  const positivePercentage = () => good * 100 / total

 return <table><tbody>
 <StatisticLine text="good" value={good}></StatisticLine>
 <StatisticLine text="neutral" value={neutral}></StatisticLine>
 <StatisticLine text="bad" value={bad}></StatisticLine>
 <StatisticLine text="all" value={total}></StatisticLine>
 <StatisticLine text="average" value={average()}></StatisticLine>
 <StatisticLine text="positive" value={positivePercentage().toString() + "%"}></StatisticLine></tbody></table>
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <>
      <Button handleClick={() => setGood(good + 1) } text='good'></Button>
      <Button handleClick={() => setNeutral(neutral + 1) } text='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1) } text='bad'></Button>
      </>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}> </Statistics>

    </>
      

  )
}

export default App