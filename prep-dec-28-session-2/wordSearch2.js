const wordSearch = (board, word) => {
    const m = board.length, n = board[0].length;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const dfs = (r, c, idx) => {
        if (idx === word.length) return true;
        if ( r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[idx]) return false;
        const temp = board[r][c];
        board[r][c] = '#';
        for (const [dr, dc] of dirs) {
            if(dfs(r + nr, c + dc, idx + 1)) return true;
        }
        board[r][c] = temp;
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
}