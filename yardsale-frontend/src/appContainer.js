class AppContainer {
    items = []
    const BASE_URL = "http://localhost:3000"
    const ITEMS_URL = `${BASE_URL}/items`
    const main = document.querySelector("main")

    document.addEventListener("DOMContentLoaded", () => loadItems())

    const loadItems = () => {
        fetch(ITEMS_URL)
        .then(res => res.json())
        .then(json => {
            json.forEach(item => renderItem(item))
        })
    }

    const renderItem = (itemHash) => {
        const div = document.createElement("div")
        const p = document.createElement("p")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", itemHash.id)
        p.innerHTML = itemHash.name
        p.innerHTML = itemHash.description
        p.innerHTML = itemHash.image_url
        p.innerHTML = itemHash.price
        
    }

}