import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import Chat from './components/Chat';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=> {
    event.preventDefault();
    setCount((prevCount)=>prevCount+1);
  }

  useEffect(() => {
    console.log('count', count)
  }, [count])


  return (
    <>
      <div className="card">
        <Todo/>
        {/* <Chat/> */}
        <button onClick={handleClick}>
          count is {count} 
        </button>
      </div>
    </>
  )
}

export default App
