const threeSum = (nums, target) => {
    nums.sort();
    const n = nums.length; 
    
    for (let i = 0; i < n - 2; i++) {
        let k = n - 1;
        let j = i + 1;
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];
            if (total === target) {
                return [i, j , k]
            }
            else if (total > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return [];
}