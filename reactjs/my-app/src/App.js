import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleClick = () => {

    setCount((count) => count + 1)
    console.log(count, setCount)
    setCount((count) => count + 1)
    console.log(count, setCount)
    setCount((count) => count + 1)
    console.log(count, setCount)
    setCount((count) => count + 1)
    console.log(count, setCount)

    setCount2(count2 + 1)
    console.log(count2, setCount2)
    setCount2(count2 + 1)
    console.log(count2, setCount2)
    setCount2(count2 + 1)
    console.log(count2, setCount2)
    setCount2(count2 + 1)
    console.log(count2, setCount2)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>
          count is {count} <br />
          count2 is {count2}
        </button>
    </div>
  );
}

export default App;
