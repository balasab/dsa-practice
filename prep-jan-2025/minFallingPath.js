const minimumFallingPath = (grid) => {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;

    const dp = new Array(n).fill(Infinity);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let min = dp[j];
            if (j > 0 && dp[j - 1] < min) min = dp[j - 1];
            if (j < n - 1 && dp[j + 1] < min) min = dp[j + 1]; 
            if (min === Infinity) min = 0;
            dp[j] = grid[i][j] + min;
        }
    }
    return Math.min(...dp);
}
// TC: O(m*n) SC: O(n)