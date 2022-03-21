import React, { Component } from 'react'
import HomeList from './HomeList'
import './Home.css'

class HomeController extends Component {

    render() { 
        return (
            <div className='container'>
            <HomeList />
            </div>)
    }
}
export default HomeController