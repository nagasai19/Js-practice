//memorizze function

const memorize = (fn,context) =>{
     let cache ={}
      return function(...args){
        let boom = JSON.stringify(args)
        if (!cache[fn]) {
          cache[fn] = fn.call(context || this, ...args)
        }

        return cache[fn]
     }
    

}


const square = (num1,num2) =>{
  for(let i =0 ;i<99999;i++)
  return num1*num2
}

const memorizedvalue = memorize(square)

console.log(memorizedvalue)
console.time("start",new Date().getMinutes())
console.log(memorizedvalue(10, 10))
console.log(memorizedvalue(10, 10))

