import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import Login from './components/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import About from './pages/About';
import Auctions from './pages/Auctions';
import Ads from './pages/Ads';
import Advertisement from './pages/Advertisement';
import Saved from './pages/Saved';
import CarDetails from './pages/CarDetails';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-right">
        <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/about" element={<About />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/car-details" element={<CarDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onRegisterClick={() => {
            setIsLoginModalOpen(false);
            setIsRegisterModalOpen(true);
          }}
        />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
