/**
 * CallBack Function
 */


let k = [1,2,-1,0,3,6,9,7,-22,60].filter(cb)
function cb(v){
    return (v%2==0 && v>=0)
}
console.log("Even No is : ", k)


let a = [1,2,3,null,undefined,0,-1].filter(cb1)
function cb1(no){
    return no
}
console.log(a)


let arr = ['aa','aaa','a','b','cc'].filter(cb2)
function cb2(s){
        if(s.length>1){
        return true;
        }
}
console.log(arr)


let ar = [1,2,3,'a',5,20,"Hi"].filter(cb3)
function cb3(s){
        return typeof(s)=== "number"
}
console.log(ar)