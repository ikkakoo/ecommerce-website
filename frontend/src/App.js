import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <>
        <main style={{ height: '90vh' }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/cart/:id" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
