let itemsCart = []
let totalPrice = 0;
function kosik(txt,price,productId){
    var productName = document.getElementById(productId).getElementsByClassName("card-title")[0].innerHTML
    var productPrice = parseInt(document.getElementById(productId)).getElementsByClassName("card-price").innerHTML
    let product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };
    let productToFind = itemsCart.find(item => item.name === productName);
    if (productToFind) {
        productToFind = itemsCart.find(item=>item.name ===productName);
        totalPrice += productPrice;
    } else{
        itemsCart.push(product);
        totalPrice+=productPrice;
    }
    console.log(itemsCart, totalPrice)
    console.log(txt + " "+price);
}