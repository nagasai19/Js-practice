//code-owner : Nagasai Mallela

//Problem statement:
// Given a string, find whether the given string is palindrome or not.

// Input : "malayalam"
// Output : passed string is a palindrome

// Example 2:
// Input : "tent"
// Output : tent string is not a palindrome.

// Example 3:
// Input : "hellolleh"
// Output : hellolleh string is  a palindrome.



//Explanation for string3: 
 //Index-----0 1 2 3 4 5 6 7 8;
 //Charas----h e l l 0 l l e h;  
 //Need to verify with following elements.      
 //0-8
 //1-7
 //2-6
 //3-5,
 //4 is middle element, so not needed to iterate.


const string1 = 'MALAYALAM';

const string2 = 'TENT';

const string3 = 'hellolleh';

const string4 = 'rotor';

const string5 = 'HannaH';

const string6 = 'racecar';

//with-out-in-built-methods

function isPalindrome(string){

  if(!string) return 'null string';

  if(string && string.length <= 1){
     return 'String must contain minimum 2 characters.'
  }

  const length = string.length
  const MiddleElementLength = Math.floor(length/2)
  for(let i = 0; i < MiddleElementLength; i++){
   let frontCharacter = string[i]
   let backCharacter = string[length -i-1]
   if(frontCharacter !== backCharacter){
       return false;
    }
  }
  return true;
}


//with-built-methods

function isPalindromeBuiltMethod(string){
   if(!string) return 'null string'
   return string === string.split("").reverse().join("")
}

console.log(isPalindrome('aa'),   isPalindromeBuiltMethod('aa'));
console.log(isPalindrome(''),     isPalindromeBuiltMethod(''));
console.log(isPalindrome(string1),isPalindromeBuiltMethod(string1));
console.log(isPalindrome(string2),isPalindromeBuiltMethod(string2));
console.log(isPalindrome(string3),isPalindromeBuiltMethod(string3));
console.log(isPalindrome(string4),isPalindromeBuiltMethod(string4));
console.log(isPalindrome(string5),isPalindromeBuiltMethod(string5));
console.log(isPalindrome(string6),isPalindromeBuiltMethod(string6));




