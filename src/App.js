import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })} >INCREMENT</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} >DECREMENT</button>
        <button onClick={() => dispatch({ type: "ADD5", data: 5 })} >ADD5x</button>
      </header>
    </div>
  );
}

export default App;
