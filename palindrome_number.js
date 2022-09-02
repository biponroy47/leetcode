/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString();
  const xArray = xString.split("");
  const reverseArray = xArray.reverse();
  const newString = reverseArray.join("");

  if (xString === newString) {
    return true;
  } else {
    return false;
  }
};
