/**
 * Primitives Data Type
 */

// String
 var name = "aditi";
 var title = "byahut";
 console.log(name);
 console.log(typeof(name));

// Number
var age  = 43;
var x = 3.2;
console.log(typeof x);

// BigInt
var bin_num = 123n;
console.log(bin_num);  

console.log(typeof NaN); //Not a Number but datatype is Number itself.

console.log(typeof NULL); // Null type

var total
console.log(total); // Undefined

console.log(typeof true); // Boolean

// Symbol
var s1 = Symbol();


/**
 * Non - Primitives
 */

// Objects
var person = {
  // key : Values
    name : "riya",
    age : 45
}
console.log(person);