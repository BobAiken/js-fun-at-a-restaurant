class Chef {
  constructor(name,restaurant) {
      this.name = name
      this.restaurant = restaurant
  }
  greetCustomer(customerName,isMorning){
    if(isMorning === true){
      return `Good morning, ${customerName}!`
    }
    return `Hello, ${customerName}!`
  }
  checkForFood(foodItem){
    var foodItemType = foodItem.type
    if(this.restaurant.menus[foodItemType].includes(foodItem)){
      return `Yes, we're serving ${foodItem.name} today!`
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}




module.exports = Chef;
