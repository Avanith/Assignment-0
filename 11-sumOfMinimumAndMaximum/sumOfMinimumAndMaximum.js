function sumOfMinimumAndMaximum(nums) {
  var sum = 0, min = nums[0], max = nums[0];
  for (let i = 0; i < nums.length; i++)
  {
    if (min > nums[i])
    min = nums[i];
    if (max < nums[i])
    max = nums[i];
  }
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;