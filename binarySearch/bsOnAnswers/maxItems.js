const findMaxItemsWithKInserts = (nums, k) => {
    let left = 0;
    let right = 0;

    for (let i = 1; i < nums.length; i++) {
        right = Math.max(right, nums[i] - nums[i - 1]);
    }

    const canInsert = (dist) => {
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            count += Math.floor((nums[i] - nums[i - 1]) / dist);
        }
        return count;
    };

    while (right - left > 1e-6) {
        const mid = (left + right) / 2;

        if (canInsert(mid) > k) {
            left = mid;     // distance too small
        } else {
            right = mid;    // feasible
        }
    }
    return right;
};
findMaxItemsWithKInserts([4, 8, 9, 15], 3); // ≈ 2.5
/*
1e-5  // less precise, faster
1e-7  // more precise, slower
Max distance = 2.5000001
Max distance = 2.4999999
The loop would otherwise never terminate
left < right never occurs when smaller decimals
*/