import React, { Component } from "react";
import Home from './Home/HomeController';
import Login from './Auth/Login'
import Nav from '../Components/Navbar/Nav'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import rootReducer from '../Model/Store';
import {createStore} from 'redux' 
import {Provider} from 'react-redux';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component { 
    render() { 
        return ( 
            <BrowserRouter>
            <Provider store={store}>
            <Nav />
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                </Provider>
          </BrowserRouter>
        )
    }
}
export default App;