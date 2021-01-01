function productOfAnyAmountOfNumbers(...args) {
  let productTotal = args[0];
  // loop through the argument array to trigger the fe
  if (args.length > 1)
  for (let i = 1; i < args.length; i++)
productTotal*= args[i];
  else
    return args[0];

  return productTotal;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;