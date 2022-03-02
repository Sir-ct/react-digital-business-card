import { useState } from 'react'
import Details from "../components/Details"
import About from '../components/About'
import Interests from '../components/Inerests'
import Footer from '../components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Details />
    <About />
    <Interests />
    <Footer />
    </div>
  )
}

export default App
