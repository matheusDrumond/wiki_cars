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
import Favorite from './pages/Favorite/Favorite'

function App() {
  const [carsInfo, setCarsInfo] = useState([])
  
  const getCarsInfo = (cars) => {
    setCarsInfo(cars)
  }


  // Favorite cars 
  const [favoriteCars, setFavoriteCars] = useState([])

  const addFavoriteCar = (newFavoriteCar) => {
    setFavoriteCars([... favoriteCars, newFavoriteCar])
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='containers'>
          <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<Home />} />
            <Route path='/cars' 
              element={<CarsList 
                favoriteCars={favoriteCars}
                addFavoriteCar={addFavoriteCar}
              />} 
            />
            <Route path='/search' 
              element={<Search 
                getCarsInfo={getCarsInfo}
              />} 
            />
            <Route path='/info/:id' 
              element={<Info 
                carsInfo={carsInfo} 
                addFavoriteCar={addFavoriteCar}
              />} 
            />
            <Route path='/favorite/:id' 
              element={<Favorite 
                favoriteCars={favoriteCars}
              />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
