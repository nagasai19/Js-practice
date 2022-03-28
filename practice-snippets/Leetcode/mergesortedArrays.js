
const array1 =[1,3,5,7,9,11,13,14,16,17,18,]
const array2 =[2,4,6,8,10,12,13,15]

function mergeSortedArrays(nums1,nums2){
    let result = []
    let i=0
    let j=0
    let k =0
    while(i<nums1.length && j<nums2.length){
         if(nums1[i]<nums2[j]){
             result.push(nums1[i])
             i++
             k++
         }else{
            result.push(nums2[j])
            j++;
            k++
         }
    }
    while(i<nums1.length){
        result[k++] = nums1[i++]
    }
    while(j<nums2.length){
        result[k++] = nums2[i++]
    }
   return result
}

console.log(mergeSortedArrays(array1,array2))