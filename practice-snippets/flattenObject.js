//Flatten an Object

const Object = {
	Company: "Apple",
	Address: "Khammam",
	contact: +91-7095807081,
	mentor: {
		Father: "Jani",
		Mother: "Kalavathi",
		Brother: "Saidu",
        Friends:{
            others:"Manikanta",
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