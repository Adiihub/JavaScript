/**
 * Closure -> used in Encapsulation(data ko private krna)
 */



/**function hello(){
    let name = "Aditi"
    console.log(name);  
}
hello();
console.log(name) */


function outerfn(){
    let outervar = "I am from outer fun"
    function innerfn(){
        console.log(outervar)
    }
    return innerfn;
}
let fn = outerfn()


function customerCounter(){
    let count = 0
    return function(){
        count++
        console.log("New customer count is : ",count)
    }
}
let count = customerCounter()
count()
count()
count()
