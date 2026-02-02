import { useState } from 'react'

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount)

  return (
    <section className="counter">
      <h2>Counter</h2>
      <p className="counterValue">{count}</p>

      <div className="row">
        <button type="button" onClick={() => setCount((c) => c - step)}>
          -{step}
        </button>
        <button type="button" onClick={() => setCount((c) => c + step)}>
          +{step}
        </button>
        <button type="button" onClick={() => setCount(initialCount)}>
          reset
        </button>
      </div>
    </section>
  )
}

export default Counter
