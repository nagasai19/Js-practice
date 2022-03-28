//https://leetcode.com/problems/contains-duplicate/

//CMD + K + Q key 


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const arrayy =[1,2,3,4]

function hasElementinMap(collection,element) {
    return collection.has(element)
}

function addElementMap(collection,element){
    return collection.add(element,1)
}

function ContainsDuplicate(arrayy){
  let firstPointer = 0 ;
  let secondPointer =arrayy.length-1;
  let nonDuplicatesCollections = new Set()
  while(firstPointer < secondPointer){
     let startElement = arrayy[firstPointer]
     let endElement = arrayy[secondPointer]
     if(hasElementinMap(nonDuplicatesCollections,startElement)){
         return true
     }
     addElementMap(nonDuplicatesCollections,startElement)
     if(hasElementinMap(nonDuplicatesCollections,endElement)){
        return true
    }
    addElementMap(nonDuplicatesCollections,endElement)
    firstPointer++;
    secondPointer--;
  }
  return false;

}

ContainsDuplicate(arrayy)