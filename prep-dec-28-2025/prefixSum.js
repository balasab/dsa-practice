const prefixSum = (nums, target) => {
    const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - target)){
            count += sum - target;
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
const prefixSumOnlyPositives = (nums, target) => {
    let sum = 0, l = 0, count = 0;
 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while (l < nums.length && sum > target) {
            sum -= nums[l++];
        }
        if (sum === target) {
            count++;
        }
    }
    return count;
}