// Styles 
import './Info.css'

// React Router
import { Link, useParams } from 'react-router-dom'

const Info = ({ carsInfo }) => {
    const { id } = useParams()

    const car = carsInfo[id]

    const {
      model, 
      make, 
      year, 
      fuel_type, 
      drive, 
      cylinders, 
      transmission, 
      city_mpg, 
      highway_mpg,
    } = car

  return (
    <div className='car-info'>
      <div className="info-header">
        <h1>{model}</h1>
        <span>{make}</span>
        <h2>{year}</h2>
      </div>
      <p>Car's info</p>
      <table>
        <tr>
          <td>Fuel type</td>
          <td>{fuel_type}</td>
        </tr>
        <tr>
          <td>Drive</td>
          <td>{drive}</td>
        </tr>
        <tr>
          <td>Cylinders</td>
          <td>{cylinders}</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>{transmission == 'a' ? 'automatic' : 'manual'}</td>
        </tr>
        <tr>
          <td>Fuel consumption (City)</td>
          <td>{parseInt(city_mpg * 0.425143707)}</td>
        </tr>
        <tr>
          <td>Fuel consumption (Highway)</td>
          <td>{parseInt(highway_mpg * 0.425143707)}</td>
        </tr>
      </table>
    </div>
  )
}

export default Info