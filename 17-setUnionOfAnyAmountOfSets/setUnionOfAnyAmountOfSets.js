function setUnionOfAnyAmountOfSets(...args) {
  let mySet = new Set();
  // loop through each argument passed
    // for in loop. "set" is simply 0, 1, 2...
  for (let set in args) {
    //console.log(args[set]);
    // turn the set into an array so that we can cycle through its elements
    let myArray = Array.from(args[set]);
    //console.log(myArray);
    
    // loop through myArray to check and see if its elements
    // are in my set. if not then add to my set
    myArray.forEach(element => {
      if (!mySet.has(element))
      mySet.add(element);
    })
  }
  //console.log("How big is my set? " + mySet.size)
  return mySet;
}

// let setA = new Set([10,20]);
// let setB = new Set([30,40]);
// let setC = new Set([10,20,30,40,50,60,70]);
// console.log(setUnionOfAnyAmountOfSets(setA, setB, setC));

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;