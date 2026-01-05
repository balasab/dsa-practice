const maximumPathSum = (grid) => {
    const m = grid.length, n = grid[0].length;

    const dp = new Array(n).fill(-Infinity);
    dp[0] = grid[0][0];
    // for first row;
    for (let i = 1; i < n; i++){
        dp[i] = dp[i] + grid[0][j]
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[j] = Math.max(dp[j] , dp[j-1]) + grid[i][j];
        }
    }
    return dp[n-1];
}