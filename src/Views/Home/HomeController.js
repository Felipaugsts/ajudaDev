import React, { Component } from 'react'
import HomeList from './HomeList'
import './Home.css'
import api from '../../Model/API.js'
import loader from '../../Assets/images/loader.gif'
import TextField from '../../Components/TextField/TextField'

class HomeController extends Component {
    constructor() { 
        super()

        this.state = { 
            jobs: []
        }
    }
    fetchJobs = () => { 
        api.FetchJobs()
        .then(job => this.setState({ 
            jobs: job
        }))
    
    }
    componentDidUpdate() { 
        console.log(this.state.jobs)
    }

    componentDidMount() { 
       this.fetchJobs()
    }

    render() { 
       if (this.state.jobs.length === 0) {
           console.log("loading")
           return ( 
               <img className='loader-image' src={loader} alt="loading" /> 
         )
       } else {
        return (
            <div className='container'>
                <div className='text xlarge heavy '>Encontre seu primeiro emprego <br />
                    <span className='hashtag heavier'>#AjudaDev</span>
                </div>
                <div className='card-wrapper flex wrap justify-center'>
                        <div className='card-list'>
                            <HomeList jobs={this.state.jobs} />
                        </div>
                    
                        <div className='card-filters'>
                            Filters
                            <div className='wrapper  search-field-wrapper'>
                            <TextField />
                            </div>
                    </div>
                 </div>
            </div>
            )
       }
    }
}
export default HomeController