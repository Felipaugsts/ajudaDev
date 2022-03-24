import './login.css'

import {Auth, Provider} from '../../Model/FirebaseSetup'
import {useDispatch, useSelector} from 'react-redux'
import {setUserActive, setLogoutUser, selectUserName} from '../../Model/userSlice'
const Login = () => { 
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    // const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => { 
        Auth.signInWithPopup(Provider).then((result) => { 
            dispatch(setUserActive({ 
                userEmail: result.user.email,
                userName: result.user.displayName
            }))
            console.log(result)
        })
    }
    const handleSignOut = () => {
        Auth.signOut().then(() => { 
            dispatch(setLogoutUser())
        })
    }
     
    return ( 
        <div className="login-card">
            <h1 className="xlarge">Login</h1>
            { 
            userName ? ( 
                <button onClick={handleSignOut}>log out</button>
               
            ) : ( 
                <button onClick={handleSignIn}>login</button>
            )
            }
        </div>
    )
}
export default Login