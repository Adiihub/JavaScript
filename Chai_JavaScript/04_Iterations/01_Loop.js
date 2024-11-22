// For of Loop

const arr = [1,2,3,4,5,6,7]

for(const i of arr){
    // console.log(i)
}


// Maps

const map = new Map()
map.set('In','India')
map.set('USA','United State of America')
map.set('FI','France')
// console.log(map)

for(const i of map){
    console.log(i)
}
for(const [key, Value] of map){
    console.log(key + ' - ' + Value)
}