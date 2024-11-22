/**
 * Promises from Simran
 * to make a promise object : new Promise()
 */
const simranPromise = new Promise((resolve, reject) => { //callback fun && arrow fun

    let parentdecision = true;
    if(parentdecision) {
        resolve("Yayy! ab shadi ki tyari kro", parentdecision);
    }else{
        reject("Nahin, abhi to kuch nahi ho skta..Sorry");
    }

});
simranPromise.then((msg, pd) => {
    console.log("Simran message : ", msg);
    console.log("Parent Decision was : ", pd)
    console.log("Let's book the wedding venue")
}).catch((msg) => {
    console.log("Simran message : ", msg);
    console.log("TInder kha ho yarr")
}).finally(() => console.log("Chalo Life me clarity mili")) //it's executes all the time


/**
 * Plaining to go Goa (3 Friends)
 */
/** 
const f1Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Friend 1 : Hey I'm in for Goa")
        }
        else{
            reject("Friend 1 : Hey mere pet me dard ho rha hai")
        }
    },1000)  // after 1sec whateven in settimeout will be executed
    
})

const f2Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Friend 2 : Hey I'm in for Goa")
        }
        else{
            reject("Friend 2 : Sorry mera Dog bimar hai")
        }
    },2000)
    
})

const f3Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Friend 3 : Hey I'm in for Goa")
        }
        else{
            reject("Friend 3 : Sorry mujhe live sessions krne hai")
        }
    },3000)
    
})

// agr sare promises resolve honge tbhii then will execute nhi to nhiii
//            Array of Promises
Promise.all([f1Promise,f2Promise,f3Promise]).then((msg) => {
    console.log(msg)
    console.log("All Friends are in for Goa")
    console.log("Yay! We are going Goa !")
}).catch((msg) => {
    console.log(msg)
    console.log("Yaar band kro Goa ka plan banana")
})

*/


// if any of is valid chahte hai to hum (any) ka use krenge

const gf1Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("GF 1 : Hey I'll come for Dinner")
        }
        else{
            reject("GF 1 : Phone is Unreacheable !")
        }
    },1000)
    
})
const gf2Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("GF 2 : Hey I'll come for Dinner")
        }
        else{
            reject("GF 2 : I am on diet !")
        }
    },1000)
    
})
const gf3Promise  = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("GF 3 : Hey I'll come for Dinner")
        }
        else{
            reject("GF 3 : Hey mere pet me dard ho rha hai")
        }
    },1000)
    
})

Promise.any([gf1Promise, gf2Promise, gf3Promise]).then((res) => {
    console.log(res)
    console.log("My Valentine day is shorted !")
}).catch((msg) => {
    console.log(msg)
    console.log("How to be the part of Bajrang Dal ?")
})

