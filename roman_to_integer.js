/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;

  let hashmap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (hashmap.get(s.charAt(i + 1)) > hashmap.get(s.charAt(i))) {
      sum += hashmap.get(s.charAt(i + 1)) - hashmap.get(s.charAt(i));
      i += 1;
    } else sum += hashmap.get(s.charAt(i));
  }
  return sum;
};
