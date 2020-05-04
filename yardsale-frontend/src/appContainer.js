class AppContainer {
    static items = [];
    user = [];
    url = "http://localhost:3000";

    bindEventListeners() {
        const btn = document.getElementById("createItemList")
        btn.addEventListener("click", console.log("Figure Out How To call getItems during bindEventListeners!"));
    };

    //fetch request
    getItems() {
        fetch(this.url + '/items')
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            data.forEach(item => {
                new Item(item.name, item.description, item.image_url, item.price, item.user)
                //console.log(AppContainer.items)
            });
            this.renderItems();
        })
        .catch(err => alert(err));
    };

    //create DOM elements
    renderItems() {
        const ul = document.createElement('ul');
        AppContainer.items.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item.name;
            ul.appendChild(li);
        })
        document.body.appendChild(ul)
    };
}