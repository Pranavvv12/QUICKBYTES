import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = ({ getTotalCartAmount }) => {
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 19;
  const totalPayable = getTotalCartAmount() + deliveryFee;

  return (
    <form className="place-order">
      {/* Left Section */}
      <div className="place-order-left">
        <p className="title">Add Shipping Address</p>
        <input type="text" placeholder="Company's Name (Optional)" />
        <div className="multi-fields">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <input type="text" placeholder="Pincode" />
        <input type="text" placeholder="Address (Area and Street)" />
        <div className="multi-fields">
          <input type="text" placeholder="City/District/Town" />
          <input type="text" placeholder="State" />
        </div>
        <div className="checkbox-field">
          <input type="checkbox" id="sameAddress" />
          <label htmlFor="sameAddress">Same as Billing Address</label>
        </div>
        <button className="save-button">Save and Deliver Here</button>
      </div>

      {/* Right Section */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div className="cart-total-details">
            <p>Order Total</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Charges</p>
            <p>Rs. {deliveryFee}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total Payable</p>
            <p>Rs. {totalPayable}</p>
          </div>
          <button className="place-order-button">Place Order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
