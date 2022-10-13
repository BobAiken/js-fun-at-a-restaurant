//takeOrder
function takeOrder(order, deliveryOrders){
if (deliveryOrders.length === 3){
  //Don't add
} else {
  deliveryOrders.push(order)
}
  return deliveryOrders
}
var deliveryOrders = []

var order1 = {
  orderNumber: 1,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
}

var order2 = {
  orderNumber: 2,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
}

var order3 = {
  orderNumber: 3,
  item: "rueben",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};
var order4 = {
  orderNumber: 864,
  item: "garden salad",
  price: "6.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = []

takeOrder(order1, deliveryOrders);
takeOrder(order2, deliveryOrders);
takeOrder(order3, deliveryOrders);
takeOrder(order4, deliveryOrders);

//refundOrder
function refundOrder(orderNumber,deliveryOrders){
  for (i=0;i<deliveryOrders.length;i++){
    if(deliveryOrders[i].orderNumber === orderNumber){
      deliveryOrders.splice(i,1)
    }
  }
    return deliveryOrders
}

//listItems
function listItems(deliveryOrders){
  var items = ""
  for (i=0;i<deliveryOrders.length;i++){
    if (i === deliveryOrders.length - 1){
      items = items + deliveryOrders[i].item
    } else {
      items = items + deliveryOrders[i].item + ", "
    }
  }
  return items
}

//searchOrder
function searchOrder(deliveryOrders,searchItem){
  for (i=0 ; i < deliveryOrders.length; i++ ){
    if (deliveryOrders[i].item === searchItem){
      return true
    }
    }
    return false
}

var order1 = {
  orderNumber: 1234,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
};

var order2 = {
  orderNumber: 2342,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
};

var deliveryOrders = [order1, order2];

console.log(searchOrder(deliveryOrders,"burger"))
console.log(searchOrder(deliveryOrders, "sushi"))
console.log(searchOrder(deliveryOrders, "blt sandwich"))

module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
}
