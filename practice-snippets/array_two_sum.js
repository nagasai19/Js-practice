//Algorithm to find a pair of integers in unsorted array with a given sum k.


// Input:
const arr = [15, 4, 9 ,3 ,2, 12, 11, 14, 21, 24, 1, 10];
const target = 25;
  
// Output:
// true  (If found)
// or
// false (If Not found) 


function twoSum(arr,target){
    let hashMap = new Set();
    let isfound = false;
    for(let i in arr){
        let element = arr[i];
        console.log(element);
        let remainingSum = target - element;
        if(hashMap.has(element)){
            isfound == true;
            break;
        }
        hashMap.add(remainingSum);
        
    }
    console.log(isfound,'found');
}

console.log(twoSum(arr,target));

