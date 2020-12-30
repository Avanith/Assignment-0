function titleCaseEdit(title) {
  var str = new String(title);
  // str.split(" ") puts each word in the string into seperate rows
  // of a 2D array.
  var word = str.split(" ");
  var newTitle = new String("");

  // This loop iterates through each row of word and
  // makes the first letter uppercase, then concatenates the rest of the
  // string onto the word[i] string.
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
    newTitle += word[i] + " "; // Creates a string from the string array "word".
  }

  // Trim the last " ".
  newTitle = newTitle.trim();

  return newTitle;

  // Can also use the join method to create a string from an array.
  //return word.join(" ");

}
console.log(titleCaseEdit("jasny grom strzelie"));

// Do not edit this line;
module.exports = titleCaseEdit;