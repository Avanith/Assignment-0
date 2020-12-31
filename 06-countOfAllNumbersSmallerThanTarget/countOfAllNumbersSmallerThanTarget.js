function countOfAllNumbersSmallerThanTarget(nums, target) {
  var numberCounter = 0;
  nums.forEach(element => {
    if (element < target)
      numberCounter++;
  });
  return numberCounter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;