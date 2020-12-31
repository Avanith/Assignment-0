function frequencyCounter(word) {
    let keys = [];
  
  
    for (let i = 0; i < word.length; i++)
    {
  
      // replace include with keys[word[i]]
      if (keys[word[i]])
      {
     //char exists in keys array
        keys[word[i]] += 1
      }
      else // char is not in keys array
        keys[word[i]] = 1;
    }
  return keys
  }
  
frequencyCounter("apple");

// Do not edit this line;
module.exports = frequencyCounter;





// function frequencyCounter (word) {
//     let values = []
  
//     for (let i = 0; i < word.length; i++) {
//       if (values[word[i]]) {
//         values[word[i]] += 1 
//       }
//       else {
//         values[word[i]] = 1
//       }
//     }
//     return values;
//   }
  