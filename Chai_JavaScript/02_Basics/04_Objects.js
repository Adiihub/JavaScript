// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "ad12"
tinderUser.name = "John"
tinderUser.age = 25

// console.log(tinderUser)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d "};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)