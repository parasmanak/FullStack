import { useCounter } from '../Context/CounterContext'

function CounterDisplay() {
  const { count } = useCounter()

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <p>This component only reads the count from context</p>
    </div>
  )
}

export default CounterDisplay
