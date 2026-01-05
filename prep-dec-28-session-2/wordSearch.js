const wordSearch = (board, words) => {
    const m = board.length, n = board[0].length;
    const res = [];
    const node = new Map();
    for (let word of words) {
        let current = node;
        for (let w of words) {
            if(!current.has(w)) current.set(w, new Map());
            current = current.get(w);
        }
        current.set('isWord', true);
        current.set('word', word)
    }
    const dfs = (r, c, node) => {
        if (r < 0 || c < 0 || r >= m || c >= n || !node) {
            return;
        }

        const w = board[r][c];
        if(!node.has(w)) return;
        if(node.has('isWord') && node.get('isWord') === true) {
            res.push(word);
            node.set('isWord', false);
        }
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        board[r][c] = '#'
        for (let [dr, dc] of directions) {
            dfs(r + dr, c + dc, node.get(w));
        }
        board[r][c] = w;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j);
        }
    }
    return res;
}