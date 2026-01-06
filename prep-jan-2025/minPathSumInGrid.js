const minimumPathSumInGrid = (grid) => {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    const dp = new Array(n).fill(0);
    dp[0] = grid[0][0];
    for (let j = 1; j < n; j++) {
        dp[j] = grid[0][j] + dp[j - 1];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[j] = grid[i][j] + Math.min(dp[j], j > 0 ? dp[j - 1] : Infinity);
        }
    }
    return dp[n - 1];
}
// TC: O(m*n) SC: O(n)