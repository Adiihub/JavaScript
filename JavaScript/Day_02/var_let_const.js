/**
 * Var :-
 * 1 used to defined a variable
 * 2 it has fun scope but not block scope
 * it is hoisted
 */
function f1(){
    var i=5;
    console.log(i)
}
f1();
// console.log(i) 


// {
//     var i=15;
// }
// console.log(i);


/**
 * Let :-
 * 1 No hoisting
 * 2 It also has a block scope
 */

/**
 * Const :-
 * 1 scope is exactly same as let
 * 2 const variable are final and cant' be changed
 */
