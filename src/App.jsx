// Styles / CSS
import './App.css'

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

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='containers'>
          <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<Home />} />
            <Route path='/cars' element={<CarsList />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
