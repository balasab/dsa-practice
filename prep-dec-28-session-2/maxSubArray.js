const maxSumArray = (nums) => {
    let maxSoFar = nums[0];
    let curr = 0;
    for (let n of nums) {
        curr = Math.max(n, curr + n);
        maxSoFar = Math.max(maxSoFar, curr);
    }
    return maxSoFar;
}