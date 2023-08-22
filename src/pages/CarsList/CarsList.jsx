// Styles
import './CarsList.css'

const CarsList = () => {
    return (
        <div className='cars-list-container'>
          <h1>Cars list</h1>
          <ul className='cars-list'>
            <li>
              <h2>Skyline GT-R R34</h2>
              <span>nissan</span>
              <a href='#'>More information</a>
            </li>
            <li>
              <h2>Car name</h2>
              <span>Brand</span>
              <a href='#'>More information</a>
            </li>
            <li>
              <h2>Car name</h2>
              <span>Brand</span>
              <a href='#'>More information</a>
            </li>
            <li>
              <h2>Car name</h2>
              <span>Brand</span>
              <a href='#'>More information</a>
            </li>
            <li>
              <h2>Car name</h2>
              <span>Brand</span>
              <a href='#'>More information</a>
            </li>
            <li>
              <h2>Car name</h2>
              <span>Brand</span>
              <a href='#'>More information</a>
            </li>
          </ul>
        </div>
      )
}

export default CarsList