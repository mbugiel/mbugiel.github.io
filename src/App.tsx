import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://panel.managemate.pl" target="_blank">
          <img src={"https://panel.managemate.pl/img/Managemate_logo_v3.png"} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>First React Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
