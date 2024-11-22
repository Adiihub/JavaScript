const arr = [1,2,4,5,6,7]
console.log(arr.slice(1,3)) // [2,4]

const ar2 = new Array(5,3,6,2,7,5)
arr.push(99)
arr.pop();     // last element ko pop krega

arr.unshift(0);  // first me element add krta h
arr.shift();     // first element ko pop krega

console.log(arr.includes(4))
console.log(arr.indexOf(4))
console.log(arr)

/** 
 * Slice & Splice
 */

const arr1 = [1,2,3,4,5,6,7,8]
console.log(arr1.slice(1,3)) // [2,3]
console.log(arr1.slice(1)) // [2,3,4,5,6,
console.log(arr1.slice(-3)) // [6,7,8]

console.log(arr1.splice(3,5)); // [4,5,6,7,8] 
console.log(arr1) // [1,2,3]  original array ko vi modify krta hai