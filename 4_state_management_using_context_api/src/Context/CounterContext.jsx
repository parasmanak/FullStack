import { createContext, useContext, useState } from 'react'

// 1. Create the Context
const CounterContext = createContext()

// 2. Create a Provider component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

// 3. Custom hook to use the context
export function useCounter() {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}
