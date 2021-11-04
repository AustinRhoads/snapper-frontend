class Auth{
    constructor(){
        this.authenticated = false;
    }

    async login(functionsObject, configObject){
        await fetch("http://localhost:3000/login", configObject)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
        })
    }


};

export default new Auth();
