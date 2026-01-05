const noOfUniquePaths = (m, n) => {
    const dp = new Array(n).fill(0);
    dp[0] = 1; 

    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        } 
    }

    return dp[n - 1];
}
// TC: O(m*n), SC: O(n)