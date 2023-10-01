// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

//Leetcode : https://leetcode.com/problems/longest-consecutive-sequence/description/

var longestConsecutive = function (arr) {
  const set = new Set(arr);
  let maximum = 0;
  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let current = num;
    let currentMax = 1;
    while (set.has(current + 1)) {
      current++;
      currentMax++;
    }
    maximum = Math.max(maximum, currentMax);
  }
  return maximum;
};
