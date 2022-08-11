import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { Row, Col, Container } from './components/grid';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shopPage';
import HomePage from './pages/homePage';
import CoffeePage from './pages/coffeePage';
import CoffeeDetailPage from './pages/coffeeDetailPage';
import ShopDetailPage from './pages/shopDetailPage';
import { fetchCoffees } from './features/coffees/coffeeSlice';
import { fetchShops } from './features/shops/shopSlice';
import { fetchComments } from './features/comments/commentSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoffees());
    dispatch(fetchShops());
    dispatch(fetchComments());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopPage' element={<ShopPage />} />
        <Route path='/coffeePage' element={<CoffeePage />} />
        <Route path='/coffeePage/:coffeeId' element={<CoffeeDetailPage />} />
        <Route path='/shopPage/:shopId' element={<ShopDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
