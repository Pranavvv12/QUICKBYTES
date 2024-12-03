// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
// import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
// import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
// import Appd from "./components/AppDownload/AppDownload";
// import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       {/* Login pop*/}
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

//       {/* Common*/}
//       <Navbar setShowLogin={setShowLogin} />
//       <Header />
//       <ExploreMenu />
//       <FoodDisplay />
//       <Appd />
//       <Footer />

// {/* route */}
//       <Routes>
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/order" element={<PlaceOrder />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Appd from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { food_list } from "./pages/Cart/FoodList"; // Assuming the food_list is here

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const location = useLocation();

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const itemInfo = food_list.find((product) => product._id === itemId);
      if (itemInfo) {
        total += itemInfo.price * quantity;
      }
      return total;
    }, 0);
  };

  const hideFooterAndAppDownload = location.pathname === "/cart" || location.pathname === "/order";

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/order"
            element={
              <PlaceOrder getTotalCartAmount={getTotalCartAmount} />
            }
          />
        </Routes>
        {!hideFooterAndAppDownload && <Appd />}
      </div>
      {!hideFooterAndAppDownload && <Footer />}
    </>
  );
};

export default App;
