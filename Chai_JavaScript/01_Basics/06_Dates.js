// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreDate = new Date("2006-0-7");

let myCreatedDate = new Date(2006, 0, 7);
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);    // MiliSeconds me dega
console.log(myCreatedDate.getTime());


let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());