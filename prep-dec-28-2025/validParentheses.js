const validParentheses = (str) => {
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    let stack = [];
    for (let s of str) {
        if (!map[s]) {
            let top = stack.pop();
            if (top != s) return false;
        } else {
            stack.push(map[s])
        }
    }
    return stack.length === 0;
}