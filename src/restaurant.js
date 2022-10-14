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
  if (menuItem.type === "lunch" && restaurant.menus.lunch.includes(menuItem) === false) {
    restaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type === "breakfast" && restaurant.menus.breakfast.includes(menuItem) === false) {
    restaurant.menus.breakfast.push(menuItem)
  } else if (menuItem.type === "dinner" && restaurant.menus.dinner.includes(menuItem) === false){
    restaurant.menus.dinner.push(menuItem)
  }
return restaurant
}

var pizzaRestaurant = createRestaurant("Sexy Pizza");
var bbqPizza = {
  name: "BBQ Chicken Pizza",
  price: "12.49",
  type: "lunch"
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

if (restaurant.menus.breakfast[0] === undefined){
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}
  else if (itemType === "breakfast" && menuItem === restaurant.menus.breakfast[0].name) {
    restaurant.menus.breakfast.pop()
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
    else if (itemType === "lunch" && menuItem === restaurant.menus.lunch[0].name){
      restaurant.menus.lunch.pop()
      return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
    }
      else if(itemType === "dinner" && menuItem === restaurant.menus.dinner[0].name){
        restaurant.menus.dinner.pop()
        return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
      }

}



console.log(pizzaRestaurant)
console.log(pizzaRestaurant.menus.breakfast[0].name)
console.log(removeMenuItem(pizzaRestaurant,"Bacon and Eggs Pizza", "breakfast"))
console.log(pizzaRestaurant)











module.exports = {
createRestaurant,
addMenuItem,
removeMenuItem
}
