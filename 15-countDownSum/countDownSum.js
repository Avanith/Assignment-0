class MySolution {
 countDownSum(num) {
    if (num > 1)
      return num + this.countDownSum(num - 1);
    else
      return 1;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;