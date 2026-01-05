const mergeIntervals = (intervals) => {
    intervals.sort(a, b => a[0] - b[0]);
    const res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++)  {
        const last = res[res.length - 1];
        const curr = intervals[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[l], curr[l]);
        } else {
            res.push(curr);
        }
    }
    return res;
}