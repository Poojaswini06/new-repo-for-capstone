import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Central from './components/Central';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OnlineOrder from './components/OnlineOrder';
import Login from './components/Login';

function App() {
  return (
<>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Central />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OnlineOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
</>
  );
}

export default App;
