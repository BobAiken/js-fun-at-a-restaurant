//nameMenuItem
function nameMenuItem(food) {
return `Delicious ${food}`
}
var menuItemName = nameMenuItem("Pizza")
console.log("menuItemName",menuItemName)

var burritoItem = nameMenuItem("Burrito");
var sushiItem = nameMenuItem("Pizza");
var tacoItem = nameMenuItem("Taco");
console.log(burritoItem,sushiItem,tacoItem)

//createMenuItem
function createMenuItem(name, price, type){
var menuItem = {
  name: name,
  price: price,
  type: type
}
return menuItem
}
var menuItemName = nameMenuItem("French Toast");
var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
console.log(menuItem)

//addIngredients
function addIngredients(food, arrayName){
  if (arrayName.includes(food)){
    //Don't add anything
  } else {
    arrayName.push(food)
  }
  return arrayName
}
var ingredients = []
addIngredients("cheese", ingredients)
addIngredients("peppers", ingredients)
addIngredients("onion", ingredients)
addIngredients("peppers", ingredients)
console.log(ingredients)

//formatPrice
function formatPrice(initialPrice){
return "$" + initialPrice
}

var menuItemName = nameMenuItem("French Toast");
var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
var initialPrice = menuItem.price;

var formattedPrice = formatPrice(initialPrice);
console.log(formattedPrice)

//decreasePrice

function decreasePrice(decreasedPrice){
return decreasedPrice * .9
}

var menuItemName = nameMenuItem("Fajitas");
var menuItem = createMenuItem(menuItemName, 6.00, "dessert");
var decreasedPrice = decreasePrice(menuItem.price);
console.log(decreasedPrice)

//createRecipe
function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}
var ingredients = [];
addIngredients("eggs", ingredients);
addIngredients("bacon", ingredients);

var title = nameMenuItem("Eggs & Bacon"); //title variable is now delicious eggs and bacon
var price = formatPrice("10.85")
var menuItem = createMenuItem(title, price, "breakfast");
var menuItemType = menuItem.type;

var recipe = createRecipe(title, ingredients, menuItemType);
console.log(recipe)

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
