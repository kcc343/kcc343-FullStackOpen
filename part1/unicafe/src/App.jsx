import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => {
  console.log(props)
  return (
    <p>
      {props.text} {props.result}
    </p>  
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Give Feedback</h1>
      <Display text="good" result={good} />
      <Display text="neutral" result={neutral} />
      <Display text="bad" result={bad} />
    </div>
  )
}

export default App
