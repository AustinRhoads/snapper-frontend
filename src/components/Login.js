//import axios from 'axios';
import React, {useState, useEffect} from 'react' 
import Auth from '../components/authentication/auth'
//import axios from 'axios'


function Login(){

   

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = { username, password }

    useEffect(()=>{

      
        
    })

    function updateUsername(e) {
        setUsername(currentUsername => currentUsername = e.target.value)
    }


    function updatePassword(e){
        setPassword(currentPassword => currentPassword = e.target.value)
    }


    function submitLogin(e){
        e.preventDefault();

        const configObject = {
           
            method: "POST",

            credentials: 'include',

            headers: {
                'X-CSRF-TOKEN': unescape(document.cookie.split('CSRF-TOKEN=')[1]),
                'content-type': 'application/json'
            },

            body: JSON.stringify(user)

        }

        const functionsObject = {

        }

       Auth.login(functionsObject, configObject)
       
    }

    return(
        <div>
            LOGIN
            <form onSubmit={(e) => submitLogin(e)} >
                <input type="text" placeholer="Username" value={username} onChange={(e) => updateUsername(e)} required />
                <br/>
                <input type="password" placeholer="Password" value={password} onChange={(e) => updatePassword(e)} required />
                <br />
                <input type = "submit" value="Login" />
            </form>

        </div>
    )

};

export default Login;