// Styles / CSS
import './App.css'

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import CarsList from './pages/CarsList/CarsList'
import Navbar from './Components/Navbar'
import About from './pages/About/About'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className='containers'>
      <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cars' element={<CarsList />} />
        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
