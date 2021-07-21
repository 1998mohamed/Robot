import React, {useState} from 'react';
import logo from "../images/logo2.png";
import {BrowserRouter, Link} from 'react-router-dom';
import './NavbarTwo.css';


function NavbarTwo() {

    return (
        <ul className="nav">           
            <li>
            <Link className="logo" to="/" className='logo'>
                <img src={logo} alt='logo' />
            </Link>
            </li>
            <li>
            <Link className="link-left" to="/Pricing">Pricing</Link>
            </li>
            <li>
            <Link className="link-right" to="/Dashboard">Dashboard</Link>
            </li>
        </ul>
    )
}

export default NavbarTwo;
