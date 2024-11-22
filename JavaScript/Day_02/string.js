/**
 * String  -- it is immutable (means can't be changed the value)
 */
let name = "Aditi"
let city = "Bihar"
console.log(name, city)
console.log(typeof(name))


/**
 * Accessing character based on index
 */
console.log(name[0]) //A
console.log(name[3]) //t


// Length of the string
console.log(name.length)


let first = "Aditi"
let last = " Byahut"
let full_name = first.concat(last)
console.log(full_name)
console.log(first+last)


/**
 * convert into upper case
 */
console.log(full_name.toUpperCase())


/**
 * character at any index str[i]
 */
console.log(name.charAt(3))


/**
 * Slicing
 */
console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2, 5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5, -1))


/**
 *  IndexOf
 */
console.log(name.indexOf('t'))
console.log(name.indexOf('Z')) // if not found it will return -1


/**
 *  Trim
 */
let word = "  Riya  "
console.log(word);
console.log(word.trim()); //take out the extra space


// Split
name = "ADiti byahut yss"
console.log(name.split(" "))  // array of string

