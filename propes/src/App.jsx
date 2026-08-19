
import './App.css'
import Home from "./componets/Home";
import About from "./componets/About";

function App() {
  

  return (
   <>
    <Home data1="data1"  data3="data3"/>

    <About fname="shruti" lname="dhanani" age={18}/>
   </>
  )
}

export default App
