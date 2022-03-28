//Binary search Implementation
const myarray = [1,2,3,4,5,6,7,8,9]
const element = 1

function findElement(myarray) { 
  let first = 0
  let last = myarray.length-1
  while(first<=last){
      let mid = Math.floor((first + last)/2)
      if(myarray[mid] === element){
          return mid;
      }
      else if(myarray[mid] > element){
          last = mid-1; //?important step to remember
      }else{
          first = mid+1; //?important step to remember
      }
      
  }
}

console.log(findElement(myarray));
