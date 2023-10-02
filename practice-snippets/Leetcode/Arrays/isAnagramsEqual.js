//Given two strings s and t, return true
//if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word
//or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  //Method-1
  //return s.split('').sort().join('') === t.split('').sort().join('')
  //Method - 2
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
};
