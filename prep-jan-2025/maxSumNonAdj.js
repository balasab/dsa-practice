const maximumSumOfNonAdjacent = (arr) => {
    const n = arr.length;
    const dp = new Array(n).fill(0);
    dp[0] = arr[0];
    dp[1] = arr[1];
    dp[2] = arr[2] + arr[0];

    for (let i = 3; i < n; i++) {
        dp[i] = arr[i] + Math.max(dp[i - 2], dp[i - 3]);
    }

    return dp[n - 1];
}
// TC: O(n) SC: O(n)
const maximumSumOfNonAdjacentSpaceOptimized = (arr) => {
    const n = arr.length;
    
    let prev3 = arr[0];
    let prev2 = arr[1];
    let prev1 = arr[2] + prev3;

    for (let i = 3; i < n; i++) {
        let current = arr[i] + Math.max(prev2, prev3);
        prev3 = prev2;
        prev2 = prev1;
        prev1 = current
    }

    return prev1;
}
// TC: O(n) SC: O(1)