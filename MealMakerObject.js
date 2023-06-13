const menu = {
  _meal: 'Ayam Goreng',
  _price: 7.5,

  //add setters
  //add method meal and price
  set meal(mealToCheck) {
    if (mealToCheck === 'string') {
      return (this._meal = mealToCheck)
    }
  },
  set price(priceToCheck) {
    //make sure _price is always number
    if (typeof priceToCheck === 'number') {
      return (this._price = priceToCheck)
    }
  },
  //add getter method
  get todaySpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for RM ${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  },
}

console.log(menu.todaySpecial())
