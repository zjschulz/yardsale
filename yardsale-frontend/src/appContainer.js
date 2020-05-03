class AppContainer {
    items = []
    url = "http://localhost:3000"

    bindEventListeners() {
        const btn = document.getElementById('createItemList');

    }

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