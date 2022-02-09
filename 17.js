let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

//promises ------------------->
// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve()
//     } else {
//       reject()
//     }
//   })
// }
// order()
//   .then()
//   .then()
//   .then()
//   .catch()
//   .finally()
// // -------------------------------

// async function order() {
//   try {
//     await abc;
//   }
//   catch (error) {
//     console.log("abc doesn't exist", error)
//   }
//   finally {
//     console.log("runs code anyways")
//   }
// }

// order()
//   .then(() => {
//     console.log("no deberia pe")
//   })

// let toppingsChoice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         console.log("which toppping would u like?")
//       )
//     }, 3000)
//   })
// }

// async function kitchen() {
//   console.log(" A ")
//   console.log(" B ")
//   console.log(" C ")

//   await toppingsChoice()

//   console.log(" D ")
//   console.log(" E ")
// }

// kitchen();
// console.log("cleaning the dishes")
// console.log("cleaning the tables")
// console.log("taking other orders")

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    }
    else {
      reject(console.log("Shop is closed"))
    }
  })
}

async function kitchen() {
  try {
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`)

    await time(0000)
    console.log("Start the production")

    await time(2000)
    console.log("CUt the fruit")

    await time(2000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)

    await time(1000)
    console.log("Start the machine")

    await time(2000)
    console.log(`icecream placed on ${stocks.holder[0]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`)


    await time(2000)
    console.log("icecream served")



  }
  catch (error) {
    console.log("customer left", error)

  }
  finally {
    console.log("OUr shop is closed")
  }
}
kitchen()
