function isPalindrome(word) {
  // Convert the word to lowercase to handle case-insensitivity
  const lowercaseWord = word.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the word
  let start = 0;
  let end = lowercaseWord.length - 1;
  
  // Loop through the word until the pointers meet
  while (start < end) {
    // If characters at the current pointers are not equal, return false
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }
    
    // Move the pointers towards each other
    start++;
    end--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Pseudocode:
  - Convert the input word to lowercase.
  - Initialize two pointers, one at the beginning and one at the end of the word.
  - Iterate through the word using a loop until the pointers meet:
    - Check if the characters at the current pointers are equal.
    - If not, return false (indicating that the word is not a palindrome).
    - Move the pointers towards each other.
  - If the loop completes without returning false, return true (indicating that the word is a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
