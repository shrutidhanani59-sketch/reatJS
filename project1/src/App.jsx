import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const datacss = {
    color:"blue"
  }

  return (
    <>
    <h1>BIODATA</h1>
    <h2>First name : Shruti</h2>
    <h3>Last name : Dhanani</h3>
    <h4>Gender : Female</h4>
    <h5 style={datacss}>Date of Birth : 13/01/2008</h5>
    <h6 style={{color:"red"}}>Cource : Full stack web development</h6>

    </>

  )
}

export default App