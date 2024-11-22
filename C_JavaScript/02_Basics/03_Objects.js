// Singleton -- jb constructor se bnega tabhii, literals se nhii bnega

// Object Literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Aditi",
    age : 18,
    [mySym] : "mykey1",
    address : "Delhi",
    email : "aditi22@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Friday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser);
// Object.freeze(JsUser)

JsUser.greetings = function (){
    console.log("Hello Js User")
}

JsUser.greetings2 = function (){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetings())
console.log(JsUser.greetings2())