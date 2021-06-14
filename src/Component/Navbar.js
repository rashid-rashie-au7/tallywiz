import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
            <Link className="nav-items" to="/author" >Author</Link>
            </div>
            
        </div>
    )
}

export default Navbar
