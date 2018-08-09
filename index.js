var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random()*100);
  cart.push({"itemName": item, "itemPrice": itemPrice}); 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}
