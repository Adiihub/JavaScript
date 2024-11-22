let k = [1,2,3,0].filter(cb);
function cb(a){
    return a>=2;
}
console.log(k)  // [2,3]

let p = [-1,1,0].filter(cb2)
function cb2(b){
    return b+1;
}
console.log(p) // [1,0]


let q = [1,0,true, false].filter(cb3)
function cb3(a){
    return a
}
console.log(q);  // [1,true]