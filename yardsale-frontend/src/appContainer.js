class AppContainer {
    static items = [];
    user = [];
    url = "http://localhost:3000";

    //tell the buttons what to do
    bindEventListeners() {
        const cil = document.getElementById("createItemList")
        cil.addEventListener("click", this.renderItems);

        const dil = document.getElementById("deleteItems")
        dil.addEventListener("click", this.deleteItems);

        const cni = document.getElementById("createNewItem")
        cni.addEventListener("click", this.renderNewItemForm);
    };

    //fetch request
    getItems() {
        fetch(this.url + '/items')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(item => {
                new Item(item.id, item.name, item.description, item.image_url, item.price, item.user)
            });
            //this.renderItems();
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
        btn.setAttribute('id', "item.user.email")
        btn.innerHTML = "Email Seller"
        })
    };

    //delete items: would like to change this to delete a single item when called upon by an eventlistener
    deleteItems() {
        items.forEach(item => {
            fetch(`http://localhost:3000/items/${item.id}`, {
                method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
        })
    }

    //renders form to create new item when called upon by event listener
    renderNewItemForm() {
        // Create elements needed to build a card  
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const form = document.createElement('form')
        const h4 = document.createElement('h4')
        const label = document.createElement('label')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        const input = document.createElement('input')
        const input1 = document.createElement('input')
        const input2 = document.createElement('input')
        const input3 = document.createElement('input')
        const input4 = document.createElement('input')
        const btn = document.createElement('button')

        // Append newly created elements into the DOM
        const body = document.querySelector('body');
        body.append(div)
        div.append(div1)
        div1.append(form)
        form.append(h4)
        h4.append(label)
        form.append(p)
        p.append(input)
        form.append(p1)
        p1.append(input1)
        form.append(p2)
        p2.append(input2)
        form.append(p3)
        p3.append(input3)
        form.append(p4)
        p4.append(input4)
        form.append(btn)

        // Set content and attributes
        div.setAttribute('class',"card text-white bg-info mb-3")
        div.setAttribute('style',"max-width: 20rem;")
        div1.setAttribute('class',"card-body")
        label.setAttribute('for',"")
        label.innerHTML = "New Item"
        p.setAttribute('class',"card-text")
        p1.setAttribute('class',"card-text")
        p2.setAttribute('class',"card-text")
        p3.setAttribute('class',"card-text")
        p4.setAttribute('class',"card-text")
        input.setAttribute('type',"text")
        input1.setAttribute('type',"text")
        input2.setAttribute('type',"text")
        input3.setAttribute('type',"text")
        input4.setAttribute('type',"text")
        input.setAttribute('name',"name")
        input1.setAttribute('name',"description")
        input2.setAttribute('name',"image_url")
        input3.setAttribute('name',"price")
        input4.setAttribute('name',"user")
        input.insertAdjacentText('afterend', "Name")
        input1.insertAdjacentText('afterend', "Description")
        input2.insertAdjacentText('afterend', "Image URL")
        input3.insertAdjacentText('afterend', "Price")
        input4.insertAdjacentText('afterend', "User")        
        btn.setAttribute('type',"button")
        btn.setAttribute('class',"btn btn-primary btn-sm")
        btn.setAttribute('id', "submitNewItem")
        btn.innerHTML = "Submit"
    }

    //renders form to create new user when called upon by event listener    
    renderNewUserForm() {

    }
}