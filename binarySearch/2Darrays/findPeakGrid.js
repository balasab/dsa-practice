const findPeakGrid = (grid) => {
    const n = grid.length, m = grid[0].length;

    let left = 0, right = m - 1;

    while (left <= right) {
        const midCol = Math.floor((left + right) / 2);

        let maxRow = 0;

        for (let i = 1; i < n; i++) {
            if (grid[maxRow][midCol] < grid[i][midCol]) {
                maxRow = i;
            }
        }
        
        const leftVal  = midCol > 0 ? grid[maxRow][midCol - 1] : -Infinity;
        const rightVal = midCol < m - 1 ? grid[maxRow][midCol + 1] : -Infinity;

        if (grid[maxRow][midCol] > leftVal &&
            grid[maxRow][midCol] > rightVal) {
            return { r: maxRow, c: midCol };
        } 
        else if (leftVal > grid[maxRow][midCol]) {
            right = midCol - 1;
        } 
        else {
            left = midCol + 1;
        }
    }
}