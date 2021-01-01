const { fakeServer } = require("sinon");

class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
  // We will be using the splice method since we are
  // not passing the first and last index locations
  binarySearch(nums, target) {
    let arr = Array.from(nums);
    let mid = Math.floor(arr.length/2); 
    let first = 0;
    // we set last to length-1 because length
    // counts from 1 instead of 0
    let last = arr.length-1;

    if (target == arr[mid]) return true
    // target is less than mid means target is on left side
    else if (target < arr[mid])
    { // Splice the array from index 0 to mid, then search again
      arr = arr.splice(first, mid);
      return this.binarySearch(arr, target);
    }
    // target is greater than mid means target is to the right
    else if (target > arr[mid])
    { // Splice array from mid+1 to last index, then search again
      arr = arr.splice(mid+1, last);
      return this.binarySearch(arr, target);
    } // If original first or last is != target, return false
    else return false;
  }
}

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// // 1st iteration
// console.log(arr);
// let mid = Math.floor(arr.length/2);
// let first = 0;
// let last = arr.length-1;

// console.log(first);
// console.log(mid);
// console.log(last);
// arr = arr.splice(first,mid);
// console.log(arr);

// // 2nd iteration
// mid = Math.floor(arr.length/2);
// first = 0;
// last = arr.length-1;

// console.log(first);
// console.log(mid);
// console.log(last);
// arr = arr.splice(first,mid);
// console.log(arr);

// //3rd iteration
// mid = Math.floor(arr.length/2);
// first = 0;
// last = arr.length-1;

// console.log(first);
// console.log(mid);
// console.log(last);
// arr = arr.splice(first,mid);
// console.log(arr);


// aSolution = new MySolution();

// console.log(aSolution.binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;