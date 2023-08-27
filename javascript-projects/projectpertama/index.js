//cara pertama

// const coffeeStock = require('./state');

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// }

// makeCoffee("robusta", 80);

// /* output
// Kopi berhasil dibuat!
// */

//cara kedua

// const { coffeeStock, isCoffeeMachineReady } = require('./state');

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

//cara ketiga

import coffeeStock from './state.js';

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}

displayStock(coffeeStock);