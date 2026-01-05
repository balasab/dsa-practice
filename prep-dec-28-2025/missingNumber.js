const missingNumber = (nums) => {
    let xor = 0;

    for(let i = 0; i < nums.length; i++) {
        xor ^= nums[i] ^ (i + 1);
    }
    return xor;
}