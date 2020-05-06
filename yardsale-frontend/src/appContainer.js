class AppContainer {
    static items = [];
    static user = [];
    url = "http://localhost:3000";

    //tell the buttons what to do
    bindEventListeners() {
        const cil = document.getElementById("createItemList")
        cil.addEventListener("click", this.renderItems);

        const dil = document.getElementById("deleteItems")
        dil.addEventListener("click", this.deleteItems);

        const cni = document.getElementById("createNewItem")
        cni.addEventListener("click", this.renderNewItemForm.bind(this));

        const cnu = document.getElementById("createNewUser")
        cnu.addEventListener("click", this.renderNewUserForm.bind(this));

        const lif = document.getElementById("logIn")
        lif.addEventListener("click", this.renderLogInForm.bind(this));

        const clp = document.getElementById("clearPage")
        clp.addEventListener("click", this.clearPage);
    };

    clearPage() {
        const clear = document.querySelector('main')
        clear.innerHTML = ""
    }

    //fetch request
    getItems() {
        fetch(this.url + '/items')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(item => {
                new Item(item.id, item.name, item.description, item.image_url, item.price, item.user)
            });
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
        const main = document.querySelector('main');
        main.append(div)
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
            .catch(err => console.log(err))
        })
    };

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
        const input = document.createElement('input')
        const input1 = document.createElement('input')
        const input2 = document.createElement('input')
        const input3 = document.createElement('input')
        const btn = document.createElement('button')
        // Append newly created elements into the DOM
        const main = document.querySelector('main');
        main.append(div)
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
        form.append(btn)

        // Set content and attributes
        div.setAttribute('class',"card text-white bg-info mb-3")
        div.setAttribute('style',"max-width: 20rem;")
        div1.setAttribute('class',"card-body")
        form.setAttribute('id',"form-item")
        label.setAttribute('for',"")
        label.innerHTML = "New Item"
        p.setAttribute('class',"card-text")
        p1.setAttribute('class',"card-text")
        p2.setAttribute('class',"card-text")
        p3.setAttribute('class',"card-text")
        input.setAttribute('type',"text")
        input1.setAttribute('type',"text")
        input2.setAttribute('type',"text")
        input3.setAttribute('type',"text")
        input.setAttribute('name',"name")
        input1.setAttribute('name',"description")
        input2.setAttribute('name',"image_url")
        input3.setAttribute('name',"price")
        input.insertAdjacentText('afterend', "Name")
        input1.insertAdjacentText('afterend', "Description")
        input2.insertAdjacentText('afterend', "Image URL")
        input3.insertAdjacentText('afterend', "Price")       
        btn.setAttribute('type',"button")
        btn.setAttribute('class',"btn btn-primary btn-sm")
        btn.setAttribute('id', "submitNewItem")
        btn.innerHTML = "Submit";
        this.bindSubmitItem();
    };

    //renders form to create new user when called upon by event listener    
    renderNewUserForm() {
        // Create elements needed to build a card  
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const form = document.createElement('form')
        const h4 = document.createElement('h4')
        const label = document.createElement('label')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const input = document.createElement('input')
        const input1 = document.createElement('input')
        const input2 = document.createElement('input')
        const btn = document.createElement('button')

        // Append newly created elements into the DOM
        const main = document.querySelector('main');
        main.append(div)
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
        form.append(btn)

        // Set content and attributes
        div.setAttribute('class',"card text-white bg-warning mb-3")
        div.setAttribute('style',"max-width: 20rem;")
        div1.setAttribute('class',"card-body")
        form.setAttribute('id','form-user')
        label.setAttribute('for',"")
        label.innerHTML = "New Item"
        p.setAttribute('class',"card-text")
        p1.setAttribute('class',"card-text")
        p2.setAttribute('class',"card-text")
        input.setAttribute('type',"text")
        input1.setAttribute('type',"text")
        input2.setAttribute('type',"text")
        input.setAttribute('name',"email")
        input1.setAttribute('name',"password")
        input2.setAttribute('name',"password_confirmation")
        input.insertAdjacentText('afterend', "Email")
        input1.insertAdjacentText('afterend', "Password")
        input2.insertAdjacentText('afterend', "Confirm Password")
        btn.setAttribute('type',"submit")
        btn.setAttribute('class',"btn btn-primary btn-sm")
        btn.setAttribute('id', "submitNewUser")
        btn.innerHTML = "Register";

        this.bindSubmitUser();
    };

    //binding submit new item button to createItem function
    bindSubmitItem() {
        const sni = document.getElementById("submitNewItem")
        sni.addEventListener('click', () => this.createItem(event));
    };

    //binding submit new user button to createUser function
    bindSubmitUser() {
        const snu = document.getElementById("submitNewUser")
        snu.addEventListener('click', () => this.createUser(event));
    };

    //stores newly created item in api
    createItem(event) {
        event.preventDefault();
        const form = document.getElementById('form-item')
        fetch(`http://localhost:3000/items`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                image_url: form.image_url.value,
                description: form.description.value,
                price: form.price.value,
                user_id: 1
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        this.clearPage
    };

    //stores newly created item in api
    createUser(event) {
        event.preventDefault();
        const form = document.getElementById('form-user')
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value,
                password_confirmation: form.password_confirmation.value
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        this.clearPage
    };

    //renders form to create new user when called upon by event listener    
    renderLogInForm() {
        // Create elements needed to build a card  
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const form = document.createElement('form')
        const h4 = document.createElement('h4')
        const label = document.createElement('label')
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        const input = document.createElement('input')
        const input1 = document.createElement('input')
        const btn = document.createElement('button')

        // Append newly created elements into the DOM
        const main = document.querySelector('main');
        main.append(div)
        div.append(div1)
        div1.append(form)
        form.append(h4)
        h4.append(label)
        form.append(p)
        p.append(input)
        form.append(p1)
        p1.append(input1)
        form.append(btn)

        // Set content and attributes
        div.setAttribute('class',"card text-white bg-success mb-3")
        div.setAttribute('style',"max-width: 20rem;")
        div1.setAttribute('class',"card-body")
        form.setAttribute('id','form-user')
        label.setAttribute('for',"")
        label.innerHTML = "Log In"
        p.setAttribute('class',"card-text")
        p1.setAttribute('class',"card-text")
        input.setAttribute('type',"text")
        input1.setAttribute('type',"text")
        input.setAttribute('name',"email")
        input1.setAttribute('name',"password")
        input.insertAdjacentText('afterend', "Email")
        input1.insertAdjacentText('afterend', "Password")
        btn.setAttribute('type',"submit")
        btn.setAttribute('class',"btn btn-primary btn-sm")
        btn.setAttribute('id', "submitLogIn")
        btn.innerHTML = "Log In";

        this.bindSubmitLogIn();
    };

    //binding submit new user button to createUser function
    bindSubmitLogIn() {
        const sli = document.getElementById("submitLogIn")
        sli.addEventListener('click', () => this.login(event));
    };
    
    //cookie monster
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    //function to log in user
    login(event) {
        event.preventDefault();
        const form = document.getElementById('form-user')
        fetch(`http://localhost:3000/sessions`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                "X-CSRF-Token": this.getCookie("CSRF-TOKEN")
            },
            body: JSON.stringify({
                email: form.email.value,
                password: form.password.value,
            }),
            withCredentials: true
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        this.clearPage
    }
    
}