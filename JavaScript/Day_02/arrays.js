/**arr = [1,2,3]
console.log(typeof(arr))

arr1 = new Array()
console.log(typeof(arr1))
console.log(arr1)  **/


/**
 * Arrays are Mutable. we can modify the arrays
 */


// arr = [1,2,3,4,5,6,4,6,5]
// console.log(arr[0])
// console.log(arr[32]) // Undefined
// console.log(arr[-1]) // Undefined


/**
 * Insert items in the array // Push - add elements in the end/last
 */
// arr = [23,4,2,5,76,3]
// console.log(arr);

// arr.push(11);
// console.log(arr);

// arr.push(22,33,44,55);
// console.log(arr);


// Unshift Method : add elements to the start
// arr.unshift(999);
// console.log(arr);


// Pop Method : remove element from last
// let arr = [2,3,5,7,8,5]
// console.log(arr.pop())
// console.log(arr)


// Shift Method : remove element from first
// console.log(arr.shift())
// console.log(arr)


//concat
// let a1= [1,2,3]
// let a2= [5,6]
// let r = a1.concat(a2)
// console.log(r)

//length
// console.log(r.length)


/**
 * Convert Array into String
 */
// chr_arr = ['a', 'd', 'i', 't', 'i', ' ', 'k', 'u', 'm','a','r','i']


// Join : convertion ke liye
// console.log(chr_arr.join())
// console.log(chr_arr.join(""))
// console.log(chr_arr.join("$"))


//to_string : convert character to string
// console.log(chr_arr.toString())


/**
 * Slicing of the array : does not change the existing array
 
let num = [3,4,5,7,3,7,2]
console.log(num.slice(1,4)) // 4 is not included
console.log(num.slice(2)) 
console.log(num.slice(5, -1)) 
console.log(num.slice(-2)) // last two elements */


/**
 * Splicing : which modify the given array
 * Adds or removes array elements
 
let numbers = [1,2,3,4,5]
let removed = numbers.splice(2,3) //  2nd index se 3 elements ko nikal lega
let remov = numbers.splice(2,3, 5, 11, 14) // it adds after removing
console.log(remov)
console.log(removed)
console.log(numbers)
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");
*/ 


/**
 * Reverse a given array
 
let num = [4,1,5,7]
num.reverse()
console.log(num);*/


// let num = [4,1,5,7]
// console.log(num.indexOf(5))


/**
 * Sorting of the array
 */
let my_arr = [5,4,2,3,1,8]
// my_arr.sort((a,b) => a - b)          // Doubt
my_arr.sort((a,b) => b-a)  // reverse order me print krega
console.log(my_arr);
