const fibNumber = (n) => {
    if (n <= 1) return n;
    let prev2 = 0;
    let prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let current = prev2 + prev1;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}