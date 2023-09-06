// Styles
import './CarsList.css'

// React Router
import { Link } from 'react-router-dom'

const CarsList = ({ favoriteCars }) => {
    return (
        <div className='cars-list-container'>
          <h1>Cars list</h1>
          <ul className='cars-list'>
            {favoriteCars && favoriteCars.map((item, index) => (
                    <li key={index}>
                        <h2 className='car-name'>{item.model}</h2>
                        <span className='car-brand'>{item.make}</span>
                        <span>{item.year}</span>
                        <Link 
                        to={`/favorite/${index}`} 
                        >
                            See more
                        </Link>
                    </li>
                ))}
          </ul>
        </div>
      )
}

export default CarsList