/**
 * Global Scope
 */
var name = "ADiti";
console.log(name)


function func(){
    console.log(name)
}
func()


/**
 * Local scope / Function scope variable
 */
function funt(){
    var num = 33;
    console.log(num);
}
funt();
// console.log(num);


/**
 *  Block Scope
 */
{
    let x = 30;
    console.log(x)
}
console.log(x);