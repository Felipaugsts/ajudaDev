import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/Global.css';
import Home from './Views/Home/HomeController';
import Nav from './Components/Navbar/Nav'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

