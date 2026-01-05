const missingNumber = (nums) => {
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor ^= i + 1;
        xor ^= nums[i];
    }
    return xor;
}
// Alternative: Sum of N natural number n(n+1)/2 - sum of nums