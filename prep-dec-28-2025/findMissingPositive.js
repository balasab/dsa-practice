const findMissingPositive = (nums) => {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            const idx = nums[i] - 1;
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }

    for (let i = 1; i <= n; i++) {
        if (nums[nums[i] - 1] != nums[i]) return i;
    }
    return -1;
}