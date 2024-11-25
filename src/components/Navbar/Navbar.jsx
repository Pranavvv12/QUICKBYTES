import './Navbar.css';
import searchicon from '../../images/searchicon.png'; 
import basketicon from  '../../images/basketicon.png'; 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <h3>QuickBytes</h3>
            <ul className="navbar-menu">  
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                </li>
                <li>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
                </li>
            </ul>
            <div className="navbar-right">
                <img src={searchicon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <img src={basketicon} alt="Basket Icon" />
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>
            
            
        </div>
    );
}

export default Navbar;
