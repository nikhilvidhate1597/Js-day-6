// console.log("Working")

// //Function - in order to execute a particular line of code repetitively we can allocated them into a function which can then be called again and again as required. this prevents us writing a piece of code multiple times...........

// // function definition from line 6-8
// // we need to have n no of arguments for n number 
// function multiple(parameter1, parameter2) {
//     console.log("inside multiple function")
//         // the function body can have more than one line code..........   
// }
// // function calling on line 11
// multiple(arg1, arg2); //name of a followed by opne and close parenthesis.
// // while we call a function we pass arguments inside the parrnthesis if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas. 

// //Arrow functions-----------------------------

// const addition = (parameter1, parameter2) => {
//     console.log("I am adding function");
// }
// addition(arg1, arg2);

// //function expression
// const subtraction = function(parameter1, parameter2) {
//     console.log("I am subtracting function");
// }
// subtraction(arg1, arg2);


// function sayHi() {
//     console.log("Hi!!!");
//     let a = 3;
//     let b = 6;
//     let result = a + b;
//     console.log(result)
// }
// sayHi();

// function addition(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
// }
// addition(3, 4);

// function multiple(a, b) {
//     let result = a * b;
//     return result;
// }
// // let returnedRedult = multiple(7,10)
// //console.log(returntdResult);

// console.log(multiple(7, 9)); //inside  the console.log we can call a function. no issues if our function which is called returns some value then that returned value will also be printed in our console.log

// //....................................................

// //the lexical environment and scope chains 


// let i = 5;

// function one() {
//     //console.log(i);
//     two();

//     function two() {
//         let i = 5;
//         console.log(i);
//         console.log(z);
//     }
// }
// one();
// console.log(i);

// -----------------------------------------------------------------------------------

// Block Scope and shadowing

let f = 2;
const g = 2;
var h = 2;
console.log(f);
console.log(g);
console.log(h);
// let and const are block scoped but not var (globally scoped)
{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);
    console.log(g);
    console.log(h);
}
console.log(f);
console.log(g);
console.log(h);