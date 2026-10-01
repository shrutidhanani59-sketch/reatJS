
import { Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import Register from './Register.jsx'

function App() {
  

  return (
   <>
   <Header/>

   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>

   </>
  )
}

export default App
