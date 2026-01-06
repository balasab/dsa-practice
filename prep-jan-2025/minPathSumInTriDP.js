const minPathSumTriGrid = (grid) => {
    const m = grid.length;
    if (grid.length === 0) return 0;

    const dp = new Array(m).fill(null);
    dp[0] = grid[0][0];

    for (let i = 1; i < m; i++) {
        const currDp = [...dp];
        for (let j = 0; j <= i; j++) {
            dp[j] = grid[i][j] + Math.min(
                j === 0 ? dp[j] : (currDp[j] !== null ? currDp[j] : Infinity), // prev row
                j > 0 && currDp[j - 1] !== null ? currDp[j - 1] : Infinity // prev row and col - 1
            )
        }
    }
    return Math.min(...dp);
}
// TC: O(nsquare) SC: O(n)