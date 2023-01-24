let cart = []
let totalPrice = 0

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    console.log(cart)
    renderCart()
    document.querySelector("#cart .label").innerHTML = cart.length
    // if(document.querySelector("#cartview").classList.contains("hidden")){
    // toggleCart();
    // }
    document.querySelector("#cartview").classList.remove("hidden")
}

function renderCart() {
    totalPrice = 0;
    let listHTML = ""
    cart.map((prod, index) => {
    listHTML += `<li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProduct(${index})">X</button>
    </li>`
    totalPrice += prod.productPrice
    });
    document.querySelector("#cartview ul").innerHTML = listHTML
    document.querySelector("#totalt").innerHTML = totalPrice
}


function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart();   
    }, 700)
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
    }