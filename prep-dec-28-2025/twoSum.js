const twoSum = (nums, target) => {
    nums.sort();

    let l =  0, r = nums.length - 1;

    while (l < r) {
        let total = nums[l] + nums[r];
        if (total === target) return [l, r];
        if (total > target) {
            r--;
        } else {
            l++;
        }
    }
    return [];
}
const twoSumUsingSet = (nums, target) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
        map.set(nums[i], i);
    }
}