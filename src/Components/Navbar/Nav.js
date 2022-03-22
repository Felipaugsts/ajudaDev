import React from 'react'
import './Nav.css'
import auth from '../../Assets/images/auth.gif'
import { Link } from 'react-router-dom'

const Nav = () => { 

    return ( 
        <div className='navbar shadow '>
           <div className='nav-items'>
            <Link to={"/"} className='xlarge link'>DevJobs</Link>
                <Link to={"/login"}>
                    <img className='icon' src={auth}  alt="auth" />
                </Link>
            </div>
        </div>
    )
}
export default Nav