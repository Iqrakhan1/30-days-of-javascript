// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverceString(str) {
  if (str.length <= 1) return str;
  return reverceString(str.slice(1)) + str[0];
}

console.log(reverceString("hello "));
console.log(reverceString("welcome "));
console.log(reverceString("iqra khan "));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
console.log("palandrome");
function ispalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return ispalindrome(str.slice(1, str.length - 1));
}

console.log(ispalindrome("hello"));
console.log(ispalindrome("madam"));
