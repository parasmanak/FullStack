import { useCounter } from '../Context/CounterContext'

function CounterControls() {
  const { increment, decrement, reset } = useCounter()

  return (
    <div className="card">
      <h3>Controls</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>This component only accesses the actions from context</p>
    </div>
  )
}

export default CounterControls
