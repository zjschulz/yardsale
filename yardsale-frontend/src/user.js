class User {
    constructor(email, id){
        this.email = email,
        this.id = id;
        AppContainer.user = this;
    } 
}