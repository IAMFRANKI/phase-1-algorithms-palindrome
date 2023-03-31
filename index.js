function isPalindrome(s) {
  // Write your algorithm here
  //convert string to lowercase and remove spaces 
  s = s.toLowerCase().replace(/\s/g, "");
  if (s === s.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

/*
  Add written explanation of your solution here
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
