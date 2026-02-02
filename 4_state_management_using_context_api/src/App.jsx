import './App.css'
import { CounterProvider } from './Context/CounterContext'
import CounterDisplay from './Components/CounterDisplay'
import CounterControls from './Components/CounterControls'

function App() {
  return (
    <CounterProvider>
      <h1>State Management using Context API</h1>
      <p>Both components below share state via Context (no prop drilling)</p>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  )
}

export default App
