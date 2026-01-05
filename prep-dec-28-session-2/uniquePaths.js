const uniquePaths = (n) => {
    let dp = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n-1];
}