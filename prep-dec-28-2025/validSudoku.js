const validSudoku = (board) => {
    const m = board.length, n = board[0].length;

    const row = Array.from({ length: m }, () => new Set());
    const cols = Array.from({ length: n }, () => new Set());
    const boxes = Array.from({ length: n }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
           const boxIdx = Math.floor(i / 3) * 3 + (j / 3);
           if (rows[i].has(board[i][j]) || 
                cols[j].has(board[i][j]) ||
                boxes[boxIdx].has(board[i][j])) {
                    return false;
                }
           row[i].add(board[i][j]);
           cols[j].add(board[i][j]);
           boxes[boxIdx].add(board[i][j]);
        }
    }
    return true;
}