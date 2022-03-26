import React, { useEffect }from 'react'
import './Nav.css'
import auth from '../../Assets/images/auth.gif'
import logout from '../../Assets/Icons/logout.gif'
import { Link } from 'react-router-dom'
import {Auth} from '../../Model/FirebaseSetup'
import { setUserActive, uid,  setLogoutUser  } from '../../Model/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import add from '../../Assets/Icons/add.gif'

const Nav = () => { 
    const dispatch = useDispatch()
    const userUID = useSelector(uid)

useEffect(() => { 
    Auth.onAuthStateChanged(function(user)  { 
        if (user) { 
          dispatch(setUserActive({ 
            userEmail: user.email,
            userName: user.displayName,
            UID: user.uid
        }))
        
        }
      })
})

const handleSignOut = () => {
    Auth.signOut().then(() => { 
        dispatch(setLogoutUser())
    })
}

    return ( 
        <div className='navigationbar shadow '>
           <div className='nav-items'>
            <Link to={"/"} className='xlarge link'>DevJobs</Link>
                {
                    userUID  ? ( 
                       <div>
                           <Link to={"/list"}>
                                <img  className='icon' src={add}  alt="auth" />
                           </Link>
                            
                        <img onClick={handleSignOut} className='icon' src={logout}  alt="auth" />
                        </div>
                        ):( 
                            <Link to={"/login"}>
                                <img className='icon' src={auth}  alt="auth" />
                            </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Nav