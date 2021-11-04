import React from 'react' 

function Home(){

    const logout = () => {
        fetch('http://localhost:3000/sessions/delete', {method: "DELETE", headers: { 'content-type': 'application/json'}})
        .then(resp => resp.json())
        .then(obj => console.log(obj))
    }

    return(
        <div>
            HOME

        <button onClick={() => logout()}>Log Out</button>
        </div>
    )

};

export default Home;