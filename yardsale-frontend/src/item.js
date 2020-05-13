class Item {
    constructor(name, description, image_url, price, user){
        this.name = name,
        this.description = description,
        this.image_url = image_url,
        this.price = price;
        this.user = user;
        AppContainer.items.push(this);
    }
}