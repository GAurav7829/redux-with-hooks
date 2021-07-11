import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const sub5 = () => {
    dispatch({
      type: "SUB5",
      data: 5
    })
  }
  const [input, setInput] = useState(0);
  const addInput = () => {
    dispatch({
      type: "ADD5",
      data: parseInt(input)
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })} >INCREMENT</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} >DECREMENT</button>
        <button onClick={() => dispatch({ type: "ADD5", data: 5 })} >ADD5</button>
        <button onClick={sub5}>SUB5</button>
        <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addInput}>Add {input}</button>
      </header>
    </div>
  );
}

export default App;
