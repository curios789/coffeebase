import React from 'react';
import './App.css';
import Header from './components/Header';
import { Row, Col, Container } from './components/grid';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shopPage';
import HomePage from './pages/homePage';
import CoffeePage from './pages/coffeePage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopPage' element={<ShopPage />} />
        <Route path='/coffeePage' element={<CoffeePage />} />
      </Routes>
    </div>
  );
}

export default App;
