// console.log("Hello World!");

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }
// console.log(add(5, 3)); 
// console.log(subtract(5, 3));

// function fruitColor(fruit) {
//     console.log("fruit name is " + fruit);
// }
// fruitColor("apple");


// var fs=require('fs');
// fs.writeFileSync('RPC.txt', 'Hello, this is a file created by Node.js!');


// const basics = require('./basics.js');
// console.log(basics.name);

const fs = requir('fs');
fs .unlink("RPC.txt", function(err){
    if(err) console.error(err);
    else console.log("removed");
})