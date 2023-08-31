// Styles 
import './Info.css'

// React Router
import { useParams } from 'react-router-dom'

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
        <h1 className='info-car-model'>{model}</h1>
        <span className='info-car-make'>{make}</span>
        <span className='info-car-year'>{year}</span>
      </div>
      <table className='info-table'>
        <th>
          Car's info
        </th>
        <tr>
          <td>Fuel type</td>
          <td className='info-value'>{fuel_type}</td>
        </tr>
        <tr>
          <td>Drive</td>
          <td className='info-value'>{drive}</td>
        </tr>
        <tr>
          <td>Cylinders</td>
          <td className='info-value'>{cylinders}</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td className='info-value'>{transmission == 'a' ? 'automatic' : 'manual'}</td>
        </tr>
        <tr>
          <td>Fuel consumption (City)</td>
          <td className='info-value'>{parseInt(city_mpg * 0.425143707)} Km/L</td>
        </tr>
        <tr>
          <td>Fuel consumption (Highway)</td>
          <td className='info-value'>{parseInt(highway_mpg * 0.425143707)} Km/L</td>
        </tr>
      </table>
    </div>
  )
}

export default Info