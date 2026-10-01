import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Demo from './demo.jsx'
import UserForm from './form.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Demo/> */}
    <BrowserRouter>
    <UserForm/>
    </BrowserRouter>
  </StrictMode>,
)