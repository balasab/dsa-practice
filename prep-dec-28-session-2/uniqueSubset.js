const uniqueSubsets = (nums) => {
    const n = nums.length;
    const res = [];
    const backTrack = (idx, path) => {
        res.push([...path]);

        for (let i = idx; i < n; i++){
            path.push(nums[i]);
            backTrack(i+1, path);
            path.pop()
        }
        
    }
    backTrack(0, [])
    return res;
}