import React, {useEffect} from 'react' 
import Auth from './authentication/auth';

function Home(props){

    

    const logout = () => {
        fetch('http://localhost:3000/sessions/delete', {method: "DELETE", credentials: "include", headers: { 'content-type': 'application/json'}})
        .then(resp => resp.json())
        .then(obj => {
            Auth.setUser({user: {}, logged_in: false})
           
        })
        props.logged_out()
    }

    useEffect(() => {
        console.log(props)
    })

    const renderUser = () => {
        if(props.logged_in){
           return(
               <div>
                   <h3>Welcome {`${props.user.username}`}</h3>
               </div>
           )
        } else {
            return(
                <div>
                <h3>Go LogIn yo.</h3>
            </div>
            )
      
        }
    }



    return(
        <div>
            HOME
        {renderUser()}
        <button onClick={() => logout()}>Log Out</button>
        </div>
    )

};

export default Home;