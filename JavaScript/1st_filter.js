// null, NaN, undefined, 0, all are false in js
// Boolean(null)

const products = [
    { name : 'Laptop', price : 1000},
    { name : 'Smartphone', price : 500},
    { name : 'Tablet', price : 800},
    { name : 'Monitor', price : 300},
];

// Filter products with price >= 800
 
const affordableProducts = products.filter((pro) => pro.price >= 800);
console.log(affordableProducts);
/**
 * 
// List products with price >= 800 using a for loop
let affordableProducts2;
for(let i = 0; i < products.length; i++){
    if(products[i].price >= 800){
        console.log(products[i].name);
    }
}
*/


/**
 * Filtering out null and undefined values from an array:
 *
const mixedValues = [10, 'hello', null, 25, undefined, 'world'];
// const filteredValues = mixedValues.filter((val) => val !== null && val !== undefined);
const filteredValues = mixedValues.filter((val) => v);
console.log(filteredValues)
*/


const students = [
    { name: 'John', age: 20, grade: 'A' },
    { name: 'Jane', age: 21, grade: 'B' },
    { name: 'Charlie', age: 19, gread: 'A'},
    { name: 'Diana', age: 22, grade: 'A' },
];
// Filter students with grade 'A'
const topStudents = students.filter((student) => student.grade === 'A' && student.age >=20);
console.log(topStudents);



// Filter out empty strings from an array
const words = ["apple",'','banana','','kiwi',''];
const filteredWords = words.filter((word) => word !== '')
console.log(filteredWords);


