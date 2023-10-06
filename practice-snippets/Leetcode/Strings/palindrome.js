//https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (str) {
  //Method1 : 2 pointer approach
  str = str.toLowerCase().replace(/[^a-z\d]/g, "");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;

  //Method2
  let strippedString = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reversedString = strippedString.split("").reverse().join("");
  return strippedString.toLowerCase() == reversedString.toLowerCase();
};
