// THIS ONLY SHOWS A QUANTITY IN CART
const cart = [
    { productId: 7, quantity: 1 },
    { productId: 8, quantity: 1 },
];
// THIS ONLY SHOWS A QUANTITY IN CART *********** THIS CART IS NOT RECOMMENDED BECAUSE EACH PRODUCTID NEEDS TO BE PULLED FROM THE API INDIVIDUALLY

// THIS IS HOW YOU CAN DO A PROPER LOOP FOR THIS CODING METHOD
async function getProductData(productId) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const json = await res.json();
        return json;
    } catch(err) {
        throw err
    }
}

Promise.all()
.then((res) => console.log(res));
.catch((err) => console.log(err));

// localStorage.setItem("cart", JSON.stringify(cart));

// this is to get the item
const cartInStorage = JSON.poarse(localStorage.getItem("cart"));

const itemToAddToCart = { productId: 4, quantity: 3 }

console.log(cartInStorage(e));

localStorage.setItem("cart", JSON.stringify(cartInStorage));

// to remove a single item
localStorage.removeItem("cart", JSON.stringify(cart));

//to remove all items
localStorage.clear("cart", JSON.stringify(cart));

// another method to do local Storage
const cartInLS = localStorage.getItem("cart");

console.log(cartInLS);

if(cartInLS) {
    //do logic to cart here

} else {
    localStorage.setItem("cart". []);
}
