// var arr = [1,2,3].reduce(cb,0);
// function cb(acc,curr){
//     return (acc + curr);
// }
// console.log(arr)



// const ar2 = [1,2,3,4,5].reduce(cb,[]);
// function cb(acc,curr){
//     if(curr %2 == 1){
//         acc.push(curr);
//     }
//     return acc;
// }
// console.log(ar2)


// var ar3 = [1,2,3].reduce(cb,b);
// function cb(acc,b){
//     return 
// }
// console.log(ar3)


const a= [1, 2, 3, 4, 5].reduce(cb, [[], []]);

function cb([odd, even], curr) {
    if (curr % 2 === 1) {  
        return [[...odd, curr], even];  
    } else {  
        return [odd, [...even, curr]]; 
    }
}

console.log(a);


const arr4 = ['a','a','b','c','a','c','d','b'].reduce(cb, {});
function cb(acc, curr){
    if(acc[curr]){
        acc[curr]++;
        }
    else {
        acc[curr] = 1;
        }
    return acc;   
}


