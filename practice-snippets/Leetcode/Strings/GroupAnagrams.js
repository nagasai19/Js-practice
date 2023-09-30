// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
    const hashMap ={}
    for (let str of strs){
        const sortCurrentStr = str.split('').sort().join()
        if(!hashMap[sortCurrentStr]){
            hashMap[sortCurrentStr] = []
        }
        hashMap[sortCurrentStr].push(str)  
    }
    return Object.values(hashMap);;
};

