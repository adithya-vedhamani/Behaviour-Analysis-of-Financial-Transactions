// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './InputForm';
import './App.css';
import Header from "./components/Header";
import IPGeolocationApp from './GeolocationPage';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Customers from "./components/Customer/Customers";
import ImageLoader from "./components/ImageLoader";


const App = () => {
  return (
      <div className="App">
         <header>
        <Header />
      </header>
       
        <div className="app-container">
          <Navbar />
          </div>
    
        <Routes>
          <Route path="/" element= <Home /> />
          <Route path="/input" element= <InputForm /> />
          <Route path="/geo" element= < IPGeolocationApp /> />
          <Route path="/customers" element={<Customers />} exact />
          <Route path="/image-loader" element={<ImageLoader />} exact />
  
        </Routes>
      </div>
  );
};

export default App;
