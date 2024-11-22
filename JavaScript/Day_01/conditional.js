var num = 20;
if(num % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
console.log("After if");


// Ternary Operator -> if-else
num%2 == 0 ? console.log("Even") : console.log("Odd");


/**
 * Nested Conditions
 */
var a = 8;
if(a>=0){
    if(a >= 5){
        console.log("A is greater than 0");
    }
    else{
        console.log("A is less than 5");
    }
}else{
    console.log("A is less than 0");
}

a >= 0 ? a>5 ? console.log("A is greater than 0") : console.log("A is less than 5") : console.log("A is less than 0");


/**
 * Switch 
 */
var fruit = "Apple";
switch(fruit){
    case "Apple":
        console.log("Its an Apple");
        break;
    case "Mango":
        console.log("Its mango");
        break;
    default : 
        console.log("Not a valid fruit");        
}