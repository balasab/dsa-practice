const findMaxOnes = (matrix) => {
    const m = matrix.length, n = matrix[0].length;
    let maxOnes = 0, maxRow = -1;
    for (let i = 0; i < m; i++) {
        let left = 0, right = n - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (matrix[i][mid] === 1) {
                firstOne = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const onesCount = n - firstOne;
        if (onesCount > maxOnes) {
            maxOnes = onesCount;
            maxRow = i;
        }
    }
    return maxRow;
}