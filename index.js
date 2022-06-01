function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length / 2; i++){
    let j = word.length - 1 - i;
    if(word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
   i = index of string from beginning
  j = index of string from ending
  if (i !== j) {return false} // not palindrome
  if i === j continue to next character in string
  if (i and j meet halfway in string) {return true} // is palindrome!
*/

/*
  Add written explanation of your solution here
   iterate over word
  use for() loop 
  divide word in half
  compare each letter from beginning to end
  if same by middle of word return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
