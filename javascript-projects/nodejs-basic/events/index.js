const { EventEmitter } = require('events');// TODO 1

const myEmitter = new EventEmitter(); // Buat variabel myEmitter yang merupakan instance dari EventEmitter.

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}


// TODO 3

myEmitter.on('birthday', birthdayEventListener); // Tentukan birthdayEventListener sebagai aksi ketika event 'birthday' dibangkitkan pada myEmitter.

// TODO 4
myEmitter.emit('birthday', 'NamaAnda');