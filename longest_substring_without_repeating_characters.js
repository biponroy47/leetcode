/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 1) return 1;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = 0;
    let used = [];
    for (let j = i; j < s.length; j++) {
      let cur = s.charAt(j);

      if (!used.includes(cur)) {
        used.push(cur);
        temp += 1;
        if (temp > max) max = temp;
        //console.log(used, max);
      } else break;
    }
  }
  return max;
};
