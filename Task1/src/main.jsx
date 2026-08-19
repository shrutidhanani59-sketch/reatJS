import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const product =[
      {
        company : "Dell",
      model : "dell z50",
      price : 56000,
      description : "Nice",
      img : "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/318515_0_S6ap8vI1Q.png?updatedAt=1759231343052"
      },
      {
        company : "Dell",
      model : "dell z50",
      price : 56000,
      description : "Nice",
      img : "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/318515_0_S6ap8vI1Q.png?updatedAt=1759231343052"
      }
]




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App product={product} />
  </StrictMode>,
)
