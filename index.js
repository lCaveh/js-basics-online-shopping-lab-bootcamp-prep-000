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
  let str = "In your cart, you have ";
  if (cart.length > 0){
    for (var i=0; i<cart.length; i++) {
      str+=`${cart[i]["itemName"]} at $${cart[i]['itemPrice']}, `;
     }
    str+=`and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    } else {
     str = "Your shopping cart is empty."
  }
  return str;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}
