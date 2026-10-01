import './App.css'
import Header from './Header.jsx'

import CheesePizza from './components/CheesePizza'
import CornPizza from './components/CornPizza'
import PaneerSpice from './components/PaneerSpice'
import PeppyPaneer from './components/PeppyPaneer'
import VegParadise from './components/VegParadise'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<CheesePizza />} />

        <Route path="/CheesePizza" element={<CheesePizza />} />

        <Route path="/CornPizza" element={<CornPizza />} />

        <Route path="/PaneerSpice" element={<PaneerSpice />} />

        <Route path="/PeppyPaneer" element={<PeppyPaneer />} />

        <Route path="/VegParadise" element={<VegParadise />} />

      </Routes>
    </>
  )
}

export default App