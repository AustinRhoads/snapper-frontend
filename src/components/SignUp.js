import React, {useState} from 'react' 
//import * as Cookies from 'js-cookie'


const GOOGLE_AUTH_URL = "http://localhost:3000/auth/google_oauth2"
//const AUTH_URL = "http://localhost:3000/auth/authenticate"
const REGISTRATION_URL = "http://localhost:3000/api/v1/users"


function SignUp(){

    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation] = useState("");
    const user = { username, email, password, password_confirmation: passwordConfirmation }

const googleAuth = () => {
    fetch(GOOGLE_AUTH_URL)
    .then(resp => resp.json())
    .then(obj => console.log(obj))
}


const updateUsername = (e) => {
    setUsername(currUsername => currUsername = e.target.value)
}

const updatePassword = (e) => {
    setPassword(currentPassword => currentPassword = e.target.value)
}

const updatePasswordConfirmation = (e) => {
    setPasswordConfirmation(currentPasswordConfirmation => currentPasswordConfirmation = e.target.value)
}

const updateEmail = (e) => {
    setEmail(currentEmail => currentEmail = e.target.value)
}

const submitRegistration = (e) => {
    e.preventDefault();
    console.log(user);
    const configObject = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify({user: user})
    }
    
    fetch(REGISTRATION_URL, configObject)
    .then(resp => resp.json())
    .then(obj => console.log(obj))

}



    return(
        <div>
            SIGNUP

            <h3 onClick={() => googleAuth()}>Sign In with google</h3>

            <form onSubmit={(e) => submitRegistration(e)} >
                <input type="text" placeholder="Username" value={username} onChange={(e) => updateUsername(e)} required />
                <br/>
                <input type="text" placeholder="Email" value={email} onChange={(e) => updateEmail(e)} required />
                <br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => updatePassword(e)} required />
                <br />
                <input type="password" placeholder="Password confirmation" value={passwordConfirmation} onChange={(e) => updatePasswordConfirmation(e)} required />
                <br />
                <input type = "submit" value="Signup" />
            </form>

        </div>
    )

};

export default SignUp;