//createRestaurant
function createRestaurant(name){
var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner:[]
  }
}
return restaurant
}

//addMenuItem
function addMenuItem(restaurant, menuItem){
var menuItemType = menuItem.type
  if (restaurant.menus[menuItemType].includes(menuItem) === false){
    restaurant.menus[menuItemType].push(menuItem)
  }
  return restaurant
}


var pizzaRestaurant = createRestaurant("Sexy Pizza");
var bbqPizza = {
  name: "BBQ Chicken Pizza",
  price: "12.49",
  type: "breakfast"
};

var baconEggsPizza = {
  name: "Bacon and Eggs Pizza",
  price: "13.49",
  type: "breakfast"
};

addMenuItem(pizzaRestaurant, bbqPizza);
addMenuItem(pizzaRestaurant, baconEggsPizza);
addMenuItem(pizzaRestaurant, baconEggsPizza);

//console.log(pizzaRestaurant)

//removeMenuItem

function removeMenuItem(restaurant, menuItem, itemType){
  
  for ( i = 0; i<restaurant.menus[itemType].length; i++ ){
    if (menuItem === restaurant.menus[itemType][i]["name"]){
      restaurant.menus[itemType].splice(i,1)
      return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}


var restaurant = pizzaRestaurant
var itemType = "breakfast"
// console.log(pizzaRestaurant)
// console.log(pizzaRestaurant.menus[itemType])
// removeMenuItem(pizzaRestaurant, "Bacon and Eggs Pizza", "breakfast")
// console.log(pizzaRestaurant)











module.exports = {
createRestaurant,
addMenuItem,
removeMenuItem
}
