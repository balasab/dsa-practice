const frogJumpWithKDistances = (heights, k) => {
    const n = heights.length;
    const dp = new Array(n).fill(0);
    
    for (let i = 1; i < n; i++) {
        let minEnergy = Infinity;
        for (let j = 1; j <= k && j <= i; j++) {
            minEnergy = Math.min(
                minEnergy, 
                dp[i - j] + Math.abs(heights[i] - heights[i - j])
            );
        }
        dp[i] = minEnergy;
    }
    return dp[n - 1];
}

// TC: O(nk) loop 1 -> heights loop 2 -> k
// SC: O(n) dp[] minengergy consumped at each step