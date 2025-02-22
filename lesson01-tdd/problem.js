/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome(A man, a plan, a canal: Panama) => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

function isPalindrome(str) {
  // Input: A string
  // Output: A boolean, return true or false if the given string is a palindrome

  //Problem: Check if given string reads the same forward and backwards, identifying if it is a palindrome.

  // Solution:
  // Reassign string and remove non-alphanumeric characters and convert to lowercase
  // Create a loop to iterate over (half) the characters in the string
  // If the character at current index not equal to the last index - current index - 1, return false
  // Otherwise, return true.

  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  console.log(str);
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("MOM"));
console.log(isPalindrome("BANANA"));

module.exports = isPalindrome;
