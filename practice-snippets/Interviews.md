//Adobe Round1:

1.increasing elements and decreasing element find max element { use binary search}
2.elements need to add 1 min moves to get all elements equal [1,2,3] =>[3,3,3]


//round2

map

[1,2,3].map((index)=>{
    if(index ===0 ) return ;
})

filter
pure functions 
promiseall polyfill

//================================================ORACLE INTERVIEW=================================


1)Diagonals sum 
2)convert number to string 123 to '123'


// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
// function sumDiagonals(matrix,n){
//     let primarySum = 0
//     let secondarySum =0
//   for(let i=0,j=n-1;i<n,j>=0;i++,j--){
//       primarySum += matrix[i][i]
//       secondarySum += matrix[i][j]
//   }  
//     console.log(primarySum,secondarySum,'End')
// }

// console.log(sumDiagonals(matrix,3))



//123 --"123"

//  while(num>=1){
    //       remainder = num % 10
    //       str = str + remainder
    //       num =Math.floor(num/10)
    //  }


const json = {
    0:"0",
    1:"1",
    2:"2",
    3:"3"
}

function formatNumber(num,flag=true){
    if(num === 0 && flag){
        return "0";
    }
    let remainder = ""
     if(num>=1){
          remainder = num % 10;
          num = Math.floor(num/10);
          flag = false;
          remainder =  formatNumber(num,flag)+ json[remainder]
     }
     return remainder;
}
console.log(formatNumber(123))


