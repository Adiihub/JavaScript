/**
 * Higher Order We use for Asynchronous Programming
 */

function operation(operationfn, a, b){
    return operationfn(a,b);
}
function sum(a, b){
    return a + b;
}
let res = operation(sum, 5, 3)
console.log(res) 


function getGreetMethod(){
    return function(){  // Anonymous function : jis fun ka koii name nhiii ho
        console.log("Hello World!")
    }
}
let greetfn = getGreetMethod()
console.log(typeof greetfn)
greetfn()