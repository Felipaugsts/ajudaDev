import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/Global.css';
import './Model/FirebaseSetup'
import Home from './Views/Home/HomeController';
import Nav from './Components/Navbar/Nav'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Routes className='route'>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

