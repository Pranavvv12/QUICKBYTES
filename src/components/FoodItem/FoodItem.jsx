import React, { useState } from 'react';
import './FoodItem.css'; 
import white from './add_icon_white.png';
import red from './remove_icon_red.png';
import green from './add_icon_green.png';
import stars from './rating_starts.png';

const FoodItem = ({ id, name, price, description, image }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
          } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
          }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(id)}
                        src={white}
                        alt='Add to cart'
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={red}
                            alt='Remove from cart'
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={green}
                            alt='Add more'
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={stars} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
