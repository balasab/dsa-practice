const numberOfIslands = (grid) => {
    const m = grid.length, n = grid[0].length;
    let count = 0;
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= m || c >= n) return;
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        for (let [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[r][c] === 1) {
                dfs(i, j)
                count++;
            } 
        }
    }
    return count;
}