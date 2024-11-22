const arr = [1,2,3,4]
const nar = [7,8,9]
arr.push(nar)
console.log(arr);

// Spread operator
const all_New_Values = [...arr, ...nar]
console.log(all_New_Values)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [4, 8, [1, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)


console.log(Array.isArray("ADiti"))
console.log(Array.from("ADiti"))   // Intersting

let score1 = 300
let score2 = 200
let score3 = 100

console.log(Array.of(score1, score2, score3))