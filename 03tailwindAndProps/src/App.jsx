import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS & Props</h1>
      <Card name='Belba' para='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?' btntext='View Profile' />
    </>
  )
}

export default App
