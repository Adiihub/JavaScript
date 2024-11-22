/** async function getmessage(){   //if we use async as prefix yh Promise obj bana deta hai
 *                                 // starts returning promise object
        return "Hello Students"
}
console.log(getmessage())
getmessage().then(result => console.log(result)) */


/**
 * Print Hello after Await
 * Async : func ke prefix me add krte hai
 * Await : inside func (it's waiting)
 * Await : to wait for the promise to resolve
 */

/** 
function printhelloafterAwait(){
    console.log("First Line")
    setTimeout(()=>{
        console.log("Hello Aditi")
    },3000)
    console.log("Last Line")
}
printhelloafterAwait(); */


console.log("Hello from Begining")
async function printhelloafterAwait(){
    console.log("First Line")

    let data = new Promise((resolve, reject) => {
        // converting this part into promise and wait for data to come
        setTimeout(()=>{
            resolve("Hello Aditi")  
        },3000)
    })
    
    let result  = await data  // start waiting for the data promise to be completed
    console.log(result)
    console.log("Last Line")
}
printhelloafterAwait();
console.log("Hello from End")

