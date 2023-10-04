//Longest Substring without repeating chars.
// Given a string s, find the length of the longest substringwithout repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

//YT Video for reference : https://www.youtube.com/watch?v=RqxIXM6eyiY&ab_channel=CodewithAlisha

Explanation:
//initialise a empty set and pointer for tracking left index
//iterate over the string and if char exists in set, delete the left pointer char from set 
//and check if the old length is greater than current index length and update it.


var lengthOfLongestSubstring = function(s) {
    let left = 0
    let maxLength = 0
    if(s.length === 0 || s.length ===1 ){
        return s.length
    }
    let set = new Set()
    for(let i = 0; i < s.length ; i ++){
       while(set.has(s[i])){
           set.delete(s[left])
           left ++
       }
       set.add(s[i])
       maxLength = Math.max(maxLength, i - left + 1)
    }

    return maxLength
    
};