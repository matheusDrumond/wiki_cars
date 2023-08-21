// Styles
import './Navbar.css'

// React Router
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>wiki<span>cars</span></h2>
            <ul>
                <li>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                <NavLink to={'/cars'}>Cars</NavLink>
                </li>
            </ul>
        </nav>
      )
}

export default Navbar