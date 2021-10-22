//Flatten an Array

const nonFlattenArray =[1,2,[3,4],[5,6,[7,8]]]

function flattenArray(array) {
  return array.reduce((acc, val) =>{
        if(Array.isArray(val)){
            acc = acc.concat(flattenArray(val));
         }else{
             acc= acc.concat(val);
         }
         return acc;
    },[])
}

console.log(flattenArray(nonFlattenArray));
