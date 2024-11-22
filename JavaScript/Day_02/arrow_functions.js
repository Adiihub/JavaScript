/**
 * function with no arguments
 */
// var hello = () => console.log("Hello World")
// hello() // Hello World


/**
 * Funtion with parameter and return
 */
// var sum = (a,b) => a+b;
// console.log(sum(5,4));


/**
 * fn with parameters, multiple lines of fun body
 */
// var process = (a, b) => {
//     console.log("Need to process");
//     console.log(arguments);  // this is not done in arrow func
//     return a*b;
// }
// console.log(process(5,4)); // 20


( function(){  // IIFE - immediately invoked func expression.
    console.log("Hello Arya");
} )() 