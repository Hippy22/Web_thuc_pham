import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import About from './View/About';
import Blog from './View/Blog';
import BlogDetail from './View/BlogDetail';
import Cart from './View/Cart';
import Contact from './View/Contact';
import Home from './View/Home';
import Shop from './View/Shop';
import ShopDetail from './View/ShopDetail';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shopdetail' element={<ShopDetail />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;
