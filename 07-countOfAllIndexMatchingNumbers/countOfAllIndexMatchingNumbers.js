function countOfAllIndexMatchingNumbers(nums) {
  numMatchCounter = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] == i)
      numMatchCounter++;
  }
  return numMatchCounter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;