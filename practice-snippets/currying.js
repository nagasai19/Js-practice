
//Currying is a transformation of functions
//that translates a function from callable as f(a, b, c) 
//into callable as f(a)(b)(c).

//Currying doesn’t call a function. It just transforms it.

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







