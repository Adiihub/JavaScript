/**
 * Clousers are : functions 
 */
function x(){
    var a = 5;
    return function y(){
        console.log(a);
    }
}
let z = x();
console.log(z);
z();