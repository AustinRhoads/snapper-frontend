import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    console.log(isLoggedIn)
    console.log(user)
  }, [user, isLoggedIn])

  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
