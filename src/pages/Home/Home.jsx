// Background image
import background from './home_background.jpg'

// Icons
import { HiSearch } from 'react-icons/hi'

// Styles
import './Home.css'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalQuery = query.toLowerCase();

    navigate('/search?q=' + finalQuery)

    console.log(finalQuery)
  }

  return (
    <div className='home_container'>
        <h1>Discover anything about any car...</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Type a model...' 
            required
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            />
            <button type='submit'><HiSearch /></button>
        </form>
    </div>
  )
}

export default Home