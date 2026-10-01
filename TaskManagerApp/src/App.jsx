import './App.css'
import { Route , Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/../pages/Home'
import About from './components/../pages/About'
import TaskForm from './components/TaskForm'
import TaskItems from './components/TaskItems'

function App() {


  return (
    <>
    <Header/>
    <Home/>
    <About/>
     <Routes>
      <Route path='/' element={<TaskForm/>}/>
      <Route path='/' element={<TaskItems/>}/>
   
     </Routes>
    </>
  )
}

export default App
