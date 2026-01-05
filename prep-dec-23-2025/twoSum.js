const twoSumUsingSort = (nums, target) => {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const total = nums[l] + nums[r]
        if (total === target) {
            return [l, r];
        } else if (total > target) {
            r--;
        } else {
            l++;
        }
    }
    return []
}
const twoSumUsingMap = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}