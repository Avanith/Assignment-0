function fizzBuzz(start, end) {
  var fizzArr = [], index = 0;

  for (let i = start; i <= end; i++) {
    if (i % 3 == 0)
    fizzArr[index] = "Fizz";
    else if (i % 5 == 0)
    fizzArr[index] = "Buzz";
    else
    fizzArr[index] = i;

    if (i % 3 == 0 && i % 5 == 0)
    fizzArr[index] = "FizzBuzz";
    
    index++;
  }
  return fizzArr;
}
console.log(fizzBuzz(1, 20));
// Do not edit this line;
module.exports = fizzBuzz;