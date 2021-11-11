//import React, {useEffect, useState} from 'react'
  //export NODE_OPTIONS=--openssl-legacy-provider
//RUN THIS IN TERMINAL BEFORE NPM START

//RUN IF HAVING PERMISSIONS ISSUES  
//sudo chown -R $(whoami) ~/.npm

import React, {useState, useEffect, useMemo} from 'react'
import './App.css';
//import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home'
import Nav from './components/Nav'


function App() {

 // const [username, setUsername] = useState("")
 // const [email, setEmail] = useState("")
  const [logged_in, setLogged_in] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {}) 

 // const user = useMemo(() => {
 //   return {
 //     username,
 //     email
 //   }
 // }, [username, email])

  useEffect(() => {
    check_if_logged_in()

    if(user){
      fetch("http://localhost:3000/logged_in", { credentials: 'include'})
      .then(resp => resp.json())
      .then(obj => {
          if(obj.logged_in){
              
               // setUsername(currentUsername => currentUsername = obj.user.username)
               // setEmail(currentEmail => currentEmail = obj.user.email)
               // setLogged_in(currentLogged_in_status => currentLogged_in_status = true)
              // setUser(current_user => current_user = obj.user)
                localStorage.setItem("logged_in", true)
              
                console.log("we logged in")
               
          } else {
           
           //setLogged_in(currentLogged_in_status => currentLogged_in_status = false)
          // setUser(current_user => current_user = {})
           localStorage.setItem("logged_in", false)
                console.log("we logged out")
               
          }
                    
      })
    }

    
  })

  const logged_out = () => {
   
    setLogged_in(current_logged_in_status => current_logged_in_status = false)
    localStorage.setItem("user", JSON.stringify({}))
    localStorage.setItem("logged_in", false)
  }

  const check_if_logged_in = () => {
  //  user: JSON.parse(localStorage.getItem('user')) || {},
  //let user_s =  JSON.parse(localStorage.getItem("user"))
  
      console.log("checking if logged in", user)
  }



  return (
    <div className="App">
  
      <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home user={user} logged_in={logged_in} logged_out={() => logged_out()} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
