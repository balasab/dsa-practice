const minPathSum = (grid) => {
    const m = grid.length, n = grid[0].length;
    let dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < m; i++) {
        dp[0] += grid[i][0];
        for (let j = 0; j < n; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }
    return dp[n-1];
}