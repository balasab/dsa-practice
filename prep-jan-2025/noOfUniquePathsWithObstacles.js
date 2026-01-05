const noOfUniquePathsWithObstacles = (grid) => {
    if (gird.length === 0) return 0;
    const m = grid.length, n = grid[0].length;

    const dp = new Array(n).fill(0);
    
    if (grid[0][0] === 1) return 0;
    dp[0] = 1;
    // dp[i] = dp[i - 1] + dp[j - 1]

    for (let i = 0; i < m; i++) {
       for (let j = 0; j < n; j++) {
            if(grid[i][j] === 1) dp[j] = 0;
            else dp[j] += dp[j - 1]; 
       }
    }
    return dp[n - 1];
}
// TC: O(m*n) SC: O(n)