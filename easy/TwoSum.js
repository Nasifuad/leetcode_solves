const nums = [3, 213, 234, 4, 3, 43, 9, 2, 3];
// any valid int arr when any two nums sum to target and only one solution
target = 12;

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
const restult = twoSum(nums, target);
console.log("result", restult);
