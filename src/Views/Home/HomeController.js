import React, { Component } from 'react'
import HomeList from './HomeList'
import './Home.css'
import api from '../../Model/API.js'

class HomeController extends Component {

    componentDidMount() { 
        api.FetchJobs().then((res) => {
            console.log(res)
        })
    }

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