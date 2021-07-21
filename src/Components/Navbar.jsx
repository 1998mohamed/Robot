import React, {useState} from 'react';
import logo from "../images/logo.png";
import {BrowserRouter, Link} from 'react-router-dom';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? "nav active" : "nav"}>
            
            <Link className="logo" to="/" className='logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link className="link" to="/Pricing">Pricing</Link>
            <Link className="link" to="/Dashboard">Dashboard</Link>
        </nav>
    )
}

export default Navbar;
