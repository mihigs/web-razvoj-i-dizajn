function Product(name, price) {
  this.name = name;
  this.price = price;
}

const product_01 = new Product('cola', 4.25);

function ShoppingCart(items) {
  this.items = items;
  this.x = 4;
  this.y = function() {
    return this.x;
  }
  this.innerObj = {};
}

ShoppingCart.prototype.addItems = function() {

}

ShoppingCart.showProperties = function() {

}

const shoppingCart_01 = new ShoppingCart([{}, {}, {}]);
const shoppingCart_02 = new ShoppingCart();
const shoppingCart_03 = new ShoppingCart();

function Object() {
  console.log(this);
}

console.log(Object());
console.log(new Object());

