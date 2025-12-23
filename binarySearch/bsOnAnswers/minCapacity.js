const findMinCapacityWithgivenTime = (nums, d) => {
    let left = Math.max(...nums), right = nums.reduce((a, b) => a + b,0);
    let ans = right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let noOfDays = 1;
        let curCapacity = 0;
        for (let num of nums) {
            curCapacity += num;
            if (curCapacity > mid) {
                curCapacity = num;
                noOfDays++;
            }
        }
        
        if (noOfDays > d) {
            left = mid + 1;
        }
        else {
            ans = mid;
            right = mid - 1
        }
    }
    return ans;
}
findMinCapacityWithGivenTime([5, 4, 5, 2, 3, 4, 5, 6], 5) //9