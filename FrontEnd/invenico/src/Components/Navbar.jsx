import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContexts } from '../Context/AuthContextProvider'
// import './Navbar.css'; // Import the CSS file

export default function Navbar() {
    const { logout } = useContext(AuthContexts);
    return (
        <div className="navbar">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/form" className="navbar-link">Form</Link>
            <div className="navbar-right">
                <Link to="/login" className="navbar-link">Login</Link>
            </div>
            <button className='button' onClick={logout} >Logout</button>
        </div>
    )
}
