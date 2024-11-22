/**
 * ForEach Method -> Higher Order Function
 * -- for accessing every element of array
 */
players = ["Sahcin", "Virat", "Abhay", "Aditi"]
players.forEach((player) => console.log(player))


/**
 * Map -> Creation of new transformed Array
 * -- original array ko change nhii krta
 */
arr = [1,2,3,4,5,6]
cube_arr = arr.map((num) => num**3)
console.log(cube_arr)


/**
 * Filter -> filter krke new array bna sakte hai
 */
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let even = arr1.filter((num) => num%2==0)   
console.log(even)


/**
 * Reduce
 */
const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr, next) => curr + next)
console.log(sum);

