import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/Global.css';
import './Model/FirebaseSetup'
import Home from './Views/Home/HomeController';
import Nav from './Components/Navbar/Nav'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <div className='route'>
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

