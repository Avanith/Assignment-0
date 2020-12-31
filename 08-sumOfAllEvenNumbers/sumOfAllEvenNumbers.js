function sumOfAllEvenNumbers(nums) {
  evenNumberSumTotal = 0;
  nums.forEach(element => {
    if (element % 2 == 0 || element == 0)
      evenNumberSumTotal++
  });
  return evenNumberSumTotal;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;