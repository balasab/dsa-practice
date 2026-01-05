const longestIncresingSubSequence = (nums) => {
    const dp = [];

    for (const num of nums) {
        let l = 0; r = dp.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (dp[m] < num) l = m + 1;
            else r = m;
        }
        dp[l] = num;
    }
    return dp.length;
}