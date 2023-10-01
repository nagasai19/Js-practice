// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

//leetcode.com/problems/top-k-frequent-elements/description/

// create a map
// add count instances of each Element
// abstract entries
// run loop till k

Solution: var topKFrequent = function (nums, k) {
  const map = new Map();
  if (nums.length === 1) {
    return nums;
  }
  let result = [];
  for (let num of nums) {
    if (map.has(num)) {
      const count = map.get(num);
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }
  const sortedMapEntries = Array.from(map.entries()).sort(
    (a, b) => b[1] - a[1],
  );

  for (let i = 0; i < k; i++) {
    result.push(sortedMapEntries[i][0]);
  }

  return result;
};
