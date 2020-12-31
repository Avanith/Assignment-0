function sumOfNumsWithinARange(nums, start, end) {
  numInRangeCounter = 0;
  nums.forEach(element => {
    if (element >= start && element <= end)
    numInRangeCounter++;
  })
  return numInRangeCounter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;