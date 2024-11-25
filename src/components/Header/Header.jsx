import React from "react";
import './Header.css';
import header1 from '../../images/header.png';
const Header=()=>{

    return(
        <div className="flexfor">
            
        <div className="header-contents">
            <h2>Order your Favourite Food Here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingridients and culinary
               expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <button>View Menu</button>
        </div>
        <div className='header'>
            <img src={header1} alt=" headerIcon" />
                </div>
  
        </div>
        
    )

}
export default Header