
//Currying is a transformation of functions
//that translates a function from callable as f(a, b, c) 
//into callable as f(a)(b)(c).

//Currying doesn’t call a function. It just transforms it.

//currying is a process  of  converting a function 

//that takes multiple arguments and then converting 

//into one or more function

//that takes one argument at a time instead.


//const add = (x, y) => x + y; --- normal fn

//const add = x => y => x + y;  ---currying fn call 


//add(10, 5);  // 15 --- normal fn call

//uses of currying functions : you can call them later with arguments 
//const add10 = add(10);  --- currying call.
//add10(5);  // 15


// function curry(func) {
//     return function curried(...args) {
//       if (args.length >= func.length) {
//         return func.apply(this, args);
//       } else {
//         return function (...args2) {
//           return curried.apply(this, args.concat(args2));
//         }
//       }
//     };

//   }

//   function sum(a, b, c) {
//     return a + b + c;
//   }

//   function mul(a,b,c){
//     return a*b*c
//   }


//   let curriedSum = curry(sum);

//   let curriedSum1 = curry(mul);

//   console.log(curriedSum)

//   //console.log((curriedSum(1, 2, 3)),'1111') //still callable normally

//   //console.log((curriedSum1(1)(2, 15)),'2222') //currying of 1st arg

//   console.log(curriedSum(1)(2)(3)) // full currying

function curry(functionName){
    return function(a){
        return function(b){
            return functionName(a,b)
        }
    }
}

function sum(a,b,c){
    return a+b+c
}

function multiply(a,b,c){
    return a*b*c
}

function curry(functionName){
   return function curried(...args){
       if(functionName.length <=args.length){
           return functionName.apply(this,args)
       }else{
           return function(...args2){
               return curried.apply(this,args.concat(args2))
           }
       }
   }
}

let curriedSum = curry(sum); 
let curriedMulti= curry(multiply)

console.log(curriedSum(1,2,3))
console.log(curriedSum(1)(2,3))
console.log(curriedSum(1)(2)(3))
console.log(curriedMulti(1)(2)(3))
console.log(curriedMulti(1,2,3))
console.log(curriedMulti(1)(2,3))
console.log(curriedMulti(1)(2)(4))







