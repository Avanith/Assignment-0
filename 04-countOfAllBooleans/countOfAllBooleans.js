function countOfAllBooleans(arr) {
boolCounter = 0;
arr.forEach(element => {
  if (toString.call(element) == '[object Boolean]')
    boolCounter++;
});
return boolCounter;
}
// Do not edit this line;
module.exports = countOfAllBooleans;