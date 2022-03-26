import React, { Component } from 'react'
import HomeList from './HomeList'
import './Home.css'
import api from '../../Model/API.js'
import loader from '../../Assets/images/loader.gif'
import error from '../../Assets/images/error.gif'
import TextField from '../../Components/TextField/TextField'
import Filters from './Filters'


class HomeController extends Component {
    constructor() { 
        super()

        this.state = { 
            jobs: [],
            searchfield: "",
            filtered: []
        }
    }
    onSearchChange = (event) => { 
        this.setState({ 
            searchfield: event.target.value
        })
        }
        filterJobs() { 
            const filtered = []
            
            const filteredTitles = this.state.jobs.filter(jobs => {
                if (jobs.title.toLowerCase().includes(this.state.searchfield.toLowerCase())) {
                    filtered.push(jobs)
                }
            })
            return filtered
        }
    fetchJobs = () => { 
        api.FetchJobs()
        .then(job => this.setState({ 
            jobs: job
        }))
    }


    componentDidMount() { 
       this.fetchJobs()
    }
   

    render() { 
        const filtered = this.filterJobs()
       if (this.state.jobs.length === 0) {
           console.log("loading")
           return ( 
               <img className='loader-image' src={loader} alt="loading" /> 
         )
       } else {
        return (
            <div className='containers'>
                <div className='text xlarge heavy '>Encontre seu primeiro emprego <br />
                    <span className='hashtag heavier'>#AjudaDev</span>
                </div>
                <div className='display-wrapper flex wrap justify-center'>
                        <div className='card-list'>
                            {filtered.length === 0 ?
                            <img className='error-image' src={error} alt="loading" /> 
                                        :
                        <HomeList jobs={filtered} />
                        }
                            
                        </div>
                    
                        <div className='card-filters'>
                            <div className='wrapper  search-field-wrapper'>
                            <TextField searchChange={ 
                                this.onSearchChange
                            }  />
                            </div>

                            <div className='wrapper categories-wrapper '>
                            <Filters />
                            </div>
                    </div>
                 </div>
            </div>
            )
       }
    }
}
export default HomeController