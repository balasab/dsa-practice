const canPlace = (dist, k, nums)=>{
    let count = 1;
    let prev = nums[0];
    for(let i = 1; i < nums.length;i++){
        if(nums[i] - prev >= dist){
            cows++;
            prev = nums[i];
            if(count === k) return true;
        }
    }   
    return false;
}
const findMaxDistance = (nums, k) => {
    nums.sort((a, b) => a - b);

    let left = 1, right = nums[nums.length - 1] - nums[0];
    let ans = 0;
    while (left <= right){
        const mid = Math.floor((left + right)/2);
        if(canPlace(mid)){
            ans = mid;
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return ans;

}
findMaxDistance([1, 2, 4, 8, 9], 3); // 3
// aggressiveCows(stalls, cows)