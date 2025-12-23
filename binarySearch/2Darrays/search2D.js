const searchSorted2D = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const r = Math.floor(mid / n);
        const c = mid % n;

        if(matrix[r][c] === target) return true;
        else if (matrix[r][c] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}