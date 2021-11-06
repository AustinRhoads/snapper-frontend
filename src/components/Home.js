import React, {useState} from 'react' 
import { useEffect } from 'react/cjs/react.development';


function Home(){


    const [ user, setUser ] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    

    const logout = () => {
        fetch('http://localhost:3000/sessions/delete', {method: "DELETE", credentials: "include", headers: { 'content-type': 'application/json'}})
        .then(resp => resp.json())
        .then(obj => console.log(obj))
    }

    useEffect(() => {
        fetch("http://localhost:3000/logged_in", { credentials: 'include'}).then(resp => resp.json()).then(obj => {
            setLoggedIn(currentLoggedIn => currentLoggedIn = obj.logged_in)
            setUser(currentUser => currentUser = obj.user)
            
        })
        //console.log(user, loggedIn)
    })

    return(
        <div>
            HOME

        <button onClick={() => logout()}>Log Out</button>
        </div>
    )

};

export default Home;