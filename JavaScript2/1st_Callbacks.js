function print(b1, b2, x, y){
    b1(x,y)
    b2(x,y)
}
function b1(x, y){
    console.log("Sum is : ", x + y)
}
function b2(x, y){
    console.log("Difference is : ", x - y)
}
print(b1, b2, 12, 5)



