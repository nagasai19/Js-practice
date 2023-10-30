//i have chocaltes weight [20,25,30] and days =4

//so a person can pick up any chocalte and eat half of any one cholcate and
//place the remianing half into the weights array.

//after 4 days, find the minimum possible remaining weight

function findMinimumRemainingWeight(chocolates, days) {
  while (days > 0) {
    chocolates.sort((a, b) => a - b);
    chocolates[0] = Math.floor(chocolates[0] / 2);
    days--;
  }

  return chocolates.reduce((total, weight) => total + weight, 0);
}

const initialWeights = [20, 25, 30];
const days = 4;

const minimumRemainingWeight = findMinimumRemainingWeight(initialWeights, days);
console.log(minimumRemainingWeight); // Output: 26
