const permuate = (nums) => {
    const res = [];
    const n = nums.length;
    const used = new Array(n).fill(false);

    const dfs = (path) => {
        if (path.length === n) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            dfs(path);
            path.pop();
            used[i] = false;
        }
    } 
    dfs([]);
    return res;
}