function isPalindrome(word) {
  var stack = new Array();
  var queue = new Array();
  var palindrome = false;

  // cycle through word while adding to the front of the queue
  // and pushing onto the stack
  for (let i = 0; i < word.length; i++) {
    if (word[i] != ' ')
    {
      word[i] = word[i].toLowerCase();
      stack.push(word[i]);
      queue.push(word[i]);
    }
  }

  // Check the top of the stack with the front of the queue
  // for equality, then dequeue and pop the stack
  while (queue.length > 0)
  {
    var topOfStack = stack.pop();
    var frontOfQueue = queue.shift();

    if (topOfStack != frontOfQueue)
      return palindrome;
  }

  palindrome = true;
  return palindrome;
}

// Do not edit this line;
module.exports = isPalindrome;