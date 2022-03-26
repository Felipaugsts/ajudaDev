import firebase , { Auth } from './FirebaseSetup'
import { useDispatch } from 'react-redux'
import { setUserActive } from './userSlice'
 function FetchJobs() {
     
   return firebase.db.collection('Jobs')
    .get()
    .then((data) => { 
        if (data.empty == false) { 
            const results = []
            data.docs.forEach(element => {
                results.push(element.data())
            });
            return results
        }
    })
  };

  function isLogged() { 
Auth.onAuthStateChanged(function(user)  { 
  if (user) { 
    const dispatch = useDispatch()
    console.log("user", user)
    dispatch(setUserActive({ 
      userEmail: "test",
      userName: "test"
  }))
  }
})
  }
  

  export default {
    FetchJobs,
    isLogged
  };