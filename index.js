function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i <word.length / 2; i++){
  // compare the letter we're iterating over to the corresponding letter at the end of the string
    const j =word.length - 1 - i;
    if(word[i] !== word[j]){
       // if the letters don't match, return false
       return false;
    }
    return true;
  }
  // if we reach the middle, and all the letters match, return true
}


// function reverseString(word) {
//   // Write your algorithm here
//   let reverse = word.split('').reverse().join('')
//     return reverse
// }

// function isPalindrome(word) {
//   // reverse the input string
//   const reverseWord = reverseString(word);
//   if (word === reverseWord) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isPalindrome(word) {
//   // reverse the input string
//   const reverseWord = reverseString(word);
//   return word === reverseWord
  
// }
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
