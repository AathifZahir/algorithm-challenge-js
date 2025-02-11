// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
  if (arr.length < 2) return null; // If there are less than 2 elements, return null

  let first = -Infinity,
    second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second; // Return null if no second largest
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove non-alphanumeric characters & convert to lowercase
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
