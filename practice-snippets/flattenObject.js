//owner: Nagasai Mallela 

//Flatten an Object

const Object = {
	Company: "Apple",
	Address: "Khammam",
	contact: +91-1234567890,
	mentor: {
		Father: "Jani",
		Mother: "Kalavathi",
		Brother: "Saidu",
        Friends:{
            others:"Thomas",
         }
      } 
	}

    function flattenObject(ParentObject){
        let finalObject ={}
        for(const key in ParentObject){
            if((typeof ParentObject[key]) === 'object'){
                const flattenchildObject = flattenObject(ParentObject[key])
                for(const child in flattenchildObject){
                    finalObject[key + '.' + child] = flattenchildObject[child]
                }
            }else{
                finalObject[key] = ParentObject[key]  
            }
        }
        return finalObject
    }

console.log(flattenObject(Object))