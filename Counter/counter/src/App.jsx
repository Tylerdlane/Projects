import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="count">
        <h1>Counter</h1>
        <h1>
          {count}
        </h1>
      </div>
      <div class="container">
        <button id="minus" onClick={() => setCount((count) => count - 1)}>Minus -1</button>
        <button id="reset" onClick={() => setCount((count) => count - count)}>Reset</button>
        <button id="plus" onClick={() => setCount((count) => count + 1)}>Plus +1</button>
      </div>
    </>
  )
}

export default App
