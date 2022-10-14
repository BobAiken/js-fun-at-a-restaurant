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
    var lookUpKey = 'name'
    if(this.restaurant.menus.breakfast.includes(foodItem)){
      return `Yes, we're serving ${foodItem[lookUpKey]} today!`
    }
    if(this.restaurant.menus.lunch.includes(foodItem)){
      return `Yes, we're serving ${foodItem[lookUpKey]} today!`
    }
    if(this.restaurant.menus.dinner.includes(foodItem)){
      return `Yes, we're serving ${foodItem[lookUpKey]} today!`
    }
    return `Sorry, we aren't serving ${foodItem[lookUpKey]} today.`
  }
}




module.exports = Chef;
