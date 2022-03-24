// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './userSlice'

// export default configureStore( { 
//     reducer: { 
//         user: userReducer
//     }
// })

import { combineReducers } from 'redux'; 
import userReducer from './userSlice'

export default combineReducers({ 
    user: userReducer
})