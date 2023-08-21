// Styles / CSS
import './App.css'

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import CarsList from './pages/CarsList/CarsList'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cars' element={<CarsList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
