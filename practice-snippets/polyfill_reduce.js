const PRIME_NUMBERS =[2,3,5,7,11,13,17]

const reducerCallBack = (previousValue, currentValue) => previousValue + currentValue;

const primeResultSum = PRIME_NUMBERS.reduce(reducerCallBack);

//Previous Value   Current Value    Return value Index 
 
console.log(primeResultSum,'original sum ')

/*  

Takes four parameters.

callbackfn should be a function that takes four arguments. 

reduce calls the callback, as a function,
once for each element after the first element present in the array,
in ascending order.

1.Previous Value (if no previous value is present, then first element is prev value otherwise  the value given.)
2.Current value (must)
3.Array (optional)
4.Index (optional)

*/

Array.prototype.myReducer1 = function(callback,initialValue){
   let accumulator = initialValue == undefined ? undefined : initialValue 
   for(let i = 0; i < this.length; i++){
       if(accumulator !== undefined){
        accumulator = callback(accumulator,this[i],i,this)
       }else{
        accumulator = this[i]
       }
   }
   return accumulator;
}

Array.prototype.myReducer2 = function(fn, initial) {
    let values = this;

    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item
    })

    return initial;
}

const primeresultSum1= PRIME_NUMBERS.myReducer1((a,b)=> a + b);

const primeresultSum2 = PRIME_NUMBERS.myReducer2((a,b)=> a + b);


console.log(primeresultSum1,'my polyfill sum 1')

console.log(primeresultSum2,'my polyfill sum 2')




