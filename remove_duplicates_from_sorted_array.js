/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) return 1;
  let temp = nums[0],
    cur = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp) {
      nums[cur] = nums[i];
      temp = nums[i];
      cur++;
    }
  }
  return cur;
};
