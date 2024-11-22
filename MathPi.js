const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)
// samdandar to kdwa bolta hai, mitha to pyasa 
// ko bolna pdta h
// console.log(Math.PI);
// Math.PI = 45;
// console.log(Math.PI);

const chai = {
    name : "ginger chai",
    price : 80,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
