const findMedianOfGridWhereRowSorted = (matrix) => {
    const m = matrix.length, n = matrix[0].length;
    let low = Infinity, high = -Infinity;
    for (let i = 0; i < m; i++) {
        low = Math.min(low, matrix[i][0]);
        high = Math.max(high, matrix[i][n-1]);
    }
    const upperBound = (arr, target) => {
        let l = 0, r = arr.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if(arr[m] <= target){
                l = m + 1;
            }
            else{
                r = m;
            }
        }
        return l;
    }
    const desired = Math.floor((m * n + 1) / 2);
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        let count = 0;
        for (let i = 0; i < m; i++){
            count += upperBound(matrix[i], mid)
        }
        if (count < desired) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
/*
low = min of first elements
high = max of last elements
upperBound(row, x) → count of elements ≤ x
Finds the smallest value such that
number of elements ≤ value ≥ desired

This is exactly the lower-bound on answer pattern.
*/