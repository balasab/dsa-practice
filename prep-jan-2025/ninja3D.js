const maxPathBothNinjas = (grid) => {
    const m = grid.length;
    if (grid.length === 0) return 0;
    const n = grid[0].length;
    let max = -Infinity;
    const traverse = (r, j1, j2, pathSum1, pathSum2) => {
        if (r === m - 1) return pathSum1 + pathSum2;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let nextI = j1 + i, nextJ = j2 + j;
                if (nextI < 0 || nextI >= n || nextJ < 0 || nextJ >= n) continue;
                let currPathSum1 = pathSum1 + grid[r][nextI];
                let currPathSum2 = pathSum2 + j1 === j2 ? 0 : grid[r][nextJ];
                max = Math.max(max, traverse(r + 1, nextI, nextJ, currPathSum1, currPathSum2))
            }
        }
    }
    traverse(0, 0, n - 1, grid[0][0], n === 1 ? 0 : grid[0][n - 1]);
    return max;
}
