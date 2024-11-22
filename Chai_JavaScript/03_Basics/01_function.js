
function loginUserMessage(username){
    if(username === undefined){
        return "Please enter your username";
    }
    return `${username} just Logged In`
}
// console.log(loginUserMessage("Aditi"));


function CalculateCartPrice(val1, val2, ...num1){ //rest or spread operator
    return num1
}
// console.log(CalculateCartPrice(200, 400, 300, 500, 800))



const user = {
    username : "aditi",
    price : 300
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username : "aditi",
    price : 4000
})


const myNewArray = [300,500,600,400]
function return2ndVal(getArray){
    return getArray[1]
}

console.log(`Second Val : ${return2ndVal(myNewArray)}`)