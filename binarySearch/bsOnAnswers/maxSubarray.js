const splitArrayLargestSum = (nums, k) => {
    if(k > nums.length) return -1;
    let left = Math.max(...nums), right = nums.reduce((a, b) => a + b, 0);
    let ans = right;
    const canAllocate = (sum) => {
        let currentSum = 0;
        let count = 1;
        for(let num of nums){
            currentSum += num;
            if(currentSum > sum) {
                count++;
                currentSum = num;
            }
        }
        return count <= k;
    }
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(canAllocate(mid)){
            ans = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return ans;
}
splitArrayLargestSum([7, 2, 5, 10, 8], 2); // 18
// Allocate Minimum Number of Pages
// Painter's Partition