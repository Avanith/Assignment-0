function pairSum(nums, target) {
  if (nums.length < 2)
    throw "Passed array is less than 2!";
  
  let hasTarget = false;
  let arr = Array.from(nums);

  //console.log(arr);
 // console.log(nums.length);
  // check each element against every other element
  // to see if it can sum up to "target"
  arr.forEach(ele1 => {
    arr.forEach(ele2 => {
      if (ele1 + ele2 == target)
      hasTarget = true;
    })
  });
return hasTarget;
}

//console.log(pairSum([5,3,1], 6));

// Do not edit this line;
module.exports = pairSum;