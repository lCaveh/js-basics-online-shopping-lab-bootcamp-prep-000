var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random()*100)+1;
  cart.push({"itemName": item, "itemPrice": itemPrice});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let str = "
  for (i=0;i++;i<cart.length) {
    
}
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}
