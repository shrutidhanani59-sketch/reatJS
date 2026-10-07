import { increment , decrement , reset , power } from "./redux/Action"

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


function App() {
  const Dispatch = useDispatch();

  const count = useSelector((state)=>{
    return state.count
  })
  return (
    <>
    <h1>Count : {count}</h1>

    <button onClick={()=>{Dispatch(increment())}}>Increment</button>
    <button onClick={()=>{Dispatch(decrement())}}>Decriment</button>
    <button onClick={()=>{Dispatch(reset())}}>Reset</button>
    <button onClick={()=>{Dispatch(power())}}>Power</button>
    
    </>
  )
}

export default App
