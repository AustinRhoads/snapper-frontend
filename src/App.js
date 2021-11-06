//import React, {useEffect, useState} from 'react'
import React from 'react'
import './App.css';
//import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home'
import Nav from './components/Nav'


function App() {

  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [user, setUser] = useState({})

  //useEffect(() => {
  //  console.log(isLoggedIn)
  //  console.log(user)
  //}, [user, isLoggedIn])

  return (
    <div className="App">
      {/* 
       <Nav />
      <BrowserRouter>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Routes>

      </BrowserRouter>
      */}
     


     
      <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
