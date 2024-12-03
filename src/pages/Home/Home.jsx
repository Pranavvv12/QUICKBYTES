import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = ({ cartItems, addToCart, removeFromCart }) => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu id="explore-menu" category={category} setCategory={setCategory} />

      <FoodDisplay 
        category={category} 
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Home;
