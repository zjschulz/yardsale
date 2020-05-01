class AppContainer {
    users = []
    url = 'http://localhost:3000'

    //fetch request
    getItems() {
        console.log("test getItems");
        fetch(this.url + '/items')
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => alert(err));
    }

    //create DOM elements
    renderItems() {

    }
}