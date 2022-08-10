/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1, mid;
  // 使用[left, right]左闭右闭区间；
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      // 因为mid不满足条件，所以left = mid + 1而不是 left = mid
      left = mid + 1
    } else {
      // 因为mid不满足条件，所以right = mid - 1而不是 right = mid
      right = mid - 1
    }
  }
  // 遍历完还没有找到
  return -1
};
