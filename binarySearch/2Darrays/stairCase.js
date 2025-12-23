const searchTargetinSortedRowAndColumns = (matrix, target) => {
    const n = matrix.length, m = matrix[0].length;

    let r = 0, c = m - 1;

    while (r < n && c >= 0) {
        let value = matrix[r][c];

        if (value === target) return { r, c };
        else if (value > target) c--; // move left if target is smaller
        else r++; // move down if target is larger
    }
    return {};
}