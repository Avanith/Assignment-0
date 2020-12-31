function sumOfAllOddNumbers(nums) {
  var oddNumberTotal = 0;
  nums.forEach(element => {
    if (element % 2 != 0)
      oddNumberTotal++
  });
  return oddNumberTotal;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;