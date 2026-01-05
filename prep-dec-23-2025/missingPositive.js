const findMissingPositive = (nums) => {
    const n = nums.length;

    for (let i = 0; i < n; i++){
        // swap until we place the x at x-1 index
        while (
            nums[i] > 0 && 
            nums[i] <= n && 
            nums[i] !== nums[nums[i] - 1]
        ) {
            [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
        }
    }
    for (let i = 0; i < n; i++) {
        if (i + 1 != nums[i]) {
            return i + 1;
        }
    }
    return n + 1;
}