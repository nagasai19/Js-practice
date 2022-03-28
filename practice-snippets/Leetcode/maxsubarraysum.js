
const  input = [ -2, -3, 4, -1, -2, 1, 5, -3 ]


function maximumSum(input){
    let maximumsum = 0;
    let maximumElement = 0
   for(let element of input){
       maximumElement = Math.max(element,maximumElement+element) //important 
       maximumsum=Math.max(maximumsum,maximumElement) //important
   }
   return maximumsum;
}

console.log(maximumSum(input));