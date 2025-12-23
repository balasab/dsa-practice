const findMinimumFeasibleTime = (nums, m, k) => {
    let left = Math.min(...nums), right = Math.max(...nums);
    let minFeasibleTime = right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let current = 0;
        let noOfSubsets = 0
        for (let num of nums) {
            let canInclude = num <= mid;
            if (canInclude) {
                current += 1;
                if (current === k) {
                    current = 0;
                    noOfSubsets++;
                    if (noOfSubsets === m) break;
                }
            }
            else {
                current = 0;
            }
        }
        if (noOfSubsets < m) {
            left = mid + 1;
        }
        else {
            minFeasibleTime = mid;
            right = mid - 1;
        }
    }
    return minFeasibleTime;
}
findMinimumFeasibleTime([7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3)
/*    
    nums represent the no of items and each item represent the time taken
    m represent the minimum contigous subarray required with k adjacent items
    An item can't be in the two subarray
    can include item when the minFeasibleTime is greater

    Minimum Feasible Time with two conditions
    
*/