const longestConsecutiveSequence = (nums)  => {
    const numsSet = new Set(nums);
    let count = 0;
    for(let num of nums) {
        if (!numsSet.has(num - 1)) {
            while (numsSet.has(num + 1)) {
                count++;
            }
        }
    }
    return count;
}