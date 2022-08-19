const sortArray = function (nums) {
  let temp = null;
  for (let i = 0; i < nums.length; i++) {
    // -i的原因是，经过i轮，最后i项一定都是最大值
    for (let k = 0; k < nums.length - 1 -i; k++) {
      if (nums[k] > nums[k+1]) {
        temp = nums[k+1];
        nums[k+1] = nums[k];
        nums[k] = temp
      }
    }
  }
  return nums
}

// nums = [5,2,3,1]
nums = [5,1,1,2,0,0]
sortArray(nums);
console.log(nums);
