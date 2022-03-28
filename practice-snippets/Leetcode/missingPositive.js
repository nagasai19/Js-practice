const arrayNumbers =[-1,0,1,2,3,4] //5
const arrayNumbers1 =[0,2,3]//1
const arrayNumbers2 =[1,2,4] //3
const arrayNumbers3 =[-1,0,1,3,4] //2
const arrayNumbers4 =[-1,0] //1
const arrayNumbers5 =[0] //1
const arrayNumbers6 =[0,2,2,1,1] //3

//Approach1

// function firstMissingNumber(nums){
//     nums=[... new Set(nums)]
//     nums = nums.filter((nums)=>nums>0).sort((a,b)=>a-b)
//     for(let i= 0; i<nums.length; i++){
//         if(i+1 !== nums[i]){
//            return i+1;
//         }
//      }
//     return nums.length+1
// }

//Approach2
// function firstMissingNumber(nums){
//     let object ={}
//     for(let  i in nums){
//         object[nums[i]] =1
//     }
//     console.log(object);
//    for(let i = 1 ;i<=nums.length; i++){
//       if(!object[i]){
//         return i
//       }
//    }
//    return nums.length
// }

//approach3 
// function firstMissingNumber(nums){
//     mySet = new Set(nums)
//     let minimumNumber =1 

//     while(mySet.has(minimumNumber)){
//         minimumNumber++
//     }
//     return minimumNumber
// }

var firstMissingNumber = function(nums) {
    // First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.
    // We will position every positive integer in the array at its corresponding index
    // ex) 1 at index 0, 2 at index 1, 3 at index 2
    // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
    // Therefore, we can find the first missing positive integer by scanning through the array.
    //[-1,0,1,2,3,4] 

    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i]-1;
        console.log(idx)
        if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--; // check the swapped number
            console.log(nums)
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1; // the next positive number which is i+1 doesn't exist in the array
    }
    
    return nums.length + 1; // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}


//console.log(firstMissingNumber(arrayNumbers))
// console.log(firstMissingNumber(arrayNumbers1))
//console.log(firstMissingNumber(arrayNumbers2))
// console.log(firstMissingNumber(arrayNumbers3))
// console.log(firstMissingNumber(arrayNumbers4))
// console.log(firstMissingNumber(arrayNumbers5))
// console.log(firstMissingNumber(arrayNumbers6))

