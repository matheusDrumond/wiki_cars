// Styles / CSS
import './App.css'

// React 
import { useEffect, useState } from 'react'

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

// Pages
import Home from './pages/Home/Home'
import CarsList from './pages/CarsList/CarsList'
import About from './pages/About/About'
import Search from './pages/Search/Search'
import Info from './pages/Info/Info'

function App() {
  const [carsInfo, setCarsInfo] = useState([])
  
  const getCarsInfo = (cars) => {
    setCarsInfo(cars)
  }


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='containers'>
          <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<Home />} />
            <Route path='/cars' element={<CarsList />} />
            <Route path='/search' element={<Search getCarsInfo={getCarsInfo} />} />
            <Route path='/info/:id' element={<Info carsInfo={carsInfo}/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
