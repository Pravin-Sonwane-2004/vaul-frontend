import { useState } from 'react'
import './App.css'
import fetchUser from './user/fetchData';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
          <h1>Count: {count}</h1>
    {count <0 && <p>negative value</p>}
    <button onClick={() => setCount(count-1)}>increse</button>
      <button onClick={() => setCount(count+1)}>decrese</button>
      <button onClick={() => setCount(0)}>reset</button>

    </div> 
  )
}

export default App
