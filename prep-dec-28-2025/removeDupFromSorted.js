const removeDuplicatedFromSortedArray = (nums) => {
    let last = 0;

    for(let i = 1; i < nums.length; i++){
        if (nums[i] != nums[last]) {
            nums[last + 1] = nums[i];
            last++;
        }
    }
    return nums;
}