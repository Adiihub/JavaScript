const arr = [1,2,3,4]
const total = arr.reduce(( acc, cur) => {
    console.log(`acc : ${acc} and Current val : ${cur}`)
    return acc+cur
}, 0)
console.log(total)