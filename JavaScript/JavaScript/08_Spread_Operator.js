/** Spread & Rest Operator
 *  Use to combiner two arrays into one
 *  & two objects into one 
 *  doesn't change original & create new arrays
 */
 
// Using with array
var mountains = ['Everest', 'Fish Tail', 'Annapura'];
var mountainsfromJapan = ['Fuji', 'Yeyya'];

var allMountains = [...mountains, ...mountainsfromJapan];
console.log(allMountains);


// Using with Objects
var day = {
    breakfast : "toast with milk",
    lunch : "rice with chicken curry",
}
var night = {
    dinner : 'noodle soup'
}

var picnic = {...day, ...night};
console.log(picnic);

