const houseRobber = (nums) => {
    const n = nums.length;
    if (n === 0) return 0;
    let prev2 = 0;
    let prev1 = nums[0];

    for (let i = 1; i < n; i++) {
        [prev2, prev1] = [prev1, Math.max((nums[i] + prev2), prev1)];
    }

    return prev1;
}
// TC: O(n) , SC: O(1)