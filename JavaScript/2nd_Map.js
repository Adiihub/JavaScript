
let arr = [1,2,3].map(v => v);
console.log(arr);

let arr2 = [1,2,3].map(v => -v);
console.log(arr2);

let arr3 = [1,2,3].map(v => -v+v);
console.log(arr3);

let arr4 = [1,2,3].map(v => v*v);
console.log(arr4);

//Mapping an array of strings to their lengths
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const fruit = words.map(word => word.length);
console.log(fruit)

 
// OUtput what?? -- [1,3,5,2]
let a = [1,2,3,-1].map((a,b,c) => a+b); // value, index, array
console.log(a)


//Output should -- 'aditi-aditi-1'
let aq = ['himan','aditi','lab','riya','sfs'].map((val,ind) => val+'-'+val+"-"+ind)
console.log(aq)