import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  
  const handleClickDecrement = () => {
    setCount(count-1)
  }

  const handleClickIncreament =() => {
    setCount(count+1)
  }

  const setToZero =() => {
    setCount(0)
  }
  return (
    <div className="App">
      <h1 className='heading'>Counter</h1>
     <button onClick={handleClickDecrement} className='btn'>-</button>
     <button className='btn'>{count}</button>
     <button onClick={handleClickIncreament} className='btn'>+</button>
     <button onClick={setToZero} className='btn'>setToZero</button>
    </div>
  );
}

export default App;
