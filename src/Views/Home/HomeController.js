import React, { Component } from 'react'
import HomeList from './HomeList'
import './Home.css'

class HomeController extends Component {

    render() { 
        return (
            <div className='container'>
                <div className='text xlarge heavy '>Encontre seu primeiro emprego <br />
                    <span className='hashtag heavier'>#AjudaDev</span>
                </div>
            <HomeList />
            </div>)
    }
}
export default HomeController