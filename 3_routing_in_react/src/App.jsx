import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <h1>Routing in React</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
