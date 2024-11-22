let fname = "Aditi"
let lname = "Kumari"
let age  = prompt("Guess Aditi's age : ");

// old way
// let result = fname + ' ' + lname + ' ' + age + ' years old';
// alert(result)

// using template string
let res = `${fname} ${lname} is ${age} years old`;
alert(res)