//Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top
//of their containing scope during the compilation phase.

//This means that regardless of where variables and functions are declared within a function
//or global scope, they are conceptually "hoisted" to the top of that scope
//and are accessible throughout the entire scope.

//However, it's important to note that only the declarations are hoisted, 
//not the initializations or assignments.
1) Variable Hoisting
// console.log(x); // undefined (not an error)
// var x = 5;
2)Function Hoisting 
// foo(); // "Hello, World!"

// function foo() {
//   console.log("Hello, World!");
// }
3)Function Expressions
// bar(); // TypeError: bar is not a function
// var bar = function() {
//   console.log("This won't work!");
// };
//Function expressions are not hoisted in the same way as function declarations.
//The variable bar is hoisted, but its value (the function) is not defined 
//until the assignment statement is reached, 
//so attempting to call it before that point results in an error.

Compilation Phase:
// During this phase, 
// the JavaScript engine scans the code for variable and function
//  declarations and "hoists" them to the top of their containing scope. 
//  This means that JavaScript "sets aside space" for these variables and functions in memory,
//   making them accessible throughout the entire scope.
Variable Declarations are hoisted:

var x; // Declaration is hoisted
Function Declarations are hoisted:


Execution Phase: 
After the compilation phase, the code is executed line by line. In this phase, JavaScript assigns values to variables and runs functions.

Variable Initializations and Assignments occur here:

x = 20; // Initialization and assignment happen here
Function Calls are made during the execution phase:



foo(); // Function call happens here
function foo() {} // Declaration is hoisted

This means that while variable and function declarations are moved to the top of their containing scope 
during hoisting, their initial values (if any) or assignments are not. So, when you see a variable or function declaration being hoisted, it means only the declaration part is moved to the top, not the value or assignment.

//Variable declarations are scanned and are made undefined
//Function declarations are scanned and are made available