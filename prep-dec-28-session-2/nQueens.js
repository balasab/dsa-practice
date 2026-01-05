const nQueens = (n) => {
    const board = Array.from({ length: n}, () => new Array(n).fill('.'));
    const rows = new Set();
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    const res = [];
    const backTrack = (r) => {
        if (r === n) {
            res.push([...board.map(item=>item.join(','))]);
        }
        
        for (let c = 0; c < n; c++){
            if (rows.has(r) || cols.has(c) || diag1.has(r+c) || diag2.has(r - c)) continue;
            board[r][c] = 'Q';
            rows.add(r);
            cols.add(c);
            diag1.add(r + c);
            diag2.add(r - c);
            brackTrack(r + 1);
            rows.remove(r);
            cols.remove(c);
            diag1.remove(r + c);
            diag2.remove(r - c);
            board[r][c] = '.';
        }
        
    } 
    backTrack(0);
    return res;
}