

class Auth{
    constructor(){
        this.authenticated = false;
    }

   setUser = ({user, logged_in}) => {
       
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("logged_in", logged_in)
      }

    async login(functionsObject, configObject){
        await fetch("http://localhost:3000/login", configObject)
        .then(resp => resp.json())
        .then(obj => {
           // console.log(obj)
           if(obj.logged_in){
                this.setUser(obj)
           }
        })
    }


};

export default new Auth();
