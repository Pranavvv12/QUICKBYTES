import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import Appd from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Header />
        <ExploreMenu />
        <FoodDisplay />
        <Appd />
        <Footer/>
        <Routes>
          {/* Define your routes here if needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
