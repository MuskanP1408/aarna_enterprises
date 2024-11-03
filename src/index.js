// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './navbar'
import About from './about';
import Vegetable from './vegetable';
import Fruits from './fruits';
import Spices from './spices';
import Wheat from './wheat';
import Biscuits from './biscuits'
import PersonalCare from './personalCare';
import Stationary from './stationary';
import Agarbatti from './agarbatti';
import Contact from './contact';
import Footer from './footer'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vegetable" element={<Vegetable />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/spices" element={<Spices />} />
        <Route path="/wheat" element={<Wheat />} />
        <Route path="/biscuits" element={<Biscuits />} />
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/agarbatti" element={<Agarbatti />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>

);

reportWebVitals();
