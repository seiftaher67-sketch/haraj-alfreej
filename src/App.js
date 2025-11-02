import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import Login from './components/Login';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

import Categories from './pages/Categories';
import About from './pages/About';
import Auctions from './pages/Auctions';

import Advertisement from './pages/Advertisement';
import Saved from './pages/Saved';
import ChineseCars from './pages/ChineseCars';
import CarDetails from './pages/CarDetails';
import PaymentPage from './pages/PaymentPage';
import LiveBroadcast from './pages/LiveBroadcast';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50 text-right">
        <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/categories" element={<Categories />} />
            <Route path="/auctions" element={<Auctions />} />
            
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/about" element={<About />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/chinese-cars" element={<ChineseCars />} />
            <Route path="/car-details" element={<CarDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/live-broadcast" element={<LiveBroadcast />} />
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
          onLoginClick={() => {
            setIsRegisterModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
