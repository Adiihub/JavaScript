/**
 * Destructuring in Arrays
 
const num = [1,2,3]
const [a,b,c,d] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)
console.log(d) // Undefined

const [p,q,r] = [1, 2, [4,5,6]]
console.log(p)
console.log(q)
console.log(r) */


/**
 * Destructuring in an Object
 * Variable name must match with the keys of the object
 */
const per = {
    age : 43,
    name : "Gita",
    city : "Banglore",
    address : {
        city : "Pune",
        state : "Mumbai"
    }
}
const {name, age, hobby, address : {city, state }} = per
console.log(name)
console.log(age)
console.log(hobby) // Undefined
console.log(city) 