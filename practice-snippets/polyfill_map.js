//Polyfill for Array.Map 

/* map() method creates a new array

/parameters for callbackFn
  
 Function that is called for every element of arr. 
  Each time callbackFn executes, the returned value is added to newArray.

  The callbackFn function accepts the following arguments:
 1)element : The current element being processed in the array.
 2)index Optional The index of the current element being processed in the array.
 3)array Optional The array map was called upon.
 4)this  Arg Optional Value to use as this when executing callbackFn.

*/

const ArrayMap = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const originalPolyfillwithMap = ArrayMap.map((item) => item * item)

console.log(originalPolyfillwithMap, 'originalPolyfillwithMap')

//code -- logic 
Array.prototype.mymap = function (callback) {

    if (this == null) {
        throw new TypeError('this is null or not defined')
    }

    if (!callback) throw new Error('callback is required')

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (this.length === 0) {
        console.error('Array length must be greater than zero')
       return []
    }
    let MappedArray = new Array()

    for (var i = 0; i < this.length; i++) {
        let element = this[i]
         MappedArray =[...MappedArray, callback(element, i, this)]
        //or
        //MappedArray.push(callback(element, i, this)) 
        
        //------ parameters : element, index, array
    }
    return MappedArray
}

const myPolyfillwithMap = ArrayMap.mymap((item) => item * item)

console.log(myPolyfillwithMap, 'myPolyfillwithMap')



