let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time)
    }

    else {
      reject(console.log("our shop is closed"))
    }
  })
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

  .then(() => {
    return order(0000, () => console.log("Production has started"))
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"))
  })
  .then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
  })
  .then(() => {
    return order(1000, () => console.log("Machine has been started"))
  })
  .then(() => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[0]}`))
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected`))
  })
  .then(() => {
    return order(2000, () => console.log("Icecream has been served"))
  })
  .catch(() => {
    console.log("Customer Left")
  })

  .finally(() => {
    console.log("Day ended, our shop is closed")
  })
