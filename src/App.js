import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Suppliers from './components/Suppliers'
import Calculator from './components/Calculator'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
