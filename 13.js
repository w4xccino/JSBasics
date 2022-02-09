// function myFuncB() {
//   console.log("B")
// }
// function myFuncA() {
//   return myFuncB();
// }
// const myA = myFuncA()

function myFuncB() {
  console.log("B")
  return "me voy a ejecutar"
}
function myFuncA() {
  return "agregare los parentesis a la funcion" + myFuncB()
}
const myA = myFuncA()
console.log(myA)

// function xd() {
//   console.log("asd")
// }

// const a = xd
// console.log(a);
