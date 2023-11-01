import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './Components/SignUp/singUpSlice'; 
import loginSlice from './Components/loginpages/loginSlice';

import authReducer from './authSlice';



const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    Login: loginSlice, 
    auth: authReducer,   
  },
});

export default store;