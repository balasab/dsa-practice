const findCoordinates = (grid) => {
    const m = grid.length, n = grid[0].length;
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const bfs = (starts) => {
        const seen = Array.from({ length: m }, () => new Array(n).fill(false));
        const queue = [];
        for (const [r, c] of starts) {
            seen[r][c] = true;
            queue.push([r, c]);
        }
        while (queue.length) {
            const [r, c] = queue.shift();
            for (let [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                while (nr >= 0 && nr < m && nc >=0 && nc < n && grid[nr][nc] >= grid[r][c]) {
                    seen[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        return seen;
    }
    const pacificStarts = [];
    const atlanticStarts = [];
    for (let i = 0; i < m; i++) {
        pacificStarts.push([i, 0]);
        atlanticStarts.push([i, n - 1]);
    }
    for(let i = 0; i < n; i++) {
        pacificStarts.push([0, j]);
        atlanticStart.push([m - 1, j]);
    }
    const pac = bfs(pacificStarts);
    const atl = bfs(atlanticStarts);
    const res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pac[i][j] && atl[i][j]) res.push([i, j]);
        }
    }
    return res;
}