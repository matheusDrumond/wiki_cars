// React Router
import { useParams } from "react-router-dom"

// Hooks
import { useState, useLayoutEffect } from "react"

// Icons
import { HiHeart, HiOutlineHeart } from "react-icons/hi" 

const Favorite = ({ favoriteCars, addFavoriteCar }) => {
    const { id } = useParams()

    const [car, setCar] = useState(null)

    useLayoutEffect(()=>{
      favoriteCars && setCar(favoriteCars[id])

    }, [favoriteCars])

    const [favorited, setFavorited] = useState(false)
    
    const handleAddFavorite = () => {
      setFavorited(true)
      addFavoriteCar(car)
    }


  return (
    <div className='car-info'>
      {car && <>
        <div className="info-header">
        <h1 className='info-car-model'>{car.model}</h1>
        <span className='info-car-make'>{car.make}</span>
        <span className='info-car-year'>{car.year}</span>
      </div>
        <table className='info-table'>
          <thead>
            <tr>
              <th colSpan={2} className='table-title'>
                Car's info
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fuel type</td>
              <td className='info-value'>{car.fuel_type}</td>
            </tr>
            <tr>
              <td>Drive</td>
              <td className='info-value drive'>{car.drive}</td>
            </tr>
            <tr>
              <td>Cylinders</td>
              <td className='info-value'>{car.cylinders}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td className='info-value'>{car.transmission == 'a' ? 'automatic' : 'manual'}</td>
            </tr>
            <tr>
              <td>Fuel consumption (City)</td>
              <td className='info-value'>{parseInt(car.city_mpg * 0.425143707)} Km/L</td>
            </tr>
            <tr>
              <td>Fuel consumption (Highway)</td>
              <td className='info-value'>{parseInt(car.highway_mpg * 0.425143707)} Km/L</td>
            </tr>
          </tbody>
        </table>
        <button className='favorite-btn'>
          {favorited ? 
            <HiHeart className='fav-icon' onClick={() => setFavorited(false)}/> : 
            <HiOutlineHeart className='fav-icon' onClick={handleAddFavorite}/>
          }
        </button>
      </>
      }
    </div>
  )
}

export default Favorite