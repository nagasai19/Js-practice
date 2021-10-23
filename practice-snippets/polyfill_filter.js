//Polyfill for filter
//creates a new array of filtered values from original array 
//owner:  Nagasai Mallela

//parameters: callbackFn(element, index, array) 

//callbackFn
// Function is a predicate, to test each element of the array. 
//Return a value that coerces to true to keep the element, or to false otherwise.

// It accepts three arguments:

// element
// The current element being processed in the array.

// index Optional
// The index of the current element being processed in the array.

// array Optional
// The array on which filter() was called.

// this ArgOptional
// Value to use as this when executing callbackFn.


const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const EVEN_NUMBERS = [2, 4, 6, 8, 10]

const ODD_NUMBERS = [1, 3, 5, 7, 9]

const originalFilter = NUMBERS.filter((number) => number % 2 === 0)

console.log(originalFilter, 'originalFilter',
    originalFilter.every((value, index) => value === EVEN_NUMBERS[index])
)


Array.prototype.myfilter = function (callback) {
    if (!this) {
        throw new Error('This is required or undefined.')
    }
    let filteredArray = new Array()
    const arrayValues = this

    // Looping can be for loop or foreach 
    // for(var i in this){
    //     let result = callback(this[i], i, this)
    //     if (result) {
    //         filteredArray = [...filteredArray, this[i]]
    //     }
    //  return filteredArray
    // }

    arrayValues.forEach((number, index) => {
        let element = arrayValues[index]
        let result = callback(element, index, this)
        if (result) {
            filteredArray = [...filteredArray, element]
        }
    })

    return filteredArray;
}

const myownFilter = NUMBERS.myfilter((number) => number % 2 === 0)

console.log(myownFilter, 'myownFilter',myownFilter.every((value, index) => value === ODD_NUMBERS[index]))




