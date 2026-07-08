// function add(a,b){
//     return a + b;
// }

// var add = function(a,b){
//     return a + b;
// }

// var result = add(15,10);
// console.log(result);

// function callback(){
//     console.log('Prince is calling a callback function');
    
// }

// const add = function(a,b,callback){
//     var result = a + b;
//     console.log('result: ' +result);
//     callback();
    
// }

// add(3,4,callback);

// const add = function(a,b,callback){
//     var result = a + b;
//     console.log('result: ' +result);
//     callback();
// }

// add(2,7, () => console.log('Add completed'));

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('Greeting.txt', 'Hello ' +user.username + '!\n', () => {console.log('File is created')});


const notes = require('./notes.js');
console.log('server file is available');

var age = notes.age;

var result = notes.addNumber(age+17, 10);

console.log(age);
console.log('result is now ' +result);






