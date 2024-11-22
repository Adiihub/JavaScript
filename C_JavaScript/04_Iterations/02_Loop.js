const myObj = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby'
}

for(let i in myObj){
    // console.log( i + ' - ' + myObj[i]);
}

const obj = ['js', 'ruby', 'firefox', 'java', 'react']
obj.forEach( (item) => {
    // console.log(item)
})

obj.forEach((item, index, array) => {
    // console.log(item, index, array)
})

const myCoding = [
    {
        name: 'ruby', age: 25
    },
    {
        name: 'java', age: 20
    },
    {
        name: 'ruby', age: 25
    },
]

myCoding.forEach( (item) => {
    console.log(item)
    console.log(item.age)
})