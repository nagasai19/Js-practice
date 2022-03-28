/*
A closure is the combination of a function 
bundled together enclosed with references 
to its surrounding state the lexical environment.
 In other words, a closure gives you 
 access to an outer function’s scope 
 from an inner function. 
 
In JavaScript, 
closures are created every time a function is created, 
at function creation time

*/


//A closure is a function that captures variables from its lexical scope. 

//n simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed.


function init() {
    var name = 'Test'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();