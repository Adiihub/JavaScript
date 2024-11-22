const user = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
    }
}

// for(let key in user){
//     console.log(key)
// }

// for(let key in user){
//     console.log(key, " => ", user[key])
// }


// console.log(Object.keys(user)) 
// console.log(Object.values(user)) 
// Get both keys & values
// console.log(Object.entries(user))  // returns an array of arrays, where each inner array contains a


// Accessing the data
// console.log(user.name)
// console.log(user['name'])


/**
 * Adding the data to the Object
 
user.country = "India"
user['continent'] = "Asia"
console.log(user)*/


/**
 * Deleting Object keys and object itself
 
delete user.country
console.log(user)

delete user.continent
console.log(user)*/



/**
 * CLoning an Object using assign
 */
const new_person = Object.assign({}, user);
console.log(new_person)

const new_person1 = Object.assign({}, user, {role : "Developer"})
console.log(new_person1)


