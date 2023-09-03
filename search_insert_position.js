/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[0] > target) return 0;
  else if (nums.at(-1) < target) return nums.length;
  else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) return i;
    }
  }
};
