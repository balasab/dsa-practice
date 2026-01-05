const frogJump = (heights) => {
    const n = heights.length;
    if (n <= 1) return 0; // no energy consumped
    let prev2 = 0; // dp[0]
    let prev1 = Math.abs(heights[1] - heights[0]); // dp[1]

    for (let i = 2; i < n; i++) {
        const curr = Math.min(
            prev1 + Math.abs(heights[i] - heights[i - 1]),
            prev2 + Math.abs(heights[i] - height[i - 2])
        )
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;


}