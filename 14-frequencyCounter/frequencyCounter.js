function searchArr(array, target) {
    for ( var i = 0; i < array.length; i++)
    {
      if (array[i] === target)
        return true;
    }
    // target not found
    return false;
  }
  
  function outputArr(array, word) 
  {
      console.log("{ ");
     for (var i = 0; i < array.length; i++)
     {
       console.log(word[i] + ":" + array[i]);
     }
     console.log(" }");
  }
  
  function frequencyCounter(word) {
    var aString = new String(word);
    var keys = [];
  
    for (var i = 0; i < word.length; i++)
    {
      if (searchArr(keys, word[i]) == true)
      {
        //char exists in keys array
        keys[i]++;
      }
      else // char is not in keys array
        keys[i] = 1;
    }
  outputArr(keys, word);
  }
  

frequencyCounter("computer");
// Do not edit this line;
module.exports = frequencyCounter;