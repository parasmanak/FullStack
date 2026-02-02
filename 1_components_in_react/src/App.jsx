import './App.css'

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
    <h1><Header /></h1>
    <div style={{ display: "flex", gap: "20px" }}>
      <Home />  <About /> <Contact />
    </div>
    <h1><Footer /></h1>
    </>
  )
}

export default App
