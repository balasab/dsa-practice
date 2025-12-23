const findMinimumFeasibleRate = (nums, deadline) => {
    let left = 1, right = Math.max(...nums);
    let ans = right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let totalTime = 0;
        for (let num of nums) {
            totalTime += Math.ciel(num / mid);
            if (totalTime > deadline) break;
        }
        if (totalTime <= deadline) {
            ans = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1
        }
    }
    return ans;
}
findMinimumFeasibleRate([7, 15, 6, 3], 8) // 5
/*
    n items with ith value represent the time taken to complete the task
    8 <deadline> maximum time to be taken to complete the task
    Bs on answers because ans is between 1 to max of nums and we can eliminate
    either left or right at each turn. 

    Minimum Feasible Time with one conditions
    minimize divisor to keep sum under a threshold
*/