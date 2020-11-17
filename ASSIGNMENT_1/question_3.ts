let order={
  id:101,
  title:"chocolate",
  price:100,

};
console.log(order);
let order_cpy={
  d:101,
  title:"chocolate",
  price:100,
  printOrder: function(){
    console.log(this);
  },

  getPrice: function(){
    console.log("The price is: " +this.price);
  }
};
order_cpy.printOrder();
order_cpy.getPrice();


let cpy=Object.assign(order,order_cpy);
console.log(order_cpy);
console.log(cpy);
