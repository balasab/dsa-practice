const findKPositive = (nums, k) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let missing = nums[mid] - (mid + 1);
        if (missing > k) {
            left = mid + 1;
        }
        else {
            right = mid - 1
        }
    }
    return left + k;
}
findKPositive([2, 3, 4, 7, 11], 5) // 9