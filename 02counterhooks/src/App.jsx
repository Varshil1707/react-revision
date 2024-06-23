import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const increaseHandler = () => {
    setCount(prev => prev + 5)
  }
  const decreaseHandler = () => {
    if ( count === 0) return
    setCount(prev => prev - 5)
  }

  return (
    <>
    <h1>Counter | Why we need ReactJs</h1>
    <h2>Counter : {count}</h2>
    <button onClick={increaseHandler} >Increase Value</button>
    <br />
    <button onClick={decreaseHandler} disabled={count === 0} >Decrease Value</button>
    </>
  )
}

export default App
