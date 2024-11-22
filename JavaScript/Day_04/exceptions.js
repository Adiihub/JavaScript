/**
 * Syntax Related
 */
// console.log("Hello   -- Syntax Error


//Runtime exceptions
/** 
let x = 5;
console.log(x.toUpperCase)  */


/**
 * Logical error
 
let num = 5;
for(i=-3; i<5; i++){
    console.log(num/i)  // logical error is diving by 0;
}   */


try{   // if something wrong happend in try block catch will handle it
    // let obj = undefined 
    let obj = {
        name: "John"
    };
    console.log(obj.name)
}catch(err){
    console.log("Exception Handled")
    console.log(err)
}finally{
    console.log("I will always exceute")
}

