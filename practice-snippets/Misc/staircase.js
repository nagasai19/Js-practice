//staircase problem,

//jumps = [1,-4,-3,2]

//ultimately he has to be at the jump greater than 1, minimum stair to be present he has to be ?

function findMinimumStair(jumps) {
  let currentStair = 0;
  let minStair = Infinity;

  for (let jump of jumps) {
    currentStair += jump;
    if (currentStair > 1) {
      minStair = Math.min(minStair, currentStair);
    }
  }

  if (minStair === Infinity) {
    return -1; // If no jump greater than 1 is made
  }

  return minStair;
}

const jumps = [1, -4, -3, 2];
const minimumStair = findMinimumStair(jumps);

if (minimumStair === -1) {
  console.log("No jump greater than 1 is made.");
} else {
  console.log("Minimum stair before a jump greater than 1:", minimumStair);
}
