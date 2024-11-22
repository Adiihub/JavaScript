/**
 * Define a Function
 */
function hellostudents(){
    console.log("Hello Students!");  // function definition
}
hellostudents();


function sum(a, b){
    return a+b;
}
console.log(sum(5,6));


function sum(a, b=9){
    return a+b;          // Default value
}
console.log(sum(5));


function func(){
    console.log(arguments)
}
func(1,2,3,4,5,6,7,8);