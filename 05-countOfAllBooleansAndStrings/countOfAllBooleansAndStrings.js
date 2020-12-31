function countOfAllBooleansAndStrings(arr) {
  boolCounter = new Number(0);

  // a bool put through the toString.call() method returns '[object Boolean]'
  // we use this to check if each element in the array is a boolean
  arr.forEach(element => {
    if (toString.call(element) === '[object Boolean]' || typeof element == 'string')
      boolCounter++;
  });
  //console.log(isFinite(boolCounter));
  return boolCounter;
}
arr = [8, "hello", undefined, null, false, false, false, false, false];
console.log(countOfAllBooleansAndStrings(arr));

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;