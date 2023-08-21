// Background image
import background from './home_background.jpg'

// Icons
import { HiSearch } from 'react-icons/hi'

// Styles
import './Home.css'

const Home = () => {
  return (
    <div className='home_container'>
        <h1>Discover anything about any car...</h1>
        <form>
            <input 
            type="text" 
            placeholder='Type a model...' 
            required
            />
            <button type='submit'><HiSearch /></button>
        </form>
    </div>
  )
}

export default Home