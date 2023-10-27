import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom



import { setIsLoggedIn, setIsLoading } from './authSlice';
import { Login } from './Components/loginpages/login';
import SignUp from './Components/SignUp/signUp';


function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if the access token is present in local storage
    const token = localStorage.getItem('accessToken');
    console.log('tokent is: ', token);
    if (token) {
      dispatch(setIsLoggedIn(true));
    }
    dispatch(setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <Routes>
       
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
