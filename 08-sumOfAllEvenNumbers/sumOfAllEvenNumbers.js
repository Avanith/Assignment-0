function sumOfAllEvenNumbers(nums) {
  evenNumberTotal = 0;
  nums.forEach(element => {
    if (element % 2 == 0 || element == 0)
      evenNumberTotal++
  });
  return evenNumberTotal;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;