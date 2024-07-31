function reverseString(word) {
  // Write your algorithm here
  let reverse = word.split('').reverse().join('')
    return reverse
}

function isPalindrome(word) {
  // reverse the input string
  const reverseWord = reverseString(word);
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  let the word be reversed, take the last letters each time and make them first.
  then reverse the word, then join it together to make one word
  solution is the new word
/*
  Add written explanation of your solution here
  use split to get reverse the word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
