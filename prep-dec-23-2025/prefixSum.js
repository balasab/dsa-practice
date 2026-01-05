const prefixSum = (nums, target) => {
    const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - target)) {
            count += map.get(sum - target);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}