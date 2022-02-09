// function first() {
//   console.log("This is thje first function")
// }
// function second(one) {
//   one();
//   console.log("This is the second function");
// }
// second(first)

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
}

let order = (fruit_name, call_production) => {
  // console.log(`${stocks.Fruits[fruit_name]} was selected`)
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`)
  }, 2000)
  call_production();
}

let production = () => {
  setTimeout(() => {
    console.log("This is the production function")
    setTimeout(() => {
      console.log("Fruit has been chopped");
      setTimeout(() => {
        console.log("Water and Ice Added")
        setTimeout(() => {
          console.log("Machine Started");
          setTimeout(() => {
            console.log("Container Selected")
            setTimeout(() => {
              console.log("Toppings Selected")
              setTimeout(() => {
                console.log("Ice Cream ready")
              }, 2000)
            }, 3000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 2000)
  }, 0000)
};
order(2, production)
