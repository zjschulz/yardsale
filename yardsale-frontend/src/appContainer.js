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
        AppContainer.items.forEach(item => {
        // Create elements needed to build a card  
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const h4 = document.createElement('h4')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const btn = document.createElement('button')
        const str = document.createElement('strong')

        // Append newly created elements into the DOM
        const body = document.querySelector('body');
        body.append(div)
        div.append(div1)
        div1.append(h4)
        div1.append(img)
        div1.append(p)
        div1.append(str)
        str.append(p1)
        div1.append(btn)

        // Set content and attributes
        div.setAttribute('class',"card text-white bg-success mb-3")
        div.setAttribute('style',"max-width: 20rem;")
        div1.setAttribute('class',"card-body")
        h4.setAttribute('class','card-title')
        h4.innerHTML = item.name
        img.setAttribute('src', item.image_url)
        img.setAttribute('style',"height: 200px; width: 100%; display: block;")
        p.setAttribute('class',"card-text")
        p.innerHTML = item.description
        p1.setAttribute('class',"card-text")
        p1.innerHTML = item.price
        btn.setAttribute('type',"button")
        btn.setAttribute('class',"btn btn-primary btn-sm")
        btn.innerHTML = "Email Seller"
        })
    };
}