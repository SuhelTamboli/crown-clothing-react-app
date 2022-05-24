import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Homepage } from './pages/homepage/homepage.component';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
