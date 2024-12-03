import React from 'react';
import './Cart.css';
import {useNavigate } from "react-router-dom";
import { food_list } from './FoodList';
import emptyic from  '../../images/empty.png'; 

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const navigate=useNavigate();
  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          total += itemInfo.price * quantity;
        }
      }
      return total;
    }, 0);
  };
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 19;
  const totalPayable = getTotalCartAmount() + deliveryFee;
  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="cart-empty">
          <img
            src={emptyic}
            alt="Empty Cart"
            className="cart-empty-image"
          />
          <p className="cart-empty-text">Your cart is empty</p>
          <p className='cart-para'>You can go to home page to view more restaurants</p>
          <button
  className="cart-button"
  onClick={() => {
    navigate("/"); 
    setTimeout(() => {
      const exploreMenuSection = document.getElementById("explore-menu");
      if (exploreMenuSection) {
        exploreMenuSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }}
>
  See Restaurants near you
</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-header">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index} className="cart-item-row">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <button onClick={() => removeFromCart(item._id)}>x</button>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-summary">
            <h2>Cart Totals</h2>
            <div className="summary-row">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="summary-row">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="summary-row">
              <p>Total</p>
              <p>₹{totalPayable}</p>
            </div>
            <button onClick={()=> navigate("/order")}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;