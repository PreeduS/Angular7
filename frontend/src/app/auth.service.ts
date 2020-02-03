export class AuthService {
    loggedIn = true;
    
    login(){
        this.loggedIn = true;
        // this.store.dispatch(new Signup())
        // set token
        
    }
    
    logout(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 1000);
        })

        return promise;
    }
}