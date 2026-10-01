import { useState } from 'react'
import './App.css'

function App() {

  return (
   <>
   <p>Count : {count}</p>
    <button onClick={()=>setCount(count+1)}>Count</button>
    <button onClick={()=>setCount(count-1)}>Count2</button>
    <button onClick={()=>setCount(0)}>0</button>
   </>
  )
}

export default App
