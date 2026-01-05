const uniquePaths = (grid) => {
    const m = grid.length, n = grid[0].length;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < m; i++){
        for ( let j = 1; j <= n; j++){
            dp[j] += dp[j-1];
        }
    }
    return dp[n];
}

const uniquePathsWithObstacles = (grid) => {
    const m = grid.length, n = grid[0].length;

    const dp = new Array(n).fill(0);

    dp[0] = grid[0][0] === '1' ? 1 : 0;

    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1'){
                dp[j] = 0;
            }else if (j > 0){
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
}